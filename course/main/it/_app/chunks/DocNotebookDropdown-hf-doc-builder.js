import{S as K,i as P,s as Q,F as W,e as S,c as L,a as V,d as v,b as u,g as E,G as U,Q as X,U as ge,H as q,I as z,J as F,q as h,o as g,v as be,V as Z,O as x,P as $,f as De,L as G,w as y,x as T,y as M,B as A,k as j,m as H,n as J,p as O,W as we,l as R,t as ke,h as ve,j as Ne,X as Ee,N as Y,K as Ce}from"./vendor-hf-doc-builder.js";function Ie(s){let e,n,l,t,o,a;const f=s[7].default,i=W(f,s,s[6],null);return{c(){e=S("div"),n=S("ul"),i&&i.c(),this.h()},l(r){e=L(r,"DIV",{class:!0});var b=V(e);n=L(b,"UL",{class:!0});var D=V(n);i&&i.l(D),D.forEach(v),b.forEach(v),this.h()},h(){u(n,"class","min-w-full w-auto"),u(e,"class",l="absolute top-full mt-1 min-w-full w-auto bg-white rounded-xl overflow-hidden shadow-lg z-10 border border-gray-100 "+(s[2]==="right"?"right-0":"left-0")+" "+s[0])},m(r,b){E(r,e,b),U(e,n),i&&i.m(n,null),s[8](e),t=!0,o||(a=X(e,"click",function(){ge(s[1])&&s[1].apply(this,arguments)}),o=!0)},p(r,[b]){s=r,i&&i.p&&(!t||b&64)&&q(i,f,s,s[6],t?F(f,s[6],b,null):z(s[6]),null),(!t||b&5&&l!==(l="absolute top-full mt-1 min-w-full w-auto bg-white rounded-xl overflow-hidden shadow-lg z-10 border border-gray-100 "+(s[2]==="right"?"right-0":"left-0")+" "+s[0]))&&u(e,"class",l)},i(r){t||(h(i,r),t=!0)},o(r){g(i,r),t=!1},d(r){r&&v(e),i&&i.d(r),s[8](null),o=!1,a()}}}function Se(s,e,n){let{$$slots:l={},$$scope:t}=e,{classNames:o=""}=e,{dropdownElement:a=void 0}=e,{forceAlignement:f=void 0}=e,{onClose:i}=e,r=f!=null?f:"left",b;be(()=>{var c,d;if(document.addEventListener("click",D),!f){const _=document.documentElement.clientWidth,m=(b==null?void 0:b.getBoundingClientRect())||{},N=(c=m.left)!=null?c:0,B=(d=m.width)!=null?d:0;n(2,r=N+B>_?"right":"left")}return()=>{document.removeEventListener("click",D)}});function D(c){const d=c.target;d!==a&&!(a==null?void 0:a.contains(d))&&i()}function p(c){Z[c?"unshift":"push"](()=>{b=c,n(3,b)})}return s.$$set=c=>{"classNames"in c&&n(0,o=c.classNames),"dropdownElement"in c&&n(4,a=c.dropdownElement),"forceAlignement"in c&&n(5,f=c.forceAlignement),"onClose"in c&&n(1,i=c.onClose),"$$scope"in c&&n(6,t=c.$$scope)},[o,i,r,b,a,f,t,l,p]}class Le extends K{constructor(e){super();P(this,e,Se,Ie,Q,{classNames:0,dropdownElement:4,forceAlignement:5,onClose:1})}}function Ve(s){let e,n;return{c(){e=x("svg"),n=x("path"),this.h()},l(l){e=$(l,"svg",{class:!0,xmlns:!0,"xmlns:xlink":!0,"aria-hidden":!0,focusable:!0,role:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0,style:!0});var t=V(e);n=$(t,"path",{d:!0,fill:!0}),V(n).forEach(v),t.forEach(v),this.h()},h(){u(n,"d","M7 10l5 5l5-5z"),u(n,"fill","currentColor"),u(e,"class",s[0]),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),u(e,"aria-hidden","true"),u(e,"focusable","false"),u(e,"role","img"),u(e,"width","1em"),u(e,"height","1em"),u(e,"preserveAspectRatio","xMidYMid meet"),u(e,"viewBox","0 0 24 24"),De(e,"transform","rotate(360deg)")},m(l,t){E(l,e,t),U(e,n)},p(l,[t]){t&1&&u(e,"class",l[0])},i:G,o:G,d(l){l&&v(e)}}}function ye(s,e,n){let{classNames:l=""}=e;return s.$$set=t=>{"classNames"in t&&n(0,l=t.classNames)},[l]}class Me extends K{constructor(e){super();P(this,e,ye,Ve,Q,{classNames:0})}}const Ae=s=>({}),ee=s=>({}),Je=s=>({}),te=s=>({});function Oe(s){let e,n,l,t,o,a=s[2]&&le(s),f=s[10]&&ne();return{c(){a&&a.c(),e=j(),n=ke(s[4]),l=j(),f&&f.c(),t=R()},l(i){a&&a.l(i),e=H(i),n=ve(i,s[4]),l=H(i),f&&f.l(i),t=R()},m(i,r){a&&a.m(i,r),E(i,e,r),E(i,n,r),E(i,l,r),f&&f.m(i,r),E(i,t,r),o=!0},p(i,r){i[2]?a?(a.p(i,r),r&4&&h(a,1)):(a=le(i),a.c(),h(a,1),a.m(e.parentNode,e)):a&&(J(),g(a,1,1,()=>{a=null}),O()),(!o||r&16)&&Ne(n,i[4]),i[10]?f?r&1024&&h(f,1):(f=ne(),f.c(),h(f,1),f.m(t.parentNode,t)):f&&(J(),g(f,1,1,()=>{f=null}),O())},i(i){o||(h(a),h(f),o=!0)},o(i){g(a),g(f),o=!1},d(i){a&&a.d(i),i&&v(e),i&&v(n),i&&v(l),f&&f.d(i),i&&v(t)}}}function Re(s){let e;const n=s[14].button,l=W(n,s,s[18],te);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,o){l&&l.m(t,o),e=!0},p(t,o){l&&l.p&&(!e||o&262144)&&q(l,n,t,t[18],e?F(n,t[18],o,Je):z(t[18]),te)},i(t){e||(h(l,t),e=!0)},o(t){g(l,t),e=!1},d(t){l&&l.d(t)}}}function le(s){let e,n,l;var t=s[2];function o(a){return{props:{classNames:"mr-1.5 "+a[3]}}}return t&&(e=new t(o(s))),{c(){e&&y(e.$$.fragment),n=R()},l(a){e&&T(e.$$.fragment,a),n=R()},m(a,f){e&&M(e,a,f),E(a,n,f),l=!0},p(a,f){const i={};if(f&8&&(i.classNames="mr-1.5 "+a[3]),t!==(t=a[2])){if(e){J();const r=e;g(r.$$.fragment,1,0,()=>{A(r,1)}),O()}t?(e=new t(o(a)),y(e.$$.fragment),h(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else t&&e.$set(i)},i(a){l||(e&&h(e.$$.fragment,a),l=!0)},o(a){e&&g(e.$$.fragment,a),l=!1},d(a){a&&v(n),e&&A(e,a)}}}function ne(s){let e,n;return e=new Me({props:{classNames:"-mr-1 text-gray-500"}}),{c(){y(e.$$.fragment)},l(l){T(e.$$.fragment,l)},m(l,t){M(e,l,t),n=!0},i(l){n||(h(e.$$.fragment,l),n=!0)},o(l){g(e.$$.fragment,l),n=!1},d(l){A(e,l)}}}function se(s){let e,n;return e=new Le({props:{classNames:s[6]+" "+(s[9]?"v2-dropdown-menu hidden":""),dropdownElement:s[11],forceAlignement:s[5],onClose:s[16],$$slots:{default:[Ue]},$$scope:{ctx:s}}}),{c(){y(e.$$.fragment)},l(l){T(e.$$.fragment,l)},m(l,t){M(e,l,t),n=!0},p(l,t){const o={};t&576&&(o.classNames=l[6]+" "+(l[9]?"v2-dropdown-menu hidden":"")),t&2048&&(o.dropdownElement=l[11]),t&32&&(o.forceAlignement=l[5]),t&4096&&(o.onClose=l[16]),t&262144&&(o.$$scope={dirty:t,ctx:l}),e.$set(o)},i(l){n||(h(e.$$.fragment,l),n=!0)},o(l){g(e.$$.fragment,l),n=!1},d(l){A(e,l)}}}function Ue(s){let e;const n=s[14].menu,l=W(n,s,s[18],ee);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,o){l&&l.m(t,o),e=!0},p(t,o){l&&l.p&&(!e||o&262144)&&q(l,n,t,t[18],e?F(n,t[18],o,Ae):z(t[18]),ee)},i(t){e||(h(l,t),e=!0)},o(t){g(l,t),e=!1},d(t){l&&l.d(t)}}}function We(s){let e,n,l,t,o,a,f,i,r,b,D;const p=[Re,Oe],c=[];function d(m,N){return m[13].button?0:1}l=d(s),t=c[l]=p[l](s);let _=(s[12]||s[9])&&se(s);return{c(){e=S("div"),n=S("button"),t.c(),a=j(),_&&_.c(),this.h()},l(m){e=L(m,"DIV",{class:!0,"selected-value":!0});var N=V(e);n=L(N,"BUTTON",{class:!0,type:!0});var B=V(n);t.l(B),B.forEach(v),a=H(N),_&&_.l(N),N.forEach(v),this.h()},h(){u(n,"class",o=""+s[1]+" "+(s[7]?"":"cursor-pointer w-full btn text-sm")+" "+(s[9]?"v2-dropdown-button":"")),u(n,"type","button"),u(e,"class",f="relative "+s[0]+" "+(s[9]?"v2-dropdown":"")),u(e,"selected-value",i=s[8]||void 0)},m(m,N){E(m,e,N),U(e,n),c[l].m(n,null),U(e,a),_&&_.m(e,null),s[17](e),r=!0,b||(D=X(n,"click",s[15]),b=!0)},p(m,[N]){let B=l;l=d(m),l===B?c[l].p(m,N):(J(),g(c[B],1,1,()=>{c[B]=null}),O(),t=c[l],t?t.p(m,N):(t=c[l]=p[l](m),t.c()),h(t,1),t.m(n,null)),(!r||N&642&&o!==(o=""+m[1]+" "+(m[7]?"":"cursor-pointer w-full btn text-sm")+" "+(m[9]?"v2-dropdown-button":"")))&&u(n,"class",o),m[12]||m[9]?_?(_.p(m,N),N&4608&&h(_,1)):(_=se(m),_.c(),h(_,1),_.m(e,null)):_&&(J(),g(_,1,1,()=>{_=null}),O()),(!r||N&513&&f!==(f="relative "+m[0]+" "+(m[9]?"v2-dropdown":"")))&&u(e,"class",f),(!r||N&256&&i!==(i=m[8]||void 0))&&u(e,"selected-value",i)},i(m){r||(h(t),h(_),r=!0)},o(m){g(t),g(_),r=!1},d(m){m&&v(e),c[l].d(),_&&_.d(),s[17](null),b=!1,D()}}}function qe(s,e,n){let{$$slots:l={},$$scope:t}=e;const o=we(l);let{classNames:a=""}=e,{btnClassNames:f=""}=e,{btnIcon:i=void 0}=e,{btnIconClassNames:r=""}=e,{btnLabel:b=""}=e,{forceMenuAlignement:D=void 0}=e,{menuClassNames:p=""}=e,{noBtnClass:c=void 0}=e,{selectedValue:d=void 0}=e,{useDeprecatedJS:_=!0}=e,{withBtnCaret:m=!1}=e,N,B=!1;const w=()=>n(12,B=!B),k=()=>n(12,B=!1);function I(C){Z[C?"unshift":"push"](()=>{N=C,n(11,N)})}return s.$$set=C=>{"classNames"in C&&n(0,a=C.classNames),"btnClassNames"in C&&n(1,f=C.btnClassNames),"btnIcon"in C&&n(2,i=C.btnIcon),"btnIconClassNames"in C&&n(3,r=C.btnIconClassNames),"btnLabel"in C&&n(4,b=C.btnLabel),"forceMenuAlignement"in C&&n(5,D=C.forceMenuAlignement),"menuClassNames"in C&&n(6,p=C.menuClassNames),"noBtnClass"in C&&n(7,c=C.noBtnClass),"selectedValue"in C&&n(8,d=C.selectedValue),"useDeprecatedJS"in C&&n(9,_=C.useDeprecatedJS),"withBtnCaret"in C&&n(10,m=C.withBtnCaret),"$$scope"in C&&n(18,t=C.$$scope)},[a,f,i,r,b,D,p,c,d,_,m,N,B,o,l,w,k,I,t]}class pe extends K{constructor(e){super();P(this,e,qe,We,Q,{classNames:0,btnClassNames:1,btnIcon:2,btnIconClassNames:3,btnLabel:4,forceMenuAlignement:5,menuClassNames:6,noBtnClass:7,selectedValue:8,useDeprecatedJS:9,withBtnCaret:10})}}function ze(s){let e,n,l,t=s[5]&&ae(s);return{c(){t&&t.c(),e=j(),n=ke(s[7])},l(o){t&&t.l(o),e=H(o),n=ve(o,s[7])},m(o,a){t&&t.m(o,a),E(o,e,a),E(o,n,a),l=!0},p(o,a){o[5]?t?(t.p(o,a),a&32&&h(t,1)):(t=ae(o),t.c(),h(t,1),t.m(e.parentNode,e)):t&&(J(),g(t,1,1,()=>{t=null}),O()),(!l||a&128)&&Ne(n,o[7])},i(o){l||(h(t),l=!0)},o(o){g(t),l=!1},d(o){t&&t.d(o),o&&v(e),o&&v(n)}}}function Fe(s){let e;const n=s[15].default,l=W(n,s,s[14],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,o){l&&l.m(t,o),e=!0},p(t,o){l&&l.p&&(!e||o&16384)&&q(l,n,t,t[14],e?F(n,t[14],o,null):z(t[14]),null)},i(t){e||(h(l,t),e=!0)},o(t){g(l,t),e=!1},d(t){l&&l.d(t)}}}function ae(s){let e,n,l;var t=s[5];function o(a){return{props:{classNames:"mr-1.5 "+a[6]}}}return t&&(e=new t(o(s))),{c(){e&&y(e.$$.fragment),n=R()},l(a){e&&T(e.$$.fragment,a),n=R()},m(a,f){e&&M(e,a,f),E(a,n,f),l=!0},p(a,f){const i={};if(f&64&&(i.classNames="mr-1.5 "+a[6]),t!==(t=a[5])){if(e){J();const r=e;g(r.$$.fragment,1,0,()=>{A(r,1)}),O()}t?(e=new t(o(a)),y(e.$$.fragment),h(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else t&&e.$set(i)},i(a){l||(e&&h(e.$$.fragment,a),l=!0)},o(a){e&&g(e.$$.fragment,a),l=!1},d(a){a&&v(n),e&&A(e,a)}}}function Ge(s){let e,n,l,t,o,a,f,i,r,b;const D=[Fe,ze],p=[];function c(d,_){return d[13].default?0:1}return l=c(s),t=p[l]=D[l](s),{c(){e=S("li"),n=S("a"),t.c(),this.h()},l(d){e=L(d,"LI",{});var _=V(e);n=L(_,"A",{class:!0,"data-label":!0,"data-url":!0,"data-value":!0,href:!0,rel:!0,target:!0});var m=V(n);t.l(m),m.forEach(v),_.forEach(v),this.h()},h(){u(n,"class",o="flex items-center hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer px-3 py-1.5 whitespace-nowrap "+s[0]+" "+(s[9]?"hover:underline":"")+" "+(s[12]?"v2-dropdown-entry":"")),u(n,"data-label",s[1]),u(n,"data-url",s[2]),u(n,"data-value",s[3]),u(n,"href",s[4]),u(n,"rel",a=s[8]?"nofollow":void 0),u(n,"target",f=s[11]?"_blank":void 0)},m(d,_){E(d,e,_),U(e,n),p[l].m(n,null),i=!0,r||(b=X(n,"click",function(){ge(s[10])&&s[10].apply(this,arguments)}),r=!0)},p(d,[_]){s=d;let m=l;l=c(s),l===m?p[l].p(s,_):(J(),g(p[m],1,1,()=>{p[m]=null}),O(),t=p[l],t?t.p(s,_):(t=p[l]=D[l](s),t.c()),h(t,1),t.m(n,null)),(!i||_&4609&&o!==(o="flex items-center hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer px-3 py-1.5 whitespace-nowrap "+s[0]+" "+(s[9]?"hover:underline":"")+" "+(s[12]?"v2-dropdown-entry":"")))&&u(n,"class",o),(!i||_&2)&&u(n,"data-label",s[1]),(!i||_&4)&&u(n,"data-url",s[2]),(!i||_&8)&&u(n,"data-value",s[3]),(!i||_&16)&&u(n,"href",s[4]),(!i||_&256&&a!==(a=s[8]?"nofollow":void 0))&&u(n,"rel",a),(!i||_&2048&&f!==(f=s[11]?"_blank":void 0))&&u(n,"target",f)},i(d){i||(h(t),i=!0)},o(d){g(t),i=!1},d(d){d&&v(e),p[l].d(),r=!1,b()}}}function Te(s,e,n){let{$$slots:l={},$$scope:t}=e;const o=we(l);let{classNames:a=""}=e,{dataLabel:f=void 0}=e,{dataUrl:i=void 0}=e,{dataValue:r=void 0}=e,{href:b=void 0}=e,{icon:D=void 0}=e,{iconClassNames:p=""}=e,{label:c=""}=e,{noFollow:d=!1}=e,{underline:_=!1}=e,{onClick:m=()=>{}}=e,{targetBlank:N=!1}=e,{useDeprecatedJS:B=!0}=e;return s.$$set=w=>{"classNames"in w&&n(0,a=w.classNames),"dataLabel"in w&&n(1,f=w.dataLabel),"dataUrl"in w&&n(2,i=w.dataUrl),"dataValue"in w&&n(3,r=w.dataValue),"href"in w&&n(4,b=w.href),"icon"in w&&n(5,D=w.icon),"iconClassNames"in w&&n(6,p=w.iconClassNames),"label"in w&&n(7,c=w.label),"noFollow"in w&&n(8,d=w.noFollow),"underline"in w&&n(9,_=w.underline),"onClick"in w&&n(10,m=w.onClick),"targetBlank"in w&&n(11,N=w.targetBlank),"useDeprecatedJS"in w&&n(12,B=w.useDeprecatedJS),"$$scope"in w&&n(14,t=w.$$scope)},[a,f,i,r,b,D,p,c,d,_,m,N,B,o,t,l]}class Be extends K{constructor(e){super();P(this,e,Te,Ge,Q,{classNames:0,dataLabel:1,dataUrl:2,dataValue:3,href:4,icon:5,iconClassNames:6,label:7,noFollow:8,underline:9,onClick:10,targetBlank:11,useDeprecatedJS:12})}}const{window:je}=Ee,He=s=>({}),oe=s=>({slot:"button"});function ie(s,e,n){const l=s.slice();return l[11]=e[n].label,l[12]=e[n].value,l}const Ke=s=>({}),fe=s=>({slot:"menu"}),Pe=s=>({}),re=s=>({slot:"button"});function ue(s,e,n){const l=s.slice();return l[11]=e[n].label,l[12]=e[n].value,l}const Qe=s=>({}),ce=s=>({slot:"menu"}),Xe=s=>({}),_e=s=>({slot:"menu"});function Ye(s){let e,n;return e=new pe({props:{btnLabel:"",classNames:"colab-dropdown",noBtnClass:!0,useDeprecatedJS:!1,$$slots:{menu:[tt],button:[$e]},$$scope:{ctx:s}}}),{c(){y(e.$$.fragment)},l(l){T(e.$$.fragment,l)},m(l,t){M(e,l,t),n=!0},p(l,t){const o={};t&1024&&(o.$$scope={dirty:t,ctx:l}),e.$set(o)},i(l){n||(h(e.$$.fragment,l),n=!0)},o(l){g(e.$$.fragment,l),n=!1},d(l){A(e,l)}}}function Ze(s){let e,n,l;return{c(){e=S("a"),n=S("img"),this.h()},l(t){e=L(t,"A",{href:!0,target:!0});var o=V(e);n=L(o,"IMG",{alt:!0,class:!0,src:!0}),o.forEach(v),this.h()},h(){u(n,"alt","Open In Colab"),u(n,"class","!m-0"),Y(n.src,l="https://colab.research.google.com/assets/colab-badge.svg")||u(n,"src",l),u(e,"href",s[2][0].value),u(e,"target","_blank")},m(t,o){E(t,e,o),U(e,n)},p:G,i:G,o:G,d(t){t&&v(e)}}}function xe(s){let e,n;return{c(){e=S("img"),this.h()},l(l){e=L(l,"IMG",{alt:!0,class:!0,src:!0}),this.h()},h(){u(e,"alt","Open In Colab"),u(e,"class","!m-0"),Y(e.src,n="https://colab.research.google.com/assets/colab-badge.svg")||u(e,"src",n)},m(l,t){E(l,e,t)},d(l){l&&v(e)}}}function $e(s){let e;const n=s[6].default,l=W(n,s,s[10],re),t=l||xe();return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,a){t&&t.m(o,a),e=!0},p(o,a){l&&l.p&&(!e||a&1024)&&q(l,n,o,o[10],e?F(n,o[10],a,Pe):z(o[10]),re)},i(o){e||(h(t,o),e=!0)},o(o){g(t,o),e=!1},d(o){t&&t.d(o)}}}function de(s){let e,n;function l(){return s[7](s[12])}return e=new Be({props:{classNames:"text-sm !no-underline",iconClassNames:"text-gray-500",label:s[11],onClick:l,useDeprecatedJS:!1}}),{c(){y(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,o){M(e,t,o),n=!0},p(t,o){s=t},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function et(s){let e,n,l=s[2],t=[];for(let a=0;a<l.length;a+=1)t[a]=de(ue(s,l,a));const o=a=>g(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=R()},l(a){for(let f=0;f<t.length;f+=1)t[f].l(a);e=R()},m(a,f){for(let i=0;i<t.length;i+=1)t[i].m(a,f);E(a,e,f),n=!0},p(a,f){if(f&4){l=a[2];let i;for(i=0;i<l.length;i+=1){const r=ue(a,l,i);t[i]?(t[i].p(r,f),h(t[i],1)):(t[i]=de(r),t[i].c(),h(t[i],1),t[i].m(e.parentNode,e))}for(J(),i=l.length;i<t.length;i+=1)o(i);O()}},i(a){if(!n){for(let f=0;f<l.length;f+=1)h(t[f]);n=!0}},o(a){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)g(t[f]);n=!1},d(a){Ce(t,a),a&&v(e)}}}function tt(s){let e;const n=s[6].default,l=W(n,s,s[10],ce),t=l||et(s);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,a){t&&t.m(o,a),e=!0},p(o,a){l&&l.p&&(!e||a&1024)&&q(l,n,o,o[10],e?F(n,o[10],a,Qe):z(o[10]),ce)},i(o){e||(h(t,o),e=!0)},o(o){g(t,o),e=!1},d(o){t&&t.d(o)}}}function lt(s){let e,n;return e=new pe({props:{btnLabel:"",classNames:"colab-dropdown",noBtnClass:!0,useDeprecatedJS:!1,$$slots:{menu:[it],button:[at]},$$scope:{ctx:s}}}),{c(){y(e.$$.fragment)},l(l){T(e.$$.fragment,l)},m(l,t){M(e,l,t),n=!0},p(l,t){const o={};t&1024&&(o.$$scope={dirty:t,ctx:l}),e.$set(o)},i(l){n||(h(e.$$.fragment,l),n=!0)},o(l){g(e.$$.fragment,l),n=!1},d(l){A(e,l)}}}function nt(s){let e,n,l;return{c(){e=S("a"),n=S("img"),this.h()},l(t){e=L(t,"A",{href:!0,target:!0});var o=V(e);n=L(o,"IMG",{alt:!0,class:!0,src:!0}),o.forEach(v),this.h()},h(){u(n,"alt","Open In Studio Lab"),u(n,"class","!m-0"),Y(n.src,l="https://studiolab.sagemaker.aws/studiolab.svg")||u(n,"src",l),u(e,"href",s[3][0].value),u(e,"target","_blank")},m(t,o){E(t,e,o),U(e,n)},p:G,i:G,o:G,d(t){t&&v(e)}}}function st(s){let e,n;return{c(){e=S("img"),this.h()},l(l){e=L(l,"IMG",{alt:!0,class:!0,src:!0}),this.h()},h(){u(e,"alt","Open In Studio Lab"),u(e,"class","!m-0"),Y(e.src,n="https://studiolab.sagemaker.aws/studiolab.svg")||u(e,"src",n)},m(l,t){E(l,e,t)},d(l){l&&v(e)}}}function at(s){let e;const n=s[6].default,l=W(n,s,s[10],oe),t=l||st();return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,a){t&&t.m(o,a),e=!0},p(o,a){l&&l.p&&(!e||a&1024)&&q(l,n,o,o[10],e?F(n,o[10],a,He):z(o[10]),oe)},i(o){e||(h(t,o),e=!0)},o(o){g(t,o),e=!1},d(o){t&&t.d(o)}}}function me(s){let e,n;function l(){return s[8](s[12])}return e=new Be({props:{classNames:"text-sm !no-underline",iconClassNames:"text-gray-500",label:s[11],onClick:l,useDeprecatedJS:!1}}),{c(){y(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,o){M(e,t,o),n=!0},p(t,o){s=t},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function ot(s){let e,n,l=s[3],t=[];for(let a=0;a<l.length;a+=1)t[a]=me(ie(s,l,a));const o=a=>g(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=R()},l(a){for(let f=0;f<t.length;f+=1)t[f].l(a);e=R()},m(a,f){for(let i=0;i<t.length;i+=1)t[i].m(a,f);E(a,e,f),n=!0},p(a,f){if(f&8){l=a[3];let i;for(i=0;i<l.length;i+=1){const r=ie(a,l,i);t[i]?(t[i].p(r,f),h(t[i],1)):(t[i]=me(r),t[i].c(),h(t[i],1),t[i].m(e.parentNode,e))}for(J(),i=l.length;i<t.length;i+=1)o(i);O()}},i(a){if(!n){for(let f=0;f<l.length;f+=1)h(t[f]);n=!0}},o(a){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)g(t[f]);n=!1},d(a){Ce(t,a),a&&v(e)}}}function it(s){let e;const n=s[6].default,l=W(n,s,s[10],fe),t=l||ot(s);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,a){t&&t.m(o,a),e=!0},p(o,a){l&&l.p&&(!e||a&1024)&&q(l,n,o,o[10],e?F(n,o[10],a,Ke):z(o[10]),fe)},i(o){e||(h(t,o),e=!0)},o(o){g(t,o),e=!1},d(o){t&&t.d(o)}}}function ft(s){let e,n,l,t,o,a,f,i,r,b,D;const p=s[6].alwaysVisible,c=W(p,s,s[10],_e),d=[Ze,Ye],_=[];function m(k,I){return k[2].length===1?0:k[2].length>1?1:-1}~(l=m(s))&&(t=_[l]=d[l](s));const N=[nt,lt],B=[];function w(k,I){return k[3].length===1?0:k[3].length>1?1:-1}return~(a=w(s))&&(f=B[a]=N[a](s)),{c(){e=S("div"),c&&c.c(),n=j(),t&&t.c(),o=j(),f&&f.c(),this.h()},l(k){e=L(k,"DIV",{class:!0});var I=V(e);c&&c.l(I),n=H(I),t&&t.l(I),o=H(I),f&&f.l(I),I.forEach(v),this.h()},h(){u(e,"class",i="flex space-x-1 "+s[0])},m(k,I){E(k,e,I),c&&c.m(e,null),U(e,n),~l&&_[l].m(e,null),U(e,o),~a&&B[a].m(e,null),s[9](e),r=!0,b||(D=X(je,"resize",s[4]),b=!0)},p(k,[I]){c&&c.p&&(!r||I&1024)&&q(c,p,k,k[10],r?F(p,k[10],I,Xe):z(k[10]),_e),t&&t.p(k,I),f&&f.p(k,I),(!r||I&1&&i!==(i="flex space-x-1 "+k[0]))&&u(e,"class",i)},i(k){r||(h(c,k),h(t),h(f),r=!0)},o(k){g(c,k),g(t),g(f),r=!1},d(k){k&&v(e),c&&c.d(k),~l&&_[l].d(),~a&&B[a].d(),s[9](null),b=!1,D()}}}function he(s){window.open(s)}function rt(s,e,n){let{$$slots:l={},$$scope:t}=e,{options:o=[]}=e,{classNames:a=""}=e,f;const i=o.filter(d=>d.value.includes("colab.research.google.com")),r=o.filter(d=>d.value.includes("studiolab.sagemaker.aws"));function b(){const d=document.querySelector(".prose-doc h1"),_=document.querySelector(".prose-doc h1 > span");if(d&&_){const{width:m}=d.getBoundingClientRect(),{width:N}=_.getBoundingClientRect();let B=0;for(let k=0;k<f.children.length;k++)B+=f.children.item(k).clientWidth;const w=20;m-N<B+w?f.classList.remove("absolute"):f.classList.add("absolute")}}be(()=>{b()});const D=d=>he(d),p=d=>he(d);function c(d){Z[d?"unshift":"push"](()=>{f=d,n(1,f)})}return s.$$set=d=>{"options"in d&&n(5,o=d.options),"classNames"in d&&n(0,a=d.classNames),"$$scope"in d&&n(10,t=d.$$scope)},[a,f,i,r,b,o,l,D,p,c,t]}class ct extends K{constructor(e){super();P(this,e,rt,ft,Q,{options:5,classNames:0})}}export{ct as D};
