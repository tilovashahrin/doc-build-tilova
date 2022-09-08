import{S as Wt,i as zt,s as Bt,e as a,k as l,w as V,t as f,M as Jt,c as r,d as t,m as p,a as n,x as Y,h as c,b as o,G as i,g as d,y as F,L as Rt,q as K,o as Q,B as X,v as jt}from"../../../chunks/vendor-hf-doc-builder.js";import{D as Ut}from"../../../chunks/Docstring-hf-doc-builder.js";import{I as Se}from"../../../chunks/IconCopyLink-hf-doc-builder.js";function Vt(ct){let u,ue,m,w,Z,E,qe,ee,Ne,me,v,y,te,T,Oe,ie,Ce,ve,k,x,He,Le,ge,L,Ge,_e,G,Ue,De,M,We,A,ze,Be,be,g,P,ae,S,Je,re,Re,we,$,ne,_,oe,je,Ve,se,Ye,Fe,U,Ke,Qe,le,D,pe,q,Xe,Ze,fe,ce,et,tt,W,it,ye,b,I,de,N,at,he,rt,Me,h,O,nt,C,ot,z,st,lt,pt,B,H,Pe;return E=new Se({}),T=new Se({}),S=new Se({}),N=new Se({}),O=new Ut({props:{name:"class diffusers.DDIMPipeline",anchor:"diffusers.DDIMPipeline",parameters:[{name:"unet",val:""},{name:"scheduler",val:""}],parametersDescription:[{anchor:"diffusers.DDIMPipeline.unet",description:'<strong>unet</strong> (<a href="/docs/diffusers/main/en/api/models#diffusers.UNet2DModel">UNet2DModel</a>) &#x2014; U-Net architecture to denoise the encoded image.',name:"unet"},{anchor:"diffusers.DDIMPipeline.scheduler",description:`<strong>scheduler</strong> (<a href="/docs/diffusers/main/en/api/schedulers#diffusers.SchedulerMixin">SchedulerMixin</a>) &#x2014;
A scheduler to be used in combination with <code>unet</code> to denoise the encoded image. Can be one of
<a href="/docs/diffusers/main/en/api/schedulers#diffusers.DDPMScheduler">DDPMScheduler</a>, or <a href="/docs/diffusers/main/en/api/schedulers#diffusers.DDIMScheduler">DDIMScheduler</a>.`,name:"scheduler"}],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/ddim/pipeline_ddim.py#L25"}}),H=new Ut({props:{name:"__call__",anchor:"diffusers.DDIMPipeline.__call__",parameters:[{name:"batch_size",val:": int = 1"},{name:"generator",val:": typing.Optional[torch._C.Generator] = None"},{name:"eta",val:": float = 0.0"},{name:"num_inference_steps",val:": int = 50"},{name:"output_type",val:": typing.Optional[str] = 'pil'"},{name:"return_dict",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"diffusers.DDIMPipeline.__call__.batch_size",description:`<strong>batch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of images to generate.`,name:"batch_size"},{anchor:"diffusers.DDIMPipeline.__call__.generator",description:`<strong>generator</strong> (<code>torch.Generator</code>, <em>optional</em>) &#x2014;
A <a href="https://pytorch.org/docs/stable/generated/torch.Generator.html" rel="nofollow">torch generator</a> to make generation
deterministic.`,name:"generator"},{anchor:"diffusers.DDIMPipeline.__call__.eta",description:`<strong>eta</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The eta parameter which controls the scale of the variance (0 is DDIM and 1 is one type of DDPM).`,name:"eta"},{anchor:"diffusers.DDIMPipeline.__call__.num_inference_steps",description:`<strong>num_inference_steps</strong> (<code>int</code>, <em>optional</em>, defaults to 50) &#x2014;
The number of denoising steps. More denoising steps usually lead to a higher quality image at the
expense of slower inference.`,name:"num_inference_steps"},{anchor:"diffusers.DDIMPipeline.__call__.output_type",description:`<strong>output_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;pil&quot;</code>) &#x2014;
The output format of the generate image. Choose between
<a href="https://pillow.readthedocs.io/en/stable/" rel="nofollow">PIL</a>: <code>PIL.Image.Image</code> or <code>nd.array</code>.`,name:"output_type"},{anchor:"diffusers.DDIMPipeline.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to return a <a href="/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.pipeline_utils.ImagePipelineOutput">ImagePipelineOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/ddim/pipeline_ddim.py#L42",returnDescription:`
<p><code>ImagePipelineOutput</code> if
<code>return_dict</code> is True, otherwise a \`tuple. When returning a tuple, the first element is a list with the
generated images.</p>
`,returnType:`
<p><a
  href="/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.pipeline_utils.ImagePipelineOutput"
>ImagePipelineOutput</a> or <code>tuple</code></p>
`}}),{c(){u=a("meta"),ue=l(),m=a("h1"),w=a("a"),Z=a("span"),V(E.$$.fragment),qe=l(),ee=a("span"),Ne=f("DDIM"),me=l(),v=a("h2"),y=a("a"),te=a("span"),V(T.$$.fragment),Oe=l(),ie=a("span"),Ce=f("Overview"),ve=l(),k=a("p"),x=a("a"),He=f("Denoising Diffusion Implicit Models"),Le=f(" (DDIM) by Jiaming Song, Chenlin Meng and Stefano Ermon."),ge=l(),L=a("p"),Ge=f("The abstract of the paper is the following:"),_e=l(),G=a("p"),Ue=f("Denoising diffusion probabilistic models (DDPMs) have achieved high quality image generation without adversarial training, yet they require simulating a Markov chain for many steps to produce a sample. To accelerate sampling, we present denoising diffusion implicit models (DDIMs), a more efficient class of iterative implicit probabilistic models with the same training procedure as DDPMs. In DDPMs, the generative process is defined as the reverse of a Markovian diffusion process. We construct a class of non-Markovian diffusion processes that lead to the same training objective, but whose reverse process can be much faster to sample from. We empirically demonstrate that DDIMs can produce high quality samples 10\xD7 to 50\xD7 faster in terms of wall-clock time compared to DDPMs, allow us to trade off computation for sample quality, and can perform semantically meaningful image interpolation directly in the latent space."),De=l(),M=a("p"),We=f("The original codebase of this paper can be found "),A=a("a"),ze=f("here"),Be=f("."),be=l(),g=a("h2"),P=a("a"),ae=a("span"),V(S.$$.fragment),Je=l(),re=a("span"),Re=f("Available Pipelines:"),we=l(),$=a("table"),ne=a("thead"),_=a("tr"),oe=a("th"),je=f("Pipeline"),Ve=l(),se=a("th"),Ye=f("Tasks"),Fe=l(),U=a("th"),Ke=f("Colab"),Qe=l(),le=a("tbody"),D=a("tr"),pe=a("td"),q=a("a"),Xe=f("pipeline_ddim.py"),Ze=l(),fe=a("td"),ce=a("em"),et=f("Unconditional Image Generation"),tt=l(),W=a("td"),it=f("-"),ye=l(),b=a("h2"),I=a("a"),de=a("span"),V(N.$$.fragment),at=l(),he=a("span"),rt=f("DDIMPipeline"),Me=l(),h=a("div"),V(O.$$.fragment),nt=l(),C=a("p"),ot=f("This model inherits from "),z=a("a"),st=f("DiffusionPipeline"),lt=f(`. Check the superclass documentation for the generic methods the
library implements for all the pipelines (such as downloading or saving, running on a particular device, etc.)`),pt=l(),B=a("div"),V(H.$$.fragment),this.h()},l(e){const s=Jt('[data-svelte="svelte-1phssyn"]',document.head);u=r(s,"META",{name:!0,content:!0}),s.forEach(t),ue=p(e),m=r(e,"H1",{class:!0});var $e=n(m);w=r($e,"A",{id:!0,class:!0,href:!0});var dt=n(w);Z=r(dt,"SPAN",{});var ht=n(Z);Y(E.$$.fragment,ht),ht.forEach(t),dt.forEach(t),qe=p($e),ee=r($e,"SPAN",{});var ut=n(ee);Ne=c(ut,"DDIM"),ut.forEach(t),$e.forEach(t),me=p(e),v=r(e,"H2",{class:!0});var Ie=n(v);y=r(Ie,"A",{id:!0,class:!0,href:!0});var mt=n(y);te=r(mt,"SPAN",{});var vt=n(te);Y(T.$$.fragment,vt),vt.forEach(t),mt.forEach(t),Oe=p(Ie),ie=r(Ie,"SPAN",{});var gt=n(ie);Ce=c(gt,"Overview"),gt.forEach(t),Ie.forEach(t),ve=p(e),k=r(e,"P",{});var ft=n(k);x=r(ft,"A",{href:!0,rel:!0});var _t=n(x);He=c(_t,"Denoising Diffusion Implicit Models"),_t.forEach(t),Le=c(ft," (DDIM) by Jiaming Song, Chenlin Meng and Stefano Ermon."),ft.forEach(t),ge=p(e),L=r(e,"P",{});var Dt=n(L);Ge=c(Dt,"The abstract of the paper is the following:"),Dt.forEach(t),_e=p(e),G=r(e,"P",{});var bt=n(G);Ue=c(bt,"Denoising diffusion probabilistic models (DDPMs) have achieved high quality image generation without adversarial training, yet they require simulating a Markov chain for many steps to produce a sample. To accelerate sampling, we present denoising diffusion implicit models (DDIMs), a more efficient class of iterative implicit probabilistic models with the same training procedure as DDPMs. In DDPMs, the generative process is defined as the reverse of a Markovian diffusion process. We construct a class of non-Markovian diffusion processes that lead to the same training objective, but whose reverse process can be much faster to sample from. We empirically demonstrate that DDIMs can produce high quality samples 10\xD7 to 50\xD7 faster in terms of wall-clock time compared to DDPMs, allow us to trade off computation for sample quality, and can perform semantically meaningful image interpolation directly in the latent space."),bt.forEach(t),De=p(e),M=r(e,"P",{});var Ee=n(M);We=c(Ee,"The original codebase of this paper can be found "),A=r(Ee,"A",{href:!0,rel:!0});var wt=n(A);ze=c(wt,"here"),wt.forEach(t),Be=c(Ee,"."),Ee.forEach(t),be=p(e),g=r(e,"H2",{class:!0});var Te=n(g);P=r(Te,"A",{id:!0,class:!0,href:!0});var yt=n(P);ae=r(yt,"SPAN",{});var Mt=n(ae);Y(S.$$.fragment,Mt),Mt.forEach(t),yt.forEach(t),Je=p(Te),re=r(Te,"SPAN",{});var Pt=n(re);Re=c(Pt,"Available Pipelines:"),Pt.forEach(t),Te.forEach(t),we=p(e),$=r(e,"TABLE",{});var ke=n($);ne=r(ke,"THEAD",{});var $t=n(ne);_=r($t,"TR",{});var J=n(_);oe=r(J,"TH",{});var It=n(oe);je=c(It,"Pipeline"),It.forEach(t),Ve=p(J),se=r(J,"TH",{});var Et=n(se);Ye=c(Et,"Tasks"),Et.forEach(t),Fe=p(J),U=r(J,"TH",{align:!0});var Tt=n(U);Ke=c(Tt,"Colab"),Tt.forEach(t),J.forEach(t),$t.forEach(t),Qe=p(ke),le=r(ke,"TBODY",{});var kt=n(le);D=r(kt,"TR",{});var R=n(D);pe=r(R,"TD",{});var xt=n(pe);q=r(xt,"A",{href:!0,rel:!0});var At=n(q);Xe=c(At,"pipeline_ddim.py"),At.forEach(t),xt.forEach(t),Ze=p(R),fe=r(R,"TD",{});var St=n(fe);ce=r(St,"EM",{});var qt=n(ce);et=c(qt,"Unconditional Image Generation"),qt.forEach(t),St.forEach(t),tt=p(R),W=r(R,"TD",{align:!0});var Nt=n(W);it=c(Nt,"-"),Nt.forEach(t),R.forEach(t),kt.forEach(t),ke.forEach(t),ye=p(e),b=r(e,"H2",{class:!0});var xe=n(b);I=r(xe,"A",{id:!0,class:!0,href:!0});var Ot=n(I);de=r(Ot,"SPAN",{});var Ct=n(de);Y(N.$$.fragment,Ct),Ct.forEach(t),Ot.forEach(t),at=p(xe),he=r(xe,"SPAN",{});var Ht=n(he);rt=c(Ht,"DDIMPipeline"),Ht.forEach(t),xe.forEach(t),Me=p(e),h=r(e,"DIV",{class:!0});var j=n(h);Y(O.$$.fragment,j),nt=p(j),C=r(j,"P",{});var Ae=n(C);ot=c(Ae,"This model inherits from "),z=r(Ae,"A",{href:!0});var Lt=n(z);st=c(Lt,"DiffusionPipeline"),Lt.forEach(t),lt=c(Ae,`. Check the superclass documentation for the generic methods the
library implements for all the pipelines (such as downloading or saving, running on a particular device, etc.)`),Ae.forEach(t),pt=p(j),B=r(j,"DIV",{class:!0});var Gt=n(B);Y(H.$$.fragment,Gt),Gt.forEach(t),j.forEach(t),this.h()},h(){o(u,"name","hf:doc:metadata"),o(u,"content",JSON.stringify(Yt)),o(w,"id","ddim"),o(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(w,"href","#ddim"),o(m,"class","relative group"),o(y,"id","overview"),o(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(y,"href","#overview"),o(v,"class","relative group"),o(x,"href","https://arxiv.org/abs/2010.02502"),o(x,"rel","nofollow"),o(A,"href","https://github.com/ermongroup/ddim"),o(A,"rel","nofollow"),o(P,"id","available-pipelines"),o(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(P,"href","#available-pipelines"),o(g,"class","relative group"),o(U,"align","center"),o(q,"href","https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipelines/ddim/pipeline_ddim.py"),o(q,"rel","nofollow"),o(W,"align","center"),o(I,"id","diffusers.DDIMPipeline"),o(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(I,"href","#diffusers.DDIMPipeline"),o(b,"class","relative group"),o(z,"href","/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.DiffusionPipeline"),o(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),o(h,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,s){i(document.head,u),d(e,ue,s),d(e,m,s),i(m,w),i(w,Z),F(E,Z,null),i(m,qe),i(m,ee),i(ee,Ne),d(e,me,s),d(e,v,s),i(v,y),i(y,te),F(T,te,null),i(v,Oe),i(v,ie),i(ie,Ce),d(e,ve,s),d(e,k,s),i(k,x),i(x,He),i(k,Le),d(e,ge,s),d(e,L,s),i(L,Ge),d(e,_e,s),d(e,G,s),i(G,Ue),d(e,De,s),d(e,M,s),i(M,We),i(M,A),i(A,ze),i(M,Be),d(e,be,s),d(e,g,s),i(g,P),i(P,ae),F(S,ae,null),i(g,Je),i(g,re),i(re,Re),d(e,we,s),d(e,$,s),i($,ne),i(ne,_),i(_,oe),i(oe,je),i(_,Ve),i(_,se),i(se,Ye),i(_,Fe),i(_,U),i(U,Ke),i($,Qe),i($,le),i(le,D),i(D,pe),i(pe,q),i(q,Xe),i(D,Ze),i(D,fe),i(fe,ce),i(ce,et),i(D,tt),i(D,W),i(W,it),d(e,ye,s),d(e,b,s),i(b,I),i(I,de),F(N,de,null),i(b,at),i(b,he),i(he,rt),d(e,Me,s),d(e,h,s),F(O,h,null),i(h,nt),i(h,C),i(C,ot),i(C,z),i(z,st),i(C,lt),i(h,pt),i(h,B),F(H,B,null),Pe=!0},p:Rt,i(e){Pe||(K(E.$$.fragment,e),K(T.$$.fragment,e),K(S.$$.fragment,e),K(N.$$.fragment,e),K(O.$$.fragment,e),K(H.$$.fragment,e),Pe=!0)},o(e){Q(E.$$.fragment,e),Q(T.$$.fragment,e),Q(S.$$.fragment,e),Q(N.$$.fragment,e),Q(O.$$.fragment,e),Q(H.$$.fragment,e),Pe=!1},d(e){t(u),e&&t(ue),e&&t(m),X(E),e&&t(me),e&&t(v),X(T),e&&t(ve),e&&t(k),e&&t(ge),e&&t(L),e&&t(_e),e&&t(G),e&&t(De),e&&t(M),e&&t(be),e&&t(g),X(S),e&&t(we),e&&t($),e&&t(ye),e&&t(b),X(N),e&&t(Me),e&&t(h),X(O),X(H)}}}const Yt={local:"ddim",sections:[{local:"overview",title:"Overview"},{local:"available-pipelines",title:"Available Pipelines:"},{local:"diffusers.DDIMPipeline",title:"DDIMPipeline"}],title:"DDIM"};function Ft(ct){return jt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Zt extends Wt{constructor(u){super();zt(this,u,Ft,Vt,Bt,{})}}export{Zt as default,Yt as metadata};
