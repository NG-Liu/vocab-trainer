const CACHE_NAME = "word-trainer-v147";
const APP_SHELL = [
  "./",
  "./index.html",
  "./style.css?v=147",
  "./cloud-sync.js?v=147",
  "./core-book-data.js?v=147",
  "./cet4-book-data.js?v=147",
  "./cet6-book-data.js?v=147",
  "./microelectronics-book-data.js?v=147",
  "./politics-book-data.js?v=147",
  "./app.js?v=147",
  "./submission-config.js?v=147",
  "./manifest.webmanifest?v=147",
  "./icon.svg?v=147",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL.map((url) => new Request(url, { cache: "reload" }))))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

// v144：页面在「回到前台」时会 postMessage 让等待中的 SW 立即接管，
// 否则手机后台挂着的旧页面要等到全部关闭才换新版。
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  const isAppAsset =
    url.origin === self.location.origin &&
    (url.pathname.endsWith("/") ||
      url.pathname.endsWith("/index.html") ||
      url.pathname.endsWith("/app.js") ||
      url.pathname.endsWith("/cloud-sync.js") ||
      url.pathname.endsWith("/core-book-data.js") ||
      url.pathname.endsWith("/cet4-book-data.js") ||
      url.pathname.endsWith("/cet6-book-data.js") ||
      url.pathname.endsWith("/microelectronics-book-data.js") ||
      url.pathname.endsWith("/politics-book-data.js") ||
      url.pathname.endsWith("/submission-config.js") ||
      url.pathname.endsWith("/style.css") ||
      url.pathname.endsWith("/manifest.webmanifest") ||
      url.pathname.endsWith("/icon.svg") ||
      url.pathname.includes("/icons/") ||
      url.pathname.endsWith("/sw.js"));

  if (url.hostname === "cdn.jsdelivr.net") {
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
    return;
  }

  if (isAppAsset) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request).then((cached) => cached || caches.match("./index.html")))
    );
    return;
  }

  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
