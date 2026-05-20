// =========================================================
// Korey · Portfolio · light variant · interactions
// =========================================================

(function () {
  'use strict';

  // -------------------------
  // i18n dictionary
  // -------------------------
  const i18n = {
    zh: {
      'lang.label': 'EN',
      'nav.about': '关于',
      'nav.projects': '项目',
      'nav.skills': '技能',
      'nav.website': '作品',
      'nav.contact': '联系',
      'nav.cta': '简历',

      'hero.title': '反事实归因者。<br><span class="grad">把模糊困扰，</span><br>变成具体可解决的真问题。',
      'hero.sub': '用维特根斯坦的语言分析 + Pearl 的因果推断，重新拆解一个问题；<br>再让 AI 协作工程把答案变成可运行的工具。',
      'hero.cta.resume': '下载简历 <span class="btn-meta">PDF · 即将上线</span>',
      'hero.cta.browse': '浏览项目 <span class="arrow">→</span>',

      'about.tag': '关于',
      'about.title': '不写代码的工程师，<br>不开店的咨询师。',
      'about.p1': '英语专业背景，深度学习过维特根斯坦《逻辑哲学论》和 Pearl《为什么》。一边在做营养健康的因果建模 <em>（身体 OS / M1–M9）</em>，一边在用 Claude Code + Codex 双平台搭自己的 Skill 工作流。',
      'about.p2': '做事方法很简单：先把概念拆到原子级，再问"如果换掉这一个变量会怎样"，最后让 AI 把推理变成可运行的产品。这也是为什么我把自己叫做<strong>反事实归因者</strong>。',

      'projects.tag': '项目',
      'projects.title': '我在做的事。',
      'projects.sub': '六个并行的项目，每一个都在回答一个具体的问题。',

      'proj1.badge': '开发中',
      'proj1.title': '专四工作台',
      'proj1.desc': '给全国备考英语专四的学生，一个真正像样的复习工作台。原本是为自己 2026-06 考试做的私人工具。',
      'proj1.tag1': '真题闯关', 'proj1.tag2': '语法卡片', 'proj1.tag3': '错词回采',

      'proj2.badge': '持续迭代',
      'proj2.title': '身体 OS',
      'proj2.desc': '自己搭的健康因果模型系统：9 个机制模型 + 3 个操作协议，用 Pearl 中介分析法处理"睡了很久还是没精神"这种问题。',
      'proj2.tag1': '因果建模', 'proj2.tag2': '营养', 'proj2.tag3': '睡眠',

      'proj3.badge': '日常运营',
      'proj3.title': 'AI 协作工作流',
      'proj3.desc': 'Claude Code + Codex 双平台 Skill 系统。手机 Gemini 捕获 / 桌面 Claude 深加工的节奏化路由。',
      'proj3.tag1': 'Skill 设计', 'proj3.tag2': 'Agent 工作流', 'proj3.tag3': 'Prompt 工程',

      'proj4.badge': '长期',
      'proj4.title': '公众号长文',
      'proj4.desc': '把 vault 里的因果模型和方法论翻译成大众读得懂的长文。已发表《为什么睡了很久还是没精神》等深度内容。',
      'proj4.tag1': '内容创作', 'proj4.tag2': '科普写作', 'proj4.tag3': '方法论',

      'proj5.badge': '228 篇',
      'proj5.title': 'Obsidian 知识库',
      'proj5.desc': '三端同步的私人知识系统，按"自我 / 商业 / 关系 / 元 / 外部思想"分类，配 Dataview 实现笔记关系网络。',
      'proj5.tag1': '知识管理', 'proj5.tag3': '三端同步',

      'proj6.badge': '实战落地',
      'proj6.title': 'don 哥线下课实践',
      'proj6.desc': '商业定位 / 营养业务落地 / 关系自我三个板块的复盘与实操。把课堂方法论用到自己的会员服务里。',
      'proj6.tag1': '商业落地', 'proj6.tag2': '会员服务', 'proj6.tag3': '私域',

      'skills.tag': '技能',
      'skills.title': '用得最顺手的几样工具。',

      'skg1.title': '思维框架',
      'skg1.t1': '维特根斯坦语言分析', 'skg1.t2': 'Pearl 因果推断',
      'skg1.t3': '阿德勒心理学', 'skg1.t4': '奥派经济学', 'skg1.t5': '反事实归因',

      'skg2.title': 'AI 协作工程',
      'skg2.t3': 'Skill 系统设计', 'skg2.t4': 'Agent 工作流', 'skg2.t5': 'Prompt 工程',

      'skg3.title': '商业与咨询',
      'skg3.t1': '商业模式诊断', 'skg3.t2': '概念拆解',
      'skg3.t3': '执行力诊断', 'skg3.t4': '对标分析', 'skg3.t5': '好问题生成',

      'skg4.title': '内容创作',
      'skg4.t1': '公众号长文', 'skg4.t2': '小红书标题',
      'skg4.t3': '短视频 Hook', 'skg4.t4': 'AI 文风识别',

      'skg5.title': '健康专长',
      'skg5.t1': '营养学', 'skg5.t2': '运动机制',
      'skg5.t3': '睡眠工程', 'skg5.t4': '因果建模',

      'cred.tag': '里程碑',
      'cred.title': '走过的路。',
      'stat1.label': 'Obsidian 笔记',
      'stat2.label': '身体 OS 因果模型',
      'stat3.label': '已结业课程',
      'stat4.label': '私有知识库',
      'cred1.name': 'Pearl《为什么》因果科学 — 结业',
      'cred2.name': '维特根斯坦《逻辑哲学论》— 结业',
      'cred3.name': 'TEM-4 英语专四 — 备考中',

      'website.tag': '我的网站',
      'website.title': '专四工作台。',
      'website.sub': '这一块正在完善，等上线后会出现在这里。',
      'website.badge': 'Coming Soon · 开发中',
      'website.h': '给全国备考英语专四的学生，<br>一个真正像样的工作台。',
      'website.desc': '原本只是为了让自己 2026-06 通过考试做的私人工具。慢慢做着做着，发现需要它的人不止我一个。',
      'website.feat1': '真题完形闯关',
      'website.feat2': '语法专项卡片',
      'website.feat3': '听写训练',
      'website.feat4': '词汇错词回采',
      'website.feat5': '战绩面板',

      'contact.tag': '联系',
      'contact.title': '想聊聊吗？',
      'contact.sub': '商业咨询、AI 协作、健康营养、或者只是想认识一下 ——<br>欢迎发邮件。我会回。',

      'foot.c': '© 2026 Korey · 用拆问题的方法过日子',

      'toast.resume': '简历 PDF 正在整理中，即将上线',
    },
    en: {
      'lang.label': '中',
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.skills': 'Skills',
      'nav.website': 'Site',
      'nav.contact': 'Contact',
      'nav.cta': 'Résumé',

      'hero.title': 'Counterfactual reasoner.<br><span class="grad">From vague troubles,</span><br>to specific, solvable problems.',
      'hero.sub': 'Wittgenstein’s language analysis + Pearl’s causal inference to dissect a problem;<br>then AI craft to turn the answer into runnable software.',
      'hero.cta.resume': 'Download résumé <span class="btn-meta">PDF · coming soon</span>',
      'hero.cta.browse': 'Browse projects <span class="arrow">→</span>',

      'about.tag': 'About',
      'about.title': 'An engineer who doesn’t ship code.<br>A consultant who doesn’t run a shop.',
      'about.p1': 'English major by background; deep self-study in Wittgenstein’s <em>Tractatus</em> and Pearl’s <em>Book of Why</em>. On one side: causal modeling for nutrition and health <em>(Body OS / M1–M9)</em>. On the other: a personal Skill workflow built on Claude Code + Codex.',
      'about.p2': 'My method is simple: break a concept down to its atoms, ask "if we swap this one variable, what changes?", then let AI turn the reasoning into a working product. Which is why I call myself a <strong>counterfactual reasoner</strong>.',

      'projects.tag': 'Projects',
      'projects.title': 'What I’m working on.',
      'projects.sub': 'Six parallel projects. Each one answers a specific question.',

      'proj1.badge': 'In dev',
      'proj1.title': 'TEM-4 Workbench',
      'proj1.desc': 'A proper prep workbench for students taking China’s TEM-4 English exam. Started as a private tool for my own June 2026 exam.',
      'proj1.tag1': 'Past papers', 'proj1.tag2': 'Grammar cards', 'proj1.tag3': 'Error recall',

      'proj2.badge': 'Ongoing',
      'proj2.title': 'Body OS',
      'proj2.desc': 'A self-built causal-model system for health: 9 mechanism models + 3 operating protocols, using Pearl’s mediation analysis to handle problems like "I slept long but still feel drained".',
      'proj2.tag1': 'Causal modeling', 'proj2.tag2': 'Nutrition', 'proj2.tag3': 'Sleep',

      'proj3.badge': 'Daily',
      'proj3.title': 'AI craft workflow',
      'proj3.desc': 'A Skill system across Claude Code + Codex. Gemini on phone for capture, Claude on desktop for deep work — a rhythm-based routing.',
      'proj3.tag1': 'Skill design', 'proj3.tag2': 'Agent workflow', 'proj3.tag3': 'Prompt craft',

      'proj4.badge': 'Long-running',
      'proj4.title': 'WeChat long-form',
      'proj4.desc': 'Translating the causal models and methodology from my vault into long-form articles for a general audience. Published pieces like "Why sleeping long still feels exhausted."',
      'proj4.tag1': 'Writing', 'proj4.tag2': 'Science comm', 'proj4.tag3': 'Methodology',

      'proj5.badge': '228 notes',
      'proj5.title': 'Obsidian knowledge base',
      'proj5.desc': 'A three-device synced personal knowledge system organized by Self / Business / Relationships / Meta / External Thought, with Dataview powering the relational graph.',
      'proj5.tag1': 'KM', 'proj5.tag3': 'Multi-device sync',

      'proj6.badge': 'In practice',
      'proj6.title': 'don’s offline course practice',
      'proj6.desc': 'Three modules — business positioning / nutrition delivery / relationships & self — debriefed and applied. Bringing the classroom methodology into my own member services.',
      'proj6.tag1': 'Business', 'proj6.tag2': 'Membership', 'proj6.tag3': 'Private ops',

      'skills.tag': 'Skills',
      'skills.title': 'The tools I reach for most.',

      'skg1.title': 'Mental frameworks',
      'skg1.t1': 'Wittgenstein language analysis', 'skg1.t2': 'Pearl causal inference',
      'skg1.t3': 'Adlerian psychology', 'skg1.t4': 'Austrian economics', 'skg1.t5': 'Counterfactual reasoning',

      'skg2.title': 'AI craft',
      'skg2.t3': 'Skill system design', 'skg2.t4': 'Agent workflows', 'skg2.t5': 'Prompt craft',

      'skg3.title': 'Business & consulting',
      'skg3.t1': 'Business-model diagnosis', 'skg3.t2': 'Concept deconstruction',
      'skg3.t3': 'Execution diagnosis', 'skg3.t4': 'Benchmarking', 'skg3.t5': 'Good-question generation',

      'skg4.title': 'Content creation',
      'skg4.t1': 'WeChat long-form', 'skg4.t2': 'Xiaohongshu titles',
      'skg4.t3': 'Short-video hooks', 'skg4.t4': 'AI-writing detection',

      'skg5.title': 'Health & body',
      'skg5.t1': 'Nutrition', 'skg5.t2': 'Movement mechanics',
      'skg5.t3': 'Sleep engineering', 'skg5.t4': 'Causal modeling',

      'cred.tag': 'Milestones',
      'cred.title': 'The path so far.',
      'stat1.label': 'Obsidian notes',
      'stat2.label': 'Body OS causal models',
      'stat3.label': 'Courses completed',
      'stat4.label': 'Private knowledge base',
      'cred1.name': 'Pearl, The Book of Why — completed',
      'cred2.name': 'Wittgenstein, Tractatus — completed',
      'cred3.name': 'TEM-4 English exam — in preparation',

      'website.tag': 'My site',
      'website.title': 'TEM-4 Workbench.',
      'website.sub': 'This section is being polished. Once live, it’ll appear here.',
      'website.badge': 'Coming Soon · in development',
      'website.h': 'A proper prep workbench<br>for students taking TEM-4.',
      'website.desc': 'Started as a private tool to pass my own June 2026 exam. Bit by bit, I realized I wasn’t the only one who needed it.',
      'website.feat1': 'Past-paper cloze',
      'website.feat2': 'Grammar drills',
      'website.feat3': 'Dictation',
      'website.feat4': 'Error-word recall',
      'website.feat5': 'Achievement panel',

      'contact.tag': 'Get in touch',
      'contact.title': 'Want to chat?',
      'contact.sub': 'Consulting, AI craft, nutrition & health, or just to say hi ——<br>drop an email. I reply.',

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
      el.innerHTML = dict[key];
    });
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

  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-lang-toggle]');
    if (!t) return;
    currentLang = (currentLang === 'zh') ? 'en' : 'zh';
    applyLang(currentLang);
  });

  // -------------------------
  // Nav scroll state
  // -------------------------
  const nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 12) nav.classList.add('scrolled');
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
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );
  reveals.forEach((el) => io.observe(el));

  // -------------------------
  // Resume placeholder toast
  // -------------------------
  const toast = document.getElementById('toast');
  function showToast() {
    const dict = i18n[currentLang] || i18n.zh;
    toast.textContent = dict['toast.resume'];
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('show'), 2400);
  }
  document.querySelectorAll('[data-resume]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast();
    });
  });

  // -------------------------
  // Mobile burger
  // -------------------------
  const burger = document.getElementById('navBurger');
  if (burger) {
    burger.addEventListener('click', () => {
      const links = document.querySelector('.nav-links');
      if (!links) return;
      const open = links.style.display === 'flex';
      if (open) {
        links.style.cssText = '';
      } else {
        links.style.cssText = `
          display: flex;
          position: absolute;
          flex-direction: column;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(251,251,253,0.96);
          padding: 20px 24px;
          width: 100%;
          gap: 18px;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          backdrop-filter: blur(20px);
        `;
      }
    });
  }

  // -------------------------
  // Orb parallax
  // -------------------------
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
