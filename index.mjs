// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";function o(r,s){return n(s)?i(s,"sep")&&(r.sep=s.sep,!e(r.sep))?new TypeError(t("01K2i","sep",r.sep)):null:new TypeError(t("01K2h",s))}function p(r,e){var s,t=e.length;if(0===t)return!1;for(s=0;s<t;s++){if(!i(r,e[s]))return!1;r=r[e[s]]}return!0}function l(r,n,i){var l,d,m;if(!(l=e(n))&&!s(n))throw new TypeError(t("01K3M",n));if(d={sep:"."},arguments.length>2&&(m=o(d,i)))throw m;return null!=r&&p(r,l?n.split(d.sep):n)}function d(r,n){var i,l,d,m;if(!(i=e(r))&&!s(r))throw new TypeError(t("01K3M",r));if(d={sep:"."},arguments.length>1&&(m=o(d,n)))throw m;return l=i?r.split(d.sep):r,f;function f(r){return null!=r&&p(r,l)}}r(l,"factory",d);export{l as default,d as factory};
//# sourceMappingURL=index.mjs.map
