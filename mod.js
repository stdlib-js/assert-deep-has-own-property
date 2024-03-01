// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,v=/(\..*[^0])0*e/;function w(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":u(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=l.call(n,v,"$1e"),n=l.call(n,h,"e"),n=l.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,g,"e-0$1"),r.alternate&&(n=l.call(n,d,"$1."),n=l.call(n,y,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):s.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,_=isNaN,E=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,i,a,u,s,f,l,p,g,d,y;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",s=1,f=0;f<r.length;f++)if(n=r[f],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,_(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+m(y):m(y)+p)),u+=n.arg||"",s+=1}return u}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,n,o;for(t=[],o=0,n=x.exec(r);n;)(e=r.slice(o,x.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),o=x.lastIndex,n=x.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function A(r){var e,t;if("string"!=typeof r)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[T(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return O.apply(null,e)}var V,P=Object.prototype,F=P.toString,C=P.__defineGetter__,I=P.__defineSetter__,$=P.__lookupGetter__,R=P.__lookupSetter__;V=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&($.call(r,e)||R.call(r,e)?(n=r.__proto__,r.__proto__=P,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&C&&C.call(r,e,t.get),a&&I&&I.call(r,e,t.set),r};var B=V;function L(r,e,t){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(r){return"string"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return W&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;function N(r,e){return null!=r&&M.call(r,e)}var X="function"==typeof Symbol?Symbol:void 0,z="function"==typeof X?X.toStringTag:"";var q=Z()?function(r){var e,t,n;if(null==r)return U.call(r);t=r[z],e=N(r,z);try{r[z]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[z]=t:delete r[z],n}:function(r){return U.call(r)},D=String.prototype.valueOf;var H=Z();function J(r){return"object"==typeof r&&(r instanceof String||(H?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object String]"===q(r)))}function K(r){return G(r)||J(r)}L(K,"isPrimitive",G),L(K,"isObject",J);var Q=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};function Y(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}var rr=/./;function er(r){return"boolean"==typeof r}var tr=Boolean,nr=Boolean.prototype.toString;var or=Z();function ir(r){return"object"==typeof r&&(r instanceof tr||(or?function(r){try{return nr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function ar(r){return er(r)||ir(r)}L(ar,"isPrimitive",er),L(ar,"isObject",ir);var cr="object"==typeof self?self:null,ur="object"==typeof window?window:null,sr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},fr="object"==typeof sr?sr:null,lr="object"==typeof globalThis?globalThis:null;var pr=function(r){if(arguments.length){if(!er(r))throw new TypeError(A("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(lr)return lr;if(cr)return cr;if(ur)return ur;if(fr)return fr;throw new Error("unexpected error. Unable to resolve global object.")}(),gr=pr.document&&pr.document.childNodes,dr=Int8Array;function yr(){return/^\s*function\s*([^(]*)/i}var br=/^\s*function\s*([^(]*)/i;function hr(r){return null!==r&&"object"==typeof r}function vr(r){var e,t,n,o;if(("Object"===(t=q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=br.exec(n.toString()))return e[1]}return hr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}L(yr,"REGEXP",br),L(hr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Q(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(hr));var wr="function"==typeof rr||"object"==typeof dr||"function"==typeof gr?function(r){return vr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?vr(r).toLowerCase():e};function mr(r){return"function"===wr(r)}var jr,_r=Object,Er=Object.getPrototypeOf;jr=mr(Object.getPrototypeOf)?Er:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Sr=jr;var Or=Object.prototype;function xr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Q(r)}(r)&&(e=function(r){return null==r?null:(r=_r(r),Sr(r))}(r),!e||!N(r,"constructor")&&N(e,"constructor")&&mr(e.constructor)&&"[object Function]"===q(e.constructor)&&N(e,"isPrototypeOf")&&mr(e.isPrototypeOf)&&(e===Or||function(r){var e;for(e in r)if(!N(r,e))return!1;return!0}(r)))}function kr(r,e){return xr(e)?N(e,"sep")&&(r.sep=e.sep,!G(r.sep))?new TypeError(Y("02f2W","sep",r.sep)):null:new TypeError(Y("02f2V",e))}function Tr(r,e){var t,n=e.length;if(0===n)return!1;for(t=0;t<n;t++){if(!N(r,e[t]))return!1;r=r[e[t]]}return!0}function Ar(r,e,t){var n,o,i;if(!(n=G(e))&&!Q(e))throw new TypeError(Y("02f3A",e));if(o={sep:"."},arguments.length>2&&(i=kr(o,t)))throw i;return null!=r&&Tr(r,n?e.split(o.sep):e)}function Vr(r,e){var t,n,o,i;if(!(t=G(r))&&!Q(r))throw new TypeError(Y("02f3A",r));if(o={sep:"."},arguments.length>1&&(i=kr(o,e)))throw i;return n=t?r.split(o.sep):r,function(r){if(null==r)return!1;return Tr(r,n)}}L(Ar,"factory",Vr);export{Ar as default,Vr as factory};
//# sourceMappingURL=mod.js.map
