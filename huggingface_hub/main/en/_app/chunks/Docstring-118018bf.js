var Je=Object.defineProperty,Ke=Object.defineProperties;var $e=Object.getOwnPropertyDescriptors;var ue=Object.getOwnPropertySymbols;var el=Object.prototype.hasOwnProperty,ll=Object.prototype.propertyIsEnumerable;var he=(a,e,l)=>e in a?Je(a,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[e]=l,de=(a,e)=>{for(var l in e||(e={}))el.call(e,l)&&he(a,l,e[l]);if(ue)for(var l of ue(e))ll.call(e,l)&&he(a,l,e[l]);return a},pe=(a,e)=>Ke(a,$e(e));import{S as Ve,i as De,s as Ie,e as k,c as w,a as E,d,b as _,f as te,g as N,l as K,L as me,t as G,k as C,h as x,m as A,F as m,U as ze,Q as se,j as ae,V as Be,T as Ge,W as xe,X as Re,q as Z,w as Xe,x as Ye,y as je,o as J,B as qe,n as Ue,p as We,G as ie,Y as Ze,Z as Fe,v as tl,_ as al,E as sl,$ as rl}from"./vendor-d3924577.js";import{I as Oe}from"./IconCopyLink-f94c3d80.js";function _e(a){let e,l;return{c(){e=k("div"),this.h()},l(t){e=w(t,"DIV",{class:!0,style:!0,id:!0});var s=E(e);s.forEach(d),this.h()},h(){_(e,"class",l="absolute text-base py-1.5 p-2 break-words bg-white border-2 border-black dark:border-gray-500 rounded shadow-alternate-xl z-50 "+(a[0].length>1e3?"max-w-lg":"max-w-xs")),te(e,"top",a[2]+15+"px"),te(e,"left",a[1]+15+"px"),_(e,"id",a[3])},m(t,s){N(t,e,s),e.innerHTML=a[0]},p(t,s){s&1&&(e.innerHTML=t[0]),s&1&&l!==(l="absolute text-base py-1.5 p-2 break-words bg-white border-2 border-black dark:border-gray-500 rounded shadow-alternate-xl z-50 "+(t[0].length>1e3?"max-w-lg":"max-w-xs"))&&_(e,"class",l),s&4&&te(e,"top",t[2]+15+"px"),s&2&&te(e,"left",t[1]+15+"px"),s&8&&_(e,"id",t[3])},d(t){t&&d(e)}}}function nl(a){let e,l=a[0]&&_e(a);return{c(){l&&l.c(),e=K()},l(t){l&&l.l(t),e=K()},m(t,s){l&&l.m(t,s),N(t,e,s)},p(t,[s]){t[0]?l?l.p(t,s):(l=_e(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:me,o:me,d(t){l&&l.d(t),t&&d(e)}}}function il(a,e,l){let{txt:t}=e,{x:s}=e,{y:f}=e,{id:i}=e;return a.$$set=o=>{"txt"in o&&l(0,t=o.txt),"x"in o&&l(1,s=o.x),"y"in o&&l(2,f=o.y),"id"in o&&l(3,i=o.id)},[t,s,f,i]}class ol extends Ve{constructor(e){super();De(this,e,il,nl,Ie,{txt:0,x:1,y:2,id:3})}}const ge="docstring-tooltip";function Qe(a,e){let l;function t(o){i(),l=new ol({props:{txt:e,x:o.pageX,y:o.pageY,id:ge},target:document.body})}function s(o){l.$set({x:o.pageX,y:o.pageY})}function f(){l.$destroy()}function i(){var u;const o=document.getElementById(ge);o&&((u=o.parentNode)==null||u.removeChild(o))}return a.addEventListener("mouseover",t),a.addEventListener("mouseleave",f),a.addEventListener("mousemove",s),{destroy(){a.removeEventListener("mouseover",t),a.removeEventListener("mouseleave",f),a.removeEventListener("mousemove",s)}}}const{window:fl}=al;function ve(a,e,l){const t=a.slice();return t[18]=e[l].title,t[8]=e[l].parametersDescription,t}function be(a,e,l){const t=a.slice();return t[6]=e[l].anchor,t[21]=e[l].description,t}function ke(a,e,l){const t=a.slice();return t[7]=e[l].name,t[24]=e[l].val,t}function we(a){let e,l,t,s,f,i,o,u,g;return{c(){e=k("a"),l=k("span"),t=G("<"),s=C(),f=k("span"),i=G("source"),o=C(),u=k("span"),g=G(">"),this.h()},l(r){e=w(r,"A",{class:!0,href:!0,target:!0});var n=E(e);l=w(n,"SPAN",{});var c=E(l);t=x(c,"<"),c.forEach(d),s=A(n),f=w(n,"SPAN",{class:!0});var h=E(f);i=x(h,"source"),h.forEach(d),o=A(n),u=w(n,"SPAN",{});var p=E(u);g=x(p,">"),p.forEach(d),n.forEach(d),this.h()},h(){_(f,"class","hidden md:block mx-0.5 hover:!underline"),_(e,"class","!ml-auto !text-gray-400 !no-underline text-sm flex items-center"),_(e,"href",a[5]),_(e,"target","_blank")},m(r,n){N(r,e,n),m(e,l),m(l,t),m(e,s),m(e,f),m(f,i),m(e,o),m(e,u),m(u,g)},p(r,n){n&32&&_(e,"href",r[5])},d(r){r&&d(e)}}}function Ee(a){let e,l,t=a[7]+"",s,f,i=a[24]+"",o,u,g,r,n;function c(){return a[14](a[7])}return{c(){e=k("span"),l=k("span"),s=G(t),f=k("span"),o=G(i),this.h()},l(h){e=w(h,"SPAN",{class:!0});var p=E(e);l=w(p,"SPAN",{class:!0});var y=E(l);s=x(y,t),f=w(y,"SPAN",{class:!0});var M=E(f);o=x(M,i),M.forEach(d),y.forEach(d),p.forEach(d),this.h()},h(){_(f,"class","opacity-60"),_(l,"class","rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"),_(e,"class",u="comma "+(a[11][a[7]]?"cursor-pointer":"cursor-default"))},m(h,p){N(h,e,p),m(e,l),m(l,s),m(l,f),m(f,o),r||(n=[ze(g=Qe.call(null,e,a[11][a[7]]||"")),se(e,"click",xe(Re(c)))],r=!0)},p(h,p){a=h,p&2&&t!==(t=a[7]+"")&&ae(s,t),p&2&&i!==(i=a[24]+"")&&ae(o,i),p&2&&u!==(u="comma "+(a[11][a[7]]?"cursor-pointer":"cursor-default"))&&_(e,"class",u),g&&Be(g.update)&&p&2&&g.update.call(null,a[11][a[7]]||"")},d(h){h&&d(e),r=!1,Ge(n)}}}function ye(a){let e,l,t,s,f=Te(a[4])+"",i,o,u,g;return{c(){e=k("span"),l=G("\u2192"),t=C(),s=k("span"),this.h()},l(r){e=w(r,"SPAN",{class:!0});var n=E(e);l=x(n,"\u2192"),n.forEach(d),t=A(r),s=w(r,"SPAN",{class:!0});var c=E(s);c.forEach(d),this.h()},h(){_(e,"class","font-bold"),_(s,"class",i="rounded hover:bg-gray-400 "+(a[3]?"cursor-pointer":"cursor-default"))},m(r,n){N(r,e,n),m(e,l),N(r,t,n),N(r,s,n),s.innerHTML=f,u||(g=[ze(o=Qe.call(null,s,a[3]||"")),se(s,"click",xe(Re(a[15])))],u=!0)},p(r,n){n&16&&f!==(f=Te(r[4])+"")&&(s.innerHTML=f),n&8&&i!==(i="rounded hover:bg-gray-400 "+(r[3]?"cursor-pointer":"cursor-default"))&&_(s,"class",i),o&&Be(o.update)&&n&8&&o.update.call(null,r[3]||"")},d(r){r&&d(e),r&&d(t),r&&d(s),u=!1,Ge(g)}}}function Le(a){var g;let e,l,t,s=((g=a[8])==null?void 0:g.length)+"",f,i,o,u;return{c(){e=k("div"),l=k("button"),t=G("Expand "),f=G(s),i=G(" parameters"),this.h()},l(r){e=w(r,"DIV",{class:!0});var n=E(e);l=w(n,"BUTTON",{class:!0});var c=E(l);t=x(c,"Expand "),f=x(c,s),i=x(c," parameters"),c.forEach(d),n.forEach(d),this.h()},h(){_(l,"class","absolute leading-tight px-3 py-1.5 dark:bg-gray-900 bg-black text-gray-200 hover:text-white rounded-xl bottom-12 ring-offset-2 hover:ring-black hover:ring-2"),_(e,"class","absolute inset-0 bg-gradient-to-t from-white to-white/0 dark:from-gray-950 dark:to-gray-950/0 z-10 flex justify-center")},m(r,n){N(r,e,n),m(e,l),m(l,t),m(l,f),m(l,i),o||(u=se(l,"click",a[16]),o=!0)},p(r,n){var c;n&256&&s!==(s=((c=r[8])==null?void 0:c.length)+"")&&ae(f,s)},d(r){r&&d(e),o=!1,u()}}}function Pe(a){let e,l,t,s,f,i,o=a[8],u=[];for(let r=0;r<o.length;r+=1)u[r]=Ce(be(a,o,r));const g=r=>J(u[r],1,1,()=>{u[r]=null});return{c(){e=k("p"),l=G("Parameters "),t=k("span"),s=C(),f=k("ul");for(let r=0;r<u.length;r+=1)u[r].c();this.h()},l(r){e=w(r,"P",{class:!0});var n=E(e);l=x(n,"Parameters "),t=w(n,"SPAN",{class:!0}),E(t).forEach(d),n.forEach(d),s=A(r),f=w(r,"UL",{class:!0});var c=E(f);for(let h=0;h<u.length;h+=1)u[h].l(c);c.forEach(d),this.h()},h(){_(t,"class","flex-auto border-t-2 border-gray-100 dark:border-gray-700 ml-3"),_(e,"class","flex items-center font-semibold !mt-2 !mb-2 text-gray-800"),_(f,"class","px-2")},m(r,n){N(r,e,n),m(e,l),m(e,t),N(r,s,n),N(r,f,n);for(let c=0;c<u.length;c+=1)u[c].m(f,null);i=!0},p(r,n){if(n&257){o=r[8];let c;for(c=0;c<o.length;c+=1){const h=be(r,o,c);u[c]?(u[c].p(h,n),Z(u[c],1)):(u[c]=Ce(h),u[c].c(),Z(u[c],1),u[c].m(f,null))}for(Ue(),c=o.length;c<u.length;c+=1)g(c);We()}},i(r){if(!i){for(let n=0;n<o.length;n+=1)Z(u[n]);i=!0}},o(r){u=u.filter(Boolean);for(let n=0;n<u.length;n+=1)J(u[n]);i=!1},d(r){r&&d(e),r&&d(s),r&&d(f),ie(u,r)}}}function Ce(a){let e,l,t,s,f,i,o,u,g,r=a[21]+"",n,c,h;return f=new Oe({props:{classNames:"text-smd"}}),{c(){e=k("li"),l=k("span"),t=k("a"),s=k("span"),Xe(f.$$.fragment),u=C(),g=k("span"),n=C(),this.h()},l(p){e=w(p,"LI",{class:!0});var y=E(e);l=w(y,"SPAN",{class:!0});var M=E(l);t=w(M,"A",{id:!0,class:!0,href:!0});var Y=E(t);s=w(Y,"SPAN",{});var j=E(s);Ye(f.$$.fragment,j),j.forEach(d),Y.forEach(d),u=A(M),g=w(M,"SPAN",{});var F=E(g);F.forEach(d),M.forEach(d),n=A(y),y.forEach(d),this.h()},h(){_(t,"id",i=a[6]),_(t,"class","header-link block pr-0.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(t,"href",o=`#${a[6]}`),_(l,"class","group flex space-x-1.5 items-start"),_(e,"class",c="text-base !pl-4 my-3 rounded "+(a[0]===a[6]?$:""))},m(p,y){N(p,e,y),m(e,l),m(l,t),m(t,s),je(f,s,null),m(l,u),m(l,g),g.innerHTML=r,m(e,n),h=!0},p(p,y){(!h||y&256&&i!==(i=p[6]))&&_(t,"id",i),(!h||y&256&&o!==(o=`#${p[6]}`))&&_(t,"href",o),(!h||y&256)&&r!==(r=p[21]+"")&&(g.innerHTML=r),(!h||y&257&&c!==(c="text-base !pl-4 my-3 rounded "+(p[0]===p[6]?$:"")))&&_(e,"class",c)},i(p){h||(Z(f.$$.fragment,p),h=!0)},o(p){J(f.$$.fragment,p),h=!1},d(p){p&&d(e),qe(f)}}}function Ae(a){let e,l=a[2],t=[];for(let s=0;s<l.length;s+=1)t[s]=Ne(ve(a,l,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=K()},l(s){for(let f=0;f<t.length;f+=1)t[f].l(s);e=K()},m(s,f){for(let i=0;i<t.length;i+=1)t[i].m(s,f);N(s,e,f)},p(s,f){if(f&4){l=s[2];let i;for(i=0;i<l.length;i+=1){const o=ve(s,l,i);t[i]?t[i].p(o,f):(t[i]=Ne(o),t[i].c(),t[i].m(e.parentNode,e))}for(;i<t.length;i+=1)t[i].d(1);t.length=l.length}},d(s){ie(t,s),s&&d(e)}}}function Ne(a){let e,l=a[18]+"",t,s,f,i,o,u=a[8]+"";return{c(){e=k("p"),t=G(l),s=C(),f=k("span"),i=C(),o=k("p"),this.h()},l(g){e=w(g,"P",{class:!0});var r=E(e);t=x(r,l),s=A(r),f=w(r,"SPAN",{class:!0}),E(f).forEach(d),r.forEach(d),i=A(g),o=w(g,"P",{});var n=E(o);n.forEach(d),this.h()},h(){_(f,"class","flex-auto border-t-2 ml-3"),_(e,"class","flex items-center font-semibold")},m(g,r){N(g,e,r),m(e,t),m(e,s),m(e,f),N(g,i,r),N(g,o,r),o.innerHTML=u},p(g,r){r&4&&l!==(l=g[18]+"")&&ae(t,l),r&4&&u!==(u=g[8]+"")&&(o.innerHTML=u)},d(g){g&&d(e),g&&d(i),g&&d(o)}}}function Se(a){let e,l,t,s,f,i,o,u,g,r,n=(a[3]||"")+"",c=!!a[4]&&He(a);return{c(){e=k("div"),l=k("p"),t=G("Returns"),s=C(),c&&c.c(),f=C(),i=k("span"),g=C(),r=k("p"),this.h()},l(h){e=w(h,"DIV",{class:!0,id:!0});var p=E(e);l=w(p,"P",{class:!0});var y=E(l);t=x(y,"Returns"),y.forEach(d),s=A(p),c&&c.l(p),f=A(p),i=w(p,"SPAN",{class:!0}),E(i).forEach(d),p.forEach(d),g=A(h),r=w(h,"P",{class:!0});var M=E(r);M.forEach(d),this.h()},h(){_(l,"class","text-base"),_(i,"class","flex-auto border-t-2 border-gray-100 dark:border-gray-700"),_(e,"class",o="flex items-center font-semibold space-x-3 text-base !mt-0 !mb-0 text-gray-800 rounded "+(a[0]===a[6]?$:"")),_(e,"id",u=`${a[6]}.returns`),_(r,"class","text-base")},m(h,p){N(h,e,p),m(e,l),m(l,t),m(e,s),c&&c.m(e,null),m(e,f),m(e,i),N(h,g,p),N(h,r,p),r.innerHTML=n},p(h,p){h[4]?c?c.p(h,p):(c=He(h),c.c(),c.m(e,f)):c&&(c.d(1),c=null),p&65&&o!==(o="flex items-center font-semibold space-x-3 text-base !mt-0 !mb-0 text-gray-800 rounded "+(h[0]===h[6]?$:""))&&_(e,"class",o),p&64&&u!==(u=`${h[6]}.returns`)&&_(e,"id",u),p&8&&n!==(n=(h[3]||"")+"")&&(r.innerHTML=n)},d(h){h&&d(e),c&&c.d(),h&&d(g),h&&d(r)}}}function He(a){let e,l;return{c(){e=new Ze,l=K(),this.h()},l(t){e=Fe(t),l=K(),this.h()},h(){e.a=l},m(t,s){e.m(a[4],t,s),N(t,l,s)},p(t,s){s&16&&e.p(t[4])},d(t){t&&d(l),t&&e.d()}}}function cl(a){let e,l,t,s=Me(a[7])+"",f,i,o,u,g,r,n,c,h,p,y,M,Y,j,F,S,b,R,q,O,le,X,re,oe;o=new Oe({});let T=a[5]&&we(a),Q=a[1],V=[];for(let v=0;v<Q.length;v+=1)V[v]=Ee(ke(a,Q,v));let D=a[4]&&ye(a),I=a[10]&&Le(a),H=!!a[8]&&Pe(a),z=a[2]&&Ae(a),B=!!a[4]&&Se(a);return{c(){e=k("div"),l=k("span"),t=new Ze,f=C(),i=k("a"),Xe(o.$$.fragment),g=C(),T&&T.c(),r=C(),n=k("p"),c=k("span"),h=G("("),p=C();for(let v=0;v<V.length;v+=1)V[v].c();y=C(),M=k("span"),Y=G(")"),j=C(),D&&D.c(),F=C(),S=k("div"),I&&I.c(),b=C(),H&&H.c(),R=C(),z&&z.c(),q=C(),B&&B.c(),this.h()},l(v){e=w(v,"DIV",{class:!0});var L=E(e);l=w(L,"SPAN",{class:!0,id:!0});var P=E(l);t=Fe(P),f=A(P),i=w(P,"A",{id:!0,class:!0,href:!0});var ee=E(i);Ye(o.$$.fragment,ee),ee.forEach(d),g=A(P),T&&T.l(P),P.forEach(d),r=A(L),n=w(L,"P",{class:!0});var U=E(n);c=w(U,"SPAN",{});var fe=E(c);h=x(fe,"("),fe.forEach(d),p=A(U);for(let ne=0;ne<V.length;ne+=1)V[ne].l(U);y=A(U),M=w(U,"SPAN",{});var ce=E(M);Y=x(ce,")"),ce.forEach(d),j=A(U),D&&D.l(U),U.forEach(d),F=A(L),S=w(L,"DIV",{class:!0});var W=E(S);I&&I.l(W),b=A(W),H&&H.l(W),R=A(W),z&&z.l(W),q=A(W),B&&B.l(W),W.forEach(d),L.forEach(d),this.h()},h(){t.a=f,_(i,"id",a[6]),_(i,"class","header-link invisible with-hover:group-hover:visible pr-2"),_(i,"href",u="#"+a[6]),_(l,"class","group flex space-x-1.5 items-center text-gray-800 bg-gradient-to-r rounded-tr-lg -mt-4 -ml-4 pt-3 px-2.5"),_(l,"id",a[6]),_(n,"class","font-mono text-xs md:text-sm !leading-relaxed !my-6"),_(S,"class",O="!mb-10 relative docstring-details "+(a[10]?"max-h-96 overflow-hidden":"")),_(e,"class",le="border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8 "+(a[0]===a[6]?$:""))},m(v,L){N(v,e,L),m(e,l),t.m(s,l),m(l,f),m(l,i),je(o,i,null),m(l,g),T&&T.m(l,null),m(e,r),m(e,n),m(n,c),m(c,h),m(n,p);for(let P=0;P<V.length;P+=1)V[P].m(n,null);m(n,y),m(n,M),m(M,Y),m(n,j),D&&D.m(n,null),m(e,F),m(e,S),I&&I.m(S,null),m(S,b),H&&H.m(S,null),m(S,R),z&&z.m(S,null),m(S,q),B&&B.m(S,null),a[17](S),X=!0,re||(oe=se(fl,"hashchange",a[13]),re=!0)},p(v,[L]){if((!X||L&128)&&s!==(s=Me(v[7])+"")&&t.p(s),(!X||L&64)&&_(i,"id",v[6]),(!X||L&64&&u!==(u="#"+v[6]))&&_(i,"href",u),v[5]?T?T.p(v,L):(T=we(v),T.c(),T.m(l,null)):T&&(T.d(1),T=null),(!X||L&64)&&_(l,"id",v[6]),L&6210){Q=v[1];let P;for(P=0;P<Q.length;P+=1){const ee=ke(v,Q,P);V[P]?V[P].p(ee,L):(V[P]=Ee(ee),V[P].c(),V[P].m(n,y))}for(;P<V.length;P+=1)V[P].d(1);V.length=Q.length}v[4]?D?D.p(v,L):(D=ye(v),D.c(),D.m(n,null)):D&&(D.d(1),D=null),v[10]?I?I.p(v,L):(I=Le(v),I.c(),I.m(S,b)):I&&(I.d(1),I=null),v[8]?H?(H.p(v,L),L&256&&Z(H,1)):(H=Pe(v),H.c(),Z(H,1),H.m(S,R)):H&&(Ue(),J(H,1,1,()=>{H=null}),We()),v[2]?z?z.p(v,L):(z=Ae(v),z.c(),z.m(S,q)):z&&(z.d(1),z=null),v[4]?B?B.p(v,L):(B=Se(v),B.c(),B.m(S,null)):B&&(B.d(1),B=null),(!X||L&1024&&O!==(O="!mb-10 relative docstring-details "+(v[10]?"max-h-96 overflow-hidden":"")))&&_(S,"class",O),(!X||L&65&&le!==(le="border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8 "+(v[0]===v[6]?$:"")))&&_(e,"class",le)},i(v){X||(Z(o.$$.fragment,v),Z(H),X=!0)},o(v){J(o.$$.fragment,v),J(H),X=!1},d(v){v&&d(e),qe(o),T&&T.d(),ie(V,v),D&&D.d(),I&&I.d(),H&&H.d(),z&&z.d(),B&&B.d(),a[17](null),re=!1,oe()}}}const $="bg-yellow-50 dark:bg-[#494a3d]";function Me(a){if(a.startsWith("class ")){const e=a.substring(6).split("."),l=e.pop();return`<h3 class="!m-0"><span class="flex-1 break-all md:text-lg bg-gradient-to-r px-2.5 py-1.5 rounded-xl from-indigo-50/70 to-white dark:from-gray-900 dark:to-gray-950 dark:text-indigo-300 text-indigo-700"><svg class="mr-1.5 text-indigo-500 inline-block -mt-0.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" width=".8em" height=".8em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path class="uim-quaternary" d="M20.23 7.24L12 12L3.77 7.24a1.98 1.98 0 0 1 .7-.71L11 2.76c.62-.35 1.38-.35 2 0l6.53 3.77c.29.173.531.418.7.71z" opacity=".25" fill="currentColor"></path><path class="uim-tertiary" d="M12 12v9.5a2.09 2.09 0 0 1-.91-.21L4.5 17.48a2.003 2.003 0 0 1-1-1.73v-7.5a2.06 2.06 0 0 1 .27-1.01L12 12z" opacity=".5" fill="currentColor"></path><path class="uim-primary" d="M20.5 8.25v7.5a2.003 2.003 0 0 1-1 1.73l-6.62 3.82c-.275.13-.576.198-.88.2V12l8.23-4.76c.175.308.268.656.27 1.01z" fill="currentColor"></path></svg><span class="font-light">class</span> <span class="font-medium">${e.join(".")}.</span><span class="font-semibold">${l}</span></span></h3>`}else return`<h4 class="!m-0"><span class="flex-1 rounded-xl py-0.5 break-all bg-gradient-to-r from-blue-50/60 to-white dark:from-gray-900 dark:to-gray-950 text-blue-700 dark:text-blue-300 font-medium px-2"><svg width="1em" height="1em" viewBox="0 0 32 33" class="mr-1 inline-block -mt-0.5"  xmlns="http://www.w3.org/2000/svg"><path d="M5.80566 18.3545C4.90766 17.4565 4.90766 16.0005 5.80566 15.1025L14.3768 6.53142C15.2748 5.63342 16.7307 5.63342 17.6287 6.53142L26.1999 15.1025C27.0979 16.0005 27.0979 17.4565 26.1999 18.3545L17.6287 26.9256C16.7307 27.8236 15.2748 27.8236 14.3768 26.9256L5.80566 18.3545Z" fill="currentColor" fill-opacity="0.25"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.4801 13.9619C16.4801 12.9761 16.7467 12.5436 16.9443 12.3296C17.1764 12.078 17.5731 11.8517 18.2275 11.707C18.8821 11.5623 19.638 11.5342 20.4038 11.5582C20.7804 11.57 21.1341 11.5932 21.4719 11.6156L21.5263 11.6193C21.8195 11.6389 22.1626 11.6618 22.4429 11.6618V7.40825C22.3209 7.40825 22.1219 7.39596 21.7544 7.37149C21.4202 7.34925 20.9976 7.32115 20.5371 7.30672C19.6286 7.27824 18.4672 7.29779 17.3093 7.55377C16.1512 7.8098 14.8404 8.33724 13.8181 9.4452C12.7612 10.5907 12.2266 12.1236 12.2266 13.9619V15.0127H10.6836V19.2662H12.2266V26.6332H16.4801V19.2662H20.3394V15.0127H16.4801V13.9619Z" fill="currentColor"/></svg>${a}</span></h4>`}function Te(a){const e=/\s*<p>(((?!<p>).)*)<\/p>\s*/gms;return a.replace(e,(l,t)=>`<span>${t}</span>`)}function ul(a,e,l){let{anchor:t}=e,{name:s}=e,{parameters:f=[]}=e,{parametersDescription:i}=e,{parameterGroups:o}=e,{returnDescription:u}=e,{returnType:g}=e,{source:r=void 0}=e,{hashlink:n}=e,c,h=!1;const p=(i==null?void 0:i.reduce((b,R)=>{const{name:q,description:O}=R;return pe(de({},b),{[q]:O})},{}))||{};tl(()=>{const{hash:b}=window.location;l(0,n=b.substring(1));const R=!!b&&(i==null?void 0:i.some(({anchor:q})=>q===n));l(10,h=!R&&c.clientHeight>500)});async function y(b,R){R&&(l(10,h=!1),await sl(),window.location.hash=b)}function M(){const{hash:b}=window.location;l(0,n=b.substring(1))}const Y=b=>y(`${t}.${b}`,!!p[b]),j=()=>y(`${t}.returns`,!!u),F=()=>l(10,h=!1);function S(b){rl[b?"unshift":"push"](()=>{c=b,l(9,c)})}return a.$$set=b=>{"anchor"in b&&l(6,t=b.anchor),"name"in b&&l(7,s=b.name),"parameters"in b&&l(1,f=b.parameters),"parametersDescription"in b&&l(8,i=b.parametersDescription),"parameterGroups"in b&&l(2,o=b.parameterGroups),"returnDescription"in b&&l(3,u=b.returnDescription),"returnType"in b&&l(4,g=b.returnType),"source"in b&&l(5,r=b.source),"hashlink"in b&&l(0,n=b.hashlink)},[n,f,o,u,g,r,t,s,i,c,h,p,y,M,Y,j,F,S]}class ml extends Ve{constructor(e){super();De(this,e,ul,cl,Ie,{anchor:6,name:7,parameters:1,parametersDescription:8,parameterGroups:2,returnDescription:3,returnType:4,source:5,hashlink:0})}}export{ml as D};
