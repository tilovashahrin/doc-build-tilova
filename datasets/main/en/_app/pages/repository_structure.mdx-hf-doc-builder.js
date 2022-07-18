import{S as Rl,i as Tl,s as Ll,e as i,k as f,w as _,t as a,M as Fl,c as r,d as s,m as d,a as o,x as y,h as l,b as c,G as t,g as p,y as E,q as $,o as w,B as b,v as ql}from"../chunks/vendor-hf-doc-builder.js";import{T as Jl}from"../chunks/Tip-hf-doc-builder.js";import{I as Ce}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as Me}from"../chunks/CodeBlock-hf-doc-builder.js";function Ul(vt){let h,q,u,x,I;return{c(){h=i("p"),q=a("Eventually, you\u2019ll also be able to structure your repository to specify different dataset configurations. Stay tuned on this "),u=i("a"),x=a("issue"),I=a(" for the latest updates!"),this.h()},l(m){h=r(m,"P",{});var k=o(h);q=l(k,"Eventually, you\u2019ll also be able to structure your repository to specify different dataset configurations. Stay tuned on this "),u=r(k,"A",{href:!0,rel:!0});var J=o(u);x=l(J,"issue"),J.forEach(s),I=l(k," for the latest updates!"),k.forEach(s),this.h()},h(){c(u,"href","https://github.com/huggingface/datasets/issues/4578"),c(u,"rel","nofollow")},m(m,k){p(m,h,k),t(h,q),t(h,u),t(u,x),t(h,I)},d(m){m&&s(h)}}}function Vl(vt){let h,q,u,x,I,m,k,J,ss,mt,me,as,_t,U,ls,_e,is,rs,yt,V,os,ye,ns,ps,Et,H,B,Oe,te,fs,ge,ds,$t,j,cs,Ne,hs,us,Ie,vs,ms,wt,S,_s,He,ys,Es,Ee,$s,ws,bt,se,xt,R,Y,Re,ae,bs,Te,xs,Dt,$e,Ds,At,we,As,kt,P,C,ks,Le,js,Ss,Fe,Ps,Cs,qe,Ms,Os,M,gs,Je,Ns,Is,Ue,Hs,Rs,Ve,Ts,Ls,O,Fs,Be,qs,Js,Ye,Us,Vs,Ge,Bs,jt,G,Ys,ze,Gs,zs,St,le,Pt,D,Ks,Ke,Qs,Ws,Qe,Xs,Zs,We,ea,ta,Ct,T,z,Xe,ie,sa,Ze,aa,Mt,be,la,Ot,re,gt,v,ia,et,ra,oa,tt,na,pa,st,fa,da,at,ca,ha,Nt,xe,ua,It,oe,Ht,K,Rt,L,Q,lt,ne,va,it,ma,Tt,De,_a,Lt,g,rt,ya,Ea,ot,$a,wa,nt,ba,Ft,Ae,xa,qt,pe,Jt,F,W,pt,fe,Da,ft,Aa,Ut,X,ka,dt,ja,Sa,Vt,A,Pa,ct,Ca,Ma,ht,Oa,ga,ut,Na,Ia,Bt,de,Yt;return m=new Ce({}),te=new Ce({}),se=new Me({props:{code:`my_dataset_repository/
\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 train.csv
\u2514\u2500\u2500 test.csv`,highlighted:`my_dataset_repository/
\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 train.<span class="hljs-built_in">csv</span>
\u2514\u2500\u2500 test.<span class="hljs-built_in">csv</span>`}}),ae=new Ce({}),le=new Me({props:{code:`my_dataset_repository/
\u251C\u2500\u2500 README.md
\u2514\u2500\u2500 data/
    \u251C\u2500\u2500 train.csv
    \u251C\u2500\u2500 test.csv
    \u2514\u2500\u2500 validation.csv`,highlighted:`my_dataset_repository/
\u251C\u2500\u2500 README.md
\u2514\u2500\u2500 data/
    \u251C\u2500\u2500 train.<span class="hljs-built_in">csv</span>
    \u251C\u2500\u2500 test.<span class="hljs-built_in">csv</span>
    \u2514\u2500\u2500 validation.<span class="hljs-built_in">csv</span>`}}),ie=new Ce({}),re=new Me({props:{code:`my_dataset_repository/
\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 train_0.csv
\u251C\u2500\u2500 train_1.csv
\u251C\u2500\u2500 train_2.csv
\u251C\u2500\u2500 train_3.csv
\u251C\u2500\u2500 test_0.csv
\u2514\u2500\u2500 test_1.csv`,highlighted:`my_dataset_repository/
\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 train_0.<span class="hljs-built_in">csv</span>
\u251C\u2500\u2500 train_1.<span class="hljs-built_in">csv</span>
\u251C\u2500\u2500 train_2.<span class="hljs-built_in">csv</span>
\u251C\u2500\u2500 train_3.<span class="hljs-built_in">csv</span>
\u251C\u2500\u2500 test_0.<span class="hljs-built_in">csv</span>
\u2514\u2500\u2500 test_1.<span class="hljs-built_in">csv</span>`}}),oe=new Me({props:{code:`my_dataset_repository/
\u251C\u2500\u2500 README.md
\u2514\u2500\u2500 data/
    \u251C\u2500\u2500 train/
    \u2502   \u251C\u2500\u2500 shard_0.csv
    \u2502   \u251C\u2500\u2500 shard_1.csv
    \u2502   \u251C\u2500\u2500 shard_2.csv
    \u2502   \u2514\u2500\u2500 shard_3.csv
    \u2514\u2500\u2500 test/
        \u251C\u2500\u2500 shard_0.csv
        \u2514\u2500\u2500 shard_1.csv`,highlighted:`my_dataset_repository/
\u251C\u2500\u2500 README.md
\u2514\u2500\u2500 data/
    \u251C\u2500\u2500 train/
    \u2502   \u251C\u2500\u2500 shard_0.<span class="hljs-built_in">csv</span>
    \u2502   \u251C\u2500\u2500 shard_1.<span class="hljs-built_in">csv</span>
    \u2502   \u251C\u2500\u2500 shard_2.<span class="hljs-built_in">csv</span>
    \u2502   \u2514\u2500\u2500 shard_3.<span class="hljs-built_in">csv</span>
    \u2514\u2500\u2500 test/
        \u251C\u2500\u2500 shard_0.<span class="hljs-built_in">csv</span>
        \u2514\u2500\u2500 shard_1.<span class="hljs-built_in">csv</span>`}}),K=new Jl({props:{$$slots:{default:[Ul]},$$scope:{ctx:vt}}}),ne=new Ce({}),pe=new Me({props:{code:`my_dataset_repository/
\u251C\u2500\u2500 README.md
\u2514\u2500\u2500 data/
    \u251C\u2500\u2500 training.csv
    \u251C\u2500\u2500 eval.csv
    \u2514\u2500\u2500 valid.csv`,highlighted:`my_dataset_repository/
\u251C\u2500\u2500 README.md
\u2514\u2500\u2500 data/
    \u251C\u2500\u2500 training.<span class="hljs-built_in">csv</span>
    \u251C\u2500\u2500 <span class="hljs-built_in">eval</span>.<span class="hljs-built_in">csv</span>
    \u2514\u2500\u2500 valid.<span class="hljs-built_in">csv</span>`}}),fe=new Ce({}),de=new Me({props:{code:`my_dataset_repository/
\u251C\u2500\u2500 README.md
\u2514\u2500\u2500 data/
    \u251C\u2500\u2500 train-00000-of-00003.csv
    \u251C\u2500\u2500 train-00001-of-00003.csv
    \u251C\u2500\u2500 train-00002-of-00003.csv
    \u251C\u2500\u2500 test-00000-of-00001.csv
    \u251C\u2500\u2500 random-00000-of-00003.csv
    \u251C\u2500\u2500 random-00001-of-00003.csv
    \u2514\u2500\u2500 random-00002-of-00003.csv`,highlighted:`my_dataset_repository/
\u251C\u2500\u2500 README.md
\u2514\u2500\u2500 data/
    \u251C\u2500\u2500 train<span class="hljs-string">-00000</span>-of<span class="hljs-string">-00003</span>.csv
    \u251C\u2500\u2500 train<span class="hljs-string">-00001</span>-of<span class="hljs-string">-00003</span>.csv
    \u251C\u2500\u2500 train<span class="hljs-string">-00002</span>-of<span class="hljs-string">-00003</span>.csv
    \u251C\u2500\u2500 test<span class="hljs-string">-00000</span>-of<span class="hljs-string">-00001</span>.csv
    \u251C\u2500\u2500 random<span class="hljs-string">-00000</span>-of<span class="hljs-string">-00003</span>.csv
    \u251C\u2500\u2500 random<span class="hljs-string">-00001</span>-of<span class="hljs-string">-00003</span>.csv
    \u2514\u2500\u2500 random<span class="hljs-string">-00002</span>-of<span class="hljs-string">-00003</span>.csv`}}),{c(){h=i("meta"),q=f(),u=i("h1"),x=i("a"),I=i("span"),_(m.$$.fragment),k=f(),J=i("span"),ss=a("Structure your repository"),mt=f(),me=i("p"),as=a("To host and share your dataset, you can create a dataset repository on the Hugging Face Dataset Hub and upload your data files."),_t=f(),U=i("p"),ls=a(`This guide will show you how to structure your dataset repository when you upload it.
A dataset with a supported structure and file format (text, JSON, JSON Lines, CSV, Parquet) can be loaded automatically with `),_e=i("a"),is=a("load_dataset()"),rs=a(", and it\u2019ll have a preview on its dataset page on the Hub."),yt=f(),V=i("p"),os=a("For more flexibility over how to load and generate a dataset, you can also write a "),ye=i("a"),ns=a("dataset loading script"),ps=a("."),Et=f(),H=i("h2"),B=i("a"),Oe=i("span"),_(te.$$.fragment),fs=f(),ge=i("span"),ds=a("Main use-case"),$t=f(),j=i("p"),cs=a("The simplest dataset structure has two files: "),Ne=i("code"),hs=a("train.csv"),us=a(" and "),Ie=i("code"),vs=a("test.csv"),ms=a("."),wt=f(),S=i("p"),_s=a("Your repository will also contain a "),He=i("code"),ys=a("README.md"),Es=a(" file, the "),Ee=i("a"),$s=a("dataset card"),ws=a(" displayed on your dataset page."),bt=f(),_(se.$$.fragment),xt=f(),R=i("h2"),Y=i("a"),Re=i("span"),_(ae.$$.fragment),bs=f(),Te=i("span"),xs=a("Splits and file names"),Dt=f(),$e=i("p"),Ds=a("\u{1F917} Datasets automatically infer a dataset\u2019s train, validation, and test splits from the file names."),At=f(),we=i("p"),As=a("All the files that contain a split name in their names (delimited by non-word characters, see below) are considered part of that split:"),kt=f(),P=i("ul"),C=i("li"),ks=a("train split: "),Le=i("code"),js=a("train.csv"),Ss=a(", "),Fe=i("code"),Ps=a("my_train_file.csv"),Cs=a(", "),qe=i("code"),Ms=a("train1.csv"),Os=f(),M=i("li"),gs=a("validation split: "),Je=i("code"),Ns=a("validation.csv"),Is=a(", "),Ue=i("code"),Hs=a("my_validation_file.csv"),Rs=a(", "),Ve=i("code"),Ts=a("validation1.csv"),Ls=f(),O=i("li"),Fs=a("test split: "),Be=i("code"),qs=a("test.csv"),Js=a(", "),Ye=i("code"),Us=a("my_test_file.csv"),Vs=a(", "),Ge=i("code"),Bs=a("test1.csv"),jt=f(),G=i("p"),Ys=a("Here is an example where all the files are placed into a directory named "),ze=i("code"),Gs=a("data"),zs=a(":"),St=f(),_(le.$$.fragment),Pt=f(),D=i("p"),Ks=a("Note that if a file contains "),Ke=i("em"),Qs=a("test"),Ws=a(" but is embedded in another word (e.g. "),Qe=i("code"),Xs=a("testfile.csv"),Zs=a(`), it\u2019s not counted as a test file.
It must be delimited by non-word characters, e.g. `),We=i("code"),ea=a("test_file.csv"),ta=a(`.
Supported delimiters are underscores, dashes, spaces, dots and numbers.`),Ct=f(),T=i("h2"),z=i("a"),Xe=i("span"),_(ie.$$.fragment),sa=f(),Ze=i("span"),aa=a("Multiple files per split"),Mt=f(),be=i("p"),la=a(`If one of your splits comprises several files, \u{1F917} Datasets can still infer whether it is the train, validation, and test split from the file name.
For example, if your train and test splits span several files:`),Ot=f(),_(re.$$.fragment),gt=f(),v=i("p"),ia=a("Make sure all the files of your "),et=i("code"),ra=a("train"),oa=a(" set have "),tt=i("em"),na=a("train"),pa=a(` in their names (same for test and validation).
Even if you add a prefix or suffix to `),st=i("code"),fa=a("train"),da=a(" in the file name (like "),at=i("code"),ca=a("my_train_file_00001.csv"),ha=a(` for example),
\u{1F917} Datasets can still infer the appropriate split.`),Nt=f(),xe=i("p"),ua=a(`For convenience, you can also place your data files into different directories.
In this case, the split name is inferred from the directory name.`),It=f(),_(oe.$$.fragment),Ht=f(),_(K.$$.fragment),Rt=f(),L=i("h2"),Q=i("a"),lt=i("span"),_(ne.$$.fragment),va=f(),it=i("span"),ma=a("Split names keywords"),Tt=f(),De=i("p"),_a=a(`Validation splits are sometimes called \u201Cdev\u201D, and test splits are called \u201Ceval\u201D.
These other names are also supported.
In particular, these keywords are equivalent:`),Lt=f(),g=i("ul"),rt=i("li"),ya=a("train, training"),Ea=f(),ot=i("li"),$a=a("validation, valid, dev"),wa=f(),nt=i("li"),ba=a("test, testing, eval, evaluation"),Ft=f(),Ae=i("p"),xa=a("Therefore this is also a valid repository:"),qt=f(),_(pe.$$.fragment),Jt=f(),F=i("h2"),W=i("a"),pt=i("span"),_(fe.$$.fragment),Da=f(),ft=i("span"),Aa=a("Custom split names"),Ut=f(),X=i("p"),ka=a(`If you have other data files in addition to the traditional train, validation, and test sets, you must use a different structure.
Use this exact file name format for this structure type: `),dt=i("code"),ja=a("data/<split_name>-xxxxx-of-xxxxx.csv"),Sa=a("."),Vt=f(),A=i("p"),Pa=a("Here is an example with three splits: "),ct=i("code"),Ca=a("train"),Ma=a(", "),ht=i("code"),Oa=a("test"),ga=a(", and "),ut=i("code"),Na=a("random"),Ia=a(":"),Bt=f(),_(de.$$.fragment),this.h()},l(e){const n=Fl('[data-svelte="svelte-1phssyn"]',document.head);h=r(n,"META",{name:!0,content:!0}),n.forEach(s),q=d(e),u=r(e,"H1",{class:!0});var ce=o(u);x=r(ce,"A",{id:!0,class:!0,href:!0});var Ha=o(x);I=r(Ha,"SPAN",{});var Ra=o(I);y(m.$$.fragment,Ra),Ra.forEach(s),Ha.forEach(s),k=d(ce),J=r(ce,"SPAN",{});var Ta=o(J);ss=l(Ta,"Structure your repository"),Ta.forEach(s),ce.forEach(s),mt=d(e),me=r(e,"P",{});var La=o(me);as=l(La,"To host and share your dataset, you can create a dataset repository on the Hugging Face Dataset Hub and upload your data files."),La.forEach(s),_t=d(e),U=r(e,"P",{});var Gt=o(U);ls=l(Gt,`This guide will show you how to structure your dataset repository when you upload it.
A dataset with a supported structure and file format (text, JSON, JSON Lines, CSV, Parquet) can be loaded automatically with `),_e=r(Gt,"A",{href:!0});var Fa=o(_e);is=l(Fa,"load_dataset()"),Fa.forEach(s),rs=l(Gt,", and it\u2019ll have a preview on its dataset page on the Hub."),Gt.forEach(s),yt=d(e),V=r(e,"P",{});var zt=o(V);os=l(zt,"For more flexibility over how to load and generate a dataset, you can also write a "),ye=r(zt,"A",{href:!0});var qa=o(ye);ns=l(qa,"dataset loading script"),qa.forEach(s),ps=l(zt,"."),zt.forEach(s),Et=d(e),H=r(e,"H2",{class:!0});var Kt=o(H);B=r(Kt,"A",{id:!0,class:!0,href:!0});var Ja=o(B);Oe=r(Ja,"SPAN",{});var Ua=o(Oe);y(te.$$.fragment,Ua),Ua.forEach(s),Ja.forEach(s),fs=d(Kt),ge=r(Kt,"SPAN",{});var Va=o(ge);ds=l(Va,"Main use-case"),Va.forEach(s),Kt.forEach(s),$t=d(e),j=r(e,"P",{});var ke=o(j);cs=l(ke,"The simplest dataset structure has two files: "),Ne=r(ke,"CODE",{});var Ba=o(Ne);hs=l(Ba,"train.csv"),Ba.forEach(s),us=l(ke," and "),Ie=r(ke,"CODE",{});var Ya=o(Ie);vs=l(Ya,"test.csv"),Ya.forEach(s),ms=l(ke,"."),ke.forEach(s),wt=d(e),S=r(e,"P",{});var je=o(S);_s=l(je,"Your repository will also contain a "),He=r(je,"CODE",{});var Ga=o(He);ys=l(Ga,"README.md"),Ga.forEach(s),Es=l(je," file, the "),Ee=r(je,"A",{href:!0});var za=o(Ee);$s=l(za,"dataset card"),za.forEach(s),ws=l(je," displayed on your dataset page."),je.forEach(s),bt=d(e),y(se.$$.fragment,e),xt=d(e),R=r(e,"H2",{class:!0});var Qt=o(R);Y=r(Qt,"A",{id:!0,class:!0,href:!0});var Ka=o(Y);Re=r(Ka,"SPAN",{});var Qa=o(Re);y(ae.$$.fragment,Qa),Qa.forEach(s),Ka.forEach(s),bs=d(Qt),Te=r(Qt,"SPAN",{});var Wa=o(Te);xs=l(Wa,"Splits and file names"),Wa.forEach(s),Qt.forEach(s),Dt=d(e),$e=r(e,"P",{});var Xa=o($e);Ds=l(Xa,"\u{1F917} Datasets automatically infer a dataset\u2019s train, validation, and test splits from the file names."),Xa.forEach(s),At=d(e),we=r(e,"P",{});var Za=o(we);As=l(Za,"All the files that contain a split name in their names (delimited by non-word characters, see below) are considered part of that split:"),Za.forEach(s),kt=d(e),P=r(e,"UL",{});var Se=o(P);C=r(Se,"LI",{});var he=o(C);ks=l(he,"train split: "),Le=r(he,"CODE",{});var el=o(Le);js=l(el,"train.csv"),el.forEach(s),Ss=l(he,", "),Fe=r(he,"CODE",{});var tl=o(Fe);Ps=l(tl,"my_train_file.csv"),tl.forEach(s),Cs=l(he,", "),qe=r(he,"CODE",{});var sl=o(qe);Ms=l(sl,"train1.csv"),sl.forEach(s),he.forEach(s),Os=d(Se),M=r(Se,"LI",{});var ue=o(M);gs=l(ue,"validation split: "),Je=r(ue,"CODE",{});var al=o(Je);Ns=l(al,"validation.csv"),al.forEach(s),Is=l(ue,", "),Ue=r(ue,"CODE",{});var ll=o(Ue);Hs=l(ll,"my_validation_file.csv"),ll.forEach(s),Rs=l(ue,", "),Ve=r(ue,"CODE",{});var il=o(Ve);Ts=l(il,"validation1.csv"),il.forEach(s),ue.forEach(s),Ls=d(Se),O=r(Se,"LI",{});var ve=o(O);Fs=l(ve,"test split: "),Be=r(ve,"CODE",{});var rl=o(Be);qs=l(rl,"test.csv"),rl.forEach(s),Js=l(ve,", "),Ye=r(ve,"CODE",{});var ol=o(Ye);Us=l(ol,"my_test_file.csv"),ol.forEach(s),Vs=l(ve,", "),Ge=r(ve,"CODE",{});var nl=o(Ge);Bs=l(nl,"test1.csv"),nl.forEach(s),ve.forEach(s),Se.forEach(s),jt=d(e),G=r(e,"P",{});var Wt=o(G);Ys=l(Wt,"Here is an example where all the files are placed into a directory named "),ze=r(Wt,"CODE",{});var pl=o(ze);Gs=l(pl,"data"),pl.forEach(s),zs=l(Wt,":"),Wt.forEach(s),St=d(e),y(le.$$.fragment,e),Pt=d(e),D=r(e,"P",{});var Z=o(D);Ks=l(Z,"Note that if a file contains "),Ke=r(Z,"EM",{});var fl=o(Ke);Qs=l(fl,"test"),fl.forEach(s),Ws=l(Z," but is embedded in another word (e.g. "),Qe=r(Z,"CODE",{});var dl=o(Qe);Xs=l(dl,"testfile.csv"),dl.forEach(s),Zs=l(Z,`), it\u2019s not counted as a test file.
It must be delimited by non-word characters, e.g. `),We=r(Z,"CODE",{});var cl=o(We);ea=l(cl,"test_file.csv"),cl.forEach(s),ta=l(Z,`.
Supported delimiters are underscores, dashes, spaces, dots and numbers.`),Z.forEach(s),Ct=d(e),T=r(e,"H2",{class:!0});var Xt=o(T);z=r(Xt,"A",{id:!0,class:!0,href:!0});var hl=o(z);Xe=r(hl,"SPAN",{});var ul=o(Xe);y(ie.$$.fragment,ul),ul.forEach(s),hl.forEach(s),sa=d(Xt),Ze=r(Xt,"SPAN",{});var vl=o(Ze);aa=l(vl,"Multiple files per split"),vl.forEach(s),Xt.forEach(s),Mt=d(e),be=r(e,"P",{});var ml=o(be);la=l(ml,`If one of your splits comprises several files, \u{1F917} Datasets can still infer whether it is the train, validation, and test split from the file name.
For example, if your train and test splits span several files:`),ml.forEach(s),Ot=d(e),y(re.$$.fragment,e),gt=d(e),v=r(e,"P",{});var N=o(v);ia=l(N,"Make sure all the files of your "),et=r(N,"CODE",{});var _l=o(et);ra=l(_l,"train"),_l.forEach(s),oa=l(N," set have "),tt=r(N,"EM",{});var yl=o(tt);na=l(yl,"train"),yl.forEach(s),pa=l(N,` in their names (same for test and validation).
Even if you add a prefix or suffix to `),st=r(N,"CODE",{});var El=o(st);fa=l(El,"train"),El.forEach(s),da=l(N," in the file name (like "),at=r(N,"CODE",{});var $l=o(at);ca=l($l,"my_train_file_00001.csv"),$l.forEach(s),ha=l(N,` for example),
\u{1F917} Datasets can still infer the appropriate split.`),N.forEach(s),Nt=d(e),xe=r(e,"P",{});var wl=o(xe);ua=l(wl,`For convenience, you can also place your data files into different directories.
In this case, the split name is inferred from the directory name.`),wl.forEach(s),It=d(e),y(oe.$$.fragment,e),Ht=d(e),y(K.$$.fragment,e),Rt=d(e),L=r(e,"H2",{class:!0});var Zt=o(L);Q=r(Zt,"A",{id:!0,class:!0,href:!0});var bl=o(Q);lt=r(bl,"SPAN",{});var xl=o(lt);y(ne.$$.fragment,xl),xl.forEach(s),bl.forEach(s),va=d(Zt),it=r(Zt,"SPAN",{});var Dl=o(it);ma=l(Dl,"Split names keywords"),Dl.forEach(s),Zt.forEach(s),Tt=d(e),De=r(e,"P",{});var Al=o(De);_a=l(Al,`Validation splits are sometimes called \u201Cdev\u201D, and test splits are called \u201Ceval\u201D.
These other names are also supported.
In particular, these keywords are equivalent:`),Al.forEach(s),Lt=d(e),g=r(e,"UL",{});var Pe=o(g);rt=r(Pe,"LI",{});var kl=o(rt);ya=l(kl,"train, training"),kl.forEach(s),Ea=d(Pe),ot=r(Pe,"LI",{});var jl=o(ot);$a=l(jl,"validation, valid, dev"),jl.forEach(s),wa=d(Pe),nt=r(Pe,"LI",{});var Sl=o(nt);ba=l(Sl,"test, testing, eval, evaluation"),Sl.forEach(s),Pe.forEach(s),Ft=d(e),Ae=r(e,"P",{});var Pl=o(Ae);xa=l(Pl,"Therefore this is also a valid repository:"),Pl.forEach(s),qt=d(e),y(pe.$$.fragment,e),Jt=d(e),F=r(e,"H2",{class:!0});var es=o(F);W=r(es,"A",{id:!0,class:!0,href:!0});var Cl=o(W);pt=r(Cl,"SPAN",{});var Ml=o(pt);y(fe.$$.fragment,Ml),Ml.forEach(s),Cl.forEach(s),Da=d(es),ft=r(es,"SPAN",{});var Ol=o(ft);Aa=l(Ol,"Custom split names"),Ol.forEach(s),es.forEach(s),Ut=d(e),X=r(e,"P",{});var ts=o(X);ka=l(ts,`If you have other data files in addition to the traditional train, validation, and test sets, you must use a different structure.
Use this exact file name format for this structure type: `),dt=r(ts,"CODE",{});var gl=o(dt);ja=l(gl,"data/<split_name>-xxxxx-of-xxxxx.csv"),gl.forEach(s),Sa=l(ts,"."),ts.forEach(s),Vt=d(e),A=r(e,"P",{});var ee=o(A);Pa=l(ee,"Here is an example with three splits: "),ct=r(ee,"CODE",{});var Nl=o(ct);Ca=l(Nl,"train"),Nl.forEach(s),Ma=l(ee,", "),ht=r(ee,"CODE",{});var Il=o(ht);Oa=l(Il,"test"),Il.forEach(s),ga=l(ee,", and "),ut=r(ee,"CODE",{});var Hl=o(ut);Na=l(Hl,"random"),Hl.forEach(s),Ia=l(ee,":"),ee.forEach(s),Bt=d(e),y(de.$$.fragment,e),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(Bl)),c(x,"id","structure-your-repository"),c(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(x,"href","#structure-your-repository"),c(u,"class","relative group"),c(_e,"href","/docs/datasets/main/en/package_reference/loading_methods#datasets.load_dataset"),c(ye,"href","./dataset_script"),c(B,"id","main-usecase"),c(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(B,"href","#main-usecase"),c(H,"class","relative group"),c(Ee,"href","dataset_card"),c(Y,"id","splits-and-file-names"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#splits-and-file-names"),c(R,"class","relative group"),c(z,"id","multiple-files-per-split"),c(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(z,"href","#multiple-files-per-split"),c(T,"class","relative group"),c(Q,"id","split-names-keywords"),c(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Q,"href","#split-names-keywords"),c(L,"class","relative group"),c(W,"id","custom-split-names"),c(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(W,"href","#custom-split-names"),c(F,"class","relative group")},m(e,n){t(document.head,h),p(e,q,n),p(e,u,n),t(u,x),t(x,I),E(m,I,null),t(u,k),t(u,J),t(J,ss),p(e,mt,n),p(e,me,n),t(me,as),p(e,_t,n),p(e,U,n),t(U,ls),t(U,_e),t(_e,is),t(U,rs),p(e,yt,n),p(e,V,n),t(V,os),t(V,ye),t(ye,ns),t(V,ps),p(e,Et,n),p(e,H,n),t(H,B),t(B,Oe),E(te,Oe,null),t(H,fs),t(H,ge),t(ge,ds),p(e,$t,n),p(e,j,n),t(j,cs),t(j,Ne),t(Ne,hs),t(j,us),t(j,Ie),t(Ie,vs),t(j,ms),p(e,wt,n),p(e,S,n),t(S,_s),t(S,He),t(He,ys),t(S,Es),t(S,Ee),t(Ee,$s),t(S,ws),p(e,bt,n),E(se,e,n),p(e,xt,n),p(e,R,n),t(R,Y),t(Y,Re),E(ae,Re,null),t(R,bs),t(R,Te),t(Te,xs),p(e,Dt,n),p(e,$e,n),t($e,Ds),p(e,At,n),p(e,we,n),t(we,As),p(e,kt,n),p(e,P,n),t(P,C),t(C,ks),t(C,Le),t(Le,js),t(C,Ss),t(C,Fe),t(Fe,Ps),t(C,Cs),t(C,qe),t(qe,Ms),t(P,Os),t(P,M),t(M,gs),t(M,Je),t(Je,Ns),t(M,Is),t(M,Ue),t(Ue,Hs),t(M,Rs),t(M,Ve),t(Ve,Ts),t(P,Ls),t(P,O),t(O,Fs),t(O,Be),t(Be,qs),t(O,Js),t(O,Ye),t(Ye,Us),t(O,Vs),t(O,Ge),t(Ge,Bs),p(e,jt,n),p(e,G,n),t(G,Ys),t(G,ze),t(ze,Gs),t(G,zs),p(e,St,n),E(le,e,n),p(e,Pt,n),p(e,D,n),t(D,Ks),t(D,Ke),t(Ke,Qs),t(D,Ws),t(D,Qe),t(Qe,Xs),t(D,Zs),t(D,We),t(We,ea),t(D,ta),p(e,Ct,n),p(e,T,n),t(T,z),t(z,Xe),E(ie,Xe,null),t(T,sa),t(T,Ze),t(Ze,aa),p(e,Mt,n),p(e,be,n),t(be,la),p(e,Ot,n),E(re,e,n),p(e,gt,n),p(e,v,n),t(v,ia),t(v,et),t(et,ra),t(v,oa),t(v,tt),t(tt,na),t(v,pa),t(v,st),t(st,fa),t(v,da),t(v,at),t(at,ca),t(v,ha),p(e,Nt,n),p(e,xe,n),t(xe,ua),p(e,It,n),E(oe,e,n),p(e,Ht,n),E(K,e,n),p(e,Rt,n),p(e,L,n),t(L,Q),t(Q,lt),E(ne,lt,null),t(L,va),t(L,it),t(it,ma),p(e,Tt,n),p(e,De,n),t(De,_a),p(e,Lt,n),p(e,g,n),t(g,rt),t(rt,ya),t(g,Ea),t(g,ot),t(ot,$a),t(g,wa),t(g,nt),t(nt,ba),p(e,Ft,n),p(e,Ae,n),t(Ae,xa),p(e,qt,n),E(pe,e,n),p(e,Jt,n),p(e,F,n),t(F,W),t(W,pt),E(fe,pt,null),t(F,Da),t(F,ft),t(ft,Aa),p(e,Ut,n),p(e,X,n),t(X,ka),t(X,dt),t(dt,ja),t(X,Sa),p(e,Vt,n),p(e,A,n),t(A,Pa),t(A,ct),t(ct,Ca),t(A,Ma),t(A,ht),t(ht,Oa),t(A,ga),t(A,ut),t(ut,Na),t(A,Ia),p(e,Bt,n),E(de,e,n),Yt=!0},p(e,[n]){const ce={};n&2&&(ce.$$scope={dirty:n,ctx:e}),K.$set(ce)},i(e){Yt||($(m.$$.fragment,e),$(te.$$.fragment,e),$(se.$$.fragment,e),$(ae.$$.fragment,e),$(le.$$.fragment,e),$(ie.$$.fragment,e),$(re.$$.fragment,e),$(oe.$$.fragment,e),$(K.$$.fragment,e),$(ne.$$.fragment,e),$(pe.$$.fragment,e),$(fe.$$.fragment,e),$(de.$$.fragment,e),Yt=!0)},o(e){w(m.$$.fragment,e),w(te.$$.fragment,e),w(se.$$.fragment,e),w(ae.$$.fragment,e),w(le.$$.fragment,e),w(ie.$$.fragment,e),w(re.$$.fragment,e),w(oe.$$.fragment,e),w(K.$$.fragment,e),w(ne.$$.fragment,e),w(pe.$$.fragment,e),w(fe.$$.fragment,e),w(de.$$.fragment,e),Yt=!1},d(e){s(h),e&&s(q),e&&s(u),b(m),e&&s(mt),e&&s(me),e&&s(_t),e&&s(U),e&&s(yt),e&&s(V),e&&s(Et),e&&s(H),b(te),e&&s($t),e&&s(j),e&&s(wt),e&&s(S),e&&s(bt),b(se,e),e&&s(xt),e&&s(R),b(ae),e&&s(Dt),e&&s($e),e&&s(At),e&&s(we),e&&s(kt),e&&s(P),e&&s(jt),e&&s(G),e&&s(St),b(le,e),e&&s(Pt),e&&s(D),e&&s(Ct),e&&s(T),b(ie),e&&s(Mt),e&&s(be),e&&s(Ot),b(re,e),e&&s(gt),e&&s(v),e&&s(Nt),e&&s(xe),e&&s(It),b(oe,e),e&&s(Ht),b(K,e),e&&s(Rt),e&&s(L),b(ne),e&&s(Tt),e&&s(De),e&&s(Lt),e&&s(g),e&&s(Ft),e&&s(Ae),e&&s(qt),b(pe,e),e&&s(Jt),e&&s(F),b(fe),e&&s(Ut),e&&s(X),e&&s(Vt),e&&s(A),e&&s(Bt),b(de,e)}}}const Bl={local:"structure-your-repository",sections:[{local:"main-usecase",title:"Main use-case"},{local:"splits-and-file-names",title:"Splits and file names"},{local:"multiple-files-per-split",title:"Multiple files per split"},{local:"split-names-keywords",title:"Split names keywords"},{local:"custom-split-names",title:"Custom split names"}],title:"Structure your repository"};function Yl(vt){return ql(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Wl extends Rl{constructor(h){super();Tl(this,h,Yl,Vl,Ll,{})}}export{Wl as default,Bl as metadata};
