"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=u(function(N,q){
var P=require('@stdlib/assert-is-string/dist').isPrimitive,b=require('@stdlib/assert-is-plain-object/dist'),x=require('@stdlib/assert-has-own-property/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist');function h(e,r){return b(r)?x(r,"sep")&&(e.sep=r.sep,!P(e.sep))?new TypeError(p('02f2W',"sep",e.sep)):null:new TypeError(p('02f2V',r));}q.exports=h
});var f=u(function(Q,c){
function S(){return{sep:"."}}c.exports=S
});var l=u(function(U,m){
var E=require('@stdlib/assert-has-own-property/dist');function T(e,r){var t=r.length,i;if(t===0)return!1;for(i=0;i<t;i++)if(E(e,r[i]))e=e[r[i]];else return!1;return!0}m.exports=T
});var y=u(function(W,d){
var H=require('@stdlib/assert-is-string/dist').isPrimitive,V=require('@stdlib/assert-is-array/dist'),j=require('@stdlib/error-tools-fmtprodmsg/dist'),k=v(),A=f(),K=l();function R(e,r,t){var i,a,s,n;if(i=H(r),!i&&!V(r))throw new TypeError(j('02f3A',r));if(s=A(),arguments.length>2&&(n=k(s,t),n))throw n;return e==null?!1:(i?a=r.split(s.sep):a=r,K(e,a))}d.exports=R
});var w=u(function(X,g){
var z=require('@stdlib/assert-is-string/dist').isPrimitive,B=require('@stdlib/assert-is-array/dist'),C=require('@stdlib/error-tools-fmtprodmsg/dist'),D=v(),F=f(),G=l();function I(e,r){var t,i,a,s;if(t=z(e),!t&&!B(e))throw new TypeError(C('02f3A',e));if(a=F(),arguments.length>1&&(s=D(a,r),s))throw s;return t?i=e.split(a.sep):i=e,n;function n(o){return o==null?!1:G(o,i)}}g.exports=I
});var J=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=y(),L=w();J(O,"factory",L);module.exports=O;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
