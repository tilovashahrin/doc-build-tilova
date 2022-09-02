import{S as nr,i as sr,s as lr,e as a,k as p,w as c,t as g,M as pr,c as t,d as i,m as u,a as n,x as m,h as $,b as s,G as r,g as l,y as d,L as ur,q as f,o as h,B as v,v as cr}from"../../chunks/vendor-hf-doc-builder.js";import{I as S}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as mr}from"../../chunks/CodeBlock-hf-doc-builder.js";import{C as dr}from"../../chunks/CourseFloatingBanner-hf-doc-builder.js";import{Q as H}from"../../chunks/Question-hf-doc-builder.js";import"../../chunks/DocNotebookDropdown-hf-doc-builder.js";function fr(Ai){let b,Ee,_,A,pe,R,ni,ue,si,Ce,D,Se,se,li,Ae,x,z,ce,j,pi,me,ui,ze,L,Te,w,T,de,M,ci,fe,mi,Ue,O,Ne,q,U,he,B,di,ve,fi,Ge,J,Qe,le,hi,Ie,W,Fe,y,N,ge,K,vi,V,gi,$e,$i,bi,He,X,Re,P,G,be,Y,_i,_e,xi,De,Z,je,k,Q,xe,ee,wi,we,qi,Le,ie,Me,E,I,qe,re,yi,ye,Pi,Oe,oe,Be,C,F,Pe,ae,ki,te,Ei,ke,Ci,Si,Je,ne,We;return R=new S({}),D=new dr({props:{chapter:8,classNames:"absolute z-10 right-0 top-0"}}),j=new S({}),L=new H({props:{choices:[{text:"Dall'alto verso il basso",explain:"Riprova -- sebbene la maggior parte degli altri linguaggi di programmazione stampi gli errori in alto, Python \xE8 unico in questo senso."},{text:"Dal basso verso l'alto",explain:"Corretto! Un vantaggio dei traceback di Python, che mostrano l'errore in fondo, \xE8 che \xE8 pi\xF9 facile fare il debug quando si lavora nel terminale e questa \xE8 l'ultima riga che si vede.",correct:!0}]}}),M=new S({}),O=new H({props:{choices:[{text:"Una semplice implementazione di un'architettura Transformer tratta da un articolo di ricerca",explain:"Anche se \xE8 molto formativo implementare i propri modelli Transformer da zero, non \xE8 di questo che stiamo parlando."},{text:"Un blocco di codice compatto e autocontenuto che pu\xF2 essere eseguito senza alcuna dipendenza esterna da file o dati privati",explain:"Corretto! Minimi esempi riproducibili aiutano i maintainers della libreria a riprodurre il problema che si sta verificando, in modo da trovare soluzioni pi\xF9 velocemente",correct:!0},{text:"Uno screenshot della traceback di Python",explain:"Riprova -- anche se \xE8 allettante includere una schermata dell'errore che si sta riscontrando quando si invia un issue, questo rende molto difficile per gli altri riprodurre l'errore"},{text:"Un notebook che contiene la tua analisi intera, comprese le parti non correlate all'errore",explain:"Non proprio -- anche se pu\xF2 essere utile condividere un notebook di Google Colab che mostri l'errore, assicurati che sia breve e che contenga solo il codice rilevante"}]}}),B=new S({}),J=new mr({props:{code:`from transformers import GPT3ForSequenceClassification

# ImportError: cannot import name 'GPT3ForSequenceClassification' from 'transformers' (/Users/lewtun/miniconda3/envs/huggingface/lib/python3.8/site-packages/transformers/__init__.py)
# ---------------------------------------------------------------------------
# ImportError                               Traceback (most recent call last)
# /var/folders/28/k4cy5q7s2hs92xq7_h89_vgm0000gn/T/ipykernel_30848/333858878.py in <module>
# ----> 1 from transformers import GPT3ForSequenceClassification

# ImportError: cannot import name 'GPT3ForSequenceClassification' from 'transformers' (/Users/lewtun/miniconda3/envs/huggingface/lib/python3.8/site-packages/transformers/__init__.py)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT3ForSequenceClassification

<span class="hljs-comment"># ImportError: cannot import name &#x27;GPT3ForSequenceClassification&#x27; from &#x27;transformers&#x27; (/Users/lewtun/miniconda3/envs/huggingface/lib/python3.8/site-packages/transformers/__init__.py)</span>
<span class="hljs-comment"># ---------------------------------------------------------------------------</span>
<span class="hljs-comment"># ImportError                               Traceback (most recent call last)</span>
<span class="hljs-comment"># /var/folders/28/k4cy5q7s2hs92xq7_h89_vgm0000gn/T/ipykernel_30848/333858878.py in &lt;module&gt;</span>
<span class="hljs-comment"># ----&gt; 1 from transformers import GPT3ForSequenceClassification</span>

<span class="hljs-comment"># ImportError: cannot import name &#x27;GPT3ForSequenceClassification&#x27; from &#x27;transformers&#x27; (/Users/lewtun/miniconda3/envs/huggingface/lib/python3.8/site-packages/transformers/__init__.py)</span>`}}),W=new H({props:{choices:[{text:"<code>ImportError: cannot import name 'GPT3ForSequenceClassification' from 'transformers' (/Users/lewtun/miniconda3/envs/huggingface/lib/python3.8/site-packages/transformers/__init__.py)</code>",explain:"Includere l'ultima riga del traceback pu\xF2 essere esplicativo, ma \xE8 meglio riservarlo al corpo principale del topic. Riprov!"},{text:"Problema con <code>from transformers import GPT3ForSequenceClassification</code>",explain:"Riprova -- sebbene questo fornisca informazioni utili, \xE8 probabilmente meglio riservarle al corpo principale del testo."},{text:"Perch\xE9 non posso importare  <code>GPT3ForSequenceClassification</code>?",explain:"Ottima scelta! Questo titolo \xE8 conciso e d\xE0 al lettore un indizio su ci\xF2 che potrebbe essere sbagliato (ad esempio, che il GPT-3 non \xE8 supportato nei \u{1F917} Transformers).",correct:!0},{text:"GPT-3 \xE8 supportato in \u{1F917} Transformers?",explain:"Buona questa! Usare domande come titoli dei topic \xE8 un ottimo modo per comunicare il problema alla community.",correct:!0}]}}),K=new S({}),X=new H({props:{choices:[{text:"La fase di ottimizzazione in cui si calcolano i gradienti e si esegue la backpropagation",explain:"Anche se potrebbero esserci dei bug nell'ottimizzatore, di solito si tratta di diverse fasi della training pipeline, quindi ci sono altre cose da controllare prima. Riprova!"},{text:"La fase di valutazione in cui si calcolano le metriche",explain:"La valutazione \xE8 di solito fatta dopo aver fatto training per un'intera epoch, quindi dovresti controllare in qualche punto della training pipeline precedente."},{text:"I dataset",explain:"Corretto! Dare un'occhiata ai dati \xE8 quasi sempre la prima cosa da fare, per assicurarsi che il testo sia codificato correttamente, che abbia le dimensioni previste e cos\xEC via.",correct:!0},{text:"I dataloader",explain:"Prova ancora -- \xE8 molto vicino alla prima cosa che si dovrebbe controllare. Ti ricordi quale oggetto forniamo ai dataloader?"}]}}),Y=new S({}),Z=new H({props:{choices:[{text:"Pubblicare il messaggio di errore sul forum o su GitHub.",explain:"Questo non aiuter\xE0 nessuno, poich\xE9 i messaggi di errore di CUDA sono solitamente poco esplicativi."},{text:"Eseguire lo stesso codice sulla CPU.",explain:"Esattamente, questo dovrebbe darti un messaggio di errore migliore!",correct:!0},{text:"Leggere il traceback per scoprire cosa ha causato l'errore.",explain:"\xC8 quello che si farebbe per qualsiasi altro errore, ma gli errori di CUDA di solito non vengono segnalati nel punto in cui si sono verificati, perch\xE9 la maggior parte delle operazioni di CUDA sono asincrone."},{text:"Ridurre la dimensione del batch.",explain:"Ridurre la dimensione del batch \xE8 di solito una buona strategia per gestire gli errori out-of-memory di CUDA, ma non per questo particolare problema. Riprova!"},{text:"Riavviare il Jupyter kernel.",explain:"Riprova -- riavviare il kernel non far\xE0 scomparire magicamente l'errore!"}]}}),ee=new S({}),ie=new H({props:{choices:[{text:"Pubblicare un esempio completo e riproducibile del bug.",explain:"S\xEC, questo \xE8 il modo migliore per aiutare i maintainer a trovare il tuo bug. Cos'altro si dovrebbe fare?",correct:!0},{text:"Chiedere un aggiornamento ogni giorno.",explain:"\xC8 improbabile che questo ti aiuti; probabilmente la gente ti ignorer\xE0 di pi\xF9."},{text:"Ispezionare il codice sorgente intorno al bug e cercare di trovare il motivo per cui si verifica. Pubblicare i risultati nel problema.",explain:"Questo aiuter\xE0 sicuramente i maintainer! E se si trova la fonte del bug e una soluzione, si pu\xF2 anche aprire una pull request. Cos'altro dovreste fare?",correct:!0}]}}),re=new S({}),oe=new H({props:{choices:[{text:"Non lo \xE8; l'overfitting \xE8 sempre un male e va evitato.",explain:"Quando si fa l'addestramento sull'intero dataset, l'overfitting pu\xF2 essere un segno che il modello non generalizzer\xE0 bene a nuovi esempi. Per il debug, tuttavia, di solito non si addestra sull'intero dataset. Riprova!"},{text:"Ci permette di verificare che il modello sia in grado di ridurre la loss a zero.",explain:"Corretto! Con un piccolo batch di soli due esempi, possiamo verificare rapidamente se il modello \xE8 in grado di apprendere.",correct:!0},{text:"Ci permette di verificare che le dimensioni dei tensori dei nostri input e delle nostre label siano corrette.",explain:"Prova ancora -- se le dimensioni dei tensori sono scorrette, non sarai certamente in grado di fare l'addestramento, nemmeno su un singolo batch."}]}}),ae=new S({}),ne=new H({props:{choices:[{text:"Permette ai maintainer di capire quale versione della libreria si sta utilizzando.",explain:"Corretto! Poich\xE9 ogni versione principale della libreria pu\xF2 presentare modifiche all'API, sapere quale versione specifica si sta utilizzando pu\xF2 aiutare a circoscrivere il problema. Quali sono gli altri vantaggi?",correct:!0},{text:"Permette ai maintainer di sapere se il codice viene eseguito su Windows, macOS o Linux.",explain:"Corretto! A volte gli errori possono essere causati dallo specifico sistema operativo in uso e saperlo aiuta i maintainer a riprodurli localmente. Ma non \xE8 il solo motivo.",correct:!0},{text:"Permette ai maintainer di sapere se il codice viene eseguito su una GPU o su una CPU.",explain:"Corretto! Come abbiamo visto in questo capitolo, il codice eseguito su GPU o CPU pu\xF2 produrre risultati o errori diversi e sapere quale hardware si sta usando pu\xF2 aiutare a concentrare l'attenzione dei maintainer. Ma questo non \xE8 l'unico vantaggio...",correct:!0}]}}),{c(){b=a("meta"),Ee=p(),_=a("h1"),A=a("a"),pe=a("span"),c(R.$$.fragment),ni=p(),ue=a("span"),si=g("Quiz di fine capitolo"),Ce=p(),c(D.$$.fragment),Se=p(),se=a("p"),li=g("Mettiamo alla prova quello che hai imparato in questo capitolo!"),Ae=p(),x=a("h3"),z=a("a"),ce=a("span"),c(j.$$.fragment),pi=p(),me=a("span"),ui=g("1. In quale ordine si deve leggere un traceback di Python?"),ze=p(),c(L.$$.fragment),Te=p(),w=a("h3"),T=a("a"),de=a("span"),c(M.$$.fragment),ci=p(),fe=a("span"),mi=g("2. Che cos\u2019\xE8 un minimo esempio riproducibile?"),Ue=p(),c(O.$$.fragment),Ne=p(),q=a("h3"),U=a("a"),he=a("span"),c(B.$$.fragment),di=p(),ve=a("span"),fi=g("3. Supponiamo di provare a eseguire il codice seguente, il quale produce un errore:"),Ge=p(),c(J.$$.fragment),Qe=p(),le=a("p"),hi=g("Quale dei seguenti potrebbe essere una buona scelta per il titolo di un topic del forum per chiedere aiuto?"),Ie=p(),c(W.$$.fragment),Fe=p(),y=a("h3"),N=a("a"),ge=a("span"),c(K.$$.fragment),vi=p(),V=a("span"),gi=g("4. Supponiamo di aver provato a eseguire "),$e=a("code"),$i=g("trainer.train()"),bi=g(" e di trovarci di fronte a un errore criptico che non ci dice esattamente da dove proviene. Quale dei seguenti \xE8 il primo posto in cui cercare gli errori nella training pipeline?"),He=p(),c(X.$$.fragment),Re=p(),P=a("h3"),G=a("a"),be=a("span"),c(Y.$$.fragment),_i=p(),_e=a("span"),xi=g("5. Qual \xE8 il modo migliore per fare il debug di un errore CUDA?"),De=p(),c(Z.$$.fragment),je=p(),k=a("h3"),Q=a("a"),xe=a("span"),c(ee.$$.fragment),wi=p(),we=a("span"),qi=g("6. Qual \xE8 il modo migliore per far risolvere un problema su GitHub?"),Le=p(),c(ie.$$.fragment),Me=p(),E=a("h3"),I=a("a"),qe=a("span"),c(re.$$.fragment),yi=p(),ye=a("span"),Pi=g("7. Perch\xE9 l\u2019overfitting di un batch \xE8 di solito una buona tecnica di debugging?"),Oe=p(),c(oe.$$.fragment),Be=p(),C=a("h3"),F=a("a"),Pe=a("span"),c(ae.$$.fragment),ki=p(),te=a("span"),Ei=g("8. Perch\xE9 \xE8 una buona idea includere dettagli sul proprio ambiente di sviluppo con "),ke=a("code"),Ci=g("transformers-cli env"),Si=g(" quando si crea un nuovo issue nel repo di \u{1F917} Transformers?"),Je=p(),c(ne.$$.fragment),this.h()},l(e){const o=pr('[data-svelte="svelte-1phssyn"]',document.head);b=t(o,"META",{name:!0,content:!0}),o.forEach(i),Ee=u(e),_=t(e,"H1",{class:!0});var Ke=n(_);A=t(Ke,"A",{id:!0,class:!0,href:!0});var zi=n(A);pe=t(zi,"SPAN",{});var Ti=n(pe);m(R.$$.fragment,Ti),Ti.forEach(i),zi.forEach(i),ni=u(Ke),ue=t(Ke,"SPAN",{});var Ui=n(ue);si=$(Ui,"Quiz di fine capitolo"),Ui.forEach(i),Ke.forEach(i),Ce=u(e),m(D.$$.fragment,e),Se=u(e),se=t(e,"P",{});var Ni=n(se);li=$(Ni,"Mettiamo alla prova quello che hai imparato in questo capitolo!"),Ni.forEach(i),Ae=u(e),x=t(e,"H3",{class:!0});var Ve=n(x);z=t(Ve,"A",{id:!0,class:!0,href:!0});var Gi=n(z);ce=t(Gi,"SPAN",{});var Qi=n(ce);m(j.$$.fragment,Qi),Qi.forEach(i),Gi.forEach(i),pi=u(Ve),me=t(Ve,"SPAN",{});var Ii=n(me);ui=$(Ii,"1. In quale ordine si deve leggere un traceback di Python?"),Ii.forEach(i),Ve.forEach(i),ze=u(e),m(L.$$.fragment,e),Te=u(e),w=t(e,"H3",{class:!0});var Xe=n(w);T=t(Xe,"A",{id:!0,class:!0,href:!0});var Fi=n(T);de=t(Fi,"SPAN",{});var Hi=n(de);m(M.$$.fragment,Hi),Hi.forEach(i),Fi.forEach(i),ci=u(Xe),fe=t(Xe,"SPAN",{});var Ri=n(fe);mi=$(Ri,"2. Che cos\u2019\xE8 un minimo esempio riproducibile?"),Ri.forEach(i),Xe.forEach(i),Ue=u(e),m(O.$$.fragment,e),Ne=u(e),q=t(e,"H3",{class:!0});var Ye=n(q);U=t(Ye,"A",{id:!0,class:!0,href:!0});var Di=n(U);he=t(Di,"SPAN",{});var ji=n(he);m(B.$$.fragment,ji),ji.forEach(i),Di.forEach(i),di=u(Ye),ve=t(Ye,"SPAN",{});var Li=n(ve);fi=$(Li,"3. Supponiamo di provare a eseguire il codice seguente, il quale produce un errore:"),Li.forEach(i),Ye.forEach(i),Ge=u(e),m(J.$$.fragment,e),Qe=u(e),le=t(e,"P",{});var Mi=n(le);hi=$(Mi,"Quale dei seguenti potrebbe essere una buona scelta per il titolo di un topic del forum per chiedere aiuto?"),Mi.forEach(i),Ie=u(e),m(W.$$.fragment,e),Fe=u(e),y=t(e,"H3",{class:!0});var Ze=n(y);N=t(Ze,"A",{id:!0,class:!0,href:!0});var Oi=n(N);ge=t(Oi,"SPAN",{});var Bi=n(ge);m(K.$$.fragment,Bi),Bi.forEach(i),Oi.forEach(i),vi=u(Ze),V=t(Ze,"SPAN",{});var ei=n(V);gi=$(ei,"4. Supponiamo di aver provato a eseguire "),$e=t(ei,"CODE",{});var Ji=n($e);$i=$(Ji,"trainer.train()"),Ji.forEach(i),bi=$(ei," e di trovarci di fronte a un errore criptico che non ci dice esattamente da dove proviene. Quale dei seguenti \xE8 il primo posto in cui cercare gli errori nella training pipeline?"),ei.forEach(i),Ze.forEach(i),He=u(e),m(X.$$.fragment,e),Re=u(e),P=t(e,"H3",{class:!0});var ii=n(P);G=t(ii,"A",{id:!0,class:!0,href:!0});var Wi=n(G);be=t(Wi,"SPAN",{});var Ki=n(be);m(Y.$$.fragment,Ki),Ki.forEach(i),Wi.forEach(i),_i=u(ii),_e=t(ii,"SPAN",{});var Vi=n(_e);xi=$(Vi,"5. Qual \xE8 il modo migliore per fare il debug di un errore CUDA?"),Vi.forEach(i),ii.forEach(i),De=u(e),m(Z.$$.fragment,e),je=u(e),k=t(e,"H3",{class:!0});var ri=n(k);Q=t(ri,"A",{id:!0,class:!0,href:!0});var Xi=n(Q);xe=t(Xi,"SPAN",{});var Yi=n(xe);m(ee.$$.fragment,Yi),Yi.forEach(i),Xi.forEach(i),wi=u(ri),we=t(ri,"SPAN",{});var Zi=n(we);qi=$(Zi,"6. Qual \xE8 il modo migliore per far risolvere un problema su GitHub?"),Zi.forEach(i),ri.forEach(i),Le=u(e),m(ie.$$.fragment,e),Me=u(e),E=t(e,"H3",{class:!0});var oi=n(E);I=t(oi,"A",{id:!0,class:!0,href:!0});var er=n(I);qe=t(er,"SPAN",{});var ir=n(qe);m(re.$$.fragment,ir),ir.forEach(i),er.forEach(i),yi=u(oi),ye=t(oi,"SPAN",{});var rr=n(ye);Pi=$(rr,"7. Perch\xE9 l\u2019overfitting di un batch \xE8 di solito una buona tecnica di debugging?"),rr.forEach(i),oi.forEach(i),Oe=u(e),m(oe.$$.fragment,e),Be=u(e),C=t(e,"H3",{class:!0});var ai=n(C);F=t(ai,"A",{id:!0,class:!0,href:!0});var or=n(F);Pe=t(or,"SPAN",{});var ar=n(Pe);m(ae.$$.fragment,ar),ar.forEach(i),or.forEach(i),ki=u(ai),te=t(ai,"SPAN",{});var ti=n(te);Ei=$(ti,"8. Perch\xE9 \xE8 una buona idea includere dettagli sul proprio ambiente di sviluppo con "),ke=t(ti,"CODE",{});var tr=n(ke);Ci=$(tr,"transformers-cli env"),tr.forEach(i),Si=$(ti," quando si crea un nuovo issue nel repo di \u{1F917} Transformers?"),ti.forEach(i),ai.forEach(i),Je=u(e),m(ne.$$.fragment,e),this.h()},h(){s(b,"name","hf:doc:metadata"),s(b,"content",JSON.stringify(hr)),s(A,"id","quiz-di-fine-capitolo"),s(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(A,"href","#quiz-di-fine-capitolo"),s(_,"class","relative group"),s(z,"id","1.-in-quale-ordine-si-deve-leggere-un-traceback-di-python?"),s(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(z,"href","#1.-in-quale-ordine-si-deve-leggere-un-traceback-di-python?"),s(x,"class","relative group"),s(T,"id","2.-che-cos\u2019\xE8-un-minimo-esempio-riproducibile?"),s(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(T,"href","#2.-che-cos\u2019\xE8-un-minimo-esempio-riproducibile?"),s(w,"class","relative group"),s(U,"id","3.-supponiamo-di-provare-a-eseguire-il-codice-seguente,-il-quale-produce-un-errore:"),s(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(U,"href","#3.-supponiamo-di-provare-a-eseguire-il-codice-seguente,-il-quale-produce-un-errore:"),s(q,"class","relative group"),s(N,"id","4.-supponiamo-di-aver-provato-a-eseguire-<code>trainer.train()</code>-e-di-trovarci-di-fronte-a-un-errore-criptico-che-non-ci-dice-esattamente-da-dove-proviene.-quale-dei-seguenti-\xE8-il-primo-posto-in-cui-cercare-gli-errori-nella-training-pipeline?"),s(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(N,"href","#4.-supponiamo-di-aver-provato-a-eseguire-<code>trainer.train()</code>-e-di-trovarci-di-fronte-a-un-errore-criptico-che-non-ci-dice-esattamente-da-dove-proviene.-quale-dei-seguenti-\xE8-il-primo-posto-in-cui-cercare-gli-errori-nella-training-pipeline?"),s(y,"class","relative group"),s(G,"id","5.-qual-\xE8-il-modo-migliore-per-fare-il-debug-di-un-errore-cuda?"),s(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(G,"href","#5.-qual-\xE8-il-modo-migliore-per-fare-il-debug-di-un-errore-cuda?"),s(P,"class","relative group"),s(Q,"id","6.-qual-\xE8-il-modo-migliore-per-far-risolvere-un-problema-su-github?"),s(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(Q,"href","#6.-qual-\xE8-il-modo-migliore-per-far-risolvere-un-problema-su-github?"),s(k,"class","relative group"),s(I,"id","7.-perch\xE9-l\u2019overfitting-di-un-batch-\xE8-di-solito-una-buona-tecnica-di-debugging?"),s(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(I,"href","#7.-perch\xE9-l\u2019overfitting-di-un-batch-\xE8-di-solito-una-buona-tecnica-di-debugging?"),s(E,"class","relative group"),s(F,"id","8.-perch\xE9-\xE8-una-buona-idea-includere-dettagli-sul-proprio-ambiente-di-sviluppo-con-<code>transformers-cli-env</code>-quando-si-crea-un-nuovo-issue-nel-repo-di-\u{1F917}-transformers?"),s(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(F,"href","#8.-perch\xE9-\xE8-una-buona-idea-includere-dettagli-sul-proprio-ambiente-di-sviluppo-con-<code>transformers-cli-env</code>-quando-si-crea-un-nuovo-issue-nel-repo-di-\u{1F917}-transformers?"),s(C,"class","relative group")},m(e,o){r(document.head,b),l(e,Ee,o),l(e,_,o),r(_,A),r(A,pe),d(R,pe,null),r(_,ni),r(_,ue),r(ue,si),l(e,Ce,o),d(D,e,o),l(e,Se,o),l(e,se,o),r(se,li),l(e,Ae,o),l(e,x,o),r(x,z),r(z,ce),d(j,ce,null),r(x,pi),r(x,me),r(me,ui),l(e,ze,o),d(L,e,o),l(e,Te,o),l(e,w,o),r(w,T),r(T,de),d(M,de,null),r(w,ci),r(w,fe),r(fe,mi),l(e,Ue,o),d(O,e,o),l(e,Ne,o),l(e,q,o),r(q,U),r(U,he),d(B,he,null),r(q,di),r(q,ve),r(ve,fi),l(e,Ge,o),d(J,e,o),l(e,Qe,o),l(e,le,o),r(le,hi),l(e,Ie,o),d(W,e,o),l(e,Fe,o),l(e,y,o),r(y,N),r(N,ge),d(K,ge,null),r(y,vi),r(y,V),r(V,gi),r(V,$e),r($e,$i),r(V,bi),l(e,He,o),d(X,e,o),l(e,Re,o),l(e,P,o),r(P,G),r(G,be),d(Y,be,null),r(P,_i),r(P,_e),r(_e,xi),l(e,De,o),d(Z,e,o),l(e,je,o),l(e,k,o),r(k,Q),r(Q,xe),d(ee,xe,null),r(k,wi),r(k,we),r(we,qi),l(e,Le,o),d(ie,e,o),l(e,Me,o),l(e,E,o),r(E,I),r(I,qe),d(re,qe,null),r(E,yi),r(E,ye),r(ye,Pi),l(e,Oe,o),d(oe,e,o),l(e,Be,o),l(e,C,o),r(C,F),r(F,Pe),d(ae,Pe,null),r(C,ki),r(C,te),r(te,Ei),r(te,ke),r(ke,Ci),r(te,Si),l(e,Je,o),d(ne,e,o),We=!0},p:ur,i(e){We||(f(R.$$.fragment,e),f(D.$$.fragment,e),f(j.$$.fragment,e),f(L.$$.fragment,e),f(M.$$.fragment,e),f(O.$$.fragment,e),f(B.$$.fragment,e),f(J.$$.fragment,e),f(W.$$.fragment,e),f(K.$$.fragment,e),f(X.$$.fragment,e),f(Y.$$.fragment,e),f(Z.$$.fragment,e),f(ee.$$.fragment,e),f(ie.$$.fragment,e),f(re.$$.fragment,e),f(oe.$$.fragment,e),f(ae.$$.fragment,e),f(ne.$$.fragment,e),We=!0)},o(e){h(R.$$.fragment,e),h(D.$$.fragment,e),h(j.$$.fragment,e),h(L.$$.fragment,e),h(M.$$.fragment,e),h(O.$$.fragment,e),h(B.$$.fragment,e),h(J.$$.fragment,e),h(W.$$.fragment,e),h(K.$$.fragment,e),h(X.$$.fragment,e),h(Y.$$.fragment,e),h(Z.$$.fragment,e),h(ee.$$.fragment,e),h(ie.$$.fragment,e),h(re.$$.fragment,e),h(oe.$$.fragment,e),h(ae.$$.fragment,e),h(ne.$$.fragment,e),We=!1},d(e){i(b),e&&i(Ee),e&&i(_),v(R),e&&i(Ce),v(D,e),e&&i(Se),e&&i(se),e&&i(Ae),e&&i(x),v(j),e&&i(ze),v(L,e),e&&i(Te),e&&i(w),v(M),e&&i(Ue),v(O,e),e&&i(Ne),e&&i(q),v(B),e&&i(Ge),v(J,e),e&&i(Qe),e&&i(le),e&&i(Ie),v(W,e),e&&i(Fe),e&&i(y),v(K),e&&i(He),v(X,e),e&&i(Re),e&&i(P),v(Y),e&&i(De),v(Z,e),e&&i(je),e&&i(k),v(ee),e&&i(Le),v(ie,e),e&&i(Me),e&&i(E),v(re),e&&i(Oe),v(oe,e),e&&i(Be),e&&i(C),v(ae),e&&i(Je),v(ne,e)}}}const hr={local:"quiz-di-fine-capitolo",title:"Quiz di fine capitolo"};function vr(Ai){return cr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qr extends nr{constructor(b){super();sr(this,b,vr,fr,lr,{})}}export{qr as default,hr as metadata};
