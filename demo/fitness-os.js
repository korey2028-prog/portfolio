import {fields, scenes, decide} from './fitness-rules.mjs';
const $ = id => document.getElementById(id);
const names = {sleep:'昨晚睡眠',fatigue:'主观疲劳',soreness:'肌肉酸痛',readiness:'自评准备度',stress:'压力',pain:'关节痛',rpe:'最近训练 RPE'};
let current;
let recorded = false;
function read() { return {...Object.fromEntries(fields.map(key=>[key,Number($(key).value)])),hasDaily:$('has-daily').checked}; }
function update(announce = true) {
  const s = read(); current = decide(s);
  $('daily-fields').disabled = !s.hasDaily;
  for (const key of fields) $(key+'-value').textContent = !s.hasDaily ? '未记录' : key==='sleep' ? `${s[key]} 小时` : `${s[key]} / 10`;
  $('decision').dataset.level=current.level;
  $('status').textContent=current.status;
  $('mobile-status').textContent=current.status;
  $('decision-title').textContent=current.title;
  $('action').textContent=current.action;
  $('reason').textContent=current.reason;
  $('pain-note').hidden=!s.hasDaily || s.pain < 4;
  $('evidence').replaceChildren(...fields.map(key=>{
    const item=document.createElement('div'); const title=document.createElement('dt'); const value=document.createElement('dd');
    title.textContent=names[key]; value.textContent=s.hasDaily? (key==='sleep'?`${s[key]} h`:`${s[key]} / 10`):'未记录'; item.append(title,value); return item;
  }));
  $('record').disabled=!s.hasDaily;
  $('record').textContent=s.hasDaily?'记录已执行（演示） ↗':'先完成状态记录';
  $('review').hidden=true; $('outcome').value='';
  $('review-result').textContent='一次反馈不能证明效果，真实产品需要持续观察。';
  $('record-note').textContent=recorded?'输入已变化，旧演示记录已清除。请按新建议重新确认。':'所有数值均为合成示例，不构成个体训练或医疗建议。';
  recorded=false;
  if (announce) $('update-status').textContent=`${current.status}。${current.action}`;
}
document.querySelectorAll('[data-scene]').forEach(button=>button.addEventListener('click',()=>{
  const preset=scenes[button.dataset.scene];
  fields.forEach(key=>{$(key).value=preset[key]}); $('has-daily').checked=preset.hasDaily;
  document.querySelectorAll('[data-scene]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
  $('more-inputs').open=button.dataset.scene==='pain'; update();
}));
$('signals').addEventListener('submit',event=>event.preventDefault());
$('signals').addEventListener('input',()=>{
  document.querySelectorAll('[data-scene]').forEach(item=>item.setAttribute('aria-pressed','false')); update();
});
$('record').addEventListener('click',()=>{
  if (!read().hasDaily || recorded) return;
  recorded=true; $('review').hidden=false;
  $('recorded-action').textContent=`本次模拟行动：${current.action}`;
  $('record').textContent='已记录本次演示'; $('record').disabled=true;
  $('record-note').textContent='仅保留在当前页面，刷新即清除。';
  $('review-title').focus({preventScroll:false});
});
$('outcome').addEventListener('change',()=>{
  const copy={better:'记录为“感觉更好”。先保持这一个调整，持续观察；单次主观反馈不能证明因果关系。',same:'记录为“没有明显变化”。继续记录执行情况和状态，积累证据后再决定是否调整。',worse:'记录为“感觉更差”。停止继续加量，重新核对状态；若出现持续或明显疼痛，应寻求专业评估。'};
  $('review-result').textContent=copy[$('outcome').value] || '一次反馈不能证明效果，真实产品需要持续观察。';
});
update(false);
