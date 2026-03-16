"use strict";var d=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var k=d(function(L,l){
var E=require('@stdlib/math-base-special-abs/dist'),w=require('@stdlib/math-base-special-pow/dist'),F=require('@stdlib/stats-strided-distances-dcityblock/dist').ndarray,I=require('@stdlib/stats-strided-distances-deuclidean/dist').ndarray,O=require('@stdlib/stats-strided-distances-dchebyshev/dist').ndarray,P=require('@stdlib/constants-float64-pinf/dist');function g(e,r,u,a,n,i,v,q){var o,t,s,c,m;if(e<=0)return NaN;if(r===1)return F(e,u,a,n,i,v,q);if(r===2)return I(e,u,a,n,i,v,q);if(r===P)return O(e,u,a,n,i,v,q);for(o=n,t=q,c=0,s=0;s<e;s++)m=E(u[o]-i[t]),c+=w(m,r),o+=a,t+=v;return w(c,1/r)}l.exports=g
});var x=d(function(M,j){
var b=require('@stdlib/strided-base-stride2offset/dist'),z=k();function A(e,r,u,a,n,i){var v=b(e,a),q=b(e,i);return z(e,r,u,a,v,n,i,q)}j.exports=A
});var R=d(function(Q,p){
var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=x(),C=k();B(h,"ndarray",C);p.exports=h
});var D=require("path").join,G=require('@stdlib/utils-try-require/dist'),H=require('@stdlib/assert-is-error/dist'),J=R(),y,_=G(D(__dirname,"./native.js"));H(_)?y=J:y=_;module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
