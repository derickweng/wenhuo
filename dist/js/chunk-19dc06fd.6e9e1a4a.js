(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19dc06fd"],{"0538":function(t,e,n){"use strict";var r=n("1c0b"),o=n("861d"),i=[].slice,c={},u=function(t,e,n){if(!(e in c)){for(var r=[],o=0;o<e;o++)r[o]="a["+o+"]";c[e]=Function("C,a","return new C("+r.join(",")+")")}return c[e](t,n)};t.exports=Function.bind||function(t){var e=r(this),n=i.call(arguments,1),c=function(){var r=n.concat(i.call(arguments));return this instanceof c?u(e,r.length,r):e.apply(t,r)};return o(e.prototype)&&(c.prototype=e.prototype),c}},3410:function(t,e,n){var r=n("23e7"),o=n("d039"),i=n("7b0b"),c=n("e163"),u=n("e177"),a=o((function(){c(1)}));r({target:"Object",stat:!0,forced:a,sham:!u},{getPrototypeOf:function(t){return c(i(t))}})},"3e94":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("canvas",{ref:"box",attrs:{id:"canvas"},on:{mouseenter:t.mouseenter,mouseleave:t.mouseleave}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"mouse"},[t._v("鼠标放上来喔")])])},o=[];n("cb29");function i(t,e){return i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(t,e)}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}n("4ae1"),n("3410");function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}n("d3b7"),n("25f0");function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}n("a4d3"),n("e01a"),n("d28b"),n("e260"),n("3ca3"),n("ddb0");function s(t){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t,e){return!e||"object"!==s(e)&&"function"!==typeof e?f(t):e}function h(t){var e=a();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t,e,n){return e&&d(t.prototype,e),n&&d(t,n),t}var v=n("f2ef"),b={data:function(){return{time:1,isshow:!0}},methods:{mouseenter:function(){this.isshow=!1},mouseleave:function(){this.isshow=!0}},mounted:function(){var t=document.getElementById("canvas"),e=t.getContext("2d");t.width=1e3,t.height=600,t.style.backgroundColor="#000";var n=function(){function t(e,n,r){p(this,t),this.x=e,this.y=n,this.color=r,this.r=40}return y(t,[{key:"render",value:function(){e.save(),e.beginPath(),e.arc(this.x,this.y,this.r,0,2*Math.PI),e.fillStyle=this.color,e.fill(),e.restore()}}]),t}(),r=function(t){c(n,t);var e=h(n);function n(t,r,o){var i;return p(this,n),i=e.call(this,t,r,o),i.dX=v["a"].random(-5,5),i.dY=v["a"].random(-5,5),i.dR=v["a"].random(1,3),i}return y(n,[{key:"upDate",value:function(){this.x+=this.dX,this.y+=this.dY,this.r-=this.dR,this.r<0&&(this.r=0)}}]),n}(n),o=[],i=["red","green","blue","yellow","purple","pink","orange"];t.addEventListener("mousemove",(function(t){o.push(new r(t.offsetX,t.offsetY,i[v["a"].random(0,i.length-1)]))})),this.time=setInterval((function(){e.clearRect(0,0,t.width,t.height),console.log(1);for(var n=0;n<o.length;n++)o[n].render(),o[n].upDate()}),50)},beforeDestroy:function(){clearInterval(this.time)}},m=b,w=(n("af9e"),n("2877")),g=Object(w["a"])(m,r,o,!1,null,null,null);e["default"]=g.exports},"4ae1":function(t,e,n){var r=n("23e7"),o=n("d066"),i=n("1c0b"),c=n("825a"),u=n("861d"),a=n("7c73"),s=n("0538"),f=n("d039"),l=o("Reflect","construct"),h=f((function(){function t(){}return!(l((function(){}),[],t)instanceof t)})),p=!f((function(){l((function(){}))})),d=h||p;r({target:"Reflect",stat:!0,forced:d,sham:d},{construct:function(t,e){i(t),c(e);var n=arguments.length<3?t:i(arguments[2]);if(p&&!h)return l(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(s.apply(t,r))}var o=n.prototype,f=a(u(o)?o:Object.prototype),d=Function.apply.call(t,f,e);return u(d)?d:f}})},5197:function(t,e,n){},"81d5":function(t,e,n){"use strict";var r=n("7b0b"),o=n("23cb"),i=n("50c4");t.exports=function(t){var e=r(this),n=i(e.length),c=arguments.length,u=o(c>1?arguments[1]:void 0,n),a=c>2?arguments[2]:void 0,s=void 0===a?n:o(a,n);while(s>u)e[u++]=t;return e}},af9e:function(t,e,n){"use strict";var r=n("5197"),o=n.n(r);o.a},cb29:function(t,e,n){var r=n("23e7"),o=n("81d5"),i=n("44d2");r({target:"Array",proto:!0},{fill:o}),i("fill")}}]);
//# sourceMappingURL=chunk-19dc06fd.6e9e1a4a.js.map