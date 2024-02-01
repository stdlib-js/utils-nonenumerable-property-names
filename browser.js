// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=void 0!==Object.getOwnPropertyNames,r=Object,t=r.getOwnPropertyNames;function n(e){return Object.keys(Object(e))}var i=void 0!==Object.keys,o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function a(){return o&&"symbol"==typeof Symbol.toStringTag}var u=Object.prototype.toString,c=Object.prototype.hasOwnProperty;function f(e,r){return null!=e&&c.call(e,r)}var l,s="function"==typeof Symbol?Symbol:void 0,p="function"==typeof s?s.toStringTag:"",g=a()?function(e){var r,t,n;if(null==e)return u.call(e);t=e[p],r=f(e,p);try{e[p]=void 0}catch(r){return u.call(e)}return n=u.call(e),r?e[p]=t:delete e[p],n}:function(e){return u.call(e)};function d(e){return"[object Arguments]"===g(e)}l=function(){return d(arguments)}();var h=l,y="function"==typeof Object.defineProperty?Object.defineProperty:null,b=Object.defineProperty;function v(e){return"number"==typeof e}function w(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function m(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+w(i):w(i)+e,n&&(e="-"+e)),e}var j=String.prototype.toLowerCase,S=String.prototype.toUpperCase;function E(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!v(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=m(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=m(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===S.call(e.specifier)?S.call(t):j.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function O(e){return"string"==typeof e}var _=Math.abs,k=String.prototype.toLowerCase,T=String.prototype.toUpperCase,x=String.prototype.replace,I=/e\+(\d)$/,A=/e-(\d)$/,P=/^(\d+)$/,V=/^(\d+)e/,N=/\.0$/,F=/\.0*e/,$=/(\..*[^0])0*e/;function C(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!v(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":_(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=x.call(t,$,"$1e"),t=x.call(t,F,"e"),t=x.call(t,N,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=x.call(t,I,"e+0$1"),t=x.call(t,A,"e-0$1"),e.alternate&&(t=x.call(t,P,"$1."),t=x.call(t,V,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===T.call(e.specifier)?T.call(t):k.call(t)}function B(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function L(e,r,t){var n=r-e.length;return n<0?e:e=t?e+B(n):B(n)+e}var R=String.fromCharCode,G=isNaN,W=Array.isArray;function X(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Z(e){var r,t,n,i,o,a,u,c,f;if(!W(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",u=1,c=0;c<e.length;c++)if(O(n=e[c]))a+=n;else{if(r=void 0!==n.precision,!(n=X(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,G(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,G(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=E(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!G(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=G(o)?String(n.arg):R(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=C(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=m(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=L(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Y(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function U(e){var r,t,n,i;for(t=[],i=0,n=M.exec(e);n;)(r=e.slice(i,M.lastIndex-n[0].length)).length&&t.push(r),t.push(Y(n)),i=M.lastIndex,n=M.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function H(e){return"string"==typeof e}function z(e){var r,t,n;if(!H(e))throw new TypeError(z("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=U(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return Z.apply(null,t)}var D,q=Object.prototype,J=q.toString,K=q.__defineGetter__,Q=q.__defineSetter__,ee=q.__lookupGetter__,re=q.__lookupSetter__;D=function(){try{return y({},"x",{}),!0}catch(e){return!1}}()?b:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===J.call(e))throw new TypeError(z("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===J.call(t))throw new TypeError(z("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(ee.call(e,r)||re.call(e,r)?(n=e.__proto__,e.__proto__=q,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&K&&K.call(e,r,t.get),a&&Q&&Q.call(e,r,t.set),e};var te=D;function ne(e,r,t){te(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ie(e){return"string"==typeof e}var oe=String.prototype.valueOf,ae=a();function ue(e){return"object"==typeof e&&(e instanceof String||(ae?function(e){try{return oe.call(e),!0}catch(e){return!1}}(e):"[object String]"===g(e)))}function ce(e){return ie(e)||ue(e)}function fe(e){return"number"==typeof e}ne(ce,"isPrimitive",ie),ne(ce,"isObject",ue);var le=Number,se=le.prototype.toString,pe=a();function ge(e){return"object"==typeof e&&(e instanceof le||(pe?function(e){try{return se.call(e),!0}catch(e){return!1}}(e):"[object Number]"===g(e)))}function de(e){return fe(e)||ge(e)}function he(e){return e!=e}function ye(e){return fe(e)&&he(e)}function be(e){return ge(e)&&he(e.valueOf())}function ve(e){return ye(e)||be(e)}ne(de,"isPrimitive",fe),ne(de,"isObject",ge),ne(ve,"isPrimitive",ye),ne(ve,"isObject",be);var we=Number.POSITIVE_INFINITY,me=le.NEGATIVE_INFINITY,je=Math.floor;function Se(e){return je(e)===e}function Ee(e){return e<we&&e>me&&Se(e)}function Oe(e){return fe(e)&&Ee(e)}function _e(e){return ge(e)&&Ee(e.valueOf())}function ke(e){return Oe(e)||_e(e)}ne(ke,"isPrimitive",Oe),ne(ke,"isObject",_e);var Te=Object.prototype.propertyIsEnumerable,xe=!Te.call("beep","0");function Ie(e,r){var t;return null!=e&&(!(t=Te.call(e,r))&&xe&&ce(e)?!ye(r=+r)&&Oe(r)&&r>=0&&r<e.length:t)}var Ae=Array.isArray?Array.isArray:function(e){return"[object Array]"===g(e)},Pe=h?d:function(e){return null!==e&&"object"==typeof e&&!Ae(e)&&"number"==typeof e.length&&Se(e.length)&&e.length>=0&&e.length<=4294967295&&f(e,"callee")&&!Ie(e,"callee")},Ve=Array.prototype.slice;function Ne(e){return null!==e&&"object"==typeof e}ne(Ne,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(z("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Ae(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Ne));var Fe=Ie((function(){}),"prototype"),$e=!Ie({toString:null},"toString");function Ce(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Se(e.length)&&e.length>=0&&e.length<=9007199254740991}function Be(e,r,t){var n,i;if(!Ce(e)&&!ie(e))throw new TypeError(z("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!Oe(t))throw new TypeError(z("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(ve(r)){for(;i<n;i++)if(ve(e[i]))return i}else for(;i<n;i++)if(e[i]===r)return i;return-1}var Le=/./;function Re(e){return"boolean"==typeof e}var Ge=Boolean,We=Boolean.prototype.toString,Xe=a();function Ze(e){return"object"==typeof e&&(e instanceof Ge||(Xe?function(e){try{return We.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===g(e)))}function Me(e){return Re(e)||Ze(e)}function Ye(){return new Function("return this;")()}ne(Me,"isPrimitive",Re),ne(Me,"isObject",Ze);var Ue="object"==typeof self?self:null,He="object"==typeof window?window:null,ze="object"==typeof globalThis?globalThis:null,De=function(e){if(arguments.length){if(!Re(e))throw new TypeError(z("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Ye()}if(ze)return ze;if(Ue)return Ue;if(He)return He;throw new Error("unexpected error. Unable to resolve global object.")}(),qe=De.document&&De.document.childNodes,Je=Int8Array;function Ke(){return/^\s*function\s*([^(]*)/i}var Qe=/^\s*function\s*([^(]*)/i;function er(e){var r,t,n,i;if(("Object"===(t=g(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Qe.exec(n.toString()))return r[1]}return Ne(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}ne(Ke,"REGEXP",Qe);var rr="function"==typeof Le||"object"==typeof Je||"function"==typeof qe?function(e){return er(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?er(e).toLowerCase():r};function tr(e){return e.constructor&&e.constructor.prototype===e}var nr,ir=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],or="undefined"==typeof window?void 0:window,ar=function(){var e;if("undefined"===rr(or))return!1;for(e in or)try{-1===Be(ir,e)&&f(or,e)&&null!==or[e]&&"object"===rr(or[e])&&tr(or[e])}catch(e){return!0}return!1}(),ur="undefined"!=typeof window,cr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];nr=i?function(){return 2!==(n(arguments)||"").length}(1,2)?function(e){return Pe(e)?n(Ve.call(e)):n(e)}:n:function(e){var r,t,n,i,o,a,u;if(i=[],Pe(e)){for(u=0;u<e.length;u++)i.push(u.toString());return i}if("string"==typeof e){if(e.length>0&&!f(e,"0"))for(u=0;u<e.length;u++)i.push(u.toString())}else{if(0==(n="function"==typeof e)&&!Ne(e))return i;t=Fe&&n}for(o in e)t&&"prototype"===o||!f(e,o)||i.push(String(o));if($e)for(r=function(e){if(!1===ur&&!ar)return tr(e);try{return tr(e)}catch(e){return!1}}(e),u=0;u<cr.length;u++)a=cr[u],r&&"constructor"===a||!f(e,a)||i.push(String(a));return i};var fr=nr,lr=e?function(e){return t(r(e))}:function(e){return fr(r(e))};function sr(e,r){return!1!==f(e,r)&&!1===Ie(e,r)}return function(e){var r,t,n;if(null==e)return[];for(r=lr(Object(e)),n=0,t=0;t<r.length;t++)sr(e,r[t])&&(r[n]=r[t],n+=1);return r.length=n,r}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).nonEnumerablePropertyNames=r();
//# sourceMappingURL=browser.js.map
