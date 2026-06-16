const GITHUB_API = "https://api.github.com";
const MAX_FILE_SIZE = 1024 * 1024;

export default {
  async fetch(request, env) {
    const headers = corsHeaders(env);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers });
    }

    if (request.method !== "POST") {
      return json({ message: "Method not allowed" }, 405, headers);
    }

    try {
      const form = await request.formData();
      const bookName = cleanText(form.get("bookName"), 80);
      const email = cleanText(form.get("email"), 120);
      const file = form.get("file");

      if (!bookName || !email || !isEmail(email)) {
        return json({ message: "请填写词本名称和有效邮箱。" }, 400, headers);
      }
      if (!(file instanceof File) || !/\.txt$/i.test(file.name)) {
        return json({ message: "这里只接收 .txt 文件。" }, 400, headers);
      }
      if (file.size <= 0 || file.size > MAX_FILE_SIZE) {
        return json({ message: "文件必须大于 0 且不超过 1 MB。" }, 400, headers);
      }

      const id = makeSubmissionId();
      const safeFileName = sanitizeFileName(file.name);
      const folder = `submissions/pending/${id}`;
      const metadata = {
        id,
        bookName,
        email,
        originalFileName: safeFileName,
        size: file.size,
        contentType: file.type || "text/plain",
        submittedAt: new Date().toISOString(),
        status: "pending_review",
        note: "Raw txt only. Do not process before owner review."
      };

      const bytes = new Uint8Array(await file.arrayBuffer());
      await putFile(env, `${folder}/source.txt`, bytesToBase64(bytes), `Add vocabulary submission ${id}`);
      await putFile(env, `${folder}/metadata.json`, toBase64(JSON.stringify(metadata, null, 2)), `Add vocabulary submission metadata ${id}`);

      return json({ id, message: "提交成功，等待审核。" }, 201, headers);
    } catch (error) {
      return json({ message: "提交失败，请稍后再试。" }, 500, headers);
    }
  }
};

async function putFile(env, path, content, message) {
  const owner = env.GITHUB_OWNER;
  const repo = env.GITHUB_REPO;
  const branch = env.GITHUB_BRANCH || "main";
  const token = env.GITHUB_TOKEN;

  if (!owner || !repo || !token) {
    throw new Error("GitHub config is missing.");
  }

  const response = await fetch(`${GITHUB_API}/repos/${owner}/${repo}/contents/${encodeURIComponentPath(path)}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "User-Agent": "vocab-submission-worker",
      "X-GitHub-Api-Version": "2022-11-28"
    },
    body: JSON.stringify({
      message,
      content,
      branch
    })
  });

  if (!response.ok) {
    throw new Error(`GitHub write failed: ${response.status}`);
  }
}

function corsHeaders(env) {
  return {
    "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN || "https://ng-liu.github.io",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json; charset=utf-8"
  };
}

function json(body, status, headers) {
  return new Response(JSON.stringify(body), { status, headers });
}

function cleanText(value, limit) {
  return String(value || "").trim().replace(/\s+/g, " ").slice(0, limit);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function makeSubmissionId() {
  const date = new Date().toISOString().slice(0, 10);
  const random = crypto.randomUUID().slice(0, 8);
  return `${date}-${random}`;
}

function sanitizeFileName(name) {
  return String(name || "source.txt").replace(/[^\w.\-]+/g, "_").slice(0, 120) || "source.txt";
}

function toBase64(text) {
  const bytes = new TextEncoder().encode(text);
  return bytesToBase64(bytes);
}

function bytesToBase64(bytes) {
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

function encodeURIComponentPath(path) {
  return path.split("/").map(encodeURIComponent).join("/");
}
