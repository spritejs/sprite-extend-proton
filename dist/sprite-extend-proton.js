!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("spritejs"),require("Proton")):"function"==typeof define&&define.amd?define(["spritejs","Proton"],e):"object"==typeof exports?exports.ProtonRenderer=e(require("spritejs"),require("Proton")):(t.spritejs=t.spritejs||{},t.spritejs.ProtonRenderer=e(t.spritejs,t.Proton))}(window,function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/js/",n(n.s=92)}([function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(75),o=n(28);t.exports=function(t){return r(o(t))}},function(t,e,n){t.exports=!n(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(11),o=n(37),i=n(25),u=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(26)("wks"),o=n(13),i=n(1).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(4),o=n(12);t.exports=n(3)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(1),o=n(0),i=n(38),u=n(8),f=n(5),c=function(t,e,n){var a,s,l,p=t&c.F,d=t&c.G,y=t&c.S,v=t&c.P,h=t&c.B,b=t&c.W,_=d?o:o[e]||(o[e]={}),m=_.prototype,x=d?r:y?r[e]:(r[e]||{}).prototype;for(a in d&&(n=e),n)(s=!p&&x&&void 0!==x[a])&&f(_,a)||(l=s?x[a]:n[a],_[a]=d&&"function"!=typeof x[a]?n[a]:h&&s?i(l,r):b&&x[a]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((_.virtual||(_.virtual={}))[a]=l,t&c.R&&m&&!m[a]&&u(m,a,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(7);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports=!0},function(t,e,n){var r=n(16),o=n(12),i=n(2),u=n(25),f=n(5),c=n(37),a=Object.getOwnPropertyDescriptor;e.f=n(3)?a:function(t,e){if(t=i(t),e=u(e,!0),c)try{return a(t,e)}catch(t){}if(f(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(1),o=n(0),i=n(14),u=n(18),f=n(4).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||f(e,t,{value:u.f(t)})}},function(t,e,n){e.f=n(6)},function(t,e,n){var r=n(4).f,o=n(5),i=n(6)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(32),o=n(20);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(11),o=n(76),i=n(20),u=n(27)("IE_PROTO"),f=function(){},c=function(){var t,e=n(36)("iframe"),r=i.length;for(e.style.display="none",n(71).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(f.prototype=r(t),n=new f,f.prototype=null,n[u]=t):n=c(),void 0===e?n:o(n,e)}},function(t,e){t.exports={}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(7);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(0),o=n(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(14)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(26)("keys"),o=n(13);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(32),o=n(20).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(5),o=n(2),i=n(74)(!1),u=n(27)("IE_PROTO");t.exports=function(t,e){var n,f=o(t),c=0,a=[];for(n in f)n!=u&&r(f,n)&&a.push(n);for(;e.length>c;)r(f,n=e[c++])&&(~i(a,n)||a.push(n));return a}},function(t,e,n){t.exports=n(8)},function(t,e,n){"use strict";var r=n(14),o=n(9),i=n(33),u=n(8),f=n(23),c=n(77),a=n(19),s=n(40),l=n(6)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,y,v,h,b){c(n,e,y);var _,m,x,O=function(t){if(!p&&t in w)return w[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},g=e+" Iterator",S="values"==v,j=!1,w=t.prototype,P=w[l]||w["@@iterator"]||v&&w[v],M=P||O(v),E=v?S?O("entries"):M:void 0,T="Array"==e&&w.entries||P;if(T&&(x=s(T.call(new t)))!==Object.prototype&&x.next&&(a(x,g,!0),r||"function"==typeof x[l]||u(x,l,d)),S&&P&&"values"!==P.name&&(j=!0,M=function(){return P.call(this)}),r&&!b||!p&&!j&&w[l]||u(w,l,M),f[e]=M,f[g]=d,v)if(_={values:S?M:O("values"),keys:h?M:O("keys"),entries:E},b)for(m in _)m in w||i(w,m,_[m]);else o(o.P+o.F*(p||j),e,_);return _}},function(t,e,n){"use strict";e.__esModule=!0;var r=u(n(81)),o=u(n(66)),i="function"==typeof o.default&&"symbol"==typeof r.default?function(t){return typeof t}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":typeof t};function u(t){return t&&t.__esModule?t:{default:t}}e.default="function"==typeof o.default&&"symbol"===i(r.default)?function(t){return void 0===t?"undefined":i(t)}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":void 0===t?"undefined":i(t)}},function(t,e,n){var r=n(7),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){t.exports=!n(3)&&!n(10)(function(){return 7!=Object.defineProperty(n(36)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(88);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(9),o=n(0),i=n(10);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},function(t,e,n){var r=n(5),o=n(41),i=n(27)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(28);t.exports=function(t){return Object(r(t))}},function(t,e,n){t.exports={default:n(90),__esModule:!0}},function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e,n){var r=n(9);r(r.S,"Object",{create:n(22)})},function(t,e,n){n(45);var r=n(0).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){t.exports={default:n(46),__esModule:!0}},function(t,e,n){var r=n(7),o=n(11),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(38)(Function.call,n(15).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},function(t,e,n){var r=n(9);r(r.S,"Object",{setPrototypeOf:n(48).set})},function(t,e,n){n(49),t.exports=n(0).Object.setPrototypeOf},function(t,e,n){t.exports={default:n(50),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r=u(n(51)),o=u(n(47)),i=u(n(35));function u(t){return t&&t.__esModule?t:{default:t}}e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,i.default)(e)));t.prototype=(0,o.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(r.default?(0,r.default)(t,e):t.__proto__=e)}},function(t,e,n){var r=n(2),o=n(15).f;n(39)("getOwnPropertyDescriptor",function(){return function(t,e){return o(r(t),e)}})},function(t,e,n){n(53);var r=n(0).Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}},function(t,e,n){t.exports={default:n(54),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r=i(n(42)),o=i(n(55));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function t(e,n,i){null===e&&(e=Function.prototype);var u=(0,o.default)(e,n);if(void 0===u){var f=(0,r.default)(e);return null===f?void 0:t(f,n,i)}if("value"in u)return u.value;var c=u.get;return void 0!==c?c.call(i):void 0}},function(t,e,n){n(17)("observable")},function(t,e,n){n(17)("asyncIterator")},function(t,e){},function(t,e,n){var r=n(2),o=n(29).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},function(t,e,n){var r=n(31);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(21),o=n(30),i=n(16);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,f=n(t),c=i.f,a=0;f.length>a;)c.call(t,u=f[a++])&&e.push(u);return e}},function(t,e,n){var r=n(13)("meta"),o=n(7),i=n(5),u=n(4).f,f=0,c=Object.isExtensible||function(){return!0},a=!n(10)(function(){return c(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++f,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!e)return"E";s(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;s(t)}return t[r].w},onFreeze:function(t){return a&&l.NEED&&c(t)&&!i(t,r)&&s(t),t}}},function(t,e,n){"use strict";var r=n(1),o=n(5),i=n(3),u=n(9),f=n(33),c=n(63).KEY,a=n(10),s=n(26),l=n(19),p=n(13),d=n(6),y=n(18),v=n(17),h=n(62),b=n(61),_=n(11),m=n(7),x=n(2),O=n(25),g=n(12),S=n(22),j=n(60),w=n(15),P=n(4),M=n(21),E=w.f,T=P.f,k=j.f,L=r.Symbol,F=r.JSON,C=F&&F.stringify,A=d("_hidden"),N=d("toPrimitive"),R={}.propertyIsEnumerable,D=s("symbol-registry"),I=s("symbols"),G=s("op-symbols"),V=Object.prototype,W="function"==typeof L,q=r.QObject,z=!q||!q.prototype||!q.prototype.findChild,H=i&&a(function(){return 7!=S(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=E(V,e);r&&delete V[e],T(t,e,n),r&&t!==V&&T(V,e,r)}:T,J=function(t){var e=I[t]=S(L.prototype);return e._k=t,e},B=W&&"symbol"==typeof L.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof L},K=function(t,e,n){return t===V&&K(G,e,n),_(t),e=O(e,!0),_(n),o(I,e)?(n.enumerable?(o(t,A)&&t[A][e]&&(t[A][e]=!1),n=S(n,{enumerable:g(0,!1)})):(o(t,A)||T(t,A,g(1,{})),t[A][e]=!0),H(t,e,n)):T(t,e,n)},U=function(t,e){_(t);for(var n,r=h(e=x(e)),o=0,i=r.length;i>o;)K(t,n=r[o++],e[n]);return t},Y=function(t){var e=R.call(this,t=O(t,!0));return!(this===V&&o(I,t)&&!o(G,t))&&(!(e||!o(this,t)||!o(I,t)||o(this,A)&&this[A][t])||e)},Q=function(t,e){if(t=x(t),e=O(e,!0),t!==V||!o(I,e)||o(G,e)){var n=E(t,e);return!n||!o(I,e)||o(t,A)&&t[A][e]||(n.enumerable=!0),n}},X=function(t){for(var e,n=k(x(t)),r=[],i=0;n.length>i;)o(I,e=n[i++])||e==A||e==c||r.push(e);return r},Z=function(t){for(var e,n=t===V,r=k(n?G:x(t)),i=[],u=0;r.length>u;)!o(I,e=r[u++])||n&&!o(V,e)||i.push(I[e]);return i};W||(f((L=function(){if(this instanceof L)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===V&&e.call(G,n),o(this,A)&&o(this[A],t)&&(this[A][t]=!1),H(this,t,g(1,n))};return i&&z&&H(V,t,{configurable:!0,set:e}),J(t)}).prototype,"toString",function(){return this._k}),w.f=Q,P.f=K,n(29).f=j.f=X,n(16).f=Y,n(30).f=Z,i&&!n(14)&&f(V,"propertyIsEnumerable",Y,!0),y.f=function(t){return J(d(t))}),u(u.G+u.W+u.F*!W,{Symbol:L});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)d($[tt++]);for(var et=M(d.store),nt=0;et.length>nt;)v(et[nt++]);u(u.S+u.F*!W,"Symbol",{for:function(t){return o(D,t+="")?D[t]:D[t]=L(t)},keyFor:function(t){if(!B(t))throw TypeError(t+" is not a symbol!");for(var e in D)if(D[e]===t)return e},useSetter:function(){z=!0},useSimple:function(){z=!1}}),u(u.S+u.F*!W,"Object",{create:function(t,e){return void 0===e?S(t):U(S(t),e)},defineProperty:K,defineProperties:U,getOwnPropertyDescriptor:Q,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),F&&u(u.S+u.F*(!W||a(function(){var t=L();return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(m(e)||void 0!==t)&&!B(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!B(e))return e}),r[1]=e,C.apply(F,r)}}),L.prototype[N]||n(8)(L.prototype,N,L.prototype.valueOf),l(L,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){n(64),n(59),n(58),n(57),t.exports=n(0).Symbol},function(t,e,n){t.exports={default:n(65),__esModule:!0}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e){t.exports=function(){}},function(t,e,n){"use strict";var r=n(68),o=n(67),i=n(23),u=n(2);t.exports=n(34)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){n(69);for(var r=n(1),o=n(8),i=n(23),u=n(6)("toStringTag"),f="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<f.length;c++){var a=f[c],s=r[a],l=s&&s.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(24),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(24),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(2),o=n(73),i=n(72);t.exports=function(t){return function(e,n,u){var f,c=r(e),a=o(c.length),s=i(u,a);if(t&&n!=n){for(;a>s;)if((f=c[s++])!=f)return!0}else for(;a>s;s++)if((t||s in c)&&c[s]===n)return t||s||0;return!t&&-1}}},function(t,e,n){var r=n(31);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(4),o=n(11),i=n(21);t.exports=n(3)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),f=u.length,c=0;f>c;)r.f(t,n=u[c++],e[n]);return t}},function(t,e,n){"use strict";var r=n(22),o=n(12),i=n(19),u={};n(8)(u,n(6)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(24),o=n(28);t.exports=function(t){return function(e,n){var i,u,f=String(o(e)),c=r(n),a=f.length;return c<0||c>=a?t?"":void 0:(i=f.charCodeAt(c))<55296||i>56319||c+1===a||(u=f.charCodeAt(c+1))<56320||u>57343?t?f.charAt(c):i:t?f.slice(c,c+2):u-56320+(i-55296<<10)+65536}}},function(t,e,n){"use strict";var r=n(78)(!0);n(34)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){n(79),n(70),t.exports=n(18).f("iterator")},function(t,e,n){t.exports={default:n(80),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r,o=n(35),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,i.default)(e))&&"function"!=typeof e?t:e}},function(t,e,n){var r=n(9);r(r.S+r.F*!n(3),"Object",{defineProperty:n(4).f})},function(t,e,n){n(83);var r=n(0).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){t.exports={default:n(84),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r,o=n(85),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(41),o=n(40);n(39)("getPrototypeOf",function(){return function(t){return o(r(t))}})},function(t,e,n){n(89),t.exports=n(0).Object.getPrototypeOf},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=l(n(42)),o=l(n(87)),i=l(n(86)),u=l(n(82)),f=l(n(56)),c=l(n(52)),a=n(44),s=n(43);function l(t){return t&&t.__esModule?t:{default:t}}function p(t,e,n){if(e.setTransform(t,null),e.setColorTransform(t,null),n.color){var r=n.rgb,o=r.r,i=r.g,u=r.b;e.setFillColor(t,[o,i,u,1])}e.setOpacity(t,n.alpha),e.translate(t,[n.p.x,n.p.y]);var f=n.scale,c=n.body.attributes.radius;n.radius&&c&&(f*=n.radius/c),e.scale(t,[f,f],[n.p.x,n.p.y]),e.rotate(t,n.rotation,[n.p.x,n.p.y])}var d=function(t){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,o.default)(this,e);var i=(0,u.default)(this,(e.__proto__||(0,r.default)(e)).call(this,t));return i.attrs=n,i.name="SpriteRender",i}return(0,c.default)(e,t),(0,i.default)(e,[{key:"resize",value:function(t,n){(0,f.default)(e.prototype.__proto__||(0,r.default)(e.prototype),"resize",this).call(this,t,n),this.element.parent&&this.element.parent.setResolution&&this.element.parent.setResolution(t,n)}},{key:"onProtonUpdate",value:function(){this.element.render()}},{key:"onParticleCreated",value:function(t){if(!t.body){var e=new s.Arc({radius:100});t.body=e}var n=t.body;this.cloud?this.cloud.amount++:(this.cloud=new s.Cloud(n),this._particles=[],this.element.append(this.cloud)),p(this.cloud.amount-1,this.cloud,t),this._particles.push(t)}},{key:"onParticleUpdate",value:function(t){p(this._particles.indexOf(t),this.cloud,t)}},{key:"onParticleDead",value:function(t){var e=this._particles.indexOf(t);this._particles.splice(e,1),this.cloud.delete(e)}}]),e}(a.CustomRenderer);e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(91),i=(r=o)&&r.__esModule?r:{default:r};e.default=i.default}]).default});