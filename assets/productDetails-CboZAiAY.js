import{r as W,u as ae,a as ne,j as n,B as ie}from"./index-BqBg5Kj4.js";import{r as I,g as le}from"./vendor-DUt4hQxu.js";var P={exports:{}},N={exports:{}};N.exports;var T;function oe(){return T||(T=1,function(y,m){Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;var s=d(I()),u=d(W());function d(i){return i&&i.__esModule?i:{default:i}}(function(){var i=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.enterModule:void 0;i&&i(y)})();function x(){return x=Object.assign||function(i){for(var p=1;p<arguments.length;p++){var h=arguments[p];for(var f in h)Object.prototype.hasOwnProperty.call(h,f)&&(i[f]=h[f])}return i},x.apply(this,arguments)}typeof reactHotLoaderGlobal<"u"&&reactHotLoaderGlobal.default.signature;var b=function(p){var h=Object.assign({},p),f={isDisabled:"is-disabled",isActive:"is-active",isActiveHalf:"is-active-half",willBeActive:"will-be-active"},H=Object.keys(f).filter(function(j){return delete h[j],p[j]}).map(function(j){return f[j]}).join(" ");return s.default.createElement("div",x({className:"react-rater-star ".concat(H)},h),"★")};b.defaultProps={willBeActive:!1,isActive:!1,isActiveHalf:!1,isDisabled:!1},b.propTypes={isActive:u.default.bool,isActiveHalf:u.default.bool,willBeActive:u.default.bool,isDisabled:u.default.bool};var O=b,L=O;m.default=L,function(){var i=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.default:void 0;i&&(i.register(b,"Star","/Users/simon/Personal/react-rater/src/star.js"),i.register(O,"default","/Users/simon/Personal/react-rater/src/star.js"))}(),function(){var i=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.leaveModule:void 0;i&&i(y)}()}(N,N.exports)),N.exports}P.exports;var q;function se(){return q||(q=1,function(y,m){function s(e){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},s(e)}Object.defineProperty(m,"__esModule",{value:!0}),Object.defineProperty(m,"Star",{enumerable:!0,get:function(){return x.default}}),m.default=_;var u=i(I()),d=O(W()),x=O(oe()),b=["total","interactive","children","rating","onRate","onRating","onCancelRate"];function O(e){return e&&e.__esModule?e:{default:e}}function L(e){if(typeof WeakMap!="function")return null;var r=new WeakMap,t=new WeakMap;return(L=function(l){return l?t:r})(e)}function i(e,r){if(e&&e.__esModule)return e;if(e===null||s(e)!=="object"&&typeof e!="function")return{default:e};var t=L(r);if(t&&t.has(e))return t.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(o!=="default"&&Object.prototype.hasOwnProperty.call(e,o)){var v=l?Object.getOwnPropertyDescriptor(e,o):null;v&&(v.get||v.set)?Object.defineProperty(a,o,v):a[o]=e[o]}return a.default=e,t&&t.set(e,a),a}(function(){var e=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.enterModule:void 0;e&&e(y)})();function p(){return p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},p.apply(this,arguments)}function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,a)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?h(Object(t),!0).forEach(function(a){H(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function H(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function j(e,r){return $(e)||F(e,r)||U(e,r)||z()}function z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(e,r){if(e){if(typeof e=="string")return D(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return D(e,r)}}function D(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}function F(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var a=[],l=!0,o=!1,v,R;try{for(t=t.call(e);!(l=(v=t.next()).done)&&(a.push(v.value),!(r&&a.length===r));l=!0);}catch(A){o=!0,R=A}finally{try{!l&&t.return!=null&&t.return()}finally{if(o)throw R}}return a}}function $(e){if(Array.isArray(e))return e}function K(e,r){if(e==null)return{};var t=V(e,r),a,l;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],!(r.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}function V(e,r){if(e==null)return{};var t={},a=Object.keys(e),l,o;for(o=0;o<a.length;o++)l=a[o],!(r.indexOf(l)>=0)&&(t[l]=e[l]);return t}var J=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.default.signature:function(e){return e};function _(e){var r=this,t=e.total,a=e.interactive,l=e.children,o=e.rating,v=e.onRate,R=e.onRating,A=e.onCancelRate,Q=K(e,b),X=(0,u.useState)({rating:e.rating,isRating:!1}),G=j(X,2),E=G[0],Y=G[1],w=E.rating,M=E.isRating,k=(0,u.useRef)(w),C=u.Children.toArray(l);function S(g){Y(function(c){return f(f({},c),g)})}function Z(g,c){S({rating:g,isRating:!0}),R&&R(f(f({},c),{},{rating:g}))}function ee(g,c){S({rating:g,isRating:!1}),k.current=g,v&&v(f(f({},c),{},{rating:g}))}function te(){S({rating:k.current,isRating:!1}),A&&A({rating:w})}(0,u.useEffect)(function(){S({rating:o})},[o]);var re=Array.from(Array(t),function(g,c){var B={isActive:!M&&w-c>=1,willBeActive:M&&c<w,isActiveHalf:!M&&w-c>=.5&&w-c<1,isDisabled:!a};return u.default.createElement("div",{key:"star-".concat(c),onClick:a?ee.bind(r,c+1):null,onMouseOver:a?Z.bind(r,c+1):null},C.length?u.default.cloneElement(C[c%C.length],B):u.default.createElement(x.default,B))});return u.default.createElement("div",p({className:"react-rater"},a?{onMouseOut:te}:{},Q),re)}J(_,`useState{[state, setState]({
    rating: props.rating,
    isRating: false
  })}
useRef{lastRating}
useEffect{}`),_.propTypes={total:d.default.number,rating:d.default.number,interactive:d.default.bool,children:d.default.any,onRate:d.default.func,onRating:d.default.func,onCancelRate:d.default.func},_.defaultProps={total:5,rating:0,interactive:!0},function(){var e=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.default:void 0;e&&e.register(_,"Rater","/Users/simon/Personal/react-rater/src/index.js")}(),function(){var e=typeof reactHotLoaderGlobal<"u"?reactHotLoaderGlobal.leaveModule:void 0;e&&e(y)}()}(P,P.exports)),P.exports}var ce=se();const ue=le(ce),fe=()=>{const{addToCart:y}=ae(),m=ne(),{product:s}=m.state||{};return s?n.jsx("div",{children:n.jsx("div",{className:" container   mx-auto",children:n.jsx("section",{className:"text-gray-700 body-font overflow-hidden bg-white",children:n.jsx("div",{className:"container px-6 md:px-20 py-24 mx-auto",children:n.jsxs("div",{className:" flex flex-col md:flex-row  items-center justify-around gap-x-8 gap-y-8",children:[" ",n.jsx("div",{className:"w-full md:w-1/2 h-[500px] bg-red-500",children:n.jsx("img",{alt:"ecommerce",className:"w-full h-full object-contain object-center rounded border border-gray-200",src:s.image})}),n.jsxs("div",{className:"w-full md:w-1/2",children:[" ",n.jsx("h2",{className:"text-sm title-font text-gray-900 my-4 tracking-widest",children:s.category}),n.jsx("h1",{className:"text-gray-900 text-3xl title-font font-medium mb-1",children:s.title}),n.jsxs("div",{className:"flex mb-4",children:[n.jsxs("span",{className:"flex items-center text-xl md:text-2xl ",children:[" ",n.jsx(ue,{total:5,rating:s.rating.rate,interactive:!1}),n.jsxs("span",{className:"text-xl text-gray-600 ml-3",children:["+",s.rating.count," reviews"]})]}),n.jsxs("span",{className:"flex ml-3 pl-3 py-2 border-l-2 border-gray-200",children:[" ",n.jsx("a",{className:"text-gray-500",children:n.jsx("svg",{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",className:"w-5 h-5",viewBox:"0 0 24 24",children:n.jsx("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})})}),n.jsx("a",{className:"ml-2 text-gray-500",children:n.jsx("svg",{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",className:"w-5 h-5",viewBox:"0 0 24 24",children:n.jsx("path",{d:"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"})})}),n.jsx("a",{className:"ml-2 text-gray-500",children:n.jsx("svg",{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",className:"w-5 h-5",viewBox:"0 0 24 24",children:n.jsx("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})})})]})]}),n.jsx("p",{className:"leading-relaxed",children:s.description}),n.jsxs("div",{className:"flex mt-6",children:[n.jsxs("span",{className:"title-font font-medium text-xl md:text-2xl text-gray-900",children:["Total Price: $",s.price]}),n.jsx(ie,{richColors:!0,className:"",position:"bottom-right"}),n.jsx("button",{onClick:()=>{y(s)},className:"flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded",children:"Button"}),n.jsxs("button",{className:"rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4",children:[n.jsx("svg",{fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-5 h-5",viewBox:"0 0 24 24",children:n.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"})}),n.jsx("p",{className:"sr-only",children:"button"})]})]})]})]})})})})}):n.jsx("div",{children:"Product not found"})},ve=()=>n.jsx("div",{children:n.jsx("div",{children:n.jsx("section",{className:"bg-red-300 w-full h-dvh py-12",children:n.jsx("div",{children:n.jsx(n.Fragment,{children:n.jsx(fe,{})})})})})});export{ve as default};