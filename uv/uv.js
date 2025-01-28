importScripts('/uv/uv/uv.bundle.js');
importScripts('/uv/uv/uv.config.js');
importScripts('/uv/uv/uv.sw.js');
importScripts('https://arc.io/arc-sw-core.js');

const sw = new uvServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
