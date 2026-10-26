/* Depth: the 3D of the Vex site (styles in depth.css). No library and no request to anyone: it builds a few decorative layers, wraps the hero window
   so it can tilt, and moves a handful of numbers on one animation frame loop. It does nothing at all for a visitor who asks for reduced motion, and
   switches itself off if they ask while the page is open. The page works the same without it. */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var coarse = window.matchMedia('(pointer: coarse)');
  var win = document.getElementById('win');
  var stage = document.querySelector('.stage');
  if (!win || !stage || !window.requestAnimationFrame) return;

  // ----- the decorative layers, built once -----
  var SVG = 'http://www.w3.org/2000/svg';
  function el(tag, cls, parent) { var e = document.createElement(tag); if (cls) e.className = cls; if (parent) parent.appendChild(e); return e; }
  function icon(paths) {
    var s = document.createElementNS(SVG, 'svg');
    s.setAttribute('viewBox', '0 0 24 24'); s.setAttribute('aria-hidden', 'true');
    s.setAttribute('fill', 'none'); s.setAttribute('stroke', 'currentColor'); s.setAttribute('stroke-width', '2');
    s.setAttribute('stroke-linecap', 'round'); s.setAttribute('stroke-linejoin', 'round');
    paths.forEach(function (d) { var p = document.createElementNS(SVG, 'path'); p.setAttribute('d', d); s.appendChild(p); });
    return s;
  }

  // An octahedron: four faces round the top, four round the bottom.
  function crystal(r, tone) {
    var c = el('div', 'crystal' + (tone ? ' ' + tone : ''));
    c.style.setProperty('--r', r + 'px');
    c.style.width = c.style.height = (r * 2) + 'px';
    var shades = [1.12, .92, .8, 1.0, .88, 1.05, .74, .96];
    for (var k = 0; k < 4; k++) {
      var up = el('i', '', c);
      up.style.setProperty('--a', (45 + 90 * k) + 'deg'); up.style.setProperty('--b', '-35.264deg'); up.style.setProperty('--sh', shades[k]);
      var down = el('i', '', c);
      down.style.setProperty('--a', (45 + 90 * k) + 'deg'); down.style.setProperty('--b', '35.264deg'); down.style.setProperty('--z', '180deg'); down.style.setProperty('--sh', shades[k + 4]);
    }
    return c;
  }

  var scene = el('div', 'scene'); scene.setAttribute('aria-hidden', 'true');
  var SHAPES = [
    { kind: 'card', l: '4%',  t: '12%', z: -260, rx: 18, ry: -24, rz: -8, par: 34, sp: -.10, dur: 16, o: .5 },
    { kind: 'card', l: '78%', t: '8%',  z: -420, rx: -12, ry: 28, rz: 6,  par: 18, sp: -.06, dur: 19, o: .42, sm: 1 },
    { kind: 'card', l: '62%', t: '58%', z: -180, rx: 14, ry: -30, rz: 9,  par: 42, sp: -.14, dur: 15, o: .55 },
    { kind: 'card', l: '10%', t: '66%', z: -340, rx: -16, ry: 22, rz: -5, par: 24, sp: -.08, dur: 21, o: .4, sm: 1 },
    { kind: 'card', l: '40%', t: '30%', z: -620, rx: 10, ry: -14, rz: 3,  par: 10, sp: -.04, dur: 24, o: .28, sm: 1 },
    { kind: 'gem', l: '84%', t: '30%', z: -140, r: 74, tone: '', par: 38, sp: -.12, dur: 20, o: .85 },
    { kind: 'gem', l: '93%', t: '64%', z: -300, r: 44, tone: 'teal', par: 28, sp: -.09, dur: 17, o: .8, sm: 1 },
    { kind: 'gem', l: '46%', t: '91%', z: -220, r: 36, tone: '', par: 30, sp: -.10, dur: 22, o: .75, sm: 1 }
  ];
  var shapeEls = SHAPES.map(function (s, i) {
    var sh = el('div', 'sh sh-' + s.kind + (s.sm ? ' hide-sm' : ''), scene);
    sh.style.setProperty('--l', s.l); sh.style.setProperty('--t', s.t); sh.style.setProperty('--z', s.z + 'px');
    sh.style.setProperty('--par', s.par + 'px'); sh.style.setProperty('--sp', s.sp);
    var fl;
    if (s.kind === 'card') { fl = el('div', 'fl', sh); }
    else { fl = crystal(s.r, s.tone); fl.classList.add('fl'); sh.appendChild(fl); fl.style.setProperty('--o', s.o); }
    fl.style.setProperty('--rx', (s.rx || 12) + 'deg'); fl.style.setProperty('--ry', (s.ry || -18) + 'deg'); fl.style.setProperty('--rz', (s.rz || 0) + 'deg');
    fl.style.setProperty('--dur', s.dur + 's'); fl.style.setProperty('--delay', (-i * 2.3) + 's');
    fl.style.setProperty('--dx', ((i % 2 ? -1 : 1) * 26) + 'px'); fl.style.setProperty('--dy', ((i % 3 ? -1 : 1) * 30) + 'px');
    if (s.kind === 'card') fl.style.setProperty('--o', s.o);
    return sh;
  });
  document.body.insertBefore(scene, document.body.firstChild);

  // The hero window: wrapped so the wrapper can tilt, with a few chips floating in front of it.
  var win3d = el('div', 'win3d');
  var turn = el('div', 'win-turn');
  win.parentNode.insertBefore(win3d, win);
  win3d.appendChild(turn);
  turn.appendChild(win);
  var CHIPS = [
    { cls: 'c1', style: 'top:-7%;right:-4%', z: 90, dur: 6.5, delay: 0, svg: ['M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z', 'M19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z'] },
    { cls: 'c2 teal', style: 'bottom:12%;left:-6%', z: 70, dur: 7.5, delay: -2, svg: ['M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z', 'M9 12l2 2 4-4'] },
    { cls: 'c3', style: 'bottom:-9%;right:-2%', z: 120, dur: 5.8, delay: -1, svg: ['M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z', 'M3 9h18', 'M8 5v4'] },
    { cls: 'c4 teal', style: 'top:22%;left:-5%', z: 50, dur: 8, delay: -3, svg: ['M12 3a9 9 0 100 18 9 9 0 000-18z', 'M3 12h18', 'M12 3c3 3 3 15 0 18', 'M12 3c-3 3-3 15 0 18'] }
  ];
  CHIPS.forEach(function (c) {
    var chip = el('span', 'chip ' + c.cls, win3d);
    chip.setAttribute('aria-hidden', 'true');
    chip.setAttribute('style', c.style + ';--z:' + c.z + 'px;--dur:' + c.dur + 's;--delay:' + c.delay + 's');
    chip.appendChild(icon(c.svg));
  });

  // A crystal beside the download button.
  var get = document.getElementById('download');
  if (get) { var gem = el('div', 'get-gem', get); gem.setAttribute('aria-hidden', 'true'); gem.appendChild(crystal(52, '')); }

  // Choosing another look turns the window in from the side (script.js changes the look; this only plays the turn).
  var lastLook = win.getAttribute('data-look');
  new MutationObserver(function () {
    var now = win.getAttribute('data-look');
    if (now === lastLook) return;
    lastLook = now;
    if (!root.classList.contains('d3')) return;
    turn.classList.remove('turning'); void turn.offsetWidth; turn.classList.add('turning');
  }).observe(win, { attributes: true, attributeFilter: ['data-look'] });
  turn.addEventListener('animationend', function () { turn.classList.remove('turning'); });

  // ----- motion, on and off -----
  var running = false, raf = 0, io = null;
  var S = { rx: 0, ry: 0, trx: 0, try_: 0, px: 0, py: 0, tpx: 0, tpy: 0, sy: 0, mx: 50, my: 0, lastMove: 0, inStage: false };
  var sections = Array.prototype.slice.call(document.querySelectorAll('.band, .inside, .get'));

  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function onMove(e) {
    if (e.pointerType === 'touch') return;
    S.lastMove = performance.now();
    var w = window.innerWidth || 1, h = window.innerHeight || 1;
    S.tpx = clamp(e.clientX / w * 2 - 1, -1, 1); S.tpy = clamp(e.clientY / h * 2 - 1, -1, 1);
    var r = stage.getBoundingClientRect();
    S.inStage = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
    if (S.inStage) {
      var nx = clamp((e.clientX - r.left) / r.width * 2 - 1, -1, 1), ny = clamp((e.clientY - r.top) / r.height * 2 - 1, -1, 1);
      S.try_ = nx * 11; S.trx = -ny * 8; S.mx = (nx + 1) * 50; S.my = (ny + 1) * 50;
    } else {
      S.try_ = S.tpx * 3.5; S.trx = -S.tpy * 2.5; S.mx = 50; S.my = 0;
    }
    cardTilt(e);
  }
  function cardTilt(e) {
    var t = e.target && e.target.closest ? e.target.closest('.facts li, .steps li') : null;
    if (cardTilt.cur && cardTilt.cur !== t) { cardTilt.cur.classList.remove('hot'); cardTilt.cur.style.removeProperty('--tx'); cardTilt.cur.style.removeProperty('--ty'); cardTilt.cur = null; }
    if (!t || coarse.matches) return;
    var r = t.getBoundingClientRect();
    var x = clamp((e.clientX - r.left) / r.width, 0, 1), y = clamp((e.clientY - r.top) / r.height, 0, 1);
    t.classList.add('hot');
    t.style.setProperty('--ty', ((x - .5) * 9).toFixed(2) + 'deg'); t.style.setProperty('--tx', ((.5 - y) * 7).toFixed(2) + 'deg');
    cardTilt.cur = t;
  }
  function onLeave() {
    S.lastMove = 0; S.tpx = 0; S.tpy = 0; S.inStage = false;
    if (cardTilt.cur) { cardTilt.cur.classList.remove('hot'); cardTilt.cur.style.removeProperty('--tx'); cardTilt.cur.style.removeProperty('--ty'); cardTilt.cur = null; }
  }
  function onScroll() { S.sy = window.scrollY || 0; }

  var last = { rx: 1e9, ry: 1e9, px: 1e9, py: 1e9, sy: 1e9, mx: 1e9, my: 1e9 };
  function frame(now) {
    raf = requestAnimationFrame(frame);
    var idle = !S.lastMove || now - S.lastMove > 2600 || coarse.matches;
    if (idle) { S.try_ = Math.sin(now / 1700) * 4; S.trx = Math.cos(now / 2300) * 2.6; S.mx = 50 + Math.sin(now / 1700) * 18; S.my = 20 + Math.cos(now / 2300) * 14; }
    S.ry += (S.try_ - S.ry) * .08; S.rx += (S.trx - S.rx) * .08;
    S.px += (S.tpx - S.px) * .05; S.py += (S.tpy - S.py) * .05;
    if (Math.abs(S.ry - last.ry) > .01 || Math.abs(S.rx - last.rx) > .01) {
      win3d.style.setProperty('--rx', S.rx.toFixed(2) + 'deg'); win3d.style.setProperty('--ry', S.ry.toFixed(2) + 'deg');
      last.rx = S.rx; last.ry = S.ry;
    }
    if (Math.abs(S.mx - last.mx) > .3 || Math.abs(S.my - last.my) > .3) {
      win.style.setProperty('--mx', S.mx.toFixed(1) + '%'); win.style.setProperty('--my', S.my.toFixed(1) + '%');
      last.mx = S.mx; last.my = S.my;
    }
    if (Math.abs(S.px - last.px) > .002 || Math.abs(S.py - last.py) > .002 || S.sy !== last.sy) {
      scene.style.setProperty('--px', S.px.toFixed(3)); scene.style.setProperty('--py', S.py.toFixed(3)); scene.style.setProperty('--sy', S.sy + 'px');
      last.px = S.px; last.py = S.py; last.sy = S.sy;
    }
  }

  function reveal() {
    if (!('IntersectionObserver' in window)) return;
    try {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
      }, { threshold: .1, rootMargin: '0px 0px -6% 0px' });
      sections.forEach(function (s) { s.classList.add('rise'); io.observe(s); });
    } catch (err) {
      // A section is hidden until it scrolls into view, so if the observer cannot be made nothing may be left hidden.
      sections.forEach(function (s) { s.classList.remove('rise', 'in'); });
      console.error('[depth] sections could not be set to rise:', err);
      return;
    }
    // A safety net: anything in view that the observer has not shown after a moment is shown.
    setTimeout(function () {
      sections.forEach(function (s) { var r = s.getBoundingClientRect(); if (r.top < window.innerHeight && r.bottom > 0) s.classList.add('in'); });
    }, 2500);
  }

  function enable() {
    if (running) return;
    running = true;
    try {
      root.classList.add('d3');
      S.sy = window.scrollY || 0;
      window.addEventListener('pointermove', onMove, { passive: true });
      document.addEventListener('pointerleave', onLeave);
      window.addEventListener('scroll', onScroll, { passive: true });
      reveal();
      raf = requestAnimationFrame(frame);
    } catch (err) {
      // Whatever went wrong, the page goes back to how it is without this file: nothing hidden, nothing moving.
      console.error('[depth] the 3D could not start:', err);
      disable();
    }
  }
  function disable() {
    if (!running) return;
    running = false;
    cancelAnimationFrame(raf);
    window.removeEventListener('pointermove', onMove);
    document.removeEventListener('pointerleave', onLeave);
    window.removeEventListener('scroll', onScroll);
    if (io) io.disconnect();
    sections.forEach(function (s) { s.classList.remove('rise', 'in'); });
    root.classList.remove('d3', 'd3-paused');
    win3d.style.removeProperty('--rx'); win3d.style.removeProperty('--ry');
  }
  function sync() { if (reduce.matches) disable(); else enable(); }

  document.addEventListener('visibilitychange', function () {
    if (!running) return;
    if (document.hidden) { root.classList.add('d3-paused'); cancelAnimationFrame(raf); }
    else { root.classList.remove('d3-paused'); raf = requestAnimationFrame(frame); }
  });
  if (reduce.addEventListener) reduce.addEventListener('change', sync); else if (reduce.addListener) reduce.addListener(sync);
  sync();
})();
