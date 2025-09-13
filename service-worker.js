const CACHE_NAME = "ayekta-cache-v5-19";
const urlsToCache = [
  "index.html",
  "manifest.json",
  "logo-192.png",
  "logo-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request).then((r) => r || fetch(event.request)));
});
