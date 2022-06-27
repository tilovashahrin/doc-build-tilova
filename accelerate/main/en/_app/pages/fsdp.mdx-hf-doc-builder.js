import{S as yt,i as bt,s as vt,e as l,k as d,w as _,t as n,M as Pt,c as o,d as a,m as h,a as s,x as g,h as i,b as m,G as t,g as p,y as w,L as $t,q as y,o as b,B as v,v as Dt}from"../chunks/vendor-hf-doc-builder.js";import{D as St}from"../chunks/Docstring-hf-doc-builder.js";import{C as Q}from"../chunks/CodeBlock-hf-doc-builder.js";import{I as Wa}from"../chunks/IconCopyLink-hf-doc-builder.js";function Et(Ia){let P,$e,$,F,ae,j,Xe,te,Ye,De,A,Ze,N,ea,aa,Se,D,k,re,O,ta,le,ra,Ee,J,la,Fe,H,Ae,V,oa,ke,W,xe,X,sa,ze,I,Le,M,Ce,x,na,oe,ia,pa,Te,q,je,S,z,se,U,da,ne,ha,Ne,Y,L,ma,ie,ca,fa,pe,de,ua,Oe,Z,_a,He,R,We,ee,u,he,ga,wa,me,ce,ya,ba,fe,va,Pa,G,Ie,C,ue,$a,Da,_e,Sa,Me,c,Ea,ge,Fa,Aa,we,ka,xa,ye,za,La,be,Ca,Ta,B,ja,Na,qe,E,K,Oa,ve,Ha,Ue;return j=new Wa({}),O=new Wa({}),H=new Q({props:{code:"accelerate config",highlighted:"accelerate config"}}),W=new Q({props:{code:"accelerate launch my_script.py --args_to_my_script",highlighted:"accelerate launch my_script.py --args_to_my_script"}}),I=new Q({props:{code:`compute_environment: LOCAL_MACHINE
deepspeed_config: {}
distributed_type: FSDP
fsdp_config:
  min_num_params: 2000
  offload_params: false
  sharding_strategy: 1
machine_rank: 0
main_process_ip: null
main_process_port: null
main_training_function: main
mixed_precision: 'no'
num_machines: 1
num_processes: 2
use_cpu: false`,highlighted:`compute_environment: LOCAL_MACHINE
deepspeed_config: {}
distributed_type: FSDP
fsdp_config:
  min_num_params: 2000
  offload_params: <span class="hljs-literal">false</span>
  sharding_strategy: 1
machine_rank: 0
main_process_ip: null
main_process_port: null
main_training_function: main
mixed_precision: <span class="hljs-string">&#x27;no&#x27;</span>
num_machines: 1
num_processes: 2
use_cpu: <span class="hljs-literal">false</span>`}}),M=new Q({props:{code:"accelerate launch examples/nlp_example.py",highlighted:"accelerate launch examples/nlp_example.py"}}),q=new Q({props:{code:"`Sharding Strategy`: [1] FULL_SHARD, [2] SHARD_GRAD_OP\n`Min Num Params`: FSDP\\'s minimum number of parameters for Default Auto Wrapping.\n`Offload Params`: Decides Whether to offload parameters and gradients to CPU.",highlighted:'`Sharding Strategy`: [1] FULL_SHARD, [2] SHARD_GRAD_OP\n`Min Num Params`: FSDP\\<span class="hljs-string">&#x27;s minimum number of parameters for Default Auto Wrapping.\n`Offload Params`: Decides Whether to offload parameters and gradients to CPU.</span>'}}),U=new Wa({}),R=new Q({props:{code:`


`,highlighted:`model = AutoModelForSequenceClassification.from_pretrained(&quot;bert-base-cased&quot;, return_dict=True)
<span class="hljs-addition">+ model = accelerator.prepare(model)</span>

optimizer = torch.optim.AdamW(params=model.parameters(), lr=lr)

<span class="hljs-deletion">- model, optimizer, train_dataloader, eval_dataloader, lr_scheduler = accelerator.prepare(model,</span>
<span class="hljs-deletion">-        optimizer, train_dataloader, eval_dataloader, lr_scheduler</span>
<span class="hljs-deletion">-    )</span>

<span class="hljs-addition">+ optimizer, train_dataloader, eval_dataloader, lr_scheduler = accelerator.prepare(</span>
<span class="hljs-addition">+         optimizer, train_dataloader, eval_dataloader, lr_scheduler</span>
<span class="hljs-addition">+        )</span>
`}}),G=new Q({props:{code:`{
  '_fsdp_wrapped_module.flat_param': torch.Size([494209]), 
  '_fsdp_wrapped_module._fpw_module.bert.embeddings.word_embeddings._fsdp_wrapped_module.flat_param': torch.Size([11720448]), 
  '_fsdp_wrapped_module._fpw_module.bert.encoder._fsdp_wrapped_module.flat_param': torch.Size([42527232])
}`,highlighted:`{
  <span class="hljs-string">&#x27;_fsdp_wrapped_module.flat_param&#x27;</span>: torch<span class="hljs-selector-class">.Size</span>(<span class="hljs-selector-attr">[494209]</span>), 
  <span class="hljs-string">&#x27;_fsdp_wrapped_module._fpw_module.bert.embeddings.word_embeddings._fsdp_wrapped_module.flat_param&#x27;</span>: torch<span class="hljs-selector-class">.Size</span>(<span class="hljs-selector-attr">[11720448]</span>), 
  <span class="hljs-string">&#x27;_fsdp_wrapped_module._fpw_module.bert.encoder._fsdp_wrapped_module.flat_param&#x27;</span>: torch<span class="hljs-selector-class">.Size</span>(<span class="hljs-selector-attr">[42527232]</span>)
}`}}),K=new St({props:{name:"class accelerate.FullyShardedDataParallelPlugin",anchor:"accelerate.FullyShardedDataParallelPlugin",parameters:[{name:"sharding_strategy",val:": typing.Any = None"},{name:"backward_prefetch",val:": typing.Any = None"},{name:"auto_wrap_policy",val:": typing.Any = None"},{name:"cpu_offload",val:": typing.Optional[typing.Callable] = None"},{name:"min_num_params",val:": int = None"},{name:"ignored_modules",val:": typing.Optional[typing.Iterable[torch.nn.modules.module.Module]] = None"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/utils/dataclasses.py#L414"}}),{c(){P=l("meta"),$e=d(),$=l("h1"),F=l("a"),ae=l("span"),_(j.$$.fragment),Xe=d(),te=l("span"),Ye=n("Fully Sharded Data Parallel"),De=d(),A=l("p"),Ze=n(`To accelerate training huge models on larger batch sizes, we can use a fully sharded data parallel model.
This type of data parallel paradigm enables fitting more data and larger models by sharding the optimizer states, gradients and parameters.
To read more about it and the benefits, check out the `),N=l("a"),ea=n("Fully Sharded Data Parallel blog"),aa=n(`.
We have integrated the latest PyTorch\u2019s Fully Sharded Data Parallel (FSDP) training feature.
All you need to do is enable it through the config.`),Se=d(),D=l("h2"),k=l("a"),re=l("span"),_(O.$$.fragment),ta=d(),le=l("span"),ra=n("How it works out of the box"),Ee=d(),J=l("p"),la=n("On your machine(s) just run:"),Fe=d(),_(H.$$.fragment),Ae=d(),V=l("p"),oa=n(`and answer the questions asked. This will generate a config file that will be used automatically to properly set the
default options when doing`),ke=d(),_(W.$$.fragment),xe=d(),X=l("p"),sa=n("For instance, here is how you would run the NLP example (from the root of the repo) with FSDP enabled:"),ze=d(),_(I.$$.fragment),Le=d(),_(M.$$.fragment),Ce=d(),x=l("p"),na=n("Currently, "),oe=l("code"),ia=n("Accelerate"),pa=n(" supports the following config through the CLI:"),Te=d(),_(q.$$.fragment),je=d(),S=l("h2"),z=l("a"),se=l("span"),_(U.$$.fragment),da=d(),ne=l("span"),ha=n("A few caveats to be aware of"),Ne=d(),Y=l("ul"),L=l("li"),ma=n(`PyTorch FSDP auto wraps sub-modules, flattens the parameters and shards the parameters in place.
Due to this, any optimizer created before model wrapping gets broken and occupies more memory.
Hence, it is highly recommended and efficient to prepare the model before creating the optimizer.
`),ie=l("code"),ca=n("Accelerate"),fa=n(" will automatically wrap the model and create an optimizer for you in case of single model with a warning message."),pe=l("blockquote"),de=l("p"),ua=n("FSDP Warning: When using FSDP, it is efficient and recommended to call prepare for the model before creating the optimizer"),Oe=d(),Z=l("p"),_a=n("However, below is the recommended way to prepare model and optimizer while using FSDP:"),He=d(),_(R.$$.fragment),We=d(),ee=l("ul"),u=l("li"),he=l("p"),ga=n(`In case of a single model, if you have created the optimizer with multiple parameter groups and called prepare with them together,
then the parameter groups will be lost and the following warning is displayed:`),wa=d(),me=l("blockquote"),ce=l("p"),ya=n(`FSDP Warning: When using FSDP, several parameter groups will be conflated into
a single one due to nested module wrapping and parameter flattening.`),ba=d(),fe=l("p"),va=n(`This is because parameter groups created before wrapping will have no meaning post wrapping due to parameter flattening of nested FSDP modules into 1D arrays (which can consume many layers).
For instance, below are the named parameters of an FSDP model on GPU 0 (When using 2 GPUs. Around 55M (110M/2) params in 1D arrays as this will have the 1st shard of the parameters).
Here, if one has applied no weight decay for [bias, LayerNorm.weight] the named parameters of an unwrapped BERT model,
it can\u2019t be applied to the below FSDP wrapped model as there are no named parameters with either of those strings and
the parameters of those layers are concatenated with parameters of various other layers.`),Pa=d(),_(G.$$.fragment),Ie=d(),C=l("ul"),ue=l("li"),$a=n("In case of multiple models, it is necessary to prepare the models before creating optimizers or else it will throw an error."),Da=d(),_e=l("li"),Sa=n("Mixed precision is currently not supported with FSDP."),Me=d(),c=l("p"),Ea=n("For more control, users can leverage the "),ge=l("code"),Fa=n("FullyShardedDataParallelPlugin"),Aa=n(" wherein they can specify "),we=l("code"),ka=n("auto_wrap_policy"),xa=n(", "),ye=l("code"),za=n("backward_prefetch"),La=n(" and "),be=l("code"),Ca=n("ignored_modules"),Ta=n(`.
After creating an instance of this class, users can pass it to the Accelerator class instantiation.
For more information on these options, please refer to the PyTorch `),B=l("a"),ja=n("FullyShardedDataParallel"),Na=n(" code."),qe=d(),E=l("div"),_(K.$$.fragment),Oa=d(),ve=l("p"),Ha=n("This plugin is used to enable fully sharded data parallelism."),this.h()},l(e){const r=Pt('[data-svelte="svelte-1phssyn"]',document.head);P=o(r,"META",{name:!0,content:!0}),r.forEach(a),$e=h(e),$=o(e,"H1",{class:!0});var Re=s($);F=o(Re,"A",{id:!0,class:!0,href:!0});var Ma=s(F);ae=o(Ma,"SPAN",{});var qa=s(ae);g(j.$$.fragment,qa),qa.forEach(a),Ma.forEach(a),Xe=h(Re),te=o(Re,"SPAN",{});var Ua=s(te);Ye=i(Ua,"Fully Sharded Data Parallel"),Ua.forEach(a),Re.forEach(a),De=h(e),A=o(e,"P",{});var Ge=s(A);Ze=i(Ge,`To accelerate training huge models on larger batch sizes, we can use a fully sharded data parallel model.
This type of data parallel paradigm enables fitting more data and larger models by sharding the optimizer states, gradients and parameters.
To read more about it and the benefits, check out the `),N=o(Ge,"A",{href:!0,rel:!0});var Ra=s(N);ea=i(Ra,"Fully Sharded Data Parallel blog"),Ra.forEach(a),aa=i(Ge,`.
We have integrated the latest PyTorch\u2019s Fully Sharded Data Parallel (FSDP) training feature.
All you need to do is enable it through the config.`),Ge.forEach(a),Se=h(e),D=o(e,"H2",{class:!0});var Be=s(D);k=o(Be,"A",{id:!0,class:!0,href:!0});var Ga=s(k);re=o(Ga,"SPAN",{});var Ba=s(re);g(O.$$.fragment,Ba),Ba.forEach(a),Ga.forEach(a),ta=h(Be),le=o(Be,"SPAN",{});var Ka=s(le);ra=i(Ka,"How it works out of the box"),Ka.forEach(a),Be.forEach(a),Ee=h(e),J=o(e,"P",{});var Qa=s(J);la=i(Qa,"On your machine(s) just run:"),Qa.forEach(a),Fe=h(e),g(H.$$.fragment,e),Ae=h(e),V=o(e,"P",{});var Ja=s(V);oa=i(Ja,`and answer the questions asked. This will generate a config file that will be used automatically to properly set the
default options when doing`),Ja.forEach(a),ke=h(e),g(W.$$.fragment,e),xe=h(e),X=o(e,"P",{});var Va=s(X);sa=i(Va,"For instance, here is how you would run the NLP example (from the root of the repo) with FSDP enabled:"),Va.forEach(a),ze=h(e),g(I.$$.fragment,e),Le=h(e),g(M.$$.fragment,e),Ce=h(e),x=o(e,"P",{});var Ke=s(x);na=i(Ke,"Currently, "),oe=o(Ke,"CODE",{});var Xa=s(oe);ia=i(Xa,"Accelerate"),Xa.forEach(a),pa=i(Ke," supports the following config through the CLI:"),Ke.forEach(a),Te=h(e),g(q.$$.fragment,e),je=h(e),S=o(e,"H2",{class:!0});var Qe=s(S);z=o(Qe,"A",{id:!0,class:!0,href:!0});var Ya=s(z);se=o(Ya,"SPAN",{});var Za=s(se);g(U.$$.fragment,Za),Za.forEach(a),Ya.forEach(a),da=h(Qe),ne=o(Qe,"SPAN",{});var et=s(ne);ha=i(et,"A few caveats to be aware of"),et.forEach(a),Qe.forEach(a),Ne=h(e),Y=o(e,"UL",{});var at=s(Y);L=o(at,"LI",{});var Pe=s(L);ma=i(Pe,`PyTorch FSDP auto wraps sub-modules, flattens the parameters and shards the parameters in place.
Due to this, any optimizer created before model wrapping gets broken and occupies more memory.
Hence, it is highly recommended and efficient to prepare the model before creating the optimizer.
`),ie=o(Pe,"CODE",{});var tt=s(ie);ca=i(tt,"Accelerate"),tt.forEach(a),fa=i(Pe," will automatically wrap the model and create an optimizer for you in case of single model with a warning message."),pe=o(Pe,"BLOCKQUOTE",{});var rt=s(pe);de=o(rt,"P",{});var lt=s(de);ua=i(lt,"FSDP Warning: When using FSDP, it is efficient and recommended to call prepare for the model before creating the optimizer"),lt.forEach(a),rt.forEach(a),Pe.forEach(a),at.forEach(a),Oe=h(e),Z=o(e,"P",{});var ot=s(Z);_a=i(ot,"However, below is the recommended way to prepare model and optimizer while using FSDP:"),ot.forEach(a),He=h(e),g(R.$$.fragment,e),We=h(e),ee=o(e,"UL",{});var st=s(ee);u=o(st,"LI",{});var T=s(u);he=o(T,"P",{});var nt=s(he);ga=i(nt,`In case of a single model, if you have created the optimizer with multiple parameter groups and called prepare with them together,
then the parameter groups will be lost and the following warning is displayed:`),nt.forEach(a),wa=h(T),me=o(T,"BLOCKQUOTE",{});var it=s(me);ce=o(it,"P",{});var pt=s(ce);ya=i(pt,`FSDP Warning: When using FSDP, several parameter groups will be conflated into
a single one due to nested module wrapping and parameter flattening.`),pt.forEach(a),it.forEach(a),ba=h(T),fe=o(T,"P",{});var dt=s(fe);va=i(dt,`This is because parameter groups created before wrapping will have no meaning post wrapping due to parameter flattening of nested FSDP modules into 1D arrays (which can consume many layers).
For instance, below are the named parameters of an FSDP model on GPU 0 (When using 2 GPUs. Around 55M (110M/2) params in 1D arrays as this will have the 1st shard of the parameters).
Here, if one has applied no weight decay for [bias, LayerNorm.weight] the named parameters of an unwrapped BERT model,
it can\u2019t be applied to the below FSDP wrapped model as there are no named parameters with either of those strings and
the parameters of those layers are concatenated with parameters of various other layers.`),dt.forEach(a),Pa=h(T),g(G.$$.fragment,T),T.forEach(a),st.forEach(a),Ie=h(e),C=o(e,"UL",{});var Je=s(C);ue=o(Je,"LI",{});var ht=s(ue);$a=i(ht,"In case of multiple models, it is necessary to prepare the models before creating optimizers or else it will throw an error."),ht.forEach(a),Da=h(Je),_e=o(Je,"LI",{});var mt=s(_e);Sa=i(mt,"Mixed precision is currently not supported with FSDP."),mt.forEach(a),Je.forEach(a),Me=h(e),c=o(e,"P",{});var f=s(c);Ea=i(f,"For more control, users can leverage the "),ge=o(f,"CODE",{});var ct=s(ge);Fa=i(ct,"FullyShardedDataParallelPlugin"),ct.forEach(a),Aa=i(f," wherein they can specify "),we=o(f,"CODE",{});var ft=s(we);ka=i(ft,"auto_wrap_policy"),ft.forEach(a),xa=i(f,", "),ye=o(f,"CODE",{});var ut=s(ye);za=i(ut,"backward_prefetch"),ut.forEach(a),La=i(f," and "),be=o(f,"CODE",{});var _t=s(be);Ca=i(_t,"ignored_modules"),_t.forEach(a),Ta=i(f,`.
After creating an instance of this class, users can pass it to the Accelerator class instantiation.
For more information on these options, please refer to the PyTorch `),B=o(f,"A",{href:!0,rel:!0});var gt=s(B);ja=i(gt,"FullyShardedDataParallel"),gt.forEach(a),Na=i(f," code."),f.forEach(a),qe=h(e),E=o(e,"DIV",{class:!0});var Ve=s(E);g(K.$$.fragment,Ve),Oa=h(Ve),ve=o(Ve,"P",{});var wt=s(ve);Ha=i(wt,"This plugin is used to enable fully sharded data parallelism."),wt.forEach(a),Ve.forEach(a),this.h()},h(){m(P,"name","hf:doc:metadata"),m(P,"content",JSON.stringify(Ft)),m(F,"id","fully-sharded-data-parallel"),m(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(F,"href","#fully-sharded-data-parallel"),m($,"class","relative group"),m(N,"href","https://pytorch.org/blog/introducing-pytorch-fully-sharded-data-parallel-api/"),m(N,"rel","nofollow"),m(k,"id","how-it-works-out-of-the-box"),m(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(k,"href","#how-it-works-out-of-the-box"),m(D,"class","relative group"),m(z,"id","accelerate.FullyShardedDataParallelPlugin"),m(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(z,"href","#accelerate.FullyShardedDataParallelPlugin"),m(S,"class","relative group"),m(B,"href","https://github.com/pytorch/pytorch/blob/0df2e863fbd5993a7b9e652910792bd21a516ff3/torch/distributed/fsdp/fully_sharded_data_parallel.py#L236"),m(B,"rel","nofollow"),m(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,r){t(document.head,P),p(e,$e,r),p(e,$,r),t($,F),t(F,ae),w(j,ae,null),t($,Xe),t($,te),t(te,Ye),p(e,De,r),p(e,A,r),t(A,Ze),t(A,N),t(N,ea),t(A,aa),p(e,Se,r),p(e,D,r),t(D,k),t(k,re),w(O,re,null),t(D,ta),t(D,le),t(le,ra),p(e,Ee,r),p(e,J,r),t(J,la),p(e,Fe,r),w(H,e,r),p(e,Ae,r),p(e,V,r),t(V,oa),p(e,ke,r),w(W,e,r),p(e,xe,r),p(e,X,r),t(X,sa),p(e,ze,r),w(I,e,r),p(e,Le,r),w(M,e,r),p(e,Ce,r),p(e,x,r),t(x,na),t(x,oe),t(oe,ia),t(x,pa),p(e,Te,r),w(q,e,r),p(e,je,r),p(e,S,r),t(S,z),t(z,se),w(U,se,null),t(S,da),t(S,ne),t(ne,ha),p(e,Ne,r),p(e,Y,r),t(Y,L),t(L,ma),t(L,ie),t(ie,ca),t(L,fa),t(L,pe),t(pe,de),t(de,ua),p(e,Oe,r),p(e,Z,r),t(Z,_a),p(e,He,r),w(R,e,r),p(e,We,r),p(e,ee,r),t(ee,u),t(u,he),t(he,ga),t(u,wa),t(u,me),t(me,ce),t(ce,ya),t(u,ba),t(u,fe),t(fe,va),t(u,Pa),w(G,u,null),p(e,Ie,r),p(e,C,r),t(C,ue),t(ue,$a),t(C,Da),t(C,_e),t(_e,Sa),p(e,Me,r),p(e,c,r),t(c,Ea),t(c,ge),t(ge,Fa),t(c,Aa),t(c,we),t(we,ka),t(c,xa),t(c,ye),t(ye,za),t(c,La),t(c,be),t(be,Ca),t(c,Ta),t(c,B),t(B,ja),t(c,Na),p(e,qe,r),p(e,E,r),w(K,E,null),t(E,Oa),t(E,ve),t(ve,Ha),Ue=!0},p:$t,i(e){Ue||(y(j.$$.fragment,e),y(O.$$.fragment,e),y(H.$$.fragment,e),y(W.$$.fragment,e),y(I.$$.fragment,e),y(M.$$.fragment,e),y(q.$$.fragment,e),y(U.$$.fragment,e),y(R.$$.fragment,e),y(G.$$.fragment,e),y(K.$$.fragment,e),Ue=!0)},o(e){b(j.$$.fragment,e),b(O.$$.fragment,e),b(H.$$.fragment,e),b(W.$$.fragment,e),b(I.$$.fragment,e),b(M.$$.fragment,e),b(q.$$.fragment,e),b(U.$$.fragment,e),b(R.$$.fragment,e),b(G.$$.fragment,e),b(K.$$.fragment,e),Ue=!1},d(e){a(P),e&&a($e),e&&a($),v(j),e&&a(De),e&&a(A),e&&a(Se),e&&a(D),v(O),e&&a(Ee),e&&a(J),e&&a(Fe),v(H,e),e&&a(Ae),e&&a(V),e&&a(ke),v(W,e),e&&a(xe),e&&a(X),e&&a(ze),v(I,e),e&&a(Le),v(M,e),e&&a(Ce),e&&a(x),e&&a(Te),v(q,e),e&&a(je),e&&a(S),v(U),e&&a(Ne),e&&a(Y),e&&a(Oe),e&&a(Z),e&&a(He),v(R,e),e&&a(We),e&&a(ee),v(G),e&&a(Ie),e&&a(C),e&&a(Me),e&&a(c),e&&a(qe),e&&a(E),v(K)}}}const Ft={local:"fully-sharded-data-parallel",sections:[{local:"how-it-works-out-of-the-box",title:"How it works out of the box"},{local:"accelerate.FullyShardedDataParallelPlugin",title:"A few caveats to be aware of"}],title:"Fully Sharded Data Parallel"};function At(Ia){return Dt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ct extends yt{constructor(P){super();bt(this,P,At,Et,vt,{})}}export{Ct as default,Ft as metadata};
