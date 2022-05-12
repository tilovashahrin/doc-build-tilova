import{S as wn,i as vn,s as yn,e as l,k as u,w as F,t as o,M as _n,c as r,d as a,m as h,a as n,x as H,h as s,b as c,N as Yl,F as t,g as p,y as Y,L as bn,q as z,o as U,B as W,v as En}from"../../chunks/vendor-1e8b365d.js";import{I as Ue}from"../../chunks/IconCopyLink-483c28ba.js";import{C as zl}from"../../chunks/CodeBlock-e5764662.js";function kn(Ul){let D,Jt,P,M,We,ce,ao,Me,oo,Rt,B,so,Be,lo,ro,Kt,O,J,Je,ue,no,Re,io,Qt,R,po,Ke,co,uo,Vt,je,Qe,ho,Xt,xe,fo,Zt,g,$e,Ve,mo,wo,vo,j,Xe,yo,_o,Ze,bo,Eo,et,ko,go,jo,b,tt,xo,$o,at,qo,Ao,ot,Io,Co,st,Do,Po,ea,K,Oo,he,To,So,ta,m,No,qe,Lo,Go,lt,Fo,Ho,rt,Yo,zo,nt,Uo,Wo,aa,Q,Mo,it,Bo,Jo,oa,T,V,pt,de,Ro,ct,Ko,sa,X,Qo,ut,Vo,Xo,la,Ae,Zo,ra,d,es,ht,ts,as,dt,os,ss,ft,ls,rs,mt,ns,is,wt,ps,cs,na,w,us,vt,hs,ds,yt,fs,ms,_t,ws,vs,bt,ys,_s,ia,x,bs,Et,Es,ks,kt,gs,js,pa,fe,ca,Z,xs,me,$s,qs,ua,v,Wl,ha,Ie,As,da,S,ee,gt,we,Is,jt,Cs,fa,Ce,Ds,ma,De,Ps,wa,Pe,Os,va,te,xt,Ts,Ss,$t,Ns,ya,ae,Ls,qt,Gs,Fs,_a,ve,ba,y,Ml,Ea,N,oe,At,ye,Hs,_e,Ys,It,zs,Us,ka,se,Ws,Ct,Ms,Bs,ga,le,Js,Dt,Rs,Ks,ja,re,Qs,Pt,Vs,Xs,xa,$,Oe,Ot,Zs,el,tl,Te,Tt,al,ol,sl,Se,St,ll,rl,$a,ne,nl,Nt,il,pl,qa,L,ie,Lt,be,cl,Gt,ul,Aa,q,hl,Ft,dl,fl,Ht,ml,wl,Ia,f,vl,Yt,yl,_l,Ne,bl,El,zt,kl,gl,Ut,jl,xl,Wt,$l,ql,Ca,Ee,Da,pe,Al,ke,Il,Cl,Pa,_,Bl,Oa,A,Dl,Mt,Pl,Ol,Bt,Tl,Sl,Ta,Le,Nl,Sa;return ce=new Ue({}),ue=new Ue({}),de=new Ue({}),fe=new zl({props:{code:`import numpy as np
import gradio as gr


def reverse_audio(audio):
    sr, data = audio
    reversed_audio = (sr, np.flipud(data))
    return reversed_audio


mic = gr.Audio(source="microphone", type="numpy", label="Speak here...")
gr.Interface(reverse_audio, mic, "audio").launch()`,highlighted:`<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-keyword">import</span> gradio <span class="hljs-keyword">as</span> gr


<span class="hljs-keyword">def</span> <span class="hljs-title function_">reverse_audio</span>(<span class="hljs-params">audio</span>):
    sr, data = audio
    reversed_audio = (sr, np.flipud(data))
    <span class="hljs-keyword">return</span> reversed_audio


mic = gr.Audio(source=<span class="hljs-string">&quot;microphone&quot;</span>, <span class="hljs-built_in">type</span>=<span class="hljs-string">&quot;numpy&quot;</span>, label=<span class="hljs-string">&quot;Speak here...&quot;</span>)
gr.Interface(reverse_audio, mic, <span class="hljs-string">&quot;audio&quot;</span>).launch()`}}),we=new Ue({}),ve=new zl({props:{code:`import numpy as np
import gradio as gr

notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]


def generate_tone(note, octave, duration):
    sr = 48000
    a4_freq, tones_from_a4 = 440, 12 * (octave - 4) + (note - 9)
    frequency = a4_freq * 2 ** (tones_from_a4 / 12)
    duration = int(duration)
    audio = np.linspace(0, duration, duration * sr)
    audio = (20000 * np.sin(audio * (2 * np.pi * frequency))).astype(np.int16)
    return (sr, audio)


gr.Interface(
    generate_tone,
    [
        gr.Dropdown(notes, type="index"),
        gr.Slider(minimum=4, maximum=6, step=1),
        gr.Textbox(type="number", value=1, label="Duration in seconds"),
    ],
    "audio",
).launch()`,highlighted:`<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-keyword">import</span> gradio <span class="hljs-keyword">as</span> gr

notes = [<span class="hljs-string">&quot;C&quot;</span>, <span class="hljs-string">&quot;C#&quot;</span>, <span class="hljs-string">&quot;D&quot;</span>, <span class="hljs-string">&quot;D#&quot;</span>, <span class="hljs-string">&quot;E&quot;</span>, <span class="hljs-string">&quot;F&quot;</span>, <span class="hljs-string">&quot;F#&quot;</span>, <span class="hljs-string">&quot;G&quot;</span>, <span class="hljs-string">&quot;G#&quot;</span>, <span class="hljs-string">&quot;A&quot;</span>, <span class="hljs-string">&quot;A#&quot;</span>, <span class="hljs-string">&quot;B&quot;</span>]


<span class="hljs-keyword">def</span> <span class="hljs-title function_">generate_tone</span>(<span class="hljs-params">note, octave, duration</span>):
    sr = <span class="hljs-number">48000</span>
    a4_freq, tones_from_a4 = <span class="hljs-number">440</span>, <span class="hljs-number">12</span> * (octave - <span class="hljs-number">4</span>) + (note - <span class="hljs-number">9</span>)
    frequency = a4_freq * <span class="hljs-number">2</span> ** (tones_from_a4 / <span class="hljs-number">12</span>)
    duration = <span class="hljs-built_in">int</span>(duration)
    audio = np.linspace(<span class="hljs-number">0</span>, duration, duration * sr)
    audio = (<span class="hljs-number">20000</span> * np.sin(audio * (<span class="hljs-number">2</span> * np.pi * frequency))).astype(np.int16)
    <span class="hljs-keyword">return</span> (sr, audio)


gr.Interface(
    generate_tone,
    [
        gr.Dropdown(notes, <span class="hljs-built_in">type</span>=<span class="hljs-string">&quot;index&quot;</span>),
        gr.Slider(minimum=<span class="hljs-number">4</span>, maximum=<span class="hljs-number">6</span>, step=<span class="hljs-number">1</span>),
        gr.Textbox(<span class="hljs-built_in">type</span>=<span class="hljs-string">&quot;number&quot;</span>, value=<span class="hljs-number">1</span>, label=<span class="hljs-string">&quot;Duration in seconds&quot;</span>),
    ],
    <span class="hljs-string">&quot;audio&quot;</span>,
).launch()`}}),ye=new Ue({}),be=new Ue({}),Ee=new zl({props:{code:`from transformers import pipeline
import gradio as gr

model = pipeline("automatic-speech-recognition")


def transcribe_audio(mic=None, file=None):
    if mic is not None:
        audio = mic
    elif file is not None:
        audio = file
    else:
        return "You must either provide a mic recording or a file"
    transcription = model(audio)["text"]
    return transcription


gr.Interface(
    fn=transcribe_audio,
    inputs=[
        gr.Audio(source="microphone", type="filepath", optional=True),
        gr.Audio(source="upload", type="filepath", optional=True),
    ],
    outputs="text",
).launch()`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline
<span class="hljs-keyword">import</span> gradio <span class="hljs-keyword">as</span> gr

model = pipeline(<span class="hljs-string">&quot;automatic-speech-recognition&quot;</span>)


<span class="hljs-keyword">def</span> <span class="hljs-title function_">transcribe_audio</span>(<span class="hljs-params">mic=<span class="hljs-literal">None</span>, file=<span class="hljs-literal">None</span></span>):
    <span class="hljs-keyword">if</span> mic <span class="hljs-keyword">is</span> <span class="hljs-keyword">not</span> <span class="hljs-literal">None</span>:
        audio = mic
    <span class="hljs-keyword">elif</span> file <span class="hljs-keyword">is</span> <span class="hljs-keyword">not</span> <span class="hljs-literal">None</span>:
        audio = file
    <span class="hljs-keyword">else</span>:
        <span class="hljs-keyword">return</span> <span class="hljs-string">&quot;You must either provide a mic recording or a file&quot;</span>
    transcription = model(audio)[<span class="hljs-string">&quot;text&quot;</span>]
    <span class="hljs-keyword">return</span> transcription


gr.Interface(
    fn=transcribe_audio,
    inputs=[
        gr.Audio(source=<span class="hljs-string">&quot;microphone&quot;</span>, <span class="hljs-built_in">type</span>=<span class="hljs-string">&quot;filepath&quot;</span>, optional=<span class="hljs-literal">True</span>),
        gr.Audio(source=<span class="hljs-string">&quot;upload&quot;</span>, <span class="hljs-built_in">type</span>=<span class="hljs-string">&quot;filepath&quot;</span>, optional=<span class="hljs-literal">True</span>),
    ],
    outputs=<span class="hljs-string">&quot;text&quot;</span>,
).launch()`}}),{c(){D=l("meta"),Jt=u(),P=l("h1"),M=l("a"),We=l("span"),F(ce.$$.fragment),ao=u(),Me=l("span"),oo=o("Understanding the Interface class"),Rt=u(),B=l("p"),so=o("In this section, we will take a closer look at the "),Be=l("code"),lo=o("Interface"),ro=o(` class, and understand the
main parameters used to create one.`),Kt=u(),O=l("h2"),J=l("a"),Je=l("span"),F(ue.$$.fragment),no=u(),Re=l("span"),io=o("How to create an Interface"),Qt=u(),R=l("p"),po=o("You\u2019ll notice that the "),Ke=l("code"),co=o("Interface"),uo=o(" class has 3 required parameters:"),Vt=u(),je=l("p"),Qe=l("code"),ho=o("Interface(fn, inputs, outputs, ...)"),Xt=u(),xe=l("p"),fo=o("These parameters are:"),Zt=u(),g=l("ul"),$e=l("li"),Ve=l("code"),mo=o("fn"),wo=o(": the prediction function that is wrapped by the Gradio interface. This function can take one or more parameters and return one or more values"),vo=u(),j=l("li"),Xe=l("code"),yo=o("inputs"),_o=o(": the input component type(s). Gradio provides many pre-built components such as"),Ze=l("code"),bo=o('"image"'),Eo=o(" or "),et=l("code"),ko=o('"mic"'),go=o("."),jo=u(),b=l("li"),tt=l("code"),xo=o("outputs"),$o=o(": the output component type(s). Again, "),at=l("code"),qo=o("gradio"),Ao=o(" provides many pre-built components e.g. "),ot=l("code"),Io=o('"image"'),Co=o(" or "),st=l("code"),Do=o('"label"'),Po=o("."),ea=u(),K=l("p"),Oo=o("For a complete list of components, "),he=l("a"),To=o("see the Gradio docs "),So=o(". Each pre-built component can be customized by instantiating the class corresponding to the component."),ta=u(),m=l("p"),No=o("For example, as we saw in the "),qe=l("a"),Lo=o("previous section"),Go=o(`,
instead of passing in `),lt=l("code"),Fo=o('"textbox"'),Ho=o(" to the "),rt=l("code"),Yo=o("inputs"),zo=o(" parameter, you can pass in a "),nt=l("code"),Uo=o('Textbox(lines=7, label="Prompt")'),Wo=o(" component to create a textbox with 7 lines and a label."),aa=u(),Q=l("p"),Mo=o("Let\u2019s take a look at another example, this time with an "),it=l("code"),Bo=o("Audio"),Jo=o(" component."),oa=u(),T=l("h2"),V=l("a"),pt=l("span"),F(de.$$.fragment),Ro=u(),ct=l("span"),Ko=o("A simple example with audio"),sa=u(),X=l("p"),Qo=o(`As mentioned earlier, Gradio provides many different inputs and outputs.
So let\u2019s build an `),ut=l("code"),Vo=o("Interface"),Xo=o(" that works with audio."),la=u(),Ae=l("p"),Zo=o(`In this example, we\u2019ll build an audio-to-audio function that takes an
audio file and simply reverses it.`),ra=u(),d=l("p"),es=o("We will use for the input the "),ht=l("code"),ts=o("Audio"),as=o(" component. When using the "),dt=l("code"),os=o("Audio"),ss=o(` component,
you can specify whether you want the `),ft=l("code"),ls=o("source"),rs=o(` of the audio to be a file that the user
uploads or a microphone that the user records their voice with. In this case, let\u2019s
set it to a `),mt=l("code"),ns=o('"microphone"'),is=o(". Just for fun, we\u2019ll add a label to our "),wt=l("code"),ps=o("Audio"),cs=o(` that says
\u201CSpeak here\u2026\u201C.`),na=u(),w=l("p"),us=o(`In addition, we\u2019d like to receive the audio as a numpy array so that we can easily
\u201Creverse\u201D it. So we\u2019ll set the `),vt=l("code"),hs=o('"type"'),ds=o(" to be "),yt=l("code"),fs=o('"numpy"'),ms=o(`, which passes the input
data as a tuple of (`),_t=l("code"),ws=o("sample_rate"),vs=o(", "),bt=l("code"),ys=o("data"),_s=o(") into our function."),ia=u(),x=l("p"),bs=o("We will also use the "),Et=l("code"),Es=o("Audio"),ks=o(` output component which can automatically
render a tuple with a sample rate and numpy array of data as a playable audio file.
In this case, we do not need to do any customization, so we will use the string
shortcut `),kt=l("code"),gs=o('"audio"'),js=o("."),pa=u(),F(fe.$$.fragment),ca=u(),Z=l("p"),xs=o(`The code above will produce an interface like the one below (if your browser doesn\u2019t
ask you for microphone permissions, `),me=l("a"),$s=o("open the demo in  a separate tab"),qs=o(".)"),ua=u(),v=l("iframe"),ha=u(),Ie=l("p"),As=o("You should now be able to record your voice and hear yourself speaking in reverse - spooky \u{1F47B}!"),da=u(),S=l("h2"),ee=l("a"),gt=l("span"),F(we.$$.fragment),Is=u(),jt=l("span"),Cs=o("Handling multiple inputs and outputs"),fa=u(),Ce=l("p"),Ds=o(`Let\u2019s say we had a more complicated function, with multiple inputs and outputs.
In the example below, we have a function that takes a dropdown index, a slider value, and number,
and returns an audio sample of a musical tone.`),ma=u(),De=l("p"),Ps=o(`Take a look how we pass a list of input and output components,
and see if you can follow along what\u2019s happening.`),wa=u(),Pe=l("p"),Os=o("The key here is that when you pass:"),va=u(),te=l("ul"),xt=l("li"),Ts=o("a list of input components, each component corresponds to a parameter in order."),Ss=u(),$t=l("li"),Ns=o("a list of output coponents, each component corresponds to a returned value."),ya=u(),ae=l("p"),Ls=o("The code snippet below shows how three input components line up with the three arguments of the "),qt=l("code"),Gs=o("generate_tone()"),Fs=o(" function:"),_a=u(),F(ve.$$.fragment),ba=u(),y=l("iframe"),Ea=u(),N=l("h3"),oe=l("a"),At=l("span"),F(ye.$$.fragment),Hs=u(),_e=l("span"),Ys=o("The "),It=l("code"),zs=o("launch()"),Us=o(" method"),ka=u(),se=l("p"),Ws=o("So far, we have used the "),Ct=l("code"),Ms=o("launch()"),Bs=o(` method to launch the interface, but we
haven\u2019t really discussed what it does.`),ga=u(),le=l("p"),Js=o("By default, the "),Dt=l("code"),Rs=o("launch()"),Ks=o(` method will launch the demo in a web server that
is running locally. If you are running your code in a Jupyter or Colab notebook, then
Gradio will embed the demo GUI in the notebook so you can easily use it.`),ja=u(),re=l("p"),Qs=o("You can customize the behavior of "),Pt=l("code"),Vs=o("launch()"),Xs=o(" through different parameters:"),xa=u(),$=l("ul"),Oe=l("li"),Ot=l("code"),Zs=o("inline"),el=o(" - whether to display the interface inline on Python notebooks."),tl=u(),Te=l("li"),Tt=l("code"),al=o("inbrowser"),ol=o(" - whether to automatically launch the interface in a new tab on the default browser."),sl=u(),Se=l("li"),St=l("code"),ll=o("share"),rl=o(" - whether to create a publicly shareable link from your computer for the interface. Kind of like a Google Drive link!"),$a=u(),ne=l("p"),nl=o("We\u2019ll cover the "),Nt=l("code"),il=o("share"),pl=o(" parameter in a lot more detail in the next section!"),qa=u(),L=l("h2"),ie=l("a"),Lt=l("span"),F(be.$$.fragment),cl=u(),Gt=l("span"),ul=o("\u270F\uFE0F Let's apply it!"),Aa=u(),q=l("p"),hl=o("Let\u2019s build an interface that allows you to demo a "),Ft=l("strong"),dl=o("speech-recognition"),fl=o(` model.
To make it interesting, we will accept `),Ht=l("em"),ml=o("either"),wl=o(" a mic input or an uploaded file."),Ia=u(),f=l("p"),vl=o("As usual, we\u2019ll load our speech recognition model using the the "),Yt=l("code"),yl=o("pipeline()"),_l=o(` function \u{1F917} Transformers.
If you need a quick refresher, you can go back to `),Ne=l("a"),bl=o("that section in Chapter 1"),El=o(".   Next, we\u2019ll implement a "),zt=l("code"),kl=o("transcribe_audio()"),gl=o(" function that processes the audio and returns the transcription. Finally, we\u2019ll wrap this function in an "),Ut=l("code"),jl=o("Interface"),xl=o(" with the "),Wt=l("code"),$l=o("Audio"),ql=o(" components for the inputs and just text for the output. Altogether, the code for this application is the following:"),Ca=u(),F(Ee.$$.fragment),Da=u(),pe=l("p"),Al=o("If your browser doesn\u2019t ask you for microphone permissions, "),ke=l("a"),Il=o("open the demo in a separate tab"),Cl=o("."),Pa=u(),_=l("iframe"),Oa=u(),A=l("p"),Dl=o(`That\u2019s it! You can now use this interface to transcribe audio. Notice here that
by passing in the `),Mt=l("code"),Pl=o("optional"),Ol=o(" parameter as "),Bt=l("code"),Tl=o("True"),Sl=o(`, we allow the user to either
provide a microphone or an audio file (or neither, but that will return an error message).`),Ta=u(),Le=l("p"),Nl=o("Keep going to see how to share your interface with others!"),this.h()},l(e){const i=_n('[data-svelte="svelte-1phssyn"]',document.head);D=r(i,"META",{name:!0,content:!0}),i.forEach(a),Jt=h(e),P=r(e,"H1",{class:!0});var Na=n(P);M=r(Na,"A",{id:!0,class:!0,href:!0});var Jl=n(M);We=r(Jl,"SPAN",{});var Rl=n(We);H(ce.$$.fragment,Rl),Rl.forEach(a),Jl.forEach(a),ao=h(Na),Me=r(Na,"SPAN",{});var Kl=n(Me);oo=s(Kl,"Understanding the Interface class"),Kl.forEach(a),Na.forEach(a),Rt=h(e),B=r(e,"P",{});var La=n(B);so=s(La,"In this section, we will take a closer look at the "),Be=r(La,"CODE",{});var Ql=n(Be);lo=s(Ql,"Interface"),Ql.forEach(a),ro=s(La,` class, and understand the
main parameters used to create one.`),La.forEach(a),Kt=h(e),O=r(e,"H2",{class:!0});var Ga=n(O);J=r(Ga,"A",{id:!0,class:!0,href:!0});var Vl=n(J);Je=r(Vl,"SPAN",{});var Xl=n(Je);H(ue.$$.fragment,Xl),Xl.forEach(a),Vl.forEach(a),no=h(Ga),Re=r(Ga,"SPAN",{});var Zl=n(Re);io=s(Zl,"How to create an Interface"),Zl.forEach(a),Ga.forEach(a),Qt=h(e),R=r(e,"P",{});var Fa=n(R);po=s(Fa,"You\u2019ll notice that the "),Ke=r(Fa,"CODE",{});var er=n(Ke);co=s(er,"Interface"),er.forEach(a),uo=s(Fa," class has 3 required parameters:"),Fa.forEach(a),Vt=h(e),je=r(e,"P",{});var tr=n(je);Qe=r(tr,"CODE",{});var ar=n(Qe);ho=s(ar,"Interface(fn, inputs, outputs, ...)"),ar.forEach(a),tr.forEach(a),Xt=h(e),xe=r(e,"P",{});var or=n(xe);fo=s(or,"These parameters are:"),or.forEach(a),Zt=h(e),g=r(e,"UL",{});var Ge=n(g);$e=r(Ge,"LI",{});var Ll=n($e);Ve=r(Ll,"CODE",{});var sr=n(Ve);mo=s(sr,"fn"),sr.forEach(a),wo=s(Ll,": the prediction function that is wrapped by the Gradio interface. This function can take one or more parameters and return one or more values"),Ll.forEach(a),vo=h(Ge),j=r(Ge,"LI",{});var ge=n(j);Xe=r(ge,"CODE",{});var lr=n(Xe);yo=s(lr,"inputs"),lr.forEach(a),_o=s(ge,": the input component type(s). Gradio provides many pre-built components such as"),Ze=r(ge,"CODE",{});var rr=n(Ze);bo=s(rr,'"image"'),rr.forEach(a),Eo=s(ge," or "),et=r(ge,"CODE",{});var nr=n(et);ko=s(nr,'"mic"'),nr.forEach(a),go=s(ge,"."),ge.forEach(a),jo=h(Ge),b=r(Ge,"LI",{});var G=n(b);tt=r(G,"CODE",{});var ir=n(tt);xo=s(ir,"outputs"),ir.forEach(a),$o=s(G,": the output component type(s). Again, "),at=r(G,"CODE",{});var pr=n(at);qo=s(pr,"gradio"),pr.forEach(a),Ao=s(G," provides many pre-built components e.g. "),ot=r(G,"CODE",{});var cr=n(ot);Io=s(cr,'"image"'),cr.forEach(a),Co=s(G," or "),st=r(G,"CODE",{});var ur=n(st);Do=s(ur,'"label"'),ur.forEach(a),Po=s(G,"."),G.forEach(a),Ge.forEach(a),ea=h(e),K=r(e,"P",{});var Ha=n(K);Oo=s(Ha,"For a complete list of components, "),he=r(Ha,"A",{href:!0,rel:!0});var hr=n(he);To=s(hr,"see the Gradio docs "),hr.forEach(a),So=s(Ha,". Each pre-built component can be customized by instantiating the class corresponding to the component."),Ha.forEach(a),ta=h(e),m=r(e,"P",{});var I=n(m);No=s(I,"For example, as we saw in the "),qe=r(I,"A",{href:!0});var dr=n(qe);Lo=s(dr,"previous section"),dr.forEach(a),Go=s(I,`,
instead of passing in `),lt=r(I,"CODE",{});var fr=n(lt);Fo=s(fr,'"textbox"'),fr.forEach(a),Ho=s(I," to the "),rt=r(I,"CODE",{});var mr=n(rt);Yo=s(mr,"inputs"),mr.forEach(a),zo=s(I," parameter, you can pass in a "),nt=r(I,"CODE",{});var wr=n(nt);Uo=s(wr,'Textbox(lines=7, label="Prompt")'),wr.forEach(a),Wo=s(I," component to create a textbox with 7 lines and a label."),I.forEach(a),aa=h(e),Q=r(e,"P",{});var Ya=n(Q);Mo=s(Ya,"Let\u2019s take a look at another example, this time with an "),it=r(Ya,"CODE",{});var vr=n(it);Bo=s(vr,"Audio"),vr.forEach(a),Jo=s(Ya," component."),Ya.forEach(a),oa=h(e),T=r(e,"H2",{class:!0});var za=n(T);V=r(za,"A",{id:!0,class:!0,href:!0});var yr=n(V);pt=r(yr,"SPAN",{});var _r=n(pt);H(de.$$.fragment,_r),_r.forEach(a),yr.forEach(a),Ro=h(za),ct=r(za,"SPAN",{});var br=n(ct);Ko=s(br,"A simple example with audio"),br.forEach(a),za.forEach(a),sa=h(e),X=r(e,"P",{});var Ua=n(X);Qo=s(Ua,`As mentioned earlier, Gradio provides many different inputs and outputs.
So let\u2019s build an `),ut=r(Ua,"CODE",{});var Er=n(ut);Vo=s(Er,"Interface"),Er.forEach(a),Xo=s(Ua," that works with audio."),Ua.forEach(a),la=h(e),Ae=r(e,"P",{});var kr=n(Ae);Zo=s(kr,`In this example, we\u2019ll build an audio-to-audio function that takes an
audio file and simply reverses it.`),kr.forEach(a),ra=h(e),d=r(e,"P",{});var E=n(d);es=s(E,"We will use for the input the "),ht=r(E,"CODE",{});var gr=n(ht);ts=s(gr,"Audio"),gr.forEach(a),as=s(E," component. When using the "),dt=r(E,"CODE",{});var jr=n(dt);os=s(jr,"Audio"),jr.forEach(a),ss=s(E,` component,
you can specify whether you want the `),ft=r(E,"CODE",{});var xr=n(ft);ls=s(xr,"source"),xr.forEach(a),rs=s(E,` of the audio to be a file that the user
uploads or a microphone that the user records their voice with. In this case, let\u2019s
set it to a `),mt=r(E,"CODE",{});var $r=n(mt);ns=s($r,'"microphone"'),$r.forEach(a),is=s(E,". Just for fun, we\u2019ll add a label to our "),wt=r(E,"CODE",{});var qr=n(wt);ps=s(qr,"Audio"),qr.forEach(a),cs=s(E,` that says
\u201CSpeak here\u2026\u201C.`),E.forEach(a),na=h(e),w=r(e,"P",{});var C=n(w);us=s(C,`In addition, we\u2019d like to receive the audio as a numpy array so that we can easily
\u201Creverse\u201D it. So we\u2019ll set the `),vt=r(C,"CODE",{});var Ar=n(vt);hs=s(Ar,'"type"'),Ar.forEach(a),ds=s(C," to be "),yt=r(C,"CODE",{});var Ir=n(yt);fs=s(Ir,'"numpy"'),Ir.forEach(a),ms=s(C,`, which passes the input
data as a tuple of (`),_t=r(C,"CODE",{});var Cr=n(_t);ws=s(Cr,"sample_rate"),Cr.forEach(a),vs=s(C,", "),bt=r(C,"CODE",{});var Dr=n(bt);ys=s(Dr,"data"),Dr.forEach(a),_s=s(C,") into our function."),C.forEach(a),ia=h(e),x=r(e,"P",{});var Fe=n(x);bs=s(Fe,"We will also use the "),Et=r(Fe,"CODE",{});var Pr=n(Et);Es=s(Pr,"Audio"),Pr.forEach(a),ks=s(Fe,` output component which can automatically
render a tuple with a sample rate and numpy array of data as a playable audio file.
In this case, we do not need to do any customization, so we will use the string
shortcut `),kt=r(Fe,"CODE",{});var Or=n(kt);gs=s(Or,'"audio"'),Or.forEach(a),js=s(Fe,"."),Fe.forEach(a),pa=h(e),H(fe.$$.fragment,e),ca=h(e),Z=r(e,"P",{});var Wa=n(Z);xs=s(Wa,`The code above will produce an interface like the one below (if your browser doesn\u2019t
ask you for microphone permissions, `),me=r(Wa,"A",{href:!0,target:!0});var Tr=n(me);$s=s(Tr,"open the demo in  a separate tab"),Tr.forEach(a),qs=s(Wa,".)"),Wa.forEach(a),ua=h(e),v=r(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),n(v).forEach(a),ha=h(e),Ie=r(e,"P",{});var Sr=n(Ie);As=s(Sr,"You should now be able to record your voice and hear yourself speaking in reverse - spooky \u{1F47B}!"),Sr.forEach(a),da=h(e),S=r(e,"H2",{class:!0});var Ma=n(S);ee=r(Ma,"A",{id:!0,class:!0,href:!0});var Nr=n(ee);gt=r(Nr,"SPAN",{});var Lr=n(gt);H(we.$$.fragment,Lr),Lr.forEach(a),Nr.forEach(a),Is=h(Ma),jt=r(Ma,"SPAN",{});var Gr=n(jt);Cs=s(Gr,"Handling multiple inputs and outputs"),Gr.forEach(a),Ma.forEach(a),fa=h(e),Ce=r(e,"P",{});var Fr=n(Ce);Ds=s(Fr,`Let\u2019s say we had a more complicated function, with multiple inputs and outputs.
In the example below, we have a function that takes a dropdown index, a slider value, and number,
and returns an audio sample of a musical tone.`),Fr.forEach(a),ma=h(e),De=r(e,"P",{});var Hr=n(De);Ps=s(Hr,`Take a look how we pass a list of input and output components,
and see if you can follow along what\u2019s happening.`),Hr.forEach(a),wa=h(e),Pe=r(e,"P",{});var Yr=n(Pe);Os=s(Yr,"The key here is that when you pass:"),Yr.forEach(a),va=h(e),te=r(e,"UL",{});var Ba=n(te);xt=r(Ba,"LI",{});var zr=n(xt);Ts=s(zr,"a list of input components, each component corresponds to a parameter in order."),zr.forEach(a),Ss=h(Ba),$t=r(Ba,"LI",{});var Ur=n($t);Ns=s(Ur,"a list of output coponents, each component corresponds to a returned value."),Ur.forEach(a),Ba.forEach(a),ya=h(e),ae=r(e,"P",{});var Ja=n(ae);Ls=s(Ja,"The code snippet below shows how three input components line up with the three arguments of the "),qt=r(Ja,"CODE",{});var Wr=n(qt);Gs=s(Wr,"generate_tone()"),Wr.forEach(a),Fs=s(Ja," function:"),Ja.forEach(a),_a=h(e),H(ve.$$.fragment,e),ba=h(e),y=r(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),n(y).forEach(a),Ea=h(e),N=r(e,"H3",{class:!0});var Ra=n(N);oe=r(Ra,"A",{id:!0,class:!0,href:!0});var Mr=n(oe);At=r(Mr,"SPAN",{});var Br=n(At);H(ye.$$.fragment,Br),Br.forEach(a),Mr.forEach(a),Hs=h(Ra),_e=r(Ra,"SPAN",{});var Ka=n(_e);Ys=s(Ka,"The "),It=r(Ka,"CODE",{});var Jr=n(It);zs=s(Jr,"launch()"),Jr.forEach(a),Us=s(Ka," method"),Ka.forEach(a),Ra.forEach(a),ka=h(e),se=r(e,"P",{});var Qa=n(se);Ws=s(Qa,"So far, we have used the "),Ct=r(Qa,"CODE",{});var Rr=n(Ct);Ms=s(Rr,"launch()"),Rr.forEach(a),Bs=s(Qa,` method to launch the interface, but we
haven\u2019t really discussed what it does.`),Qa.forEach(a),ga=h(e),le=r(e,"P",{});var Va=n(le);Js=s(Va,"By default, the "),Dt=r(Va,"CODE",{});var Kr=n(Dt);Rs=s(Kr,"launch()"),Kr.forEach(a),Ks=s(Va,` method will launch the demo in a web server that
is running locally. If you are running your code in a Jupyter or Colab notebook, then
Gradio will embed the demo GUI in the notebook so you can easily use it.`),Va.forEach(a),ja=h(e),re=r(e,"P",{});var Xa=n(re);Qs=s(Xa,"You can customize the behavior of "),Pt=r(Xa,"CODE",{});var Qr=n(Pt);Vs=s(Qr,"launch()"),Qr.forEach(a),Xs=s(Xa," through different parameters:"),Xa.forEach(a),xa=h(e),$=r(e,"UL",{});var He=n($);Oe=r(He,"LI",{});var Gl=n(Oe);Ot=r(Gl,"CODE",{});var Vr=n(Ot);Zs=s(Vr,"inline"),Vr.forEach(a),el=s(Gl," - whether to display the interface inline on Python notebooks."),Gl.forEach(a),tl=h(He),Te=r(He,"LI",{});var Fl=n(Te);Tt=r(Fl,"CODE",{});var Xr=n(Tt);al=s(Xr,"inbrowser"),Xr.forEach(a),ol=s(Fl," - whether to automatically launch the interface in a new tab on the default browser."),Fl.forEach(a),sl=h(He),Se=r(He,"LI",{});var Hl=n(Se);St=r(Hl,"CODE",{});var Zr=n(St);ll=s(Zr,"share"),Zr.forEach(a),rl=s(Hl," - whether to create a publicly shareable link from your computer for the interface. Kind of like a Google Drive link!"),Hl.forEach(a),He.forEach(a),$a=h(e),ne=r(e,"P",{});var Za=n(ne);nl=s(Za,"We\u2019ll cover the "),Nt=r(Za,"CODE",{});var en=n(Nt);il=s(en,"share"),en.forEach(a),pl=s(Za," parameter in a lot more detail in the next section!"),Za.forEach(a),qa=h(e),L=r(e,"H2",{class:!0});var eo=n(L);ie=r(eo,"A",{id:!0,class:!0,href:!0});var tn=n(ie);Lt=r(tn,"SPAN",{});var an=n(Lt);H(be.$$.fragment,an),an.forEach(a),tn.forEach(a),cl=h(eo),Gt=r(eo,"SPAN",{});var on=n(Gt);ul=s(on,"\u270F\uFE0F Let's apply it!"),on.forEach(a),eo.forEach(a),Aa=h(e),q=r(e,"P",{});var Ye=n(q);hl=s(Ye,"Let\u2019s build an interface that allows you to demo a "),Ft=r(Ye,"STRONG",{});var sn=n(Ft);dl=s(sn,"speech-recognition"),sn.forEach(a),fl=s(Ye,` model.
To make it interesting, we will accept `),Ht=r(Ye,"EM",{});var ln=n(Ht);ml=s(ln,"either"),ln.forEach(a),wl=s(Ye," a mic input or an uploaded file."),Ye.forEach(a),Ia=h(e),f=r(e,"P",{});var k=n(f);vl=s(k,"As usual, we\u2019ll load our speech recognition model using the the "),Yt=r(k,"CODE",{});var rn=n(Yt);yl=s(rn,"pipeline()"),rn.forEach(a),_l=s(k,` function \u{1F917} Transformers.
If you need a quick refresher, you can go back to `),Ne=r(k,"A",{href:!0});var nn=n(Ne);bl=s(nn,"that section in Chapter 1"),nn.forEach(a),El=s(k,".   Next, we\u2019ll implement a "),zt=r(k,"CODE",{});var pn=n(zt);kl=s(pn,"transcribe_audio()"),pn.forEach(a),gl=s(k," function that processes the audio and returns the transcription. Finally, we\u2019ll wrap this function in an "),Ut=r(k,"CODE",{});var cn=n(Ut);jl=s(cn,"Interface"),cn.forEach(a),xl=s(k," with the "),Wt=r(k,"CODE",{});var un=n(Wt);$l=s(un,"Audio"),un.forEach(a),ql=s(k," components for the inputs and just text for the output. Altogether, the code for this application is the following:"),k.forEach(a),Ca=h(e),H(Ee.$$.fragment,e),Da=h(e),pe=r(e,"P",{});var to=n(pe);Al=s(to,"If your browser doesn\u2019t ask you for microphone permissions, "),ke=r(to,"A",{href:!0,target:!0});var hn=n(ke);Il=s(hn,"open the demo in a separate tab"),hn.forEach(a),Cl=s(to,"."),to.forEach(a),Pa=h(e),_=r(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),n(_).forEach(a),Oa=h(e),A=r(e,"P",{});var ze=n(A);Dl=s(ze,`That\u2019s it! You can now use this interface to transcribe audio. Notice here that
by passing in the `),Mt=r(ze,"CODE",{});var dn=n(Mt);Pl=s(dn,"optional"),dn.forEach(a),Ol=s(ze," parameter as "),Bt=r(ze,"CODE",{});var fn=n(Bt);Tl=s(fn,"True"),fn.forEach(a),Sl=s(ze,`, we allow the user to either
provide a microphone or an audio file (or neither, but that will return an error message).`),ze.forEach(a),Ta=h(e),Le=r(e,"P",{});var mn=n(Le);Nl=s(mn,"Keep going to see how to share your interface with others!"),mn.forEach(a),this.h()},h(){c(D,"name","hf:doc:metadata"),c(D,"content",JSON.stringify(gn)),c(M,"id","understanding-the-interface-class"),c(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(M,"href","#understanding-the-interface-class"),c(P,"class","relative group"),c(J,"id","how-to-create-an-interface"),c(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(J,"href","#how-to-create-an-interface"),c(O,"class","relative group"),c(he,"href","https://gradio.app/docs"),c(he,"rel","nofollow"),c(qe,"href","/course/chapter9/2"),c(V,"id","a-simple-example-with-audio"),c(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(V,"href","#a-simple-example-with-audio"),c(T,"class","relative group"),c(me,"href","https://huggingface.co/spaces/course-demos/audio-reverse"),c(me,"target","_blank"),Yl(v.src,Wl="https://hf.space/gradioiframe/course-demos/audio-reverse/+")||c(v,"src",Wl),c(v,"frameborder","0"),c(v,"height","250"),c(v,"title","Gradio app"),c(v,"class","container p-0 flex-grow space-iframe"),c(v,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),c(v,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),c(ee,"id","handling-multiple-inputs-and-outputs"),c(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ee,"href","#handling-multiple-inputs-and-outputs"),c(S,"class","relative group"),Yl(y.src,Ml="https://hf.space/gradioiframe/course-demos/generate-tone/+")||c(y,"src",Ml),c(y,"frameborder","0"),c(y,"height","450"),c(y,"title","Gradio app"),c(y,"class","container p-0 flex-grow space-iframe"),c(y,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),c(y,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),c(oe,"id","the-launch-method"),c(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oe,"href","#the-launch-method"),c(N,"class","relative group"),c(ie,"id","lets-apply-it"),c(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ie,"href","#lets-apply-it"),c(L,"class","relative group"),c(Ne,"href","/course/chapter1/3"),c(ke,"href","https://huggingface.co/spaces/course-demos/audio-reverse"),c(ke,"target","_blank"),Yl(_.src,Bl="https://hf.space/gradioiframe/course-demos/asr/+")||c(_,"src",Bl),c(_,"frameborder","0"),c(_,"height","550"),c(_,"title","Gradio app"),c(_,"class","container p-0 flex-grow space-iframe"),c(_,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),c(_,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads")},m(e,i){t(document.head,D),p(e,Jt,i),p(e,P,i),t(P,M),t(M,We),Y(ce,We,null),t(P,ao),t(P,Me),t(Me,oo),p(e,Rt,i),p(e,B,i),t(B,so),t(B,Be),t(Be,lo),t(B,ro),p(e,Kt,i),p(e,O,i),t(O,J),t(J,Je),Y(ue,Je,null),t(O,no),t(O,Re),t(Re,io),p(e,Qt,i),p(e,R,i),t(R,po),t(R,Ke),t(Ke,co),t(R,uo),p(e,Vt,i),p(e,je,i),t(je,Qe),t(Qe,ho),p(e,Xt,i),p(e,xe,i),t(xe,fo),p(e,Zt,i),p(e,g,i),t(g,$e),t($e,Ve),t(Ve,mo),t($e,wo),t(g,vo),t(g,j),t(j,Xe),t(Xe,yo),t(j,_o),t(j,Ze),t(Ze,bo),t(j,Eo),t(j,et),t(et,ko),t(j,go),t(g,jo),t(g,b),t(b,tt),t(tt,xo),t(b,$o),t(b,at),t(at,qo),t(b,Ao),t(b,ot),t(ot,Io),t(b,Co),t(b,st),t(st,Do),t(b,Po),p(e,ea,i),p(e,K,i),t(K,Oo),t(K,he),t(he,To),t(K,So),p(e,ta,i),p(e,m,i),t(m,No),t(m,qe),t(qe,Lo),t(m,Go),t(m,lt),t(lt,Fo),t(m,Ho),t(m,rt),t(rt,Yo),t(m,zo),t(m,nt),t(nt,Uo),t(m,Wo),p(e,aa,i),p(e,Q,i),t(Q,Mo),t(Q,it),t(it,Bo),t(Q,Jo),p(e,oa,i),p(e,T,i),t(T,V),t(V,pt),Y(de,pt,null),t(T,Ro),t(T,ct),t(ct,Ko),p(e,sa,i),p(e,X,i),t(X,Qo),t(X,ut),t(ut,Vo),t(X,Xo),p(e,la,i),p(e,Ae,i),t(Ae,Zo),p(e,ra,i),p(e,d,i),t(d,es),t(d,ht),t(ht,ts),t(d,as),t(d,dt),t(dt,os),t(d,ss),t(d,ft),t(ft,ls),t(d,rs),t(d,mt),t(mt,ns),t(d,is),t(d,wt),t(wt,ps),t(d,cs),p(e,na,i),p(e,w,i),t(w,us),t(w,vt),t(vt,hs),t(w,ds),t(w,yt),t(yt,fs),t(w,ms),t(w,_t),t(_t,ws),t(w,vs),t(w,bt),t(bt,ys),t(w,_s),p(e,ia,i),p(e,x,i),t(x,bs),t(x,Et),t(Et,Es),t(x,ks),t(x,kt),t(kt,gs),t(x,js),p(e,pa,i),Y(fe,e,i),p(e,ca,i),p(e,Z,i),t(Z,xs),t(Z,me),t(me,$s),t(Z,qs),p(e,ua,i),p(e,v,i),p(e,ha,i),p(e,Ie,i),t(Ie,As),p(e,da,i),p(e,S,i),t(S,ee),t(ee,gt),Y(we,gt,null),t(S,Is),t(S,jt),t(jt,Cs),p(e,fa,i),p(e,Ce,i),t(Ce,Ds),p(e,ma,i),p(e,De,i),t(De,Ps),p(e,wa,i),p(e,Pe,i),t(Pe,Os),p(e,va,i),p(e,te,i),t(te,xt),t(xt,Ts),t(te,Ss),t(te,$t),t($t,Ns),p(e,ya,i),p(e,ae,i),t(ae,Ls),t(ae,qt),t(qt,Gs),t(ae,Fs),p(e,_a,i),Y(ve,e,i),p(e,ba,i),p(e,y,i),p(e,Ea,i),p(e,N,i),t(N,oe),t(oe,At),Y(ye,At,null),t(N,Hs),t(N,_e),t(_e,Ys),t(_e,It),t(It,zs),t(_e,Us),p(e,ka,i),p(e,se,i),t(se,Ws),t(se,Ct),t(Ct,Ms),t(se,Bs),p(e,ga,i),p(e,le,i),t(le,Js),t(le,Dt),t(Dt,Rs),t(le,Ks),p(e,ja,i),p(e,re,i),t(re,Qs),t(re,Pt),t(Pt,Vs),t(re,Xs),p(e,xa,i),p(e,$,i),t($,Oe),t(Oe,Ot),t(Ot,Zs),t(Oe,el),t($,tl),t($,Te),t(Te,Tt),t(Tt,al),t(Te,ol),t($,sl),t($,Se),t(Se,St),t(St,ll),t(Se,rl),p(e,$a,i),p(e,ne,i),t(ne,nl),t(ne,Nt),t(Nt,il),t(ne,pl),p(e,qa,i),p(e,L,i),t(L,ie),t(ie,Lt),Y(be,Lt,null),t(L,cl),t(L,Gt),t(Gt,ul),p(e,Aa,i),p(e,q,i),t(q,hl),t(q,Ft),t(Ft,dl),t(q,fl),t(q,Ht),t(Ht,ml),t(q,wl),p(e,Ia,i),p(e,f,i),t(f,vl),t(f,Yt),t(Yt,yl),t(f,_l),t(f,Ne),t(Ne,bl),t(f,El),t(f,zt),t(zt,kl),t(f,gl),t(f,Ut),t(Ut,jl),t(f,xl),t(f,Wt),t(Wt,$l),t(f,ql),p(e,Ca,i),Y(Ee,e,i),p(e,Da,i),p(e,pe,i),t(pe,Al),t(pe,ke),t(ke,Il),t(pe,Cl),p(e,Pa,i),p(e,_,i),p(e,Oa,i),p(e,A,i),t(A,Dl),t(A,Mt),t(Mt,Pl),t(A,Ol),t(A,Bt),t(Bt,Tl),t(A,Sl),p(e,Ta,i),p(e,Le,i),t(Le,Nl),Sa=!0},p:bn,i(e){Sa||(z(ce.$$.fragment,e),z(ue.$$.fragment,e),z(de.$$.fragment,e),z(fe.$$.fragment,e),z(we.$$.fragment,e),z(ve.$$.fragment,e),z(ye.$$.fragment,e),z(be.$$.fragment,e),z(Ee.$$.fragment,e),Sa=!0)},o(e){U(ce.$$.fragment,e),U(ue.$$.fragment,e),U(de.$$.fragment,e),U(fe.$$.fragment,e),U(we.$$.fragment,e),U(ve.$$.fragment,e),U(ye.$$.fragment,e),U(be.$$.fragment,e),U(Ee.$$.fragment,e),Sa=!1},d(e){a(D),e&&a(Jt),e&&a(P),W(ce),e&&a(Rt),e&&a(B),e&&a(Kt),e&&a(O),W(ue),e&&a(Qt),e&&a(R),e&&a(Vt),e&&a(je),e&&a(Xt),e&&a(xe),e&&a(Zt),e&&a(g),e&&a(ea),e&&a(K),e&&a(ta),e&&a(m),e&&a(aa),e&&a(Q),e&&a(oa),e&&a(T),W(de),e&&a(sa),e&&a(X),e&&a(la),e&&a(Ae),e&&a(ra),e&&a(d),e&&a(na),e&&a(w),e&&a(ia),e&&a(x),e&&a(pa),W(fe,e),e&&a(ca),e&&a(Z),e&&a(ua),e&&a(v),e&&a(ha),e&&a(Ie),e&&a(da),e&&a(S),W(we),e&&a(fa),e&&a(Ce),e&&a(ma),e&&a(De),e&&a(wa),e&&a(Pe),e&&a(va),e&&a(te),e&&a(ya),e&&a(ae),e&&a(_a),W(ve,e),e&&a(ba),e&&a(y),e&&a(Ea),e&&a(N),W(ye),e&&a(ka),e&&a(se),e&&a(ga),e&&a(le),e&&a(ja),e&&a(re),e&&a(xa),e&&a($),e&&a($a),e&&a(ne),e&&a(qa),e&&a(L),W(be),e&&a(Aa),e&&a(q),e&&a(Ia),e&&a(f),e&&a(Ca),W(Ee,e),e&&a(Da),e&&a(pe),e&&a(Pa),e&&a(_),e&&a(Oa),e&&a(A),e&&a(Ta),e&&a(Le)}}}const gn={local:"understanding-the-interface-class",sections:[{local:"how-to-create-an-interface",title:"How to create an Interface"},{local:"a-simple-example-with-audio",title:"A simple example with audio"},{local:"handling-multiple-inputs-and-outputs",sections:[{local:"the-launch-method",title:"The `launch()` method"}],title:"Handling multiple inputs and outputs"},{local:"lets-apply-it",title:"\u270F\uFE0F Let's apply it!"}],title:"Understanding the Interface class"};function jn(Ul){return En(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class An extends wn{constructor(D){super();vn(this,D,jn,kn,yn,{})}}export{An as default,gn as metadata};
