/* Service worker: lưu sẵn trang để xem được khi ở Ba Vì mất sóng.
   - Trang, config.js: lấy bản mới trên mạng trước (chờ tối đa 3 giây), mất mạng thì dùng bản đã lưu.
   - Ảnh, font: dùng bản đã lưu nếu có.
   Sửa danh sách file thì tăng số phiên bản CACHE. */
const CACHE = 'bavi-v10';
const MENUS = ['set-bbq','menu-lau','met-lon-man','met-ga-doi','met-de','met-thap-cam','canh-mon-man','rau-theo-mua','an-sang','bang-gia-2026'];
const CORE = ['./', 'index.html', 'config.js', 'sha256.js', ...MENUS.map(m => `images/thumb/${m}.jpg`)];
const CACHE_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com', 'suoimobavi.com.vn', 'i.ytimg.com'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

const save = (req, res) => {
  if (res && (res.ok || res.type === 'opaque')) caches.open(CACHE).then(c => c.put(req, res.clone()));
  return res;
};

const networkFirst = req => new Promise(resolve => {
  let done = false;
  const fallback = () => caches.match(req, {ignoreSearch: true}).then(r => {
    if (!done && r) { done = true; resolve(r); }
    return r;
  });
  const timer = setTimeout(fallback, 3000);
  fetch(req).then(res => {
    clearTimeout(timer);
    save(req, res);
    if (!done) { done = true; resolve(res); }
  }).catch(() => {
    clearTimeout(timer);
    fallback().then(r => { if (!done) { done = true; resolve(r || Response.error()); } });
  });
});

const cacheFirst = req => caches.match(req).then(r => r || fetch(req).then(res => save(req, res)));

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    e.respondWith(/\.(jpg|png|webp)$/i.test(url.pathname) ? cacheFirst(req) : networkFirst(req));
  } else if (CACHE_HOSTS.includes(url.hostname)) {
    e.respondWith(cacheFirst(req));
  }
});
