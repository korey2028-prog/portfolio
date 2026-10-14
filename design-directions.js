(() => {
  'use strict';
  const directions = [
    {id:'silver',name:'银色名片',tag:'推荐 · 求职主站',desc:'先识别人，再进入作品。把职业方向、职责与代表案例放在同一屏，金属感只在细边框和材质层出现。',read:'身份 → 我的职责 → 作品 → 简历',best:'HR 首次筛选、简历链接',trade:'克制稳妥，视觉实验较少',type:'无衬线 / 细线网格 / 冰蓝入口',question:'你是谁，做过什么？'},
    {id:'editorial',name:'编辑式作品集',tag:'字体与叙事',desc:'用杂志封面的大字和长短节奏表达个性。作品按问题组织，每一项都有一个具体的产品判断。',read:'主张 → 代表问题 → 案例札记',best:'内容产品、设计协作岗位',trade:'需要滚动后才看到全部作品',type:'衬线标题 / 银灰纸面 / 大留白',question:'你怎样观察问题？'},
    {id:'lab',name:'硅基实验室',tag:'逻辑与边界',desc:'把产品方法直接画出来：输入、确认、行动、回看。让 AI 感来自可解释的结构和工作过程。',read:'方法 → 决策示例 → 实际产品',best:'AI 产品、Agent 工作流岗位',trade:'理性更突出，个人温度较弱',type:'等宽标签 / 工程细线 / 浅色坐标',question:'你怎样让系统可靠？'},
    {id:'gallery',name:'银白展厅',tag:'作品与空间',desc:'让界面截图成为第一视觉。统一作品外部框架，在进入案例后再讲项目自己的故事。',read:'看到作品 → 选择作品 → 深入案例',best:'现场展示、作品浏览',trade:'需要配合醒目的简历入口',type:'展览编号 / 大图 / 稀疏排版',question:'你实际做出来什么？'},
    {id:'brief',name:'产品经理简报',tag:'信息与判断',desc:'用一页清楚的项目简报呈现职责、决策和边界。减少浏览成本，适合面试官边看边追问。',read:'个人概况 → 三个案例 → 关键取舍',best:'招聘复审、面试前快速阅读',trade:'信息较密，品牌表现较轻',type:'白纸 / 银色侧栏 / 对齐表格',question:'你承担了哪些判断？'},
    {id:'product',name:'产品先行',tag:'推荐 · Fitness OS',desc:'先让人进入 Fitness OS 的真实观看路径，再展开你的工作。以短演示、规则样板和完整案例三个层次承接不同阅读时间。',read:'产品 → 演示 → 产品取舍 → 其他作品',best:'Fitness OS 专项投递与演示',trade:'其他项目会退到第二层',type:'银色展台 / 大设备 / 明确操作',question:'这个产品能怎么用？'}
  ];
  const projects = [
    {n:'01',title:'Fitness OS',label:'训练与饮食记录',image:'assets/fitness-os-today.png',href:'work/fitness-os.html',problem:'训练、饮食和身体状态散在不同记录中。',decision:'先确认记录，再回看依据；缺失数据不当作零。'},
    {n:'02',title:'专四备考工作台',label:'练习与复习',image:'assets/tem4-workbench-preview.png',href:'work/tem4.html',problem:'练习、解析和错题复习需要来回切换。',decision:'把答题反馈和下一次复习连成可执行的流程。'},
    {n:'03',title:'DM 角色手册',label:'备场与临场查阅',image:'assets/dm-os.png',href:'work/dm-rehearsal.html',problem:'现场没有时间重新翻阅整份角色资料。',decision:'按上场顺序组织资料，把临场提示放在前面。'}
  ];
  const actions = '<div class="actions"><a class="primary" href="resume.html">HR / 简历与项目速读 ↗</a><a href="fitness/">看 Fitness OS 演示 ↗</a></div>';
  const identity = '<p class="eyebrow">KOREY WANG TIANRU · 2027 届</p>';
  const role = '<p class="role">产品经理 · 用户研究 · Agent 工作流 · 产品交付</p>';
  const ownership = '<p class="ownership">我负责问题定义、流程设计与实际验收，AI 协助编码实现。</p>';
  const metal = '<div class="metal-object" aria-hidden="true"><span>K</span><i></i></div>';
  const phone = '<figure class="phone"><img src="assets/fitness-os-today.png" alt="Fitness OS 原生 iPhone 今日页面"><figcaption>原生 iPhone 版界面</figcaption></figure>';
  const cards = () => '<div class="project-cards">'+projects.map(p=>`<a class="project-card" href="${p.href}"><div class="project-image"><img src="${p.image}" alt="${p.title}界面" loading="lazy"></div><div class="project-copy"><span class="eyebrow">${p.n} / ${p.label}</span><h3>${p.title} <span>↗</span></h3><p>${p.problem}</p></div></a>`).join('')+'</div>';
  const renderers = {
    silver: () => `<div class="hero split"><div>${identity}<h1>把真实问题，<br>做成可以使用的产品。</h1>${role}${ownership}${actions}</div>${metal}</div><div class="credential-line"><span>来自训练、备考与门店现场</span><span>需求 → 原型 → 使用 → 修正</span></div>${cards()}`,
    editorial: () => `<div class="hero editorial-hero">${identity}<h1>从生活的阻力，<br><em>到产品的秩序。</em></h1><div class="editorial-intro">${role}<div>${ownership}${actions}</div></div></div><div class="editorial-feature"><span class="large-number">01</span><div><p class="eyebrow">SELECTED CASE / FITNESS OS</p><h2>记录以后，<br>还要能看懂它。</h2><p>把训练、饮食和身体状态放在一起，让下一次判断有据可依。</p><a href="work/fitness-os.html">阅读产品取舍 ↗</a></div>${phone}</div>${cards()}`,
    lab: () => `<div class="hero lab-hero">${identity}<div class="lab-title"><h1>让判断可解释，<br>让行动有依据。</h1><span class="lab-mark" aria-hidden="true">[ K ]</span></div>${role}${ownership}${actions}</div><div class="pipeline"><article><span>INPUT / 01</span><h3>真实记录</h3><p>先保留来源与缺口</p></article><b aria-hidden="true">→</b><article><span>REVIEW / 02</span><h3>用户确认</h3><p>核对内容与日期</p></article><b aria-hidden="true">→</b><article><span>ACTION / 03</span><h3>下一步行动</h3><p>记录执行后的反馈</p></article></div><p class="scope-note">以 Fitness OS 为例：网页记录与原生 HealthKit 接入具有不同范围。</p>${cards()}`,
    gallery: () => `<div class="hero gallery-hero"><div>${identity}<h1>Useful<br><em>by design.</em></h1></div><div>${role}<p>学习、身体与现场。<br>三个来自日常使用的产品实践。</p>${ownership}${actions}</div></div>${cards()}<div class="gallery-caption"><span>SELECTED WORK / 01—03</span><span>问题、判断与交付，随作品一起展示。</span></div>`,
    brief: () => `<div class="brief-grid"><div class="brief-identity">${identity}<h1>KOREY WANG TIANRU</h1>${role}<p>天津师范大学<br>英语师范专业 · 2027 届</p>${actions}</div><div class="brief-content"><p class="eyebrow">PRODUCT MANAGER / 一页简报</p><h2>从现场问题到<br>可检查的交付。</h2>${ownership}<div class="brief-rows">${projects.map(p=>`<article><div><span>${p.n}</span><h3><a href="${p.href}">${p.title} ↗</a></h3></div><p>${p.problem}</p><p><strong>我的取舍</strong> ${p.decision}</p></article>`).join('')}</div><p class="scope-note">案例分别展示已完成部分与仍待验证的结果。</p></div></div>`,
    product: () => `<div class="hero product-hero"><div><p class="eyebrow">KOREY / SELECTED PRODUCT 01</p><h1>Fitness OS</h1><h2>把记录放在一起，<br>让下一步更清楚。</h2><p>训练、饮食和身体状态，从记录到回看。</p><div class="actions"><a class="primary" href="fitness/">看演示 / 进入产品 ↗</a><a href="demo/fitness-os.html">体验规则样板 ↗</a></div><p class="scope-note">网页版在当前浏览器保存记录；Apple Health 接入属于原生 iPhone 版。</p></div>${phone}</div><div class="product-author">${identity}${ownership}<a href="resume.html">HR / 看我的简历与其他项目 ↗</a></div><div class="product-decisions"><article><span>01 / 输入</span><h3>保存前先确认</h3><p>把日期、内容与保存位置呈现给用户。</p></article><article><span>02 / 判断</span><h3>缺失就说缺失</h3><p>依据不够时，先说明缺什么。</p></article><article><span>03 / 反馈</span><h3>执行后再回看</h3><p>一次主观反馈不等于效果证明。</p></article></div><a class="case-link" href="work/fitness-os.html">阅读完整产品案例 →</a>${cards()}`
  };
  const nav=document.querySelector('#directions');
  nav.innerHTML=directions.map((d,i)=>`<button type="button" data-direction="${d.id}" aria-pressed="false" aria-controls="preview"><span>0${i+1}</span><strong>${d.name}</strong><small>${d.tag}</small></button>`).join('');
  document.querySelector('#comparison-rows').innerHTML=directions.map((d,i)=>`<tr><th><button type="button" data-direction="${d.id}">0${i+1} ${d.name} ↗</button></th><td>${d.question}</td><td>${d.best}</td><td>${d.trade}</td></tr>`).join('');
  function select(id,updateHash=false){
    const d=directions.find(d=>d.id===id)||directions[0],i=directions.indexOf(d);
    document.querySelector('#number').textContent=`DIRECTION 0${i+1} / 06`;
    document.querySelector('#direction-title').textContent=d.name;
    document.querySelector('#description').textContent=d.desc;
    document.querySelector('#reasoning').innerHTML=`<dt>浏览顺序</dt><dd>${d.read}</dd><dt>适合</dt><dd>${d.best}</dd><dt>视觉语言</dt><dd>${d.type}</dd><dt>取舍</dt><dd>${d.trade}</dd>`;
    const preview=document.querySelector('#preview');preview.className=`preview ${d.id}`;
    preview.innerHTML=`<header class="sample-header"><a href="index.html">KOREY WANG TIANRU / PRODUCT MANAGER</a><a href="resume.html">简历 ↗</a></header>${renderers[d.id]()}<footer class="sample-footer"><span>KOREY WANG TIANRU · 产品经理</span><a href="mailto:korey2028@gmail.com">联系我 ↗</a></footer>`;
    preview.querySelectorAll('a[href="fitness/"]').forEach(a=>{a.href='https://korey2028.tech/fitness/';});
    nav.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.direction===d.id)));
    if(updateHash)history.replaceState(null,'',`#${d.id}`);
  }
  document.querySelectorAll('[data-direction]').forEach(b=>b.addEventListener('click',()=>{select(b.dataset.direction,true);if(b.closest('table'))document.querySelector('.review-layout').scrollIntoView({behavior:'smooth'});}));
  window.addEventListener('hashchange',()=>{if(directions.some(d=>`#${d.id}`===location.hash))select(location.hash.slice(1));});
  select(location.hash.slice(1));
})();
