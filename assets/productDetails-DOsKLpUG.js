import{G as p,u as f,d as g,r as y,j as e,c,b as n}from"./index-Dr5-bID0.js";import N from"./error-page-OofxfGrc.js";import{R as b}from"./react-rater-DpcWUF85.js";import"./vendor-DUt4hQxu.js";function v(r){return p({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(r)}const w=()=>{const{addToCart:r,cartItems:o,UpdateQuantity:d}=f(),x=g(),[s,l]=y.useState(1),{product:t}=x.state||{},m=()=>{l(s+1)},u=()=>{s>1?l(s-1):alert("Who the fuck is this")};if(!t)return e.jsx("div",{children:e.jsx(N,{})});const i=o.some(a=>a.id===t.id),h=()=>{i?d(t.id,s):r(t,s)},j=t.price*s;return e.jsx("div",{children:e.jsx("div",{className:" container   mx-auto",children:e.jsx("section",{className:"text-gray-700 body-font overflow-hidden bg-white/50",children:e.jsx("div",{className:"container px-6 md:px-20 py-24 mx-auto",children:e.jsxs("div",{className:" flex flex-col md:flex-row  items-center justify-around gap-x-8 gap-y-8",children:[" ",e.jsx("div",{className:"w-full md:w-1/2 h-[200px] md:h-[500px] backdrop-blur-lg",children:e.jsx("img",{alt:"ecommerce",className:"w-full h-full object-contain object-center rounded border border-gray-200",src:t.image})}),e.jsxs("div",{className:"w-full md:w-1/2",children:[" ",e.jsx("h2",{className:"text-sm title-font text-gray-900 my-4 tracking-widest",children:t.category}),e.jsx("h1",{className:"text-gray-900 text-3xl title-font font-medium mb-1",children:t.title}),e.jsx("div",{className:"flex mb-4",children:e.jsxs("span",{className:"flex items-center text-xl md:text-2xl text-red-500",children:[" ",e.jsx(b,{total:5,rating:t.rating.rate,interactive:!1}),e.jsxs("span",{className:"text-xl text-gray-600 ml-3",children:["+",t.rating.count," reviews"]})]})}),e.jsx("p",{className:"leading-relaxed",children:t.description}),e.jsx("div",{className:"ml-6 py-6",children:e.jsx("ul",{children:t.features.map(a=>e.jsx("li",{className:"list-disc",children:a},a))})}),e.jsxs("div",{className:"w-2/3 my-3  flex h-8 items-stretch text-gray-600",children:[e.jsx("button",{onClick:()=>u(),className:"flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white",children:"-"}),e.jsx("div",{className:"flex w-full items-center justify-center text-black bg-gray-100 px-4 text-lg uppercase transition",children:s}),e.jsx("button",{onClick:()=>m(),className:"flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white",children:"+"})]}),e.jsxs("div",{className:"flex flex-col md:flex-row  gap-y-4 justify-around mt-6",children:[e.jsxs("span",{className:"title-font font-medium text-xl md:text-2xl text-gray-900",children:["Total Price: $",j]}),e.jsxs("div",{className:"flex",children:[e.jsx(c.Button,{onClick:()=>h(),className:"bg-[#8c2643]",placeholder:"",onPointerEnterCapture:()=>{},onPointerLeaveCapture:()=>{},children:i?"Update Quantity":"Add To Cart"}),e.jsxs("button",{className:"rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4",children:[e.jsx("svg",{fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-5 h-5",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"})}),e.jsx("p",{className:"sr-only",children:"button"})]})]})]})]})]})})})})})},k=()=>e.jsx("div",{className:"",children:e.jsxs(c.Breadcrumbs,{placeholder:void 0,onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,children:[e.jsx(n,{to:"/",className:"opacity-60",children:e.jsx(v,{className:"size-6 font-bold text-[#8c2643]"})}),e.jsx(n,{to:"/productPage",className:" text-[#8c2643] font-semibold opacity-60",children:e.jsx("span",{children:"Shop"})}),e.jsx("h1",{className:"text-[#8c2643] font-bold",children:"Product Details"})]})}),Q=()=>e.jsx("section",{className:" w-full h-dvh ",children:e.jsxs("div",{className:"absolute",children:[e.jsx("div",{className:" z-50 mt-4",children:e.jsx(k,{})}),e.jsx(w,{})]})});export{Q as default};
