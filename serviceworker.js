/******************
 * SERVICE WORKER *
 ******************/
var cacheName = 'cryptolatr-cache';
var filesToCache = [
  'index.html',
  'css/style.css',
  'js/use_webworker.js',
  'js/use_serviceworker.js',
  'js/webworker.js',
  'js/main.js'
];

self.addEventListener("install", event => {
  console.log("Service Worker Cryptolatr installing.");
  event.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll(filesToCache);
      })
  );
});

self.addEventListener("activate", event => {
  console.log("Service Worker Cryptolatr activating.");
});

self.addEventListener('fetch', event => {
  console.log("Service Worker Cryptolatr fetching.");
  event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
  );
});

