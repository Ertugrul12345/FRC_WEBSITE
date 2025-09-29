// MechaTigers 10121 site script
(function () {
  const header = document.querySelector('.site-header');
  const nav = document.getElementById('site-nav');
  const toggle = document.querySelector('.nav-toggle');

  // Mobile nav toggle
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    // Close on link click (mobile)
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  // Smooth scrolling offset for sticky header
  function offsetScrollTo(hash) {
    const el = document.querySelector(hash);
    if (!el) return;
    const headerHeight = header?.offsetHeight || 0;
    const rect = el.getBoundingClientRect();
    const target = window.scrollY + rect.top - (headerHeight + 8);
    window.scrollTo({ top: target, behavior: 'smooth' });
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const url = new URL(href, window.location);
      if (url.hash) {
        e.preventDefault();
        offsetScrollTo(url.hash);
        history.replaceState({}, '', url.hash);
      }
    });
  });

  // Reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12 });

  document.querySelectorAll('.section .card, .section .section-header, .hero-inner, .robot').forEach(el => {
    el.setAttribute('data-reveal', '');
    observer.observe(el);
  });

  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();

