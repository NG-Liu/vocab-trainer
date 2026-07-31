const GITHUB_API = "https://api.github.com";
const MAX_FILE_SIZE = 1024 * 1024;
const MAX_SYNC_REQUEST_SIZE = 2.5 * 1024 * 1024;
const MAX_SYNC_PAYLOAD_SIZE = 2 * 1024 * 1024;
const SYNC_ID_PATTERN = /^[a-f0-9]{64}$/;
const AUTH_TOKEN_PATTERN = /^[a-f0-9]{64}$/;

export default {
  async fetch(request, env) {
    const headers = corsHeaders(env);
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers });
    }

    const url = new URL(request.url);
    if (request.method === "POST" && url.pathname === "/sync/pull") {
      return handleSyncPull(request, env, headers);
    }
    if (request.method === "POST" && url.pathname === "/sync/push") {
      return handleSyncPush(request, env, headers);
    }
    if (url.pathname !== "/") {
      return json({ message: "Not found" }, 404, headers);
    }
    if (request.method !== "POST") return json({ message: "Method not allowed" }, 405, headers);

    return handleVocabularySubmission(request, env, headers);
  }
};

async function handleVocabularySubmission(request, env, headers) {
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
    console.error("Submission failed", error);
    return json(
      {
        message: "提交失败，请稍后再试。",
        detail: error instanceof Error ? error.message : String(error)
      },
      500,
      headers
    );
  }
}

async function handleSyncPull(request, env, headers) {
  if (!env.PROGRESS_SYNC) return json({ message: "同步存储尚未配置。", code: "storage_missing" }, 503, headers);
  const body = await readSyncRequest(request, headers);
  if (body instanceof Response) return body;
  const credentials = validateSyncCredentials(body, headers);
  if (credentials instanceof Response) return credentials;

  try {
    const stored = await readSyncRecord(env, credentials.syncId);
    if (!stored) return json({ exists: false, revision: 0 }, 200, headers);
    if (!(await verifyAuthToken(credentials.authToken, stored.authHash))) {
      return json({ message: "同步码无效。", code: "auth_failed" }, 403, headers);
    }
    return json(
      {
        exists: true,
        revision: stored.revision,
        updatedAt: stored.updatedAt,
        payload: stored.payload
      },
      200,
      headers
    );
  } catch (error) {
    console.error("Sync pull failed", error);
    return json({ message: "读取云端进度失败，请稍后再试。", code: "sync_read_failed" }, 500, headers);
  }
}

async function handleSyncPush(request, env, headers) {
  if (!env.PROGRESS_SYNC) return json({ message: "同步存储尚未配置。", code: "storage_missing" }, 503, headers);
  const body = await readSyncRequest(request, headers);
  if (body instanceof Response) return body;
  const credentials = validateSyncCredentials(body, headers);
  if (credentials instanceof Response) return credentials;
  const baseRevision = Number(body.baseRevision);
  if (!Number.isSafeInteger(baseRevision) || baseRevision < 0) {
    return json({ message: "同步版本无效。", code: "invalid_revision" }, 400, headers);
  }
  if (!isEncryptedPayload(body.payload)) {
    return json({ message: "加密进度格式无效。", code: "invalid_payload" }, 400, headers);
  }
  if (JSON.stringify(body.payload).length > MAX_SYNC_PAYLOAD_SIZE) {
    return json({ message: "同步进度过大。", code: "payload_too_large" }, 413, headers);
  }

  try {
    const stored = await readSyncRecord(env, credentials.syncId);
    if (stored && !(await verifyAuthToken(credentials.authToken, stored.authHash))) {
      return json({ message: "同步码无效。", code: "auth_failed" }, 403, headers);
    }
    const currentRevision = stored?.revision || 0;
    if (baseRevision !== currentRevision) {
      return json(
        {
          message: "云端进度已更新，请重新同步。",
          code: "revision_conflict",
          revision: currentRevision
        },
        409,
        headers
      );
    }

    const updatedAt = Date.now();
    const record = {
      authHash: stored?.authHash || (await sha256Hex(credentials.authToken)),
      revision: currentRevision + 1,
      updatedAt,
      payload: body.payload
    };
    await env.PROGRESS_SYNC.put(getSyncStorageKey(credentials.syncId), JSON.stringify(record));
    return json({ revision: record.revision, updatedAt }, 200, headers);
  } catch (error) {
    console.error("Sync push failed", error);
    return json({ message: "保存云端进度失败，请稍后再试。", code: "sync_write_failed" }, 500, headers);
  }
}

async function readSyncRequest(request, headers) {
  const contentLength = Number(request.headers.get("Content-Length")) || 0;
  if (contentLength > MAX_SYNC_REQUEST_SIZE) {
    return json({ message: "同步请求过大。", code: "request_too_large" }, 413, headers);
  }
  try {
    return await request.json();
  } catch {
    return json({ message: "请求格式无效。", code: "invalid_json" }, 400, headers);
  }
}

function validateSyncCredentials(body, headers) {
  const syncId = String(body?.syncId || "");
  const authToken = String(body?.authToken || "");
  if (!SYNC_ID_PATTERN.test(syncId) || !AUTH_TOKEN_PATTERN.test(authToken)) {
    return json({ message: "同步凭据无效。", code: "invalid_credentials" }, 400, headers);
  }
  return { syncId, authToken };
}

async function readSyncRecord(env, syncId) {
  const value = await env.PROGRESS_SYNC.get(getSyncStorageKey(syncId));
  if (!value) return null;
  const record = JSON.parse(value);
  if (
    !record ||
    typeof record.authHash !== "string" ||
    !Number.isSafeInteger(record.revision) ||
    record.revision < 1 ||
    !isEncryptedPayload(record.payload)
  ) {
    throw new Error("Stored sync record is invalid.");
  }
  return record;
}

function getSyncStorageKey(syncId) {
  return `progress:${syncId}`;
}

function isEncryptedPayload(payload) {
  return Boolean(
    payload &&
      payload.version === 1 &&
      payload.algorithm === "AES-GCM" &&
      typeof payload.iv === "string" &&
      payload.iv.length >= 12 &&
      payload.iv.length <= 64 &&
      typeof payload.data === "string" &&
      payload.data.length > 0
  );
}

async function verifyAuthToken(authToken, expectedHash) {
  const actualHash = await sha256Hex(authToken);
  if (actualHash.length !== expectedHash.length) return false;
  let difference = 0;
  for (let index = 0; index < actualHash.length; index += 1) {
    difference |= actualHash.charCodeAt(index) ^ expectedHash.charCodeAt(index);
  }
  return difference === 0;
}

async function sha256Hex(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = new Uint8Array(await crypto.subtle.digest("SHA-256", bytes));
  return Array.from(digest, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

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
      "Content-Type": "application/json",
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
    const errorText = await response.text();
    throw new Error(`GitHub write failed: ${response.status} ${errorText}`);
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
