import{S as os,i as ls,s as ns,e as c,k as j,w as I,t as o,M as ms,c as p,d as r,m as w,x as V,a as b,h as l,b as v,N as ss,G as t,g as u,y as W,o as C,p as ts,q,B as J,v as is,n as rs}from"../../chunks/vendor-hf-doc-builder.js";import{T as cs}from"../../chunks/Tip-hf-doc-builder.js";import{C as _e}from"../../chunks/CodeBlock-hf-doc-builder.js";import{C as as}from"../../chunks/CourseFloatingBanner-hf-doc-builder.js";import{F as ps}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";function us(y){let a,i;return a=new as({props:{chapter:4,classNames:"absolute z-10 right-0 top-0",notebooks:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter4/section2_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter4/section2_tf.ipynb"}]}}),{c(){I(a.$$.fragment)},l(s){V(a.$$.fragment,s)},m(s,$){W(a,s,$),i=!0},i(s){i||(q(a.$$.fragment,s),i=!0)},o(s){C(a.$$.fragment,s),i=!1},d(s){J(a,s)}}}function fs(y){let a,i;return a=new as({props:{chapter:4,classNames:"absolute z-10 right-0 top-0",notebooks:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter4/section2_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter4/section2_pt.ipynb"}]}}),{c(){I(a.$$.fragment)},l(s){V(a.$$.fragment,s)},m(s,$){W(a,s,$),i=!0},i(s){i||(q(a.$$.fragment,s),i=!0)},o(s){C(a.$$.fragment,s),i=!1},d(s){J(a,s)}}}function bs(y){let a,i,s,$,h,L,S,_,k,M,E,F,x,n,d,O,P,U,X,R,z,ie,Y,T,N,D;return a=new _e({props:{code:`from transformers import CamembertTokenizer, TFCamembertForMaskedLM

tokenizer = CamembertTokenizer.from_pretrained("camembert-base")
model = TFCamembertForMaskedLM.from_pretrained("camembert-base")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, TFCamembertForMaskedLM

tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = TFCamembertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),N=new _e({props:{code:`from transformers import AutoTokenizer, TFAutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained("camembert-base")
model = TFAutoModelForMaskedLM.from_pretrained("camembert-base")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = TFAutoModelForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),{c(){I(a.$$.fragment),i=j(),s=c("p"),$=o("However, we recommend using the "),h=c("a"),L=c("code"),S=o("TFAuto*"),_=o(" classes"),k=o(" instead, as these are by design architecture-agnostic. While the previous code sample limits users to checkpoints loadable in the CamemBERT architecture, using the "),M=c("code"),E=o("TFAuto*"),F=o(` classes makes switching checkpoints simple:
\u7136\u800C\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u4F7F\u7528`),x=c("a"),n=c("code"),d=o("TFAuto*"),O=o(" \u7C7B"),P=o("\uFF0C\u56E0\u4E3A"),U=c("code"),X=o("TFAuto*"),R=o("\u7C7B\u8BBE\u8BA1\u4E0E\u67B6\u6784\u65E0\u5173\u3002\u524D\u9762\u7684\u4EE3\u7801\u793A\u4F8B\u5C06\u53EA\u80FD\u5728 CamemBERT \u67B6\u6784\u4E2D\u52A0\u8F7D\u53EF\u7528\u7684\u68C0\u67E5\u70B9\uFF0C\u4F46\u4F7F\u7528 "),z=c("code"),ie=o("TFAuto*"),Y=o("  \u7C7B\u4F7F\u5207\u6362\u68C0\u67E5\u70B9\u53D8\u5F97\u7B80\u5355\uFF1A"),T=j(),I(N.$$.fragment),this.h()},l(f){V(a.$$.fragment,f),i=w(f),s=p(f,"P",{});var g=b(s);$=l(g,"However, we recommend using the "),h=p(g,"A",{href:!0,rel:!0});var K=b(h);L=p(K,"CODE",{});var ce=b(L);S=l(ce,"TFAuto*"),ce.forEach(r),_=l(K," classes"),K.forEach(r),k=l(g," instead, as these are by design architecture-agnostic. While the previous code sample limits users to checkpoints loadable in the CamemBERT architecture, using the "),M=p(g,"CODE",{});var pe=b(M);E=l(pe,"TFAuto*"),pe.forEach(r),F=l(g,` classes makes switching checkpoints simple:
\u7136\u800C\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u4F7F\u7528`),x=p(g,"A",{href:!0,rel:!0});var Q=b(x);n=p(Q,"CODE",{});var ue=b(n);d=l(ue,"TFAuto*"),ue.forEach(r),O=l(Q," \u7C7B"),Q.forEach(r),P=l(g,"\uFF0C\u56E0\u4E3A"),U=p(g,"CODE",{});var fe=b(U);X=l(fe,"TFAuto*"),fe.forEach(r),R=l(g,"\u7C7B\u8BBE\u8BA1\u4E0E\u67B6\u6784\u65E0\u5173\u3002\u524D\u9762\u7684\u4EE3\u7801\u793A\u4F8B\u5C06\u53EA\u80FD\u5728 CamemBERT \u67B6\u6784\u4E2D\u52A0\u8F7D\u53EF\u7528\u7684\u68C0\u67E5\u70B9\uFF0C\u4F46\u4F7F\u7528 "),z=p(g,"CODE",{});var te=b(z);ie=l(te,"TFAuto*"),te.forEach(r),Y=l(g,"  \u7C7B\u4F7F\u5207\u6362\u68C0\u67E5\u70B9\u53D8\u5F97\u7B80\u5355\uFF1A"),g.forEach(r),T=w(f),V(N.$$.fragment,f),this.h()},h(){v(h,"href","https://huggingface.co/transformers/model_doc/auto.html?highlight=auto#auto-classes"),v(h,"rel","nofollow"),v(x,"href","https://huggingface.co/transformers/model_doc/auto.html?highlight=auto#auto-classes"),v(x,"rel","nofollow")},m(f,g){W(a,f,g),u(f,i,g),u(f,s,g),t(s,$),t(s,h),t(h,L),t(L,S),t(h,_),t(s,k),t(s,M),t(M,E),t(s,F),t(s,x),t(x,n),t(n,d),t(x,O),t(s,P),t(s,U),t(U,X),t(s,R),t(s,z),t(z,ie),t(s,Y),u(f,T,g),W(N,f,g),D=!0},i(f){D||(q(a.$$.fragment,f),q(N.$$.fragment,f),D=!0)},o(f){C(a.$$.fragment,f),C(N.$$.fragment,f),D=!1},d(f){J(a,f),f&&r(i),f&&r(s),f&&r(T),J(N,f)}}}function hs(y){let a,i,s,$,h,L,S,_,k,M,E,F,x;return a=new _e({props:{code:`from transformers import CamembertTokenizer, CamembertForMaskedLM

tokenizer = CamembertTokenizer.from_pretrained("camembert-base")
model = CamembertForMaskedLM.from_pretrained("camembert-base")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, CamembertForMaskedLM

tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = CamembertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),F=new _e({props:{code:`from transformers import AutoTokenizer, AutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained("camembert-base")
model = AutoModelForMaskedLM.from_pretrained("camembert-base")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForMaskedLM

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
model = AutoModelForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)`}}),{c(){I(a.$$.fragment),i=j(),s=c("p"),$=o("\u7136\u800C\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u4F7F\u7528"),h=c("a"),L=o("Auto* \u7C7B"),S=o("\uFF0C\u56E0\u4E3AAuto* \u7C7B\u8BBE\u8BA1\u4E0E\u67B6\u6784\u65E0\u5173\u3002\u524D\u9762\u7684\u4EE3\u7801\u793A\u4F8B\u5C06\u53EA\u80FD\u5728 CamemBERT \u67B6\u6784\u4E2D\u52A0\u8F7D\u53EF\u7528\u7684\u68C0\u67E5\u70B9\uFF0C\u4F46\u4F7F\u7528 "),_=c("strong"),k=o("Auto*"),M=o(" \u7C7B\u4F7F\u5207\u6362\u68C0\u67E5\u70B9\u53D8\u5F97\u7B80\u5355\uFF1A"),E=j(),I(F.$$.fragment),this.h()},l(n){V(a.$$.fragment,n),i=w(n),s=p(n,"P",{});var d=b(s);$=l(d,"\u7136\u800C\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u4F7F\u7528"),h=p(d,"A",{href:!0,rel:!0});var O=b(h);L=l(O,"Auto* \u7C7B"),O.forEach(r),S=l(d,"\uFF0C\u56E0\u4E3AAuto* \u7C7B\u8BBE\u8BA1\u4E0E\u67B6\u6784\u65E0\u5173\u3002\u524D\u9762\u7684\u4EE3\u7801\u793A\u4F8B\u5C06\u53EA\u80FD\u5728 CamemBERT \u67B6\u6784\u4E2D\u52A0\u8F7D\u53EF\u7528\u7684\u68C0\u67E5\u70B9\uFF0C\u4F46\u4F7F\u7528 "),_=p(d,"STRONG",{});var P=b(_);k=l(P,"Auto*"),P.forEach(r),M=l(d," \u7C7B\u4F7F\u5207\u6362\u68C0\u67E5\u70B9\u53D8\u5F97\u7B80\u5355\uFF1A"),d.forEach(r),E=w(n),V(F.$$.fragment,n),this.h()},h(){v(h,"href","https://huggingface.co/transformers/model_doc/auto.html?highlight=auto#auto-classes"),v(h,"rel","nofollow")},m(n,d){W(a,n,d),u(n,i,d),u(n,s,d),t(s,$),t(s,h),t(h,L),t(s,S),t(s,_),t(_,k),t(s,M),u(n,E,d),W(F,n,d),x=!0},i(n){x||(q(a.$$.fragment,n),q(F.$$.fragment,n),x=!0)},o(n){C(a.$$.fragment,n),C(F.$$.fragment,n),x=!1},d(n){J(a,n),n&&r(i),n&&r(s),n&&r(E),J(F,n)}}}function gs(y){let a;return{c(){a=o("\u4F7F\u7528\u9884\u8BAD\u7EC3\u6A21\u578B\u65F6\uFF0C\u4E00\u5B9A\u8981\u68C0\u67E5\u5B83\u662F\u5982\u4F55\u8BAD\u7EC3\u7684\uFF0C\u5728\u54EA\u4E9B\u6570\u636E\u96C6\u4E0A\uFF0C\u5B83\u7684\u9650\u5236\u548C\u5B83\u7684\u504F\u5DEE\u3002\u6240\u6709\u8FD9\u4E9B\u4FE1\u606F\u90FD\u5E94\u5728\u5176\u6A21\u578B\u5361\u7247\u4E0A\u6CE8\u660E\u3002")},l(i){a=l(i,"\u4F7F\u7528\u9884\u8BAD\u7EC3\u6A21\u578B\u65F6\uFF0C\u4E00\u5B9A\u8981\u68C0\u67E5\u5B83\u662F\u5982\u4F55\u8BAD\u7EC3\u7684\uFF0C\u5728\u54EA\u4E9B\u6570\u636E\u96C6\u4E0A\uFF0C\u5B83\u7684\u9650\u5236\u548C\u5B83\u7684\u504F\u5DEE\u3002\u6240\u6709\u8FD9\u4E9B\u4FE1\u606F\u90FD\u5E94\u5728\u5176\u6A21\u578B\u5361\u7247\u4E0A\u6CE8\u660E\u3002")},m(i,s){u(i,a,s)},d(i){i&&r(a)}}}function _s(y){let a,i,s,$,h,L,S,_,k,M,E,F,x,n,d,O,P,U,X,R,z,ie,Y,T,N,D,f,g,K,ce,pe,Q,ue,fe,te,re,Te,ae,ve,A,Ce,de,qe,ye,ke,Le,ze,$e,Se,Oe,xe,Re,Ne,Me,oe,le,Be,Ee,be,Ge,Fe,G,B,he,Z,Ae;s=new ps({props:{fw:y[0]}});const Pe=[fs,us],ne=[];function De(e,m){return e[0]==="pt"?0:1}_=De(y),k=ne[_]=Pe[_](y),re=new _e({props:{code:`from transformers import pipeline

camembert_fill_mask = pipeline("fill-mask", model="camembert-base")
results = camembert_fill_mask("Le camembert est <mask> :)")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

camembert_fill_mask = pipeline(<span class="hljs-string">&quot;fill-mask&quot;</span>, model=<span class="hljs-string">&quot;camembert-base&quot;</span>)
results = camembert_fill_mask(<span class="hljs-string">&quot;Le camembert est &lt;mask&gt; :)&quot;</span>)`}}),ae=new _e({props:{code:`[
  {'sequence': 'Le camembert est d\xE9licieux :)', 'score': 0.49091005325317383, 'token': 7200, 'token_str': 'd\xE9licieux'}, 
  {'sequence': 'Le camembert est excellent :)', 'score': 0.1055697426199913, 'token': 2183, 'token_str': 'excellent'}, 
  {'sequence': 'Le camembert est succulent :)', 'score': 0.03453313186764717, 'token': 26202, 'token_str': 'succulent'}, 
  {'sequence': 'Le camembert est meilleur :)', 'score': 0.0330314114689827, 'token': 528, 'token_str': 'meilleur'}, 
  {'sequence': 'Le camembert est parfait :)', 'score': 0.03007650189101696, 'token': 1654, 'token_str': 'parfait'}
]`,highlighted:`[
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est d\xE9licieux :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.49091005325317383</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">7200</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;d\xE9licieux&#x27;</span>}, 
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est excellent :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.1055697426199913</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">2183</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;excellent&#x27;</span>}, 
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est succulent :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.03453313186764717</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">26202</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;succulent&#x27;</span>}, 
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est meilleur :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.0330314114689827</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">528</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;meilleur&#x27;</span>}, 
  {<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Le camembert est parfait :)&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.03007650189101696</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">1654</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;parfait&#x27;</span>}
]`}});const He=[hs,bs],me=[];function Ie(e,m){return e[0]==="pt"?0:1}return G=Ie(y),B=me[G]=He[G](y),Z=new cs({props:{$$slots:{default:[gs]},$$scope:{ctx:y}}}),{c(){a=c("meta"),i=j(),I(s.$$.fragment),$=j(),h=c("h1"),L=o("\u4F7F\u7528\u9884\u8BAD\u7EC3\u7684\u6A21\u578B"),S=j(),k.c(),M=j(),E=c("p"),F=o("\u6A21\u578B\u4E2D\u5FC3\u4F7F\u9009\u62E9\u5408\u9002\u7684\u6A21\u578B\u53D8\u5F97\u7B80\u5355\uFF0C\u56E0\u6B64\u53EA\u9700\u51E0\u884C\u4EE3\u7801\u5373\u53EF\u5728\u4EFB\u4F55\u4E0B\u6E38\u5E93\u4E2D\u4F7F\u7528\u5B83\u3002\u8BA9\u6211\u4EEC\u6765\u770B\u770B\u5982\u4F55\u5B9E\u9645\u4F7F\u7528\u8FD9\u4E9B\u6A21\u578B\u4E4B\u4E00\uFF0C\u4EE5\u53CA\u5982\u4F55\u56DE\u9988\u793E\u533A\u3002"),x=j(),n=c("p"),d=o("\u5047\u8BBE\u6211\u4EEC\u6B63\u5728\u5BFB\u627E\u4E00\u79CD\u53EF\u4EE5\u6267\u884C"),O=c("strong"),P=o("mask"),U=o("\u586B\u5145\u7684French-based\u6A21\u578B\u3002"),X=j(),R=c("div"),z=c("img"),Y=j(),T=c("p"),N=o("\u6211\u4EEC\u9009\u62E9 "),D=c("strong"),f=o("camembert-base"),g=o(" \u68C0\u67E5\u70B9\u6765\u5C1D\u8BD5\u4E00\u4E0B\u3002\u6211\u4EEC\u9700\u8981\u505A\u7684\u4EC5\u4EC5\u662F\u8F93\u5165 "),K=c("code"),ce=o("camembert-base"),pe=o("\u6807\u8BC6\u7B26\uFF01\u6B63\u5982\u60A8\u5728\u524D\u51E0\u7AE0\u4E2D\u770B\u5230\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 "),Q=c("strong"),ue=o("pipeline()"),fe=o(" \u529F\u80FD\uFF1A"),te=j(),I(re.$$.fragment),Te=j(),I(ae.$$.fragment),ve=j(),A=c("p"),Ce=o("\u5982\u60A8\u6240\u89C1\uFF0C\u5728\u7BA1\u9053\u4E2D\u52A0\u8F7D\u6A21\u578B\u975E\u5E38\u7B80\u5355\u3002\u60A8\u552F\u4E00\u9700\u8981\u6CE8\u610F\u7684\u662F\u6240\u9009\u68C0\u67E5\u70B9\u662F\u5426\u9002\u5408\u5B83\u5C06\u7528\u4E8E\u7684\u4EFB\u52A1\u3002\u4F8B\u5982\uFF0C\u8FD9\u91CC\u6211\u4EEC\u6B63\u5728\u52A0\u8F7D "),de=c("strong"),qe=o("camembert-base"),ye=o(" \u68C0\u67E5\u70B9\u5728 "),ke=c("strong"),Le=o("fill-mask"),ze=o(" \u7BA1\u9053\uFF0C\u8FD9\u5B8C\u5168\u6CA1\u95EE\u9898\u3002\u4F46\u662F\u5982\u679C\u6211\u4EEC\u8981\u5728 "),$e=c("strong"),Se=o("text-classification"),Oe=o(" \u7BA1\u9053\uFF0C\u7ED3\u679C\u6CA1\u6709\u4EFB\u4F55\u610F\u4E49\uFF0C\u56E0\u4E3A "),xe=c("strong"),Re=o("camembert-base"),Ne=o(" \u4E0D\u9002\u5408\u8FD9\u4E2A\u4EFB\u52A1\uFF01\u6211\u4EEC\u5EFA\u8BAE\u4F7F\u7528 Hugging Face Hub \u754C\u9762\u4E2D\u7684\u4EFB\u52A1\u9009\u62E9\u5668\u6765\u9009\u62E9\u5408\u9002\u7684\u68C0\u67E5\u70B9\uFF1A"),Me=j(),oe=c("div"),le=c("img"),Ee=j(),be=c("p"),Ge=o("\u60A8\u8FD8\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u6A21\u578B\u67B6\u6784\u5B9E\u4F8B\u5316\u68C0\u67E5\u70B9\uFF1A"),Fe=j(),B.c(),he=j(),I(Z.$$.fragment),this.h()},l(e){const m=ms('[data-svelte="svelte-1phssyn"]',document.head);a=p(m,"META",{name:!0,content:!0}),m.forEach(r),i=w(e),V(s.$$.fragment,e),$=w(e),h=p(e,"H1",{id:!0});var je=b(h);L=l(je,"\u4F7F\u7528\u9884\u8BAD\u7EC3\u7684\u6A21\u578B"),je.forEach(r),S=w(e),k.l(e),M=w(e),E=p(e,"P",{});var ge=b(E);F=l(ge,"\u6A21\u578B\u4E2D\u5FC3\u4F7F\u9009\u62E9\u5408\u9002\u7684\u6A21\u578B\u53D8\u5F97\u7B80\u5355\uFF0C\u56E0\u6B64\u53EA\u9700\u51E0\u884C\u4EE3\u7801\u5373\u53EF\u5728\u4EFB\u4F55\u4E0B\u6E38\u5E93\u4E2D\u4F7F\u7528\u5B83\u3002\u8BA9\u6211\u4EEC\u6765\u770B\u770B\u5982\u4F55\u5B9E\u9645\u4F7F\u7528\u8FD9\u4E9B\u6A21\u578B\u4E4B\u4E00\uFF0C\u4EE5\u53CA\u5982\u4F55\u56DE\u9988\u793E\u533A\u3002"),ge.forEach(r),x=w(e),n=p(e,"P",{});var ee=b(n);d=l(ee,"\u5047\u8BBE\u6211\u4EEC\u6B63\u5728\u5BFB\u627E\u4E00\u79CD\u53EF\u4EE5\u6267\u884C"),O=p(ee,"STRONG",{});var we=b(O);P=l(we,"mask"),we.forEach(r),U=l(ee,"\u586B\u5145\u7684French-based\u6A21\u578B\u3002"),ee.forEach(r),X=w(e),R=p(e,"DIV",{class:!0});var Ve=b(R);z=p(Ve,"IMG",{src:!0,alt:!0,width:!0}),Ve.forEach(r),Y=w(e),T=p(e,"P",{});var se=b(T);N=l(se,"\u6211\u4EEC\u9009\u62E9 "),D=p(se,"STRONG",{});var We=b(D);f=l(We,"camembert-base"),We.forEach(r),g=l(se," \u68C0\u67E5\u70B9\u6765\u5C1D\u8BD5\u4E00\u4E0B\u3002\u6211\u4EEC\u9700\u8981\u505A\u7684\u4EC5\u4EC5\u662F\u8F93\u5165 "),K=p(se,"CODE",{});var Je=b(K);ce=l(Je,"camembert-base"),Je.forEach(r),pe=l(se,"\u6807\u8BC6\u7B26\uFF01\u6B63\u5982\u60A8\u5728\u524D\u51E0\u7AE0\u4E2D\u770B\u5230\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 "),Q=p(se,"STRONG",{});var Ue=b(Q);ue=l(Ue,"pipeline()"),Ue.forEach(r),fe=l(se," \u529F\u80FD\uFF1A"),se.forEach(r),te=w(e),V(re.$$.fragment,e),Te=w(e),V(ae.$$.fragment,e),ve=w(e),A=p(e,"P",{});var H=b(A);Ce=l(H,"\u5982\u60A8\u6240\u89C1\uFF0C\u5728\u7BA1\u9053\u4E2D\u52A0\u8F7D\u6A21\u578B\u975E\u5E38\u7B80\u5355\u3002\u60A8\u552F\u4E00\u9700\u8981\u6CE8\u610F\u7684\u662F\u6240\u9009\u68C0\u67E5\u70B9\u662F\u5426\u9002\u5408\u5B83\u5C06\u7528\u4E8E\u7684\u4EFB\u52A1\u3002\u4F8B\u5982\uFF0C\u8FD9\u91CC\u6211\u4EEC\u6B63\u5728\u52A0\u8F7D "),de=p(H,"STRONG",{});var Ke=b(de);qe=l(Ke,"camembert-base"),Ke.forEach(r),ye=l(H," \u68C0\u67E5\u70B9\u5728 "),ke=p(H,"STRONG",{});var Qe=b(ke);Le=l(Qe,"fill-mask"),Qe.forEach(r),ze=l(H," \u7BA1\u9053\uFF0C\u8FD9\u5B8C\u5168\u6CA1\u95EE\u9898\u3002\u4F46\u662F\u5982\u679C\u6211\u4EEC\u8981\u5728 "),$e=p(H,"STRONG",{});var Xe=b($e);Se=l(Xe,"text-classification"),Xe.forEach(r),Oe=l(H," \u7BA1\u9053\uFF0C\u7ED3\u679C\u6CA1\u6709\u4EFB\u4F55\u610F\u4E49\uFF0C\u56E0\u4E3A "),xe=p(H,"STRONG",{});var Ye=b(xe);Re=l(Ye,"camembert-base"),Ye.forEach(r),Ne=l(H," \u4E0D\u9002\u5408\u8FD9\u4E2A\u4EFB\u52A1\uFF01\u6211\u4EEC\u5EFA\u8BAE\u4F7F\u7528 Hugging Face Hub \u754C\u9762\u4E2D\u7684\u4EFB\u52A1\u9009\u62E9\u5668\u6765\u9009\u62E9\u5408\u9002\u7684\u68C0\u67E5\u70B9\uFF1A"),H.forEach(r),Me=w(e),oe=p(e,"DIV",{class:!0});var Ze=b(oe);le=p(Ze,"IMG",{src:!0,alt:!0,width:!0}),Ze.forEach(r),Ee=w(e),be=p(e,"P",{});var es=b(be);Ge=l(es,"\u60A8\u8FD8\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u6A21\u578B\u67B6\u6784\u5B9E\u4F8B\u5316\u68C0\u67E5\u70B9\uFF1A"),es.forEach(r),Fe=w(e),B.l(e),he=w(e),V(Z.$$.fragment,e),this.h()},h(){v(a,"name","hf:doc:metadata"),v(a,"content",JSON.stringify(ds)),v(h,"id",""),ss(z.src,ie="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter4/camembert.gif")||v(z,"src",ie),v(z,"alt","Selecting the Camembert model."),v(z,"width","80%"),v(R,"class","flex justify-center"),ss(le.src,Be="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter4/tasks.png")||v(le,"src",Be),v(le,"alt","The task selector on the web interface."),v(le,"width","80%"),v(oe,"class","flex justify-center")},m(e,m){t(document.head,a),u(e,i,m),W(s,e,m),u(e,$,m),u(e,h,m),t(h,L),u(e,S,m),ne[_].m(e,m),u(e,M,m),u(e,E,m),t(E,F),u(e,x,m),u(e,n,m),t(n,d),t(n,O),t(O,P),t(n,U),u(e,X,m),u(e,R,m),t(R,z),u(e,Y,m),u(e,T,m),t(T,N),t(T,D),t(D,f),t(T,g),t(T,K),t(K,ce),t(T,pe),t(T,Q),t(Q,ue),t(T,fe),u(e,te,m),W(re,e,m),u(e,Te,m),W(ae,e,m),u(e,ve,m),u(e,A,m),t(A,Ce),t(A,de),t(de,qe),t(A,ye),t(A,ke),t(ke,Le),t(A,ze),t(A,$e),t($e,Se),t(A,Oe),t(A,xe),t(xe,Re),t(A,Ne),u(e,Me,m),u(e,oe,m),t(oe,le),u(e,Ee,m),u(e,be,m),t(be,Ge),u(e,Fe,m),me[G].m(e,m),u(e,he,m),W(Z,e,m),Ae=!0},p(e,[m]){const je={};m&1&&(je.fw=e[0]),s.$set(je);let ge=_;_=De(e),_!==ge&&(rs(),C(ne[ge],1,1,()=>{ne[ge]=null}),ts(),k=ne[_],k||(k=ne[_]=Pe[_](e),k.c()),q(k,1),k.m(M.parentNode,M));let ee=G;G=Ie(e),G!==ee&&(rs(),C(me[ee],1,1,()=>{me[ee]=null}),ts(),B=me[G],B||(B=me[G]=He[G](e),B.c()),q(B,1),B.m(he.parentNode,he));const we={};m&2&&(we.$$scope={dirty:m,ctx:e}),Z.$set(we)},i(e){Ae||(q(s.$$.fragment,e),q(k),q(re.$$.fragment,e),q(ae.$$.fragment,e),q(B),q(Z.$$.fragment,e),Ae=!0)},o(e){C(s.$$.fragment,e),C(k),C(re.$$.fragment,e),C(ae.$$.fragment,e),C(B),C(Z.$$.fragment,e),Ae=!1},d(e){r(a),e&&r(i),J(s,e),e&&r($),e&&r(h),e&&r(S),ne[_].d(e),e&&r(M),e&&r(E),e&&r(x),e&&r(n),e&&r(X),e&&r(R),e&&r(Y),e&&r(T),e&&r(te),J(re,e),e&&r(Te),J(ae,e),e&&r(ve),e&&r(A),e&&r(Me),e&&r(oe),e&&r(Ee),e&&r(be),e&&r(Fe),me[G].d(e),e&&r(he),J(Z,e)}}}const ds={local:"",title:"\u4F7F\u7528\u9884\u8BAD\u7EC3\u7684\u6A21\u578B"};function ks(y,a,i){let s="pt";return is(()=>{const $=new URLSearchParams(window.location.search);i(0,s=$.get("fw")||"pt")}),[s]}class vs extends os{constructor(a){super();ls(this,a,ks,_s,ns,{})}}export{vs as default,ds as metadata};
