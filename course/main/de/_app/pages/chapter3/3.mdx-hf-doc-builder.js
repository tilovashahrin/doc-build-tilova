import{S as xa,i as Wa,s as Ia,e as s,k as u,w as g,t as r,M as La,c as a,d as t,m as c,x as w,a as l,h as i,b as h,G as n,g as o,y as v,q as b,o as _,B as k,v as Na}from"../../chunks/vendor-hf-doc-builder.js";import{D as Ha,Y as Ra,T as Va}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";import{I as Ts}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as q}from"../../chunks/CodeBlock-hf-doc-builder.js";import{F as Za}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";function Ja(ge){let f,P,p,A,D,E,T,O,I,X,we;return{c(){f=s("p"),P=r("\u{1F4A1} Wenn du dein Modell w\xE4hrend des Trainings automatisch in das Hub hochladen m\xF6chtest, kann in "),p=s("code"),A=r("TrainingArguments"),D=r(" das Argument "),E=s("code"),T=r("push_to_hub=True"),O=r(" angegeben werden. Dar\xFCber erfahren wir in "),I=s("a"),X=r("Kapitel 4"),we=r(" mehr."),this.h()},l(L){f=a(L,"P",{});var $=l(f);P=i($,"\u{1F4A1} Wenn du dein Modell w\xE4hrend des Trainings automatisch in das Hub hochladen m\xF6chtest, kann in "),p=a($,"CODE",{});var ve=l(p);A=i(ve,"TrainingArguments"),ve.forEach(t),D=i($," das Argument "),E=a($,"CODE",{});var N=l(E);T=i(N,"push_to_hub=True"),N.forEach(t),O=i($," angegeben werden. Dar\xFCber erfahren wir in "),I=a($,"A",{href:!0});var be=l(I);X=i(be,"Kapitel 4"),be.forEach(t),we=i($," mehr."),$.forEach(t),this.h()},h(){h(I,"href","/course/chapter4/3")},m(L,$){o(L,f,$),n(f,P),n(f,p),n(p,A),n(f,D),n(f,E),n(E,T),n(f,O),n(f,I),n(I,X),n(f,we)},d(L){L&&t(f)}}}function Ya(ge){let f,P,p,A,D;return{c(){f=s("p"),P=r("\u270F\uFE0F "),p=s("strong"),A=r("Probier es aus!"),D=r(" Fein-tune ein Modell mit dem GLUE SST-2 Datensatz, indem du die Datenverarbeitung aus Abschnitt 2 verwendest.")},l(E){f=a(E,"P",{});var T=l(f);P=i(T,"\u270F\uFE0F "),p=a(T,"STRONG",{});var O=l(p);A=i(O,"Probier es aus!"),O.forEach(t),D=i(T," Fein-tune ein Modell mit dem GLUE SST-2 Datensatz, indem du die Datenverarbeitung aus Abschnitt 2 verwendest."),T.forEach(t)},m(E,T){o(E,f,T),n(f,P),n(f,p),n(p,A),n(f,D)},d(E){E&&t(f)}}}function Xa(ge){let f,P,p,A,D,E,T,O,I,X,we,L,$,ve,N,be,F,Lt,Re,Nt,Ht,Ze,Rt,Zt,Je,Jt,Yt,_e,Xt,Qt,et,Ke,er,nt,ke,tt,Q,te,Ye,Ee,nr,Xe,tr,rt,H,rr,Qe,ir,sr,en,ar,lr,it,$e,st,re,at,R,dr,Ue,or,ur,nn,cr,fr,lt,ze,dt,ie,pr,Be,mr,hr,ot,M,gr,tn,wr,vr,rn,br,_r,sn,kr,Er,an,$r,zr,ln,Dr,Tr,ut,De,ct,C,Mr,dn,Cr,jr,on,Pr,Ar,un,Or,Fr,cn,yr,qr,fn,Sr,Gr,ft,Z,Kr,pn,Ur,Br,mn,Vr,xr,pt,Te,mt,Ve,Wr,ht,se,j,Ir,hn,Lr,Nr,gn,Hr,Rr,wn,Zr,Jr,vn,Yr,Xr,bn,Qr,ei,ni,ee,ti,_n,ri,ii,kn,si,ai,gt,ne,ae,En,Me,li,$n,di,wt,y,oi,zn,ui,ci,Dn,fi,pi,Tn,mi,hi,Mn,gi,wi,vt,Ce,bt,je,_t,m,vi,Cn,bi,_i,jn,ki,Ei,Pn,$i,zi,An,Di,Ti,On,Mi,Ci,Fn,ji,Pi,yn,Ai,Oi,qn,Fi,yi,kt,S,qi,Sn,Si,Gi,Gn,Ki,Ui,xe,Bi,Vi,Et,Pe,$t,G,xi,Kn,Wi,Ii,Un,Li,Ni,Bn,Hi,Ri,zt,Ae,Dt,Oe,Tt,K,Zi,Fe,Ji,Yi,Vn,Xi,Qi,xn,es,ns,Mt,le,ts,Wn,rs,is,Ct,ye,jt,de,ss,In,as,ls,Pt,qe,At,U,ds,Ln,os,us,Nn,cs,fs,Hn,ps,ms,Ot,Se,Ft,We,hs,yt,B,gs,Rn,ws,vs,Zn,bs,_s,Jn,ks,Es,qt,oe,$s,Yn,zs,Ds,St,ue,Gt;return p=new Za({props:{fw:ge[0]}}),O=new Ts({}),$=new Ha({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter3/section3.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter3/section3.ipynb"}]}}),N=new Ra({props:{id:"nvBXf7s7vTI"}}),ke=new q({props:{code:`



`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, DataCollatorWithPadding

raw_datasets = load_dataset(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mrpc&quot;</span>)
checkpoint = <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(checkpoint)


<span class="hljs-keyword">def</span> <span class="hljs-title function_">tokenize_function</span>(<span class="hljs-params">example</span>):
    <span class="hljs-keyword">return</span> tokenizer(example[<span class="hljs-string">&quot;sentence1&quot;</span>], example[<span class="hljs-string">&quot;sentence2&quot;</span>], truncation=<span class="hljs-literal">True</span>)


tokenized_datasets = raw_datasets.<span class="hljs-built_in">map</span>(tokenize_function, batched=<span class="hljs-literal">True</span>)
data_collator = DataCollatorWithPadding(tokenizer=tokenizer)`}}),Ee=new Ts({}),$e=new q({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TrainingArguments

training_args = TrainingArguments(<span class="hljs-string">&quot;test-trainer&quot;</span>)`}}),re=new Va({props:{$$slots:{default:[Ja]},$$scope:{ctx:ge}}}),ze=new q({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=<span class="hljs-number">2</span>)`}}),De=new q({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Trainer

trainer = Trainer(
    model,
    training_args,
    train_dataset=tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>],
    eval_dataset=tokenized_datasets[<span class="hljs-string">&quot;validation&quot;</span>],
    data_collator=data_collator,
    tokenizer=tokenizer,
)`}}),Te=new q({props:{code:"trainer.train()",highlighted:"trainer.train()"}}),Me=new Ts({}),Ce=new q({props:{code:`predictions = trainer.predict(tokenized_datasets["validation"])
print(predictions.predictions.shape, predictions.label_ids.shape)`,highlighted:`predictions = trainer.predict(tokenized_datasets[<span class="hljs-string">&quot;validation&quot;</span>])
<span class="hljs-built_in">print</span>(predictions.predictions.shape, predictions.label_ids.shape)`}}),je=new q({props:{code:"(408, 2) (408,)",highlighted:'(<span class="hljs-number">408</span>, <span class="hljs-number">2</span>) (<span class="hljs-number">408</span>,)'}}),Pe=new q({props:{code:"",highlighted:`<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

preds = np.argmax(predictions.predictions, axis=-<span class="hljs-number">1</span>)`}}),Ae=new q({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_metric

metric = load_metric(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mrpc&quot;</span>)
metric.compute(predictions=preds, references=predictions.label_ids)`}}),Oe=new q({props:{code:"{'accuracy': 0.8578431372549019, 'f1': 0.8996539792387542}",highlighted:'{<span class="hljs-string">&#x27;accuracy&#x27;</span>: <span class="hljs-number">0.8578431372549019</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">0.8996539792387542</span>}'}}),ye=new q({props:{code:`def compute_metrics(eval_preds):
    metric = load_metric("glue", "mrpc")
    logits, labels = eval_preds
    predictions = np.argmax(logits, axis=-1)
    return metric.compute(predictions=predictions, references=labels)`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">compute_metrics</span>(<span class="hljs-params">eval_preds</span>):
    metric = load_metric(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mrpc&quot;</span>)
    logits, labels = eval_preds
    predictions = np.argmax(logits, axis=-<span class="hljs-number">1</span>)
    <span class="hljs-keyword">return</span> metric.compute(predictions=predictions, references=labels)`}}),qe=new q({props:{code:"",highlighted:`training_args = TrainingArguments(<span class="hljs-string">&quot;test-trainer&quot;</span>, evaluation_strategy=<span class="hljs-string">&quot;epoch&quot;</span>)
model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=<span class="hljs-number">2</span>)

trainer = Trainer(
    model,
    training_args,
    train_dataset=tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>],
    eval_dataset=tokenized_datasets[<span class="hljs-string">&quot;validation&quot;</span>],
    data_collator=data_collator,
    tokenizer=tokenizer,
    compute_metrics=compute_metrics,
)`}}),Se=new q({props:{code:"trainer.train()",highlighted:'trainer.trai<span class="hljs-meta">n</span>()'}}),ue=new Va({props:{$$slots:{default:[Ya]},$$scope:{ctx:ge}}}),{c(){f=s("meta"),P=u(),g(p.$$.fragment),A=u(),D=s("h1"),E=s("a"),T=s("span"),g(O.$$.fragment),I=u(),X=s("span"),we=r("Fine-tuning eine Modells mit der Trainer API"),L=u(),g($.$$.fragment),ve=u(),g(N.$$.fragment),be=u(),F=s("p"),Lt=r("\u{1F917} Transformers stellt eine "),Re=s("code"),Nt=r("Trainer"),Ht=r("-Klasse bereit, mit der du Modelle auf deinen Datens\xE4tzen fein-tunen kannst. Nachdem die Datenverarbeitung im letzten Abschnitt abgeschlossen ist, bleiben nur noch wenige Schritte, um den "),Ze=s("code"),Rt=r("Trainer"),Zt=r(" zu definieren. Der schwierigste Teil ist die Vorbereitung der Umgebung um "),Je=s("code"),Jt=r("Trainer.train()"),Yt=r(" auszuf\xFChren, da dies auf einer CPU sehr langsam l\xE4uft. Wenn keine GPU verf\xFCgbar ist, kannst du bei [Google Colab] ("),_e=s("a"),Xt=r("https://colab.research.google.com/"),Qt=r(") auf kostenlose GPUs oder TPUs zugreifen."),et=u(),Ke=s("p"),er=r("In den folgenden Code-Beispielen wird davon ausgegangen, dass du die Beispiele aus dem vorherigen Abschnitt bereits ausgef\xFChrt hast. Hier ist eine kurze Zusammenfassung, die dir zeigt, was erwartet wird:"),nt=u(),g(ke.$$.fragment),tt=u(),Q=s("h3"),te=s("a"),Ye=s("span"),g(Ee.$$.fragment),nr=u(),Xe=s("span"),tr=r("Training"),rt=u(),H=s("p"),rr=r("Als erstes m\xFCssen wir eine Klasse "),Qe=s("code"),ir=r("TrainingArguments"),sr=r(" definieren, die alle Hyperparameter enth\xE4lt, die der "),en=s("code"),ar=r("Trainer"),lr=r(" f\xFCr das Training und die Evaluation verwendet. Das einzige Argument das hier angegeben werden muss, ist ein Verzeichnis in dem das trainierte Modell sowie die Checkpoints gespeichert werden. F\xFCr alles andere k\xF6nnen die Standardeinstellungen verwendet werden. Diese sollten f\xFCr ein grundlegendes Fein-tunen ausreichen."),it=u(),g($e.$$.fragment),st=u(),g(re.$$.fragment),at=u(),R=s("p"),dr=r("Der zweite Schritt ist die Definition unseres Modells. Wie im "),Ue=s("a"),or=r("vorherigen Kapitel"),ur=r(" verwenden wir die Klasse "),nn=s("code"),cr=r("AutoModelForSequenceClassification"),fr=r(" mit zwei Labels:"),lt=u(),g(ze.$$.fragment),dt=u(),ie=s("p"),pr=r("Du wirst feststellen, dass du im Gegensatz zu "),Be=s("a"),mr=r("Kapitel 2"),hr=r(" eine Warnung erh\xE4ltst, nachdem du dieses vortrainierte Modell instanziiert hast. Der Grund daf\xFCr ist, dass BERT nicht auf die Klassifizierung von Satzpaaren vortrainiert wurde. Deshalb wurde der Kopf des vortrainierten Modells verworfen und stattdessen ein neuer Kopf hinzugef\xFCgt, der f\xFCr die Klassifizierung von Sequenzen geeignet ist. Diese Warnungen weisen darauf hin, dass Teile der Gewichtung nicht verwendet wurden (die Gewichte f\xFCr den verworfenen Kopf) und dass einige andere zuf\xE4llig initialisiert wurden (die Gewichte f\xFCr den neuen Kopf). Abschlie\xDFend werden wir aufgefordert, das Modell zu trainieren, und genau das werden wir jetzt tun."),ot=u(),M=s("p"),gr=r("Sobald wir unser Modell haben, k\xF6nnen wir einen "),tn=s("code"),wr=r("Trainer"),vr=r(" definieren, indem wir alle bisher erstellten Objekte \xFCbergeben - das "),rn=s("code"),br=r("Modell"),_r=r(", die "),sn=s("code"),kr=r("training_args"),Er=r(", die Trainings- und Validierungsdaten, unseren "),an=s("code"),$r=r("data_collator"),zr=r(" und unseren "),ln=s("code"),Dr=r("tokenizer"),Tr=r(":"),ut=u(),g(De.$$.fragment),ct=u(),C=s("p"),Mr=r("Merke: Wenn der "),dn=s("code"),Cr=r("tokenizer"),jr=r(" \xFCbergeben wird, wie wir es hier getan haben, wird der vom "),on=s("code"),Pr=r("Trainer"),Ar=r(" verwendete "),un=s("code"),Or=r("data_collator"),Fr=r(" standardm\xE4\xDFig ein "),cn=s("code"),yr=r("DataCollatorWithPadding"),qr=r(" sein, wie er zuvor definiert wurde. Deshalb kannst du die Zeile "),fn=s("code"),Sr=r("data_collator=data_collator"),Gr=r(" in diesem Aufruf weglassen. Unabh\xE4ngig davon war es trotzdem wichtig, diesen Teil der Verarbeitung in Abschnitt 2 zu zeigen!"),ft=u(),Z=s("p"),Kr=r("Um das Modell auf unserem Datensatz fein-tunen zu k\xF6nnen, m\xFCssen wir nur die Methode "),pn=s("code"),Ur=r("train()"),Br=r(" unseres "),mn=s("code"),Vr=r("Trainers"),xr=r(" aufrufen:"),pt=u(),g(Te.$$.fragment),mt=u(),Ve=s("p"),Wr=r("Dadurch wird das Fein-tunen gestartet (was auf einer GPU ein paar Minuten dauern sollte) und der Trainingsverlust wird alle 500 Schritte gemeldet. Es wird jedoch nicht zur\xFCckgegeben, wie gut (oder schlecht) das Modell funktioniert. Dies liegt an folgenden Punkten:"),ht=u(),se=s("ol"),j=s("li"),Ir=r("Wir haben dem "),hn=s("code"),Lr=r("Trainer"),Nr=r(" nicht mitgeteilt die Performance in der Trainingsschleife auszuwerten, indem wir "),gn=s("code"),Hr=r("evaluation_strategy"),Rr=r(" entweder auf "),wn=s("code"),Zr=r('"steps"'),Jr=r(" (alle "),vn=s("code"),Yr=r("eval_steps"),Xr=r(" auswerten) oder "),bn=s("code"),Qr=r('"epoch"'),ei=r(" (am Ende jeder Epoche evaluieren) gesetzt haben."),ni=u(),ee=s("li"),ti=r("Wir haben dem "),_n=s("code"),ri=r("Trainer"),ii=r(" keine Funktion "),kn=s("code"),si=r("compute_metrics()"),ai=r(" zur Verf\xFCgung gestellt, um w\xE4hrend der Evaluation eine Metrik zu berechnen (sonst h\xE4tte die Evaluation nur den Verlust ausgegeben, was keine sehr intuitive Zahl ist)."),gt=u(),ne=s("h3"),ae=s("a"),En=s("span"),g(Me.$$.fragment),li=u(),$n=s("span"),di=r("Evaluation"),wt=u(),y=s("p"),oi=r("Im Folgenden wird gezeigt, wie wir eine "),zn=s("code"),ui=r("compute_metrics()"),ci=r("-Funktion erstellen und sie beim n\xE4chsten Training verwenden k\xF6nnen. Die Funktion muss ein "),Dn=s("code"),fi=r("EvalPrediction"),pi=r("-Objekt (ein bennantes Tupel mit einem "),Tn=s("code"),mi=r("predictions"),hi=r("-Feld und einem "),Mn=s("code"),gi=r("label_ids"),wi=r("-Feld) annehmen und ein Dictionary zur\xFCckgeben, das Strings auf Floats abbildet (die Strings sind die Namen der zur\xFCckgegebenen Metriken und die Floats ihre zugeh\xF6rigen Werte). Um Vorhersagen von unserem Modell zu erhalten, k\xF6nnen wir den Befehl \u201CTrainer.predict()\u201D verwenden:"),vt=u(),g(Ce.$$.fragment),bt=u(),g(je.$$.fragment),_t=u(),m=s("p"),vi=r("Die Ausgabe der "),Cn=s("code"),bi=r("predict()"),_i=r("-Methode ist ein weiteres benanntes Tupel mit drei Feldern: "),jn=s("code"),ki=r("predictions"),Ei=r(", "),Pn=s("code"),$i=r("label_ids"),zi=r(" und "),An=s("code"),Di=r("metrics"),Ti=r(". Das Feld "),On=s("code"),Mi=r("metrics"),Ci=r(" enth\xE4lt den Verlust des \xFCbergebenen Datensatzes sowie Zeitangaben dazu, wie lange die Vorhersage insgesamt und im Durchschnitt gedauert hat. Sobald wir unsere Funktion "),Fn=s("code"),ji=r("compute_metrics()"),Pi=r(" fertiggestellt haben und sie an den "),yn=s("code"),Ai=r("Trainer"),Oi=r(" \xFCbergeben, enth\xE4lt dieses Feld auch die von der "),qn=s("code"),Fi=r("compute_metrics()"),yi=r("-Funktion zur\xFCckgegebenen Metriken."),kt=u(),S=s("p"),qi=r("Die Vorhersagen in "),Sn=s("code"),Si=r("predictions"),Gi=r(" sind ein zweidimensionales Array mit der Form 408 x 2 (408 ist die Anzahl der Elemente unseres Datensatzes). Das sind die Logits f\xFCr jedes Element des Datensatzes, das wir an "),Gn=s("code"),Ki=r("predict()"),Ui=r(" \xFCbergeben haben (siehe "),xe=s("a"),Bi=r("vorheriges Kapitel"),Vi=r(" dass alle Transformer Modelle Logits zur\xFCckgeben). Um diese in Vorhersagen umzuwandeln, die wir mit den Labels vergleichen k\xF6nnen, m\xFCssen wir den Index mit dem h\xF6chsten Wert auf der zweiten Achse nehmen:"),Et=u(),g(Pe.$$.fragment),$t=u(),G=s("p"),xi=r("Jetzt k\xF6nnen wir diese Vorhersagen in "),Kn=s("code"),Wi=r("preds"),Ii=r(" mit den Labels vergleichen. Wir greifen auf die Metriken aus der \u{1F917} Bibliothek Datasets zur\xFCck, um unsere Funktion "),Un=s("code"),Li=r("compute_metric()"),Ni=r(" zu erstellen. Die mit dem MRPC-Datensatz verbundenen Metriken k\xF6nnen genauso einfach geladen werden, wie wir den Datensatz geladen haben, diesmal mit der Funktion "),Bn=s("code"),Hi=r("load_metric()"),Ri=r(". Das zur\xFCckgegebene Objekt verf\xFCgt \xFCber eine Berechnungsmethode, mit der wir die Metrik auswerten k\xF6nnen:"),zt=u(),g(Ae.$$.fragment),Dt=u(),g(Oe.$$.fragment),Tt=u(),K=s("p"),Zi=r("Die genauen Ergebnisse k\xF6nnen variieren, da die zuf\xE4llige Initialisierung des Modellkopfes den Optimierungsverlauf und damit die Metriken ver\xE4ndern kann. Hier hat das Modell eine Genauigkeit von 85,78 % \xFCber die Validierungsdaten und eine F1-Ma\xDF von 89,97 erreicht hat. Dies sind die beiden Kennzahlen, die zur Bewertung der Ergebnisse des MRPC-Datensatzes f\xFCr den GLUE-Benchmark verwendet werden. In der Tabelle im [BERT-Paper] ("),Fe=s("a"),Ji=r("https://arxiv.org/pdf/1810.04805.pdf"),Yi=r(") wird f\xFCr das Basismodell ein F1-Ma\xDF von 88,9 angegeben. Das Paper hat das "),Vn=s("code"),Xi=r("uncased"),Qi=r(" Modell verwendet, w\xE4hrend wir derzeit das "),xn=s("code"),es=r("cased"),ns=r(" Modell verwenden, was das bessere Ergebnis erkl\xE4rt."),Mt=u(),le=s("p"),ts=r("Zusammenfassend ergibt das unsere Funktion "),Wn=s("code"),rs=r("compute_metrics()"),is=r(":"),Ct=u(),g(ye.$$.fragment),jt=u(),de=s("p"),ss=r("Um diese Funktion in Aktion zu sehen, definieren wir einen neuen "),In=s("code"),as=r("Trainer"),ls=r(" mit der Funktion \u201Ccompute_metrics()\u201D, um am Ende jeder Epoche Metriken zu melden:"),Pt=u(),g(qe.$$.fragment),At=u(),U=s("p"),ds=r("Hier ein Hinweis, dass wir ein neues "),Ln=s("code"),os=r("TrainingArguments"),us=r(" errstellen, dessen "),Nn=s("code"),cs=r("evaluation_strategy"),fs=r(" auf "),Hn=s("code"),ps=r('"epoch"'),ms=r(" gesetzt ist, und ein neues Modell definieren - andernfalls w\xFCrden wir nur das Training des momentanen Modells fortf\xFChren, das wir bereits trainiert haben. Um einen neuen Trainingslauf zu starten, f\xFChren wir folgendes aus:"),Ot=u(),g(Se.$$.fragment),Ft=u(),We=s("p"),hs=r("Nun werden am Ende jeder Epoche zus\xE4tzlich zu den Trainingsverlusten auch die Validierungsverluste und -metriken gemeldet. Auch hier kann die Genauigkeit/F1-Ma\xDF aufgrund der zuf\xE4lligen Initialisierung des Modells zu unserem Beispiel variieren, aber sie sollte in etwa gleich sein."),yt=u(),B=s("p"),gs=r("Der "),Rn=s("code"),ws=r("Trainer"),vs=r(" funktioniert sofort auf mehreren GPUs oder TPUs und bietet zahlreiche Optionen, wie z. B. Training mit gemischter Genauigkeit (verwende "),Zn=s("code"),bs=r("fp16 = True"),_s=r(" in deinen Trainingsargumenten). In Kapitel 10 gehen wir auf alle Funktionen ein, die die "),Jn=s("code"),ks=r("Trainer"),Es=r("-Klasse bereitstellt."),qt=u(),oe=s("p"),$s=r("Damit ist die Einf\xFChrung in das Fein-tunen mit der "),Yn=s("code"),zs=r("Trainer"),Ds=r(" API abgeschlossen. Beispiele f\xFCr die g\xE4ngigsten CL-Aufgaben werden in Kapitel 7 gegeben, aber jetzt schauen wir uns erst einmal an, wie man das Gleiche in PyTorch bewerkstelligen kann."),St=u(),g(ue.$$.fragment),this.h()},l(e){const d=La('[data-svelte="svelte-1phssyn"]',document.head);f=a(d,"META",{name:!0,content:!0}),d.forEach(t),P=c(e),w(p.$$.fragment,e),A=c(e),D=a(e,"H1",{class:!0});var Ge=l(D);E=a(Ge,"A",{id:!0,class:!0,href:!0});var Xn=l(E);T=a(Xn,"SPAN",{});var Qn=l(T);w(O.$$.fragment,Qn),Qn.forEach(t),Xn.forEach(t),I=c(Ge),X=a(Ge,"SPAN",{});var Ms=l(X);we=i(Ms,"Fine-tuning eine Modells mit der Trainer API"),Ms.forEach(t),Ge.forEach(t),L=c(e),w($.$$.fragment,e),ve=c(e),w(N.$$.fragment,e),be=c(e),F=a(e,"P",{});var J=l(F);Lt=i(J,"\u{1F917} Transformers stellt eine "),Re=a(J,"CODE",{});var Cs=l(Re);Nt=i(Cs,"Trainer"),Cs.forEach(t),Ht=i(J,"-Klasse bereit, mit der du Modelle auf deinen Datens\xE4tzen fein-tunen kannst. Nachdem die Datenverarbeitung im letzten Abschnitt abgeschlossen ist, bleiben nur noch wenige Schritte, um den "),Ze=a(J,"CODE",{});var js=l(Ze);Rt=i(js,"Trainer"),js.forEach(t),Zt=i(J," zu definieren. Der schwierigste Teil ist die Vorbereitung der Umgebung um "),Je=a(J,"CODE",{});var Ps=l(Je);Jt=i(Ps,"Trainer.train()"),Ps.forEach(t),Yt=i(J," auszuf\xFChren, da dies auf einer CPU sehr langsam l\xE4uft. Wenn keine GPU verf\xFCgbar ist, kannst du bei [Google Colab] ("),_e=a(J,"A",{href:!0,rel:!0});var As=l(_e);Xt=i(As,"https://colab.research.google.com/"),As.forEach(t),Qt=i(J,") auf kostenlose GPUs oder TPUs zugreifen."),J.forEach(t),et=c(e),Ke=a(e,"P",{});var Os=l(Ke);er=i(Os,"In den folgenden Code-Beispielen wird davon ausgegangen, dass du die Beispiele aus dem vorherigen Abschnitt bereits ausgef\xFChrt hast. Hier ist eine kurze Zusammenfassung, die dir zeigt, was erwartet wird:"),Os.forEach(t),nt=c(e),w(ke.$$.fragment,e),tt=c(e),Q=a(e,"H3",{class:!0});var Kt=l(Q);te=a(Kt,"A",{id:!0,class:!0,href:!0});var Fs=l(te);Ye=a(Fs,"SPAN",{});var ys=l(Ye);w(Ee.$$.fragment,ys),ys.forEach(t),Fs.forEach(t),nr=c(Kt),Xe=a(Kt,"SPAN",{});var qs=l(Xe);tr=i(qs,"Training"),qs.forEach(t),Kt.forEach(t),rt=c(e),H=a(e,"P",{});var Ie=l(H);rr=i(Ie,"Als erstes m\xFCssen wir eine Klasse "),Qe=a(Ie,"CODE",{});var Ss=l(Qe);ir=i(Ss,"TrainingArguments"),Ss.forEach(t),sr=i(Ie," definieren, die alle Hyperparameter enth\xE4lt, die der "),en=a(Ie,"CODE",{});var Gs=l(en);ar=i(Gs,"Trainer"),Gs.forEach(t),lr=i(Ie," f\xFCr das Training und die Evaluation verwendet. Das einzige Argument das hier angegeben werden muss, ist ein Verzeichnis in dem das trainierte Modell sowie die Checkpoints gespeichert werden. F\xFCr alles andere k\xF6nnen die Standardeinstellungen verwendet werden. Diese sollten f\xFCr ein grundlegendes Fein-tunen ausreichen."),Ie.forEach(t),it=c(e),w($e.$$.fragment,e),st=c(e),w(re.$$.fragment,e),at=c(e),R=a(e,"P",{});var Le=l(R);dr=i(Le,"Der zweite Schritt ist die Definition unseres Modells. Wie im "),Ue=a(Le,"A",{href:!0});var Ks=l(Ue);or=i(Ks,"vorherigen Kapitel"),Ks.forEach(t),ur=i(Le," verwenden wir die Klasse "),nn=a(Le,"CODE",{});var Us=l(nn);cr=i(Us,"AutoModelForSequenceClassification"),Us.forEach(t),fr=i(Le," mit zwei Labels:"),Le.forEach(t),lt=c(e),w(ze.$$.fragment,e),dt=c(e),ie=a(e,"P",{});var Ut=l(ie);pr=i(Ut,"Du wirst feststellen, dass du im Gegensatz zu "),Be=a(Ut,"A",{href:!0});var Bs=l(Be);mr=i(Bs,"Kapitel 2"),Bs.forEach(t),hr=i(Ut," eine Warnung erh\xE4ltst, nachdem du dieses vortrainierte Modell instanziiert hast. Der Grund daf\xFCr ist, dass BERT nicht auf die Klassifizierung von Satzpaaren vortrainiert wurde. Deshalb wurde der Kopf des vortrainierten Modells verworfen und stattdessen ein neuer Kopf hinzugef\xFCgt, der f\xFCr die Klassifizierung von Sequenzen geeignet ist. Diese Warnungen weisen darauf hin, dass Teile der Gewichtung nicht verwendet wurden (die Gewichte f\xFCr den verworfenen Kopf) und dass einige andere zuf\xE4llig initialisiert wurden (die Gewichte f\xFCr den neuen Kopf). Abschlie\xDFend werden wir aufgefordert, das Modell zu trainieren, und genau das werden wir jetzt tun."),Ut.forEach(t),ot=c(e),M=a(e,"P",{});var V=l(M);gr=i(V,"Sobald wir unser Modell haben, k\xF6nnen wir einen "),tn=a(V,"CODE",{});var Vs=l(tn);wr=i(Vs,"Trainer"),Vs.forEach(t),vr=i(V," definieren, indem wir alle bisher erstellten Objekte \xFCbergeben - das "),rn=a(V,"CODE",{});var xs=l(rn);br=i(xs,"Modell"),xs.forEach(t),_r=i(V,", die "),sn=a(V,"CODE",{});var Ws=l(sn);kr=i(Ws,"training_args"),Ws.forEach(t),Er=i(V,", die Trainings- und Validierungsdaten, unseren "),an=a(V,"CODE",{});var Is=l(an);$r=i(Is,"data_collator"),Is.forEach(t),zr=i(V," und unseren "),ln=a(V,"CODE",{});var Ls=l(ln);Dr=i(Ls,"tokenizer"),Ls.forEach(t),Tr=i(V,":"),V.forEach(t),ut=c(e),w(De.$$.fragment,e),ct=c(e),C=a(e,"P",{});var x=l(C);Mr=i(x,"Merke: Wenn der "),dn=a(x,"CODE",{});var Ns=l(dn);Cr=i(Ns,"tokenizer"),Ns.forEach(t),jr=i(x," \xFCbergeben wird, wie wir es hier getan haben, wird der vom "),on=a(x,"CODE",{});var Hs=l(on);Pr=i(Hs,"Trainer"),Hs.forEach(t),Ar=i(x," verwendete "),un=a(x,"CODE",{});var Rs=l(un);Or=i(Rs,"data_collator"),Rs.forEach(t),Fr=i(x," standardm\xE4\xDFig ein "),cn=a(x,"CODE",{});var Zs=l(cn);yr=i(Zs,"DataCollatorWithPadding"),Zs.forEach(t),qr=i(x," sein, wie er zuvor definiert wurde. Deshalb kannst du die Zeile "),fn=a(x,"CODE",{});var Js=l(fn);Sr=i(Js,"data_collator=data_collator"),Js.forEach(t),Gr=i(x," in diesem Aufruf weglassen. Unabh\xE4ngig davon war es trotzdem wichtig, diesen Teil der Verarbeitung in Abschnitt 2 zu zeigen!"),x.forEach(t),ft=c(e),Z=a(e,"P",{});var Ne=l(Z);Kr=i(Ne,"Um das Modell auf unserem Datensatz fein-tunen zu k\xF6nnen, m\xFCssen wir nur die Methode "),pn=a(Ne,"CODE",{});var Ys=l(pn);Ur=i(Ys,"train()"),Ys.forEach(t),Br=i(Ne," unseres "),mn=a(Ne,"CODE",{});var Xs=l(mn);Vr=i(Xs,"Trainers"),Xs.forEach(t),xr=i(Ne," aufrufen:"),Ne.forEach(t),pt=c(e),w(Te.$$.fragment,e),mt=c(e),Ve=a(e,"P",{});var Qs=l(Ve);Wr=i(Qs,"Dadurch wird das Fein-tunen gestartet (was auf einer GPU ein paar Minuten dauern sollte) und der Trainingsverlust wird alle 500 Schritte gemeldet. Es wird jedoch nicht zur\xFCckgegeben, wie gut (oder schlecht) das Modell funktioniert. Dies liegt an folgenden Punkten:"),Qs.forEach(t),ht=c(e),se=a(e,"OL",{});var Bt=l(se);j=a(Bt,"LI",{});var W=l(j);Ir=i(W,"Wir haben dem "),hn=a(W,"CODE",{});var ea=l(hn);Lr=i(ea,"Trainer"),ea.forEach(t),Nr=i(W," nicht mitgeteilt die Performance in der Trainingsschleife auszuwerten, indem wir "),gn=a(W,"CODE",{});var na=l(gn);Hr=i(na,"evaluation_strategy"),na.forEach(t),Rr=i(W," entweder auf "),wn=a(W,"CODE",{});var ta=l(wn);Zr=i(ta,'"steps"'),ta.forEach(t),Jr=i(W," (alle "),vn=a(W,"CODE",{});var ra=l(vn);Yr=i(ra,"eval_steps"),ra.forEach(t),Xr=i(W," auswerten) oder "),bn=a(W,"CODE",{});var ia=l(bn);Qr=i(ia,'"epoch"'),ia.forEach(t),ei=i(W," (am Ende jeder Epoche evaluieren) gesetzt haben."),W.forEach(t),ni=c(Bt),ee=a(Bt,"LI",{});var He=l(ee);ti=i(He,"Wir haben dem "),_n=a(He,"CODE",{});var sa=l(_n);ri=i(sa,"Trainer"),sa.forEach(t),ii=i(He," keine Funktion "),kn=a(He,"CODE",{});var aa=l(kn);si=i(aa,"compute_metrics()"),aa.forEach(t),ai=i(He," zur Verf\xFCgung gestellt, um w\xE4hrend der Evaluation eine Metrik zu berechnen (sonst h\xE4tte die Evaluation nur den Verlust ausgegeben, was keine sehr intuitive Zahl ist)."),He.forEach(t),Bt.forEach(t),gt=c(e),ne=a(e,"H3",{class:!0});var Vt=l(ne);ae=a(Vt,"A",{id:!0,class:!0,href:!0});var la=l(ae);En=a(la,"SPAN",{});var da=l(En);w(Me.$$.fragment,da),da.forEach(t),la.forEach(t),li=c(Vt),$n=a(Vt,"SPAN",{});var oa=l($n);di=i(oa,"Evaluation"),oa.forEach(t),Vt.forEach(t),wt=c(e),y=a(e,"P",{});var Y=l(y);oi=i(Y,"Im Folgenden wird gezeigt, wie wir eine "),zn=a(Y,"CODE",{});var ua=l(zn);ui=i(ua,"compute_metrics()"),ua.forEach(t),ci=i(Y,"-Funktion erstellen und sie beim n\xE4chsten Training verwenden k\xF6nnen. Die Funktion muss ein "),Dn=a(Y,"CODE",{});var ca=l(Dn);fi=i(ca,"EvalPrediction"),ca.forEach(t),pi=i(Y,"-Objekt (ein bennantes Tupel mit einem "),Tn=a(Y,"CODE",{});var fa=l(Tn);mi=i(fa,"predictions"),fa.forEach(t),hi=i(Y,"-Feld und einem "),Mn=a(Y,"CODE",{});var pa=l(Mn);gi=i(pa,"label_ids"),pa.forEach(t),wi=i(Y,"-Feld) annehmen und ein Dictionary zur\xFCckgeben, das Strings auf Floats abbildet (die Strings sind die Namen der zur\xFCckgegebenen Metriken und die Floats ihre zugeh\xF6rigen Werte). Um Vorhersagen von unserem Modell zu erhalten, k\xF6nnen wir den Befehl \u201CTrainer.predict()\u201D verwenden:"),Y.forEach(t),vt=c(e),w(Ce.$$.fragment,e),bt=c(e),w(je.$$.fragment,e),_t=c(e),m=a(e,"P",{});var z=l(m);vi=i(z,"Die Ausgabe der "),Cn=a(z,"CODE",{});var ma=l(Cn);bi=i(ma,"predict()"),ma.forEach(t),_i=i(z,"-Methode ist ein weiteres benanntes Tupel mit drei Feldern: "),jn=a(z,"CODE",{});var ha=l(jn);ki=i(ha,"predictions"),ha.forEach(t),Ei=i(z,", "),Pn=a(z,"CODE",{});var ga=l(Pn);$i=i(ga,"label_ids"),ga.forEach(t),zi=i(z," und "),An=a(z,"CODE",{});var wa=l(An);Di=i(wa,"metrics"),wa.forEach(t),Ti=i(z,". Das Feld "),On=a(z,"CODE",{});var va=l(On);Mi=i(va,"metrics"),va.forEach(t),Ci=i(z," enth\xE4lt den Verlust des \xFCbergebenen Datensatzes sowie Zeitangaben dazu, wie lange die Vorhersage insgesamt und im Durchschnitt gedauert hat. Sobald wir unsere Funktion "),Fn=a(z,"CODE",{});var ba=l(Fn);ji=i(ba,"compute_metrics()"),ba.forEach(t),Pi=i(z," fertiggestellt haben und sie an den "),yn=a(z,"CODE",{});var _a=l(yn);Ai=i(_a,"Trainer"),_a.forEach(t),Oi=i(z," \xFCbergeben, enth\xE4lt dieses Feld auch die von der "),qn=a(z,"CODE",{});var ka=l(qn);Fi=i(ka,"compute_metrics()"),ka.forEach(t),yi=i(z,"-Funktion zur\xFCckgegebenen Metriken."),z.forEach(t),kt=c(e),S=a(e,"P",{});var ce=l(S);qi=i(ce,"Die Vorhersagen in "),Sn=a(ce,"CODE",{});var Ea=l(Sn);Si=i(Ea,"predictions"),Ea.forEach(t),Gi=i(ce," sind ein zweidimensionales Array mit der Form 408 x 2 (408 ist die Anzahl der Elemente unseres Datensatzes). Das sind die Logits f\xFCr jedes Element des Datensatzes, das wir an "),Gn=a(ce,"CODE",{});var $a=l(Gn);Ki=i($a,"predict()"),$a.forEach(t),Ui=i(ce," \xFCbergeben haben (siehe "),xe=a(ce,"A",{href:!0});var za=l(xe);Bi=i(za,"vorheriges Kapitel"),za.forEach(t),Vi=i(ce," dass alle Transformer Modelle Logits zur\xFCckgeben). Um diese in Vorhersagen umzuwandeln, die wir mit den Labels vergleichen k\xF6nnen, m\xFCssen wir den Index mit dem h\xF6chsten Wert auf der zweiten Achse nehmen:"),ce.forEach(t),Et=c(e),w(Pe.$$.fragment,e),$t=c(e),G=a(e,"P",{});var fe=l(G);xi=i(fe,"Jetzt k\xF6nnen wir diese Vorhersagen in "),Kn=a(fe,"CODE",{});var Da=l(Kn);Wi=i(Da,"preds"),Da.forEach(t),Ii=i(fe," mit den Labels vergleichen. Wir greifen auf die Metriken aus der \u{1F917} Bibliothek Datasets zur\xFCck, um unsere Funktion "),Un=a(fe,"CODE",{});var Ta=l(Un);Li=i(Ta,"compute_metric()"),Ta.forEach(t),Ni=i(fe," zu erstellen. Die mit dem MRPC-Datensatz verbundenen Metriken k\xF6nnen genauso einfach geladen werden, wie wir den Datensatz geladen haben, diesmal mit der Funktion "),Bn=a(fe,"CODE",{});var Ma=l(Bn);Hi=i(Ma,"load_metric()"),Ma.forEach(t),Ri=i(fe,". Das zur\xFCckgegebene Objekt verf\xFCgt \xFCber eine Berechnungsmethode, mit der wir die Metrik auswerten k\xF6nnen:"),fe.forEach(t),zt=c(e),w(Ae.$$.fragment,e),Dt=c(e),w(Oe.$$.fragment,e),Tt=c(e),K=a(e,"P",{});var pe=l(K);Zi=i(pe,"Die genauen Ergebnisse k\xF6nnen variieren, da die zuf\xE4llige Initialisierung des Modellkopfes den Optimierungsverlauf und damit die Metriken ver\xE4ndern kann. Hier hat das Modell eine Genauigkeit von 85,78 % \xFCber die Validierungsdaten und eine F1-Ma\xDF von 89,97 erreicht hat. Dies sind die beiden Kennzahlen, die zur Bewertung der Ergebnisse des MRPC-Datensatzes f\xFCr den GLUE-Benchmark verwendet werden. In der Tabelle im [BERT-Paper] ("),Fe=a(pe,"A",{href:!0,rel:!0});var Ca=l(Fe);Ji=i(Ca,"https://arxiv.org/pdf/1810.04805.pdf"),Ca.forEach(t),Yi=i(pe,") wird f\xFCr das Basismodell ein F1-Ma\xDF von 88,9 angegeben. Das Paper hat das "),Vn=a(pe,"CODE",{});var ja=l(Vn);Xi=i(ja,"uncased"),ja.forEach(t),Qi=i(pe," Modell verwendet, w\xE4hrend wir derzeit das "),xn=a(pe,"CODE",{});var Pa=l(xn);es=i(Pa,"cased"),Pa.forEach(t),ns=i(pe," Modell verwenden, was das bessere Ergebnis erkl\xE4rt."),pe.forEach(t),Mt=c(e),le=a(e,"P",{});var xt=l(le);ts=i(xt,"Zusammenfassend ergibt das unsere Funktion "),Wn=a(xt,"CODE",{});var Aa=l(Wn);rs=i(Aa,"compute_metrics()"),Aa.forEach(t),is=i(xt,":"),xt.forEach(t),Ct=c(e),w(ye.$$.fragment,e),jt=c(e),de=a(e,"P",{});var Wt=l(de);ss=i(Wt,"Um diese Funktion in Aktion zu sehen, definieren wir einen neuen "),In=a(Wt,"CODE",{});var Oa=l(In);as=i(Oa,"Trainer"),Oa.forEach(t),ls=i(Wt," mit der Funktion \u201Ccompute_metrics()\u201D, um am Ende jeder Epoche Metriken zu melden:"),Wt.forEach(t),Pt=c(e),w(qe.$$.fragment,e),At=c(e),U=a(e,"P",{});var me=l(U);ds=i(me,"Hier ein Hinweis, dass wir ein neues "),Ln=a(me,"CODE",{});var Fa=l(Ln);os=i(Fa,"TrainingArguments"),Fa.forEach(t),us=i(me," errstellen, dessen "),Nn=a(me,"CODE",{});var ya=l(Nn);cs=i(ya,"evaluation_strategy"),ya.forEach(t),fs=i(me," auf "),Hn=a(me,"CODE",{});var qa=l(Hn);ps=i(qa,'"epoch"'),qa.forEach(t),ms=i(me," gesetzt ist, und ein neues Modell definieren - andernfalls w\xFCrden wir nur das Training des momentanen Modells fortf\xFChren, das wir bereits trainiert haben. Um einen neuen Trainingslauf zu starten, f\xFChren wir folgendes aus:"),me.forEach(t),Ot=c(e),w(Se.$$.fragment,e),Ft=c(e),We=a(e,"P",{});var Sa=l(We);hs=i(Sa,"Nun werden am Ende jeder Epoche zus\xE4tzlich zu den Trainingsverlusten auch die Validierungsverluste und -metriken gemeldet. Auch hier kann die Genauigkeit/F1-Ma\xDF aufgrund der zuf\xE4lligen Initialisierung des Modells zu unserem Beispiel variieren, aber sie sollte in etwa gleich sein."),Sa.forEach(t),yt=c(e),B=a(e,"P",{});var he=l(B);gs=i(he,"Der "),Rn=a(he,"CODE",{});var Ga=l(Rn);ws=i(Ga,"Trainer"),Ga.forEach(t),vs=i(he," funktioniert sofort auf mehreren GPUs oder TPUs und bietet zahlreiche Optionen, wie z. B. Training mit gemischter Genauigkeit (verwende "),Zn=a(he,"CODE",{});var Ka=l(Zn);bs=i(Ka,"fp16 = True"),Ka.forEach(t),_s=i(he," in deinen Trainingsargumenten). In Kapitel 10 gehen wir auf alle Funktionen ein, die die "),Jn=a(he,"CODE",{});var Ua=l(Jn);ks=i(Ua,"Trainer"),Ua.forEach(t),Es=i(he,"-Klasse bereitstellt."),he.forEach(t),qt=c(e),oe=a(e,"P",{});var It=l(oe);$s=i(It,"Damit ist die Einf\xFChrung in das Fein-tunen mit der "),Yn=a(It,"CODE",{});var Ba=l(Yn);zs=i(Ba,"Trainer"),Ba.forEach(t),Ds=i(It," API abgeschlossen. Beispiele f\xFCr die g\xE4ngigsten CL-Aufgaben werden in Kapitel 7 gegeben, aber jetzt schauen wir uns erst einmal an, wie man das Gleiche in PyTorch bewerkstelligen kann."),It.forEach(t),St=c(e),w(ue.$$.fragment,e),this.h()},h(){h(f,"name","hf:doc:metadata"),h(f,"content",JSON.stringify(Qa)),h(E,"id","finetuning-eine-modells-mit-der-trainer-api"),h(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(E,"href","#finetuning-eine-modells-mit-der-trainer-api"),h(D,"class","relative group"),h(_e,"href","https://colab.research.google.com/"),h(_e,"rel","nofollow"),h(te,"id","training"),h(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(te,"href","#training"),h(Q,"class","relative group"),h(Ue,"href","/course/chapter2"),h(Be,"href","/course/chapter2"),h(ae,"id","evaluation"),h(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ae,"href","#evaluation"),h(ne,"class","relative group"),h(xe,"href","/course/chapter2"),h(Fe,"href","https://arxiv.org/pdf/1810.04805.pdf"),h(Fe,"rel","nofollow")},m(e,d){n(document.head,f),o(e,P,d),v(p,e,d),o(e,A,d),o(e,D,d),n(D,E),n(E,T),v(O,T,null),n(D,I),n(D,X),n(X,we),o(e,L,d),v($,e,d),o(e,ve,d),v(N,e,d),o(e,be,d),o(e,F,d),n(F,Lt),n(F,Re),n(Re,Nt),n(F,Ht),n(F,Ze),n(Ze,Rt),n(F,Zt),n(F,Je),n(Je,Jt),n(F,Yt),n(F,_e),n(_e,Xt),n(F,Qt),o(e,et,d),o(e,Ke,d),n(Ke,er),o(e,nt,d),v(ke,e,d),o(e,tt,d),o(e,Q,d),n(Q,te),n(te,Ye),v(Ee,Ye,null),n(Q,nr),n(Q,Xe),n(Xe,tr),o(e,rt,d),o(e,H,d),n(H,rr),n(H,Qe),n(Qe,ir),n(H,sr),n(H,en),n(en,ar),n(H,lr),o(e,it,d),v($e,e,d),o(e,st,d),v(re,e,d),o(e,at,d),o(e,R,d),n(R,dr),n(R,Ue),n(Ue,or),n(R,ur),n(R,nn),n(nn,cr),n(R,fr),o(e,lt,d),v(ze,e,d),o(e,dt,d),o(e,ie,d),n(ie,pr),n(ie,Be),n(Be,mr),n(ie,hr),o(e,ot,d),o(e,M,d),n(M,gr),n(M,tn),n(tn,wr),n(M,vr),n(M,rn),n(rn,br),n(M,_r),n(M,sn),n(sn,kr),n(M,Er),n(M,an),n(an,$r),n(M,zr),n(M,ln),n(ln,Dr),n(M,Tr),o(e,ut,d),v(De,e,d),o(e,ct,d),o(e,C,d),n(C,Mr),n(C,dn),n(dn,Cr),n(C,jr),n(C,on),n(on,Pr),n(C,Ar),n(C,un),n(un,Or),n(C,Fr),n(C,cn),n(cn,yr),n(C,qr),n(C,fn),n(fn,Sr),n(C,Gr),o(e,ft,d),o(e,Z,d),n(Z,Kr),n(Z,pn),n(pn,Ur),n(Z,Br),n(Z,mn),n(mn,Vr),n(Z,xr),o(e,pt,d),v(Te,e,d),o(e,mt,d),o(e,Ve,d),n(Ve,Wr),o(e,ht,d),o(e,se,d),n(se,j),n(j,Ir),n(j,hn),n(hn,Lr),n(j,Nr),n(j,gn),n(gn,Hr),n(j,Rr),n(j,wn),n(wn,Zr),n(j,Jr),n(j,vn),n(vn,Yr),n(j,Xr),n(j,bn),n(bn,Qr),n(j,ei),n(se,ni),n(se,ee),n(ee,ti),n(ee,_n),n(_n,ri),n(ee,ii),n(ee,kn),n(kn,si),n(ee,ai),o(e,gt,d),o(e,ne,d),n(ne,ae),n(ae,En),v(Me,En,null),n(ne,li),n(ne,$n),n($n,di),o(e,wt,d),o(e,y,d),n(y,oi),n(y,zn),n(zn,ui),n(y,ci),n(y,Dn),n(Dn,fi),n(y,pi),n(y,Tn),n(Tn,mi),n(y,hi),n(y,Mn),n(Mn,gi),n(y,wi),o(e,vt,d),v(Ce,e,d),o(e,bt,d),v(je,e,d),o(e,_t,d),o(e,m,d),n(m,vi),n(m,Cn),n(Cn,bi),n(m,_i),n(m,jn),n(jn,ki),n(m,Ei),n(m,Pn),n(Pn,$i),n(m,zi),n(m,An),n(An,Di),n(m,Ti),n(m,On),n(On,Mi),n(m,Ci),n(m,Fn),n(Fn,ji),n(m,Pi),n(m,yn),n(yn,Ai),n(m,Oi),n(m,qn),n(qn,Fi),n(m,yi),o(e,kt,d),o(e,S,d),n(S,qi),n(S,Sn),n(Sn,Si),n(S,Gi),n(S,Gn),n(Gn,Ki),n(S,Ui),n(S,xe),n(xe,Bi),n(S,Vi),o(e,Et,d),v(Pe,e,d),o(e,$t,d),o(e,G,d),n(G,xi),n(G,Kn),n(Kn,Wi),n(G,Ii),n(G,Un),n(Un,Li),n(G,Ni),n(G,Bn),n(Bn,Hi),n(G,Ri),o(e,zt,d),v(Ae,e,d),o(e,Dt,d),v(Oe,e,d),o(e,Tt,d),o(e,K,d),n(K,Zi),n(K,Fe),n(Fe,Ji),n(K,Yi),n(K,Vn),n(Vn,Xi),n(K,Qi),n(K,xn),n(xn,es),n(K,ns),o(e,Mt,d),o(e,le,d),n(le,ts),n(le,Wn),n(Wn,rs),n(le,is),o(e,Ct,d),v(ye,e,d),o(e,jt,d),o(e,de,d),n(de,ss),n(de,In),n(In,as),n(de,ls),o(e,Pt,d),v(qe,e,d),o(e,At,d),o(e,U,d),n(U,ds),n(U,Ln),n(Ln,os),n(U,us),n(U,Nn),n(Nn,cs),n(U,fs),n(U,Hn),n(Hn,ps),n(U,ms),o(e,Ot,d),v(Se,e,d),o(e,Ft,d),o(e,We,d),n(We,hs),o(e,yt,d),o(e,B,d),n(B,gs),n(B,Rn),n(Rn,ws),n(B,vs),n(B,Zn),n(Zn,bs),n(B,_s),n(B,Jn),n(Jn,ks),n(B,Es),o(e,qt,d),o(e,oe,d),n(oe,$s),n(oe,Yn),n(Yn,zs),n(oe,Ds),o(e,St,d),v(ue,e,d),Gt=!0},p(e,[d]){const Ge={};d&1&&(Ge.fw=e[0]),p.$set(Ge);const Xn={};d&2&&(Xn.$$scope={dirty:d,ctx:e}),re.$set(Xn);const Qn={};d&2&&(Qn.$$scope={dirty:d,ctx:e}),ue.$set(Qn)},i(e){Gt||(b(p.$$.fragment,e),b(O.$$.fragment,e),b($.$$.fragment,e),b(N.$$.fragment,e),b(ke.$$.fragment,e),b(Ee.$$.fragment,e),b($e.$$.fragment,e),b(re.$$.fragment,e),b(ze.$$.fragment,e),b(De.$$.fragment,e),b(Te.$$.fragment,e),b(Me.$$.fragment,e),b(Ce.$$.fragment,e),b(je.$$.fragment,e),b(Pe.$$.fragment,e),b(Ae.$$.fragment,e),b(Oe.$$.fragment,e),b(ye.$$.fragment,e),b(qe.$$.fragment,e),b(Se.$$.fragment,e),b(ue.$$.fragment,e),Gt=!0)},o(e){_(p.$$.fragment,e),_(O.$$.fragment,e),_($.$$.fragment,e),_(N.$$.fragment,e),_(ke.$$.fragment,e),_(Ee.$$.fragment,e),_($e.$$.fragment,e),_(re.$$.fragment,e),_(ze.$$.fragment,e),_(De.$$.fragment,e),_(Te.$$.fragment,e),_(Me.$$.fragment,e),_(Ce.$$.fragment,e),_(je.$$.fragment,e),_(Pe.$$.fragment,e),_(Ae.$$.fragment,e),_(Oe.$$.fragment,e),_(ye.$$.fragment,e),_(qe.$$.fragment,e),_(Se.$$.fragment,e),_(ue.$$.fragment,e),Gt=!1},d(e){t(f),e&&t(P),k(p,e),e&&t(A),e&&t(D),k(O),e&&t(L),k($,e),e&&t(ve),k(N,e),e&&t(be),e&&t(F),e&&t(et),e&&t(Ke),e&&t(nt),k(ke,e),e&&t(tt),e&&t(Q),k(Ee),e&&t(rt),e&&t(H),e&&t(it),k($e,e),e&&t(st),k(re,e),e&&t(at),e&&t(R),e&&t(lt),k(ze,e),e&&t(dt),e&&t(ie),e&&t(ot),e&&t(M),e&&t(ut),k(De,e),e&&t(ct),e&&t(C),e&&t(ft),e&&t(Z),e&&t(pt),k(Te,e),e&&t(mt),e&&t(Ve),e&&t(ht),e&&t(se),e&&t(gt),e&&t(ne),k(Me),e&&t(wt),e&&t(y),e&&t(vt),k(Ce,e),e&&t(bt),k(je,e),e&&t(_t),e&&t(m),e&&t(kt),e&&t(S),e&&t(Et),k(Pe,e),e&&t($t),e&&t(G),e&&t(zt),k(Ae,e),e&&t(Dt),k(Oe,e),e&&t(Tt),e&&t(K),e&&t(Mt),e&&t(le),e&&t(Ct),k(ye,e),e&&t(jt),e&&t(de),e&&t(Pt),k(qe,e),e&&t(At),e&&t(U),e&&t(Ot),k(Se,e),e&&t(Ft),e&&t(We),e&&t(yt),e&&t(B),e&&t(qt),e&&t(oe),e&&t(St),k(ue,e)}}}const Qa={local:"finetuning-eine-modells-mit-der-trainer-api",sections:[{local:"training",title:"Training"},{local:"evaluation",title:"Evaluation"}],title:"Fine-tuning eine Modells mit der Trainer API"};function el(ge,f,P){let p="pt";return Na(()=>{const A=new URLSearchParams(window.location.search);P(0,p=A.get("fw")||"pt")}),[p]}class al extends xa{constructor(f){super();Wa(this,f,el,Xa,Ia,{})}}export{al as default,Qa as metadata};
