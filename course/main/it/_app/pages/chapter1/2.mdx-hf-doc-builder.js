import{S as wa,i as ya,s as Sa,e as t,k as m,w as ge,t as r,M as Ca,c as o,d as i,m as u,a as n,x as he,h as s,b as p,G as a,g as c,y as ve,L as Aa,q as ze,o as _e,B as Ee,v as qa}from"../../chunks/vendor-hf-doc-builder.js";import{I as oa}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as Ia}from"../../chunks/CourseFloatingBanner-hf-doc-builder.js";import"../../chunks/DocNotebookDropdown-hf-doc-builder.js";function ka(na){let g,Y,h,_,T,w,Pe,x,$e,Z,y,ee,E,Le,H,Ne,be,ae,v,P,O,S,we,R,ye,ie,$,Se,B,Ce,Ae,te,A,qe,oe,d,L,D,Ie,ke,U,Me,Ge,Te,q,F,xe,He,Oe,I,J,Re,Be,De,k,j,Ue,Fe,Je,M,K,je,Ke,ne,N,Qe,Q,Ve,We,re,z,b,V,C,Xe,W,Ye,se,G,Ze,le;return w=new oa({}),y=new Ia({props:{chapter:1,classNames:"absolute z-10 right-0 top-0"}}),S=new oa({}),C=new oa({}),{c(){g=t("meta"),Y=m(),h=t("h1"),_=t("a"),T=t("span"),ge(w.$$.fragment),Pe=m(),x=t("span"),$e=r("Natural Language Processing"),Z=m(),ge(y.$$.fragment),ee=m(),E=t("p"),Le=r("Prima di tuffarci nei modelli Transformer, diamo un\u2019occhiata rapida alla natura del natural language processing ("),H=t("em"),Ne=r("elaborazione del linguaggio naturale"),be=r(") e alle ragioni per cui quest\u2019ultimo ci interessa."),ae=m(),v=t("h2"),P=t("a"),O=t("span"),ge(S.$$.fragment),we=m(),R=t("span"),ye=r("Cosa intendiamo per NLP?"),ie=m(),$=t("p"),Se=r("NLP \xE8 un campo di linguistica e machine learning ("),B=t("em"),Ce=r("apprendimento automatico"),Ae=r(") che si focalizza sulla comprensione di tutto ci\xF2 che \xE8 legato al linguaggio umano. L\u2019obiettivo dei compiti di NLP non \xE8 semplicemente di capire singole parole individualmente, ma anche di capirne il contesto."),te=m(),A=t("p"),qe=r("La seguente \xE8 una lista dei pi\xF9 comuni compiti di NLP, ognuno accompagnato da esempi:"),oe=m(),d=t("ul"),L=t("li"),D=t("strong"),Ie=r("Classificazione di frasi intere"),ke=r(": Capire il tono di una recensione, comprendere se una mail si tratta di spam ("),U=t("em"),Me=r("spazzatura"),Ge=r("), determinare se una frase \xE8 grammaticalmente corretta oppure se due frasi hanno un legame logico"),Te=m(),q=t("li"),F=t("strong"),xe=r("Classificazione di parole singole all\u2019interno di una frase"),He=r(": Identificazione dei componenti grammaticali di una frase (nome, verbo, aggettivo), o di entit\xE0 denominate (persona, localit\xE0, organizzazione)"),Oe=m(),I=t("li"),J=t("strong"),Re=r("Generazione di contenuto testuale"),Be=r(": Completare un prompt a mezzo di testo auto-generato, colmare spazi vuoti in un testo con parole mascherate"),De=m(),k=t("li"),j=t("strong"),Ue=r("Estrazione di risposte a partire da un testo"),Fe=r(": Dati una domanda e un contesto, estrarre la risposta alla domanda sulla base del contesto fornito"),Je=m(),M=t("li"),K=t("strong"),je=r("Generazione di frasi nuove a partire da un testo input"),Ke=r(": Traduzione di un testo in un\u2019altra lingua, riassunto di un testo"),ne=m(),N=t("p"),Qe=r("NLP non si limita per\xF2 ai soli testi scritti, e tratta anche sfide complesse in riconoscimento vocale e computer vision ("),Q=t("em"),Ve=r("elaborazione di dati visuali"),We=r("), quali la generazione di trascrizioni di campioni audio o la descrizione di immagini."),re=m(),z=t("h2"),b=t("a"),V=t("span"),ge(C.$$.fragment),Xe=m(),W=t("span"),Ye=r("Perch\xE9 costituisce una sfida?"),se=m(),G=t("p"),Ze=r("I computer non elaborano le informazioni allo stesso modo degli umani. Ad esempio, quando leggiamo la frase \u201CHo fame,\u201D ne capiamo senza difficolt\xE0 il senso. Allo stesso modo, date due frasi quali \u201CHo fame\u201D e \u201CSono triste,\u201D riusciamo facilmente a determinarne il livello di similarit\xE0. Per i modelli di machine learning (ML), tali compiti sono pi\xF9 difficili. Il testo deve essere elaborato in un modo che permetta al modello di imparare da esso. E siccome il linguaggio \xE8 complesso, il modo in cui l\u2019elaborazione va svolta dev\u2019essere studiato con cura. Molta ricerca \xE8 stata fatta su come rappresentare i testi, e nel prossimo capitolo vedremo alcuni di questi metodi."),this.h()},l(e){const l=Ca('[data-svelte="svelte-1phssyn"]',document.head);g=o(l,"META",{name:!0,content:!0}),l.forEach(i),Y=u(e),h=o(e,"H1",{class:!0});var ce=n(h);_=o(ce,"A",{id:!0,class:!0,href:!0});var ra=n(_);T=o(ra,"SPAN",{});var sa=n(T);he(w.$$.fragment,sa),sa.forEach(i),ra.forEach(i),Pe=u(ce),x=o(ce,"SPAN",{});var la=n(x);$e=s(la,"Natural Language Processing"),la.forEach(i),ce.forEach(i),Z=u(e),he(y.$$.fragment,e),ee=u(e),E=o(e,"P",{});var me=n(E);Le=s(me,"Prima di tuffarci nei modelli Transformer, diamo un\u2019occhiata rapida alla natura del natural language processing ("),H=o(me,"EM",{});var ca=n(H);Ne=s(ca,"elaborazione del linguaggio naturale"),ca.forEach(i),be=s(me,") e alle ragioni per cui quest\u2019ultimo ci interessa."),me.forEach(i),ae=u(e),v=o(e,"H2",{class:!0});var ue=n(v);P=o(ue,"A",{id:!0,class:!0,href:!0});var ma=n(P);O=o(ma,"SPAN",{});var ua=n(O);he(S.$$.fragment,ua),ua.forEach(i),ma.forEach(i),we=u(ue),R=o(ue,"SPAN",{});var da=n(R);ye=s(da,"Cosa intendiamo per NLP?"),da.forEach(i),ue.forEach(i),ie=u(e),$=o(e,"P",{});var de=n($);Se=s(de,"NLP \xE8 un campo di linguistica e machine learning ("),B=o(de,"EM",{});var pa=n(B);Ce=s(pa,"apprendimento automatico"),pa.forEach(i),Ae=s(de,") che si focalizza sulla comprensione di tutto ci\xF2 che \xE8 legato al linguaggio umano. L\u2019obiettivo dei compiti di NLP non \xE8 semplicemente di capire singole parole individualmente, ma anche di capirne il contesto."),de.forEach(i),te=u(e),A=o(e,"P",{});var fa=n(A);qe=s(fa,"La seguente \xE8 una lista dei pi\xF9 comuni compiti di NLP, ognuno accompagnato da esempi:"),fa.forEach(i),oe=u(e),d=o(e,"UL",{});var f=n(d);L=o(f,"LI",{});var X=n(L);D=o(X,"STRONG",{});var ga=n(D);Ie=s(ga,"Classificazione di frasi intere"),ga.forEach(i),ke=s(X,": Capire il tono di una recensione, comprendere se una mail si tratta di spam ("),U=o(X,"EM",{});var ha=n(U);Me=s(ha,"spazzatura"),ha.forEach(i),Ge=s(X,"), determinare se una frase \xE8 grammaticalmente corretta oppure se due frasi hanno un legame logico"),X.forEach(i),Te=u(f),q=o(f,"LI",{});var ea=n(q);F=o(ea,"STRONG",{});var va=n(F);xe=s(va,"Classificazione di parole singole all\u2019interno di una frase"),va.forEach(i),He=s(ea,": Identificazione dei componenti grammaticali di una frase (nome, verbo, aggettivo), o di entit\xE0 denominate (persona, localit\xE0, organizzazione)"),ea.forEach(i),Oe=u(f),I=o(f,"LI",{});var aa=n(I);J=o(aa,"STRONG",{});var za=n(J);Re=s(za,"Generazione di contenuto testuale"),za.forEach(i),Be=s(aa,": Completare un prompt a mezzo di testo auto-generato, colmare spazi vuoti in un testo con parole mascherate"),aa.forEach(i),De=u(f),k=o(f,"LI",{});var ia=n(k);j=o(ia,"STRONG",{});var _a=n(j);Ue=s(_a,"Estrazione di risposte a partire da un testo"),_a.forEach(i),Fe=s(ia,": Dati una domanda e un contesto, estrarre la risposta alla domanda sulla base del contesto fornito"),ia.forEach(i),Je=u(f),M=o(f,"LI",{});var ta=n(M);K=o(ta,"STRONG",{});var Ea=n(K);je=s(Ea,"Generazione di frasi nuove a partire da un testo input"),Ea.forEach(i),Ke=s(ta,": Traduzione di un testo in un\u2019altra lingua, riassunto di un testo"),ta.forEach(i),f.forEach(i),ne=u(e),N=o(e,"P",{});var pe=n(N);Qe=s(pe,"NLP non si limita per\xF2 ai soli testi scritti, e tratta anche sfide complesse in riconoscimento vocale e computer vision ("),Q=o(pe,"EM",{});var Pa=n(Q);Ve=s(Pa,"elaborazione di dati visuali"),Pa.forEach(i),We=s(pe,"), quali la generazione di trascrizioni di campioni audio o la descrizione di immagini."),pe.forEach(i),re=u(e),z=o(e,"H2",{class:!0});var fe=n(z);b=o(fe,"A",{id:!0,class:!0,href:!0});var $a=n(b);V=o($a,"SPAN",{});var La=n(V);he(C.$$.fragment,La),La.forEach(i),$a.forEach(i),Xe=u(fe),W=o(fe,"SPAN",{});var Na=n(W);Ye=s(Na,"Perch\xE9 costituisce una sfida?"),Na.forEach(i),fe.forEach(i),se=u(e),G=o(e,"P",{});var ba=n(G);Ze=s(ba,"I computer non elaborano le informazioni allo stesso modo degli umani. Ad esempio, quando leggiamo la frase \u201CHo fame,\u201D ne capiamo senza difficolt\xE0 il senso. Allo stesso modo, date due frasi quali \u201CHo fame\u201D e \u201CSono triste,\u201D riusciamo facilmente a determinarne il livello di similarit\xE0. Per i modelli di machine learning (ML), tali compiti sono pi\xF9 difficili. Il testo deve essere elaborato in un modo che permetta al modello di imparare da esso. E siccome il linguaggio \xE8 complesso, il modo in cui l\u2019elaborazione va svolta dev\u2019essere studiato con cura. Molta ricerca \xE8 stata fatta su come rappresentare i testi, e nel prossimo capitolo vedremo alcuni di questi metodi."),ba.forEach(i),this.h()},h(){p(g,"name","hf:doc:metadata"),p(g,"content",JSON.stringify(Ma)),p(_,"id","natural-language-processing"),p(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(_,"href","#natural-language-processing"),p(h,"class","relative group"),p(P,"id","cosa-intendiamo-per-nlp"),p(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(P,"href","#cosa-intendiamo-per-nlp"),p(v,"class","relative group"),p(b,"id","perch-costituisce-una-sfida"),p(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(b,"href","#perch-costituisce-una-sfida"),p(z,"class","relative group")},m(e,l){a(document.head,g),c(e,Y,l),c(e,h,l),a(h,_),a(_,T),ve(w,T,null),a(h,Pe),a(h,x),a(x,$e),c(e,Z,l),ve(y,e,l),c(e,ee,l),c(e,E,l),a(E,Le),a(E,H),a(H,Ne),a(E,be),c(e,ae,l),c(e,v,l),a(v,P),a(P,O),ve(S,O,null),a(v,we),a(v,R),a(R,ye),c(e,ie,l),c(e,$,l),a($,Se),a($,B),a(B,Ce),a($,Ae),c(e,te,l),c(e,A,l),a(A,qe),c(e,oe,l),c(e,d,l),a(d,L),a(L,D),a(D,Ie),a(L,ke),a(L,U),a(U,Me),a(L,Ge),a(d,Te),a(d,q),a(q,F),a(F,xe),a(q,He),a(d,Oe),a(d,I),a(I,J),a(J,Re),a(I,Be),a(d,De),a(d,k),a(k,j),a(j,Ue),a(k,Fe),a(d,Je),a(d,M),a(M,K),a(K,je),a(M,Ke),c(e,ne,l),c(e,N,l),a(N,Qe),a(N,Q),a(Q,Ve),a(N,We),c(e,re,l),c(e,z,l),a(z,b),a(b,V),ve(C,V,null),a(z,Xe),a(z,W),a(W,Ye),c(e,se,l),c(e,G,l),a(G,Ze),le=!0},p:Aa,i(e){le||(ze(w.$$.fragment,e),ze(y.$$.fragment,e),ze(S.$$.fragment,e),ze(C.$$.fragment,e),le=!0)},o(e){_e(w.$$.fragment,e),_e(y.$$.fragment,e),_e(S.$$.fragment,e),_e(C.$$.fragment,e),le=!1},d(e){i(g),e&&i(Y),e&&i(h),Ee(w),e&&i(Z),Ee(y,e),e&&i(ee),e&&i(E),e&&i(ae),e&&i(v),Ee(S),e&&i(ie),e&&i($),e&&i(te),e&&i(A),e&&i(oe),e&&i(d),e&&i(ne),e&&i(N),e&&i(re),e&&i(z),Ee(C),e&&i(se),e&&i(G)}}}const Ma={local:"natural-language-processing",sections:[{local:"cosa-intendiamo-per-nlp",title:"Cosa intendiamo per NLP?"},{local:"perch-costituisce-una-sfida",title:"Perch\xE9 costituisce una sfida?"}],title:"Natural Language Processing"};function Ga(na){return qa(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ra extends wa{constructor(g){super();ya(this,g,Ga,ka,Sa,{})}}export{Ra as default,Ma as metadata};
