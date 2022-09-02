import{S as Yt,i as Zt,s as eo,e as a,k as d,w as h,t as u,M as io,c as t,d as i,m as p,a as o,x as v,h as c,b as n,G as l,g as s,y as z,L as lo,q as b,o as g,B as E,v as ao}from"../../chunks/vendor-hf-doc-builder.js";import{I as _}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as to}from"../../chunks/CodeBlock-hf-doc-builder.js";import{C as oo}from"../../chunks/CourseFloatingBanner-hf-doc-builder.js";import"../../chunks/DocNotebookDropdown-hf-doc-builder.js";function ro(xa){let w,zi,P,D,Le,Z,vl,He,zl,bi,ee,gi,be,bl,Ei,ge,gl,_i,x,El,De,_l,$l,$i,C,wl,ie,Pl,ql,wi,Ee,yl,Pi,m,xe,Al,kl,Ce,Il,Sl,Qe,Nl,Ml,Re,Ll,Hl,Fe,Dl,xl,Oe,Cl,Ql,je,Rl,qi,_e,Fl,yi,q,Q,Te,le,Ol,Ue,jl,Ai,$e,Tl,ki,y,R,Ge,ae,Ul,Be,Gl,Ii,we,Bl,Si,A,F,Ve,te,Vl,Je,Jl,Ni,O,Kl,Ke,Wl,Xl,Mi,k,j,We,oe,Yl,Xe,Zl,Li,Pe,ea,Hi,I,T,Ye,re,ia,Ze,la,Di,qe,aa,xi,S,U,ei,se,ta,ii,oa,Ci,ye,ra,Qi,N,G,li,ne,sa,ai,na,Ri,Ae,da,Fi,M,B,ti,de,ua,oi,pa,Oi,ke,ca,ji,$,ri,ue,si,ma,fa,ni,pe,di,ha,va,ui,ce,pi,za,Ti,V,ba,me,ga,Ea,Ui,L,J,ci,fe,_a,mi,$a,Gi,Ie,wa,Bi,H,K,fi,he,Pa,hi,qa,Vi,Se,ya,Ji,W,Aa,X,ka,vi,Ia,Sa,Ki,ve,Wi,Ne,Na,Xi,Y,Ma,ze,La,Ha,Yi;return Z=new _({}),ee=new oo({props:{chapter:4,classNames:"absolute z-10 right-0 top-0"}}),le=new _({}),ae=new _({}),te=new _({}),oe=new _({}),re=new _({}),se=new _({}),ne=new _({}),de=new _({}),fe=new _({}),he=new _({}),ve=new to({props:{code:`---
language: fr
license: mit
datasets:
- oscar
---`,highlighted:`<span class="hljs-meta">---</span>
<span class="hljs-attr">language:</span> <span class="hljs-string">fr</span>
<span class="hljs-attr">license:</span> <span class="hljs-string">mit</span>
<span class="hljs-attr">datasets:</span>
<span class="hljs-bullet">-</span> <span class="hljs-string">oscar</span>
<span class="hljs-meta">---</span>`}}),{c(){w=a("meta"),zi=d(),P=a("h1"),D=a("a"),Le=a("span"),h(Z.$$.fragment),vl=d(),He=a("span"),zl=u("Generare un cartellino del modello"),bi=d(),h(ee.$$.fragment),gi=d(),be=a("p"),bl=u("Il cartellino del modello (model card) \xE8 un file di importanza pari ai file del modello e del tokenizer in un repository. Contiene la definizione del modello, assicurando la possibilit\xE0 di riutilizzarlo e riprodurre i risultati da parte dei membri della comunit\xE0, e facendo si che il modello sia una piattaforma su cui gli altri membri possono costruire i loro artefatti."),Ei=d(),ge=a("p"),gl=u("Documentare il processo di addestramento e valutazione aiuta gli altri a capire cosa aspettarsi dal modello \u2014 inoltre, fornire informazioni accurate sui dati utilizzati e sulle operazioni di pre e post elaborazione (preprocessing e postprocessing), assicura che si possano identificare e comprenere le limitazioni, i bias, e i contesti in cui il modello \xE8 utile, e quelli in cui non lo \xE8."),_i=d(),x=a("p"),El=u("Per questo creare un cartellino del modello che descriva chiaramente il modello, \xE8 un passo estremamente importante. Qui, forniamo alcuni suggerimenti per farlo. Il cartellino del modello viene creato tramite il file "),De=a("em"),_l=u("README.md"),$l=u(", visto in precedenza, che \xE8 un file Markdown."),$i=d(),C=a("p"),wl=u("Il concetto del cartellino trae origine dalla ricerca svolta a Google, e pubblicata per la prima volta nell\u2019articolo "),ie=a("a"),Pl=u("\u201CModel Cards for Model Reporting\u201D"),ql=u(" di Margaret Mitchell et al. Molte informazioni contenute qui sono basate su quell\u2019artictolo, e raccomandiamo a tutti di leggerlo per capire l\u2019importanza del cartellino del modello in un mondo che valorizza la reproduzione, la riutilizzabilit\xE0 e l\u2019equit\xE0."),wi=d(),Ee=a("p"),yl=u("Il cartellino solitamente inizia con una breve introduzione, che descrive ad alto livello per quale scopo il modello \xE8 stato creato, ed \xE8 seguita da informazioni aggiuntive nelle sezioni seguenti:"),Pi=d(),m=a("ul"),xe=a("li"),Al=u("Descrizione del modello"),kl=d(),Ce=a("li"),Il=u("Usi previsti e limitazioni"),Sl=d(),Qe=a("li"),Nl=u("Istruzioni d\u2019uso"),Ml=d(),Re=a("li"),Ll=u("Limitazioni e bias"),Hl=d(),Fe=a("li"),Dl=u("Dati di addestramento"),xl=d(),Oe=a("li"),Cl=u("Procedura di addestramento"),Ql=d(),je=a("li"),Rl=u("Risultati della valutazione"),qi=d(),_e=a("p"),Fl=u("Approfondiamo ora i contenuti di ciascuna sezione."),yi=d(),q=a("h3"),Q=a("a"),Te=a("span"),h(le.$$.fragment),Ol=d(),Ue=a("span"),jl=u("Descrizione del modello"),Ai=d(),$e=a("p"),Tl=u("La descrizione del modello fornisce i dettagli di base. Questi includono l\u2019architettura, la versione, informazioni sull\u2019articolo scientifico in cui il modello \xE8 stato presentato (se disponibile), se sia disponibile una implementazione originale, l\u2019autore, ed altre informazioni di carattere generale. Qualsiasi copyright deve essere attribuito qui. Informazioni generali sulle procedure di addestramento, i parametri, ed anche dichiarazioni di non responsabilit\xE0 possono essere inserite in questa sezione."),ki=d(),y=a("h3"),R=a("a"),Ge=a("span"),h(ae.$$.fragment),Ul=d(),Be=a("span"),Gl=u("Usi previsti e limitazioni"),Ii=d(),we=a("p"),Bl=u("In questa sezione vengono descritti gli utilizzi per cui il modello \xE8 inteso, inclusi i linguaggi e i domini di applicazione del modello. Questa sezione del cartellino pu\xF3 anche descrivere situazioni che sono fuori dall\u2019ambito previsto del modello, o dove \xE9 probabile che il modello non funzioni in maniera ottimale."),Si=d(),A=a("h3"),F=a("a"),Ve=a("span"),h(te.$$.fragment),Vl=d(),Je=a("span"),Jl=u("Istruzioni d'uso"),Ni=d(),O=a("p"),Kl=u("Questa sezione dovrebbe includere alcuni esempi che mostrino come usare il modello. Questi esempi possono includere l\u2019utilizzo attraverso la funzione "),Ke=a("code"),Wl=u("pipeline()"),Xl=u(", l\u2019utilizzo delle classi modello e tokenizer, e qualsiasi altro esempio di codice che possa essere utile."),Mi=d(),k=a("h3"),j=a("a"),We=a("span"),h(oe.$$.fragment),Yl=d(),Xe=a("span"),Zl=u("Dati di addestramento"),Li=d(),Pe=a("p"),ea=u("Questa parte dovrebbe indicare su quali dataset il modello \xE8 stato addestrato. \xC8 anche consigliabile aggiungere una breve descrizione dei dataset."),Hi=d(),I=a("h3"),T=a("a"),Ye=a("span"),h(re.$$.fragment),ia=d(),Ze=a("span"),la=u("Procedura di addestramento"),Di=d(),qe=a("p"),aa=u("In questa sezione dovreste descrivere tutti i dettagli del processo di addestramento rilevanti dal punto di vista della riproducibilit\xE1."),xi=d(),S=a("h3"),U=a("a"),ei=a("span"),h(se.$$.fragment),ta=d(),ii=a("span"),oa=u("Variabili e metriche di valutazione"),Ci=d(),ye=a("p"),ra=u("In questa sezione \xE9 opportuno descrivere le metriche utilizzate per la valutazione e differenti fattori che vengono misurati. Riportare quali metriche ssono state usate, e su quali dataset e relative partizioni (dataset split), rende facile comparare le performance del proprio modello con gli altri. Le informazioni in questa sezione dovrebbero coprire i casi d\u2019uso riportati nelle sezioni precedenti."),Qi=d(),N=a("h3"),G=a("a"),li=a("span"),h(ne.$$.fragment),sa=d(),ai=a("span"),na=u("Risultati della valutazione"),Ri=d(),Ae=a("p"),da=u("Per finire, si dovrebbero riportare i risultati della valutazione di come si comporta il modello sul dataset di valutazione. Se il modello utilizza una soglia di decisione (decision threshold), \xE8 opportuno riportare o la soglia di decisione utilizzata nella fase di valutazione, o riportare i risultati per differenti soglie di decisione per gli usi previsti."),Fi=d(),M=a("h2"),B=a("a"),ti=a("span"),h(de.$$.fragment),ua=d(),oi=a("span"),pa=u("Esempio"),Oi=d(),ke=a("p"),ca=u("Consigliamo di guardare i seguenti esempi di cartellini ben curati:"),ji=d(),$=a("ul"),ri=a("li"),ue=a("a"),si=a("code"),ma=u("bert-base-cased"),fa=d(),ni=a("li"),pe=a("a"),di=a("code"),ha=u("gpt2"),va=d(),ui=a("li"),ce=a("a"),pi=a("code"),za=u("distilbert"),Ti=d(),V=a("p"),ba=u("Esempi aggiuntivi, da parte di altre organizzazioni e compagnie, sono disponibili "),me=a("a"),ga=u("qui"),Ea=u("."),Ui=d(),L=a("h2"),J=a("a"),ci=a("span"),h(fe.$$.fragment),_a=d(),mi=a("span"),$a=u("Nota"),Gi=d(),Ie=a("p"),wa=u("Includere il cartellino del modello non \xE8 un requisito obbligatorio durante la pubblicazione di un modello, e inoltre non \xE8 necessario includere tutte le sezioni elencate in precedenza quando si crea un cartellino. Tuttavia, una documentazione esplicita del modello pu\xF2 solo portare benefici agli utilizzatori futuri, e per questo raccomandiamo di compilare quante pi\xF9 sezioni possibili, al meglio delle proprie conoscenze e capacit\xE0."),Bi=d(),H=a("h2"),K=a("a"),fi=a("span"),h(he.$$.fragment),Pa=d(),hi=a("span"),qa=u("Metadati del cartellino del modello"),Vi=d(),Se=a("p"),ya=u("Se avete esplorato l\u2019Hugging Face Hub, potreste aver notato che alcuni modelli appartengono a determinate categorie: \xE8 possibile filtrarli per task, lingue, librerie, ecc. Le categorie a cui appartiene un modello sono identificate in base ai metadati aggiunti nell\u2019intestazione (header) del cartellino."),Ji=d(),W=a("p"),Aa=u("Prendendo ad esempio "),X=a("a"),ka=u("il cartellino di "),vi=a("code"),Ia=u("camembert-base"),Sa=u(", dovreste vedere le seguenti righe nell\u2019intestazione del cartellino:"),Ki=d(),h(ve.$$.fragment),Wi=d(),Ne=a("p"),Na=u(`This metadata is parsed by the Hugging Face Hub, which then identifies this model as being a French model, with an MIT license, trained on the Oscar dataset.
Questi metadati vengono elaborati dall\u2019Hub di Hugging Face, che identifica questo modello come un modello Francese, con una licenza MIT, addestrato sul dataset Oscar.`),Xi=d(),Y=a("p"),Ma=u("La "),ze=a("a"),La=u("specifica completa dei cartellini"),Ha=u(" permette di riportare lingue, license, tags, datasets, metriche di valutazione, e anche i risultati della valutazione del modello ottenuti durante l\u2019addestramento."),this.h()},l(e){const r=io('[data-svelte="svelte-1phssyn"]',document.head);w=t(r,"META",{name:!0,content:!0}),r.forEach(i),zi=p(e),P=t(e,"H1",{class:!0});var Zi=o(P);D=t(Zi,"A",{id:!0,class:!0,href:!0});var Ca=o(D);Le=t(Ca,"SPAN",{});var Qa=o(Le);v(Z.$$.fragment,Qa),Qa.forEach(i),Ca.forEach(i),vl=p(Zi),He=t(Zi,"SPAN",{});var Ra=o(He);zl=c(Ra,"Generare un cartellino del modello"),Ra.forEach(i),Zi.forEach(i),bi=p(e),v(ee.$$.fragment,e),gi=p(e),be=t(e,"P",{});var Fa=o(be);bl=c(Fa,"Il cartellino del modello (model card) \xE8 un file di importanza pari ai file del modello e del tokenizer in un repository. Contiene la definizione del modello, assicurando la possibilit\xE0 di riutilizzarlo e riprodurre i risultati da parte dei membri della comunit\xE0, e facendo si che il modello sia una piattaforma su cui gli altri membri possono costruire i loro artefatti."),Fa.forEach(i),Ei=p(e),ge=t(e,"P",{});var Oa=o(ge);gl=c(Oa,"Documentare il processo di addestramento e valutazione aiuta gli altri a capire cosa aspettarsi dal modello \u2014 inoltre, fornire informazioni accurate sui dati utilizzati e sulle operazioni di pre e post elaborazione (preprocessing e postprocessing), assicura che si possano identificare e comprenere le limitazioni, i bias, e i contesti in cui il modello \xE8 utile, e quelli in cui non lo \xE8."),Oa.forEach(i),_i=p(e),x=t(e,"P",{});var el=o(x);El=c(el,"Per questo creare un cartellino del modello che descriva chiaramente il modello, \xE8 un passo estremamente importante. Qui, forniamo alcuni suggerimenti per farlo. Il cartellino del modello viene creato tramite il file "),De=t(el,"EM",{});var ja=o(De);_l=c(ja,"README.md"),ja.forEach(i),$l=c(el,", visto in precedenza, che \xE8 un file Markdown."),el.forEach(i),$i=p(e),C=t(e,"P",{});var il=o(C);wl=c(il,"Il concetto del cartellino trae origine dalla ricerca svolta a Google, e pubblicata per la prima volta nell\u2019articolo "),ie=t(il,"A",{href:!0,rel:!0});var Ta=o(ie);Pl=c(Ta,"\u201CModel Cards for Model Reporting\u201D"),Ta.forEach(i),ql=c(il," di Margaret Mitchell et al. Molte informazioni contenute qui sono basate su quell\u2019artictolo, e raccomandiamo a tutti di leggerlo per capire l\u2019importanza del cartellino del modello in un mondo che valorizza la reproduzione, la riutilizzabilit\xE0 e l\u2019equit\xE0."),il.forEach(i),wi=p(e),Ee=t(e,"P",{});var Ua=o(Ee);yl=c(Ua,"Il cartellino solitamente inizia con una breve introduzione, che descrive ad alto livello per quale scopo il modello \xE8 stato creato, ed \xE8 seguita da informazioni aggiuntive nelle sezioni seguenti:"),Ua.forEach(i),Pi=p(e),m=t(e,"UL",{});var f=o(m);xe=t(f,"LI",{});var Ga=o(xe);Al=c(Ga,"Descrizione del modello"),Ga.forEach(i),kl=p(f),Ce=t(f,"LI",{});var Ba=o(Ce);Il=c(Ba,"Usi previsti e limitazioni"),Ba.forEach(i),Sl=p(f),Qe=t(f,"LI",{});var Va=o(Qe);Nl=c(Va,"Istruzioni d\u2019uso"),Va.forEach(i),Ml=p(f),Re=t(f,"LI",{});var Ja=o(Re);Ll=c(Ja,"Limitazioni e bias"),Ja.forEach(i),Hl=p(f),Fe=t(f,"LI",{});var Ka=o(Fe);Dl=c(Ka,"Dati di addestramento"),Ka.forEach(i),xl=p(f),Oe=t(f,"LI",{});var Wa=o(Oe);Cl=c(Wa,"Procedura di addestramento"),Wa.forEach(i),Ql=p(f),je=t(f,"LI",{});var Xa=o(je);Rl=c(Xa,"Risultati della valutazione"),Xa.forEach(i),f.forEach(i),qi=p(e),_e=t(e,"P",{});var Ya=o(_e);Fl=c(Ya,"Approfondiamo ora i contenuti di ciascuna sezione."),Ya.forEach(i),yi=p(e),q=t(e,"H3",{class:!0});var ll=o(q);Q=t(ll,"A",{id:!0,class:!0,href:!0});var Za=o(Q);Te=t(Za,"SPAN",{});var et=o(Te);v(le.$$.fragment,et),et.forEach(i),Za.forEach(i),Ol=p(ll),Ue=t(ll,"SPAN",{});var it=o(Ue);jl=c(it,"Descrizione del modello"),it.forEach(i),ll.forEach(i),Ai=p(e),$e=t(e,"P",{});var lt=o($e);Tl=c(lt,"La descrizione del modello fornisce i dettagli di base. Questi includono l\u2019architettura, la versione, informazioni sull\u2019articolo scientifico in cui il modello \xE8 stato presentato (se disponibile), se sia disponibile una implementazione originale, l\u2019autore, ed altre informazioni di carattere generale. Qualsiasi copyright deve essere attribuito qui. Informazioni generali sulle procedure di addestramento, i parametri, ed anche dichiarazioni di non responsabilit\xE0 possono essere inserite in questa sezione."),lt.forEach(i),ki=p(e),y=t(e,"H3",{class:!0});var al=o(y);R=t(al,"A",{id:!0,class:!0,href:!0});var at=o(R);Ge=t(at,"SPAN",{});var tt=o(Ge);v(ae.$$.fragment,tt),tt.forEach(i),at.forEach(i),Ul=p(al),Be=t(al,"SPAN",{});var ot=o(Be);Gl=c(ot,"Usi previsti e limitazioni"),ot.forEach(i),al.forEach(i),Ii=p(e),we=t(e,"P",{});var rt=o(we);Bl=c(rt,"In questa sezione vengono descritti gli utilizzi per cui il modello \xE8 inteso, inclusi i linguaggi e i domini di applicazione del modello. Questa sezione del cartellino pu\xF3 anche descrivere situazioni che sono fuori dall\u2019ambito previsto del modello, o dove \xE9 probabile che il modello non funzioni in maniera ottimale."),rt.forEach(i),Si=p(e),A=t(e,"H3",{class:!0});var tl=o(A);F=t(tl,"A",{id:!0,class:!0,href:!0});var st=o(F);Ve=t(st,"SPAN",{});var nt=o(Ve);v(te.$$.fragment,nt),nt.forEach(i),st.forEach(i),Vl=p(tl),Je=t(tl,"SPAN",{});var dt=o(Je);Jl=c(dt,"Istruzioni d'uso"),dt.forEach(i),tl.forEach(i),Ni=p(e),O=t(e,"P",{});var ol=o(O);Kl=c(ol,"Questa sezione dovrebbe includere alcuni esempi che mostrino come usare il modello. Questi esempi possono includere l\u2019utilizzo attraverso la funzione "),Ke=t(ol,"CODE",{});var ut=o(Ke);Wl=c(ut,"pipeline()"),ut.forEach(i),Xl=c(ol,", l\u2019utilizzo delle classi modello e tokenizer, e qualsiasi altro esempio di codice che possa essere utile."),ol.forEach(i),Mi=p(e),k=t(e,"H3",{class:!0});var rl=o(k);j=t(rl,"A",{id:!0,class:!0,href:!0});var pt=o(j);We=t(pt,"SPAN",{});var ct=o(We);v(oe.$$.fragment,ct),ct.forEach(i),pt.forEach(i),Yl=p(rl),Xe=t(rl,"SPAN",{});var mt=o(Xe);Zl=c(mt,"Dati di addestramento"),mt.forEach(i),rl.forEach(i),Li=p(e),Pe=t(e,"P",{});var ft=o(Pe);ea=c(ft,"Questa parte dovrebbe indicare su quali dataset il modello \xE8 stato addestrato. \xC8 anche consigliabile aggiungere una breve descrizione dei dataset."),ft.forEach(i),Hi=p(e),I=t(e,"H3",{class:!0});var sl=o(I);T=t(sl,"A",{id:!0,class:!0,href:!0});var ht=o(T);Ye=t(ht,"SPAN",{});var vt=o(Ye);v(re.$$.fragment,vt),vt.forEach(i),ht.forEach(i),ia=p(sl),Ze=t(sl,"SPAN",{});var zt=o(Ze);la=c(zt,"Procedura di addestramento"),zt.forEach(i),sl.forEach(i),Di=p(e),qe=t(e,"P",{});var bt=o(qe);aa=c(bt,"In questa sezione dovreste descrivere tutti i dettagli del processo di addestramento rilevanti dal punto di vista della riproducibilit\xE1."),bt.forEach(i),xi=p(e),S=t(e,"H3",{class:!0});var nl=o(S);U=t(nl,"A",{id:!0,class:!0,href:!0});var gt=o(U);ei=t(gt,"SPAN",{});var Et=o(ei);v(se.$$.fragment,Et),Et.forEach(i),gt.forEach(i),ta=p(nl),ii=t(nl,"SPAN",{});var _t=o(ii);oa=c(_t,"Variabili e metriche di valutazione"),_t.forEach(i),nl.forEach(i),Ci=p(e),ye=t(e,"P",{});var $t=o(ye);ra=c($t,"In questa sezione \xE9 opportuno descrivere le metriche utilizzate per la valutazione e differenti fattori che vengono misurati. Riportare quali metriche ssono state usate, e su quali dataset e relative partizioni (dataset split), rende facile comparare le performance del proprio modello con gli altri. Le informazioni in questa sezione dovrebbero coprire i casi d\u2019uso riportati nelle sezioni precedenti."),$t.forEach(i),Qi=p(e),N=t(e,"H3",{class:!0});var dl=o(N);G=t(dl,"A",{id:!0,class:!0,href:!0});var wt=o(G);li=t(wt,"SPAN",{});var Pt=o(li);v(ne.$$.fragment,Pt),Pt.forEach(i),wt.forEach(i),sa=p(dl),ai=t(dl,"SPAN",{});var qt=o(ai);na=c(qt,"Risultati della valutazione"),qt.forEach(i),dl.forEach(i),Ri=p(e),Ae=t(e,"P",{});var yt=o(Ae);da=c(yt,"Per finire, si dovrebbero riportare i risultati della valutazione di come si comporta il modello sul dataset di valutazione. Se il modello utilizza una soglia di decisione (decision threshold), \xE8 opportuno riportare o la soglia di decisione utilizzata nella fase di valutazione, o riportare i risultati per differenti soglie di decisione per gli usi previsti."),yt.forEach(i),Fi=p(e),M=t(e,"H2",{class:!0});var ul=o(M);B=t(ul,"A",{id:!0,class:!0,href:!0});var At=o(B);ti=t(At,"SPAN",{});var kt=o(ti);v(de.$$.fragment,kt),kt.forEach(i),At.forEach(i),ua=p(ul),oi=t(ul,"SPAN",{});var It=o(oi);pa=c(It,"Esempio"),It.forEach(i),ul.forEach(i),Oi=p(e),ke=t(e,"P",{});var St=o(ke);ca=c(St,"Consigliamo di guardare i seguenti esempi di cartellini ben curati:"),St.forEach(i),ji=p(e),$=t(e,"UL",{});var Me=o($);ri=t(Me,"LI",{});var Nt=o(ri);ue=t(Nt,"A",{href:!0,rel:!0});var Mt=o(ue);si=t(Mt,"CODE",{});var Lt=o(si);ma=c(Lt,"bert-base-cased"),Lt.forEach(i),Mt.forEach(i),Nt.forEach(i),fa=p(Me),ni=t(Me,"LI",{});var Ht=o(ni);pe=t(Ht,"A",{href:!0,rel:!0});var Dt=o(pe);di=t(Dt,"CODE",{});var xt=o(di);ha=c(xt,"gpt2"),xt.forEach(i),Dt.forEach(i),Ht.forEach(i),va=p(Me),ui=t(Me,"LI",{});var Ct=o(ui);ce=t(Ct,"A",{href:!0,rel:!0});var Qt=o(ce);pi=t(Qt,"CODE",{});var Rt=o(pi);za=c(Rt,"distilbert"),Rt.forEach(i),Qt.forEach(i),Ct.forEach(i),Me.forEach(i),Ti=p(e),V=t(e,"P",{});var pl=o(V);ba=c(pl,"Esempi aggiuntivi, da parte di altre organizzazioni e compagnie, sono disponibili "),me=t(pl,"A",{href:!0,rel:!0});var Ft=o(me);ga=c(Ft,"qui"),Ft.forEach(i),Ea=c(pl,"."),pl.forEach(i),Ui=p(e),L=t(e,"H2",{class:!0});var cl=o(L);J=t(cl,"A",{id:!0,class:!0,href:!0});var Ot=o(J);ci=t(Ot,"SPAN",{});var jt=o(ci);v(fe.$$.fragment,jt),jt.forEach(i),Ot.forEach(i),_a=p(cl),mi=t(cl,"SPAN",{});var Tt=o(mi);$a=c(Tt,"Nota"),Tt.forEach(i),cl.forEach(i),Gi=p(e),Ie=t(e,"P",{});var Ut=o(Ie);wa=c(Ut,"Includere il cartellino del modello non \xE8 un requisito obbligatorio durante la pubblicazione di un modello, e inoltre non \xE8 necessario includere tutte le sezioni elencate in precedenza quando si crea un cartellino. Tuttavia, una documentazione esplicita del modello pu\xF2 solo portare benefici agli utilizzatori futuri, e per questo raccomandiamo di compilare quante pi\xF9 sezioni possibili, al meglio delle proprie conoscenze e capacit\xE0."),Ut.forEach(i),Bi=p(e),H=t(e,"H2",{class:!0});var ml=o(H);K=t(ml,"A",{id:!0,class:!0,href:!0});var Gt=o(K);fi=t(Gt,"SPAN",{});var Bt=o(fi);v(he.$$.fragment,Bt),Bt.forEach(i),Gt.forEach(i),Pa=p(ml),hi=t(ml,"SPAN",{});var Vt=o(hi);qa=c(Vt,"Metadati del cartellino del modello"),Vt.forEach(i),ml.forEach(i),Vi=p(e),Se=t(e,"P",{});var Jt=o(Se);ya=c(Jt,"Se avete esplorato l\u2019Hugging Face Hub, potreste aver notato che alcuni modelli appartengono a determinate categorie: \xE8 possibile filtrarli per task, lingue, librerie, ecc. Le categorie a cui appartiene un modello sono identificate in base ai metadati aggiunti nell\u2019intestazione (header) del cartellino."),Jt.forEach(i),Ji=p(e),W=t(e,"P",{});var fl=o(W);Aa=c(fl,"Prendendo ad esempio "),X=t(fl,"A",{href:!0,rel:!0});var Da=o(X);ka=c(Da,"il cartellino di "),vi=t(Da,"CODE",{});var Kt=o(vi);Ia=c(Kt,"camembert-base"),Kt.forEach(i),Da.forEach(i),Sa=c(fl,", dovreste vedere le seguenti righe nell\u2019intestazione del cartellino:"),fl.forEach(i),Ki=p(e),v(ve.$$.fragment,e),Wi=p(e),Ne=t(e,"P",{});var Wt=o(Ne);Na=c(Wt,`This metadata is parsed by the Hugging Face Hub, which then identifies this model as being a French model, with an MIT license, trained on the Oscar dataset.
Questi metadati vengono elaborati dall\u2019Hub di Hugging Face, che identifica questo modello come un modello Francese, con una licenza MIT, addestrato sul dataset Oscar.`),Wt.forEach(i),Xi=p(e),Y=t(e,"P",{});var hl=o(Y);Ma=c(hl,"La "),ze=t(hl,"A",{href:!0,rel:!0});var Xt=o(ze);La=c(Xt,"specifica completa dei cartellini"),Xt.forEach(i),Ha=c(hl," permette di riportare lingue, license, tags, datasets, metriche di valutazione, e anche i risultati della valutazione del modello ottenuti durante l\u2019addestramento."),hl.forEach(i),this.h()},h(){n(w,"name","hf:doc:metadata"),n(w,"content",JSON.stringify(so)),n(D,"id","generare-un-cartellino-del-modello"),n(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(D,"href","#generare-un-cartellino-del-modello"),n(P,"class","relative group"),n(ie,"href","https://arxiv.org/abs/1810.03993"),n(ie,"rel","nofollow"),n(Q,"id","descrizione-del-modello"),n(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(Q,"href","#descrizione-del-modello"),n(q,"class","relative group"),n(R,"id","usi-previsti-e-limitazioni"),n(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(R,"href","#usi-previsti-e-limitazioni"),n(y,"class","relative group"),n(F,"id","istruzioni-duso"),n(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(F,"href","#istruzioni-duso"),n(A,"class","relative group"),n(j,"id","dati-di-addestramento"),n(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(j,"href","#dati-di-addestramento"),n(k,"class","relative group"),n(T,"id","procedura-di-addestramento"),n(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(T,"href","#procedura-di-addestramento"),n(I,"class","relative group"),n(U,"id","variabili-e-metriche-di-valutazione"),n(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(U,"href","#variabili-e-metriche-di-valutazione"),n(S,"class","relative group"),n(G,"id","risultati-della-valutazione"),n(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(G,"href","#risultati-della-valutazione"),n(N,"class","relative group"),n(B,"id","esempio"),n(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(B,"href","#esempio"),n(M,"class","relative group"),n(ue,"href","https://huggingface.co/bert-base-cased"),n(ue,"rel","nofollow"),n(pe,"href","https://huggingface.co/gpt2"),n(pe,"rel","nofollow"),n(ce,"href","https://huggingface.co/distilbert-base-uncased"),n(ce,"rel","nofollow"),n(me,"href","https://github.com/huggingface/model_card/blob/master/examples.md"),n(me,"rel","nofollow"),n(J,"id","nota"),n(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(J,"href","#nota"),n(L,"class","relative group"),n(K,"id","metadati-del-cartellino-del-modello"),n(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(K,"href","#metadati-del-cartellino-del-modello"),n(H,"class","relative group"),n(X,"href","https://huggingface.co/camembert-base/blob/main/README.md"),n(X,"rel","nofollow"),n(ze,"href","https://github.com/huggingface/hub-docs/blame/main/modelcard.md"),n(ze,"rel","nofollow")},m(e,r){l(document.head,w),s(e,zi,r),s(e,P,r),l(P,D),l(D,Le),z(Z,Le,null),l(P,vl),l(P,He),l(He,zl),s(e,bi,r),z(ee,e,r),s(e,gi,r),s(e,be,r),l(be,bl),s(e,Ei,r),s(e,ge,r),l(ge,gl),s(e,_i,r),s(e,x,r),l(x,El),l(x,De),l(De,_l),l(x,$l),s(e,$i,r),s(e,C,r),l(C,wl),l(C,ie),l(ie,Pl),l(C,ql),s(e,wi,r),s(e,Ee,r),l(Ee,yl),s(e,Pi,r),s(e,m,r),l(m,xe),l(xe,Al),l(m,kl),l(m,Ce),l(Ce,Il),l(m,Sl),l(m,Qe),l(Qe,Nl),l(m,Ml),l(m,Re),l(Re,Ll),l(m,Hl),l(m,Fe),l(Fe,Dl),l(m,xl),l(m,Oe),l(Oe,Cl),l(m,Ql),l(m,je),l(je,Rl),s(e,qi,r),s(e,_e,r),l(_e,Fl),s(e,yi,r),s(e,q,r),l(q,Q),l(Q,Te),z(le,Te,null),l(q,Ol),l(q,Ue),l(Ue,jl),s(e,Ai,r),s(e,$e,r),l($e,Tl),s(e,ki,r),s(e,y,r),l(y,R),l(R,Ge),z(ae,Ge,null),l(y,Ul),l(y,Be),l(Be,Gl),s(e,Ii,r),s(e,we,r),l(we,Bl),s(e,Si,r),s(e,A,r),l(A,F),l(F,Ve),z(te,Ve,null),l(A,Vl),l(A,Je),l(Je,Jl),s(e,Ni,r),s(e,O,r),l(O,Kl),l(O,Ke),l(Ke,Wl),l(O,Xl),s(e,Mi,r),s(e,k,r),l(k,j),l(j,We),z(oe,We,null),l(k,Yl),l(k,Xe),l(Xe,Zl),s(e,Li,r),s(e,Pe,r),l(Pe,ea),s(e,Hi,r),s(e,I,r),l(I,T),l(T,Ye),z(re,Ye,null),l(I,ia),l(I,Ze),l(Ze,la),s(e,Di,r),s(e,qe,r),l(qe,aa),s(e,xi,r),s(e,S,r),l(S,U),l(U,ei),z(se,ei,null),l(S,ta),l(S,ii),l(ii,oa),s(e,Ci,r),s(e,ye,r),l(ye,ra),s(e,Qi,r),s(e,N,r),l(N,G),l(G,li),z(ne,li,null),l(N,sa),l(N,ai),l(ai,na),s(e,Ri,r),s(e,Ae,r),l(Ae,da),s(e,Fi,r),s(e,M,r),l(M,B),l(B,ti),z(de,ti,null),l(M,ua),l(M,oi),l(oi,pa),s(e,Oi,r),s(e,ke,r),l(ke,ca),s(e,ji,r),s(e,$,r),l($,ri),l(ri,ue),l(ue,si),l(si,ma),l($,fa),l($,ni),l(ni,pe),l(pe,di),l(di,ha),l($,va),l($,ui),l(ui,ce),l(ce,pi),l(pi,za),s(e,Ti,r),s(e,V,r),l(V,ba),l(V,me),l(me,ga),l(V,Ea),s(e,Ui,r),s(e,L,r),l(L,J),l(J,ci),z(fe,ci,null),l(L,_a),l(L,mi),l(mi,$a),s(e,Gi,r),s(e,Ie,r),l(Ie,wa),s(e,Bi,r),s(e,H,r),l(H,K),l(K,fi),z(he,fi,null),l(H,Pa),l(H,hi),l(hi,qa),s(e,Vi,r),s(e,Se,r),l(Se,ya),s(e,Ji,r),s(e,W,r),l(W,Aa),l(W,X),l(X,ka),l(X,vi),l(vi,Ia),l(W,Sa),s(e,Ki,r),z(ve,e,r),s(e,Wi,r),s(e,Ne,r),l(Ne,Na),s(e,Xi,r),s(e,Y,r),l(Y,Ma),l(Y,ze),l(ze,La),l(Y,Ha),Yi=!0},p:lo,i(e){Yi||(b(Z.$$.fragment,e),b(ee.$$.fragment,e),b(le.$$.fragment,e),b(ae.$$.fragment,e),b(te.$$.fragment,e),b(oe.$$.fragment,e),b(re.$$.fragment,e),b(se.$$.fragment,e),b(ne.$$.fragment,e),b(de.$$.fragment,e),b(fe.$$.fragment,e),b(he.$$.fragment,e),b(ve.$$.fragment,e),Yi=!0)},o(e){g(Z.$$.fragment,e),g(ee.$$.fragment,e),g(le.$$.fragment,e),g(ae.$$.fragment,e),g(te.$$.fragment,e),g(oe.$$.fragment,e),g(re.$$.fragment,e),g(se.$$.fragment,e),g(ne.$$.fragment,e),g(de.$$.fragment,e),g(fe.$$.fragment,e),g(he.$$.fragment,e),g(ve.$$.fragment,e),Yi=!1},d(e){i(w),e&&i(zi),e&&i(P),E(Z),e&&i(bi),E(ee,e),e&&i(gi),e&&i(be),e&&i(Ei),e&&i(ge),e&&i(_i),e&&i(x),e&&i($i),e&&i(C),e&&i(wi),e&&i(Ee),e&&i(Pi),e&&i(m),e&&i(qi),e&&i(_e),e&&i(yi),e&&i(q),E(le),e&&i(Ai),e&&i($e),e&&i(ki),e&&i(y),E(ae),e&&i(Ii),e&&i(we),e&&i(Si),e&&i(A),E(te),e&&i(Ni),e&&i(O),e&&i(Mi),e&&i(k),E(oe),e&&i(Li),e&&i(Pe),e&&i(Hi),e&&i(I),E(re),e&&i(Di),e&&i(qe),e&&i(xi),e&&i(S),E(se),e&&i(Ci),e&&i(ye),e&&i(Qi),e&&i(N),E(ne),e&&i(Ri),e&&i(Ae),e&&i(Fi),e&&i(M),E(de),e&&i(Oi),e&&i(ke),e&&i(ji),e&&i($),e&&i(Ti),e&&i(V),e&&i(Ui),e&&i(L),E(fe),e&&i(Gi),e&&i(Ie),e&&i(Bi),e&&i(H),E(he),e&&i(Vi),e&&i(Se),e&&i(Ji),e&&i(W),e&&i(Ki),E(ve,e),e&&i(Wi),e&&i(Ne),e&&i(Xi),e&&i(Y)}}}const so={local:"generare-un-cartellino-del-modello",sections:[{local:null,sections:[{local:"descrizione-del-modello",title:"Descrizione del modello"},{local:"usi-previsti-e-limitazioni",title:"Usi previsti e limitazioni"},{local:"istruzioni-duso",title:"Istruzioni d'uso"},{local:"dati-di-addestramento",title:"Dati di addestramento"},{local:"procedura-di-addestramento",title:"Procedura di addestramento"},{local:"variabili-e-metriche-di-valutazione",title:"Variabili e metriche di valutazione"},{local:"risultati-della-valutazione",title:"Risultati della valutazione"}],title:null},{local:"esempio",title:"Esempio"},{local:"nota",title:"Nota"},{local:"metadati-del-cartellino-del-modello",title:"Metadati del cartellino del modello"}],title:"Generare un cartellino del modello"};function no(xa){return ao(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ho extends Yt{constructor(w){super();Zt(this,w,no,ro,eo,{})}}export{ho as default,so as metadata};
