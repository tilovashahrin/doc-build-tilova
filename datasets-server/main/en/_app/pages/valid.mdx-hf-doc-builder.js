import{S as Me,i as Ue,s as Be,F as Xe,e as m,c as $,a as g,d as n,b as w,g as h,H as Fe,I as ze,J as Ke,q as b,o as q,k as j,w as E,t as u,M as Qe,m as k,x as T,h as c,G as o,y as P,B as A,v as We,L as ie}from"../chunks/vendor-hf-doc-builder.js";import{I as Ye,C as Q}from"../chunks/CodeBlock-hf-doc-builder.js";import{I as Ze,M as Ie}from"../chunks/InferenceApi-hf-doc-builder.js";function et(i){let t,r;const e=i[3].default,a=Xe(e,i,i[2],null);return{c(){t=m("div"),a&&a.c(),this.h()},l(l){t=$(l,"DIV",{class:!0});var d=g(t);a&&a.l(d),d.forEach(n),this.h()},h(){w(t,"class","course-tip "+(i[0]==="orange"?"course-tip-orange":"")+" bg-gradient-to-br dark:bg-gradient-to-r before:border-"+i[0]+"-500 dark:before:border-"+i[0]+"-800 from-"+i[0]+"-50 dark:from-gray-900 to-white dark:to-gray-950 border border-"+i[0]+"-50 text-"+i[0]+"-700 dark:text-gray-400")},m(l,d){h(l,t,d),a&&a.m(t,null),r=!0},p(l,[d]){a&&a.p&&(!r||d&4)&&Fe(a,e,l,l[2],r?Ke(e,l[2],d,null):ze(l[2]),null)},i(l){r||(b(a,l),r=!0)},o(l){q(a,l),r=!1},d(l){l&&n(t),a&&a.d(l)}}}function tt(i,t,r){let{$$slots:e={},$$scope:a}=t,{warning:l=!1}=t;const d=l?"orange":"green";return i.$$set=v=>{"warning"in v&&r(1,l=v.warning),"$$scope"in v&&r(2,a=v.$$scope)},[d,l,a,e]}class st extends Me{constructor(t){super();Ue(this,t,tt,et,Be,{warning:1})}}function at(i){let t,r=" ",e,a,l,d,v;return{c(){t=u("Currently, only the"),e=u(r),a=j(),l=m("a"),d=u("streamable"),v=u(` datasets
  are supported, to allow extracting the 100 first rows without downloading the
  whole dataset.`),this.h()},l(f){t=c(f,"Currently, only the"),e=c(f,r),a=k(f),l=$(f,"A",{href:!0});var y=g(l);d=c(y,"streamable"),y.forEach(n),v=c(f,` datasets
  are supported, to allow extracting the 100 first rows without downloading the
  whole dataset.`),this.h()},h(){w(l,"href","https://huggingface.co/docs/datasets/stream")},m(f,y){h(f,t,y),h(f,e,y),h(f,a,y),h(f,l,y),o(l,d),h(f,v,y)},p:ie,d(f){f&&n(t),f&&n(e),f&&n(a),f&&n(l),f&&n(v)}}}function rt(i){let t,r;return t=new Q({props:{code:`import requests
API_URL = "https://datasets-server.huggingface.co/valid"
def query():
    response = requests.request("GET", API_URL)
    return response.json()
data = query()`,highlighted:`<span class="hljs-keyword">import</span> requests
API_URL = <span class="hljs-string">&quot;https://datasets-server.huggingface.co/valid&quot;</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">query</span>():
    response = requests.request(<span class="hljs-string">&quot;GET&quot;</span>, API_URL)
    <span class="hljs-keyword">return</span> response.json()
data = query()`}}),{c(){E(t.$$.fragment)},l(e){T(t.$$.fragment,e)},m(e,a){P(t,e,a),r=!0},p:ie,i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){q(t.$$.fragment,e),r=!1},d(e){A(t,e)}}}function nt(i){let t,r;return t=new Ie({props:{$$slots:{default:[rt]},$$scope:{ctx:i}}}),{c(){E(t.$$.fragment)},l(e){T(t.$$.fragment,e)},m(e,a){P(t,e,a),r=!0},p(e,a){const l={};a&2&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){q(t.$$.fragment,e),r=!1},d(e){A(t,e)}}}function lt(i){let t,r;return t=new Q({props:{code:`import fetch from "node-fetch";
async function query(data) {
    const response = await fetch(
        "https://datasets-server.huggingface.co/valid",
        {
            method: "GET"
        }
    );
    const result = await response.json();
    return result;
}
query().then((response) => {
    console.log(JSON.stringify(response));
});`,highlighted:`<span class="hljs-keyword">import</span> fetch <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;node-fetch&quot;</span>;
<span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">query</span>(<span class="hljs-params">data</span>) {
    <span class="hljs-keyword">const</span> response = <span class="hljs-keyword">await</span> <span class="hljs-title function_">fetch</span>(
        <span class="hljs-string">&quot;https://datasets-server.huggingface.co/valid&quot;</span>,
        {
            <span class="hljs-attr">method</span>: <span class="hljs-string">&quot;GET&quot;</span>
        }
    );
    <span class="hljs-keyword">const</span> result = <span class="hljs-keyword">await</span> response.<span class="hljs-title function_">json</span>();
    <span class="hljs-keyword">return</span> result;
}
<span class="hljs-title function_">query</span>().<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">response</span>) =&gt;</span> {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(response));
});`}}),{c(){E(t.$$.fragment)},l(e){T(t.$$.fragment,e)},m(e,a){P(t,e,a),r=!0},p:ie,i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){q(t.$$.fragment,e),r=!1},d(e){A(t,e)}}}function ot(i){let t,r;return t=new Ie({props:{$$slots:{default:[lt]},$$scope:{ctx:i}}}),{c(){E(t.$$.fragment)},l(e){T(t.$$.fragment,e)},m(e,a){P(t,e,a),r=!0},p(e,a){const l={};a&2&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){q(t.$$.fragment,e),r=!1},d(e){A(t,e)}}}function pt(i){let t,r;return t=new Q({props:{code:`curl https://datasets-server.huggingface.co/valid \\
        -X GET`,highlighted:`curl https://datasets-<span class="hljs-keyword">server</span>.huggingface.co/<span class="hljs-keyword">valid</span> \\
        -X <span class="hljs-keyword">GET</span>`}}),{c(){E(t.$$.fragment)},l(e){T(t.$$.fragment,e)},m(e,a){P(t,e,a),r=!0},p:ie,i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){q(t.$$.fragment,e),r=!1},d(e){A(t,e)}}}function it(i){let t,r;return t=new Ie({props:{$$slots:{default:[pt]},$$scope:{ctx:i}}}),{c(){E(t.$$.fragment)},l(e){T(t.$$.fragment,e)},m(e,a){P(t,e,a),r=!0},p(e,a){const l={};a&2&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){r||(b(t.$$.fragment,e),r=!0)},o(e){q(t.$$.fragment,e),r=!1},d(e){A(t,e)}}}function ut(i){let t,r,e,a,l,d,v,f,y,W,S,ue,G,ce,fe,Y,R,Z,x,he,X,de,me,F,$e,ge,ee,N,te,U,we,se,_,_e,O,ve,ye,L,je,ke,H,be,qe,J,Ee,Te,ae,C,re,D,Pe,z,Ae,xe,ne,V,le;return d=new Ye({}),R=new st({props:{warning:!0,$$slots:{default:[at]},$$scope:{ctx:i}}}),N=new Q({props:{code:"https://datasets-server.huggingface.co/valid",highlighted:'https:<span class="hljs-regexp">//</span>datasets-server.huggingface.co/valid'}}),C=new Ze({props:{python:!0,js:!0,curl:!0,$$slots:{curl:[it],js:[ot],python:[nt]},$$scope:{ctx:i}}}),V=new Q({props:{code:`{
  "valid": [
    "0n1xus/codexglue",
    "0n1xus/pytorrent-standalone",
    "0x7194633/rupile",
    "51la5/keyword-extraction",
    ...
  ]
}`,highlighted:`<span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;valid&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
    <span class="hljs-string">&quot;0n1xus/codexglue&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-string">&quot;0n1xus/pytorrent-standalone&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-string">&quot;0x7194633/rupile&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-string">&quot;51la5/keyword-extraction&quot;</span><span class="hljs-punctuation">,</span>
    ...
  <span class="hljs-punctuation">]</span>
<span class="hljs-punctuation">}</span>`}}),{c(){t=m("meta"),r=j(),e=m("h1"),a=m("a"),l=m("span"),E(d.$$.fragment),v=j(),f=m("span"),y=u("Valid datasets"),W=j(),S=m("p"),ue=u("Some Hub repositories cannot be loaded with the "),G=m("a"),ce=u("\u{1F917} Datasets"),fe=u(" library, for example because the data has still to be uploaded, or the format is not supported. The API endpoints will return an error for such datasets."),Y=j(),E(R.$$.fragment),Z=j(),x=m("p"),he=u("The "),X=m("code"),de=u("/valid"),me=u(" endpoint gives the "),F=m("strong"),$e=u("list of the Hub datasets"),ge=u(" that work without an error."),ee=j(),E(N.$$.fragment),te=j(),U=m("p"),we=u("The endpoint takes no query parameters."),se=j(),_=m("p"),_e=u("Try it in your "),O=m("a"),ve=u("browser"),ye=u(", with "),L=m("a"),je=u("Postman"),ke=u(", with "),H=m("a"),be=u("RapidAPI"),qe=u(", with "),J=m("a"),Ee=u("ReDoc"),Te=u(", or programmatically:"),ae=j(),E(C.$$.fragment),re=j(),D=m("p"),Pe=u("The response is a JSON. The list of names of the valid datasets is nested under the "),z=m("code"),Ae=u("valid"),xe=u(" key:"),ne=j(),E(V.$$.fragment),this.h()},l(s){const p=Qe('[data-svelte="svelte-1phssyn"]',document.head);t=$(p,"META",{name:!0,content:!0}),p.forEach(n),r=k(s),e=$(s,"H1",{class:!0});var M=g(e);a=$(M,"A",{id:!0,class:!0,href:!0});var K=g(a);l=$(K,"SPAN",{});var Se=g(l);T(d.$$.fragment,Se),Se.forEach(n),K.forEach(n),v=k(M),f=$(M,"SPAN",{});var Re=g(f);y=c(Re,"Valid datasets"),Re.forEach(n),M.forEach(n),W=k(s),S=$(s,"P",{});var oe=g(S);ue=c(oe,"Some Hub repositories cannot be loaded with the "),G=$(oe,"A",{href:!0,rel:!0});var Ce=g(G);ce=c(Ce,"\u{1F917} Datasets"),Ce.forEach(n),fe=c(oe," library, for example because the data has still to be uploaded, or the format is not supported. The API endpoints will return an error for such datasets."),oe.forEach(n),Y=k(s),T(R.$$.fragment,s),Z=k(s),x=$(s,"P",{});var B=g(x);he=c(B,"The "),X=$(B,"CODE",{});var De=g(X);de=c(De,"/valid"),De.forEach(n),me=c(B," endpoint gives the "),F=$(B,"STRONG",{});var Ge=g(F);$e=c(Ge,"list of the Hub datasets"),Ge.forEach(n),ge=c(B," that work without an error."),B.forEach(n),ee=k(s),T(N.$$.fragment,s),te=k(s),U=$(s,"P",{});var Ne=g(U);we=c(Ne,"The endpoint takes no query parameters."),Ne.forEach(n),se=k(s),_=$(s,"P",{});var I=g(_);_e=c(I,"Try it in your "),O=$(I,"A",{href:!0,rel:!0});var Oe=g(O);ve=c(Oe,"browser"),Oe.forEach(n),ye=c(I,", with "),L=$(I,"A",{href:!0,rel:!0});var Le=g(L);je=c(Le,"Postman"),Le.forEach(n),ke=c(I,", with "),H=$(I,"A",{href:!0,rel:!0});var He=g(H);be=c(He,"RapidAPI"),He.forEach(n),qe=c(I,", with "),J=$(I,"A",{href:!0,rel:!0});var Je=g(J);Ee=c(Je,"ReDoc"),Je.forEach(n),Te=c(I,", or programmatically:"),I.forEach(n),ae=k(s),T(C.$$.fragment,s),re=k(s),D=$(s,"P",{});var pe=g(D);Pe=c(pe,"The response is a JSON. The list of names of the valid datasets is nested under the "),z=$(pe,"CODE",{});var Ve=g(z);Ae=c(Ve,"valid"),Ve.forEach(n),xe=c(pe," key:"),pe.forEach(n),ne=k(s),T(V.$$.fragment,s),this.h()},h(){w(t,"name","hf:doc:metadata"),w(t,"content",JSON.stringify(ct)),w(a,"id","valid-datasets"),w(a,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(a,"href","#valid-datasets"),w(e,"class","relative group"),w(G,"href","https://github.com/huggingface/datasets"),w(G,"rel","nofollow"),w(O,"href","https://datasets-server.huggingface.co/valid"),w(O,"rel","nofollow"),w(L,"href","https://www.postman.com/huggingface/workspace/hugging-face-apis/request/23242779-17b761d0-b2b8-4638-a4f7-73be9049c324"),w(L,"rel","nofollow"),w(H,"href","https://rapidapi.com/hugging-face-hugging-face-default/api/hugging-face-datasets-api"),w(H,"rel","nofollow"),w(J,"href","https://redocly.github.io/redoc/?url=https://datasets-server.huggingface.co/openapi.json#operation/listValidDatasets"),w(J,"rel","nofollow")},m(s,p){o(document.head,t),h(s,r,p),h(s,e,p),o(e,a),o(a,l),P(d,l,null),o(e,v),o(e,f),o(f,y),h(s,W,p),h(s,S,p),o(S,ue),o(S,G),o(G,ce),o(S,fe),h(s,Y,p),P(R,s,p),h(s,Z,p),h(s,x,p),o(x,he),o(x,X),o(X,de),o(x,me),o(x,F),o(F,$e),o(x,ge),h(s,ee,p),P(N,s,p),h(s,te,p),h(s,U,p),o(U,we),h(s,se,p),h(s,_,p),o(_,_e),o(_,O),o(O,ve),o(_,ye),o(_,L),o(L,je),o(_,ke),o(_,H),o(H,be),o(_,qe),o(_,J),o(J,Ee),o(_,Te),h(s,ae,p),P(C,s,p),h(s,re,p),h(s,D,p),o(D,Pe),o(D,z),o(z,Ae),o(D,xe),h(s,ne,p),P(V,s,p),le=!0},p(s,[p]){const M={};p&2&&(M.$$scope={dirty:p,ctx:s}),R.$set(M);const K={};p&2&&(K.$$scope={dirty:p,ctx:s}),C.$set(K)},i(s){le||(b(d.$$.fragment,s),b(R.$$.fragment,s),b(N.$$.fragment,s),b(C.$$.fragment,s),b(V.$$.fragment,s),le=!0)},o(s){q(d.$$.fragment,s),q(R.$$.fragment,s),q(N.$$.fragment,s),q(C.$$.fragment,s),q(V.$$.fragment,s),le=!1},d(s){n(t),s&&n(r),s&&n(e),A(d),s&&n(W),s&&n(S),s&&n(Y),A(R,s),s&&n(Z),s&&n(x),s&&n(ee),A(N,s),s&&n(te),s&&n(U),s&&n(se),s&&n(_),s&&n(ae),A(C,s),s&&n(re),s&&n(D),s&&n(ne),A(V,s)}}}const ct={local:"valid-datasets",title:"Valid datasets"};function ft(i){return We(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class $t extends Me{constructor(t){super();Ue(this,t,ft,ut,Be,{})}}export{$t as default,ct as metadata};
