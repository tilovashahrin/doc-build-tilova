import{S as wl,i as $l,s as bl,e as s,k as f,w as d,t as n,M as El,c as o,d as e,m as p,a as r,x as c,h as u,b as h,N as ae,G as a,g as i,y as v,L as kl,q as m,o as y,B as _,v as Al}from"../chunks/vendor-hf-doc-builder.js";import{I as N}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as se}from"../chunks/CodeBlock-hf-doc-builder.js";function Pl(Ro){let b,Ve,E,C,oe,Y,ls,re,is,Je,T,ns,Z,us,hs,Be,O,fs,tt,ps,ds,Ke,k,U,le,et,cs,ie,vs,Qe,Tt,ms,Xe,A,q,ne,at,ys,ue,_s,Ye,Ot,gs,Ze,M,st,ws,he,$s,bs,Es,fe,ks,ta,ot,pe,Vo,ea,P,F,de,rt,As,ce,Ps,aa,Ut,D,Ds,ve,Ss,Ls,me,js,xs,sa,lt,ye,Jo,oa,it,_e,Hs,ra,nt,ge,Bo,la,ut,we,Is,ia,ht,$e,Ko,na,S,G,be,ft,Ns,Ee,Cs,ua,qt,Ts,ha,Mt,L,Os,ke,Us,qs,Ae,Ms,Fs,fa,pt,Pe,Qo,pa,g,De,dt,Gs,ct,zs,Ws,Rs,Se,vt,Vs,mt,Js,Bs,Ks,Le,je,Qs,da,yt,xe,Xo,ca,z,Xs,_t,Ys,Zs,va,j,W,He,gt,to,Ie,eo,ma,R,ao,Ft,so,oo,ya,wt,_a,x,V,Ne,$t,ro,Ce,lo,ga,J,io,bt,no,uo,wa,Gt,Te,ho,$a,Et,ba,kt,Oe,fo,Ea,At,ka,Pt,Dt,po,St,Ue,co,vo,Aa,Lt,Pa,w,mo,qe,yo,_o,Me,go,wo,Da,jt,Sa,H,B,Fe,xt,$o,Ge,bo,La,zt,Eo,ja,K,ko,ze,Ao,Po,xa,Ht,Ha,I,Q,We,It,Do,Re,So,Ia,Wt,Lo,Na,Rt,jo,Ca,$,Nt,xo,Vt,Ho,Io,No,Jt,Bt,Co,To,Oo,Kt,Qt,Uo,qo,Ta,X,Mo,Ct,Fo,Go,Oa;return Y=new N({}),et=new N({}),at=new N({}),rt=new N({}),ft=new N({}),gt=new N({}),wt=new se({props:{code:`from datasets import load_dataset

dataset = load_dataset("stevhliu/demo")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;stevhliu/demo&quot;</span>)`}}),$t=new N({}),Et=new se({props:{code:"pip install huggingface_hub",highlighted:"pip install huggingface_hub"}}),At=new se({props:{code:"huggingface-cli login",highlighted:"huggingface-cli login"}}),Lt=new se({props:{code:`from datasets import load_dataset

dataset = load_dataset("stevhliu/demo")
dataset.push_to_hub("stevhliu/processed_demo")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;stevhliu/demo&quot;</span>)
<span class="hljs-comment"># dataset = dataset.map(...)  # do all your processing here</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.push_to_hub(<span class="hljs-string">&quot;stevhliu/processed_demo&quot;</span>)`}}),jt=new se({props:{code:'dataset.push_to_hub("stevhliu/private_processed_demo", private=True)',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.push_to_hub(<span class="hljs-string">&quot;stevhliu/private_processed_demo&quot;</span>, private=<span class="hljs-literal">True</span>)'}}),xt=new N({}),Ht=new se({props:{code:`from datasets import load_dataset

dataset = load_dataset("stevhliu/demo", use_auth_token=True)

dataset = load_dataset("organization/dataset_name", use_auth_token=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-comment"># Load a private individual dataset</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;stevhliu/demo&quot;</span>, use_auth_token=<span class="hljs-literal">True</span>)

<span class="hljs-comment"># Load a private organization dataset</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;organization/dataset_name&quot;</span>, use_auth_token=<span class="hljs-literal">True</span>)`}}),It=new N({}),{c(){b=s("meta"),Ve=f(),E=s("h1"),C=s("a"),oe=s("span"),d(Y.$$.fragment),ls=f(),re=s("span"),is=n("Share a dataset to the Hub"),Je=f(),T=s("p"),ns=n("The "),Z=s("a"),us=n("Hub"),hs=n(" is home to an extensive collection of community-curated and popular research datasets. We encourage you to share your dataset to the Hub to help grow the ML community and accelerate progress for everyone. All contributions are welcome; adding a dataset is just a drag and drop away!"),Be=f(),O=s("p"),fs=n("Start by "),tt=s("a"),ps=n("creating a Hugging Face Hub account"),ds=n(" if you don\u2019t have one yet."),Ke=f(),k=s("h2"),U=s("a"),le=s("span"),d(et.$$.fragment),cs=f(),ie=s("span"),vs=n("Upload with the Hub UI"),Qe=f(),Tt=s("p"),ms=n("The Hub\u2019s web-based interface allows users without any developer experience to upload a dataset."),Xe=f(),A=s("h3"),q=s("a"),ne=s("span"),d(at.$$.fragment),ys=f(),ue=s("span"),_s=n("Create a repository"),Ye=f(),Ot=s("p"),gs=n("A repository hosts all your dataset files, including the revision history, making storing more than one dataset version possible."),Ze=f(),M=s("ol"),st=s("li"),ws=n("Click on your profile and select "),he=s("strong"),$s=n("New Dataset"),bs=n(" to create a new dataset repository."),Es=f(),fe=s("li"),ks=n("Pick a name for your dataset, and choose whether it is a public or private dataset. A public dataset is visible to anyone, whereas a private dataset can only be viewed by you or members of your organization."),ta=f(),ot=s("div"),pe=s("img"),ea=f(),P=s("h3"),F=s("a"),de=s("span"),d(rt.$$.fragment),As=f(),ce=s("span"),Ps=n("Upload dataset"),aa=f(),Ut=s("ol"),D=s("li"),Ds=n("Once you\u2019ve created a repository, navigate to the "),ve=s("strong"),Ss=n("Files and versions"),Ls=n(" tab to add a file. Select "),me=s("strong"),js=n("Add file"),xs=n(" to upload your dataset files. We currently support the following data formats: CSV, JSON, JSON lines, text, and Parquet."),sa=f(),lt=s("div"),ye=s("img"),oa=f(),it=s("ol"),_e=s("li"),Hs=n("Drag and drop your dataset files and add a brief descriptive commit message."),ra=f(),nt=s("div"),ge=s("img"),la=f(),ut=s("ol"),we=s("li"),Is=n("After uploading your dataset files, they are stored in your dataset repository."),ia=f(),ht=s("div"),$e=s("img"),na=f(),S=s("h3"),G=s("a"),be=s("span"),d(ft.$$.fragment),Ns=f(),Ee=s("span"),Cs=n("Create a Dataset card"),ua=f(),qt=s("p"),Ts=n("Adding a Dataset card is super valuable for helping users find your dataset and understand how to use it responsibly."),ha=f(),Mt=s("ol"),L=s("li"),Os=n("Click on "),ke=s("strong"),Us=n("Create Dataset Card"),qs=n(" to create a Dataset card. This button creates a "),Ae=s("code"),Ms=n("README.md"),Fs=n(" file in your repository."),fa=f(),pt=s("div"),Pe=s("img"),pa=f(),g=s("ol"),De=s("li"),dt=s("p"),Gs=n("Feel free to copy this Dataset card "),ct=s("a"),zs=n("template"),Ws=n(" to help you fill out all the relevant fields."),Rs=f(),Se=s("li"),vt=s("p"),Vs=n("The Dataset card uses structured tags to help users discover your dataset on the Hub. Use the "),mt=s("a"),Js=n("Dataset Tagger"),Bs=n(" to help you generate the appropriate tags."),Ks=f(),Le=s("li"),je=s("p"),Qs=n("Copy the generated tags, paste them at the top of your Dataset card, and then commit your changes."),da=f(),yt=s("div"),xe=s("img"),ca=f(),z=s("p"),Xs=n("For a detailed example of what a good Dataset card should look like, take a look at the "),_t=s("a"),Ys=n("CNN DailyMail Dataset card"),Zs=n("."),va=f(),j=s("h3"),W=s("a"),He=s("span"),d(gt.$$.fragment),to=f(),Ie=s("span"),eo=n("Load dataset"),ma=f(),R=s("p"),ao=n("Once your dataset is stored on the Hub, anyone can load it with the "),Ft=s("a"),so=n("load_dataset()"),oo=n(" function:"),ya=f(),d(wt.$$.fragment),_a=f(),x=s("h2"),V=s("a"),Ne=s("span"),d($t.$$.fragment),ro=f(),Ce=s("span"),lo=n("Upload with Python"),ga=f(),J=s("p"),io=n("Users who prefer to upload a dataset programmatically can use the "),bt=s("a"),no=n("huggingface_hub"),uo=n(" library. This library allows users to interact with the Hub from Python."),wa=f(),Gt=s("ol"),Te=s("li"),ho=n("Begin by installing the library:"),$a=f(),d(Et.$$.fragment),ba=f(),kt=s("ol"),Oe=s("li"),fo=n("To upload a dataset on the Hub in Python, you need to log in to your Hugging Face account:"),Ea=f(),d(At.$$.fragment),ka=f(),Pt=s("ol"),Dt=s("li"),po=n("Use the "),St=s("a"),Ue=s("code"),co=n("push_to_hub()"),vo=n(" function to help you add, commit, and push a file to your repository:"),Aa=f(),d(Lt.$$.fragment),Pa=f(),w=s("p"),mo=n("To set your dataset as private, set the "),qe=s("code"),yo=n("private"),_o=n(" parameter to "),Me=s("code"),go=n("True"),wo=n(". This parameter will only work if you are creating a repository for the first time."),Da=f(),d(jt.$$.fragment),Sa=f(),H=s("h3"),B=s("a"),Fe=s("span"),d(xt.$$.fragment),$o=f(),Ge=s("span"),bo=n("Privacy"),La=f(),zt=s("p"),Eo=n("A private dataset is only accessible by you. Similarly, if you share a dataset within your organization, then members of the organization can also access the dataset."),ja=f(),K=s("p"),ko=n("Load a private dataset by providing your authentication token to the "),ze=s("code"),Ao=n("use_auth_token"),Po=n(" parameter:"),xa=f(),d(Ht.$$.fragment),Ha=f(),I=s("h2"),Q=s("a"),We=s("span"),d(It.$$.fragment),Do=f(),Re=s("span"),So=n("What's next?"),Ia=f(),Wt=s("p"),Lo=n("Congratulations, you\u2019ve completed the tutorials! \u{1F973}"),Na=f(),Rt=s("p"),jo=n("From here, you can go on to:"),Ca=f(),$=s("ul"),Nt=s("li"),xo=n("Learn more about how to use \u{1F917} Datasets other functions to "),Vt=s("a"),Ho=n("process your dataset"),Io=n("."),No=f(),Jt=s("li"),Bt=s("a"),Co=n("Stream large datasets"),To=n(" and avoid waiting for the entire dataset to download."),Oo=f(),Kt=s("li"),Qt=s("a"),Uo=n("Write a dataset loading script"),qo=n(" and share your dataset with the community."),Ta=f(),X=s("p"),Mo=n("If you have any questions about \u{1F917} Datasets, feel free to join and ask the community on our "),Ct=s("a"),Fo=n("forum"),Go=n("."),this.h()},l(t){const l=El('[data-svelte="svelte-1phssyn"]',document.head);b=o(l,"META",{name:!0,content:!0}),l.forEach(e),Ve=p(t),E=o(t,"H1",{class:!0});var Ua=r(E);C=o(Ua,"A",{id:!0,class:!0,href:!0});var Yo=r(C);oe=o(Yo,"SPAN",{});var Zo=r(oe);c(Y.$$.fragment,Zo),Zo.forEach(e),Yo.forEach(e),ls=p(Ua),re=o(Ua,"SPAN",{});var tr=r(re);is=u(tr,"Share a dataset to the Hub"),tr.forEach(e),Ua.forEach(e),Je=p(t),T=o(t,"P",{});var qa=r(T);ns=u(qa,"The "),Z=o(qa,"A",{href:!0,rel:!0});var er=r(Z);us=u(er,"Hub"),er.forEach(e),hs=u(qa," is home to an extensive collection of community-curated and popular research datasets. We encourage you to share your dataset to the Hub to help grow the ML community and accelerate progress for everyone. All contributions are welcome; adding a dataset is just a drag and drop away!"),qa.forEach(e),Be=p(t),O=o(t,"P",{});var Ma=r(O);fs=u(Ma,"Start by "),tt=o(Ma,"A",{href:!0,rel:!0});var ar=r(tt);ps=u(ar,"creating a Hugging Face Hub account"),ar.forEach(e),ds=u(Ma," if you don\u2019t have one yet."),Ma.forEach(e),Ke=p(t),k=o(t,"H2",{class:!0});var Fa=r(k);U=o(Fa,"A",{id:!0,class:!0,href:!0});var sr=r(U);le=o(sr,"SPAN",{});var or=r(le);c(et.$$.fragment,or),or.forEach(e),sr.forEach(e),cs=p(Fa),ie=o(Fa,"SPAN",{});var rr=r(ie);vs=u(rr,"Upload with the Hub UI"),rr.forEach(e),Fa.forEach(e),Qe=p(t),Tt=o(t,"P",{});var lr=r(Tt);ms=u(lr,"The Hub\u2019s web-based interface allows users without any developer experience to upload a dataset."),lr.forEach(e),Xe=p(t),A=o(t,"H3",{class:!0});var Ga=r(A);q=o(Ga,"A",{id:!0,class:!0,href:!0});var ir=r(q);ne=o(ir,"SPAN",{});var nr=r(ne);c(at.$$.fragment,nr),nr.forEach(e),ir.forEach(e),ys=p(Ga),ue=o(Ga,"SPAN",{});var ur=r(ue);_s=u(ur,"Create a repository"),ur.forEach(e),Ga.forEach(e),Ye=p(t),Ot=o(t,"P",{});var hr=r(Ot);gs=u(hr,"A repository hosts all your dataset files, including the revision history, making storing more than one dataset version possible."),hr.forEach(e),Ze=p(t),M=o(t,"OL",{});var za=r(M);st=o(za,"LI",{});var Wa=r(st);ws=u(Wa,"Click on your profile and select "),he=o(Wa,"STRONG",{});var fr=r(he);$s=u(fr,"New Dataset"),fr.forEach(e),bs=u(Wa," to create a new dataset repository."),Wa.forEach(e),Es=p(za),fe=o(za,"LI",{});var pr=r(fe);ks=u(pr,"Pick a name for your dataset, and choose whether it is a public or private dataset. A public dataset is visible to anyone, whereas a private dataset can only be viewed by you or members of your organization."),pr.forEach(e),za.forEach(e),ta=p(t),ot=o(t,"DIV",{class:!0});var dr=r(ot);pe=o(dr,"IMG",{src:!0}),dr.forEach(e),ea=p(t),P=o(t,"H3",{class:!0});var Ra=r(P);F=o(Ra,"A",{id:!0,class:!0,href:!0});var cr=r(F);de=o(cr,"SPAN",{});var vr=r(de);c(rt.$$.fragment,vr),vr.forEach(e),cr.forEach(e),As=p(Ra),ce=o(Ra,"SPAN",{});var mr=r(ce);Ps=u(mr,"Upload dataset"),mr.forEach(e),Ra.forEach(e),aa=p(t),Ut=o(t,"OL",{});var yr=r(Ut);D=o(yr,"LI",{});var Xt=r(D);Ds=u(Xt,"Once you\u2019ve created a repository, navigate to the "),ve=o(Xt,"STRONG",{});var _r=r(ve);Ss=u(_r,"Files and versions"),_r.forEach(e),Ls=u(Xt," tab to add a file. Select "),me=o(Xt,"STRONG",{});var gr=r(me);js=u(gr,"Add file"),gr.forEach(e),xs=u(Xt," to upload your dataset files. We currently support the following data formats: CSV, JSON, JSON lines, text, and Parquet."),Xt.forEach(e),yr.forEach(e),sa=p(t),lt=o(t,"DIV",{class:!0});var wr=r(lt);ye=o(wr,"IMG",{src:!0}),wr.forEach(e),oa=p(t),it=o(t,"OL",{start:!0});var $r=r(it);_e=o($r,"LI",{});var br=r(_e);Hs=u(br,"Drag and drop your dataset files and add a brief descriptive commit message."),br.forEach(e),$r.forEach(e),ra=p(t),nt=o(t,"DIV",{class:!0});var Er=r(nt);ge=o(Er,"IMG",{src:!0}),Er.forEach(e),la=p(t),ut=o(t,"OL",{start:!0});var kr=r(ut);we=o(kr,"LI",{});var Ar=r(we);Is=u(Ar,"After uploading your dataset files, they are stored in your dataset repository."),Ar.forEach(e),kr.forEach(e),ia=p(t),ht=o(t,"DIV",{class:!0});var Pr=r(ht);$e=o(Pr,"IMG",{src:!0}),Pr.forEach(e),na=p(t),S=o(t,"H3",{class:!0});var Va=r(S);G=o(Va,"A",{id:!0,class:!0,href:!0});var Dr=r(G);be=o(Dr,"SPAN",{});var Sr=r(be);c(ft.$$.fragment,Sr),Sr.forEach(e),Dr.forEach(e),Ns=p(Va),Ee=o(Va,"SPAN",{});var Lr=r(Ee);Cs=u(Lr,"Create a Dataset card"),Lr.forEach(e),Va.forEach(e),ua=p(t),qt=o(t,"P",{});var jr=r(qt);Ts=u(jr,"Adding a Dataset card is super valuable for helping users find your dataset and understand how to use it responsibly."),jr.forEach(e),ha=p(t),Mt=o(t,"OL",{});var xr=r(Mt);L=o(xr,"LI",{});var Yt=r(L);Os=u(Yt,"Click on "),ke=o(Yt,"STRONG",{});var Hr=r(ke);Us=u(Hr,"Create Dataset Card"),Hr.forEach(e),qs=u(Yt," to create a Dataset card. This button creates a "),Ae=o(Yt,"CODE",{});var Ir=r(Ae);Ms=u(Ir,"README.md"),Ir.forEach(e),Fs=u(Yt," file in your repository."),Yt.forEach(e),xr.forEach(e),fa=p(t),pt=o(t,"DIV",{class:!0});var Nr=r(pt);Pe=o(Nr,"IMG",{src:!0}),Nr.forEach(e),pa=p(t),g=o(t,"OL",{start:!0});var Zt=r(g);De=o(Zt,"LI",{});var Cr=r(De);dt=o(Cr,"P",{});var Ja=r(dt);Gs=u(Ja,"Feel free to copy this Dataset card "),ct=o(Ja,"A",{href:!0,rel:!0});var Tr=r(ct);zs=u(Tr,"template"),Tr.forEach(e),Ws=u(Ja," to help you fill out all the relevant fields."),Ja.forEach(e),Cr.forEach(e),Rs=p(Zt),Se=o(Zt,"LI",{});var Or=r(Se);vt=o(Or,"P",{});var Ba=r(vt);Vs=u(Ba,"The Dataset card uses structured tags to help users discover your dataset on the Hub. Use the "),mt=o(Ba,"A",{href:!0,rel:!0});var Ur=r(mt);Js=u(Ur,"Dataset Tagger"),Ur.forEach(e),Bs=u(Ba," to help you generate the appropriate tags."),Ba.forEach(e),Or.forEach(e),Ks=p(Zt),Le=o(Zt,"LI",{});var qr=r(Le);je=o(qr,"P",{});var Mr=r(je);Qs=u(Mr,"Copy the generated tags, paste them at the top of your Dataset card, and then commit your changes."),Mr.forEach(e),qr.forEach(e),Zt.forEach(e),da=p(t),yt=o(t,"DIV",{class:!0});var Fr=r(yt);xe=o(Fr,"IMG",{src:!0}),Fr.forEach(e),ca=p(t),z=o(t,"P",{});var Ka=r(z);Xs=u(Ka,"For a detailed example of what a good Dataset card should look like, take a look at the "),_t=o(Ka,"A",{href:!0,rel:!0});var Gr=r(_t);Ys=u(Gr,"CNN DailyMail Dataset card"),Gr.forEach(e),Zs=u(Ka,"."),Ka.forEach(e),va=p(t),j=o(t,"H3",{class:!0});var Qa=r(j);W=o(Qa,"A",{id:!0,class:!0,href:!0});var zr=r(W);He=o(zr,"SPAN",{});var Wr=r(He);c(gt.$$.fragment,Wr),Wr.forEach(e),zr.forEach(e),to=p(Qa),Ie=o(Qa,"SPAN",{});var Rr=r(Ie);eo=u(Rr,"Load dataset"),Rr.forEach(e),Qa.forEach(e),ma=p(t),R=o(t,"P",{});var Xa=r(R);ao=u(Xa,"Once your dataset is stored on the Hub, anyone can load it with the "),Ft=o(Xa,"A",{href:!0});var Vr=r(Ft);so=u(Vr,"load_dataset()"),Vr.forEach(e),oo=u(Xa," function:"),Xa.forEach(e),ya=p(t),c(wt.$$.fragment,t),_a=p(t),x=o(t,"H2",{class:!0});var Ya=r(x);V=o(Ya,"A",{id:!0,class:!0,href:!0});var Jr=r(V);Ne=o(Jr,"SPAN",{});var Br=r(Ne);c($t.$$.fragment,Br),Br.forEach(e),Jr.forEach(e),ro=p(Ya),Ce=o(Ya,"SPAN",{});var Kr=r(Ce);lo=u(Kr,"Upload with Python"),Kr.forEach(e),Ya.forEach(e),ga=p(t),J=o(t,"P",{});var Za=r(J);io=u(Za,"Users who prefer to upload a dataset programmatically can use the "),bt=o(Za,"A",{href:!0,rel:!0});var Qr=r(bt);no=u(Qr,"huggingface_hub"),Qr.forEach(e),uo=u(Za," library. This library allows users to interact with the Hub from Python."),Za.forEach(e),wa=p(t),Gt=o(t,"OL",{});var Xr=r(Gt);Te=o(Xr,"LI",{});var Yr=r(Te);ho=u(Yr,"Begin by installing the library:"),Yr.forEach(e),Xr.forEach(e),$a=p(t),c(Et.$$.fragment,t),ba=p(t),kt=o(t,"OL",{start:!0});var Zr=r(kt);Oe=o(Zr,"LI",{});var tl=r(Oe);fo=u(tl,"To upload a dataset on the Hub in Python, you need to log in to your Hugging Face account:"),tl.forEach(e),Zr.forEach(e),Ea=p(t),c(At.$$.fragment,t),ka=p(t),Pt=o(t,"OL",{start:!0});var el=r(Pt);Dt=o(el,"LI",{});var ts=r(Dt);po=u(ts,"Use the "),St=o(ts,"A",{href:!0,rel:!0});var al=r(St);Ue=o(al,"CODE",{});var sl=r(Ue);co=u(sl,"push_to_hub()"),sl.forEach(e),al.forEach(e),vo=u(ts," function to help you add, commit, and push a file to your repository:"),ts.forEach(e),el.forEach(e),Aa=p(t),c(Lt.$$.fragment,t),Pa=p(t),w=o(t,"P",{});var te=r(w);mo=u(te,"To set your dataset as private, set the "),qe=o(te,"CODE",{});var ol=r(qe);yo=u(ol,"private"),ol.forEach(e),_o=u(te," parameter to "),Me=o(te,"CODE",{});var rl=r(Me);go=u(rl,"True"),rl.forEach(e),wo=u(te,". This parameter will only work if you are creating a repository for the first time."),te.forEach(e),Da=p(t),c(jt.$$.fragment,t),Sa=p(t),H=o(t,"H3",{class:!0});var es=r(H);B=o(es,"A",{id:!0,class:!0,href:!0});var ll=r(B);Fe=o(ll,"SPAN",{});var il=r(Fe);c(xt.$$.fragment,il),il.forEach(e),ll.forEach(e),$o=p(es),Ge=o(es,"SPAN",{});var nl=r(Ge);bo=u(nl,"Privacy"),nl.forEach(e),es.forEach(e),La=p(t),zt=o(t,"P",{});var ul=r(zt);Eo=u(ul,"A private dataset is only accessible by you. Similarly, if you share a dataset within your organization, then members of the organization can also access the dataset."),ul.forEach(e),ja=p(t),K=o(t,"P",{});var as=r(K);ko=u(as,"Load a private dataset by providing your authentication token to the "),ze=o(as,"CODE",{});var hl=r(ze);Ao=u(hl,"use_auth_token"),hl.forEach(e),Po=u(as," parameter:"),as.forEach(e),xa=p(t),c(Ht.$$.fragment,t),Ha=p(t),I=o(t,"H2",{class:!0});var ss=r(I);Q=o(ss,"A",{id:!0,class:!0,href:!0});var fl=r(Q);We=o(fl,"SPAN",{});var pl=r(We);c(It.$$.fragment,pl),pl.forEach(e),fl.forEach(e),Do=p(ss),Re=o(ss,"SPAN",{});var dl=r(Re);So=u(dl,"What's next?"),dl.forEach(e),ss.forEach(e),Ia=p(t),Wt=o(t,"P",{});var cl=r(Wt);Lo=u(cl,"Congratulations, you\u2019ve completed the tutorials! \u{1F973}"),cl.forEach(e),Na=p(t),Rt=o(t,"P",{});var vl=r(Rt);jo=u(vl,"From here, you can go on to:"),vl.forEach(e),Ca=p(t),$=o(t,"UL",{});var ee=r($);Nt=o(ee,"LI",{});var os=r(Nt);xo=u(os,"Learn more about how to use \u{1F917} Datasets other functions to "),Vt=o(os,"A",{href:!0});var ml=r(Vt);Ho=u(ml,"process your dataset"),ml.forEach(e),Io=u(os,"."),os.forEach(e),No=p(ee),Jt=o(ee,"LI",{});var zo=r(Jt);Bt=o(zo,"A",{href:!0});var yl=r(Bt);Co=u(yl,"Stream large datasets"),yl.forEach(e),To=u(zo," and avoid waiting for the entire dataset to download."),zo.forEach(e),Oo=p(ee),Kt=o(ee,"LI",{});var Wo=r(Kt);Qt=o(Wo,"A",{href:!0});var _l=r(Qt);Uo=u(_l,"Write a dataset loading script"),_l.forEach(e),qo=u(Wo," and share your dataset with the community."),Wo.forEach(e),ee.forEach(e),Ta=p(t),X=o(t,"P",{});var rs=r(X);Mo=u(rs,"If you have any questions about \u{1F917} Datasets, feel free to join and ask the community on our "),Ct=o(rs,"A",{href:!0,rel:!0});var gl=r(Ct);Fo=u(gl,"forum"),gl.forEach(e),Go=u(rs,"."),rs.forEach(e),this.h()},h(){h(b,"name","hf:doc:metadata"),h(b,"content",JSON.stringify(Dl)),h(C,"id","share-a-dataset-to-the-hub"),h(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(C,"href","#share-a-dataset-to-the-hub"),h(E,"class","relative group"),h(Z,"href","https://huggingface.co/datasets"),h(Z,"rel","nofollow"),h(tt,"href","https://huggingface.co/join"),h(tt,"rel","nofollow"),h(U,"id","upload-with-the-hub-ui"),h(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(U,"href","#upload-with-the-hub-ui"),h(k,"class","relative group"),h(q,"id","create-a-repository"),h(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(q,"href","#create-a-repository"),h(A,"class","relative group"),ae(pe.src,Vo="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/create_repo.png")||h(pe,"src",Vo),h(ot,"class","flex justify-center"),h(F,"id","upload-dataset"),h(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(F,"href","#upload-dataset"),h(P,"class","relative group"),ae(ye.src,Jo="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/upload_files.png")||h(ye,"src",Jo),h(lt,"class","flex justify-center"),h(it,"start","2"),ae(ge.src,Bo="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/commit_files.png")||h(ge,"src",Bo),h(nt,"class","flex justify-center"),h(ut,"start","3"),ae($e.src,Ko="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/files_stored.png")||h($e,"src",Ko),h(ht,"class","flex justify-center"),h(G,"id","create-a-dataset-card"),h(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(G,"href","#create-a-dataset-card"),h(S,"class","relative group"),ae(Pe.src,Qo="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/dataset_card.png")||h(Pe,"src",Qo),h(pt,"class","flex justify-center"),h(ct,"href","https://raw.githubusercontent.com/huggingface/datasets/main/templates/README.md"),h(ct,"rel","nofollow"),h(mt,"href","https://huggingface.co/spaces/huggingface/datasets-tagging"),h(mt,"rel","nofollow"),h(g,"start","2"),ae(xe.src,Xo="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/card_tags.png")||h(xe,"src",Xo),h(yt,"class","flex justify-center"),h(_t,"href","https://huggingface.co/datasets/cnn_dailymail"),h(_t,"rel","nofollow"),h(W,"id","load-dataset"),h(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(W,"href","#load-dataset"),h(j,"class","relative group"),h(Ft,"href","/docs/datasets/main/en/package_reference/loading_methods#datasets.load_dataset"),h(V,"id","upload-with-python"),h(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(V,"href","#upload-with-python"),h(x,"class","relative group"),h(bt,"href","https://huggingface.co/docs/huggingface_hub/index"),h(bt,"rel","nofollow"),h(kt,"start","2"),h(St,"href","https://huggingface.co/docs/datasets/main/en/package_reference/main_classes#datasets.DatasetDict.push_to_hub"),h(St,"rel","nofollow"),h(Pt,"start","3"),h(B,"id","privacy"),h(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(B,"href","#privacy"),h(H,"class","relative group"),h(Q,"id","whats-next"),h(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Q,"href","#whats-next"),h(I,"class","relative group"),h(Vt,"href","process"),h(Bt,"href","stream"),h(Qt,"href","dataset_script"),h(Ct,"href","https://discuss.huggingface.co/c/datasets/10"),h(Ct,"rel","nofollow")},m(t,l){a(document.head,b),i(t,Ve,l),i(t,E,l),a(E,C),a(C,oe),v(Y,oe,null),a(E,ls),a(E,re),a(re,is),i(t,Je,l),i(t,T,l),a(T,ns),a(T,Z),a(Z,us),a(T,hs),i(t,Be,l),i(t,O,l),a(O,fs),a(O,tt),a(tt,ps),a(O,ds),i(t,Ke,l),i(t,k,l),a(k,U),a(U,le),v(et,le,null),a(k,cs),a(k,ie),a(ie,vs),i(t,Qe,l),i(t,Tt,l),a(Tt,ms),i(t,Xe,l),i(t,A,l),a(A,q),a(q,ne),v(at,ne,null),a(A,ys),a(A,ue),a(ue,_s),i(t,Ye,l),i(t,Ot,l),a(Ot,gs),i(t,Ze,l),i(t,M,l),a(M,st),a(st,ws),a(st,he),a(he,$s),a(st,bs),a(M,Es),a(M,fe),a(fe,ks),i(t,ta,l),i(t,ot,l),a(ot,pe),i(t,ea,l),i(t,P,l),a(P,F),a(F,de),v(rt,de,null),a(P,As),a(P,ce),a(ce,Ps),i(t,aa,l),i(t,Ut,l),a(Ut,D),a(D,Ds),a(D,ve),a(ve,Ss),a(D,Ls),a(D,me),a(me,js),a(D,xs),i(t,sa,l),i(t,lt,l),a(lt,ye),i(t,oa,l),i(t,it,l),a(it,_e),a(_e,Hs),i(t,ra,l),i(t,nt,l),a(nt,ge),i(t,la,l),i(t,ut,l),a(ut,we),a(we,Is),i(t,ia,l),i(t,ht,l),a(ht,$e),i(t,na,l),i(t,S,l),a(S,G),a(G,be),v(ft,be,null),a(S,Ns),a(S,Ee),a(Ee,Cs),i(t,ua,l),i(t,qt,l),a(qt,Ts),i(t,ha,l),i(t,Mt,l),a(Mt,L),a(L,Os),a(L,ke),a(ke,Us),a(L,qs),a(L,Ae),a(Ae,Ms),a(L,Fs),i(t,fa,l),i(t,pt,l),a(pt,Pe),i(t,pa,l),i(t,g,l),a(g,De),a(De,dt),a(dt,Gs),a(dt,ct),a(ct,zs),a(dt,Ws),a(g,Rs),a(g,Se),a(Se,vt),a(vt,Vs),a(vt,mt),a(mt,Js),a(vt,Bs),a(g,Ks),a(g,Le),a(Le,je),a(je,Qs),i(t,da,l),i(t,yt,l),a(yt,xe),i(t,ca,l),i(t,z,l),a(z,Xs),a(z,_t),a(_t,Ys),a(z,Zs),i(t,va,l),i(t,j,l),a(j,W),a(W,He),v(gt,He,null),a(j,to),a(j,Ie),a(Ie,eo),i(t,ma,l),i(t,R,l),a(R,ao),a(R,Ft),a(Ft,so),a(R,oo),i(t,ya,l),v(wt,t,l),i(t,_a,l),i(t,x,l),a(x,V),a(V,Ne),v($t,Ne,null),a(x,ro),a(x,Ce),a(Ce,lo),i(t,ga,l),i(t,J,l),a(J,io),a(J,bt),a(bt,no),a(J,uo),i(t,wa,l),i(t,Gt,l),a(Gt,Te),a(Te,ho),i(t,$a,l),v(Et,t,l),i(t,ba,l),i(t,kt,l),a(kt,Oe),a(Oe,fo),i(t,Ea,l),v(At,t,l),i(t,ka,l),i(t,Pt,l),a(Pt,Dt),a(Dt,po),a(Dt,St),a(St,Ue),a(Ue,co),a(Dt,vo),i(t,Aa,l),v(Lt,t,l),i(t,Pa,l),i(t,w,l),a(w,mo),a(w,qe),a(qe,yo),a(w,_o),a(w,Me),a(Me,go),a(w,wo),i(t,Da,l),v(jt,t,l),i(t,Sa,l),i(t,H,l),a(H,B),a(B,Fe),v(xt,Fe,null),a(H,$o),a(H,Ge),a(Ge,bo),i(t,La,l),i(t,zt,l),a(zt,Eo),i(t,ja,l),i(t,K,l),a(K,ko),a(K,ze),a(ze,Ao),a(K,Po),i(t,xa,l),v(Ht,t,l),i(t,Ha,l),i(t,I,l),a(I,Q),a(Q,We),v(It,We,null),a(I,Do),a(I,Re),a(Re,So),i(t,Ia,l),i(t,Wt,l),a(Wt,Lo),i(t,Na,l),i(t,Rt,l),a(Rt,jo),i(t,Ca,l),i(t,$,l),a($,Nt),a(Nt,xo),a(Nt,Vt),a(Vt,Ho),a(Nt,Io),a($,No),a($,Jt),a(Jt,Bt),a(Bt,Co),a(Jt,To),a($,Oo),a($,Kt),a(Kt,Qt),a(Qt,Uo),a(Kt,qo),i(t,Ta,l),i(t,X,l),a(X,Mo),a(X,Ct),a(Ct,Fo),a(X,Go),Oa=!0},p:kl,i(t){Oa||(m(Y.$$.fragment,t),m(et.$$.fragment,t),m(at.$$.fragment,t),m(rt.$$.fragment,t),m(ft.$$.fragment,t),m(gt.$$.fragment,t),m(wt.$$.fragment,t),m($t.$$.fragment,t),m(Et.$$.fragment,t),m(At.$$.fragment,t),m(Lt.$$.fragment,t),m(jt.$$.fragment,t),m(xt.$$.fragment,t),m(Ht.$$.fragment,t),m(It.$$.fragment,t),Oa=!0)},o(t){y(Y.$$.fragment,t),y(et.$$.fragment,t),y(at.$$.fragment,t),y(rt.$$.fragment,t),y(ft.$$.fragment,t),y(gt.$$.fragment,t),y(wt.$$.fragment,t),y($t.$$.fragment,t),y(Et.$$.fragment,t),y(At.$$.fragment,t),y(Lt.$$.fragment,t),y(jt.$$.fragment,t),y(xt.$$.fragment,t),y(Ht.$$.fragment,t),y(It.$$.fragment,t),Oa=!1},d(t){e(b),t&&e(Ve),t&&e(E),_(Y),t&&e(Je),t&&e(T),t&&e(Be),t&&e(O),t&&e(Ke),t&&e(k),_(et),t&&e(Qe),t&&e(Tt),t&&e(Xe),t&&e(A),_(at),t&&e(Ye),t&&e(Ot),t&&e(Ze),t&&e(M),t&&e(ta),t&&e(ot),t&&e(ea),t&&e(P),_(rt),t&&e(aa),t&&e(Ut),t&&e(sa),t&&e(lt),t&&e(oa),t&&e(it),t&&e(ra),t&&e(nt),t&&e(la),t&&e(ut),t&&e(ia),t&&e(ht),t&&e(na),t&&e(S),_(ft),t&&e(ua),t&&e(qt),t&&e(ha),t&&e(Mt),t&&e(fa),t&&e(pt),t&&e(pa),t&&e(g),t&&e(da),t&&e(yt),t&&e(ca),t&&e(z),t&&e(va),t&&e(j),_(gt),t&&e(ma),t&&e(R),t&&e(ya),_(wt,t),t&&e(_a),t&&e(x),_($t),t&&e(ga),t&&e(J),t&&e(wa),t&&e(Gt),t&&e($a),_(Et,t),t&&e(ba),t&&e(kt),t&&e(Ea),_(At,t),t&&e(ka),t&&e(Pt),t&&e(Aa),_(Lt,t),t&&e(Pa),t&&e(w),t&&e(Da),_(jt,t),t&&e(Sa),t&&e(H),_(xt),t&&e(La),t&&e(zt),t&&e(ja),t&&e(K),t&&e(xa),_(Ht,t),t&&e(Ha),t&&e(I),_(It),t&&e(Ia),t&&e(Wt),t&&e(Na),t&&e(Rt),t&&e(Ca),t&&e($),t&&e(Ta),t&&e(X)}}}const Dl={local:"share-a-dataset-to-the-hub",sections:[{local:"upload-with-the-hub-ui",sections:[{local:"create-a-repository",title:"Create a repository"},{local:"upload-dataset",title:"Upload dataset"},{local:"create-a-dataset-card",title:"Create a Dataset card"},{local:"load-dataset",title:"Load dataset"}],title:"Upload with the Hub UI"},{local:"upload-with-python",sections:[{local:"privacy",title:"Privacy"}],title:"Upload with Python"},{local:"whats-next",title:"What's next?"}],title:"Share a dataset to the Hub"};function Sl(Ro){return Al(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Hl extends wl{constructor(b){super();$l(this,b,Sl,Pl,bl,{})}}export{Hl as default,Dl as metadata};
