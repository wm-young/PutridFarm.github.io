(function(e){function t(t){for(var r,o,i=t[0],u=t[1],f=t[2],l=0,s=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&s.push(c[o][0]),c[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);b&&b(t);while(s.length)s.shift()();return a.push.apply(a,f||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==c[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={index:0},c={index:0},a=[];function i(e){return u.p+"js/"+({about:"about",career:"career"}[e]||e)+"."+{about:"23794763",career:"a55d4cce"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={career:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",career:"career"}[e]||e)+"."+{about:"31d6cfe0",career:"5a5ed901"}[e]+".css",c=u.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var f=a[i],l=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===r||l===c))return t()}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){f=s[i],l=f.getAttribute("data-href");if(l===r||l===c)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],b.parentNode.removeChild(b),n(a)},b.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(b)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var f,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var s=new Error;f=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}c[e]=void 0}};var b=setTimeout((function(){f({type:"timeout",target:l})}),12e4);l.onerror=l.onload=f,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],l=f.push.bind(f);f.push=t,f=f.slice();for(var s=0;s<f.length;s++)t(f[s]);var b=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"211d":function(e,t,n){},2742:function(e,t,n){e.exports=n.p+"img/GitHub-Mark-120px-plus.ef7a02b6.png"},"37ba":function(e,t,n){e.exports=n.p+"img/code-mentor-logo.51d0627f.png"},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("7a23");const o={id:"app"},c={id:"banner"},a={id:"nav"},i=Object(r["e"])("Home"),u=Object(r["e"])(" | "),f=Object(r["e"])("Career"),l=Object(r["e"])(" | "),s=Object(r["e"])("Education"),b=Object(r["e"])(" | "),d=Object(r["e"])("Projects"),p=Object(r["e"])(" | "),h=Object(r["e"])("Hobbies"),j=Object(r["f"])("div",{id:"header"},[Object(r["f"])("h1",null,"Michael Young")],-1),O={id:"main"};function m(e,t,n,m,g,v){const w=Object(r["u"])("router-link"),y=Object(r["u"])("router-view");return Object(r["o"])(),Object(r["c"])("div",o,[Object(r["f"])("div",c,[Object(r["f"])("div",a,[Object(r["f"])(w,{to:"/"},{default:Object(r["z"])(()=>[i]),_:1}),u,Object(r["f"])(w,{to:"/career"},{default:Object(r["z"])(()=>[f]),_:1}),l,Object(r["f"])(w,{to:"/education"},{default:Object(r["z"])(()=>[s]),_:1}),b,Object(r["f"])(w,{to:"/projects"},{default:Object(r["z"])(()=>[d]),_:1}),p,Object(r["f"])(w,{to:"/hobbies"},{default:Object(r["z"])(()=>[h]),_:1})]),j]),Object(r["f"])("div",O,[Object(r["f"])(y)])])}n("64be");const g={};g.render=m;var v=g,w=n("6c02"),y=n("2742"),x=n.n(y),k=n("d723"),P=n.n(k),_=n("37ba"),E=n.n(_);const A={class:"home"},C=Object(r["f"])("h2",null,"Portfolio",-1),L=Object(r["f"])("p",null,"A work in progress of my personal website. (Last Updated: Oct 15, 2020)",-1),S=Object(r["f"])("div",{id:"links"},[Object(r["f"])("div",{style:{padding:"20px"}},[Object(r["f"])("a",{href:"https://github.com/PutridFarm"},[Object(r["f"])("img",{src:x.a})])]),Object(r["f"])("div",{style:{padding:"20px"}},[Object(r["f"])("a",{href:"https://www.linkedin.com/in/michael-young-01a83886/"},[Object(r["f"])("img",{src:P.a,width:"160"})])]),Object(r["f"])("div",{style:{padding:"20px"}},[Object(r["f"])("a",{href:"https://www.linkedin.com/in/michael-young-01a83886/"},[Object(r["f"])("img",{src:E.a,width:"160"})])])],-1),T=Object(r["f"])("h2",null,"Interesting Links",-1),H=Object(r["f"])("p",null,"A few websites and articles that I find interesting and would like to share.",-1),M=Object(r["f"])("ul",null,[Object(r["f"])("li",null,[Object(r["f"])("a",{href:"https://www.ecosia.org/"},"Ecosia"),Object(r["e"])("- Plant Trees by searching the web!")]),Object(r["f"])("li",null,[Object(r["f"])("a",{href:"https://orb.farm/"},"Orb Farm"),Object(r["e"])(" - A neat little game where you can create your own pixelated environment")]),Object(r["f"])("li",null,[Object(r["f"])("a",{href:"https://www.gnoosic.com/"},"Gnoosic"),Object(r["e"])(" - Discover new music by building a web of your favourite artists")])],-1);function z(e,t,n,o,c,a){return Object(r["o"])(),Object(r["c"])("div",A,[C,L,S,T,H,M])}n("dfd4");const N={};N.render=z;var I=N;const B=[{path:"/",name:"Home",component:I},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/career",name:"Career",component:function(){return n.e("career").then(n.bind(null,"6990"))}},{path:"/education",name:"Education",component:function(){return n.e("career").then(n.bind(null,"7a0c"))}},{path:"/projects",name:"Projects",component:function(){return n.e("career").then(n.bind(null,"acca"))}},{path:"/hobbies",name:"Hobbies",component:function(){return n.e("career").then(n.bind(null,"048b"))}}],D=Object(w["a"])({history:Object(w["b"])(),routes:B});var F=D;Object(r["b"])(v).use(F).mount("#app")},"64be":function(e,t,n){"use strict";n("c894")},c894:function(e,t,n){},d723:function(e,t,n){e.exports=n.p+"img/LI-Logo.c24cde28.png"},dfd4:function(e,t,n){"use strict";n("211d")}});
//# sourceMappingURL=index.67065de3.js.map