import{S as Lr,i as Rr,s as Br,e as o,k as p,w as c,t as i,M as Fr,c as l,d as t,m as h,a as r,x as f,h as n,b as d,G as a,g as u,y as m,L as Ur,q as v,o as w,B as _,v as Kr}from"../chunks/vendor-hf-doc-builder.js";import{I as y}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as le}from"../chunks/CodeBlock-hf-doc-builder.js";function Yr(kl){let S,qt,x,L,Fe,re,Da,Ue,La,Nt,C,R,Ke,se,Ra,Ye,Ba,Ot,xe,Fa,Mt,ie,Dt,Ce,Ua,Lt,ne,Rt,T,B,ze,ue,Ka,We,Ya,Bt,b,za,pe,Wa,Ga,he,Ja,Qa,Ft,de,Ut,Te,Va,Kt,F,Xa,ce,Za,eo,Yt,I,U,Ge,fe,to,Je,ao,zt,K,oo,Qe,lo,ro,Wt,H,Y,Ve,me,so,Xe,io,Gt,z,no,Ze,uo,po,Jt,E,et,Ie,tt,ho,co,fo,at,He,ot,mo,vo,wo,lt,je,rt,_o,$o,Eo,st,g,it,yo,bo,nt,go,ko,ut,Ao,Po,Qt,qe,So,Vt,j,W,pt,ve,xo,ht,Co,Xt,k,To,dt,Io,Ho,ct,jo,qo,Zt,we,ea,G,No,ft,Oo,Mo,ta,_e,aa,Ne,Do,oa,q,J,mt,$e,Lo,vt,Ro,la,A,Bo,wt,Fo,Uo,_t,Ko,Yo,ra,Ee,sa,Q,zo,$t,Wo,Go,ia,N,V,Et,ye,Jo,yt,Qo,na,X,Vo,bt,Xo,Zo,ua,O,Z,gt,be,el,kt,tl,pa,$,al,At,ol,ll,Pt,rl,sl,St,il,nl,xt,ul,pl,ha,M,ee,Ct,ge,hl,Tt,dl,da,te,cl,It,fl,ml,ca,ke,fa,Oe,vl,ma,D,ae,Ht,Ae,wl,jt,_l,va,Me,$l,wa,Pe,_a,De,El,$a;return re=new y({}),se=new y({}),ie=new le({props:{code:"pip install evaluate[template]",highlighted:"pip install evaluate[template]"}}),ne=new le({props:{code:"huggingface-cli login",highlighted:"huggingface-cli login"}}),ue=new y({}),de=new le({props:{code:'evaluate-cli create "My Metric" --module_type "metric"',highlighted:'evaluate-cli create <span class="hljs-string">&quot;My Metric&quot;</span> --module_type <span class="hljs-string">&quot;metric&quot;</span>'}}),fe=new y({}),me=new y({}),ve=new y({}),we=new le({props:{code:`def _download_and_prepare(self, dl_manager):
    model_path = dl_manager.download_and_extract(CHECKPOINT_URLS[self.config_name])
    self.scorer = score.BleurtScorer(os.path.join(model_path, self.config_name))`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">_download_and_prepare</span>(<span class="hljs-params">self, dl_manager</span>):
    model_path = dl_manager.download_and_extract(CHECKPOINT_URLS[self.config_name])
    self.scorer = score.BleurtScorer(os.path.join(model_path, self.config_name))`}}),_e=new le({props:{code:`def _download_and_prepare(self, dl_manager):
    import nltk
    nltk.download("punkt")`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">_download_and_prepare</span>(<span class="hljs-params">self, dl_manager</span>):
    <span class="hljs-keyword">import</span> nltk
    nltk.download(<span class="hljs-string">&quot;punkt&quot;</span>)`}}),$e=new y({}),Ee=new le({props:{code:`def _compute(self, references, predictions):
    em = sum([r==p for r, p in zip(references, predictions)])/len(references)
    return {"exact_match": em}`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">_compute</span>(<span class="hljs-params">self, references, predictions</span>):
    em = <span class="hljs-built_in">sum</span>([r==p <span class="hljs-keyword">for</span> r, p <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(references, predictions)])/<span class="hljs-built_in">len</span>(references)
    <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;exact_match&quot;</span>: em}`}}),ye=new y({}),be=new y({}),ge=new y({}),ke=new le({props:{code:`import evaluate
from evaluate.utils import launch_gradio_widget


module = evaluate.load("lvwerra/element_count")
launch_gradio_widget(module)`,highlighted:`<span class="hljs-keyword">import</span> evaluate
<span class="hljs-keyword">from</span> evaluate.utils <span class="hljs-keyword">import</span> launch_gradio_widget


module = evaluate.load(<span class="hljs-string">&quot;lvwerra/element_count&quot;</span>)
launch_gradio_widget(module)`}}),Ae=new y({}),Pe=new le({props:{code:`cd PATH_TO_MODULE
git add .
git commit -m "Add my new, shiny module."
git push`,highlighted:`cd PATH_TO_MODULE
git <span class="hljs-keyword">add</span> .
git commit -m <span class="hljs-string">&quot;Add my new, shiny module.&quot;</span>
git <span class="hljs-keyword">push</span>`}}),{c(){S=o("meta"),qt=p(),x=o("h1"),L=o("a"),Fe=o("span"),c(re.$$.fragment),Da=p(),Ue=o("span"),La=i("Creating and sharing a new evaluation"),Nt=p(),C=o("h2"),R=o("a"),Ke=o("span"),c(se.$$.fragment),Ra=p(),Ye=o("span"),Ba=i("Setup"),Ot=p(),xe=o("p"),Fa=i("Before you can create a new metric make sure you have all the necessary dependencies installed:"),Mt=p(),c(ie.$$.fragment),Dt=p(),Ce=o("p"),Ua=i("Also make sure your Hugging Face token is registered so you can connect to the Hugging Face Hub:"),Lt=p(),c(ne.$$.fragment),Rt=p(),T=o("h2"),B=o("a"),ze=o("span"),c(ue.$$.fragment),Ka=p(),We=o("span"),Ya=i("Create"),Bt=p(),b=o("p"),za=i("All evaluation modules, be it metrics, comparisons, or measurements live on the \u{1F917} Hub in a "),pe=o("a"),Wa=i("Space"),Ga=i(" (see for example "),he=o("a"),Ja=i("Accuracy"),Qa=i("). In principle, you could setup a new Space and add a new module following the same structure. However, we added a CLI that makes creating a new evaluation module much easier:"),Ft=p(),c(de.$$.fragment),Ut=p(),Te=o("p"),Va=i("This will create a new Space on the \u{1F917} Hub, clone it locally, and populate it with a template. Instructions on how to fill the template will be displayed in the terminal, but are also explained here in more detail."),Kt=p(),F=o("p"),Xa=i("For more information about Spaces, see the "),ce=o("a"),Za=i("Spaces documentation"),eo=i("."),Yt=p(),I=o("h2"),U=o("a"),Ge=o("span"),c(fe.$$.fragment),to=p(),Je=o("span"),ao=i("Module script"),zt=p(),K=o("p"),oo=i("The evaluation module script (the file with suffix "),Qe=o("code"),lo=i("*.py"),ro=i(") is the core of the new module and includes all the code for computing the evaluation."),Wt=p(),H=o("h3"),Y=o("a"),Ve=o("span"),c(me.$$.fragment),so=p(),Xe=o("span"),io=i("Attributes"),Gt=p(),z=o("p"),no=i("Start by adding some information about your evalution module in "),Ze=o("code"),uo=i("EvaluationModule._info()"),po=i(". The most important attributes you should specify are:"),Jt=p(),E=o("ol"),et=o("li"),Ie=o("p"),tt=o("code"),ho=i("EvaluationModuleInfo.description"),co=i(" provides a brief description about your evalution module."),fo=p(),at=o("li"),He=o("p"),ot=o("code"),mo=i("EvaluationModuleInfo.citation"),vo=i(" contains a BibTex citation for the evalution module."),wo=p(),lt=o("li"),je=o("p"),rt=o("code"),_o=i("EvaluationModuleInfo.inputs_description"),$o=i(" describes the expected inputs and outputs. It may also provide an example usage of the evalution module."),Eo=p(),st=o("li"),g=o("p"),it=o("code"),yo=i("EvaluationModuleInfo.features"),bo=i(" defines the name and type of the predictions and references. This has to be either a single "),nt=o("code"),go=i("datasets.Features"),ko=i(" object or a list of "),ut=o("code"),Ao=i("datasets.Features"),Po=i(" objects if multiple input types are allowed."),Qt=p(),qe=o("p"),So=i("Then, we can move on to prepare everything before the actual computation."),Vt=p(),j=o("h3"),W=o("a"),pt=o("span"),c(ve.$$.fragment),xo=p(),ht=o("span"),Co=i("Download"),Xt=p(),k=o("p"),To=i("Some evaluation modules require some external data such as NLTK that requires resources or the BLEURT metric that requires checkpoints. You can implement these downloads in "),dt=o("code"),Io=i("EvaluationModule._download_and_prepare()"),Ho=i(", which downloads and caches the resources via the "),ct=o("code"),jo=i("dlmanager"),qo=i(". A simplified example on how BLEURT downloads and loads a checkpoint:"),Zt=p(),c(we.$$.fragment),ea=p(),G=o("p"),No=i("Or if you need to download the NLTK "),ft=o("code"),Oo=i('"punkt"'),Mo=i(" resources:"),ta=p(),c(_e.$$.fragment),aa=p(),Ne=o("p"),Do=i("Next, we need to define how the computation of the evaluation module works."),oa=p(),q=o("h3"),J=o("a"),mt=o("span"),c($e.$$.fragment),Lo=p(),vt=o("span"),Ro=i("Compute"),la=p(),A=o("p"),Bo=i("The computation is performed in the "),wt=o("code"),Fo=i("EvaluationModule._compute()"),Uo=i(" method. It takes the same arguments as "),_t=o("code"),Ko=i("EvaluationModuleInfo.features"),Yo=i(" and should then return the result as a dictionary. Here an example of an exact match metric:"),ra=p(),c(Ee.$$.fragment),sa=p(),Q=o("p"),zo=i("This method is used when you call "),$t=o("code"),Wo=i(".compute()"),Go=i(" later on."),ia=p(),N=o("h2"),V=o("a"),Et=o("span"),c(ye.$$.fragment),Jo=p(),yt=o("span"),Qo=i("Readme"),na=p(),X=o("p"),Vo=i("When you use the "),bt=o("code"),Xo=i("evalute-cli"),Zo=i(" to setup the evaluation module the Readme structure and instructions are automatically created. It should include a general description of the metric, information about its input/output format, examples as well as information about its limiations or biases and references."),ua=p(),O=o("h2"),Z=o("a"),gt=o("span"),c(be.$$.fragment),el=p(),kt=o("span"),tl=i("Requirements"),pa=p(),$=o("p"),al=i("If your evaluation modules has additional dependencies (e.g. "),At=o("code"),ol=i("sklearn"),ll=i(" or "),Pt=o("code"),rl=i("nltk"),sl=i(") the "),St=o("code"),il=i("requirements.txt"),nl=i(" files is the place to put them. The file follows the "),xt=o("code"),ul=i("pip"),pl=i(" format and you can list all dependencies there."),ha=p(),M=o("h2"),ee=o("a"),Ct=o("span"),c(ge.$$.fragment),hl=p(),Tt=o("span"),dl=i("App"),da=p(),te=o("p"),cl=i("The "),It=o("code"),fl=i("app.py"),ml=i(" is where the Spaces widget lives. In general it looks like the following and does not require any changes:"),ca=p(),c(ke.$$.fragment),fa=p(),Oe=o("p"),vl=i("If you want a custom widget you could add your gradio app here."),ma=p(),D=o("h2"),ae=o("a"),Ht=o("span"),c(Ae.$$.fragment),wl=p(),jt=o("span"),_l=i("Push to Hub"),va=p(),Me=o("p"),$l=i("Finally, when you are done with all the above changes it is time to push your evaluation module to the hub. To do so navigate to the folder of your module and git add/commit/push the changes to the hub:"),wa=p(),c(Pe.$$.fragment),_a=p(),De=o("p"),El=i("Tada \u{1F389}! Your evaluation module is now on the \u{1F917} Hub and ready to be used by everybody!"),this.h()},l(e){const s=Fr('[data-svelte="svelte-1phssyn"]',document.head);S=l(s,"META",{name:!0,content:!0}),s.forEach(t),qt=h(e),x=l(e,"H1",{class:!0});var Ea=r(x);L=l(Ea,"A",{id:!0,class:!0,href:!0});var Al=r(L);Fe=l(Al,"SPAN",{});var Pl=r(Fe);f(re.$$.fragment,Pl),Pl.forEach(t),Al.forEach(t),Da=h(Ea),Ue=l(Ea,"SPAN",{});var Sl=r(Ue);La=n(Sl,"Creating and sharing a new evaluation"),Sl.forEach(t),Ea.forEach(t),Nt=h(e),C=l(e,"H2",{class:!0});var ya=r(C);R=l(ya,"A",{id:!0,class:!0,href:!0});var xl=r(R);Ke=l(xl,"SPAN",{});var Cl=r(Ke);f(se.$$.fragment,Cl),Cl.forEach(t),xl.forEach(t),Ra=h(ya),Ye=l(ya,"SPAN",{});var Tl=r(Ye);Ba=n(Tl,"Setup"),Tl.forEach(t),ya.forEach(t),Ot=h(e),xe=l(e,"P",{});var Il=r(xe);Fa=n(Il,"Before you can create a new metric make sure you have all the necessary dependencies installed:"),Il.forEach(t),Mt=h(e),f(ie.$$.fragment,e),Dt=h(e),Ce=l(e,"P",{});var Hl=r(Ce);Ua=n(Hl,"Also make sure your Hugging Face token is registered so you can connect to the Hugging Face Hub:"),Hl.forEach(t),Lt=h(e),f(ne.$$.fragment,e),Rt=h(e),T=l(e,"H2",{class:!0});var ba=r(T);B=l(ba,"A",{id:!0,class:!0,href:!0});var jl=r(B);ze=l(jl,"SPAN",{});var ql=r(ze);f(ue.$$.fragment,ql),ql.forEach(t),jl.forEach(t),Ka=h(ba),We=l(ba,"SPAN",{});var Nl=r(We);Ya=n(Nl,"Create"),Nl.forEach(t),ba.forEach(t),Bt=h(e),b=l(e,"P",{});var Le=r(b);za=n(Le,"All evaluation modules, be it metrics, comparisons, or measurements live on the \u{1F917} Hub in a "),pe=l(Le,"A",{href:!0,rel:!0});var Ol=r(pe);Wa=n(Ol,"Space"),Ol.forEach(t),Ga=n(Le," (see for example "),he=l(Le,"A",{href:!0,rel:!0});var Ml=r(he);Ja=n(Ml,"Accuracy"),Ml.forEach(t),Qa=n(Le,"). In principle, you could setup a new Space and add a new module following the same structure. However, we added a CLI that makes creating a new evaluation module much easier:"),Le.forEach(t),Ft=h(e),f(de.$$.fragment,e),Ut=h(e),Te=l(e,"P",{});var Dl=r(Te);Va=n(Dl,"This will create a new Space on the \u{1F917} Hub, clone it locally, and populate it with a template. Instructions on how to fill the template will be displayed in the terminal, but are also explained here in more detail."),Dl.forEach(t),Kt=h(e),F=l(e,"P",{});var ga=r(F);Xa=n(ga,"For more information about Spaces, see the "),ce=l(ga,"A",{href:!0,rel:!0});var Ll=r(ce);Za=n(Ll,"Spaces documentation"),Ll.forEach(t),eo=n(ga,"."),ga.forEach(t),Yt=h(e),I=l(e,"H2",{class:!0});var ka=r(I);U=l(ka,"A",{id:!0,class:!0,href:!0});var Rl=r(U);Ge=l(Rl,"SPAN",{});var Bl=r(Ge);f(fe.$$.fragment,Bl),Bl.forEach(t),Rl.forEach(t),to=h(ka),Je=l(ka,"SPAN",{});var Fl=r(Je);ao=n(Fl,"Module script"),Fl.forEach(t),ka.forEach(t),zt=h(e),K=l(e,"P",{});var Aa=r(K);oo=n(Aa,"The evaluation module script (the file with suffix "),Qe=l(Aa,"CODE",{});var Ul=r(Qe);lo=n(Ul,"*.py"),Ul.forEach(t),ro=n(Aa,") is the core of the new module and includes all the code for computing the evaluation."),Aa.forEach(t),Wt=h(e),H=l(e,"H3",{class:!0});var Pa=r(H);Y=l(Pa,"A",{id:!0,class:!0,href:!0});var Kl=r(Y);Ve=l(Kl,"SPAN",{});var Yl=r(Ve);f(me.$$.fragment,Yl),Yl.forEach(t),Kl.forEach(t),so=h(Pa),Xe=l(Pa,"SPAN",{});var zl=r(Xe);io=n(zl,"Attributes"),zl.forEach(t),Pa.forEach(t),Gt=h(e),z=l(e,"P",{});var Sa=r(z);no=n(Sa,"Start by adding some information about your evalution module in "),Ze=l(Sa,"CODE",{});var Wl=r(Ze);uo=n(Wl,"EvaluationModule._info()"),Wl.forEach(t),po=n(Sa,". The most important attributes you should specify are:"),Sa.forEach(t),Jt=h(e),E=l(e,"OL",{});var oe=r(E);et=l(oe,"LI",{});var Gl=r(et);Ie=l(Gl,"P",{});var yl=r(Ie);tt=l(yl,"CODE",{});var Jl=r(tt);ho=n(Jl,"EvaluationModuleInfo.description"),Jl.forEach(t),co=n(yl," provides a brief description about your evalution module."),yl.forEach(t),Gl.forEach(t),fo=h(oe),at=l(oe,"LI",{});var Ql=r(at);He=l(Ql,"P",{});var bl=r(He);ot=l(bl,"CODE",{});var Vl=r(ot);mo=n(Vl,"EvaluationModuleInfo.citation"),Vl.forEach(t),vo=n(bl," contains a BibTex citation for the evalution module."),bl.forEach(t),Ql.forEach(t),wo=h(oe),lt=l(oe,"LI",{});var Xl=r(lt);je=l(Xl,"P",{});var gl=r(je);rt=l(gl,"CODE",{});var Zl=r(rt);_o=n(Zl,"EvaluationModuleInfo.inputs_description"),Zl.forEach(t),$o=n(gl," describes the expected inputs and outputs. It may also provide an example usage of the evalution module."),gl.forEach(t),Xl.forEach(t),Eo=h(oe),st=l(oe,"LI",{});var er=r(st);g=l(er,"P",{});var Se=r(g);it=l(Se,"CODE",{});var tr=r(it);yo=n(tr,"EvaluationModuleInfo.features"),tr.forEach(t),bo=n(Se," defines the name and type of the predictions and references. This has to be either a single "),nt=l(Se,"CODE",{});var ar=r(nt);go=n(ar,"datasets.Features"),ar.forEach(t),ko=n(Se," object or a list of "),ut=l(Se,"CODE",{});var or=r(ut);Ao=n(or,"datasets.Features"),or.forEach(t),Po=n(Se," objects if multiple input types are allowed."),Se.forEach(t),er.forEach(t),oe.forEach(t),Qt=h(e),qe=l(e,"P",{});var lr=r(qe);So=n(lr,"Then, we can move on to prepare everything before the actual computation."),lr.forEach(t),Vt=h(e),j=l(e,"H3",{class:!0});var xa=r(j);W=l(xa,"A",{id:!0,class:!0,href:!0});var rr=r(W);pt=l(rr,"SPAN",{});var sr=r(pt);f(ve.$$.fragment,sr),sr.forEach(t),rr.forEach(t),xo=h(xa),ht=l(xa,"SPAN",{});var ir=r(ht);Co=n(ir,"Download"),ir.forEach(t),xa.forEach(t),Xt=h(e),k=l(e,"P",{});var Re=r(k);To=n(Re,"Some evaluation modules require some external data such as NLTK that requires resources or the BLEURT metric that requires checkpoints. You can implement these downloads in "),dt=l(Re,"CODE",{});var nr=r(dt);Io=n(nr,"EvaluationModule._download_and_prepare()"),nr.forEach(t),Ho=n(Re,", which downloads and caches the resources via the "),ct=l(Re,"CODE",{});var ur=r(ct);jo=n(ur,"dlmanager"),ur.forEach(t),qo=n(Re,". A simplified example on how BLEURT downloads and loads a checkpoint:"),Re.forEach(t),Zt=h(e),f(we.$$.fragment,e),ea=h(e),G=l(e,"P",{});var Ca=r(G);No=n(Ca,"Or if you need to download the NLTK "),ft=l(Ca,"CODE",{});var pr=r(ft);Oo=n(pr,'"punkt"'),pr.forEach(t),Mo=n(Ca," resources:"),Ca.forEach(t),ta=h(e),f(_e.$$.fragment,e),aa=h(e),Ne=l(e,"P",{});var hr=r(Ne);Do=n(hr,"Next, we need to define how the computation of the evaluation module works."),hr.forEach(t),oa=h(e),q=l(e,"H3",{class:!0});var Ta=r(q);J=l(Ta,"A",{id:!0,class:!0,href:!0});var dr=r(J);mt=l(dr,"SPAN",{});var cr=r(mt);f($e.$$.fragment,cr),cr.forEach(t),dr.forEach(t),Lo=h(Ta),vt=l(Ta,"SPAN",{});var fr=r(vt);Ro=n(fr,"Compute"),fr.forEach(t),Ta.forEach(t),la=h(e),A=l(e,"P",{});var Be=r(A);Bo=n(Be,"The computation is performed in the "),wt=l(Be,"CODE",{});var mr=r(wt);Fo=n(mr,"EvaluationModule._compute()"),mr.forEach(t),Uo=n(Be," method. It takes the same arguments as "),_t=l(Be,"CODE",{});var vr=r(_t);Ko=n(vr,"EvaluationModuleInfo.features"),vr.forEach(t),Yo=n(Be," and should then return the result as a dictionary. Here an example of an exact match metric:"),Be.forEach(t),ra=h(e),f(Ee.$$.fragment,e),sa=h(e),Q=l(e,"P",{});var Ia=r(Q);zo=n(Ia,"This method is used when you call "),$t=l(Ia,"CODE",{});var wr=r($t);Wo=n(wr,".compute()"),wr.forEach(t),Go=n(Ia," later on."),Ia.forEach(t),ia=h(e),N=l(e,"H2",{class:!0});var Ha=r(N);V=l(Ha,"A",{id:!0,class:!0,href:!0});var _r=r(V);Et=l(_r,"SPAN",{});var $r=r(Et);f(ye.$$.fragment,$r),$r.forEach(t),_r.forEach(t),Jo=h(Ha),yt=l(Ha,"SPAN",{});var Er=r(yt);Qo=n(Er,"Readme"),Er.forEach(t),Ha.forEach(t),na=h(e),X=l(e,"P",{});var ja=r(X);Vo=n(ja,"When you use the "),bt=l(ja,"CODE",{});var yr=r(bt);Xo=n(yr,"evalute-cli"),yr.forEach(t),Zo=n(ja," to setup the evaluation module the Readme structure and instructions are automatically created. It should include a general description of the metric, information about its input/output format, examples as well as information about its limiations or biases and references."),ja.forEach(t),ua=h(e),O=l(e,"H2",{class:!0});var qa=r(O);Z=l(qa,"A",{id:!0,class:!0,href:!0});var br=r(Z);gt=l(br,"SPAN",{});var gr=r(gt);f(be.$$.fragment,gr),gr.forEach(t),br.forEach(t),el=h(qa),kt=l(qa,"SPAN",{});var kr=r(kt);tl=n(kr,"Requirements"),kr.forEach(t),qa.forEach(t),pa=h(e),$=l(e,"P",{});var P=r($);al=n(P,"If your evaluation modules has additional dependencies (e.g. "),At=l(P,"CODE",{});var Ar=r(At);ol=n(Ar,"sklearn"),Ar.forEach(t),ll=n(P," or "),Pt=l(P,"CODE",{});var Pr=r(Pt);rl=n(Pr,"nltk"),Pr.forEach(t),sl=n(P,") the "),St=l(P,"CODE",{});var Sr=r(St);il=n(Sr,"requirements.txt"),Sr.forEach(t),nl=n(P," files is the place to put them. The file follows the "),xt=l(P,"CODE",{});var xr=r(xt);ul=n(xr,"pip"),xr.forEach(t),pl=n(P," format and you can list all dependencies there."),P.forEach(t),ha=h(e),M=l(e,"H2",{class:!0});var Na=r(M);ee=l(Na,"A",{id:!0,class:!0,href:!0});var Cr=r(ee);Ct=l(Cr,"SPAN",{});var Tr=r(Ct);f(ge.$$.fragment,Tr),Tr.forEach(t),Cr.forEach(t),hl=h(Na),Tt=l(Na,"SPAN",{});var Ir=r(Tt);dl=n(Ir,"App"),Ir.forEach(t),Na.forEach(t),da=h(e),te=l(e,"P",{});var Oa=r(te);cl=n(Oa,"The "),It=l(Oa,"CODE",{});var Hr=r(It);fl=n(Hr,"app.py"),Hr.forEach(t),ml=n(Oa," is where the Spaces widget lives. In general it looks like the following and does not require any changes:"),Oa.forEach(t),ca=h(e),f(ke.$$.fragment,e),fa=h(e),Oe=l(e,"P",{});var jr=r(Oe);vl=n(jr,"If you want a custom widget you could add your gradio app here."),jr.forEach(t),ma=h(e),D=l(e,"H2",{class:!0});var Ma=r(D);ae=l(Ma,"A",{id:!0,class:!0,href:!0});var qr=r(ae);Ht=l(qr,"SPAN",{});var Nr=r(Ht);f(Ae.$$.fragment,Nr),Nr.forEach(t),qr.forEach(t),wl=h(Ma),jt=l(Ma,"SPAN",{});var Or=r(jt);_l=n(Or,"Push to Hub"),Or.forEach(t),Ma.forEach(t),va=h(e),Me=l(e,"P",{});var Mr=r(Me);$l=n(Mr,"Finally, when you are done with all the above changes it is time to push your evaluation module to the hub. To do so navigate to the folder of your module and git add/commit/push the changes to the hub:"),Mr.forEach(t),wa=h(e),f(Pe.$$.fragment,e),_a=h(e),De=l(e,"P",{});var Dr=r(De);El=n(Dr,"Tada \u{1F389}! Your evaluation module is now on the \u{1F917} Hub and ready to be used by everybody!"),Dr.forEach(t),this.h()},h(){d(S,"name","hf:doc:metadata"),d(S,"content",JSON.stringify(zr)),d(L,"id","creating-and-sharing-a-new-evaluation"),d(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(L,"href","#creating-and-sharing-a-new-evaluation"),d(x,"class","relative group"),d(R,"id","setup"),d(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(R,"href","#setup"),d(C,"class","relative group"),d(B,"id","create"),d(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(B,"href","#create"),d(T,"class","relative group"),d(pe,"href","https://huggingface.co/docs/hub/spaces"),d(pe,"rel","nofollow"),d(he,"href","https://huggingface.co/spaces/evaluate-metric/accuracy"),d(he,"rel","nofollow"),d(ce,"href","https://huggingface.co/docs/hub/spaces"),d(ce,"rel","nofollow"),d(U,"id","module-script"),d(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(U,"href","#module-script"),d(I,"class","relative group"),d(Y,"id","attributes"),d(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Y,"href","#attributes"),d(H,"class","relative group"),d(W,"id","download"),d(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(W,"href","#download"),d(j,"class","relative group"),d(J,"id","compute"),d(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(J,"href","#compute"),d(q,"class","relative group"),d(V,"id","readme"),d(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(V,"href","#readme"),d(N,"class","relative group"),d(Z,"id","requirements"),d(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Z,"href","#requirements"),d(O,"class","relative group"),d(ee,"id","app"),d(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ee,"href","#app"),d(M,"class","relative group"),d(ae,"id","push-to-hub"),d(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ae,"href","#push-to-hub"),d(D,"class","relative group")},m(e,s){a(document.head,S),u(e,qt,s),u(e,x,s),a(x,L),a(L,Fe),m(re,Fe,null),a(x,Da),a(x,Ue),a(Ue,La),u(e,Nt,s),u(e,C,s),a(C,R),a(R,Ke),m(se,Ke,null),a(C,Ra),a(C,Ye),a(Ye,Ba),u(e,Ot,s),u(e,xe,s),a(xe,Fa),u(e,Mt,s),m(ie,e,s),u(e,Dt,s),u(e,Ce,s),a(Ce,Ua),u(e,Lt,s),m(ne,e,s),u(e,Rt,s),u(e,T,s),a(T,B),a(B,ze),m(ue,ze,null),a(T,Ka),a(T,We),a(We,Ya),u(e,Bt,s),u(e,b,s),a(b,za),a(b,pe),a(pe,Wa),a(b,Ga),a(b,he),a(he,Ja),a(b,Qa),u(e,Ft,s),m(de,e,s),u(e,Ut,s),u(e,Te,s),a(Te,Va),u(e,Kt,s),u(e,F,s),a(F,Xa),a(F,ce),a(ce,Za),a(F,eo),u(e,Yt,s),u(e,I,s),a(I,U),a(U,Ge),m(fe,Ge,null),a(I,to),a(I,Je),a(Je,ao),u(e,zt,s),u(e,K,s),a(K,oo),a(K,Qe),a(Qe,lo),a(K,ro),u(e,Wt,s),u(e,H,s),a(H,Y),a(Y,Ve),m(me,Ve,null),a(H,so),a(H,Xe),a(Xe,io),u(e,Gt,s),u(e,z,s),a(z,no),a(z,Ze),a(Ze,uo),a(z,po),u(e,Jt,s),u(e,E,s),a(E,et),a(et,Ie),a(Ie,tt),a(tt,ho),a(Ie,co),a(E,fo),a(E,at),a(at,He),a(He,ot),a(ot,mo),a(He,vo),a(E,wo),a(E,lt),a(lt,je),a(je,rt),a(rt,_o),a(je,$o),a(E,Eo),a(E,st),a(st,g),a(g,it),a(it,yo),a(g,bo),a(g,nt),a(nt,go),a(g,ko),a(g,ut),a(ut,Ao),a(g,Po),u(e,Qt,s),u(e,qe,s),a(qe,So),u(e,Vt,s),u(e,j,s),a(j,W),a(W,pt),m(ve,pt,null),a(j,xo),a(j,ht),a(ht,Co),u(e,Xt,s),u(e,k,s),a(k,To),a(k,dt),a(dt,Io),a(k,Ho),a(k,ct),a(ct,jo),a(k,qo),u(e,Zt,s),m(we,e,s),u(e,ea,s),u(e,G,s),a(G,No),a(G,ft),a(ft,Oo),a(G,Mo),u(e,ta,s),m(_e,e,s),u(e,aa,s),u(e,Ne,s),a(Ne,Do),u(e,oa,s),u(e,q,s),a(q,J),a(J,mt),m($e,mt,null),a(q,Lo),a(q,vt),a(vt,Ro),u(e,la,s),u(e,A,s),a(A,Bo),a(A,wt),a(wt,Fo),a(A,Uo),a(A,_t),a(_t,Ko),a(A,Yo),u(e,ra,s),m(Ee,e,s),u(e,sa,s),u(e,Q,s),a(Q,zo),a(Q,$t),a($t,Wo),a(Q,Go),u(e,ia,s),u(e,N,s),a(N,V),a(V,Et),m(ye,Et,null),a(N,Jo),a(N,yt),a(yt,Qo),u(e,na,s),u(e,X,s),a(X,Vo),a(X,bt),a(bt,Xo),a(X,Zo),u(e,ua,s),u(e,O,s),a(O,Z),a(Z,gt),m(be,gt,null),a(O,el),a(O,kt),a(kt,tl),u(e,pa,s),u(e,$,s),a($,al),a($,At),a(At,ol),a($,ll),a($,Pt),a(Pt,rl),a($,sl),a($,St),a(St,il),a($,nl),a($,xt),a(xt,ul),a($,pl),u(e,ha,s),u(e,M,s),a(M,ee),a(ee,Ct),m(ge,Ct,null),a(M,hl),a(M,Tt),a(Tt,dl),u(e,da,s),u(e,te,s),a(te,cl),a(te,It),a(It,fl),a(te,ml),u(e,ca,s),m(ke,e,s),u(e,fa,s),u(e,Oe,s),a(Oe,vl),u(e,ma,s),u(e,D,s),a(D,ae),a(ae,Ht),m(Ae,Ht,null),a(D,wl),a(D,jt),a(jt,_l),u(e,va,s),u(e,Me,s),a(Me,$l),u(e,wa,s),m(Pe,e,s),u(e,_a,s),u(e,De,s),a(De,El),$a=!0},p:Ur,i(e){$a||(v(re.$$.fragment,e),v(se.$$.fragment,e),v(ie.$$.fragment,e),v(ne.$$.fragment,e),v(ue.$$.fragment,e),v(de.$$.fragment,e),v(fe.$$.fragment,e),v(me.$$.fragment,e),v(ve.$$.fragment,e),v(we.$$.fragment,e),v(_e.$$.fragment,e),v($e.$$.fragment,e),v(Ee.$$.fragment,e),v(ye.$$.fragment,e),v(be.$$.fragment,e),v(ge.$$.fragment,e),v(ke.$$.fragment,e),v(Ae.$$.fragment,e),v(Pe.$$.fragment,e),$a=!0)},o(e){w(re.$$.fragment,e),w(se.$$.fragment,e),w(ie.$$.fragment,e),w(ne.$$.fragment,e),w(ue.$$.fragment,e),w(de.$$.fragment,e),w(fe.$$.fragment,e),w(me.$$.fragment,e),w(ve.$$.fragment,e),w(we.$$.fragment,e),w(_e.$$.fragment,e),w($e.$$.fragment,e),w(Ee.$$.fragment,e),w(ye.$$.fragment,e),w(be.$$.fragment,e),w(ge.$$.fragment,e),w(ke.$$.fragment,e),w(Ae.$$.fragment,e),w(Pe.$$.fragment,e),$a=!1},d(e){t(S),e&&t(qt),e&&t(x),_(re),e&&t(Nt),e&&t(C),_(se),e&&t(Ot),e&&t(xe),e&&t(Mt),_(ie,e),e&&t(Dt),e&&t(Ce),e&&t(Lt),_(ne,e),e&&t(Rt),e&&t(T),_(ue),e&&t(Bt),e&&t(b),e&&t(Ft),_(de,e),e&&t(Ut),e&&t(Te),e&&t(Kt),e&&t(F),e&&t(Yt),e&&t(I),_(fe),e&&t(zt),e&&t(K),e&&t(Wt),e&&t(H),_(me),e&&t(Gt),e&&t(z),e&&t(Jt),e&&t(E),e&&t(Qt),e&&t(qe),e&&t(Vt),e&&t(j),_(ve),e&&t(Xt),e&&t(k),e&&t(Zt),_(we,e),e&&t(ea),e&&t(G),e&&t(ta),_(_e,e),e&&t(aa),e&&t(Ne),e&&t(oa),e&&t(q),_($e),e&&t(la),e&&t(A),e&&t(ra),_(Ee,e),e&&t(sa),e&&t(Q),e&&t(ia),e&&t(N),_(ye),e&&t(na),e&&t(X),e&&t(ua),e&&t(O),_(be),e&&t(pa),e&&t($),e&&t(ha),e&&t(M),_(ge),e&&t(da),e&&t(te),e&&t(ca),_(ke,e),e&&t(fa),e&&t(Oe),e&&t(ma),e&&t(D),_(Ae),e&&t(va),e&&t(Me),e&&t(wa),_(Pe,e),e&&t(_a),e&&t(De)}}}const zr={local:"creating-and-sharing-a-new-evaluation",sections:[{local:"setup",title:"Setup"},{local:"create",title:"Create"},{local:"module-script",sections:[{local:"attributes",title:"Attributes"},{local:"download",title:"Download"},{local:"compute",title:"Compute"}],title:"Module script"},{local:"readme",title:"Readme"},{local:"requirements",title:"Requirements"},{local:"app",title:"App"},{local:"push-to-hub",title:"Push to Hub"}],title:"Creating and sharing a new evaluation"};function Wr(kl){return Kr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Vr extends Lr{constructor(S){super();Rr(this,S,Wr,Yr,Br,{})}}export{Vr as default,zr as metadata};
