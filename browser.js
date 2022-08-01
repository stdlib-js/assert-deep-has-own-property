// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).deepHasOwnProp={})}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,i=o.toString,a=o.__defineGetter__,u=o.__defineSetter__,c=o.__lookupGetter__,f=o.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,e){var n,l,p,s;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(c.call(r,t)||f.call(r,t)?(n=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),p="get"in e,s="set"in e,l&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(r,t,e.get),s&&u&&u.call(r,t,e.set),r};var l=e;function p(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function s(r){return"string"==typeof r}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return y&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function b(r,t){return null!=r&&d.call(r,t)}var h="function"==typeof Symbol?Symbol.toStringTag:"";var w=v()?function(r){var t,e,n;if(null==r)return g.call(r);e=r[h],t=b(r,h);try{r[h]=void 0}catch(t){return g.call(r)}return n=g.call(r),t?r[h]=e:delete r[h],n}:function(r){return g.call(r)},m=String.prototype.valueOf;var j=v();function A(r){return"object"==typeof r&&(r instanceof String||(j?function(r){try{return m.call(r),!0}catch(r){return!1}}(r):"[object String]"===w(r)))}function O(r){return s(r)||A(r)}p(O,"isPrimitive",s),p(O,"isObject",A);var E=Array.isArray?Array.isArray:function(r){return"[object Array]"===w(r)};function I(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}function S(r){return"number"==typeof r}var _=Number,x=_.prototype.toString;var U=v();function F(r){return"object"==typeof r&&(r instanceof _||(U?function(r){try{return x.call(r),!0}catch(r){return!1}}(r):"[object Number]"===w(r)))}function T(r){return S(r)||F(r)}p(T,"isPrimitive",S),p(T,"isObject",F);var k=Number.POSITIVE_INFINITY,P=_.NEGATIVE_INFINITY,V=Math.floor;function C(r){return V(r)===r}function N(r){return r<k&&r>P&&C(r)}function $(r){return S(r)&&N(r)}function M(r){return F(r)&&N(r.valueOf())}function B(r){return $(r)||M(r)}function R(r){return $(r)&&r>=0}function L(r){return M(r)&&r.valueOf()>=0}function G(r){return R(r)||L(r)}function z(r){return null!==r&&"object"==typeof r}function W(r){return z(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}p(B,"isPrimitive",$),p(B,"isObject",M),p(G,"isPrimitive",R),p(G,"isObject",L),p(z,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!E(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(z));var X=/./;function Z(r){return"boolean"==typeof r}var D=Boolean.prototype.toString;var K=v();function Y(r){return"object"==typeof r&&(r instanceof Boolean||(K?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===w(r)))}function H(r){return Z(r)||Y(r)}function q(){return new Function("return this;")()}p(H,"isPrimitive",Z),p(H,"isObject",Y);var J="object"==typeof self?self:null,Q="object"==typeof window?window:null,rr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},tr="object"==typeof rr?rr:null;var er=function(r){if(arguments.length){if(!Z(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return q()}if(J)return J;if(Q)return Q;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")}(),nr=er.document&&er.document.childNodes,or=Int8Array;function ir(){return/^\s*function\s*([^(]*)/i}var ar=/^\s*function\s*([^(]*)/i;function ur(r){var t,e,n;if(("Object"===(e=w(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=ar.exec(n.toString()))return t[1]}return W(r)?"Buffer":e}p(ir,"REGEXP",ar);var cr="function"==typeof X||"object"==typeof or||"function"==typeof nr?function(r){return ur(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?ur(r).toLowerCase():t};function fr(r){return"function"===cr(r)}var lr,pr=Object.getPrototypeOf;lr=fr(Object.getPrototypeOf)?pr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===w(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var sr=lr;function yr(r){return null==r?null:(r=Object(r),sr(r))}function vr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}function gr(r){return"number"==typeof r}function dr(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function br(r,t,e){var n=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=e?r+dr(o):dr(o)+r,n&&(r="-"+r)),r}p(vr,"REGEXP",/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/);var hr=String.prototype.toLowerCase,wr=String.prototype.toUpperCase;function mr(r){var t,e,n;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,n=parseInt(e,10),!isFinite(n)){if(!gr(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===r.specifier||10!==t)&&(n=4294967295+n+1),n<0?(e=(-n).toString(t),r.precision&&(e=br(e,r.precision,r.padRight)),e="-"+e):(e=n.toString(t),n||r.precision?r.precision&&(e=br(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===wr.call(r.specifier)?wr.call(e):hr.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function jr(r){return"string"==typeof r}var Ar=Math.abs,Or=String.prototype.toLowerCase,Er=String.prototype.toUpperCase,Ir=String.prototype.replace,Sr=/e\+(\d)$/,_r=/e-(\d)$/,xr=/^(\d+)$/,Ur=/^(\d+)e/,Fr=/\.0$/,Tr=/\.0*e/,kr=/(\..*[^0])0*e/;function Pr(r){var t,e,n=parseFloat(r.arg);if(!isFinite(n)){if(!gr(r.arg))throw new Error("invalid floating-point number. Value: "+e);n=r.arg}switch(r.specifier){case"e":case"E":e=n.toExponential(r.precision);break;case"f":case"F":e=n.toFixed(r.precision);break;case"g":case"G":Ar(n)<1e-4?((t=r.precision)>0&&(t-=1),e=n.toExponential(t)):e=n.toPrecision(r.precision),r.alternate||(e=Ir.call(e,kr,"$1e"),e=Ir.call(e,Tr,"e"),e=Ir.call(e,Fr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=Ir.call(e,Sr,"e+0$1"),e=Ir.call(e,_r,"e-0$1"),r.alternate&&(e=Ir.call(e,xr,"$1."),e=Ir.call(e,Ur,"$1.e")),n>=0&&r.sign&&(e=r.sign+e),e=r.specifier===Er.call(r.specifier)?Er.call(e):Or.call(e)}function Vr(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function Cr(r,t,e){var n=t-r.length;return n<0?r:r=e?r+Vr(n):Vr(n)+r}var Nr=String.fromCharCode,$r=isNaN,Mr=Array.isArray;function Br(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function Rr(r){var t,e,n,o,i,a,u,c,f;if(!Mr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(jr(n=r[c]))a+=n;else{if(t=void 0!==n.precision,!(n=Br(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),e=n.flags,f=0;f<e.length;f++)switch(o=e.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,$r(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,$r(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=mr(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!$r(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=$r(i)?String(n.arg):Nr(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=Pr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=br(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Cr(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var Lr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Gr(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function zr(r){var t,e,n,o;for(e=[],o=0,n=Lr.exec(r);n;)(t=r.slice(o,Lr.lastIndex-n[0].length)).length&&e.push(t),e.push(Gr(n)),o=Lr.lastIndex,n=Lr.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function Wr(r){return"string"==typeof r}function Xr(r){var t,e,n;if(!Wr(r))throw new TypeError(Xr("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=zr(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return Rr.apply(null,e)}function Zr(r){if(!s(r))throw new TypeError(Xr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return(r=/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/.exec(r))?new RegExp(r[1],r[2]):null}function Dr(r){return r!=r}function Kr(r){return S(r)&&Dr(r)}function Yr(r){return F(r)&&Dr(r.valueOf())}function Hr(r){return Kr(r)||Yr(r)}p(Hr,"isPrimitive",Kr),p(Hr,"isObject",Yr);function qr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&C(r.length)&&r.length>=0&&r.length<=9007199254740991}function Jr(r,t,e){var n,o;if(!qr(r)&&!s(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!$(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(Hr(t)){for(;o<n;o++)if(Hr(r[o]))return o}else for(;o<n;o++)if(r[o]===t)return o;return-1}function Qr(r){return Object.keys(Object(r))}var rt,tt=void 0!==Object.keys;function et(r){return"[object Arguments]"===w(r)}rt=function(){return et(arguments)}();var nt=rt,ot=Object.prototype.propertyIsEnumerable;var it=!ot.call("beep","0");function at(r,t){var e;return null!=r&&(!(e=ot.call(r,t))&&it&&O(r)?!Kr(t=+t)&&$(t)&&t>=0&&t<r.length:e)}var ut=4294967295;var ct=nt?et:function(r){return null!==r&&"object"==typeof r&&!E(r)&&"number"==typeof r.length&&C(r.length)&&r.length>=0&&r.length<=ut&&b(r,"callee")&&!at(r,"callee")},ft=Array.prototype.slice;var lt=at((function(){}),"prototype"),pt=!at({toString:null},"toString");function st(r){return r.constructor&&r.constructor.prototype===r}var yt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],vt="undefined"==typeof window?void 0:window;var gt=function(){var r;if("undefined"===cr(vt))return!1;for(r in vt)try{-1===Jr(yt,r)&&b(vt,r)&&null!==vt[r]&&"object"===cr(vt[r])&&st(vt[r])}catch(r){return!0}return!1}(),dt="undefined"!=typeof window;var bt,ht=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];bt=tt?function(){return 2!==(Qr(arguments)||"").length}(1,2)?function(r){return ct(r)?Qr(ft.call(r)):Qr(r)}:Qr:function(r){var t,e,n,o,i,a,u;if(o=[],ct(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!b(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!z(r))return o;e=lt&&n}for(i in r)e&&"prototype"===i||!b(r,i)||o.push(String(i));if(pt)for(t=function(r){if(!1===dt&&!gt)return st(r);try{return st(r)}catch(r){return!1}}(r),u=0;u<ht.length;u++)a=ht[u],t&&"constructor"===a||!b(r,a)||o.push(String(a));return o};var wt=bt,mt=void 0!==Object.getOwnPropertyNames,jt=Object.getOwnPropertyNames;var At=mt?function(r){return jt(Object(r))}:function(r){return wt(Object(r))},Ot=void 0!==Object.getOwnPropertyDescriptor,Et=Object.getOwnPropertyDescriptor;var It=Ot?function(r,t){var e;return null==r||void 0===(e=Et(r,t))?null:e}:function(r,t){return b(r,t)?{configurable:!0,enumerable:!0,writable:!0,value:r[t]}:null};var St=function(){throw new Error("not implemented")};var _t=fr(St.from)?function(r){if(!W(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return St.from(r)}:function(r){if(!W(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return new St(r)},xt="function"==typeof Int8Array;var Ut="function"==typeof Int8Array?Int8Array:null;var Ft,Tt="function"==typeof Int8Array?Int8Array:void 0;Ft=function(){var r,t,e;if("function"!=typeof Ut)return!1;try{t=new Ut([1,3.14,-3.14,128]),e=t,r=(xt&&e instanceof Int8Array||"[object Int8Array]"===w(e))&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){r=!1}return r}()?Tt:function(){throw new Error("not implemented")};var kt=Ft,Pt="function"==typeof Uint8Array;var Vt="function"==typeof Uint8Array?Uint8Array:null;var Ct,Nt="function"==typeof Uint8Array?Uint8Array:void 0;Ct=function(){var r,t,e;if("function"!=typeof Vt)return!1;try{t=new Vt(t=[1,3.14,-3.14,256,257]),e=t,r=(Pt&&e instanceof Uint8Array||"[object Uint8Array]"===w(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Nt:function(){throw new Error("not implemented")};var $t=Ct,Mt="function"==typeof Uint8ClampedArray;var Bt="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Rt,Lt="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;Rt=function(){var r,t,e;if("function"!=typeof Bt)return!1;try{t=new Bt([-1,0,1,3.14,4.99,255,256]),e=t,r=(Mt&&e instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===w(e))&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){r=!1}return r}()?Lt:function(){throw new Error("not implemented")};var Gt=Rt,zt="function"==typeof Int16Array;var Wt="function"==typeof Int16Array?Int16Array:null;var Xt,Zt="function"==typeof Int16Array?Int16Array:void 0;Xt=function(){var r,t,e;if("function"!=typeof Wt)return!1;try{t=new Wt([1,3.14,-3.14,32768]),e=t,r=(zt&&e instanceof Int16Array||"[object Int16Array]"===w(e))&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){r=!1}return r}()?Zt:function(){throw new Error("not implemented")};var Dt=Xt,Kt="function"==typeof Uint16Array;var Yt="function"==typeof Uint16Array?Uint16Array:null;var Ht,qt="function"==typeof Uint16Array?Uint16Array:void 0;Ht=function(){var r,t,e;if("function"!=typeof Yt)return!1;try{t=new Yt(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Kt&&e instanceof Uint16Array||"[object Uint16Array]"===w(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?qt:function(){throw new Error("not implemented")};var Jt=Ht,Qt="function"==typeof Int32Array;var re="function"==typeof Int32Array?Int32Array:null;var te,ee="function"==typeof Int32Array?Int32Array:void 0;te=function(){var r,t,e;if("function"!=typeof re)return!1;try{t=new re([1,3.14,-3.14,2147483648]),e=t,r=(Qt&&e instanceof Int32Array||"[object Int32Array]"===w(e))&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r}()?ee:function(){throw new Error("not implemented")};var ne=te,oe="function"==typeof Uint32Array;var ie="function"==typeof Uint32Array?Uint32Array:null;var ae,ue="function"==typeof Uint32Array?Uint32Array:void 0;ae=function(){var r,t,e;if("function"!=typeof ie)return!1;try{t=new ie(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(oe&&e instanceof Uint32Array||"[object Uint32Array]"===w(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ue:function(){throw new Error("not implemented")};var ce=ae,fe="function"==typeof Float32Array;var le="function"==typeof Float32Array?Float32Array:null;var pe,se="function"==typeof Float32Array?Float32Array:void 0;pe=function(){var r,t,e;if("function"!=typeof le)return!1;try{t=new le([1,3.14,-3.14,5e40]),e=t,r=(fe&&e instanceof Float32Array||"[object Float32Array]"===w(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===k}catch(t){r=!1}return r}()?se:function(){throw new Error("not implemented")};var ye=pe,ve="function"==typeof Float64Array;var ge="function"==typeof Float64Array?Float64Array:null;var de,be="function"==typeof Float64Array?Float64Array:void 0;de=function(){var r,t,e;if("function"!=typeof ge)return!1;try{t=new ge([1,3.14,-3.14,NaN]),e=t,r=(ve&&e instanceof Float64Array||"[object Float64Array]"===w(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?be:function(){throw new Error("not implemented")};var he=de;function we(r){return new kt(r)}function me(r){return new $t(r)}function je(r){return new Gt(r)}function Ae(r){return new Dt(r)}function Oe(r){return new Jt(r)}function Ee(r){return new ne(r)}function Ie(r){return new ce(r)}function Se(r){return new ye(r)}function _e(r){return new he(r)}var xe={int8array:we,uint8array:me,uint8clampedarray:je,int16array:Ae,uint16array:Oe,int32array:Ee,uint32array:Ie,float32array:Se,float64array:_e};function Ue(r,t,e,n,o){var i,a,u,c,f,p,s,y,v,g;if(o-=1,"object"!=typeof r||null===r)return r;if(W(r))return _t(r);if(function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===w(r))return!0;r=yr(r)}return!1}(r))return function(r){var t,e,n,o,i,a,u=[],c=[];for(i=new r.constructor(r.message),u.push(r),c.push(i),r.stack&&(i.stack=r.stack),r.code&&(i.code=r.code),r.errno&&(i.errno=r.errno),r.syscall&&(i.syscall=r.syscall),t=wt(r),a=0;a<t.length;a++)o=t[a],b(e=It(r,o),"value")&&(n=E(r[o])?[]:{},e.value=Ue(r[o],n,u,c,-1)),l(i,o,e);return i}(r);if("date"===(u=cr(r)))return new Date(+r);if("regexp"===u)return Zr(r.toString());if("set"===u)return new Set(r);if("map"===u)return new Map(r);if("string"===u||"boolean"===u||"number"===u)return r.valueOf();if(f=xe[u])return f(r);if("array"!==u&&"object"!==u)return"function"==typeof Object.freeze?function(r){var t,e,n,o,i,a,u,c;for(t=[],o=[],u=Object.create(yr(r)),t.push(r),o.push(u),e=At(r),c=0;c<e.length;c++)n=e[c],b(i=It(r,n),"value")&&(a=E(r[n])?[]:{},i.value=Ue(r[n],a,t,o,-1)),l(u,n,i);return Object.isExtensible(r)||Object.preventExtensions(u),Object.isSealed(r)&&Object.seal(u),Object.isFrozen(r)&&Object.freeze(u),u}(r):{};if(a=wt(r),o>0)for(i=u,g=0;g<a.length;g++)y=r[p=a[g]],u=cr(y),"object"!=typeof y||null===y||"array"!==u&&"object"!==u||W(y)?"object"===i?(b(c=It(r,p),"value")&&(c.value=Ue(y)),l(t,p,c)):t[p]=Ue(y):-1===(v=Jr(e,y))?(s=E(y)?new Array(y.length):{},e.push(y),n.push(s),"array"===i?t[p]=Ue(y,s,e,n,o):(b(c=It(r,p),"value")&&(c.value=Ue(y,s,e,n,o)),l(t,p,c))):t[p]=n[v];else if("array"===u)for(g=0;g<a.length;g++)t[p=a[g]]=r[p];else for(g=0;g<a.length;g++)p=a[g],c=It(r,p),l(t,p,c);return Object.isExtensible(r)||Object.preventExtensions(t),Object.isSealed(r)&&Object.seal(t),Object.isFrozen(r)&&Object.freeze(t),t}function Fe(r,t){var e;if(arguments.length>1){if(!R(t))throw new TypeError("invalid argument. `level` must be a nonnegative integer. Value: `"+t+"`.");if(0===t)return r}else t=k;return Ue(r,e=E(r)?new Array(r.length):{},[r],[e],t)}var Te=Object.prototype;function ke(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!E(r)}(r)&&(!(t=yr(r))||!b(r,"constructor")&&b(t,"constructor")&&fr(t.constructor)&&"[object Function]"===w(t.constructor)&&b(t,"isPrototypeOf")&&fr(t.isPrototypeOf)&&(t===Te||function(r){var t;for(t in r)if(!b(r,t))return!1;return!0}(r)))}function Pe(r,t){return ke(t)?b(t,"sep")&&(r.sep=t.sep,!s(r.sep))?new TypeError(I("01K2i","sep",r.sep)):null:new TypeError(I("01K2h",t))}var Ve={sep:"."};function Ce(r,t){var e,n=t.length;if(0===n)return!1;for(e=0;e<n;e++){if(!b(r,t[e]))return!1;r=r[t[e]]}return!0}function Ne(r,t,e){var n,o,i;if(!(n=s(t))&&!E(t))throw new TypeError(I("01K3M",t));if(o=Fe(Ve),arguments.length>2&&(i=Pe(o,e)))throw i;return null!=r&&Ce(r,n?t.split(o.sep):t)}function $e(r,t){var e,n,o,i;if(!(e=s(r))&&!E(r))throw new TypeError(I("01K3M",r));if(o=Fe(Ve),arguments.length>1&&(i=Pe(o,t)))throw i;return n=e?r.split(o.sep):r,a;function a(r){return null!=r&&Ce(r,n)}}p(Ne,"factory",$e),r.default=Ne,r.factory=$e,Object.defineProperty(r,"__esModule",{value:!0})}));
//# sourceMappingURL=browser.js.map
