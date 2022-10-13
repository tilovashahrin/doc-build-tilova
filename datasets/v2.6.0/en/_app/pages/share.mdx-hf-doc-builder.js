import{S as tl,i as al,s as sl,e as o,k as p,w as d,t as n,M as ol,c as r,d as t,m as h,a as l,x as c,h as f,b as u,G as a,g as i,y as m,q as y,o as v,B as w,v as rl}from"../chunks/vendor-hf-doc-builder.js";import{T as ll}from"../chunks/Tip-hf-doc-builder.js";import{I as Q}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as S}from"../chunks/CodeBlock-hf-doc-builder.js";function il(Nt){let g,T;return{c(){g=o("p"),T=n("The distinction between a Hub dataset and a dataset from GitHub only comes from the legacy sharing workflow. It does not involve any ranking, decisioning, or opinion regarding the contents of the dataset itself.")},l(_){g=r(_,"P",{});var b=l(g);T=f(b,"The distinction between a Hub dataset and a dataset from GitHub only comes from the legacy sharing workflow. It does not involve any ranking, decisioning, or opinion regarding the contents of the dataset itself."),b.forEach(t)},m(_,b){i(_,g,b),a(g,T)},d(_){_&&t(g)}}}function nl(Nt){let g,T,_,b,Xe,X,Qa,et,Xa,Mt,De,es,Gt,Ie,ts,Ot,$,tt,as,ss,at,os,rs,st,ls,is,ot,ns,fs,rt,ps,zt,Se,hs,Rt,Te,Zt,A,x,lt,ee,us,it,ds,Ut,xe,cs,Yt,qe,ms,Jt,q,ys,nt,vs,ws,Bt,Ce,gs,Vt,Ne,_s,Wt,C,ft,$s,bs,pt,Es,Kt,N,ks,Me,Hs,As,Qt,j,M,ht,te,js,ut,Ps,Xt,E,Ls,ae,Fs,Ds,se,Is,Ss,ea,Ge,dt,Ts,ta,oe,aa,re,ct,xs,sa,le,oa,G,qs,mt,Cs,Ns,ra,ie,la,P,O,yt,ne,Ms,vt,Gs,ia,fe,pe,Os,he,zs,Rs,na,ue,fa,z,Zs,wt,Us,Ys,pa,L,R,gt,de,Js,_t,Bs,ha,ce,$t,Vs,ua,k,bt,Z,Et,Ws,Ks,Oe,Qs,Xs,eo,kt,me,to,ze,ao,so,oo,Ht,U,At,ro,lo,Re,io,no,da,F,Y,jt,ye,fo,Pt,po,ca,Ze,ho,ma,ve,we,uo,Lt,co,mo,ya,ge,va,_e,Ft,yo,wa,$e,ga,be,Dt,vo,_a,Ee,$a,Ue,wo,ba,ke,Ea,D,J,It,He,go,St,_o,ka,B,$o,Ae,bo,Eo,Ha,Ye,ko,Aa,je,ja,Je,Ho,Pa,I,V,Tt,Pe,Ao,xt,jo,La,Be,Po,Fa,W,Da,Ve,Lo,Ia,We,Fo,Sa,K,Do,Le,Io,So,Ta;return X=new Q({}),ee=new Q({}),te=new Q({}),oe=new S({props:{code:"huggingface-cli login",highlighted:'huggingface-<span class="hljs-keyword">cli</span> login'}}),le=new S({props:{code:"huggingface-cli repo create your_dataset_name --type dataset",highlighted:'huggingface-cli repo <span class="hljs-keyword">create</span> your_dataset_name --<span class="hljs-built_in">type</span> <span class="hljs-keyword">dataset</span>'}}),ie=new S({props:{code:"huggingface-cli repo create your_dataset_name --type dataset --organization your-org-name",highlighted:'huggingface-cli repo <span class="hljs-keyword">create</span> your_dataset_name --<span class="hljs-built_in">type</span> <span class="hljs-keyword">dataset</span> --organization your-org-name'}}),ne=new Q({}),ue=new S({props:{code:`# Make sure you have git-lfs installed
# (https://git-lfs.github.com/)
git lfs install

git clone https://huggingface.co/datasets/namespace/your_dataset_name`,highlighted:`<span class="hljs-comment"># Make sure you have git-lfs installed</span>
<span class="hljs-comment"># (https://git-lfs.github.com/)</span>
git lfs install

git clone https:<span class="hljs-regexp">//</span>huggingface.co<span class="hljs-regexp">/datasets/</span>namespace/your_dataset_name`}}),de=new Q({}),ye=new Q({}),ge=new S({props:{code:`cp /somewhere/data/*.json .
git lfs track *.json
git add .gitattributes
git add *.json
git commit -m "add json files"`,highlighted:`cp <span class="hljs-string">/somewhere/data/</span>*<span class="hljs-string">.json</span> .
git lfs track *<span class="hljs-string">.json</span>
git add <span class="hljs-string">.gitattributes</span>
git add *<span class="hljs-string">.json</span>
git commit -m <span class="hljs-string">&quot;add json files&quot;</span>`}}),$e=new S({props:{code:`cp /somewhere/data/README.md .
cp /somewhere/data/load_script.py .
git add --all`,highlighted:`<span class="hljs-title">cp</span> /somewhere/<span class="hljs-class"><span class="hljs-keyword">data</span>/<span class="hljs-type">README</span>.md .</span>
<span class="hljs-title">cp</span> /somewhere/<span class="hljs-class"><span class="hljs-keyword">data</span>/load_script.py .</span>
<span class="hljs-title">git</span> add <span class="hljs-comment">--all</span>`}}),Ee=new S({props:{code:`git status
git commit -m "First version of the your_dataset_name dataset."
git push`,highlighted:`git <span class="hljs-built_in">status</span>
git commit -m <span class="hljs-string">&quot;First version of the your_dataset_name dataset.&quot;</span>
git <span class="hljs-built_in">push</span>`}}),ke=new S({props:{code:'dataset = load_dataset("namespace/your_dataset_name")',highlighted:'<span class="hljs-attribute">dataset</span> <span class="hljs-operator">=</span> load_dataset(<span class="hljs-string">&quot;namespace/your_dataset_name&quot;</span>)'}}),He=new Q({}),je=new S({props:{code:`# Dataset rewiew request for <Dataset name>

## Description

<brief description of the dataset>

## Files to review

- file1
- file2
- ...

cc @lhoestq @polinaeterna @mariosasko @albertvillanova`,highlighted:`<span class="hljs-comment"># Dataset rewiew request for &lt;Dataset name&gt;</span>

<span class="hljs-comment">## Description</span>

<span class="hljs-variable">&lt;brief description of the dataset&gt;</span>

<span class="hljs-comment">## Files to review</span>

- file1
- file2
- ...

cc <span class="hljs-meta">@lhoestq</span> <span class="hljs-meta">@polinaeterna</span> <span class="hljs-meta">@mariosasko</span> <span class="hljs-meta">@albertvillanova</span>`}}),Pe=new Q({}),W=new ll({props:{$$slots:{default:[il]},$$scope:{ctx:Nt}}}),{c(){g=o("meta"),T=p(),_=o("h1"),b=o("a"),Xe=o("span"),d(X.$$.fragment),Qa=p(),et=o("span"),Xa=n("Share"),Mt=p(),De=o("p"),es=n("At Hugging Face, we are on a mission to democratize good Machine Learning and we believe in the value of open source. That\u2019s why we designed \u{1F917} Datasets so that anyone can share a dataset with the greater ML community. There are currently thousands of datasets in over 100 languages in the Hugging Face Hub, and the Hugging Face team always welcomes new contributions!"),Gt=p(),Ie=o("p"),ts=n("Dataset repositories offer features such as:"),Ot=p(),$=o("ul"),tt=o("li"),as=n("Free dataset hosting"),ss=p(),at=o("li"),os=n("Dataset versioning"),rs=p(),st=o("li"),ls=n("Commit history and diffs"),is=p(),ot=o("li"),ns=n("Metadata for discoverability"),fs=p(),rt=o("li"),ps=n("Dataset cards for documentation, licensing, limitations, etc."),zt=p(),Se=o("p"),hs=n("This guide will show you how to share a dataset that can be easily accessed by anyone."),Rt=p(),Te=o("a"),Zt=p(),A=o("h2"),x=o("a"),lt=o("span"),d(ee.$$.fragment),us=p(),it=o("span"),ds=n("Add a dataset"),Ut=p(),xe=o("p"),cs=n(`You can share your dataset with the community with a dataset repository on the Hugging Face Hub.
It can also be a private dataset if you want to control who has access to it.`),Yt=p(),qe=o("p"),ms=n("In a dataset repository, you can either host all your data files and/or use a dataset script."),Jt=p(),q=o("p"),ys=n(`The dataset script is optional if your dataset is in one of the following formats: CSV, JSON, JSON lines, text or Parquet.
The script also supports many kinds of compressed file types such as: GZ, BZ2, LZ4, LZMA or ZSTD.
For example, your dataset can be made of `),nt=o("code"),vs=n(".json.gz"),ws=n(" files."),Bt=p(),Ce=o("p"),gs=n("On the other hand, if your dataset is not in a supported format or if you want more control over how your dataset is loaded, you can write your own dataset script."),Vt=p(),Ne=o("p"),_s=n("When loading a dataset from the Hub:"),Wt=p(),C=o("ul"),ft=o("li"),$s=n("If there\u2019s no dataset script, all the files in the supported formats are loaded."),bs=p(),pt=o("li"),Es=n("If there\u2019s a dataset script, it is downloaded and executed to download and prepare the dataset."),Kt=p(),N=o("p"),ks=n("For more information on how to load a dataset from the Hub, take a look at the "),Me=o("a"),Hs=n("load a dataset from the Hub"),As=n(" tutorial."),Qt=p(),j=o("h3"),M=o("a"),ht=o("span"),d(te.$$.fragment),js=p(),ut=o("span"),Ps=n("Create the repository"),Xt=p(),E=o("p"),Ls=n("Sharing a community dataset will require you to create an account on "),ae=o("a"),Fs=n("hf.co"),Ds=n(` if you don\u2019t have one yet.
You can directly create a `),se=o("a"),Is=n("new dataset repository"),Ss=n(" from your account on the Hugging Face Hub, but this guide will show you how to upload a dataset from the terminal."),ea=p(),Ge=o("ol"),dt=o("li"),Ts=n("Make sure you are in the virtual environment where you installed Datasets, and run the following command:"),ta=p(),d(oe.$$.fragment),aa=p(),re=o("ol"),ct=o("li"),xs=n("Login using your Hugging Face Hub credentials, and create a new dataset repository:"),sa=p(),d(le.$$.fragment),oa=p(),G=o("p"),qs=n("Add the "),mt=o("code"),Cs=n("-organization"),Ns=n(" flag to create a repository under a specific organization:"),ra=p(),d(ie.$$.fragment),la=p(),P=o("h3"),O=o("a"),yt=o("span"),d(ne.$$.fragment),Ms=p(),vt=o("span"),Gs=n("Clone the repository"),ia=p(),fe=o("ol"),pe=o("li"),Os=n("Install "),he=o("a"),zs=n("Git LFS"),Rs=n(" and clone your repository:"),na=p(),d(ue.$$.fragment),fa=p(),z=o("p"),Zs=n("Here the "),wt=o("code"),Us=n("namespace"),Ys=n(" is either your username or your organization name."),pa=p(),L=o("h3"),R=o("a"),gt=o("span"),d(de.$$.fragment),Js=p(),_t=o("span"),Bs=n("Prepare your files"),ha=p(),ce=o("ol"),$t=o("li"),Vs=n("Now is a good time to check your directory to ensure the only files you\u2019re uploading are:"),ua=p(),k=o("ul"),bt=o("li"),Z=o("p"),Et=o("code"),Ws=n("README.md"),Ks=n(" is a Dataset card that describes the datasets contents, creation, and usage. To write a Dataset card, see the "),Oe=o("a"),Qs=n("dataset card"),Xs=n(" page."),eo=p(),kt=o("li"),me=o("p"),to=n("The raw data files of the dataset (optional, if they are hosted elsewhere you can specify the URLs in the dataset script). If you don\u2019t need a dataset script, you can take a look at "),ze=o("a"),ao=n("how to structure your dataset repository for your data files"),so=n("."),oo=p(),Ht=o("li"),U=o("p"),At=o("code"),ro=n("your_dataset_name.py"),lo=n(" is your dataset loading script (optional if your data files are already in the supported formats csv/jsonl/json/parquet/txt). To create a dataset script, see the "),Re=o("a"),io=n("dataset script"),no=n(" page."),da=p(),F=o("h3"),Y=o("a"),jt=o("span"),d(ye.$$.fragment),fo=p(),Pt=o("span"),po=n("Upload your files"),ca=p(),Ze=o("p"),ho=n("You can directly upload your files from your repository on the Hugging Face Hub, but this guide will show you how to upload the files from the terminal."),ma=p(),ve=o("ol"),we=o("li"),uo=n("It is important to add the large data files first with "),Lt=o("code"),co=n("git lfs track"),mo=n(" or else you will encounter an error later when you push your files:"),ya=p(),d(ge.$$.fragment),va=p(),_e=o("ol"),Ft=o("li"),yo=n("Add the dataset loading script and dataset card:"),wa=p(),d($e.$$.fragment),ga=p(),be=o("ol"),Dt=o("li"),vo=n("Verify the files have been correctly staged. Then you can commit and push your files:"),_a=p(),d(Ee.$$.fragment),$a=p(),Ue=o("p"),wo=n("Congratulations, your dataset has now been uploaded to the Hugging Face Hub where anyone can load it in a single line of code! \u{1F973}"),ba=p(),d(ke.$$.fragment),Ea=p(),D=o("h3"),J=o("a"),It=o("span"),d(He.$$.fragment),go=p(),St=o("span"),_o=n("Ask for a help and reviews"),ka=p(),B=o("p"),$o=n("If you need help with a dataset script, feel free to check the "),Ae=o("a"),bo=n("datasets forum"),Eo=n(": it\u2019s possible that someone had similar issues and shared how they managed to fix them."),Ha=p(),Ye=o("p"),ko=n("Then if your script is ready and if you wish your dataset script to be reviewed by the Hugging Face team, you can open a discussion in the Community tab of your dataset with this message:"),Aa=p(),d(je.$$.fragment),ja=p(),Je=o("p"),Ho=n("Members of the Hugging Face team will be happy to review your dataset script and give you advice."),Pa=p(),I=o("h2"),V=o("a"),Tt=o("span"),d(Pe.$$.fragment),Ao=p(),xt=o("span"),jo=n("Datasets on GitHub (legacy)"),La=p(),Be=o("p"),Po=n(`Datasets used to be hosted on our GitHub repository, but all datasets have now been migrated to the Hugging Face Hub.
The legacy GitHub datasets were added originally on our GitHub repository and therefore don\u2019t have a namespace: \u201Csquad\u201D, \u201Cglue\u201D, etc. unlike the other datasets that are named \u201Cusername/dataset_name\u201D or \u201Corg/dataset_name\u201D.
Those datasets are still maintained on GitHub, and if you\u2019d like to edit them, please open a Pull Request on the huggingface/datasets repository.
Sharing your dataset to the Hub is the recommended way of adding a dataset.`),Fa=p(),d(W.$$.fragment),Da=p(),Ve=o("p"),Lo=n("The code of these datasets are reviewed by the Hugging Face team, and they require test data in order to be regularly tested."),Ia=p(),We=o("p"),Fo=n("In some rare cases it makes more sense to open a PR on GitHub. For example when you are not the author of the dataset and there is no clear organization / namespace that you can put the dataset under."),Sa=p(),K=o("p"),Do=n("For more info, please take a look at the documentation on "),Le=o("a"),Io=n("How to add a new dataset in the huggingface/datasets repository"),So=n("."),this.h()},l(e){const s=ol('[data-svelte="svelte-1phssyn"]',document.head);g=r(s,"META",{name:!0,content:!0}),s.forEach(t),T=h(e),_=r(e,"H1",{class:!0});var Fe=l(_);b=r(Fe,"A",{id:!0,class:!0,href:!0});var To=l(b);Xe=r(To,"SPAN",{});var xo=l(Xe);c(X.$$.fragment,xo),xo.forEach(t),To.forEach(t),Qa=h(Fe),et=r(Fe,"SPAN",{});var qo=l(et);Xa=f(qo,"Share"),qo.forEach(t),Fe.forEach(t),Mt=h(e),De=r(e,"P",{});var Co=l(De);es=f(Co,"At Hugging Face, we are on a mission to democratize good Machine Learning and we believe in the value of open source. That\u2019s why we designed \u{1F917} Datasets so that anyone can share a dataset with the greater ML community. There are currently thousands of datasets in over 100 languages in the Hugging Face Hub, and the Hugging Face team always welcomes new contributions!"),Co.forEach(t),Gt=h(e),Ie=r(e,"P",{});var No=l(Ie);ts=f(No,"Dataset repositories offer features such as:"),No.forEach(t),Ot=h(e),$=r(e,"UL",{});var H=l($);tt=r(H,"LI",{});var Mo=l(tt);as=f(Mo,"Free dataset hosting"),Mo.forEach(t),ss=h(H),at=r(H,"LI",{});var Go=l(at);os=f(Go,"Dataset versioning"),Go.forEach(t),rs=h(H),st=r(H,"LI",{});var Oo=l(st);ls=f(Oo,"Commit history and diffs"),Oo.forEach(t),is=h(H),ot=r(H,"LI",{});var zo=l(ot);ns=f(zo,"Metadata for discoverability"),zo.forEach(t),fs=h(H),rt=r(H,"LI",{});var Ro=l(rt);ps=f(Ro,"Dataset cards for documentation, licensing, limitations, etc."),Ro.forEach(t),H.forEach(t),zt=h(e),Se=r(e,"P",{});var Zo=l(Se);hs=f(Zo,"This guide will show you how to share a dataset that can be easily accessed by anyone."),Zo.forEach(t),Rt=h(e),Te=r(e,"A",{id:!0}),l(Te).forEach(t),Zt=h(e),A=r(e,"H2",{class:!0});var xa=l(A);x=r(xa,"A",{id:!0,class:!0,href:!0});var Uo=l(x);lt=r(Uo,"SPAN",{});var Yo=l(lt);c(ee.$$.fragment,Yo),Yo.forEach(t),Uo.forEach(t),us=h(xa),it=r(xa,"SPAN",{});var Jo=l(it);ds=f(Jo,"Add a dataset"),Jo.forEach(t),xa.forEach(t),Ut=h(e),xe=r(e,"P",{});var Bo=l(xe);cs=f(Bo,`You can share your dataset with the community with a dataset repository on the Hugging Face Hub.
It can also be a private dataset if you want to control who has access to it.`),Bo.forEach(t),Yt=h(e),qe=r(e,"P",{});var Vo=l(qe);ms=f(Vo,"In a dataset repository, you can either host all your data files and/or use a dataset script."),Vo.forEach(t),Jt=h(e),q=r(e,"P",{});var qa=l(q);ys=f(qa,`The dataset script is optional if your dataset is in one of the following formats: CSV, JSON, JSON lines, text or Parquet.
The script also supports many kinds of compressed file types such as: GZ, BZ2, LZ4, LZMA or ZSTD.
For example, your dataset can be made of `),nt=r(qa,"CODE",{});var Wo=l(nt);vs=f(Wo,".json.gz"),Wo.forEach(t),ws=f(qa," files."),qa.forEach(t),Bt=h(e),Ce=r(e,"P",{});var Ko=l(Ce);gs=f(Ko,"On the other hand, if your dataset is not in a supported format or if you want more control over how your dataset is loaded, you can write your own dataset script."),Ko.forEach(t),Vt=h(e),Ne=r(e,"P",{});var Qo=l(Ne);_s=f(Qo,"When loading a dataset from the Hub:"),Qo.forEach(t),Wt=h(e),C=r(e,"UL",{});var Ca=l(C);ft=r(Ca,"LI",{});var Xo=l(ft);$s=f(Xo,"If there\u2019s no dataset script, all the files in the supported formats are loaded."),Xo.forEach(t),bs=h(Ca),pt=r(Ca,"LI",{});var er=l(pt);Es=f(er,"If there\u2019s a dataset script, it is downloaded and executed to download and prepare the dataset."),er.forEach(t),Ca.forEach(t),Kt=h(e),N=r(e,"P",{});var Na=l(N);ks=f(Na,"For more information on how to load a dataset from the Hub, take a look at the "),Me=r(Na,"A",{href:!0});var tr=l(Me);Hs=f(tr,"load a dataset from the Hub"),tr.forEach(t),As=f(Na," tutorial."),Na.forEach(t),Qt=h(e),j=r(e,"H3",{class:!0});var Ma=l(j);M=r(Ma,"A",{id:!0,class:!0,href:!0});var ar=l(M);ht=r(ar,"SPAN",{});var sr=l(ht);c(te.$$.fragment,sr),sr.forEach(t),ar.forEach(t),js=h(Ma),ut=r(Ma,"SPAN",{});var or=l(ut);Ps=f(or,"Create the repository"),or.forEach(t),Ma.forEach(t),Xt=h(e),E=r(e,"P",{});var Ke=l(E);Ls=f(Ke,"Sharing a community dataset will require you to create an account on "),ae=r(Ke,"A",{href:!0,rel:!0});var rr=l(ae);Fs=f(rr,"hf.co"),rr.forEach(t),Ds=f(Ke,` if you don\u2019t have one yet.
You can directly create a `),se=r(Ke,"A",{href:!0,rel:!0});var lr=l(se);Is=f(lr,"new dataset repository"),lr.forEach(t),Ss=f(Ke," from your account on the Hugging Face Hub, but this guide will show you how to upload a dataset from the terminal."),Ke.forEach(t),ea=h(e),Ge=r(e,"OL",{});var ir=l(Ge);dt=r(ir,"LI",{});var nr=l(dt);Ts=f(nr,"Make sure you are in the virtual environment where you installed Datasets, and run the following command:"),nr.forEach(t),ir.forEach(t),ta=h(e),c(oe.$$.fragment,e),aa=h(e),re=r(e,"OL",{start:!0});var fr=l(re);ct=r(fr,"LI",{});var pr=l(ct);xs=f(pr,"Login using your Hugging Face Hub credentials, and create a new dataset repository:"),pr.forEach(t),fr.forEach(t),sa=h(e),c(le.$$.fragment,e),oa=h(e),G=r(e,"P",{});var Ga=l(G);qs=f(Ga,"Add the "),mt=r(Ga,"CODE",{});var hr=l(mt);Cs=f(hr,"-organization"),hr.forEach(t),Ns=f(Ga," flag to create a repository under a specific organization:"),Ga.forEach(t),ra=h(e),c(ie.$$.fragment,e),la=h(e),P=r(e,"H3",{class:!0});var Oa=l(P);O=r(Oa,"A",{id:!0,class:!0,href:!0});var ur=l(O);yt=r(ur,"SPAN",{});var dr=l(yt);c(ne.$$.fragment,dr),dr.forEach(t),ur.forEach(t),Ms=h(Oa),vt=r(Oa,"SPAN",{});var cr=l(vt);Gs=f(cr,"Clone the repository"),cr.forEach(t),Oa.forEach(t),ia=h(e),fe=r(e,"OL",{start:!0});var mr=l(fe);pe=r(mr,"LI",{});var za=l(pe);Os=f(za,"Install "),he=r(za,"A",{href:!0,rel:!0});var yr=l(he);zs=f(yr,"Git LFS"),yr.forEach(t),Rs=f(za," and clone your repository:"),za.forEach(t),mr.forEach(t),na=h(e),c(ue.$$.fragment,e),fa=h(e),z=r(e,"P",{});var Ra=l(z);Zs=f(Ra,"Here the "),wt=r(Ra,"CODE",{});var vr=l(wt);Us=f(vr,"namespace"),vr.forEach(t),Ys=f(Ra," is either your username or your organization name."),Ra.forEach(t),pa=h(e),L=r(e,"H3",{class:!0});var Za=l(L);R=r(Za,"A",{id:!0,class:!0,href:!0});var wr=l(R);gt=r(wr,"SPAN",{});var gr=l(gt);c(de.$$.fragment,gr),gr.forEach(t),wr.forEach(t),Js=h(Za),_t=r(Za,"SPAN",{});var _r=l(_t);Bs=f(_r,"Prepare your files"),_r.forEach(t),Za.forEach(t),ha=h(e),ce=r(e,"OL",{start:!0});var $r=l(ce);$t=r($r,"LI",{});var br=l($t);Vs=f(br,"Now is a good time to check your directory to ensure the only files you\u2019re uploading are:"),br.forEach(t),$r.forEach(t),ua=h(e),k=r(e,"UL",{});var Qe=l(k);bt=r(Qe,"LI",{});var Er=l(bt);Z=r(Er,"P",{});var qt=l(Z);Et=r(qt,"CODE",{});var kr=l(Et);Ws=f(kr,"README.md"),kr.forEach(t),Ks=f(qt," is a Dataset card that describes the datasets contents, creation, and usage. To write a Dataset card, see the "),Oe=r(qt,"A",{href:!0});var Hr=l(Oe);Qs=f(Hr,"dataset card"),Hr.forEach(t),Xs=f(qt," page."),qt.forEach(t),Er.forEach(t),eo=h(Qe),kt=r(Qe,"LI",{});var Ar=l(kt);me=r(Ar,"P",{});var Ua=l(me);to=f(Ua,"The raw data files of the dataset (optional, if they are hosted elsewhere you can specify the URLs in the dataset script). If you don\u2019t need a dataset script, you can take a look at "),ze=r(Ua,"A",{href:!0});var jr=l(ze);ao=f(jr,"how to structure your dataset repository for your data files"),jr.forEach(t),so=f(Ua,"."),Ua.forEach(t),Ar.forEach(t),oo=h(Qe),Ht=r(Qe,"LI",{});var Pr=l(Ht);U=r(Pr,"P",{});var Ct=l(U);At=r(Ct,"CODE",{});var Lr=l(At);ro=f(Lr,"your_dataset_name.py"),Lr.forEach(t),lo=f(Ct," is your dataset loading script (optional if your data files are already in the supported formats csv/jsonl/json/parquet/txt). To create a dataset script, see the "),Re=r(Ct,"A",{href:!0});var Fr=l(Re);io=f(Fr,"dataset script"),Fr.forEach(t),no=f(Ct," page."),Ct.forEach(t),Pr.forEach(t),Qe.forEach(t),da=h(e),F=r(e,"H3",{class:!0});var Ya=l(F);Y=r(Ya,"A",{id:!0,class:!0,href:!0});var Dr=l(Y);jt=r(Dr,"SPAN",{});var Ir=l(jt);c(ye.$$.fragment,Ir),Ir.forEach(t),Dr.forEach(t),fo=h(Ya),Pt=r(Ya,"SPAN",{});var Sr=l(Pt);po=f(Sr,"Upload your files"),Sr.forEach(t),Ya.forEach(t),ca=h(e),Ze=r(e,"P",{});var Tr=l(Ze);ho=f(Tr,"You can directly upload your files from your repository on the Hugging Face Hub, but this guide will show you how to upload the files from the terminal."),Tr.forEach(t),ma=h(e),ve=r(e,"OL",{start:!0});var xr=l(ve);we=r(xr,"LI",{});var Ja=l(we);uo=f(Ja,"It is important to add the large data files first with "),Lt=r(Ja,"CODE",{});var qr=l(Lt);co=f(qr,"git lfs track"),qr.forEach(t),mo=f(Ja," or else you will encounter an error later when you push your files:"),Ja.forEach(t),xr.forEach(t),ya=h(e),c(ge.$$.fragment,e),va=h(e),_e=r(e,"OL",{start:!0});var Cr=l(_e);Ft=r(Cr,"LI",{});var Nr=l(Ft);yo=f(Nr,"Add the dataset loading script and dataset card:"),Nr.forEach(t),Cr.forEach(t),wa=h(e),c($e.$$.fragment,e),ga=h(e),be=r(e,"OL",{start:!0});var Mr=l(be);Dt=r(Mr,"LI",{});var Gr=l(Dt);vo=f(Gr,"Verify the files have been correctly staged. Then you can commit and push your files:"),Gr.forEach(t),Mr.forEach(t),_a=h(e),c(Ee.$$.fragment,e),$a=h(e),Ue=r(e,"P",{});var Or=l(Ue);wo=f(Or,"Congratulations, your dataset has now been uploaded to the Hugging Face Hub where anyone can load it in a single line of code! \u{1F973}"),Or.forEach(t),ba=h(e),c(ke.$$.fragment,e),Ea=h(e),D=r(e,"H3",{class:!0});var Ba=l(D);J=r(Ba,"A",{id:!0,class:!0,href:!0});var zr=l(J);It=r(zr,"SPAN",{});var Rr=l(It);c(He.$$.fragment,Rr),Rr.forEach(t),zr.forEach(t),go=h(Ba),St=r(Ba,"SPAN",{});var Zr=l(St);_o=f(Zr,"Ask for a help and reviews"),Zr.forEach(t),Ba.forEach(t),ka=h(e),B=r(e,"P",{});var Va=l(B);$o=f(Va,"If you need help with a dataset script, feel free to check the "),Ae=r(Va,"A",{href:!0,rel:!0});var Ur=l(Ae);bo=f(Ur,"datasets forum"),Ur.forEach(t),Eo=f(Va,": it\u2019s possible that someone had similar issues and shared how they managed to fix them."),Va.forEach(t),Ha=h(e),Ye=r(e,"P",{});var Yr=l(Ye);ko=f(Yr,"Then if your script is ready and if you wish your dataset script to be reviewed by the Hugging Face team, you can open a discussion in the Community tab of your dataset with this message:"),Yr.forEach(t),Aa=h(e),c(je.$$.fragment,e),ja=h(e),Je=r(e,"P",{});var Jr=l(Je);Ho=f(Jr,"Members of the Hugging Face team will be happy to review your dataset script and give you advice."),Jr.forEach(t),Pa=h(e),I=r(e,"H2",{class:!0});var Wa=l(I);V=r(Wa,"A",{id:!0,class:!0,href:!0});var Br=l(V);Tt=r(Br,"SPAN",{});var Vr=l(Tt);c(Pe.$$.fragment,Vr),Vr.forEach(t),Br.forEach(t),Ao=h(Wa),xt=r(Wa,"SPAN",{});var Wr=l(xt);jo=f(Wr,"Datasets on GitHub (legacy)"),Wr.forEach(t),Wa.forEach(t),La=h(e),Be=r(e,"P",{});var Kr=l(Be);Po=f(Kr,`Datasets used to be hosted on our GitHub repository, but all datasets have now been migrated to the Hugging Face Hub.
The legacy GitHub datasets were added originally on our GitHub repository and therefore don\u2019t have a namespace: \u201Csquad\u201D, \u201Cglue\u201D, etc. unlike the other datasets that are named \u201Cusername/dataset_name\u201D or \u201Corg/dataset_name\u201D.
Those datasets are still maintained on GitHub, and if you\u2019d like to edit them, please open a Pull Request on the huggingface/datasets repository.
Sharing your dataset to the Hub is the recommended way of adding a dataset.`),Kr.forEach(t),Fa=h(e),c(W.$$.fragment,e),Da=h(e),Ve=r(e,"P",{});var Qr=l(Ve);Lo=f(Qr,"The code of these datasets are reviewed by the Hugging Face team, and they require test data in order to be regularly tested."),Qr.forEach(t),Ia=h(e),We=r(e,"P",{});var Xr=l(We);Fo=f(Xr,"In some rare cases it makes more sense to open a PR on GitHub. For example when you are not the author of the dataset and there is no clear organization / namespace that you can put the dataset under."),Xr.forEach(t),Sa=h(e),K=r(e,"P",{});var Ka=l(K);Do=f(Ka,"For more info, please take a look at the documentation on "),Le=r(Ka,"A",{href:!0,rel:!0});var el=l(Le);Io=f(el,"How to add a new dataset in the huggingface/datasets repository"),el.forEach(t),So=f(Ka,"."),Ka.forEach(t),this.h()},h(){u(g,"name","hf:doc:metadata"),u(g,"content",JSON.stringify(fl)),u(b,"id","share"),u(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(b,"href","#share"),u(_,"class","relative group"),u(Te,"id","upload_dataset_repo"),u(x,"id","add-a-dataset"),u(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(x,"href","#add-a-dataset"),u(A,"class","relative group"),u(Me,"href","./load_hub"),u(M,"id","create-the-repository"),u(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(M,"href","#create-the-repository"),u(j,"class","relative group"),u(ae,"href","https://huggingface.co/join"),u(ae,"rel","nofollow"),u(se,"href","https://huggingface.co/login?next=%2Fnew-dataset"),u(se,"rel","nofollow"),u(re,"start","2"),u(O,"id","clone-the-repository"),u(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(O,"href","#clone-the-repository"),u(P,"class","relative group"),u(he,"href","https://git-lfs.github.com/"),u(he,"rel","nofollow"),u(fe,"start","3"),u(R,"id","prepare-your-files"),u(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(R,"href","#prepare-your-files"),u(L,"class","relative group"),u(ce,"start","4"),u(Oe,"href","dataset_card"),u(ze,"href","repository_structure"),u(Re,"href","dataset_script"),u(Y,"id","upload-your-files"),u(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Y,"href","#upload-your-files"),u(F,"class","relative group"),u(ve,"start","5"),u(_e,"start","6"),u(be,"start","7"),u(J,"id","ask-for-a-help-and-reviews"),u(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(J,"href","#ask-for-a-help-and-reviews"),u(D,"class","relative group"),u(Ae,"href","https://discuss.huggingface.co/c/datasets/10"),u(Ae,"rel","nofollow"),u(V,"id","datasets-on-github-legacy"),u(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(V,"href","#datasets-on-github-legacy"),u(I,"class","relative group"),u(Le,"href","https://github.com/huggingface/datasets/blob/main/ADD_NEW_DATASET.md"),u(Le,"rel","nofollow")},m(e,s){a(document.head,g),i(e,T,s),i(e,_,s),a(_,b),a(b,Xe),m(X,Xe,null),a(_,Qa),a(_,et),a(et,Xa),i(e,Mt,s),i(e,De,s),a(De,es),i(e,Gt,s),i(e,Ie,s),a(Ie,ts),i(e,Ot,s),i(e,$,s),a($,tt),a(tt,as),a($,ss),a($,at),a(at,os),a($,rs),a($,st),a(st,ls),a($,is),a($,ot),a(ot,ns),a($,fs),a($,rt),a(rt,ps),i(e,zt,s),i(e,Se,s),a(Se,hs),i(e,Rt,s),i(e,Te,s),i(e,Zt,s),i(e,A,s),a(A,x),a(x,lt),m(ee,lt,null),a(A,us),a(A,it),a(it,ds),i(e,Ut,s),i(e,xe,s),a(xe,cs),i(e,Yt,s),i(e,qe,s),a(qe,ms),i(e,Jt,s),i(e,q,s),a(q,ys),a(q,nt),a(nt,vs),a(q,ws),i(e,Bt,s),i(e,Ce,s),a(Ce,gs),i(e,Vt,s),i(e,Ne,s),a(Ne,_s),i(e,Wt,s),i(e,C,s),a(C,ft),a(ft,$s),a(C,bs),a(C,pt),a(pt,Es),i(e,Kt,s),i(e,N,s),a(N,ks),a(N,Me),a(Me,Hs),a(N,As),i(e,Qt,s),i(e,j,s),a(j,M),a(M,ht),m(te,ht,null),a(j,js),a(j,ut),a(ut,Ps),i(e,Xt,s),i(e,E,s),a(E,Ls),a(E,ae),a(ae,Fs),a(E,Ds),a(E,se),a(se,Is),a(E,Ss),i(e,ea,s),i(e,Ge,s),a(Ge,dt),a(dt,Ts),i(e,ta,s),m(oe,e,s),i(e,aa,s),i(e,re,s),a(re,ct),a(ct,xs),i(e,sa,s),m(le,e,s),i(e,oa,s),i(e,G,s),a(G,qs),a(G,mt),a(mt,Cs),a(G,Ns),i(e,ra,s),m(ie,e,s),i(e,la,s),i(e,P,s),a(P,O),a(O,yt),m(ne,yt,null),a(P,Ms),a(P,vt),a(vt,Gs),i(e,ia,s),i(e,fe,s),a(fe,pe),a(pe,Os),a(pe,he),a(he,zs),a(pe,Rs),i(e,na,s),m(ue,e,s),i(e,fa,s),i(e,z,s),a(z,Zs),a(z,wt),a(wt,Us),a(z,Ys),i(e,pa,s),i(e,L,s),a(L,R),a(R,gt),m(de,gt,null),a(L,Js),a(L,_t),a(_t,Bs),i(e,ha,s),i(e,ce,s),a(ce,$t),a($t,Vs),i(e,ua,s),i(e,k,s),a(k,bt),a(bt,Z),a(Z,Et),a(Et,Ws),a(Z,Ks),a(Z,Oe),a(Oe,Qs),a(Z,Xs),a(k,eo),a(k,kt),a(kt,me),a(me,to),a(me,ze),a(ze,ao),a(me,so),a(k,oo),a(k,Ht),a(Ht,U),a(U,At),a(At,ro),a(U,lo),a(U,Re),a(Re,io),a(U,no),i(e,da,s),i(e,F,s),a(F,Y),a(Y,jt),m(ye,jt,null),a(F,fo),a(F,Pt),a(Pt,po),i(e,ca,s),i(e,Ze,s),a(Ze,ho),i(e,ma,s),i(e,ve,s),a(ve,we),a(we,uo),a(we,Lt),a(Lt,co),a(we,mo),i(e,ya,s),m(ge,e,s),i(e,va,s),i(e,_e,s),a(_e,Ft),a(Ft,yo),i(e,wa,s),m($e,e,s),i(e,ga,s),i(e,be,s),a(be,Dt),a(Dt,vo),i(e,_a,s),m(Ee,e,s),i(e,$a,s),i(e,Ue,s),a(Ue,wo),i(e,ba,s),m(ke,e,s),i(e,Ea,s),i(e,D,s),a(D,J),a(J,It),m(He,It,null),a(D,go),a(D,St),a(St,_o),i(e,ka,s),i(e,B,s),a(B,$o),a(B,Ae),a(Ae,bo),a(B,Eo),i(e,Ha,s),i(e,Ye,s),a(Ye,ko),i(e,Aa,s),m(je,e,s),i(e,ja,s),i(e,Je,s),a(Je,Ho),i(e,Pa,s),i(e,I,s),a(I,V),a(V,Tt),m(Pe,Tt,null),a(I,Ao),a(I,xt),a(xt,jo),i(e,La,s),i(e,Be,s),a(Be,Po),i(e,Fa,s),m(W,e,s),i(e,Da,s),i(e,Ve,s),a(Ve,Lo),i(e,Ia,s),i(e,We,s),a(We,Fo),i(e,Sa,s),i(e,K,s),a(K,Do),a(K,Le),a(Le,Io),a(K,So),Ta=!0},p(e,[s]){const Fe={};s&2&&(Fe.$$scope={dirty:s,ctx:e}),W.$set(Fe)},i(e){Ta||(y(X.$$.fragment,e),y(ee.$$.fragment,e),y(te.$$.fragment,e),y(oe.$$.fragment,e),y(le.$$.fragment,e),y(ie.$$.fragment,e),y(ne.$$.fragment,e),y(ue.$$.fragment,e),y(de.$$.fragment,e),y(ye.$$.fragment,e),y(ge.$$.fragment,e),y($e.$$.fragment,e),y(Ee.$$.fragment,e),y(ke.$$.fragment,e),y(He.$$.fragment,e),y(je.$$.fragment,e),y(Pe.$$.fragment,e),y(W.$$.fragment,e),Ta=!0)},o(e){v(X.$$.fragment,e),v(ee.$$.fragment,e),v(te.$$.fragment,e),v(oe.$$.fragment,e),v(le.$$.fragment,e),v(ie.$$.fragment,e),v(ne.$$.fragment,e),v(ue.$$.fragment,e),v(de.$$.fragment,e),v(ye.$$.fragment,e),v(ge.$$.fragment,e),v($e.$$.fragment,e),v(Ee.$$.fragment,e),v(ke.$$.fragment,e),v(He.$$.fragment,e),v(je.$$.fragment,e),v(Pe.$$.fragment,e),v(W.$$.fragment,e),Ta=!1},d(e){t(g),e&&t(T),e&&t(_),w(X),e&&t(Mt),e&&t(De),e&&t(Gt),e&&t(Ie),e&&t(Ot),e&&t($),e&&t(zt),e&&t(Se),e&&t(Rt),e&&t(Te),e&&t(Zt),e&&t(A),w(ee),e&&t(Ut),e&&t(xe),e&&t(Yt),e&&t(qe),e&&t(Jt),e&&t(q),e&&t(Bt),e&&t(Ce),e&&t(Vt),e&&t(Ne),e&&t(Wt),e&&t(C),e&&t(Kt),e&&t(N),e&&t(Qt),e&&t(j),w(te),e&&t(Xt),e&&t(E),e&&t(ea),e&&t(Ge),e&&t(ta),w(oe,e),e&&t(aa),e&&t(re),e&&t(sa),w(le,e),e&&t(oa),e&&t(G),e&&t(ra),w(ie,e),e&&t(la),e&&t(P),w(ne),e&&t(ia),e&&t(fe),e&&t(na),w(ue,e),e&&t(fa),e&&t(z),e&&t(pa),e&&t(L),w(de),e&&t(ha),e&&t(ce),e&&t(ua),e&&t(k),e&&t(da),e&&t(F),w(ye),e&&t(ca),e&&t(Ze),e&&t(ma),e&&t(ve),e&&t(ya),w(ge,e),e&&t(va),e&&t(_e),e&&t(wa),w($e,e),e&&t(ga),e&&t(be),e&&t(_a),w(Ee,e),e&&t($a),e&&t(Ue),e&&t(ba),w(ke,e),e&&t(Ea),e&&t(D),w(He),e&&t(ka),e&&t(B),e&&t(Ha),e&&t(Ye),e&&t(Aa),w(je,e),e&&t(ja),e&&t(Je),e&&t(Pa),e&&t(I),w(Pe),e&&t(La),e&&t(Be),e&&t(Fa),w(W,e),e&&t(Da),e&&t(Ve),e&&t(Ia),e&&t(We),e&&t(Sa),e&&t(K)}}}const fl={local:"share",sections:[{local:"add-a-dataset",sections:[{local:"create-the-repository",title:"Create the repository"},{local:"clone-the-repository",title:"Clone the repository"},{local:"prepare-your-files",title:"Prepare your files"},{local:"upload-your-files",title:"Upload your files"},{local:"ask-for-a-help-and-reviews",title:"Ask for a help and reviews"}],title:"Add a dataset"},{local:"datasets-on-github-legacy",title:"Datasets on GitHub (legacy)"}],title:"Share"};function pl(Nt){return rl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ml extends tl{constructor(g){super();al(this,g,pl,nl,sl,{})}}export{ml as default,fl as metadata};