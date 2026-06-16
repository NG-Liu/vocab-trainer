# 共建词本提交后端

这个方案让 GitHub Pages 前端把用户上传的 `.txt` 原始文件提交到一个后端接口，后端再把文件保存进 GitHub 仓库的待审核目录。前端和本地浏览器不读取、不解析 txt 内容。

## 保存位置

每次提交会写入：

```text
submissions/pending/2026-06-16-xxxxxxxx/
  source.txt
  metadata.json
```

`source.txt` 是用户上传的原始 txt 文件。`metadata.json` 只记录词本名称、邮箱、文件名、大小和提交时间，方便审核。

## 部署 Cloudflare Worker

1. 在 Cloudflare Workers 创建一个新 Worker。
2. 把 `backend/cloudflare-worker.js` 的内容粘贴进去。
3. 在 Worker 的环境变量中设置：

```text
GITHUB_OWNER=NG-Liu
GITHUB_REPO=vocab-trainer
GITHUB_BRANCH=main
ALLOWED_ORIGIN=https://ng-liu.github.io
```

4. 在 GitHub 创建一个 fine-grained personal access token，只给 `NG-Liu/vocab-trainer` 仓库 Contents: Read and write 权限。
5. 在 Worker 里把这个 token 添加为 Secret：

```text
GITHUB_TOKEN=你的 token
```

6. 部署 Worker，复制它的在线地址，比如：

```text
https://vocab-submission.your-name.workers.dev
```

7. 修改 `submission-config.js`：

```js
window.VOCAB_SUBMISSION_ENDPOINT = "https://vocab-submission.your-name.workers.dev";
```

8. 提交并推送到 GitHub Pages。

## 审核流程

用户提交后，仓库会多出 `submissions/pending/...` 目录。你审核 `source.txt` 后，再决定是否整理成正式词本。正式词本的创建不由用户提交自动触发。
