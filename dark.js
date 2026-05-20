// =========================================================
// Korey · Portfolio · Dark Liquid Glass · interactions
// Restrained · Precise · Quiet
// =========================================================

(function () {
  'use strict';

  const nav = document.getElementById('nav');
  const toast = document.getElementById('toast');

  // Nav glass intensity on scroll
  function onScroll() {
    if (window.scrollY > 16) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal on scroll — slower, softer
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
    { threshold: 0.14, rootMargin: '0px 0px -80px 0px' }
  );
  reveals.forEach((el) => io.observe(el));

  // Toast for resume placeholder
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('show'), 2600);
  }
  document.querySelectorAll('[data-resume]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('简历 PDF 正在整理中，即将上线');
    });
  });

  // Subtle aurora parallax on pointer movement (desktop only)
  const auroras = document.querySelectorAll('.aurora');
  if (auroras.length && window.matchMedia('(min-width: 900px) and (pointer: fine)').matches) {
    let frame;
    document.addEventListener('mousemove', (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const dx = (e.clientX - cx) / cx;
        const dy = (e.clientY - cy) / cy;
        auroras.forEach((aur, i) => {
          const depth = 18 + i * 10;
          aur.style.transform = `translate(${dx * depth}px, ${dy * depth}px)`;
        });
        frame = null;
      });
    });
  }
})();
