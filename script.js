(function () {
  'use strict';

  // Current year in footer.
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Condense the nav once the user scrolls.
  var nav = document.getElementById('nav');
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // OS-aware download label. Vex ships a Windows installer; on other platforms
  // tell the user it's Windows-only and point the primary button at releases.
  var isWindows = /Win/i.test(navigator.platform) || /Windows/i.test(navigator.userAgent);
  if (!isWindows) {
    var label = document.getElementById('download-label');
    var meta = document.getElementById('hero-meta');
    var primary = document.getElementById('download-primary');
    if (label) label.textContent = 'Download for Windows';
    if (meta) meta.textContent = 'Windows 10/11 · 64-bit · (desktop only)';
    // Non-Windows visitors can't run the .exe — send them to the releases page.
    if (primary) primary.setAttribute('href', 'https://github.com/0xmortuex/Vex/releases');
  }

  // Reveal cards as they scroll into view.
  var revealTargets = document.querySelectorAll('.feature, .strip-item, .kbd-row');
  if ('IntersectionObserver' in window && revealTargets.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach(function (el, i) {
      // Tiny stagger within a row for a smoother cascade.
      el.style.transitionDelay = (i % 4) * 60 + 'ms';
      io.observe(el);
    });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('reveal-in'); });
  }
})();
