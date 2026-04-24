/* The Lewis Team — service worker
   Strict network-first for HTML so clients never see a stale UI. */
const CACHE = 'lewisteam-v5';
const CORE = [
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
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const isSameOrigin = url.origin === self.location.origin;

  // HTML / navigations — ALWAYS network first. Never serve cached HTML.
  // Only fall back to cache if the network totally fails (offline).
  if (request.mode === 'navigate' ||
      (request.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(
      fetch(request, { cache: 'no-store' })
        .catch(() => caches.match(request).then(r => r || new Response(
          '<h1>Offline</h1><p>Reconnect to see The Lewis Team.</p>',
          { headers: { 'Content-Type': 'text/html' } }
        )))
    );
    return;
  }

  // Hashed JS/CSS bundles: cache-first (they change with every deploy via filename)
  if (isSameOrigin && url.pathname.startsWith('/assets/')) {
    event.respondWith(
      caches.match(request).then((cached) =>
        cached || fetch(request).then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(request, copy));
          }
          return res;
        })
      )
    );
    return;
  }

  // Brand images: stale-while-revalidate
  if (isSameOrigin && url.pathname.startsWith('/brand/')) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const network = fetch(request).then((res) => {
          if (res && res.status === 200) {
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
