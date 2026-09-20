import {test} from 'node:test';
import assert from 'node:assert/strict';
import {decide, scenes, fields} from './fitness-rules.mjs';
const check = (patch, expected) => assert.equal(decide({...scenes.ready,...patch}).level, expected);
test('four scenes', () => {
  for (const [name,level] of Object.entries({ready:'green',tired:'yellow',pain:'red',missing:'missing'})) assert.equal(decide(scenes[name]).level,level);
});
test('one yellow vs two yellow; RPE alone never red', () => {
  check({fatigue:6},'green'); check({fatigue:6,sleep:6.5},'yellow'); check({rpe:10},'green'); check({rpe:9,stress:7},'yellow');
});
test('sleep boundaries', () => {
  check({sleep:5},'red'); check({sleep:5.5},'green'); check({sleep:6.5,fatigue:6},'yellow'); check({sleep:7,fatigue:6},'green');
});
test('each red overrides otherwise ideal inputs', () => {
  for (const patch of [{sleep:5},{fatigue:8},{soreness:8},{stress:9},{readiness:3},{pain:7}]) check(patch,'red');
});
test('red thresholds do not fire one step early', () => {
  for (const patch of [{fatigue:7},{soreness:7},{stress:8},{readiness:4},{pain:6}]) check(patch,'green');
});
test('each yellow contributes at threshold', () => {
  for (const patch of [{fatigue:6},{soreness:6},{stress:7},{readiness:6},{pain:4},{rpe:9}]) check({sleep:6.5,...patch},'yellow');
});
test('incomplete and invalid inputs fail closed', () => {
  check({hasDaily:false,pain:9},'missing');
  for (const key of fields) for (const value of [undefined,NaN,Infinity,-1,11]) check({[key]:value},'missing');
  check({sleep:0},'missing'); check({readiness:0},'missing');
});
test('no mutation of input fixtures', () => {
  const frozen = Object.freeze({...scenes.ready}); decide(frozen); assert.deepEqual(frozen,scenes.ready);
});
