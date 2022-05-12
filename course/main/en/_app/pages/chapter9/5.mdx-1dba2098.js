import{S as $a,i as Ha,s as Ea,e as s,k as p,w as M,t as c,M as Ta,c as l,d as a,m as u,a as i,x as R,h,b as o,N as Ve,F as t,g as n,y as N,L as qa,q as C,o as z,B as O,v as Pa}from"../../chunks/vendor-1e8b365d.js";import{I as Ze}from"../../chunks/IconCopyLink-483c28ba.js";import{C as ea}from"../../chunks/CodeBlock-e5764662.js";function Fa(aa){let w,te,v,_,D,q,He,U,Ee,oe,k,Te,W,qe,Pe,re,y,$,X,P,Fe,Y,Ie,se,m,Ae,K,Se,je,Q,Ge,Be,V,Je,Le,F,Me,Re,le,I,ie,B,Ne,ne,f,ta,ce,H,Ce,A,ze,Oe,he,x,E,Z,S,De,ee,Ue,pe,J,We,ue,j,me,g,oa,fe,L,Xe,ge,G,de,d,ra,be,T,Ye,ae,Ke,Qe,we;return q=new Ze({}),P=new Ze({}),I=new ea({props:{code:`import gradio as gr

title = "GPT-J-6B"
description = "Gradio Demo for GPT-J 6B, a transformer model trained using Ben Wang's Mesh Transformer JAX. 'GPT-J' refers to the class of model, while '6B' represents the number of trainable parameters. To use it, simply add your text, or click one of the examples to load them. Read more at the links below."
article = "<p style='text-align: center'><a href='https://github.com/kingoflolz/mesh-transformer-jax' target='_blank'>GPT-J-6B: A 6 Billion Parameter Autoregressive Language Model</a></p>"
examples = [
    ["The tower is 324 metres (1,063 ft) tall,"],
    ["The Moon's orbit around Earth has"],
    ["The smooth Borealis basin in the Northern Hemisphere covers 40%"],
]
gr.Interface.load(
    "huggingface/EleutherAI/gpt-j-6B",
    inputs=gr.Textbox(lines=5, label="Input Text"),
    title=title,
    description=description,
    article=article,
    examples=examples,
    enable_queue=True,
).launch()`,highlighted:`<span class="hljs-keyword">import</span> gradio <span class="hljs-keyword">as</span> gr

title = <span class="hljs-string">&quot;GPT-J-6B&quot;</span>
description = <span class="hljs-string">&quot;Gradio Demo for GPT-J 6B, a transformer model trained using Ben Wang&#x27;s Mesh Transformer JAX. &#x27;GPT-J&#x27; refers to the class of model, while &#x27;6B&#x27; represents the number of trainable parameters. To use it, simply add your text, or click one of the examples to load them. Read more at the links below.&quot;</span>
article = <span class="hljs-string">&quot;&lt;p style=&#x27;text-align: center&#x27;&gt;&lt;a href=&#x27;https://github.com/kingoflolz/mesh-transformer-jax&#x27; target=&#x27;_blank&#x27;&gt;GPT-J-6B: A 6 Billion Parameter Autoregressive Language Model&lt;/a&gt;&lt;/p&gt;&quot;</span>
examples = [
    [<span class="hljs-string">&quot;The tower is 324 metres (1,063 ft) tall,&quot;</span>],
    [<span class="hljs-string">&quot;The Moon&#x27;s orbit around Earth has&quot;</span>],
    [<span class="hljs-string">&quot;The smooth Borealis basin in the Northern Hemisphere covers 40%&quot;</span>],
]
gr.Interface.load(
    <span class="hljs-string">&quot;huggingface/EleutherAI/gpt-j-6B&quot;</span>,
    inputs=gr.Textbox(lines=<span class="hljs-number">5</span>, label=<span class="hljs-string">&quot;Input Text&quot;</span>),
    title=title,
    description=description,
    article=article,
    examples=examples,
    enable_queue=<span class="hljs-literal">True</span>,
).launch()`}}),S=new Ze({}),j=new ea({props:{code:'gr.Interface.load("spaces/abidlabs/remove-bg").launch()',highlighted:'gr.Interface.load(<span class="hljs-string">&quot;spaces/abidlabs/remove-bg&quot;</span>).launch()'}}),G=new ea({props:{code:`gr.Interface.load(
    "spaces/abidlabs/remove-bg", inputs="webcam", title="Remove your webcam background!"
).launch()`,highlighted:`gr.Interface.load(
    <span class="hljs-string">&quot;spaces/abidlabs/remove-bg&quot;</span>, inputs=<span class="hljs-string">&quot;webcam&quot;</span>, title=<span class="hljs-string">&quot;Remove your webcam background!&quot;</span>
).launch()`}}),{c(){w=s("meta"),te=p(),v=s("h1"),_=s("a"),D=s("span"),M(q.$$.fragment),He=p(),U=s("span"),Ee=c("Integrations with the Hugging Face Hub"),oe=p(),k=s("p"),Te=c(`To make your life even easier, Gradio integrates directly with Hugging Face Hub and Hugging Face Spaces.
You can load demos from the Hub and Spaces with only `),W=s("em"),qe=c("one line of code"),Pe=c("."),re=p(),y=s("h3"),$=s("a"),X=s("span"),M(P.$$.fragment),Fe=p(),Y=s("span"),Ie=c("Loading models from the Hugging Face Hub"),se=c(`

To start with, choose one of the thousands of models Hugging Face offers through the Hub, as described in [Chapter 4](/course/chapter4/2).
`),m=s("p"),Ae=c("Using the special "),K=s("code"),Se=c("Interface.load()"),je=c(" method, you pass "),Q=s("code"),Ge=c('"model/"'),Be=c(" (or, equivalently, "),V=s("code"),Je=c('"huggingface/"'),Le=c(`)
followed by the model name.
For example, here is the code to build a demo for `),F=s("a"),Me=c("GPT-J"),Re=c(", a large language model, add a couple of example inputs:"),le=p(),M(I.$$.fragment),ie=p(),B=s("p"),Ne=c("The code above will produce the interface below:"),ne=p(),f=s("iframe"),ce=p(),H=s("p"),Ce=c("Loading a model in this way uses Hugging Face\u2019s "),A=s("a"),ze=c("Inference API"),Oe=c(`,
instead of loading the model in memory. This is ideal for huge models like GPT-J or T0pp which
require lots of RAM.`),he=p(),x=s("h3"),E=s("a"),Z=s("span"),M(S.$$.fragment),De=p(),ee=s("span"),Ue=c("Loading from Hugging Face Spaces"),pe=c("\n\nTo load any Space from the Hugging Face Hub and recreate it locally, you can pass `spaces/` to the `Interface`, followed by the name of the Space.\n"),J=s("p"),We=c("Remember the demo from section 1 that removes the background of an image? Let\u2019s load it from Hugging Face Spaces:"),ue=p(),M(j.$$.fragment),me=p(),g=s("iframe"),fe=p(),L=s("p"),Xe=c(`One of the cool things about loading demos from the Hub or Spaces is that you customize them
by overriding any of the
parameters. Here, we add a title and get it to work with a webcam instead:`),ge=p(),M(G.$$.fragment),de=p(),d=s("iframe"),be=p(),T=s("p"),Ye=c("Now that we\u2019ve explored a few ways to integrate Gradio with the Hugging Face Hub, let\u2019s take a look at some advanced features of the "),ae=s("code"),Ke=c("Interface"),Qe=c(" class. That\u2019s the topic of the next section!"),this.h()},l(e){const r=Ta('[data-svelte="svelte-1phssyn"]',document.head);w=l(r,"META",{name:!0,content:!0}),r.forEach(a),te=u(e),v=l(e,"H1",{class:!0});var ve=i(v);_=l(ve,"A",{id:!0,class:!0,href:!0});var sa=i(_);D=l(sa,"SPAN",{});var la=i(D);R(q.$$.fragment,la),la.forEach(a),sa.forEach(a),He=u(ve),U=l(ve,"SPAN",{});var ia=i(U);Ee=h(ia,"Integrations with the Hugging Face Hub"),ia.forEach(a),ve.forEach(a),oe=u(e),k=l(e,"P",{});var ye=i(k);Te=h(ye,`To make your life even easier, Gradio integrates directly with Hugging Face Hub and Hugging Face Spaces.
You can load demos from the Hub and Spaces with only `),W=l(ye,"EM",{});var na=i(W);qe=h(na,"one line of code"),na.forEach(a),Pe=h(ye,"."),ye.forEach(a),re=u(e),y=l(e,"H3",{class:!0});var xe=i(y);$=l(xe,"A",{id:!0,class:!0,href:!0});var ca=i($);X=l(ca,"SPAN",{});var ha=i(X);R(P.$$.fragment,ha),ha.forEach(a),ca.forEach(a),Fe=u(xe),Y=l(xe,"SPAN",{});var pa=i(Y);Ie=h(pa,"Loading models from the Hugging Face Hub"),pa.forEach(a),xe.forEach(a),se=h(e,`

To start with, choose one of the thousands of models Hugging Face offers through the Hub, as described in [Chapter 4](/course/chapter4/2).
`),m=l(e,"P",{});var b=i(m);Ae=h(b,"Using the special "),K=l(b,"CODE",{});var ua=i(K);Se=h(ua,"Interface.load()"),ua.forEach(a),je=h(b," method, you pass "),Q=l(b,"CODE",{});var ma=i(Q);Ge=h(ma,'"model/"'),ma.forEach(a),Be=h(b," (or, equivalently, "),V=l(b,"CODE",{});var fa=i(V);Je=h(fa,'"huggingface/"'),fa.forEach(a),Le=h(b,`)
followed by the model name.
For example, here is the code to build a demo for `),F=l(b,"A",{href:!0,rel:!0});var ga=i(F);Me=h(ga,"GPT-J"),ga.forEach(a),Re=h(b,", a large language model, add a couple of example inputs:"),b.forEach(a),le=u(e),R(I.$$.fragment,e),ie=u(e),B=l(e,"P",{});var da=i(B);Ne=h(da,"The code above will produce the interface below:"),da.forEach(a),ne=u(e),f=l(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),i(f).forEach(a),ce=u(e),H=l(e,"P",{});var _e=i(H);Ce=h(_e,"Loading a model in this way uses Hugging Face\u2019s "),A=l(_e,"A",{href:!0,rel:!0});var ba=i(A);ze=h(ba,"Inference API"),ba.forEach(a),Oe=h(_e,`,
instead of loading the model in memory. This is ideal for huge models like GPT-J or T0pp which
require lots of RAM.`),_e.forEach(a),he=u(e),x=l(e,"H3",{class:!0});var ke=i(x);E=l(ke,"A",{id:!0,class:!0,href:!0});var wa=i(E);Z=l(wa,"SPAN",{});var va=i(Z);R(S.$$.fragment,va),va.forEach(a),wa.forEach(a),De=u(ke),ee=l(ke,"SPAN",{});var ya=i(ee);Ue=h(ya,"Loading from Hugging Face Spaces"),ya.forEach(a),ke.forEach(a),pe=h(e,"\n\nTo load any Space from the Hugging Face Hub and recreate it locally, you can pass `spaces/` to the `Interface`, followed by the name of the Space.\n"),J=l(e,"P",{});var xa=i(J);We=h(xa,"Remember the demo from section 1 that removes the background of an image? Let\u2019s load it from Hugging Face Spaces:"),xa.forEach(a),ue=u(e),R(j.$$.fragment,e),me=u(e),g=l(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),i(g).forEach(a),fe=u(e),L=l(e,"P",{});var _a=i(L);Xe=h(_a,`One of the cool things about loading demos from the Hub or Spaces is that you customize them
by overriding any of the
parameters. Here, we add a title and get it to work with a webcam instead:`),_a.forEach(a),ge=u(e),R(G.$$.fragment,e),de=u(e),d=l(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),i(d).forEach(a),be=u(e),T=l(e,"P",{});var $e=i(T);Ye=h($e,"Now that we\u2019ve explored a few ways to integrate Gradio with the Hugging Face Hub, let\u2019s take a look at some advanced features of the "),ae=l($e,"CODE",{});var ka=i(ae);Ke=h(ka,"Interface"),ka.forEach(a),Qe=h($e," class. That\u2019s the topic of the next section!"),$e.forEach(a),this.h()},h(){o(w,"name","hf:doc:metadata"),o(w,"content",JSON.stringify(Ia)),o(_,"id","integrations-with-the-hugging-face-hub"),o(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(_,"href","#integrations-with-the-hugging-face-hub"),o(v,"class","relative group"),o($,"id","loading-models-from-the-hugging-face-hub"),o($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o($,"href","#loading-models-from-the-hugging-face-hub"),o(y,"class","relative group"),o(F,"href","https://huggingface.co/EleutherAI/gpt-j-6B"),o(F,"rel","nofollow"),Ve(f.src,ta="https://hf.space/gradioiframe/akhaliq/gpt-j-6B/+")||o(f,"src",ta),o(f,"frameborder","0"),o(f,"height","750"),o(f,"title","Gradio app"),o(f,"class","container p-0 flex-grow space-iframe"),o(f,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),o(f,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),o(A,"href","https://huggingface.co/inference-api"),o(A,"rel","nofollow"),o(E,"id","loading-from-hugging-face-spaces"),o(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(E,"href","#loading-from-hugging-face-spaces"),o(x,"class","relative group"),Ve(g.src,oa="https://hf.space/gradioiframe/abidlabs/remove-bg/+")||o(g,"src",oa),o(g,"frameborder","0"),o(g,"height","650"),o(g,"title","Gradio app"),o(g,"class","container p-0 flex-grow space-iframe"),o(g,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),o(g,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),Ve(d.src,ra="https://hf.space/gradioiframe/dawood/Remove-bg/+")||o(d,"src",ra),o(d,"frameborder","0"),o(d,"height","550"),o(d,"title","Gradio app"),o(d,"class","container p-0 flex-grow space-iframe"),o(d,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),o(d,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads")},m(e,r){t(document.head,w),n(e,te,r),n(e,v,r),t(v,_),t(_,D),N(q,D,null),t(v,He),t(v,U),t(U,Ee),n(e,oe,r),n(e,k,r),t(k,Te),t(k,W),t(W,qe),t(k,Pe),n(e,re,r),n(e,y,r),t(y,$),t($,X),N(P,X,null),t(y,Fe),t(y,Y),t(Y,Ie),n(e,se,r),n(e,m,r),t(m,Ae),t(m,K),t(K,Se),t(m,je),t(m,Q),t(Q,Ge),t(m,Be),t(m,V),t(V,Je),t(m,Le),t(m,F),t(F,Me),t(m,Re),n(e,le,r),N(I,e,r),n(e,ie,r),n(e,B,r),t(B,Ne),n(e,ne,r),n(e,f,r),n(e,ce,r),n(e,H,r),t(H,Ce),t(H,A),t(A,ze),t(H,Oe),n(e,he,r),n(e,x,r),t(x,E),t(E,Z),N(S,Z,null),t(x,De),t(x,ee),t(ee,Ue),n(e,pe,r),n(e,J,r),t(J,We),n(e,ue,r),N(j,e,r),n(e,me,r),n(e,g,r),n(e,fe,r),n(e,L,r),t(L,Xe),n(e,ge,r),N(G,e,r),n(e,de,r),n(e,d,r),n(e,be,r),n(e,T,r),t(T,Ye),t(T,ae),t(ae,Ke),t(T,Qe),we=!0},p:qa,i(e){we||(C(q.$$.fragment,e),C(P.$$.fragment,e),C(I.$$.fragment,e),C(S.$$.fragment,e),C(j.$$.fragment,e),C(G.$$.fragment,e),we=!0)},o(e){z(q.$$.fragment,e),z(P.$$.fragment,e),z(I.$$.fragment,e),z(S.$$.fragment,e),z(j.$$.fragment,e),z(G.$$.fragment,e),we=!1},d(e){a(w),e&&a(te),e&&a(v),O(q),e&&a(oe),e&&a(k),e&&a(re),e&&a(y),O(P),e&&a(se),e&&a(m),e&&a(le),O(I,e),e&&a(ie),e&&a(B),e&&a(ne),e&&a(f),e&&a(ce),e&&a(H),e&&a(he),e&&a(x),O(S),e&&a(pe),e&&a(J),e&&a(ue),O(j,e),e&&a(me),e&&a(g),e&&a(fe),e&&a(L),e&&a(ge),O(G,e),e&&a(de),e&&a(d),e&&a(be),e&&a(T)}}}const Ia={local:"integrations-with-the-hugging-face-hub",sections:[{local:"loading-models-from-the-hugging-face-hub",title:"Loading models from the Hugging Face Hub"},{local:"loading-from-hugging-face-spaces",title:"Loading from Hugging Face Spaces"}],title:"Integrations with the Hugging Face Hub"};function Aa(aa){return Pa(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ba extends $a{constructor(w){super();Ha(this,w,Aa,Fa,Ea,{})}}export{Ba as default,Ia as metadata};
