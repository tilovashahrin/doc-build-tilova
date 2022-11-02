import{S as vr,i as kr,s as _r,e as a,k as i,w as u,t as c,M as br,c as n,d as r,m as l,a as o,x as f,h as s,b as d,G as e,g as p,y as v,L as $r,q as k,o as _,B as b,v as yr}from"../../chunks/vendor-hf-doc-builder.js";import{D as w}from"../../chunks/Docstring-hf-doc-builder.js";import{I as Ht}from"../../chunks/IconCopyLink-hf-doc-builder.js";function Tr(Ut){let E,Le,x,B,ge,W,Je,me,Re,Ce,A,S,pe,q,Fe,he,Ke,Be,g,H,Qe,ue,Xe,Ye,G,Ze,fe,et,tt,te,rt,at,O,U,nt,ve,ot,ct,V,j,st,P,it,ke,lt,dt,_e,gt,mt,pt,N,J,ht,R,ut,be,ft,vt,Se,I,z,$e,F,kt,ye,_t,Ge,y,K,bt,D,$t,Te,yt,Tt,we,wt,Et,xt,re,Q,Oe,T,X,At,L,Pt,Ee,It,Dt,xe,Lt,Ct,Bt,ae,Y,Ve,h,Z,St,C,Gt,Ae,Ot,Vt,Pe,Nt,zt,Mt,Ie,Wt,qt,ne,ee,Ne;return W=new Ht({}),q=new Ht({}),H=new w({props:{name:"class accelerate.tracking.GeneralTracker",anchor:"accelerate.tracking.GeneralTracker",parameters:[],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/tracking.py#L72"}}),U=new w({props:{name:"finish",anchor:"accelerate.tracking.GeneralTracker.finish",parameters:[],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/tracking.py#L119"}}),j=new w({props:{name:"log",anchor:"accelerate.tracking.GeneralTracker.log",parameters:[{name:"values",val:": dict"},{name:"step",val:": typing.Optional[int]"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"accelerate.tracking.GeneralTracker.log.values",description:`<strong>values</strong> (Dictionary <code>str</code> to <code>str</code>, <code>float</code>, or <code>int</code>) &#x2014;
Values to be logged as key-value pairs. The values need to have type <code>str</code>, <code>float</code>, or <code>int</code>.`,name:"values"},{anchor:"accelerate.tracking.GeneralTracker.log.step",description:`<strong>step</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The run step. If included, the log will be affiliated with this step.`,name:"step"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/tracking.py#L105"}}),J=new w({props:{name:"store_init_configuration",anchor:"accelerate.tracking.GeneralTracker.store_init_configuration",parameters:[{name:"values",val:": dict"}],parametersDescription:[{anchor:"accelerate.tracking.GeneralTracker.store_init_configuration.values",description:`<strong>values</strong> (Dictionary <code>str</code> to <code>bool</code>, <code>str</code>, <code>float</code> or <code>int</code>) &#x2014;
Values to be stored as initial hyperparameters as key-value pairs. The values need to have type <code>bool</code>,
<code>str</code>, <code>float</code>, <code>int</code>, or <code>None</code>.`,name:"values"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/tracking.py#L92"}}),F=new Ht({}),K=new w({props:{name:"class accelerate.tracking.TensorBoardTracker",anchor:"accelerate.tracking.TensorBoardTracker",parameters:[{name:"run_name",val:": str"},{name:"logging_dir",val:": typing.Union[str, os.PathLike, NoneType]"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"accelerate.tracking.TensorBoardTracker.run_name",description:`<strong>run_name</strong> (<code>str</code>) &#x2014;
The name of the experiment run`,name:"run_name"},{anchor:"accelerate.tracking.TensorBoardTracker.logging_dir",description:`<strong>logging_dir</strong> (<code>str</code>, <code>os.PathLike</code>) &#x2014;
Location for TensorBoard logs to be stored.
kwargs &#x2014;
Additional key word arguments passed along to the <code>tensorboard.SummaryWriter.__init__</code> method.`,name:"logging_dir"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/tracking.py#L134"}}),Q=new w({props:{name:"__init__",anchor:"accelerate.tracking.TensorBoardTracker.__init__",parameters:[{name:"run_name",val:": str"},{name:"logging_dir",val:": typing.Union[str, os.PathLike, NoneType]"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/tracking.py#L150"}}),X=new w({props:{name:"class accelerate.tracking.WandBTracker",anchor:"accelerate.tracking.WandBTracker",parameters:[{name:"run_name",val:": str"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"accelerate.tracking.WandBTracker.run_name",description:`<strong>run_name</strong> (<code>str</code>) &#x2014;
The name of the experiment run.
kwargs &#x2014;
Additional key word arguments passed along to the <code>wandb.init</code> method.`,name:"run_name"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/tracking.py#L218"}}),Y=new w({props:{name:"__init__",anchor:"accelerate.tracking.WandBTracker.__init__",parameters:[{name:"run_name",val:": str"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/tracking.py#L232"}}),Z=new w({props:{name:"class accelerate.tracking.CometMLTracker",anchor:"accelerate.tracking.CometMLTracker",parameters:[{name:"run_name",val:": str"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"accelerate.tracking.CometMLTracker.run_name",description:`<strong>run_name</strong> (<code>str</code>) &#x2014;
The name of the experiment run.
kwargs &#x2014;
Additional key word arguments passed along to the <code>Experiment.__init__</code> method.`,name:"run_name"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/tracking.py#L280"}}),ee=new w({props:{name:"__init__",anchor:"accelerate.tracking.CometMLTracker.__init__",parameters:[{name:"run_name",val:": str"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/tracking.py#L296"}}),{c(){E=a("meta"),Le=i(),x=a("h1"),B=a("a"),ge=a("span"),u(W.$$.fragment),Je=i(),me=a("span"),Re=c("Experiment Tracking"),Ce=i(),A=a("h2"),S=a("a"),pe=a("span"),u(q.$$.fragment),Fe=i(),he=a("span"),Ke=c("The Base Tracker Class"),Be=i(),g=a("div"),u(H.$$.fragment),Qe=i(),ue=a("p"),Xe=c("A base Tracker class to be used for all logging integration implementations."),Ye=i(),G=a("p"),Ze=c("Each function should take in "),fe=a("code"),et=c("**kwargs"),tt=c(` that will automatically be passed in from a base dictionary provided to
`),te=a("a"),rt=c("Accelerator"),at=i(),O=a("div"),u(U.$$.fragment),nt=i(),ve=a("p"),ot=c(`Should run any finalizing functions within the tracking API. If the API should not have one, just don\u2019t
overwrite that method.`),ct=i(),V=a("div"),u(j.$$.fragment),st=i(),P=a("p"),it=c("Logs "),ke=a("code"),lt=c("values"),dt=c(" to the current run. Base "),_e=a("code"),gt=c("log"),mt=c(" implementations of a tracking API should go in here, along with\nspecial behavior for the `step parameter."),pt=i(),N=a("div"),u(J.$$.fragment),ht=i(),R=a("p"),ut=c("Logs "),be=a("code"),ft=c("values"),vt=c(` as hyperparameters for the run. Implementations should use the experiment configuration
functionality of a tracking API.`),Se=i(),I=a("h2"),z=a("a"),$e=a("span"),u(F.$$.fragment),kt=i(),ye=a("span"),_t=c("Integrated Trackers"),Ge=i(),y=a("div"),u(K.$$.fragment),bt=i(),D=a("p"),$t=c("A "),Te=a("code"),yt=c("Tracker"),Tt=c(" class that supports "),we=a("code"),wt=c("tensorboard"),Et=c(". Should be initialized at the start of your script."),xt=i(),re=a("div"),u(Q.$$.fragment),Oe=i(),T=a("div"),u(X.$$.fragment),At=i(),L=a("p"),Pt=c("A "),Ee=a("code"),It=c("Tracker"),Dt=c(" class that supports "),xe=a("code"),Lt=c("wandb"),Ct=c(". Should be initialized at the start of your script."),Bt=i(),ae=a("div"),u(Y.$$.fragment),Ve=i(),h=a("div"),u(Z.$$.fragment),St=i(),C=a("p"),Gt=c("A "),Ae=a("code"),Ot=c("Tracker"),Vt=c(" class that supports "),Pe=a("code"),Nt=c("comet_ml"),zt=c(". Should be initialized at the start of your script."),Mt=i(),Ie=a("p"),Wt=c("API keys must be stored in a Comet config file."),qt=i(),ne=a("div"),u(ee.$$.fragment),this.h()},l(t){const m=br('[data-svelte="svelte-1phssyn"]',document.head);E=n(m,"META",{name:!0,content:!0}),m.forEach(r),Le=l(t),x=n(t,"H1",{class:!0});var ze=o(x);B=n(ze,"A",{id:!0,class:!0,href:!0});var jt=o(B);ge=n(jt,"SPAN",{});var Jt=o(ge);f(W.$$.fragment,Jt),Jt.forEach(r),jt.forEach(r),Je=l(ze),me=n(ze,"SPAN",{});var Rt=o(me);Re=s(Rt,"Experiment Tracking"),Rt.forEach(r),ze.forEach(r),Ce=l(t),A=n(t,"H2",{class:!0});var Me=o(A);S=n(Me,"A",{id:!0,class:!0,href:!0});var Ft=o(S);pe=n(Ft,"SPAN",{});var Kt=o(pe);f(q.$$.fragment,Kt),Kt.forEach(r),Ft.forEach(r),Fe=l(Me),he=n(Me,"SPAN",{});var Qt=o(he);Ke=s(Qt,"The Base Tracker Class"),Qt.forEach(r),Me.forEach(r),Be=l(t),g=n(t,"DIV",{class:!0});var $=o(g);f(H.$$.fragment,$),Qe=l($),ue=n($,"P",{});var Xt=o(ue);Xe=s(Xt,"A base Tracker class to be used for all logging integration implementations."),Xt.forEach(r),Ye=l($),G=n($,"P",{});var De=o(G);Ze=s(De,"Each function should take in "),fe=n(De,"CODE",{});var Yt=o(fe);et=s(Yt,"**kwargs"),Yt.forEach(r),tt=s(De,` that will automatically be passed in from a base dictionary provided to
`),te=n(De,"A",{href:!0});var Zt=o(te);rt=s(Zt,"Accelerator"),Zt.forEach(r),De.forEach(r),at=l($),O=n($,"DIV",{class:!0});var We=o(O);f(U.$$.fragment,We),nt=l(We),ve=n(We,"P",{});var er=o(ve);ot=s(er,`Should run any finalizing functions within the tracking API. If the API should not have one, just don\u2019t
overwrite that method.`),er.forEach(r),We.forEach(r),ct=l($),V=n($,"DIV",{class:!0});var qe=o(V);f(j.$$.fragment,qe),st=l(qe),P=n(qe,"P",{});var oe=o(P);it=s(oe,"Logs "),ke=n(oe,"CODE",{});var tr=o(ke);lt=s(tr,"values"),tr.forEach(r),dt=s(oe," to the current run. Base "),_e=n(oe,"CODE",{});var rr=o(_e);gt=s(rr,"log"),rr.forEach(r),mt=s(oe," implementations of a tracking API should go in here, along with\nspecial behavior for the `step parameter."),oe.forEach(r),qe.forEach(r),pt=l($),N=n($,"DIV",{class:!0});var He=o(N);f(J.$$.fragment,He),ht=l(He),R=n(He,"P",{});var Ue=o(R);ut=s(Ue,"Logs "),be=n(Ue,"CODE",{});var ar=o(be);ft=s(ar,"values"),ar.forEach(r),vt=s(Ue,` as hyperparameters for the run. Implementations should use the experiment configuration
functionality of a tracking API.`),Ue.forEach(r),He.forEach(r),$.forEach(r),Se=l(t),I=n(t,"H2",{class:!0});var je=o(I);z=n(je,"A",{id:!0,class:!0,href:!0});var nr=o(z);$e=n(nr,"SPAN",{});var or=o($e);f(F.$$.fragment,or),or.forEach(r),nr.forEach(r),kt=l(je),ye=n(je,"SPAN",{});var cr=o(ye);_t=s(cr,"Integrated Trackers"),cr.forEach(r),je.forEach(r),Ge=l(t),y=n(t,"DIV",{class:!0});var ce=o(y);f(K.$$.fragment,ce),bt=l(ce),D=n(ce,"P",{});var se=o(D);$t=s(se,"A "),Te=n(se,"CODE",{});var sr=o(Te);yt=s(sr,"Tracker"),sr.forEach(r),Tt=s(se," class that supports "),we=n(se,"CODE",{});var ir=o(we);wt=s(ir,"tensorboard"),ir.forEach(r),Et=s(se,". Should be initialized at the start of your script."),se.forEach(r),xt=l(ce),re=n(ce,"DIV",{class:!0});var lr=o(re);f(Q.$$.fragment,lr),lr.forEach(r),ce.forEach(r),Oe=l(t),T=n(t,"DIV",{class:!0});var ie=o(T);f(X.$$.fragment,ie),At=l(ie),L=n(ie,"P",{});var le=o(L);Pt=s(le,"A "),Ee=n(le,"CODE",{});var dr=o(Ee);It=s(dr,"Tracker"),dr.forEach(r),Dt=s(le," class that supports "),xe=n(le,"CODE",{});var gr=o(xe);Lt=s(gr,"wandb"),gr.forEach(r),Ct=s(le,". Should be initialized at the start of your script."),le.forEach(r),Bt=l(ie),ae=n(ie,"DIV",{class:!0});var mr=o(ae);f(Y.$$.fragment,mr),mr.forEach(r),ie.forEach(r),Ve=l(t),h=n(t,"DIV",{class:!0});var M=o(h);f(Z.$$.fragment,M),St=l(M),C=n(M,"P",{});var de=o(C);Gt=s(de,"A "),Ae=n(de,"CODE",{});var pr=o(Ae);Ot=s(pr,"Tracker"),pr.forEach(r),Vt=s(de," class that supports "),Pe=n(de,"CODE",{});var hr=o(Pe);Nt=s(hr,"comet_ml"),hr.forEach(r),zt=s(de,". Should be initialized at the start of your script."),de.forEach(r),Mt=l(M),Ie=n(M,"P",{});var ur=o(Ie);Wt=s(ur,"API keys must be stored in a Comet config file."),ur.forEach(r),qt=l(M),ne=n(M,"DIV",{class:!0});var fr=o(ne);f(ee.$$.fragment,fr),fr.forEach(r),M.forEach(r),this.h()},h(){d(E,"name","hf:doc:metadata"),d(E,"content",JSON.stringify(wr)),d(B,"id","experiment-tracking"),d(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(B,"href","#experiment-tracking"),d(x,"class","relative group"),d(S,"id","accelerate.tracking.GeneralTracker"),d(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(S,"href","#accelerate.tracking.GeneralTracker"),d(A,"class","relative group"),d(te,"href","/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator"),d(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(g,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(z,"id","accelerate.tracking.TensorBoardTracker"),d(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(z,"href","#accelerate.tracking.TensorBoardTracker"),d(I,"class","relative group"),d(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(h,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,m){e(document.head,E),p(t,Le,m),p(t,x,m),e(x,B),e(B,ge),v(W,ge,null),e(x,Je),e(x,me),e(me,Re),p(t,Ce,m),p(t,A,m),e(A,S),e(S,pe),v(q,pe,null),e(A,Fe),e(A,he),e(he,Ke),p(t,Be,m),p(t,g,m),v(H,g,null),e(g,Qe),e(g,ue),e(ue,Xe),e(g,Ye),e(g,G),e(G,Ze),e(G,fe),e(fe,et),e(G,tt),e(G,te),e(te,rt),e(g,at),e(g,O),v(U,O,null),e(O,nt),e(O,ve),e(ve,ot),e(g,ct),e(g,V),v(j,V,null),e(V,st),e(V,P),e(P,it),e(P,ke),e(ke,lt),e(P,dt),e(P,_e),e(_e,gt),e(P,mt),e(g,pt),e(g,N),v(J,N,null),e(N,ht),e(N,R),e(R,ut),e(R,be),e(be,ft),e(R,vt),p(t,Se,m),p(t,I,m),e(I,z),e(z,$e),v(F,$e,null),e(I,kt),e(I,ye),e(ye,_t),p(t,Ge,m),p(t,y,m),v(K,y,null),e(y,bt),e(y,D),e(D,$t),e(D,Te),e(Te,yt),e(D,Tt),e(D,we),e(we,wt),e(D,Et),e(y,xt),e(y,re),v(Q,re,null),p(t,Oe,m),p(t,T,m),v(X,T,null),e(T,At),e(T,L),e(L,Pt),e(L,Ee),e(Ee,It),e(L,Dt),e(L,xe),e(xe,Lt),e(L,Ct),e(T,Bt),e(T,ae),v(Y,ae,null),p(t,Ve,m),p(t,h,m),v(Z,h,null),e(h,St),e(h,C),e(C,Gt),e(C,Ae),e(Ae,Ot),e(C,Vt),e(C,Pe),e(Pe,Nt),e(C,zt),e(h,Mt),e(h,Ie),e(Ie,Wt),e(h,qt),e(h,ne),v(ee,ne,null),Ne=!0},p:$r,i(t){Ne||(k(W.$$.fragment,t),k(q.$$.fragment,t),k(H.$$.fragment,t),k(U.$$.fragment,t),k(j.$$.fragment,t),k(J.$$.fragment,t),k(F.$$.fragment,t),k(K.$$.fragment,t),k(Q.$$.fragment,t),k(X.$$.fragment,t),k(Y.$$.fragment,t),k(Z.$$.fragment,t),k(ee.$$.fragment,t),Ne=!0)},o(t){_(W.$$.fragment,t),_(q.$$.fragment,t),_(H.$$.fragment,t),_(U.$$.fragment,t),_(j.$$.fragment,t),_(J.$$.fragment,t),_(F.$$.fragment,t),_(K.$$.fragment,t),_(Q.$$.fragment,t),_(X.$$.fragment,t),_(Y.$$.fragment,t),_(Z.$$.fragment,t),_(ee.$$.fragment,t),Ne=!1},d(t){r(E),t&&r(Le),t&&r(x),b(W),t&&r(Ce),t&&r(A),b(q),t&&r(Be),t&&r(g),b(H),b(U),b(j),b(J),t&&r(Se),t&&r(I),b(F),t&&r(Ge),t&&r(y),b(K),b(Q),t&&r(Oe),t&&r(T),b(X),b(Y),t&&r(Ve),t&&r(h),b(Z),b(ee)}}}const wr={local:"experiment-tracking",sections:[{local:"accelerate.tracking.GeneralTracker",title:"The Base Tracker Class"},{local:"accelerate.tracking.TensorBoardTracker",title:"Integrated Trackers"}],title:"Experiment Tracking"};function Er(Ut){return yr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ir extends vr{constructor(E){super();kr(this,E,Er,Tr,_r,{})}}export{Ir as default,wr as metadata};
