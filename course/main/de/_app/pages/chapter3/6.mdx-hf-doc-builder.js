var Nt=Object.defineProperty,Tt=Object.defineProperties;var Wt=Object.getOwnPropertyDescriptors;var wt=Object.getOwnPropertySymbols;var Kt=Object.prototype.hasOwnProperty,Ct=Object.prototype.propertyIsEnumerable;var vt=(p,n,a)=>n in p?Nt(p,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):p[n]=a,et=(p,n)=>{for(var a in n||(n={}))Kt.call(n,a)&&vt(p,a,n[a]);if(wt)for(var a of wt(n))Ct.call(n,a)&&vt(p,a,n[a]);return p},tt=(p,n)=>Tt(p,Wt(n));import{D as Bt,S as xt,i as St,s as At,e as s,k as $,Y as Dt,l as Je,c as l,a as d,m as _,Z as yt,d as e,b as u,g as b,G as t,Q as Mt,t as z,h as E,j as Ft,_ as Vt,L as bt,K as qt,$ as Ht,v as Pt,a0 as $t,a1 as Lt,w as F,M as It,x as V,y as q,o as W,p as Ot,q as K,B as H,n as Rt}from"../../chunks/vendor-hf-doc-builder.js";import{I as xe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as Zt}from"../../chunks/CourseFloatingBanner-hf-doc-builder.js";import{F as Gt}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";import"../../chunks/DocNotebookDropdown-hf-doc-builder.js";const nt=Bt({});function _t(p,n,a){const o=p.slice();return o[11]=n[a],o[13]=a,o}function kt(p){let n,a,o=p[11].correct?"Correct!":"Incorrect.",c,w,g,M=p[11].explain+"",x;return{c(){n=s("div"),a=s("span"),c=z(o),w=$(),g=new Dt,this.h()},l(D){n=l(D,"DIV",{class:!0});var y=d(n);a=l(y,"SPAN",{class:!0});var N=d(a);c=E(N,o),N.forEach(e),w=_(y),g=yt(y),y.forEach(e),this.h()},h(){u(a,"class","font-bold"),g.a=null,u(n,"class",x="alert alert-"+(p[11].correct?"success":"error")+" mt-1 mb-2.5 leading-normal")},m(D,y){b(D,n,y),t(n,a),t(a,c),t(n,w),g.m(M,n)},p(D,y){y&1&&o!==(o=D[11].correct?"Correct!":"Incorrect.")&&Ft(c,o),y&1&&M!==(M=D[11].explain+"")&&g.p(M),y&1&&x!==(x="alert alert-"+(D[11].correct?"success":"error")+" mt-1 mb-2.5 leading-normal")&&u(n,"class",x)},d(D){D&&e(n)}}}function zt(p){let n,a,o,c,w,g=p[11].text+"",M,x=p[4]&&p[4].includes(p[13]),D,y,N,v=x&&kt(p);return{c(){n=s("label"),a=s("input"),c=$(),w=new Dt,M=$(),v&&v.c(),D=Je(),this.h()},l(f){n=l(f,"LABEL",{class:!0});var h=d(n);a=l(h,"INPUT",{autocomplete:!0,class:!0,name:!0,type:!0}),c=_(h),w=yt(h),h.forEach(e),M=_(f),v&&v.l(f),D=Je(),this.h()},h(){u(a,"autocomplete","off"),u(a,"class","form-input -mt-1.5 mr-2"),u(a,"name","choice"),u(a,"type","checkbox"),a.__value=o=p[13],a.value=a.__value,p[7][0].push(a),w.a=null,u(n,"class","block")},m(f,h){b(f,n,h),t(n,a),a.checked=~p[3].indexOf(a.__value),t(n,c),w.m(g,n),b(f,M,h),v&&v.m(f,h),b(f,D,h),y||(N=Mt(a,"change",p[6]),y=!0)},p(f,h){h&8&&(a.checked=~f[3].indexOf(a.__value)),h&1&&g!==(g=f[11].text+"")&&w.p(g),h&16&&(x=f[4]&&f[4].includes(f[13])),x?v?v.p(f,h):(v=kt(f),v.c(),v.m(D.parentNode,D)):v&&(v.d(1),v=null)},d(f){f&&e(n),p[7][0].splice(p[7][0].indexOf(a),1),f&&e(M),v&&v.d(f),f&&e(D),y=!1,N()}}}function Et(p){let n;function a(w,g){return w[1]?Qt:w[2]?jt:Ut}let o=a(p),c=o(p);return{c(){n=s("div"),c.c(),this.h()},l(w){n=l(w,"DIV",{class:!0});var g=d(n);c.l(g),g.forEach(e),this.h()},h(){u(n,"class","font-semibold leading-snug")},m(w,g){b(w,n,g),c.m(n,null)},p(w,g){o!==(o=a(w))&&(c.d(1),c=o(w),c&&(c.c(),c.m(n,null)))},d(w){w&&e(n),c.d()}}}function Ut(p){let n,a;return{c(){n=s("span"),a=z("You got all the answers!"),this.h()},l(o){n=l(o,"SPAN",{class:!0});var c=d(n);a=E(c,"You got all the answers!"),c.forEach(e),this.h()},h(){u(n,"class","text-green-900 dark:text-green-200")},m(o,c){b(o,n,c),t(n,a)},d(o){o&&e(n)}}}function jt(p){let n,a;return{c(){n=s("span"),a=z("You didn't select all the correct answers, there's more!"),this.h()},l(o){n=l(o,"SPAN",{class:!0});var c=d(n);a=E(c,"You didn't select all the correct answers, there's more!"),c.forEach(e),this.h()},h(){u(n,"class","text-red-900 dark:text-red-200")},m(o,c){b(o,n,c),t(n,a)},d(o){o&&e(n)}}}function Qt(p){let n,a;return{c(){n=s("span"),a=z("Looks like at least one of your answers is wrong, try again!"),this.h()},l(o){n=l(o,"SPAN",{class:!0});var c=d(n);a=E(c,"Looks like at least one of your answers is wrong, try again!"),c.forEach(e),this.h()},h(){u(n,"class","text-red-900 dark:text-red-200")},m(o,c){b(o,n,c),t(n,a)},d(o){o&&e(n)}}}function Yt(p){let n,a,o,c,w,g,M,x,D,y,N=p[0],v=[];for(let h=0;h<N.length;h+=1)v[h]=zt(_t(p,N,h));let f=p[4].length&&Et(p);return{c(){n=s("div"),a=s("form");for(let h=0;h<v.length;h+=1)v[h].c();o=$(),c=s("div"),w=s("button"),g=z("Submit"),x=$(),f&&f.c(),this.h()},l(h){n=l(h,"DIV",{});var k=d(n);a=l(k,"FORM",{});var S=d(a);for(let Q=0;Q<v.length;Q+=1)v[Q].l(S);o=_(S),c=l(S,"DIV",{class:!0});var T=d(c);w=l(T,"BUTTON",{class:!0,type:!0});var C=d(w);g=E(C,"Submit"),C.forEach(e),x=_(T),f&&f.l(T),T.forEach(e),S.forEach(e),k.forEach(e),this.h()},h(){u(w,"class","btn px-4 mr-4"),u(w,"type","submit"),w.disabled=M=!p[3].length,u(c,"class","flex flex-row items-center mt-3")},m(h,k){b(h,n,k),t(n,a);for(let S=0;S<v.length;S+=1)v[S].m(a,null);t(a,o),t(a,c),t(c,w),t(w,g),t(c,x),f&&f.m(c,null),D||(y=Mt(a,"submit",Vt(p[8])),D=!0)},p(h,[k]){if(k&25){N=h[0];let S;for(S=0;S<N.length;S+=1){const T=_t(h,N,S);v[S]?v[S].p(T,k):(v[S]=zt(T),v[S].c(),v[S].m(a,o))}for(;S<v.length;S+=1)v[S].d(1);v.length=N.length}k&8&&M!==(M=!h[3].length)&&(w.disabled=M),h[4].length?f?f.p(h,k):(f=Et(h),f.c(),f.m(c,null)):f&&(f.d(1),f=null)},i:bt,o:bt,d(h){h&&e(n),qt(v,h),f&&f.d(),D=!1,y()}}}function Xt(p="_"){return`${p}${Math.random().toString(36).substr(2,9)}`}function Jt(p,n,a){let o;Ht(p,nt,h=>a(9,o=h));let{choices:c}=n;const w=Xt();let g=!1,M=!1,x=[],D=[];Pt(()=>{$t(nt,o=tt(et({},o),{[w]:{correct:!1}}),o)});function y(){a(1,g=!1),a(2,M=!1);for(let k=0;k<c.length;k++){const S=c[k];S.correct&&!x.includes(k)?a(2,M=!0):!S.correct&&x.includes(k)&&a(1,g=!0)}if(a(4,D=x),$t(nt,o=tt(et({},o),{[w]:{correct:!M&&!g}}),o),Object.values(o).every(({correct:k})=>k)){const k=new Event("ChapterComplete");window.dispatchEvent(k)}}const N=[[]];function v(){x=Lt(N[0],this.__value,this.checked),a(3,x)}const f=()=>y();return p.$$set=h=>{"choices"in h&&a(0,c=h.choices)},[c,g,M,x,D,y,v,N,f]}class Se extends xt{constructor(n){super();St(this,n,Jt,Yt,At,{choices:0})}}function en(p){let n,a,o,c,w,g,M,x,D,y,N,v,f,h,k,S,T,C,Q,re,_e,Y,se,X,le,be,Z,oe,G,I,J,R,de,L,ee,ie,ce,fe,U;return c=new xe({}),k=new Se({props:{choices:[{text:"Nichts, aber du bekommst eine Warnung.",explain:"Du bekommst eine Warnung, aber das ist noch nicht alles!"},{text:"Der Kopf des vorher trainierten Modells wird verworfen und stattdessen ein neuer Kopf eingef\xFCgt, der f\xFCr die Aufgabe geeignet ist.",explain:"correct. Wenn wir zum Beispiel <code>TFAutoModelForSequenceClassification</code> mit <code>bert-base-uncased</code> verwendet haben, bekamen wir beim Instanziieren des Modells Warnungen. Der trainierte Kopf wird nicht f\xFCr die Sequenzklassifizierung verwendet, also wird er verworfen und ein neuer Kopf mit zuf\xE4lligen Gewichten instanziiert.",correct:!0},{text:"Der Kopf des vorher trainierten Modells wird verworfen.",explain:"Es muss etwas anderes passieren. Versuch es noch einmal!"},{text:"Nichts, da das Modell noch f\xFCr die andere Aufgabe fein-tunen kann.",explain:"Der Kopf des trainierten Modells wurde nicht f\xFCr die L\xF6sung dieser Aufgabe trainiert, also sollten wir den Kopf verwerfen!"}]}}),re=new xe({}),oe=new Se({props:{choices:[{text:"Die Modelle funktionieren sofort auf einem TPU.",explain:"Fast! Es sind einige kleine zus\xE4tzliche \xC4nderungen erforderlich. Zum Beispiel musst du alles in einem <code>TPUStrategy</code>-Bereich ausf\xFChren, einschlie\xDFlich der Initialisierung des Modells."},{text:"Du kannst bestehende Methoden wie <code>compile()</code>, <code>fit()&lt;c/ode> und &lt;code>predict()</code> nutzen.",erkl\u00E4ren:"Richtig! Wenn du erst einmal die Daten hast, erfordert das Training mit ihnen nur noch wenig Arbeit.",correct:!0},{text:"Du lernst sowohl Keras als auch Transformer kennen.",explain:"Korrekt, aber wir suchen nach etwas anderem :)",correct:!0},{text:"Du kannst ganz einfach Metriken f\xFCr den Datensatz berechnen.",explain:"Keras hilft uns beim Training und der Auswertung des Modells, nicht bei der Berechnung von datensatzbezogenen Metriken."}]}}),de=new xe({}),fe=new Se({props:{choices:[{text:"Indem du wir eine Unterklasse von <code>tf.keras.metrics.Metric</code> erstellen.",explain:"Gro\xDFartig!",correct:!0},{text:"Durch Verwendung der funktionalen Keras-API.",explain:"Versuch es noch einmal!"},{text:"Durch die Verwendung einer Callable mit der Signatur <code>metric_fn(y_true, y_pred)</code>.",explain:"Korrekt!",correct:!0},{text:"Indem du es googelst.",explain:"Das ist nicht die Antwort, nach der wir suchen, aber es sollte dir helfen, sie zu finden.",correct:!0}]}}),{c(){n=s("h3"),a=s("a"),o=s("span"),F(c.$$.fragment),w=$(),g=s("span"),M=z("4. Was passiert, wenn du eine der Klassen "),x=s("code"),D=z("TFAutoModelForXxx"),y=z(" mit einem vortrainierten Sprachmodell (z. B. "),N=s("code"),v=z("bert-base-uncased"),f=z(") instanziierst, das einer anderen Aufgabe entspricht als der, f\xFCr die es trainiert wurde?"),h=$(),F(k.$$.fragment),S=$(),T=s("h3"),C=s("a"),Q=s("span"),F(re.$$.fragment),_e=$(),Y=s("span"),se=z("5. Die Tensorflow Modelle von "),X=s("code"),le=z("transformers"),be=z(" sind bereits Keras Modelle. Welchen Vorteil bietet das?"),Z=$(),F(oe.$$.fragment),G=$(),I=s("h3"),J=s("a"),R=s("span"),F(de.$$.fragment),L=$(),ee=s("span"),ie=z("6. Wie kannst du deine eigene benutzerdefinierte Metrik definieren?"),ce=$(),F(fe.$$.fragment),this.h()},l(m){n=l(m,"H3",{class:!0});var B=d(n);a=l(B,"A",{id:!0,class:!0,href:!0});var Ae=d(a);o=l(Ae,"SPAN",{});var $e=d(o);V(c.$$.fragment,$e),$e.forEach(e),Ae.forEach(e),w=_(B),g=l(B,"SPAN",{});var ae=d(g);M=E(ae,"4. Was passiert, wenn du eine der Klassen "),x=l(ae,"CODE",{});var ue=d(x);D=E(ue,"TFAutoModelForXxx"),ue.forEach(e),y=E(ae," mit einem vortrainierten Sprachmodell (z. B. "),N=l(ae,"CODE",{});var me=d(N);v=E(me,"bert-base-uncased"),me.forEach(e),f=E(ae,") instanziierst, das einer anderen Aufgabe entspricht als der, f\xFCr die es trainiert wurde?"),ae.forEach(e),B.forEach(e),h=_(m),V(k.$$.fragment,m),S=_(m),T=l(m,"H3",{class:!0});var pe=d(T);C=l(pe,"A",{id:!0,class:!0,href:!0});var te=d(C);Q=l(te,"SPAN",{});var De=d(Q);V(re.$$.fragment,De),De.forEach(e),te.forEach(e),_e=_(pe),Y=l(pe,"SPAN",{});var j=d(Y);se=E(j,"5. Die Tensorflow Modelle von "),X=l(j,"CODE",{});var ge=d(X);le=E(ge,"transformers"),ge.forEach(e),be=E(j," sind bereits Keras Modelle. Welchen Vorteil bietet das?"),j.forEach(e),pe.forEach(e),Z=_(m),V(oe.$$.fragment,m),G=_(m),I=l(m,"H3",{class:!0});var we=d(I);J=l(we,"A",{id:!0,class:!0,href:!0});var ne=d(J);R=l(ne,"SPAN",{});var ye=d(R);V(de.$$.fragment,ye),ye.forEach(e),ne.forEach(e),L=_(we),ee=l(we,"SPAN",{});var O=d(ee);ie=E(O,"6. Wie kannst du deine eigene benutzerdefinierte Metrik definieren?"),O.forEach(e),we.forEach(e),ce=_(m),V(fe.$$.fragment,m),this.h()},h(){u(a,"id","4.-was-passiert,-wenn-du-eine-der-klassen-<code>tfautomodelforxxx</code>-mit-einem-vortrainierten-sprachmodell-(z.-b.-<code>bert-base-uncased</code>)-instanziierst,-das-einer-anderen-aufgabe-entspricht-als-der,-f\xFCr-die-es-trainiert-wurde?"),u(a,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(a,"href","#4.-was-passiert,-wenn-du-eine-der-klassen-<code>tfautomodelforxxx</code>-mit-einem-vortrainierten-sprachmodell-(z.-b.-<code>bert-base-uncased</code>)-instanziierst,-das-einer-anderen-aufgabe-entspricht-als-der,-f\xFCr-die-es-trainiert-wurde?"),u(n,"class","relative group"),u(C,"id","5.-die-tensorflow-modelle-von-<code>transformers</code>-sind-bereits-keras-modelle.-welchen-vorteil-bietet-das?"),u(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(C,"href","#5.-die-tensorflow-modelle-von-<code>transformers</code>-sind-bereits-keras-modelle.-welchen-vorteil-bietet-das?"),u(T,"class","relative group"),u(J,"id","6.-wie-kannst-du-deine-eigene-benutzerdefinierte-metrik-definieren?"),u(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(J,"href","#6.-wie-kannst-du-deine-eigene-benutzerdefinierte-metrik-definieren?"),u(I,"class","relative group")},m(m,B){b(m,n,B),t(n,a),t(a,o),q(c,o,null),t(n,w),t(n,g),t(g,M),t(g,x),t(x,D),t(g,y),t(g,N),t(N,v),t(g,f),b(m,h,B),q(k,m,B),b(m,S,B),b(m,T,B),t(T,C),t(C,Q),q(re,Q,null),t(T,_e),t(T,Y),t(Y,se),t(Y,X),t(X,le),t(Y,be),b(m,Z,B),q(oe,m,B),b(m,G,B),b(m,I,B),t(I,J),t(J,R),q(de,R,null),t(I,L),t(I,ee),t(ee,ie),b(m,ce,B),q(fe,m,B),U=!0},i(m){U||(K(c.$$.fragment,m),K(k.$$.fragment,m),K(re.$$.fragment,m),K(oe.$$.fragment,m),K(de.$$.fragment,m),K(fe.$$.fragment,m),U=!0)},o(m){W(c.$$.fragment,m),W(k.$$.fragment,m),W(re.$$.fragment,m),W(oe.$$.fragment,m),W(de.$$.fragment,m),W(fe.$$.fragment,m),U=!1},d(m){m&&e(n),H(c),m&&e(h),H(k,m),m&&e(S),m&&e(T),H(re),m&&e(Z),H(oe,m),m&&e(G),m&&e(I),H(de),m&&e(ce),H(fe,m)}}}function tn(p){let n,a,o,c,w,g,M,x,D,y,N,v,f,h,k,S,T,C,Q,re,_e,Y,se,X,le,be,Z,oe,G,I,J,R,de,L,ee,ie,ce,fe,U,m,B,Ae,$e,ae,ue,me,pe,te,De,j,ge,we,ne,ye,O,ve,ke,Ce,Le,ze,Me,i,A,he,Ee,Pe,Ie,Be,Ne,Fe,Te,We;return c=new xe({}),v=new Se({props:{choices:[{text:"Die Ergebnisse der Funktion werden im Cache zwischengespeichert, sodass es keine Zeit kostet, wenn wir den Code erneut ausf\xFChren.",explain:"Das ist tats\xE4chlich einer der tollen Vorteile dieser Methode! Es ist aber nicht der einzige...",correct:!0},{text:"Sie kann Multiprocessing anwenden, um schneller zu sein, als die Funktion auf jedes Element des Datensatzes anzuwenden.",explain:"Das ist ein nettes Feature dieser Methode, aber es ist nicht das einzige!",correct:!0},{text:"Es wird nicht der gesamte Datensatz in den Speicher geladen, sondern die Ergebnisse werden gespeichert, sobald ein Element verarbeitet wurde.",explain:"Das ist ein Vorteil dieser Methode. Es gibt aber noch andere!",correct:!0}]}}),T=new xe({}),Y=new Se({props:{choices:[{text:"Das ist, wenn du die Eingaben f\xFCr jeden Batch auf die maximale L\xE4nge des gesamten Datensatzes auff\xFCllst.",explain:"Bei der Erstellung des Batches wird zwar aufgef\xFCllt, aber nicht auf die maximale L\xE4nge des gesamten Datensatzes."},{text:"Wenn du deine Eingaben bei der Erstellung des Batches auf die maximale L\xE4nge der S\xE4tze in diesem Batch auff\xFCllst.",explain:"Das ist richtig! Der 'dynamische' Teil kommt daher, dass die Gr\xF6\xDFe jedes Batches zum Zeitpunkt der Erstellung festgelegt wird und alle deine Batches daher unterschiedliche Formen haben k\xF6nnen.",correct:!0},{text:"Das ist, wenn du deine Eingaben so auff\xFCllst, dass jeder Satz die gleiche Anzahl von Token hat wie der vorherige im Datensatz.",explain:"Das ist nicht richtig, au\xDFerdem macht es keinen Sinn, sich die Reihenfolge im Datensatz anzusehen, da wir ihn beim Training mischen."}]}}),Z=new xe({}),R=new Se({props:{choices:[{text:"Sie stellt sicher, dass alle Sequenzen im Datensatz die gleiche L\xE4nge haben.",explain:"Eine collate Funktion befasst sich mit der Bearbeitung einzelner Batches, nicht des gesamten Datensatzes. Au\xDFerdem geht es hier um allgemeine Funktionen zum Sortieren, nicht um <code>DataCollatorWithPadding</code> im Speziellen."},{text:"Er stellt alle Proben in einem Batch zusammen.",explain:"Richtig! Du kannst die collate Funktion als Argument eines <code>DataLoaders</code> \xFCbergeben. Wir haben die Funktion <code>DataCollatorWithPadding</code> verwendet, die alle Elemente in einem Batch auff\xFCllt, damit sie die gleiche L\xE4nge haben.",correct:!0},{text:"Es wird der gesamte Datensatz vorverarbeitet.",explain:"Das w\xE4re eine Vorverarbeitungsfunktion, keine Zusammenfassungsfunktion wie <code>collate</code>."},{text:"Sie schneidet die Sequenzen im Datensatz ab.",explain:"Eine collate Funktion behandelt einzelne Batches, nicht den gesamten Datensatz. Wenn du am Abschneiden interessiert bist, kannst du das <code>truncate</code> Argument von dem <code>tokenizer</code> verwenden."}]}}),ce=new xe({}),te=new Se({props:{choices:[{text:"Nichts, aber du bekommst eine Warnung.",explain:"Du bekommst eine Warnung, aber das ist noch nicht alles!"},{text:"Der Kopf des vorher trainierten Modells wird verworfen und stattdessen ein neuer Kopf eingef\xFCgt, der f\xFCr die Aufgabe geeignet ist.",explain:"Korrekt. Wenn wir zum Beispiel <code>AutoModelForSequenceClassification</code> mit <code>bert-base-uncased</code> verwendet haben, bekamen wir beim Instanziieren des Modells Warnungen. Der trainierte Kopf wird nicht f\xFCr die Sequenzklassifizierung verwendet, also wird er verworfen und ein neuer Kopf mit zuf\xE4lliger Gewichtung wird instanziiert.",correct:!0},{text:"Der Kopf des vorher trainierten Modells wird verworfen.",explain:"Es muss etwas anderes passieren. Versuch es noch einmal!"},{text:"Nichts, da das Modell noch f\xFCr die andere Aufgabe fein-tunen kann.",explain:"Der Kopf des trainierten Modells wurde nicht f\xFCr die L\xF6sung dieser Aufgabe trainiert, also sollte der Kopf verworfen werden!"}]}}),ne=new xe({}),Me=new Se({props:{choices:[{text:"Sie enth\xE4lt alle Hyperparameter, die f\xFCr das Training und die Auswertung mit dem <code>Trainer</code> verwendet werden.",explain:"Richtig!",correct:!0},{text:"Hier wird die Gr\xF6\xDFe des Modells angegeben.",explain:"Die Gr\xF6\xDFe des Modells wird durch die Konfiguration des Modells festgelegt, nicht durch die Klasse <code>TrainingArguments</code>."},{text:"Sie enth\xE4lt nur die Hyperparameter, die f\xFCr die Auswertung verwendet werden.",explain:"In unserem Beispiel haben wir angegeben, wo das Modell und seine Kontrollpunkte gespeichert werden sollen. Versuche es noch einmal!"},{text:"Er enth\xE4lt nur die Hyperparameter, die f\xFCr das Training verwendet werden.",explain:"In unserem Beispiel haben wir auch eine <code>Auswertungsstrategie</code> verwendet, was sich auf die Auswertung auswirkt. Versuche es noch einmal!"}]}}),Pe=new xe({}),Te=new Se({props:{choices:[{text:"Sie bietet Zugang zu schnelleren Modellen.",explain:"Nein, die \u{1F917} Accelerate Bibliothek stellt keine Modelle zur Verf\xFCgung."},{text:"Sie bietet eine High-Level-API, damit ich keine eigene Trainingsschleife implementieren muss.",explain:"Das haben wir mit <code>Trainer</code> gemacht, nicht mit der \u{1F917} Accelerate Bibliothek. Versuch es noch einmal!"},{text:"Damit funktionieren unsere Trainingsschleifen bei verteilten Strategien.",explain:"Richtig! Mit \u{1F917} Accelerate funktionieren deine Trainingsschleifen f\xFCr mehrere verteilte GPUs und TPUs.",correct:!0},{Text:"Es bietet mehr Funktionen zur Optimierung.",explain:"Nein, die \u{1F917} Accelerate Bibliothek stellt keine Optimierungsfunktionen zur Verf\xFCgung."}]}}),{c(){n=s("h3"),a=s("a"),o=s("span"),F(c.$$.fragment),w=$(),g=s("span"),M=z("4. Was sind die Vorteile der Methode "),x=s("code"),D=z("Dataset.map()"),y=z("?"),N=$(),F(v.$$.fragment),f=$(),h=s("h3"),k=s("a"),S=s("span"),F(T.$$.fragment),C=$(),Q=s("span"),re=z("5. Was bedeutet dynamisches Padding?"),_e=$(),F(Y.$$.fragment),se=$(),X=s("h3"),le=s("a"),be=s("span"),F(Z.$$.fragment),oe=$(),G=s("span"),I=z("6. Welchen Zweck hat die Funktion collate?"),J=$(),F(R.$$.fragment),de=$(),L=s("h3"),ee=s("a"),ie=s("span"),F(ce.$$.fragment),fe=$(),U=s("span"),m=z("7. Was passiert, wenn du eine der Klassen "),B=s("code"),Ae=z("AutoModelForXxx"),$e=z(" mit einem vortrainierten Sprachmodell (z. B. "),ae=s("code"),ue=z("bert-base-uncased"),me=z(") instanziierst, das einer anderen Aufgabe entspricht als der, f\xFCr die es trainiert wurde?"),pe=$(),F(te.$$.fragment),De=$(),j=s("h3"),ge=s("a"),we=s("span"),F(ne.$$.fragment),ye=$(),O=s("span"),ve=z("8. Was ist der Zweck von "),ke=s("code"),Ce=z("TrainingArguments"),Le=z("?"),ze=$(),F(Me.$$.fragment),i=$(),A=s("h3"),he=s("a"),Ee=s("span"),F(Pe.$$.fragment),Ie=$(),Be=s("span"),Ne=z("9. Warum solltest du die \u{1F917} Accelerate Bibliothek benutzen?"),Fe=$(),F(Te.$$.fragment),this.h()},l(r){n=l(r,"H3",{class:!0});var P=d(n);a=l(P,"A",{id:!0,class:!0,href:!0});var Ke=d(a);o=l(Ke,"SPAN",{});var Re=d(o);V(c.$$.fragment,Re),Re.forEach(e),Ke.forEach(e),w=_(P),g=l(P,"SPAN",{});var Ve=d(g);M=E(Ve,"4. Was sind die Vorteile der Methode "),x=l(Ve,"CODE",{});var qe=d(x);D=E(qe,"Dataset.map()"),qe.forEach(e),y=E(Ve,"?"),Ve.forEach(e),P.forEach(e),N=_(r),V(v.$$.fragment,r),f=_(r),h=l(r,"H3",{class:!0});var He=d(h);k=l(He,"A",{id:!0,class:!0,href:!0});var Ze=d(k);S=l(Ze,"SPAN",{});var Ge=d(S);V(T.$$.fragment,Ge),Ge.forEach(e),Ze.forEach(e),C=_(He),Q=l(He,"SPAN",{});var rt=d(Q);re=E(rt,"5. Was bedeutet dynamisches Padding?"),rt.forEach(e),He.forEach(e),_e=_(r),V(Y.$$.fragment,r),se=_(r),X=l(r,"H3",{class:!0});var Ue=d(X);le=l(Ue,"A",{id:!0,class:!0,href:!0});var it=d(le);be=l(it,"SPAN",{});var at=d(be);V(Z.$$.fragment,at),at.forEach(e),it.forEach(e),oe=_(Ue),G=l(Ue,"SPAN",{});var st=d(G);I=E(st,"6. Welchen Zweck hat die Funktion collate?"),st.forEach(e),Ue.forEach(e),J=_(r),V(R.$$.fragment,r),de=_(r),L=l(r,"H3",{class:!0});var je=d(L);ee=l(je,"A",{id:!0,class:!0,href:!0});var lt=d(ee);ie=l(lt,"SPAN",{});var ot=d(ie);V(ce.$$.fragment,ot),ot.forEach(e),lt.forEach(e),fe=_(je),U=l(je,"SPAN",{});var Oe=d(U);m=E(Oe,"7. Was passiert, wenn du eine der Klassen "),B=l(Oe,"CODE",{});var dt=d(B);Ae=E(dt,"AutoModelForXxx"),dt.forEach(e),$e=E(Oe," mit einem vortrainierten Sprachmodell (z. B. "),ae=l(Oe,"CODE",{});var ct=d(ae);ue=E(ct,"bert-base-uncased"),ct.forEach(e),me=E(Oe,") instanziierst, das einer anderen Aufgabe entspricht als der, f\xFCr die es trainiert wurde?"),Oe.forEach(e),je.forEach(e),pe=_(r),V(te.$$.fragment,r),De=_(r),j=l(r,"H3",{class:!0});var Qe=d(j);ge=l(Qe,"A",{id:!0,class:!0,href:!0});var ut=d(ge);we=l(ut,"SPAN",{});var ht=d(we);V(ne.$$.fragment,ht),ht.forEach(e),ut.forEach(e),ye=_(Qe),O=l(Qe,"SPAN",{});var Ye=d(O);ve=E(Ye,"8. Was ist der Zweck von "),ke=l(Ye,"CODE",{});var ft=d(ke);Ce=E(ft,"TrainingArguments"),ft.forEach(e),Le=E(Ye,"?"),Ye.forEach(e),Qe.forEach(e),ze=_(r),V(Me.$$.fragment,r),i=_(r),A=l(r,"H3",{class:!0});var Xe=d(A);he=l(Xe,"A",{id:!0,class:!0,href:!0});var mt=d(he);Ee=l(mt,"SPAN",{});var pt=d(Ee);V(Pe.$$.fragment,pt),pt.forEach(e),mt.forEach(e),Ie=_(Xe),Be=l(Xe,"SPAN",{});var gt=d(Be);Ne=E(gt,"9. Warum solltest du die \u{1F917} Accelerate Bibliothek benutzen?"),gt.forEach(e),Xe.forEach(e),Fe=_(r),V(Te.$$.fragment,r),this.h()},h(){u(a,"id","4.-was-sind-die-vorteile-der-methode-<code>dataset.map()</code>?"),u(a,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(a,"href","#4.-was-sind-die-vorteile-der-methode-<code>dataset.map()</code>?"),u(n,"class","relative group"),u(k,"id","5.-was-bedeutet-dynamisches-padding?"),u(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(k,"href","#5.-was-bedeutet-dynamisches-padding?"),u(h,"class","relative group"),u(le,"id","6.-welchen-zweck-hat-die-funktion-collate?"),u(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(le,"href","#6.-welchen-zweck-hat-die-funktion-collate?"),u(X,"class","relative group"),u(ee,"id","7.-was-passiert,-wenn-du-eine-der-klassen-<code>automodelforxxx</code>-mit-einem-vortrainierten-sprachmodell-(z.-b.-<code>bert-base-uncased</code>)-instanziierst,-das-einer-anderen-aufgabe-entspricht-als-der,-f\xFCr-die-es-trainiert-wurde?"),u(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ee,"href","#7.-was-passiert,-wenn-du-eine-der-klassen-<code>automodelforxxx</code>-mit-einem-vortrainierten-sprachmodell-(z.-b.-<code>bert-base-uncased</code>)-instanziierst,-das-einer-anderen-aufgabe-entspricht-als-der,-f\xFCr-die-es-trainiert-wurde?"),u(L,"class","relative group"),u(ge,"id","8.-was-ist-der-zweck-von-<code>trainingarguments</code>?"),u(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ge,"href","#8.-was-ist-der-zweck-von-<code>trainingarguments</code>?"),u(j,"class","relative group"),u(he,"id","9.-warum-solltest-du-die-\u{1F917}-accelerate-bibliothek-benutzen?"),u(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(he,"href","#9.-warum-solltest-du-die-\u{1F917}-accelerate-bibliothek-benutzen?"),u(A,"class","relative group")},m(r,P){b(r,n,P),t(n,a),t(a,o),q(c,o,null),t(n,w),t(n,g),t(g,M),t(g,x),t(x,D),t(g,y),b(r,N,P),q(v,r,P),b(r,f,P),b(r,h,P),t(h,k),t(k,S),q(T,S,null),t(h,C),t(h,Q),t(Q,re),b(r,_e,P),q(Y,r,P),b(r,se,P),b(r,X,P),t(X,le),t(le,be),q(Z,be,null),t(X,oe),t(X,G),t(G,I),b(r,J,P),q(R,r,P),b(r,de,P),b(r,L,P),t(L,ee),t(ee,ie),q(ce,ie,null),t(L,fe),t(L,U),t(U,m),t(U,B),t(B,Ae),t(U,$e),t(U,ae),t(ae,ue),t(U,me),b(r,pe,P),q(te,r,P),b(r,De,P),b(r,j,P),t(j,ge),t(ge,we),q(ne,we,null),t(j,ye),t(j,O),t(O,ve),t(O,ke),t(ke,Ce),t(O,Le),b(r,ze,P),q(Me,r,P),b(r,i,P),b(r,A,P),t(A,he),t(he,Ee),q(Pe,Ee,null),t(A,Ie),t(A,Be),t(Be,Ne),b(r,Fe,P),q(Te,r,P),We=!0},i(r){We||(K(c.$$.fragment,r),K(v.$$.fragment,r),K(T.$$.fragment,r),K(Y.$$.fragment,r),K(Z.$$.fragment,r),K(R.$$.fragment,r),K(ce.$$.fragment,r),K(te.$$.fragment,r),K(ne.$$.fragment,r),K(Me.$$.fragment,r),K(Pe.$$.fragment,r),K(Te.$$.fragment,r),We=!0)},o(r){W(c.$$.fragment,r),W(v.$$.fragment,r),W(T.$$.fragment,r),W(Y.$$.fragment,r),W(Z.$$.fragment,r),W(R.$$.fragment,r),W(ce.$$.fragment,r),W(te.$$.fragment,r),W(ne.$$.fragment,r),W(Me.$$.fragment,r),W(Pe.$$.fragment,r),W(Te.$$.fragment,r),We=!1},d(r){r&&e(n),H(c),r&&e(N),H(v,r),r&&e(f),r&&e(h),H(T),r&&e(_e),H(Y,r),r&&e(se),r&&e(X),H(Z),r&&e(J),H(R,r),r&&e(de),r&&e(L),H(ce),r&&e(pe),H(te,r),r&&e(De),r&&e(j),H(ne),r&&e(ze),H(Me,r),r&&e(i),r&&e(A),H(Pe),r&&e(Fe),H(Te,r)}}}function nn(p){let n,a,o,c,w,g,M,x,D,y,N,v,f,h,k,S,T,C,Q,re,_e,Y,se,X,le,be,Z,oe,G,I,J,R,de,L,ee,ie,ce,fe,U,m,B,Ae,$e,ae,ue,me,pe,te,De,j,ge,we,ne,ye,O,ve,ke,Ce;o=new Gt({props:{fw:p[0]}}),x=new xe({}),f=new Zt({props:{chapter:3,classNames:"absolute z-10 right-0 top-0"}}),Z=new Se({props:{choices:[{text:"Joy (Freude)",explain:"Versuch es noch einmal - diese Emotion ist in diesem Datensatz vorhanden!"},{text:"Love (Liebe)",explain:"Versuch es noch einmal - diese Emotion ist in diesem Datensatz vorhanden!"},{text:"Confusion (Verwirrung)",explain:"Richtig! Verwirrung geh\xF6rt nicht zu den sechs Grundemotionen.",correct:!0},{Text:"Surprise (\xDCberraschung)",explain:"\xDCberraschung! Probier eine andere!"}]}}),R=new xe({}),$e=new Se({props:{choices:[{text:"Sentiment classification (Sentiment-Klassifizierung)",explain:"Das ist richtig! Das erkennst du an den Tags.",correct:!0},{text:"Machine translation (Maschinelle \xDCbersetzung)",explain:"Das war's noch nicht - sieh dir noch einmal die <a href='https://huggingface.co/datasets/ar_sarcasm'>Datensatzkarte</a> an!"},{text:"Named entity recognition (Eigennamenerkennung )",explain:"Das war's noch nicht - schau dir noch mal die <a href='https://huggingface.co/datasets/ar_sarcasm'>Datensatzkarte</a> an!"},{text:"Question answering (Fragenbeantwortung)",explain:"Leider wurde diese Frage nicht richtig beantwortet. Versuche es noch einmal!"}]}}),te=new xe({}),ne=new Se({props:{choices:[{text:"Satztoken_1 [SEP] Satztoken_2",explain:"Ein <code>[SEP]</code> spezielles Token wird ben\xF6tigt, um die beiden S\xE4tze zu trennen, aber das ist nicht das Einzige!"},{text:"[CLS] Satztoken_1 Satztoken_2",explain:"Ein <code>[CLS]</code> spezielles Token ist am Anfang erforderlich, aber das ist nicht das Einzige!"},{text:"[CLS] Satztoken_1 [SEP] Satztoken_2 [SEP]",explain:"Das ist richtig!",correct:!0},{text:"[CLS] Satztoken_1 [SEP] Satztoken_2",explain:"Ein <code>[CLS]</code> spezielles Token wird am Anfang ben\xF6tigt, sowie ein <code>[SEP]</code> spezielles Token, um die beiden S\xE4tze zu trennen, aber das ist noch nicht alles!"}]}});const Le=[tn,en],ze=[];function Me(i,A){return i[0]==="pt"?0:1}return O=Me(p),ve=ze[O]=Le[O](p),{c(){n=s("meta"),a=$(),F(o.$$.fragment),c=$(),w=s("h1"),g=s("a"),M=s("span"),F(x.$$.fragment),D=$(),y=s("span"),N=z("Quiz am Ende des Kapitels"),v=$(),F(f.$$.fragment),h=$(),k=s("p"),S=z("Teste, was du in diesem Kapitel gelernt hast!"),T=$(),C=s("h3"),Q=z("1. Der Datensatz "),re=s("code"),_e=z("emotion"),Y=z(" enth\xE4lt Twitter-Nachrichten, die mit Emotionen gelabelt sind. Suche im "),se=s("a"),X=z("Hub"),le=z(" nach dem Datensatz und lies die Datensatzkarte. Welche der folgenden Emotionen geh\xF6rt nicht zu den grundlegenden Emotionen?"),be=$(),F(Z.$$.fragment),oe=$(),G=s("h3"),I=s("a"),J=s("span"),F(R.$$.fragment),de=$(),L=s("span"),ee=z("2. Suche im "),ie=s("a"),ce=z("Hub"),fe=z(" nach dem Datensatz "),U=s("code"),m=z("ar_sarcasm"),B=z(". Welche Aufgabe unterst\xFCtzt er?"),Ae=$(),F($e.$$.fragment),ae=$(),ue=s("h3"),me=s("a"),pe=s("span"),F(te.$$.fragment),De=$(),j=s("span"),ge=z("3. Wie erwartet das BERT Modell, dass ein Satzpaar verarbeitet wird?"),we=$(),F(ne.$$.fragment),ye=$(),ve.c(),ke=Je(),this.h()},l(i){const A=It('[data-svelte="svelte-1phssyn"]',document.head);n=l(A,"META",{name:!0,content:!0}),A.forEach(e),a=_(i),V(o.$$.fragment,i),c=_(i),w=l(i,"H1",{class:!0});var he=d(w);g=l(he,"A",{id:!0,class:!0,href:!0});var Ee=d(g);M=l(Ee,"SPAN",{});var Pe=d(M);V(x.$$.fragment,Pe),Pe.forEach(e),Ee.forEach(e),D=_(he),y=l(he,"SPAN",{});var Ie=d(y);N=E(Ie,"Quiz am Ende des Kapitels"),Ie.forEach(e),he.forEach(e),v=_(i),V(f.$$.fragment,i),h=_(i),k=l(i,"P",{});var Be=d(k);S=E(Be,"Teste, was du in diesem Kapitel gelernt hast!"),Be.forEach(e),T=_(i),C=l(i,"H3",{});var Ne=d(C);Q=E(Ne,"1. Der Datensatz "),re=l(Ne,"CODE",{});var Fe=d(re);_e=E(Fe,"emotion"),Fe.forEach(e),Y=E(Ne," enth\xE4lt Twitter-Nachrichten, die mit Emotionen gelabelt sind. Suche im "),se=l(Ne,"A",{href:!0,rel:!0});var Te=d(se);X=E(Te,"Hub"),Te.forEach(e),le=E(Ne," nach dem Datensatz und lies die Datensatzkarte. Welche der folgenden Emotionen geh\xF6rt nicht zu den grundlegenden Emotionen?"),Ne.forEach(e),be=_(i),V(Z.$$.fragment,i),oe=_(i),G=l(i,"H3",{class:!0});var We=d(G);I=l(We,"A",{id:!0,class:!0,href:!0});var r=d(I);J=l(r,"SPAN",{});var P=d(J);V(R.$$.fragment,P),P.forEach(e),r.forEach(e),de=_(We),L=l(We,"SPAN",{});var Ke=d(L);ee=E(Ke,"2. Suche im "),ie=l(Ke,"A",{href:!0,rel:!0});var Re=d(ie);ce=E(Re,"Hub"),Re.forEach(e),fe=E(Ke," nach dem Datensatz "),U=l(Ke,"CODE",{});var Ve=d(U);m=E(Ve,"ar_sarcasm"),Ve.forEach(e),B=E(Ke,". Welche Aufgabe unterst\xFCtzt er?"),Ke.forEach(e),We.forEach(e),Ae=_(i),V($e.$$.fragment,i),ae=_(i),ue=l(i,"H3",{class:!0});var qe=d(ue);me=l(qe,"A",{id:!0,class:!0,href:!0});var He=d(me);pe=l(He,"SPAN",{});var Ze=d(pe);V(te.$$.fragment,Ze),Ze.forEach(e),He.forEach(e),De=_(qe),j=l(qe,"SPAN",{});var Ge=d(j);ge=E(Ge,"3. Wie erwartet das BERT Modell, dass ein Satzpaar verarbeitet wird?"),Ge.forEach(e),qe.forEach(e),we=_(i),V(ne.$$.fragment,i),ye=_(i),ve.l(i),ke=Je(),this.h()},h(){u(n,"name","hf:doc:metadata"),u(n,"content",JSON.stringify(rn)),u(g,"id","quiz-am-ende-des-kapitels"),u(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(g,"href","#quiz-am-ende-des-kapitels"),u(w,"class","relative group"),u(se,"href","https://huggingface.co/datasets"),u(se,"rel","nofollow"),u(I,"id","2.-suche-im-hub-nach-dem-datensatz-<code>ar_sarcasm</code>.-welche-aufgabe-unterst\xFCtzt-er?"),u(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(I,"href","#2.-suche-im-hub-nach-dem-datensatz-<code>ar_sarcasm</code>.-welche-aufgabe-unterst\xFCtzt-er?"),u(ie,"href","https://huggingface.co/datasets"),u(ie,"rel","nofollow"),u(G,"class","relative group"),u(me,"id","3.-wie-erwartet-das-bert-modell,-dass-ein-satzpaar-verarbeitet-wird?"),u(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(me,"href","#3.-wie-erwartet-das-bert-modell,-dass-ein-satzpaar-verarbeitet-wird?"),u(ue,"class","relative group")},m(i,A){t(document.head,n),b(i,a,A),q(o,i,A),b(i,c,A),b(i,w,A),t(w,g),t(g,M),q(x,M,null),t(w,D),t(w,y),t(y,N),b(i,v,A),q(f,i,A),b(i,h,A),b(i,k,A),t(k,S),b(i,T,A),b(i,C,A),t(C,Q),t(C,re),t(re,_e),t(C,Y),t(C,se),t(se,X),t(C,le),b(i,be,A),q(Z,i,A),b(i,oe,A),b(i,G,A),t(G,I),t(I,J),q(R,J,null),t(G,de),t(G,L),t(L,ee),t(L,ie),t(ie,ce),t(L,fe),t(L,U),t(U,m),t(L,B),b(i,Ae,A),q($e,i,A),b(i,ae,A),b(i,ue,A),t(ue,me),t(me,pe),q(te,pe,null),t(ue,De),t(ue,j),t(j,ge),b(i,we,A),q(ne,i,A),b(i,ye,A),ze[O].m(i,A),b(i,ke,A),Ce=!0},p(i,[A]){const he={};A&1&&(he.fw=i[0]),o.$set(he);let Ee=O;O=Me(i),O!==Ee&&(Rt(),W(ze[Ee],1,1,()=>{ze[Ee]=null}),Ot(),ve=ze[O],ve||(ve=ze[O]=Le[O](i),ve.c()),K(ve,1),ve.m(ke.parentNode,ke))},i(i){Ce||(K(o.$$.fragment,i),K(x.$$.fragment,i),K(f.$$.fragment,i),K(Z.$$.fragment,i),K(R.$$.fragment,i),K($e.$$.fragment,i),K(te.$$.fragment,i),K(ne.$$.fragment,i),K(ve),Ce=!0)},o(i){W(o.$$.fragment,i),W(x.$$.fragment,i),W(f.$$.fragment,i),W(Z.$$.fragment,i),W(R.$$.fragment,i),W($e.$$.fragment,i),W(te.$$.fragment,i),W(ne.$$.fragment,i),W(ve),Ce=!1},d(i){e(n),i&&e(a),H(o,i),i&&e(c),i&&e(w),H(x),i&&e(v),H(f,i),i&&e(h),i&&e(k),i&&e(T),i&&e(C),i&&e(be),H(Z,i),i&&e(oe),i&&e(G),H(R),i&&e(Ae),H($e,i),i&&e(ae),i&&e(ue),H(te),i&&e(we),H(ne,i),i&&e(ye),ze[O].d(i),i&&e(ke)}}}const rn={local:"quiz-am-ende-des-kapitels",title:"Quiz am Ende des Kapitels"};function an(p,n,a){let o="pt";return Pt(()=>{const c=new URLSearchParams(window.location.search);a(0,o=c.get("fw")||"pt")}),[o]}class hn extends xt{constructor(n){super();St(this,n,an,nn,At,{})}}export{hn as default,rn as metadata};
