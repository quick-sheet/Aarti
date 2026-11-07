/* Aarti bell: a soft brass temple bell, made live with Web Audio (no file to download).
   Bell.ring(ctx, destination, when) works with a normal or an offline audio context. */
(function (root) {
  'use strict';
  // Partials of a small brass bell: [ratio to the fundamental, level, seconds to fade]
  const PARTIALS = [
    [1, 1, 6.0], [1.0024, 0.55, 6.6],          // the hum, with a slow shimmer from the pair beating
    [2.0, 0.26, 3.6], [2.76, 0.30, 2.6],
    [4.07, 0.13, 1.6], [5.4, 0.08, 1.0], [6.8, 0.04, 0.6],
  ];
  const BASE = 523.25;   // C5: bright enough to ring, low enough to stay gentle

  let impulse = null;
  function room(ctx, seconds) {
    if (impulse && impulse.sampleRate === ctx.sampleRate) return impulse;
    const n = Math.floor(ctx.sampleRate * seconds), b = ctx.createBuffer(2, n, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = b.getChannelData(ch);
      let seed = ch ? 7919 : 104729;
      for (let i = 0; i < n; i++) {
        seed = (seed * 16807) % 2147483647;      // repeatable noise
        const r = seed / 2147483647 * 2 - 1;
        d[i] = r * Math.pow(1 - i / n, 2.4) * 0.6;
      }
    }
    impulse = b;
    return b;
  }

  function ring(ctx, dest, when, opts) {
    const o = opts || {};
    const t = when == null ? ctx.currentTime + 0.01 : when;
    const f = o.freq || BASE;
    const out = ctx.createGain(); out.gain.value = o.gain == null ? 0.55 : o.gain;
    const tone = ctx.createBiquadFilter(); tone.type = 'lowpass'; tone.frequency.value = 6500; tone.Q.value = 0.3;
    const dry = ctx.createGain(); dry.gain.value = 0.85;
    const wet = ctx.createGain(); wet.gain.value = 0.32;
    const verb = ctx.createConvolver(); verb.buffer = room(ctx, 3.4);
    tone.connect(dry).connect(out);
    tone.connect(verb).connect(wet).connect(out);
    out.connect(dest);
    let end = t;
    for (const [ratio, level, fade] of PARTIALS) {
      const osc = ctx.createOscillator(), g = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = f * ratio;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(level * 0.22, t + 0.006);   // soft strike, no click
      g.gain.exponentialRampToValueAtTime(0.0001, t + fade);
      osc.connect(g).connect(tone);
      osc.start(t); osc.stop(t + fade + 0.05);
      end = Math.max(end, t + fade);
    }
    // the striker touching the brass: a breath of filtered noise
    const n = Math.floor(ctx.sampleRate * 0.03), nb = ctx.createBuffer(1, n, ctx.sampleRate), nd = nb.getChannelData(0);
    let s = 2463534242;
    for (let i = 0; i < n; i++) { s ^= s << 13; s ^= s >>> 17; s ^= s << 5; nd[i] = ((s >>> 0) / 4294967296 * 2 - 1) * (1 - i / n); }
    const ns = ctx.createBufferSource(), bp = ctx.createBiquadFilter(), ng = ctx.createGain();
    ns.buffer = nb; bp.type = 'bandpass'; bp.frequency.value = 3200; bp.Q.value = 1.4; ng.gain.value = 0.05;
    ns.connect(bp).connect(ng).connect(tone);
    ns.start(t);
    return end + 3.4;   // when the last of the ring has gone
  }

  const Bell = { ring, PARTIALS, BASE };
  if (typeof module !== 'undefined' && module.exports) module.exports = Bell;
  else root.Bell = Bell;
})(typeof self !== 'undefined' ? self : this);
