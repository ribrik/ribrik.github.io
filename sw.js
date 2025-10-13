// sw.js
const CACHE = 'ribrik-app-v1';
const OFFLINE_URL = 'offline.html';
const PRECACHE = [
  './',                 // använd relativa paths för GitHub Pages
  './index.html',
  './manifest.webmanifest',
  './og-image.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
  './offline.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // cache: 'reload' försäkrar nya versioner hämtas
    await cache.addAll(PRECACHE.map(p => new Request(p, { cache: 'reload' })));
  })());
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => (k !== CACHE ? caches.delete(k) : Promise.resolve())));
    if ('navigationPreload' in self.registration) {
      try { await self.registration.navigationPreload.enable(); } catch {}
    }
  })());
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Navigationsförfrågningar: nätet först med offline fallback
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preload = await event.preloadResponse;
        if (preload) return preload;
        const net = await fetch(event.request);
        return net;
      } catch {
        const cache = await caches.open(CACHE);
        const offline = await cache.match(OFFLINE_URL);
        return offline || Response.error();
      }
    })());
    return;
  }

  // Övriga resurser: cache-first, fallback nät
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(event.request);
    if (cached) return cached;
    try {
      const res = await fetch(event.request);
      if (event.request.method === 'GET' && res.ok) {
        cache.put(event.request, res.clone());
      }
      return res;
    } catch {
      return cached || Response.error();
    }
  })());
});
