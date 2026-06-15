self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('lifemoment-static-v100').then(cache => cache.addAll([
      './',
      './index.html',
      './robots.txt',
      './sitemap.xml',
      './open-gemini.html',
      './open-grok.html',
      './devotion.html',
      './prayer.html',
      './comfort.html',
      './bible-verses-for-anxiety.html',
      './bible-verses-for-grief.html',
      './bible-verses-for-healing.html',
      './prayers-for-healing.html',
      './manifest.json',
      './assets/css/app.css?v=20260615b',
      './assets/js/app.js?v=20260615a',
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
        .filter(key => key !== 'lifemoment-static-v100')
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
        caches.open('lifemoment-static-v100').then(cache => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match('./index.html'));
    })
  );
});



