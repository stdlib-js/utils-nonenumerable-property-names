// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).nonEnumerablePropertyNames=t()}(this,(function(){"use strict";function r(r){var t=r.default;if("function"==typeof t){var e=function(){return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var t=void 0!==Object.getOwnPropertyNames,e=Object.getOwnPropertyNames;var n=function(r){return e(Object(r))};var o=function(r){return Object.keys(Object(r))},i=o;var u=function(){return function(){return 2!==(i(arguments)||"").length}(1,2)},f=void 0!==Object.keys;var c=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var a=function(){return c&&"symbol"==typeof Symbol.toStringTag},l=Object.prototype.toString,p=l;var v=function(r){return p.call(r)},s=Object.prototype.hasOwnProperty;var y=function(r,t){return null!=r&&s.call(r,t)},b="function"==typeof Symbol?Symbol.toStringTag:"",g=y,d=b,m=l;var j=v,h=function(r){var t,e,n;if(null==r)return m.call(r);e=r[d],t=g(r,d);try{r[d]=void 0}catch(t){return m.call(r)}return n=m.call(r),t?r[d]=e:delete r[d],n},w=a()?h:j,O=w;var _,P=function(r){return"[object Arguments]"===O(r)},S=P;_=function(){return S(arguments)}();var E=_,I="function"==typeof Object.defineProperty?Object.defineProperty:null;var T=function(){try{return I({},"x",{}),!0}catch(r){return!1}},A=Object.defineProperty,N=Object.prototype,k=N.toString,x=N.__defineGetter__,B=N.__defineSetter__,V=N.__lookupGetter__,F=N.__lookupSetter__;var G=function(r,t,e){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===k.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(V.call(r,t)||F.call(r,t)?(n=r.__proto__,r.__proto__=N,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&x&&x.call(r,t,e.get),u&&B&&B.call(r,t,e.set),r},L=A,M=G,X=T()?L:M;var Y=function(r,t,e){X(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},C=Y;var D=function(r){return"string"==typeof r},H=String.prototype.valueOf;var R=w,W=function(r){try{return H.call(r),!0}catch(r){return!1}},z=a();var U=function(r){return"object"==typeof r&&(r instanceof String||(z?W(r):"[object String]"===R(r)))},q=D,J=U;var K=C,Q=function(r){return q(r)||J(r)},Z=U;K(Q,"isPrimitive",D),K(Q,"isObject",Z);var $=Q;var rr=function(r){return"number"==typeof r},tr=Number,er=tr.prototype.toString;var nr=w,or=tr,ir=function(r){try{return er.call(r),!0}catch(r){return!1}},ur=a();var fr=function(r){return"object"==typeof r&&(r instanceof or||(ur?ir(r):"[object Number]"===nr(r)))},cr=rr,ar=fr;var lr=C,pr=function(r){return cr(r)||ar(r)},vr=fr;lr(pr,"isPrimitive",rr),lr(pr,"isObject",vr);var sr=pr;var yr=function(r){return r!=r},br=sr.isPrimitive,gr=yr;var dr=function(r){return br(r)&&gr(r)},mr=sr.isObject,jr=yr;var hr=function(r){return mr(r)&&jr(r.valueOf())},wr=dr,Or=hr;var _r=C,Pr=function(r){return wr(r)||Or(r)},Sr=hr;_r(Pr,"isPrimitive",dr),_r(Pr,"isObject",Sr);var Er=Pr,Ir=Number.POSITIVE_INFINITY,Tr=tr.NEGATIVE_INFINITY,Ar=Math.floor;var Nr=function(r){return Ar(r)===r},kr=Ir,xr=Tr,Br=Nr;var Vr=function(r){return r<kr&&r>xr&&Br(r)},Fr=sr.isPrimitive,Gr=Vr;var Lr=function(r){return Fr(r)&&Gr(r)},Mr=sr.isObject,Xr=Vr;var Yr=function(r){return Mr(r)&&Xr(r.valueOf())},Cr=Lr,Dr=Yr;var Hr=C,Rr=function(r){return Cr(r)||Dr(r)},Wr=Yr;Hr(Rr,"isPrimitive",Lr),Hr(Rr,"isObject",Wr);var zr,Ur=Rr,qr=Object.prototype.propertyIsEnumerable;zr=!qr.call("beep","0");var Jr=$,Kr=Er.isPrimitive,Qr=Ur.isPrimitive,Zr=qr,$r=zr;var rt=function(r,t){var e;return null!=r&&(!(e=Zr.call(r,t))&&$r&&Jr(r)?!Kr(t=+t)&&Qr(t)&&t>=0&&t<r.length:e)},tt=rt,et=w;var nt=Array.isArray?Array.isArray:function(r){return"[object Array]"===et(r)},ot=y,it=tt,ut=nt,ft=Nr;var ct=E?P:function(r){return null!==r&&"object"==typeof r&&!ut(r)&&"number"==typeof r.length&&ft(r.length)&&r.length>=0&&r.length<=4294967295&&ot(r,"callee")&&!it(r,"callee")},at=ct,lt=o,pt=Array.prototype.slice;var vt=function(r){return at(r)?lt(pt.call(r)):lt(r)},st=nt;var yt=function(r){return null!==r&&"object"==typeof r};C(yt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!st(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(yt));var bt=yt;var gt=tt((function(){}),"prototype"),dt=!tt({toString:null},"toString"),mt=Nr;var jt=Er,ht=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&mt(r.length)&&r.length>=0&&r.length<=9007199254740991},wt=$.isPrimitive,Ot=Ur.isPrimitive;var _t=function(r,t,e){var n,o;if(!ht(r)&&!wt(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!Ot(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(jt(t)){for(;o<n;o++)if(jt(r[o]))return o}else for(;o<n;o++)if(r[o]===t)return o;return-1},Pt=_t,St=/./;var Et=function(r){return"boolean"==typeof r},It=Boolean.prototype.toString;var Tt=w,At=function(r){try{return It.call(r),!0}catch(r){return!1}},Nt=a();var kt=function(r){return"object"==typeof r&&(r instanceof Boolean||(Nt?At(r):"[object Boolean]"===Tt(r)))},xt=Et,Bt=kt;var Vt=C,Ft=function(r){return xt(r)||Bt(r)},Gt=kt;Vt(Ft,"isPrimitive",Et),Vt(Ft,"isObject",Gt);var Lt=Ft;var Mt=function(){return new Function("return this;")()},Xt="object"==typeof self?self:null,Yt="object"==typeof window?window:null,Ct="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Dt="object"==typeof Ct?Ct:null;module.exports=Dt;var Ht=Lt.isPrimitive,Rt=Mt,Wt=Xt,zt=Yt,Ut=r(Object.freeze({__proto__:null}));var qt=function(r){if(arguments.length){if(!Ht(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Rt()}if(Wt)return Wt;if(zt)return zt;if(Ut)return Ut;throw new Error("unexpected error. Unable to resolve global object.")},Jt=qt(),Kt=Jt.document&&Jt.document.childNodes,Qt=Int8Array,Zt=St,$t=Kt,re=Qt;var te=function(){return"function"==typeof Zt||"object"==typeof re||"function"==typeof $t};var ee=function(){return/^\s*function\s*([^(]*)/i},ne=ee;C(ne,"REGEXP",ee());var oe=bt;var ie=w,ue=ne.REGEXP,fe=function(r){return oe(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var ce=function(r){var t,e,n;if(("Object"===(e=ie(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=ue.exec(n.toString()))return t[1]}return fe(r)?"Buffer":e},ae=ce;var le=ce;var pe=function(r){var t;return null===r?"null":"object"===(t=typeof r)?ae(r).toLowerCase():t},ve=function(r){return le(r).toLowerCase()},se=te()?ve:pe;var ye,be=function(r){return r.constructor&&r.constructor.prototype===r},ge="undefined"==typeof window?void 0:window,de=y,me=Pt,je=se,he=be,we=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Oe=ge;ye=function(){var r;if("undefined"===je(Oe))return!1;for(r in Oe)try{-1===me(we,r)&&de(Oe,r)&&null!==Oe[r]&&"object"===je(Oe[r])&&he(Oe[r])}catch(r){return!0}return!1}();var _e="undefined"!=typeof window,Pe=ye,Se=be,Ee=_e;var Ie=bt,Te=y,Ae=ct,Ne=gt,ke=dt,xe=function(r){if(!1===Ee&&!Pe)return Se(r);try{return Se(r)}catch(r){return!1}},Be=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Ve=o,Fe=vt,Ge=function(r){var t,e,n,o,i,u,f;if(o=[],Ae(r)){for(f=0;f<r.length;f++)o.push(f.toString());return o}if("string"==typeof r){if(r.length>0&&!Te(r,"0"))for(f=0;f<r.length;f++)o.push(f.toString())}else{if(!1===(n="function"==typeof r)&&!Ie(r))return o;e=Ne&&n}for(i in r)e&&"prototype"===i||!Te(r,i)||o.push(String(i));if(ke)for(t=xe(r),f=0;f<Be.length;f++)u=Be[f],t&&"constructor"===u||!Te(r,u)||o.push(String(u));return o},Le=f?u()?Fe:Ve:Ge;var Me=t?n:function(r){return Le(Object(r))},Xe=y,Ye=tt;var Ce=function(r,t){return!1!==Xe(r,t)&&!1===Ye(r,t)};return function(r){var t,e,n;if(null==r)return[];for(t=Me(Object(r)),n=0,e=0;e<t.length;e++)Ce(r,t[e])&&(t[n]=t[e],n+=1);return t.length=n,t}}));
//# sourceMappingURL=browser.js.map
