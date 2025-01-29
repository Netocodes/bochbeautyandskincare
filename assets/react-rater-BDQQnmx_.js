import{r as B,g as re}from"./vendor-DUt4hQxu.js";import{d as N}from"./index-Dk-BrlZN.js";var S={exports:{}},A={exports:{}};A.exports;var W;function ne(){return W||(W=1,function(_,y){Object.defineProperty(y,"__esModule",{value:!0}),y.default=void 0;var h=c(B()),u=c(N());function c(a){return a&&a.__esModule?a:{default:a}}(function(){var a=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.enterModule:void 0;a&&a(_)})();function g(){return g=Object.assign||function(a){for(var s=1;s<arguments.length;s++){var p=arguments[s];for(var f in p)Object.prototype.hasOwnProperty.call(p,f)&&(a[f]=p[f])}return a},g.apply(this,arguments)}typeof reactHotLoaderGlobal<"u"&&reactHotLoaderGlobal.default.signature;var b=function(s){var p=Object.assign({},s),f={isDisabled:"is-disabled",isActive:"is-active",isActiveHalf:"is-active-half",willBeActive:"will-be-active"},G=Object.keys(f).filter(function(m){return delete p[m],s[m]}).map(function(m){return f[m]}).join(" ");return h.default.createElement("div",g({className:"react-rater-star ".concat(G)},p),"★")};b.defaultProps={willBeActive:!1,isActive:!1,isActiveHalf:!1,isDisabled:!1},b.propTypes={isActive:u.default.bool,isActiveHalf:u.default.bool,willBeActive:u.default.bool,isDisabled:u.default.bool};var R=b,H=R;y.default=H,function(){var a=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.default:void 0;a&&(a.register(b,"Star","/Users/simon/Personal/react-rater/src/star.js"),a.register(R,"default","/Users/simon/Personal/react-rater/src/star.js"))}(),function(){var a=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.leaveModule:void 0;a&&a(_)}()}(A,A.exports)),A.exports}S.exports;var I;function ae(){return I||(I=1,function(_,y){function h(e){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},h(e)}Object.defineProperty(y,"__esModule",{value:!0}),Object.defineProperty(y,"Star",{enumerable:!0,get:function(){return g.default}}),y.default=P;var u=a(B()),c=R(N()),g=R(ne()),b=["total","interactive","children","rating","onRate","onRating","onCancelRate"];function R(e){return e&&e.__esModule?e:{default:e}}function H(e){if(typeof WeakMap!="function")return null;var r=new WeakMap,t=new WeakMap;return(H=function(i){return i?t:r})(e)}function a(e,r){if(e&&e.__esModule)return e;if(e===null||h(e)!=="object"&&typeof e!="function")return{default:e};var t=H(r);if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(o!=="default"&&Object.prototype.hasOwnProperty.call(e,o)){var d=i?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(n,o,d):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}(function(){var e=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.enterModule:void 0;e&&e(_)})();function s(){return s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?p(Object(t),!0).forEach(function(n){G(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function G(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function m(e,r){return $(e)||K(e,r)||F(e,r)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F(e,r){if(e){if(typeof e=="string")return D(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return D(e,r)}}function D(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function K(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],i=!0,o=!1,d,w;try{for(t=t.call(e);!(i=(d=t.next()).done)&&(n.push(d.value),!(r&&n.length===r));i=!0);}catch(L){o=!0,w=L}finally{try{!i&&t.return!=null&&t.return()}finally{if(o)throw w}}return n}}function $(e){if(Array.isArray(e))return e}function k(e,r){if(e==null)return{};var t=z(e,r),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function z(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var J=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.default.signature:function(e){return e};function P(e){var r=this,t=e.total,n=e.interactive,i=e.children,o=e.rating,d=e.onRate,w=e.onRating,L=e.onCancelRate,Q=k(e,b),V=(0,u.useState)({rating:e.rating,isRating:!1}),E=m(V,2),q=E[0],X=E[1],O=q.rating,j=q.isRating,C=(0,u.useRef)(O),x=u.Children.toArray(i);function M(v){X(function(l){return f(f({},l),v)})}function Y(v,l){M({rating:v,isRating:!0}),w&&w(f(f({},l),{},{rating:v}))}function Z(v,l){M({rating:v,isRating:!1}),C.current=v,d&&d(f(f({},l),{},{rating:v}))}function ee(){M({rating:C.current,isRating:!1}),L&&L({rating:O})}(0,u.useEffect)(function(){M({rating:o})},[o]);var te=Array.from(Array(t),function(v,l){var T={isActive:!j&&O-l>=1,willBeActive:j&&l<O,isActiveHalf:!j&&O-l>=.5&&O-l<1,isDisabled:!n};return u.default.createElement("div",{key:"star-".concat(l),onClick:n?Z.bind(r,l+1):null,onMouseOver:n?Y.bind(r,l+1):null},x.length?u.default.cloneElement(x[l%x.length],T):u.default.createElement(g.default,T))});return u.default.createElement("div",s({className:"react-rater"},n?{onMouseOut:ee}:{},Q),te)}J(P,`useState{[state, setState]({
    rating: props.rating,
    isRating: false
  })}
useRef{lastRating}
useEffect{}`),P.propTypes={total:c.default.number,rating:c.default.number,interactive:c.default.bool,children:c.default.any,onRate:c.default.func,onRating:c.default.func,onCancelRate:c.default.func},P.defaultProps={total:5,rating:0,interactive:!0},function(){var e=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.default:void 0;e&&e.register(P,"Rater","/Users/simon/Personal/react-rater/src/index.js")}(),function(){var e=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.leaveModule:void 0;e&&e(_)}()}(S,S.exports)),S.exports}var ie=ae();const ue=re(ie);export{ue as R};
