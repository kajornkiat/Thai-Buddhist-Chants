const CACHE_NAME = 'chant-cache-v2'; // 👈 เปลี่ยนชื่อเพื่อบังคับรีเฟรช cache

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll([
                '/https://kajornkiat.github.io/Thai-Buddhist-Chants/',
                '/https://kajornkiat.github.io/Thai-Buddhist-Chants/index.html',
                '/https://kajornkiat.github.io/Thai-Buddhist-Chants/style.css',
                '/https://kajornkiat.github.io/Thai-Buddhist-Chants/script.js',
                '/https://kajornkiat.github.io/Thai-Buddhist-Chants/manifest.json',

                // audio
                '/https://kajornkiat.github.io/Thai-Buddhist-Chants/audio/kam-bucha-phra-rat-ta-na-trai.mp3',
                '/https://kajornkiat.github.io/Thai-Buddhist-Chants/audio/chai-mong-khon-katha-ton-ton.mp3',
                '/https://kajornkiat.github.io/Thai-Buddhist-Chants/audio/chai-mong-khon-katha-ton-plai.mp3',
                '/https://kajornkiat.github.io/Thai-Buddhist-Chants/audio/bot-suat-khun-phra-rat-ta-na-trai.mp3',
                '/https://kajornkiat.github.io/Thai-Buddhist-Chants/audio/bot-suat-trai-sa-ra-na-kom.mp3',
                '/https://kajornkiat.github.io/Thai-Buddhist-Chants/audio/bot-suat-pae-metta-u-this-suan-kuson.mp3',
                '/https://kajornkiat.github.io/Thai-Buddhist-Chants/audio/bot-suat-na-mo-sam-chop.mp3',
                '/https://kajornkiat.github.io/Thai-Buddhist-Chants/audio/bot-suat-bucha-phra-rat-ta-na-trai.mp3',
                '/https://kajornkiat.github.io/Thai-Buddhist-Chants/audio/bot-suat-metta-ton-eng.mp3',
                '/https://kajornkiat.github.io/Thai-Buddhist-Chants/audio/bot-suat-metta-sat-thang-lai.mp3',
                '/https://kajornkiat.github.io/Thai-Buddhist-Chants/audio/phahung-chai-mong-khon-katha.mp3',

                // images & icons
                '/https://kajornkiat.github.io/Thai-Buddhist-Chants/images/background.png',
                '/https://kajornkiat.github.io/Thai-Buddhist-Chants/icons/logo192x192.png',
                '/https://kajornkiat.github.io/Thai-Buddhist-Chants/icons/logo512x512.png',
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
