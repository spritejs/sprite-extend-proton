!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("spritejs"),require("Proton")):"function"==typeof define&&define.amd?define(["spritejs","Proton"],e):"object"==typeof exports?exports.ProtonRenderer=e(require("spritejs"),require("Proton")):(t.spritejs=t.spritejs||{},t.spritejs.ProtonRenderer=e(t.spritejs,t.Proton))}(window,function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/js/",n(n.s=96)}([function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(39),o=n(29);t.exports=function(t){return r(o(t))}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){t.exports=!n(8)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(11),o=n(42),i=n(30),u=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(1),o=n(0),i=n(43),u=n(10),f=n(3),c=function(t,e,n){var a,s,l,p=t&c.F,d=t&c.G,y=t&c.S,v=t&c.P,h=t&c.B,b=t&c.W,_=d?o:o[e]||(o[e]={}),g=_.prototype,m=d?r:y?r[e]:(r[e]||{}).prototype;for(a in d&&(n=e),n)(s=!p&&m&&void 0!==m[a])&&f(_,a)||(l=s?m[a]:n[a],_[a]=d&&"function"!=typeof m[a]?n[a]:h&&s?i(l,r):b&&m[a]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((_.virtual||(_.virtual={}))[a]=l,t&c.R&&g&&!g[a]&&u(g,a,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,n){var r=n(26)("wks"),o=n(13),i=n(1).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(5),o=n(16);t.exports=n(4)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(9);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports=!0},function(t,e,n){var r=n(40),o=n(25);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(12),o=n(16),i=n(2),u=n(30),f=n(3),c=n(42),a=Object.getOwnPropertyDescriptor;e.f=n(4)?a:function(t,e){if(t=i(t),e=u(e,!0),c)try{return a(t,e)}catch(t){}if(f(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(1),o=n(0),i=n(14),u=n(19),f=n(5).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||f(e,t,{value:u.f(t)})}},function(t,e,n){e.f=n(7)},function(t,e,n){var r=n(5).f,o=n(3),i=n(7)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(11),o=n(73),i=n(25),u=n(27)("IE_PROTO"),f=function(){},c=function(){var t,e=n(41)("iframe"),r=i.length;for(e.style.display="none",n(72).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(f.prototype=r(t),n=new f,f.prototype=null,n[u]=t):n=c(),void 0===e?n:o(n,e)}},function(t,e){t.exports={}},function(t,e,n){var r=n(29);t.exports=function(t){return Object(r(t))}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(0),o=n(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(14)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(26)("keys"),o=n(13);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(9);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(40),o=n(25).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){t.exports=n(10)},function(t,e,n){"use strict";var r=n(14),o=n(6),i=n(32),u=n(10),f=n(22),c=n(74),a=n(20),s=n(36),l=n(7)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,y,v,h,b){c(n,e,y);var _,g,m,x=function(t){if(!p&&t in w)return w[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},O=e+" Iterator",S="values"==v,j=!1,w=t.prototype,P=w[l]||w["@@iterator"]||v&&w[v],M=P||x(v),E=v?S?x("entries"):M:void 0,T="Array"==e&&w.entries||P;if(T&&(m=s(T.call(new t)))!==Object.prototype&&m.next&&(a(m,O,!0),r||"function"==typeof m[l]||u(m,l,d)),S&&P&&"values"!==P.name&&(j=!0,M=function(){return P.call(this)}),r&&!b||!p&&!j&&w[l]||u(w,l,M),f[e]=M,f[O]=d,v)if(_={values:S?M:x("values"),keys:h?M:x("keys"),entries:E},b)for(g in _)g in w||i(w,g,_[g]);else o(o.P+o.F*(p||j),e,_);return _}},function(t,e,n){"use strict";e.__esModule=!0;var r=u(n(78)),o=u(n(67)),i="function"==typeof o.default&&"symbol"==typeof r.default?function(t){return typeof t}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":typeof t};function u(t){return t&&t.__esModule?t:{default:t}}e.default="function"==typeof o.default&&"symbol"===i(r.default)?function(t){return void 0===t?"undefined":i(t)}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":void 0===t?"undefined":i(t)}},function(t,e,n){var r=n(6),o=n(0),i=n(8);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},function(t,e,n){var r=n(3),o=n(23),i=n(27)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){t.exports={default:n(86),__esModule:!0}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(38);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(3),o=n(2),i=n(89)(!1),u=n(27)("IE_PROTO");t.exports=function(t,e){var n,f=o(t),c=0,a=[];for(n in f)n!=u&&r(f,n)&&a.push(n);for(;e.length>c;)r(f,n=e[c++])&&(~i(a,n)||a.push(n));return a}},function(t,e,n){var r=n(9),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){t.exports=!n(4)&&!n(8)(function(){return 7!=Object.defineProperty(n(41)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(91);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e,n){var r=n(6);r(r.S,"Object",{create:n(21)})},function(t,e,n){n(46);var r=n(0).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){t.exports={default:n(47),__esModule:!0}},function(t,e,n){var r=n(9),o=n(11),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(43)(Function.call,n(17).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},function(t,e,n){var r=n(6);r(r.S,"Object",{setPrototypeOf:n(49).set})},function(t,e,n){n(50),t.exports=n(0).Object.setPrototypeOf},function(t,e,n){t.exports={default:n(51),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r=u(n(52)),o=u(n(48)),i=u(n(34));function u(t){return t&&t.__esModule?t:{default:t}}e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,i.default)(e)));t.prototype=(0,o.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(r.default?(0,r.default)(t,e):t.__proto__=e)}},function(t,e,n){var r=n(2),o=n(17).f;n(35)("getOwnPropertyDescriptor",function(){return function(t,e){return o(r(t),e)}})},function(t,e,n){n(54);var r=n(0).Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}},function(t,e,n){t.exports={default:n(55),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r=i(n(37)),o=i(n(56));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function t(e,n,i){null===e&&(e=Function.prototype);var u=(0,o.default)(e,n);if(void 0===u){var f=(0,r.default)(e);return null===f?void 0:t(f,n,i)}if("value"in u)return u.value;var c=u.get;return void 0!==c?c.call(i):void 0}},function(t,e,n){n(18)("observable")},function(t,e,n){n(18)("asyncIterator")},function(t,e){},function(t,e,n){var r=n(2),o=n(31).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},function(t,e,n){var r=n(38);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(15),o=n(24),i=n(12);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,f=n(t),c=i.f,a=0;f.length>a;)c.call(t,u=f[a++])&&e.push(u);return e}},function(t,e,n){var r=n(13)("meta"),o=n(9),i=n(3),u=n(5).f,f=0,c=Object.isExtensible||function(){return!0},a=!n(8)(function(){return c(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++f,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!e)return"E";s(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;s(t)}return t[r].w},onFreeze:function(t){return a&&l.NEED&&c(t)&&!i(t,r)&&s(t),t}}},function(t,e,n){"use strict";var r=n(1),o=n(3),i=n(4),u=n(6),f=n(32),c=n(64).KEY,a=n(8),s=n(26),l=n(20),p=n(13),d=n(7),y=n(19),v=n(18),h=n(63),b=n(62),_=n(11),g=n(9),m=n(2),x=n(30),O=n(16),S=n(21),j=n(61),w=n(17),P=n(5),M=n(15),E=w.f,T=P.f,k=j.f,L=r.Symbol,F=r.JSON,C=F&&F.stringify,A=d("_hidden"),R=d("toPrimitive"),N={}.propertyIsEnumerable,D=s("symbol-registry"),I=s("symbols"),G=s("op-symbols"),V=Object.prototype,q="function"==typeof L,W=r.QObject,z=!W||!W.prototype||!W.prototype.findChild,H=i&&a(function(){return 7!=S(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=E(V,e);r&&delete V[e],T(t,e,n),r&&t!==V&&T(V,e,r)}:T,J=function(t){var e=I[t]=S(L.prototype);return e._k=t,e},B=q&&"symbol"==typeof L.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof L},K=function(t,e,n){return t===V&&K(G,e,n),_(t),e=x(e,!0),_(n),o(I,e)?(n.enumerable?(o(t,A)&&t[A][e]&&(t[A][e]=!1),n=S(n,{enumerable:O(0,!1)})):(o(t,A)||T(t,A,O(1,{})),t[A][e]=!0),H(t,e,n)):T(t,e,n)},U=function(t,e){_(t);for(var n,r=h(e=m(e)),o=0,i=r.length;i>o;)K(t,n=r[o++],e[n]);return t},Y=function(t){var e=N.call(this,t=x(t,!0));return!(this===V&&o(I,t)&&!o(G,t))&&(!(e||!o(this,t)||!o(I,t)||o(this,A)&&this[A][t])||e)},Q=function(t,e){if(t=m(t),e=x(e,!0),t!==V||!o(I,e)||o(G,e)){var n=E(t,e);return!n||!o(I,e)||o(t,A)&&t[A][e]||(n.enumerable=!0),n}},X=function(t){for(var e,n=k(m(t)),r=[],i=0;n.length>i;)o(I,e=n[i++])||e==A||e==c||r.push(e);return r},Z=function(t){for(var e,n=t===V,r=k(n?G:m(t)),i=[],u=0;r.length>u;)!o(I,e=r[u++])||n&&!o(V,e)||i.push(I[e]);return i};q||(f((L=function(){if(this instanceof L)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===V&&e.call(G,n),o(this,A)&&o(this[A],t)&&(this[A][t]=!1),H(this,t,O(1,n))};return i&&z&&H(V,t,{configurable:!0,set:e}),J(t)}).prototype,"toString",function(){return this._k}),w.f=Q,P.f=K,n(31).f=j.f=X,n(12).f=Y,n(24).f=Z,i&&!n(14)&&f(V,"propertyIsEnumerable",Y,!0),y.f=function(t){return J(d(t))}),u(u.G+u.W+u.F*!q,{Symbol:L});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)d($[tt++]);for(var et=M(d.store),nt=0;et.length>nt;)v(et[nt++]);u(u.S+u.F*!q,"Symbol",{for:function(t){return o(D,t+="")?D[t]:D[t]=L(t)},keyFor:function(t){if(!B(t))throw TypeError(t+" is not a symbol!");for(var e in D)if(D[e]===t)return e},useSetter:function(){z=!0},useSimple:function(){z=!1}}),u(u.S+u.F*!q,"Object",{create:function(t,e){return void 0===e?S(t):U(S(t),e)},defineProperty:K,defineProperties:U,getOwnPropertyDescriptor:Q,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),F&&u(u.S+u.F*(!q||a(function(){var t=L();return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(g(e)||void 0!==t)&&!B(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!B(e))return e}),r[1]=e,C.apply(F,r)}}),L.prototype[R]||n(10)(L.prototype,R,L.prototype.valueOf),l(L,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){n(65),n(60),n(59),n(58),t.exports=n(0).Symbol},function(t,e,n){t.exports={default:n(66),__esModule:!0}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e){t.exports=function(){}},function(t,e,n){"use strict";var r=n(69),o=n(68),i=n(22),u=n(2);t.exports=n(33)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){n(70);for(var r=n(1),o=n(10),i=n(22),u=n(7)("toStringTag"),f="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<f.length;c++){var a=f[c],s=r[a],l=s&&s.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(5),o=n(11),i=n(15);t.exports=n(4)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),f=u.length,c=0;f>c;)r.f(t,n=u[c++],e[n]);return t}},function(t,e,n){"use strict";var r=n(21),o=n(16),i=n(20),u={};n(10)(u,n(7)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(28),o=n(29);t.exports=function(t){return function(e,n){var i,u,f=String(o(e)),c=r(n),a=f.length;return c<0||c>=a?t?"":void 0:(i=f.charCodeAt(c))<55296||i>56319||c+1===a||(u=f.charCodeAt(c+1))<56320||u>57343?t?f.charAt(c):i:t?f.slice(c,c+2):u-56320+(i-55296<<10)+65536}}},function(t,e,n){"use strict";var r=n(75)(!0);n(33)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){n(76),n(71),t.exports=n(19).f("iterator")},function(t,e,n){t.exports={default:n(77),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r,o=n(34),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,i.default)(e))&&"function"!=typeof e?t:e}},function(t,e,n){var r=n(6);r(r.S+r.F*!n(4),"Object",{defineProperty:n(5).f})},function(t,e,n){n(80);var r=n(0).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){t.exports={default:n(81),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r,o=n(82),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){var r=n(23),o=n(36);n(35)("getPrototypeOf",function(){return function(t){return o(r(t))}})},function(t,e,n){n(85),t.exports=n(0).Object.getPrototypeOf},function(t,e,n){var r=n(28),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(28),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(2),o=n(88),i=n(87);t.exports=function(t){return function(e,n,u){var f,c=r(e),a=o(c.length),s=i(u,a);if(t&&n!=n){for(;a>s;)if((f=c[s++])!=f)return!0}else for(;a>s;s++)if((t||s in c)&&c[s]===n)return t||s||0;return!t&&-1}}},function(t,e,n){"use strict";var r=n(15),o=n(24),i=n(12),u=n(23),f=n(39),c=Object.assign;t.exports=!c||n(8)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=u(t),c=arguments.length,a=1,s=o.f,l=i.f;c>a;)for(var p,d=f(arguments[a++]),y=s?r(d).concat(s(d)):r(d),v=y.length,h=0;v>h;)l.call(d,p=y[h++])&&(n[p]=d[p]);return n}:c},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(6);r(r.S+r.F,"Object",{assign:n(90)})},function(t,e,n){n(92),t.exports=n(0).Object.assign},function(t,e,n){t.exports={default:n(93),__esModule:!0}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=p(n(94)),o=p(n(37)),i=p(n(84)),u=p(n(83)),f=p(n(79)),c=p(n(57)),a=p(n(53)),s=n(45),l=n(44);function p(t){return t&&t.__esModule?t:{default:t}}function d(t,e){var n=e.idx;if(t.setTransform(n,null),t.setColorTransform(n,null),e.rgb){var r=e.rgb,o=r.r,i=r.g,u=r.b;t.setFillColor(n,[o,i,u,1])}t.opacity(n,e.alpha),t.translate(n,[e.p.x,e.p.y]),t.scale(n,[e.scale,e.scale],[e.p.x,e.p.y]),t.rotate(n,e.rotation,[e.p.x,e.p.y])}var y=function(t){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,i.default)(this,e);var r=(0,f.default)(this,(e.__proto__||(0,o.default)(e)).call(this,t));return r.attrs=n,r.name="SpriteRender",r}return(0,a.default)(e,t),(0,u.default)(e,[{key:"resize",value:function(t,n){(0,c.default)(e.prototype.__proto__||(0,o.default)(e.prototype),"resize",this).call(this,t,n),this.element.parent&&this.element.parent.setResolution&&this.element.parent.setResolution(t,n)}},{key:"onProtonUpdate",value:function(){this.element.render()}},{key:"createParticle",value:function(t){var e=new l.Sprite,n=t.radius;if(e.attributes.width=2*n,e.attributes.height=2*n,e.attributes.borderRadius=n,t.rgb){var o=t.rgb,i=o.r,u=o.g,f=o.b;e.attributes.bgcolor=[i,u,f,t.alpha]}return t.alpha&&(e.attributes.opacity=t.alpha),e.attr((0,r.default)(this.attrs,{id:t.id,name:t.name,anchor:.5,pos:[t.p.x,t.p.y],scale:[t.scale,t.scale],rotate:t.rotation})),e}},{key:"onParticleCreated",value:function(t){if(t.body){var e=t.body;this.cloud?this.cloud.amount++:(this.cloud=new l.Cloud(e),this._particles=[],this.element.append(this.cloud));var n=this.cloud.amount-1;t.idx=n,d(this.cloud,t),this._particles.push(t)}else{var r=this.createParticle(t);t.body=r,this.element.append(r)}}},{key:"onParticleUpdate",value:function(t){if(this.cloud)d(this.cloud,t);else{var e=t.body;if(t.rgb){var n=t.rgb,r=n.r,o=n.g,i=n.b;e.attributes.bgcolor=[r,o,i,t.alpha]}e.attr({pos:[t.p.x,t.p.y],scale:[t.scale,t.scale],rotate:t.rotation})}}},{key:"onParticleDead",value:function(t){if(this.cloud){for(var e=t.idx,n=this._particles,r=e+1;r<n.length;r++){var o=n[r];o.idx--,n[r-1]=o}n.pop(),this.cloud.delete(e)}else{t.body.remove(),t.body=null}}}]),e}(s.CustomRenderer);e.default=y},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(95),i=(r=o)&&r.__esModule?r:{default:r};e.default=i.default}]).default});