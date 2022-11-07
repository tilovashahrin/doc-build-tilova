import{S as Zt,i as en,s as tn,e as s,k as _,w as G,t as i,M as nn,c as l,d as t,m,a,x as F,h as u,b as v,G as n,g as p,y as B,q as J,o as j,B as K,v as rn}from"../../chunks/vendor-hf-doc-builder.js";import{I as We}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{T as on,M as It}from"../../chunks/TokenizersLanguageContent-hf-doc-builder.js";function sn(I){let o,h,r,c,$,k,q,T,x,w,E,P,d,z,S,Y,Q,y,Ge,we,C,Fe,se,Be,Je,ze,A,D,le,V,je,ae,Ke,Se,Z,Qe,Ie,ee,Ve,Te,L,O,Xe,ie,Ye,Ze,ue,et,tt,g,nt,ce,rt,ot,fe,st,Pe,N,lt,pe,at,it,ye,b,R,he,X,ut,de,ct,Ae,te,ft,be,ne,pt,xe,U,M,ht,$e,dt,$t,re,vt,_t,H,mt,ve,kt,Et,oe,qt,Ce,W,wt,_e,zt,St,De;return d=new We({}),V=new We({}),X=new We({}),{c(){o=s("p"),h=i(`These types represent all the different kinds of sequence that can be used as input of a Tokenizer.
Globally, any sequence can be either a string or a list of strings, according to the operating
mode of the tokenizer: `),r=s("code"),c=i("raw text"),$=i(" vs "),k=s("code"),q=i("pre-tokenized"),T=i("."),x=_(),w=s("h2"),E=s("a"),P=s("span"),G(d.$$.fragment),z=_(),S=s("span"),Y=i("TextInputSequence"),Q=_(),y=s("code"),Ge=i("tokenizers.TextInputSequence"),we=_(),C=s("p"),Fe=i("A "),se=s("code"),Be=i("str"),Je=i(" that represents an input sequence"),ze=_(),A=s("h2"),D=s("a"),le=s("span"),G(V.$$.fragment),je=_(),ae=s("span"),Ke=i("PreTokenizedInputSequence"),Se=_(),Z=s("code"),Qe=i("tokenizers.PreTokenizedInputSequence"),Ie=_(),ee=s("p"),Ve=i("A pre-tokenized input sequence. Can be one of:"),Te=_(),L=s("ul"),O=s("li"),Xe=i("A "),ie=s("code"),Ye=i("List"),Ze=i(" of "),ue=s("code"),et=i("str"),tt=_(),g=s("li"),nt=i("A "),ce=s("code"),rt=i("Tuple"),ot=i(" of "),fe=s("code"),st=i("str"),Pe=_(),N=s("p"),lt=i("alias of "),pe=s("code"),at=i("Union[List[str], Tuple[str]]"),it=i("."),ye=_(),b=s("h2"),R=s("a"),he=s("span"),G(X.$$.fragment),ut=_(),de=s("span"),ct=i("InputSequence"),Ae=_(),te=s("code"),ft=i("tokenizers.InputSequence"),be=_(),ne=s("p"),pt=i("Represents all the possible types of input sequences for encoding. Can be:"),xe=_(),U=s("ul"),M=s("li"),ht=i("When "),$e=s("code"),dt=i("is_pretokenized=False"),$t=i(": "),re=s("a"),vt=i("TextInputSequence"),_t=_(),H=s("li"),mt=i("When "),ve=s("code"),kt=i("is_pretokenized=True"),Et=i(": "),oe=s("a"),qt=i("PreTokenizedInputSequence"),Ce=_(),W=s("p"),wt=i("alias of "),_e=s("code"),zt=i("Union[str, List[str], Tuple[str]]"),St=i("."),this.h()},l(e){o=l(e,"P",{});var f=a(o);h=u(f,`These types represent all the different kinds of sequence that can be used as input of a Tokenizer.
Globally, any sequence can be either a string or a list of strings, according to the operating
mode of the tokenizer: `),r=l(f,"CODE",{});var Tt=a(r);c=u(Tt,"raw text"),Tt.forEach(t),$=u(f," vs "),k=l(f,"CODE",{});var Pt=a(k);q=u(Pt,"pre-tokenized"),Pt.forEach(t),T=u(f,"."),f.forEach(t),x=m(e),w=l(e,"H2",{class:!0});var Le=a(w);E=l(Le,"A",{id:!0,class:!0,href:!0});var yt=a(E);P=l(yt,"SPAN",{});var At=a(P);F(d.$$.fragment,At),At.forEach(t),yt.forEach(t),z=m(Le),S=l(Le,"SPAN",{});var bt=a(S);Y=u(bt,"TextInputSequence"),bt.forEach(t),Le.forEach(t),Q=m(e),y=l(e,"CODE",{});var xt=a(y);Ge=u(xt,"tokenizers.TextInputSequence"),xt.forEach(t),we=m(e),C=l(e,"P",{});var Oe=a(C);Fe=u(Oe,"A "),se=l(Oe,"CODE",{});var Ct=a(se);Be=u(Ct,"str"),Ct.forEach(t),Je=u(Oe," that represents an input sequence"),Oe.forEach(t),ze=m(e),A=l(e,"H2",{class:!0});var ge=a(A);D=l(ge,"A",{id:!0,class:!0,href:!0});var Dt=a(D);le=l(Dt,"SPAN",{});var Lt=a(le);F(V.$$.fragment,Lt),Lt.forEach(t),Dt.forEach(t),je=m(ge),ae=l(ge,"SPAN",{});var Ot=a(ae);Ke=u(Ot,"PreTokenizedInputSequence"),Ot.forEach(t),ge.forEach(t),Se=m(e),Z=l(e,"CODE",{});var gt=a(Z);Qe=u(gt,"tokenizers.PreTokenizedInputSequence"),gt.forEach(t),Ie=m(e),ee=l(e,"P",{});var Nt=a(ee);Ve=u(Nt,"A pre-tokenized input sequence. Can be one of:"),Nt.forEach(t),Te=m(e),L=l(e,"UL",{});var Ne=a(L);O=l(Ne,"LI",{});var me=a(O);Xe=u(me,"A "),ie=l(me,"CODE",{});var Rt=a(ie);Ye=u(Rt,"List"),Rt.forEach(t),Ze=u(me," of "),ue=l(me,"CODE",{});var Ut=a(ue);et=u(Ut,"str"),Ut.forEach(t),me.forEach(t),tt=m(Ne),g=l(Ne,"LI",{});var ke=a(g);nt=u(ke,"A "),ce=l(ke,"CODE",{});var Mt=a(ce);rt=u(Mt,"Tuple"),Mt.forEach(t),ot=u(ke," of "),fe=l(ke,"CODE",{});var Ht=a(fe);st=u(Ht,"str"),Ht.forEach(t),ke.forEach(t),Ne.forEach(t),Pe=m(e),N=l(e,"P",{});var Re=a(N);lt=u(Re,"alias of "),pe=l(Re,"CODE",{});var Wt=a(pe);at=u(Wt,"Union[List[str], Tuple[str]]"),Wt.forEach(t),it=u(Re,"."),Re.forEach(t),ye=m(e),b=l(e,"H2",{class:!0});var Ue=a(b);R=l(Ue,"A",{id:!0,class:!0,href:!0});var Gt=a(R);he=l(Gt,"SPAN",{});var Ft=a(he);F(X.$$.fragment,Ft),Ft.forEach(t),Gt.forEach(t),ut=m(Ue),de=l(Ue,"SPAN",{});var Bt=a(de);ct=u(Bt,"InputSequence"),Bt.forEach(t),Ue.forEach(t),Ae=m(e),te=l(e,"CODE",{});var Jt=a(te);ft=u(Jt,"tokenizers.InputSequence"),Jt.forEach(t),be=m(e),ne=l(e,"P",{});var jt=a(ne);pt=u(jt,"Represents all the possible types of input sequences for encoding. Can be:"),jt.forEach(t),xe=m(e),U=l(e,"UL",{});var Me=a(U);M=l(Me,"LI",{});var Ee=a(M);ht=u(Ee,"When "),$e=l(Ee,"CODE",{});var Kt=a($e);dt=u(Kt,"is_pretokenized=False"),Kt.forEach(t),$t=u(Ee,": "),re=l(Ee,"A",{href:!0});var Qt=a(re);vt=u(Qt,"TextInputSequence"),Qt.forEach(t),Ee.forEach(t),_t=m(Me),H=l(Me,"LI",{});var qe=a(H);mt=u(qe,"When "),ve=l(qe,"CODE",{});var Vt=a(ve);kt=u(Vt,"is_pretokenized=True"),Vt.forEach(t),Et=u(qe,": "),oe=l(qe,"A",{href:!0});var Xt=a(oe);qt=u(Xt,"PreTokenizedInputSequence"),Xt.forEach(t),qe.forEach(t),Me.forEach(t),Ce=m(e),W=l(e,"P",{});var He=a(W);wt=u(He,"alias of "),_e=l(He,"CODE",{});var Yt=a(_e);zt=u(Yt,"Union[str, List[str], Tuple[str]]"),Yt.forEach(t),St=u(He,"."),He.forEach(t),this.h()},h(){v(E,"id","tokenizers.TextInputSequence"),v(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(E,"href","#tokenizers.TextInputSequence"),v(w,"class","relative group"),v(D,"id","tokenizers.PreTokenizedInputSequence"),v(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(D,"href","#tokenizers.PreTokenizedInputSequence"),v(A,"class","relative group"),v(R,"id","tokenizers.InputSequence"),v(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(R,"href","#tokenizers.InputSequence"),v(b,"class","relative group"),v(re,"href","#tokenizers.TextInputSequence"),v(oe,"href","#tokenizers.PreTokenizedInputSequence")},m(e,f){p(e,o,f),n(o,h),n(o,r),n(r,c),n(o,$),n(o,k),n(k,q),n(o,T),p(e,x,f),p(e,w,f),n(w,E),n(E,P),B(d,P,null),n(w,z),n(w,S),n(S,Y),p(e,Q,f),p(e,y,f),n(y,Ge),p(e,we,f),p(e,C,f),n(C,Fe),n(C,se),n(se,Be),n(C,Je),p(e,ze,f),p(e,A,f),n(A,D),n(D,le),B(V,le,null),n(A,je),n(A,ae),n(ae,Ke),p(e,Se,f),p(e,Z,f),n(Z,Qe),p(e,Ie,f),p(e,ee,f),n(ee,Ve),p(e,Te,f),p(e,L,f),n(L,O),n(O,Xe),n(O,ie),n(ie,Ye),n(O,Ze),n(O,ue),n(ue,et),n(L,tt),n(L,g),n(g,nt),n(g,ce),n(ce,rt),n(g,ot),n(g,fe),n(fe,st),p(e,Pe,f),p(e,N,f),n(N,lt),n(N,pe),n(pe,at),n(N,it),p(e,ye,f),p(e,b,f),n(b,R),n(R,he),B(X,he,null),n(b,ut),n(b,de),n(de,ct),p(e,Ae,f),p(e,te,f),n(te,ft),p(e,be,f),p(e,ne,f),n(ne,pt),p(e,xe,f),p(e,U,f),n(U,M),n(M,ht),n(M,$e),n($e,dt),n(M,$t),n(M,re),n(re,vt),n(U,_t),n(U,H),n(H,mt),n(H,ve),n(ve,kt),n(H,Et),n(H,oe),n(oe,qt),p(e,Ce,f),p(e,W,f),n(W,wt),n(W,_e),n(_e,zt),n(W,St),De=!0},i(e){De||(J(d.$$.fragment,e),J(V.$$.fragment,e),J(X.$$.fragment,e),De=!0)},o(e){j(d.$$.fragment,e),j(V.$$.fragment,e),j(X.$$.fragment,e),De=!1},d(e){e&&t(o),e&&t(x),e&&t(w),K(d),e&&t(Q),e&&t(y),e&&t(we),e&&t(C),e&&t(ze),e&&t(A),K(V),e&&t(Se),e&&t(Z),e&&t(Ie),e&&t(ee),e&&t(Te),e&&t(L),e&&t(Pe),e&&t(N),e&&t(ye),e&&t(b),K(X),e&&t(Ae),e&&t(te),e&&t(be),e&&t(ne),e&&t(xe),e&&t(U),e&&t(Ce),e&&t(W)}}}function ln(I){let o,h;return o=new It({props:{$$slots:{default:[sn]},$$scope:{ctx:I}}}),{c(){G(o.$$.fragment)},l(r){F(o.$$.fragment,r)},m(r,c){B(o,r,c),h=!0},p(r,c){const $={};c&2&&($.$$scope={dirty:c,ctx:r}),o.$set($)},i(r){h||(J(o.$$.fragment,r),h=!0)},o(r){j(o.$$.fragment,r),h=!1},d(r){K(o,r)}}}function an(I){let o,h,r,c,$;return{c(){o=s("p"),h=i("The Rust API Reference is available directly on the "),r=s("a"),c=i("Docs.rs"),$=i(" website."),this.h()},l(k){o=l(k,"P",{});var q=a(o);h=u(q,"The Rust API Reference is available directly on the "),r=l(q,"A",{href:!0,rel:!0});var T=a(r);c=u(T,"Docs.rs"),T.forEach(t),$=u(q," website."),q.forEach(t),this.h()},h(){v(r,"href","https://docs.rs/tokenizers/latest/tokenizers/"),v(r,"rel","nofollow")},m(k,q){p(k,o,q),n(o,h),n(o,r),n(r,c),n(o,$)},d(k){k&&t(o)}}}function un(I){let o,h;return o=new It({props:{$$slots:{default:[an]},$$scope:{ctx:I}}}),{c(){G(o.$$.fragment)},l(r){F(o.$$.fragment,r)},m(r,c){B(o,r,c),h=!0},p(r,c){const $={};c&2&&($.$$scope={dirty:c,ctx:r}),o.$set($)},i(r){h||(J(o.$$.fragment,r),h=!0)},o(r){j(o.$$.fragment,r),h=!1},d(r){K(o,r)}}}function cn(I){let o,h;return{c(){o=s("p"),h=i("The node API has not been documented yet.")},l(r){o=l(r,"P",{});var c=a(o);h=u(c,"The node API has not been documented yet."),c.forEach(t)},m(r,c){p(r,o,c),n(o,h)},d(r){r&&t(o)}}}function fn(I){let o,h;return o=new It({props:{$$slots:{default:[cn]},$$scope:{ctx:I}}}),{c(){G(o.$$.fragment)},l(r){F(o.$$.fragment,r)},m(r,c){B(o,r,c),h=!0},p(r,c){const $={};c&2&&($.$$scope={dirty:c,ctx:r}),o.$set($)},i(r){h||(J(o.$$.fragment,r),h=!0)},o(r){j(o.$$.fragment,r),h=!1},d(r){K(o,r)}}}function pn(I){let o,h,r,c,$,k,q,T,x,w,E,P;return k=new We({}),E=new on({props:{python:!0,rust:!0,node:!0,$$slots:{node:[fn],rust:[un],python:[ln]},$$scope:{ctx:I}}}),{c(){o=s("meta"),h=_(),r=s("h1"),c=s("a"),$=s("span"),G(k.$$.fragment),q=_(),T=s("span"),x=i("Input Sequences"),w=_(),G(E.$$.fragment),this.h()},l(d){const z=nn('[data-svelte="svelte-1phssyn"]',document.head);o=l(z,"META",{name:!0,content:!0}),z.forEach(t),h=m(d),r=l(d,"H1",{class:!0});var S=a(r);c=l(S,"A",{id:!0,class:!0,href:!0});var Y=a(c);$=l(Y,"SPAN",{});var Q=a($);F(k.$$.fragment,Q),Q.forEach(t),Y.forEach(t),q=m(S),T=l(S,"SPAN",{});var y=a(T);x=u(y,"Input Sequences"),y.forEach(t),S.forEach(t),w=m(d),F(E.$$.fragment,d),this.h()},h(){v(o,"name","hf:doc:metadata"),v(o,"content",JSON.stringify(hn)),v(c,"id","input-sequences"),v(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(c,"href","#input-sequences"),v(r,"class","relative group")},m(d,z){n(document.head,o),p(d,h,z),p(d,r,z),n(r,c),n(c,$),B(k,$,null),n(r,q),n(r,T),n(T,x),p(d,w,z),B(E,d,z),P=!0},p(d,[z]){const S={};z&2&&(S.$$scope={dirty:z,ctx:d}),E.$set(S)},i(d){P||(J(k.$$.fragment,d),J(E.$$.fragment,d),P=!0)},o(d){j(k.$$.fragment,d),j(E.$$.fragment,d),P=!1},d(d){t(o),d&&t(h),d&&t(r),K(k),d&&t(w),K(E,d)}}}const hn={local:"input-sequences",sections:[{local:"tokenizers.TextInputSequence",title:"TextInputSequence"},{local:"tokenizers.PreTokenizedInputSequence",title:"PreTokenizedInputSequence"},{local:"tokenizers.InputSequence",title:"InputSequence"}],title:"Input Sequences"};function dn(I){return rn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class mn extends Zt{constructor(o){super();en(this,o,dn,pn,tn,{})}}export{mn as default,hn as metadata};
