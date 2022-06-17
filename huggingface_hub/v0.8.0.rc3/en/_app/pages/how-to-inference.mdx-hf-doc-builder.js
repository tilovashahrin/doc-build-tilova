import{S as Bs,i as Ms,s as Ys,e as o,k as u,w as Y,t as a,M as zs,c as l,d as t,m as d,a as i,x as z,h as n,b as h,P as Gs,G as s,g as c,y as G,q as L,o as W,B as J,v as Ls}from"../chunks/vendor-hf-doc-builder.js";import{T as Ws}from"../chunks/Tip-hf-doc-builder.js";import{I as Js}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as he}from"../chunks/CodeBlock-hf-doc-builder.js";function Rs(ue){let p,E,f,_,v;return{c(){p=o("p"),E=a("If you want to make the HTTP calls directly, please refer to "),f=o("a"),_=a("Accelerated Inference API Documentation"),v=a(" or to the sample snippets visible on every supported model page."),this.h()},l(g){p=l(g,"P",{});var k=i(p);E=n(k,"If you want to make the HTTP calls directly, please refer to "),f=l(k,"A",{href:!0,rel:!0});var j=i(f);_=n(j,"Accelerated Inference API Documentation"),j.forEach(t),v=n(k," or to the sample snippets visible on every supported model page."),k.forEach(t),this.h()},h(){h(f,"href","https://api-inference.huggingface.co/docs/python/html/index.html"),h(f,"rel","nofollow")},m(g,k){c(g,p,k),s(p,E),s(p,f),s(f,_),s(p,v)},d(g){g&&t(p)}}}function Us(ue){let p,E,f,_,v,g,k,j,xe,de,A,qe,X,Pe,Te,Z,Oe,Ne,me,x,ge,R,U,_s,_e,b,Ce,Q,De,Se,ee,Ke,He,se,Fe,Be,be,N,ye,y,Me,C,Ye,ze,D,Ge,Le,te,We,Je,Ie,S,we,I,Re,ae,Ue,Qe,ne,Ve,Xe,re,Ze,es,ke,K,Ae,w,ss,H,ts,as,oe,ns,rs,le,os,ls,$e,F,ve,m,is,ie,cs,ps,ce,fs,hs,pe,us,ds,fe,ms,gs,Ee,B,je;return g=new Js({}),x=new Ws({props:{$$slots:{default:[Rs]},$$scope:{ctx:ue}}}),N=new he({props:{code:`from huggingface_hub.inference_api import InferenceApi
inference = InferenceApi(repo_id="bert-base-uncased", token=API_TOKEN)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub.inference_api <span class="hljs-keyword">import</span> InferenceApi
<span class="hljs-meta">&gt;&gt;&gt; </span>inference = InferenceApi(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, token=API_TOKEN)`}}),S=new he({props:{code:`from huggingface_hub.inference_api import InferenceApi
inference = InferenceApi(repo_id="bert-base-uncased", token=API_TOKEN)
inference(inputs="The goal of life is [MASK].")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub.inference_api <span class="hljs-keyword">import</span> InferenceApi
<span class="hljs-meta">&gt;&gt;&gt; </span>inference = InferenceApi(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, token=API_TOKEN)
<span class="hljs-meta">&gt;&gt;&gt; </span>inference(inputs=<span class="hljs-string">&quot;The goal of life is [MASK].&quot;</span>)
[{<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;the goal of life is life.&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.10933292657136917</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">2166</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;life&#x27;</span>}]`}}),K=new he({props:{code:`inference = InferenceApi(repo_id="deepset/roberta-base-squad2", token=API_TOKEN)
inputs = {"question":"Where is Hugging Face headquarters?", "context":"Hugging Face is based in Brooklyn, New York. There is also an office in Paris, France."}
inference(inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>inference = InferenceApi(repo_id=<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>, token=API_TOKEN)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {<span class="hljs-string">&quot;question&quot;</span>:<span class="hljs-string">&quot;Where is Hugging Face headquarters?&quot;</span>, <span class="hljs-string">&quot;context&quot;</span>:<span class="hljs-string">&quot;Hugging Face is based in Brooklyn, New York. There is also an office in Paris, France.&quot;</span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>inference(inputs)
{<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.94622403383255</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">25</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">43</span>, <span class="hljs-string">&#x27;answer&#x27;</span>: <span class="hljs-string">&#x27;Brooklyn, New York&#x27;</span>}`}}),F=new he({props:{code:`inference = InferenceApi(repo_id="typeform/distilbert-base-uncased-mnli", token=API_TOKEN)
inputs = "Hi, I recently bought a device from your company but it is not working as advertised and I would like to get reimbursed!"
params = {"candidate_labels":["refund", "legal", "faq"]}
inference(inputs, params)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>inference = InferenceApi(repo_id=<span class="hljs-string">&quot;typeform/distilbert-base-uncased-mnli&quot;</span>, token=API_TOKEN)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = <span class="hljs-string">&quot;Hi, I recently bought a device from your company but it is not working as advertised and I would like to get reimbursed!&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>params = {<span class="hljs-string">&quot;candidate_labels&quot;</span>:[<span class="hljs-string">&quot;refund&quot;</span>, <span class="hljs-string">&quot;legal&quot;</span>, <span class="hljs-string">&quot;faq&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>inference(inputs, params)
{<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Hi, I recently bought a device from your company but it is not working as advertised and I would like to get reimbursed!&#x27;</span>, <span class="hljs-string">&#x27;labels&#x27;</span>: [<span class="hljs-string">&#x27;refund&#x27;</span>, <span class="hljs-string">&#x27;faq&#x27;</span>, <span class="hljs-string">&#x27;legal&#x27;</span>], <span class="hljs-string">&#x27;scores&#x27;</span>: [<span class="hljs-number">0.9378499388694763</span>, <span class="hljs-number">0.04914155602455139</span>, <span class="hljs-number">0.013008488342165947</span>]}`}}),B=new he({props:{code:`inference = InferenceApi(repo_id="paraphrase-xlm-r-multilingual-v1", 
                         task="feature-extraction", 
                         token=API_TOKEN,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>inference = InferenceApi(repo_id=<span class="hljs-string">&quot;paraphrase-xlm-r-multilingual-v1&quot;</span>, 
<span class="hljs-meta">... </span>                         task=<span class="hljs-string">&quot;feature-extraction&quot;</span>, 
<span class="hljs-meta">... </span>                         token=API_TOKEN,
<span class="hljs-meta">... </span>)`}}),{c(){p=o("meta"),E=u(),f=o("h1"),_=o("a"),v=o("span"),Y(g.$$.fragment),k=u(),j=o("span"),xe=a("Access the Inference API"),de=u(),A=o("p"),qe=a("The Inference API provides fast inference for your hosted models. The Inference API can be accessed via usual HTTP requests with your favorite programming language, but the "),X=o("code"),Pe=a("huggingface_hub"),Te=a(" library has a client wrapper to access the Inference API programmatically. This guide will show you how to make calls to the Inference API with the "),Z=o("code"),Oe=a("huggingface_hub"),Ne=a(" library."),me=u(),Y(x.$$.fragment),ge=u(),R=o("p"),U=o("img"),_e=u(),b=o("p"),Ce=a("Begin by creating an instance of the "),Q=o("a"),De=a("InferenceApi"),Se=a(" with the model repository ID of the model you want to use. You can find your "),ee=o("code"),Ke=a("API_TOKEN"),He=a(" under Settings from your Hugging Face account. The "),se=o("code"),Fe=a("API_TOKEN"),Be=a(" will allow you to send requests to the Inference API."),be=u(),Y(N.$$.fragment),ye=u(),y=o("p"),Me=a("The metadata in the model card and configuration files (see "),C=o("a"),Ye=a("here"),ze=a(" for more details) determines the pipeline type. For example, when using the "),D=o("a"),Ge=a("bert-base-uncased"),Le=a(" model, the Inference API can automatically infer that this model should be used for a "),te=o("code"),We=a("fill-mask"),Je=a(" task."),Ie=u(),Y(S.$$.fragment),we=u(),I=o("p"),Re=a("Each task requires a different type of input. A "),ae=o("code"),Ue=a("question-answering"),Qe=a(" task expects a dictionary with the "),ne=o("code"),Ve=a("question"),Xe=a(" and "),re=o("code"),Ze=a("context"),es=a(" keys as the input:"),ke=u(),Y(K.$$.fragment),Ae=u(),w=o("p"),ss=a("Some tasks may require additional parameters (see "),H=o("a"),ts=a("here"),as=a(" for a detailed list of all parameters for each task). As an example, for "),oe=o("code"),ns=a("zero-shot-classification"),rs=a(" tasks, the model needs candidate labels that can be supplied to "),le=o("code"),os=a("params"),ls=a(":"),$e=u(),Y(F.$$.fragment),ve=u(),m=o("p"),is=a("Some models may support multiple tasks. The "),ie=o("code"),cs=a("sentence-transformers"),ps=a(" models can complete both "),ce=o("code"),fs=a("sentence-similarity"),hs=a(" and "),pe=o("code"),us=a("feature-extraction"),ds=a(" tasks. Specify which task you want to perform with the "),fe=o("code"),ms=a("task"),gs=a(" parameter:"),Ee=u(),Y(B.$$.fragment),this.h()},l(e){const r=zs('[data-svelte="svelte-1phssyn"]',document.head);p=l(r,"META",{name:!0,content:!0}),r.forEach(t),E=d(e),f=l(e,"H1",{class:!0});var M=i(f);_=l(M,"A",{id:!0,class:!0,href:!0});var bs=i(_);v=l(bs,"SPAN",{});var ys=i(v);z(g.$$.fragment,ys),ys.forEach(t),bs.forEach(t),k=d(M),j=l(M,"SPAN",{});var Is=i(j);xe=n(Is,"Access the Inference API"),Is.forEach(t),M.forEach(t),de=d(e),A=l(e,"P",{});var V=i(A);qe=n(V,"The Inference API provides fast inference for your hosted models. The Inference API can be accessed via usual HTTP requests with your favorite programming language, but the "),X=l(V,"CODE",{});var ws=i(X);Pe=n(ws,"huggingface_hub"),ws.forEach(t),Te=n(V," library has a client wrapper to access the Inference API programmatically. This guide will show you how to make calls to the Inference API with the "),Z=l(V,"CODE",{});var ks=i(Z);Oe=n(ks,"huggingface_hub"),ks.forEach(t),Ne=n(V," library."),V.forEach(t),me=d(e),z(x.$$.fragment,e),ge=d(e),R=l(e,"P",{});var As=i(R);U=l(As,"IMG",{src:!0,alt:!0}),As.forEach(t),_e=d(e),b=l(e,"P",{});var q=i(b);Ce=n(q,"Begin by creating an instance of the "),Q=l(q,"A",{href:!0});var $s=i(Q);De=n($s,"InferenceApi"),$s.forEach(t),Se=n(q," with the model repository ID of the model you want to use. You can find your "),ee=l(q,"CODE",{});var vs=i(ee);Ke=n(vs,"API_TOKEN"),vs.forEach(t),He=n(q," under Settings from your Hugging Face account. The "),se=l(q,"CODE",{});var Es=i(se);Fe=n(Es,"API_TOKEN"),Es.forEach(t),Be=n(q," will allow you to send requests to the Inference API."),q.forEach(t),be=d(e),z(N.$$.fragment,e),ye=d(e),y=l(e,"P",{});var P=i(y);Me=n(P,"The metadata in the model card and configuration files (see "),C=l(P,"A",{href:!0,rel:!0});var js=i(C);Ye=n(js,"here"),js.forEach(t),ze=n(P," for more details) determines the pipeline type. For example, when using the "),D=l(P,"A",{href:!0,rel:!0});var xs=i(D);Ge=n(xs,"bert-base-uncased"),xs.forEach(t),Le=n(P," model, the Inference API can automatically infer that this model should be used for a "),te=l(P,"CODE",{});var qs=i(te);We=n(qs,"fill-mask"),qs.forEach(t),Je=n(P," task."),P.forEach(t),Ie=d(e),z(S.$$.fragment,e),we=d(e),I=l(e,"P",{});var T=i(I);Re=n(T,"Each task requires a different type of input. A "),ae=l(T,"CODE",{});var Ps=i(ae);Ue=n(Ps,"question-answering"),Ps.forEach(t),Qe=n(T," task expects a dictionary with the "),ne=l(T,"CODE",{});var Ts=i(ne);Ve=n(Ts,"question"),Ts.forEach(t),Xe=n(T," and "),re=l(T,"CODE",{});var Os=i(re);Ze=n(Os,"context"),Os.forEach(t),es=n(T," keys as the input:"),T.forEach(t),ke=d(e),z(K.$$.fragment,e),Ae=d(e),w=l(e,"P",{});var O=i(w);ss=n(O,"Some tasks may require additional parameters (see "),H=l(O,"A",{href:!0,rel:!0});var Ns=i(H);ts=n(Ns,"here"),Ns.forEach(t),as=n(O," for a detailed list of all parameters for each task). As an example, for "),oe=l(O,"CODE",{});var Cs=i(oe);ns=n(Cs,"zero-shot-classification"),Cs.forEach(t),rs=n(O," tasks, the model needs candidate labels that can be supplied to "),le=l(O,"CODE",{});var Ds=i(le);os=n(Ds,"params"),Ds.forEach(t),ls=n(O,":"),O.forEach(t),$e=d(e),z(F.$$.fragment,e),ve=d(e),m=l(e,"P",{});var $=i(m);is=n($,"Some models may support multiple tasks. The "),ie=l($,"CODE",{});var Ss=i(ie);cs=n(Ss,"sentence-transformers"),Ss.forEach(t),ps=n($," models can complete both "),ce=l($,"CODE",{});var Ks=i(ce);fs=n(Ks,"sentence-similarity"),Ks.forEach(t),hs=n($," and "),pe=l($,"CODE",{});var Hs=i(pe);us=n(Hs,"feature-extraction"),Hs.forEach(t),ds=n($," tasks. Specify which task you want to perform with the "),fe=l($,"CODE",{});var Fs=i(fe);ms=n(Fs,"task"),Fs.forEach(t),gs=n($," parameter:"),$.forEach(t),Ee=d(e),z(B.$$.fragment,e),this.h()},h(){h(p,"name","hf:doc:metadata"),h(p,"content",JSON.stringify(Qs)),h(_,"id","access-the-inference-api"),h(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_,"href","#access-the-inference-api"),h(f,"class","relative group"),Gs(U.src,_s="/docs/assets/hub/inference_api_snippet.png")||h(U,"src",_s),h(U,"alt","Snippet of code to make calls to the Inference API"),h(Q,"href","/docs/huggingface_hub/v0.8.0.rc3/en/package_reference/inference_api#huggingface_hub.InferenceApi"),h(C,"href","https://huggingface.co/docs/hub/main#how-is-a-models-type-of-inference-api-and-widget-determined"),h(C,"rel","nofollow"),h(D,"href","https://huggingface.co/bert-base-uncased"),h(D,"rel","nofollow"),h(H,"href","https://api-inference.huggingface.co/docs/python/html/detailed_parameters.html"),h(H,"rel","nofollow")},m(e,r){s(document.head,p),c(e,E,r),c(e,f,r),s(f,_),s(_,v),G(g,v,null),s(f,k),s(f,j),s(j,xe),c(e,de,r),c(e,A,r),s(A,qe),s(A,X),s(X,Pe),s(A,Te),s(A,Z),s(Z,Oe),s(A,Ne),c(e,me,r),G(x,e,r),c(e,ge,r),c(e,R,r),s(R,U),c(e,_e,r),c(e,b,r),s(b,Ce),s(b,Q),s(Q,De),s(b,Se),s(b,ee),s(ee,Ke),s(b,He),s(b,se),s(se,Fe),s(b,Be),c(e,be,r),G(N,e,r),c(e,ye,r),c(e,y,r),s(y,Me),s(y,C),s(C,Ye),s(y,ze),s(y,D),s(D,Ge),s(y,Le),s(y,te),s(te,We),s(y,Je),c(e,Ie,r),G(S,e,r),c(e,we,r),c(e,I,r),s(I,Re),s(I,ae),s(ae,Ue),s(I,Qe),s(I,ne),s(ne,Ve),s(I,Xe),s(I,re),s(re,Ze),s(I,es),c(e,ke,r),G(K,e,r),c(e,Ae,r),c(e,w,r),s(w,ss),s(w,H),s(H,ts),s(w,as),s(w,oe),s(oe,ns),s(w,rs),s(w,le),s(le,os),s(w,ls),c(e,$e,r),G(F,e,r),c(e,ve,r),c(e,m,r),s(m,is),s(m,ie),s(ie,cs),s(m,ps),s(m,ce),s(ce,fs),s(m,hs),s(m,pe),s(pe,us),s(m,ds),s(m,fe),s(fe,ms),s(m,gs),c(e,Ee,r),G(B,e,r),je=!0},p(e,[r]){const M={};r&2&&(M.$$scope={dirty:r,ctx:e}),x.$set(M)},i(e){je||(L(g.$$.fragment,e),L(x.$$.fragment,e),L(N.$$.fragment,e),L(S.$$.fragment,e),L(K.$$.fragment,e),L(F.$$.fragment,e),L(B.$$.fragment,e),je=!0)},o(e){W(g.$$.fragment,e),W(x.$$.fragment,e),W(N.$$.fragment,e),W(S.$$.fragment,e),W(K.$$.fragment,e),W(F.$$.fragment,e),W(B.$$.fragment,e),je=!1},d(e){t(p),e&&t(E),e&&t(f),J(g),e&&t(de),e&&t(A),e&&t(me),J(x,e),e&&t(ge),e&&t(R),e&&t(_e),e&&t(b),e&&t(be),J(N,e),e&&t(ye),e&&t(y),e&&t(Ie),J(S,e),e&&t(we),e&&t(I),e&&t(ke),J(K,e),e&&t(Ae),e&&t(w),e&&t($e),J(F,e),e&&t(ve),e&&t(m),e&&t(Ee),J(B,e)}}}const Qs={local:"access-the-inference-api",title:"Access the Inference API"};function Vs(ue){return Ls(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class tt extends Bs{constructor(p){super();Ms(this,p,Vs,Us,Ys,{})}}export{tt as default,Qs as metadata};
