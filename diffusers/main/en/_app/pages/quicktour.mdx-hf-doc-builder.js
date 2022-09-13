import{S as pn,i as hn,s as dn,e as a,k as u,w as g,t as n,M as cn,c as o,d as i,m as p,a as s,x as v,h as l,b as h,G as t,g as f,y as _,L as mn,q as y,o as w,B as b,v as gn}from"../chunks/vendor-hf-doc-builder.js";import{I as un}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as P}from"../chunks/CodeBlock-hf-doc-builder.js";function vn(Uo){let S,Lt,q,L,tt,X,qi,it,xi,Mt,M,Ii,Ee,Ni,Oi,Ut,ke,Ci,Vt,J,Rt,x,U,at,Z,Gi,ot,Hi,Yt,T,Li,$e,Mi,Ui,De,Vi,Ri,zt,V,st,I,nt,lt,Yi,zi,rt,ft,Bi,Fi,ut,pt,Ki,Qi,D,N,ht,Wi,Xi,dt,Ji,Zi,ct,Pe,ea,ta,O,mt,ia,aa,gt,oa,sa,vt,Te,na,la,C,_t,ra,fa,yt,ua,pa,wt,Ae,ha,da,G,bt,ca,ma,Et,ga,va,kt,je,_a,Bt,R,ya,Se,$t,wa,ba,Ft,d,Ea,qe,ka,$a,xe,Da,Pa,ee,Ta,Aa,Ie,ja,Sa,te,qa,xa,Kt,ie,Qt,Y,Ia,Ne,Na,Oa,Wt,ae,Xt,z,Ca,Dt,Ga,Ha,Jt,oe,Zt,B,La,se,Ma,Ua,ei,Oe,Va,ti,ne,ii,c,Ra,le,Ya,za,re,Ba,Fa,Pt,Ka,Qa,fe,Tt,Wa,Xa,ue,Ja,Za,ai,pe,oi,A,eo,he,At,to,io,jt,ao,oo,si,de,ni,Ce,so,li,ce,St,no,lo,ri,me,fi,F,ro,qt,fo,uo,ui,ge,pi,Ge,po,hi,ve,di,m,ho,He,co,mo,Le,go,vo,xt,_o,yo,Me,wo,bo,ci,_e,mi,H,ye,Eo,ko,Ue,$o,Do,gi,K,Po,we,To,Ao,vi,E,It,Ve,jo,So,Nt,Re,qo,xo,Ot,Ye,Io,No,Ct,ze,Oo,_i,be,Co,Be,Gt,Go,yi,Fe,Ho,wi;return X=new un({}),J=new P({props:{code:"pip install --upgrade diffusers",highlighted:"pip install --upgrade diffusers"}}),Z=new un({}),ie=new P({props:{code:`from diffusers import DiffusionPipeline

generator = DiffusionPipeline.from_pretrained("CompVis/ldm-text2im-large-256")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>generator = DiffusionPipeline.from_pretrained(<span class="hljs-string">&quot;CompVis/ldm-text2im-large-256&quot;</span>)`}}),ae=new P({props:{code:'generator.to("cuda")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>generator.to(<span class="hljs-string">&quot;cuda&quot;</span>)'}}),oe=new P({props:{code:'image = generator("An image of a squirrel in Picasso style").images[0]',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>image = generator(<span class="hljs-string">&quot;An image of a squirrel in Picasso style&quot;</span>).images[<span class="hljs-number">0</span>]'}}),ne=new P({props:{code:'image.save("image_of_squirrel_painting.png")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>image.save(<span class="hljs-string">&quot;image_of_squirrel_painting.png&quot;</span>)'}}),pe=new P({props:{code:'AUTH_TOKEN = "<please-fill-with-your-token>"',highlighted:'AUTH_TOKEN = <span class="hljs-string">&quot;&lt;please-fill-with-your-token&gt;&quot;</span>'}}),de=new P({props:{code:`from diffusers import DiffusionPipeline

generator = DiffusionPipeline.from_pretrained("CompVis/stable-diffusion-v1-4", use_auth_token=AUTH_TOKEN)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>generator = DiffusionPipeline.from_pretrained(<span class="hljs-string">&quot;CompVis/stable-diffusion-v1-4&quot;</span>, use_auth_token=AUTH_TOKEN)`}}),me=new P({props:{code:`git lfs install
git clone https://huggingface.co/CompVis/stable-diffusion-v1-4`,highlighted:`git lfs install
git clone https:<span class="hljs-regexp">//</span>huggingface.co<span class="hljs-regexp">/CompVis/</span>stable-diffusion-v1-<span class="hljs-number">4</span>`}}),ge=new P({props:{code:'generator = DiffusionPipeline.from_pretrained("./stable-diffusion-v1-4")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>generator = DiffusionPipeline.from_pretrained(<span class="hljs-string">&quot;./stable-diffusion-v1-4&quot;</span>)'}}),ve=new P({props:{code:`generator.to("cuda")
image = generator("An image of a squirrel in Picasso style").images[0]
image.save("image_of_squirrel_painting.png")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>generator.to(<span class="hljs-string">&quot;cuda&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = generator(<span class="hljs-string">&quot;An image of a squirrel in Picasso style&quot;</span>).images[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image.save(<span class="hljs-string">&quot;image_of_squirrel_painting.png&quot;</span>)`}}),_e=new P({props:{code:`from diffusers import LMSDiscreteScheduler

scheduler = LMSDiscreteScheduler(beta_start=0.00085, beta_end=0.012, beta_schedule="scaled_linear")

generator = StableDiffusionPipeline.from_pretrained(
    "CompVis/stable-diffusion-v1-4", scheduler=scheduler, use_auth_token=AUTH_TOKEN
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> LMSDiscreteScheduler

<span class="hljs-meta">&gt;&gt;&gt; </span>scheduler = LMSDiscreteScheduler(beta_start=<span class="hljs-number">0.00085</span>, beta_end=<span class="hljs-number">0.012</span>, beta_schedule=<span class="hljs-string">&quot;scaled_linear&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>generator = StableDiffusionPipeline.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;CompVis/stable-diffusion-v1-4&quot;</span>, scheduler=scheduler, use_auth_token=AUTH_TOKEN
<span class="hljs-meta">... </span>)`}}),{c(){S=a("meta"),Lt=u(),q=a("h1"),L=a("a"),tt=a("span"),g(X.$$.fragment),qi=u(),it=a("span"),xi=n("Quicktour"),Mt=u(),M=a("p"),Ii=n(`Get up and running with \u{1F9E8} Diffusers quickly!
Whether you\u2019re a developer or an everyday user, this quick tour will help you get started and show you how to use `),Ee=a("a"),Ni=n("DiffusionPipeline"),Oi=n(" for inference."),Ut=u(),ke=a("p"),Ci=n("Before you begin, make sure you have all the necessary libraries installed:"),Vt=u(),g(J.$$.fragment),Rt=u(),x=a("h2"),U=a("a"),at=a("span"),g(Z.$$.fragment),Gi=u(),ot=a("span"),Hi=n("DiffusionPipeline"),Yt=u(),T=a("p"),Li=n("The "),$e=a("a"),Mi=n("DiffusionPipeline"),Ui=n(" is the easiest way to use a pre-trained diffusion system for inference. You can use the "),De=a("a"),Vi=n("DiffusionPipeline"),Ri=n(" out-of-the-box for many tasks across different modalities. Take a look at the table below for some supported tasks:"),zt=u(),V=a("table"),st=a("thead"),I=a("tr"),nt=a("th"),lt=a("strong"),Yi=n("Task"),zi=u(),rt=a("th"),ft=a("strong"),Bi=n("Description"),Fi=u(),ut=a("th"),pt=a("strong"),Ki=n("Pipeline"),Qi=u(),D=a("tbody"),N=a("tr"),ht=a("td"),Wi=n("Unconditional Image Generation"),Xi=u(),dt=a("td"),Ji=n("generate an image from gaussian noise"),Zi=u(),ct=a("td"),Pe=a("a"),ea=n("unconditional_image_generation"),ta=u(),O=a("tr"),mt=a("td"),ia=n("Text-Guided Image Generation"),aa=u(),gt=a("td"),oa=n("generate an image given a text prompt"),sa=u(),vt=a("td"),Te=a("a"),na=n("conditional_image_generation"),la=u(),C=a("tr"),_t=a("td"),ra=n("Text-Guided Image-to-Image Translation"),fa=u(),yt=a("td"),ua=n("generate an image given an original image and a text prompt"),pa=u(),wt=a("td"),Ae=a("a"),ha=n("img2img"),da=u(),G=a("tr"),bt=a("td"),ca=n("Text-Guided Image-Inpainting"),ma=u(),Et=a("td"),ga=n("fill the masked part of an image given the image, the mask and a text prompt"),va=u(),kt=a("td"),je=a("a"),_a=n("inpaint"),Bt=u(),R=a("p"),ya=n("For more in-detail information on how diffusion pipelines function for the different tasks, please have a look at the "),Se=a("a"),$t=a("strong"),wa=n("Using Diffusers"),ba=n(" section."),Ft=u(),d=a("p"),Ea=n("As an example, start by creating an instance of "),qe=a("a"),ka=n("DiffusionPipeline"),$a=n(` and specify which pipeline checkpoint you would like to download.
You can use the `),xe=a("a"),Da=n("DiffusionPipeline"),Pa=n(" for any "),ee=a("a"),Ta=n("Diffusers\u2019 checkpoint"),Aa=n(`.
In this guide though, you\u2019ll use `),Ie=a("a"),ja=n("DiffusionPipeline"),Sa=n(" for text-to-image generation with "),te=a("a"),qa=n("Latent Diffusion"),xa=n(":"),Kt=u(),g(ie.$$.fragment),Qt=u(),Y=a("p"),Ia=n("The "),Ne=a("a"),Na=n("DiffusionPipeline"),Oa=n(` downloads and caches all modeling, tokenization, and scheduling components.
Because the model consists of roughly 1.4 billion parameters, we strongly recommend running it on GPU.
You can move the generator object to GPU, just like you would in PyTorch.`),Wt=u(),g(ae.$$.fragment),Xt=u(),z=a("p"),Ca=n("Now you can use the "),Dt=a("code"),Ga=n("generator"),Ha=n(" on your text prompt:"),Jt=u(),g(oe.$$.fragment),Zt=u(),B=a("p"),La=n("The output is by default wrapped into a "),se=a("a"),Ma=n("PIL Image object"),Ua=n("."),ei=u(),Oe=a("p"),Va=n("You can save the image by simply calling:"),ti=u(),g(ne.$$.fragment),ii=u(),c=a("p"),Ra=n("More advanced models, like "),le=a("a"),Ya=n("Stable Diffusion"),za=n(" require you to accept a "),re=a("a"),Ba=n("license"),Fa=n(` before running the model.
This is due to the improved image generation capabilities of the model and the potentially harmful content that could be produced with it.
Long story short: Head over to your stable diffusion model of choice, `),Pt=a("em"),Ka=n("e.g."),Qa=u(),fe=a("a"),Tt=a("code"),Wa=n("CompVis/stable-diffusion-v1-4"),Xa=n(`, read through the license and click-accept to get
access to the model.
You have to be a registered user in \u{1F917} Hugging Face Hub, and you\u2019ll also need to use an access token for the code to work. For more information on access tokens, please refer to `),ue=a("a"),Ja=n("this section of the documentation"),Za=n(`.
Having \u201Cclick-accepted\u201D the license, you can save your token:`),ai=u(),g(pe.$$.fragment),oi=u(),A=a("p"),eo=n("You can then load "),he=a("a"),At=a("code"),to=n("CompVis/stable-diffusion-v1-4"),io=n(`
just like we did before only that now you need to pass your `),jt=a("code"),ao=n("AUTH_TOKEN"),oo=n(":"),si=u(),g(de.$$.fragment),ni=u(),Ce=a("p"),so=n(`If you do not pass your authentification token you will see that the diffusion system will not be correctly
downloaded. Forcing the user to pass an authentification token ensures that it can be verified that the
user has indeed read and accepted the license, which also means that an internet connection is required.`),li=u(),ce=a("p"),St=a("strong"),no=n("Note"),lo=n(`: If you do not want to be forced to pass an authentification token, you can also simply download
the weights locally via:`),ri=u(),g(me.$$.fragment),fi=u(),F=a("p"),ro=n(`and then load locally saved weights into the pipeline. This way, you do not need to pass an authentification
token. Assuming that `),qt=a("code"),fo=n('"./stable-diffusion-v1-4"'),uo=n(` is the local path to the cloned stable-diffusion-v1-4 repo,
you can also load the pipeline as follows:`),ui=u(),g(ge.$$.fragment),pi=u(),Ge=a("p"),po=n("Running the pipeline is then identical to the code above as it\u2019s the same model architecture."),hi=u(),g(ve.$$.fragment),di=u(),m=a("p"),ho=n("Diffusion systems can be used with multiple different "),He=a("a"),co=n("schedulers"),mo=n(` each with their
pros and cons. By default, Stable Diffusion runs with `),Le=a("a"),go=n("PNDMScheduler"),vo=n(`, but it\u2019s very simple to
use a different scheduler. `),xt=a("em"),_o=n("E.g."),yo=n(" if you would instead like to use the "),Me=a("a"),wo=n("LMSDiscreteScheduler"),bo=n(` scheduler,
you could use it as follows:`),ci=u(),g(_e.$$.fragment),mi=u(),H=a("p"),ye=a("a"),Eo=n("Stability AI\u2019s"),ko=n(` Stable Diffusion model is an impressive image generation model
and can do much more than just generating images from text. We have dedicated a whole documentation page,
just for Stable Diffusion `),Ue=a("a"),$o=n("here"),Do=n("."),gi=u(),K=a("p"),Po=n("If you want to know how to optimize Stable Diffusion to run on less memory, higher inference speeds, on specific hardware, such as Mac, or with "),we=a("a"),To=n("ONNX Runtime"),Ao=n(`, please have a look at our
optimization pages:`),vi=u(),E=a("ul"),It=a("li"),Ve=a("a"),jo=n("Optimized PyTorch on GPU"),So=u(),Nt=a("li"),Re=a("a"),qo=n("Mac OS with PyTorch"),xo=u(),Ot=a("li"),Ye=a("a"),Io=n("ONNX"),No=u(),Ct=a("li"),ze=a("a"),Oo=n("OpenVINO"),_i=u(),be=a("p"),Co=n("If you want to fine-tune or train your diffusion model, please have a look at the "),Be=a("a"),Gt=a("strong"),Go=n("training section"),yi=u(),Fe=a("p"),Ho=n("Finally, please be considerate when distributing generated images publicly \u{1F917}."),this.h()},l(e){const r=cn('[data-svelte="svelte-1phssyn"]',document.head);S=o(r,"META",{name:!0,content:!0}),r.forEach(i),Lt=p(e),q=o(e,"H1",{class:!0});var bi=s(q);L=o(bi,"A",{id:!0,class:!0,href:!0});var Vo=s(L);tt=o(Vo,"SPAN",{});var Ro=s(tt);v(X.$$.fragment,Ro),Ro.forEach(i),Vo.forEach(i),qi=p(bi),it=o(bi,"SPAN",{});var Yo=s(it);xi=l(Yo,"Quicktour"),Yo.forEach(i),bi.forEach(i),Mt=p(e),M=o(e,"P",{});var Ei=s(M);Ii=l(Ei,`Get up and running with \u{1F9E8} Diffusers quickly!
Whether you\u2019re a developer or an everyday user, this quick tour will help you get started and show you how to use `),Ee=o(Ei,"A",{href:!0});var zo=s(Ee);Ni=l(zo,"DiffusionPipeline"),zo.forEach(i),Oi=l(Ei," for inference."),Ei.forEach(i),Ut=p(e),ke=o(e,"P",{});var Bo=s(ke);Ci=l(Bo,"Before you begin, make sure you have all the necessary libraries installed:"),Bo.forEach(i),Vt=p(e),v(J.$$.fragment,e),Rt=p(e),x=o(e,"H2",{class:!0});var ki=s(x);U=o(ki,"A",{id:!0,class:!0,href:!0});var Fo=s(U);at=o(Fo,"SPAN",{});var Ko=s(at);v(Z.$$.fragment,Ko),Ko.forEach(i),Fo.forEach(i),Gi=p(ki),ot=o(ki,"SPAN",{});var Qo=s(ot);Hi=l(Qo,"DiffusionPipeline"),Qo.forEach(i),ki.forEach(i),Yt=p(e),T=o(e,"P",{});var Ke=s(T);Li=l(Ke,"The "),$e=o(Ke,"A",{href:!0});var Wo=s($e);Mi=l(Wo,"DiffusionPipeline"),Wo.forEach(i),Ui=l(Ke," is the easiest way to use a pre-trained diffusion system for inference. You can use the "),De=o(Ke,"A",{href:!0});var Xo=s(De);Vi=l(Xo,"DiffusionPipeline"),Xo.forEach(i),Ri=l(Ke," out-of-the-box for many tasks across different modalities. Take a look at the table below for some supported tasks:"),Ke.forEach(i),zt=p(e),V=o(e,"TABLE",{});var $i=s(V);st=o($i,"THEAD",{});var Jo=s(st);I=o(Jo,"TR",{});var Qe=s(I);nt=o(Qe,"TH",{});var Zo=s(nt);lt=o(Zo,"STRONG",{});var es=s(lt);Yi=l(es,"Task"),es.forEach(i),Zo.forEach(i),zi=p(Qe),rt=o(Qe,"TH",{});var ts=s(rt);ft=o(ts,"STRONG",{});var is=s(ft);Bi=l(is,"Description"),is.forEach(i),ts.forEach(i),Fi=p(Qe),ut=o(Qe,"TH",{});var as=s(ut);pt=o(as,"STRONG",{});var os=s(pt);Ki=l(os,"Pipeline"),os.forEach(i),as.forEach(i),Qe.forEach(i),Jo.forEach(i),Qi=p($i),D=o($i,"TBODY",{});var Q=s(D);N=o(Q,"TR",{});var We=s(N);ht=o(We,"TD",{});var ss=s(ht);Wi=l(ss,"Unconditional Image Generation"),ss.forEach(i),Xi=p(We),dt=o(We,"TD",{});var ns=s(dt);Ji=l(ns,"generate an image from gaussian noise"),ns.forEach(i),Zi=p(We),ct=o(We,"TD",{});var ls=s(ct);Pe=o(ls,"A",{href:!0});var rs=s(Pe);ea=l(rs,"unconditional_image_generation"),rs.forEach(i),ls.forEach(i),We.forEach(i),ta=p(Q),O=o(Q,"TR",{});var Xe=s(O);mt=o(Xe,"TD",{});var fs=s(mt);ia=l(fs,"Text-Guided Image Generation"),fs.forEach(i),aa=p(Xe),gt=o(Xe,"TD",{});var us=s(gt);oa=l(us,"generate an image given a text prompt"),us.forEach(i),sa=p(Xe),vt=o(Xe,"TD",{});var ps=s(vt);Te=o(ps,"A",{href:!0});var hs=s(Te);na=l(hs,"conditional_image_generation"),hs.forEach(i),ps.forEach(i),Xe.forEach(i),la=p(Q),C=o(Q,"TR",{});var Je=s(C);_t=o(Je,"TD",{});var ds=s(_t);ra=l(ds,"Text-Guided Image-to-Image Translation"),ds.forEach(i),fa=p(Je),yt=o(Je,"TD",{});var cs=s(yt);ua=l(cs,"generate an image given an original image and a text prompt"),cs.forEach(i),pa=p(Je),wt=o(Je,"TD",{});var ms=s(wt);Ae=o(ms,"A",{href:!0});var gs=s(Ae);ha=l(gs,"img2img"),gs.forEach(i),ms.forEach(i),Je.forEach(i),da=p(Q),G=o(Q,"TR",{});var Ze=s(G);bt=o(Ze,"TD",{});var vs=s(bt);ca=l(vs,"Text-Guided Image-Inpainting"),vs.forEach(i),ma=p(Ze),Et=o(Ze,"TD",{});var _s=s(Et);ga=l(_s,"fill the masked part of an image given the image, the mask and a text prompt"),_s.forEach(i),va=p(Ze),kt=o(Ze,"TD",{});var ys=s(kt);je=o(ys,"A",{href:!0});var ws=s(je);_a=l(ws,"inpaint"),ws.forEach(i),ys.forEach(i),Ze.forEach(i),Q.forEach(i),$i.forEach(i),Bt=p(e),R=o(e,"P",{});var Di=s(R);ya=l(Di,"For more in-detail information on how diffusion pipelines function for the different tasks, please have a look at the "),Se=o(Di,"A",{href:!0});var bs=s(Se);$t=o(bs,"STRONG",{});var Es=s($t);wa=l(Es,"Using Diffusers"),Es.forEach(i),bs.forEach(i),ba=l(Di," section."),Di.forEach(i),Ft=p(e),d=o(e,"P",{});var k=s(d);Ea=l(k,"As an example, start by creating an instance of "),qe=o(k,"A",{href:!0});var ks=s(qe);ka=l(ks,"DiffusionPipeline"),ks.forEach(i),$a=l(k,` and specify which pipeline checkpoint you would like to download.
You can use the `),xe=o(k,"A",{href:!0});var $s=s(xe);Da=l($s,"DiffusionPipeline"),$s.forEach(i),Pa=l(k," for any "),ee=o(k,"A",{href:!0,rel:!0});var Ds=s(ee);Ta=l(Ds,"Diffusers\u2019 checkpoint"),Ds.forEach(i),Aa=l(k,`.
In this guide though, you\u2019ll use `),Ie=o(k,"A",{href:!0});var Ps=s(Ie);ja=l(Ps,"DiffusionPipeline"),Ps.forEach(i),Sa=l(k," for text-to-image generation with "),te=o(k,"A",{href:!0,rel:!0});var Ts=s(te);qa=l(Ts,"Latent Diffusion"),Ts.forEach(i),xa=l(k,":"),k.forEach(i),Kt=p(e),v(ie.$$.fragment,e),Qt=p(e),Y=o(e,"P",{});var Pi=s(Y);Ia=l(Pi,"The "),Ne=o(Pi,"A",{href:!0});var As=s(Ne);Na=l(As,"DiffusionPipeline"),As.forEach(i),Oa=l(Pi,` downloads and caches all modeling, tokenization, and scheduling components.
Because the model consists of roughly 1.4 billion parameters, we strongly recommend running it on GPU.
You can move the generator object to GPU, just like you would in PyTorch.`),Pi.forEach(i),Wt=p(e),v(ae.$$.fragment,e),Xt=p(e),z=o(e,"P",{});var Ti=s(z);Ca=l(Ti,"Now you can use the "),Dt=o(Ti,"CODE",{});var js=s(Dt);Ga=l(js,"generator"),js.forEach(i),Ha=l(Ti," on your text prompt:"),Ti.forEach(i),Jt=p(e),v(oe.$$.fragment,e),Zt=p(e),B=o(e,"P",{});var Ai=s(B);La=l(Ai,"The output is by default wrapped into a "),se=o(Ai,"A",{href:!0,rel:!0});var Ss=s(se);Ma=l(Ss,"PIL Image object"),Ss.forEach(i),Ua=l(Ai,"."),Ai.forEach(i),ei=p(e),Oe=o(e,"P",{});var qs=s(Oe);Va=l(qs,"You can save the image by simply calling:"),qs.forEach(i),ti=p(e),v(ne.$$.fragment,e),ii=p(e),c=o(e,"P",{});var $=s(c);Ra=l($,"More advanced models, like "),le=o($,"A",{href:!0,rel:!0});var xs=s(le);Ya=l(xs,"Stable Diffusion"),xs.forEach(i),za=l($," require you to accept a "),re=o($,"A",{href:!0,rel:!0});var Is=s(re);Ba=l(Is,"license"),Is.forEach(i),Fa=l($,` before running the model.
This is due to the improved image generation capabilities of the model and the potentially harmful content that could be produced with it.
Long story short: Head over to your stable diffusion model of choice, `),Pt=o($,"EM",{});var Ns=s(Pt);Ka=l(Ns,"e.g."),Ns.forEach(i),Qa=p($),fe=o($,"A",{href:!0,rel:!0});var Os=s(fe);Tt=o(Os,"CODE",{});var Cs=s(Tt);Wa=l(Cs,"CompVis/stable-diffusion-v1-4"),Cs.forEach(i),Os.forEach(i),Xa=l($,`, read through the license and click-accept to get
access to the model.
You have to be a registered user in \u{1F917} Hugging Face Hub, and you\u2019ll also need to use an access token for the code to work. For more information on access tokens, please refer to `),ue=o($,"A",{href:!0,rel:!0});var Gs=s(ue);Ja=l(Gs,"this section of the documentation"),Gs.forEach(i),Za=l($,`.
Having \u201Cclick-accepted\u201D the license, you can save your token:`),$.forEach(i),ai=p(e),v(pe.$$.fragment,e),oi=p(e),A=o(e,"P",{});var et=s(A);eo=l(et,"You can then load "),he=o(et,"A",{href:!0,rel:!0});var Hs=s(he);At=o(Hs,"CODE",{});var Ls=s(At);to=l(Ls,"CompVis/stable-diffusion-v1-4"),Ls.forEach(i),Hs.forEach(i),io=l(et,`
just like we did before only that now you need to pass your `),jt=o(et,"CODE",{});var Ms=s(jt);ao=l(Ms,"AUTH_TOKEN"),Ms.forEach(i),oo=l(et,":"),et.forEach(i),si=p(e),v(de.$$.fragment,e),ni=p(e),Ce=o(e,"P",{});var Us=s(Ce);so=l(Us,`If you do not pass your authentification token you will see that the diffusion system will not be correctly
downloaded. Forcing the user to pass an authentification token ensures that it can be verified that the
user has indeed read and accepted the license, which also means that an internet connection is required.`),Us.forEach(i),li=p(e),ce=o(e,"P",{});var Lo=s(ce);St=o(Lo,"STRONG",{});var Vs=s(St);no=l(Vs,"Note"),Vs.forEach(i),lo=l(Lo,`: If you do not want to be forced to pass an authentification token, you can also simply download
the weights locally via:`),Lo.forEach(i),ri=p(e),v(me.$$.fragment,e),fi=p(e),F=o(e,"P",{});var ji=s(F);ro=l(ji,`and then load locally saved weights into the pipeline. This way, you do not need to pass an authentification
token. Assuming that `),qt=o(ji,"CODE",{});var Rs=s(qt);fo=l(Rs,'"./stable-diffusion-v1-4"'),Rs.forEach(i),uo=l(ji,` is the local path to the cloned stable-diffusion-v1-4 repo,
you can also load the pipeline as follows:`),ji.forEach(i),ui=p(e),v(ge.$$.fragment,e),pi=p(e),Ge=o(e,"P",{});var Ys=s(Ge);po=l(Ys,"Running the pipeline is then identical to the code above as it\u2019s the same model architecture."),Ys.forEach(i),hi=p(e),v(ve.$$.fragment,e),di=p(e),m=o(e,"P",{});var j=s(m);ho=l(j,"Diffusion systems can be used with multiple different "),He=o(j,"A",{href:!0});var zs=s(He);co=l(zs,"schedulers"),zs.forEach(i),mo=l(j,` each with their
pros and cons. By default, Stable Diffusion runs with `),Le=o(j,"A",{href:!0});var Bs=s(Le);go=l(Bs,"PNDMScheduler"),Bs.forEach(i),vo=l(j,`, but it\u2019s very simple to
use a different scheduler. `),xt=o(j,"EM",{});var Fs=s(xt);_o=l(Fs,"E.g."),Fs.forEach(i),yo=l(j," if you would instead like to use the "),Me=o(j,"A",{href:!0});var Ks=s(Me);wo=l(Ks,"LMSDiscreteScheduler"),Ks.forEach(i),bo=l(j,` scheduler,
you could use it as follows:`),j.forEach(i),ci=p(e),v(_e.$$.fragment,e),mi=p(e),H=o(e,"P",{});var Ht=s(H);ye=o(Ht,"A",{href:!0,rel:!0});var Qs=s(ye);Eo=l(Qs,"Stability AI\u2019s"),Qs.forEach(i),ko=l(Ht,` Stable Diffusion model is an impressive image generation model
and can do much more than just generating images from text. We have dedicated a whole documentation page,
just for Stable Diffusion `),Ue=o(Ht,"A",{href:!0});var Ws=s(Ue);$o=l(Ws,"here"),Ws.forEach(i),Do=l(Ht,"."),Ht.forEach(i),gi=p(e),K=o(e,"P",{});var Si=s(K);Po=l(Si,"If you want to know how to optimize Stable Diffusion to run on less memory, higher inference speeds, on specific hardware, such as Mac, or with "),we=o(Si,"A",{href:!0,rel:!0});var Xs=s(we);To=l(Xs,"ONNX Runtime"),Xs.forEach(i),Ao=l(Si,`, please have a look at our
optimization pages:`),Si.forEach(i),vi=p(e),E=o(e,"UL",{});var W=s(E);It=o(W,"LI",{});var Js=s(It);Ve=o(Js,"A",{href:!0});var Zs=s(Ve);jo=l(Zs,"Optimized PyTorch on GPU"),Zs.forEach(i),Js.forEach(i),So=p(W),Nt=o(W,"LI",{});var en=s(Nt);Re=o(en,"A",{href:!0});var tn=s(Re);qo=l(tn,"Mac OS with PyTorch"),tn.forEach(i),en.forEach(i),xo=p(W),Ot=o(W,"LI",{});var an=s(Ot);Ye=o(an,"A",{href:!0});var on=s(Ye);Io=l(on,"ONNX"),on.forEach(i),an.forEach(i),No=p(W),Ct=o(W,"LI",{});var sn=s(Ct);ze=o(sn,"A",{href:!0});var nn=s(ze);Oo=l(nn,"OpenVINO"),nn.forEach(i),sn.forEach(i),W.forEach(i),_i=p(e),be=o(e,"P",{});var Mo=s(be);Co=l(Mo,"If you want to fine-tune or train your diffusion model, please have a look at the "),Be=o(Mo,"A",{href:!0});var ln=s(Be);Gt=o(ln,"STRONG",{});var rn=s(Gt);Go=l(rn,"training section"),rn.forEach(i),ln.forEach(i),Mo.forEach(i),yi=p(e),Fe=o(e,"P",{});var fn=s(Fe);Ho=l(fn,"Finally, please be considerate when distributing generated images publicly \u{1F917}."),fn.forEach(i),this.h()},h(){h(S,"name","hf:doc:metadata"),h(S,"content",JSON.stringify(_n)),h(L,"id","quicktour"),h(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(L,"href","#quicktour"),h(q,"class","relative group"),h(Ee,"href","/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.DiffusionPipeline"),h(U,"id","diffusionpipeline"),h(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(U,"href","#diffusionpipeline"),h(x,"class","relative group"),h($e,"href","/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.DiffusionPipeline"),h(De,"href","/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.DiffusionPipeline"),h(Pe,"href","./using-diffusers/unconditional_image_generation%60"),h(Te,"href","./using-diffusers/conditional_image_generation"),h(Ae,"href","./using-diffusers/img2img"),h(je,"href","./using-diffusers/inpaint"),h(Se,"href","./using-diffusers/overview"),h(qe,"href","/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.DiffusionPipeline"),h(xe,"href","/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.DiffusionPipeline"),h(ee,"href","https://huggingface.co/models?library=diffusers&sort=downloads"),h(ee,"rel","nofollow"),h(Ie,"href","/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.DiffusionPipeline"),h(te,"href","https://huggingface.co/CompVis/ldm-text2im-large-256"),h(te,"rel","nofollow"),h(Ne,"href","/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.DiffusionPipeline"),h(se,"href","https://pillow.readthedocs.io/en/stable/reference/Image.html?highlight=image#the-image-class"),h(se,"rel","nofollow"),h(le,"href","https://huggingface.co/CompVis/stable-diffusion"),h(le,"rel","nofollow"),h(re,"href","https://huggingface.co/spaces/CompVis/stable-diffusion-license"),h(re,"rel","nofollow"),h(fe,"href","https://huggingface.co/CompVis/stable-diffusion-v1-4"),h(fe,"rel","nofollow"),h(ue,"href","https://huggingface.co/docs/hub/security-tokens"),h(ue,"rel","nofollow"),h(he,"href","https://huggingface.co/CompVis/stable-diffusion-v1-4"),h(he,"rel","nofollow"),h(He,"href","./api/schedulers"),h(Le,"href","/docs/diffusers/main/en/api/schedulers#diffusers.PNDMScheduler"),h(Me,"href","/docs/diffusers/main/en/api/schedulers#diffusers.LMSDiscreteScheduler"),h(ye,"href","https://stability.ai/"),h(ye,"rel","nofollow"),h(Ue,"href","./conceptual/stable_diffusion"),h(we,"href","https://onnxruntime.ai/"),h(we,"rel","nofollow"),h(Ve,"href","./optimization/fp16"),h(Re,"href","./optimization/mps"),h(Ye,"href","./optimization/onnx"),h(ze,"href","./optimization/open_vino"),h(Be,"href","./training/overview")},m(e,r){t(document.head,S),f(e,Lt,r),f(e,q,r),t(q,L),t(L,tt),_(X,tt,null),t(q,qi),t(q,it),t(it,xi),f(e,Mt,r),f(e,M,r),t(M,Ii),t(M,Ee),t(Ee,Ni),t(M,Oi),f(e,Ut,r),f(e,ke,r),t(ke,Ci),f(e,Vt,r),_(J,e,r),f(e,Rt,r),f(e,x,r),t(x,U),t(U,at),_(Z,at,null),t(x,Gi),t(x,ot),t(ot,Hi),f(e,Yt,r),f(e,T,r),t(T,Li),t(T,$e),t($e,Mi),t(T,Ui),t(T,De),t(De,Vi),t(T,Ri),f(e,zt,r),f(e,V,r),t(V,st),t(st,I),t(I,nt),t(nt,lt),t(lt,Yi),t(I,zi),t(I,rt),t(rt,ft),t(ft,Bi),t(I,Fi),t(I,ut),t(ut,pt),t(pt,Ki),t(V,Qi),t(V,D),t(D,N),t(N,ht),t(ht,Wi),t(N,Xi),t(N,dt),t(dt,Ji),t(N,Zi),t(N,ct),t(ct,Pe),t(Pe,ea),t(D,ta),t(D,O),t(O,mt),t(mt,ia),t(O,aa),t(O,gt),t(gt,oa),t(O,sa),t(O,vt),t(vt,Te),t(Te,na),t(D,la),t(D,C),t(C,_t),t(_t,ra),t(C,fa),t(C,yt),t(yt,ua),t(C,pa),t(C,wt),t(wt,Ae),t(Ae,ha),t(D,da),t(D,G),t(G,bt),t(bt,ca),t(G,ma),t(G,Et),t(Et,ga),t(G,va),t(G,kt),t(kt,je),t(je,_a),f(e,Bt,r),f(e,R,r),t(R,ya),t(R,Se),t(Se,$t),t($t,wa),t(R,ba),f(e,Ft,r),f(e,d,r),t(d,Ea),t(d,qe),t(qe,ka),t(d,$a),t(d,xe),t(xe,Da),t(d,Pa),t(d,ee),t(ee,Ta),t(d,Aa),t(d,Ie),t(Ie,ja),t(d,Sa),t(d,te),t(te,qa),t(d,xa),f(e,Kt,r),_(ie,e,r),f(e,Qt,r),f(e,Y,r),t(Y,Ia),t(Y,Ne),t(Ne,Na),t(Y,Oa),f(e,Wt,r),_(ae,e,r),f(e,Xt,r),f(e,z,r),t(z,Ca),t(z,Dt),t(Dt,Ga),t(z,Ha),f(e,Jt,r),_(oe,e,r),f(e,Zt,r),f(e,B,r),t(B,La),t(B,se),t(se,Ma),t(B,Ua),f(e,ei,r),f(e,Oe,r),t(Oe,Va),f(e,ti,r),_(ne,e,r),f(e,ii,r),f(e,c,r),t(c,Ra),t(c,le),t(le,Ya),t(c,za),t(c,re),t(re,Ba),t(c,Fa),t(c,Pt),t(Pt,Ka),t(c,Qa),t(c,fe),t(fe,Tt),t(Tt,Wa),t(c,Xa),t(c,ue),t(ue,Ja),t(c,Za),f(e,ai,r),_(pe,e,r),f(e,oi,r),f(e,A,r),t(A,eo),t(A,he),t(he,At),t(At,to),t(A,io),t(A,jt),t(jt,ao),t(A,oo),f(e,si,r),_(de,e,r),f(e,ni,r),f(e,Ce,r),t(Ce,so),f(e,li,r),f(e,ce,r),t(ce,St),t(St,no),t(ce,lo),f(e,ri,r),_(me,e,r),f(e,fi,r),f(e,F,r),t(F,ro),t(F,qt),t(qt,fo),t(F,uo),f(e,ui,r),_(ge,e,r),f(e,pi,r),f(e,Ge,r),t(Ge,po),f(e,hi,r),_(ve,e,r),f(e,di,r),f(e,m,r),t(m,ho),t(m,He),t(He,co),t(m,mo),t(m,Le),t(Le,go),t(m,vo),t(m,xt),t(xt,_o),t(m,yo),t(m,Me),t(Me,wo),t(m,bo),f(e,ci,r),_(_e,e,r),f(e,mi,r),f(e,H,r),t(H,ye),t(ye,Eo),t(H,ko),t(H,Ue),t(Ue,$o),t(H,Do),f(e,gi,r),f(e,K,r),t(K,Po),t(K,we),t(we,To),t(K,Ao),f(e,vi,r),f(e,E,r),t(E,It),t(It,Ve),t(Ve,jo),t(E,So),t(E,Nt),t(Nt,Re),t(Re,qo),t(E,xo),t(E,Ot),t(Ot,Ye),t(Ye,Io),t(E,No),t(E,Ct),t(Ct,ze),t(ze,Oo),f(e,_i,r),f(e,be,r),t(be,Co),t(be,Be),t(Be,Gt),t(Gt,Go),f(e,yi,r),f(e,Fe,r),t(Fe,Ho),wi=!0},p:mn,i(e){wi||(y(X.$$.fragment,e),y(J.$$.fragment,e),y(Z.$$.fragment,e),y(ie.$$.fragment,e),y(ae.$$.fragment,e),y(oe.$$.fragment,e),y(ne.$$.fragment,e),y(pe.$$.fragment,e),y(de.$$.fragment,e),y(me.$$.fragment,e),y(ge.$$.fragment,e),y(ve.$$.fragment,e),y(_e.$$.fragment,e),wi=!0)},o(e){w(X.$$.fragment,e),w(J.$$.fragment,e),w(Z.$$.fragment,e),w(ie.$$.fragment,e),w(ae.$$.fragment,e),w(oe.$$.fragment,e),w(ne.$$.fragment,e),w(pe.$$.fragment,e),w(de.$$.fragment,e),w(me.$$.fragment,e),w(ge.$$.fragment,e),w(ve.$$.fragment,e),w(_e.$$.fragment,e),wi=!1},d(e){i(S),e&&i(Lt),e&&i(q),b(X),e&&i(Mt),e&&i(M),e&&i(Ut),e&&i(ke),e&&i(Vt),b(J,e),e&&i(Rt),e&&i(x),b(Z),e&&i(Yt),e&&i(T),e&&i(zt),e&&i(V),e&&i(Bt),e&&i(R),e&&i(Ft),e&&i(d),e&&i(Kt),b(ie,e),e&&i(Qt),e&&i(Y),e&&i(Wt),b(ae,e),e&&i(Xt),e&&i(z),e&&i(Jt),b(oe,e),e&&i(Zt),e&&i(B),e&&i(ei),e&&i(Oe),e&&i(ti),b(ne,e),e&&i(ii),e&&i(c),e&&i(ai),b(pe,e),e&&i(oi),e&&i(A),e&&i(si),b(de,e),e&&i(ni),e&&i(Ce),e&&i(li),e&&i(ce),e&&i(ri),b(me,e),e&&i(fi),e&&i(F),e&&i(ui),b(ge,e),e&&i(pi),e&&i(Ge),e&&i(hi),b(ve,e),e&&i(di),e&&i(m),e&&i(ci),b(_e,e),e&&i(mi),e&&i(H),e&&i(gi),e&&i(K),e&&i(vi),e&&i(E),e&&i(_i),e&&i(be),e&&i(yi),e&&i(Fe)}}}const _n={local:"quicktour",sections:[{local:"diffusionpipeline",title:"DiffusionPipeline"}],title:"Quicktour"};function yn(Uo){return gn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class kn extends pn{constructor(S){super();hn(this,S,yn,vn,dn,{})}}export{kn as default,_n as metadata};
