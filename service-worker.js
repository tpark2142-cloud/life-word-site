self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('lifemoment-static-v65').then(cache => cache.addAll([
      './',
      './index.html',
      './devotion.html',
      './prayer.html',
      './comfort.html',
      './manifest.json',
      './assets/css/app.css?v=20260606f',
      './assets/js/app.js?v=20260606h',
      './assets/js/lang.js?v=20260604a',
      './assets/js/pwa.js?v=20260606b',
      './assets/js/data.js?v=20260602a',
      './assets/js/ai-assistant.js',
      './assets/img/app-icon.png'
    ])).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys
        .filter(key => key !== 'lifemoment-static-v65')
        .map(key => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') {
    return;
  }
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) {
        return cached;
      }
      return fetch(event.request).then(response => {
        const copy = response.clone();
        caches.open('lifemoment-static-v55').then(cache => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
