import{G as c,r as i,A as u,u as p,j as e,C as j,B as f,b as v}from"./index-CguI1WBD.js";import{R as N}from"./react-rater-BhghPPSj.js";import"./vendor-DUt4hQxu.js";function y(s){return c({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"},child:[]}]})(s)}function w(s){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Heart"},child:[{tag:"path",attr:{d:"M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"},child:[]}]}]})(s)}const A=()=>{const[s,d]=i.useState([]),[n,r]=i.useState(!1),o=u(),{addToCart:x}=p();i.useEffect(()=>{m()},[]);const m=async()=>{r(!0);try{const a=await(await fetch("/products.json")).json();setTimeout(()=>{d(a),r(!1)},2e3)}catch(t){console.error("Error fetching products:",t)}},h=(t,a)=>{const l=t.find(g=>g.id===a);l&&o("/product/productDetail/",{state:{product:l}})};return e.jsxs("div",{className:"w-full bg-white/50 overflow-y-auto",children:[e.jsx("h1",{className:" text-3xl",children:"Products"}),n?e.jsx("div",{className:"text-5xl text-center",children:"Loading"}):e.jsx("div",{children:e.jsx("div",{className:"grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6",children:s.map(t=>[e.jsx("div",{className:"  ",children:e.jsxs("div",{className:"rounded-lg border border-gray-200 bg-white/50 p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800",children:[e.jsx("div",{className:"h-56 w-full",children:e.jsx("a",{href:"#",children:e.jsx("img",{className:"mx-auto h-full ",loading:"lazy",src:t.image,alt:""})})}),e.jsxs("div",{className:"pt-6",children:[e.jsxs("div",{className:"mb-4 flex items-center justify-between gap-4",children:[e.jsxs("span",{className:"me-2 rounded bg-primary-100 px-2.5 py-0.5 text-md font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300",children:[" ","Shipped Worldwide"]}),e.jsxs("div",{className:"flex items-center justify-end gap-2 ",children:[e.jsx("div",{onClick:a=>{a.preventDefault(),r(!0),setTimeout(()=>{h(s,t.id)},3e3)},children:e.jsx(y,{size:20})}),e.jsx(w,{onClick:()=>j.success("You've Liked this post"),size:20,className:" text-red-500"})]})]}),e.jsx("h2",{className:"text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white",children:t.title.split(" ").slice(0,4).join(" ")}),e.jsx("div",{className:"mt-2 ",children:e.jsxs("span",{className:"flex  flex-row items-center text-xl md:text-2xl ",children:[e.jsx("div",{className:"flex",children:e.jsx(N,{total:5,rating:t.rating.rate,interactive:!1})}),e.jsxs("span",{className:"text-xl text-gray-600 ml-3",children:["+",t.rating.count," reviews"]})]})}),e.jsxs("div",{className:"mt-4 flex items-center justify-between gap-4",children:[e.jsx("p",{className:"text-2xl font-extrabold leading-tight text-gray-900 dark:text-white",children:t.price}),e.jsx(f,{richColors:!0,className:"",position:"bottom-right"}),e.jsx(v.Button,{children:"Add  cart",onClick:()=>{x(t)},className:"bg-[#8c2643]",placeholder:void 0,onPointerEnterCapture:"",onPointerLeaveCapture:""})]})]})]})},t.id)])})})]})};export{A as default};
