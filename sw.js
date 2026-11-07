const REL = 4;                    // bump on every release, together with ?v= on the scripts in index.html
const CACHE = 'aarti-v' + REL;
const AUDIO = 'aarti-audio';      // saved recordings, kept across releases (keyed by their full address, ?v= included)
importScripts('core.js?v=' + REL);

const SHELL = ['./', 'index.html', 'core.js', 'aartis.js', 'bell.js', 'manifest.webmanifest', 'icon.svg', 'icon-192.png', 'icon-512.png',
  'icon-maskable-512.png', 'apple-touch-icon.png', 'aarti-words.pdf', 'ganesh.jpg', 'lakshmi.jpg', 'jagdish.jpg'];

self.addEventListener('install', (e) => e.waitUntil(caches.open(CACHE)
  .then((c) => c.addAll(SHELL.map((u) => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting())));

self.addEventListener('activate', (e) => e.waitUntil(caches.keys()
  .then((k) => Promise.all(k.filter((x) => x !== CACHE && x !== AUDIO).map((x) => caches.delete(x)))).then(() => self.clients.claim())));

const FONTS = /^https:\/\/fonts\.(googleapis|gstatic)\.com\//;

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin && (/\.(mp3|m4a|aac|ogg|wav)$/i.test(url.pathname) || req.headers.has('range'))) {
    e.respondWith(audioFetch(e));
    return;
  }
  if (url.origin === location.origin) {            // network first (always checked with GitHub), 4 s, then cache
    e.respondWith((async () => {
      const c = await caches.open(CACHE);
      try {
        const net = req.mode === 'navigate' ? fetch(req.url, { cache: 'no-cache', credentials: 'same-origin' }) : fetch(req, { cache: 'no-cache' });
        const r = await Promise.race([net, new Promise((_, j) => setTimeout(() => j(), 4000))]);
        if (r.ok && r.status === 200) c.put(req, r.clone());
        return r;
      } catch {
        return (await c.match(req, { ignoreSearch: true })) || (req.mode === 'navigate' ? c.match('index.html') : Response.error());
      }
    })());
    return;
  }
  if (FONTS.test(req.url)) e.respondWith(caches.open(CACHE).then(async (c) => (await c.match(req)) || fetch(req).then((r) => { c.put(req, r.clone()); return r; })));
  // Spotify and anything else: leave alone
});

// Recordings: play straight from the network the first time and save a full copy in the background,
// then play from that copy (with byte ranges, which iPhone needs) from then on, even offline.
async function audioFetch(e) {
  const req = e.request, key = req.url.split('#')[0];
  const c = await caches.open(AUDIO);
  const hit = await c.match(key);
  if (hit) return ranged(hit, req.headers.get('range'));
  e.waitUntil(fetch(key, { cache: 'no-cache' }).then((r) => (r.ok && r.status === 200 ? c.put(key, r) : null)).catch(() => {}));
  try { return await fetch(req); } catch { return Response.error(); }
}

async function ranged(res, range) {
  if (!range) return res;
  const buf = await res.arrayBuffer();
  const r = self.Core.parseRange(range, buf.byteLength);
  if (!r) return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${buf.byteLength}` } });
  return new Response(buf.slice(r.start, r.end + 1), {
    status: 206,
    headers: {
      'Content-Type': res.headers.get('Content-Type') || 'audio/mpeg',
      'Content-Range': `bytes ${r.start}-${r.end}/${buf.byteLength}`,
      'Content-Length': String(r.end - r.start + 1),
      'Accept-Ranges': 'bytes',
    },
  });
}
