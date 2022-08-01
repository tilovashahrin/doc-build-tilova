import{S as oe,i as re,s as ae,e as i,k as h,w as G,t as L,M as se,c as l,d as n,m as g,a as u,x as N,h as U,b as _,G as r,g as m,y as F,q as M,o as V,B,v as ce}from"../../chunks/vendor-hf-doc-builder.js";import{T as ie}from"../../chunks/Tip-hf-doc-builder.js";import{D as te}from"../../chunks/Docstring-hf-doc-builder.js";import{I as le}from"../../chunks/IconCopyLink-hf-doc-builder.js";function ue(C){let t,d;return{c(){t=i("p"),d=L(`This function is provided for internal testing and debugging, but it\u2019s not intended for real trainings. It will
only use the CPU.`)},l(o){t=l(o,"P",{});var s=u(t);d=U(s,`This function is provided for internal testing and debugging, but it\u2019s not intended for real trainings. It will
only use the CPU.`),s.forEach(n)},m(o,s){m(o,t,s),r(t,d)},d(o){o&&n(t)}}}function pe(C){let t,d,o,s,T,b,H,y,J,I,x,K,q,p,v,O,k,R,D,c,$,W,E,j,z,f,S;return b=new le({}),v=new te({props:{name:"accelerate.notebook_launcher",anchor:"accelerate.notebook_launcher",parameters:[{name:"function",val:""},{name:"args",val:" = ()"},{name:"num_processes",val:" = None"},{name:"use_fp16",val:" = False"},{name:"mixed_precision",val:" = 'no'"},{name:"use_port",val:" = '29500'"}],parametersDescription:[{anchor:"accelerate.notebook_launcher.function",description:`<strong>function</strong> (<code>Callable</code>) &#x2014;
The training function to execute. If it accepts arguments, the first argument should be the index of the
process run.`,name:"function"},{anchor:"accelerate.notebook_launcher.args",description:`<strong>args</strong> (<code>Tuple</code>) &#x2014;
Tuple of arguments to pass to the function (it will receive <code>*args</code>).`,name:"args"},{anchor:"accelerate.notebook_launcher.num_processes",description:`<strong>num_processes</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The number of processes to use for training. Will default to 8 in Colab/Kaggle if a TPU is available, to
the number of GPUs available otherwise.`,name:"num_processes"},{anchor:"accelerate.notebook_launcher.mixed_precision",description:`<strong>mixed_precision</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;no&quot;</code>) &#x2014;
If <code>fp16</code> or <code>bf16</code>, will use mixed precision training on multi-GPU.`,name:"mixed_precision"},{anchor:"accelerate.notebook_launcher.use_port",description:`<strong>use_port</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;29500&quot;</code>) &#x2014;
The port to use to communicate between processes when launching a multi-GPU training.`,name:"use_port"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/launchers.py#L26"}}),$=new te({props:{name:"accelerate.debug_launcher",anchor:"accelerate.debug_launcher",parameters:[{name:"function",val:""},{name:"args",val:" = ()"},{name:"num_processes",val:" = 2"}],parametersDescription:[{anchor:"accelerate.debug_launcher.function",description:`<strong>function</strong> (<code>Callable</code>) &#x2014;
The training function to execute.`,name:"function"},{anchor:"accelerate.debug_launcher.args",description:`<strong>args</strong> (<code>Tuple</code>) &#x2014;
Tuple of arguments to pass to the function (it will receive <code>*args</code>).`,name:"args"},{anchor:"accelerate.debug_launcher.num_processes",description:`<strong>num_processes</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The number of processes to use for training.`,name:"num_processes"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/launchers.py#L138"}}),f=new ie({props:{warning:!0,$$slots:{default:[ue]},$$scope:{ctx:C}}}),{c(){t=i("meta"),d=h(),o=i("h1"),s=i("a"),T=i("span"),G(b.$$.fragment),H=h(),y=i("span"),J=L("Launchers"),I=h(),x=i("p"),K=L("Functions for launching training on distributed processes."),q=h(),p=i("div"),G(v.$$.fragment),O=h(),k=i("p"),R=L(`Launches a training function, using several processes if it\u2019s possible in the current environment (TPU with
multiple cores for instance).`),D=h(),c=i("div"),G($.$$.fragment),W=h(),E=i("p"),j=L("Launches a training function using several processes on CPU for debugging purposes."),z=h(),G(f.$$.fragment),this.h()},l(e){const a=se('[data-svelte="svelte-1phssyn"]',document.head);t=l(a,"META",{name:!0,content:!0}),a.forEach(n),d=g(e),o=l(e,"H1",{class:!0});var w=u(o);s=l(w,"A",{id:!0,class:!0,href:!0});var Q=u(s);T=l(Q,"SPAN",{});var X=u(T);N(b.$$.fragment,X),X.forEach(n),Q.forEach(n),H=g(w),y=l(w,"SPAN",{});var Y=u(y);J=U(Y,"Launchers"),Y.forEach(n),w.forEach(n),I=g(e),x=l(e,"P",{});var Z=u(x);K=U(Z,"Functions for launching training on distributed processes."),Z.forEach(n),q=g(e),p=l(e,"DIV",{class:!0});var A=u(p);N(v.$$.fragment,A),O=g(A),k=l(A,"P",{});var ee=u(k);R=U(ee,`Launches a training function, using several processes if it\u2019s possible in the current environment (TPU with
multiple cores for instance).`),ee.forEach(n),A.forEach(n),D=g(e),c=l(e,"DIV",{class:!0});var P=u(c);N($.$$.fragment,P),W=g(P),E=l(P,"P",{});var ne=u(E);j=U(ne,"Launches a training function using several processes on CPU for debugging purposes."),ne.forEach(n),z=g(P),N(f.$$.fragment,P),P.forEach(n),this.h()},h(){_(t,"name","hf:doc:metadata"),_(t,"content",JSON.stringify(me)),_(s,"id","accelerate.notebook_launcher"),_(s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(s,"href","#accelerate.notebook_launcher"),_(o,"class","relative group"),_(p,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(c,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,a){r(document.head,t),m(e,d,a),m(e,o,a),r(o,s),r(s,T),F(b,T,null),r(o,H),r(o,y),r(y,J),m(e,I,a),m(e,x,a),r(x,K),m(e,q,a),m(e,p,a),F(v,p,null),r(p,O),r(p,k),r(k,R),m(e,D,a),m(e,c,a),F($,c,null),r(c,W),r(c,E),r(E,j),r(c,z),F(f,c,null),S=!0},p(e,[a]){const w={};a&2&&(w.$$scope={dirty:a,ctx:e}),f.$set(w)},i(e){S||(M(b.$$.fragment,e),M(v.$$.fragment,e),M($.$$.fragment,e),M(f.$$.fragment,e),S=!0)},o(e){V(b.$$.fragment,e),V(v.$$.fragment,e),V($.$$.fragment,e),V(f.$$.fragment,e),S=!1},d(e){n(t),e&&n(d),e&&n(o),B(b),e&&n(I),e&&n(x),e&&n(q),e&&n(p),B(v),e&&n(D),e&&n(c),B($),B(f)}}}const me={local:"accelerate.notebook_launcher",title:"Launchers"};function de(C){return ce(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class be extends oe{constructor(t){super();re(this,t,de,pe,ae,{})}}export{be as default,me as metadata};
