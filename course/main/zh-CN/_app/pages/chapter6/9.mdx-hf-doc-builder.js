import{S as Z,i as g,s as tt,e as o,k as f,t as p,w as et,M as at,c as i,d as e,m,a as c,h as _,x as lt,b as J,G as a,g as u,y as st,L as rt,q as ot,o as it,B as nt,v as ft}from"../../chunks/vendor-hf-doc-builder.js";import{C as mt}from"../../chunks/CourseFloatingBanner-hf-doc-builder.js";function ct(O){let n,x,d,b,I,h,T,v,k,B,E,q,S,l,$,z,C,P,M,N,L,W,A,y,F,G,w,H,U;return h=new mt({props:{chapter:6,classNames:"absolute z-10 right-0 top-0"}}),{c(){n=o("meta"),x=f(),d=o("h1"),b=p("\u6807\u8BB0\u5668\uFF0C\u56DE\u987E\uFF01"),I=f(),et(h.$$.fragment),T=f(),v=o("p"),k=p("\u5B8C\u6210\u8FD9\u4E00\u7AE0\uFF0C\u8F9B\u82E6\u4E86\uFF01"),B=f(),E=o("p"),q=p("\u5728\u6DF1\u5165\u7814\u7A76\u6807\u8BB0\u5668\u4E4B\u540E\uFF0C\u60A8\u5E94\u8BE5\uFF1A"),S=f(),l=o("ul"),$=o("li"),z=p("\u80FD\u591F\u4F7F\u7528\u65E7\u7684\u6807\u8BB0\u5668\u4F5C\u4E3A\u6A21\u677F\u6765\u8BAD\u7EC3\u65B0\u7684\u6807\u8BB0\u5668"),C=f(),P=o("li"),M=p("\u4E86\u89E3\u5982\u4F55\u4F7F\u7528\u504F\u79FB\u91CF\u5C06\u6807\u8BB0\u7684\u4F4D\u7F6E\u6620\u5C04\u5230\u5176\u539F\u59CB\u6587\u672C\u8303\u56F4"),N=f(),L=o("li"),W=p("\u4E86\u89E3 BPE\u3001WordPiece \u548C Unigram \u4E4B\u95F4\u7684\u533A\u522B"),A=f(),y=o("li"),F=p("\u80FD\u591F\u6DF7\u5408\u548C\u5339\u914D \u{1F917} Tokenizers \u5E93\u63D0\u4F9B\u7684\u5757\u6765\u6784\u5EFA\u60A8\u81EA\u5DF1\u7684\u6807\u8BB0\u5668"),G=f(),w=o("li"),H=p("\u80FD\u591F\u5728 \u{1F917} Transformers \u5E93\u4E2D\u4F7F\u7528\u8BE5\u6807\u8BB0\u5668"),this.h()},l(t){const s=at('[data-svelte="svelte-1phssyn"]',document.head);n=i(s,"META",{name:!0,content:!0}),s.forEach(e),x=m(t),d=i(t,"H1",{id:!0});var R=c(d);b=_(R,"\u6807\u8BB0\u5668\uFF0C\u56DE\u987E\uFF01"),R.forEach(e),I=m(t),lt(h.$$.fragment,t),T=m(t),v=i(t,"P",{});var j=c(v);k=_(j,"\u5B8C\u6210\u8FD9\u4E00\u7AE0\uFF0C\u8F9B\u82E6\u4E86\uFF01"),j.forEach(e),B=m(t),E=i(t,"P",{});var D=c(E);q=_(D,"\u5728\u6DF1\u5165\u7814\u7A76\u6807\u8BB0\u5668\u4E4B\u540E\uFF0C\u60A8\u5E94\u8BE5\uFF1A"),D.forEach(e),S=m(t),l=i(t,"UL",{});var r=c(l);$=i(r,"LI",{});var K=c($);z=_(K,"\u80FD\u591F\u4F7F\u7528\u65E7\u7684\u6807\u8BB0\u5668\u4F5C\u4E3A\u6A21\u677F\u6765\u8BAD\u7EC3\u65B0\u7684\u6807\u8BB0\u5668"),K.forEach(e),C=m(r),P=i(r,"LI",{});var Q=c(P);M=_(Q,"\u4E86\u89E3\u5982\u4F55\u4F7F\u7528\u504F\u79FB\u91CF\u5C06\u6807\u8BB0\u7684\u4F4D\u7F6E\u6620\u5C04\u5230\u5176\u539F\u59CB\u6587\u672C\u8303\u56F4"),Q.forEach(e),N=m(r),L=i(r,"LI",{});var V=c(L);W=_(V,"\u4E86\u89E3 BPE\u3001WordPiece \u548C Unigram \u4E4B\u95F4\u7684\u533A\u522B"),V.forEach(e),A=m(r),y=i(r,"LI",{});var X=c(y);F=_(X,"\u80FD\u591F\u6DF7\u5408\u548C\u5339\u914D \u{1F917} Tokenizers \u5E93\u63D0\u4F9B\u7684\u5757\u6765\u6784\u5EFA\u60A8\u81EA\u5DF1\u7684\u6807\u8BB0\u5668"),X.forEach(e),G=m(r),w=i(r,"LI",{});var Y=c(w);H=_(Y,"\u80FD\u591F\u5728 \u{1F917} Transformers \u5E93\u4E2D\u4F7F\u7528\u8BE5\u6807\u8BB0\u5668"),Y.forEach(e),r.forEach(e),this.h()},h(){J(n,"name","hf:doc:metadata"),J(n,"content",JSON.stringify(ut)),J(d,"id","")},m(t,s){a(document.head,n),u(t,x,s),u(t,d,s),a(d,b),u(t,I,s),st(h,t,s),u(t,T,s),u(t,v,s),a(v,k),u(t,B,s),u(t,E,s),a(E,q),u(t,S,s),u(t,l,s),a(l,$),a($,z),a(l,C),a(l,P),a(P,M),a(l,N),a(l,L),a(L,W),a(l,A),a(l,y),a(y,F),a(l,G),a(l,w),a(w,H),U=!0},p:rt,i(t){U||(ot(h.$$.fragment,t),U=!0)},o(t){it(h.$$.fragment,t),U=!1},d(t){e(n),t&&e(x),t&&e(d),t&&e(I),nt(h,t),t&&e(T),t&&e(v),t&&e(B),t&&e(E),t&&e(S),t&&e(l)}}}const ut={local:"",title:"\u6807\u8BB0\u5668\uFF0C\u56DE\u987E\uFF01"};function pt(O){return ft(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ht extends Z{constructor(n){super();g(this,n,pt,ct,tt,{})}}export{ht as default,ut as metadata};
