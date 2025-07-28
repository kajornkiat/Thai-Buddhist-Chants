const CACHE_NAME = 'chant-cache-v2'; // 👈 เปลี่ยนชื่อเพื่อบังคับรีเฟรช cache

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/style.css',
                '/script.js',
                '/audio/namo_eng.mp3',
                '/audio/namo_thai.mp3',
                '/images/background.png',
                '/icons/logo192x192.png',
                '/icons/logo512x512.png',
            ]);
        })
    );
});

// 🔥 ลบ cache เก่า
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log('[ServiceWorker] Deleting old cache:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});
