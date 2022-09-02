import{S as de,i as ce,s as fe,e as t,k as g,w as X,t as i,M as he,c as r,d as s,m as q,a as l,x as Y,h as u,b as m,G as a,g as n,y as Z,L as ge,q as ee,o as se,B as ae,v as qe}from"../../chunks/vendor-hf-doc-builder.js";import{I as be}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ve}from"../../chunks/CodeBlock-hf-doc-builder.js";import{C as ke}from"../../chunks/CourseFloatingBanner-hf-doc-builder.js";function we(oe){let d,x,c,f,E,b,O,A,Q,P,v,T,j,z,C,h,L,S,V,G,B,k,M,p,W,w,D,F,_,H,J,I,$,U,R;return b=new be({}),v=new ke({props:{chapter:1,classNames:"absolute z-10 right-0 top-0",notebooks:[{label:"Google Colab",value:"[https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter1/section8.ipynb](https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter1/section8.ipynb)"},{label:"Aws Studio",value:"[https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter1/section8.ipynb](https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter1/section8.ipynb)"}]}}),k=new ve({props:{code:`from transformers import pipeline

unmasker = pipeline("fill-mask", model="bert-base-uncased")
result = unmasker("This man works as a [MASK].")
print([r["token_str"] for r in result])

result = unmasker("This woman works as a [MASK].")
print([r["token_str"] for r in result])

["lawyer", "carpenter", "doctor", "waiter", "mechanic"]
["nurse", "waitress", "teacher", "maid", "prostitute"]`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

unmasker = pipeline(<span class="hljs-string">&quot;fill-mask&quot;</span>, model=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
result = unmasker(<span class="hljs-string">&quot;This man works as a [MASK].&quot;</span>)
<span class="hljs-built_in">print</span>([r[<span class="hljs-string">&quot;token_str&quot;</span>] <span class="hljs-keyword">for</span> r <span class="hljs-keyword">in</span> result])

result = unmasker(<span class="hljs-string">&quot;This woman works as a [MASK].&quot;</span>)
<span class="hljs-built_in">print</span>([r[<span class="hljs-string">&quot;token_str&quot;</span>] <span class="hljs-keyword">for</span> r <span class="hljs-keyword">in</span> result])

[<span class="hljs-string">&quot;lawyer&quot;</span>, <span class="hljs-string">&quot;carpenter&quot;</span>, <span class="hljs-string">&quot;doctor&quot;</span>, <span class="hljs-string">&quot;waiter&quot;</span>, <span class="hljs-string">&quot;mechanic&quot;</span>]
[<span class="hljs-string">&quot;nurse&quot;</span>, <span class="hljs-string">&quot;waitress&quot;</span>, <span class="hljs-string">&quot;teacher&quot;</span>, <span class="hljs-string">&quot;maid&quot;</span>, <span class="hljs-string">&quot;prostitute&quot;</span>]`}}),{c(){d=t("meta"),x=g(),c=t("h1"),f=t("a"),E=t("span"),X(b.$$.fragment),O=g(),A=t("span"),Q=i("Vieses e limita\xE7\xF5es"),P=g(),X(v.$$.fragment),T=g(),j=t("p"),z=i("Se sua inten\xE7\xE3o \xE9 usar um modelo pr\xE9-treinado ou uma vers\xE3o ajustada em produ\xE7\xE3o, esteja ciente de que, embora esses modelos sejam ferramentas poderosas, eles v\xEAm com limita\xE7\xF5es. A maior delas \xE9 que, para possibilitar o pr\xE9-treinamento em grandes quantidades de dados, os pesquisadores muitas vezes raspam todo o conte\xFAdo que encontram, tirando o melhor e o pior do que est\xE1 dispon\xEDvel na internet."),C=g(),h=t("p"),L=i("Para dar uma ilustra\xE7\xE3o r\xE1pida, vamos voltar ao exemplo de um pipeline\xA0"),S=t("code"),V=i("fill-mask"),G=i("\xA0com o modelo BERT:"),B=g(),X(k.$$.fragment),M=g(),p=t("p"),W=i("Quando solicitado a preencher a palavra que falta nessas duas frases, o modelo d\xE1 apenas uma resposta livre de g\xEAnero (gar\xE7om/gar\xE7onete). As outras s\xE3o ocupa\xE7\xF5es de trabalho geralmente associadas a um g\xEAnero espec\xEDfico - e sim, prostituta acabou entre as 5 principais possibilidades que o modelo associa a \u201Cmulher\u201D e \u201Ctrabalho\u201D. Isso acontece mesmo que o BERT seja um dos raros modelos de Transformer n\xE3o constru\xEDdos por meio de coleta de dados de toda a Internet, mas usando dados aparentemente neutros (ele \xE9 treinado com datasets da\xA0"),w=t("a"),D=i("Wikipedia em ingl\xEAs"),F=i("\xA0e\xA0"),_=t("a"),H=i("BookCorpus"),J=i(")."),I=g(),$=t("p"),U=i("Quando voc\xEA usa essas ferramentas, voc\xEA precisa ter em mente que o modelo original que voc\xEA est\xE1 usando pode facilmente gerar conte\xFAdo sexista, racista ou homof\xF3bico. O ajuste fino do modelo em seus dados n\xE3o far\xE1 com que esse vi\xE9s intr\xEDnseco desapare\xE7a."),this.h()},l(e){const o=he('[data-svelte="svelte-1phssyn"]',document.head);d=r(o,"META",{name:!0,content:!0}),o.forEach(s),x=q(e),c=r(e,"H1",{class:!0});var K=l(c);f=r(K,"A",{id:!0,class:!0,href:!0});var te=l(f);E=r(te,"SPAN",{});var re=l(E);Y(b.$$.fragment,re),re.forEach(s),te.forEach(s),O=q(K),A=r(K,"SPAN",{});var ne=l(A);Q=u(ne,"Vieses e limita\xE7\xF5es"),ne.forEach(s),K.forEach(s),P=q(e),Y(v.$$.fragment,e),T=q(e),j=r(e,"P",{});var ie=l(j);z=u(ie,"Se sua inten\xE7\xE3o \xE9 usar um modelo pr\xE9-treinado ou uma vers\xE3o ajustada em produ\xE7\xE3o, esteja ciente de que, embora esses modelos sejam ferramentas poderosas, eles v\xEAm com limita\xE7\xF5es. A maior delas \xE9 que, para possibilitar o pr\xE9-treinamento em grandes quantidades de dados, os pesquisadores muitas vezes raspam todo o conte\xFAdo que encontram, tirando o melhor e o pior do que est\xE1 dispon\xEDvel na internet."),ie.forEach(s),C=q(e),h=r(e,"P",{});var N=l(h);L=u(N,"Para dar uma ilustra\xE7\xE3o r\xE1pida, vamos voltar ao exemplo de um pipeline\xA0"),S=r(N,"CODE",{});var le=l(S);V=u(le,"fill-mask"),le.forEach(s),G=u(N,"\xA0com o modelo BERT:"),N.forEach(s),B=q(e),Y(k.$$.fragment,e),M=q(e),p=r(e,"P",{});var y=l(p);W=u(y,"Quando solicitado a preencher a palavra que falta nessas duas frases, o modelo d\xE1 apenas uma resposta livre de g\xEAnero (gar\xE7om/gar\xE7onete). As outras s\xE3o ocupa\xE7\xF5es de trabalho geralmente associadas a um g\xEAnero espec\xEDfico - e sim, prostituta acabou entre as 5 principais possibilidades que o modelo associa a \u201Cmulher\u201D e \u201Ctrabalho\u201D. Isso acontece mesmo que o BERT seja um dos raros modelos de Transformer n\xE3o constru\xEDdos por meio de coleta de dados de toda a Internet, mas usando dados aparentemente neutros (ele \xE9 treinado com datasets da\xA0"),w=r(y,"A",{href:!0,rel:!0});var ue=l(w);D=u(ue,"Wikipedia em ingl\xEAs"),ue.forEach(s),F=u(y,"\xA0e\xA0"),_=r(y,"A",{href:!0,rel:!0});var pe=l(_);H=u(pe,"BookCorpus"),pe.forEach(s),J=u(y,")."),y.forEach(s),I=q(e),$=r(e,"P",{});var me=l($);U=u(me,"Quando voc\xEA usa essas ferramentas, voc\xEA precisa ter em mente que o modelo original que voc\xEA est\xE1 usando pode facilmente gerar conte\xFAdo sexista, racista ou homof\xF3bico. O ajuste fino do modelo em seus dados n\xE3o far\xE1 com que esse vi\xE9s intr\xEDnseco desapare\xE7a."),me.forEach(s),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(_e)),m(f,"id","vieses-e-limitaes"),m(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(f,"href","#vieses-e-limitaes"),m(c,"class","relative group"),m(w,"href","https://huggingface.co/datasets/wikipedia"),m(w,"rel","nofollow"),m(_,"href","https://huggingface.co/datasets/bookcorpus"),m(_,"rel","nofollow")},m(e,o){a(document.head,d),n(e,x,o),n(e,c,o),a(c,f),a(f,E),Z(b,E,null),a(c,O),a(c,A),a(A,Q),n(e,P,o),Z(v,e,o),n(e,T,o),n(e,j,o),a(j,z),n(e,C,o),n(e,h,o),a(h,L),a(h,S),a(S,V),a(h,G),n(e,B,o),Z(k,e,o),n(e,M,o),n(e,p,o),a(p,W),a(p,w),a(w,D),a(p,F),a(p,_),a(_,H),a(p,J),n(e,I,o),n(e,$,o),a($,U),R=!0},p:ge,i(e){R||(ee(b.$$.fragment,e),ee(v.$$.fragment,e),ee(k.$$.fragment,e),R=!0)},o(e){se(b.$$.fragment,e),se(v.$$.fragment,e),se(k.$$.fragment,e),R=!1},d(e){s(d),e&&s(x),e&&s(c),ae(b),e&&s(P),ae(v,e),e&&s(T),e&&s(j),e&&s(C),e&&s(h),e&&s(B),ae(k,e),e&&s(M),e&&s(p),e&&s(I),e&&s($)}}}const _e={local:"vieses-e-limitaes",title:"Vieses e limita\xE7\xF5es"};function je(oe){return qe(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Se extends de{constructor(d){super();ce(this,d,je,we,fe,{})}}export{Se as default,_e as metadata};
