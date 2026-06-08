// mobile nav
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.classList.toggle('active');
  });
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => links.classList.remove('open')));
}

// year
const yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();

// scroll reveal
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.transitionDelay = Math.min(i * 60, 240) + 'ms';
      e.target.classList.add('in');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

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
