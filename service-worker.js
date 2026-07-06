self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('lifemoment-static-v120').then(cache => cache.addAll([
      './',
      './index.html',
      './robots.txt',
      './sitemap.xml',
      './open-gemini.html',
      './open-grok.html',
      './devotion.html',
      './prayer.html',
      './comfort.html',
      './topics.html',
      './gallery.html',
      './ai-playground.html',
      './missions.html',
      './living-word.html',
      './guestbook.html',
      './bible-verses-for-anxiety.html',
      './bible-verses-for-grief.html',
      './bible-verses-for-healing.html',
      './prayers-for-healing.html',
      './bible-verses-for-loneliness.html',
      './bible-verses-for-fear.html',
      './bible-verses-for-sleep.html',
      './prayer-before-surgery.html',
      './prayer-for-sick-family.html',
      './en/bible-verses-for-anxiety.html',
      './en/bible-verses-for-grief.html',
      './en/bible-verses-for-healing.html',
      './en/prayers-for-healing.html',
      './en/bible-verses-for-loneliness.html',
      './en/bible-verses-for-fear.html',
      './en/bible-verses-for-sleep.html',
      './en/prayer-before-surgery.html',
      './en/prayer-for-sick-family.html',
      './ko/bible-verses-for-anxiety.html',
      './ko/bible-verses-for-grief.html',
      './ko/bible-verses-for-healing.html',
      './ko/prayers-for-healing.html',
      './ko/bible-verses-for-loneliness.html',
      './ko/bible-verses-for-fear.html',
      './ko/bible-verses-for-sleep.html',
      './ko/prayer-before-surgery.html',
      './ko/prayer-for-sick-family.html',
      './manifest.json',
      './assets/css/app.css?v=20260625b',
      './assets/css/seo-pages.css?v=20260620a',
      './assets/js/app.js?v=20260624b',
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
        .filter(key => key !== 'lifemoment-static-v120')
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
        caches.open('lifemoment-static-v120').then(cache => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match('./index.html'));
    })
  );
});



