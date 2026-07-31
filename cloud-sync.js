(() => {
  "use strict";

  const CODE_BYTES = 16;
  const CODE_PATTERN = /^[A-F0-9]{32}$/;
  const ENCRYPTION_VERSION = 1;
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  class CloudSyncError extends Error {
    constructor(message, status = 0, code = "") {
      super(message);
      this.name = "CloudSyncError";
      this.status = status;
      this.code = code;
    }
  }

  function normalizeCode(value) {
    const code = String(value || "").toUpperCase().replace(/[^A-F0-9]/g, "");
    if (!CODE_PATTERN.test(code)) {
      throw new CloudSyncError("同步码应为 32 位字母和数字。", 400, "invalid_code");
    }
    return code;
  }

  function formatCode(value) {
    const code = normalizeCode(value);
    return code.match(/.{1,8}/g).join("-");
  }

  function generateCode() {
    const bytes = new Uint8Array(CODE_BYTES);
    crypto.getRandomValues(bytes);
    const code = Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("").toUpperCase();
    return formatCode(code);
  }

  async function getCredentials(value) {
    const code = normalizeCode(value);
    const [syncId, authToken] = await Promise.all([
      sha256Hex(`vocab-trainer-sync-id-v1:${code}`),
      sha256Hex(`vocab-trainer-sync-auth-v1:${code}`)
    ]);
    return { code, syncId, authToken };
  }

  async function encryptSnapshot(snapshot, value) {
    const code = normalizeCode(value);
    const key = await deriveEncryptionKey(code);
    const iv = new Uint8Array(12);
    crypto.getRandomValues(iv);
    const plaintext = encoder.encode(JSON.stringify(snapshot));
    const encrypted = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, plaintext);
    return {
      version: ENCRYPTION_VERSION,
      algorithm: "AES-GCM",
      iv: bytesToBase64Url(iv),
      data: bytesToBase64Url(new Uint8Array(encrypted))
    };
  }

  async function decryptSnapshot(payload, value) {
    if (
      !payload ||
      payload.version !== ENCRYPTION_VERSION ||
      payload.algorithm !== "AES-GCM" ||
      typeof payload.iv !== "string" ||
      typeof payload.data !== "string"
    ) {
      throw new CloudSyncError("云端进度格式无效。", 422, "invalid_payload");
    }

    try {
      const code = normalizeCode(value);
      const key = await deriveEncryptionKey(code);
      const iv = base64UrlToBytes(payload.iv);
      const encrypted = base64UrlToBytes(payload.data);
      const plaintext = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, encrypted);
      return JSON.parse(decoder.decode(plaintext));
    } catch (error) {
      if (error instanceof CloudSyncError) throw error;
      throw new CloudSyncError("无法解密云端进度，请检查同步码。", 403, "decrypt_failed");
    }
  }

  async function pull(endpoint, value) {
    const { code, syncId, authToken } = await getCredentials(value);
    const result = await postJson(endpoint, "/sync/pull", { syncId, authToken });
    if (!result.exists) {
      return { exists: false, revision: 0, updatedAt: null, snapshot: null };
    }
    const snapshot = await decryptSnapshot(result.payload, code);
    return {
      exists: true,
      revision: normalizeRevision(result.revision),
      updatedAt: Number(result.updatedAt) || null,
      snapshot
    };
  }

  async function push(endpoint, value, baseRevision, snapshot) {
    const { code, syncId, authToken } = await getCredentials(value);
    const payload = await encryptSnapshot(snapshot, code);
    const result = await postJson(endpoint, "/sync/push", {
      syncId,
      authToken,
      baseRevision: normalizeRevision(baseRevision),
      payload
    });
    return {
      revision: normalizeRevision(result.revision),
      updatedAt: Number(result.updatedAt) || Date.now()
    };
  }

  async function postJson(endpoint, path, body) {
    const baseUrl = String(endpoint || "").trim().replace(/\/+$/, "");
    if (!/^https:\/\//i.test(baseUrl) && !/^http:\/\/localhost(?::\d+)?$/i.test(baseUrl)) {
      throw new CloudSyncError("同步后端尚未配置。", 503, "missing_endpoint");
    }

    let response;
    try {
      response = await fetch(`${baseUrl}${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
    } catch {
      throw new CloudSyncError("无法连接同步服务，请检查网络。", 0, "network_error");
    }

    const result = await readJson(response);
    if (!response.ok) {
      throw new CloudSyncError(result.message || "同步失败，请稍后再试。", response.status, result.code || "request_failed");
    }
    return result;
  }

  async function deriveEncryptionKey(code) {
    const digest = await crypto.subtle.digest("SHA-256", encoder.encode(`vocab-trainer-sync-data-v1:${code}`));
    return crypto.subtle.importKey("raw", digest, { name: "AES-GCM" }, false, ["encrypt", "decrypt"]);
  }

  async function sha256Hex(value) {
    const digest = new Uint8Array(await crypto.subtle.digest("SHA-256", encoder.encode(value)));
    return Array.from(digest, (byte) => byte.toString(16).padStart(2, "0")).join("");
  }

  function bytesToBase64Url(bytes) {
    let binary = "";
    for (let index = 0; index < bytes.length; index += 0x8000) {
      binary += String.fromCharCode(...bytes.subarray(index, index + 0x8000));
    }
    return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
  }

  function base64UrlToBytes(value) {
    const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64 + "=".repeat((4 - (base64.length % 4)) % 4);
    const binary = atob(padded);
    return Uint8Array.from(binary, (character) => character.charCodeAt(0));
  }

  function normalizeRevision(value) {
    const revision = Number(value);
    return Number.isSafeInteger(revision) && revision >= 0 ? revision : 0;
  }

  async function readJson(response) {
    try {
      return await response.json();
    } catch {
      return {};
    }
  }

  window.VocabCloudSync = Object.freeze({
    CloudSyncError,
    normalizeCode,
    formatCode,
    generateCode,
    encryptSnapshot,
    decryptSnapshot,
    pull,
    push
  });
})();
