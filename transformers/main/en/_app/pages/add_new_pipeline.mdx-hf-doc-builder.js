import{S as tl,i as sl,s as al,e as l,k as d,w as le,t as a,M as ol,c as n,d as s,m as c,a as r,x as ne,h as o,b as f,G as e,g as p,y as re,L as ll,q as ie,o as pe,B as de,v as nl}from"../chunks/vendor-hf-doc-builder.js";import{I as Ka}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as Qa}from"../chunks/CodeBlock-hf-doc-builder.js";function rl(Va){let C,ft,D,A,ce,R,Jt,he,Rt,mt,b,Bt,ue,Ft,Kt,fe,Qt,Vt,_t,m,Wt,me,Zt,es,_e,ts,ss,we,as,os,wt,h,ls,ve,ns,rs,ye,is,ps,Ee,ds,cs,ke,hs,us,be,fs,ms,vt,B,yt,ee,_s,Et,T,ge,ws,vs,je,ys,Es,kt,E,qe,ks,bs,Ce,gs,js,De,qs,Cs,bt,O,Te,Ds,Ts,Oe,Os,$s,gt,k,$e,Ps,As,Pe,Ss,Is,Ae,xs,Ns,jt,u,zs,Se,Ls,Us,Ie,Hs,Ms,xe,Ys,Xs,Ne,Gs,Js,qt,S,Rs,ze,Bs,Fs,Ct,F,Dt,_,Ks,Le,Qs,Vs,Ue,Ws,Zs,He,ea,ta,Tt,K,Ot,te,sa,$t,$,I,Me,Q,aa,Ye,oa,Pt,g,la,Xe,na,ra,Ge,ia,pa,At,P,x,Je,V,da,Re,ca,St,N,ha,Be,ua,fa,It,w,ma,Fe,_a,wa,Ke,va,ya,Qe,Ea,ka,xt,j,ba,Ve,ga,ja,We,qa,Ca,Nt,z,Da,Ze,Ta,Oa,zt,v,L,et,$a,Pa,tt,Aa,Sa,Ia,U,st,xa,Na,at,za,La,Ua,H,ot,Ha,Ma,lt,Ya,Xa,Ga,M,nt,Ja,Ra,rt,Ba,Fa,Lt;return R=new Ka({}),B=new Qa({props:{code:`



`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Pipeline


<span class="hljs-keyword">class</span> <span class="hljs-title class_">MyPipeline</span>(<span class="hljs-title class_ inherited__">Pipeline</span>):
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">_sanitize_parameters</span>(<span class="hljs-params">self, **kwargs</span>):
        preprocess_kwargs = {}
        <span class="hljs-keyword">if</span> <span class="hljs-string">&quot;maybe_arg&quot;</span> <span class="hljs-keyword">in</span> kwargs:
            preprocess_kwargs[<span class="hljs-string">&quot;maybe_arg&quot;</span>] = kwargs[<span class="hljs-string">&quot;maybe_arg&quot;</span>]
        <span class="hljs-keyword">return</span> preprocess_kwargs, {}, {}

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess</span>(<span class="hljs-params">self, inputs, maybe_arg=<span class="hljs-number">2</span></span>):
        model_input = Tensor(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
        <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;model_input&quot;</span>: model_input}

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">_forward</span>(<span class="hljs-params">self, model_inputs</span>):
        <span class="hljs-comment"># model_inputs == {&quot;model_input&quot;: model_input}</span>
        outputs = self.model(**model_inputs)
        <span class="hljs-comment"># Maybe {&quot;logits&quot;: Tensor(...)}</span>
        <span class="hljs-keyword">return</span> outputs

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">postprocess</span>(<span class="hljs-params">self, model_outputs</span>):
        best_class = model_outputs[<span class="hljs-string">&quot;logits&quot;</span>].softmax(-<span class="hljs-number">1</span>)
        <span class="hljs-keyword">return</span> best_class`}}),F=new Qa({props:{code:`pipe = pipeline("my-new-task")
pipe("This is a test")

pipe("This is a test", top_k=2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>pipe = pipeline(<span class="hljs-string">&quot;my-new-task&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>pipe(<span class="hljs-string">&quot;This is a test&quot;</span>)
[{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;1-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.8</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;2-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.1</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;3-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.05</span>}
{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;4-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.025</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;5-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.025</span>}]

<span class="hljs-meta">&gt;&gt;&gt; </span>pipe(<span class="hljs-string">&quot;This is a test&quot;</span>, top_k=<span class="hljs-number">2</span>)
[{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;1-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.8</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;2-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.1</span>}]`}}),K=new Qa({props:{code:`

`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">postprocess</span>(<span class="hljs-params">self, model_outputs, top_k=<span class="hljs-number">5</span></span>):
    best_class = model_outputs[<span class="hljs-string">&quot;logits&quot;</span>].softmax(-<span class="hljs-number">1</span>)
    <span class="hljs-comment"># Add logic to handle top_k</span>
    <span class="hljs-keyword">return</span> best_class


<span class="hljs-keyword">def</span> <span class="hljs-title function_">_sanitize_parameters</span>(<span class="hljs-params">self, **kwargs</span>):
    preprocess_kwargs = {}
    <span class="hljs-keyword">if</span> <span class="hljs-string">&quot;maybe_arg&quot;</span> <span class="hljs-keyword">in</span> kwargs:
        preprocess_kwargs[<span class="hljs-string">&quot;maybe_arg&quot;</span>] = kwargs[<span class="hljs-string">&quot;maybe_arg&quot;</span>]

    postprocess_kwargs = {}
    <span class="hljs-keyword">if</span> <span class="hljs-string">&quot;top_k&quot;</span> <span class="hljs-keyword">in</span> kwargs:
        preprocess_kwargs[<span class="hljs-string">&quot;top_k&quot;</span>] = kwargs[<span class="hljs-string">&quot;top_k&quot;</span>]
    <span class="hljs-keyword">return</span> preprocess_kwargs, {}, postprocess_kwargs`}}),Q=new Ka({}),V=new Ka({}),{c(){C=l("meta"),ft=d(),D=l("h1"),A=l("a"),ce=l("span"),le(R.$$.fragment),Jt=d(),he=l("span"),Rt=a("How to add a pipeline to \u{1F917} Transformers?"),mt=d(),b=l("p"),Bt=a(`First and foremost, you need to decide the raw entries the pipeline will be able to take. It can be strings, raw bytes,
dictionaries or whatever seems to be the most likely desired input. Try to keep these inputs as pure Python as possible
as it makes compatibility easier (even through other languages via JSON). Those will be the `),ue=l("code"),Ft=a("inputs"),Kt=a(` of the
pipeline (`),fe=l("code"),Qt=a("preprocess"),Vt=a(")."),_t=d(),m=l("p"),Wt=a("Then define the "),me=l("code"),Zt=a("outputs"),es=a(". Same policy as the "),_e=l("code"),ts=a("inputs"),ss=a(`. The simpler, the better. Those will be the outputs of
`),we=l("code"),as=a("postprocess"),os=a(" method."),wt=d(),h=l("p"),ls=a("Start by inheriting the base class "),ve=l("code"),ns=a("Pipeline"),rs=a(". with the 4 methods needed to implement "),ye=l("code"),is=a("preprocess"),ps=a(`,
`),Ee=l("code"),ds=a("_forward"),cs=a(", "),ke=l("code"),hs=a("postprocess"),us=a(" and "),be=l("code"),fs=a("_sanitize_parameters"),ms=a("."),vt=d(),le(B.$$.fragment),yt=d(),ee=l("p"),_s=a(`The structure of this breakdown is to support relatively seamless support for CPU/GPU, while supporting doing
pre/postprocessing on the CPU on different threads`),Et=d(),T=l("p"),ge=l("code"),ws=a("preprocess"),vs=a(` will take the originally defined inputs, and turn them into something feedable to the model. It might
contain more information and is usually a `),je=l("code"),ys=a("Dict"),Es=a("."),kt=d(),E=l("p"),qe=l("code"),ks=a("_forward"),bs=a(" is the implementation detail and is not meant to be called directly. "),Ce=l("code"),gs=a("forward"),js=a(` is the preferred
called method as it contains safeguards to make sure everything is working on the expected device. If anything is
linked to a real model it belongs in the `),De=l("code"),qs=a("_forward"),Cs=a(" method, anything else is in the preprocess/postprocess."),bt=d(),O=l("p"),Te=l("code"),Ds=a("postprocess"),Ts=a(" methods will take the output of "),Oe=l("code"),Os=a("_forward"),$s=a(` and turn it into the final output that were decided
earlier.`),gt=d(),k=l("p"),$e=l("code"),Ps=a("_sanitize_parameters"),As=a(` exists to allow users to pass any parameters whenever they wish, be it at initialization
time `),Pe=l("code"),Ss=a("pipeline(...., maybe_arg=4)"),Is=a(" or at call time "),Ae=l("code"),xs=a("pipe = pipeline(...); output = pipe(...., maybe_arg=4)"),Ns=a("."),jt=d(),u=l("p"),zs=a("The returns of "),Se=l("code"),Ls=a("_sanitize_parameters"),Us=a(" are the 3 dicts of kwargs that will be passed directly to "),Ie=l("code"),Hs=a("preprocess"),Ms=a(`,
`),xe=l("code"),Ys=a("_forward"),Xs=a(" and "),Ne=l("code"),Gs=a("postprocess"),Js=a(`. Don\u2019t fill anything if the caller didn\u2019t call with any extra parameter. That
allows to keep the default arguments in the function definition which is always more \u201Cnatural\u201D.`),qt=d(),S=l("p"),Rs=a("A classic example would be a "),ze=l("code"),Bs=a("top_k"),Fs=a(" argument in the post processing in classification tasks."),Ct=d(),le(F.$$.fragment),Dt=d(),_=l("p"),Ks=a("In order to achieve that, we\u2019ll update our "),Le=l("code"),Qs=a("postprocess"),Vs=a(" method with a default parameter to "),Ue=l("code"),Ws=a("5"),Zs=a(`. and edit
`),He=l("code"),ea=a("_sanitize_parameters"),ta=a(" to allow this new parameter."),Tt=d(),le(K.$$.fragment),Ot=d(),te=l("p"),sa=a(`Try to keep the inputs/outputs very simple and ideally JSON-serializable as it makes the pipeline usage very easy
without requiring users to understand new kind of objects. It\u2019s also relatively common to support many different types
of arguments for ease of use (audio files, can be filenames, URLs or pure bytes)`),$t=d(),$=l("h2"),I=l("a"),Me=l("span"),le(Q.$$.fragment),aa=d(),Ye=l("span"),oa=a("Adding it to the list of supported tasks"),Pt=d(),g=l("p"),la=a("Go to "),Xe=l("code"),na=a("src/transformers/pipelines/__init__.py"),ra=a(" and fill in "),Ge=l("code"),ia=a("SUPPORTED_TASKS"),pa=a(` with your newly created pipeline.
If possible it should provide a default model.`),At=d(),P=l("h2"),x=l("a"),Je=l("span"),le(V.$$.fragment),da=d(),Re=l("span"),ca=a("Adding tests"),St=d(),N=l("p"),ha=a("Create a new file "),Be=l("code"),ua=a("tests/test_pipelines_MY_PIPELINE.py"),fa=a(" with example with the other tests."),It=d(),w=l("p"),ma=a("The "),Fe=l("code"),_a=a("run_pipeline_test"),wa=a(` function will be very generic and run on small random models on every possible
architecture as defined by `),Ke=l("code"),va=a("model_mapping"),ya=a(" and "),Qe=l("code"),Ea=a("tf_model_mapping"),ka=a("."),xt=d(),j=l("p"),ba=a(`This is very important to test future compatibility, meaning if someone adds a new model for
`),Ve=l("code"),ga=a("XXXForQuestionAnswering"),ja=a(` then the pipeline test will attempt to run on it. Because the models are random it\u2019s
impossible to check for actual values, that\u2019s why There is a helper `),We=l("code"),qa=a("ANY"),Ca=a(` that will simply attempt to match the
output of the pipeline TYPE.`),Nt=d(),z=l("p"),Da=a("You also "),Ze=l("em"),Ta=a("need"),Oa=a(" to implement 2 (ideally 4) tests."),zt=d(),v=l("ul"),L=l("li"),et=l("code"),$a=a("test_small_model_pt"),Pa=a(` : Define 1 small model for this pipeline (doesn\u2019t matter if the results don\u2019t make sense)
and test the pipeline outputs. The results should be the same as `),tt=l("code"),Aa=a("test_small_model_tf"),Sa=a("."),Ia=d(),U=l("li"),st=l("code"),xa=a("test_small_model_tf"),Na=a(` : Define 1 small model for this pipeline (doesn\u2019t matter if the results don\u2019t make sense)
and test the pipeline outputs. The results should be the same as `),at=l("code"),za=a("test_small_model_pt"),La=a("."),Ua=d(),H=l("li"),ot=l("code"),Ha=a("test_large_model_pt"),Ma=a(" ("),lt=l("code"),Ya=a("optional"),Xa=a(`): Tests the pipeline on a real pipeline where the results are supposed to
make sense. These tests are slow and should be marked as such. Here the goal is to showcase the pipeline and to make
sure there is no drift in future releases`),Ga=d(),M=l("li"),nt=l("code"),Ja=a("test_large_model_tf"),Ra=a(" ("),rt=l("code"),Ba=a("optional"),Fa=a(`): Tests the pipeline on a real pipeline where the results are supposed to
make sense. These tests are slow and should be marked as such. Here the goal is to showcase the pipeline and to make
sure there is no drift in future releases`),this.h()},l(t){const i=ol('[data-svelte="svelte-1phssyn"]',document.head);C=n(i,"META",{name:!0,content:!0}),i.forEach(s),ft=c(t),D=n(t,"H1",{class:!0});var Ut=r(D);A=n(Ut,"A",{id:!0,class:!0,href:!0});var Wa=r(A);ce=n(Wa,"SPAN",{});var Za=r(ce);ne(R.$$.fragment,Za),Za.forEach(s),Wa.forEach(s),Jt=c(Ut),he=n(Ut,"SPAN",{});var eo=r(he);Rt=o(eo,"How to add a pipeline to \u{1F917} Transformers?"),eo.forEach(s),Ut.forEach(s),mt=c(t),b=n(t,"P",{});var se=r(b);Bt=o(se,`First and foremost, you need to decide the raw entries the pipeline will be able to take. It can be strings, raw bytes,
dictionaries or whatever seems to be the most likely desired input. Try to keep these inputs as pure Python as possible
as it makes compatibility easier (even through other languages via JSON). Those will be the `),ue=n(se,"CODE",{});var to=r(ue);Ft=o(to,"inputs"),to.forEach(s),Kt=o(se,` of the
pipeline (`),fe=n(se,"CODE",{});var so=r(fe);Qt=o(so,"preprocess"),so.forEach(s),Vt=o(se,")."),se.forEach(s),_t=c(t),m=n(t,"P",{});var Y=r(m);Wt=o(Y,"Then define the "),me=n(Y,"CODE",{});var ao=r(me);Zt=o(ao,"outputs"),ao.forEach(s),es=o(Y,". Same policy as the "),_e=n(Y,"CODE",{});var oo=r(_e);ts=o(oo,"inputs"),oo.forEach(s),ss=o(Y,`. The simpler, the better. Those will be the outputs of
`),we=n(Y,"CODE",{});var lo=r(we);as=o(lo,"postprocess"),lo.forEach(s),os=o(Y," method."),Y.forEach(s),wt=c(t),h=n(t,"P",{});var y=r(h);ls=o(y,"Start by inheriting the base class "),ve=n(y,"CODE",{});var no=r(ve);ns=o(no,"Pipeline"),no.forEach(s),rs=o(y,". with the 4 methods needed to implement "),ye=n(y,"CODE",{});var ro=r(ye);is=o(ro,"preprocess"),ro.forEach(s),ps=o(y,`,
`),Ee=n(y,"CODE",{});var io=r(Ee);ds=o(io,"_forward"),io.forEach(s),cs=o(y,", "),ke=n(y,"CODE",{});var po=r(ke);hs=o(po,"postprocess"),po.forEach(s),us=o(y," and "),be=n(y,"CODE",{});var co=r(be);fs=o(co,"_sanitize_parameters"),co.forEach(s),ms=o(y,"."),y.forEach(s),vt=c(t),ne(B.$$.fragment,t),yt=c(t),ee=n(t,"P",{});var ho=r(ee);_s=o(ho,`The structure of this breakdown is to support relatively seamless support for CPU/GPU, while supporting doing
pre/postprocessing on the CPU on different threads`),ho.forEach(s),Et=c(t),T=n(t,"P",{});var it=r(T);ge=n(it,"CODE",{});var uo=r(ge);ws=o(uo,"preprocess"),uo.forEach(s),vs=o(it,` will take the originally defined inputs, and turn them into something feedable to the model. It might
contain more information and is usually a `),je=n(it,"CODE",{});var fo=r(je);ys=o(fo,"Dict"),fo.forEach(s),Es=o(it,"."),it.forEach(s),kt=c(t),E=n(t,"P",{});var W=r(E);qe=n(W,"CODE",{});var mo=r(qe);ks=o(mo,"_forward"),mo.forEach(s),bs=o(W," is the implementation detail and is not meant to be called directly. "),Ce=n(W,"CODE",{});var _o=r(Ce);gs=o(_o,"forward"),_o.forEach(s),js=o(W,` is the preferred
called method as it contains safeguards to make sure everything is working on the expected device. If anything is
linked to a real model it belongs in the `),De=n(W,"CODE",{});var wo=r(De);qs=o(wo,"_forward"),wo.forEach(s),Cs=o(W," method, anything else is in the preprocess/postprocess."),W.forEach(s),bt=c(t),O=n(t,"P",{});var pt=r(O);Te=n(pt,"CODE",{});var vo=r(Te);Ds=o(vo,"postprocess"),vo.forEach(s),Ts=o(pt," methods will take the output of "),Oe=n(pt,"CODE",{});var yo=r(Oe);Os=o(yo,"_forward"),yo.forEach(s),$s=o(pt,` and turn it into the final output that were decided
earlier.`),pt.forEach(s),gt=c(t),k=n(t,"P",{});var Z=r(k);$e=n(Z,"CODE",{});var Eo=r($e);Ps=o(Eo,"_sanitize_parameters"),Eo.forEach(s),As=o(Z,` exists to allow users to pass any parameters whenever they wish, be it at initialization
time `),Pe=n(Z,"CODE",{});var ko=r(Pe);Ss=o(ko,"pipeline(...., maybe_arg=4)"),ko.forEach(s),Is=o(Z," or at call time "),Ae=n(Z,"CODE",{});var bo=r(Ae);xs=o(bo,"pipe = pipeline(...); output = pipe(...., maybe_arg=4)"),bo.forEach(s),Ns=o(Z,"."),Z.forEach(s),jt=c(t),u=n(t,"P",{});var q=r(u);zs=o(q,"The returns of "),Se=n(q,"CODE",{});var go=r(Se);Ls=o(go,"_sanitize_parameters"),go.forEach(s),Us=o(q," are the 3 dicts of kwargs that will be passed directly to "),Ie=n(q,"CODE",{});var jo=r(Ie);Hs=o(jo,"preprocess"),jo.forEach(s),Ms=o(q,`,
`),xe=n(q,"CODE",{});var qo=r(xe);Ys=o(qo,"_forward"),qo.forEach(s),Xs=o(q," and "),Ne=n(q,"CODE",{});var Co=r(Ne);Gs=o(Co,"postprocess"),Co.forEach(s),Js=o(q,`. Don\u2019t fill anything if the caller didn\u2019t call with any extra parameter. That
allows to keep the default arguments in the function definition which is always more \u201Cnatural\u201D.`),q.forEach(s),qt=c(t),S=n(t,"P",{});var Ht=r(S);Rs=o(Ht,"A classic example would be a "),ze=n(Ht,"CODE",{});var Do=r(ze);Bs=o(Do,"top_k"),Do.forEach(s),Fs=o(Ht," argument in the post processing in classification tasks."),Ht.forEach(s),Ct=c(t),ne(F.$$.fragment,t),Dt=c(t),_=n(t,"P",{});var X=r(_);Ks=o(X,"In order to achieve that, we\u2019ll update our "),Le=n(X,"CODE",{});var To=r(Le);Qs=o(To,"postprocess"),To.forEach(s),Vs=o(X," method with a default parameter to "),Ue=n(X,"CODE",{});var Oo=r(Ue);Ws=o(Oo,"5"),Oo.forEach(s),Zs=o(X,`. and edit
`),He=n(X,"CODE",{});var $o=r(He);ea=o($o,"_sanitize_parameters"),$o.forEach(s),ta=o(X," to allow this new parameter."),X.forEach(s),Tt=c(t),ne(K.$$.fragment,t),Ot=c(t),te=n(t,"P",{});var Po=r(te);sa=o(Po,`Try to keep the inputs/outputs very simple and ideally JSON-serializable as it makes the pipeline usage very easy
without requiring users to understand new kind of objects. It\u2019s also relatively common to support many different types
of arguments for ease of use (audio files, can be filenames, URLs or pure bytes)`),Po.forEach(s),$t=c(t),$=n(t,"H2",{class:!0});var Mt=r($);I=n(Mt,"A",{id:!0,class:!0,href:!0});var Ao=r(I);Me=n(Ao,"SPAN",{});var So=r(Me);ne(Q.$$.fragment,So),So.forEach(s),Ao.forEach(s),aa=c(Mt),Ye=n(Mt,"SPAN",{});var Io=r(Ye);oa=o(Io,"Adding it to the list of supported tasks"),Io.forEach(s),Mt.forEach(s),Pt=c(t),g=n(t,"P",{});var ae=r(g);la=o(ae,"Go to "),Xe=n(ae,"CODE",{});var xo=r(Xe);na=o(xo,"src/transformers/pipelines/__init__.py"),xo.forEach(s),ra=o(ae," and fill in "),Ge=n(ae,"CODE",{});var No=r(Ge);ia=o(No,"SUPPORTED_TASKS"),No.forEach(s),pa=o(ae,` with your newly created pipeline.
If possible it should provide a default model.`),ae.forEach(s),At=c(t),P=n(t,"H2",{class:!0});var Yt=r(P);x=n(Yt,"A",{id:!0,class:!0,href:!0});var zo=r(x);Je=n(zo,"SPAN",{});var Lo=r(Je);ne(V.$$.fragment,Lo),Lo.forEach(s),zo.forEach(s),da=c(Yt),Re=n(Yt,"SPAN",{});var Uo=r(Re);ca=o(Uo,"Adding tests"),Uo.forEach(s),Yt.forEach(s),St=c(t),N=n(t,"P",{});var Xt=r(N);ha=o(Xt,"Create a new file "),Be=n(Xt,"CODE",{});var Ho=r(Be);ua=o(Ho,"tests/test_pipelines_MY_PIPELINE.py"),Ho.forEach(s),fa=o(Xt," with example with the other tests."),Xt.forEach(s),It=c(t),w=n(t,"P",{});var G=r(w);ma=o(G,"The "),Fe=n(G,"CODE",{});var Mo=r(Fe);_a=o(Mo,"run_pipeline_test"),Mo.forEach(s),wa=o(G,` function will be very generic and run on small random models on every possible
architecture as defined by `),Ke=n(G,"CODE",{});var Yo=r(Ke);va=o(Yo,"model_mapping"),Yo.forEach(s),ya=o(G," and "),Qe=n(G,"CODE",{});var Xo=r(Qe);Ea=o(Xo,"tf_model_mapping"),Xo.forEach(s),ka=o(G,"."),G.forEach(s),xt=c(t),j=n(t,"P",{});var oe=r(j);ba=o(oe,`This is very important to test future compatibility, meaning if someone adds a new model for
`),Ve=n(oe,"CODE",{});var Go=r(Ve);ga=o(Go,"XXXForQuestionAnswering"),Go.forEach(s),ja=o(oe,` then the pipeline test will attempt to run on it. Because the models are random it\u2019s
impossible to check for actual values, that\u2019s why There is a helper `),We=n(oe,"CODE",{});var Jo=r(We);qa=o(Jo,"ANY"),Jo.forEach(s),Ca=o(oe,` that will simply attempt to match the
output of the pipeline TYPE.`),oe.forEach(s),Nt=c(t),z=n(t,"P",{});var Gt=r(z);Da=o(Gt,"You also "),Ze=n(Gt,"EM",{});var Ro=r(Ze);Ta=o(Ro,"need"),Ro.forEach(s),Oa=o(Gt," to implement 2 (ideally 4) tests."),Gt.forEach(s),zt=c(t),v=n(t,"UL",{});var J=r(v);L=n(J,"LI",{});var dt=r(L);et=n(dt,"CODE",{});var Bo=r(et);$a=o(Bo,"test_small_model_pt"),Bo.forEach(s),Pa=o(dt,` : Define 1 small model for this pipeline (doesn\u2019t matter if the results don\u2019t make sense)
and test the pipeline outputs. The results should be the same as `),tt=n(dt,"CODE",{});var Fo=r(tt);Aa=o(Fo,"test_small_model_tf"),Fo.forEach(s),Sa=o(dt,"."),dt.forEach(s),Ia=c(J),U=n(J,"LI",{});var ct=r(U);st=n(ct,"CODE",{});var Ko=r(st);xa=o(Ko,"test_small_model_tf"),Ko.forEach(s),Na=o(ct,` : Define 1 small model for this pipeline (doesn\u2019t matter if the results don\u2019t make sense)
and test the pipeline outputs. The results should be the same as `),at=n(ct,"CODE",{});var Qo=r(at);za=o(Qo,"test_small_model_pt"),Qo.forEach(s),La=o(ct,"."),ct.forEach(s),Ua=c(J),H=n(J,"LI",{});var ht=r(H);ot=n(ht,"CODE",{});var Vo=r(ot);Ha=o(Vo,"test_large_model_pt"),Vo.forEach(s),Ma=o(ht," ("),lt=n(ht,"CODE",{});var Wo=r(lt);Ya=o(Wo,"optional"),Wo.forEach(s),Xa=o(ht,`): Tests the pipeline on a real pipeline where the results are supposed to
make sense. These tests are slow and should be marked as such. Here the goal is to showcase the pipeline and to make
sure there is no drift in future releases`),ht.forEach(s),Ga=c(J),M=n(J,"LI",{});var ut=r(M);nt=n(ut,"CODE",{});var Zo=r(nt);Ja=o(Zo,"test_large_model_tf"),Zo.forEach(s),Ra=o(ut," ("),rt=n(ut,"CODE",{});var el=r(rt);Ba=o(el,"optional"),el.forEach(s),Fa=o(ut,`): Tests the pipeline on a real pipeline where the results are supposed to
make sense. These tests are slow and should be marked as such. Here the goal is to showcase the pipeline and to make
sure there is no drift in future releases`),ut.forEach(s),J.forEach(s),this.h()},h(){f(C,"name","hf:doc:metadata"),f(C,"content",JSON.stringify(il)),f(A,"id","how-to-add-a-pipeline-to-transformers"),f(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(A,"href","#how-to-add-a-pipeline-to-transformers"),f(D,"class","relative group"),f(I,"id","adding-it-to-the-list-of-supported-tasks"),f(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(I,"href","#adding-it-to-the-list-of-supported-tasks"),f($,"class","relative group"),f(x,"id","adding-tests"),f(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(x,"href","#adding-tests"),f(P,"class","relative group")},m(t,i){e(document.head,C),p(t,ft,i),p(t,D,i),e(D,A),e(A,ce),re(R,ce,null),e(D,Jt),e(D,he),e(he,Rt),p(t,mt,i),p(t,b,i),e(b,Bt),e(b,ue),e(ue,Ft),e(b,Kt),e(b,fe),e(fe,Qt),e(b,Vt),p(t,_t,i),p(t,m,i),e(m,Wt),e(m,me),e(me,Zt),e(m,es),e(m,_e),e(_e,ts),e(m,ss),e(m,we),e(we,as),e(m,os),p(t,wt,i),p(t,h,i),e(h,ls),e(h,ve),e(ve,ns),e(h,rs),e(h,ye),e(ye,is),e(h,ps),e(h,Ee),e(Ee,ds),e(h,cs),e(h,ke),e(ke,hs),e(h,us),e(h,be),e(be,fs),e(h,ms),p(t,vt,i),re(B,t,i),p(t,yt,i),p(t,ee,i),e(ee,_s),p(t,Et,i),p(t,T,i),e(T,ge),e(ge,ws),e(T,vs),e(T,je),e(je,ys),e(T,Es),p(t,kt,i),p(t,E,i),e(E,qe),e(qe,ks),e(E,bs),e(E,Ce),e(Ce,gs),e(E,js),e(E,De),e(De,qs),e(E,Cs),p(t,bt,i),p(t,O,i),e(O,Te),e(Te,Ds),e(O,Ts),e(O,Oe),e(Oe,Os),e(O,$s),p(t,gt,i),p(t,k,i),e(k,$e),e($e,Ps),e(k,As),e(k,Pe),e(Pe,Ss),e(k,Is),e(k,Ae),e(Ae,xs),e(k,Ns),p(t,jt,i),p(t,u,i),e(u,zs),e(u,Se),e(Se,Ls),e(u,Us),e(u,Ie),e(Ie,Hs),e(u,Ms),e(u,xe),e(xe,Ys),e(u,Xs),e(u,Ne),e(Ne,Gs),e(u,Js),p(t,qt,i),p(t,S,i),e(S,Rs),e(S,ze),e(ze,Bs),e(S,Fs),p(t,Ct,i),re(F,t,i),p(t,Dt,i),p(t,_,i),e(_,Ks),e(_,Le),e(Le,Qs),e(_,Vs),e(_,Ue),e(Ue,Ws),e(_,Zs),e(_,He),e(He,ea),e(_,ta),p(t,Tt,i),re(K,t,i),p(t,Ot,i),p(t,te,i),e(te,sa),p(t,$t,i),p(t,$,i),e($,I),e(I,Me),re(Q,Me,null),e($,aa),e($,Ye),e(Ye,oa),p(t,Pt,i),p(t,g,i),e(g,la),e(g,Xe),e(Xe,na),e(g,ra),e(g,Ge),e(Ge,ia),e(g,pa),p(t,At,i),p(t,P,i),e(P,x),e(x,Je),re(V,Je,null),e(P,da),e(P,Re),e(Re,ca),p(t,St,i),p(t,N,i),e(N,ha),e(N,Be),e(Be,ua),e(N,fa),p(t,It,i),p(t,w,i),e(w,ma),e(w,Fe),e(Fe,_a),e(w,wa),e(w,Ke),e(Ke,va),e(w,ya),e(w,Qe),e(Qe,Ea),e(w,ka),p(t,xt,i),p(t,j,i),e(j,ba),e(j,Ve),e(Ve,ga),e(j,ja),e(j,We),e(We,qa),e(j,Ca),p(t,Nt,i),p(t,z,i),e(z,Da),e(z,Ze),e(Ze,Ta),e(z,Oa),p(t,zt,i),p(t,v,i),e(v,L),e(L,et),e(et,$a),e(L,Pa),e(L,tt),e(tt,Aa),e(L,Sa),e(v,Ia),e(v,U),e(U,st),e(st,xa),e(U,Na),e(U,at),e(at,za),e(U,La),e(v,Ua),e(v,H),e(H,ot),e(ot,Ha),e(H,Ma),e(H,lt),e(lt,Ya),e(H,Xa),e(v,Ga),e(v,M),e(M,nt),e(nt,Ja),e(M,Ra),e(M,rt),e(rt,Ba),e(M,Fa),Lt=!0},p:ll,i(t){Lt||(ie(R.$$.fragment,t),ie(B.$$.fragment,t),ie(F.$$.fragment,t),ie(K.$$.fragment,t),ie(Q.$$.fragment,t),ie(V.$$.fragment,t),Lt=!0)},o(t){pe(R.$$.fragment,t),pe(B.$$.fragment,t),pe(F.$$.fragment,t),pe(K.$$.fragment,t),pe(Q.$$.fragment,t),pe(V.$$.fragment,t),Lt=!1},d(t){s(C),t&&s(ft),t&&s(D),de(R),t&&s(mt),t&&s(b),t&&s(_t),t&&s(m),t&&s(wt),t&&s(h),t&&s(vt),de(B,t),t&&s(yt),t&&s(ee),t&&s(Et),t&&s(T),t&&s(kt),t&&s(E),t&&s(bt),t&&s(O),t&&s(gt),t&&s(k),t&&s(jt),t&&s(u),t&&s(qt),t&&s(S),t&&s(Ct),de(F,t),t&&s(Dt),t&&s(_),t&&s(Tt),de(K,t),t&&s(Ot),t&&s(te),t&&s($t),t&&s($),de(Q),t&&s(Pt),t&&s(g),t&&s(At),t&&s(P),de(V),t&&s(St),t&&s(N),t&&s(It),t&&s(w),t&&s(xt),t&&s(j),t&&s(Nt),t&&s(z),t&&s(zt),t&&s(v)}}}const il={local:"how-to-add-a-pipeline-to-transformers",sections:[{local:"adding-it-to-the-list-of-supported-tasks",title:"Adding it to the list of supported tasks"},{local:"adding-tests",title:"Adding tests"}],title:"How to add a pipeline to \u{1F917} Transformers?"};function pl(Va){return nl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ul extends tl{constructor(C){super();sl(this,C,pl,rl,al,{})}}export{ul as default,il as metadata};
