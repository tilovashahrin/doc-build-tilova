import{S as lt,i as ut,s as ct,e,k as m,w as z,t as y,M as dt,c as i,d as t,m as l,a,x as C,h as w,b as r,F as o,g as u,y as O,L as pt,q as $,o as q,B as Q,v as gt}from"../../chunks/vendor-4918fc3c.js";import{D as wn}from"../../chunks/Docstring-02f0cd65.js";import{I as en}from"../../chunks/IconCopyLink-21d338b1.js";function ft(Mn){let c,an,d,N,M,R,On,G,$n,rn,p,T,U,L,qn,B,Qn,sn,g,P,Nn,H,Tn,mn,f,k,V,D,kn,J,Fn,ln,h,A,En,j,Rn,un,_,F,K,W,Ln,Y,Pn,cn,b,S,Dn,Z,An,dn,v,E,nn,X,Wn,tn,Sn,pn,x,I,Xn,on,In,gn;return R=new en({}),L=new en({}),P=new wn({props:{name:"class optimum.onnxruntime.configuration.OptimizationConfig",anchor:"optimum.onnxruntime.configuration.OptimizationConfig",parameters:[{name:"optimization_level",val:": int = 1"},{name:"optimize_for_gpu",val:": bool = False"},{name:"optimize_with_onnxruntime_only",val:": bool = False"},{name:"disable_gelu",val:": bool = False"},{name:"disable_layer_norm",val:": bool = False"},{name:"disable_attention",val:": bool = False"},{name:"disable_skip_layer_norm",val:": bool = False"},{name:"disable_bias_skip_layer_norm",val:": bool = False"},{name:"disable_bias_gelu",val:": bool = False"},{name:"enable_gelu_approximation",val:": bool = False"},{name:"use_mask_index",val:": bool = False"},{name:"no_attention_mask",val:": bool = False"},{name:"disable_embed_layer_norm",val:": bool = True"}],parametersDescription:[{anchor:"optimum.onnxruntime.configuration.OptimizationConfig.optimization_level",description:`<strong>optimization_level</strong> (<code>int</code>, defaults to 1) &#x2014;
ONNX opset version to export the model with.
Optimization level performed by ONNX Runtime of the loaded graph.
Supported optimization level are 0, 1, 2 and 99.
0 will disable all optimizations.
1 will enable basic optimizations.
2 will enable basic and extended optimizations, including complex node fusions applied to the nodes
assigned to the CPU or CUDA execution provider, making the resulting optimized graph hardware dependent.
99 will enable all available optimizations including layout optimizations.`,name:"optimization_level"},{anchor:"optimum.onnxruntime.configuration.OptimizationConfig.optimize_for_gpu",description:`<strong>optimize_for_gpu</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether to optimize the model for GPU inference.
The optimized graph might contain operators for GPU or CPU only when <code>optimization_level</code> &gt; 1.`,name:"optimize_for_gpu"},{anchor:"optimum.onnxruntime.configuration.OptimizationConfig.optimize_with_onnxruntime_only",description:`<strong>optimize_with_onnxruntime_only</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether to only use ONNX Runtime to optimize the model and no graph fusion in Python.`,name:"optimize_with_onnxruntime_only"},{anchor:"optimum.onnxruntime.configuration.OptimizationConfig.disable_gelu",description:`<strong>disable_gelu</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether to disable the Gelu fusion.`,name:"disable_gelu"},{anchor:"optimum.onnxruntime.configuration.OptimizationConfig.disable_layer_norm",description:`<strong>disable_layer_norm</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether to disable Layer Normalization fusion.`,name:"disable_layer_norm"},{anchor:"optimum.onnxruntime.configuration.OptimizationConfig.disable_attention",description:`<strong>disable_attention</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether to disable Attention fusion.`,name:"disable_attention"},{anchor:"optimum.onnxruntime.configuration.OptimizationConfig.disable_skip_layer_norm",description:`<strong>disable_skip_layer_norm</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether to disable SkipLayerNormalization fusion.`,name:"disable_skip_layer_norm"},{anchor:"optimum.onnxruntime.configuration.OptimizationConfig.disable_bias_skip_layer_norm",description:`<strong>disable_bias_skip_layer_norm</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether to disable Add Bias and SkipLayerNormalization fusion.`,name:"disable_bias_skip_layer_norm"},{anchor:"optimum.onnxruntime.configuration.OptimizationConfig.disable_bias_gelu",description:`<strong>disable_bias_gelu</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether to disable Add Bias and Gelu / FastGelu fusion.`,name:"disable_bias_gelu"},{anchor:"optimum.onnxruntime.configuration.OptimizationConfig.enable_gelu_approximation",description:`<strong>enable_gelu_approximation</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether to enable Gelu / BiasGelu to FastGelu conversion.
The default value is set to <code>False</code> since this approximation might slightly impact the model&#x2019;s accuracy.`,name:"enable_gelu_approximation"},{anchor:"optimum.onnxruntime.configuration.OptimizationConfig.use_mask_index",description:`<strong>use_mask_index</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether to use mask index instead of raw attention mask in the attention operator.`,name:"use_mask_index"},{anchor:"optimum.onnxruntime.configuration.OptimizationConfig.no_attention_mask",description:`<strong>no_attention_mask</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether to not use attention masks. Only works for bert model type.`,name:"no_attention_mask"},{anchor:"optimum.onnxruntime.configuration.OptimizationConfig.disable_embed_layer_norm",description:`<strong>disable_embed_layer_norm</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Whether to disable EmbedLayerNormalization fusion.
The default value is set to <code>True</code> since this fusion is incompatible with ONNX Runtime quantization`,name:"disable_embed_layer_norm"}],source:"https://github.com/huggingface/optimum/blob/v.2.0.dev0/src/optimum/onnxruntime/configuration.py#L602"}}),D=new en({}),A=new wn({props:{name:"class optimum.onnxruntime.configuration.QuantizationConfig",anchor:"optimum.onnxruntime.configuration.QuantizationConfig",parameters:[{name:"is_static",val:": bool"},{name:"format",val:": QuantFormat"},{name:"mode",val:": QuantizationMode = <QuantizationMode.QLinearOps: 1>"},{name:"activations_dtype",val:": QuantType = <QuantType.QUInt8: 1>"},{name:"activations_symmetric",val:": bool = False"},{name:"weights_dtype",val:": QuantType = <QuantType.QInt8: 0>"},{name:"weights_symmetric",val:": bool = True"},{name:"per_channel",val:": bool = False"},{name:"reduce_range",val:": bool = False"},{name:"nodes_to_quantize",val:": typing.List[str] = <factory>"},{name:"nodes_to_exclude",val:": typing.List[str] = <factory>"},{name:"operators_to_quantize",val:": typing.List[str] = <factory>"},{name:"qdq_add_pair_to_weight",val:": bool = False"},{name:"qdq_dedicated_pair",val:": bool = False"},{name:"qdq_op_type_per_channel_support_to_axis",val:": typing.Dict[str, int] = <factory>"}],parametersDescription:[{anchor:"optimum.onnxruntime.configuration.QuantizationConfig.is_static",description:`<strong>is_static</strong> (<code>bool</code>) &#x2014;
Whether to apply static quantization or dynamic quantization.`,name:"is_static"},{anchor:"optimum.onnxruntime.configuration.QuantizationConfig.format",description:`<strong>format</strong> (<code>QuantFormat</code>) &#x2014;
Targeted ONNX Runtime quantization representation format.
For the Operator Oriented (QOperator) format, all the quantized operators have their own ONNX definitions.
For the Tensor Oriented (QDQ) format, the model is quantized by inserting QuantizeLinear / DeQuantizeLinear
operators.`,name:"format"},{anchor:"optimum.onnxruntime.configuration.QuantizationConfig.mode",description:`<strong>mode</strong> (<code>QuantizationMode</code>, defaults to <code>QuantizationMode.QLinearOps</code>) &#x2014;
Targeted ONNX Runtime quantization mode, default is QLinearOps to match QDQ format.
When targeting dynamic quantization mode, the default value is <code>QuantizationMode.IntegerOps</code> whereas the
default value for static quantization mode is <code>QuantizationMode.QLinearOps</code>.`,name:"mode"},{anchor:"optimum.onnxruntime.configuration.QuantizationConfig.activations_dtype",description:`<strong>activations_dtype</strong> (<code>QuantType</code>, defaults to <code>QuantType.QUInt8</code>) &#x2014;
The quantization data types to use for the activations.`,name:"activations_dtype"},{anchor:"optimum.onnxruntime.configuration.QuantizationConfig.activations_symmetric",description:`<strong>activations_symmetric</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether to apply symmetric quantization on the activations.`,name:"activations_symmetric"},{anchor:"optimum.onnxruntime.configuration.QuantizationConfig.weights_dtype",description:`<strong>weights_dtype</strong> (<code>QuantType</code>, defaults to <code>QuantType.QInt8</code>) &#x2014;
The quantization data types to use for the weights.`,name:"weights_dtype"},{anchor:"optimum.onnxruntime.configuration.QuantizationConfig.weights_symmetric",description:`<strong>weights_symmetric</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Whether to apply symmetric quantization on the weights.`,name:"weights_symmetric"},{anchor:"optimum.onnxruntime.configuration.QuantizationConfig.per_channel",description:`<strong>per_channel</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether we should quantize per-channel (also known as &#x201C;per-row&#x201D;). Enabling this can increase overall
accuracy while making the quantized model heavier.`,name:"per_channel"},{anchor:"optimum.onnxruntime.configuration.QuantizationConfig.reduce_range",description:`<strong>reduce_range</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether to use reduce-range 7-bits integers instead of 8-bits integers.`,name:"reduce_range"},{anchor:"optimum.onnxruntime.configuration.QuantizationConfig.nodes_to_quantize",description:`<strong>nodes_to_quantize</strong> (<code>list</code>) &#x2014;
List of the nodes names to quantize.`,name:"nodes_to_quantize"},{anchor:"optimum.onnxruntime.configuration.QuantizationConfig.nodes_to_exclude",description:`<strong>nodes_to_exclude</strong> (<code>list</code>) &#x2014;
List of the nodes names to exclude when applying quantization.`,name:"nodes_to_exclude"},{anchor:"optimum.onnxruntime.configuration.QuantizationConfig.operators_to_quantize",description:`<strong>operators_to_quantize</strong> (<code>list</code>) &#x2014;
List of the operators types to quantize.`,name:"operators_to_quantize"},{anchor:"optimum.onnxruntime.configuration.QuantizationConfig.qdq_add_pair_to_weight",description:`<strong>qdq_add_pair_to_weight</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
By default, floating-point weights are quantized and feed to solely inserted DeQuantizeLinear node.
If set to True, the floating-point weights will remain and both QuantizeLinear / DeQuantizeLinear nodes
will be inserted.`,name:"qdq_add_pair_to_weight"},{anchor:"optimum.onnxruntime.configuration.QuantizationConfig.qdq_dedicated_pair",description:`<strong>qdq_dedicated_pair</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
When inserting QDQ pair, multiple nodes can share a single QDQ pair as their inputs. If True, it will
create an identical and dedicated QDQ pair for each node.`,name:"qdq_dedicated_pair"},{anchor:"optimum.onnxruntime.configuration.QuantizationConfig.qdq_op_type_per_channel_support_to_axis",description:`<strong>qdq_op_type_per_channel_support_to_axis</strong> (<code>Dict[str, int]</code>) &#x2014;
Set the channel axis for a specific operator type. Effective only when per channel quantization is
supported and <code>per_channel</code> is set to True.`,name:"qdq_op_type_per_channel_support_to_axis"}],source:"https://github.com/huggingface/optimum/blob/v.2.0.dev0/src/optimum/onnxruntime/configuration.py#L214"}}),W=new en({}),S=new wn({props:{name:"class optimum.onnxruntime.configuration.CalibrationConfig",anchor:"optimum.onnxruntime.configuration.CalibrationConfig",parameters:[{name:"dataset_name",val:": str"},{name:"dataset_config_name",val:": str"},{name:"dataset_split",val:": str"},{name:"dataset_num_samples",val:": int"},{name:"method",val:": CalibrationMethod"},{name:"num_bins",val:": typing.Optional[int] = None"},{name:"num_quantized_bins",val:": typing.Optional[int] = None"},{name:"percentile",val:": typing.Optional[float] = None"},{name:"moving_average",val:": typing.Optional[bool] = None"},{name:"averaging_constant",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"optimum.onnxruntime.configuration.CalibrationConfig.dataset_name",description:`<strong>dataset_name</strong> (<code>str</code>) &#x2014;
The name of the calibration dataset.`,name:"dataset_name"},{anchor:"optimum.onnxruntime.configuration.CalibrationConfig.dataset_config_name",description:`<strong>dataset_config_name</strong> (<code>str</code>) &#x2014;
The name of the calibration dataset configuration.`,name:"dataset_config_name"},{anchor:"optimum.onnxruntime.configuration.CalibrationConfig.dataset_split",description:`<strong>dataset_split</strong> (<code>str</code>) &#x2014;
Which split of the dataset is used to perform the calibration step.`,name:"dataset_split"},{anchor:"optimum.onnxruntime.configuration.CalibrationConfig.dataset_num_samples",description:`<strong>dataset_num_samples</strong> (<code>int</code>) &#x2014;
The number of samples composing the calibration dataset.`,name:"dataset_num_samples"},{anchor:"optimum.onnxruntime.configuration.CalibrationConfig.method",description:`<strong>method</strong> (<code>CalibrationMethod</code>) &#x2014;
The method chosen to calculate the activations quantization parameters using the calibration dataset.`,name:"method"},{anchor:"optimum.onnxruntime.configuration.CalibrationConfig.num_bins",description:`<strong>num_bins</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The number of bins to use when creating the histogram when performing the calibration step using the
Percentile or Entropy method.`,name:"num_bins"},{anchor:"optimum.onnxruntime.configuration.CalibrationConfig.num_quantized_bins",description:`<strong>num_quantized_bins</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The number of quantized bins to use when performing the calibration step using the Entropy method.`,name:"num_quantized_bins"},{anchor:"optimum.onnxruntime.configuration.CalibrationConfig.percentile",description:`<strong>percentile</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The percentile to use when computing the activations quantization ranges when performing the calibration
step using the Percentile method.`,name:"percentile"},{anchor:"optimum.onnxruntime.configuration.CalibrationConfig.moving_average",description:`<strong>moving_average</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to compute the moving average of the minimum and maximum values when performing the calibration step
using the MinMax method.`,name:"moving_average"},{anchor:"optimum.onnxruntime.configuration.CalibrationConfig.averaging_constant",description:`<strong>averaging_constant</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The constant smoothing factor to use when computing the moving average of the minimum and maximum values.
Effective only when the MinMax calibration method is selected and <code>moving_average</code> is set to True.`,name:"averaging_constant"}],source:"https://github.com/huggingface/optimum/blob/v.2.0.dev0/src/optimum/onnxruntime/configuration.py#L36"}}),X=new en({}),I=new wn({props:{name:"class optimum.onnxruntime.ORTConfig",anchor:"optimum.onnxruntime.ORTConfig",parameters:[{name:"opset",val:": typing.Optional[int] = None"},{name:"use_external_data_format",val:": bool = False"},{name:"optimization",val:": typing.Optional[optimum.onnxruntime.configuration.OptimizationConfig] = None"},{name:"quantization",val:": typing.Optional[optimum.onnxruntime.configuration.QuantizationConfig] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"optimum.onnxruntime.ORTConfig.opset",description:`<strong>opset</strong> (<code>int</code>, <em>optional</em>) &#x2014;
ONNX opset version to export the model with.`,name:"opset"},{anchor:"optimum.onnxruntime.ORTConfig.use_external_data_format",description:`<strong>use_external_data_format</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Allow exporting model &gt;= than 2Gb.`,name:"use_external_data_format"},{anchor:"optimum.onnxruntime.ORTConfig.optimization",description:`<strong>optimization</strong> (<code>OptimizationConfig</code>, <em>optional</em>, defaults to None) &#x2014;
Specify a configuration to optimize ONNX Runtime model`,name:"optimization"},{anchor:"optimum.onnxruntime.ORTConfig.quantization",description:`<strong>quantization</strong> (<code>QuantizationConfig</code>, <em>optional</em>, defaults to None) &#x2014;
Specify a configuration to quantize ONNX Runtime model`,name:"quantization"}],source:"https://github.com/huggingface/optimum/blob/v.2.0.dev0/src/optimum/onnxruntime/configuration.py#L660"}}),{c(){c=e("meta"),an=m(),d=e("h1"),N=e("a"),M=e("span"),z(R.$$.fragment),On=m(),G=e("span"),$n=y("Configuration"),rn=m(),p=e("h2"),T=e("a"),U=e("span"),z(L.$$.fragment),qn=m(),B=e("span"),Qn=y("OptimizationConfig"),sn=m(),g=e("div"),z(P.$$.fragment),Nn=m(),H=e("p"),Tn=y("OptimizationConfig is the configuration class handling all the ONNX Runtime optimization parameters."),mn=m(),f=e("h2"),k=e("a"),V=e("span"),z(D.$$.fragment),kn=m(),J=e("span"),Fn=y("QuantizationConfig"),ln=m(),h=e("div"),z(A.$$.fragment),En=m(),j=e("p"),Rn=y("QuantizationConfig is the configuration class handling all the ONNX Runtime quantization parameters."),un=m(),_=e("h2"),F=e("a"),K=e("span"),z(W.$$.fragment),Ln=m(),Y=e("span"),Pn=y("CalibrationConfig"),cn=m(),b=e("div"),z(S.$$.fragment),Dn=m(),Z=e("p"),An=y(`CalibrationConfig is the configuration class handling all the ONNX Runtime parameters related to the calibration
step of static quantization.`),dn=m(),v=e("h2"),E=e("a"),nn=e("span"),z(X.$$.fragment),Wn=m(),tn=e("span"),Sn=y("ORTConfig"),pn=m(),x=e("div"),z(I.$$.fragment),Xn=m(),on=e("p"),In=y("ORTConfig is the configuration class handling all the ONNX Runtime parameters related to the ONNX IR model export, optimization and quantization parameters."),this.h()},l(n){const s=dt('[data-svelte="svelte-1phssyn"]',document.head);c=i(s,"META",{name:!0,content:!0}),s.forEach(t),an=l(n),d=i(n,"H1",{class:!0});var fn=a(d);N=i(fn,"A",{id:!0,class:!0,href:!0});var Gn=a(N);M=i(Gn,"SPAN",{});var Un=a(M);C(R.$$.fragment,Un),Un.forEach(t),Gn.forEach(t),On=l(fn),G=i(fn,"SPAN",{});var Bn=a(G);$n=w(Bn,"Configuration"),Bn.forEach(t),fn.forEach(t),rn=l(n),p=i(n,"H2",{class:!0});var hn=a(p);T=i(hn,"A",{id:!0,class:!0,href:!0});var Hn=a(T);U=i(Hn,"SPAN",{});var Vn=a(U);C(L.$$.fragment,Vn),Vn.forEach(t),Hn.forEach(t),qn=l(hn),B=i(hn,"SPAN",{});var Jn=a(B);Qn=w(Jn,"OptimizationConfig"),Jn.forEach(t),hn.forEach(t),sn=l(n),g=i(n,"DIV",{class:!0});var _n=a(g);C(P.$$.fragment,_n),Nn=l(_n),H=i(_n,"P",{});var jn=a(H);Tn=w(jn,"OptimizationConfig is the configuration class handling all the ONNX Runtime optimization parameters."),jn.forEach(t),_n.forEach(t),mn=l(n),f=i(n,"H2",{class:!0});var bn=a(f);k=i(bn,"A",{id:!0,class:!0,href:!0});var Kn=a(k);V=i(Kn,"SPAN",{});var Yn=a(V);C(D.$$.fragment,Yn),Yn.forEach(t),Kn.forEach(t),kn=l(bn),J=i(bn,"SPAN",{});var Zn=a(J);Fn=w(Zn,"QuantizationConfig"),Zn.forEach(t),bn.forEach(t),ln=l(n),h=i(n,"DIV",{class:!0});var vn=a(h);C(A.$$.fragment,vn),En=l(vn),j=i(vn,"P",{});var nt=a(j);Rn=w(nt,"QuantizationConfig is the configuration class handling all the ONNX Runtime quantization parameters."),nt.forEach(t),vn.forEach(t),un=l(n),_=i(n,"H2",{class:!0});var xn=a(_);F=i(xn,"A",{id:!0,class:!0,href:!0});var tt=a(F);K=i(tt,"SPAN",{});var ot=a(K);C(W.$$.fragment,ot),ot.forEach(t),tt.forEach(t),Ln=l(xn),Y=i(xn,"SPAN",{});var et=a(Y);Pn=w(et,"CalibrationConfig"),et.forEach(t),xn.forEach(t),cn=l(n),b=i(n,"DIV",{class:!0});var zn=a(b);C(S.$$.fragment,zn),Dn=l(zn),Z=i(zn,"P",{});var it=a(Z);An=w(it,`CalibrationConfig is the configuration class handling all the ONNX Runtime parameters related to the calibration
step of static quantization.`),it.forEach(t),zn.forEach(t),dn=l(n),v=i(n,"H2",{class:!0});var yn=a(v);E=i(yn,"A",{id:!0,class:!0,href:!0});var at=a(E);nn=i(at,"SPAN",{});var rt=a(nn);C(X.$$.fragment,rt),rt.forEach(t),at.forEach(t),Wn=l(yn),tn=i(yn,"SPAN",{});var st=a(tn);Sn=w(st,"ORTConfig"),st.forEach(t),yn.forEach(t),pn=l(n),x=i(n,"DIV",{class:!0});var Cn=a(x);C(I.$$.fragment,Cn),Xn=l(Cn),on=i(Cn,"P",{});var mt=a(on);In=w(mt,"ORTConfig is the configuration class handling all the ONNX Runtime parameters related to the ONNX IR model export, optimization and quantization parameters."),mt.forEach(t),Cn.forEach(t),this.h()},h(){r(c,"name","hf:doc:metadata"),r(c,"content",JSON.stringify(ht)),r(N,"id","configuration"),r(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(N,"href","#configuration"),r(d,"class","relative group"),r(T,"id","optimum.onnxruntime.configuration.OptimizationConfig"),r(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(T,"href","#optimum.onnxruntime.configuration.OptimizationConfig"),r(p,"class","relative group"),r(g,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),r(k,"id","optimum.onnxruntime.configuration.QuantizationConfig"),r(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(k,"href","#optimum.onnxruntime.configuration.QuantizationConfig"),r(f,"class","relative group"),r(h,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),r(F,"id","optimum.onnxruntime.configuration.CalibrationConfig"),r(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(F,"href","#optimum.onnxruntime.configuration.CalibrationConfig"),r(_,"class","relative group"),r(b,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),r(E,"id","optimum.onnxruntime.ORTConfig"),r(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),r(E,"href","#optimum.onnxruntime.ORTConfig"),r(v,"class","relative group"),r(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,s){o(document.head,c),u(n,an,s),u(n,d,s),o(d,N),o(N,M),O(R,M,null),o(d,On),o(d,G),o(G,$n),u(n,rn,s),u(n,p,s),o(p,T),o(T,U),O(L,U,null),o(p,qn),o(p,B),o(B,Qn),u(n,sn,s),u(n,g,s),O(P,g,null),o(g,Nn),o(g,H),o(H,Tn),u(n,mn,s),u(n,f,s),o(f,k),o(k,V),O(D,V,null),o(f,kn),o(f,J),o(J,Fn),u(n,ln,s),u(n,h,s),O(A,h,null),o(h,En),o(h,j),o(j,Rn),u(n,un,s),u(n,_,s),o(_,F),o(F,K),O(W,K,null),o(_,Ln),o(_,Y),o(Y,Pn),u(n,cn,s),u(n,b,s),O(S,b,null),o(b,Dn),o(b,Z),o(Z,An),u(n,dn,s),u(n,v,s),o(v,E),o(E,nn),O(X,nn,null),o(v,Wn),o(v,tn),o(tn,Sn),u(n,pn,s),u(n,x,s),O(I,x,null),o(x,Xn),o(x,on),o(on,In),gn=!0},p:pt,i(n){gn||($(R.$$.fragment,n),$(L.$$.fragment,n),$(P.$$.fragment,n),$(D.$$.fragment,n),$(A.$$.fragment,n),$(W.$$.fragment,n),$(S.$$.fragment,n),$(X.$$.fragment,n),$(I.$$.fragment,n),gn=!0)},o(n){q(R.$$.fragment,n),q(L.$$.fragment,n),q(P.$$.fragment,n),q(D.$$.fragment,n),q(A.$$.fragment,n),q(W.$$.fragment,n),q(S.$$.fragment,n),q(X.$$.fragment,n),q(I.$$.fragment,n),gn=!1},d(n){t(c),n&&t(an),n&&t(d),Q(R),n&&t(rn),n&&t(p),Q(L),n&&t(sn),n&&t(g),Q(P),n&&t(mn),n&&t(f),Q(D),n&&t(ln),n&&t(h),Q(A),n&&t(un),n&&t(_),Q(W),n&&t(cn),n&&t(b),Q(S),n&&t(dn),n&&t(v),Q(X),n&&t(pn),n&&t(x),Q(I)}}}const ht={local:"configuration",sections:[{local:"optimum.onnxruntime.configuration.OptimizationConfig",title:"OptimizationConfig"},{local:"optimum.onnxruntime.configuration.QuantizationConfig",title:"QuantizationConfig"},{local:"optimum.onnxruntime.configuration.CalibrationConfig",title:"CalibrationConfig"},{local:"optimum.onnxruntime.ORTConfig",title:"ORTConfig"}],title:"Configuration"};function _t(Mn){return gt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class zt extends lt{constructor(c){super();ut(this,c,_t,ft,ct,{})}}export{zt as default,ht as metadata};
