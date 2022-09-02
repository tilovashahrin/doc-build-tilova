var R=Object.defineProperty,Z=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var V=(a,e,t)=>e in a?R(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,D=(a,e)=>{for(var t in e||(e={}))J.call(e,t)&&V(a,t,e[t]);if(T)for(var t of T(e))W.call(e,t)&&V(a,t,e[t]);return a},L=(a,e)=>Z(a,z(e));import{D as X,S as x,i as $,s as ee,e as k,k as I,Y as q,l as M,c as w,a as E,m as S,Z as G,d as _,b as v,g as y,G as g,Q as K,t as N,h as A,j as te,_ as le,L as Q,K as se,$ as ae,v as ne,a0 as j,a1 as re}from"./vendor-hf-doc-builder.js";const P=X({});function B(a,e,t){const l=a.slice();return l[11]=e[t],l[13]=t,l}function F(a){let e,t,l=a[11].correct?"Correct!":"Incorrect.",s,i,c,d=a[11].explain+"",m;return{c(){e=k("div"),t=k("span"),s=N(l),i=I(),c=new q,this.h()},l(f){e=w(f,"DIV",{class:!0});var h=E(e);t=w(h,"SPAN",{class:!0});var b=E(t);s=A(b,l),b.forEach(_),i=S(h),c=G(h),h.forEach(_),this.h()},h(){v(t,"class","font-bold"),c.a=null,v(e,"class",m="alert alert-"+(a[11].correct?"success":"error")+" mt-1 mb-2.5 leading-normal")},m(f,h){y(f,e,h),g(e,t),g(t,s),g(e,i),c.m(d,e)},p(f,h){h&1&&l!==(l=f[11].correct?"Correct!":"Incorrect.")&&te(s,l),h&1&&d!==(d=f[11].explain+"")&&c.p(d),h&1&&m!==(m="alert alert-"+(f[11].correct?"success":"error")+" mt-1 mb-2.5 leading-normal")&&v(e,"class",m)},d(f){f&&_(e)}}}function H(a){let e,t,l,s,i,c=a[11].text+"",d,m=a[4]&&a[4].includes(a[13]),f,h,b,o=m&&F(a);return{c(){e=k("label"),t=k("input"),s=I(),i=new q,d=I(),o&&o.c(),f=M(),this.h()},l(r){e=w(r,"LABEL",{class:!0});var n=E(e);t=w(n,"INPUT",{autocomplete:!0,class:!0,name:!0,type:!0}),s=S(n),i=G(n),n.forEach(_),d=S(r),o&&o.l(r),f=M(),this.h()},h(){v(t,"autocomplete","off"),v(t,"class","form-input -mt-1.5 mr-2"),v(t,"name","choice"),v(t,"type","checkbox"),t.__value=l=a[13],t.value=t.__value,a[7][0].push(t),i.a=null,v(e,"class","block")},m(r,n){y(r,e,n),g(e,t),t.checked=~a[3].indexOf(t.__value),g(e,s),i.m(c,e),y(r,d,n),o&&o.m(r,n),y(r,f,n),h||(b=K(t,"change",a[6]),h=!0)},p(r,n){n&8&&(t.checked=~r[3].indexOf(t.__value)),n&1&&c!==(c=r[11].text+"")&&i.p(c),n&16&&(m=r[4]&&r[4].includes(r[13])),m?o?o.p(r,n):(o=F(r),o.c(),o.m(f.parentNode,f)):o&&(o.d(1),o=null)},d(r){r&&_(e),a[7][0].splice(a[7][0].indexOf(t),1),r&&_(d),o&&o.d(r),r&&_(f),h=!1,b()}}}function U(a){let e;function t(i,c){return i[1]?ce:i[2]?ie:oe}let l=t(a),s=l(a);return{c(){e=k("div"),s.c(),this.h()},l(i){e=w(i,"DIV",{class:!0});var c=E(e);s.l(c),c.forEach(_),this.h()},h(){v(e,"class","font-semibold leading-snug")},m(i,c){y(i,e,c),s.m(e,null)},p(i,c){l!==(l=t(i))&&(s.d(1),s=l(i),s&&(s.c(),s.m(e,null)))},d(i){i&&_(e),s.d()}}}function oe(a){let e,t;return{c(){e=k("span"),t=N("You got all the answers!"),this.h()},l(l){e=w(l,"SPAN",{class:!0});var s=E(e);t=A(s,"You got all the answers!"),s.forEach(_),this.h()},h(){v(e,"class","text-green-900 dark:text-green-200")},m(l,s){y(l,e,s),g(e,t)},d(l){l&&_(e)}}}function ie(a){let e,t;return{c(){e=k("span"),t=N("You didn't select all the correct answers, there's more!"),this.h()},l(l){e=w(l,"SPAN",{class:!0});var s=E(e);t=A(s,"You didn't select all the correct answers, there's more!"),s.forEach(_),this.h()},h(){v(e,"class","text-red-900 dark:text-red-200")},m(l,s){y(l,e,s),g(e,t)},d(l){l&&_(e)}}}function ce(a){let e,t;return{c(){e=k("span"),t=N("Looks like at least one of your answers is wrong, try again!"),this.h()},l(l){e=w(l,"SPAN",{class:!0});var s=E(e);t=A(s,"Looks like at least one of your answers is wrong, try again!"),s.forEach(_),this.h()},h(){v(e,"class","text-red-900 dark:text-red-200")},m(l,s){y(l,e,s),g(e,t)},d(l){l&&_(e)}}}function ue(a){let e,t,l,s,i,c,d,m,f,h,b=a[0],o=[];for(let n=0;n<b.length;n+=1)o[n]=H(B(a,b,n));let r=a[4].length&&U(a);return{c(){e=k("div"),t=k("form");for(let n=0;n<o.length;n+=1)o[n].c();l=I(),s=k("div"),i=k("button"),c=N("Submit"),m=I(),r&&r.c(),this.h()},l(n){e=w(n,"DIV",{});var p=E(e);t=w(p,"FORM",{});var u=E(t);for(let O=0;O<o.length;O+=1)o[O].l(u);l=S(u),s=w(u,"DIV",{class:!0});var C=E(s);i=w(C,"BUTTON",{class:!0,type:!0});var Y=E(i);c=A(Y,"Submit"),Y.forEach(_),m=S(C),r&&r.l(C),C.forEach(_),u.forEach(_),p.forEach(_),this.h()},h(){v(i,"class","btn px-4 mr-4"),v(i,"type","submit"),i.disabled=d=!a[3].length,v(s,"class","flex flex-row items-center mt-3")},m(n,p){y(n,e,p),g(e,t);for(let u=0;u<o.length;u+=1)o[u].m(t,null);g(t,l),g(t,s),g(s,i),g(i,c),g(s,m),r&&r.m(s,null),f||(h=K(t,"submit",le(a[8])),f=!0)},p(n,[p]){if(p&25){b=n[0];let u;for(u=0;u<b.length;u+=1){const C=B(n,b,u);o[u]?o[u].p(C,p):(o[u]=H(C),o[u].c(),o[u].m(t,l))}for(;u<o.length;u+=1)o[u].d(1);o.length=b.length}p&8&&d!==(d=!n[3].length)&&(i.disabled=d),n[4].length?r?r.p(n,p):(r=U(n),r.c(),r.m(s,null)):r&&(r.d(1),r=null)},i:Q,o:Q,d(n){n&&_(e),se(o,n),r&&r.d(),f=!1,h()}}}function fe(a="_"){return`${a}${Math.random().toString(36).substr(2,9)}`}function he(a,e,t){let l;ae(a,P,n=>t(9,l=n));let{choices:s}=e;const i=fe();let c=!1,d=!1,m=[],f=[];ne(()=>{j(P,l=L(D({},l),{[i]:{correct:!1}}),l)});function h(){t(1,c=!1),t(2,d=!1);for(let p=0;p<s.length;p++){const u=s[p];u.correct&&!m.includes(p)?t(2,d=!0):!u.correct&&m.includes(p)&&t(1,c=!0)}if(t(4,f=m),j(P,l=L(D({},l),{[i]:{correct:!d&&!c}}),l),Object.values(l).every(({correct:p})=>p)){const p=new Event("ChapterComplete");window.dispatchEvent(p)}}const b=[[]];function o(){m=re(b[0],this.__value,this.checked),t(3,m)}const r=()=>h();return a.$$set=n=>{"choices"in n&&t(0,s=n.choices)},[s,c,d,m,f,h,o,b,r]}class me extends x{constructor(e){super();$(this,e,he,ue,ee,{choices:0})}}export{me as Q};
