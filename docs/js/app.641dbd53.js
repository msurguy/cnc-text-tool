(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);h&&h(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],a=!0,o=1;o<i.length;o++){var l=i[o];0!==n[l]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},n={app:0},s=[];function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/cnc-text-tool/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var h=l;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var a=i("64a9"),n=i.n(a);n.a},"1d0d":function(t,e,i){},2977:function(t,e,i){var a=i("038a");a.register({download:{width:16,height:16,viewBox:"0 0 24 24",data:'<path pid="0" d="M11 2a1 1 0 00-1 1v8H6l6 6 6-6h-4V3a1 1 0 00-1-1h-2zM2 20v2h20v-2H2z"/>'}})},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d"),i("1d0d");var a=i("2b0e"),n=i("bc3a"),s=i.n(n),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"page"},[i("div",{staticClass:"sidebar"},[i("div",{staticClass:"controls-wrapper"},[i("div",{staticClass:"controls"},[i("p",{staticClass:"mt-3 lead text-center text-white"},[t._v(" Source ")]),i("div",{staticClass:"sidebar-control"},[t._m(0),i("div",{staticClass:"custom-file"},[i("input",{staticClass:"custom-file-input",attrs:{type:"file",accept:"image/svg+xml",id:"sourcefile"},on:{change:t.onSourceFileChange}}),i("label",{staticClass:"custom-file-label",attrs:{for:"sourcefile"}},[t._v("Choose file")])])]),t.source.loading?i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-bar",staticStyle:{width:"100%"},attrs:{role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}},[t._v("Loading SVG\n            ")])]):t._e(),i("transition",{attrs:{name:"slide"}},[t.source.svg?i("div",[i("text-area-input",{attrs:{label:"Input Text",value:t.text},on:{reset:t.resetTextInput,input:t.updateText}}),i("double-text-input",{attrs:{label:"Position","first-label":"x:","second-label":"y:","first-value":t.overlay.x,"second-value":t.overlay.y},on:{firstInput:t.moveOverlayX,secondInput:t.moveOverlayY}}),i("select-field",{attrs:{label:"Font",options:t.fontOptions},model:{value:t.font.selected,callback:function(e){t.$set(t.font,"selected",e)},expression:"font.selected"}}),i("select-field",{attrs:{label:"Alignment",options:t.fontAlignmentOptions},model:{value:t.font.alignment,callback:function(e){t.$set(t.font,"alignment",e)},expression:"font.alignment"}}),i("slider",{attrs:{min:10,max:150,step:1,label:"Font Size"},model:{value:t.font.sizeInPixels,callback:function(e){t.$set(t.font,"sizeInPixels",t._n(e))},expression:"font.sizeInPixels"}}),i("slider",{attrs:{min:0,max:10,step:.1,label:"Character Spacing"},model:{value:t.font.characterSpacing,callback:function(e){t.$set(t.font,"characterSpacing",t._n(e))},expression:"font.characterSpacing"}}),i("slider",{attrs:{min:.5,max:3,step:.1,label:"Line Height"},model:{value:t.font.lineHeight,callback:function(e){t.$set(t.font,"lineHeight",t._n(e))},expression:"font.lineHeight"}}),i("slider",{attrs:{min:-360,max:360,step:1,label:"Rotation"},model:{value:t.overlay.rotation,callback:function(e){t.$set(t.overlay,"rotation",t._n(e))},expression:"overlay.rotation"}}),i("toggle",{attrs:{label:"Black / White"},model:{value:t.font.color,callback:function(e){t.$set(t.font,"color",e)},expression:"font.color"}})],1):t._e()])],1)]),i("div",{staticClass:"button"},[i("div",{staticClass:"reveal"}),i("button",{staticClass:"btn btn-primary btn-block",on:{click:function(e){return e.preventDefault(),t.download(e)}}},[t._v("\n          Download SVG\n        ")])])]),i("div",{staticClass:"paper"},[i("div",{staticClass:"sketch",attrs:{id:"sketch"}},[i("div",{ref:"svgWrapper",attrs:{id:"svg-wrapper"}})])]),t._m(1)])])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"control-header"},[i("div"),i("div",{staticClass:"control-label"},[t._v("\n                Upload File\n              ")]),i("div")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer-wrapper"},[i("div",{staticClass:"footer"},[i("h3",[t._v("CNC Text Editor")]),i("p",[t._v("Project by "),i("a",{attrs:{target:"_blank",href:"http://twitter.com/msurguy"}},[t._v("@msurguy")]),t._v(" ("),i("a",{attrs:{target:"_blank",href:"http://github.com/msurguy/cnc-text-tool"}},[t._v("Source")]),t._v(")\n        ")])])])}],l=(i("6b54"),i("4917"),i("28a5"),i("7f7f"),i("96cf"),i("3b8d")),c=(i("456d"),i("6c7b"),i("ac6a"),i("e5bb")),h=i.n(c),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sidebar-control"},[i("div",{staticClass:"control-header"},[i("div",{staticClass:"custom-control custom-switch"},[i("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:t.guid},domProps:{value:t.value,checked:!!t.value},on:{change:t.onInput}}),i("label",{staticClass:"custom-control-label",attrs:{for:t.guid}},[t._v(t._s(t.label))])])])])},d=[],f=(i("985d"),function(){var t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return t()+t()}),v={name:"Toggle",props:{leftIcon:{type:Object},rightIcon:{type:Object},label:{type:String,default:""},value:{type:Boolean,default:!1}},data:function(){return{guid:f()}},methods:{onInput:function(t){this.$emit("input",t.target.checked)}}},g=v,p=i("2877"),m=Object(p["a"])(g,u,d,!1,null,null,null),b=m.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sidebar-control"},[i("div",{staticClass:"control-header"},[i("div",[t.leftIcon?i("svgicon",{attrs:{name:t.leftIcon.icon,width:t.leftIcon.width,height:t.leftIcon.height,color:"#FFFFFF",fill:!1}}):t._e()],1),i("div",{staticClass:"control-label"},[t._v("\n      "+t._s(t.label)+"\n    ")]),i("div",[t.rightIcon?i("svgicon",{attrs:{name:t.rightIcon.icon,width:t.rightIcon.width,height:t.rightIcon.height,color:"#FFFFFF",fill:!1}}):t._e()],1)]),i("div",{staticClass:"control-header"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedOption,expression:"selectedOption"}],staticClass:"custom-select custom-select-sm custom-select-input",on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedOption=e.target.multiple?i:i[0]},t.onInput]}},t._l(t.options,(function(e,a){return i("option",{key:a,domProps:{value:e.value}},[t._v("\n        "+t._s(e.text)+"\n      ")])})),0)])])},x=[],w={name:"SelectField",props:{leftIcon:{type:Object},rightIcon:{type:Object},label:{type:String,default:"Label"},value:{type:String,default:""},options:{type:Array,default:function(){return[]}}},data:function(){return{selectedOption:""}},watch:{value:function(t){this.selectedOption=t}},mounted:function(){this.selectedOption=this.value},methods:{onInput:function(t){this.$emit("input",t.target.value),this.selectedOption=t.target.value}}},S=w,M=Object(p["a"])(S,y,x,!1,null,null,null),E=M.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sidebar-control"},[i("div",{staticClass:"control-header"},[i("div",[t.leftIcon?i("svgicon",{attrs:{name:t.leftIcon.icon,width:t.leftIcon.width,height:t.leftIcon.height,color:"#FFFFFF",fill:!1}}):t._e()],1),i("div",{staticClass:"control-label"},[i("div",{staticClass:"control-output"},[i("input",{attrs:{disabled:t.disabled,type:"text"},domProps:{value:t.value},on:{change:t.onInput}})]),t._v(t._s(t.label)+"\n    ")]),i("div",[t.rightIcon?i("svgicon",{attrs:{name:t.rightIcon.icon,width:t.rightIcon.width,height:t.rightIcon.height,color:"#FFFFFF",fill:!1}}):t._e()],1)]),i("input",{staticClass:"custom-range",attrs:{disabled:t.disabled,type:"range",min:t.min,max:t.max,step:t.step},domProps:{value:t.value},on:{input:t.onInput}})])},I=[],C=(i("c5f6"),{name:"Slider",props:{disabled:{type:Boolean,default:!1},leftIcon:{type:Object},rightIcon:{type:Object},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},label:{type:String,default:"Label"},value:{type:Number,default:50}},methods:{onInput:function(t){t.target.value>this.min?this.$emit("input",t.target.value):this.$emit("input",this.min),t.target.value<this.min&&this.$emit("input",this.min)}}}),_=C,O=Object(p["a"])(_,z,I,!1,null,null,null),F=O.exports,H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sidebar-control"},[i("div",{staticClass:"control-header"},[i("div",[t.leftIcon?i("svgicon",{attrs:{name:t.leftIcon.icon,width:t.leftIcon.width,height:t.leftIcon.height,color:"#FFFFFF",fill:!1}}):t._e()],1),i("div",{staticClass:"control-label"},[t._v("\n      "+t._s(t.label)+"\n    ")]),i("div",[t.rightIcon?i("svgicon",{attrs:{name:t.rightIcon.icon,width:t.rightIcon.width,height:t.rightIcon.height,color:"#FFFFFF",fill:!1}}):t._e()],1)]),i("div",{staticClass:"control-header"},[i("textarea",{staticClass:"control-textarea-input",attrs:{rows:"4"},domProps:{value:t.value},on:{change:t.onInput}}),t.showReset?i("a",{staticClass:"btn",on:{click:function(e){return t.$emit("reset")}}},[t._v("reset")]):t._e()])])},k=[],j={name:"TextAreaInput",props:{leftIcon:{type:Object},rightIcon:{type:Object},label:{type:String,default:"Label"},value:{type:String,default:""},showReset:{type:Boolean,default:!1}},methods:{onInput:function(t){this.$emit("input",t.target.value)}}},L=j,P=Object(p["a"])(L,H,k,!1,null,null,null),T=P.exports,G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sidebar-control"},[i("div",{staticClass:"control-header"},[i("div"),i("div",{staticClass:"control-label"},[t._v("\n      "+t._s(t.label)+"\n    ")]),i("div")]),i("div",{staticClass:"form-row align-items-center"},[i("div",{staticClass:"col-sm-1 text-right"},[t.firstLabel?i("span",[t._v(t._s(t.firstLabel))]):t._e()]),i("div",{staticClass:"col-sm-5"},[i("input",{staticClass:"control-text-input",attrs:{type:"text"},domProps:{value:t._f("round")(t.firstValue)},on:{change:t.onFirstInput}})]),i("div",{staticClass:"col-sm-1 text-right"},[t.secondLabel?i("span",[t._v(t._s(t.secondLabel))]):t._e()]),i("div",{staticClass:"col-sm-5"},[i("input",{staticClass:"control-text-input",attrs:{type:"text"},domProps:{value:t._f("round")(t.secondValue)},on:{change:t.onSecondInput}})])])])},$=[],A={name:"DoubleTextInput",props:{label:{type:String,default:"Label"},firstLabel:{type:String,default:""},secondLabel:{type:String,default:""},firstValue:{type:Number,default:0},secondValue:{type:Number,default:0}},methods:{onFirstInput:function(t){this.$emit("firstInput",t.target.value)},onSecondInput:function(t){this.$emit("secondInput",t.target.value)}},filters:{round:function(t){return t.toFixed(2)}}},B=A,R=Object(p["a"])(B,G,$,!1,null,null,null),V=R.exports,D=i("377e"),N=i("d225"),U=i("b0b4"),W=function(t){return t.changedTouches&&(t=t.changedTouches[0]),{x:t.clientX,y:t.clientY}},X=function(){function t(e){Object(N["a"])(this,t),e.remember("_draggable",this),this.el=e,this.drag=this.drag.bind(this),this.startDrag=this.startDrag.bind(this),this.endDrag=this.endDrag.bind(this)}return Object(U["a"])(t,[{key:"init",value:function(t){t?(this.el.on("mousedown.drag",this.startDrag),this.el.on("touchstart.drag",this.startDrag)):(this.el.off("mousedown.drag"),this.el.off("touchstart.drag"))}},{key:"startDrag",value:function(t){var e=!t.type.indexOf("mouse");if((!e||1===(t.which||t.buttons))&&!this.el.dispatch("beforedrag",{event:t,handler:this}).defaultPrevented){t.preventDefault(),t.stopPropagation(),this.init(!1),this.box=this.el.bbox(),this.lastClick=this.el.point(W(t));var i=(e?"mousemove":"touchmove")+".drag",a=(e?"mouseup":"touchcancel.drag touchend")+".drag";Object(D["h"])(window,i,this.drag),Object(D["h"])(window,a,this.endDrag),this.el.fire("dragstart",{event:t,handler:this,box:this.box})}}},{key:"drag",value:function(t){var e=this.box,i=this.lastClick,a=this.el.point(W(t)),n=e.x+(a.x-i.x),s=e.y+(a.y-i.y),r=new D["a"](n,s,e.w,e.h);if(!this.el.dispatch("dragmove",{event:t,handler:this,box:r}).defaultPrevented)return this.move(n,s),r}},{key:"move",value:function(t,e){"svg"===this.el.type?D["c"].prototype.move.call(this.el,t,e):this.el.move(t,e)}},{key:"endDrag",value:function(t){var e=this.drag(t);this.el.fire("dragend",{event:t,handler:this,box:e}),Object(D["g"])(window,"mousemove.drag"),Object(D["g"])(window,"touchmove.drag"),Object(D["g"])(window,"mouseup.drag"),Object(D["g"])(window,"touchend.drag"),this.init(!0)}}]),t}();Object(D["f"])(D["b"],{draggable:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this.remember("_draggable")||new X(this);return e.init(t),this}});var Y=i("84fa"),J=i.n(Y);i("a481");function Q(t,e,i){var a='<?xml version="1.0" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">',n=(new XMLSerializer).serializeToString(t);n=n.replace("</svg>","\n".concat(e,"\n</svg>"));var s=new Blob([a+n],{type:"image/svg+xml;charset=utf-8"}),r=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(s):window.webkitURL.createObjectURL(s),o=document.createElement("a");o.href=r,o.target="_blank",o.download="".concat(i,".svg"),"undefined"===typeof o.download&&o.setAttribute("target","_blank"),document.body.appendChild(o),o.click(),setTimeout((function(){document.body.removeChild(o),window.URL.revokeObjectURL(r)}),200)}function Z(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:24,i=[],a=t.getElementsByTagName("font")[0],n=t.getElementsByTagName("font-face")[0],s=t.getElementsByTagName("glyph"),r=a.getAttribute("horiz-adv-x"),o=n.getAttribute("ascent"),l=n.getAttribute("units-per-em")||1e3,c=e,h=c/l,u=0;u<s.length;u++){var d=s[u],f=d.getAttribute("d"),v=d.getAttribute("unicode"),g=d.getAttribute("glyph-name")||"glyph"+v,p=d.getAttribute("horiz-adv-x")||r;i["".concat(v)]={d:f?new J.a(f).translate(0,-o).scale(h,-h).abs().rel().toString():null,unicode:v,name:g,width:parseFloat(p*h),height:c}}return i}var q=i("f7fe"),K=i.n(q),tt="https://glcdn.githack.com/oskay/svg-fonts/raw/master/fonts/",et={name:"HelloWorld",components:{Toggle:b,SelectField:E,Slider:F,TextAreaInput:T,DoubleTextInput:V},props:{msg:String},data:function(){return{source:{filename:"",svg:"",string:"",loading:!1,width:0,height:0,viewbox:"0 0 0 0"},overlay:{width:0,height:0,viewbox:"0 0 0 0",svg:null,textGroup:null,flattened:null,x:0,y:0,rotation:0},paths:[],text:"Upload your own SVGs to create\ntext overlay in existing files,\nOr use this default SVG as your canvas. \nChange font size, font style and more",fonts:{EMSAllure:{filename:"EMS/EMSAllure",data:null,string:"",size:24},EMSBird:{filename:"EMS/EMSBird",data:null,string:"",size:24},EMSBirdSwashCaps:{filename:"EMS/EMSBirdSwashCaps",data:null,string:"",size:24},EMSBrush:{filename:"EMS/EMSBrush",data:null,string:"",size:24},EMSCapitol:{filename:"EMS/EMSCapitol",data:null,string:"",size:24},EMSCasualHand:{filename:"EMS/EMSCasualHand",data:null,string:"",size:24},EMSDecorousScript:{filename:"EMS/EMSDecorousScript",data:null,string:"",size:24},EMSDelight:{filename:"EMS/EMSDelight",data:null,string:"",size:24},EMSDelightSwashCaps:{filename:"EMS/EMSDelightSwashCaps",data:null,string:"",size:24},EMSElfin:{filename:"EMS/EMSElfin",data:null,string:"",size:24},EMSFelix:{filename:"EMS/EMSFelix",data:null,string:"",size:24},EMSHerculean:{filename:"EMS/EMSHerculean",data:null,string:"",size:24},EMSInvite:{filename:"EMS/EMSInvite",data:null,string:"",size:24},EMSLeague:{filename:"EMS/EMSLeague",data:null,string:"",size:24},EMSLittlePrincess:{filename:"EMS/EMSLittlePrincess",data:null,string:"",size:24},EMSMistyNight:{filename:"EMS/EMSMistyNight",data:null,string:"",size:24},EMSNeato:{filename:"EMS/EMSNeato",data:null,string:"",size:24},EMSNixish:{filename:"EMS/EMSNixish",data:null,string:"",size:24},EMSNixishItalic:{filename:"EMS/EMSNixishItalic",data:null,string:"",size:24},EMSOsmotron:{filename:"EMS/EMSOsmotron",data:null,string:"",size:24},EMSPancakes:{filename:"EMS/EMSPancakes",data:null,string:"",size:24},EMSPepita:{filename:"EMS/EMSPepita",data:null,string:"",size:24},EMSQwandry:{filename:"EMS/EMSQwandry",data:null,string:"",size:24},EMSReadability:{filename:"EMS/EMSReadability",data:null,string:"",size:24},EMSReadabilityItalic:{filename:"EMS/EMSReadabilityItalic",data:null,string:"",size:24},EMSSociety:{filename:"EMS/EMSSociety",data:null,string:"",size:24},EMSSpaceRocks:{filename:"EMS/EMSSpaceRocks",data:null,string:"",size:24},EMSSwiss:{filename:"EMS/EMSSwiss",data:null,string:"",size:24},EMSTech:{filename:"EMS/EMSTech",data:null,string:"",size:24},HersheyGothEnglish:{filename:"Hershey/HersheyGothEnglish",data:null,string:"",size:24},HersheyGothGerman:{filename:"Hershey/HersheyGothGerman",data:null,string:"",size:24},HersheyGothItalian:{filename:"Hershey/HersheyGothItalian",data:null,string:"",size:24},HersheySans1:{filename:"Hershey/HersheySans1",data:null,string:"",size:24},HersheySansMed:{filename:"Hershey/HersheySansMed",data:null,string:"",size:24},HersheyScript1:{filename:"Hershey/HersheyScript1",data:null,string:"",size:24},HersheyScriptMed:{filename:"Hershey/HersheyScriptMed",data:null,string:"",size:24},HersheySerifBold:{filename:"Hershey/HersheySerifBold",data:null,string:"",size:24},HersheySerifBoldItalic:{filename:"Hershey/HersheySerifBoldItalic",data:null,string:"",size:24},HersheySerifMed:{filename:"Hershey/HersheySerifMed",data:null,string:"",size:24},HersheySerifMedItalic:{filename:"Hershey/HersheySerifMedItalic",data:null,string:"",size:24}},fontOptions:[],fontAlignmentOptions:[{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}],font:{alignment:"left",selected:"EMSReadabilityItalic",sizeInPixels:24,size:24,lineHeight:1,color:!1,loading:!1,strokeWidth:1,widthUnit:"px",characterSpacing:0}}},watch:{"font.selected":function(){this.loadFont()},"font.loading":function(t,e){!0===e&&!1===t&&this.createTextPaths()},"font.sizeInPixels":function(t){this.font.size=t,this.loadFont()},"font.color":function(){this.createTextPaths()},"font.lineHeight":function(){this.createTextPaths()},"font.characterSpacing":function(){this.createTextPaths()},"font.alignment":function(){this.createTextPaths()},"overlay.rotation":function(t){this.overlay.textGroup.transform({rotate:t},!1)},paths:function(t){var e=this;this.overlay.textGroup.clear(),t.forEach((function(t){e.overlay.textGroup.path(t.d).fill("none").stroke({width:e.font.strokeWidth,color:e.font.color?"#FFFFFF":"#000000",linecap:"join"})}));var i=this.overlay.textGroup.bbox(),a=i.x,n=i.y,s=i.width,r=i.height;this.overlay.textGroup.rect(s,r).fill("rgba(0,0,0,0)").move(a,n),this.overlay.textGroup.move(this.overlay.x,this.overlay.y)}},mounted:function(){var t=this;h.a.init(),this.overlay.svg=Object(D["e"])().addTo("#svg-wrapper").addClass("canvas"),this.overlay.svg.size(0,0),this.overlay.textGroup=this.overlay.svg.group(),this.overlay.textGroup.draggable().on("dragmove",(function(e){t.overlay.x=e.detail.box.x,t.overlay.y=e.detail.box.y})),this.fontOptions=Object.keys(this.fonts).map((function(t){return{text:t,value:t}})),this.$nextTick((function(){t.processInputSVG('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 792"><title>CNC Fill Text</title></svg>')})),this.$ga.page("/")},methods:{moveOverlayX:function(t){this.overlay.x=parseFloat(t),this.overlay.textGroup.move(t,this.overlay.y)},moveOverlayY:function(t){this.overlay.y=parseFloat(t),this.overlay.textGroup.move(this.overlay.x,t)},updateText:K()((function(t){this.text=t,this.createTextPaths()}),300),resetTextInput:function(){this.text=""},onSourceFileChange:function(t){this.source.loading=!0;var e=t.target.files||t.dataTransfer.files;e.length&&this.readSourceImage(e[0])},readSourceImage:function(t){var e=this,i=new FileReader;i.onload=function(){var i=Object(l["a"])(regeneratorRuntime.mark((function i(a){var n,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:e.source.filename=t.name.substr(0,t.name.lastIndexOf(".")),n=a.target.result,s=n.indexOf("<svg "),-1===s&&(s=n.indexOf("<SVG ")),n=n.substring(s),e.processInputSVG(n);case 6:case"end":return i.stop()}}),i)})));return function(t){return i.apply(this,arguments)}}(),i.readAsText(t)},processInputSVG:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){var i,a,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.source.string=e,i=(new DOMParser).parseFromString(e,"image/svg+xml").documentElement,console.log(i),i.classList.remove("canvas"),this.$refs.svgWrapper.childNodes[1]&&this.$refs.svgWrapper.removeChild(this.$refs.svgWrapper.childNodes[1]),this.$refs.svgWrapper.appendChild(i),this.source.viewbox=!!i.hasAttribute("viewBox")&&i.getAttribute("viewBox"),this.source.width=i.hasAttribute("width")?i.getAttribute("width"):0,this.source.height=i.hasAttribute("height")?i.getAttribute("height"):0,this.source.viewbox&&(console.log(this.source.viewbox),a=this.source.viewbox.indexOf(",")>-1?",":" ",n=this.source.viewbox.split(a).map((function(t){return parseFloat(t)})),this.overlay.svg.viewbox(n[0],n[1],n[2],n[3]),this.overlay.x=n[0],this.overlay.y=n[1],this.overlay.textGroup.move(n[0],n[1]),this.source.width||(this.source.width=n[2],i.setAttribute("width",n[2])),this.source.height||(this.source.height=n[3],i.setAttribute("height",n[3]))),s="number"!=typeof this.source.width&&this.source.width.match(/[a-zA-Z]+/g),this.font.widthUnit="px",s&&(this.font.widthUnit=s[0]),this.font.strokeWidth=1,this.font.size=this.font.sizeInPixels,this.overlay.width=this.source.width,this.overlay.height=this.source.height,this.overlay.viewbox=this.source.viewbox?this.source.viewbox:"0 0 ".concat(this.overlay.width," ").concat(this.overlay.height),this.source.viewbox||this.overlay.svg.viewbox(0,0,this.overlay.width,this.overlay.height),this.overlay.svg.size(this.overlay.width,this.overlay.height),this.source.svg=i,this.source.loading=!1,this.loadFont();case 23:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),loadFont:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.fonts[this.font.selected],this.font.loading=!0,!e.data||this.font.size!==e.size){t.next=5;break}return this.$nextTick((function(){i.font.loading=!1})),t.abrupt("return");case 5:if(e.data){t.next=9;break}return t.next=8,this.loadFontFromURL("".concat(tt).concat(e.filename,".svg"));case 8:e.string=t.sent;case 9:e.data=Z((new DOMParser).parseFromString(e.string,"image/svg+xml"),this.font.size),e.size=this.font.size,this.$nextTick((function(){i.font.loading=!1}));case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),loadFontFromURL:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){var i,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.axios.get(e);case 2:return i=t.sent,a=i.data,n=a.indexOf("<svg "),-1===n&&(n=a.indexOf("<SVG ")),t.abrupt("return",a.substring(n));case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),download:function(){var t=this,e="",i=this.overlay.textGroup.clone(),a=i.children(),n=new D["d"](this.overlay.textGroup),s=[n.a,n.b,n.c,n.d,n.e,n.f];a.forEach((function(i){if("path"===i.type){var a,n=i.attr("d");a=0!==t.overlay.rotation?new J.a(n).matrix(s).toString():new J.a(n).toString(),e+=i.plot(a).svg()}}));var r="<g>".concat(e,"</g>");Q(this.$refs.svgWrapper.childNodes[1],r,"line-text-".concat(Date.now()))},createTextPaths:function(){var t=this;this.paths=[];var e=this.fonts[this.font.selected].data,i=this.text,a=0,n=0,s=0,r=[],o=0,l=0,c=i.split("");"left"!==this.font.alignment&&(c.forEach((function(i,a){"\n"===i&&(r.push(n),n=0),e[i]&&(n+=e[i].width+t.font.characterSpacing,a+1===c.length&&r.push(n))})),l=Math.max.apply(Math,r)),c.forEach((function(i){if("\n"===i&&(o+=1,a=0,s+=t.fonts[t.font.selected].size*t.font.lineHeight),e[i]){if(e[i].d){var n=a;"center"===t.font.alignment&&(n=a-r[o]/2),"right"===t.font.alignment&&(n=a-l-r[o]),t.paths.push({d:new J.a(e[i].d).translate(n,s).rel().toString()})}a+=e[i].width+t.font.characterSpacing}}))}}},it=et,at=(i("034f"),Object(p["a"])(it,r,o,!1,null,null,null)),nt=at.exports,st=i("a7fe"),rt=i.n(st),ot=i("038a"),lt=i.n(ot),ct=i("0284"),ht=i.n(ct);a["a"].config.productionTip=!1,a["a"].use(lt.a,{tagName:"svgicon"}),a["a"].use(rt.a,s.a),a["a"].use(ht.a,{id:"UA-167408902-2"}),new a["a"]({render:function(t){return t(nt)}}).$mount("#app")},5747:function(t,e,i){var a=i("038a");a.register({increase:{width:16,height:16,viewBox:"0 0 50 50",data:'<path pid="0" d="M18.344 4.281c-.383.04-.711.293-.844.657L2.469 43.5a1.002 1.002 0 00.937 1.344h5.25a1 1 0 00.938-.657l4.062-10.937h14.938l3.968 10.938a1 1 0 00.938.656h5.656a.997.997 0 00.938-1.344L25.03 4.937a1 1 0 00-.937-.656h-5.75zm.75 2h4.312l14.282 36.563h-3.5l-3.97-10.938a1 1 0 00-.937-.656H12.97a.998.998 0 00-.938.625L7.97 42.844H4.875zm1.843 2.657c-.347.07-.632.32-.75.656l-6.53 17.968a1.002 1.002 0 00.937 1.344h13.062a.997.997 0 00.938-1.312l-6.407-18a1 1 0 00-.968-.656h-.281zm.22 3.812l5.093 14.156H16.031zm20.75 6.219c-.044.008-.087.02-.126.031A1.002 1.002 0 0041 20v4h-4.094c-.55.027-.98.496-.953 1.047.027.55.496.98 1.047.953h4v4c-.004.36.184.695.496.879.313.18.695.18 1.008 0 .312-.184.5-.52.496-.879v-4h4c.36.004.695-.184.879-.496a1.01 1.01 0 000-1.008c-.184-.312-.52-.5-.879-.496h-4v-4a1 1 0 00-1.094-1.031z"/>'}})},"64a9":function(t,e,i){},"6c2a":function(t,e,i){var a=i("038a");a.register({type:{width:16,height:16,viewBox:"0 0 50 50",data:'<path pid="0" d="M39 8v2H26v32h-2V10H11V8h28m0-2H11c-1.102 0-2 .898-2 2v2c0 1.102.898 2 2 2h11v30c0 1.102.898 2 2 2h2c1.102 0 2-.898 2-2V12h11c1.102 0 2-.898 2-2V8c0-1.102-.898-2-2-2z"/>'}})},"79bd":function(t,e,i){var a=i("038a");a.register({add_font:{width:16,height:16,viewBox:"0 0 30 30",data:'<path pid="0" style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M14.414 4a1.499 1.499 0 00-1.357.95L5.533 24H5a1 1 0 100 2h4a1 1 0 100-2h-.242l1.592-4.03c.05.009.096.03.15.03h4.023a8.952 8.952 0 01.995-2h-4.391l3.416-8.648 2.951 6.54a8.963 8.963 0 012.65-1.421l-4.326-9.588A1.528 1.528 0 0014.414 4zM23 16a7 7 0 100 14 7 7 0 000-14zm0 3a1 1 0 011 1v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2h-2a1 1 0 110-2h2v-2a1 1 0 011-1z" font-weight="400" font-family="sans-serif" overflow="visible"/>'}})},"7e0b":function(t,e,i){var a=i("038a");a.register({rotate:{width:16,height:16,viewBox:"0 0 50 50",data:'<path pid="0" d="M22.443 2L2 22.443 27.557 48 48 27.557 22.443 2zm9.577.998a1 1 0 00-.237 1.979C40.395 6.89 43.2 12.75 45.051 18.317A1 1 0 0047 18v-6a1 1 0 00-1.447-.895l-1.237.618c-2.28-3.855-5.874-7.316-12.1-8.7a1 1 0 00-.196-.025zm-7.227 13.463l1.412 1.412-3.459 3.461 8.32 8.32-1.414 1.414-8.32-8.322-3.459 3.461-1.414-1.414 8.334-8.332zM3.959 30.986A1 1 0 003 32.084V38a1 1 0 001.447.895l1.237-.618c2.28 3.855 5.874 7.316 12.1 8.7a1 1 0 10.433-1.954C9.605 43.11 6.8 37.25 4.949 31.683a1 1 0 00-.99-.697z"/>'}})},"8a9c":function(t,e,i){var a=i("038a");a.register({"type-filled":{width:16,height:16,viewBox:"0 0 50 50",data:'<path pid="0" d="M39 6H11c-1.102 0-2 .898-2 2v2c0 1.102.898 2 2 2h11v30c0 1.102.898 2 2 2h2c1.102 0 2-.898 2-2V12h11c1.102 0 2-.898 2-2V8c0-1.102-.898-2-2-2z"/>'}})},"8da4":function(t,e,i){var a=i("038a");a.register({move:{width:16,height:16,viewBox:"0 0 50 50",data:'<path pid="0" d="M25 3.648L19.297 9.29c-.262.25-.371.621-.281.973a1.003 1.003 0 001.687.449L24 7.453V18c-.004.36.184.695.496.879.313.18.695.18 1.008 0 .312-.184.5-.52.496-.879V7.453l3.297 3.258c.254.258.625.363.976.27a1.002 1.002 0 00.43-1.691zM9.945 19.016a1.01 1.01 0 00-.683.308l-5.637 5.703 5.637 5.703c.25.262.62.372.972.282a1.003 1.003 0 00.45-1.688l-3.262-3.297h10.55c.36.004.696-.183.88-.496a1.01 1.01 0 000-1.008c-.184-.312-.52-.5-.88-.496H7.423l3.262-3.297c.293-.289.382-.73.218-1.109a1.009 1.009 0 00-.957-.605zm30.078 0a1.01 1.01 0 00-.93.62 1 1 0 00.223 1.094l3.262 3.297h-10.55a1.006 1.006 0 00-.88.496 1.01 1.01 0 000 1.008c.184.313.52.5.88.496h10.55l-3.262 3.297a1.003 1.003 0 00.45 1.688c.351.09.722-.02.972-.282l5.64-5.703-5.64-5.703a1.01 1.01 0 00-.715-.308zM24.984 31.043A1 1 0 0024 32.059v10.546l-3.297-3.261a1.007 1.007 0 00-.719-.297.998.998 0 00-.687 1.719L25 46.406l5.703-5.64a.996.996 0 00-.43-1.688 1.004 1.004 0 00-.976.266L26 42.605V32.06a.997.997 0 00-1.016-1.016z"/>'}})},"985d":function(t,e,i){i("79bd"),i("f99e"),i("2977"),i("5747"),i("f15c"),i("8da4"),i("7e0b"),i("8a9c"),i("6c2a")},f15c:function(t,e,i){var a=i("038a");a.register({lowercase:{width:16,height:16,viewBox:"0 0 16 16",data:'<path pid="0" style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M1 2v1h4v10h1V3h4V2H1zm7 4v1h3v6h1V7h3V6H8z" font-weight="400" font-family="sans-serif" overflow="visible"/>'}})},f99e:function(t,e,i){var a=i("038a");a.register({decrease:{width:16,height:16,viewBox:"0 0 50 50",data:'<path pid="0" d="M17.656 10c-.347.07-.633.32-.75.656L4.125 43.5a1.002 1.002 0 00.938 1.344H9.5a1 1 0 00.938-.657l3.437-9.218h12.531l3.344 9.218a1 1 0 00.938.657H35.5a.997.997 0 00.938-1.344L23.593 10.656a1 1 0 00-.938-.656H17.656zm.875 2H22l12.031 30.844h-2.656l-3.344-9.219a1 1 0 00-.937-.656H13.187a1 1 0 00-.937.656l-3.438 9.219h-2.28zm1.407 1.969c-.348.07-.633.32-.75.656l-5.563 15.313a1.002 1.002 0 00.938 1.343h11.156a.997.997 0 00.937-1.343l-5.468-15.313a1 1 0 00-.97-.656h-.062a1.024 1.024 0 00-.218 0zm.25 3.844L24.28 29.28H16zM36.813 24c-.551.05-.958.543-.907 1.094.051.55.543.957 1.094.906h10c.36.004.695-.184.879-.496a1.01 1.01 0 000-1.008c-.184-.312-.52-.5-.879-.496H36.813z"/>'}})}});
//# sourceMappingURL=app.641dbd53.js.map