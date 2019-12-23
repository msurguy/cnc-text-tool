(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],h=0,d=[];h<o.length;h++)s=o[h],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/cnc-text-tool/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),i=a.n(n);i.a},"1d0d":function(t,e,a){},2977:function(t,e,a){var n=a("038a");n.register({download:{width:16,height:16,viewBox:"0 0 24 24",data:'<path pid="0" d="M11 2a1 1 0 00-1 1v8H6l6 6 6-6h-4V3a1 1 0 00-1-1h-2zM2 20v2h20v-2H2z"/>'}})},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d"),a("1d0d");var n=a("2b0e"),i=a("bc3a"),r=a.n(i),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"page"},[a("div",{staticClass:"sidebar"},[a("div",{staticClass:"controls-wrapper"},[a("div",{staticClass:"controls"},[a("p",{staticClass:"mt-3 lead text-center text-white"},[t._v(" Source ")]),a("div",{staticClass:"sidebar-control"},[t._m(0),a("div",{staticClass:"custom-file"},[a("input",{staticClass:"custom-file-input",attrs:{type:"file",accept:"image/svg+xml",id:"sourcefile"},on:{change:t.onSourceFileChange}}),a("label",{staticClass:"custom-file-label",attrs:{for:"sourcefile"}},[t._v("Choose file")])])]),t.source.loading?a("div",{staticClass:"progress"},[a("div",{staticClass:"progress-bar",staticStyle:{width:"100%"},attrs:{role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}},[t._v("Loading SVG\n            ")])]):t._e(),a("transition",{attrs:{name:"slide"}},[t.source.svg?a("div",[a("text-area-input",{attrs:{label:"Input Text",value:t.text},on:{reset:t.resetTextInput,input:t.updateText}}),a("double-text-input",{attrs:{label:"Position","first-label":"x:","second-label":"y:","first-value":t.overlay.x,"second-value":t.overlay.y},on:{firstInput:t.moveOverlayX,secondInput:t.moveOverlayY}}),a("select-field",{attrs:{label:"Font",options:t.fontOptions},model:{value:t.font.selected,callback:function(e){t.$set(t.font,"selected",e)},expression:"font.selected"}}),a("select-field",{attrs:{label:"Alignment",options:t.fontAlignmentOptions},model:{value:t.font.alignment,callback:function(e){t.$set(t.font,"alignment",e)},expression:"font.alignment"}}),a("slider",{attrs:{min:10,max:150,step:1,label:"Font Size"},model:{value:t.font.sizeInPixels,callback:function(e){t.$set(t.font,"sizeInPixels",t._n(e))},expression:"font.sizeInPixels"}}),a("slider",{attrs:{min:.5,max:3,step:.1,label:"Line Height"},model:{value:t.font.lineHeight,callback:function(e){t.$set(t.font,"lineHeight",t._n(e))},expression:"font.lineHeight"}}),a("slider",{attrs:{min:-360,max:360,step:1,label:"Rotation"},model:{value:t.overlay.rotation,callback:function(e){t.$set(t.overlay,"rotation",t._n(e))},expression:"overlay.rotation"}}),a("toggle",{attrs:{label:"Black / White"},model:{value:t.font.color,callback:function(e){t.$set(t.font,"color",e)},expression:"font.color"}})],1):t._e()])],1)]),a("div",{staticClass:"button"},[a("div",{staticClass:"reveal"}),a("button",{staticClass:"btn btn-primary btn-block",on:{click:function(e){return e.preventDefault(),t.download(e)}}},[t._v("\n          Download SVG\n        ")])])]),a("div",{staticClass:"paper"},[a("div",{staticClass:"sketch",attrs:{id:"sketch"}},[a("div",{ref:"svgWrapper",attrs:{id:"svg-wrapper"}})])]),t._m(1)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"control-header"},[a("div"),a("div",{staticClass:"control-label"},[t._v("\n                Upload File\n              ")]),a("div")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-wrapper"},[a("div",{staticClass:"footer"},[a("h3",[t._v("CNC Text Editor")]),a("p",[t._v("Project by "),a("a",{attrs:{target:"_blank",href:"http://twitter.com/msurguy"}},[t._v("@msurguy")]),t._v(" ("),a("a",{attrs:{target:"_blank",href:"http://github.com/msurguy/cnc-text-tool"}},[t._v("Source")]),t._v(")\n        ")])])])}],l=(a("6b54"),a("4917"),a("28a5"),a("7f7f"),a("96cf"),a("3b8d")),c=(a("456d"),a("6c7b"),a("ac6a"),a("e5bb")),u=a.n(c),h=a("f7fe"),d=a.n(h),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar-control"},[a("div",{staticClass:"control-header"},[a("div",{staticClass:"custom-control custom-switch"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:t.guid},domProps:{value:t.value,checked:!!t.value},on:{change:t.onInput}}),a("label",{staticClass:"custom-control-label",attrs:{for:t.guid}},[t._v(t._s(t.label))])])])])},v=[],g=(a("985d"),function(){var t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return t()+t()}),p={name:"Toggle",props:{leftIcon:{type:Object},rightIcon:{type:Object},label:{type:String,default:""},value:{type:Boolean,default:!1}},data:function(){return{guid:g()}},methods:{onInput:function(t){this.$emit("input",t.target.checked)}}},m=p,b=a("2877"),y=Object(b["a"])(m,f,v,!1,null,null,null),x=y.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar-control"},[a("div",{staticClass:"control-header"},[a("div",[t.leftIcon?a("svgicon",{attrs:{name:t.leftIcon.icon,width:t.leftIcon.width,height:t.leftIcon.height,color:"#FFFFFF",fill:!1}}):t._e()],1),a("div",{staticClass:"control-label"},[t._v("\n      "+t._s(t.label)+"\n    ")]),a("div",[t.rightIcon?a("svgicon",{attrs:{name:t.rightIcon.icon,width:t.rightIcon.width,height:t.rightIcon.height,color:"#FFFFFF",fill:!1}}):t._e()],1)]),a("div",{staticClass:"control-header"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedOption,expression:"selectedOption"}],staticClass:"custom-select custom-select-sm custom-select-input",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedOption=e.target.multiple?a:a[0]},t.onInput]}},t._l(t.options,(function(e,n){return a("option",{key:n,domProps:{value:e.value}},[t._v("\n        "+t._s(e.text)+"\n      ")])})),0)])])},w=[],M={name:"SelectField",props:{leftIcon:{type:Object},rightIcon:{type:Object},label:{type:String,default:"Label"},value:{type:String,default:""},options:{type:Array,default:function(){return[]}}},data:function(){return{selectedOption:""}},watch:{value:function(t){this.selectedOption=t}},mounted:function(){this.selectedOption=this.value},methods:{onInput:function(t){this.$emit("input",t.target.value),this.selectedOption=t.target.value}}},E=M,z=Object(b["a"])(E,S,w,!1,null,null,null),C=z.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar-control"},[a("div",{staticClass:"control-header"},[a("div",[t.leftIcon?a("svgicon",{attrs:{name:t.leftIcon.icon,width:t.leftIcon.width,height:t.leftIcon.height,color:"#FFFFFF",fill:!1}}):t._e()],1),a("div",{staticClass:"control-label"},[a("div",{staticClass:"control-output"},[a("input",{attrs:{disabled:t.disabled,type:"text"},domProps:{value:t.value},on:{change:t.onInput}})]),t._v(t._s(t.label)+"\n    ")]),a("div",[t.rightIcon?a("svgicon",{attrs:{name:t.rightIcon.icon,width:t.rightIcon.width,height:t.rightIcon.height,color:"#FFFFFF",fill:!1}}):t._e()],1)]),a("input",{staticClass:"custom-range",attrs:{disabled:t.disabled,type:"range",min:t.min,max:t.max,step:t.step},domProps:{value:t.value},on:{input:t.onInput}})])},_=[],F=(a("c5f6"),{name:"Slider",props:{disabled:{type:Boolean,default:!1},leftIcon:{type:Object},rightIcon:{type:Object},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},label:{type:String,default:"Label"},value:{type:Number,default:50}},methods:{onInput:function(t){t.target.value>this.min?this.$emit("input",t.target.value):this.$emit("input",this.min),t.target.value<this.min&&this.$emit("input",this.min)}}}),O=F,H=Object(b["a"])(O,I,_,!1,null,null,null),k=H.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar-control"},[a("div",{staticClass:"control-header"},[a("div",[t.leftIcon?a("svgicon",{attrs:{name:t.leftIcon.icon,width:t.leftIcon.width,height:t.leftIcon.height,color:"#FFFFFF",fill:!1}}):t._e()],1),a("div",{staticClass:"control-label"},[t._v("\n      "+t._s(t.label)+"\n    ")]),a("div",[t.rightIcon?a("svgicon",{attrs:{name:t.rightIcon.icon,width:t.rightIcon.width,height:t.rightIcon.height,color:"#FFFFFF",fill:!1}}):t._e()],1)]),a("div",{staticClass:"control-header"},[a("textarea",{staticClass:"control-textarea-input",attrs:{rows:"4"},domProps:{value:t.value},on:{change:t.onInput}}),t.showReset?a("a",{staticClass:"btn",on:{click:function(e){return t.$emit("reset")}}},[t._v("reset")]):t._e()])])},L=[],P={name:"TextAreaInput",props:{leftIcon:{type:Object},rightIcon:{type:Object},label:{type:String,default:"Label"},value:{type:String,default:""},showReset:{type:Boolean,default:!1}},methods:{onInput:function(t){this.$emit("input",t.target.value)}}},T=P,A=Object(b["a"])(T,j,L,!1,null,null,null),$=A.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar-control"},[a("div",{staticClass:"control-header"},[a("div"),a("div",{staticClass:"control-label"},[t._v("\n      "+t._s(t.label)+"\n    ")]),a("div")]),a("div",{staticClass:"form-row align-items-center"},[a("div",{staticClass:"col-sm-1 text-right"},[t.firstLabel?a("span",[t._v(t._s(t.firstLabel))]):t._e()]),a("div",{staticClass:"col-sm-5"},[a("input",{staticClass:"control-text-input",attrs:{type:"text"},domProps:{value:t._f("round")(t.firstValue)},on:{change:t.onFirstInput}})]),a("div",{staticClass:"col-sm-1 text-right"},[t.secondLabel?a("span",[t._v(t._s(t.secondLabel))]):t._e()]),a("div",{staticClass:"col-sm-5"},[a("input",{staticClass:"control-text-input",attrs:{type:"text"},domProps:{value:t._f("round")(t.secondValue)},on:{change:t.onSecondInput}})])])])},G=[],D={name:"DoubleTextInput",props:{label:{type:String,default:"Label"},firstLabel:{type:String,default:""},secondLabel:{type:String,default:""},firstValue:{type:Number,default:0},secondValue:{type:Number,default:0}},methods:{onFirstInput:function(t){this.$emit("firstInput",t.target.value)},onSecondInput:function(t){this.$emit("secondInput",t.target.value)}},filters:{round:function(t){return t.toFixed(2)}}},V=D,N=Object(b["a"])(V,B,G,!1,null,null,null),R=N.exports,W=a("377e"),U=a("d225"),X=a("b0b4"),Y=function(t){return t.changedTouches&&(t=t.changedTouches[0]),{x:t.clientX,y:t.clientY}},J=function(){function t(e){Object(U["a"])(this,t),e.remember("_draggable",this),this.el=e,this.drag=this.drag.bind(this),this.startDrag=this.startDrag.bind(this),this.endDrag=this.endDrag.bind(this)}return Object(X["a"])(t,[{key:"init",value:function(t){t?(this.el.on("mousedown.drag",this.startDrag),this.el.on("touchstart.drag",this.startDrag)):(this.el.off("mousedown.drag"),this.el.off("touchstart.drag"))}},{key:"startDrag",value:function(t){var e=!t.type.indexOf("mouse");if((!e||1===(t.which||t.buttons))&&!this.el.dispatch("beforedrag",{event:t,handler:this}).defaultPrevented){t.preventDefault(),t.stopPropagation(),this.init(!1),this.box=this.el.bbox(),this.lastClick=this.el.point(Y(t));var a=(e?"mousemove":"touchmove")+".drag",n=(e?"mouseup":"touchcancel.drag touchend")+".drag";Object(W["h"])(window,a,this.drag),Object(W["h"])(window,n,this.endDrag),this.el.fire("dragstart",{event:t,handler:this,box:this.box})}}},{key:"drag",value:function(t){var e=this.box,a=this.lastClick,n=this.el.point(Y(t)),i=e.x+(n.x-a.x),r=e.y+(n.y-a.y),s=new W["a"](i,r,e.w,e.h);if(!this.el.dispatch("dragmove",{event:t,handler:this,box:s}).defaultPrevented)return this.move(i,r),s}},{key:"move",value:function(t,e){"svg"===this.el.type?W["c"].prototype.move.call(this.el,t,e):this.el.move(t,e)}},{key:"endDrag",value:function(t){var e=this.drag(t);this.el.fire("dragend",{event:t,handler:this,box:e}),Object(W["g"])(window,"mousemove.drag"),Object(W["g"])(window,"touchmove.drag"),Object(W["g"])(window,"mouseup.drag"),Object(W["g"])(window,"touchend.drag"),this.init(!0)}}]),t}();Object(W["f"])(W["b"],{draggable:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this.remember("_draggable")||new J(this);return e.init(t),this}});var Q=a("c641"),Z=a.n(Q),q=a("84fa"),K=a.n(q);function tt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:24,a=[],n=t.getElementsByTagName("font")[0],i=t.getElementsByTagName("font-face")[0],r=t.getElementsByTagName("glyph"),s=n.getAttribute("horiz-adv-x"),o=i.getAttribute("ascent"),l=i.getAttribute("units-per-em")||1e3,c=e,u=c/l;return Z()(r,(function(t){var e=t.getAttribute("d"),n=t.getAttribute("unicode"),i=t.getAttribute("glyph-name")||"glyph"+n,r=t.getAttribute("horiz-adv-x")||s;a[n]={d:e?new K.a(e).translate(0,-o).scale(u,-u).abs().rel().toString():null,unicode:n,name:i,width:parseFloat(r*u),height:c}})),a}var et=a("92d7"),at=a.n(et);a("a481");function nt(t,e,a){var n='<?xml version="1.0" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">',i=(new XMLSerializer).serializeToString(t);i=i.replace("</svg>","\n".concat(e,"\n</svg>"));var r=new Blob([n+i],{type:"image/svg+xml;charset=utf-8"}),s=URL.createObjectURL(r),o=document.createElement("a");o.href=s,o.target="_blank",o.download="".concat(a,".svg"),document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(s)}var it="https://glcdn.githack.com/oskay/svg-fonts/raw/master/fonts/",rt={name:"HelloWorld",components:{Toggle:x,SelectField:C,Slider:k,TextAreaInput:$,DoubleTextInput:R},props:{msg:String},data:function(){return{source:{name:"",svg:"",string:"",loading:!1,width:0,height:0,viewbox:"0 0 0 0"},overlay:{width:0,height:0,viewbox:"0 0 0 0",svg:null,textGroup:null,flattened:null,x:0,y:0,rotation:0},paths:[],text:"Hershey Text\nLorem Ipsum",fonts:{EMSAllure:{filename:"EMS/EMSAllure",data:null,string:"",size:24},EMSBird:{filename:"EMS/EMSBird",data:null,string:"",size:24},EMSBirdSwashCaps:{filename:"EMS/EMSBirdSwashCaps",data:null,string:"",size:24},EMSBrush:{filename:"EMS/EMSBrush",data:null,string:"",size:24},EMSCapitol:{filename:"EMS/EMSCapitol",data:null,string:"",size:24},EMSCasualHand:{filename:"EMS/EMSCasualHand",data:null,string:"",size:24},EMSDecorousScript:{filename:"EMS/EMSDecorousScript",data:null,string:"",size:24},EMSDelight:{filename:"EMS/EMSDelight",data:null,string:"",size:24},EMSDelightSwashCaps:{filename:"EMS/EMSDelightSwashCaps",data:null,string:"",size:24},EMSElfin:{filename:"EMS/EMSElfin",data:null,string:"",size:24},EMSFelix:{filename:"EMS/EMSFelix",data:null,string:"",size:24},EMSHerculean:{filename:"EMS/EMSHerculean",data:null,string:"",size:24},EMSInvite:{filename:"EMS/EMSInvite",data:null,string:"",size:24},EMSLeague:{filename:"EMS/EMSLeague",data:null,string:"",size:24},EMSLittlePrincess:{filename:"EMS/EMSLittlePrincess",data:null,string:"",size:24},EMSMistyNight:{filename:"EMS/EMSMistyNight",data:null,string:"",size:24},EMSNeato:{filename:"EMS/EMSNeato",data:null,string:"",size:24},EMSNixish:{filename:"EMS/EMSNixish",data:null,string:"",size:24},EMSNixishItalic:{filename:"EMS/EMSNixishItalic",data:null,string:"",size:24},EMSOsmotron:{filename:"EMS/EMSOsmotron",data:null,string:"",size:24},EMSPancakes:{filename:"EMS/EMSPancakes",data:null,string:"",size:24},EMSPepita:{filename:"EMS/EMSPepita",data:null,string:"",size:24},EMSQwandry:{filename:"EMS/EMSQwandry",data:null,string:"",size:24},EMSReadability:{filename:"EMS/EMSReadability",data:null,string:"",size:24},EMSReadabilityItalic:{filename:"EMS/EMSReadabilityItalic",data:null,string:"",size:24},EMSSociety:{filename:"EMS/EMSSociety",data:null,string:"",size:24},EMSSpaceRocks:{filename:"EMS/EMSSpaceRocks",data:null,string:"",size:24},EMSSwiss:{filename:"EMS/EMSSwiss",data:null,string:"",size:24},EMSTech:{filename:"EMS/EMSTech",data:null,string:"",size:24},HersheyGothEnglish:{filename:"Hershey/HersheyGothEnglish",data:null,string:"",size:24},HersheyGothGerman:{filename:"Hershey/HersheyGothGerman",data:null,string:"",size:24},HersheyGothItalian:{filename:"Hershey/HersheyGothItalian",data:null,string:"",size:24},HersheySans1:{filename:"Hershey/HersheySans1",data:null,string:"",size:24},HersheySansMed:{filename:"Hershey/HersheySansMed",data:null,string:"",size:24},HersheyScript1:{filename:"Hershey/HersheyScript1",data:null,string:"",size:24},HersheyScriptMed:{filename:"Hershey/HersheyScriptMed",data:null,string:"",size:24},HersheySerifBold:{filename:"Hershey/HersheySerifBold",data:null,string:"",size:24},HersheySerifBoldItalic:{filename:"Hershey/HersheySerifBoldItalic",data:null,string:"",size:24},HersheySerifMed:{filename:"Hershey/HersheySerifMed",data:null,string:"",size:24},HersheySerifMedItalic:{filename:"Hershey/HersheySerifMedItalic",data:null,string:"",size:24}},fontOptions:[],fontAlignmentOptions:[{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}],font:{alignment:"left",selected:"HersheyScriptMed",sizeInPixels:24,size:24,lineHeight:1,color:!1,loading:!1,strokeWidth:1,widthUnit:"px"}}},watch:{"font.selected":function(){this.loadFont()},"font.loading":function(t,e){!0===e&&!1===t&&this.createTextPaths()},"font.sizeInPixels":function(t){this.font.size=t,this.loadFont()},"font.color":function(){this.createTextPaths()},"font.lineHeight":function(){this.createTextPaths()},"font.alignment":function(){this.createTextPaths()},"overlay.rotation":function(t){this.overlay.textGroup.transform({rotate:t},!1)},paths:function(t){var e=this;this.overlay.textGroup.clear(),t.forEach((function(t){e.overlay.textGroup.path(t.d).fill("none").stroke({width:e.font.strokeWidth,color:e.font.color?"#FFFFFF":"#000000",linecap:"join"})}));var a=this.overlay.textGroup.bbox(),n=a.x,i=a.y,r=a.width,s=a.height;this.overlay.textGroup.rect(r,s).fill("rgba(0,0,0,0)").move(n,i),this.overlay.textGroup.move(this.overlay.x,this.overlay.y)}},mounted:function(){var t=this;u.a.init(),this.overlay.svg=Object(W["e"])().addTo("#svg-wrapper").addClass("canvas"),this.overlay.svg.size(0,0),this.overlay.textGroup=this.overlay.svg.group(),this.overlay.textGroup.draggable().on("dragmove",(function(e){t.overlay.x=e.detail.box.x,t.overlay.y=e.detail.box.y})),this.fontOptions=Object.keys(this.fonts).map((function(t){return{text:t,value:t}})),this.loadFont()},methods:{moveOverlayX:function(t){this.overlay.x=parseFloat(t),this.overlay.textGroup.move(t,this.overlay.y)},moveOverlayY:function(t){this.overlay.y=parseFloat(t),this.overlay.textGroup.move(this.overlay.x,t)},updateText:d()((function(t){this.text=t,this.createTextPaths()}),300),resetTextInput:function(){this.text=""},onSourceFileChange:function(t){this.source.loading=!0;var e=t.target.files||t.dataTransfer.files;e.length&&this.readSourceImage(e[0])},readSourceImage:function(t){var e=this,a=new FileReader;a.onload=function(){var a=Object(l["a"])(regeneratorRuntime.mark((function a(n){var i,r,s,o,l,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.source.name=t.name.substr(0,t.name.lastIndexOf(".")),i=n.target.result,r=i.indexOf("<svg "),-1===r&&(r=i.indexOf("<SVG ")),i=i.substring(r),e.source.string=i,s=(new DOMParser).parseFromString(i,"image/svg+xml").documentElement,s.classList.remove("canvas"),e.$refs.svgWrapper.childNodes[1]&&e.$refs.svgWrapper.removeChild(e.$refs.svgWrapper.childNodes[1]),e.$refs.svgWrapper.appendChild(s),e.source.viewbox=!!s.hasAttribute("viewBox")&&s.getAttribute("viewBox"),e.source.width=s.hasAttribute("width")?s.getAttribute("width"):0,e.source.height=s.hasAttribute("height")?s.getAttribute("height"):0,e.source.viewbox&&(o=e.source.viewbox.indexOf(",")>-1?",":" ",l=e.source.viewbox.split(o).map((function(t){return parseFloat(t)})),e.overlay.svg.viewbox(l[0],l[1],l[2],l[3]),e.overlay.x=l[0],e.overlay.y=l[1],e.overlay.textGroup.move(l[0],l[1]),e.source.width||(e.source.width=l[2],s.setAttribute("width",l[2])),e.source.height||(e.source.height=l[3],s.setAttribute("height",l[3]))),c="number"!=typeof e.source.width&&e.source.width.match(/[a-zA-Z]+/g),e.font.widthUnit="px",c&&(e.font.widthUnit=c[0]),e.font.strokeWidth=1,e.font.size=e.font.sizeInPixels,e.overlay.width=e.source.width,e.overlay.height=e.source.height,e.overlay.viewbox=e.source.viewbox?e.source.viewbox:"0 0 ".concat(e.overlay.width," ").concat(e.overlay.height),e.source.viewbox||e.overlay.svg.viewbox(0,0,e.overlay.width,e.overlay.height),e.overlay.svg.size(e.overlay.width,e.overlay.height),e.source.svg=s,e.source.loading=!1,e.loadFont();case 27:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}(),a.readAsText(t)},loadFont:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.fonts[this.font.selected],this.font.loading=!0,!e.data||this.font.size!==e.size){t.next=5;break}return this.$nextTick((function(){this.font.loading=!1})),t.abrupt("return");case 5:if(e.data){t.next=9;break}return t.next=8,this.loadFontFromURL("".concat(it).concat(e.filename,".svg"));case 8:e.string=t.sent;case 9:e.data=tt((new DOMParser).parseFromString(e.string,"image/svg+xml"),this.font.size),e.size=this.font.size,this.$nextTick((function(){this.font.loading=!1}));case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),loadFontFromURL:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){var a,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.axios.get(e);case 2:return a=t.sent,n=a.data,i=n.indexOf("<svg "),-1===i&&(i=n.indexOf("<SVG ")),n=n.substring(i),t.abrupt("return",n);case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),download:function(){var t=this,e="",a=this.overlay.textGroup.clone(),n=a.children(),i=new W["d"](this.overlay.textGroup),r=[i.a,i.b,i.c,i.d,i.e,i.f];n.forEach((function(a){if("path"===a.type){var n=a.attr("d"),i="";i=0!==t.overlay.rotation?new K.a(n).matrix(r).toString():new K.a(n).toString(),e+=a.plot(i).svg()}}));var s="<g>".concat(e,"</g>");nt(this.$refs.svgWrapper.childNodes[1],s,"line-text-".concat(Date.now()))},createTextPaths:function(){var t=this;this.paths=[];var e=this.fonts[this.font.selected].data,a=this.text,n=0,i=0,r=0,s=[],o=0,l=0,c=a.split("");"left"!==this.font.alignment&&(c.forEach((function(t,a){"\n"===t&&(s.push(i),i=0);var n=at.a.encode(t);" "===t&&(n=" "),"&"===t&&(n="&"),"'"===t&&(n="&apos;"),n.length>2&&(n=n.toLowerCase()),e[n]&&(i+=e[n].width,a+1===c.length&&s.push(i))})),l=Math.max.apply(Math,s)),c.forEach((function(a){"\n"===a&&(o+=1,n=0,r+=t.fonts[t.font.selected].size*t.font.lineHeight);var i=at.a.encode(a);if(" "===a&&(i=" "),"&"===a&&(i="&"),"'"===a&&(i="&apos;"),i.length>2&&(i=i.toLowerCase()),e[i]){if(e[i].d){var c=n;"center"===t.font.alignment&&(c=n-s[o]/2),"right"===t.font.alignment&&(c=n-l-s[o]),t.paths.push({d:new K.a(e[i].d).translate(c,r).rel().toString()})}n+=e[i].width}}))}}},st=rt,ot=(a("034f"),Object(b["a"])(st,s,o,!1,null,null,null)),lt=ot.exports,ct=a("a7fe"),ut=a.n(ct),ht=a("038a"),dt=a.n(ht);n["a"].config.productionTip=!1,n["a"].use(dt.a,{tagName:"svgicon"}),n["a"].use(ut.a,r.a),new n["a"]({render:function(t){return t(lt)}}).$mount("#app")},5747:function(t,e,a){var n=a("038a");n.register({increase:{width:16,height:16,viewBox:"0 0 50 50",data:'<path pid="0" d="M18.344 4.281c-.383.04-.711.293-.844.657L2.469 43.5a1.002 1.002 0 00.937 1.344h5.25a1 1 0 00.938-.657l4.062-10.937h14.938l3.968 10.938a1 1 0 00.938.656h5.656a.997.997 0 00.938-1.344L25.03 4.937a1 1 0 00-.937-.656h-5.75zm.75 2h4.312l14.282 36.563h-3.5l-3.97-10.938a1 1 0 00-.937-.656H12.97a.998.998 0 00-.938.625L7.97 42.844H4.875zm1.843 2.657c-.347.07-.632.32-.75.656l-6.53 17.968a1.002 1.002 0 00.937 1.344h13.062a.997.997 0 00.938-1.312l-6.407-18a1 1 0 00-.968-.656h-.281zm.22 3.812l5.093 14.156H16.031zm20.75 6.219c-.044.008-.087.02-.126.031A1.002 1.002 0 0041 20v4h-4.094c-.55.027-.98.496-.953 1.047.027.55.496.98 1.047.953h4v4c-.004.36.184.695.496.879.313.18.695.18 1.008 0 .312-.184.5-.52.496-.879v-4h4c.36.004.695-.184.879-.496a1.01 1.01 0 000-1.008c-.184-.312-.52-.5-.879-.496h-4v-4a1 1 0 00-1.094-1.031z"/>'}})},"64a9":function(t,e,a){},"6c2a":function(t,e,a){var n=a("038a");n.register({type:{width:16,height:16,viewBox:"0 0 50 50",data:'<path pid="0" d="M39 8v2H26v32h-2V10H11V8h28m0-2H11c-1.102 0-2 .898-2 2v2c0 1.102.898 2 2 2h11v30c0 1.102.898 2 2 2h2c1.102 0 2-.898 2-2V12h11c1.102 0 2-.898 2-2V8c0-1.102-.898-2-2-2z"/>'}})},"79bd":function(t,e,a){var n=a("038a");n.register({add_font:{width:16,height:16,viewBox:"0 0 30 30",data:'<path pid="0" style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M14.414 4a1.499 1.499 0 00-1.357.95L5.533 24H5a1 1 0 100 2h4a1 1 0 100-2h-.242l1.592-4.03c.05.009.096.03.15.03h4.023a8.952 8.952 0 01.995-2h-4.391l3.416-8.648 2.951 6.54a8.963 8.963 0 012.65-1.421l-4.326-9.588A1.528 1.528 0 0014.414 4zM23 16a7 7 0 100 14 7 7 0 000-14zm0 3a1 1 0 011 1v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2h-2a1 1 0 110-2h2v-2a1 1 0 011-1z" font-weight="400" font-family="sans-serif" overflow="visible"/>'}})},"7e0b":function(t,e,a){var n=a("038a");n.register({rotate:{width:16,height:16,viewBox:"0 0 50 50",data:'<path pid="0" d="M22.443 2L2 22.443 27.557 48 48 27.557 22.443 2zm9.577.998a1 1 0 00-.237 1.979C40.395 6.89 43.2 12.75 45.051 18.317A1 1 0 0047 18v-6a1 1 0 00-1.447-.895l-1.237.618c-2.28-3.855-5.874-7.316-12.1-8.7a1 1 0 00-.196-.025zm-7.227 13.463l1.412 1.412-3.459 3.461 8.32 8.32-1.414 1.414-8.32-8.322-3.459 3.461-1.414-1.414 8.334-8.332zM3.959 30.986A1 1 0 003 32.084V38a1 1 0 001.447.895l1.237-.618c2.28 3.855 5.874 7.316 12.1 8.7a1 1 0 10.433-1.954C9.605 43.11 6.8 37.25 4.949 31.683a1 1 0 00-.99-.697z"/>'}})},"8a9c":function(t,e,a){var n=a("038a");n.register({"type-filled":{width:16,height:16,viewBox:"0 0 50 50",data:'<path pid="0" d="M39 6H11c-1.102 0-2 .898-2 2v2c0 1.102.898 2 2 2h11v30c0 1.102.898 2 2 2h2c1.102 0 2-.898 2-2V12h11c1.102 0 2-.898 2-2V8c0-1.102-.898-2-2-2z"/>'}})},"8da4":function(t,e,a){var n=a("038a");n.register({move:{width:16,height:16,viewBox:"0 0 50 50",data:'<path pid="0" d="M25 3.648L19.297 9.29c-.262.25-.371.621-.281.973a1.003 1.003 0 001.687.449L24 7.453V18c-.004.36.184.695.496.879.313.18.695.18 1.008 0 .312-.184.5-.52.496-.879V7.453l3.297 3.258c.254.258.625.363.976.27a1.002 1.002 0 00.43-1.691zM9.945 19.016a1.01 1.01 0 00-.683.308l-5.637 5.703 5.637 5.703c.25.262.62.372.972.282a1.003 1.003 0 00.45-1.688l-3.262-3.297h10.55c.36.004.696-.183.88-.496a1.01 1.01 0 000-1.008c-.184-.312-.52-.5-.88-.496H7.423l3.262-3.297c.293-.289.382-.73.218-1.109a1.009 1.009 0 00-.957-.605zm30.078 0a1.01 1.01 0 00-.93.62 1 1 0 00.223 1.094l3.262 3.297h-10.55a1.006 1.006 0 00-.88.496 1.01 1.01 0 000 1.008c.184.313.52.5.88.496h10.55l-3.262 3.297a1.003 1.003 0 00.45 1.688c.351.09.722-.02.972-.282l5.64-5.703-5.64-5.703a1.01 1.01 0 00-.715-.308zM24.984 31.043A1 1 0 0024 32.059v10.546l-3.297-3.261a1.007 1.007 0 00-.719-.297.998.998 0 00-.687 1.719L25 46.406l5.703-5.64a.996.996 0 00-.43-1.688 1.004 1.004 0 00-.976.266L26 42.605V32.06a.997.997 0 00-1.016-1.016z"/>'}})},"985d":function(t,e,a){a("79bd"),a("f99e"),a("2977"),a("5747"),a("f15c"),a("8da4"),a("7e0b"),a("8a9c"),a("6c2a")},f15c:function(t,e,a){var n=a("038a");n.register({lowercase:{width:16,height:16,viewBox:"0 0 16 16",data:'<path pid="0" style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M1 2v1h4v10h1V3h4V2H1zm7 4v1h3v6h1V7h3V6H8z" font-weight="400" font-family="sans-serif" overflow="visible"/>'}})},f99e:function(t,e,a){var n=a("038a");n.register({decrease:{width:16,height:16,viewBox:"0 0 50 50",data:'<path pid="0" d="M17.656 10c-.347.07-.633.32-.75.656L4.125 43.5a1.002 1.002 0 00.938 1.344H9.5a1 1 0 00.938-.657l3.437-9.218h12.531l3.344 9.218a1 1 0 00.938.657H35.5a.997.997 0 00.938-1.344L23.593 10.656a1 1 0 00-.938-.656H17.656zm.875 2H22l12.031 30.844h-2.656l-3.344-9.219a1 1 0 00-.937-.656H13.187a1 1 0 00-.937.656l-3.438 9.219h-2.28zm1.407 1.969c-.348.07-.633.32-.75.656l-5.563 15.313a1.002 1.002 0 00.938 1.343h11.156a.997.997 0 00.937-1.343l-5.468-15.313a1 1 0 00-.97-.656h-.062a1.024 1.024 0 00-.218 0zm.25 3.844L24.28 29.28H16zM36.813 24c-.551.05-.958.543-.907 1.094.051.55.543.957 1.094.906h10c.36.004.695-.184.879-.496a1.01 1.01 0 000-1.008c-.184-.312-.52-.5-.879-.496H36.813z"/>'}})}});
//# sourceMappingURL=app.866f4819.js.map