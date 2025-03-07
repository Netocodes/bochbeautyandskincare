import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa6";
const ServiceHero = () => {
return(
               
<div className="service rounded-xl">
<div className="max-w-[85rem] mx-auto px-4 py-12">
  
  <div className="flex flex-col md:flex-row items-center justify-around">
    <div className="">
      <h1 className="block text-3xl font-bold text-gray-200 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">Build Better Products</h1>
      <p className="mt-3 text-lg text-gray-200 dark:text-neutral-400">Introducing a new way for your brand to reach the creative community.</p>

       <div className="mt-8 text-white">
                <h2>Follow Us On:</h2>
                <div className="flex items-center gap-x-4 py-4">
                 <FaInstagram className="size-7" /> 
                 <FaTiktok className="size-7" /> 
                 <FaFacebook className="size-7" /> 
                </div>
       </div>
    </div>

    <div className="lg:col-span-4 mt-10 lg:mt-0">
      <img className=" serHero w-[500px] rounded-xl" src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80" alt="Hero Image" />
    </div>
    
  </div>
  
</div>
</div>

);
}
export default ServiceHero;