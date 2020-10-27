(function(e){function t(t){for(var o,u,i=t[0],l=t[1],a=t[2],d=0,b=[];d<i.length;d++)u=i[d],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&b.push(r[u][0]),r[u]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);s&&s(t);while(b.length)b.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,u=1;u<n.length;u++){var l=n[u];0!==r[l]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},c=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"30a84c54"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var a=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",a.name="ChunkLoadError",a.type=o,a.request=c,n[1](a)}r[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var s=a;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"286d":function(e,t,n){},"9cdc":function(e,t,n){"use strict";n("c701")},c701:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(e,t,n,r,c,u){var i=Object(o["s"])("router-view");return Object(o["n"])(),Object(o["c"])(i)}n("9cdc");const c={};c.render=r;var u=c,i=n("9483");Object(i["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var l=n("6c02"),a={class:"home"},d=Object(o["e"])("h1",null,"Ventilation Rate Estimator",-1),s=Object(o["e"])("p",null,[Object(o["d"])("Refer to "),Object(o["e"])("a",{href:"https://medium.com/@jjose_19945/how-to-quantify-the-ventilation-rate-of-an-indoor-space-using-a-cheap-co2-monitor-4d8b6d4dab44"},"this guide"),Object(o["d"])(" when using this tool.")],-1),b=Object(o["e"])("label",{for:"outdoorsPpm"},[Object(o["d"])("CO"),Object(o["e"])("sub",null,"2"),Object(o["d"])(" Outdoors = ")],-1),p=Object(o["e"])("span",null," ppm",-1),f=Object(o["e"])("label",{for:"indoorsPeakPpm"},[Object(o["d"])("CO"),Object(o["e"])("sub",null,"2"),Object(o["d"])(" Indoors at peak = ")],-1),O=Object(o["e"])("span",null," ppm",-1),j=Object(o["d"])("Excess CO"),m=Object(o["e"])("sub",null,"2",-1),v=Object(o["d"])(": "),h=Object(o["e"])("span",null," ppm",-1),g=Object(o["d"])("Indoors CO"),y=Object(o["e"])("sub",null,"2",-1),P=Object(o["d"])(" at 63% decline: "),w=Object(o["d"])(" ppm"),k={for:"declined63Time"},T=Object(o["d"])("Time between start and declined to "),x=Object(o["d"])(" ppm = "),C=Object(o["e"])("span",null," H",-1),M=Object(o["d"])("Ventilation rate = "),_=Object(o["d"])(),E=Object(o["e"])("span",null,[Object(o["d"])(" H "),Object(o["e"])("sup",null,"-1")],-1);function S(e,t,n,r,c,u){return Object(o["n"])(),Object(o["c"])("div",a,[d,s,Object(o["e"])("div",null,[b,Object(o["y"])(Object(o["e"])("input",{id:"outdoorsPpm",type:"number","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.outdoorsPpm=t})},null,512),[[o["w"],e.outdoorsPpm,void 0,{number:!0}]]),p]),Object(o["e"])("div",null,[f,Object(o["y"])(Object(o["e"])("input",{id:"indoorsPeakPpm",type:"number","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.indoorsPeakPpm=t})},null,512),[[o["w"],e.indoorsPeakPpm,void 0,{number:!0}]]),O]),Object(o["e"])("div",null,[Object(o["e"])("p",null,[j,m,v,Object(o["e"])("b",null,Object(o["u"])(e.excessPpm()),1),h]),Object(o["e"])("p",null,[g,y,P,Object(o["e"])("b",null,Object(o["u"])(Math.floor(e.declined63Ppm())),1),w])]),Object(o["e"])("div",null,[Object(o["e"])("label",k,[T,Object(o["e"])("b",null,Object(o["u"])(Math.floor(e.declined63Ppm())),1),x]),Object(o["y"])(Object(o["e"])("input",{id:"declined63Time",type:"number","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.declined63Time=t})},null,512),[[o["w"],e.declined63Time,void 0,{number:!0}]]),C]),Object(o["e"])("div",null,[Object(o["e"])("p",null,[M,Object(o["e"])("b",null,Object(o["u"])(e.ventilationRate()),1),_,E])])])}var A=n("d4ec"),V=n("bee2"),R=n("262e"),q=n("2caf"),H=n("ce1f"),N=function(e){Object(R["a"])(n,e);var t=Object(q["a"])(n);function n(){var e;return Object(A["a"])(this,n),e=t.apply(this,arguments),e.outdoorsPpm=0,e.indoorsPeakPpm=0,e.declined63Time=0,e}return Object(V["a"])(n,[{key:"excessPpm",value:function(){return this.indoorsPeakPpm-this.outdoorsPpm}},{key:"declined63Ppm",value:function(){var e=.37;return this.outdoorsPpm+e*this.excessPpm()}},{key:"ventilationRate",value:function(){var e=1/this.declined63Time;return Math.round(1e3*e)/1e3}}]),n}(H["a"]);n("e69a");N.render=S;var U=N,F=[{path:"/",name:"Home",component:U},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],I=Object(l["a"])({history:Object(l["b"])("/"),routes:F}),J=I,L=n("5502"),B=Object(L["a"])({state:{},mutations:{},actions:{},modules:{}});Object(o["b"])(u).use(B).use(J).mount("#app")},e69a:function(e,t,n){"use strict";n("286d")}});
//# sourceMappingURL=app.67504a0c.js.map