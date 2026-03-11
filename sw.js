// 禁用缓存，每次都从网络获取
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match('/fitness-calculator.html'))
  );
});
