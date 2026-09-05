// Public adaptation of FitnessDecisionEngine.dailyReadiness, confirmed inputs only.
// No HealthKit, nutrition, baseline confidence or medical assessment is computed here.
export const fields = ['sleep', 'fatigue', 'soreness', 'readiness', 'stress', 'pain', 'rpe'];
export const scenes = {
  ready: {sleep:7.5, fatigue:3, soreness:2, readiness:8, stress:3, pain:0, rpe:7, hasDaily:true},
  tired: {sleep:6, fatigue:7, soreness:4, readiness:5, stress:4, pain:0, rpe:8, hasDaily:true},
  pain: {sleep:8, fatigue:3, soreness:2, readiness:8, stress:3, pain:7, rpe:7, hasDaily:true},
  missing: {sleep:7.5, fatigue:3, soreness:2, readiness:8, stress:3, pain:0, rpe:7, hasDaily:false}
};
export function decide(s) {
  const valid = fields.every(key => Number.isFinite(s[key]) && s[key] >= ({sleep:3,fatigue:1,readiness:1,rpe:1}[key] ?? 0) && s[key] <= 10);
  if (!s.hasDaily || !valid) return {level:'missing', status:'证据不足', title:'先补一条状态记录', action:'先记录睡眠、疲劳、酸痛和准备度，再决定训练强度。', reason:'今日记录尚未完成，或输入不完整。未知不等于 0，也不意味着恢复良好。', triggers:[]};
  const red = [
    [s.sleep < 5.5, '睡眠不足 5.5 小时'], [s.fatigue >= 8, '疲劳达到 8 / 10'],
    [s.soreness >= 8, '酸痛达到 8 / 10'], [s.stress >= 9, '压力达到 9 / 10'],
    [s.readiness <= 3, '自评准备度不高于 3 / 10'], [s.pain >= 7, '关节痛达到 7 / 10']
  ].filter(([match])=>match).map(([,label])=>label);
  const yellow = [
    [s.sleep < 7, '睡眠不足 7 小时'], [s.fatigue >= 6, '疲劳达到 6 / 10'],
    [s.soreness >= 6, '酸痛达到 6 / 10'], [s.stress >= 7, '压力达到 7 / 10'],
    [s.readiness <= 6, '自评准备度不高于 6 / 10'], [s.pain >= 4, '关节痛达到 4 / 10'],
    [s.rpe >= 9, '最近训练 RPE 达到 9 / 10']
  ].filter(([match])=>match).map(([,label])=>label);
  if (red.length) return {level:'red',status:'恢复优先',title:'今天，先暂停加量',action:'今天改成恢复、技术练习、散步、灵活性或休息。',reason:`触发红色信号：${red.join('；')}。任一红色信号优先于其他指标；其余指标良好也不会抵消它。`,triggers:red};
  if (yellow.length >= 2) return {level:'yellow',status:'调整训练',title:'保留训练，降低负担',action:'训练保留，但顶组控制在 RPE 7–8，或减少 20–30% 训练量。',reason:`同时出现 ${yellow.length} 个黄色信号：${yellow.join('；')}。规则在至少 2 项命中时建议调整。`,triggers:yellow};
  return {level:'green',status:'按计划推进',title:'今天，只推进一个小变量',action:'按原计划训练，只推进一个小变量。',reason:yellow.length?`当前仅有 1 个黄色信号：${yellow[0]}，尚未达到 2 项调整阈值。继续观察，不代表所有指标都理想。`:'当前输入未触发红色信号，也未达到黄色信号调整阈值。保留原计划，避免同时改变多个变量。',triggers:yellow};
}
