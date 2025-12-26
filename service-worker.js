const CACHE_NAME = 'japon-2026-v2';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/manifest.json',
    '/images/japon.jpg'
];

// Installation du service worker
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installation...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Mise en cache des assets');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => self.skipWaiting())
    );
});

// Activation du service worker
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activation...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[Service Worker] Suppression ancien cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Stratégie de cache: Cache First, fallback Network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    console.log('[Service Worker] Depuis cache:', event.request.url);
                    return response;
                }

                console.log('[Service Worker] Depuis réseau:', event.request.url);
                return fetch(event.request).then((response) => {
                    // Ne pas mettre en cache les réponses non-valides
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // Cloner la réponse
                    const responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then((cache) => {
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                });
            })
            .catch(() => {
                // Fallback pour les pages hors-ligne
                return caches.match('/index.html');
            })
    );
});

// Écouter les messages du client
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
