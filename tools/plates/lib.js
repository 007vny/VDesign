// VDesign style plates: shared drawing helpers. Everything is deterministic (seeded), drawn on one 1920x1080 canvas.
const W = 1920, H = 1080, TAU = Math.PI * 2;
const cv = document.getElementById('c'); cv.width = W; cv.height = H;
const c = cv.getContext('2d', { willReadFrequently: true });
const P = {};
const F = {
  blk: "'Arial Black', Impact, sans-serif", imp: "Impact, 'Arial Black', sans-serif", ser: "Georgia, 'Times New Roman', serif",
  did: "'Bodoni MT', Didot, 'Times New Roman', serif", mono: "Consolas, 'Courier New', monospace", type: "'Courier New', monospace",
  hand: "'Segoe Print', 'Ink Free', 'Comic Sans MS', cursive", script: "'Segoe Script', 'Lucida Handwriting', cursive",
  geo: "'Century Gothic', Bahnschrift, 'Trebuchet MS', sans-serif", sans: "'Segoe UI', Arial, sans-serif",
  cond: "Bahnschrift, 'Arial Narrow', Arial, sans-serif", slab: "Rockwell, 'Courier New', serif", pal: "'Palatino Linotype', Georgia, serif",
};
let _s = 1;
const seed = n => { _s = (n >>> 0) || 1; };
const rnd = () => { _s |= 0; _s = _s + 0x6D2B79F5 | 0; let t = Math.imul(_s ^ _s >>> 15, 1 | _s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
const rr = (a, b) => a + (b - a) * rnd(), ri = (a, b) => Math.floor(rr(a, b + 1)), pick = a => a[Math.floor(rnd() * a.length)];
const lerp = (a, b, t) => a + (b - a) * t, clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
const hsh = (x, y) => { const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return s - Math.floor(s); };
const vn = (x, y) => { const i = Math.floor(x), j = Math.floor(y), u = x - i, v = y - j, a = u * u * (3 - 2 * u), b = v * v * (3 - 2 * v); return lerp(lerp(hsh(i, j), hsh(i + 1, j), a), lerp(hsh(i, j + 1), hsh(i + 1, j + 1), a), b); };
const fbm = (x, y, o = 5) => { let s = 0, a = .5; for (let k = 0; k < o; k++) { s += a * vn(x, y); x *= 2.03; y *= 2.03; a *= .5; } return s; };

function fill(col) { c.fillStyle = col; c.fillRect(0, 0, W, H); }
function stops(g, st) { st.forEach((s, i) => Array.isArray(s) ? g.addColorStop(s[0], s[1]) : g.addColorStop(i / (st.length - 1), s)); return g; }
const lg = (x0, y0, x1, y1, st) => stops(c.createLinearGradient(x0, y0, x1, y1), st);
const rg = (x, y, r0, r1, st) => stops(c.createRadialGradient(x, y, r0, x, y, r1), st);
function grain(a = 18, colour = false) {
  const d = c.getImageData(0, 0, W, H), p = d.data;
  for (let i = 0; i < p.length; i += 4) { const n = (rnd() - .5) * a; p[i] += n; p[i + 1] += colour ? (rnd() - .5) * a : n; p[i + 2] += colour ? (rnd() - .5) * a : n; }
  c.putImageData(d, 0, 0);
}
function vig(a = .5, col = '0,0,0', r0 = .35) { c.fillStyle = rg(W / 2, H / 2, H * r0, H * 1.1, [`rgba(${col},0)`, `rgba(${col},${a})`]); c.fillRect(0, 0, W, H); }
function T(s, x, y, size, o = {}) {
  c.save(); c.font = `${o.i ? 'italic ' : ''}${o.w || 400} ${size}px ${o.f || F.ser}`; c.textAlign = o.a || 'center'; c.textBaseline = o.b || 'middle';
  if (o.ls != null) c.letterSpacing = o.ls + 'px'; if (o.al != null) c.globalAlpha = o.al;
  if (o.rot) { c.translate(x, y); c.rotate(o.rot); x = 0; y = 0; }
  if (o.sh) { c.shadowColor = o.sh; c.shadowBlur = o.sb ?? 20; c.shadowOffsetX = o.sx || 0; c.shadowOffsetY = o.sy || 0; }
  if (o.s) { c.strokeStyle = o.s; c.lineWidth = o.lw || 4; c.lineJoin = 'round'; c.strokeText(s, x, y); }
  if (o.c !== null) { c.fillStyle = o.c || '#000'; c.fillText(s, x, y); }
  c.restore();
}
function L(pts, col, w = 2, o = {}) {
  c.save(); c.strokeStyle = col || 'transparent'; c.lineWidth = w || 1; c.lineCap = o.cap || 'round'; c.lineJoin = o.join || 'round';
  if (o.dash) c.setLineDash(o.dash); if (o.al != null) c.globalAlpha = o.al;
  if (o.sh) { c.shadowColor = o.sh; c.shadowBlur = o.sb ?? 20; }
  c.beginPath(); pts.forEach((p, i) => i ? c.lineTo(p[0], p[1]) : c.moveTo(p[0], p[1])); if (o.close) c.closePath();
  if (o.fill) { c.fillStyle = o.fill; c.fill(); } if (col && w > 0) c.stroke(); c.restore();
}
const poly = (pts, f, s, w = 2, o = {}) => L(pts, s, s ? w : 0, { close: 1, fill: f, ...o });
function circ(x, y, r, f, s, w = 2) { c.beginPath(); c.arc(x, y, Math.max(0, r), 0, TAU); if (f) { c.fillStyle = f; c.fill(); } if (s) { c.strokeStyle = s; c.lineWidth = w; c.stroke(); } }
function ell(x, y, rx, ry, f, s, w = 2, rot = 0) { c.beginPath(); c.ellipse(x, y, rx, ry, rot, 0, TAU); if (f) { c.fillStyle = f; c.fill(); } if (s) { c.strokeStyle = s; c.lineWidth = w; c.stroke(); } }
function rect(x, y, w, h, f, s, lw = 2, r = 0) { c.beginPath(); r ? c.roundRect(x, y, w, h, r) : c.rect(x, y, w, h); if (f) { c.fillStyle = f; c.fill(); } if (s) { c.strokeStyle = s; c.lineWidth = lw; c.stroke(); } }
function wob(x0, y0, x1, y1, amp = 3, n = 14) { const p = []; for (let i = 0; i <= n; i++) { const t = i / n; p.push([x0 + (x1 - x0) * t + rr(-amp, amp), y0 + (y1 - y0) * t + rr(-amp, amp)]); } return p; }
function ring(x, y, r, n = 40, amp = 0, sq = 1) { const p = []; for (let i = 0; i < n; i++) { const a = i / n * TAU, q = r + rr(-amp, amp); p.push([x + Math.cos(a) * q, y + Math.sin(a) * q * sq]); } return p; }
function star(x, y, r1, r2, n, rot = -Math.PI / 2) { const p = []; for (let i = 0; i < n * 2; i++) { const a = rot + i * Math.PI / n, r = i % 2 ? r2 : r1; p.push([x + Math.cos(a) * r, y + Math.sin(a) * r]); } return p; }
function hatch(x, y, w, h, gap, col, lw = 1, slope = 1) { c.save(); c.beginPath(); c.rect(x, y, w, h); c.clip(); for (let k = -h; k < w + h; k += gap) L([[x + k, y + h], [x + k + h * slope, y]], col, lw, { cap: 'butt' }); c.restore(); }
function clipTo(fn, draw) { c.save(); c.beginPath(); fn(); c.clip(); draw(); c.restore(); }
// per-pixel painter at 1/step resolution: fn(x, y) -> [r, g, b] with x, y in 1920x1080 space
function px(step, fn, smooth = true) {
  const w = Math.ceil(W / step), h = Math.ceil(H / step), o = new OffscreenCanvas(w, h), g = o.getContext('2d'), d = g.createImageData(w, h), p = d.data;
  for (let j = 0, k = 0; j < h; j++) for (let i = 0; i < w; i++, k += 4) { const v = fn(i * step, j * step); p[k] = v[0]; p[k + 1] = v[1]; p[k + 2] = v[2]; p[k + 3] = v[3] ?? 255; }
  g.putImageData(d, 0, 0); c.save(); c.imageSmoothingEnabled = smooth; c.drawImage(o, 0, 0, W, H); c.restore();
}
function paper(col, g = 12) { fill(col); grain(g); }
function glow(col, blur, fn) { c.save(); c.shadowColor = col; c.shadowBlur = blur; fn(); c.restore(); }
const iso = (x, y, z, ox = W / 2, oy = H / 2, s = 1) => [ox + (x - y) * .866 * s, oy + (x + y) * .5 * s - z * s];
function box(x, y, z, w, d, h, top, left, right, ox, oy, s = 1, line) {
  const p = (a, b, e) => iso(a, b, e, ox, oy, s);
  poly([p(x, y, z + h), p(x + w, y, z + h), p(x + w, y + d, z + h), p(x, y + d, z + h)], top, line, 1.5);
  poly([p(x, y + d, z + h), p(x + w, y + d, z + h), p(x + w, y + d, z), p(x, y + d, z)], left, line, 1.5);
  poly([p(x + w, y, z + h), p(x + w, y + d, z + h), p(x + w, y + d, z), p(x + w, y, z)], right, line, 1.5);
}
function gear(x, y, r, n, f, s, w = 2, rot = 0) { const p = []; for (let i = 0; i < n; i++) { const a = rot + i / n * TAU, d = TAU / n; [[0, .88], [.22, .88], [.3, 1.08], [.6, 1.08], [.68, .88]].forEach(([t, q]) => p.push([x + Math.cos(a + d * t) * r * q, y + Math.sin(a + d * t) * r * q])); } poly(p, f, s, w); circ(x, y, r * .22, s || '#000'); }
function person(x, y, h, col, lw) { lw = lw || h * .09; circ(x, y - h * .86, h * .13, null, col, lw); L([[x, y - h * .73], [x, y - h * .32]], col, lw); L([[x - h * .22, y - h * .5], [x, y - h * .64], [x + h * .22, y - h * .5]], col, lw); L([[x - h * .17, y], [x, y - h * .32], [x + h * .17, y]], col, lw); }

window.render = i => {
  const s = STYLES[Math.round(i)];
  c.setTransform(1, 0, 0, 1, 0, 0); c.globalAlpha = 1; c.globalCompositeOperation = 'source-over'; c.shadowBlur = 0; c.shadowColor = 'transparent'; c.filter = 'none'; c.setLineDash([]);
  seed(7000 + Math.round(i) * 131); c.clearRect(0, 0, W, H); c.save();
  try { P[s[0]](s[1]); } catch (e) { c.restore(); c.save(); c.setTransform(1, 0, 0, 1, 0, 0); fill('#400'); T('ERROR ' + s[0], W / 2, 400, 60, { c: '#fff', f: F.mono }); T(String(e.message).slice(0, 90), W / 2, 520, 34, { c: '#fff', f: F.mono }); console.log('PLATE ERROR', s[0], e.message); }
  c.restore();
};
