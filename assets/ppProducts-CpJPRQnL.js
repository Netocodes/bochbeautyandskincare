import{G as c,r as i,A as p,u as j,j as e,b as f}from"./index-Cj1eTw-U.js";import{R as v}from"./react-rater-BRcnq7W_.js";import"./vendor-DUt4hQxu.js";function N(s){return c({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"},child:[]}]})(s)}function y(s){return c({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"},child:[]}]})(s)}const k=()=>{const[s,d]=i.useState([]),[n,r]=i.useState(!1),o=p(),{addToCart:x,likePost:m}=j();i.useEffect(()=>{h()},[]);const h=async()=>{r(!0);try{const a=await(await fetch("/products.json")).json();setTimeout(()=>{d(a),r(!1)},2e3)}catch(t){console.error("Error fetching products:",t)}},g=(t,a)=>{const l=t.find(u=>u.id===a);l&&o("/product/productDetail/",{state:{product:l}})};return e.jsxs("div",{className:"w-full bg-white/50 overflow-y-auto",children:[e.jsx("h1",{className:" text-3xl",children:"Products"}),n?e.jsx("div",{className:"text-5xl text-center",children:"Loading"}):e.jsx("div",{children:e.jsx("div",{className:"grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6",children:s.map(t=>[e.jsx("div",{className:"  ",children:e.jsxs("div",{className:"rounded-lg border border-gray-200 bg-white/50 p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800",children:[e.jsx("div",{className:"h-56 w-full",children:e.jsxs("a",{href:"#",children:[e.jsx("img",{className:"mx-auto h-full ",loading:"lazy",src:t.image,alt:""}),e.jsx("p",{className:"sr-only",children:"Netochukwu Codes"})]})}),e.jsxs("div",{className:"pt-6",children:[e.jsxs("div",{className:"mb-4 flex items-center justify-between gap-4",children:[e.jsxs("span",{className:"me-2 rounded bg-primary-100 px-2.5 py-0.5 text-md font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300",children:[" ","Shipped Worldwide"]}),e.jsxs("div",{className:"flex items-center justify-end gap-2 ",children:[e.jsx("div",{onClick:a=>{a.preventDefault(),r(!0),setTimeout(()=>{g(s,t.id)},3e3)},children:e.jsx(N,{size:20})}),e.jsx(y,{onClick:()=>{m(t)},size:20,className:"text-red-500"})]})]}),e.jsx("h2",{className:"text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white",children:t.title.split(" ").slice(0,4).join(" ")}),e.jsx("div",{className:"mt-2 ",children:e.jsxs("span",{className:"flex  flex-row items-center text-xl md:text-2xl ",children:[e.jsx("div",{className:"flex",children:e.jsx(v,{total:5,rating:t.rating.rate,interactive:!1})}),e.jsxs("span",{className:"text-xl text-gray-600 ml-3",children:["+",t.rating.count," reviews"]})]})}),e.jsxs("div",{className:"mt-4 flex items-center justify-between gap-4",children:[e.jsx("p",{className:"text-2xl font-extrabold leading-tight text-gray-900 dark:text-white",children:t.price}),e.jsx(f.Button,{children:"Add  cart",onClick:()=>{x(t,1)},className:"bg-[#8c2643]",placeholder:void 0,onPointerEnterCapture:"",onPointerLeaveCapture:""})]})]})]})},t.id)])})})]})};export{k as default};
