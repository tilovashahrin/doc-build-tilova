import{S as b,i as C,s as B,e as m,w as E,k as M,c as p,a as _,x as k,d as h,m as T,b as v,g as q,J as g,y as w,P as f,q as D,o as H,B as I,Q as L}from"./vendor-9e2b328e.js";import{C as N}from"./CopyButton-4b97cbf7.js";function O(s){let e,n,a,u,i,r,d,l;return a=new N({props:{classNames:"transition duration-200 ease-in-out "+(s[2]&&"opacity-0"),label:"code excerpt",noText:!0,value:s[0]}}),{c(){e=m("div"),n=m("div"),E(a.$$.fragment),u=M(),i=m("pre"),this.h()},l(t){e=p(t,"DIV",{class:!0});var o=_(e);n=p(o,"DIV",{class:!0});var c=_(n);k(a.$$.fragment,c),c.forEach(h),u=T(o),i=p(o,"PRE",{});var y=_(i);y.forEach(h),o.forEach(h),this.h()},h(){v(n,"class","absolute top-2.5 right-4"),v(e,"class","code-block relative")},m(t,o){q(t,e,o),g(e,n),w(a,n,null),g(e,u),g(e,i),i.innerHTML=s[1],r=!0,d||(l=[f(e,"mouseover",s[3]),f(e,"focus",s[3]),f(e,"mouseout",s[4]),f(e,"blur",s[4])],d=!0)},p(t,[o]){const c={};o&4&&(c.classNames="transition duration-200 ease-in-out "+(t[2]&&"opacity-0")),o&1&&(c.value=t[0]),a.$set(c),(!r||o&2)&&(i.innerHTML=t[1])},i(t){r||(D(a.$$.fragment,t),r=!0)},o(t){H(a.$$.fragment,t),r=!1},d(t){t&&h(e),I(a),d=!1,L(l)}}}function P(s,e,n){let a=!0,{code:u=""}=e,{highlighted:i=""}=e;function r(){n(2,a=!1)}function d(){n(2,a=!0)}return s.$$set=l=>{"code"in l&&n(0,u=l.code),"highlighted"in l&&n(1,i=l.highlighted)},[u,i,a,r,d]}class J extends b{constructor(e){super();C(this,e,P,O,B,{code:0,highlighted:1})}}export{J as C};
