// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){var t=r.default;if("function"==typeof t){var e=function(){return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var t=void 0!==Object.getOwnPropertyNames,e=Object.getOwnPropertyNames;var n=function(r){return e(Object(r))};var o=function(r){return Object.keys(Object(r))},i=o;var u=function(){return function(){return 2!==(i(arguments)||"").length}(1,2)},f=void 0!==Object.keys;var c=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var a=function(){return c&&"symbol"==typeof Symbol.toStringTag},l=Object.prototype.toString,v=l;var p=function(r){return v.call(r)},s=Object.prototype.hasOwnProperty;var y=function(r,t){return null!=r&&s.call(r,t)},b="function"==typeof Symbol?Symbol.toStringTag:"",g=y,d=b,m=l;var j=p,h=function(r){var t,e,n;if(null==r)return m.call(r);e=r[d],t=g(r,d);try{r[d]=void 0}catch(t){return m.call(r)}return n=m.call(r),t?r[d]=e:delete r[d],n},w=a()?h:j,O=w;var _=function(r){return"[object Arguments]"===O(r)},P=_;var S=function(){return P(arguments)}(),E="function"==typeof Object.defineProperty?Object.defineProperty:null;var I=function(){try{return E({},"x",{}),!0}catch(r){return!1}},T=Object.defineProperty,A=Object.prototype,N=A.toString,k=A.__defineGetter__,x=A.__defineSetter__,B=A.__lookupGetter__,V=A.__lookupSetter__;var F=function(r,t,e){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(B.call(r,t)||V.call(r,t)?(n=r.__proto__,r.__proto__=A,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&k&&k.call(r,t,e.get),u&&x&&x.call(r,t,e.set),r},G=T,L=F,M=I()?G:L;var X=function(r,t,e){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},Y=X;var C=function(r){return"string"==typeof r},D=String.prototype.valueOf;var H=w,R=function(r){try{return D.call(r),!0}catch(r){return!1}},W=a();var z=function(r){return"object"==typeof r&&(r instanceof String||(W?R(r):"[object String]"===H(r)))},U=C,q=z;var J=Y,K=function(r){return U(r)||q(r)},Q=z;J(K,"isPrimitive",C),J(K,"isObject",Q);var Z=K;var $=function(r){return"number"==typeof r},rr=Number,tr=rr.prototype.toString;var er=w,nr=rr,or=function(r){try{return tr.call(r),!0}catch(r){return!1}},ir=a();var ur=function(r){return"object"==typeof r&&(r instanceof nr||(ir?or(r):"[object Number]"===er(r)))},fr=$,cr=ur;var ar=Y,lr=function(r){return fr(r)||cr(r)},vr=ur;ar(lr,"isPrimitive",$),ar(lr,"isObject",vr);var pr=lr;var sr=function(r){return r!=r},yr=pr.isPrimitive,br=sr;var gr=function(r){return yr(r)&&br(r)},dr=pr.isObject,mr=sr;var jr=function(r){return dr(r)&&mr(r.valueOf())},hr=gr,wr=jr;var Or=Y,_r=function(r){return hr(r)||wr(r)},Pr=jr;Or(_r,"isPrimitive",gr),Or(_r,"isObject",Pr);var Sr=_r,Er=Number.POSITIVE_INFINITY,Ir=rr.NEGATIVE_INFINITY,Tr=Math.floor;var Ar=function(r){return Tr(r)===r},Nr=Er,kr=Ir,xr=Ar;var Br=function(r){return r<Nr&&r>kr&&xr(r)},Vr=pr.isPrimitive,Fr=Br;var Gr=function(r){return Vr(r)&&Fr(r)},Lr=pr.isObject,Mr=Br;var Xr=function(r){return Lr(r)&&Mr(r.valueOf())},Yr=Gr,Cr=Xr;var Dr=Y,Hr=function(r){return Yr(r)||Cr(r)},Rr=Xr;Dr(Hr,"isPrimitive",Gr),Dr(Hr,"isObject",Rr);var Wr,zr=Hr,Ur=Object.prototype.propertyIsEnumerable;Wr=!Ur.call("beep","0");var qr=Z,Jr=Sr.isPrimitive,Kr=zr.isPrimitive,Qr=Ur,Zr=Wr;var $r=function(r,t){var e;return null!=r&&(!(e=Qr.call(r,t))&&Zr&&qr(r)?!Jr(t=+t)&&Kr(t)&&t>=0&&t<r.length:e)},rt=$r,tt=w;var et=Array.isArray?Array.isArray:function(r){return"[object Array]"===tt(r)},nt=y,ot=rt,it=et,ut=Ar;var ft=S?_:function(r){return null!==r&&"object"==typeof r&&!it(r)&&"number"==typeof r.length&&ut(r.length)&&r.length>=0&&r.length<=4294967295&&nt(r,"callee")&&!ot(r,"callee")},ct=ft,at=o,lt=Array.prototype.slice;var vt=function(r){return ct(r)?at(lt.call(r)):at(r)},pt=et;var st=function(r){return null!==r&&"object"==typeof r};Y(st,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!pt(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(st));var yt=st;var bt=rt((function(){}),"prototype"),gt=!rt({toString:null},"toString"),dt=Ar;var mt=Sr,jt=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&dt(r.length)&&r.length>=0&&r.length<=9007199254740991},ht=Z.isPrimitive,wt=zr.isPrimitive;var Ot=function(r,t,e){var n,o;if(!jt(r)&&!ht(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!wt(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(mt(t)){for(;o<n;o++)if(mt(r[o]))return o}else for(;o<n;o++)if(r[o]===t)return o;return-1},_t=/./;var Pt=function(r){return"boolean"==typeof r},St=Boolean.prototype.toString;var Et=w,It=function(r){try{return St.call(r),!0}catch(r){return!1}},Tt=a();var At=function(r){return"object"==typeof r&&(r instanceof Boolean||(Tt?It(r):"[object Boolean]"===Et(r)))},Nt=Pt,kt=At;var xt=Y,Bt=function(r){return Nt(r)||kt(r)},Vt=At;xt(Bt,"isPrimitive",Pt),xt(Bt,"isObject",Vt);var Ft=Bt;var Gt=function(){return new Function("return this;")()},Lt="object"==typeof self?self:null,Mt="object"==typeof window?window:null,Xt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Yt="object"==typeof Xt?Xt:null;module.exports=Yt;var Ct=Ft.isPrimitive,Dt=Gt,Ht=Lt,Rt=Mt,Wt=r(Object.freeze({__proto__:null}));var zt=function(r){if(arguments.length){if(!Ct(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Dt()}if(Ht)return Ht;if(Rt)return Rt;if(Wt)return Wt;throw new Error("unexpected error. Unable to resolve global object.")},Ut=zt(),qt=Ut.document&&Ut.document.childNodes,Jt=Int8Array,Kt=_t,Qt=qt,Zt=Jt;var $t=function(){return"function"==typeof Kt||"object"==typeof Zt||"function"==typeof Qt};var re=function(){return/^\s*function\s*([^(]*)/i},te=re;Y(te,"REGEXP",re());var ee=yt;var ne=w,oe=te.REGEXP,ie=function(r){return ee(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var ue=function(r){var t,e,n;if(("Object"===(e=ne(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=oe.exec(n.toString()))return t[1]}return ie(r)?"Buffer":e},fe=ue;var ce=ue;var ae=function(r){var t;return null===r?"null":"object"===(t=typeof r)?fe(r).toLowerCase():t},le=function(r){return ce(r).toLowerCase()},ve=$t()?le:ae;var pe,se=function(r){return r.constructor&&r.constructor.prototype===r},ye="undefined"==typeof window?void 0:window,be=y,ge=Ot,de=ve,me=se,je=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],he=ye;pe=function(){var r;if("undefined"===de(he))return!1;for(r in he)try{-1===ge(je,r)&&be(he,r)&&null!==he[r]&&"object"===de(he[r])&&me(he[r])}catch(r){return!0}return!1}();var we="undefined"!=typeof window,Oe=pe,_e=se,Pe=we;var Se=yt,Ee=y,Ie=ft,Te=bt,Ae=gt,Ne=function(r){if(!1===Pe&&!Oe)return _e(r);try{return _e(r)}catch(r){return!1}},ke=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var xe=o,Be=vt,Ve=function(r){var t,e,n,o,i,u,f;if(o=[],Ie(r)){for(f=0;f<r.length;f++)o.push(f.toString());return o}if("string"==typeof r){if(r.length>0&&!Ee(r,"0"))for(f=0;f<r.length;f++)o.push(f.toString())}else{if(!1===(n="function"==typeof r)&&!Se(r))return o;e=Te&&n}for(i in r)e&&"prototype"===i||!Ee(r,i)||o.push(String(i));if(Ae)for(t=Ne(r),f=0;f<ke.length;f++)u=ke[f],t&&"constructor"===u||!Ee(r,u)||o.push(String(u));return o},Fe=f?u()?Be:xe:Ve;var Ge=t?n:function(r){return Fe(Object(r))},Le=y,Me=rt;var Xe=function(r,t){return!1!==Le(r,t)&&!1===Me(r,t)};function Ye(r){var t,e,n;if(null==r)return[];for(t=Ge(Object(r)),n=0,e=0;e<t.length;e++)Xe(r,t[e])&&(t[n]=t[e],n+=1);return t.length=n,t}export{Ye as default};
//# sourceMappingURL=mod.js.map
