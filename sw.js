// Service Worker Minimalis biar syarat PWA terpenuhi
self.addEventListener('install', (event) => {
  console.log('SW: Install Event');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('SW: Activate Event');
});

// Wajib ada fetch event biar Chrome nganggep ini PWA valid
self.addEventListener('fetch', (event) => {
  // Biarkan request lewat secara normal
  event.respondWith(fetch(event.request));
});
