import{S as xt,i as kt,s as St,e as a,k as m,w as u,t as c,M as Dt,c as s,d as r,m as f,a as o,x as d,h as p,b as l,G as t,g as i,y as v,L as Tt,q as h,o as g,B as _,v as At}from"../../chunks/vendor-hf-doc-builder.js";import{D as b}from"../../chunks/Docstring-hf-doc-builder.js";import{I as Ae}from"../../chunks/IconCopyLink-hf-doc-builder.js";function Lt(Kr){let y,Le,E,I,ce,j,ir,pe,mr,Ie,z,fr,ue,cr,pr,ze,ie,ur,Me,w,M,de,C,dr,ve,vr,Ue,N,H,hr,he,gr,qe,P,F,_r,x,$r,ge,br,yr,U,Er,_e,wr,Nr,Pr,Ve,k,R,xr,S,kr,$e,Sr,Dr,q,Tr,be,Ar,Lr,Ir,Be,D,V,ye,J,zr,Ee,Mr,Oe,K,Q,Ge,W,X,je,Y,Z,Ce,ee,re,He,te,ae,Fe,T,B,we,se,Ur,Ne,qr,Re,$,oe,Vr,Pe,Br,Or,xe,Gr,jr,ke,Cr,Je,A,O,Se,ne,Hr,De,Fr,Ke,L,le,Rr,Te,Jr,Qe;return j=new Ae({}),C=new Ae({}),H=new b({props:{name:"class transformers.utils.ExplicitEnum",anchor:"transformers.utils.ExplicitEnum",parameters:[{name:"value",val:""},{name:"names",val:" = None"},{name:"module",val:" = None"},{name:"qualname",val:" = None"},{name:"type",val:" = None"},{name:"start",val:" = 1"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/utils/generic.py#L244"}}),F=new b({props:{name:"class transformers.utils.PaddingStrategy",anchor:"transformers.utils.PaddingStrategy",parameters:[{name:"value",val:""},{name:"names",val:" = None"},{name:"module",val:" = None"},{name:"qualname",val:" = None"},{name:"type",val:" = None"},{name:"start",val:" = 1"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/utils/generic.py#L256"}}),R=new b({props:{name:"class transformers.TensorType",anchor:"transformers.TensorType",parameters:[{name:"value",val:""},{name:"names",val:" = None"},{name:"module",val:" = None"},{name:"qualname",val:" = None"},{name:"type",val:" = None"},{name:"start",val:" = 1"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/utils/generic.py#L267"}}),J=new Ae({}),Q=new b({props:{name:"transformers.add_start_docstrings",anchor:"transformers.add_start_docstrings",parameters:[{name:"*docstr",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/utils/doc.py#L23"}}),X=new b({props:{name:"transformers.utils.add_start_docstrings_to_model_forward",anchor:"transformers.utils.add_start_docstrings_to_model_forward",parameters:[{name:"*docstr",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/utils/doc.py#L31"}}),Z=new b({props:{name:"transformers.add_end_docstrings",anchor:"transformers.add_end_docstrings",parameters:[{name:"*docstr",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/utils/doc.py#L53"}}),re=new b({props:{name:"transformers.utils.add_code_sample_docstrings",anchor:"transformers.utils.add_code_sample_docstrings",parameters:[{name:"*docstr",val:""},{name:"processor_class",val:" = None"},{name:"checkpoint",val:" = None"},{name:"output_type",val:" = None"},{name:"config_class",val:" = None"},{name:"mask",val:" = '[MASK]'"},{name:"qa_target_start_index",val:" = 14"},{name:"qa_target_end_index",val:" = 15"},{name:"model_cls",val:" = None"},{name:"modality",val:" = None"},{name:"expected_output",val:" = ''"},{name:"expected_loss",val:" = ''"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/utils/doc.py#L1051"}}),ae=new b({props:{name:"transformers.utils.replace_return_docstrings",anchor:"transformers.utils.replace_return_docstrings",parameters:[{name:"output_type",val:" = None"},{name:"config_class",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/utils/doc.py#L1130"}}),se=new Ae({}),oe=new b({props:{name:"class transformers.utils.cached_property",anchor:"transformers.utils.cached_property",parameters:[{name:"fget",val:" = None"},{name:"fset",val:" = None"},{name:"fdel",val:" = None"},{name:"doc",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/utils/generic.py#L32"}}),ne=new Ae({}),le=new b({props:{name:"class transformers._LazyModule",anchor:"transformers._LazyModule",parameters:[{name:"name",val:""},{name:"module_file",val:""},{name:"import_structure",val:""},{name:"module_spec",val:" = None"},{name:"extra_objects",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/utils/import_utils.py#L1014"}}),{c(){y=a("meta"),Le=m(),E=a("h1"),I=a("a"),ce=a("span"),u(j.$$.fragment),ir=m(),pe=a("span"),mr=c("General Utilities"),Ie=m(),z=a("p"),fr=c("This page lists all of Transformers general utility functions that are found in the file "),ue=a("code"),cr=c("utils.py"),pr=c("."),ze=m(),ie=a("p"),ur=c("Most of those are only useful if you are studying the general code in the library."),Me=m(),w=a("h2"),M=a("a"),de=a("span"),u(C.$$.fragment),dr=m(),ve=a("span"),vr=c("Enums and namedtuples"),Ue=m(),N=a("div"),u(H.$$.fragment),hr=m(),he=a("p"),gr=c("Enum with more explicit error message for missing values."),qe=m(),P=a("div"),u(F.$$.fragment),_r=m(),x=a("p"),$r=c("Possible values for the "),ge=a("code"),br=c("padding"),yr=c(" argument in "),U=a("a"),Er=c("PreTrainedTokenizerBase."),_e=a("strong"),wr=c("call"),Nr=c("()"),Pr=c(`. Useful for tab-completion in an
IDE.`),Ve=m(),k=a("div"),u(R.$$.fragment),xr=m(),S=a("p"),kr=c("Possible values for the "),$e=a("code"),Sr=c("return_tensors"),Dr=c(" argument in "),q=a("a"),Tr=c("PreTrainedTokenizerBase."),be=a("strong"),Ar=c("call"),Lr=c("()"),Ir=c(`. Useful for
tab-completion in an IDE.`),Be=m(),D=a("h2"),V=a("a"),ye=a("span"),u(J.$$.fragment),zr=m(),Ee=a("span"),Mr=c("Special Decorators"),Oe=m(),K=a("div"),u(Q.$$.fragment),Ge=m(),W=a("div"),u(X.$$.fragment),je=m(),Y=a("div"),u(Z.$$.fragment),Ce=m(),ee=a("div"),u(re.$$.fragment),He=m(),te=a("div"),u(ae.$$.fragment),Fe=m(),T=a("h2"),B=a("a"),we=a("span"),u(se.$$.fragment),Ur=m(),Ne=a("span"),qr=c("Special Properties"),Re=m(),$=a("div"),u(oe.$$.fragment),Vr=m(),Pe=a("p"),Br=c("Descriptor that mimics @property but caches output in member variable."),Or=m(),xe=a("p"),Gr=c("From tensorflow_datasets"),jr=m(),ke=a("p"),Cr=c("Built-in in functools from Python 3.8."),Je=m(),A=a("h2"),O=a("a"),Se=a("span"),u(ne.$$.fragment),Hr=m(),De=a("span"),Fr=c("Other Utilities"),Ke=m(),L=a("div"),u(le.$$.fragment),Rr=m(),Te=a("p"),Jr=c("Module class that surfaces all objects but only performs associated imports when the objects are requested."),this.h()},l(e){const n=Dt('[data-svelte="svelte-1phssyn"]',document.head);y=s(n,"META",{name:!0,content:!0}),n.forEach(r),Le=f(e),E=s(e,"H1",{class:!0});var We=o(E);I=s(We,"A",{id:!0,class:!0,href:!0});var Qr=o(I);ce=s(Qr,"SPAN",{});var Wr=o(ce);d(j.$$.fragment,Wr),Wr.forEach(r),Qr.forEach(r),ir=f(We),pe=s(We,"SPAN",{});var Xr=o(pe);mr=p(Xr,"General Utilities"),Xr.forEach(r),We.forEach(r),Ie=f(e),z=s(e,"P",{});var Xe=o(z);fr=p(Xe,"This page lists all of Transformers general utility functions that are found in the file "),ue=s(Xe,"CODE",{});var Yr=o(ue);cr=p(Yr,"utils.py"),Yr.forEach(r),pr=p(Xe,"."),Xe.forEach(r),ze=f(e),ie=s(e,"P",{});var Zr=o(ie);ur=p(Zr,"Most of those are only useful if you are studying the general code in the library."),Zr.forEach(r),Me=f(e),w=s(e,"H2",{class:!0});var Ye=o(w);M=s(Ye,"A",{id:!0,class:!0,href:!0});var et=o(M);de=s(et,"SPAN",{});var rt=o(de);d(C.$$.fragment,rt),rt.forEach(r),et.forEach(r),dr=f(Ye),ve=s(Ye,"SPAN",{});var tt=o(ve);vr=p(tt,"Enums and namedtuples"),tt.forEach(r),Ye.forEach(r),Ue=f(e),N=s(e,"DIV",{class:!0});var Ze=o(N);d(H.$$.fragment,Ze),hr=f(Ze),he=s(Ze,"P",{});var at=o(he);gr=p(at,"Enum with more explicit error message for missing values."),at.forEach(r),Ze.forEach(r),qe=f(e),P=s(e,"DIV",{class:!0});var er=o(P);d(F.$$.fragment,er),_r=f(er),x=s(er,"P",{});var me=o(x);$r=p(me,"Possible values for the "),ge=s(me,"CODE",{});var st=o(ge);br=p(st,"padding"),st.forEach(r),yr=p(me," argument in "),U=s(me,"A",{href:!0});var rr=o(U);Er=p(rr,"PreTrainedTokenizerBase."),_e=s(rr,"STRONG",{});var ot=o(_e);wr=p(ot,"call"),ot.forEach(r),Nr=p(rr,"()"),rr.forEach(r),Pr=p(me,`. Useful for tab-completion in an
IDE.`),me.forEach(r),er.forEach(r),Ve=f(e),k=s(e,"DIV",{class:!0});var tr=o(k);d(R.$$.fragment,tr),xr=f(tr),S=s(tr,"P",{});var fe=o(S);kr=p(fe,"Possible values for the "),$e=s(fe,"CODE",{});var nt=o($e);Sr=p(nt,"return_tensors"),nt.forEach(r),Dr=p(fe," argument in "),q=s(fe,"A",{href:!0});var ar=o(q);Tr=p(ar,"PreTrainedTokenizerBase."),be=s(ar,"STRONG",{});var lt=o(be);Ar=p(lt,"call"),lt.forEach(r),Lr=p(ar,"()"),ar.forEach(r),Ir=p(fe,`. Useful for
tab-completion in an IDE.`),fe.forEach(r),tr.forEach(r),Be=f(e),D=s(e,"H2",{class:!0});var sr=o(D);V=s(sr,"A",{id:!0,class:!0,href:!0});var it=o(V);ye=s(it,"SPAN",{});var mt=o(ye);d(J.$$.fragment,mt),mt.forEach(r),it.forEach(r),zr=f(sr),Ee=s(sr,"SPAN",{});var ft=o(Ee);Mr=p(ft,"Special Decorators"),ft.forEach(r),sr.forEach(r),Oe=f(e),K=s(e,"DIV",{class:!0});var ct=o(K);d(Q.$$.fragment,ct),ct.forEach(r),Ge=f(e),W=s(e,"DIV",{class:!0});var pt=o(W);d(X.$$.fragment,pt),pt.forEach(r),je=f(e),Y=s(e,"DIV",{class:!0});var ut=o(Y);d(Z.$$.fragment,ut),ut.forEach(r),Ce=f(e),ee=s(e,"DIV",{class:!0});var dt=o(ee);d(re.$$.fragment,dt),dt.forEach(r),He=f(e),te=s(e,"DIV",{class:!0});var vt=o(te);d(ae.$$.fragment,vt),vt.forEach(r),Fe=f(e),T=s(e,"H2",{class:!0});var or=o(T);B=s(or,"A",{id:!0,class:!0,href:!0});var ht=o(B);we=s(ht,"SPAN",{});var gt=o(we);d(se.$$.fragment,gt),gt.forEach(r),ht.forEach(r),Ur=f(or),Ne=s(or,"SPAN",{});var _t=o(Ne);qr=p(_t,"Special Properties"),_t.forEach(r),or.forEach(r),Re=f(e),$=s(e,"DIV",{class:!0});var G=o($);d(oe.$$.fragment,G),Vr=f(G),Pe=s(G,"P",{});var $t=o(Pe);Br=p($t,"Descriptor that mimics @property but caches output in member variable."),$t.forEach(r),Or=f(G),xe=s(G,"P",{});var bt=o(xe);Gr=p(bt,"From tensorflow_datasets"),bt.forEach(r),jr=f(G),ke=s(G,"P",{});var yt=o(ke);Cr=p(yt,"Built-in in functools from Python 3.8."),yt.forEach(r),G.forEach(r),Je=f(e),A=s(e,"H2",{class:!0});var nr=o(A);O=s(nr,"A",{id:!0,class:!0,href:!0});var Et=o(O);Se=s(Et,"SPAN",{});var wt=o(Se);d(ne.$$.fragment,wt),wt.forEach(r),Et.forEach(r),Hr=f(nr),De=s(nr,"SPAN",{});var Nt=o(De);Fr=p(Nt,"Other Utilities"),Nt.forEach(r),nr.forEach(r),Ke=f(e),L=s(e,"DIV",{class:!0});var lr=o(L);d(le.$$.fragment,lr),Rr=f(lr),Te=s(lr,"P",{});var Pt=o(Te);Jr=p(Pt,"Module class that surfaces all objects but only performs associated imports when the objects are requested."),Pt.forEach(r),lr.forEach(r),this.h()},h(){l(y,"name","hf:doc:metadata"),l(y,"content",JSON.stringify(It)),l(I,"id","general-utilities"),l(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(I,"href","#general-utilities"),l(E,"class","relative group"),l(M,"id","transformers.utils.ExplicitEnum"),l(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(M,"href","#transformers.utils.ExplicitEnum"),l(w,"class","relative group"),l(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(U,"href","/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),l(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(q,"href","/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),l(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(V,"id","transformers.add_start_docstrings"),l(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(V,"href","#transformers.add_start_docstrings"),l(D,"class","relative group"),l(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(B,"id","transformers.utils.cached_property"),l(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(B,"href","#transformers.utils.cached_property"),l(T,"class","relative group"),l($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(O,"id","transformers._LazyModule"),l(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(O,"href","#transformers._LazyModule"),l(A,"class","relative group"),l(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,n){t(document.head,y),i(e,Le,n),i(e,E,n),t(E,I),t(I,ce),v(j,ce,null),t(E,ir),t(E,pe),t(pe,mr),i(e,Ie,n),i(e,z,n),t(z,fr),t(z,ue),t(ue,cr),t(z,pr),i(e,ze,n),i(e,ie,n),t(ie,ur),i(e,Me,n),i(e,w,n),t(w,M),t(M,de),v(C,de,null),t(w,dr),t(w,ve),t(ve,vr),i(e,Ue,n),i(e,N,n),v(H,N,null),t(N,hr),t(N,he),t(he,gr),i(e,qe,n),i(e,P,n),v(F,P,null),t(P,_r),t(P,x),t(x,$r),t(x,ge),t(ge,br),t(x,yr),t(x,U),t(U,Er),t(U,_e),t(_e,wr),t(U,Nr),t(x,Pr),i(e,Ve,n),i(e,k,n),v(R,k,null),t(k,xr),t(k,S),t(S,kr),t(S,$e),t($e,Sr),t(S,Dr),t(S,q),t(q,Tr),t(q,be),t(be,Ar),t(q,Lr),t(S,Ir),i(e,Be,n),i(e,D,n),t(D,V),t(V,ye),v(J,ye,null),t(D,zr),t(D,Ee),t(Ee,Mr),i(e,Oe,n),i(e,K,n),v(Q,K,null),i(e,Ge,n),i(e,W,n),v(X,W,null),i(e,je,n),i(e,Y,n),v(Z,Y,null),i(e,Ce,n),i(e,ee,n),v(re,ee,null),i(e,He,n),i(e,te,n),v(ae,te,null),i(e,Fe,n),i(e,T,n),t(T,B),t(B,we),v(se,we,null),t(T,Ur),t(T,Ne),t(Ne,qr),i(e,Re,n),i(e,$,n),v(oe,$,null),t($,Vr),t($,Pe),t(Pe,Br),t($,Or),t($,xe),t(xe,Gr),t($,jr),t($,ke),t(ke,Cr),i(e,Je,n),i(e,A,n),t(A,O),t(O,Se),v(ne,Se,null),t(A,Hr),t(A,De),t(De,Fr),i(e,Ke,n),i(e,L,n),v(le,L,null),t(L,Rr),t(L,Te),t(Te,Jr),Qe=!0},p:Tt,i(e){Qe||(h(j.$$.fragment,e),h(C.$$.fragment,e),h(H.$$.fragment,e),h(F.$$.fragment,e),h(R.$$.fragment,e),h(J.$$.fragment,e),h(Q.$$.fragment,e),h(X.$$.fragment,e),h(Z.$$.fragment,e),h(re.$$.fragment,e),h(ae.$$.fragment,e),h(se.$$.fragment,e),h(oe.$$.fragment,e),h(ne.$$.fragment,e),h(le.$$.fragment,e),Qe=!0)},o(e){g(j.$$.fragment,e),g(C.$$.fragment,e),g(H.$$.fragment,e),g(F.$$.fragment,e),g(R.$$.fragment,e),g(J.$$.fragment,e),g(Q.$$.fragment,e),g(X.$$.fragment,e),g(Z.$$.fragment,e),g(re.$$.fragment,e),g(ae.$$.fragment,e),g(se.$$.fragment,e),g(oe.$$.fragment,e),g(ne.$$.fragment,e),g(le.$$.fragment,e),Qe=!1},d(e){r(y),e&&r(Le),e&&r(E),_(j),e&&r(Ie),e&&r(z),e&&r(ze),e&&r(ie),e&&r(Me),e&&r(w),_(C),e&&r(Ue),e&&r(N),_(H),e&&r(qe),e&&r(P),_(F),e&&r(Ve),e&&r(k),_(R),e&&r(Be),e&&r(D),_(J),e&&r(Oe),e&&r(K),_(Q),e&&r(Ge),e&&r(W),_(X),e&&r(je),e&&r(Y),_(Z),e&&r(Ce),e&&r(ee),_(re),e&&r(He),e&&r(te),_(ae),e&&r(Fe),e&&r(T),_(se),e&&r(Re),e&&r($),_(oe),e&&r(Je),e&&r(A),_(ne),e&&r(Ke),e&&r(L),_(le)}}}const It={local:"general-utilities",sections:[{local:"transformers.utils.ExplicitEnum",title:"Enums and namedtuples"},{local:"transformers.add_start_docstrings",title:"Special Decorators"},{local:"transformers.utils.cached_property",title:"Special Properties"},{local:"transformers._LazyModule",title:"Other Utilities"}],title:"General Utilities"};function zt(Kr){return At(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Vt extends xt{constructor(y){super();kt(this,y,zt,Lt,St,{})}}export{Vt as default,It as metadata};
