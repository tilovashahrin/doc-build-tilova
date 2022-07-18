import{S as ue,i as he,s as pe,e as s,k as A,w as Q,t as h,M as fe,c as i,d as t,m as L,a as u,x as X,h as p,b as c,G as n,g,y as Z,q as ee,o as te,B as ne,v as me}from"../chunks/vendor-hf-doc-builder.js";import{T as de}from"../chunks/Tip-hf-doc-builder.js";import{D as ge}from"../chunks/Docstring-hf-doc-builder.js";import{I as be}from"../chunks/IconCopyLink-hf-doc-builder.js";function _e(G){let o,v,r,f,b;return{c(){o=s("p"),v=h("Your "),r=s("code"),f=h("Accelerator"),b=h(` object should only be defined inside the training function. This is because the
initialization should be done inside the launcher only.`)},l(l){o=i(l,"P",{});var m=u(o);v=p(m,"Your "),r=i(m,"CODE",{});var w=u(r);f=p(w,"Accelerator"),w.forEach(t),b=p(m,` object should only be defined inside the training function. This is because the
initialization should be done inside the launcher only.`),m.forEach(t)},m(l,m){g(l,o,m),n(o,v),n(o,r),n(r,f),n(o,b)},d(l){l&&t(o)}}}function ve(G){let o,v,r,f,b,l,m,w,j,q,d,z,y,O,Y,x,B,F,N,$,H,P,J,R,S,k,D,_,E,V,C,W,I;return l=new be({}),k=new de({props:{warning:!0,$$slots:{default:[_e]},$$scope:{ctx:G}}}),E=new ge({props:{name:"accelerate.notebook_launcher",anchor:"accelerate.notebook_launcher",parameters:[{name:"function",val:""},{name:"args",val:" = ()"},{name:"num_processes",val:" = None"},{name:"use_fp16",val:" = False"},{name:"mixed_precision",val:" = 'no'"},{name:"use_port",val:" = '29500'"}],parametersDescription:[{anchor:"accelerate.notebook_launcher.function",description:`<strong>function</strong> (<code>Callable</code>) &#x2014;
The training function to execute. If it accepts arguments, the first argument should be the index of the
process run.`,name:"function"},{anchor:"accelerate.notebook_launcher.args",description:`<strong>args</strong> (<code>Tuple</code>) &#x2014;
Tuple of arguments to pass to the function (it will receive <code>*args</code>).`,name:"args"},{anchor:"accelerate.notebook_launcher.num_processes",description:`<strong>num_processes</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The number of processes to use for training. Will default to 8 in Colab/Kaggle if a TPU is available, to
the number of GPUs available otherwise.`,name:"num_processes"},{anchor:"accelerate.notebook_launcher.mixed_precision",description:`<strong>mixed_precision</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;no&quot;</code>) &#x2014;
If <code>fp16</code> or <code>bf16</code>, will use mixed precision training on multi-GPU.`,name:"mixed_precision"},{anchor:"accelerate.notebook_launcher.use_port",description:`<strong>use_port</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;29500&quot;</code>) &#x2014;
The port to use to communicate between processes when launching a multi-GPU training.`,name:"use_port"}],source:"https://github.com/huggingface/accelerate/blob/v0.11.0/src/accelerate/launchers.py#L26"}}),{c(){o=s("meta"),v=A(),r=s("h1"),f=s("a"),b=s("span"),Q(l.$$.fragment),m=A(),w=s("span"),j=h("Notebook Launcher"),q=A(),d=s("p"),z=h("Launch your training function inside a notebook. Currently supports launching a training with TPUs on "),y=s("a"),O=h(`Google
Colab`),Y=h(" and "),x=s("a"),B=h("Kaggle kernels"),F=h(`, as well as training on
several GPUs (if the machine on which you are running your notebook has them).`),N=A(),$=s("p"),H=h("An example can be found in "),P=s("a"),J=h("this notebook"),R=h("."),S=A(),Q(k.$$.fragment),D=A(),_=s("div"),Q(E.$$.fragment),V=A(),C=s("p"),W=h(`Launches a training function, using several processes if it\u2019s possible in the current environment (TPU with
multiple cores for instance).`),this.h()},l(e){const a=fe('[data-svelte="svelte-1phssyn"]',document.head);o=i(a,"META",{name:!0,content:!0}),a.forEach(t),v=L(e),r=i(e,"H1",{class:!0});var T=u(r);f=i(T,"A",{id:!0,class:!0,href:!0});var oe=u(f);b=i(oe,"SPAN",{});var ae=u(b);X(l.$$.fragment,ae),ae.forEach(t),oe.forEach(t),m=L(T),w=i(T,"SPAN",{});var re=u(w);j=p(re,"Notebook Launcher"),re.forEach(t),T.forEach(t),q=L(e),d=i(e,"P",{});var U=u(d);z=p(U,"Launch your training function inside a notebook. Currently supports launching a training with TPUs on "),y=i(U,"A",{href:!0,rel:!0});var se=u(y);O=p(se,`Google
Colab`),se.forEach(t),Y=p(U," and "),x=i(U,"A",{href:!0,rel:!0});var ie=u(x);B=p(ie,"Kaggle kernels"),ie.forEach(t),F=p(U,`, as well as training on
several GPUs (if the machine on which you are running your notebook has them).`),U.forEach(t),N=L(e),$=i(e,"P",{});var K=u($);H=p(K,"An example can be found in "),P=i(K,"A",{href:!0,rel:!0});var le=u(P);J=p(le,"this notebook"),le.forEach(t),R=p(K,"."),K.forEach(t),S=L(e),X(k.$$.fragment,e),D=L(e),_=i(e,"DIV",{class:!0});var M=u(_);X(E.$$.fragment,M),V=L(M),C=i(M,"P",{});var ce=u(C);W=p(ce,`Launches a training function, using several processes if it\u2019s possible in the current environment (TPU with
multiple cores for instance).`),ce.forEach(t),M.forEach(t),this.h()},h(){c(o,"name","hf:doc:metadata"),c(o,"content",JSON.stringify(we)),c(f,"id","accelerate.notebook_launcher"),c(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(f,"href","#accelerate.notebook_launcher"),c(r,"class","relative group"),c(y,"href","https://colab.research.google.com/"),c(y,"rel","nofollow"),c(x,"href","https://www.kaggle.com/code"),c(x,"rel","nofollow"),c(P,"href","https://github.com/huggingface/notebooks/blob/master/examples/accelerate/simple_nlp_example.ipynb"),c(P,"rel","nofollow"),c(_,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,a){n(document.head,o),g(e,v,a),g(e,r,a),n(r,f),n(f,b),Z(l,b,null),n(r,m),n(r,w),n(w,j),g(e,q,a),g(e,d,a),n(d,z),n(d,y),n(y,O),n(d,Y),n(d,x),n(x,B),n(d,F),g(e,N,a),g(e,$,a),n($,H),n($,P),n(P,J),n($,R),g(e,S,a),Z(k,e,a),g(e,D,a),g(e,_,a),Z(E,_,null),n(_,V),n(_,C),n(C,W),I=!0},p(e,[a]){const T={};a&2&&(T.$$scope={dirty:a,ctx:e}),k.$set(T)},i(e){I||(ee(l.$$.fragment,e),ee(k.$$.fragment,e),ee(E.$$.fragment,e),I=!0)},o(e){te(l.$$.fragment,e),te(k.$$.fragment,e),te(E.$$.fragment,e),I=!1},d(e){t(o),e&&t(v),e&&t(r),ne(l),e&&t(q),e&&t(d),e&&t(N),e&&t($),e&&t(S),ne(k,e),e&&t(D),e&&t(_),ne(E)}}}const we={local:"accelerate.notebook_launcher",title:"Notebook Launcher"};function $e(G){return me(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ee extends ue{constructor(o){super();he(this,o,$e,ve,pe,{})}}export{Ee as default,we as metadata};
