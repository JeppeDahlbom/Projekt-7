const CACHE_NAME = "projekt7-cache-v1";

// Alle filer der skal kunne bruges offline
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/404.html",
  "/manifest.json",
  "/Images/Icons/AppLogo.png",
  "/Javascript/firebase.js"
  // Du kan tilføje flere som:
  // "/CSS/styles.css",
  // "/Videos/intro.mp4"
];

// Installer service worker og cache filer
self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Server fra cache når det er muligt
self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((response) => {
      return response || fetch(evt.request);
    })
  );
});
