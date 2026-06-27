const CACHE_NAME = "word-trainer-v44";
const APP_SHELL = [
  "./",
  "./index.html",
  "./style.css?v=44",
  "./core-book-data.js?v=44",
  "./cet4-book-data.js?v=44",
  "./cet6-book-data.js?v=44",
  "./app.js?v=44",
  "./submission-config.js?v=44",
  "./manifest.webmanifest?v=44",
  "./icon.svg?v=44"
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

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  const isAppAsset =
    url.origin === self.location.origin &&
    (url.pathname.endsWith("/") ||
      url.pathname.endsWith("/index.html") ||
      url.pathname.endsWith("/app.js") ||
      url.pathname.endsWith("/core-book-data.js") ||
      url.pathname.endsWith("/cet4-book-data.js") ||
      url.pathname.endsWith("/cet6-book-data.js") ||
      url.pathname.endsWith("/submission-config.js") ||
      url.pathname.endsWith("/style.css") ||
      url.pathname.endsWith("/manifest.webmanifest") ||
      url.pathname.endsWith("/icon.svg") ||
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
