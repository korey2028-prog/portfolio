(()=>{
  'use strict';

  const questions=[
    {
      stem:'Had the backup system failed, the team ___ the entire dataset.',
      options:{A:'loses',B:'had lost',C:'would lose',D:'would have lost'},
      answer:'D',
      correctTitle:'你抓住了倒装条件句。',
      wrongTitle:'关键不是 Had 本身，而是它省略了 if。',
      explanation:'“Had the backup system failed”还原后是“If the backup system had failed”。它描述与过去事实相反的条件，结果使用 would have + 过去分词。',
      signal:'Had + 主语 + 过去分词 = If + 主语 + had done；过去结果用 would have done。'
    },
    {
      stem:'Without the final review, the proposal ___ several critical errors.',
      options:{A:'still contains',B:'would still contain',C:'would still have contained',D:'had still contained'},
      answer:'C',
      correctTitle:'你把显式结构迁移到了隐藏条件。',
      wrongTitle:'Without 也可以承载一个未写出的虚拟条件。',
      explanation:'“Without the final review”表示最终审查实际发生，并避免了过去的错误。隐藏条件是“If there had been no final review”，所以结果使用 would have done。',
      signal:'Without／But for + 名词可等价于隐藏的 if 条件；先判断它指向现在还是过去。'
    }
  ];

  const form=document.querySelector('#quiz-form');
  const answerList=document.querySelector('#answer-list');
  const questionText=document.querySelector('#question-text');
  const answerHint=document.querySelector('#answer-hint');
  const submitButton=document.querySelector('#submit-answer');
  const feedback=document.querySelector('#quiz-feedback');
  const feedbackStatus=document.querySelector('#feedback-status');
  const feedbackTitle=document.querySelector('#feedback-title');
  const feedbackCopy=document.querySelector('#feedback-copy');
  const feedbackSignal=document.querySelector('#feedback-signal');
  const nextButton=document.querySelector('#next-question');
  const progressLabel=document.querySelector('#progress-label');
  const progressBar=document.querySelector('#progress-bar');
  const traceSteps=[...document.querySelectorAll('[data-trace-step]')];
  let index=0;
  let score=0;
  let finished=false;

  const setTrace=(active)=>traceSteps.forEach((item,step)=>{
    item.classList.toggle('done',step<active);
    item.classList.toggle('active',step===active);
  });

  const renderQuestion=()=>{
    const question=questions[index];
    questionText.textContent=question.stem;
    answerList.innerHTML=Object.entries(question.options).map(([key,value])=>`<label><input type="radio" name="answer" value="${key}"><span><b>${key}</b> ${value}</span></label>`).join('');
    progressLabel.textContent=`第 ${index+1}／${questions.length} 题`;
    progressBar.style.width=`${((index+1)/questions.length)*100}%`;
    answerHint.textContent='先作答。答案和解析将在提交后出现。';
    submitButton.disabled=true;
    form.hidden=false;
    feedback.hidden=true;
    feedback.classList.remove('wrong');
    setTrace(index===0?0:2);
  };

  answerList.addEventListener('change',()=>{submitButton.disabled=false});

  form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const selected=new FormData(form).get('answer');
    if(!selected)return;
    const question=questions[index];
    const isCorrect=selected===question.answer;
    if(isCorrect)score+=1;
    form.hidden=true;
    feedback.hidden=false;
    feedback.classList.toggle('wrong',!isCorrect);
    feedbackStatus.textContent=isCorrect?'判断正确':'已定位错因';
    feedbackTitle.textContent=isCorrect?question.correctTitle:question.wrongTitle;
    feedbackCopy.textContent=`正确答案：${question.answer}。${question.explanation}`;
    feedbackSignal.textContent=question.signal;
    nextButton.textContent=index<questions.length-1?'进入同类题回炉':'查看本次学习闭环';
    setTrace(index<questions.length-1?1:2);
  });

  nextButton.addEventListener('click',()=>{
    if(finished){
      index=0;
      score=0;
      finished=false;
      renderQuestion();
      return;
    }
    if(index<questions.length-1){
      index+=1;
      renderQuestion();
      return;
    }
    finished=true;
    feedback.classList.remove('wrong');
    feedbackStatus.textContent='演示完成';
    feedbackTitle.textContent=`这组 ${score}／${questions.length}`;
    feedbackCopy.textContent='你刚刚走完了“作答 → 提交后反馈 → 结构复盘 → 同类题回炉”。真实工作台还会把错题写入本地记录，并按薄弱点安排后续练习。';
    feedbackSignal.textContent='产品价值不只是判分，而是让用户知道为什么错、下一步练什么。';
    nextButton.textContent='重新体验';
    setTrace(3);
  });

  renderQuestion();
})();
