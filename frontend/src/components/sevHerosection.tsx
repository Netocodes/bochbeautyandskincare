import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
const ServiceHero = () => {
return(
               
<div className="bg-[#850c48] rounded-xl" 
style={{
  backgroundImage: `url('https://res.cloudinary.com/de7tyskql/image/upload/f_auto,q_auto/qujv6omt9oe4sieo7f28')`,
}}>
<div className="max-w-[85rem] mx-auto px-4 py-12">
  
  <div className="flex flex-col md:flex-row items-center justify-around">
    <div className="">
      <h1 className="block text-3xl font-bold text-gray-200 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">Glow Naturally, Inside & Out</h1>
      <p className="mt-3 text-lg text-gray-200 dark:text-neutral-400">Chiri’s skincare products are made to naturally feed your skin with the nutrients it loves.</p>

       <div className="mt-8 text-white">
                <h2>Follow Us On:</h2>
                <div className="flex items-center gap-x-4 py-4">
                  <a href="https://www.instagram.com/boch.beauty_skincare?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                  <FaInstagram className="size-7" /></a>
                  <a href="https://wa.me/+905384085304?text=Hello%2C%20I%27m%20interested%20in%20your%20services%21"><FaWhatsapp className="size-7" /> </a>
                  <a href="https://www.tiktok.com/@boch.beauty_skincare"><FaTiktok className="size-7" /> </a>
                 
                 
                 
                </div>
       </div>
    </div>

    <div className="lg:col-span-4 mt-10 lg:mt-0">
      <img className="  w-[500px] h-[350px] rounded-xl" src="https://res.cloudinary.com/de7tyskql/image/upload/f_auto,q_auto/qujv6omt9oe4sieo7f28" alt="Hero Image" />
    </div>
    
  </div>
  
</div>
</div>

);
}
export default ServiceHero;