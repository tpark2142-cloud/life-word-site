self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('lifemoment-static-v37').then(cache => cache.addAll([
      './',
      './index.html',
      './devotion.html',
      './prayer.html',
      './comfort.html',
      './manifest.json',
      './assets/css/app.css?v=20260605a',
      './assets/js/app.js?v=20260605d',
      './assets/js/lang.js?v=20260604a',
      './assets/js/data.js?v=20260602a',
      './assets/js/ai-assistant.js',
      './assets/img/app-icon.png',
      './assets/img/gallery/thumbnails/20230716_171655-thumb.webp',
      './assets/img/gallery/thumbnails/DSC03624-thumb.webp',
      './assets/img/gallery/thumbnails/IMG_1462-thumb.webp',
      './assets/img/gallery/thumbnails/IMG_8523-thumb.webp',
      './assets/img/gallery/regular/20230716_171655-regular.webp',
      './assets/img/gallery/regular/DSC03624-regular.webp',
      './assets/img/gallery/regular/IMG_1462-regular.webp',
      './assets/img/gallery/regular/IMG_8523-regular.webp'
    ])).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys
        .filter(key => key !== 'lifemoment-static-v37')
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
        caches.open('lifemoment-static-v37').then(cache => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
