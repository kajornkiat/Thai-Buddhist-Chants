const CACHE_NAME = 'chant-cache-v2'; // 👈 เปลี่ยนชื่อเพื่อบังคับรีเฟรช cache

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll([
                '/Thai-Buddhist-Chants/',
                '/Thai-Buddhist-Chants/index.html',
                '/Thai-Buddhist-Chants/style.css',
                '/Thai-Buddhist-Chants/script.js',

                // audio
                '/Thai-Buddhist-Chants/audio/คำบูชาพระรัตนตรัย.mp3',
                '/Thai-Buddhist-Chants/audio/ชัยมงคลคาถาตอนต้น.mp3',
                '/Thai-Buddhist-Chants/audio/ชัยมงคลคาถาตอนปลาย.mp3',
                '/Thai-Buddhist-Chants/audio/บทสวดคุณพระรัตนตรัย.mp3',
                '/Thai-Buddhist-Chants/audio/บทสวดไตรสรณคมน์.mp3',
                '/Thai-Buddhist-Chants/audio/บทสวดแผ่เมตตาอุทิศส่วนกุศล.mp3',
                '/Thai-Buddhist-Chants/audio/บทสวดมนต์นะโม3จบ.mp3',
                '/Thai-Buddhist-Chants/audio/บทสวดมนต์บูชาพระรัตนตรัย.mp3',
                '/Thai-Buddhist-Chants/audio/บทสวดเมตตาตนเอง.mp3',
                '/Thai-Buddhist-Chants/audio/บทสวดเมตตาสัตว์ทั้งหลาย.mp3',
                '/Thai-Buddhist-Chants/audio/พาหุงชัยมงคลคาถา.mp3',

                // images & icons
                '/Thai-Buddhist-Chants/images/background.png',
                '/Thai-Buddhist-Chants/icons/logo192x192.png',
                '/Thai-Buddhist-Chants/icons/logo512x512.png',
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
