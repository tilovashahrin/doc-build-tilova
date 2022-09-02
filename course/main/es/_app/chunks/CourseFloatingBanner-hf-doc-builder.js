import{S as H,i as R,s as Z,F as O,e as S,c as z,a as p,d as M,b as u,g as I,G as A,Q as q,_ as ge,H as V,I as W,J as P,q as h,o as g,v as be,$ as K,O as x,P as $,f as De,L as Q,w as E,x as J,y,B as Y,k as F,m as U,n as B,p as T,a0 as we,l as G,t as Me,h as Ne,j as ke,a1 as Ie,N as X,K as Le}from"./vendor-hf-doc-builder.js";function je(s){let e,n,l,t,a,i;const r=s[7].default,o=O(r,s,s[6],null);return{c(){e=S("div"),n=S("ul"),o&&o.c(),this.h()},l(f){e=z(f,"DIV",{class:!0});var b=p(e);n=z(b,"UL",{class:!0});var D=p(n);o&&o.l(D),D.forEach(M),b.forEach(M),this.h()},h(){u(n,"class","min-w-full w-auto"),u(e,"class",l="absolute top-full mt-1 min-w-full w-auto bg-white rounded-xl overflow-hidden shadow-lg z-10 border border-gray-100 "+(s[2]==="right"?"right-0":"left-0")+" "+s[0])},m(f,b){I(f,e,b),A(e,n),o&&o.m(n,null),s[8](e),t=!0,a||(i=q(e,"click",function(){ge(s[1])&&s[1].apply(this,arguments)}),a=!0)},p(f,[b]){s=f,o&&o.p&&(!t||b&64)&&V(o,r,s,s[6],t?P(r,s[6],b,null):W(s[6]),null),(!t||b&5&&l!==(l="absolute top-full mt-1 min-w-full w-auto bg-white rounded-xl overflow-hidden shadow-lg z-10 border border-gray-100 "+(s[2]==="right"?"right-0":"left-0")+" "+s[0]))&&u(e,"class",l)},i(f){t||(h(o,f),t=!0)},o(f){g(o,f),t=!1},d(f){f&&M(e),o&&o.d(f),s[8](null),a=!1,i()}}}function Se(s,e,n){let{$$slots:l={},$$scope:t}=e,{classNames:a=""}=e,{dropdownElement:i=void 0}=e,{forceAlignement:r=void 0}=e,{onClose:o}=e,f=r!=null?r:"left",b;be(()=>{var c,m;if(document.addEventListener("click",D),!r){const _=document.documentElement.clientWidth,d=(b==null?void 0:b.getBoundingClientRect())||{},k=(c=d.left)!=null?c:0,v=(m=d.width)!=null?m:0;n(2,f=k+v>_?"right":"left")}return()=>{document.removeEventListener("click",D)}});function D(c){const m=c.target;m!==i&&!(i==null?void 0:i.contains(m))&&o()}function C(c){K[c?"unshift":"push"](()=>{b=c,n(3,b)})}return s.$$set=c=>{"classNames"in c&&n(0,a=c.classNames),"dropdownElement"in c&&n(4,i=c.dropdownElement),"forceAlignement"in c&&n(5,r=c.forceAlignement),"onClose"in c&&n(1,o=c.onClose),"$$scope"in c&&n(6,t=c.$$scope)},[a,o,f,b,i,r,t,l,C]}class ze extends H{constructor(e){super();R(this,e,Se,je,Z,{classNames:0,dropdownElement:4,forceAlignement:5,onClose:1})}}function pe(s){let e,n;return{c(){e=x("svg"),n=x("path"),this.h()},l(l){e=$(l,"svg",{class:!0,xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,focusable:!0,role:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0,style:!0});var t=p(e);n=$(t,"path",{d:!0,fill:!0}),p(n).forEach(M),t.forEach(M),this.h()},h(){u(n,"d","M7 10l5 5l5-5z"),u(n,"fill","currentColor"),u(e,"class",s[0]),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),u(e,"aria-hidden","true"),u(e,"focusable","false"),u(e,"role","img"),u(e,"width","1em"),u(e,"height","1em"),u(e,"preserveAspectRatio","xMidYMid meet"),u(e,"viewBox","0 0 24 24"),De(e,"transform","rotate(360deg)")},m(l,t){I(l,e,t),A(e,n)},p(l,[t]){t&1&&u(e,"class",l[0])},i:Q,o:Q,d(l){l&&M(e)}}}function Ee(s,e,n){let{classNames:l=""}=e;return s.$$set=t=>{"classNames"in t&&n(0,l=t.classNames)},[l]}class ye extends H{constructor(e){super();R(this,e,Ee,pe,Z,{classNames:0})}}const Ye=s=>({}),ee=s=>({}),Ae=s=>({}),te=s=>({});function Be(s){let e,n,l,t,a,i=s[2]&&le(s),r=s[10]&&ne();return{c(){i&&i.c(),e=F(),n=Me(s[4]),l=F(),r&&r.c(),t=G()},l(o){i&&i.l(o),e=U(o),n=Ne(o,s[4]),l=U(o),r&&r.l(o),t=G()},m(o,f){i&&i.m(o,f),I(o,e,f),I(o,n,f),I(o,l,f),r&&r.m(o,f),I(o,t,f),a=!0},p(o,f){o[2]?i?(i.p(o,f),f&4&&h(i,1)):(i=le(o),i.c(),h(i,1),i.m(e.parentNode,e)):i&&(B(),g(i,1,1,()=>{i=null}),T()),(!a||f&16)&&ke(n,o[4]),o[10]?r?f&1024&&h(r,1):(r=ne(),r.c(),h(r,1),r.m(t.parentNode,t)):r&&(B(),g(r,1,1,()=>{r=null}),T())},i(o){a||(h(i),h(r),a=!0)},o(o){g(i),g(r),a=!1},d(o){i&&i.d(o),o&&M(e),o&&M(n),o&&M(l),r&&r.d(o),o&&M(t)}}}function Te(s){let e;const n=s[14].button,l=O(n,s,s[18],te);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,a){l&&l.m(t,a),e=!0},p(t,a){l&&l.p&&(!e||a&262144)&&V(l,n,t,t[18],e?P(n,t[18],a,Ae):W(t[18]),te)},i(t){e||(h(l,t),e=!0)},o(t){g(l,t),e=!1},d(t){l&&l.d(t)}}}function le(s){let e,n,l;var t=s[2];function a(i){return{props:{classNames:"mr-1.5 "+i[3]}}}return t&&(e=new t(a(s))),{c(){e&&E(e.$$.fragment),n=G()},l(i){e&&J(e.$$.fragment,i),n=G()},m(i,r){e&&y(e,i,r),I(i,n,r),l=!0},p(i,r){const o={};if(r&8&&(o.classNames="mr-1.5 "+i[3]),t!==(t=i[2])){if(e){B();const f=e;g(f.$$.fragment,1,0,()=>{Y(f,1)}),T()}t?(e=new t(a(i)),E(e.$$.fragment),h(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else t&&e.$set(o)},i(i){l||(e&&h(e.$$.fragment,i),l=!0)},o(i){e&&g(e.$$.fragment,i),l=!1},d(i){i&&M(n),e&&Y(e,i)}}}function ne(s){let e,n;return e=new ye({props:{classNames:"-mr-1 text-gray-500"}}),{c(){E(e.$$.fragment)},l(l){J(e.$$.fragment,l)},m(l,t){y(e,l,t),n=!0},i(l){n||(h(e.$$.fragment,l),n=!0)},o(l){g(e.$$.fragment,l),n=!1},d(l){Y(e,l)}}}function se(s){let e,n;return e=new ze({props:{classNames:s[6]+" "+(s[9]?"v2-dropdown-menu hidden":""),dropdownElement:s[11],forceAlignement:s[5],onClose:s[16],$$slots:{default:[Ge]},$$scope:{ctx:s}}}),{c(){E(e.$$.fragment)},l(l){J(e.$$.fragment,l)},m(l,t){y(e,l,t),n=!0},p(l,t){const a={};t&576&&(a.classNames=l[6]+" "+(l[9]?"v2-dropdown-menu hidden":"")),t&2048&&(a.dropdownElement=l[11]),t&32&&(a.forceAlignement=l[5]),t&4096&&(a.onClose=l[16]),t&262144&&(a.$$scope={dirty:t,ctx:l}),e.$set(a)},i(l){n||(h(e.$$.fragment,l),n=!0)},o(l){g(e.$$.fragment,l),n=!1},d(l){Y(e,l)}}}function Ge(s){let e;const n=s[14].menu,l=O(n,s,s[18],ee);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,a){l&&l.m(t,a),e=!0},p(t,a){l&&l.p&&(!e||a&262144)&&V(l,n,t,t[18],e?P(n,t[18],a,Ye):W(t[18]),ee)},i(t){e||(h(l,t),e=!0)},o(t){g(l,t),e=!1},d(t){l&&l.d(t)}}}function Oe(s){let e,n,l,t,a,i,r,o,f,b,D;const C=[Te,Be],c=[];function m(d,k){return d[13].button?0:1}l=m(s),t=c[l]=C[l](s);let _=(s[12]||s[9])&&se(s);return{c(){e=S("div"),n=S("button"),t.c(),i=F(),_&&_.c(),this.h()},l(d){e=z(d,"DIV",{class:!0,"selected-value":!0});var k=p(e);n=z(k,"BUTTON",{class:!0,type:!0});var v=p(n);t.l(v),v.forEach(M),i=U(k),_&&_.l(k),k.forEach(M),this.h()},h(){u(n,"class",a=""+s[1]+" "+(s[7]?"":"cursor-pointer w-full btn text-sm")+" "+(s[9]?"v2-dropdown-button":"")),u(n,"type","button"),u(e,"class",r="relative "+s[0]+" "+(s[9]?"v2-dropdown":"")),u(e,"selected-value",o=s[8]||void 0)},m(d,k){I(d,e,k),A(e,n),c[l].m(n,null),A(e,i),_&&_.m(e,null),s[17](e),f=!0,b||(D=q(n,"click",s[15]),b=!0)},p(d,[k]){let v=l;l=m(d),l===v?c[l].p(d,k):(B(),g(c[v],1,1,()=>{c[v]=null}),T(),t=c[l],t?t.p(d,k):(t=c[l]=C[l](d),t.c()),h(t,1),t.m(n,null)),(!f||k&642&&a!==(a=""+d[1]+" "+(d[7]?"":"cursor-pointer w-full btn text-sm")+" "+(d[9]?"v2-dropdown-button":"")))&&u(n,"class",a),d[12]||d[9]?_?(_.p(d,k),k&4608&&h(_,1)):(_=se(d),_.c(),h(_,1),_.m(e,null)):_&&(B(),g(_,1,1,()=>{_=null}),T()),(!f||k&513&&r!==(r="relative "+d[0]+" "+(d[9]?"v2-dropdown":"")))&&u(e,"class",r),(!f||k&256&&o!==(o=d[8]||void 0))&&u(e,"selected-value",o)},i(d){f||(h(t),h(_),f=!0)},o(d){g(t),g(_),f=!1},d(d){d&&M(e),c[l].d(),_&&_.d(),s[17](null),b=!1,D()}}}function Ve(s,e,n){let{$$slots:l={},$$scope:t}=e;const a=we(l);let{classNames:i=""}=e,{btnClassNames:r=""}=e,{btnIcon:o=void 0}=e,{btnIconClassNames:f=""}=e,{btnLabel:b=""}=e,{forceMenuAlignement:D=void 0}=e,{menuClassNames:C=""}=e,{noBtnClass:c=void 0}=e,{selectedValue:m=void 0}=e,{useDeprecatedJS:_=!0}=e,{withBtnCaret:d=!1}=e,k,v=!1;const w=()=>n(12,v=!v),N=()=>n(12,v=!1);function j(L){K[L?"unshift":"push"](()=>{k=L,n(11,k)})}return s.$$set=L=>{"classNames"in L&&n(0,i=L.classNames),"btnClassNames"in L&&n(1,r=L.btnClassNames),"btnIcon"in L&&n(2,o=L.btnIcon),"btnIconClassNames"in L&&n(3,f=L.btnIconClassNames),"btnLabel"in L&&n(4,b=L.btnLabel),"forceMenuAlignement"in L&&n(5,D=L.forceMenuAlignement),"menuClassNames"in L&&n(6,C=L.menuClassNames),"noBtnClass"in L&&n(7,c=L.noBtnClass),"selectedValue"in L&&n(8,m=L.selectedValue),"useDeprecatedJS"in L&&n(9,_=L.useDeprecatedJS),"withBtnCaret"in L&&n(10,d=L.withBtnCaret),"$$scope"in L&&n(18,t=L.$$scope)},[i,r,o,f,b,D,C,c,m,_,d,k,v,a,l,w,N,j,t]}class Ce extends H{constructor(e){super();R(this,e,Ve,Oe,Z,{classNames:0,btnClassNames:1,btnIcon:2,btnIconClassNames:3,btnLabel:4,forceMenuAlignement:5,menuClassNames:6,noBtnClass:7,selectedValue:8,useDeprecatedJS:9,withBtnCaret:10})}}function We(s){let e,n,l,t=s[5]&&ae(s);return{c(){t&&t.c(),e=F(),n=Me(s[7])},l(a){t&&t.l(a),e=U(a),n=Ne(a,s[7])},m(a,i){t&&t.m(a,i),I(a,e,i),I(a,n,i),l=!0},p(a,i){a[5]?t?(t.p(a,i),i&32&&h(t,1)):(t=ae(a),t.c(),h(t,1),t.m(e.parentNode,e)):t&&(B(),g(t,1,1,()=>{t=null}),T()),(!l||i&128)&&ke(n,a[7])},i(a){l||(h(t),l=!0)},o(a){g(t),l=!1},d(a){t&&t.d(a),a&&M(e),a&&M(n)}}}function Pe(s){let e;const n=s[15].default,l=O(n,s,s[14],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,a){l&&l.m(t,a),e=!0},p(t,a){l&&l.p&&(!e||a&16384)&&V(l,n,t,t[14],e?P(n,t[14],a,null):W(t[14]),null)},i(t){e||(h(l,t),e=!0)},o(t){g(l,t),e=!1},d(t){l&&l.d(t)}}}function ae(s){let e,n,l;var t=s[5];function a(i){return{props:{classNames:"mr-1.5 "+i[6]}}}return t&&(e=new t(a(s))),{c(){e&&E(e.$$.fragment),n=G()},l(i){e&&J(e.$$.fragment,i),n=G()},m(i,r){e&&y(e,i,r),I(i,n,r),l=!0},p(i,r){const o={};if(r&64&&(o.classNames="mr-1.5 "+i[6]),t!==(t=i[5])){if(e){B();const f=e;g(f.$$.fragment,1,0,()=>{Y(f,1)}),T()}t?(e=new t(a(i)),E(e.$$.fragment),h(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else t&&e.$set(o)},i(i){l||(e&&h(e.$$.fragment,i),l=!0)},o(i){e&&g(e.$$.fragment,i),l=!1},d(i){i&&M(n),e&&Y(e,i)}}}function Je(s){let e,n,l,t,a,i,r,o,f,b;const D=[Pe,We],C=[];function c(m,_){return m[13].default?0:1}return l=c(s),t=C[l]=D[l](s),{c(){e=S("li"),n=S("a"),t.c(),this.h()},l(m){e=z(m,"LI",{});var _=p(e);n=z(_,"A",{class:!0,"data-label":!0,"data-url":!0,"data-value":!0,href:!0,rel:!0,target:!0});var d=p(n);t.l(d),d.forEach(M),_.forEach(M),this.h()},h(){u(n,"class",a="flex items-center hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer px-3 py-1.5 whitespace-nowrap "+s[0]+" "+(s[9]?"hover:underline":"")+" "+(s[12]?"v2-dropdown-entry":"")),u(n,"data-label",s[1]),u(n,"data-url",s[2]),u(n,"data-value",s[3]),u(n,"href",s[4]),u(n,"rel",i=s[8]?"nofollow":void 0),u(n,"target",r=s[11]?"_blank":void 0)},m(m,_){I(m,e,_),A(e,n),C[l].m(n,null),o=!0,f||(b=q(n,"click",function(){ge(s[10])&&s[10].apply(this,arguments)}),f=!0)},p(m,[_]){s=m;let d=l;l=c(s),l===d?C[l].p(s,_):(B(),g(C[d],1,1,()=>{C[d]=null}),T(),t=C[l],t?t.p(s,_):(t=C[l]=D[l](s),t.c()),h(t,1),t.m(n,null)),(!o||_&4609&&a!==(a="flex items-center hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer px-3 py-1.5 whitespace-nowrap "+s[0]+" "+(s[9]?"hover:underline":"")+" "+(s[12]?"v2-dropdown-entry":"")))&&u(n,"class",a),(!o||_&2)&&u(n,"data-label",s[1]),(!o||_&4)&&u(n,"data-url",s[2]),(!o||_&8)&&u(n,"data-value",s[3]),(!o||_&16)&&u(n,"href",s[4]),(!o||_&256&&i!==(i=s[8]?"nofollow":void 0))&&u(n,"rel",i),(!o||_&2048&&r!==(r=s[11]?"_blank":void 0))&&u(n,"target",r)},i(m){o||(h(t),o=!0)},o(m){g(t),o=!1},d(m){m&&M(e),C[l].d(),f=!1,b()}}}function Qe(s,e,n){let{$$slots:l={},$$scope:t}=e;const a=we(l);let{classNames:i=""}=e,{dataLabel:r=void 0}=e,{dataUrl:o=void 0}=e,{dataValue:f=void 0}=e,{href:b=void 0}=e,{icon:D=void 0}=e,{iconClassNames:C=""}=e,{label:c=""}=e,{noFollow:m=!1}=e,{underline:_=!1}=e,{onClick:d=()=>{}}=e,{targetBlank:k=!1}=e,{useDeprecatedJS:v=!0}=e;return s.$$set=w=>{"classNames"in w&&n(0,i=w.classNames),"dataLabel"in w&&n(1,r=w.dataLabel),"dataUrl"in w&&n(2,o=w.dataUrl),"dataValue"in w&&n(3,f=w.dataValue),"href"in w&&n(4,b=w.href),"icon"in w&&n(5,D=w.icon),"iconClassNames"in w&&n(6,C=w.iconClassNames),"label"in w&&n(7,c=w.label),"noFollow"in w&&n(8,m=w.noFollow),"underline"in w&&n(9,_=w.underline),"onClick"in w&&n(10,d=w.onClick),"targetBlank"in w&&n(11,k=w.targetBlank),"useDeprecatedJS"in w&&n(12,v=w.useDeprecatedJS),"$$scope"in w&&n(14,t=w.$$scope)},[i,r,o,f,b,D,C,c,m,_,d,k,v,a,t,l]}class ve extends H{constructor(e){super();R(this,e,Qe,Je,Z,{classNames:0,dataLabel:1,dataUrl:2,dataValue:3,href:4,icon:5,iconClassNames:6,label:7,noFollow:8,underline:9,onClick:10,targetBlank:11,useDeprecatedJS:12})}}const{window:Fe}=Ie,Ue=s=>({}),ie=s=>({slot:"button"});function oe(s,e,n){const l=s.slice();return l[11]=e[n].label,l[12]=e[n].value,l}const He=s=>({}),re=s=>({slot:"menu"}),Re=s=>({}),fe=s=>({slot:"button"});function ue(s,e,n){const l=s.slice();return l[11]=e[n].label,l[12]=e[n].value,l}const Ze=s=>({}),ce=s=>({slot:"menu"}),Xe=s=>({}),_e=s=>({slot:"menu"});function qe(s){let e,n;return e=new Ce({props:{btnLabel:"",classNames:"colab-dropdown",noBtnClass:!0,useDeprecatedJS:!1,$$slots:{menu:[tt],button:[$e]},$$scope:{ctx:s}}}),{c(){E(e.$$.fragment)},l(l){J(e.$$.fragment,l)},m(l,t){y(e,l,t),n=!0},p(l,t){const a={};t&1024&&(a.$$scope={dirty:t,ctx:l}),e.$set(a)},i(l){n||(h(e.$$.fragment,l),n=!0)},o(l){g(e.$$.fragment,l),n=!1},d(l){Y(e,l)}}}function Ke(s){let e,n,l;return{c(){e=S("a"),n=S("img"),this.h()},l(t){e=z(t,"A",{href:!0,target:!0});var a=p(e);n=z(a,"IMG",{alt:!0,class:!0,src:!0}),a.forEach(M),this.h()},h(){u(n,"alt","Open In Colab"),u(n,"class","!m-0"),X(n.src,l="https://colab.research.google.com/assets/colab-badge.svg")||u(n,"src",l),u(e,"href",s[2][0].value),u(e,"target","_blank")},m(t,a){I(t,e,a),A(e,n)},p:Q,i:Q,o:Q,d(t){t&&M(e)}}}function xe(s){let e,n;return{c(){e=S("img"),this.h()},l(l){e=z(l,"IMG",{alt:!0,class:!0,src:!0}),this.h()},h(){u(e,"alt","Open In Colab"),u(e,"class","!m-0"),X(e.src,n="https://colab.research.google.com/assets/colab-badge.svg")||u(e,"src",n)},m(l,t){I(l,e,t)},d(l){l&&M(e)}}}function $e(s){let e;const n=s[6].default,l=O(n,s,s[10],fe),t=l||xe();return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,i){t&&t.m(a,i),e=!0},p(a,i){l&&l.p&&(!e||i&1024)&&V(l,n,a,a[10],e?P(n,a[10],i,Re):W(a[10]),fe)},i(a){e||(h(t,a),e=!0)},o(a){g(t,a),e=!1},d(a){t&&t.d(a)}}}function me(s){let e,n;function l(){return s[7](s[12])}return e=new ve({props:{classNames:"text-sm !no-underline",iconClassNames:"text-gray-500",label:s[11],onClick:l,useDeprecatedJS:!1}}),{c(){E(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,a){y(e,t,a),n=!0},p(t,a){s=t},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function et(s){let e,n,l=s[2],t=[];for(let i=0;i<l.length;i+=1)t[i]=me(ue(s,l,i));const a=i=>g(t[i],1,1,()=>{t[i]=null});return{c(){for(let i=0;i<t.length;i+=1)t[i].c();e=G()},l(i){for(let r=0;r<t.length;r+=1)t[r].l(i);e=G()},m(i,r){for(let o=0;o<t.length;o+=1)t[o].m(i,r);I(i,e,r),n=!0},p(i,r){if(r&4){l=i[2];let o;for(o=0;o<l.length;o+=1){const f=ue(i,l,o);t[o]?(t[o].p(f,r),h(t[o],1)):(t[o]=me(f),t[o].c(),h(t[o],1),t[o].m(e.parentNode,e))}for(B(),o=l.length;o<t.length;o+=1)a(o);T()}},i(i){if(!n){for(let r=0;r<l.length;r+=1)h(t[r]);n=!0}},o(i){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)g(t[r]);n=!1},d(i){Le(t,i),i&&M(e)}}}function tt(s){let e;const n=s[6].default,l=O(n,s,s[10],ce),t=l||et(s);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,i){t&&t.m(a,i),e=!0},p(a,i){l&&l.p&&(!e||i&1024)&&V(l,n,a,a[10],e?P(n,a[10],i,Ze):W(a[10]),ce)},i(a){e||(h(t,a),e=!0)},o(a){g(t,a),e=!1},d(a){t&&t.d(a)}}}function lt(s){let e,n;return e=new Ce({props:{btnLabel:"",classNames:"colab-dropdown",noBtnClass:!0,useDeprecatedJS:!1,$$slots:{menu:[ot],button:[at]},$$scope:{ctx:s}}}),{c(){E(e.$$.fragment)},l(l){J(e.$$.fragment,l)},m(l,t){y(e,l,t),n=!0},p(l,t){const a={};t&1024&&(a.$$scope={dirty:t,ctx:l}),e.$set(a)},i(l){n||(h(e.$$.fragment,l),n=!0)},o(l){g(e.$$.fragment,l),n=!1},d(l){Y(e,l)}}}function nt(s){let e,n,l;return{c(){e=S("a"),n=S("img"),this.h()},l(t){e=z(t,"A",{href:!0,target:!0});var a=p(e);n=z(a,"IMG",{alt:!0,class:!0,src:!0}),a.forEach(M),this.h()},h(){u(n,"alt","Open In Studio Lab"),u(n,"class","!m-0"),X(n.src,l="https://studiolab.sagemaker.aws/studiolab.svg")||u(n,"src",l),u(e,"href",s[3][0].value),u(e,"target","_blank")},m(t,a){I(t,e,a),A(e,n)},p:Q,i:Q,o:Q,d(t){t&&M(e)}}}function st(s){let e,n;return{c(){e=S("img"),this.h()},l(l){e=z(l,"IMG",{alt:!0,class:!0,src:!0}),this.h()},h(){u(e,"alt","Open In Studio Lab"),u(e,"class","!m-0"),X(e.src,n="https://studiolab.sagemaker.aws/studiolab.svg")||u(e,"src",n)},m(l,t){I(l,e,t)},d(l){l&&M(e)}}}function at(s){let e;const n=s[6].default,l=O(n,s,s[10],ie),t=l||st();return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,i){t&&t.m(a,i),e=!0},p(a,i){l&&l.p&&(!e||i&1024)&&V(l,n,a,a[10],e?P(n,a[10],i,Ue):W(a[10]),ie)},i(a){e||(h(t,a),e=!0)},o(a){g(t,a),e=!1},d(a){t&&t.d(a)}}}function de(s){let e,n;function l(){return s[8](s[12])}return e=new ve({props:{classNames:"text-sm !no-underline",iconClassNames:"text-gray-500",label:s[11],onClick:l,useDeprecatedJS:!1}}),{c(){E(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,a){y(e,t,a),n=!0},p(t,a){s=t},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function it(s){let e,n,l=s[3],t=[];for(let i=0;i<l.length;i+=1)t[i]=de(oe(s,l,i));const a=i=>g(t[i],1,1,()=>{t[i]=null});return{c(){for(let i=0;i<t.length;i+=1)t[i].c();e=G()},l(i){for(let r=0;r<t.length;r+=1)t[r].l(i);e=G()},m(i,r){for(let o=0;o<t.length;o+=1)t[o].m(i,r);I(i,e,r),n=!0},p(i,r){if(r&8){l=i[3];let o;for(o=0;o<l.length;o+=1){const f=oe(i,l,o);t[o]?(t[o].p(f,r),h(t[o],1)):(t[o]=de(f),t[o].c(),h(t[o],1),t[o].m(e.parentNode,e))}for(B(),o=l.length;o<t.length;o+=1)a(o);T()}},i(i){if(!n){for(let r=0;r<l.length;r+=1)h(t[r]);n=!0}},o(i){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)g(t[r]);n=!1},d(i){Le(t,i),i&&M(e)}}}function ot(s){let e;const n=s[6].default,l=O(n,s,s[10],re),t=l||it(s);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,i){t&&t.m(a,i),e=!0},p(a,i){l&&l.p&&(!e||i&1024)&&V(l,n,a,a[10],e?P(n,a[10],i,He):W(a[10]),re)},i(a){e||(h(t,a),e=!0)},o(a){g(t,a),e=!1},d(a){t&&t.d(a)}}}function rt(s){let e,n,l,t,a,i,r,o,f,b,D;const C=s[6].alwaysVisible,c=O(C,s,s[10],_e),m=[Ke,qe],_=[];function d(N,j){return N[2].length===1?0:N[2].length>1?1:-1}~(l=d(s))&&(t=_[l]=m[l](s));const k=[nt,lt],v=[];function w(N,j){return N[3].length===1?0:N[3].length>1?1:-1}return~(i=w(s))&&(r=v[i]=k[i](s)),{c(){e=S("div"),c&&c.c(),n=F(),t&&t.c(),a=F(),r&&r.c(),this.h()},l(N){e=z(N,"DIV",{class:!0});var j=p(e);c&&c.l(j),n=U(j),t&&t.l(j),a=U(j),r&&r.l(j),j.forEach(M),this.h()},h(){u(e,"class",o="flex space-x-1 "+s[0])},m(N,j){I(N,e,j),c&&c.m(e,null),A(e,n),~l&&_[l].m(e,null),A(e,a),~i&&v[i].m(e,null),s[9](e),f=!0,b||(D=q(Fe,"resize",s[4]),b=!0)},p(N,[j]){c&&c.p&&(!f||j&1024)&&V(c,C,N,N[10],f?P(C,N[10],j,Xe):W(N[10]),_e),t&&t.p(N,j),r&&r.p(N,j),(!f||j&1&&o!==(o="flex space-x-1 "+N[0]))&&u(e,"class",o)},i(N){f||(h(c,N),h(t),h(r),f=!0)},o(N){g(c,N),g(t),g(r),f=!1},d(N){N&&M(e),c&&c.d(N),~l&&_[l].d(),~i&&v[i].d(),s[9](null),b=!1,D()}}}function he(s){window.open(s)}function ft(s,e,n){let{$$slots:l={},$$scope:t}=e,{options:a=[]}=e,{classNames:i=""}=e,r;const o=a.filter(m=>m.value.includes("colab.research.google.com")),f=a.filter(m=>m.value.includes("studiolab.sagemaker.aws"));function b(){const m=document.querySelector(".prose-doc h1"),_=document.querySelector(".prose-doc h1 > span");if(m&&_){const{width:d}=m.getBoundingClientRect(),{width:k}=_.getBoundingClientRect();let v=0;for(let N=0;N<r.children.length;N++)v+=r.children.item(N).clientWidth;const w=20;d-k<v+w?r.classList.remove("absolute"):r.classList.add("absolute")}}be(()=>{b()});const D=m=>he(m),C=m=>he(m);function c(m){K[m?"unshift":"push"](()=>{r=m,n(1,r)})}return s.$$set=m=>{"options"in m&&n(5,a=m.options),"classNames"in m&&n(0,i=m.classNames),"$$scope"in m&&n(10,t=m.$$scope)},[i,r,o,f,b,a,l,D,C,c,t]}class ut extends H{constructor(e){super();R(this,e,ft,rt,Z,{options:5,classNames:0})}}function ct(s){let e,n,l,t;return{c(){e=S("a"),n=S("img"),this.h()},l(a){e=z(a,"A",{href:!0,target:!0});var i=p(e);n=z(i,"IMG",{alt:!0,class:!0,src:!0}),i.forEach(M),this.h()},h(){u(n,"alt","Ask a Question"),u(n,"class","!m-0"),X(n.src,l="https://img.shields.io/badge/Ask%20a%20question-ffcb4c.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgLTEgMTA0IDEwNiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMyMzFmMjA7fS5jbHMtMntmaWxsOiNmZmY5YWU7fS5jbHMtM3tmaWxsOiMwMGFlZWY7fS5jbHMtNHtmaWxsOiMwMGE5NGY7fS5jbHMtNXtmaWxsOiNmMTVkMjI7fS5jbHMtNntmaWxsOiNlMzFiMjM7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5EaXNjb3Vyc2VfbG9nbzwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiPjxnIGlkPSJMYXllcl8zIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01MS44NywwQzIzLjcxLDAsMCwyMi44MywwLDUxYzAsLjkxLDAsNTIuODEsMCw1Mi44MWw1MS44Ni0uMDVjMjguMTYsMCw1MS0yMy43MSw1MS01MS44N1M4MCwwLDUxLjg3LDBaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNTIuMzcsMTkuNzRBMzEuNjIsMzEuNjIsMCwwLDAsMjQuNTgsNjYuNDFsLTUuNzIsMTguNEwzOS40LDgwLjE3YTMxLjYxLDMxLjYxLDAsMSwwLDEzLTYwLjQzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTc3LjQ1LDMyLjEyYTMxLjYsMzEuNiwwLDAsMS0zOC4wNSw0OEwxOC44Niw4NC44MmwyMC45MS0yLjQ3QTMxLjYsMzEuNiwwLDAsMCw3Ny40NSwzMi4xMloiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik03MS42MywyNi4yOUEzMS42LDMxLjYsMCwwLDEsMzguOCw3OEwxOC44Niw4NC44MiwzOS40LDgwLjE3QTMxLjYsMzEuNiwwLDAsMCw3MS42MywyNi4yOVoiLz48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik0yNi40Nyw2Ny4xMWEzMS42MSwzMS42MSwwLDAsMSw1MS0zNUEzMS42MSwzMS42MSwwLDAsMCwyNC41OCw2Ni40MWwtNS43MiwxOC40WiIvPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTI0LjU4LDY2LjQxQTMxLjYxLDMxLjYxLDAsMCwxLDcxLjYzLDI2LjI5YTMxLjYxLDMxLjYxLDAsMCwwLTQ5LDM5LjYzbC0zLjc2LDE4LjlaIi8+PC9nPjwvZz48L3N2Zz4=")||u(n,"src",l),u(e,"href",t="https://discuss.huggingface.co/t/chapter-"+s[0]+"-questions"),u(e,"target","_blank")},m(a,i){I(a,e,i),A(e,n)},p(a,i){i&1&&t!==(t="https://discuss.huggingface.co/t/chapter-"+a[0]+"-questions")&&u(e,"href",t)},d(a){a&&M(e)}}}function _t(s){let e,n;return e=new ut({props:{options:s[1],classNames:s[2],$$slots:{alwaysVisible:[ct]},$$scope:{ctx:s}}}),{c(){E(e.$$.fragment)},l(l){J(e.$$.fragment,l)},m(l,t){y(e,l,t),n=!0},p(l,[t]){const a={};t&2&&(a.options=l[1]),t&4&&(a.classNames=l[2]),t&9&&(a.$$scope={dirty:t,ctx:l}),e.$set(a)},i(l){n||(h(e.$$.fragment,l),n=!0)},o(l){g(e.$$.fragment,l),n=!1},d(l){Y(e,l)}}}function mt(s,e,n){let{chapter:l}=e,{notebooks:t=[]}=e,{classNames:a=""}=e;return s.$$set=i=>{"chapter"in i&&n(0,l=i.chapter),"notebooks"in i&&n(1,t=i.notebooks),"classNames"in i&&n(2,a=i.classNames)},[l,t,a]}class ht extends H{constructor(e){super();R(this,e,mt,_t,Z,{chapter:0,notebooks:1,classNames:2})}}export{ht as C};
