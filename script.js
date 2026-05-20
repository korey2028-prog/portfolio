// =========================================================
// Korey · Portfolio · interactions
// =========================================================

(function () {
  'use strict';

  const nav = document.getElementById('nav');
  const toast = document.getElementById('toast');

  // Nav glass toggle on scroll
  let lastY = window.scrollY;
  function onScroll() {
    const y = window.scrollY;
    if (y > 12) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
    lastY = y;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // IntersectionObserver: reveal-on-scroll with optional stagger delay
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.delay || '0', 10);
          setTimeout(() => entry.target.classList.add('visible'), delay);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );
  reveals.forEach((el) => io.observe(el));

  // Resume button placeholder — show toast
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('show'), 2400);
  }
  document.querySelectorAll('[data-resume]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('简历 PDF 正在整理中，即将上线');
    });
  });

  // Mobile burger toggle (simple — toggles inline panel)
  const burger = document.getElementById('navBurger');
  if (burger) {
    burger.addEventListener('click', () => {
      const links = document.querySelector('.nav-links');
      if (!links) return;
      const open = links.style.display === 'flex';
      if (open) {
        links.style.display = '';
        links.style.position = '';
        links.style.flexDirection = '';
        links.style.background = '';
        links.style.padding = '';
        links.style.width = '';
        links.style.top = '';
      } else {
        Object.assign(links.style, {
          display: 'flex',
          position: 'absolute',
          flexDirection: 'column',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(251,251,253,0.96)',
          padding: '20px 24px',
          width: '100%',
          gap: '18px',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          backdropFilter: 'blur(20px)',
        });
      }
    });
  }

  // Subtle parallax for hero orbs
  const orbs = document.querySelectorAll('.orb');
  if (orbs.length && window.matchMedia('(min-width: 900px)').matches) {
    document.addEventListener('mousemove', (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      orbs.forEach((orb, i) => {
        const depth = (i + 1) * 14;
        orb.style.transform = `translate(${dx * depth}px, ${dy * depth}px)`;
      });
    });
  }
})();
