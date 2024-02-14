// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function n(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,i,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(i=(-c).toString(e),r.precision&&(i=n(i,r.precision,r.padRight)),i="-"+i):(i=c.toString(e),c||r.precision?r.precision&&(i=n(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===o.call(r.specifier)?o.call(i):a.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(r){return"string"==typeof r}var p=Math.abs,u=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(r){var e,i,n=parseFloat(r.arg);if(!isFinite(n)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);n=r.arg}switch(r.specifier){case"e":case"E":i=n.toExponential(r.precision);break;case"f":case"F":i=n.toFixed(r.precision);break;case"g":case"G":p(n)<1e-4?((e=r.precision)>0&&(e-=1),i=n.toExponential(e)):i=n.toPrecision(r.precision),r.alternate||(i=f.call(i,y,"$1e"),i=f.call(i,v,"e"),i=f.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),r.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,w,"$1.e")),n>=0&&r.sign&&(i=r.sign+i),i=r.specifier===l.call(r.specifier)?l.call(i):u.call(i)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function k(r,e,t){var i=e-r.length;return i<0?r:r=t?r+E(i):E(i)+r}var x=String.fromCharCode,S=isNaN,j=Array.isArray;function V(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,i,a,o,p,u,l,f;if(!j(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(p="",u=1,l=0;l<r.length;l++)if(s(i=r[l]))p+=i;else{if(e=void 0!==i.precision,!(i=V(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+i+"`.");for(i.mapping&&(u=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[u],10),u+=1,S(i.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[u],10),u+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[u],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=k(i.arg,i.width,i.padRight)),p+=i.arg||"",u+=1}return p}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,i,n;for(t=[],n=0,i=$.exec(r);i;)(e=r.slice(n,$.lastIndex-i[0].length)).length&&t.push(e),t.push(F(i)),n=$.lastIndex,i=$.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function _(r){return"string"==typeof r}function A(r){var e,t;if(!_(r))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return T.apply(null,e)}var O,C=Object.prototype,R=C.toString,Z=C.__defineGetter__,L=C.__defineSetter__,P=C.__lookupGetter__,W=C.__lookupSetter__;O=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var i,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(P.call(r,e)||W.call(r,e)?(i=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(r,e,t.get),o&&L&&L.call(r,e,t.set),r};var B=O;function G(r,e,t){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function N(r){return"string"==typeof r}function U(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var X=U();var M=U();var z=Object.prototype.toString;var K=Object.prototype.hasOwnProperty;function q(r,e){return null!=r&&K.call(r,e)}var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"";var J=M&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,i;if(null==r)return z.call(r);t=r[H],e=q(r,H);try{r[H]=void 0}catch(e){return z.call(r)}return i=z.call(r),e?r[H]=t:delete r[H],i}:function(r){return z.call(r)},Q=String.prototype.valueOf;var Y,rr=X&&"symbol"==typeof Symbol.toStringTag;function er(r){return"object"==typeof r&&(r instanceof String||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object String]"===J(r)))}function tr(r){return N(r)||er(r)}G(tr,"isPrimitive",N),G(tr,"isObject",er),Y=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var ir=Y;function nr(r){return"number"==typeof r}function ar(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function or(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+ar(n):ar(n)+r,i&&(r="-"+r)),r}var cr=String.prototype.toLowerCase,sr=String.prototype.toUpperCase;function pr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!nr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=or(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=or(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===sr.call(r.specifier)?sr.call(t):cr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ur(r){return"string"==typeof r}var lr=Math.abs,fr=String.prototype.toLowerCase,gr=String.prototype.toUpperCase,dr=String.prototype.replace,hr=/e\+(\d)$/,wr=/e-(\d)$/,br=/^(\d+)$/,vr=/^(\d+)e/,yr=/\.0$/,mr=/\.0*e/,Er=/(\..*[^0])0*e/;function kr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!nr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":lr(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=dr.call(t,Er,"$1e"),t=dr.call(t,mr,"e"),t=dr.call(t,yr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=dr.call(t,hr,"e+0$1"),t=dr.call(t,wr,"e-0$1"),r.alternate&&(t=dr.call(t,br,"$1."),t=dr.call(t,vr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===gr.call(r.specifier)?gr.call(t):fr.call(t)}function xr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Sr(r,e,t){var i=e-r.length;return i<0?r:r=t?r+xr(i):xr(i)+r}var jr=String.fromCharCode,Vr=isNaN,Tr=Array.isArray;function $r(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Fr(r){var e,t,i,n,a,o,c,s,p;if(!Tr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(ur(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=$r(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(n=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Vr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Vr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=pr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Vr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Vr(a)?String(i.arg):jr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=kr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=or(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Sr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Ir=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _r(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Ar(r){var e,t,i,n;for(t=[],n=0,i=Ir.exec(r);i;)(e=r.slice(n,Ir.lastIndex-i[0].length)).length&&t.push(e),t.push(_r(i)),n=Ir.lastIndex,i=Ir.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function Or(r){return"string"==typeof r}function Cr(r){var e,t,i;if(!Or(r))throw new TypeError(Cr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Ar(r),(t=new Array(arguments.length))[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return Fr.apply(null,t)}var Rr=/./;function Zr(r){return"boolean"==typeof r}var Lr=U();var Pr=Boolean,Wr=Boolean.prototype.toString;var Br=Lr&&"symbol"==typeof Symbol.toStringTag;function Gr(r){return"object"==typeof r&&(r instanceof Pr||(Br?function(r){try{return Wr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Nr(r){return Zr(r)||Gr(r)}function Ur(r){return"number"==typeof r}function Xr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Mr(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+Xr(n):Xr(n)+r,i&&(r="-"+r)),r}G(Nr,"isPrimitive",Zr),G(Nr,"isObject",Gr);var zr=String.prototype.toLowerCase,Kr=String.prototype.toUpperCase;function qr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!Ur(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=Mr(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=Mr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Kr.call(r.specifier)?Kr.call(t):zr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Dr(r){return"string"==typeof r}var Hr=Math.abs,Jr=String.prototype.toLowerCase,Qr=String.prototype.toUpperCase,Yr=String.prototype.replace,re=/e\+(\d)$/,ee=/e-(\d)$/,te=/^(\d+)$/,ie=/^(\d+)e/,ne=/\.0$/,ae=/\.0*e/,oe=/(\..*[^0])0*e/;function ce(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!Ur(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":Hr(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=Yr.call(t,oe,"$1e"),t=Yr.call(t,ae,"e"),t=Yr.call(t,ne,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Yr.call(t,re,"e+0$1"),t=Yr.call(t,ee,"e-0$1"),r.alternate&&(t=Yr.call(t,te,"$1."),t=Yr.call(t,ie,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Qr.call(r.specifier)?Qr.call(t):Jr.call(t)}function se(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function pe(r,e,t){var i=e-r.length;return i<0?r:r=t?r+se(i):se(i)+r}var ue=String.fromCharCode,le=isNaN,fe=Array.isArray;function ge(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function de(r){var e,t,i,n,a,o,c,s,p;if(!fe(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(Dr(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=ge(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(n=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,le(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,le(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=qr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!le(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=le(a)?String(i.arg):ue(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=ce(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Mr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=pe(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var he=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function we(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function be(r){var e,t,i,n;for(t=[],n=0,i=he.exec(r);i;)(e=r.slice(n,he.lastIndex-i[0].length)).length&&t.push(e),t.push(we(i)),n=he.lastIndex,i=he.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function ve(r){return"string"==typeof r}function ye(r){var e,t;if(!ve(r))throw new TypeError(ye("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[be(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return de.apply(null,e)}function me(){return new Function("return this;")()}var Ee="object"==typeof self?self:null,ke="object"==typeof window?window:null,xe="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Se="object"==typeof xe?xe:null,je="object"==typeof globalThis?globalThis:null;var Ve=function(r){if(arguments.length){if(!Zr(r))throw new TypeError(ye("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return me()}if(je)return je;if(Ee)return Ee;if(ke)return ke;if(Se)return Se;throw new Error("unexpected error. Unable to resolve global object.")}(),Te=Ve.document&&Ve.document.childNodes,$e=Int8Array;function Fe(){return/^\s*function\s*([^(]*)/i}var Ie=/^\s*function\s*([^(]*)/i;function _e(r){return null!==r&&"object"==typeof r}G(Fe,"REGEXP",Ie);var Ae=function(r){if("function"!=typeof r)throw new TypeError(ye("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,i;if(!ir(e))return!1;if(0===(t=e.length))return!1;for(i=0;i<t;i++)if(!1===r(e[i]))return!1;return!0}}(_e);function Oe(r){var e,t,i,n;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(i=r.constructor).name)return i.name;if(e=Ie.exec(i.toString()))return e[1]}return _e(n=r)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}G(_e,"isObjectLikeArray",Ae);var Ce="function"==typeof Rr||"object"==typeof $e||"function"==typeof Te?function(r){return Oe(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Oe(r).toLowerCase():e};function Re(r){return"function"===Ce(r)}var Ze=Object,Le=/./;function Pe(r){return"boolean"==typeof r}var We=U();var Be=Boolean,Ge=Boolean.prototype.toString;var Ne=We&&"symbol"==typeof Symbol.toStringTag;function Ue(r){return"object"==typeof r&&(r instanceof Be||(Ne?function(r){try{return Ge.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Xe(r){return Pe(r)||Ue(r)}function Me(r){return"number"==typeof r}function ze(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Ke(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+ze(n):ze(n)+r,i&&(r="-"+r)),r}G(Xe,"isPrimitive",Pe),G(Xe,"isObject",Ue);var qe=String.prototype.toLowerCase,De=String.prototype.toUpperCase;function He(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!Me(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=Ke(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=Ke(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===De.call(r.specifier)?De.call(t):qe.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Je(r){return"string"==typeof r}var Qe=Math.abs,Ye=String.prototype.toLowerCase,rt=String.prototype.toUpperCase,et=String.prototype.replace,tt=/e\+(\d)$/,it=/e-(\d)$/,nt=/^(\d+)$/,at=/^(\d+)e/,ot=/\.0$/,ct=/\.0*e/,st=/(\..*[^0])0*e/;function pt(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!Me(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":Qe(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=et.call(t,st,"$1e"),t=et.call(t,ct,"e"),t=et.call(t,ot,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=et.call(t,tt,"e+0$1"),t=et.call(t,it,"e-0$1"),r.alternate&&(t=et.call(t,nt,"$1."),t=et.call(t,at,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===rt.call(r.specifier)?rt.call(t):Ye.call(t)}function ut(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function lt(r,e,t){var i=e-r.length;return i<0?r:r=t?r+ut(i):ut(i)+r}var ft=String.fromCharCode,gt=isNaN,dt=Array.isArray;function ht(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function wt(r){var e,t,i,n,a,o,c,s,p;if(!dt(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(Je(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=ht(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(n=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,gt(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,gt(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=He(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!gt(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=gt(a)?String(i.arg):ft(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=pt(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Ke(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=lt(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var bt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function vt(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function yt(r){var e,t,i,n;for(t=[],n=0,i=bt.exec(r);i;)(e=r.slice(n,bt.lastIndex-i[0].length)).length&&t.push(e),t.push(vt(i)),n=bt.lastIndex,i=bt.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function mt(r){return"string"==typeof r}function Et(r){var e,t;if(!mt(r))throw new TypeError(Et("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[yt(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return wt.apply(null,e)}function kt(){return new Function("return this;")()}var xt="object"==typeof self?self:null,St="object"==typeof window?window:null,jt="object"==typeof xe?xe:null,Vt="object"==typeof globalThis?globalThis:null;var Tt=function(r){if(arguments.length){if(!Pe(r))throw new TypeError(Et("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return kt()}if(Vt)return Vt;if(xt)return xt;if(St)return St;if(jt)return jt;throw new Error("unexpected error. Unable to resolve global object.")}(),$t=Tt.document&&Tt.document.childNodes,Ft=Int8Array;function It(){return/^\s*function\s*([^(]*)/i}var _t=/^\s*function\s*([^(]*)/i;function At(r){return null!==r&&"object"==typeof r}G(It,"REGEXP",_t);var Ot=function(r){if("function"!=typeof r)throw new TypeError(Et("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,i;if(!ir(e))return!1;if(0===(t=e.length))return!1;for(i=0;i<t;i++)if(!1===r(e[i]))return!1;return!0}}(At);function Ct(r){var e,t,i,n;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(i=r.constructor).name)return i.name;if(e=_t.exec(i.toString()))return e[1]}return At(n=r)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}G(At,"isObjectLikeArray",Ot);var Rt="function"==typeof Le||"object"==typeof Ft||"function"==typeof $t?function(r){return Ct(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Ct(r).toLowerCase():e};var Zt,Lt,Pt=Object.getPrototypeOf;Lt=Object.getPrototypeOf,Zt="function"===Rt(Lt)?Pt:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Wt=Zt;var Bt=Object.prototype;function Gt(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!ir(r)}(r)&&(e=function(r){return null==r?null:(r=Ze(r),Wt(r))}(r),!e||!q(r,"constructor")&&q(e,"constructor")&&Re(e.constructor)&&"[object Function]"===J(e.constructor)&&q(e,"isPrototypeOf")&&Re(e.isPrototypeOf)&&(e===Bt||function(r){var e;for(e in r)if(!q(r,e))return!1;return!0}(r)))}function Nt(r,e){return Gt(e)?q(e,"sep")&&(r.sep=e.sep,!N(r.sep))?new TypeError(Cr("invalid option. `%s` option must be a string. Option: `%s`.","sep",r.sep)):null:new TypeError(Cr("invalid argument. Options argument must be an object. Value: `%s`.",e))}function Ut(r,e){var t,i=e.length;if(0===i)return!1;for(t=0;t<i;t++){if(!q(r,e[t]))return!1;r=r[e[t]]}return!0}function Xt(r,e,t){var i,n,a;if(!(i=N(e))&&!ir(e))throw new TypeError(Cr("invalid argument. Key path must be a string or a key array. Value: `%s`.",e));if(n={sep:"."},arguments.length>2&&(a=Nt(n,t)))throw a;return null!=r&&Ut(r,i?e.split(n.sep):e)}function Mt(r,e){var t,i,n,a;if(!(t=N(r))&&!ir(r))throw new TypeError(Cr("invalid argument. Key path must be a string or a key array. Value: `%s`.",r));if(n={sep:"."},arguments.length>1&&(a=Nt(n,e)))throw a;return i=t?r.split(n.sep):r,o;function o(r){return null!=r&&Ut(r,i)}}G(Xt,"factory",Mt);export{Xt as default,Mt as factory};
//# sourceMappingURL=mod.js.map
