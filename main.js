// Failsafe first, deliberately before anything else in this file.
// Content marked .reveal is hidden by CSS until the observer below adds .in. If
// any code further down throws, that observer would never be created and the page
// would stay blank, so this timer force-reveals everything regardless. It also
// covers the case where IntersectionObserver exists but never fires — browsers
// throttle it in backgrounded or non-composited tabs.
setTimeout(function () {
  document.querySelectorAll('.reveal:not(.in)').forEach(function (el) {
    el.style.transitionDelay = '0ms';
    el.classList.add('in');
  });
}, 2500);

// mobile nav
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  // create dimming overlay INSIDE the nav so it shares the drawer's stacking
  // context (prevents the overlay from painting over the drawer/links)
  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  // append the overlay as a true sibling of the drawer (same parent) so the
  // z-index comparison is direct: overlay 60 sits below drawer 70
  links.parentElement.appendChild(overlay);

  const setMenu = (open) => {
    links.classList.toggle('open', open);
    toggle.classList.toggle('active', open);
    overlay.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  toggle.addEventListener('click', () => setMenu(!links.classList.contains('open')));
  overlay.addEventListener('click', () => setMenu(false));
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
}

// year
const yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();

// scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const wantsLessMotion = window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!('IntersectionObserver' in window) || wantsLessMotion) {
  // No observer support, or the reader asked for less motion: just show it all.
  revealEls.forEach(el => { el.style.transitionDelay = '0ms'; el.classList.add('in'); });
} else {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        e.target.style.transitionDelay = Math.min(i * 60, 240) + 'ms';
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => obs.observe(el));
}

// gallery filter (menu page)
const filterBtns = document.querySelectorAll('[data-filter]');
if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const f = btn.dataset.filter;
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.g-item').forEach(item => {
        const show = f === 'all' || item.dataset.cat === f;
        item.style.display = show ? '' : 'none';
      });
      // smooth scroll to gallery top on mobile
      if (window.innerWidth < 700) {
        document.getElementById('gallery')?.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
}

// lightbox (menu page)
const lb = document.getElementById('lightbox');
if (lb) {
  const lbImg = lb.querySelector('img');
  const lbCap = lb.querySelector('.lb-cap');
  document.querySelectorAll('.g-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lbCap.textContent = img.alt;
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });
  const close = () => { lb.classList.remove('open'); document.body.style.overflow = ''; };
  lb.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}
