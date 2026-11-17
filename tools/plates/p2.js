// Plates 2: Print & Printmaking, Graphic & Type, Line Diagrams
function dots(x0, y0, w, h, gap, col, fn, ang = .5) { c.save(); c.beginPath(); c.rect(x0, y0, w, h); c.clip(); c.fillStyle = col; const ca = Math.cos(ang), sa = Math.sin(ang), R = Math.hypot(w, h); for (let u = -R; u < R; u += gap) for (let v = -R; v < R; v += gap) { const x = x0 + w / 2 + u * ca - v * sa, y = y0 + h / 2 + u * sa + v * ca; if (x < x0 - gap || x > x0 + w + gap || y < y0 - gap || y > y0 + h + gap) continue; const r = fn(x, y) * gap * .72; if (r > .4) { c.beginPath(); c.arc(x, y, r, 0, TAU); c.fill(); } } c.restore(); }
P['risograph'] = n => {
  paper('#f4eedd', 10); c.globalCompositeOperation = 'multiply'; rect(0, 620, W, 460, '#ffe14a'); circ(980, 560, 330, '#ff5fa2'); c.globalAlpha = .9; circ(1004, 548, 330, null, '#2c4bd8', 0);
  dots(0, 330, W, 290, 15, '#2c4bd8', (x, y) => clamp(.9 - (y - 330) / 330 + fbm(x / 300, y / 300) * .3), .26); c.globalAlpha = 1;
  for (let i = 0; i < 7; i++) rect(0, 700 + i * 52, W, 16, i % 2 ? '#2c4bd8' : '#ff5fa2');
  const bx = 900, by = 800; circ(bx - 130, by, 92, null, '#2c4bd8', 14); circ(bx + 150, by, 92, null, '#2c4bd8', 14); L([[bx - 130, by], [bx - 20, by - 150], [bx + 100, by - 150], [bx + 150, by]], '#2c4bd8', 14); L([[bx - 20, by - 150], [bx + 10, by], [bx - 130, by]], '#2c4bd8', 14); L([[bx + 80, by - 190], [bx + 130, by - 190]], '#2c4bd8', 14); circ(bx - 20, by - 250, 44, '#ff5fa2'); L([[bx - 20, by - 206], [bx + 30, by - 120]], '#ff5fa2', 30);
  c.globalCompositeOperation = 'source-over'; c.globalCompositeOperation = 'multiply'; T('RISOGRAPH', 130, 170, 150, { f: F.blk, a: 'left', c: '#ff5fa2' }); T('RISOGRAPH', 140, 178, 150, { f: F.blk, a: 'left', c: '#2c4bd8', al: .9 }); T('P R I N T  ·  T W O  D R U M S', 140, 280, 34, { f: F.geo, a: 'left', c: '#2c4bd8' }); c.globalCompositeOperation = 'source-over'; grain(20);
};
P['halftone-dossier'] = n => {
  paper('#efe6d2', 12); dots(0, 0, W, H, 22, '#1f3fb8', (x, y) => clamp(1.15 - Math.hypot(x - 760, y - 560) / 620));
  const K = '#17130f'; circ(760, 600, 250, '#f08a2c', K, 10); poly([[560, 470], [540, 300], [690, 400]], '#f08a2c', K, 10); poly([[960, 470], [980, 300], [830, 400]], '#f08a2c', K, 10); circ(670, 570, 26, K); circ(850, 570, 26, K); poly([[740, 640], [780, 640], [760, 664]], '#e8566e', K, 6); L([[760, 664], [720, 700]], K, 6); L([[760, 664], [800, 700]], K, 6); for (let s of [-1, 1]) for (let k = 0; k < 3; k++) L([[760 + s * 120, 650 + k * 16], [760 + s * 300, 630 + k * 34]], K, 5);
  rect(540, 880, 440, 110, K); T('CASE No. 001', 760, 936, 50, { f: F.type, c: '#efe6d2', w: 700 });
  c.save(); c.translate(1380, 300); c.rotate(-.06); T('HALFTONE', 6, 6, 130, { f: F.slab, c: '#e2392b', w: 700 }); T('HALFTONE', 0, 0, 130, { f: F.slab, c: K, w: 700 }); T('DOSSIER', 6, 146, 130, { f: F.slab, c: '#e2392b', w: 700 }); T('DOSSIER', 0, 140, 130, { f: F.slab, c: K, w: 700 }); c.restore();
  c.save(); c.translate(1420, 700); c.rotate(.12); rect(-230, -70, 460, 140, null, '#e2392b', 10); T('CLASSIFIED', 0, 4, 70, { f: F.imp, c: '#e2392b', ls: 6 }); c.restore();
  rect(1180, 860, 500, 4, K); T('SUBJECT: one orange cat · STATUS: at large', 1180, 900, 26, { f: F.type, a: 'left', c: K }); grain(18);
};
P['woodcut'] = n => {
  paper('#efe6d0', 14); const K = '#16130f'; rect(80, 70, 1760, 940, K);
  clipTo(() => c.rect(80, 70, 1760, 940), () => { for (let i = 0; i < 44; i++) { const y = 90 + i * 9 + rr(-2, 2); L(wob(80, y, 1840, y + rr(-6, 6), 2, 30), '#efe6d0', rr(2, 5), { al: .9, cap: 'butt' }); } circ(1380, 300, 150, '#efe6d0'); for (let i = 0; i < 26; i++) { const a = i / 26 * TAU; poly([[1380 + Math.cos(a - .05) * 175, 300 + Math.sin(a - .05) * 175], [1380 + Math.cos(a) * rr(240, 300), 300 + Math.sin(a) * rr(240, 300)], [1380 + Math.cos(a + .05) * 175, 300 + Math.sin(a + .05) * 175]], '#efe6d0'); }
    for (let m = 0; m < 6; m++) { const x = 100 + m * 330, h = rr(300, 480); poly([[x - 60, 780], [x + 170, 780 - h], [x + 400, 780]], K, '#efe6d0', 6); for (let k = 0; k < 16; k++) L([[x + 170, 780 - h + 20 + k * 6], [x + 170 + k * 12, 780 - h + 60 + k * 22]], '#efe6d0', 3, { cap: 'butt' }); }
    rect(80, 780, 1760, 230, '#efe6d0'); for (let i = 0; i < 120; i++) { const x = rr(90, 1830), y = rr(800, 1000); L([[x, y], [x + rr(20, 60), y + rr(-3, 3)]], K, rr(2, 4), { cap: 'butt' }); }
    for (let i = 0; i < 7; i++) { const x = 300 + i * 190; rect(x, 700, 110, 100, K); poly([[x - 20, 700], [x + 55, 630], [x + 130, 700]], K); rect(x + 40, 740, 26, 30, '#efe6d0'); } rect(1040, 520, 60, 280, K); poly([[1020, 520], [1070, 400], [1120, 520]], K); });
  rect(80, 70, 1760, 940, null, K, 14); T('WOODCUT PRINT', 960, 180, 96, { f: F.slab, c: '#efe6d0', w: 700, ls: 8, s: K, lw: 16 }); grain(16);
};
P['engraving'] = n => {
  paper('#ece2c8', 10); const K = '#2a2119'; rect(90, 80, 1740, 920, null, K, 3); rect(104, 94, 1712, 892, null, K, 1);
  const cx = 720, cy = 560; const sh = (fn, x, y, w, h, gap, slope = 1) => clipTo(fn, () => hatch(x, y, w, h, gap, K, 1.3, slope));
  sh(() => c.ellipse(cx + 170, cy + 20, 210, 110, 0, 0, TAU), cx - 60, cy - 110, 460, 260, 7); for (let i = 0; i < 6; i++) { c.beginPath(); c.ellipse(cx + 40 + i * 62, cy + 20, 14, 108 - Math.abs(i - 2.5) * 12, 0, 0, TAU); c.fillStyle = K; c.fill(); } ell(cx + 170, cy + 20, 210, 110, null, K, 3);
  sh(() => c.ellipse(cx - 110, cy, 100, 86, 0, 0, TAU), cx - 220, cy - 100, 220, 200, 5, -1); ell(cx - 110, cy, 100, 86, null, K, 3); circ(cx - 250, cy - 6, 62, '#ece2c8', K, 3); sh(() => c.arc(cx - 250, cy - 6, 62, 0, TAU), cx - 320, cy - 70, 140, 140, 4); circ(cx - 276, cy - 20, 20, K);
  for (const s of [-1, 1]) { c.save(); c.translate(cx - 60, cy - 70); c.rotate(s * -.5 - .3); ell(170, -40 * s, 220, 64, 'rgba(236,226,200,.7)', K, 2.5); for (let i = 0; i < 9; i++) L([[-30, -40 * s], [390, -40 * s - 60 + i * 15]], K, .8); c.restore(); }
  for (let i = 0; i < 3; i++) for (const s of [-1, 1]) L([[cx - 120 + i * 60, cy + 60], [cx - 170 + i * 80, cy + 190], [cx - 120 + i * 90, cy + 290]], K, 4); L([[cx - 290, cy - 60], [cx - 380, cy - 190]], K, 2); L([[cx - 270, cy - 66], [cx - 300, cy - 210]], K, 2);
  T('PL. VII', 1740, 140, 28, { f: F.pal, a: 'right', c: K, ls: 4 }); T('Copperplate', 1400, 330, 96, { f: F.pal, c: K, i: 1 }); T('ENGRAVING', 1400, 430, 52, { f: F.pal, c: K, ls: 18 }); L([[1180, 480], [1620, 480]], K, 2);
  circ(1400, 660, 110, null, K, 2); sh(() => c.arc(1400, 660, 110, 0, TAU), 1290, 550, 220, 220, 6, -1); for (let i = 0; i < 5; i++) circ(1400, 660, 20 + i * 18, null, '#ece2c8', 3); L([[1300, 700], [930, 600]], K, 1); T('FIG. 1 — the compound eye', 1400, 810, 28, { f: F.pal, c: K, i: 1 }); T('Apis mellifera', 720, 920, 40, { f: F.pal, c: K, i: 1 }); grain(10);
};
P['silkscreen-poster'] = n => {
  fill('#f4e9cf'); rect(120, 60, 1680, 960, '#1f3a5f'); const band = (y, col) => { const p = [[120, 1020]]; for (let x = 120; x <= 1800; x += 40) p.push([x, y - fbm(x / 400, y / 100) * 240]); p.push([1800, 1020]); poly(p, col); };
  circ(1380, 330, 190, '#f4b63a'); for (let i = 0; i < 5; i++) rect(1100, 260 + i * 44, 560, 14, '#1f3a5f'); band(640, '#e8684a'); band(760, '#c94a45'); band(880, '#2b5d6b'); band(980, '#17323c');
  rect(520, 420, 30, 430, '#f4e9cf'); poly([[440, 430], [535, 240], [630, 430]], '#f4e9cf'); rect(470, 430, 130, 16, '#f4b63a'); for (let i = 0; i < 4; i++) rect(528, 500 + i * 80, 14, 34, '#1f3a5f');
  poly([[535, 300], [1500, 180], [1500, 240]], 'rgba(244,182,58,.35)'); rect(120, 60, 1680, 960, null, '#f4e9cf', 16); rect(150, 90, 1620, 900, null, '#f4b63a', 4);
  T('VISIT THE', 960, 170, 44, { f: F.geo, c: '#f4e9cf', ls: 22 }); T('SILKSCREEN COAST', 960, 940, 96, { f: F.imp, c: '#f4e9cf', ls: 8 }); grain(16);
};
P['printed-long-take'] = n => {
  fill('#0e0d0c'); const sc = (pts, w = 2, al = 1) => L(pts, '#efe8d8', w, { al, cap: 'butt' });
  for (let i = 0; i < 90; i++) { const y = 60 + i * 5 + rr(-1, 1); sc(wob(0, y, W, y + rr(-8, 8), 2, 26), rr(.6, 2.4), rr(.3, .9)); } circ(1420, 420, 130, '#e8a23a'); for (let i = 0; i < 20; i++) rect(1260, 300 + i * 13, 320, 4, '#0e0d0c');
  rect(0, 560, W, 520, '#0e0d0c'); for (let i = 0; i < 60; i++) { const y = 600 + i * 8; sc(wob(rr(0, 300), y, rr(1500, W), y, 1.5, 20), rr(.5, 1.6), rr(.1, .5)); }
  const crane = (x, y, s, f) => { c.save(); c.translate(x, y); c.scale(s * f, s); ell(0, 0, 110, 46, '#efe8d8'); poly([[60, -20], [150, -230], [170, -226], [100, 0]], '#efe8d8'); circ(160, -236, 20, '#efe8d8'); circ(160, -250, 9, '#c8312a'); poly([[176, -240], [250, -226], [176, -228]], '#efe8d8'); poly([[-90, -10], [-220, 30], [-110, 30]], '#0e0d0c', '#efe8d8', 4); L([[-10, 40], [-20, 250]], '#efe8d8', 7); L([[30, 40], [50, 250]], '#efe8d8', 7); for (let k = 0; k < 14; k++) L([[-80 + k * 12, -30], [-70 + k * 12, 30]], '#0e0d0c', 2); c.restore(); };
  crane(520, 720, 1, 1); crane(980, 760, .8, -1); crane(1280, 700, .6, 1);
  T('SCRATCHBOARD', 120, 960, 80, { f: F.pal, a: 'left', c: '#efe8d8', ls: 10 }); T('LONG TAKE', 120, 1030, 34, { f: F.pal, a: 'left', c: '#e8a23a', ls: 20 }); grain(12);
};
P['pop-art'] = n => {
  fill('#ffd400'); dots(0, 0, W, H, 34, '#e9342a', () => .55, .6); poly([[0, 0], [820, 0], [560, H], [0, H]], '#1d6fd6'); dots(0, 0, 700, H, 34, '#fff', () => .4, .6);
  poly(star(1240, 500, 520, 330, 14, .1), '#fff', '#111', 12); T('POP!', 1250, 470, 300, { f: F.imp, c: '#e9342a', s: '#111', lw: 22 }); T('POP!', 1240, 460, 300, { f: F.imp, c: '#ffd400', s: '#111', lw: 12 });
  c.save(); c.translate(360, 620); c.rotate(-.5); c.beginPath(); c.moveTo(-260, 60); c.quadraticCurveTo(0, -200, 260, 40); c.quadraticCurveTo(0, -60, -260, 60); c.fillStyle = '#ffd400'; c.fill(); c.strokeStyle = '#111'; c.lineWidth = 12; c.lineJoin = 'round'; c.stroke(); rect(250, 20, 34, 40, '#111'); c.restore();
  rect(120, 880, 620, 120, '#fff', '#111', 10); T('POP ART', 430, 942, 80, { f: F.blk, c: '#111' }); T('1,000+ KINDS', 1560, 950, 60, { f: F.blk, c: '#111', rot: -.06 }); grain(8);
};
P['vintage-collage'] = n => {
  paper('#e9dcc0', 14); poly(ring(520, 420, 420, 30, 40), '#1f6f6a'); poly(ring(1400, 760, 380, 30, 46), '#d9622b'); circ(1500, 260, 150, '#e8b23a');
  c.save(); c.translate(960, 540); c.rotate(-.05); const perf = (w, h) => { rect(-w / 2, -h / 2, w, h, '#f6efdc'); for (let x = -w / 2; x <= w / 2; x += 28) { circ(x, -h / 2, 9, '#e9dcc0'); circ(x, h / 2, 9, '#e9dcc0'); } for (let y = -h / 2; y <= h / 2; y += 28) { circ(-w / 2, y, 9, '#e9dcc0'); circ(w / 2, y, 9, '#e9dcc0'); } };
  c.shadowColor = 'rgba(0,0,0,.35)'; c.shadowBlur = 30; c.shadowOffsetY = 14; perf(700, 520); c.shadowColor = 'transparent'; rect(-310, -220, 620, 440, null, '#a3281f', 8); rect(-290, -200, 580, 400, null, '#a3281f', 2);
  ell(0, 10, 190, 44, '#1d3f7a'); poly([[-60, -10], [-10, -120], [40, -120], [70, -10]], '#1d3f7a'); poly([[150, 0], [240, -70], [250, 10]], '#1d3f7a'); rect(-170, -40, 340, 12, '#1d3f7a'); rect(-170, 50, 340, 12, '#1d3f7a'); for (let i = 0; i < 6; i++) L([[-150 + i * 60, -40], [-150 + i * 60, 56]], '#1d3f7a', 3); circ(-200, 10, 30, null, '#1d3f7a', 6);
  hatch(-290, -200, 580, 400, 7, 'rgba(163,40,31,.25)', 1); T('AIR MAIL', 0, -160, 44, { f: F.pal, c: '#a3281f', ls: 16, w: 700 }); T('24 CENTS 24', 0, 170, 44, { f: F.pal, c: '#a3281f', ls: 12, w: 700 }); c.restore();
  'COLLAGE'.split('').forEach((ch, i) => { c.save(); c.translate(200 + i * 110, 150 + (i % 2) * 20); c.rotate(rr(-.12, .12)); rect(-46, -56, 92, 112, pick(['#17130f', '#f6efdc', '#a3281f', '#e8b23a'])); T(ch, 0, 6, 90, { f: pick([F.pal, F.blk, F.type, F.did]), c: i % 2 ? '#17130f' : '#f6efdc', s: i % 2 ? null : '#17130f', lw: 2, w: 700 }); c.restore(); });
  c.save(); c.translate(1500, 930); c.rotate(.04); rect(-260, -40, 520, 80, '#f6efdc'); T('VINTAGE ENGRAVING', 0, 2, 38, { f: F.type, c: '#17130f', w: 700 }); c.restore(); grain(18);
};
P['swiss-motion'] = n => {
  fill('#ecebe7'); const K = '#111', R = '#e2231a'; for (let i = 1; i < 12; i++) L([[i * 160, 0], [i * 160, H]], 'rgba(0,0,0,.05)', 1);
  T('Swiss', 160, 300, 210, { f: F.sans, a: 'left', c: K, w: 700, ls: -8 }); T('Motion', 160, 500, 210, { f: F.sans, a: 'left', c: K, w: 700, ls: -8 }); T('Graphics', 160, 700, 210, { f: F.sans, a: 'left', c: R, w: 700, ls: -8 });
  rect(160, 90, 1600, 4, K); T('Grid 12 × 8', 160, 130, 26, { f: F.sans, a: 'left', c: K }); T('Typeface: grotesque', 640, 130, 26, { f: F.sans, a: 'left', c: K }); T('120 bpm', 1120, 130, 26, { f: F.sans, a: 'left', c: K });
  circ(1500, 620, 240, R); c.save(); c.translate(1280, 300); c.rotate(.5); for (let i = 0; i < 7; i++) rect(i * 70, i * 6, 60, 60, i % 2 ? K : '#bdbcb8'); c.restore(); rect(160, 900, 1600, 4, K); T('Five rules for a poster — 1. Use the grid.', 160, 950, 30, { f: F.sans, a: 'left', c: K });
};
P['spy-titles'] = n => {
  fill('#d8342a'); for (let i = 0; i < 6; i++) L([[0, 280 + i * 4], [W, 180 + i * 4]], '#1a1512', 3); poly([[0, 760], [W, 700], [W, H], [0, H]], '#1a1512');
  const K = '#1a1512'; c.save(); c.translate(560, 300); circ(0, -150, 34, K); poly([[-60, -176], [60, -176], [40, -196], [-40, -196]], K); poly([[-30, -120], [30, -120], [50, 20], [-40, 20]], K); L([[-30, -100], [-130, -160]], K, 20); L([[30, -100], [120, -40]], K, 20); L([[-20, 20], [-120, 110], [-170, 100]], K, 22); L([[30, 20], [90, 130], [150, 130]], K, 22); c.restore();
  c.save(); c.translate(1320, 620); circ(0, -230, 36, K); poly([[-70, -250], [70, -250], [46, -276], [-46, -276]], K); poly([[-50, -196], [50, -196], [70, 90], [-70, 90]], K); L([[50, -150], [130, -60]], K, 18); rect(120, -70, 60, 18, '#f1c232'); c.restore();
  circ(300, 880, 150, null, '#f3e6c8', 10); L([[150, 880], [450, 880]], '#f3e6c8', 6); L([[300, 730], [300, 1030]], '#f3e6c8', 6);
  T('THE', 980, 150, 60, { f: F.imp, c: '#f3e6c8', ls: 10 }); T('VELVET', 1000, 260, 150, { f: F.imp, c: '#f3e6c8', rot: -.05 }); T('CIPHER', 1010, 420, 150, { f: F.imp, c: '#f1c232', rot: -.05 }); T('60s SPY TITLE SEQUENCE', 960, 960, 80, { f: F.imp, c: '#d8342a', ls: 8 }); grain(14);
};
P['art-deco'] = n => {
  fill('#0d0b09'); const G = lg(0, 0, W, 0, ['#7a5a1e', '#e2c275', '#fff1c4', '#c9a24a', '#7a5a1e']); const gl = (pts, w = 3) => L(pts, G, w, { cap: 'butt', join: 'miter' });
  for (let i = 0; i < 31; i++) { const a = Math.PI + i / 30 * Math.PI; gl([[960 + Math.cos(a) * 250, 720 + Math.sin(a) * 250], [960 + Math.cos(a) * 1300, 720 + Math.sin(a) * 1300]], i % 2 ? 1.5 : 3); }
  c.beginPath(); c.arc(960, 720, 250, Math.PI, 0); c.strokeStyle = G; c.lineWidth = 5; c.stroke(); c.beginPath(); c.arc(960, 720, 210, Math.PI, 0); c.lineWidth = 2; c.stroke();
  for (let k = 0; k < 6; k++) { const w = 760 - k * 110, y = 720 + k * 46; rect(960 - w / 2, y, w, 46, '#0d0b09', G, 3); } for (let s of [-1, 1]) for (let k = 0; k < 5; k++) gl([[960 + s * (480 + k * 70), 1080], [960 + s * (480 + k * 70), 760 + k * 60], [960 + s * (440 + k * 70), 720 + k * 60]], 3);
  rect(560, 420, 800, 190, '#0d0b09', G, 5); rect(580, 440, 760, 150, null, G, 1.5); T('ART DECO', 960, 500, 110, { f: F.geo, c: G, ls: 26, w: 700 }); T('M I D N I G H T  ·  1 9 3 0', 960, 572, 26, { f: F.geo, c: '#e2c275' });
  poly(star(960, 250, 70, 18, 4), G); poly(star(960, 250, 36, 10, 4, Math.PI / 4), G); circ(960, 250, 110, null, G, 2); grain(8); vig(.5);
};
P['pictogram-motion'] = n => {
  fill('#0f8a6a'); for (let i = 0; i < 6; i++) for (let j = 0; j < 3; j++) { const x = 1160 + i * 130, y = 560 + j * 130; (i + j) % 3 === 0 ? circ(x, y, 56, 'rgba(255,255,255,.07)') : (i + j) % 3 === 1 ? rect(x - 56, y - 56, 112, 112, 'rgba(0,0,0,.07)') : poly([[x - 56, y + 56], [x + 56, y + 56], [x + 56, y - 56]], 'rgba(255,255,255,.07)'); }
  const Wt = '#f5f7f2'; const man = (x, y, s) => { circ(x, y - 190 * s, 36 * s, Wt); rect(x - 40 * s, y - 140 * s, 80 * s, 150 * s, Wt, null, 0, 26 * s); rect(x - 40 * s, y, 32 * s, 150 * s, Wt, null, 0, 14 * s); rect(x + 8 * s, y, 32 * s, 150 * s, Wt, null, 0, 14 * s); };
  man(1700, 700, 1.1); c.save(); c.translate(1560, 120); rect(-10, 0, 20, 300, '#f6b21a'); c.beginPath(); c.moveTo(0, 0); c.quadraticCurveTo(-160, 40, -180, 190); c.lineTo(180, 190); c.quadraticCurveTo(160, 40, 0, 0); c.fillStyle = '#f6b21a'; c.fill(); c.beginPath(); c.arc(30, 300, 30, 0, Math.PI); c.strokeStyle = '#f6b21a'; c.lineWidth = 16; c.stroke(); c.restore();
  T('LINE 4', 140, 130, 28, { f: F.sans, a: 'left', c: Wt, ls: 8 }); T('STOP 03 / 12', 420, 130, 28, { f: F.sans, a: 'left', c: Wt, ls: 8 }); T('PICTOGRAM', 130, 400, 170, { f: F.sans, a: 'left', c: Wt, w: 700, ls: -6 }); T('MOTION', 130, 580, 170, { f: F.sans, a: 'left', c: Wt, w: 700, ls: -6 });
  rect(140, 760, 640, 60, Wt); T('LOST ITEM · UMBRELLA, YELLOW', 160, 792, 30, { f: F.sans, a: 'left', c: '#0f8a6a', w: 700 });
};
P['bauhaus-shapes'] = n => {
  paper('#f2ede1', 6); const B = '#1f3fc4', Y = '#f6c81f', R = '#dc2f24', K = '#17171a'; rect(0, 0, 520, 420, Y); poly([[0, H], [W, 620], [W, H]], B); circ(1500, 360, 250, R); c.beginPath(); c.arc(1500, 360, 330, .2, 2.2); c.strokeStyle = K; c.lineWidth = 16; c.stroke();
  for (let i = 0; i < 5; i++) { c.beginPath(); c.arc(360 + i * 190, 880, 90 + i * 14, Math.PI, 0); c.strokeStyle = K; c.lineWidth = 6; c.stroke(); } poly([[1000, 140], [1180, 460], [820, 460]], null, K, 10); rect(1040, 560, 130, 130, K);
  T('BAUHAUS', 110, 560, 170, { f: F.geo, a: 'left', c: K, w: 700 }); T('shapes', 120, 710, 110, { f: F.geo, a: 'left', c: B }); T('128', 1820, 960, 240, { f: F.geo, a: 'right', c: '#f2ede1', w: 700 }); grain(8);
};
P['flat-space-explainer'] = n => {
  fill(lg(0, 0, W, H, ['#1a1f4f', '#141a3d'])); for (let i = 0; i < 260; i++) circ(rr(0, W), rr(0, H), rr(.8, 2.6), '#fff', null); for (let i = 0; i < 8; i++) T('✦', rr(60, W - 60), rr(60, H - 60), rr(20, 36), { c: '#f5f0dc' });
  c.save(); c.translate(1240, 500); c.rotate(-.35); for (let k = 0; k < 6; k++) ell(0, 0, 520 - k * 80, 190 - k * 30, ['#243a9a', '#2f55c8', '#3f7bea', '#7fb1ff', '#ffd96a', '#fff3c0'][k]); for (let i = 0; i < 260; i++) { const a = rr(0, TAU), r = rr(60, 500); circ(Math.cos(a) * r, Math.sin(a) * r * .36, rr(1.5, 5), pick(['#fff', '#ffd96a', '#ff9d5c', '#bcd6ff'])); } c.restore();
  L([[620, 800], [1100, 590]], '#ffb347', 4, { dash: [4, 14] }); circ(1100, 590, 26, null, '#ffb347', 4); c.save(); c.translate(540, 830); c.rotate(-.5); rect(-50, -34, 100, 68, '#ffb347', null, 0, 30); circ(0, 0, 22, '#1a1f4f'); circ(0, 0, 12, '#7fb1ff'); rect(-120, -20, 60, 40, '#2f55c8'); rect(60, -20, 60, 40, '#2f55c8'); poly([[-20, 34], [0, 80], [20, 34]], '#ff6b4a'); c.restore();
  T('Scale Zoom', 130, 200, 130, { f: F.geo, a: 'left', c: '#f5f0dc', w: 700 }); T('Explainer', 130, 340, 130, { f: F.geo, a: 'left', c: '#f5f0dc', w: 700 }); T('28 powers of ten, from a galaxy to a virus', 136, 440, 34, { f: F.geo, a: 'left', c: '#ffb347' });
  rect(1380, 930, 400, 6, '#2f3a7a'); rect(1380, 930, 150, 6, '#ffb347'); T('FIELD OF VIEW', 1380, 880, 22, { f: F.geo, a: 'left', c: '#8f9be0', ls: 6 }); T('180,000 light-years', 1380, 980, 34, { f: F.geo, a: 'left', c: '#f5f0dc' });
};
P['text-flash-cuts'] = n => {
  fill('#f4f1ea'); const K = '#0c0c0c', R = '#d81e1e'; rect(0, 0, 720, H, K); rect(1560, 0, 360, H, R); for (let i = 0; i < 9; i++) rect(1020 + i * 60, 1080 - (i + 1) * 56, 60, (i + 1) * 56, K);
  T('CUT', 40, 300, 330, { f: F.did, a: 'left', c: '#f4f1ea', w: 700 }); T('TO', 40, 620, 330, { f: F.did, a: 'left', c: R, w: 700 }); T('BLACK', 40, 900, 200, { f: F.did, a: 'left', c: '#f4f1ea', w: 700 });
  T('Text', 800, 190, 150, { f: F.did, a: 'left', c: K, i: 1 }); T('Flash Cuts', 800, 340, 150, { f: F.did, a: 'left', c: K, i: 1 }); T('one word · four frames · no mercy', 806, 450, 32, { f: F.did, a: 'left', c: '#6a665e', i: 1 });
  T('YOUR', 1740, 330, 110, { f: F.did, c: '#f4f1ea', w: 700 }); T('TURN.', 1740, 460, 110, { f: F.did, c: K, w: 700 }); T('EP. 05', 1740, 980, 40, { f: F.did, c: '#f4f1ea', ls: 10 });
};
P['silhouette-rhythm'] = n => {
  fill(lg(0, 0, 0, H, ['#ff5f6d', '#ff9a56', '#ffd36b', '#ff8a5c', '#7a2f6a'])); circ(960, 640, 250, '#fff3c9'); glow('#fff3c9', 120, () => circ(960, 640, 250, '#fff3c9')); rect(0, 640, W, 440, lg(0, 640, 0, H, ['#ff8a5c', '#5a1f5a'])); c.globalAlpha = .5; for (let i = 0; i < 16; i++) rect(960 - 250 + i * 6, 660 + i * 22, 500 - i * 12, 8, '#fff3c9'); c.globalAlpha = 1;
  const K = '#1b0a22'; const fl = (x, y, s) => { c.save(); c.translate(x, y); c.scale(s, s); ell(0, -260, 120, 60, K); c.beginPath(); c.moveTo(90, -280); c.bezierCurveTo(200, -330, 80, -470, 170, -520); c.lineWidth = 26; c.strokeStyle = K; c.lineCap = 'round'; c.stroke(); circ(178, -530, 26, K); poly([[196, -540], [250, -510], [200, -512]], K); poly([[-100, -280], [-220, -330], [-110, -230]], K); L([[-10, -210], [-20, 0]], K, 12); L([[30, -210], [90, -110], [40, 0]], K, 12); c.restore(); };
  fl(700, 960, 1.1); for (let i = 0; i < 7; i++) fl(1080 + i * 120, 900 - i * 14, .45 - i * .03); for (let i = 0; i < 6; i++) { c.save(); c.translate(1300 + i * 90, 230 - i * 16); L([[-36, 0], [0, -14], [36, 0]], K, 9); c.restore(); }
  T('HALF A BEAT', 130, 170, 120, { f: F.imp, a: 'left', c: K, ls: 6 }); T('SILHOUETTE RHYTHM', 134, 260, 36, { f: F.cond, a: 'left', c: K, ls: 14 }); grain(8);
};
P['blueprint'] = n => {
  fill('#1f4f9a'); px(6, (x, y) => { const v = fbm(x / 240, y / 240) * 30; return [26 + v, 72 + v, 146 + v]; }); const Wt = 'rgba(232,240,255,.92)'; for (let x = 0; x < W; x += 40) L([[x, 0], [x, H]], 'rgba(255,255,255,.07)', x % 200 ? 1 : 2, { cap: 'butt' }); for (let y = 0; y < H; y += 40) L([[0, y], [W, y]], 'rgba(255,255,255,.07)', y % 200 ? 1 : 2, { cap: 'butt' });
  rect(60, 50, 1800, 980, null, Wt, 3); const cx = 760, cy = 560; gear(cx, cy, 220, 20, null, Wt, 3); circ(cx, cy, 150, null, Wt, 2); circ(cx, cy, 48, null, Wt, 3); gear(cx + 330, cy - 150, 110, 12, null, Wt, 3, .14); for (let i = 0; i < 6; i++) { const a = i / 6 * TAU; circ(cx + Math.cos(a) * 100, cy + Math.sin(a) * 100, 18, null, Wt, 2); }
  L([[cx - 300, cy], [cx + 300, cy]], Wt, 1, { dash: [30, 8, 6, 8] }); L([[cx, cy - 300], [cx, cy + 300]], Wt, 1, { dash: [30, 8, 6, 8] }); L([[cx - 220, cy + 300], [cx + 220, cy + 300]], Wt, 1.5); L([[cx - 220, cy + 280], [cx - 220, cy + 320]], Wt, 1.5); L([[cx + 220, cy + 280], [cx + 220, cy + 320]], Wt, 1.5); T('Ø 440', cx, cy + 334, 28, { f: F.hand, c: Wt }); L([[cx + 160, cy - 160], [cx + 420, cy - 380], [cx + 560, cy - 380]], Wt, 1.5); T('20 TEETH, MODULE 22', cx + 430, cy - 404, 24, { f: F.hand, a: 'left', c: Wt });
  rect(1300, 800, 560, 230, null, Wt, 3); L([[1300, 880], [1860, 880]], Wt, 2); L([[1300, 950], [1860, 950]], Wt, 2); L([[1580, 880], [1580, 1030]], Wt, 2); T('BLUEPRINT', 1580, 842, 56, { f: F.geo, c: Wt, ls: 14 }); T('FIG. 3', 1320, 916, 26, { f: F.hand, a: 'left', c: Wt }); T('SCALE 1 : 2', 1600, 916, 26, { f: F.hand, a: 'left', c: Wt }); T('DRAWN: V.D.', 1320, 990, 26, { f: F.hand, a: 'left', c: Wt }); T('PATENT PENDING', 1600, 990, 26, { f: F.hand, a: 'left', c: Wt }); grain(10);
};
P['iso-infographic'] = n => {
  paper('#f3ead7', 6); const ox = 1200, oy = 330, L1 = 'rgba(40,40,40,.25)'; box(0, 0, 0, 640, 640, 40, '#7fc8e8', '#5aa7c8', '#4a93b3', ox, oy, 1, L1); box(0, 0, 40, 380, 640, 20, '#9ccc65', '#7cb342', '#689f38', ox, oy, 1, L1);
  box(40, 60, 60, 150, 150, 200, '#8d6e63', '#6d4c41', '#5d4037', ox, oy, 1, L1); box(60, 80, 260, 110, 110, 70, '#66bb6a', '#43a047', '#388e3c', ox, oy, 1, L1);
  for (let i = 0; i < 9; i++) box(230 + (i % 3) * 46, 300 + Math.floor(i / 3) * 80, 60, 36, 60, 40 + (i * 37 % 80), pick(['#ffcc80', '#ef9a9a', '#fff59d', '#b0bec5']), '#c9a66b', '#b08d57', ox, oy, 1, L1);
  box(430, 120, 40, 120, 50, 26, '#ef5350', '#c62828', '#b71c1c', ox, oy, 1, L1); box(470, 400, 40, 50, 140, 26, '#fff', '#cfd8dc', '#b0bec5', ox, oy, 1, L1); for (let i = 0; i < 4; i++) box(60 + i * 60, 520, 60, 30, 30, 34, pick(['#42a5f5', '#ffa726', '#ab47bc']), '#555', '#444', ox, oy, 1, L1);
  const tag = (p, t, v) => { L([p, [p[0] + 60, p[1] - 90], [p[0] + 260, p[1] - 90]], '#333', 2); circ(p[0], p[1], 6, '#333'); T(t, p[0] + 66, p[1] - 118, 22, { f: F.geo, a: 'left', c: '#666', ls: 4 }); T(v, p[0] + 66, p[1] - 60, 40, { f: F.geo, a: 'left', c: '#222', w: 700 }); };
  tag(iso(110, 130, 330, ox, oy), 'HARVEST', '1,600 m'); tag(iso(500, 150, 70, ox, oy), 'SEA · 18 DAYS', '10,500 km');
  T('Isometric', 110, 180, 110, { f: F.geo, a: 'left', c: '#222', w: 700 }); T('Infographic', 110, 300, 110, { f: F.geo, a: 'left', c: '#e2622b', w: 700 }); rect(110, 800, 480, 180, '#fffdf6', '#333', 2, 10); T('FROM BEAN TO CUP', 136, 846, 30, { f: F.geo, a: 'left', c: '#222', w: 700 }); T('11,000 km', 136, 920, 64, { f: F.geo, a: 'left', c: '#e2622b', w: 700 });
};
P['teardown'] = n => {
  fill(rg(960, 500, 100, 1200, ['#2a2d33', '#0c0d10'])); const ox = 760, oy = 420; const lay = (z, h, t, l, r, lab, sub) => { box(0, 0, z, 520, 300, h, t, l, r, ox, oy, 1, 'rgba(255,255,255,.15)'); const p = iso(520, 150, z + h / 2, ox, oy); L([[p[0] + 10, p[1]], [1380, p[1]]], '#8a8f98', 1.5); circ(1380, p[1], 5, '#ff6b35'); T(lab, 1400, p[1] - 14, 34, { f: F.sans, a: 'left', c: '#f0f0f0', w: 600 }); T(sub, 1400, p[1] + 24, 22, { f: F.mono, a: 'left', c: '#8a8f98' }); };
  lay(-60, 40, '#3a3d44', '#24262b', '#1b1d21', 'Case', 'aluminium · 2.0 mm'); lay(80, 16, '#2f6b4f', '#1f4a36', '#17382a', 'Circuit board', 'FR-4 · 1.6 mm'); for (let i = 0; i < 40; i++) { const p = iso(rr(20, 500), rr(20, 280), 96, ox, oy); circ(p[0], p[1], 3, '#d9c27a'); }
  lay(200, 14, '#b9bcc2', '#8e9197', '#74777c', 'Plate', 'steel · 1.5 mm'); lay(310, 30, '#4a4d55', '#33363c', '#26282d', 'Switches', '62 × linear');
  for (let i = 0; i < 6; i++) for (let j = 0; j < 4; j++) box(14 + i * 86, 12 + j * 72, 450, 70, 58, 30, (i === 5 && j === 0) ? '#ff6b35' : '#ecebe6', '#bdbcb6', '#a3a29c', ox, oy, 1, 'rgba(0,0,0,.25)'); const p = iso(520, 150, 465, ox, oy); L([[p[0] + 10, p[1]], [1380, p[1]]], '#8a8f98', 1.5); circ(1380, p[1], 5, '#ff6b35'); T('Keycaps', 1400, p[1] - 14, 34, { f: F.sans, a: 'left', c: '#f0f0f0', w: 600 }); T('PBT · 1.5 mm wall', 1400, p[1] + 24, 22, { f: F.mono, a: 'left', c: '#8a8f98' });
  L([iso(260, 150, -80, ox, oy), iso(260, 150, 520, ox, oy)], 'rgba(255,255,255,.25)', 1, { dash: [6, 8] }); T('EXPLODED', 110, 900, 90, { f: F.sans, a: 'left', c: '#f0f0f0', w: 700, ls: 4 }); T('TEARDOWN', 110, 1000, 90, { f: F.sans, a: 'left', c: '#ff6b35', w: 700, ls: 4 }); grain(8);
};
P['hardcore-info'] = n => {
  paper('#f4f2ec', 5); for (let x = 0; x < W; x += 30) L([[x, 0], [x, H]], 'rgba(0,0,0,.03)', 1); for (let y = 0; y < H; y += 30) L([[0, y], [W, y]], 'rgba(0,0,0,.03)', 1); const K = '#1c1c1e', O = '#ef5a2a';
  rect(700, 220, 900, 620, null, K, 5, 70); rect(730, 250, 840, 560, null, K, 2, 46); hatch(700, 220, 30, 620, 8, K, 1); hatch(1570, 220, 30, 620, 8, K, 1); rect(760, 290, 420, 300, null, K, 3, 12); T('4,575 mAh', 970, 440, 40, { f: F.mono, c: K }); hatch(760, 290, 420, 300, 14, 'rgba(0,0,0,.12)', 1, -1);
  rect(1220, 290, 320, 180, null, K, 3, 8); for (let i = 0; i < 4; i++) for (let j = 0; j < 2; j++) rect(1240 + i * 72, 310 + j * 76, 56, 60, null, K, 1.5); circ(1380, 640, 110, null, K, 3); circ(1380, 640, 80, null, K, 1.5); circ(1380, 640, 40, null, K, 1.5); rect(760, 640, 420, 130, null, K, 3, 8); for (let i = 0; i < 12; i++) L([[780 + i * 34, 650], [780 + i * 34, 760]], K, 1);
  rect(696, 300, 12, 200, O); L([[702, 400], [520, 400], [460, 340]], O, 3); circ(702, 400, 7, O); T('THE EDGE', 110, 250, 80, { f: F.sans, a: 'left', c: K, w: 800 }); T('IS THE', 110, 340, 80, { f: F.sans, a: 'left', c: K, w: 800 }); T('ANTENNA.', 110, 430, 80, { f: F.sans, a: 'left', c: O, w: 800 });
  T('LINE-ART CUTAWAY', 110, 150, 26, { f: F.mono, a: 'left', c: '#6a6a6e', ls: 6 }); rect(110, 890, 6, 100, K); T('From the chip, a thin cable carries the signal to the frame.', 136, 920, 30, { f: F.sans, a: 'left', c: K }); T('FIG. 2 · section A–A · not to scale', 136, 968, 22, { f: F.mono, a: 'left', c: '#6a6a6e' });
};
P['precise-mechanism'] = n => {
  fill('#f1efe9'); rect(0, 800, W, 280, lg(0, 800, 0, H, ['#e4e1d9', '#f1efe9'])); const sh = (fn) => { c.save(); c.shadowColor = 'rgba(0,0,0,.22)'; c.shadowBlur = 30; c.shadowOffsetY = 18; fn(); c.restore(); };
  sh(() => rect(360, 420, 1200, 360, '#e6e4de', '#c8c5bc', 2, 180)); sh(() => gear(620, 600, 150, 30, '#e9b93a', '#b88a1c', 2)); circ(620, 600, 110, null, '#b88a1c', 2); for (let i = 0; i < 40; i++) { c.beginPath(); c.arc(620, 600, 30 + i * 1.8, i * .4, i * .4 + 5); c.strokeStyle = '#8a6a14'; c.lineWidth = 1.2; c.stroke(); }
  sh(() => gear(900, 500, 104, 22, '#5fb3a1', '#3a8a78', 2, .1)); sh(() => gear(1080, 590, 80, 18, '#5fb3a1', '#3a8a78', 2, .3)); sh(() => gear(1230, 500, 60, 14, '#5fb3a1', '#3a8a78', 2)); sh(() => gear(1340, 620, 70, 15, '#6f8fd6', '#3f5fa8', 2, .2)); sh(() => circ(1470, 560, 90, null, '#6f8fd6', 12)); L([[1470, 470], [1470, 650]], '#6f8fd6', 8); L([[1380, 560], [1560, 560]], '#6f8fd6', 8); circ(1470, 560, 14, '#c0392b');
  const lab = (x, y, t, col) => { L([[x, y], [x, y - 190]], '#555', 1); circ(x, y, 5, col); T(t, x, y - 210, 22, { f: F.mono, c: '#444', ls: 3 }); }; lab(620, 450, 'POWER · BARREL', '#b88a1c'); lab(1000, 400, 'GEAR TRAIN', '#3a8a78'); lab(1470, 470, 'REGULATOR', '#3f5fa8');
  T('4,800×', 110, 940, 140, { f: F.sans, a: 'left', c: '#222', w: 300 }); T('from the barrel to the escape wheel', 120, 1020, 26, { f: F.mono, a: 'left', c: '#666' }); T('COLOR-CODED MECHANISM', 1810, 120, 28, { f: F.mono, a: 'right', c: '#444', ls: 8 }); grain(5);
};
P['instruction-manual'] = n => {
  paper('#f6f4ee', 4); const K = '#1b1b1b', Y = '#f6c61e'; T('1', 150, 190, 230, { f: F.sans, c: K, w: 800 }); const ox = 900, oy = 420, s = 1.1;
  box(0, 0, 0, 300, 200, 150, '#fff', '#fff', '#ecebe5', ox, oy, s, K); poly([iso(0, 0, 150, ox, oy, s), iso(300, 0, 150, ox, oy, s), iso(300, -140, 260, ox, oy, s), iso(0, -140, 260, ox, oy, s)], '#fff', K, 2); box(-220, 240, 0, 200, 14, 120, '#fff', '#fff', '#ecebe5', ox, oy, s, K); box(360, 260, 0, 160, 120, 10, '#fff', '#fff', '#ecebe5', ox, oy, s, K); for (let i = 0; i < 6; i++) L([iso(-210 + i * 36, 254, 6, ox, oy, s), iso(-210 + i * 36, 254, 116, ox, oy, s)], K, 2);
  L([iso(-120, 247, 130, ox, oy, s), iso(120, 100, 190, ox, oy, s)], K, 1.5, { dash: [6, 8] }); L([iso(440, 320, 14, ox, oy, s), iso(200, 140, 30, ox, oy, s)], K, 1.5, { dash: [6, 8] });
  const cnt = (x, y, t) => { T(t, x, y, 44, { f: F.sans, c: K, w: 700 }); }; cnt(560, 560, '2×'); cnt(1400, 820, '1×'); cnt(1420, 300, '8×'); L([[1480, 290], [1560, 270]], K, 6); circ(1568, 268, 8, K);
  circ(1640, 640, 110, '#fff', K, 3); L([[1590, 690], [1700, 580]], K, 10); circ(1590, 690, 20, null, K, 8); L([[1560, 600], [1320, 560]], K, 1.5);
  rect(120, 880, 12, 110, Y); T('A box of parts, and one small key.', 156, 912, 40, { f: F.sans, a: 'left', c: K, w: 600 }); T('INSTRUCTION MANUAL ART', 156, 968, 24, { f: F.sans, a: 'left', c: '#77756f', ls: 8 }); c.save(); c.translate(1700, 150); poly([[0, -70], [80, 70], [-80, 70]], Y, K, 5); T('!', 0, 28, 80, { f: F.sans, c: K, w: 800 }); c.restore();
};
P['pen-plotter'] = n => {
  paper('#f3eee2', 6); const K = '#2b2622'; for (let lev = 0; lev < 26; lev++) { const r0 = 30 + lev * 26; for (const [cx, cy, k] of [[700, 540, 1], [1260, 480, .7]]) { const p = []; for (let i = 0; i <= 120; i++) { const a = i / 120 * TAU, r = r0 * k * (1 + .35 * fbm(Math.cos(a) * 1.6 + cx / 100, Math.sin(a) * 1.6 + lev * .09)); p.push([cx + Math.cos(a) * r * 1.3, cy + Math.sin(a) * r * .8]); } L(p, lev % 5 ? K : '#a3281f', lev % 5 ? 1.2 : 2); } }
  L([[120, 100], [1800, 100], [1800, 980], [120, 980], [120, 100]], K, 2); for (let i = 0; i < 9; i++) { L([[120 + i * 210, 100], [120 + i * 210, 86]], K, 1.5); T(86 + i + '°E', 120 + i * 210, 66, 20, { f: F.mono, c: K }); }
  circ(700, 540, 9, null, '#a3281f', 2.5); L([[710, 532], [860, 420]], K, 1.2); T('SUMMIT 5,200 m', 870, 410, 26, { f: F.mono, a: 'left', c: K });
  c.save(); c.translate(1350, 760); c.rotate(.35); rect(-34, -330, 68, 260, '#1b1b1d', null, 0, 12); rect(-22, -80, 44, 70, '#c8312a', null, 0, 8); poly([[-14, -10], [14, -10], [0, 34]], '#c8312a'); c.restore();
  rect(1380, 860, 400, 100, '#f3eee2', K, 2); T('PEN PLOTTER', 1580, 896, 38, { f: F.mono, c: K, ls: 6 }); T('one pen · one line at a time', 1580, 938, 20, { f: F.mono, c: K });
};
P['assembly-line-diagram'] = n => {
  paper('#f7efdc', 6); const K = '#1f1d1a', T1 = '#2fa39a', R = '#e2543e', Y = '#f2b63a'; rect(0, 760, W, 30, K); for (let i = 0; i < 40; i++) circ(30 + i * 50, 775, 9, '#f7efdc'); for (let i = 0; i < 9; i++) { L([[120 + i * 210, 790], [80 + i * 210, 1000]], K, 6); L([[160 + i * 210, 790], [200 + i * 210, 1000]], K, 6); }
  const stn = (x, w, h, col, num, lab) => { rect(x, 760 - h, w, h, col, K, 5, 12); circ(x + 34, 760 - h - 40, 28, '#fff', K, 4); T(num, x + 34, 760 - h - 38, 30, { f: F.cond, c: K, w: 700 }); rect(x + 70, 760 - h - 64, w - 70, 48, '#fff', K, 4, 6); T(lab, x + 70 + (w - 70) / 2, 760 - h - 38, 26, { f: F.cond, c: K, w: 700 }); };
  stn(140, 300, 260, T1, '1', 'CRUSHER'); for (let i = 0; i < 5; i++) rect(170 + i * 52, 560, 34, 160, '#fff', K, 4, 6); stn(560, 280, 200, Y, '2', 'SIEVE'); for (let i = 0; i < 9; i++) L([[590 + i * 28, 580], [590 + i * 28, 740]], K, 3); stn(960, 320, 300, R, '3', 'BOILER'); circ(1120, 610, 90, '#fff', K, 5); L([[1120, 610], [1170, 560]], K, 6); stn(1400, 340, 230, '#8fb8e8', '4', 'PACKING'); for (let i = 0; i < 3; i++) rect(1430 + i * 100, 620, 80, 100, '#fff', K, 4);
  for (const x of [470, 880, 1320]) { L([[x, 660], [x + 60, 660]], K, 7); L([[x + 40, 640], [x + 64, 660], [x + 40, 680]], K, 7); } c.beginPath(); c.moveTo(1000, 460); c.bezierCurveTo(1000, 300, 700, 380, 700, 200); c.lineWidth = 34; c.strokeStyle = '#f0a3a0'; c.stroke(); c.lineWidth = 5; c.strokeStyle = K; c.stroke();
  for (let i = 0; i < 5; i++) person(260 + i * 340 + rr(-20, 20), 760, 90, K, 6);
  rect(110, 70, 760, 200, '#fff', K, 6); T('THE', 140, 110, 30, { f: F.cond, a: 'left', c: K, w: 700 }); T('ASSEMBLY', 136, 190, 110, { f: F.imp, a: 'left', c: K }); T('LINE', 610, 190, 110, { f: F.imp, a: 'left', c: R }); T('A factory tour, cut open in elevation', 880 + 30, 240, 30, { f: F.cond, a: 'left', c: K });
};
