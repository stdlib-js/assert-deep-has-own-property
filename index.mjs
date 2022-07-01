// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";function p(r,s){return i(s)?o(s,"sep")&&(r.sep=s.sep,!e(r.sep))?new TypeError(t("01K2i","sep",r.sep)):null:new TypeError(t("01K2h",s))}var d={sep:"."};function l(r,e){var s,t=e.length;if(0===t)return!1;for(s=0;s<t;s++){if(!o(r,e[s]))return!1;r=r[e[s]]}return!0}function m(r,i,o){var m,f,h;if(!(m=e(i))&&!s(i))throw new TypeError(t("01K3M",i));if(f=n(d),arguments.length>2&&(h=p(f,o)))throw h;return null!=r&&l(r,m?i.split(f.sep):i)}function f(r,i){var o,m,f,h;if(!(o=e(r))&&!s(r))throw new TypeError(t("01K3M",r));if(f=n(d),arguments.length>1&&(h=p(f,i)))throw h;return m=o?r.split(f.sep):r,j;function j(r){return null!=r&&l(r,m)}}r(m,"factory",f);export{m as default,f as factory};
//# sourceMappingURL=index.mjs.map
