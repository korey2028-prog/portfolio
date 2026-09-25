/**
 * Korey Portfolio — Apple & Motion Experience Scripts (v3)
 * Features:
 * 1. Interactive Switchable Product Stage (Tabs + Fade Transition)
 * 2. 3D Perspective Tilt on Mousemove
 * 3. Bento Card Spotlight Hover (Radial Glow)
 * 4. Dynamic Number Counter Animation (Count-up)
 * 5. Magnetic CTA Buttons
 * 6. Smooth Scroll & Header Glass blur
 */

(() => {
  'use strict';

  // 1. Copyright Year & Print Setup
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const printBtn = document.querySelector('[data-print]');
  if (printBtn) printBtn.addEventListener('click', () => window.print());

  // 2. Floating Header Scroll State
  const header = document.querySelector('[data-header]');
  const handleScroll = () => {
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }
  };
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });

  // 3. Scroll Reveal Observer
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('visible'));
  }

  // 4. Number Count-up Animation
  const countElements = document.querySelectorAll('[data-count]');
  const animateCounter = (el) => {
    const target = parseFloat(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';
    const duration = 1200; // ms
    const startTime = performance.now();

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Apple-like cubic ease out
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeProgress * target);

      el.textContent = `${prefix}${current}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = `${prefix}${target}${suffix}`;
      }
    };
    requestAnimationFrame(update);
  };

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      });
    }, { threshold: 0.2 });
    countElements.forEach((el) => counterObserver.observe(el));
  } else {
    countElements.forEach((el) => {
      el.textContent = `${el.getAttribute('data-prefix') || ''}${el.getAttribute('data-count')}${el.getAttribute('data-suffix') || ''}`;
    });
  }

  // 5. Interactive Product Stage Switcher in Hero
  const tabBtns = document.querySelectorAll('[data-stage-tab]');
  const stageSlides = document.querySelectorAll('[data-slide-id]');

  const switchStageTab = (targetId) => {
    tabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-stage-tab') === targetId);
    });
    stageSlides.forEach(slide => {
      slide.classList.toggle('active', slide.getAttribute('data-slide-id') === targetId);
    });
  };

  tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = btn.getAttribute('data-stage-tab');
      switchStageTab(tabId);
    });
  });

  // 6. Hero 3D Tilt Showcase
  const tiltContainer = document.querySelector('[data-tilt-container]');
  const tiltTarget = document.querySelector('[data-tilt-target]');

  if (tiltContainer && tiltTarget) {
    let bounds = tiltContainer.getBoundingClientRect();

    const onMouseEnter = () => {
      bounds = tiltContainer.getBoundingClientRect();
    };

    const onMouseMove = (e) => {
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;
      const centerX = bounds.width / 2;
      const centerY = bounds.height / 2;

      // Subtle tilt angles (max +- 6 deg for crisp text readability)
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      tiltTarget.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
      tiltTarget.style.setProperty('--mouse-x', `${x}px`);
      tiltTarget.style.setProperty('--mouse-y', `${y}px`);
    };

    const onMouseLeave = () => {
      tiltTarget.style.transform = 'rotateX(0deg) rotateY(0deg)';
      tiltTarget.style.setProperty('--mouse-x', '50%');
      tiltTarget.style.setProperty('--mouse-y', '50%');
    };

    tiltContainer.addEventListener('mouseenter', onMouseEnter);
    tiltContainer.addEventListener('mousemove', onMouseMove);
    tiltContainer.addEventListener('mouseleave', onMouseLeave);
  }

  // 7. Bento Cards Spotlight Glow (Mouse Tracking)
  const bentoCards = document.querySelectorAll('.bento-card-full, .hero-showcase-3d, .method-grid article');
  bentoCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // 8. Magnetic CTA Buttons
  const magneticButtons = document.querySelectorAll('.magnetic-btn');
  magneticButtons.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });

})();
