(this["webpackJsonpquiz-interaction"]=this["webpackJsonpquiz-interaction"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/medal.65bebea8.svg"},,function(e,t,n){e.exports=n(34)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(7),r=n.n(s),i=(n(20),n(21),n(22),n(10)),c=n.n(i),l=n(11),u=n.n(l),m=n(12),d=n.n(m),h=n(8),b=n.n(h);function p(){return o.a.createElement("div",{className:"header-section"},o.a.createElement("div",{className:"logo-wrapper"},o.a.createElement(b.a,null),o.a.createElement("h3",null,"Quiz Interation")),o.a.createElement("div",{className:"social-icons-wrapper"},o.a.createElement(c.a,{className:"social-icon"}),o.a.createElement(u.a,{className:"social-icon"}),o.a.createElement(d.a,{className:"social-icon"})))}n(28);function E(){return o.a.createElement("div",{className:"progress-bar"})}function f(){return o.a.createElement("div",{className:"main-question-section"},o.a.createElement(p,null),o.a.createElement(E,null),o.a.createElement("section",{className:"main-question-section-body"},o.a.createElement("h2",{className:"main-question-text"},"How well do you know your balloons?"),o.a.createElement("p",{className:"main-question-subtitle"},"A short quiz to test how well you know air balloons"),o.a.createElement("div",{className:"footer-wrapper"},o.a.createElement("div",{className:"inventor"},"BY ISAAC NEWTON"),o.a.createElement("div",{className:"date"},"SEP 26, 2020"))))}var v=n(2);n(29),n(30);function w(e){var t=e.question,n=e.index,s=e.lastIndex,r=e.handleSubmit,i=e.handleshowResult,c=e.currentQuestionIndex,l=Object(a.useState)(null),u=Object(v.a)(l,2),m=u[0],d=u[1];return o.a.createElement("div",{className:"question-card-container",id:"Q"+n,style:c!==n?{pointerEvents:"none",opacity:"0.4"}:{opacity:"1"}},o.a.createElement("div",{className:"question-label"},"QUESTION ",n+1),o.a.createElement("div",{className:"question-text"},t.questionText),o.a.createElement("div",{className:"answer-section"},t.answerOptions.map((function(e,t){return o.a.createElement("button",{key:t,className:m===t?"selected-option":"option-btn",onClick:function(){return function(e){d(e)}(t)}},e.answerText)})),s?o.a.createElement("button",{className:"submit-btn",onClick:function(){return i(t.answerOptions[m].isCorrect)},disabled:null===m},"Submit and show results"):o.a.createElement("button",{className:"submit-btn",onClick:function(){return r(t.answerOptions[m].isCorrect)},disabled:null===m},"Submit")))}n(31);var N=n(13),y=n.n(N);function x(e){var t=e.retry,n=e.score,s=e.total,r=Object(a.useState)(0),i=Object(v.a)(r,2),c=i[0],l=i[1];return Object(a.useEffect)((function(){l(parseFloat(100*n/s).toFixed(0)+"%")}),[n,s]),o.a.createElement("div",{className:"result-container"},o.a.createElement("img",{src:y.a,alt:"Medal"}),o.a.createElement("div",{className:"aggregate-value"},c),o.a.createElement("div",{className:"message"},0!==n?"Congratulations":"Oops!"),o.a.createElement("div",{className:"success-ratio"},"You got ",n," out of ",s," questions"),o.a.createElement("button",{className:"Retry",onClick:t},"Replay"))}function g(e){var t=e.questions,n=Object(a.useState)(0),s=Object(v.a)(n,2),r=s[0],i=s[1],c=Object(a.useState)(!1),l=Object(v.a)(c,2),u=l[0],m=l[1],d=Object(a.useState)(0),h=Object(v.a)(d,2),b=h[0],p=h[1],E=function(e){e&&p(b+1),i(r+1);var t=document.getElementById("Q"+r);t.parentNode.scrollTop=t.offsetTop+500},f=function(e){e&&p(b+1),m(!0)};return o.a.createElement("div",{className:"quiz-section"},u&&o.a.createElement(x,{retry:function(){m(!1),p(0),i(0)},score:b,total:t.length}),!u&&t.map((function(e,n){return o.a.createElement(w,{question:e,key:n,index:n,lastIndex:t.length-1===n,handleSubmit:E,handleshowResult:f,currentQuestionIndex:r})})))}function q(){return o.a.createElement("div",{className:"container"},o.a.createElement(f,null),o.a.createElement("div",{className:"quiz-wrapper"},o.a.createElement(g,{questions:[{questionText:"Do you think air balloons are cool enough for 2018?",answerOptions:[{answerText:"Yes, Obviously",isCorrect:!0},{answerText:"No! C'mon",isCorrect:!1},{answerText:"Not sure. Really don't care",isCorrect:!1}]},{questionText:"Which of these show the trendy lock pattern?",answerOptions:[{answerText:"Yes, Obviously",isCorrect:!1},{answerText:"No! C'mon",isCorrect:!1},{answerText:"Not sure. Really don't care",isCorrect:!0}]},{questionText:"How does a hot air balloon fly?",answerOptions:[{answerText:"The gas that is foreign to the air that is emitted from burning propane is lighter than the air outside the balloon, which creates buoyancy",isCorrect:!1},{answerText:"The air being blown into the balloon pushed on the envelope which creates buoyancy that lifts the balloon",isCorrect:!0},{answerText:"The hot air being blown into the envelope is lighter than the air on the outside of the balloon, which created buoyancy that lifts the balloon",isCorrect:!1}]}]})))}n(32);r.a.render(o.a.createElement(q,null),document.getElementById("root"));var O=document.querySelector(".cursor");document.addEventListener("mousemove",(function(e){O.setAttribute("style","top: "+e.pageY+"px; left: "+e.pageX+"px;")})),document.addEventListener("click",(function(){O.classList.add("expand"),setTimeout((function(){O.classList.remove("expand")}),500)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.4d2697d2.chunk.js.map