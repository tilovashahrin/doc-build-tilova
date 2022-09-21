import{S as Ri,i as Ji,s as Ki,e as o,k as p,w as k,t as s,M as Qi,c as n,d as i,m as d,a as r,x,h as a,b as h,G as e,g as v,y as I,q as j,o as T,B as A,v as Zi,L as eo}from"../../chunks/vendor-hf-doc-builder.js";import{T as vi}from"../../chunks/Tip-hf-doc-builder.js";import{D as ot}from"../../chunks/Docstring-hf-doc-builder.js";import{C as to}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as $i}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as io}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function oo(L){let l;return{c(){l=s("One should not use the Diffusion Pipeline class for training or fine-tuning a diffusion model. Individual \n	components of diffusion pipelines are usually trained individually, so we suggest to directly work \n	with `UNetModel` and `UNetConditionModel`.")},l(_){l=a(_,"One should not use the Diffusion Pipeline class for training or fine-tuning a diffusion model. Individual \n	components of diffusion pipelines are usually trained individually, so we suggest to directly work \n	with `UNetModel` and `UNetConditionModel`.")},m(_,c){v(_,l,c)},d(_){_&&i(l)}}}function no(L){let l,_,c,m,w;return{c(){l=o("p"),_=s("Passing "),c=o("code"),m=s("use_auth_token=True`` is required when you want to use a private model, *e.g.* "),w=s("\u201CCompVis/stable-diffusion-v1-4\u201D`")},l(f){l=n(f,"P",{});var g=r(l);_=a(g,"Passing "),c=n(g,"CODE",{});var C=r(c);m=a(C,"use_auth_token=True`` is required when you want to use a private model, *e.g.* "),C.forEach(i),w=a(g,"\u201CCompVis/stable-diffusion-v1-4\u201D`"),g.forEach(i)},m(f,g){v(f,l,g),e(l,_),e(l,c),e(c,m),e(l,w)},d(f){f&&i(l)}}}function so(L){let l,_,c,m,w;return{c(){l=o("p"),_=s("Activate the special "),c=o("a"),m=s("\u201Coffline-mode\u201D"),w=s(` to use
this method in a firewalled environment.`),this.h()},l(f){l=n(f,"P",{});var g=r(l);_=a(g,"Activate the special "),c=n(g,"A",{href:!0,rel:!0});var C=r(c);m=a(C,"\u201Coffline-mode\u201D"),C.forEach(i),w=a(g,` to use
this method in a firewalled environment.`),g.forEach(i),this.h()},h(){h(c,"href","https://huggingface.co/diffusers/installation.html#offline-mode"),h(c,"rel","nofollow")},m(f,g){v(f,l,g),e(l,_),e(l,c),e(c,m),e(l,w)},d(f){f&&i(l)}}}function ao(L){let l,_,c,m,w;return m=new to({props:{code:`from diffusers import DiffusionPipeline

# Download pipeline from huggingface.co and cache.
pipeline = DiffusionPipeline.from_pretrained("CompVis/ldm-text2im-large-256")

# Download pipeline that requires an authorization token
# For more information on access tokens, please refer to this section
# of the documentation](https://huggingface.co/docs/hub/security-tokens)
pipeline = DiffusionPipeline.from_pretrained("CompVis/stable-diffusion-v1-4", use_auth_token=True)

# Download pipeline, but overwrite scheduler
from diffusers import LMSDiscreteScheduler

scheduler = LMSDiscreteScheduler(beta_start=0.00085, beta_end=0.012, beta_schedule="scaled_linear")
pipeline = DiffusionPipeline.from_pretrained(
    "CompVis/stable-diffusion-v1-4", scheduler=scheduler, use_auth_token=True
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> DiffusionPipeline

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Download pipeline from huggingface.co and cache.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pipeline = DiffusionPipeline.from_pretrained(<span class="hljs-string">&quot;CompVis/ldm-text2im-large-256&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Download pipeline that requires an authorization token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># For more information on access tokens, please refer to this section</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># of the documentation](https://huggingface.co/docs/hub/security-tokens)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pipeline = DiffusionPipeline.from_pretrained(<span class="hljs-string">&quot;CompVis/stable-diffusion-v1-4&quot;</span>, use_auth_token=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Download pipeline, but overwrite scheduler</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> LMSDiscreteScheduler

<span class="hljs-meta">&gt;&gt;&gt; </span>scheduler = LMSDiscreteScheduler(beta_start=<span class="hljs-number">0.00085</span>, beta_end=<span class="hljs-number">0.012</span>, beta_schedule=<span class="hljs-string">&quot;scaled_linear&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>pipeline = DiffusionPipeline.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;CompVis/stable-diffusion-v1-4&quot;</span>, scheduler=scheduler, use_auth_token=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)`}}),{c(){l=o("p"),_=s("Examples:"),c=p(),k(m.$$.fragment)},l(f){l=n(f,"P",{});var g=r(l);_=a(g,"Examples:"),g.forEach(i),c=d(f),x(m.$$.fragment,f)},m(f,g){v(f,l,g),e(l,_),v(f,c,g),I(m,f,g),w=!0},p:eo,i(f){w||(j(m.$$.fragment,f),w=!0)},o(f){T(m.$$.fragment,f),w=!1},d(f){f&&i(l),f&&i(c),A(m,f)}}}function ro(L){let l,_,c,m,w,f,g,C,nt,Me,S,st,ae,at,rt,H,lt,ft,Ne,M,Ve,y,pt,re,dt,ct,ue,ut,ht,le,mt,gt,he,_t,vt,me,$t,bt,ge,wt,yt,Ye,N,Pt,fe,Dt,Et,Ue,X,V,_e,G,kt,ve,xt,We,$,R,It,$e,jt,Tt,pe,de,At,Ct,Lt,J,be,St,Xt,we,qt,Ot,ye,Mt,Nt,Pe,Y,De,Vt,Yt,Ee,Ut,Wt,zt,b,K,Bt,ke,Ft,Ht,Q,Gt,xe,Rt,Jt,Kt,Z,Qt,Ie,Zt,ei,ti,ee,ii,je,oi,ni,si,U,ai,W,ri,z,li,B,te,fi,ie,pi,Te,di,ci,ze,q,F,Ae,oe,ui,Ce,hi,Be,O,ne,mi,Le,gi,Fe;return f=new $i({}),M=new vi({props:{$$slots:{default:[oo]},$$scope:{ctx:L}}}),G=new $i({}),R=new ot({props:{name:"class diffusers.DiffusionPipeline",anchor:"diffusers.DiffusionPipeline",parameters:[],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipeline_utils.py#L77"}}),K=new ot({props:{name:"from_pretrained",anchor:"diffusers.DiffusionPipeline.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType]"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"diffusers.DiffusionPipeline.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>, <em>optional</em>) &#x2014;
Can be either:</p>
<ul>
<li>A string, the <em>repo id</em> of a pretrained pipeline hosted inside a model repo on
<a href="https://huggingface.co/" rel="nofollow">https://huggingface.co/</a> Valid repo ids have to be located under a user or organization name, like
<code>CompVis/ldm-text2im-large-256</code>.</li>
<li>A path to a <em>directory</em> containing pipeline weights saved using
<a href="/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.DiffusionPipeline.save_pretrained">save_pretrained()</a>, e.g., <code>./my_pipeline_directory/</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"},{anchor:"diffusers.DiffusionPipeline.from_pretrained.torch_dtype",description:`<strong>torch_dtype</strong> (<code>str</code> or <code>torch.dtype</code>, <em>optional</em>) &#x2014;
Override the default <code>torch.dtype</code> and load the model under this dtype. If <code>&quot;auto&quot;</code> is passed the dtype
will be automatically derived from the model&#x2019;s weights.`,name:"torch_dtype"},{anchor:"diffusers.DiffusionPipeline.from_pretrained.force_download",description:`<strong>force_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to force the (re-)download of the model weights and configuration files, overriding the
cached versions if they exist.`,name:"force_download"},{anchor:"diffusers.DiffusionPipeline.from_pretrained.resume_download",description:`<strong>resume_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to delete incompletely received files. Will attempt to resume the download if such a
file exists.`,name:"resume_download"},{anchor:"diffusers.DiffusionPipeline.from_pretrained.proxies",description:`<strong>proxies</strong> (<code>Dict[str, str]</code>, <em>optional</em>) &#x2014;
A dictionary of proxy servers to use by protocol or endpoint, e.g., <code>{&apos;http&apos;: &apos;foo.bar:3128&apos;, &apos;http://hostname&apos;: &apos;foo.bar:4012&apos;}</code>. The proxies are used on each request.`,name:"proxies"},{anchor:"diffusers.DiffusionPipeline.from_pretrained.output_loading_info(bool,",description:`<strong>output_loading_info(<code>bool</code>,</strong> <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to also return a dictionary containing missing keys, unexpected keys and error messages.`,name:"output_loading_info(bool,"},{anchor:"diffusers.DiffusionPipeline.from_pretrained.local_files_only(bool,",description:`<strong>local_files_only(<code>bool</code>,</strong> <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to only look at local files (i.e., do not try to download the model).`,name:"local_files_only(bool,"},{anchor:"diffusers.DiffusionPipeline.from_pretrained.use_auth_token",description:`<strong>use_auth_token</strong> (<code>str</code> or <em>bool</em>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files. If <code>True</code>, will use the token generated
when running <code>huggingface-cli login</code> (stored in <code>~/.huggingface</code>).`,name:"use_auth_token"},{anchor:"diffusers.DiffusionPipeline.from_pretrained.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;main&quot;</code>) &#x2014;
The specific model version to use. It can be a branch name, a tag name, or a commit id, since we use a
git-based system for storing models and other artifacts on huggingface.co, so <code>revision</code> can be any
identifier allowed by git.`,name:"revision"},{anchor:"diffusers.DiffusionPipeline.from_pretrained.mirror",description:`<strong>mirror</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Mirror source to accelerate downloads in China. If you are from China and have an accessibility
problem, you can set this option to resolve it. Note that we do not guarantee the timeliness or safety.
Please refer to the mirror site for more information. specify the folder name here.`,name:"mirror"},{anchor:"diffusers.DiffusionPipeline.from_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to overwrite load - and saveable variables - <em>i.e.</em> the pipeline components - of the
specific pipeline class. The overritten components are then directly passed to the pipelines <code>__init__</code>
method. See example below for more information.`,name:"kwargs"}],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipeline_utils.py#L185"}}),U=new vi({props:{$$slots:{default:[no]},$$scope:{ctx:L}}}),W=new vi({props:{$$slots:{default:[so]},$$scope:{ctx:L}}}),z=new io({props:{anchor:"diffusers.DiffusionPipeline.from_pretrained.example",$$slots:{default:[ao]},$$scope:{ctx:L}}}),te=new ot({props:{name:"save_pretrained",anchor:"diffusers.DiffusionPipeline.save_pretrained",parameters:[{name:"save_directory",val:": typing.Union[str, os.PathLike]"}],parametersDescription:[{anchor:"diffusers.DiffusionPipeline.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory to which to save. Will be created if it doesn&#x2019;t exist.`,name:"save_directory"}],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipeline_utils.py#L124"}}),oe=new $i({}),ne=new ot({props:{name:"class diffusers.pipeline_utils.ImagePipelineOutput",anchor:"diffusers.pipeline_utils.ImagePipelineOutput",parameters:[{name:"images",val:": typing.Union[typing.List[PIL.Image.Image], numpy.ndarray]"}],parametersDescription:[{anchor:"diffusers.pipeline_utils.ImagePipelineOutput.images",description:`<strong>images</strong> (<code>List[PIL.Image.Image]</code> or <code>np.ndarray</code>) &#x2014;
List of denoised PIL images of length <code>batch_size</code> or numpy array of shape <code>(batch_size, height, width, num_channels)</code>. PIL images or numpy array present the denoised images of the diffusion pipeline.`,name:"images"}],source:"https://github.com/huggingface/diffusers/blob/main/src/diffusers/pipeline_utils.py#L64"}}),{c(){l=o("meta"),_=p(),c=o("h1"),m=o("a"),w=o("span"),k(f.$$.fragment),g=p(),C=o("span"),nt=s("Pipelines"),Me=p(),S=o("p"),st=s("The "),ae=o("a"),at=s("DiffusionPipeline"),rt=s(" is the easiest way to load any pretrained diffusion pipeline from the "),H=o("a"),lt=s("Hub"),ft=s(" and to use it in inference."),Ne=p(),k(M.$$.fragment),Ve=p(),y=o("p"),pt=s("Any diffusion pipeline that is loaded with "),re=o("a"),dt=s("from_pretrained()"),ct=s(` will automatically
detect the pipeline type, `),ue=o("em"),ut=s("e.g."),ht=p(),le=o("a"),mt=s("StableDiffusionPipeline"),gt=s(` and consequently load each component of the
pipeline and pass them into the `),he=o("code"),_t=s("__init__"),vt=s(" function of the pipeline, "),me=o("em"),$t=s("e.g."),bt=p(),ge=o("code"),wt=s("__init__()"),yt=s("."),Ye=p(),N=o("p"),Pt=s("Any pipeline object can be saved locally with "),fe=o("a"),Dt=s("save_pretrained()"),Et=s("."),Ue=p(),X=o("h2"),V=o("a"),_e=o("span"),k(G.$$.fragment),kt=p(),ve=o("span"),xt=s("DiffusionPipeline"),We=p(),$=o("div"),k(R.$$.fragment),It=p(),$e=o("p"),jt=s("Base class for all models."),Tt=p(),pe=o("p"),de=o("a"),At=s("DiffusionPipeline"),Ct=s(` takes care of storing all components (models, schedulers, processors) for diffusion pipelines
and handles methods for loading, downloading and saving models as well as a few methods common to all pipelines to:`),Lt=p(),J=o("ul"),be=o("li"),St=s("move all PyTorch modules to the device of your choice"),Xt=p(),we=o("li"),qt=s("enabling/disabling the progress bar for the denoising iteration"),Ot=p(),ye=o("p"),Mt=s("Class attributes:"),Nt=p(),Pe=o("ul"),Y=o("li"),De=o("strong"),Vt=s("config_name"),Yt=s(" ("),Ee=o("code"),Ut=s("str"),Wt=s(`) \u2014 name of the config file that will store the class and module names of all
components of the diffusion pipeline.`),zt=p(),b=o("div"),k(K.$$.fragment),Bt=p(),ke=o("p"),Ft=s("Instantiate a PyTorch diffusion pipeline from pre-trained pipeline weights."),Ht=p(),Q=o("p"),Gt=s("The pipeline is set in evaluation mode by default using "),xe=o("code"),Rt=s("model.eval()"),Jt=s(" (Dropout modules are deactivated)."),Kt=p(),Z=o("p"),Qt=s("The warning "),Ie=o("em"),Zt=s("Weights from XXX not initialized from pretrained model"),ei=s(` means that the weights of XXX do not come
pretrained with the rest of the model. It is up to you to train those weights with a downstream fine-tuning
task.`),ti=p(),ee=o("p"),ii=s("The warning "),je=o("em"),oi=s("Weights from XXX not used in YYY"),ni=s(` means that the layer XXX is not used by YYY, therefore those
weights are discarded.`),si=p(),k(U.$$.fragment),ai=p(),k(W.$$.fragment),ri=p(),k(z.$$.fragment),li=p(),B=o("div"),k(te.$$.fragment),fi=p(),ie=o("p"),pi=s(`Save all variables of the pipeline that can be saved and loaded as well as the pipelines configuration file to
a directory. A pipeline variable can be saved and loaded if its class implements both a save and loading
method. The pipeline can easily be re-loaded using the `),Te=o("code"),di=s("[from_pretrained()](/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.DiffusionPipeline.from_pretrained)"),ci=s(" class method."),ze=p(),q=o("h2"),F=o("a"),Ae=o("span"),k(oe.$$.fragment),ui=p(),Ce=o("span"),hi=s("ImagePipelineOutput"),Be=s(`

By default diffusion pipelines return an object of class
`),O=o("div"),k(ne.$$.fragment),mi=p(),Le=o("p"),gi=s("Output class for image pipelines."),this.h()},l(t){const u=Qi('[data-svelte="svelte-1phssyn"]',document.head);l=n(u,"META",{name:!0,content:!0}),u.forEach(i),_=d(t),c=n(t,"H1",{class:!0});var se=r(c);m=n(se,"A",{id:!0,class:!0,href:!0});var Se=r(m);w=n(Se,"SPAN",{});var Xe=r(w);x(f.$$.fragment,Xe),Xe.forEach(i),Se.forEach(i),g=d(se),C=n(se,"SPAN",{});var qe=r(C);nt=a(qe,"Pipelines"),qe.forEach(i),se.forEach(i),Me=d(t),S=n(t,"P",{});var ce=r(S);st=a(ce,"The "),ae=n(ce,"A",{href:!0});var bi=r(ae);at=a(bi,"DiffusionPipeline"),bi.forEach(i),rt=a(ce," is the easiest way to load any pretrained diffusion pipeline from the "),H=n(ce,"A",{href:!0,rel:!0});var wi=r(H);lt=a(wi,"Hub"),wi.forEach(i),ft=a(ce," and to use it in inference."),ce.forEach(i),Ne=d(t),x(M.$$.fragment,t),Ve=d(t),y=n(t,"P",{});var E=r(y);pt=a(E,"Any diffusion pipeline that is loaded with "),re=n(E,"A",{href:!0});var yi=r(re);dt=a(yi,"from_pretrained()"),yi.forEach(i),ct=a(E,` will automatically
detect the pipeline type, `),ue=n(E,"EM",{});var Pi=r(ue);ut=a(Pi,"e.g."),Pi.forEach(i),ht=d(E),le=n(E,"A",{href:!0});var Di=r(le);mt=a(Di,"StableDiffusionPipeline"),Di.forEach(i),gt=a(E,` and consequently load each component of the
pipeline and pass them into the `),he=n(E,"CODE",{});var Ei=r(he);_t=a(Ei,"__init__"),Ei.forEach(i),vt=a(E," function of the pipeline, "),me=n(E,"EM",{});var ki=r(me);$t=a(ki,"e.g."),ki.forEach(i),bt=d(E),ge=n(E,"CODE",{});var xi=r(ge);wt=a(xi,"__init__()"),xi.forEach(i),yt=a(E,"."),E.forEach(i),Ye=d(t),N=n(t,"P",{});var He=r(N);Pt=a(He,"Any pipeline object can be saved locally with "),fe=n(He,"A",{href:!0});var Ii=r(fe);Dt=a(Ii,"save_pretrained()"),Ii.forEach(i),Et=a(He,"."),He.forEach(i),Ue=d(t),X=n(t,"H2",{class:!0});var Ge=r(X);V=n(Ge,"A",{id:!0,class:!0,href:!0});var ji=r(V);_e=n(ji,"SPAN",{});var Ti=r(_e);x(G.$$.fragment,Ti),Ti.forEach(i),ji.forEach(i),kt=d(Ge),ve=n(Ge,"SPAN",{});var Ai=r(ve);xt=a(Ai,"DiffusionPipeline"),Ai.forEach(i),Ge.forEach(i),We=d(t),$=n(t,"DIV",{class:!0});var P=r($);x(R.$$.fragment,P),It=d(P),$e=n(P,"P",{});var Ci=r($e);jt=a(Ci,"Base class for all models."),Ci.forEach(i),Tt=d(P),pe=n(P,"P",{});var _i=r(pe);de=n(_i,"A",{href:!0});var Li=r(de);At=a(Li,"DiffusionPipeline"),Li.forEach(i),Ct=a(_i,` takes care of storing all components (models, schedulers, processors) for diffusion pipelines
and handles methods for loading, downloading and saving models as well as a few methods common to all pipelines to:`),_i.forEach(i),Lt=d(P),J=n(P,"UL",{});var Re=r(J);be=n(Re,"LI",{});var Si=r(be);St=a(Si,"move all PyTorch modules to the device of your choice"),Si.forEach(i),Xt=d(Re),we=n(Re,"LI",{});var Xi=r(we);qt=a(Xi,"enabling/disabling the progress bar for the denoising iteration"),Xi.forEach(i),Re.forEach(i),Ot=d(P),ye=n(P,"P",{});var qi=r(ye);Mt=a(qi,"Class attributes:"),qi.forEach(i),Nt=d(P),Pe=n(P,"UL",{});var Oi=r(Pe);Y=n(Oi,"LI",{});var Oe=r(Y);De=n(Oe,"STRONG",{});var Mi=r(De);Vt=a(Mi,"config_name"),Mi.forEach(i),Yt=a(Oe," ("),Ee=n(Oe,"CODE",{});var Ni=r(Ee);Ut=a(Ni,"str"),Ni.forEach(i),Wt=a(Oe,`) \u2014 name of the config file that will store the class and module names of all
components of the diffusion pipeline.`),Oe.forEach(i),Oi.forEach(i),zt=d(P),b=n(P,"DIV",{class:!0});var D=r(b);x(K.$$.fragment,D),Bt=d(D),ke=n(D,"P",{});var Vi=r(ke);Ft=a(Vi,"Instantiate a PyTorch diffusion pipeline from pre-trained pipeline weights."),Vi.forEach(i),Ht=d(D),Q=n(D,"P",{});var Je=r(Q);Gt=a(Je,"The pipeline is set in evaluation mode by default using "),xe=n(Je,"CODE",{});var Yi=r(xe);Rt=a(Yi,"model.eval()"),Yi.forEach(i),Jt=a(Je," (Dropout modules are deactivated)."),Je.forEach(i),Kt=d(D),Z=n(D,"P",{});var Ke=r(Z);Qt=a(Ke,"The warning "),Ie=n(Ke,"EM",{});var Ui=r(Ie);Zt=a(Ui,"Weights from XXX not initialized from pretrained model"),Ui.forEach(i),ei=a(Ke,` means that the weights of XXX do not come
pretrained with the rest of the model. It is up to you to train those weights with a downstream fine-tuning
task.`),Ke.forEach(i),ti=d(D),ee=n(D,"P",{});var Qe=r(ee);ii=a(Qe,"The warning "),je=n(Qe,"EM",{});var Wi=r(je);oi=a(Wi,"Weights from XXX not used in YYY"),Wi.forEach(i),ni=a(Qe,` means that the layer XXX is not used by YYY, therefore those
weights are discarded.`),Qe.forEach(i),si=d(D),x(U.$$.fragment,D),ai=d(D),x(W.$$.fragment,D),ri=d(D),x(z.$$.fragment,D),D.forEach(i),li=d(P),B=n(P,"DIV",{class:!0});var Ze=r(B);x(te.$$.fragment,Ze),fi=d(Ze),ie=n(Ze,"P",{});var et=r(ie);pi=a(et,`Save all variables of the pipeline that can be saved and loaded as well as the pipelines configuration file to
a directory. A pipeline variable can be saved and loaded if its class implements both a save and loading
method. The pipeline can easily be re-loaded using the `),Te=n(et,"CODE",{});var zi=r(Te);di=a(zi,"[from_pretrained()](/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.DiffusionPipeline.from_pretrained)"),zi.forEach(i),ci=a(et," class method."),et.forEach(i),Ze.forEach(i),P.forEach(i),ze=d(t),q=n(t,"H2",{class:!0});var tt=r(q);F=n(tt,"A",{id:!0,class:!0,href:!0});var Bi=r(F);Ae=n(Bi,"SPAN",{});var Fi=r(Ae);x(oe.$$.fragment,Fi),Fi.forEach(i),Bi.forEach(i),ui=d(tt),Ce=n(tt,"SPAN",{});var Hi=r(Ce);hi=a(Hi,"ImagePipelineOutput"),Hi.forEach(i),tt.forEach(i),Be=a(t,`

By default diffusion pipelines return an object of class
`),O=n(t,"DIV",{class:!0});var it=r(O);x(ne.$$.fragment,it),mi=d(it),Le=n(it,"P",{});var Gi=r(Le);gi=a(Gi,"Output class for image pipelines."),Gi.forEach(i),it.forEach(i),this.h()},h(){h(l,"name","hf:doc:metadata"),h(l,"content",JSON.stringify(lo)),h(m,"id","pipelines"),h(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(m,"href","#pipelines"),h(c,"class","relative group"),h(ae,"href","/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.DiffusionPipeline"),h(H,"href","https://huggingface.co/models?library=diffusers"),h(H,"rel","nofollow"),h(re,"href","/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.DiffusionPipeline.from_pretrained"),h(le,"href","/docs/diffusers/main/en/api/pipelines/stable_diffusion#diffusers.StableDiffusionPipeline"),h(fe,"href","/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.DiffusionPipeline.save_pretrained"),h(V,"id","diffusers.DiffusionPipeline"),h(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(V,"href","#diffusers.DiffusionPipeline"),h(X,"class","relative group"),h(de,"href","/docs/diffusers/main/en/api/diffusion_pipeline#diffusers.DiffusionPipeline"),h(b,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(F,"id","diffusers.pipeline_utils.ImagePipelineOutput"),h(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(F,"href","#diffusers.pipeline_utils.ImagePipelineOutput"),h(q,"class","relative group"),h(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,u){e(document.head,l),v(t,_,u),v(t,c,u),e(c,m),e(m,w),I(f,w,null),e(c,g),e(c,C),e(C,nt),v(t,Me,u),v(t,S,u),e(S,st),e(S,ae),e(ae,at),e(S,rt),e(S,H),e(H,lt),e(S,ft),v(t,Ne,u),I(M,t,u),v(t,Ve,u),v(t,y,u),e(y,pt),e(y,re),e(re,dt),e(y,ct),e(y,ue),e(ue,ut),e(y,ht),e(y,le),e(le,mt),e(y,gt),e(y,he),e(he,_t),e(y,vt),e(y,me),e(me,$t),e(y,bt),e(y,ge),e(ge,wt),e(y,yt),v(t,Ye,u),v(t,N,u),e(N,Pt),e(N,fe),e(fe,Dt),e(N,Et),v(t,Ue,u),v(t,X,u),e(X,V),e(V,_e),I(G,_e,null),e(X,kt),e(X,ve),e(ve,xt),v(t,We,u),v(t,$,u),I(R,$,null),e($,It),e($,$e),e($e,jt),e($,Tt),e($,pe),e(pe,de),e(de,At),e(pe,Ct),e($,Lt),e($,J),e(J,be),e(be,St),e(J,Xt),e(J,we),e(we,qt),e($,Ot),e($,ye),e(ye,Mt),e($,Nt),e($,Pe),e(Pe,Y),e(Y,De),e(De,Vt),e(Y,Yt),e(Y,Ee),e(Ee,Ut),e(Y,Wt),e($,zt),e($,b),I(K,b,null),e(b,Bt),e(b,ke),e(ke,Ft),e(b,Ht),e(b,Q),e(Q,Gt),e(Q,xe),e(xe,Rt),e(Q,Jt),e(b,Kt),e(b,Z),e(Z,Qt),e(Z,Ie),e(Ie,Zt),e(Z,ei),e(b,ti),e(b,ee),e(ee,ii),e(ee,je),e(je,oi),e(ee,ni),e(b,si),I(U,b,null),e(b,ai),I(W,b,null),e(b,ri),I(z,b,null),e($,li),e($,B),I(te,B,null),e(B,fi),e(B,ie),e(ie,pi),e(ie,Te),e(Te,di),e(ie,ci),v(t,ze,u),v(t,q,u),e(q,F),e(F,Ae),I(oe,Ae,null),e(q,ui),e(q,Ce),e(Ce,hi),v(t,Be,u),v(t,O,u),I(ne,O,null),e(O,mi),e(O,Le),e(Le,gi),Fe=!0},p(t,[u]){const se={};u&2&&(se.$$scope={dirty:u,ctx:t}),M.$set(se);const Se={};u&2&&(Se.$$scope={dirty:u,ctx:t}),U.$set(Se);const Xe={};u&2&&(Xe.$$scope={dirty:u,ctx:t}),W.$set(Xe);const qe={};u&2&&(qe.$$scope={dirty:u,ctx:t}),z.$set(qe)},i(t){Fe||(j(f.$$.fragment,t),j(M.$$.fragment,t),j(G.$$.fragment,t),j(R.$$.fragment,t),j(K.$$.fragment,t),j(U.$$.fragment,t),j(W.$$.fragment,t),j(z.$$.fragment,t),j(te.$$.fragment,t),j(oe.$$.fragment,t),j(ne.$$.fragment,t),Fe=!0)},o(t){T(f.$$.fragment,t),T(M.$$.fragment,t),T(G.$$.fragment,t),T(R.$$.fragment,t),T(K.$$.fragment,t),T(U.$$.fragment,t),T(W.$$.fragment,t),T(z.$$.fragment,t),T(te.$$.fragment,t),T(oe.$$.fragment,t),T(ne.$$.fragment,t),Fe=!1},d(t){i(l),t&&i(_),t&&i(c),A(f),t&&i(Me),t&&i(S),t&&i(Ne),A(M,t),t&&i(Ve),t&&i(y),t&&i(Ye),t&&i(N),t&&i(Ue),t&&i(X),A(G),t&&i(We),t&&i($),A(R),A(K),A(U),A(W),A(z),A(te),t&&i(ze),t&&i(q),A(oe),t&&i(Be),t&&i(O),A(ne)}}}const lo={local:"pipelines",sections:[{local:"diffusers.DiffusionPipeline",title:"DiffusionPipeline"},{local:"diffusers.pipeline_utils.ImagePipelineOutput",title:"ImagePipelineOutput"}],title:"Pipelines"};function fo(L){return Zi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class _o extends Ri{constructor(l){super();Ji(this,l,fo,ro,Ki,{})}}export{_o as default,lo as metadata};
