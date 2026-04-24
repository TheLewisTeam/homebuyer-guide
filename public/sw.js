/* The Lewis Team — service worker
   Offline-first for app shell, network-first for everything else. */
const CACHE = 'lewisteam-v2';
const CORE = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/brand/logo.png',
  '/brand/team-hero.jpg',
  '/brand/team-holiday.jpg',
  '/brand/hero-just-leased.jpg',
  '/brand/closing-day.jpg',
  '/brand/team-sunburst.png',
  '/brand/homelife.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(CORE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only cache GET
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const isSameOrigin = url.origin === self.location.origin;

  // For navigations: network first, fall back to cached index
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('/', copy));
          return res;
        })
        .catch(() => caches.match('/').then((r) => r || caches.match('/index.html')))
    );
    return;
  }

  // For static assets: cache first, fallback network, update cache in background
  if (isSameOrigin) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const network = fetch(request).then((res) => {
          if (res && res.status === 200 && res.type === 'basic') {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(request, copy));
          }
          return res;
        }).catch(() => cached);
        return cached || network;
      })
    );
  }
});
