import{r as u}from"./index-g9Q6glD2.js";var O={},re;function Ee(){if(re)return O;re=1,Object.defineProperty(O,"__esModule",{value:!0}),O.parse=s,O.serialize=l;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,r=Object.prototype.toString,i=(()=>{const f=function(){};return f.prototype=Object.create(null),f})();function s(f,p){const d=new i,y=f.length;if(y<2)return d;const v=(p==null?void 0:p.decode)||m;let h=0;do{const w=f.indexOf("=",h);if(w===-1)break;const x=f.indexOf(";",h),E=x===-1?y:x;if(w>E){h=f.lastIndexOf(";",w-1)+1;continue}const b=c(f,h,w),F=o(f,w,b),$=f.slice(b,F);if(d[$]===void 0){let T=c(f,w+1,E),R=o(f,E,T);const I=v(f.slice(T,R));d[$]=I}h=E+1}while(h<y);return d}function c(f,p,d){do{const y=f.charCodeAt(p);if(y!==32&&y!==9)return p}while(++p<d);return d}function o(f,p,d){for(;p>d;){const y=f.charCodeAt(--p);if(y!==32&&y!==9)return p+1}return d}function l(f,p,d){const y=(d==null?void 0:d.encode)||encodeURIComponent;if(!e.test(f))throw new TypeError(`argument name is invalid: ${f}`);const v=y(p);if(!t.test(v))throw new TypeError(`argument val is invalid: ${p}`);let h=f+"="+v;if(!d)return h;if(d.maxAge!==void 0){if(!Number.isInteger(d.maxAge))throw new TypeError(`option maxAge is invalid: ${d.maxAge}`);h+="; Max-Age="+d.maxAge}if(d.domain){if(!n.test(d.domain))throw new TypeError(`option domain is invalid: ${d.domain}`);h+="; Domain="+d.domain}if(d.path){if(!a.test(d.path))throw new TypeError(`option path is invalid: ${d.path}`);h+="; Path="+d.path}if(d.expires){if(!g(d.expires)||!Number.isFinite(d.expires.valueOf()))throw new TypeError(`option expires is invalid: ${d.expires}`);h+="; Expires="+d.expires.toUTCString()}if(d.httpOnly&&(h+="; HttpOnly"),d.secure&&(h+="; Secure"),d.partitioned&&(h+="; Partitioned"),d.priority)switch(typeof d.priority=="string"?d.priority.toLowerCase():void 0){case"low":h+="; Priority=Low";break;case"medium":h+="; Priority=Medium";break;case"high":h+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${d.priority}`)}if(d.sameSite)switch(typeof d.sameSite=="string"?d.sameSite.toLowerCase():d.sameSite){case!0:case"strict":h+="; SameSite=Strict";break;case"lax":h+="; SameSite=Lax";break;case"none":h+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${d.sameSite}`)}return h}function m(f){if(f.indexOf("%")===-1)return f;try{return decodeURIComponent(f)}catch{return f}}function g(f){return r.call(f)==="[object Date]"}return O}Ee();/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function C(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function P(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function q({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Y(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substring(a),e=e.substring(0,a)),e&&(t.pathname=e)}return t}function oe(e,t,n="/"){return Re(e,t,n,!1)}function Re(e,t,n,a){let r=typeof t=="string"?Y(t):t,i=D(r.pathname||"/",n);if(i==null)return null;let s=ue(e);be(s);let c=null;for(let o=0;c==null&&o<s.length;++o){let l=Ae(i);c=Ne(s[o],l,a)}return c}function ue(e,t=[],n=[],a=""){let r=(i,s,c)=>{let o={relativePath:c===void 0?i.path||"":c,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(C(o.relativePath.startsWith(a),`Absolute route path "${o.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),o.relativePath=o.relativePath.slice(a.length));let l=S([a,o.relativePath]),m=n.concat(o);i.children&&i.children.length>0&&(C(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),ue(i.children,t,m,l)),!(i.path==null&&!i.index)&&t.push({path:l,score:Te(l,i.index),routesMeta:m})};return e.forEach((i,s)=>{var c;if(i.path===""||!((c=i.path)!=null&&c.includes("?")))r(i,s);else for(let o of se(i.path))r(i,s,o)}),t}function se(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,r=n.endsWith("?"),i=n.replace(/\?$/,"");if(a.length===0)return r?[i,""]:[i];let s=se(a.join("/")),c=[];return c.push(...s.map(o=>o===""?i:[i,o].join("/"))),r&&c.push(...s),c.map(o=>e.startsWith("/")&&o===""?"/":o)}function be(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:De(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var Se=/^:[\w-]+$/,Pe=3,ke=2,Le=1,$e=10,Ie=-2,ae=e=>e==="*";function Te(e,t){let n=e.split("/"),a=n.length;return n.some(ae)&&(a+=Ie),t&&(a+=ke),n.filter(r=>!ae(r)).reduce((r,i)=>r+(Se.test(i)?Pe:i===""?Le:$e),a)}function De(e,t){return e.length===t.length&&e.slice(0,-1).every((a,r)=>a===t[r])?e[e.length-1]-t[t.length-1]:0}function Ne(e,t,n=!1){let{routesMeta:a}=e,r={},i="/",s=[];for(let c=0;c<a.length;++c){let o=a[c],l=c===a.length-1,m=i==="/"?t:t.slice(i.length)||"/",g=H({path:o.relativePath,caseSensitive:o.caseSensitive,end:l},m),f=o.route;if(!g&&l&&n&&!a[a.length-1].route.index&&(g=H({path:o.relativePath,caseSensitive:o.caseSensitive,end:!1},m)),!g)return null;Object.assign(r,g.params),s.push({params:r,pathname:S([i,g.pathname]),pathnameBase:We(S([i,g.pathnameBase])),route:f}),g.pathnameBase!=="/"&&(i=S([i,g.pathnameBase]))}return s}function H(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=Fe(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let i=r[0],s=i.replace(/(.)\/+$/,"$1"),c=r.slice(1);return{params:a.reduce((l,{paramName:m,isOptional:g},f)=>{if(m==="*"){let d=c[f]||"";s=i.slice(0,i.length-d.length).replace(/(.)\/+$/,"$1")}const p=c[f];return g&&!p?l[m]=void 0:l[m]=(p||"").replace(/%2F/g,"/"),l},{}),pathname:i,pathnameBase:s,pattern:e}}function Fe(e,t=!1,n=!0){P(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,c,o)=>(a.push({paramName:c,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),a]}function Ae(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return P(!1,`The URL path "${e}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function D(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function Oe(e,t="/"){let{pathname:n,search:a="",hash:r=""}=typeof e=="string"?Y(e):e;return{pathname:n?n.startsWith("/")?n:Me(n,t):t,search:Ue(a),hash:_e(r)}}function Me(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function J(e,t,n,a){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Be(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ce(e){let t=Be(e);return t.map((n,a)=>a===t.length-1?n.pathname:n.pathnameBase)}function fe(e,t,n,a=!1){let r;typeof e=="string"?r=Y(e):(r={...e},C(!r.pathname||!r.pathname.includes("?"),J("?","pathname","search",r)),C(!r.pathname||!r.pathname.includes("#"),J("#","pathname","hash",r)),C(!r.search||!r.search.includes("#"),J("#","search","hash",r)));let i=e===""||r.pathname==="",s=i?"/":r.pathname,c;if(s==null)c=n;else{let g=t.length-1;if(!a&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),g-=1;r.pathname=f.join("/")}c=g>=0?t[g]:"/"}let o=Oe(r,c),l=s&&s!=="/"&&s.endsWith("/"),m=(i||s===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(l||m)&&(o.pathname+="/"),o}var S=e=>e.join("/").replace(/\/\/+/g,"/"),We=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ue=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_e=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function He(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var de=["POST","PUT","PATCH","DELETE"];new Set(de);var ze=["GET",...de];new Set(ze);var A=u.createContext(null);A.displayName="DataRouter";var z=u.createContext(null);z.displayName="DataRouterState";var he=u.createContext({isTransitioning:!1});he.displayName="ViewTransition";var Ve=u.createContext(new Map);Ve.displayName="Fetchers";var je=u.createContext(null);je.displayName="Await";var k=u.createContext(null);k.displayName="Navigation";var G=u.createContext(null);G.displayName="Location";var L=u.createContext({outlet:null,matches:[],isDataRoute:!1});L.displayName="Route";var X=u.createContext(null);X.displayName="RouteError";function Je(e,{relative:t}={}){C(V(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=u.useContext(k),{hash:r,pathname:i,search:s}=B(e,{relative:t}),c=i;return n!=="/"&&(c=i==="/"?n:S([n,i])),a.createHref({pathname:c,search:s,hash:r})}function V(){return u.useContext(G)!=null}function N(){return C(V(),"useLocation() may be used only in the context of a <Router> component."),u.useContext(G).location}var me="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function pe(e){u.useContext(k).static||u.useLayoutEffect(e)}function Ke(){let{isDataRoute:e}=u.useContext(L);return e?lt():qe()}function qe(){C(V(),"useNavigate() may be used only in the context of a <Router> component.");let e=u.useContext(A),{basename:t,navigator:n}=u.useContext(k),{matches:a}=u.useContext(L),{pathname:r}=N(),i=JSON.stringify(ce(a)),s=u.useRef(!1);return pe(()=>{s.current=!0}),u.useCallback((o,l={})=>{if(P(s.current,me),!s.current)return;if(typeof o=="number"){n.go(o);return}let m=fe(o,JSON.parse(i),r,l.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:S([t,m.pathname])),(l.replace?n.replace:n.push)(m,l.state,l)},[t,n,i,r,e])}u.createContext(null);function B(e,{relative:t}={}){let{matches:n}=u.useContext(L),{pathname:a}=N(),r=JSON.stringify(ce(n));return u.useMemo(()=>fe(e,JSON.parse(r),a,t==="path"),[e,r,a,t])}function Ye(e,t,n,a){C(V(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=u.useContext(k),{matches:i}=u.useContext(L),s=i[i.length-1],c=s?s.params:{},o=s?s.pathname:"/",l=s?s.pathnameBase:"/",m=s&&s.route;{let h=m&&m.path||"";ge(o,!m||h.endsWith("*")||h.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${o}" (under <Route path="${h}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${h}"> to <Route path="${h==="/"?"*":`${h}/*`}">.`)}let g=N(),f;f=g;let p=f.pathname||"/",d=p;if(l!=="/"){let h=l.replace(/^\//,"").split("/");d="/"+p.replace(/^\//,"").split("/").slice(h.length).join("/")}let y=oe(e,{pathname:d});return P(m||y!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),P(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),et(y&&y.map(h=>Object.assign({},h,{params:Object.assign({},c,h.params),pathname:S([l,r.encodeLocation?r.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?l:S([l,r.encodeLocation?r.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),i,n,a)}function Ge(){let e=it(),t=He(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:a},i={padding:"2px 4px",backgroundColor:a},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=u.createElement(u.Fragment,null,u.createElement("p",null,"💿 Hey developer 👋"),u.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",u.createElement("code",{style:i},"ErrorBoundary")," or"," ",u.createElement("code",{style:i},"errorElement")," prop on your route.")),u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},t),n?u.createElement("pre",{style:r},n):null,s)}var Xe=u.createElement(Ge,null),Qe=class extends u.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?u.createElement(L.Provider,{value:this.props.routeContext},u.createElement(X.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Ze({routeContext:e,match:t,children:n}){let a=u.useContext(A);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),u.createElement(L.Provider,{value:e},n)}function et(e,t=[],n=null,a=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(l=>l.route.id&&(i==null?void 0:i[l.route.id])!==void 0);C(o>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),r=r.slice(0,Math.min(r.length,o+1))}let s=!1,c=-1;if(n)for(let o=0;o<r.length;o++){let l=r[o];if((l.route.HydrateFallback||l.route.hydrateFallbackElement)&&(c=o),l.route.id){let{loaderData:m,errors:g}=n,f=l.route.loader&&!m.hasOwnProperty(l.route.id)&&(!g||g[l.route.id]===void 0);if(l.route.lazy||f){s=!0,c>=0?r=r.slice(0,c+1):r=[r[0]];break}}}return r.reduceRight((o,l,m)=>{let g,f=!1,p=null,d=null;n&&(g=i&&l.route.id?i[l.route.id]:void 0,p=l.route.errorElement||Xe,s&&(c<0&&m===0?(ge("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),f=!0,d=null):c===m&&(f=!0,d=l.route.hydrateFallbackElement||null)));let y=t.concat(r.slice(0,m+1)),v=()=>{let h;return g?h=p:f?h=d:l.route.Component?h=u.createElement(l.route.Component,null):l.route.element?h=l.route.element:h=o,u.createElement(Ze,{match:l,routeContext:{outlet:o,matches:y,isDataRoute:n!=null},children:h})};return n&&(l.route.ErrorBoundary||l.route.errorElement||m===0)?u.createElement(Qe,{location:n.location,revalidation:n.revalidation,component:p,error:g,children:v(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):v()},null)}function Q(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tt(e){let t=u.useContext(A);return C(t,Q(e)),t}function nt(e){let t=u.useContext(z);return C(t,Q(e)),t}function rt(e){let t=u.useContext(L);return C(t,Q(e)),t}function Z(e){let t=rt(e),n=t.matches[t.matches.length-1];return C(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function at(){return Z("useRouteId")}function it(){var a;let e=u.useContext(X),t=nt("useRouteError"),n=Z("useRouteError");return e!==void 0?e:(a=t.errors)==null?void 0:a[n]}function lt(){let{router:e}=tt("useNavigate"),t=Z("useNavigate"),n=u.useRef(!1);return pe(()=>{n.current=!0}),u.useCallback(async(r,i={})=>{P(n.current,me),n.current&&(typeof r=="number"?e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var ie={};function ge(e,t,n){!t&&!ie[e]&&(ie[e]=!0,P(!1,n))}u.memo(ot);function ot({routes:e,future:t,state:n}){return Ye(e,void 0,n,t)}var U="get",_="application/x-www-form-urlencoded";function j(e){return e!=null&&typeof e.tagName=="string"}function ut(e){return j(e)&&e.tagName.toLowerCase()==="button"}function st(e){return j(e)&&e.tagName.toLowerCase()==="form"}function ct(e){return j(e)&&e.tagName.toLowerCase()==="input"}function ft(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function dt(e,t){return e.button===0&&(!t||t==="_self")&&!ft(e)}var W=null;function ht(){if(W===null)try{new FormData(document.createElement("form"),0),W=!1}catch{W=!0}return W}var mt=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function K(e){return e!=null&&!mt.has(e)?(P(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${_}"`),null):e}function pt(e,t){let n,a,r,i,s;if(st(e)){let c=e.getAttribute("action");a=c?D(c,t):null,n=e.getAttribute("method")||U,r=K(e.getAttribute("enctype"))||_,i=new FormData(e)}else if(ut(e)||ct(e)&&(e.type==="submit"||e.type==="image")){let c=e.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let o=e.getAttribute("formaction")||c.getAttribute("action");if(a=o?D(o,t):null,n=e.getAttribute("formmethod")||c.getAttribute("method")||U,r=K(e.getAttribute("formenctype"))||K(c.getAttribute("enctype"))||_,i=new FormData(c,e),!ht()){let{name:l,type:m,value:g}=e;if(m==="image"){let f=l?`${l}.`:"";i.append(`${f}x`,"0"),i.append(`${f}y`,"0")}else l&&i.append(l,g)}}else{if(j(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=U,a=null,r=_,s=e}return i&&r==="text/plain"&&(s=i,i=void 0),{action:a,method:n.toLowerCase(),encType:r,formData:i,body:s}}function ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function gt(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function yt(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function vt(e,t,n){let a=await Promise.all(e.map(async r=>{let i=t.routes[r.route.id];if(i){let s=await gt(i,n);return s.links?s.links():[]}return[]}));return Et(a.flat(1).filter(yt).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function le(e,t,n,a,r,i){let s=(o,l)=>n[l]?o.route.id!==n[l].route.id:!0,c=(o,l)=>{var m;return n[l].pathname!==o.pathname||((m=n[l].route.path)==null?void 0:m.endsWith("*"))&&n[l].params["*"]!==o.params["*"]};return i==="assets"?t.filter((o,l)=>s(o,l)||c(o,l)):i==="data"?t.filter((o,l)=>{var g;let m=a.routes[o.route.id];if(!m||!m.hasLoader)return!1;if(s(o,l)||c(o,l))return!0;if(o.route.shouldRevalidate){let f=o.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((g=n[0])==null?void 0:g.params)||{},nextUrl:new URL(e,window.origin),nextParams:o.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function wt(e,t){return xt(e.map(n=>{let a=t.routes[n.route.id];if(!a)return[];let r=[a.module];return a.imports&&(r=r.concat(a.imports)),r}).flat(1))}function xt(e){return[...new Set(e)]}function Ct(e){let t={},n=Object.keys(e).sort();for(let a of n)t[a]=e[a];return t}function Et(e,t){let n=new Set;return new Set(t),e.reduce((a,r)=>{let i=JSON.stringify(Ct(r));return n.has(i)||(n.add(i),a.push({key:i,link:r})),a},[])}function Rt(e){let t=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return t.pathname==="/"?t.pathname="_root.data":t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function bt(){let e=u.useContext(A);return ee(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function St(){let e=u.useContext(z);return ee(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var te=u.createContext(void 0);te.displayName="FrameworkContext";function ye(){let e=u.useContext(te);return ee(e,"You must render this element inside a <HydratedRouter> element"),e}function Pt(e,t){let n=u.useContext(te),[a,r]=u.useState(!1),[i,s]=u.useState(!1),{onFocus:c,onBlur:o,onMouseEnter:l,onMouseLeave:m,onTouchStart:g}=t,f=u.useRef(null);u.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let y=h=>{h.forEach(w=>{s(w.isIntersecting)})},v=new IntersectionObserver(y,{threshold:.5});return f.current&&v.observe(f.current),()=>{v.disconnect()}}},[e]),u.useEffect(()=>{if(a){let y=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(y)}}},[a]);let p=()=>{r(!0)},d=()=>{r(!1),s(!1)};return n?e!=="intent"?[i,f,{}]:[i,f,{onFocus:M(c,p),onBlur:M(o,d),onMouseEnter:M(l,p),onMouseLeave:M(m,d),onTouchStart:M(g,p)}]:[!1,f,{}]}function M(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function kt({page:e,...t}){let{router:n}=bt(),a=u.useMemo(()=>oe(n.routes,e,n.basename),[n.routes,e,n.basename]);return a?u.createElement($t,{page:e,matches:a,...t}):null}function Lt(e){let{manifest:t,routeModules:n}=ye(),[a,r]=u.useState([]);return u.useEffect(()=>{let i=!1;return vt(e,t,n).then(s=>{i||r(s)}),()=>{i=!0}},[e,t,n]),a}function $t({page:e,matches:t,...n}){let a=N(),{manifest:r,routeModules:i}=ye(),{loaderData:s,matches:c}=St(),o=u.useMemo(()=>le(e,t,c,r,a,"data"),[e,t,c,r,a]),l=u.useMemo(()=>le(e,t,c,r,a,"assets"),[e,t,c,r,a]),m=u.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let p=new Set,d=!1;if(t.forEach(v=>{var w;let h=r.routes[v.route.id];!h||!h.hasLoader||(!o.some(x=>x.route.id===v.route.id)&&v.route.id in s&&((w=i[v.route.id])!=null&&w.shouldRevalidate)||h.hasClientLoader?d=!0:p.add(v.route.id))}),p.size===0)return[];let y=Rt(e);return d&&p.size>0&&y.searchParams.set("_routes",t.filter(v=>p.has(v.route.id)).map(v=>v.route.id).join(",")),[y.pathname+y.search]},[s,a,r,o,t,e,i]),g=u.useMemo(()=>wt(l,r),[l,r]),f=Lt(l);return u.createElement(u.Fragment,null,m.map(p=>u.createElement("link",{key:p,rel:"prefetch",as:"fetch",href:p,...n})),g.map(p=>u.createElement("link",{key:p,rel:"modulepreload",href:p,...n})),f.map(({key:p,link:d})=>u.createElement("link",{key:p,...d})))}function It(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var ve=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ve&&(window.__reactRouterVersion="7.1.1")}catch{}var we=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xe=u.forwardRef(function({onClick:t,discover:n="render",prefetch:a="none",relative:r,reloadDocument:i,replace:s,state:c,target:o,to:l,preventScrollReset:m,viewTransition:g,...f},p){let{basename:d}=u.useContext(k),y=typeof l=="string"&&we.test(l),v,h=!1;if(typeof l=="string"&&y&&(v=l,ve))try{let R=new URL(window.location.href),I=l.startsWith("//")?new URL(R.protocol+l):new URL(l),ne=D(I.pathname,d);I.origin===R.origin&&ne!=null?l=ne+I.search+I.hash:h=!0}catch{P(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let w=Je(l,{relative:r}),[x,E,b]=Pt(a,f),F=Ft(l,{replace:s,state:c,target:o,preventScrollReset:m,relative:r,viewTransition:g});function $(R){t&&t(R),R.defaultPrevented||F(R)}let T=u.createElement("a",{...f,...b,href:v||w,onClick:h||i?t:$,ref:It(p,E),target:o,"data-discover":!y&&n==="render"?"true":void 0});return x&&!y?u.createElement(u.Fragment,null,T,u.createElement(kt,{page:w})):T});xe.displayName="Link";var Tt=u.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:a="",end:r=!1,style:i,to:s,viewTransition:c,children:o,...l},m){let g=B(s,{relative:l.relative}),f=N(),p=u.useContext(z),{navigator:d,basename:y}=u.useContext(k),v=p!=null&&Wt(g)&&c===!0,h=d.encodeLocation?d.encodeLocation(g).pathname:g.pathname,w=f.pathname,x=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(w=w.toLowerCase(),x=x?x.toLowerCase():null,h=h.toLowerCase()),x&&y&&(x=D(x,y)||x);const E=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let b=w===h||!r&&w.startsWith(h)&&w.charAt(E)==="/",F=x!=null&&(x===h||!r&&x.startsWith(h)&&x.charAt(h.length)==="/"),$={isActive:b,isPending:F,isTransitioning:v},T=b?t:void 0,R;typeof a=="function"?R=a($):R=[a,b?"active":null,F?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let I=typeof i=="function"?i($):i;return u.createElement(xe,{...l,"aria-current":T,className:R,ref:m,style:I,to:s,viewTransition:c},typeof o=="function"?o($):o)});Tt.displayName="NavLink";var Dt=u.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:a,replace:r,state:i,method:s=U,action:c,onSubmit:o,relative:l,preventScrollReset:m,viewTransition:g,...f},p)=>{let d=Mt(),y=Bt(c,{relative:l}),v=s.toLowerCase()==="get"?"get":"post",h=typeof c=="string"&&we.test(c),w=x=>{if(o&&o(x),x.defaultPrevented)return;x.preventDefault();let E=x.nativeEvent.submitter,b=(E==null?void 0:E.getAttribute("formmethod"))||s;d(E||x.currentTarget,{fetcherKey:t,method:b,navigate:n,replace:r,state:i,relative:l,preventScrollReset:m,viewTransition:g})};return u.createElement("form",{ref:p,method:v,action:y,onSubmit:a?o:w,...f,"data-discover":!h&&e==="render"?"true":void 0})});Dt.displayName="Form";function Nt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ce(e){let t=u.useContext(A);return C(t,Nt(e)),t}function Ft(e,{target:t,replace:n,state:a,preventScrollReset:r,relative:i,viewTransition:s}={}){let c=Ke(),o=N(),l=B(e,{relative:i});return u.useCallback(m=>{if(dt(m,t)){m.preventDefault();let g=n!==void 0?n:q(o)===q(l);c(e,{replace:g,state:a,preventScrollReset:r,relative:i,viewTransition:s})}},[o,c,l,n,a,t,e,r,i,s])}var At=0,Ot=()=>`__${String(++At)}__`;function Mt(){let{router:e}=Ce("useSubmit"),{basename:t}=u.useContext(k),n=at();return u.useCallback(async(a,r={})=>{let{action:i,method:s,encType:c,formData:o,body:l}=pt(a,t);if(r.navigate===!1){let m=r.fetcherKey||Ot();await e.fetch(m,n,r.action||i,{preventScrollReset:r.preventScrollReset,formData:o,body:l,formMethod:r.method||s,formEncType:r.encType||c,flushSync:r.flushSync})}else await e.navigate(r.action||i,{preventScrollReset:r.preventScrollReset,formData:o,body:l,formMethod:r.method||s,formEncType:r.encType||c,replace:r.replace,state:r.state,fromRouteId:n,flushSync:r.flushSync,viewTransition:r.viewTransition})},[e,t,n])}function Bt(e,{relative:t}={}){let{basename:n}=u.useContext(k),a=u.useContext(L);C(a,"useFormAction must be used inside a RouteContext");let[r]=a.matches.slice(-1),i={...B(e||".",{relative:t})},s=N();if(e==null){i.search=s.search;let c=new URLSearchParams(i.search),o=c.getAll("index");if(o.some(m=>m==="")){c.delete("index"),o.filter(g=>g).forEach(g=>c.append("index",g));let m=c.toString();i.search=m?`?${m}`:""}}return(!e||e===".")&&r.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(i.pathname=i.pathname==="/"?n:S([n,i.pathname])),q(i)}function Wt(e,t={}){let n=u.useContext(he);C(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Ce("useViewTransitionState"),r=B(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=D(n.currentLocation.pathname,a)||n.currentLocation.pathname,s=D(n.nextLocation.pathname,a)||n.nextLocation.pathname;return H(r.pathname,s)!=null||H(r.pathname,i)!=null}new TextEncoder;export{xe as L,N as a,Ke as u};
