"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[603],{9603:(ee,q,m)=>{m.r(q),m.d(q,{T3emaModule:()=>$});var p=m(6814),h=m(6223),y=m(9157),x=m(2032),b=m(2296),u=m(617),f=m(3305),C=m(2599),J=m(3176),s=m(3751),I=m(5501),U=m(1896),w=m(9383),e=m(5879),L=m(3367);function N(n,r){if(1&n){const i=e.EpF();e.TgZ(0,"mb-line-style-selector",3),e.NdJ("selectionChange",function(t){e.CHM(i);const o=e.oxw();return e.KtG(o.updateStyle(t))}),e.qZA()}if(2&n){const i=e.oxw();e.Q6J("initial",i.current.style)("label","Line")}}let Q=(()=>{var n;class r{constructor(){this.removed=new e.vpe,this.changed=new e.vpe}set initial(a){this.current=a}updateStyle(a){this.current.style=a,this.changed.emit(this.current)}updateParams(a){this.current.params=a,this.changed.emit(this.current)}remove(){this.removed.emit(this.current)}}return(n=r).\u0275fac=function(a){return new(a||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-t3ema-params"]],inputs:{initial:"initial"},outputs:{removed:"removed",changed:"changed"},decls:6,vars:2,consts:[["mat-icon-button","","color","warn",3,"click"],[3,"initial","selectionChange"],[3,"initial","label","selectionChange",4,"ngIf"],[3,"initial","label","selectionChange"]],template:function(a,t){1&a&&(e.TgZ(0,"div")(1,"button",0),e.NdJ("click",function(){return t.remove()}),e.TgZ(2,"mat-icon"),e._uU(3,"delete"),e.qZA()(),e.TgZ(4,"mb-t3-exponential-moving-average-params",1),e.NdJ("selectionChange",function(l){return t.updateParams(l)}),e.qZA(),e.YNc(5,N,1,2,"mb-line-style-selector",2),e.qZA()),2&a&&(e.xp6(4),e.Q6J("initial",t.current.params),e.xp6(1),e.Q6J("ngIf",t.current.showStyle))},dependencies:[p.O5,b.RK,u.Hw,s.nkA,s.zoJ],changeDetection:0}),r})();function H(n,r){if(1&n){const i=e.EpF();e.TgZ(0,"app-t3ema-params",2),e.NdJ("changed",function(t){e.CHM(i);const o=e.oxw();return e.KtG(o.updated(t))})("removed",function(t){e.CHM(i);const o=e.oxw();return e.KtG(o.removed(t))}),e.qZA()}2&n&&e.Q6J("initial",r.$implicit)}const M=()=>{const n=new s.TD4;return n.color="",n.width=1.5,n.dash="",n.interpolation="camullRom",n},P=(n,r,i,a,t)=>({params:{length:r,vFactor:i,firstIsAverage:a,barComponent:t},style:M(),showStyle:n}),O=(n,r,i,a)=>({params:{smoothingFactor:r,vFactor:i,barComponent:a},style:M(),showStyle:n});let z=(()=>{var n;class r{constructor(){this.changed=new e.vpe,this.t3emaArray=[],this.colorArray=["#ff0000"],this.initialized=!1}set initialLength(a){const t=[];for(let o=0;o<a.length.length;o++){const l=P(a.showStyle,a.length[o],a.vFactor,a.firstIsAverage,a.barComponent);l.style.color=this.colorArray[o%this.colorArray.length],t.push(l)}this.t3emaArray=t,this.defaultBarComponent=a.barComponent}set initialSmoothingFactor(a){const t=[];for(let o=0;o<a.smoothingFactor.length;o++){const l=O(a.showStyle,a.smoothingFactor[o],a.vFactor,a.barComponent);l.style.color=this.colorArray[o%this.colorArray.length],t.push(l)}this.t3emaArray=t,this.defaultBarComponent=a.barComponent}set colors(a){if(a&&a.length>0){const t=[];this.colorArray=a;for(let o=0;o<this.t3emaArray.length;o++){const l={...this.t3emaArray[o]};l.style.color=a[o%a.length],t.push(l)}this.t3emaArray=t}}ngAfterViewInit(){this.initialized=!0,this.changed.emit(this.t3emaArray)}add(){const a=this.getShowStyle(),t=P(a,this.getLastLength()+5,.7,!0,this.defaultBarComponent);a&&(t.style.color=this.colorArray[this.t3emaArray.length%this.colorArray.length]),this.t3emaArray.push(t),this.t3emaArray=[...this.t3emaArray],this.notify()}updated(a){this.getIndex(a)>=0&&this.notify()}removed(a){const t=this.getIndex(a);t>=0&&(this.t3emaArray.splice(t,1),this.t3emaArray=[...this.t3emaArray],this.notify())}getLastLength(){const a=this.t3emaArray.length-1;return a<0?0:(n=>"length"in n)(this.t3emaArray[a].params)?this.t3emaArray[a].params.length:Math.ceil(2/this.t3emaArray[a].params.smoothingFactor-1)}getShowStyle(){return!(this.t3emaArray.length<=0)&&this.t3emaArray[0].showStyle}getIndex(a){for(let t=0;t<this.t3emaArray.length;t++)if(this.t3emaArray[t]===a)return t;return-1}notify(){this.initialized&&this.changed.emit(this.t3emaArray)}}return(n=r).\u0275fac=function(a){return new(a||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-t3ema-list"]],inputs:{initialLength:"initialLength",initialSmoothingFactor:"initialSmoothingFactor",colors:"colors"},outputs:{changed:"changed"},decls:5,vars:1,consts:[[3,"initial","changed","removed",4,"ngFor","ngForOf"],["mat-mini-fab","","color","primary",3,"click"],[3,"initial","changed","removed"]],template:function(a,t){1&a&&(e.YNc(0,H,1,1,"app-t3ema-params",0),e.TgZ(1,"div")(2,"button",1),e.NdJ("click",function(){return t.add()}),e.TgZ(3,"mat-icon"),e._uU(4,"add"),e.qZA()()()),2&a&&e.Q6J("ngForOf",t.t3emaArray)},dependencies:[p.sg,b.nh,u.Hw,Q]}),r})();function V(n,r){if(1&n){const i=e.EpF();e.TgZ(0,"mat-expansion-panel",17)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"mat-icon"),e._uU(4,"tune"),e.qZA()()(),e.TgZ(5,"mb-swatches-select",18),e.NdJ("selectionChange",function(t){e.CHM(i);const o=e.oxw();return e.KtG(o.indicatorPaletteChanged(t))}),e.qZA(),e.TgZ(6,"app-t3ema-list",19),e.NdJ("changed",function(t){e.CHM(i);const o=e.oxw();return e.KtG(o.indicatorsChanged(t))}),e.qZA()()}if(2&n){const i=e.oxw();e.xp6(5),e.Q6J("selected",i.selectedIndex)("colors",i.palettes)("label","Palette"),e.xp6(1),e.Q6J("initialLength",i.initialIndicators)("colors",i.selectedPalette)}}function K(n,r){if(1&n&&(e.TgZ(0,"span"),e._UZ(1,"a",20),e._uU(2),e.qZA()),2&n){const i=e.oxw();e.xp6(1),e.s9C("href",i.dataSelection.url,e.LSH),e.xp6(1),e.Oqu(i.dataSelection.urlName)}}function R(n,r){if(1&n){const i=e.EpF();e.TgZ(0,"mat-expansion-panel",17)(1,"mat-expansion-panel-header")(2,"mat-panel-title")(3,"mat-icon"),e._uU(4,"tune"),e.qZA()()(),e.TgZ(5,"mat-form-field",21)(6,"mat-label"),e._uU(7,"Max period to display"),e.qZA(),e.TgZ(8,"input",22),e.NdJ("ngModelChange",function(t){e.CHM(i);const o=e.oxw();return e.KtG(o.maxPeriod=t)}),e.qZA()(),e.TgZ(9,"mat-form-field",21)(10,"mat-label"),e._uU(11,"Height"),e.qZA(),e.TgZ(12,"input",23),e.NdJ("ngModelChange",function(t){e.CHM(i);const o=e.oxw();return e.KtG(o.freqsH=t)}),e.qZA()(),e.TgZ(13,"app-t3ema-list",24),e.NdJ("changed",function(t){e.CHM(i);const o=e.oxw();return e.KtG(o.freqsChanged(t))}),e.qZA()()}if(2&n){const i=e.oxw();e.xp6(8),e.Q6J("ngModel",i.maxPeriod),e.xp6(4),e.Q6J("ngModel",i.freqsH),e.xp6(1),e.Q6J("initialLength",i.initialFreqs)}}const _=function(n,r,i,a){return[n,r,i,a]},d=4096,E=n=>"length"in n,G=(n,r,i)=>{const a=[],t=(0,s.HMQ)(i);for(const o of n)a.push({time:o.time,value:r.update(t(o))});return a},Y=(n,r,i)=>{const a=(0,s.HMQ)(i),t=a(n[0]);for(;!r.isPrimed;)r.update(t);const o=[];for(const l of n)o.push({time:l.time,value:r.update(a(l))});return o},W=[{path:"",component:(()=>{var n;class r{constructor(){this.indicators=[],this.initialized=!1,this.selectedIndex=0,this.initialIndicators={length:[5,10,20],vFactor:.7,firstIsAverage:!1,barComponent:s.R2K.Median,showStyle:!0},this.initialFreqs={length:[5,10,20],vFactor:.7,firstIsAverage:!1,showStyle:!1},this.palettes=(0,s.$rL)(this.initialIndicators.length.length),this.selectedPalette=this.palettes[this.selectedIndex],this.emaNote=w.j,this.t3emaNote=w.dh,this.freqs=[],this.freqsMaxPeriod=40,this.freqsHeight=300,this.unlocked=!0,this.dataStepUp=(0,s.TYA)(10,32,90,96,1),this.dataStepDn=(0,s.TYA)(90,32,10,96,1),this.t3ema2=s.Z7F.calculate(d,new s.qdg({length:2,vFactor:.7,firstIsAverage:!1}),4),this.t3ema5=s.Z7F.calculate(d,new s.qdg({length:5,vFactor:.7,firstIsAverage:!1}),10),this.t3ema10=s.Z7F.calculate(d,new s.qdg({length:10,vFactor:.7,firstIsAverage:!1}),20),this.t3ema20=s.Z7F.calculate(d,new s.qdg({length:20,vFactor:.7,firstIsAverage:!1}),40)}get maxPeriod(){return this.freqsMaxPeriod}set maxPeriod(a){(!a||a<2)&&(a=2),this.freqsMaxPeriod=a,this.freqs.length>0&&(this.freqs=[...this.freqs])}get freqsH(){return this.freqsHeight}set freqsH(a){this.freqsHeight=a,this.freqs.length>0&&(this.freqs=[...this.freqs])}get unLocked(){return this.unlocked}set unLocked(a){this.unlocked=a,this.render()}ngAfterViewInit(){this.initialized=!0,this.unlocked=!1,this.render()}indicatorPaletteChanged(a){this.selectedIndex=this.palettes.indexOf(a),this.selectedPalette=a}indicatorsChanged(a){const t=a.length>2?a.length:2;t!==this.selectedPalette.length&&(this.palettes=(0,s.$rL)(t),this.selectedIndex>=t&&(this.selectedIndex=0),this.selectedPalette=this.palettes[this.selectedIndex]),this.indicators=a,this.render()}freqsChanged(a){const t=[];for(const o of a)if(E(o.params)){const l=o.params,c=s.Z7F.calculate(d,new s.qdg({length:l.length,vFactor:l.vFactor,firstIsAverage:l.firstIsAverage}),2*l.length);t.push(c)}else{const l=o.params,c=Math.ceil(2/l.smoothingFactor-1),Z=s.Z7F.calculate(d,new s.qdg({smoothingFactor:l.smoothingFactor,vFactor:l.vFactor}),2*c);t.push(Z)}this.freqs=t}dataSelectionChanged(a){this.dataSelection=a,this.render()}render(){this.initialized&&(this.configuration=this.prepareConfig(this.dataSelection.mnemonic,this.dataSelection.data,!1),this.configurationStepUp=this.prepareConfig("",this.dataStepUp,!0),this.configurationStepDn=this.prepareConfig("",this.dataStepDn,!0))}prepareConfig(a,t,o){const l={width:"100%",widthMin:360,navigationPane:{height:30,heightMin:30,heightMax:30,hasLine:!1,hasArea:!0,hasTimeAxis:!1,timeTicks:0},heightNavigationPane:30,timeAnnotationFormat:"%Y-%m-%d",axisLeft:!0,axisRight:!1,margin:{left:0,top:10,right:20,bottom:0},ohlcv:{name:"",data:[],candlesticks:!1},pricePane:{height:"30%",heightMin:300,heightMax:800,valueMarginPercentageFactor:.01,valueFormat:",.2f",bands:[],lineAreas:[],horizontals:[],arrows:[],lines:[]},indicatorPanes:[],crosshair:!1,volumeInPricePane:!1,menuVisible:!0,downloadSvgVisible:!0};l.menuVisible=this.unlocked,l.ohlcv.name=a,l.ohlcv.data=t;for(const c of this.indicators){const Z=c.params.barComponent?c.params.barComponent:s.R2K.Close,v=new s.qdg(c.params),g=new s.ha4;g.name=v.getMnemonic(),g.data=o?Y(t,v,Z):G(t,v,Z);const A=c.style;g.color=A.color,g.width=A.width,g.dash=A.dash,g.interpolation=A.interpolation,l.pricePane.lines.push(g)}return l}}return(n=r).\u0275fac=function(a){return new(a||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-ind-t3ema"]],decls:136,vars:99,consts:[[1,"slide-toggle",3,"color","ngModel","ngModelChange"],[1,"icon"],["label","",3,"selectionChange"],[1,"figwide"],[1,"ohlcv-chart-study",3,"configuration"],["expanded","false","style","margin-bottom: 1em;",4,"ngIf"],[4,"ngIf"],[2,"width","100%"],[3,"href"],[3,"subfig","width","height","ymode","xmode","maxPeriod","data","settingsPanelVisible"],[3,"subfig","width","height","ymode","xmode","maxPeriod","minDeg","maxDeg","data","settingsPanelVisible"],[3,"subfig","width","height","ymode","xmode","data","settingsPanelVisible"],[3,"subfig","width","height","ymode","xmode","minDeg","maxDeg","data","settingsPanelVisible"],[1,"counter-skip"],["href","https://books.google.com/books?id=JokQD5nK4LMC","target","_blank"],["href","https://books.google.com/books?id=q9Q6EAAAQBAJ","target","_blank"],["href","https://books.google.com/books?id=EaMuAAAAQBAJ","target","_blank"],["expanded","false",2,"margin-bottom","1em"],[2,"vertical-align","bottom",3,"selected","colors","label","selectionChange"],[3,"initialLength","colors","changed"],["target","_blank",3,"href"],["appearance","fill"],["matInput","","type","number","min","8","max","1024","step","1",3,"ngModel","ngModelChange"],["matInput","","type","number","min","100","max","1024","step","1",3,"ngModel","ngModelChange"],[3,"initialLength","changed"]],template:function(a,t){1&a&&(e.TgZ(0,"h1"),e._uU(1),e.qZA(),e.TgZ(2,"mat-slide-toggle",0),e.NdJ("ngModelChange",function(l){return t.unLocked=l}),e.TgZ(3,"mat-icon",1),e._uU(4,"tune"),e.qZA()(),e.TgZ(5,"app-bar-series-select",2),e.NdJ("selectionChange",function(l){return t.dataSelectionChanged(l)}),e.qZA(),e.TgZ(6,"figure",3),e._UZ(7,"mb-ohlcv-chart",4),e.YNc(8,V,7,5,"mat-expansion-panel",5),e.TgZ(9,"figcaption"),e._uU(10),e.YNc(11,K,3,2,"span",6),e.qZA()(),e.TgZ(12,"div",7),e._uU(13," An exponential moving average (WMA) of length "),e.TgZ(14,"mb-ki"),e._uU(15,"l \\ge 2"),e.qZA(),e._uU(16," is the arithmetic mean of the last "),e.TgZ(17,"mb-ki"),e._uU(18,"l"),e.qZA(),e._uU(19," observations of a series "),e.TgZ(20,"mb-ki"),e._uU(21),e.qZA(),e._uU(22,", where "),e.TgZ(23,"mb-ki"),e._uU(24),e.qZA(),e._uU(25," is the most recent value and "),e.TgZ(26,"mb-ki"),e._uU(27,"k \\ge l"),e.qZA(),e._uU(28,": "),e.TgZ(29,"mb-kd"),e._uU(30),e.qZA(),e._uU(31," Close to the "),e.TgZ(32,"a",8),e._uU(33,"Simple Moving Average"),e.qZA(),e._uU(34,", but multiplier coefficients are not constant across the window width but are linearly weighted. "),e.TgZ(35,"mb-kd"),e._uU(36),e.qZA(),e._uU(37," The sum of the data and coefficient products are divided by the sum of coefficients to normalize the averaging process. The major advantage of WMA is the reduced lag which results from the most recent data being the most heavily weighted. WMA coefficients form triangle across the width of the filter, resulting a center of gravity being "),e.TgZ(38,"mb-ki"),e._uU(39),e.qZA(),e._uU(40," across the window. "),e._UZ(41,"p"),e._uU(42," From the digital signal processing (DSP) point of view, T3EMA is a finite impulse response (FIR) filter with all "),e.TgZ(43,"mb-ki"),e._uU(44),e.qZA(),e._uU(45," weight coefficients equal: "),e.TgZ(46,"mb-kd"),e._uU(47),e.qZA(),e._uU(48," The filter is finite because only a finite number of "),e.TgZ(49,"mb-ki"),e._uU(50),e.qZA(),e._uU(51," last samples contribute to its value. "),e._UZ(52,"p"),e.qZA(),e.TgZ(53,"h2"),e._uU(54,"Step response"),e.qZA(),e._uU(55,"\nTwo figures below demonstrate the response to the step-up and step-down data.\nThe transition is clearly not linear.\nThe step-up response doesn't overshoot and the step-down response doesn't undershoot the data. "),e.TgZ(56,"figure",3),e._UZ(57,"mb-ohlcv-chart",4),e.TgZ(58,"figcaption"),e._uU(59,"Step-up response."),e.qZA()(),e.TgZ(60,"figure",3),e._UZ(61,"mb-ohlcv-chart",4),e.TgZ(62,"figcaption"),e._uU(63,"Step-down response."),e.qZA()(),e.TgZ(64,"h2"),e._uU(65,"Frequency response"),e.qZA(),e.TgZ(66,"div",7),e._uU(67," The figure below shows an amplitude and a phase lag of the unit sample response of a T3EMA as a function of a period of various signal frequencies. "),e._UZ(68,"p"),e._uU(69," A period is a duration of a cycle in samples. The smallest possible period of a cycle is "),e.TgZ(70,"mb-ki"),e._uU(71),e.qZA(),e._uU(72," samples. To understand this, imagine a cycle of a sinusoid which starts at zero, goes up and peaks at "),e.TgZ(73,"mb-ki"),e._uU(74),e.qZA(),e._uU(75,", continues down and bottoms at "),e.TgZ(76,"mb-ki"),e._uU(77),e.qZA(),e._uU(78,", and then returns back to zero. We need at least two samples (peak and through) to represent a cycle. "),e._UZ(79,"p"),e.qZA(),e.TgZ(80,"figure",3),e._UZ(81,"mb-frequency-response-chart",9)(82,"mb-frequency-response-chart",10),e.YNc(83,R,14,3,"mat-expansion-panel",5),e.TgZ(84,"figcaption"),e._uU(85,"An amplitude (a) and a phase lag (b) as a function of a period of a cycle."),e.qZA()(),e.TgZ(86,"div",7),e._uU(87," A period ("),e.TgZ(88,"mb-ki"),e._uU(89),e.qZA(),e._uU(90,") is an inverse of the cycle's frequency ("),e.TgZ(91,"mb-ki"),e._uU(92),e.qZA(),e._uU(93,"): "),e.TgZ(94,"mb-ki"),e._uU(95),e.qZA(),e._uU(96,". The smallest period "),e.TgZ(97,"mb-ki"),e._uU(98),e.qZA(),e._uU(99," corresponds to the Nyquist frequency "),e.TgZ(100,"mb-ki"),e._uU(101),e.qZA(),e._uU(102," which is the highest frequency possible in a signal. "),e.qZA(),e.TgZ(103,"figure",3),e._UZ(104,"mb-frequency-response-chart",9)(105,"mb-frequency-response-chart",11),e.TgZ(106,"figcaption"),e._uU(107,"An amplitude as a function of a period of a cycle (a) and as a function of a normalized frequency of a cycle (b) for various T3EMA lengths."),e.qZA()(),e.TgZ(108,"figure",3),e._UZ(109,"mb-frequency-response-chart",10)(110,"mb-frequency-response-chart",12),e.TgZ(111,"figcaption"),e._uU(112,"A phase as a function of a period of a wave (a) and as a function of a normalized frequency of a wave for various T3EMA lengths."),e.qZA()(),e._UZ(113,"p")(114,"div",7)(115,"hr"),e.TgZ(116,"h2",13),e._uU(117,"References"),e.qZA(),e.TgZ(118,"div"),e._uU(119," Jeffrey, A., & Dai, H. H. (2008). "),e.TgZ(120,"em"),e._uU(121,"Handbook of mathematical formulas and integrals"),e.qZA(),e._uU(122,". (4th ed., p. 592). San Diego, CA: Elsevier/Academic Press. "),e._UZ(123,"a",14),e.qZA(),e.TgZ(124,"div"),e._uU(125,"Mak, D. K. (2021). "),e.TgZ(126,"em"),e._uU(127,"Trading Tactics in the Financial Market: Mathematical Methods to Improve Performance"),e.qZA(),e._uU(128," (p. ix+269). doi:10.1007/978-3-030-70622-7 "),e._UZ(129,"a",15),e.qZA(),e.TgZ(130,"div"),e._uU(131,"Oppenheim, A. V., Schafer, R. W., Yoder, M. A., & Padgett, W. T. (2009). "),e.TgZ(132,"em"),e._uU(133,"Discrete-time signal processing"),e.qZA(),e._uU(134,". (3rd ed., p. 1120). Upper Saddle River, NJ: Pearson. "),e._UZ(135,"a",16),e.qZA()),2&a&&(e.xp6(1),e.Oqu(t.t3emaNote.title),e.xp6(1),e.Q6J("color","primary")("ngModel",t.unLocked),e.xp6(5),e.Q6J("configuration",t.configuration),e.xp6(1),e.Q6J("ngIf",t.unlocked),e.xp6(2),e.hij("",t.dataSelection.description,". "),e.xp6(1),e.Q6J("ngIf",t.dataSelection.url),e.xp6(10),e.Oqu("x_{1},\\, x_{2},\\, x_{3},\\,\\ldots\\,,\\, x_{k}"),e.xp6(3),e.Oqu("x_{k}"),e.xp6(6),e.Oqu("\\tag*{(1)}y_{k}=\\frac{1}{l}\\sum_{m=k-l+1}^{k}x_{m}"),e.xp6(2),e.MGl("href","/",t.emaNote.route,"",e.LSH),e.xp6(4),e.Oqu("\\tag*{}WMA_N = \\frac{\\sum\\limits_{i=0}^{N-1}{(N-i)P_i}}{\\sum\\limits_{i=0}^{N-1}{(N-i)}}"),e.xp6(3),e.Oqu("\\frac{1}{3}"),e.xp6(5),e.Oqu("l"),e.xp6(3),e.hij(" ","\\tag*{(3)}y_{k}=\\sum_{m=0}^{l-1}c_{m}x_{k-m},\\ k\\ge l,\\ \\forall m\\ c_{m}=\\frac{1}{l}"," "),e.xp6(3),e.Oqu("l"),e.xp6(7),e.Q6J("configuration",t.configurationStepUp),e.xp6(4),e.Q6J("configuration",t.configurationStepDn),e.xp6(10),e.Oqu("2"),e.xp6(3),e.Oqu("1"),e.xp6(3),e.Oqu("-1"),e.xp6(4),e.Q6J("subfig","(a)")("width","100%")("height",t.freqsH)("ymode","amplitudePct")("xmode","period")("maxPeriod",t.maxPeriod)("data",t.freqs)("settingsPanelVisible",t.unlocked),e.xp6(1),e.Q6J("subfig","(b)")("width","100%")("height",t.freqsH)("ymode","phaseDeg")("xmode","period")("maxPeriod",t.maxPeriod)("minDeg",-180)("maxDeg",180)("data",t.freqs)("settingsPanelVisible",t.unlocked),e.xp6(1),e.Q6J("ngIf",t.unlocked),e.xp6(6),e.Oqu("\\tau"),e.xp6(3),e.Oqu("\\nu"),e.xp6(3),e.Oqu("\\tau = \\frac{1}{\\nu}"),e.xp6(3),e.Oqu("\\tau = 2"),e.xp6(3),e.Oqu("\\nu = \\frac{1}{\\tau} = \\frac{1}{2}"),e.xp6(3),e.Q6J("subfig","(a)")("width","100%")("height",200)("ymode","amplitudePct")("xmode","period")("maxPeriod",15)("data",e.l5B(79,_,t.t3ema2,t.t3ema5,t.t3ema10,t.t3ema20))("settingsPanelVisible",t.unlocked),e.xp6(1),e.Q6J("subfig","(b)")("width","100%")("height",200)("ymode","amplitudePct")("xmode","frequency")("data",e.l5B(84,_,t.t3ema2,t.t3ema5,t.t3ema10,t.t3ema20))("settingsPanelVisible",t.unlocked),e.xp6(4),e.Q6J("subfig","(a)")("width","100%")("height",200)("ymode","phaseDeg")("xmode","period")("maxPeriod",15)("minDeg",-100)("maxDeg",100)("data",e.l5B(89,_,t.t3ema2,t.t3ema5,t.t3ema10,t.t3ema20))("settingsPanelVisible",t.unlocked),e.xp6(1),e.Q6J("subfig","(b)")("width","100%")("height",200)("ymode","phaseDeg")("xmode","frequency")("minDeg",-100)("maxDeg",100)("data",e.l5B(94,_,t.t3ema2,t.t3ema5,t.t3ema10,t.t3ema20))("settingsPanelVisible",t.unlocked))},dependencies:[p.O5,h.Fj,h.wV,h.JJ,h.qQ,h.Fd,h.On,y.KE,y.hX,x.Nt,u.Hw,f.ib,f.yz,f.yK,C.Rr,s.GJY,s.JJg,s.kDz,s.T1Q,L.h,s.y29,z],styles:[".ohlcv-chart-study[_ngcontent-%COMP%]{margin:0;padding:0}.button[_ngcontent-%COMP%]{margin-right:8px}.slide-toggle[_ngcontent-%COMP%]{float:right;margin:0 8px 0 0}.icon[_ngcontent-%COMP%]{vertical-align:bottom}"],changeDetection:0}),r})()},{path:"**",redirectTo:""}];let X=(()=>{var n;class r{}return(n=r).\u0275fac=function(a){return new(a||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[U.Bz.forChild(W),U.Bz]}),r})(),$=(()=>{var n;class r{}return(n=r).\u0275fac=function(a){return new(a||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,h.u5,y.lN,x.c,b.ot,u.Ps,f.To,C.rP,J.N6,s.Fd9,s.hXN,s.ylR,s.U8i,s._km,s.rHK,s.jkk,I.S,s.feT,X]}),r})()}}]);