import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import HeroBg from "../assets/heroBg2.jpg"
import ProductImage from "../assets/product.jpeg";
const ServiceHero = () => {
return(
               
<div className="bg-[#850c48] rounded-xl" 
style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
<div className="max-w-[65rem]  mx-auto px-4 pt-24 py-6">
  
  <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-y-6 mt-8">
    <div className="">
      <h1 className="block text-3xl font-bold text-gray-200 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">Glow Naturally, Inside & Out</h1>
      <p className="mt-3 text-lg text-gray-200 dark:text-neutral-400">Chiri’s skincare products are made to naturally feed your skin with the nutrients it loves.</p>

       <div className="mt-8 text-white hidden md:block">
                <h2>Follow Us On:</h2>
                <div className="flex items-center gap-x-4 py-4">
                  <a href="https://www.instagram.com/boch.beauty_skincare?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                  <FaInstagram className="size-7" /></a>
                  <a href="https://wa.me/+905384085304?text=Hello%2C%20I%27m%20interested%20in%20your%20services%21"><FaWhatsapp className="size-7" /> </a>
                  <a href="https://www.tiktok.com/@boch.beauty_skincare"><FaTiktok className="size-7" /> </a>
                 
                 
                 
                </div>
       </div>
    </div>

    <div className=" flex items-center justify-end md:justify-center">
      <img className="h-96 rounded-xl" src={ProductImage} alt="Hero Image" />
    </div>
    
  </div>
  
</div>
</div>

);
}
export default ServiceHero;