self.addEventListener('install', (e) => {
  console.log('[BusMitra Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
  // Network first strategy
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
