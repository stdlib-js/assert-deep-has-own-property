// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";var a=t.isPrimitive,p=n,m=o,l=s;var d=function(r,t){return p(t)?m(t,"sep")&&(r.sep=t.sep,!a(r.sep))?new TypeError(l("invalid option. `%s` option must be a string. Option: `%s`.","sep",r.sep)):null:new TypeError(l("invalid argument. Options argument must be an object. Value: `%s`.",t))},u={sep:"."},h=o;var f=function(r,t){var e,s=t.length;if(0===s)return!1;for(e=0;e<s;e++){if(!h(r,t[e]))return!1;r=r[t[e]]}return!0},j=t.isPrimitive,v=e,g=s,c=i,y=d,b=u,w=f;var x=function(r,t,e){var s,i,n,o;if(!(s=j(t))&&!v(t))throw new TypeError(g("invalid argument. Key path must be a string or a key array. Value: `%s`.",t));if(n=c(b),arguments.length>2&&(o=y(n,e)))throw o;return null!=r&&(i=s?t.split(n.sep):t,w(r,i))},E=t.isPrimitive,T=e,P=s,V=i,k=d,K=u,O=f;var q=function(r,t){var e,s,i,n;if(!(e=E(r))&&!T(r))throw new TypeError(P("invalid argument. Key path must be a string or a key array. Value: `%s`.",r));if(i=V(K),arguments.length>1&&(n=k(i,t)))throw n;return s=e?r.split(i.sep):r,o;function o(r){return null!=r&&O(r,s)}},z=x,A=q;r(z,"factory",A);var B=z;export{B as default,A as factory};
//# sourceMappingURL=index.mjs.map
