import{G as n,j as e,b as I,r as l,a as r,c as S,m as H,d as z}from"./index-B1DOWJHV.js";import{L as E,T as F,D as m,a as j}from"./ToggleSwitch-V_sfLH59.js";import{u as T,R as B}from"./react-rater-DumkZ07w.js";import{a as V}from"./chunk-K6AXKMTT-ezOxe_m_.js";import"./vendor-DUt4hQxu.js";function Z(a){return n({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M2.25 4.5A.75.75 0 0 1 3 3.75h14.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm14.47 3.97a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 1 1-1.06 1.06L18 10.81V21a.75.75 0 0 1-1.5 0V10.81l-2.47 2.47a.75.75 0 1 1-1.06-1.06l3.75-3.75ZM2.25 9A.75.75 0 0 1 3 8.25h9.75a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9Zm0 4.5a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"},child:[]}]})(a)}function A(a){return n({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M6 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM15.75 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3H18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.25ZM6 12.75a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3v-2.25a3 3 0 0 0-3-3H6ZM17.625 13.5a.75.75 0 0 0-1.5 0v2.625H13.5a.75.75 0 0 0 0 1.5h2.625v2.625a.75.75 0 0 0 1.5 0v-2.625h2.625a.75.75 0 0 0 0-1.5h-2.625V13.5Z"},child:[]}]})(a)}function D(a){return n({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M22 3.41 16.71 8.7 20 12h-8V4l3.29 3.29L20.59 2 22 3.41zM3.41 22l5.29-5.29L12 20v-8H4l3.29 3.29L2 20.59 3.41 22z"},child:[]}]})(a)}function R(a){return n({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z"},child:[]}]})(a)}function O(a){return n({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"},child:[]}]})(a)}function W({search:a,onChange:x}){return e.jsx("div",{className:"relative flex w-full md:max-w-[300px]",children:e.jsxs("div",{className:"max-w-md ",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(E,{className:"hidden md:flex",htmlFor:"search",value:"Search Products"})}),e.jsx("div",{className:"relative flex items-center w-full bg-white border border-gray-300 rounded-md shadow-sm focus-within:ring-1 focus-within:ring-[#8c2643] focus-within:ring-opacity-50",children:e.jsx(F,{id:"search",className:"border-red-500",type:"search",value:a,size:32,icon:I,rightIcon:R,placeholder:"Find your product",onChange:h=>x(h.target.value)})})]})})}const K=()=>{const[a,x]=l.useState([]),[h,d]=l.useState(!1),[i,v]=l.useState(""),[f,w]=l.useState(!1),[u,y]=l.useState("all"),b=V(),{addToCart:N,likePost:C}=T();l.useEffect(()=>{L()},[]);const L=async()=>{d(!0);try{const s=await(await fetch("/bochbeautyandskincare/products.json")).json();setTimeout(()=>{x(s),d(!1)},100)}catch(t){console.error("Error fetching products:",t)}},g=a.filter(t=>{const s=u==="all"||t.category.toLowerCase()===u,c=t.title.toLowerCase().includes(i.toLowerCase())||t.description.toLowerCase().includes(i.toLowerCase())||t.category.toLowerCase().includes(i.toLowerCase())||t.seo.toLowerCase().includes(i.toLowerCase())||t.features.join(" ").toLowerCase().includes(i.toLowerCase());return s&&c}),p=(t,s)=>{const c=t.find(k=>k.id===s);c&&b("/product/productDetail/",{state:{product:c}})},M=[{id:1,title:"all",icon:"CgSmileNone"},{id:2,title:"men's clothing",icon:""},{id:3,title:"women's clothing",icon:""},{id:4,title:"electronics",icon:""},{id:5,title:"jewelery",icon:""},{id:6,title:"jewelerycopy",icon:""}],o=()=>w(!f),P=t=>{y(t),o()};return e.jsxs("div",{className:"w-full bg-white/50 py-12 overflow-y-auto",children:[e.jsxs("div",{className:"max-w-2xl text-center mx-auto mb-10 lg:mb-14",children:[e.jsx("h2",{className:"text-2xl text-gray-800 my-4 font-bold md:text-4xl md:leading-tight ",children:"Welcome To Our Shop"}),e.jsx("p",{className:"mt-1 px-6 text-gray-700 dark:text-neutral-400",children:"We've helped some great companies brand, design and get to market."})]}),h?e.jsx("div",{className:"  h-dvh text-5xl flex items-center ",children:"Loading"}):e.jsxs("div",{className:" ",children:[e.jsxs("div",{className:"w-full  bg-gray-500/45 flex flex-col-reverse md:flex-row items-center justify-between gap-4 px-4 md:px-12 py-4",children:[e.jsxs("div",{className:"flex  items-center justify-self-start gap-4 px-4",children:[e.jsx("div",{className:"flex flex-row",onClick:o,children:e.jsxs(r.Button,{className:"flex items-center gap-x-2 px-2 py-3 bg-[#8c2643]",placeholder:void 0,onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,children:[e.jsx(S,{size:16,className:" text-[#fff0f5]"})," Filter"]})}),e.jsxs(m,{edge:!0,open:f,onClose:o,position:"bottom",className:"w-full bottom-0 shadow-lg bg-[#f3f3f3]  py-10 z-50  flex-col md:flex-row items-center justify-around ",children:[e.jsx(m.Header,{openIcon:D,closeIcon:Z,title:"Filters",titleIcon:A,onClick:o}),e.jsx(m.Items,{className:"drawer bg-black/15 overflow-y-auto h-full w-full md:w-[80%] mx-auto",children:e.jsx("div",{className:" h-[50dvh]  grid grid-cols-2 gap-4 p-4 lg:grid-cols-3",children:M.map(({id:t,title:s})=>e.jsx("div",{onClick:()=>P(s.toLowerCase()),children:e.jsx("div",{className:"cursor-pointer",children:e.jsxs("figure",{className:"relative bg-[#8c2643] h-48 object-cover w-full md:w-[auto]",children:[e.jsx("img",{className:"h-full w-full px-0 md:px-3 rounded-xl object-cover object-center",src:"https://i.pinimg.com/736x/d1/a8/3d/d1a83d1b34284ad271be2a0a4df1da0c.jpg",alt:"nature image"}),e.jsx("div",{className:"absolute bottom-0 w-full px-2 md:px-6 py-4 bg-gray-700 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-30 backdrop-saturate-150 backdrop-contrast-100  leading-tight",children:e.jsx("h2",{className:"text-semibold font-playfair text-md md:text-xl text-white",children:s})})]})})},t))})})]}),e.jsx("div",{children:e.jsxs(r.Menu,{animate:{mount:{y:0},unmount:{y:25}},children:[e.jsx(r.MenuHandler,{children:e.jsxs(r.Button,{placeholder:void 0,onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,className:" bg-[#8c2643]",children:[" ","Menu"]})}),e.jsxs(r.MenuList,{placeholder:void 0,onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,children:[e.jsx(r.MenuItem,{placeholder:void 0,onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,children:"Menu Item 1"}),e.jsx(r.MenuItem,{placeholder:void 0,onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,children:"Menu Item 2"}),e.jsx(r.MenuItem,{placeholder:void 0,onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,children:"Menu Item 3"})]})]})})]}),e.jsx("div",{className:"mr-0 px-8 flex items-center gap-4",children:e.jsx("div",{children:e.jsx(W,{search:i,onChange:v})})})]}),e.jsx("div",{children:e.jsxs("h1",{className:"py-4 px-4",children:["Displaying Products for"," ",e.jsxs("span",{className:"text-lg font-semibold italic",children:['" ',u,' "']})]})}),g.length===0?e.jsx("div",{className:"w-full h-56 bg-gray-100 flex items-center justify-center",children:e.jsx("h1",{className:"text-2xl",children:"No Product Found"})}):e.jsx("div",{className:"bg-[#f8f4f4] grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 py-5",children:g.map(t=>[e.jsxs("div",{className:"bg-[#fefefe]",children:[e.jsxs("div",{className:"rounded-lg border border-gray-200 bg-white/50 p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800",children:[e.jsxs("div",{className:"h-56 w-full pointer hover:cursor-pointer",onClick:s=>{s.preventDefault(),d(!0),setTimeout(()=>{p(a,t.id)},3e3)},children:[e.jsx("img",{className:"mx-auto h-full ",loading:"lazy",src:t.image,alt:""}),e.jsx("p",{className:"sr-only",children:"Netochukwu Codes"})]}),e.jsxs("div",{className:"pt-6",children:[e.jsxs("div",{className:"mb-4 flex items-center justify-between gap-4",children:[e.jsxs("span",{className:"me-2 rounded bg-primary-100 px-2.5 py-0.5 text-md font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300",children:[" ","Shipped Worldwide"]}),e.jsxs("div",{className:"flex items-center justify-end gap-3 z-[10]",children:[e.jsx(H.div,{animate:{scale:[1,1.2,1]},transition:{repeat:1/0,repeatType:"loop",duration:1.5,ease:"easeInOut"},onClick:s=>{s.preventDefault(),d(!0),setTimeout(()=>{p(a,t.id)},3e3)},children:e.jsx(j,{className:"text-md",content:"Veiw This Product",style:"light",children:e.jsx(z,{className:"text-[#8c2643]/75",size:28})})}),e.jsx(j,{content:"Add this to Favourite",style:"light",children:e.jsx(O,{onClick:()=>{C(t)},size:28,className:"text-red-500"})})]})]}),e.jsx("h2",{className:"text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white",children:t.title.split(" ").slice(0,4).join(" ")}),e.jsx("div",{className:"mt-2 ",children:e.jsxs("span",{className:"flex  flex-row items-center text-xl md:text-2xl ",children:[e.jsx("div",{className:"flex",children:e.jsx(B,{total:5,rating:t.rating.rate,interactive:!1})}),e.jsxs("span",{className:"text-xl text-gray-600 ml-3",children:["+",t.rating.count," reviews"]})]})}),e.jsxs("div",{className:"mt-4 flex items-center justify-between gap-4",children:[e.jsxs("p",{className:"text-2xl font-extrabold leading-tight text-gray-900 dark:text-white",children:["₺ ",t.price]}),e.jsx(r.Button,{children:"Add  cart",onClick:()=>{N(t,1)},className:"bg-[#8c2643]",placeholder:void 0,onPointerEnterCapture:"",onPointerLeaveCapture:""})]})]})]}),e.jsx("div",{className:""})]},t.id)])})]})]})};export{K as default};
