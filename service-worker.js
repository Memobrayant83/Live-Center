const CACHE_NAME = "live-center-v1";

const APP_FILES = [
  "/Live-Center/",
  "/Live-Center/index.html",
  "/Live-Center/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_FILES))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request)
      .catch(() => caches.match(event.request))
  );
});
