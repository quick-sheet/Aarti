/* Aarti core: pure logic, no DOM. Works in the page, the service worker and Node (for tests). */
(function (root) {
  'use strict';

  const SPOTIFY_PKG = 'com.spotify.music';
  const ID22 = '([A-Za-z0-9]{22})';

  /* ---------- Spotify links ---------- */
  // Accepts a pasted link or Spotify's whole share text. Returns
  // { ok: true, kind: 'track', id } or { ok: true, kind: 'short', url } or { ok: false, error, msg }.
  function parseSpotify(input) {
    const s = String(input == null ? '' : input).trim();
    if (!s) return { ok: false, error: 'empty', msg: 'Paste a Spotify link first.' };
    let m = new RegExp('spotify:track:' + ID22).exec(s);
    if (m) return { ok: true, kind: 'track', id: m[1] };
    m = new RegExp('open\\.spotify\\.com/(?:intl-[a-z-]+/|embed/)?(track|album|playlist|episode|artist|show)/' + ID22, 'i').exec(s);
    if (m) {
      const kind = m[1].toLowerCase();
      if (kind === 'track') return { ok: true, kind: 'track', id: m[2] };
      const word = { album: 'an album', playlist: 'a playlist', episode: 'a podcast episode', show: 'a podcast', artist: 'an artist page' }[kind];
      return { ok: false, error: kind, msg: `That’s a link to ${word}. Paste a link to a single song.` };
    }
    m = /https?:\/\/(?:spotify\.link|spotify\.app\.link)\/[A-Za-z0-9_-]+/i.exec(s);
    if (m) return { ok: true, kind: 'short', url: m[0] };
    if (/spotify/i.test(s)) return { ok: false, error: 'spotify-other', msg: 'That Spotify link doesn’t point to a song. In Spotify, open the song, tap ⋯, then Share, then Copy link.' };
    return { ok: false, error: 'not-spotify', msg: 'That isn’t a Spotify link. It should start with https://open.spotify.com/track/' };
  }

  const trackUrl = (id) => 'https://open.spotify.com/track/' + id;

  // Where a "Play in Spotify" tap should go on each platform.
  // Android: an intent link opens the Spotify app straight away, or the web player if it isn't installed.
  // iPhone: the spotify: address opens the app; fallback is the web page if nothing happens.
  function openTarget(src, platform) {
    const web = src.kind === 'track' ? trackUrl(src.id) : src.url;
    if (platform === 'android') {
      const hostPath = web.replace(/^https?:\/\//, '');
      return { href: `intent://${hostPath}#Intent;scheme=https;package=${SPOTIFY_PKG};S.browser_fallback_url=${encodeURIComponent(web)};end`, fallback: null, newTab: false };
    }
    if (platform === 'ios') {
      if (src.kind === 'track') return { href: 'spotify:track:' + src.id, fallback: web, newTab: false };
      return { href: web, fallback: null, newTab: true };
    }
    return { href: web, fallback: null, newTab: true };
  }

  /* ---------- What plays for an aarti ---------- */
  // Your own Spotify version wins, then the app's recording, then the app's Spotify song.
  function sourceFor(aarti, own) {
    if (own && own.kind === 'track' && own.id) return { kind: 'spotify', own: true, src: { kind: 'track', id: own.id } };
    if (own && own.kind === 'short' && own.url) return { kind: 'spotify', own: true, src: { kind: 'short', url: own.url } };
    if (aarti.audio) return { kind: 'file', own: false, url: aarti.audio };
    return { kind: 'spotify', own: false, src: { kind: 'track', id: aarti.spotify } };
  }

  /* ---------- PIN ---------- */
  const digits = (s) => String(s == null ? '' : s).replace(/\D/g, '');
  const pinOk = (input, pin) => digits(input) !== '' && digits(input) === String(pin);
  function pinFromHash(hash) {
    const m = /[#&]pin=(\d{3,8})(?:&|$)/.exec(String(hash || ''));
    return m ? m[1] : null;
  }

  /* ---------- Time ---------- */
  function fmtTime(sec) {
    if (!isFinite(sec) || sec < 0) return '0:00';
    const s = Math.floor(sec), h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = s % 60;
    const ss = String(r).padStart(2, '0');
    return h ? `${h}:${String(m).padStart(2, '0')}:${ss}` : `${m}:${ss}`;
  }

  /* ---------- Byte ranges (service worker serving saved recordings) ---------- */
  // "bytes=0-", "bytes=100-199", "bytes=-500". Returns inclusive { start, end } or null if unusable.
  function parseRange(header, size) {
    const m = /^bytes=(\d*)-(\d*)$/.exec(String(header || '').trim());
    if (!m || !(size > 0)) return null;
    let start, end;
    if (m[1] === '' && m[2] === '') return null;
    if (m[1] === '') { const n = +m[2]; if (!n) return null; start = Math.max(0, size - n); end = size - 1; }
    else { start = +m[1]; end = m[2] === '' ? size - 1 : Math.min(+m[2], size - 1); }
    if (start >= size || start > end) return null;
    return { start, end };
  }

  /* ---------- Words ---------- */
  // Turns an aarti's parts into blocks ready to draw: refrains filled in, verse cues attached.
  function blocks(aarti) {
    return aarti.parts.map((p, i) => p.refrain
      ? { type: 'refrain', x: p.refrain, lines: aarti.refrain, i }
      : { type: 'verse', lines: p.lines, cue: p.cue ? aarti.cue : null, i });
  }

  // Which texts a line shows in each mode. mode: 'dev' | 'rom' | 'en'
  function lineText(line, mode) {
    if (mode === 'dev') return { main: line.d, sub: '' };
    if (mode === 'en') return line.e ? { main: line.e, sub: line.r } : { main: '', sub: line.r };
    return { main: line.r, sub: '' };
  }

  // Checks the data is complete. Returns a list of problems (empty when all is well).
  function checkAartis(list) {
    const bad = [], ids = new Set();
    for (const a of list) {
      const at = a.id || '(no id)';
      if (!a.id || ids.has(a.id)) bad.push(`${at}: missing or repeated id`);
      ids.add(a.id);
      for (const k of ['title', 'titleD', 'deity', 'tagline', 'about', 'doing', 'summary', 'artist']) if (!a[k]) bad.push(`${at}: no ${k}`);
      if (!a.audio && !/^[A-Za-z0-9]{22}$/.test(a.spotify || '')) bad.push(`${at}: needs a recording or a Spotify track id`);
      const all = [...(a.refrain || [])];
      if (a.cue) all.push(a.cue);
      if (!a.refrain || !a.refrain.length) bad.push(`${at}: no refrain`);
      if (!a.parts || !a.parts.length) bad.push(`${at}: no parts`);
      for (const p of a.parts || []) {
        if (p.refrain) continue;
        if (!p.lines || !p.lines.length) bad.push(`${at}: empty verse`);
        if (p.cue && !a.cue) bad.push(`${at}: verse asks for a cue but there is none`);
        all.push(...(p.lines || []));
      }
      for (const ln of all) {
        if (!ln.d || !ln.r) bad.push(`${at}: line missing Devanagari or Roman: ${ln.r || ln.d}`);
        if (!ln.echo && !ln.e) bad.push(`${at}: line has no meaning: ${ln.r}`);
        if (ln.d && /[A-Za-z]/.test(ln.d)) bad.push(`${at}: Latin letters in Devanagari: ${ln.d}`);
        if (ln.r && /[ऀ-ॿ]/.test(ln.r)) bad.push(`${at}: Devanagari in Roman: ${ln.r}`);
        if (ln.x != null && !(ln.x >= 2 && ln.x <= 8)) bad.push(`${at}: odd repeat count on ${ln.r}`);
      }
    }
    return bad;
  }

  const Core = { parseSpotify, trackUrl, openTarget, sourceFor, pinOk, pinFromHash, fmtTime, parseRange, blocks, lineText, checkAartis, digits };
  if (typeof module !== 'undefined' && module.exports) module.exports = Core;
  else root.Core = Core;
})(typeof self !== 'undefined' ? self : this);
