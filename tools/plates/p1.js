// Plates 1: Edit & Documentary, Painting & Illustration, Sketch & Board, Traditional Crafts
P['caption-news'] = n => {
  fill(lg(0, 0, 0, H, ['#3a332b', '#0f0d0b'])); for (let i = 0; i < 60; i++) circ(rr(0, W), rr(80, 760), rr(40, 170), `rgba(${ri(150, 235)},${ri(100, 160)},40,.08)`);
  for (let i = 0; i < 9; i++) rect(180 + i * 180, 300 + (i % 3) * 30, 120, 420, 'rgba(240,220,170,.06)');
  grain(16); vig(.6); rect(96, 52, 250, 48, '#ffd400'); T('VD NEWS', 221, 77, 27, { f: F.blk, c: '#111' });
  rect(112, 812, 640, 140, '#ffd400'); T('CAPTION', 130, 884, 108, { f: F.blk, a: 'left', c: '#111' }); T('NEWS', 790, 884, 108, { f: F.blk, a: 'left', c: '#f7f5ef', sh: 'rgba(0,0,0,.8)' });
  T('One line, set huge. The caption is the shot.', 124, 1004, 38, { f: F.sans, a: 'left', c: '#cfc9bd' });
};
P['newsreel'] = n => {
  fill('#0a0a0a'); rect(240, 60, 1440, 960, lg(0, 60, 0, 1020, ['#8d897f', '#3b3935']));
  clipTo(() => c.rect(240, 60, 1440, 960), () => { for (let i = 0; i < 16; i++) L(star(960, 640, 1300, 0, 1, -Math.PI / 2 + (i - 8) * .2).concat([[960, 640]]), null, 0, { close: 1, fill: i % 2 ? 'rgba(255,255,255,.07)' : 'rgba(0,0,0,.07)' }); circ(960, 580, 250, '#d9d4c7'); circ(960, 580, 250, null, '#1c1b19', 10); });
  rect(300, 120, 1320, 840, null, '#ece7dc', 5); rect(322, 142, 1276, 796, null, '#ece7dc', 2);
  T('1920s', 960, 545, 140, { f: F.did, c: '#141312', w: 700 }); T('NEWSREEL', 970, 655, 44, { f: F.did, c: '#141312', ls: 14 });
  T('THE WORLD IN MOTION', 960, 220, 54, { f: F.did, c: '#ece7dc', ls: 16 }); T('· WEEKLY EDITION ·', 960, 900, 32, { f: F.did, c: '#ece7dc', ls: 12 });
  for (let i = 0; i < 26; i++) L([[rr(240, 1680), 60], [rr(240, 1680), 1020]].map((p, k, a) => [a[0][0] + rr(-3, 3), p[1]]), 'rgba(255,255,255,.18)', rr(.5, 2));
  for (let i = 0; i < 80; i++) circ(rr(240, 1680), rr(60, 1020), rr(1, 4), 'rgba(0,0,0,.4)'); grain(34); vig(.75);
};
P['countdown'] = n => {
  fill('#0d0f12'); const cell = (x, y, w, h, tag, a, b) => { rect(x, y, w, h, lg(x, y, x, y + h, [a, b])); rect(x, y, w, h, null, '#2a2f37', 2); rect(x + 14, y + 14, 150, 34, 'rgba(0,0,0,.7)'); circ(x + 32, y + 31, 7, '#ff6a1a'); T(tag, x + 48, y + 32, 20, { f: F.mono, a: 'left', c: '#e8e8e8' }); };
  cell(40, 40, 1160, 640, 'CAM 1 · PAD', '#59646b', '#1c2126'); poly([[560, 680], [600, 190], [620, 120], [640, 190], [680, 680]], '#d8dadc'); rect(520, 400, 40, 280, '#b9bcc0'); rect(680, 400, 40, 280, '#b9bcc0'); poly([[604, 190], [620, 120], [636, 190]], '#ff6a1a');
  for (let i = 0; i < 8; i++) L([[760 + i * 22, 680], [770 + i * 22, 200 + i * 18]], '#3c444b', 4);
  cell(1220, 40, 660, 310, 'CAM 2 · CONTROL', '#3b4a44', '#151b19'); for (let i = 0; i < 5; i++) { rect(1270 + i * 120, 190, 80, 110, '#0c1110'); rect(1280 + i * 120, 200, 60, 40, pick(['#3fa37a', '#2f6f8f', '#b9892f'])); }
  cell(1220, 370, 660, 310, 'CAM 3 · CREW', '#6a4a2c', '#1d1510'); for (let i = 0; i < 4; i++) { circ(1340 + i * 140, 500, 34, '#e9c9a6'); rect(1296 + i * 140, 540, 88, 140, '#ff6a1a', null, 0, 20); }
  rect(40, 700, 1840, 340, '#14171c'); T('T−00:10', 80, 880, 230, { f: F.cond, a: 'left', c: '#ff6a1a', w: 700 }); T('.00', 880, 925, 90, { f: F.cond, a: 'left', c: '#ff6a1a', al: .6 });
  T('LIVE COUNTDOWN', 1150, 800, 46, { f: F.cond, a: 'left', c: '#fff', ls: 6 }); T('SPLIT-SCREEN', 1150, 860, 46, { f: F.cond, a: 'left', c: '#8d95a1', ls: 6 });
  rect(1150, 930, 680, 16, '#262b33'); rect(1150, 930, 560, 16, '#ff6a1a'); T('ALL STATIONS GO', 1150, 990, 26, { f: F.mono, a: 'left', c: '#8d95a1' }); grain(10);
};
P['city-symphony'] = n => {
  fill(lg(0, 0, 0, H, ['#1b2233', '#4a3b4a', '#c27a4a'])); let x = 0;
  for (let layer = 0; layer < 3; layer++) { x = -20; const base = 620 + layer * 120, col = ['#2a2d3f', '#1a1c29', '#0c0d13'][layer]; while (x < W) { const w = rr(50, 150), h = rr(120, 520 - layer * 90); rect(x, base - h, w, h + 500, col); if (layer) for (let wy = base - h + 16; wy < base + 200; wy += 22) for (let wx = x + 8; wx < x + w - 10; wx += 16) if (rnd() < .3) rect(wx, wy, 8, 11, `rgba(255,${ri(180, 230)},130,${rr(.4, 1)})`); x += w + rr(2, 14); } }
  for (let i = 0; i < 14; i++) L([[0, 980 + i * 6], [W, 950 + i * 7]], `rgba(255,${180 + i * 4},90,.5)`, rr(1, 4), { sh: '#ffb060', sb: 16 });
  grain(14); vig(.5); T('8,804,190', 140, 420, 120, { f: F.geo, a: 'left', c: '#f3ece0', ls: 6 }); rect(140, 494, 520, 3, '#f0a34a');
  T('CITY SYMPHONY', 140, 546, 44, { f: F.geo, a: 'left', c: '#f3ece0', ls: 14 }); T('ONE DAY, CUT TO THE BEAT', 140, 600, 24, { f: F.geo, a: 'left', c: '#f0a34a', ls: 8 });
};
P['visual-investigation'] = n => {
  fill('#0b0c0e'); rect(90, 150, 1010, 620, lg(0, 150, 0, 770, ['#7b7b78', '#2c2c2b'])); ell(600, 420, 330, 62, '#c9c9c4'); poly([[900, 400], [990, 360], [980, 440]], '#c9c9c4'); grain(40); rect(90, 150, 1010, 620, null, '#3a3d42', 2);
  circ(690, 432, 70, null, '#e23b2e', 5); L([[742, 384], [1180, 250]], '#e23b2e', 3); rect(90, 800, 1010, 6, '#22252a'); rect(90, 800, 640, 6, '#e23b2e'); T('00:04:32', 90, 846, 30, { f: F.mono, a: 'left', c: '#e8e8e8' });
  for (let i = 0; i < 28; i++) rect(96 + i * 36, 880, 30, 46, i === 17 ? '#e23b2e' : '#1b1e22');
  T('VISUAL INVESTIGATION', 1190, 196, 24, { f: F.mono, a: 'left', c: '#e23b2e', ls: 4 }); T('Visual', 1186, 300, 112, { f: F.sans, a: 'left', c: '#f2f2f0', w: 700 }); T('Investigation', 1186, 420, 100, { f: F.sans, a: 'left', c: '#f2f2f0', w: 700 });
  rect(1190, 500, 4, 150, '#e23b2e'); T('Frame 2,714 · the first flame', 1214, 530, 30, { f: F.sans, a: 'left', c: '#b9bcc2' }); T('Source: newsreel, public domain', 1214, 580, 26, { f: F.mono, a: 'left', c: '#7d828b' }); T('Every claim carries its evidence.', 1214, 630, 26, { f: F.sans, a: 'left', c: '#7d828b', i: 1 });
};
P['kino-montage'] = n => {
  paper('#e8dfcb', 18); poly([[0, 700], [W, 380], [W, 600], [0, 920]], '#d02a1e'); poly([[1330, 0], [1640, 0], [1250, 1080], [940, 1080]], '#151412');
  c.save(); c.translate(430, 300); c.rotate(-.16); rect(-250, -180, 500, 360, lg(0, -180, 0, 180, ['#9a968c', '#2e2c29'])); for (let i = 0; i < 7; i++) rect(-220 + i * 66, 180 - 50 - i * 36, 42, 50 + i * 36, '#151412'); rect(-250, -180, 500, 360, null, '#151412', 10); c.restore();
  T('410', 250, 716, 250, { f: F.imp, a: 'left', c: '#e8dfcb', s: '#151412', lw: 8, rot: -.165 }); T('DAYS', 700, 640, 90, { f: F.imp, a: 'left', c: '#151412', rot: -.165, ls: 10 });
  T('CONSTRUCTIVIST', 100, 990, 110, { f: F.imp, a: 'left', c: '#151412', ls: 4 }); T('MONTAGE', 1840, 170, 150, { f: F.imp, a: 'right', c: '#d02a1e' }); T('MONTAGE', 1840, 170, 150, { f: F.imp, a: 'right', c: null, s: '#151412', lw: 3 });
  circ(1640, 860, 120, '#151412'); circ(1640, 860, 64, '#d02a1e'); grain(22);
};
P['telestrator'] = n => {
  fill(lg(0, 0, 0, H, ['#1f5a2c', '#2f7a3a'])); for (let i = 0; i < 12; i++) if (i % 2) poly([[i * 190 - 200, 200], [i * 190 - 10, 200], [i * 230 - 420, H], [i * 230 - 650, H]], 'rgba(255,255,255,.05)');
  L([[120, 240], [1800, 240]], '#e9f2e6', 5); L([[40, 1000], [1880, 1000]], '#e9f2e6', 5); L([[660, 240], [520, 1000]], '#e9f2e6', 5); ell(980, 620, 250, 120, null, '#e9f2e6', 5); rect(0, 0, W, 200, lg(0, 0, 0, 200, ['#14161a', '#2b2e35']));
  for (let i = 0; i < 400; i++) circ(rr(0, W), rr(10, 190), rr(3, 6), `hsla(${ri(0, 360)},40%,${ri(30, 70)}%,.7)`);
  ell(1240, 640, 300, 150, 'rgba(255,221,0,.22)', '#ffdd00', 4); const pl = (x, y, col) => { ell(x, y + 34, 22, 8, 'rgba(0,0,0,.35)'); rect(x - 10, y - 20, 20, 50, col, null, 0, 8); circ(x, y - 32, 11, '#f0d2b0'); };
  [[1100, 600], [1250, 700], [1380, 610], [760, 520], [540, 760]].forEach(p => pl(p[0], p[1], '#fff')); [[1180, 660], [1320, 560], [900, 700], [640, 600]].forEach(p => pl(p[0], p[1], '#111'));
  c.save(); c.setLineDash([26, 16]); c.strokeStyle = '#ffdd00'; c.lineWidth = 8; c.shadowColor = '#000'; c.shadowBlur = 8; c.beginPath(); c.moveTo(560, 730); c.quadraticCurveTo(900, 260, 1230, 610); c.stroke(); c.restore(); poly([[1230, 610], [1180, 590], [1212, 560]], '#ffdd00');
  circ(1250, 700, 44, null, '#ffdd00', 6); rect(110, 860, 560, 110, '#101114'); rect(110, 860, 12, 110, '#ffdd00'); T('SPORTS TELESTRATOR', 146, 898, 40, { f: F.cond, a: 'left', c: '#fff', w: 700 }); T('FREEZE · DRAW · EXPLAIN', 146, 944, 24, { f: F.cond, a: 'left', c: '#ffdd00', ls: 4 }); grain(10);
};
P['news-package'] = n => {
  fill(lg(0, 0, W, H, ['#0d1730', '#060914'])); for (let i = 0; i < 14; i++) poly([[i * 220 - 400, H], [i * 220 - 260, H], [i * 220 + 380, 0], [i * 220 + 240, 0]], 'rgba(255,196,0,.045)');
  circ(1450, 470, 300, rg(1450, 470, 20, 300, ['#2a57c9', '#0b1b4a'])); for (let i = 0; i < 9; i++) ell(1450, 470, 300, 300 * Math.abs(Math.cos(i * .35)), null, 'rgba(160,200,255,.25)', 2); for (let i = 1; i < 6; i++) L([[1150, 170 + i * 100], [1750, 170 + i * 100]], 'rgba(160,200,255,.2)', 2);
  rect(96, 56, 330, 64, '#ffc400'); T('VD NEWS · LIVE', 261, 90, 28, { f: F.blk, c: '#0b0f1c' });
  T('THE WEEK', 100, 360, 150, { f: F.blk, a: 'left', c: '#fff' }); T('IN REVIEW', 100, 510, 150, { f: F.blk, a: 'left', c: '#ffc400' });
  rect(96, 856, 280, 48, '#ffc400'); T('TOP STORIES', 236, 881, 24, { f: F.blk, c: '#0b0f1c' }); rect(96, 904, 1250, 104, '#f4f5f8'); rect(1346, 904, 120, 104, '#0b0f1c'); T('Broadcast News Package', 126, 958, 54, { f: F.sans, a: 'left', c: '#0b0f1c', w: 700 }); T('01', 1406, 958, 48, { f: F.blk, c: '#ffc400' }); grain(8);
};
P['crayon-book'] = n => {
  paper('#283a78', 10); const cr = (x, y, w, h, shape, col, k, len = 44, lw = 6) => { c.save(); c.beginPath(); shape(); c.clip(); for (let i = 0; i < k; i++) { const a = x + rr(-30, w + 30), b = y + rr(-30, h + 30), an = -.5 + rr(-.25, .25); L([[a, b], [a + Math.cos(an) * len, b + Math.sin(an) * len]], col, rr(lw * .6, lw * 1.2), { al: rr(.4, .85) }); } c.restore(); };
  cr(0, 0, W, H, () => c.rect(0, 0, W, H), '#31478f', 2600, 70); cr(1250, 130, 340, 340, () => c.arc(1420, 300, 170, 0, TAU), '#ffd23c', 1300); cr(1250, 130, 340, 340, () => c.arc(1420, 300, 170, 0, TAU), '#ffb52a', 300); cr(0, 800, W, 280, () => c.rect(0, 800, W, 280), '#3c8f4a', 2200, 60); cr(0, 800, W, 280, () => c.rect(0, 800, W, 280), '#5fb85a', 600, 60);
  cr(520, 560, 420, 280, () => c.rect(520, 560, 420, 280), '#f6ecd0', 1100); cr(480, 380, 500, 200, () => { c.moveTo(480, 570); c.lineTo(730, 380); c.lineTo(980, 570); c.closePath(); }, '#d43d32', 1000); cr(690, 690, 80, 150, () => c.rect(690, 690, 80, 150), '#7a4a26', 300); cr(570, 620, 80, 70, () => c.rect(570, 620, 80, 70), '#ffd23c', 200); cr(820, 620, 80, 70, () => c.rect(820, 620, 80, 70), '#ffd23c', 200);
  for (let i = 0; i < 46; i++) T('★', rr(40, W - 40), rr(30, 520), rr(18, 40), { c: '#fff7c9', al: rr(.5, 1), rot: rr(0, 1) });
  circ(1375, 280, 14, '#283a78'); circ(1465, 280, 14, '#283a78'); L([[1370, 350], [1420, 380], [1470, 350]], '#283a78', 9);
  T('Crayon', 180, 180, 130, { f: F.hand, a: 'left', c: '#ffd23c', w: 700, rot: -.04 }); T('Picture Book', 190, 310, 100, { f: F.hand, a: 'left', c: '#fff7e0', w: 700, rot: -.04 }); grain(14);
};
P['watercolor'] = n => {
  paper('#f7f2e6', 8); const wash = (x, y, r, col, k = 26) => { for (let i = 0; i < k; i++) poly(ring(x + rr(-r * .15, r * .15), y + rr(-r * .1, r * .1), r * rr(.6, 1), 26, r * .22, rr(.5, .8)), col); };
  c.globalAlpha = .05; wash(960, 330, 620, '#5b8fc4'); wash(500, 420, 380, '#7ab0d8'); wash(1400, 400, 420, '#9a86c2'); c.globalAlpha = .06; wash(700, 800, 520, '#5c9a62'); wash(1300, 830, 480, '#3f7d55'); wash(960, 900, 700, '#8fb95e', 18);
  c.globalAlpha = .09; for (let i = 0; i < 9; i++) wash(260 + i * 180 + rr(-30, 30), 640 + rr(-30, 30), rr(70, 120), pick(['#2f6b47', '#3f7d55', '#547a3a']), 12); c.globalAlpha = 1;
  for (let i = 0; i < 9; i++) { const x = 260 + i * 180; L(wob(x, 700, x + rr(-12, 12), 900, 3), '#4a3a2a', rr(3, 7), { al: .7 }); }
  for (let i = 0; i < 60; i++) L([[rr(100, 1800), rr(60, 420)], [0, 0]].map((p, k, a) => k ? [a[0][0] - 8, a[0][1] + 34] : p), '#5b8fc4', 2, { al: .35 });
  T('Watercolor Brush', 960, 250, 120, { f: F.pal, c: '#2e3d4f', i: 1 }); L(wob(640, 330, 1280, 334, 2), '#5b8fc4', 5, { al: .6 }); T('pigment, water, and the white of the paper', 960, 380, 34, { f: F.pal, c: '#5a6b7c', i: 1 }); grain(8);
};
P['impasto'] = n => {
  px(4, (x, y) => { const t = y / H, s = fbm(x / 260, y / 180); return [lerp(30, 250, t) + s * 60, lerp(40, 160, t) + s * 50, lerp(110, 60, t) + s * 60]; });
  const dab = (x, y, col, w, l, a) => { c.save(); c.translate(x, y); c.rotate(a); rect(-l / 2, -w / 2, l, w, col, null, 0, w / 2); rect(-l / 2, -w / 2, l, w * .3, 'rgba(255,255,255,.22)', null, 0, w / 2); rect(-l / 2, w * .2, l, w * .3, 'rgba(0,0,0,.2)', null, 0, w / 2); c.restore(); };
  for (let i = 0; i < 900; i++) { const y = rr(0, 620), t = y / 620; dab(rr(0, W), y, `rgb(${lerp(35, 250, t) + rr(-25, 25)},${lerp(50, 150, t) + rr(-25, 25)},${lerp(130, 70, t) + rr(-25, 25)})`, rr(14, 26), rr(50, 110), Math.sin(y / 90 + rr(-.4, .4)) * .6); }
  for (let i = 0; i < 14; i++) { const x = 60 + i * 135, h = rr(180, 380); for (let k = 0; k < 40; k++) dab(x + rr(0, 110), 640 - rr(0, h), pick(['#1b2440', '#27305a', '#3a2f55', '#ffcf5a']), rr(12, 20), rr(30, 60), rr(-.2, .2) + Math.PI / 2); }
  for (let i = 0; i < 700; i++) { const y = rr(640, H); dab(rr(0, W), y, pick(['#3b3558', '#6a4a6a', '#e9a23b', '#f4d06a', '#2a2f52', '#c8693a']), rr(12, 24), rr(50, 120), rr(-.12, .12)); }
  circ(1500, 200, 80, '#ffe9a8'); for (let i = 0; i < 60; i++) dab(1500 + rr(-110, 110), 200 + rr(-110, 110), pick(['#ffe9a8', '#ffd76a', '#fff6d8']), 14, 44, rr(0, TAU));
  T('Impasto', 150, 880, 170, { f: F.pal, a: 'left', c: '#fff3d0', w: 700, sh: 'rgba(20,10,30,.8)', sy: 6, sb: 10 }); T('OIL PAINTING', 160, 990, 44, { f: F.pal, a: 'left', c: '#fff3d0', ls: 16, sh: 'rgba(20,10,30,.8)', sb: 8 }); grain(12, true);
};
P['urban-sketch'] = n => {
  paper('#f6f1e4', 8); const wash = (pts, col) => { c.globalAlpha = .28; for (let i = 0; i < 4; i++) poly(pts.map(p => [p[0] + rr(-10, 10), p[1] + rr(-10, 10)]), col); c.globalAlpha = 1; };
  wash([[0, 0], [W, 0], [W, 380], [0, 430]], '#9cc3e2'); wash([[0, 800], [W, 780], [W, H], [0, H]], '#b8c98a');
  let x = 160; for (let i = 0; i < 9; i++) { const w = rr(120, 200), h = rr(260, 520), y = 800 - h; wash([[x, y], [x + w, y], [x + w, 800], [x, 800]], pick(['#e2b98d', '#c9d2dc', '#e8c9a8', '#d7b7a1'])); [[x, 800, x, y], [x, y, x + w, y], [x + w, y, x + w, 800]].forEach(l => { L(wob(l[0], l[1], l[2], l[3], 2.4), '#2b2622', 2.4); L(wob(l[0], l[1], l[2], l[3], 3), '#2b2622', 1, { al: .5 }); });
    for (let wy = y + 26; wy < 760; wy += 46) for (let wx = x + 18; wx < x + w - 26; wx += 34) rect(wx + rr(-2, 2), wy, 16, 24, null, '#2b2622', 1.3); x += w + rr(-6, 30); }
  L(wob(60, 802, 1860, 800, 3, 40), '#2b2622', 3); for (let i = 0; i < 12; i++) { const px2 = rr(200, 1700); person(px2, rr(840, 960), rr(50, 80), '#2b2622', 3); }
  wash(ring(300, 760, 90, 20, 20), '#5d8a4e'); wash(ring(1650, 740, 110, 20, 26), '#5d8a4e'); L(wob(300, 800, 300, 860, 2), '#2b2622', 4); L(wob(1650, 790, 1650, 870, 2), '#2b2622', 4);
  T('Urban Sketch', 150, 160, 110, { f: F.script, a: 'left', c: '#2b2622' }); T('pen & wash', 160, 260, 54, { f: F.script, a: 'left', c: '#7a6a58' });
};
P['colored-pencil'] = n => {
  paper('#f5efe2', 8); const pen = (x, y, w, h, col, k = 500, ang = -.9) => clipTo(() => c.rect(x, y, w, h), () => { for (let i = 0; i < k; i++) { const a = x + rr(-40, w), b = y + rr(0, h + 40), l = rr(30, 70); L([[a, b], [a + Math.cos(ang) * l, b + Math.sin(ang) * l]], col, rr(1, 2.4), { al: rr(.25, .6) }); } });
  pen(0, 0, W, 520, '#8fb8dd', 2600); pen(0, 520, W, 60, '#6aa04e', 900); pen(0, 580, W, 300, '#9a6b42', 3000); pen(0, 880, W, 200, '#6f6a66', 2200);
  for (let i = 0; i < 6; i++) { const x = 220 + i * 290; clipTo(() => c.arc(x, 400, 130, 0, TAU), () => { for (let k = 0; k < 600; k++) { const a = x + rr(-140, 140), b = 400 + rr(-140, 140); L([[a, b], [a + 16, b - 22]], pick(['#3f8a3a', '#5aa444', '#2d6e33', '#8cc152']), 2, { al: .6 }); } }); L(wob(x, 520, x, 440, 2), '#5d3f24', 12);
    for (let r = 0; r < 7; r++) { let px2 = x, py = 580; const pts = [[px2, py]]; for (let s = 0; s < 9; s++) { px2 += rr(-34, 34) + (r - 3) * 9; py += rr(18, 34); pts.push([px2, py]); } L(pts, '#f3ead8', rr(2, 5)); L(pts, '#7a5433', 1); } }
  for (let i = 0; i < 40; i++) ell(rr(0, W), rr(900, 1060), rr(20, 46), rr(14, 28), '#b9b4ad', '#5a5651', 1.5);
  T('Colored-Pencil', 960, 150, 96, { f: F.hand, c: '#3a3530' }); T('SCIENCE ILLUSTRATION', 960, 240, 34, { f: F.geo, c: '#3a3530', ls: 14 }); L([[1340, 700], [1560, 640]], '#3a3530', 1.5); T('root hairs', 1570, 636, 30, { f: F.hand, a: 'left', c: '#3a3530' });
};
P['one-line'] = n => {
  paper('#f4f1ea', 6); c.save(); c.strokeStyle = '#1d1b19'; c.lineWidth = 5; c.lineCap = 'round'; c.lineJoin = 'round'; c.beginPath(); c.moveTo(180, 820);
  c.bezierCurveTo(360, 820, 420, 700, 520, 560); c.bezierCurveTo(600, 440, 560, 300, 680, 260); c.bezierCurveTo(820, 210, 900, 330, 880, 430); c.bezierCurveTo(860, 520, 760, 520, 760, 440); c.bezierCurveTo(760, 380, 840, 380, 850, 430);
  c.bezierCurveTo(880, 560, 700, 560, 720, 660); c.bezierCurveTo(740, 760, 900, 700, 960, 640); c.bezierCurveTo(1040, 560, 980, 480, 1060, 420); c.bezierCurveTo(1160, 350, 1260, 430, 1240, 520); c.bezierCurveTo(1220, 620, 1100, 600, 1110, 520);
  c.bezierCurveTo(1120, 440, 1300, 460, 1330, 560); c.bezierCurveTo(1360, 680, 1240, 760, 1300, 820); c.bezierCurveTo(1380, 880, 1560, 830, 1760, 820); c.stroke(); c.restore();
  circ(1240, 440, 8, '#d9442f'); T('One-line Drawing', 960, 950, 70, { f: F.script, c: '#1d1b19' }); T('the pen never lifts', 960, 1020, 28, { f: F.geo, c: '#8a857c', ls: 8 });
};
P['whiteboard'] = n => {
  fill('#dcdde0'); rect(60, 50, 1800, 940, '#fbfbfa', '#9a9da3', 14, 10); rect(60, 990, 1800, 26, '#b5b8be'); rect(1500, 976, 120, 20, '#d0382d', null, 0, 6); rect(1640, 976, 120, 20, '#1f5fbf', null, 0, 6);
  const M = (pts, col = '#1e1e22', w = 7) => { L(pts, col, w); };
  T('WHITEBOARD', 170, 190, 120, { f: F.hand, a: 'left', c: '#1e1e22', w: 700 }); T('EXPLAINER', 190, 320, 110, { f: F.hand, a: 'left', c: '#1f5fbf', w: 700 }); M(wob(170, 392, 900, 386, 3), '#d0382d', 9);
  circ(1400, 330, 120, null, '#1e1e22', 7); M(wob(1400, 330, 1400, 250, 1)); M(wob(1400, 330, 1460, 360, 1)); for (let i = 0; i < 12; i++) { const a = i / 12 * TAU; M([[1400 + Math.cos(a) * 100, 330 + Math.sin(a) * 100], [1400 + Math.cos(a) * 114, 330 + Math.sin(a) * 114]], '#1e1e22', 5); }
  [[260, 640, 'idea'], [760, 640, 'draw'], [1260, 640, 'explain']].forEach(([x, y, t], i) => { rect(x, y, 340, 190, null, '#1e1e22', 7, 22); T(t, x + 170, y + 95, 66, { f: F.hand, c: '#1e1e22' }); if (i < 2) { M(wob(x + 360, y + 95, x + 480, y + 95, 2), '#d0382d'); M([[x + 455, y + 70], [x + 484, y + 95], [x + 455, y + 120]], '#d0382d'); } });
  M(wob(1280, 850, 1580, 860, 3), '#1f5fbf', 6); grain(5);
};
P['chalkboard'] = n => {
  fill('#6b4a2e'); rect(50, 44, 1820, 950, lg(0, 44, W, 994, ['#23463a', '#1b382f'])); for (let i = 0; i < 70; i++) { c.save(); c.translate(rr(100, 1800), rr(80, 950)); c.rotate(rr(-.4, .4)); rect(-rr(100, 300), -rr(8, 30), rr(200, 600), rr(16, 60), 'rgba(255,255,255,.022)'); c.restore(); }
  const ch = (pts, col = '#f1efe6', w = 7) => { for (let k = 0; k < 3; k++) L(pts.map(p => [p[0] + rr(-1.5, 1.5), p[1] + rr(-1.5, 1.5)]), col, w * rr(.5, 1), { al: .5, cap: 'butt' }); };
  T('Chalkboard', 960, 230, 150, { f: F.hand, c: '#f1efe6', w: 700, al: .92 }); ch(wob(560, 330, 1360, 326, 3), '#f6d86b', 8);
  T('a² + b² = c²', 520, 560, 90, { f: F.hand, c: '#f1efe6', al: .9 }); ch([[1100, 760], [1500, 760], [1500, 460], [1100, 760]]); ch([[1460, 760], [1460, 720], [1500, 720]], '#f6d86b', 5); T('a', 1300, 800, 50, { f: F.hand, c: '#9fd3ff' }); T('b', 1540, 610, 50, { f: F.hand, c: '#9fd3ff' }); T('c', 1270, 580, 50, { f: F.hand, c: '#ff9f9f' });
  ch(wob(240, 700, 800, 700, 3), '#9fd3ff', 6); T('written stroke by stroke', 520, 760, 44, { f: F.hand, c: '#cfd8cf', al: .8 });
  rect(50, 994, 1820, 30, '#8a6238'); rect(300, 978, 110, 18, '#f1efe6', null, 0, 4); rect(430, 978, 80, 18, '#f6d86b', null, 0, 4); rect(1500, 964, 200, 34, '#3a3a3a', null, 0, 6); grain(22);
};
P['sketchnote'] = n => {
  paper('#fbf8ef', 6); for (let x = 60; x < W; x += 44) for (let y = 50; y < H; y += 44) circ(x, y, 1.6, '#c9c4b6');
  const K = '#22201d'; const ban = (x, y, w, t) => { poly([[x, y], [x + w, y], [x + w - 26, y + 40], [x + w, y + 80], [x, y + 80], [x + 26, y + 40]], '#ffd54a', K, 4); T(t, x + w / 2, y + 42, 44, { f: F.hand, c: K, w: 700 }); };
  ban(520, 70, 880, 'SKETCHNOTE'); T('ideas, drawn as you listen', 960, 200, 36, { f: F.hand, c: '#6b665e' });
  [[150, 320, '1', 'LISTEN'], [610, 320, '2', 'DRAW'], [1070, 320, '3', 'CONNECT'], [1530, 320, '4', 'SHARE']].forEach(([x, y, n2, t], i) => { rect(x + 8, y + 8, 260, 300, '#22201d', null, 0, 18); rect(x, y, 260, 300, pick(['#fff', '#fff6d6', '#e9f4ff']), K, 4, 18); circ(x + 40, y + 40, 26, '#ff7a59', K, 3); T(n2, x + 40, y + 42, 30, { f: F.hand, c: '#fff', w: 700 }); T(t, x + 130, y + 250, 38, { f: F.hand, c: K, w: 700 });
    if (i === 0) { ell(x + 130, y + 140, 50, 60, null, K, 4); L([[x + 110, y + 150], [x + 130, y + 130], [x + 150, y + 150]], K, 4); } if (i === 1) { poly([[x + 80, y + 190], [x + 170, y + 90], [x + 190, y + 110], [x + 100, y + 200]], '#ffd54a', K, 4); } if (i === 2) { circ(x + 90, y + 120, 22, '#8fd3a8', K, 4); circ(x + 180, y + 110, 22, '#8fb8ff', K, 4); circ(x + 130, y + 190, 22, '#ffb38f', K, 4); L([[x + 90, y + 120], [x + 180, y + 110], [x + 130, y + 190], [x + 90, y + 120]], K, 3); } if (i === 3) { rect(x + 70, y + 100, 120, 90, '#fff', K, 4, 10); poly([[x + 100, y + 190], [x + 100, y + 220], [x + 130, y + 190]], '#fff', K, 4); }
    if (i < 3) { L(wob(x + 280, y + 150, x + 420, y + 150, 3), K, 4); L([[x + 400, y + 130], [x + 424, y + 150], [x + 400, y + 170]], K, 4); } });
  rect(360, 760, 1200, 150, '#fff6d6', K, 4, 14); T('“ One page. One talk. Everything that mattered. ”', 960, 836, 44, { f: F.hand, c: K }); for (let i = 0; i < 9; i++) T('✶', rr(100, 1800), rr(700, 1000), rr(20, 40), { c: '#ff7a59' });
};
P['stick-explainer'] = n => {
  paper('#f6f3ec', 5); const K = '#1b1b1b', R = '#e8432d'; T('How many hands', 120, 170, 84, { f: F.sans, a: 'left', c: K, w: 600 }); T('between you and ', 120, 270, 84, { f: F.sans, a: 'left', c: K, w: 600 }); T('anyone?', 790, 270, 84, { f: F.sans, a: 'left', c: R, w: 600 });
  for (let i = 0; i < 7; i++) { const x = 330 + i * 210, col = (i === 0 || i === 6) ? R : K; person(x, 800, 300, col, 7); if (i === 0 || i === 6) circ(x, 800 - 258, 39, R); if (i < 6) L([[x + 66, 650], [x + 105, 690], [x + 144, 650]], K, 7); circ(x + 105, 900, 6, R); T(String(i + 1), x + 105, 950, 28, { f: F.sans, c: R }); }
  L([[240, 900], [1680, 900]], '#c9c5bb', 2); T('STICK-FIGURE EXPLAINER', 120, 1010, 26, { f: F.sans, a: 'left', c: '#8a867d', ls: 8 }); T('Six, they say.', 1800, 270, 60, { f: F.sans, a: 'right', c: R, w: 600 });
};
P['ipad-sketch'] = n => {
  fill('#2a2c31'); rect(110, 60, 1700, 960, '#0d0d0f', null, 0, 44); rect(140, 90, 1640, 900, '#f7f4ec', null, 0, 18); rect(140, 90, 1640, 70, '#ebe7dc'); ['#1d1d1f', '#e2543e', '#f2b63a', '#3a7bd5', '#49a56b'].forEach((col, i) => circ(1420 + i * 60, 125, 18, col, '#fff', 3)); T('Tablet Sketch Explainer', 180, 126, 30, { f: F.sans, a: 'left', c: '#5a574f', w: 600 });
  const K = '#1d1d1f'; T('From Cherry', 240, 280, 96, { f: F.hand, a: 'left', c: K, w: 700 }); T('to Cup', 240, 400, 96, { f: F.hand, a: 'left', c: '#e2543e', w: 700 }); c.globalAlpha = .35; rect(232, 430, 360, 22, '#f2b63a'); c.globalAlpha = 1;
  const st = (x, y, col, lab) => { circ(x, y, 74, col, K, 5); T(lab, x, y + 124, 36, { f: F.hand, c: K }); };
  st(420, 660, '#e2543e', 'cherry'); st(820, 660, '#c8d6a0', 'green bean'); st(1220, 660, '#7a4a2b', 'roast'); rect(1540, 600, 150, 120, '#fff', K, 5, 14); ell(1615, 606, 62, 16, '#5a3520', K, 4); c.beginPath(); c.arc(1700, 650, 34, -1.2, 1.2); c.strokeStyle = K; c.lineWidth = 5; c.stroke(); T('cup', 1615, 784, 36, { f: F.hand, c: K });
  for (let i = 0; i < 3; i++) { const x = 520 + i * 400; L(wob(x, 660, x + 190, 660, 3), K, 5); L([[x + 168, 640], [x + 194, 660], [x + 168, 680]], K, 5); }
  L([[1580, 560], [1570, 520], [1590, 490]], '#8a867d', 4); L([[1640, 560], [1630, 520], [1650, 490]], '#8a867d', 4);
  c.save(); c.translate(1500, 420); c.rotate(.7); rect(-14, -260, 28, 300, '#f1f1f1', '#b9b9b9', 2, 12); poly([[-14, 40], [14, 40], [0, 76]], '#d9d9d9', '#b9b9b9', 2); c.restore(); grain(5);
};
P['marker-paper'] = n => {
  paper('#fbfaf6', 5); const K = '#16161a'; const mk = (pts, col = K, w = 12) => L(pts, col, w, { al: .93 });
  T('How far away is', 150, 210, 110, { f: F.hand, a: 'left', c: K, w: 700, rot: -.015 }); T('the horizon?', 150, 350, 110, { f: F.hand, a: 'left', c: K, w: 700, rot: -.015 }); mk(wob(150, 430, 880, 420, 3), '#e33b2b', 10);
  c.save(); c.strokeStyle = K; c.lineWidth = 12; c.lineCap = 'round'; c.beginPath(); c.arc(960, 2500, 1700, -2.2, -.94); c.stroke(); c.restore();
  person(520, 850, 250, K, 11); mk([[545, 630], [1560, 905]], '#2456c8', 7); mk([[1500, 870], [1560, 905], [1494, 916]], '#2456c8', 7);
  poly([[1560, 905], [1620, 905], [1590, 820]], null, K, 9); T('≈ 4.7 km', 1100, 700, 64, { f: F.hand, c: '#2456c8', w: 700, rot: .26 }); T('MARKER ON PAPER', 1770, 1010, 26, { f: F.geo, a: 'right', c: '#8c8a84', ls: 8 });
};
P['ink-wash'] = n => {
  paper('#f1ead9', 10); for (let layer = 0; layer < 4; layer++) { const base = 430 + layer * 120, al = .12 + layer * .12, pts = [[0, H]]; for (let x = 0; x <= W; x += 24) pts.push([x, base - fbm(x / 300 + layer * 9, layer) * (360 - layer * 50) + Math.abs(x - (500 + layer * 300)) * .12]); pts.push([W, H]); c.globalAlpha = al; poly(pts, '#1c1b1a'); c.globalAlpha = 1; c.fillStyle = lg(0, base - 60, 0, base + 190, ['rgba(241,234,217,0)', 'rgba(241,234,217,1)']); c.fillRect(0, base - 60, W, 400); }
  for (let i = 0; i < 26; i++) L(wob(1180 + i * 9, 720 - i * 4, 1182 + i * 9, 640 - i * 7 - rr(0, 40), 2), '#141312', rr(1, 3), { al: .8 });
  c.globalAlpha = .9; poly([[1360, 790], [1470, 770], [1500, 790], [1380, 806]], '#141312'); L([[1430, 772], [1430, 700]], '#141312', 3); c.globalAlpha = 1;
  for (let i = 0; i < 5; i++) L(wob(900 + i * 60, 860 + i * 16, 1500 - i * 40, 866 + i * 16, 2), '#141312', 1.5, { al: .25 });
  T('Ink Wash', 300, 300, 120, { f: F.pal, c: '#1c1b1a', i: 1 }); T('five tones of black, and empty paper', 300, 390, 30, { f: F.pal, c: '#6a655c', i: 1 });
  rect(250, 440, 70, 70, '#b5302a'); L([[266, 458], [304, 458], [304, 492], [266, 492], [266, 458]], '#f1ead9', 4); L([[266, 475], [304, 475]], '#f1ead9', 4); L([[285, 458], [285, 492]], '#f1ead9', 4); grain(10);
};
P['shadow-puppet'] = n => {
  fill('#140b06'); rect(210, 90, 1500, 800, rg(960, 520, 60, 900, ['#ffe9b0', '#e9a94a', '#8a4a16'])); for (let i = 0; i < 4000; i++) { const x = rr(210, 1710), y = rr(90, 890); rect(x, y, 2, 1, 'rgba(120,60,10,.18)'); }
  const sil = '#2a120a'; poly([[210, 890], [400, 720], [620, 800], [800, 700], [1000, 820], [1300, 740], [1500, 800], [1710, 730], [1710, 890]], 'rgba(90,40,10,.55)');
  L([[520, 790], [520, 560]], sil, 22); circ(520, 480, 130, 'rgba(60,110,40,.75)'); for (let i = 0; i < 40; i++) circ(520 + rr(-110, 110), 480 + rr(-110, 110), rr(6, 14), 'rgba(255,230,160,.6)');
  const fx = 1120, fy = 790; circ(fx, fy - 330, 40, 'rgba(160,40,30,.85)', sil, 4); poly([[fx - 46, fy - 290], [fx + 46, fy - 290], [fx + 70, fy - 110], [fx - 70, fy - 110]], 'rgba(170,50,30,.85)', sil, 4); poly([[fx - 60, fy - 110], [fx + 60, fy - 110], [fx + 40, fy], [fx - 40, fy]], 'rgba(40,90,110,.85)', sil, 4);
  L([[fx - 40, fy - 270], [fx - 170, fy - 330], [fx - 250, fy - 250]], sil, 12); L([[fx + 40, fy - 270], [fx + 150, fy - 220]], sil, 12); c.beginPath(); c.arc(fx - 250, fy - 290, 150, 1.0, 4.4); c.strokeStyle = sil; c.lineWidth = 7; c.stroke(); L([[fx - 170, fy - 164], [fx - 334, fy - 420]], sil, 3);
  for (let i = 0; i < 26; i++) for (let k = 0; k < 4; k++) circ(fx - 40 + i * 3.2, fy - 270 + k * 40 + (i % 2) * 8, 3, '#ffe9b0'); L([[fx - 250, fy - 250], [fx - 250, 890]], '#140b06', 4); L([[fx, fy - 330], [fx, 890]], '#140b06', 4);
  circ(1500, 250, 60, '#c92c1c'); glow('#ff7a2a', 60, () => circ(1500, 250, 60, '#e2452a'));
  rect(0, 0, W, 90, '#5a1410'); rect(0, 890, W, 190, '#1c0d07'); for (let i = 0; i < 9; i++) ell(180 + i * 200, 1090, 90, 110, '#0a0503');
  T('SHADOW PUPPETRY', 960, 48, 40, { f: F.pal, c: '#f3d79a', ls: 18 }); vig(.5);
};
P['ukiyoe'] = n => {
  paper('#ecdfc2', 12); c.fillStyle = lg(0, 0, 0, 620, ['#2f5f8f', 'rgba(236,223,194,0)']); c.fillRect(0, 0, W, 300);
  poly([[1200, 700], [1420, 380], [1470, 400], [1500, 370], [1560, 410], [1760, 700]], '#3d5f8a'); poly([[1385, 430], [1420, 380], [1470, 400], [1500, 370], [1560, 410], [1585, 446], [1540, 430], [1500, 456], [1460, 430], [1420, 456]], '#f5eede');
  const wave = (ox, oy, s, col) => { c.save(); c.translate(ox, oy); c.scale(s, s); c.beginPath(); c.moveTo(-200, 500); c.bezierCurveTo(100, 380, 200, 60, 520, -120); c.bezierCurveTo(760, -230, 900, -60, 860, 60); c.bezierCurveTo(800, -40, 660, -40, 600, 40); c.bezierCurveTo(480, 200, 620, 420, 1100, 500); c.closePath(); c.fillStyle = col; c.fill(); c.strokeStyle = '#1b2d4a'; c.lineWidth = 5 / s; c.stroke();
    for (let i = 0; i < 12; i++) { const a = -2.2 + i * .25; circ(860 + Math.cos(a) * 60 + i * 2, 40 + Math.sin(a) * 50, 18, '#f5eede', '#1b2d4a', 3 / s); } for (let i = 0; i < 9; i++) { c.beginPath(); c.moveTo(-100 + i * 60, 480); c.bezierCurveTo(100 + i * 50, 360, 260 + i * 30, 80 + i * 30, 540 + i * 14, -80 + i * 30); c.strokeStyle = 'rgba(245,238,222,.5)'; c.lineWidth = 4 / s; c.stroke(); } c.restore(); };
  wave(60, 560, 1.05, '#1f4f80'); rect(0, 900, W, 180, '#1f4f80'); for (let i = 0; i < 16; i++) { c.beginPath(); c.arc(60 + i * 124, 930, 62, Math.PI, 0); c.fillStyle = '#2b6397'; c.fill(); c.strokeStyle = '#1b2d4a'; c.lineWidth = 4; c.stroke(); }
  circ(1560, 200, 70, '#c8452f'); rect(1700, 110, 110, 420, '#f5eede', '#1b2d4a', 4); T('UKIYO-E', 1755, 320, 54, { f: F.pal, c: '#1b2d4a', rot: Math.PI / 2, ls: 12 }); rect(1716, 560, 78, 78, '#c8452f');
  T('pictures of the floating world', 150, 1010, 34, { f: F.pal, a: 'left', c: '#f5eede', i: 1 }); grain(14);
};
P['papercut-red'] = n => {
  paper('#f3e7cf', 8); const R = '#c41e1a'; circ(960, 520, 430, R); c.save(); c.translate(960, 520); c.globalCompositeOperation = 'destination-out';
  for (let k = 0; k < 16; k++) { c.save(); c.rotate(k / 16 * TAU); c.beginPath(); c.ellipse(0, -330, 26, 70, 0, 0, TAU); c.fill(); c.beginPath(); c.ellipse(0, -200, 16, 44, 0, 0, TAU); c.fill(); c.beginPath(); c.moveTo(40, -390); c.lineTo(70, -330); c.lineTo(46, -300); c.closePath(); c.fill(); c.beginPath(); c.arc(60, -250, 12, 0, TAU); c.fill(); c.beginPath(); c.ellipse(0, -90, 9, 28, 0, 0, TAU); c.fill(); c.restore(); }
  c.beginPath(); c.arc(0, 0, 36, 0, TAU); c.fill(); c.restore(); c.globalCompositeOperation = 'destination-over'; fill('#f3e7cf'); c.globalCompositeOperation = 'source-over';
  circ(960, 520, 430, null, R, 10); circ(960, 520, 462, null, R, 4); for (let i = 0; i < 48; i++) { const a = i / 48 * TAU; poly([[960 + Math.cos(a - .05) * 462, 520 + Math.sin(a - .05) * 462], [960 + Math.cos(a) * 500, 520 + Math.sin(a) * 500], [960 + Math.cos(a + .05) * 462, 520 + Math.sin(a + .05) * 462]], R); }
  [[150, 150], [1770, 150], [150, 930], [1770, 930]].forEach(([x, y]) => { poly(star(x, y, 90, 36, 8), R); circ(x, y, 18, '#f3e7cf'); });
  T('RED', 250, 500, 110, { f: F.pal, c: R, w: 700 }); T('PAPER-CUT', 250, 590, 40, { f: F.pal, c: R, ls: 8 }); T('folded, cut,', 1680, 500, 40, { f: F.pal, c: R, i: 1 }); T('unfolded', 1680, 560, 40, { f: F.pal, c: R, i: 1 }); grain(8);
};
P['paper-lantern'] = n => {
  fill('#0a0d1c'); rect(160, 70, 1600, 940, rg(1200, 420, 40, 1100, ['#fff2c4', '#f0b65a', '#31446f', '#141b33'])); const layers = ['#0f1730', '#17244a', '#22386c', '#3a5aa0', '#6f8fd0'];
  circ(1240, 380, 120, '#fff6d6'); glow('#fff2c4', 90, () => circ(1240, 380, 120, '#fff6d6'));
  for (let k = 4; k >= 0; k--) { const base = 520 + (4 - k) * 105, pts = [[160, 1010]]; for (let x = 160; x <= 1760; x += 20) pts.push([x, base - fbm(x / 260 + k * 7, k * 3) * 300 + (4 - k) * 20]); pts.push([1760, 1010]); c.save(); c.shadowColor = 'rgba(0,0,0,.55)'; c.shadowBlur = 26; c.shadowOffsetY = -6; poly(pts, layers[k]); c.restore(); }
  for (let i = 0; i < 9; i++) { const x = 300 + i * 150, y = 870 - (i % 3) * 20; poly([[x - 26, y], [x, y - 130], [x + 26, y]], '#0f1730'); poly([[x - 18, y - 60], [x, y - 170], [x + 18, y - 60]], '#0f1730'); }
  rect(1180, 800, 90, 80, '#0f1730'); poly([[1160, 800], [1225, 740], [1290, 800]], '#0f1730'); rect(1210, 830, 26, 30, '#ffd87a'); glow('#ffd87a', 30, () => rect(1210, 830, 26, 30, '#ffd87a'));
  rect(160, 70, 1600, 940, null, '#05060c', 46); rect(160, 70, 1600, 940, null, '#1c2238', 6); T('PAPER-CUT LIGHTBOX', 960, 1046, 30, { f: F.geo, c: '#c9b88a', ls: 14 }); grain(10);
};
P['stained-glass'] = n => {
  fill('#07070b'); const cx = 960, cols = ['#b3202a', '#1f4fa8', '#e2a51f', '#2f8a4a', '#6a2f9a', '#d8642a', '#1c7f9a'];
  const win = () => { c.moveTo(560, 1000); c.lineTo(560, 480); c.quadraticCurveTo(560, 150, 960, 60); c.quadraticCurveTo(1360, 150, 1360, 480); c.lineTo(1360, 1000); c.closePath(); };
  clipTo(win, () => { const pts = []; for (let i = 0; i < 70; i++) pts.push([rr(540, 1380), rr(40, 1020), pick(cols)]); px(3, (x, y) => { if (x < 540 || x > 1380) return [0, 0, 0, 0]; let b = 1e9, b2 = 1e9, bc = 0; for (let i = 0; i < pts.length; i++) { const d = (x - pts[i][0]) ** 2 + (y - pts[i][1]) ** 2; if (d < b) { b2 = b; b = d; bc = i; } else if (d < b2) b2 = d; } if (Math.sqrt(b2) - Math.sqrt(b) < 7) return [10, 10, 12]; const h = pts[bc][2], v = .7 + fbm(x / 40, y / 40) * .6; return [parseInt(h.slice(1, 3), 16) * v, parseInt(h.slice(3, 5), 16) * v, parseInt(h.slice(5, 7), 16) * v]; });
    circ(cx, 400, 190, null, '#0a0a0c', 12); for (let i = 0; i < 12; i++) { const a = i / 12 * TAU; L([[cx, 400], [cx + Math.cos(a) * 190, 400 + Math.sin(a) * 190]], '#0a0a0c', 8); } circ(cx, 400, 60, '#f4d35e', '#0a0a0c', 10); L([[cx, 590], [cx, 1000]], '#0a0a0c', 12); L([[560, 760], [1360, 760]], '#0a0a0c', 12); });
  c.save(); c.beginPath(); win(); c.strokeStyle = '#1a1a1f'; c.lineWidth = 26; c.stroke(); c.restore();
  c.save(); c.globalCompositeOperation = 'lighter'; c.globalAlpha = .12; for (let i = 0; i < 6; i++) poly([[600 + i * 120, 1000], [700 + i * 120, 1000], [200 + i * 260, 1080], [40 + i * 260, 1080]], pick(cols)); c.restore();
  T('STAINED', 280, 500, 70, { f: F.pal, c: '#d9c58a', ls: 10 }); T('GLASS', 1640, 500, 70, { f: F.pal, c: '#d9c58a', ls: 10 }); vig(.5); grain(10);
};
P['gilded-illumination'] = n => {
  paper('#efe3c4', 12); const B = '#1d3f8f', G = lg(0, 0, W, H, ['#8a6a1f', '#f6dc8a', '#b8902f', '#fff0b0', '#8a6a1f']), R = '#a3281f';
  rect(70, 60, 1780, 960, null, B, 26); rect(96, 86, 1728, 908, null, G, 10); for (let i = 0; i < 40; i++) { const x = 110 + i * 43.5; circ(x, 73, 7, G); circ(x, 1007, 7, G); } for (let i = 0; i < 21; i++) { circ(83, 100 + i * 44, 7, G); circ(1837, 100 + i * 44, 7, G); }
  rect(170, 170, 420, 460, B); rect(170, 170, 420, 460, null, G, 10); T('G', 380, 420, 420, { f: F.pal, c: G, w: 700, sh: 'rgba(0,0,0,.5)', sb: 6, sx: 4, sy: 4 });
  for (let i = 0; i < 14; i++) { const a = i / 14 * TAU; c.save(); c.translate(380, 400); c.rotate(a); ell(0, -196, 12, 26, i % 2 ? R : '#2f8a4a'); c.restore(); }
  T('ilded', 620, 300, 150, { f: F.pal, a: 'left', c: '#2a2118' }); T('Illumination', 620, 470, 130, { f: F.pal, a: 'left', c: R, i: 1 }); for (let i = 0; i < 5; i++) L([[620, 580 + i * 14], [1700, 580 + i * 14]], 'rgba(42,33,24,.0)', 1);
  T('gold leaf, lapis and vermilion', 620, 590, 40, { f: F.pal, a: 'left', c: '#5a4a35', i: 1 });
  c.save(); c.strokeStyle = '#2f8a4a'; c.lineWidth = 7; c.beginPath(); c.moveTo(200, 700); c.bezierCurveTo(500, 620, 700, 900, 1000, 780); c.bezierCurveTo(1300, 660, 1500, 900, 1740, 800); c.stroke(); c.restore();
  for (let i = 0; i < 16; i++) { const t = i / 15, x = 220 + t * 1500, y = 760 + Math.sin(t * 9) * 70; poly(star(x, y, 30, 12, 6, rr(0, 1)), i % 3 ? R : B); circ(x, y, 9, G); ell(x + 40, y - 30, 22, 10, '#2f8a4a', null, 0, .6); }
  T('ANNO · MMXXVI', 960, 930, 34, { f: F.pal, c: B, ls: 16 }); grain(12);
};
