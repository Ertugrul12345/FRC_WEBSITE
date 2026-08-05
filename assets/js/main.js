// MechaTigers 10121 — "The Build Report" site script
// Vanilla JS, no dependencies. Everything here is progressive enhancement:
// the page is fully readable with JS disabled.
(function () {
  'use strict';

  var header = document.querySelector('.masthead-bar');
  var nav = document.getElementById('site-nav');
  var toggle = document.querySelector('.nav-toggle');

  // --- Mobile nav -----------------------------------------------------
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Condense header after the masthead scrolls away ---------------
  if (header && 'requestAnimationFrame' in window) {
    var ticking = false;
    var onScroll = function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        header.classList.toggle('condensed', window.scrollY > 220);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --- Reveal on scroll ----------------------------------------------
  // .reveal-armed on <body> activates the hidden initial state, so
  // content never hides when JS is off or IntersectionObserver missing.
  if ('IntersectionObserver' in window) {
    document.body.classList.add('reveal-armed');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });
    document.querySelectorAll('[data-reveal], .sec-rule').forEach(function (el) {
      observer.observe(el);
    });
  }

  // --- Footer year ----------------------------------------------------
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
