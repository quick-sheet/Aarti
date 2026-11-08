const REL = 21;                    // bump on every release, together with ?v= on the scripts in index.html
const CACHE = 'aarti-v' + REL;
const AUDIO = 'aarti-audio';      // saved recordings, kept across releases (keyed by their full address, ?v= included)
const DRIFT = 'aarti-drift';      // Daily Drift's page and scripts, for the verses offline; kept across releases
importScripts('core.js?v=' + REL);

const SHELL = ['./', 'index.html', 'core.js', 'aartis.js', 'bell.js', 'manifest.webmanifest', 'icon.svg', 'icon-192.png', 'icon-512.png',
  'icon-maskable-512.png', 'apple-touch-icon.png', 'aarti-words.pdf', 'ganesh.jpg', 'lakshmi.jpg', 'jagdish.jpg',
  'diya.jpg', 'diya-dark.jpg', 'flame-c.png', 'flame-l.png', 'flame-r.png', 'water.png', 'puja-times.js'];

self.addEventListener('install', (e) => e.waitUntil(caches.open(CACHE)
  .then((c) => c.addAll(SHELL.map((u) => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting())));

self.addEventListener('activate', (e) => e.waitUntil(caches.keys()
  .then((k) => Promise.all(k.filter((x) => x !== CACHE && x !== AUDIO && x !== DRIFT).map((x) => caches.delete(x)))).then(() => self.clients.claim())));

const FONTS = /^https:\/\/fonts\.(googleapis|gstatic)\.com\//;

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin && (/\.(mp3|m4a|aac|ogg|wav)$/i.test(url.pathname) || req.headers.has('range'))) {
    e.respondWith(audioFetch(e));
    return;
  }
  if (url.origin === location.origin && url.pathname.includes('/DailyDrift/')) {   // Daily Drift's own files: always the latest, a copy for offline
    e.respondWith((async () => {
      const c = await caches.open(DRIFT);
      try {
        const r = await Promise.race([fetch(req, { cache: 'no-cache' }), new Promise((_, j) => setTimeout(() => j(), 6000))]);
        if (r.ok && r.status === 200) c.put(req, r.clone());
        return r;
      } catch {
        return (await c.match(req)) || (await c.match(req, { ignoreSearch: true })) || Response.error();
      }
    })());
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

// Recordings: saved whole on the phone, then played from that copy (with byte ranges, which iPhone needs), even offline.
// The page asks for all three to be saved soon after Aarti opens; until a copy is in, they play from the network.
// Every piece the player gets is an answer made here, whether it came from the copy or the network: Chrome stops a
// recording ("data source error") if some pieces come straight from the network and later ones from the copy.
const saving = {};
function save(key) {
  if (!saving[key]) {
    saving[key] = (async () => {
      const c = await caches.open(AUDIO);
      if (await c.match(key)) return;
      const r = await fetch(key, { cache: 'no-cache' });
      if (r.ok && r.status === 200) await c.put(key, r);
    })().catch(() => {}).finally(() => { delete saving[key]; });
  }
  return saving[key];
}
self.addEventListener('message', (e) => {
  const list = e.data && Array.isArray(e.data.save) ? e.data.save : null;
  if (!list) return;
  // one at a time, in the order asked
  e.waitUntil(list.reduce((p, u) => p.then(() => save(new URL(u, self.registration.scope).href.split('#')[0])), Promise.resolve()));
});

async function audioFetch(e) {
  const req = e.request, key = req.url.split('#')[0];
  const c = await caches.open(AUDIO);
  const hit = await c.match(key);
  if (hit) return ranged(hit, req.headers.get('range'));
  e.waitUntil(save(key));
  try { return remade(await fetch(req)); } catch { return Response.error(); }
}

const remade = (r) => new Response(r.body, { status: r.status, statusText: r.statusText, headers: r.headers });

async function ranged(res, range) {
  if (!range) return remade(res);
  const blob = await res.blob();                    // the saved file stays on disk; only the piece asked for is read
  const r = self.Core.parseRange(range, blob.size);
  if (!r) return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${blob.size}` } });
  return new Response(blob.slice(r.start, r.end + 1), {
    status: 206,
    headers: {
      'Content-Type': res.headers.get('Content-Type') || 'audio/mpeg',
      'Content-Range': `bytes ${r.start}-${r.end}/${blob.size}`,
      'Content-Length': String(r.end - r.start + 1),
      'Accept-Ranges': 'bytes',
    },
  });
}
