import{S as Hs,i as Is,s as Ls,e as p,k as i,t as r,w as v,M as Rs,c as n,d as t,m,a,h as f,x as u,b as h,N as Ms,G as l,g as o,y as $,L as Us,q as c,o as y,B as _,v as Fs}from"../../chunks/vendor-hf-doc-builder.js";import{I as qs}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as P}from"../../chunks/CodeBlock-hf-doc-builder.js";function Ws(Ql){let w,Ie,R,Rt,Le,j,Ut,ie,Ft,Wt,Re,me,Bt,Ue,T,Vt,be,Jt,zt,Fe,he,Kt,We,d,Qt,U,Xt,Yt,Be,k,A,we,F,Zt,ke,gt,Ve,ve,el,Je,x,tl,W,ll,sl,ze,ue,ol,Ke,B,V,Xl,Qe,G,rl,Ce,fl,pl,Xe,J,Ye,$e,nl,Ze,z,ge,K,Q,Yl,et,ce,al,tt,X,lt,ye,il,st,C,N,je,Y,ml,Te,hl,ot,S,vl,Z,ul,$l,rt,O,cl,de,yl,_l,ft,D,Pl,Ae,El,bl,pt,E,wl,g,xe,kl,Cl,ee,Ge,jl,Tl,nt,M,dl,Ne,Al,xl,at,te,it,q,Gl,Se,Nl,Sl,mt,le,ht,H,Ol,Oe,Dl,Ml,vt,se,ut,oe,$t,b,ql,De,Hl,Il,Me,Ll,Rl,ct,re,yt,I,Ul,qe,Fl,Wl,_t,fe,Pt,pe,Et,ne,Bl,bt,L,Vl,He,Jl,zl,wt,ae,kt,_e,Kl,Ct;return F=new qs({}),J=new P({props:{code:"!pip install transformers",highlighted:'!pip <span class="hljs-keyword">install</span> transformers'}}),z=new P({props:{code:"import transformers",highlighted:'<span class="hljs-keyword">import</span> transformers'}}),X=new P({props:{code:"!pip install transformers[sentencepiece]",highlighted:'!pip <span class="hljs-keyword">install</span> transformers[sentencepiece]'}}),Y=new qs({}),te=new P({props:{code:`mkdir ~/transformers-course
cd ~/transformers-course`,highlighted:`<span class="hljs-built_in">mkdir</span> ~/transformers-course
<span class="hljs-built_in">cd</span> ~/transformers-course`}}),le=new P({props:{code:"python -m venv .env",highlighted:'<span class="hljs-keyword">python</span> -m venv .<span class="hljs-keyword">env</span>'}}),se=new P({props:{code:"ls -a",highlighted:'<span class="hljs-built_in">ls</span> -a'}}),oe=new P({props:{code:".      ..    .env",highlighted:'.      <span class="hljs-string">..</span>    <span class="hljs-string">.env</span>'}}),re=new P({props:{code:"",highlighted:`<span class="hljs-comment"># Activate the virtual environment</span>
<span class="hljs-built_in">source</span> .<span class="hljs-built_in">env</span>/bin/activate

<span class="hljs-comment"># Deactivate the virtual environment</span>
<span class="hljs-built_in">source</span> .<span class="hljs-built_in">env</span>/bin/deactivate`}}),fe=new P({props:{code:"which python",highlighted:'<span class="hljs-built_in">which</span> python'}}),pe=new P({props:{code:"/home/<user>/transformers-course/.env/bin/python",highlighted:'<span class="hljs-regexp">/home/</span>&lt;user&gt;<span class="hljs-regexp">/transformers-course/</span>.env<span class="hljs-regexp">/bin/</span>python'}}),ae=new P({props:{code:'pip install "transformers[sentencepiece]"',highlighted:'pip <span class="hljs-keyword">install</span> <span class="hljs-string">&quot;transformers[sentencepiece]&quot;</span>'}}),{c(){w=p("meta"),Ie=i(),R=p("h1"),Rt=r("\u7B80\u4ECB"),Le=i(),j=p("p"),Ut=r("\u6B22\u8FCE\u6765\u5230\u62E5\u62B1\u8138\u8BFE\u7A0B\uFF01\u672C\u4ECB\u7ECD\u5C06\u6307\u5BFC\u60A8\u8BBE\u7F6E\u5DE5\u4F5C\u73AF\u5883\u3002\u5982\u679C\u60A8\u521A\u5F00\u59CB\u5B66\u4E60\u672C\u8BFE\u7A0B\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u60A8\u5148\u9605\u8BFB"),ie=p("a"),Ft=r("\u7B2C\u4E00\u7AE0"),Wt=r(", \u7136\u540E\u518D\u56DE\u6765\u8BBE\u7F6E\u60A8\u7684\u73AF\u5883\uFF0C\u4EE5\u4FBF\u60A8\u53EF\u4EE5\u81EA\u5DF1\u5C1D\u8BD5\u8FD0\u884C\u4EE3\u7801\u3002"),Re=i(),me=p("p"),Bt=r("\u6211\u4EEC\u5C06\u5728\u672C\u8BFE\u7A0B\u4E2D\u4F7F\u7528\u7684\u6240\u6709\u5E93\u90FD\u4EE5 Python \u5305\u7684\u5F62\u5F0F\u63D0\u4F9B\uFF0C\u56E0\u6B64\u5728\u8FD9\u91CC\u6211\u4EEC\u5C06\u5411\u60A8\u5C55\u793A\u5982\u4F55\u8BBE\u7F6E Python \u73AF\u5883\u5E76\u5B89\u88C5\u60A8\u9700\u8981\u7684\u7279\u5B9A\u5E93\u3002"),Ue=i(),T=p("p"),Vt=r("\u6211\u4EEC\u5C06\u4ECB\u7ECD\u4E24\u79CD\u8BBE\u7F6E\u5DE5\u4F5C\u73AF\u5883\u7684\u65B9\u6CD5\uFF0C\u4F7F\u7528 Colab \u7B14\u8BB0\u672C\u6216 Python \u865A\u62DF\u73AF\u5883\u3002\u9009\u62E9\u4EFB\u610F\u4E00\u79CD\u8D81\u624B\u7684\u65B9\u5F0F\u5373\u53EF\u3002\u5BF9\u4E8E\u521D\u5B66\u8005\uFF0C\u6211\u4EEC\u5F3A\u70C8\u5EFA\u8BAE\u60A8\u4ECE\u4F7F\u7528 Colab \u7B14\u8BB0\u672C\u5F00\u59CB\uFF08\u56FD\u5185\u65E0\u6CD5\u8BBF\u95EE,\u53EF\u4EE5\u8DF3\u8FC7,\u76F4\u63A5\u67E5\u9605\u672C\u9875"),be=p("strong"),Jt=r("\u5B89\u88C5\u4F9D\u8D56"),zt=r("\u90A3\u4E00\u8282\u5373\u53EF\u5728\u672C\u5730\u7684\u73AF\u5883\u4E0B\u8FD0\u884C,\u8BD1\u8005\u6CE8\uFF09\u3002"),Fe=i(),he=p("p"),Kt=r("\u8BF7\u6CE8\u610F\uFF0CPython \u865A\u62DF\u73AF\u5883\u7684\u4E00\u4E9B\u547D\u4EE4\u4E0D\u652F\u6301Windows\u7CFB\u7EDF\u3002\u5982\u679C\u60A8\u5728 Windows \u4E0A\u8FD0\u884C\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u60A8\u7EE7\u7EED\u4F7F\u7528 Colab \u7B14\u8BB0\u672C\u3002\u5982\u679C\u60A8\u4F7F\u7528\u7684\u662F Linux \u53D1\u884C\u7248\u6216 macOS\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u6B64\u5904\u7684\u4EFB\u4E00\u65B9\u6CD5\u3002"),We=i(),d=p("p"),Qt=r("\u5927\u591A\u6570\u8BFE\u7A0B\u548C\u670D\u52A1\u90FD\u4F9D\u8D56\u4E8E\u60A8\u62E5\u6709 Hugging Face \u5E10\u6237\u3002\u6211\u4EEC\u5EFA\u8BAE\u73B0\u5728\u521B\u5EFA\u4E00\u4E2A\uFF1A"),U=p("a"),Xt=r("\u521B\u5EFA\u4E00\u4E2A\u8D26\u53F7"),Yt=r("."),Be=i(),k=p("h2"),A=p("a"),we=p("span"),v(F.$$.fragment),Zt=i(),ke=p("span"),gt=r("\u4F7F\u7528 Google Colab \u7B14\u8BB0\u672C"),Ve=i(),ve=p("p"),el=r("\u4F7F\u7528 Colab notebook \u662F\u6700\u7B80\u5355\u7684\u8BBE\u7F6E\uFF1B\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u4E2D\u542F\u52A8Notebook\u5E76\u76F4\u63A5\u5F00\u59CB\u7F16\u5199\u81EA\u5DF1\u7684\u4EE3\u7801\uFF01"),Je=i(),x=p("p"),tl=r("\u5982\u679C\u60A8\u4E0D\u719F\u6089 Colab\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u60A8\u4ECE"),W=p("a"),ll=r("\u8FD9\u4E2A\u4ECB\u7ECD"),sl=r("\u5F00\u59CB\u3002Colab \u63D0\u4F9B\u4E00\u4E9B\u52A0\u901F\u786C\u4EF6\uFF0C\u4F8B\u5982 GPU \u6216 TPU\uFF0C\u5E76\u4E14\u5F53\u6211\u4EEC\u4F7F\u7528\u7684\u7B97\u529B\u6BD4\u8F83\u5C11\u7684\u65F6\u5019\u662F\u514D\u8D39\u7684\u3002"),ze=i(),ue=p("p"),ol=r("\u5F53\u6253\u5F00 Colab \u540E\uFF0C\u521B\u5EFA\u4E00\u4E2A\u65B0\u7B14\u8BB0\u672C\uFF1A"),Ke=i(),B=p("div"),V=p("img"),Qe=i(),G=p("p"),rl=r("\u4E0B\u4E00\u6B65\u662F\u5B89\u88C5\u6211\u4EEC\u5C06\u5728\u672C\u8BFE\u7A0B\u4E2D\u4F7F\u7528\u7684\u5E93\u3002\u6211\u4EEC\u5C06\u4F7F\u7528 "),Ce=p("strong"),fl=r("pip"),pl=r(" \u8FDB\u884C\u5B89\u88C5\uFF0C\u5B83\u662F Python \u7684\u5305\u7BA1\u7406\u5668\u3002\u5728Notebook\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u52A0\u4E0A!\u5B57\u7B26\u8868\u793A\u6267\u884C\u7CFB\u7EDF\u547D\u4EE4\uFF0C\u6240\u4EE5\u5B89\u88C5\u{1F917} Transformers \u7684\u547D\u4EE4\u5982\u4E0B\uFF1A"),Xe=i(),v(J.$$.fragment),Ye=i(),$e=p("p"),nl=r("\u60A8\u53EF\u4EE5\u901A\u8FC7\u5728\u8FD0\u884C Python \u65F6\u5BFC\u5165\u5305\u6765\u5224\u65AD\u662F\u5426\u6B63\u786E\u5B89\u88C5\u4E86\u8BE5\u5305\uFF1A"),Ze=i(),v(z.$$.fragment),ge=i(),K=p("div"),Q=p("img"),et=i(),ce=p("p"),al=r("\u8FD9\u5C06\u5B89\u88C5\u4E00\u4E2A\u975E\u5E38\u8F7B\u91CF\u7EA7\u7684 \u{1F917} Transformers\u3002\u5E76\u6CA1\u6709\u5B89\u88C5\u673A\u5668\u5B66\u4E60\u6846\u67B6\uFF08\u5982 PyTorch \u6216 TensorFlow\uFF09\u3002\u7531\u4E8E\u4E4B\u540E\u6211\u4EEC\u5C06\u4F7F\u7528\u8BE5\u5E93\u7684\u8BB8\u591A\u4E0D\u540C\u529F\u80FD\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u5B89\u88C5\u5F00\u53D1\u7248\u672C\uFF0C\u5B83\u5E26\u6709\u51E0\u4E4E\u6240\u6709\u6240\u9700\u7684\u4F9D\u8D56\u9879\uFF1A"),tt=i(),v(X.$$.fragment),lt=i(),ye=p("p"),il=r("\u8FD9\u5C06\u9700\u8981\u4E00\u4E9B\u65F6\u95F4\uFF0C\u4F46\u5F53\u5B8C\u6210\u4E4B\u540E\u60A8\u5C31\u505A\u597D\u5B66\u4E60\u5269\u4E0B\u7684\u8BFE\u7A0B\u7684\u73AF\u5883\u51C6\u5907\u4E86\uFF01"),st=i(),C=p("h2"),N=p("a"),je=p("span"),v(Y.$$.fragment),ml=i(),Te=p("span"),hl=r("\u4F7F\u7528 Python \u865A\u62DF\u73AF\u5883"),ot=i(),S=p("p"),vl=r("\u5982\u679C\u60A8\u66F4\u559C\u6B22\u4F7F\u7528 Python \u865A\u62DF\u73AF\u5883\uFF0C\u90A3\u4E48\u7B2C\u4E00\u6B65\u662F\u5728\u60A8\u7684\u7CFB\u7EDF\u4E0A\u5B89\u88C5 Python\u3002\u6211\u4EEC\u5EFA\u8BAE\u60A8\u6309\u7167"),Z=p("a"),ul=r("\u8FD9\u4E2A\u6559\u7A0B"),$l=r("\u8FDB\u884C\u914D\u7F6E\u3002"),rt=i(),O=p("p"),cl=r("\u5B89\u88C5 Python \u540E\uFF0C\u60A8\u5E94\u8BE5\u80FD\u591F\u5728\u7EC8\u7AEF\u4E2D\u8FD0\u884C Python \u547D\u4EE4\u3002\u60A8\u53EF\u4EE5\u5148\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u6765\u68C0\u9A8C\u7231\u88C5\u662F\u5426\u6B63\u786E\uFF0C\u7136\u540E\u518D\u7EE7\u7EED\u4E0B\u4E00\u6B65\uFF1A"),de=p("strong"),yl=r("python \u2014version"),_l=r("\u3002\u8FD9\u5E94\u8BE5\u4F1A\u6253\u5370\u51FA\u60A8\u7CFB\u7EDF\u4E0A\u73B0\u5728\u53EF\u7528\u7684 Python \u7248\u672C\u3002"),ft=i(),D=p("p"),Pl=r("\u5728\u7EC8\u7AEF\u4E2D\u8FD0\u884C Python \u547D\u4EE4\uFF08\u4F8B\u5982 "),Ae=p("strong"),El=r("python \u2014version"),bl=r("\uFF09\u65F6\uFF0C\u60A8\u5E94\u8BE5\u5C06\u8FD0\u884C\u547D\u4EE4\u7684\u8FD9\u4E2APython\u89C6\u4E3A\u7CFB\u7EDF\u4E0A\u7684\u201C\u9ED8\u8BA4\u201DPython\u3002\u6211\u4EEC\u5EFA\u8BAE\u4FDD\u6301\u8FD9\u4E2A\u9ED8\u8BA4\u7684Python\u5B89\u88C5\u7A0B\u5E8F\u6CA1\u6709\u4EFB\u4F55\u5305\uFF0C\u5F53\u8FD0\u884C\u67D0\u4E2A\u7A0B\u5E8F\u7684\u65F6\u5019\u5C31\u4E3A\u90A3\u4E2A\u7A0B\u5E8F\u521B\u5EFA\u4E00\u4E2A\u5355\u72EC\u7684\u8FD0\u884C\u73AF\u5883 - \u8FD9\u6837\uFF0C\u6BCF\u4E2A\u5E94\u7528\u7A0B\u5E8F\u90FD\u53EF\u4EE5\u6709\u81EA\u5DF1\u7684\u4F9D\u8D56\u9879\u548C\u5305\uFF0C\u60A8\u65E0\u9700\u62C5\u5FC3\u4E0E\u5176\u4ED6\u5E94\u7528\u7A0B\u5E8F\u6F5C\u5728\u7684\u517C\u5BB9\u6027\u95EE\u9898\u3002"),pt=i(),E=p("p"),wl=r("\u5728 Python \u4E2D\uFF0C\u8FD9\u662F\u901A\u8FC7 "),g=p("a"),xe=p("em"),kl=r("\u865A\u62DF\u73AF\u5883"),Cl=r("\u5B9E\u73B0\u7684\uFF0C\u865A\u62DF\u73AF\u5883\u4F1A\u521B\u5EFA\u8BB8\u591A\u76EE\u5F55\u6811\uFF0C\u6BCF\u4E2A\u76EE\u5F55\u6811\u90FD\u5305\u542B\u5177\u6709\u7279\u5B9A Python \u7248\u672C\u7684 Python \u5B89\u88C5\u4EE5\u53CA\u5E94\u7528\u7A0B\u5E8F\u6240\u9700\u7684\u6240\u6709\u5305\u3002\u53EF\u4EE5\u4F7F\u7528\u8BB8\u591A\u4E0D\u540C\u7684\u5DE5\u5177\u6765\u521B\u5EFA\u8FD9\u6837\u7684\u865A\u62DF\u73AF\u5883\uFF0C\u4F46\u5728\u6B64\u6211\u4EEC\u5C06\u4F7F\u7528\u5B98\u65B9 Python \u5305\uFF1A"),ee=p("a"),Ge=p("code"),jl=r("venv"),Tl=r("."),nt=i(),M=p("p"),dl=r("\u9996\u5148\uFF0C\u521B\u5EFA\u60A8\u5E0C\u671BTransformers\u6240\u5728\u7684\u76EE\u5F55 - \u4F8B\u5982\uFF0C\u60A8\u53EF\u80FD\u5E0C\u671B\u5728\u4E3B\u76EE\u5F55\u7684\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A "),Ne=p("em"),Al=r("Transformers-course"),xl=r(" \u7684\u65B0\u76EE\u5F55\uFF1A"),at=i(),v(te.$$.fragment),it=i(),q=p("p"),Gl=r("\u5728\u8FD9\u4E2A\u76EE\u5F55\u4E2D\uFF0C\u4F7F\u7528 Python "),Se=p("code"),Nl=r("venv"),Sl=r(" \u6A21\u5757\u521B\u5EFA\u4E00\u4E2A\u865A\u62DF\u73AF\u5883\uFF1A"),mt=i(),v(le.$$.fragment),ht=i(),H=p("p"),Ol=r("\u60A8\u73B0\u5728\u5E94\u8BE5\u5728\u539F\u672C\u4E3A\u7A7A\u7684\u6587\u4EF6\u5939\u4E2D\u770B\u5230\u4E00\u4E2A\u540D\u4E3A "),Oe=p("em"),Dl=r(".env"),Ml=r(" \u7684\u76EE\u5F55\uFF1A"),vt=i(),v(se.$$.fragment),ut=i(),v(oe.$$.fragment),$t=i(),b=p("p"),ql=r("\u60A8\u53EF\u4EE5\u4F7F\u7528"),De=p("code"),Hl=r("activate"),Il=r("\u548C"),Me=p("code"),Ll=r("deactivate"),Rl=r("\u547D\u4EE4\u6765\u63A7\u5236\u8FDB\u5165\u548C\u9000\u51FA\u60A8\u7684\u865A\u62DF\u73AF\u5883\uFF1A"),ct=i(),v(re.$$.fragment),yt=i(),I=p("p"),Ul=r("\u60A8\u53EF\u4EE5\u901A\u8FC7\u8FD0\u884C "),qe=p("code"),Fl=r("which python"),Wl=r(" \u547D\u4EE4\u6765\u68C0\u6D4B\u865A\u62DF\u73AF\u5883\u662F\u5426\u88AB\u6FC0\u6D3B\uFF1A\u5982\u679C\u5B83\u6307\u5411\u865A\u62DF\u73AF\u5883\uFF0C\u90A3\u4E48\u60A8\u5DF2\u7ECF\u6210\u529F\u6FC0\u6D3B\u4E86\u5B83\uFF01"),_t=i(),v(fe.$$.fragment),Pt=i(),v(pe.$$.fragment),Et=i(),ne=p("h3"),Bl=r("\u5B89\u88C5\u4F9D\u8D56"),bt=i(),L=p("p"),Vl=r("\u4E0E\u4F7F\u7528 Google Colab \u5B9E\u4F8B\u7684\u4E0A\u4E00\u8282\u4E00\u6837\uFF0C\u60A8\u73B0\u5728\u9700\u8981\u5B89\u88C5\u7EE7\u7EED\u6240\u9700\u7684\u5305\u3002 \u540C\u6837\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528 "),He=p("code"),Jl=r("pip"),zl=r(" \u5305\u7BA1\u7406\u5668\u5B89\u88C5 \u{1F917} Transformers \u7684\u5F00\u53D1\u7248\u672C\uFF1A"),wt=i(),v(ae.$$.fragment),kt=i(),_e=p("p"),Kl=r("\u60A8\u73B0\u5728\u5DF2\u51C6\u5907\u5C31\u7EEA\uFF0C\u53EF\u4EE5\u5F00\u59CB\u4E86\uFF01"),this.h()},l(e){const s=Rs('[data-svelte="svelte-1phssyn"]',document.head);w=n(s,"META",{name:!0,content:!0}),s.forEach(t),Ie=m(e),R=n(e,"H1",{id:!0});var Zl=a(R);Rt=f(Zl,"\u7B80\u4ECB"),Zl.forEach(t),Le=m(e),j=n(e,"P",{});var jt=a(j);Ut=f(jt,"\u6B22\u8FCE\u6765\u5230\u62E5\u62B1\u8138\u8BFE\u7A0B\uFF01\u672C\u4ECB\u7ECD\u5C06\u6307\u5BFC\u60A8\u8BBE\u7F6E\u5DE5\u4F5C\u73AF\u5883\u3002\u5982\u679C\u60A8\u521A\u5F00\u59CB\u5B66\u4E60\u672C\u8BFE\u7A0B\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u60A8\u5148\u9605\u8BFB"),ie=n(jt,"A",{href:!0});var gl=a(ie);Ft=f(gl,"\u7B2C\u4E00\u7AE0"),gl.forEach(t),Wt=f(jt,", \u7136\u540E\u518D\u56DE\u6765\u8BBE\u7F6E\u60A8\u7684\u73AF\u5883\uFF0C\u4EE5\u4FBF\u60A8\u53EF\u4EE5\u81EA\u5DF1\u5C1D\u8BD5\u8FD0\u884C\u4EE3\u7801\u3002"),jt.forEach(t),Re=m(e),me=n(e,"P",{});var es=a(me);Bt=f(es,"\u6211\u4EEC\u5C06\u5728\u672C\u8BFE\u7A0B\u4E2D\u4F7F\u7528\u7684\u6240\u6709\u5E93\u90FD\u4EE5 Python \u5305\u7684\u5F62\u5F0F\u63D0\u4F9B\uFF0C\u56E0\u6B64\u5728\u8FD9\u91CC\u6211\u4EEC\u5C06\u5411\u60A8\u5C55\u793A\u5982\u4F55\u8BBE\u7F6E Python \u73AF\u5883\u5E76\u5B89\u88C5\u60A8\u9700\u8981\u7684\u7279\u5B9A\u5E93\u3002"),es.forEach(t),Ue=m(e),T=n(e,"P",{});var Tt=a(T);Vt=f(Tt,"\u6211\u4EEC\u5C06\u4ECB\u7ECD\u4E24\u79CD\u8BBE\u7F6E\u5DE5\u4F5C\u73AF\u5883\u7684\u65B9\u6CD5\uFF0C\u4F7F\u7528 Colab \u7B14\u8BB0\u672C\u6216 Python \u865A\u62DF\u73AF\u5883\u3002\u9009\u62E9\u4EFB\u610F\u4E00\u79CD\u8D81\u624B\u7684\u65B9\u5F0F\u5373\u53EF\u3002\u5BF9\u4E8E\u521D\u5B66\u8005\uFF0C\u6211\u4EEC\u5F3A\u70C8\u5EFA\u8BAE\u60A8\u4ECE\u4F7F\u7528 Colab \u7B14\u8BB0\u672C\u5F00\u59CB\uFF08\u56FD\u5185\u65E0\u6CD5\u8BBF\u95EE,\u53EF\u4EE5\u8DF3\u8FC7,\u76F4\u63A5\u67E5\u9605\u672C\u9875"),be=n(Tt,"STRONG",{});var ts=a(be);Jt=f(ts,"\u5B89\u88C5\u4F9D\u8D56"),ts.forEach(t),zt=f(Tt,"\u90A3\u4E00\u8282\u5373\u53EF\u5728\u672C\u5730\u7684\u73AF\u5883\u4E0B\u8FD0\u884C,\u8BD1\u8005\u6CE8\uFF09\u3002"),Tt.forEach(t),Fe=m(e),he=n(e,"P",{});var ls=a(he);Kt=f(ls,"\u8BF7\u6CE8\u610F\uFF0CPython \u865A\u62DF\u73AF\u5883\u7684\u4E00\u4E9B\u547D\u4EE4\u4E0D\u652F\u6301Windows\u7CFB\u7EDF\u3002\u5982\u679C\u60A8\u5728 Windows \u4E0A\u8FD0\u884C\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u60A8\u7EE7\u7EED\u4F7F\u7528 Colab \u7B14\u8BB0\u672C\u3002\u5982\u679C\u60A8\u4F7F\u7528\u7684\u662F Linux \u53D1\u884C\u7248\u6216 macOS\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u6B64\u5904\u7684\u4EFB\u4E00\u65B9\u6CD5\u3002"),ls.forEach(t),We=m(e),d=n(e,"P",{});var dt=a(d);Qt=f(dt,"\u5927\u591A\u6570\u8BFE\u7A0B\u548C\u670D\u52A1\u90FD\u4F9D\u8D56\u4E8E\u60A8\u62E5\u6709 Hugging Face \u5E10\u6237\u3002\u6211\u4EEC\u5EFA\u8BAE\u73B0\u5728\u521B\u5EFA\u4E00\u4E2A\uFF1A"),U=n(dt,"A",{href:!0,rel:!0});var ss=a(U);Xt=f(ss,"\u521B\u5EFA\u4E00\u4E2A\u8D26\u53F7"),ss.forEach(t),Yt=f(dt,"."),dt.forEach(t),Be=m(e),k=n(e,"H2",{class:!0});var At=a(k);A=n(At,"A",{id:!0,class:!0,href:!0});var os=a(A);we=n(os,"SPAN",{});var rs=a(we);u(F.$$.fragment,rs),rs.forEach(t),os.forEach(t),Zt=m(At),ke=n(At,"SPAN",{});var fs=a(ke);gt=f(fs,"\u4F7F\u7528 Google Colab \u7B14\u8BB0\u672C"),fs.forEach(t),At.forEach(t),Ve=m(e),ve=n(e,"P",{});var ps=a(ve);el=f(ps,"\u4F7F\u7528 Colab notebook \u662F\u6700\u7B80\u5355\u7684\u8BBE\u7F6E\uFF1B\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u4E2D\u542F\u52A8Notebook\u5E76\u76F4\u63A5\u5F00\u59CB\u7F16\u5199\u81EA\u5DF1\u7684\u4EE3\u7801\uFF01"),ps.forEach(t),Je=m(e),x=n(e,"P",{});var xt=a(x);tl=f(xt,"\u5982\u679C\u60A8\u4E0D\u719F\u6089 Colab\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u60A8\u4ECE"),W=n(xt,"A",{href:!0,rel:!0});var ns=a(W);ll=f(ns,"\u8FD9\u4E2A\u4ECB\u7ECD"),ns.forEach(t),sl=f(xt,"\u5F00\u59CB\u3002Colab \u63D0\u4F9B\u4E00\u4E9B\u52A0\u901F\u786C\u4EF6\uFF0C\u4F8B\u5982 GPU \u6216 TPU\uFF0C\u5E76\u4E14\u5F53\u6211\u4EEC\u4F7F\u7528\u7684\u7B97\u529B\u6BD4\u8F83\u5C11\u7684\u65F6\u5019\u662F\u514D\u8D39\u7684\u3002"),xt.forEach(t),ze=m(e),ue=n(e,"P",{});var as=a(ue);ol=f(as,"\u5F53\u6253\u5F00 Colab \u540E\uFF0C\u521B\u5EFA\u4E00\u4E2A\u65B0\u7B14\u8BB0\u672C\uFF1A"),as.forEach(t),Ke=m(e),B=n(e,"DIV",{class:!0});var is=a(B);V=n(is,"IMG",{src:!0,alt:!0,width:!0}),is.forEach(t),Qe=m(e),G=n(e,"P",{});var Gt=a(G);rl=f(Gt,"\u4E0B\u4E00\u6B65\u662F\u5B89\u88C5\u6211\u4EEC\u5C06\u5728\u672C\u8BFE\u7A0B\u4E2D\u4F7F\u7528\u7684\u5E93\u3002\u6211\u4EEC\u5C06\u4F7F\u7528 "),Ce=n(Gt,"STRONG",{});var ms=a(Ce);fl=f(ms,"pip"),ms.forEach(t),pl=f(Gt," \u8FDB\u884C\u5B89\u88C5\uFF0C\u5B83\u662F Python \u7684\u5305\u7BA1\u7406\u5668\u3002\u5728Notebook\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u52A0\u4E0A!\u5B57\u7B26\u8868\u793A\u6267\u884C\u7CFB\u7EDF\u547D\u4EE4\uFF0C\u6240\u4EE5\u5B89\u88C5\u{1F917} Transformers \u7684\u547D\u4EE4\u5982\u4E0B\uFF1A"),Gt.forEach(t),Xe=m(e),u(J.$$.fragment,e),Ye=m(e),$e=n(e,"P",{});var hs=a($e);nl=f(hs,"\u60A8\u53EF\u4EE5\u901A\u8FC7\u5728\u8FD0\u884C Python \u65F6\u5BFC\u5165\u5305\u6765\u5224\u65AD\u662F\u5426\u6B63\u786E\u5B89\u88C5\u4E86\u8BE5\u5305\uFF1A"),hs.forEach(t),Ze=m(e),u(z.$$.fragment,e),ge=m(e),K=n(e,"DIV",{class:!0});var vs=a(K);Q=n(vs,"IMG",{src:!0,alt:!0,width:!0}),vs.forEach(t),et=m(e),ce=n(e,"P",{});var us=a(ce);al=f(us,"\u8FD9\u5C06\u5B89\u88C5\u4E00\u4E2A\u975E\u5E38\u8F7B\u91CF\u7EA7\u7684 \u{1F917} Transformers\u3002\u5E76\u6CA1\u6709\u5B89\u88C5\u673A\u5668\u5B66\u4E60\u6846\u67B6\uFF08\u5982 PyTorch \u6216 TensorFlow\uFF09\u3002\u7531\u4E8E\u4E4B\u540E\u6211\u4EEC\u5C06\u4F7F\u7528\u8BE5\u5E93\u7684\u8BB8\u591A\u4E0D\u540C\u529F\u80FD\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u5B89\u88C5\u5F00\u53D1\u7248\u672C\uFF0C\u5B83\u5E26\u6709\u51E0\u4E4E\u6240\u6709\u6240\u9700\u7684\u4F9D\u8D56\u9879\uFF1A"),us.forEach(t),tt=m(e),u(X.$$.fragment,e),lt=m(e),ye=n(e,"P",{});var $s=a(ye);il=f($s,"\u8FD9\u5C06\u9700\u8981\u4E00\u4E9B\u65F6\u95F4\uFF0C\u4F46\u5F53\u5B8C\u6210\u4E4B\u540E\u60A8\u5C31\u505A\u597D\u5B66\u4E60\u5269\u4E0B\u7684\u8BFE\u7A0B\u7684\u73AF\u5883\u51C6\u5907\u4E86\uFF01"),$s.forEach(t),st=m(e),C=n(e,"H2",{class:!0});var Nt=a(C);N=n(Nt,"A",{id:!0,class:!0,href:!0});var cs=a(N);je=n(cs,"SPAN",{});var ys=a(je);u(Y.$$.fragment,ys),ys.forEach(t),cs.forEach(t),ml=m(Nt),Te=n(Nt,"SPAN",{});var _s=a(Te);hl=f(_s,"\u4F7F\u7528 Python \u865A\u62DF\u73AF\u5883"),_s.forEach(t),Nt.forEach(t),ot=m(e),S=n(e,"P",{});var St=a(S);vl=f(St,"\u5982\u679C\u60A8\u66F4\u559C\u6B22\u4F7F\u7528 Python \u865A\u62DF\u73AF\u5883\uFF0C\u90A3\u4E48\u7B2C\u4E00\u6B65\u662F\u5728\u60A8\u7684\u7CFB\u7EDF\u4E0A\u5B89\u88C5 Python\u3002\u6211\u4EEC\u5EFA\u8BAE\u60A8\u6309\u7167"),Z=n(St,"A",{href:!0,rel:!0});var Ps=a(Z);ul=f(Ps,"\u8FD9\u4E2A\u6559\u7A0B"),Ps.forEach(t),$l=f(St,"\u8FDB\u884C\u914D\u7F6E\u3002"),St.forEach(t),rt=m(e),O=n(e,"P",{});var Ot=a(O);cl=f(Ot,"\u5B89\u88C5 Python \u540E\uFF0C\u60A8\u5E94\u8BE5\u80FD\u591F\u5728\u7EC8\u7AEF\u4E2D\u8FD0\u884C Python \u547D\u4EE4\u3002\u60A8\u53EF\u4EE5\u5148\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u6765\u68C0\u9A8C\u7231\u88C5\u662F\u5426\u6B63\u786E\uFF0C\u7136\u540E\u518D\u7EE7\u7EED\u4E0B\u4E00\u6B65\uFF1A"),de=n(Ot,"STRONG",{});var Es=a(de);yl=f(Es,"python \u2014version"),Es.forEach(t),_l=f(Ot,"\u3002\u8FD9\u5E94\u8BE5\u4F1A\u6253\u5370\u51FA\u60A8\u7CFB\u7EDF\u4E0A\u73B0\u5728\u53EF\u7528\u7684 Python \u7248\u672C\u3002"),Ot.forEach(t),ft=m(e),D=n(e,"P",{});var Dt=a(D);Pl=f(Dt,"\u5728\u7EC8\u7AEF\u4E2D\u8FD0\u884C Python \u547D\u4EE4\uFF08\u4F8B\u5982 "),Ae=n(Dt,"STRONG",{});var bs=a(Ae);El=f(bs,"python \u2014version"),bs.forEach(t),bl=f(Dt,"\uFF09\u65F6\uFF0C\u60A8\u5E94\u8BE5\u5C06\u8FD0\u884C\u547D\u4EE4\u7684\u8FD9\u4E2APython\u89C6\u4E3A\u7CFB\u7EDF\u4E0A\u7684\u201C\u9ED8\u8BA4\u201DPython\u3002\u6211\u4EEC\u5EFA\u8BAE\u4FDD\u6301\u8FD9\u4E2A\u9ED8\u8BA4\u7684Python\u5B89\u88C5\u7A0B\u5E8F\u6CA1\u6709\u4EFB\u4F55\u5305\uFF0C\u5F53\u8FD0\u884C\u67D0\u4E2A\u7A0B\u5E8F\u7684\u65F6\u5019\u5C31\u4E3A\u90A3\u4E2A\u7A0B\u5E8F\u521B\u5EFA\u4E00\u4E2A\u5355\u72EC\u7684\u8FD0\u884C\u73AF\u5883 - \u8FD9\u6837\uFF0C\u6BCF\u4E2A\u5E94\u7528\u7A0B\u5E8F\u90FD\u53EF\u4EE5\u6709\u81EA\u5DF1\u7684\u4F9D\u8D56\u9879\u548C\u5305\uFF0C\u60A8\u65E0\u9700\u62C5\u5FC3\u4E0E\u5176\u4ED6\u5E94\u7528\u7A0B\u5E8F\u6F5C\u5728\u7684\u517C\u5BB9\u6027\u95EE\u9898\u3002"),Dt.forEach(t),pt=m(e),E=n(e,"P",{});var Pe=a(E);wl=f(Pe,"\u5728 Python \u4E2D\uFF0C\u8FD9\u662F\u901A\u8FC7 "),g=n(Pe,"A",{href:!0,rel:!0});var ws=a(g);xe=n(ws,"EM",{});var ks=a(xe);kl=f(ks,"\u865A\u62DF\u73AF\u5883"),ks.forEach(t),ws.forEach(t),Cl=f(Pe,"\u5B9E\u73B0\u7684\uFF0C\u865A\u62DF\u73AF\u5883\u4F1A\u521B\u5EFA\u8BB8\u591A\u76EE\u5F55\u6811\uFF0C\u6BCF\u4E2A\u76EE\u5F55\u6811\u90FD\u5305\u542B\u5177\u6709\u7279\u5B9A Python \u7248\u672C\u7684 Python \u5B89\u88C5\u4EE5\u53CA\u5E94\u7528\u7A0B\u5E8F\u6240\u9700\u7684\u6240\u6709\u5305\u3002\u53EF\u4EE5\u4F7F\u7528\u8BB8\u591A\u4E0D\u540C\u7684\u5DE5\u5177\u6765\u521B\u5EFA\u8FD9\u6837\u7684\u865A\u62DF\u73AF\u5883\uFF0C\u4F46\u5728\u6B64\u6211\u4EEC\u5C06\u4F7F\u7528\u5B98\u65B9 Python \u5305\uFF1A"),ee=n(Pe,"A",{href:!0,rel:!0});var Cs=a(ee);Ge=n(Cs,"CODE",{});var js=a(Ge);jl=f(js,"venv"),js.forEach(t),Cs.forEach(t),Tl=f(Pe,"."),Pe.forEach(t),nt=m(e),M=n(e,"P",{});var Mt=a(M);dl=f(Mt,"\u9996\u5148\uFF0C\u521B\u5EFA\u60A8\u5E0C\u671BTransformers\u6240\u5728\u7684\u76EE\u5F55 - \u4F8B\u5982\uFF0C\u60A8\u53EF\u80FD\u5E0C\u671B\u5728\u4E3B\u76EE\u5F55\u7684\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A "),Ne=n(Mt,"EM",{});var Ts=a(Ne);Al=f(Ts,"Transformers-course"),Ts.forEach(t),xl=f(Mt," \u7684\u65B0\u76EE\u5F55\uFF1A"),Mt.forEach(t),at=m(e),u(te.$$.fragment,e),it=m(e),q=n(e,"P",{});var qt=a(q);Gl=f(qt,"\u5728\u8FD9\u4E2A\u76EE\u5F55\u4E2D\uFF0C\u4F7F\u7528 Python "),Se=n(qt,"CODE",{});var ds=a(Se);Nl=f(ds,"venv"),ds.forEach(t),Sl=f(qt," \u6A21\u5757\u521B\u5EFA\u4E00\u4E2A\u865A\u62DF\u73AF\u5883\uFF1A"),qt.forEach(t),mt=m(e),u(le.$$.fragment,e),ht=m(e),H=n(e,"P",{});var Ht=a(H);Ol=f(Ht,"\u60A8\u73B0\u5728\u5E94\u8BE5\u5728\u539F\u672C\u4E3A\u7A7A\u7684\u6587\u4EF6\u5939\u4E2D\u770B\u5230\u4E00\u4E2A\u540D\u4E3A "),Oe=n(Ht,"EM",{});var As=a(Oe);Dl=f(As,".env"),As.forEach(t),Ml=f(Ht," \u7684\u76EE\u5F55\uFF1A"),Ht.forEach(t),vt=m(e),u(se.$$.fragment,e),ut=m(e),u(oe.$$.fragment,e),$t=m(e),b=n(e,"P",{});var Ee=a(b);ql=f(Ee,"\u60A8\u53EF\u4EE5\u4F7F\u7528"),De=n(Ee,"CODE",{});var xs=a(De);Hl=f(xs,"activate"),xs.forEach(t),Il=f(Ee,"\u548C"),Me=n(Ee,"CODE",{});var Gs=a(Me);Ll=f(Gs,"deactivate"),Gs.forEach(t),Rl=f(Ee,"\u547D\u4EE4\u6765\u63A7\u5236\u8FDB\u5165\u548C\u9000\u51FA\u60A8\u7684\u865A\u62DF\u73AF\u5883\uFF1A"),Ee.forEach(t),ct=m(e),u(re.$$.fragment,e),yt=m(e),I=n(e,"P",{});var It=a(I);Ul=f(It,"\u60A8\u53EF\u4EE5\u901A\u8FC7\u8FD0\u884C "),qe=n(It,"CODE",{});var Ns=a(qe);Fl=f(Ns,"which python"),Ns.forEach(t),Wl=f(It," \u547D\u4EE4\u6765\u68C0\u6D4B\u865A\u62DF\u73AF\u5883\u662F\u5426\u88AB\u6FC0\u6D3B\uFF1A\u5982\u679C\u5B83\u6307\u5411\u865A\u62DF\u73AF\u5883\uFF0C\u90A3\u4E48\u60A8\u5DF2\u7ECF\u6210\u529F\u6FC0\u6D3B\u4E86\u5B83\uFF01"),It.forEach(t),_t=m(e),u(fe.$$.fragment,e),Pt=m(e),u(pe.$$.fragment,e),Et=m(e),ne=n(e,"H3",{id:!0});var Ss=a(ne);Bl=f(Ss,"\u5B89\u88C5\u4F9D\u8D56"),Ss.forEach(t),bt=m(e),L=n(e,"P",{});var Lt=a(L);Vl=f(Lt,"\u4E0E\u4F7F\u7528 Google Colab \u5B9E\u4F8B\u7684\u4E0A\u4E00\u8282\u4E00\u6837\uFF0C\u60A8\u73B0\u5728\u9700\u8981\u5B89\u88C5\u7EE7\u7EED\u6240\u9700\u7684\u5305\u3002 \u540C\u6837\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528 "),He=n(Lt,"CODE",{});var Os=a(He);Jl=f(Os,"pip"),Os.forEach(t),zl=f(Lt," \u5305\u7BA1\u7406\u5668\u5B89\u88C5 \u{1F917} Transformers \u7684\u5F00\u53D1\u7248\u672C\uFF1A"),Lt.forEach(t),wt=m(e),u(ae.$$.fragment,e),kt=m(e),_e=n(e,"P",{});var Ds=a(_e);Kl=f(Ds,"\u60A8\u73B0\u5728\u5DF2\u51C6\u5907\u5C31\u7EEA\uFF0C\u53EF\u4EE5\u5F00\u59CB\u4E86\uFF01"),Ds.forEach(t),this.h()},h(){h(w,"name","hf:doc:metadata"),h(w,"content",JSON.stringify(Bs)),h(R,"id",""),h(ie,"href","/course/chapter1"),h(U,"href","https://huggingface.co/join"),h(U,"rel","nofollow"),h(A,"id","google-colab"),h(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(A,"href","#google-colab"),h(k,"class","relative group"),h(W,"href","https://colab.research.google.com/notebooks/intro.ipynb"),h(W,"rel","nofollow"),Ms(V.src,Xl="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter0/new_colab.png")||h(V,"src",Xl),h(V,"alt","An empty colab notebook"),h(V,"width","80%"),h(B,"class","flex justify-center"),Ms(Q.src,Yl="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter0/install.gif")||h(Q,"src",Yl),h(Q,"alt","A gif showing the result of the two commands above: installation and import"),h(Q,"width","80%"),h(K,"class","flex justify-center"),h(N,"id","python"),h(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(N,"href","#python"),h(C,"class","relative group"),h(Z,"href","https://realpython.com/installing-python/"),h(Z,"rel","nofollow"),h(g,"href","https://docs.python.org/3/tutorial/venv.html"),h(g,"rel","nofollow"),h(ee,"href","https://docs.python.org/3/library/venv.html#module-venv"),h(ee,"rel","nofollow"),h(ne,"id","")},m(e,s){l(document.head,w),o(e,Ie,s),o(e,R,s),l(R,Rt),o(e,Le,s),o(e,j,s),l(j,Ut),l(j,ie),l(ie,Ft),l(j,Wt),o(e,Re,s),o(e,me,s),l(me,Bt),o(e,Ue,s),o(e,T,s),l(T,Vt),l(T,be),l(be,Jt),l(T,zt),o(e,Fe,s),o(e,he,s),l(he,Kt),o(e,We,s),o(e,d,s),l(d,Qt),l(d,U),l(U,Xt),l(d,Yt),o(e,Be,s),o(e,k,s),l(k,A),l(A,we),$(F,we,null),l(k,Zt),l(k,ke),l(ke,gt),o(e,Ve,s),o(e,ve,s),l(ve,el),o(e,Je,s),o(e,x,s),l(x,tl),l(x,W),l(W,ll),l(x,sl),o(e,ze,s),o(e,ue,s),l(ue,ol),o(e,Ke,s),o(e,B,s),l(B,V),o(e,Qe,s),o(e,G,s),l(G,rl),l(G,Ce),l(Ce,fl),l(G,pl),o(e,Xe,s),$(J,e,s),o(e,Ye,s),o(e,$e,s),l($e,nl),o(e,Ze,s),$(z,e,s),o(e,ge,s),o(e,K,s),l(K,Q),o(e,et,s),o(e,ce,s),l(ce,al),o(e,tt,s),$(X,e,s),o(e,lt,s),o(e,ye,s),l(ye,il),o(e,st,s),o(e,C,s),l(C,N),l(N,je),$(Y,je,null),l(C,ml),l(C,Te),l(Te,hl),o(e,ot,s),o(e,S,s),l(S,vl),l(S,Z),l(Z,ul),l(S,$l),o(e,rt,s),o(e,O,s),l(O,cl),l(O,de),l(de,yl),l(O,_l),o(e,ft,s),o(e,D,s),l(D,Pl),l(D,Ae),l(Ae,El),l(D,bl),o(e,pt,s),o(e,E,s),l(E,wl),l(E,g),l(g,xe),l(xe,kl),l(E,Cl),l(E,ee),l(ee,Ge),l(Ge,jl),l(E,Tl),o(e,nt,s),o(e,M,s),l(M,dl),l(M,Ne),l(Ne,Al),l(M,xl),o(e,at,s),$(te,e,s),o(e,it,s),o(e,q,s),l(q,Gl),l(q,Se),l(Se,Nl),l(q,Sl),o(e,mt,s),$(le,e,s),o(e,ht,s),o(e,H,s),l(H,Ol),l(H,Oe),l(Oe,Dl),l(H,Ml),o(e,vt,s),$(se,e,s),o(e,ut,s),$(oe,e,s),o(e,$t,s),o(e,b,s),l(b,ql),l(b,De),l(De,Hl),l(b,Il),l(b,Me),l(Me,Ll),l(b,Rl),o(e,ct,s),$(re,e,s),o(e,yt,s),o(e,I,s),l(I,Ul),l(I,qe),l(qe,Fl),l(I,Wl),o(e,_t,s),$(fe,e,s),o(e,Pt,s),$(pe,e,s),o(e,Et,s),o(e,ne,s),l(ne,Bl),o(e,bt,s),o(e,L,s),l(L,Vl),l(L,He),l(He,Jl),l(L,zl),o(e,wt,s),$(ae,e,s),o(e,kt,s),o(e,_e,s),l(_e,Kl),Ct=!0},p:Us,i(e){Ct||(c(F.$$.fragment,e),c(J.$$.fragment,e),c(z.$$.fragment,e),c(X.$$.fragment,e),c(Y.$$.fragment,e),c(te.$$.fragment,e),c(le.$$.fragment,e),c(se.$$.fragment,e),c(oe.$$.fragment,e),c(re.$$.fragment,e),c(fe.$$.fragment,e),c(pe.$$.fragment,e),c(ae.$$.fragment,e),Ct=!0)},o(e){y(F.$$.fragment,e),y(J.$$.fragment,e),y(z.$$.fragment,e),y(X.$$.fragment,e),y(Y.$$.fragment,e),y(te.$$.fragment,e),y(le.$$.fragment,e),y(se.$$.fragment,e),y(oe.$$.fragment,e),y(re.$$.fragment,e),y(fe.$$.fragment,e),y(pe.$$.fragment,e),y(ae.$$.fragment,e),Ct=!1},d(e){t(w),e&&t(Ie),e&&t(R),e&&t(Le),e&&t(j),e&&t(Re),e&&t(me),e&&t(Ue),e&&t(T),e&&t(Fe),e&&t(he),e&&t(We),e&&t(d),e&&t(Be),e&&t(k),_(F),e&&t(Ve),e&&t(ve),e&&t(Je),e&&t(x),e&&t(ze),e&&t(ue),e&&t(Ke),e&&t(B),e&&t(Qe),e&&t(G),e&&t(Xe),_(J,e),e&&t(Ye),e&&t($e),e&&t(Ze),_(z,e),e&&t(ge),e&&t(K),e&&t(et),e&&t(ce),e&&t(tt),_(X,e),e&&t(lt),e&&t(ye),e&&t(st),e&&t(C),_(Y),e&&t(ot),e&&t(S),e&&t(rt),e&&t(O),e&&t(ft),e&&t(D),e&&t(pt),e&&t(E),e&&t(nt),e&&t(M),e&&t(at),_(te,e),e&&t(it),e&&t(q),e&&t(mt),_(le,e),e&&t(ht),e&&t(H),e&&t(vt),_(se,e),e&&t(ut),_(oe,e),e&&t($t),e&&t(b),e&&t(ct),_(re,e),e&&t(yt),e&&t(I),e&&t(_t),_(fe,e),e&&t(Pt),_(pe,e),e&&t(Et),e&&t(ne),e&&t(bt),e&&t(L),e&&t(wt),_(ae,e),e&&t(kt),e&&t(_e)}}}const Bs={local:"",sections:[{local:"google-colab",title:"\u4F7F\u7528 Google Colab \u7B14\u8BB0\u672C"},{local:"python",sections:[{local:"",title:"\u5B89\u88C5\u4F9D\u8D56"}],title:"\u4F7F\u7528 Python \u865A\u62DF\u73AF\u5883"}],title:"\u7B80\u4ECB"};function Vs(Ql){return Fs(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Qs extends Hs{constructor(w){super();Is(this,w,Vs,Ws,Ls,{})}}export{Qs as default,Bs as metadata};
