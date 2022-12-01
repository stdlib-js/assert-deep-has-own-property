// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("buffer")):"function"==typeof define&&define.amd?define(["buffer"],t):(r="undefined"!=typeof globalThis?globalThis:r||self).deepHasOwnProp=t(r.require$$0)}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,i=o.toString,a=o.__defineGetter__,u=o.__defineSetter__,c=o.__lookupGetter__,f=o.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,e){var n,l,p,s;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(c.call(r,t)||f.call(r,t)?(n=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),p="get"in e,s="set"in e,l&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(r,t,e.get),s&&u&&u.call(r,t,e.set),r};var l=e;function p(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function s(r){return"string"==typeof r}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return y&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;function d(r,t){return null!=r&&b.call(r,t)}var h="function"==typeof Symbol?Symbol.toStringTag:"";var w=v()?function(r){var t,e,n;if(null==r)return g.call(r);e=r[h],t=d(r,h);try{r[h]=void 0}catch(t){return g.call(r)}return n=g.call(r),t?r[h]=e:delete r[h],n}:function(r){return g.call(r)},m=String.prototype.valueOf;var j=v();function A(r){return"object"==typeof r&&(r instanceof String||(j?function(r){try{return m.call(r),!0}catch(r){return!1}}(r):"[object String]"===w(r)))}function O(r){return s(r)||A(r)}p(O,"isPrimitive",s),p(O,"isObject",A);var E=Array.isArray?Array.isArray:function(r){return"[object Array]"===w(r)};function I(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}function S(r){return"number"==typeof r}var _=Number,x=_.prototype.toString;var U=v();function F(r){return"object"==typeof r&&(r instanceof _||(U?function(r){try{return x.call(r),!0}catch(r){return!1}}(r):"[object Number]"===w(r)))}function T(r){return S(r)||F(r)}p(T,"isPrimitive",S),p(T,"isObject",F);var k=Number.POSITIVE_INFINITY,P=_.NEGATIVE_INFINITY,V=Math.floor;function C(r){return V(r)===r}function N(r){return r<k&&r>P&&C(r)}function $(r){return S(r)&&N(r)}function B(r){return F(r)&&N(r.valueOf())}function M(r){return $(r)||B(r)}function R(r){return $(r)&&r>=0}function L(r){return B(r)&&r.valueOf()>=0}function G(r){return R(r)||L(r)}function z(r){return null!==r&&"object"==typeof r}function W(r){return z(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}p(M,"isPrimitive",$),p(M,"isObject",B),p(G,"isPrimitive",R),p(G,"isObject",L),p(z,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!E(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(z));var X=/./;function Z(r){return"boolean"==typeof r}var D=Boolean.prototype.toString;var K=v();function Y(r){return"object"==typeof r&&(r instanceof Boolean||(K?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===w(r)))}function H(r){return Z(r)||Y(r)}function q(){return new Function("return this;")()}p(H,"isPrimitive",Z),p(H,"isObject",Y);var J="object"==typeof self?self:null,Q="object"==typeof window?window:null,rr="object"==typeof global?global:null;var tr=function(r){if(arguments.length){if(!Z(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return q()}if(J)return J;if(Q)return Q;if(rr)return rr;throw new Error("unexpected error. Unable to resolve global object.")}(),er=tr.document&&tr.document.childNodes,nr=Int8Array;function or(){return/^\s*function\s*([^(]*)/i}var ir=/^\s*function\s*([^(]*)/i;function ar(r){var t,e,n;if(("Object"===(e=w(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=ir.exec(n.toString()))return t[1]}return W(r)?"Buffer":e}p(or,"REGEXP",ir);var ur="function"==typeof X||"object"==typeof nr||"function"==typeof er?function(r){return ar(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?ar(r).toLowerCase():t};function cr(r){return"function"===ur(r)}var fr,lr=Object.getPrototypeOf;fr=cr(Object.getPrototypeOf)?lr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===w(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var pr=fr;function sr(r){return null==r?null:(r=Object(r),pr(r))}function yr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}function vr(r){return"number"==typeof r}function gr(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function br(r,t,e){var n=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=e?r+gr(o):gr(o)+r,n&&(r="-"+r)),r}p(yr,"REGEXP",/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/);var dr=String.prototype.toLowerCase,hr=String.prototype.toUpperCase;function wr(r){var t,e,n;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,n=parseInt(e,10),!isFinite(n)){if(!vr(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===r.specifier||10!==t)&&(n=4294967295+n+1),n<0?(e=(-n).toString(t),r.precision&&(e=br(e,r.precision,r.padRight)),e="-"+e):(e=n.toString(t),n||r.precision?r.precision&&(e=br(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===hr.call(r.specifier)?hr.call(e):dr.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function mr(r){return"string"==typeof r}var jr=Math.abs,Ar=String.prototype.toLowerCase,Or=String.prototype.toUpperCase,Er=String.prototype.replace,Ir=/e\+(\d)$/,Sr=/e-(\d)$/,_r=/^(\d+)$/,xr=/^(\d+)e/,Ur=/\.0$/,Fr=/\.0*e/,Tr=/(\..*[^0])0*e/;function kr(r){var t,e,n=parseFloat(r.arg);if(!isFinite(n)){if(!vr(r.arg))throw new Error("invalid floating-point number. Value: "+e);n=r.arg}switch(r.specifier){case"e":case"E":e=n.toExponential(r.precision);break;case"f":case"F":e=n.toFixed(r.precision);break;case"g":case"G":jr(n)<1e-4?((t=r.precision)>0&&(t-=1),e=n.toExponential(t)):e=n.toPrecision(r.precision),r.alternate||(e=Er.call(e,Tr,"$1e"),e=Er.call(e,Fr,"e"),e=Er.call(e,Ur,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=Er.call(e,Ir,"e+0$1"),e=Er.call(e,Sr,"e-0$1"),r.alternate&&(e=Er.call(e,_r,"$1."),e=Er.call(e,xr,"$1.e")),n>=0&&r.sign&&(e=r.sign+e),e=r.specifier===Or.call(r.specifier)?Or.call(e):Ar.call(e)}function Pr(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function Vr(r,t,e){var n=t-r.length;return n<0?r:r=e?r+Pr(n):Pr(n)+r}var Cr=String.fromCharCode,Nr=isNaN,$r=Array.isArray;function Br(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function Mr(r){var t,e,n,o,i,a,u,c,f;if(!$r(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(mr(n=r[c]))a+=n;else{if(t=void 0!==n.precision,!(n=Br(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),e=n.flags,f=0;f<e.length;f++)switch(o=e.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Nr(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,Nr(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=wr(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!Nr(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Nr(i)?String(n.arg):Cr(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=kr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=br(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Vr(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var Rr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Lr(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function Gr(r){var t,e,n,o;for(e=[],o=0,n=Rr.exec(r);n;)(t=r.slice(o,Rr.lastIndex-n[0].length)).length&&e.push(t),e.push(Lr(n)),o=Rr.lastIndex,n=Rr.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function zr(r){return"string"==typeof r}function Wr(r){var t,e,n;if(!zr(r))throw new TypeError(Wr("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=Gr(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return Mr.apply(null,e)}function Xr(r){if(!s(r))throw new TypeError(Wr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return(r=/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/.exec(r))?new RegExp(r[1],r[2]):null}function Zr(r){return r!=r}function Dr(r){return S(r)&&Zr(r)}function Kr(r){return F(r)&&Zr(r.valueOf())}function Yr(r){return Dr(r)||Kr(r)}p(Yr,"isPrimitive",Dr),p(Yr,"isObject",Kr);function Hr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&C(r.length)&&r.length>=0&&r.length<=9007199254740991}function qr(r,t,e){var n,o;if(!Hr(r)&&!s(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!$(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(Yr(t)){for(;o<n;o++)if(Yr(r[o]))return o}else for(;o<n;o++)if(r[o]===t)return o;return-1}function Jr(r){return Object.keys(Object(r))}var Qr,rt=void 0!==Object.keys;function tt(r){return"[object Arguments]"===w(r)}Qr=function(){return tt(arguments)}();var et=Qr,nt=Object.prototype.propertyIsEnumerable;var ot=!nt.call("beep","0");function it(r,t){var e;return null!=r&&(!(e=nt.call(r,t))&&ot&&O(r)?!Dr(t=+t)&&$(t)&&t>=0&&t<r.length:e)}var at=4294967295;var ut=et?tt:function(r){return null!==r&&"object"==typeof r&&!E(r)&&"number"==typeof r.length&&C(r.length)&&r.length>=0&&r.length<=at&&d(r,"callee")&&!it(r,"callee")},ct=Array.prototype.slice;var ft=it((function(){}),"prototype"),lt=!it({toString:null},"toString");function pt(r){return r.constructor&&r.constructor.prototype===r}var st=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],yt="undefined"==typeof window?void 0:window;var vt=function(){var r;if("undefined"===ur(yt))return!1;for(r in yt)try{-1===qr(st,r)&&d(yt,r)&&null!==yt[r]&&"object"===ur(yt[r])&&pt(yt[r])}catch(r){return!0}return!1}(),gt="undefined"!=typeof window;var bt,dt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];bt=rt?function(){return 2!==(Jr(arguments)||"").length}(1,2)?function(r){return ut(r)?Jr(ct.call(r)):Jr(r)}:Jr:function(r){var t,e,n,o,i,a,u;if(o=[],ut(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!d(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!z(r))return o;e=ft&&n}for(i in r)e&&"prototype"===i||!d(r,i)||o.push(String(i));if(lt)for(t=function(r){if(!1===gt&&!vt)return pt(r);try{return pt(r)}catch(r){return!1}}(r),u=0;u<dt.length;u++)a=dt[u],t&&"constructor"===a||!d(r,a)||o.push(String(a));return o};var ht=bt,wt=void 0!==Object.getOwnPropertyNames,mt=Object.getOwnPropertyNames;var jt=wt?function(r){return mt(Object(r))}:function(r){return ht(Object(r))},At=void 0!==Object.getOwnPropertyDescriptor,Ot=Object.getOwnPropertyDescriptor;var Et=At?function(r,t){var e;return null==r||void 0===(e=Ot(r,t))?null:e}:function(r,t){return d(r,t)?{configurable:!0,enumerable:!0,writable:!0,value:r[t]}:null},It="function"==typeof Buffer?Buffer:null;var St,_t=r.Buffer;St=function(){var r,t;if("function"!=typeof It)return!1;try{r=W(t="function"==typeof It.from?It.from([1,2,3,4]):new It([1,2,3,4]))&&1===t[0]&&2===t[1]&&3===t[2]&&4===t[3]}catch(t){r=!1}return r}()?_t:function(){throw new Error("not implemented")};var xt=St;var Ut=cr(xt.from)?function(r){if(!W(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return xt.from(r)}:function(r){if(!W(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return new xt(r)},Ft="function"==typeof Int8Array;var Tt="function"==typeof Int8Array?Int8Array:null;var kt,Pt="function"==typeof Int8Array?Int8Array:void 0;kt=function(){var r,t,e;if("function"!=typeof Tt)return!1;try{t=new Tt([1,3.14,-3.14,128]),e=t,r=(Ft&&e instanceof Int8Array||"[object Int8Array]"===w(e))&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){r=!1}return r}()?Pt:function(){throw new Error("not implemented")};var Vt=kt,Ct="function"==typeof Uint8Array;var Nt="function"==typeof Uint8Array?Uint8Array:null;var $t,Bt="function"==typeof Uint8Array?Uint8Array:void 0;$t=function(){var r,t,e;if("function"!=typeof Nt)return!1;try{t=new Nt(t=[1,3.14,-3.14,256,257]),e=t,r=(Ct&&e instanceof Uint8Array||"[object Uint8Array]"===w(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Bt:function(){throw new Error("not implemented")};var Mt=$t,Rt="function"==typeof Uint8ClampedArray;var Lt="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Gt,zt="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;Gt=function(){var r,t,e;if("function"!=typeof Lt)return!1;try{t=new Lt([-1,0,1,3.14,4.99,255,256]),e=t,r=(Rt&&e instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===w(e))&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){r=!1}return r}()?zt:function(){throw new Error("not implemented")};var Wt=Gt,Xt="function"==typeof Int16Array;var Zt="function"==typeof Int16Array?Int16Array:null;var Dt,Kt="function"==typeof Int16Array?Int16Array:void 0;Dt=function(){var r,t,e;if("function"!=typeof Zt)return!1;try{t=new Zt([1,3.14,-3.14,32768]),e=t,r=(Xt&&e instanceof Int16Array||"[object Int16Array]"===w(e))&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){r=!1}return r}()?Kt:function(){throw new Error("not implemented")};var Yt=Dt,Ht="function"==typeof Uint16Array;var qt="function"==typeof Uint16Array?Uint16Array:null;var Jt,Qt="function"==typeof Uint16Array?Uint16Array:void 0;Jt=function(){var r,t,e;if("function"!=typeof qt)return!1;try{t=new qt(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Ht&&e instanceof Uint16Array||"[object Uint16Array]"===w(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Qt:function(){throw new Error("not implemented")};var re=Jt,te="function"==typeof Int32Array;var ee="function"==typeof Int32Array?Int32Array:null;var ne,oe="function"==typeof Int32Array?Int32Array:void 0;ne=function(){var r,t,e;if("function"!=typeof ee)return!1;try{t=new ee([1,3.14,-3.14,2147483648]),e=t,r=(te&&e instanceof Int32Array||"[object Int32Array]"===w(e))&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r}()?oe:function(){throw new Error("not implemented")};var ie=ne,ae="function"==typeof Uint32Array;var ue="function"==typeof Uint32Array?Uint32Array:null;var ce,fe="function"==typeof Uint32Array?Uint32Array:void 0;ce=function(){var r,t,e;if("function"!=typeof ue)return!1;try{t=new ue(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(ae&&e instanceof Uint32Array||"[object Uint32Array]"===w(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?fe:function(){throw new Error("not implemented")};var le=ce,pe="function"==typeof Float32Array;var se="function"==typeof Float32Array?Float32Array:null;var ye,ve="function"==typeof Float32Array?Float32Array:void 0;ye=function(){var r,t,e;if("function"!=typeof se)return!1;try{t=new se([1,3.14,-3.14,5e40]),e=t,r=(pe&&e instanceof Float32Array||"[object Float32Array]"===w(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===k}catch(t){r=!1}return r}()?ve:function(){throw new Error("not implemented")};var ge=ye,be="function"==typeof Float64Array;var de="function"==typeof Float64Array?Float64Array:null;var he,we="function"==typeof Float64Array?Float64Array:void 0;he=function(){var r,t,e;if("function"!=typeof de)return!1;try{t=new de([1,3.14,-3.14,NaN]),e=t,r=(be&&e instanceof Float64Array||"[object Float64Array]"===w(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?we:function(){throw new Error("not implemented")};var me=he;function je(r){return new Vt(r)}function Ae(r){return new Mt(r)}function Oe(r){return new Wt(r)}function Ee(r){return new Yt(r)}function Ie(r){return new re(r)}function Se(r){return new ie(r)}function _e(r){return new le(r)}function xe(r){return new ge(r)}function Ue(r){return new me(r)}var Fe={int8array:je,uint8array:Ae,uint8clampedarray:Oe,int16array:Ee,uint16array:Ie,int32array:Se,uint32array:_e,float32array:xe,float64array:Ue};function Te(r,t,e,n,o){var i,a,u,c,f,p,s,y,v,g;if(o-=1,"object"!=typeof r||null===r)return r;if(W(r))return Ut(r);if(function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===w(r))return!0;r=sr(r)}return!1}(r))return function(r){var t,e,n,o,i,a,u=[],c=[];for(i=new r.constructor(r.message),u.push(r),c.push(i),r.stack&&(i.stack=r.stack),r.code&&(i.code=r.code),r.errno&&(i.errno=r.errno),r.syscall&&(i.syscall=r.syscall),t=ht(r),a=0;a<t.length;a++)o=t[a],d(e=Et(r,o),"value")&&(n=E(r[o])?[]:{},e.value=Te(r[o],n,u,c,-1)),l(i,o,e);return i}(r);if("date"===(u=ur(r)))return new Date(+r);if("regexp"===u)return Xr(r.toString());if("set"===u)return new Set(r);if("map"===u)return new Map(r);if("string"===u||"boolean"===u||"number"===u)return r.valueOf();if(f=Fe[u])return f(r);if("array"!==u&&"object"!==u)return"function"==typeof Object.freeze?function(r){var t,e,n,o,i,a,u,c;for(t=[],o=[],u=Object.create(sr(r)),t.push(r),o.push(u),e=jt(r),c=0;c<e.length;c++)n=e[c],d(i=Et(r,n),"value")&&(a=E(r[n])?[]:{},i.value=Te(r[n],a,t,o,-1)),l(u,n,i);return Object.isExtensible(r)||Object.preventExtensions(u),Object.isSealed(r)&&Object.seal(u),Object.isFrozen(r)&&Object.freeze(u),u}(r):{};if(a=ht(r),o>0)for(i=u,g=0;g<a.length;g++)y=r[p=a[g]],u=ur(y),"object"!=typeof y||null===y||"array"!==u&&"object"!==u||W(y)?"object"===i?(d(c=Et(r,p),"value")&&(c.value=Te(y)),l(t,p,c)):t[p]=Te(y):-1===(v=qr(e,y))?(s=E(y)?new Array(y.length):{},e.push(y),n.push(s),"array"===i?t[p]=Te(y,s,e,n,o):(d(c=Et(r,p),"value")&&(c.value=Te(y,s,e,n,o)),l(t,p,c))):t[p]=n[v];else if("array"===u)for(g=0;g<a.length;g++)t[p=a[g]]=r[p];else for(g=0;g<a.length;g++)p=a[g],c=Et(r,p),l(t,p,c);return Object.isExtensible(r)||Object.preventExtensions(t),Object.isSealed(r)&&Object.seal(t),Object.isFrozen(r)&&Object.freeze(t),t}function ke(r,t){var e;if(arguments.length>1){if(!R(t))throw new TypeError("invalid argument. `level` must be a nonnegative integer. Value: `"+t+"`.");if(0===t)return r}else t=k;return Te(r,e=E(r)?new Array(r.length):{},[r],[e],t)}var Pe=Object.prototype;function Ve(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!E(r)}(r)&&(!(t=sr(r))||!d(r,"constructor")&&d(t,"constructor")&&cr(t.constructor)&&"[object Function]"===w(t.constructor)&&d(t,"isPrototypeOf")&&cr(t.isPrototypeOf)&&(t===Pe||function(r){var t;for(t in r)if(!d(r,t))return!1;return!0}(r)))}function Ce(r,t){return Ve(t)?d(t,"sep")&&(r.sep=t.sep,!s(r.sep))?new TypeError(I("01K2i","sep",r.sep)):null:new TypeError(I("01K2h",t))}var Ne={sep:"."};function $e(r,t){var e,n=t.length;if(0===n)return!1;for(e=0;e<n;e++){if(!d(r,t[e]))return!1;r=r[t[e]]}return!0}function Be(r,t,e){var n,o,i;if(!(n=s(t))&&!E(t))throw new TypeError(I("01K3M",t));if(o=ke(Ne),arguments.length>2&&(i=Ce(o,e)))throw i;return null!=r&&$e(r,n?t.split(o.sep):t)}return p(Be,"factory",(function(r,t){var e,n,o,i;if(!(e=s(r))&&!E(r))throw new TypeError(I("01K3M",r));if(o=ke(Ne),arguments.length>1&&(i=Ce(o,t)))throw i;return n=e?r.split(o.sep):r,a;function a(r){return null!=r&&$e(r,n)}})),Be}));
//# sourceMappingURL=index.js.map
