// =========================================================
// Korey · Portfolio · Dark Liquid Glass · interactions
// Restrained · Precise · Quiet
// =========================================================

(function () {
  'use strict';

  // -------------------------
  // i18n dictionary
  // -------------------------
  const i18n = {
    zh: {
      'lang.label': 'EN',
      'hero.title': '反事实归因者，<br>把模糊的困扰，<br>变成<span class="display-em">可运行的工具</span>。',
      'hero.lede': 'Korey — 用 Wittgenstein 的语言分析拆问题，<br>用 Pearl 的因果框架找原因，<br>用 Claude Code 把答案造成产品。',
      'hero.cta.resume.meta': 'PDF · 即将上线',
      'about.lead': '英语专业出身，长期在做的其实是同一件事 ——<br>把模糊的问题拆到原子级，找到那个可以换的变量，<br>再让 AI 协作工程把答案变成可运行的产品。',
      'about.stat1.label': 'Obsidian 笔记',
      'about.stat2.label': '身体 OS 因果模型',
      'about.stat3.label': '已结业课程',
      'about.stat4.label': 'TEM-4 备考中',
      'work.h': '三个并行的项目，<br>每一个都在回答一个具体的问题。',
      'proj1.title': '专四工作台',
      'proj1.desc': '为自己 2026 年 6 月通过英语专四而做的私人工具，慢慢演化成了一个完整的备考工作台。真题闯关、语法专项、听写训练、错词回采、战绩面板 —— 一个备考学生需要的所有东西，被一致地组织在同一个界面下。',
      'proj1.tag3': '真人音源',
      'proj1.mock.q': '完形 · 2024 · Q12',
      'proj2.title': '身体 OS',
      'proj2.desc': '一个用 Pearl 因果框架建模"身体"的私人系统。9 个机制模型 + 3 个操作协议，处理"睡了很久还是没精神"这一类问题：从中介变量入手，找到那个可以换的环节，而不是再加一个补救动作。',
      'proj2.mock.n1': '睡眠时长',
      'proj2.mock.n2': '作息节律',
      'proj2.mock.n3': '恢复质量',
      'proj2.mock.n4': '日间精力',
      'proj3.title': 'AI 协作工作流',
      'proj3.desc': 'Claude Code 与 Codex 双平台 Skill 系统。手机 Gemini 做轻量捕获，桌面 Claude 做深加工，每个领域都有自己的 Skill 入口。目标不是更长的 Prompt，是把 Prompt 封装成可被调用的产品。',
      'notes.h': '几条还在用的观察。',
      'note1.quote': '把问题的语言拆到原子级，问题往往自己消解。',
      'note2.quote': '重要的不是"相关"，是反事实 ——<br><em>如果换掉这一个变量，结果会变吗？</em>',
      'note3.quote': '好的 AI 协作不是更长的 Prompt，<br>是把 Prompt 封装成可被调用的 Skill。',
      'note4.quote': '"睡了很久还是没精神。"<br><em>问题不在睡眠时长，在睡眠之外的某个中介。</em>',
      'contact.h': '慢一点也行，<br>把问题说清楚就好。',
      'contact.lede': '商业咨询、AI 协作、健康营养，<br>或者只是想认识一下 —— 都欢迎邮件。',
      'foot.c': '© 2026 Korey · 用拆问题的方法过日子',
      'toast.resume': '简历 PDF 正在整理中，即将上线',
    },
    en: {
      'lang.label': '中',
      'hero.title': 'Counterfactual reasoner.<br>Turning vague troubles<br>into <span class="display-em">runnable tools</span>.',
      'hero.lede': 'Korey — Wittgenstein’s language analysis to break the problem apart,<br>Pearl’s causal framework to find the cause,<br>Claude Code to ship the answer as a product.',
      'hero.cta.resume.meta': 'PDF · coming soon',
      'about.lead': 'English major by training; the work has always been one thing ——<br>break the problem down to its atoms, find the one variable you can swap,<br>and let AI craft turn the answer into a runnable product.',
      'about.stat1.label': 'Obsidian notes',
      'about.stat2.label': 'Body OS causal models',
      'about.stat3.label': 'Courses completed',
      'about.stat4.label': 'TEM-4 in prep',
      'work.h': 'Three parallel projects.<br>Each one answers a specific question.',
      'proj1.title': 'TEM-4 Workbench',
      'proj1.desc': 'Started as a private tool to pass the TEM-4 English exam in June 2026, and grew into a complete prep workbench. Past papers, grammar drills, dictation, error-word recall, achievement panel — everything a student needs, organized under one consistent interface.',
      'proj1.tag3': 'Real-voice audio',
      'proj1.mock.q': 'Cloze · 2024 · Q12',
      'proj2.title': 'Body OS',
      'proj2.desc': 'A private system modeling "the body" using Pearl’s causal framework. 9 mechanism models + 3 operating protocols. For problems like "I slept long but still feel drained" — work the mediator variables, find the link you can swap, instead of layering another fix on top.',
      'proj2.mock.n1': 'Sleep duration',
      'proj2.mock.n2': 'Sleep schedule',
      'proj2.mock.n3': 'Recovery quality',
      'proj2.mock.n4': 'Daytime energy',
      'proj3.title': 'AI craft workflow',
      'proj3.desc': 'A Skill system across Claude Code and Codex. Gemini on phone for light capture, Claude on desktop for deep work — each domain has its own Skill entry. The goal isn’t longer prompts. It’s prompts packaged into products you can call.',
      'notes.h': 'A few observations still in use.',
      'note1.quote': 'Break a problem’s language down to its atoms — and the problem often dissolves itself.',
      'note2.quote': 'Correlation isn’t the question. The counterfactual is ——<br><em>if I swap this one variable, does the result change?</em>',
      'note3.quote': 'Good AI craft isn’t longer prompts.<br>It’s prompts packaged into Skills you can call.',
      'note4.quote': '"I slept long but still feel drained."<br><em>The problem isn’t sleep duration — it’s a mediator outside of sleep.</em>',
      'contact.h': 'Slow is fine.<br>Just say the problem clearly.',
      'contact.lede': 'Consulting, AI craft, nutrition & health,<br>or just to say hi — drop an email.',
      'foot.c': '© 2026 Korey · living by taking problems apart',
      'toast.resume': 'Résumé PDF coming soon',
    }
  };

  const LANG_KEY = 'korey-portfolio-lang';

  function applyLang(lang) {
    const dict = i18n[lang] || i18n.zh;
    document.documentElement.lang = (lang === 'en') ? 'en' : 'zh-CN';
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (!(key in dict)) return;
      // SVG text nodes don't support innerHTML — use textContent
      if (el.namespaceURI === 'http://www.w3.org/2000/svg') {
        el.textContent = dict[key];
      } else {
        el.innerHTML = dict[key];
      }
    });
    // Update toggle button label
    document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
      btn.textContent = dict['lang.label'];
      btn.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换到中文');
    });
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
  }

  function getInitialLang() {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved === 'en' || saved === 'zh') return saved;
    } catch (e) { /* ignore */ }
    return 'zh';
  }

  let currentLang = getInitialLang();
  applyLang(currentLang);

  // Toggle handler
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-lang-toggle]');
    if (!t) return;
    currentLang = (currentLang === 'zh') ? 'en' : 'zh';
    applyLang(currentLang);
  });

  // -------------------------
  // Nav glass intensity on scroll
  // -------------------------
  const nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 16) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // -------------------------
  // Reveal on scroll
  // -------------------------
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

  // -------------------------
  // Terminal typewriter (project 03 device)
  // -------------------------
  const term = document.querySelector('.term');
  const termHost = term && term.closest('.device');
  if (term && termHost) {
    const original = term.innerHTML;
    // Tokenize: each item is either a tag or a single char
    const tokens = [];
    let i = 0;
    while (i < original.length) {
      if (original[i] === '<') {
        const end = original.indexOf('>', i);
        tokens.push(original.slice(i, end + 1));
        i = end + 1;
      } else if (original[i] === '&') {
        const end = original.indexOf(';', i);
        if (end > -1 && end - i < 8) {
          tokens.push(original.slice(i, end + 1));
          i = end + 1;
        } else {
          tokens.push(original[i]); i++;
        }
      } else {
        tokens.push(original[i]); i++;
      }
    }
    // Reserve the visual space, but hide the content via a wrapping invisible clone
    term.style.minHeight = term.getBoundingClientRect().height + 'px';
    term.innerHTML = '';

    let played = false;
    const playTyping = () => {
      if (played) return;
      played = true;
      let k = 0;
      const tick = () => {
        if (k >= tokens.length) {
          term.style.minHeight = '';
          return;
        }
        const tok = tokens[k++];
        term.innerHTML += tok;
        let delay = (tok.length > 1 && tok[0] === '<') ? 0 : 18;
        if (tok === '\n') delay = 60;
        setTimeout(tick, delay);
      };
      tick();
    };
    const checkAndPlay = () => {
      if (played) return;
      const r = termHost.getBoundingClientRect();
      // Trigger when 25% of the device is visible
      const triggerY = r.top + r.height * 0.25;
      if (triggerY < window.innerHeight && r.bottom > 0) {
        playTyping();
        window.removeEventListener('scroll', checkAndPlay);
      }
    };
    window.addEventListener('scroll', checkAndPlay, { passive: true });
    // Initial check on load (in case already in view)
    setTimeout(checkAndPlay, 200);
  }

  // -------------------------
  // Toast for resume placeholder
  // -------------------------
  const toast = document.getElementById('toast');
  function showToast() {
    const dict = i18n[currentLang] || i18n.zh;
    toast.textContent = dict['toast.resume'];
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('show'), 2600);
  }
  document.querySelectorAll('[data-resume]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast();
    });
  });

  // -------------------------
  // Aurora parallax on pointer (desktop only)
  // -------------------------
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
