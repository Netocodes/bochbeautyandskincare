// import Products from "../assets/product.jpeg";
import Carousel from "../blocks/Components/Carousel/Carousel.jsx";
import HeroBg from "../assets/heroBg2.jpg";
import { Button } from "@material-tailwind/react";
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import ShinyText from "../blocks/TextAnimations/ShinyText/ShinyText.js";
import Threads from "../blocks/Backgrounds/Threads/Threads.js";
const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="relative h-screen md:h-[85dvh] mt-20 md:mt-20  font-serif bg-fixed overflow-hidden"
    >
      <div className="absolute w-full h-full inset-0 ">
        <Threads
          amplitude={2.3}
          color={[162, 0, 255]}
          distance={0.8}
          enableMouseInteraction={true}
        />
      </div>

      <div className="absolute w-full h-screen gridlay items-center justify-center gap-2  text-center z-[99] overflow-y-auto overflow-hidden">
        <div className=" w-full py-4 order-2 md:order-1 text-white">
          <ShinyText
            disabled={false}
            speed={3}
            className="text-4xl text-white "
          />

          <p className="uppercase text-sm py-6 px-2">
            With our collections of skin and face products
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button
              placeholder={"Schedule Call"}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              className="py-2 text-sm font-semibold text-gray-200 bg-gray-200/25 border-4 rounded-tr-full hover:bg-[#861349] hover:text-white hover:border-none border-[#861349] capitalize"
            >
              <a href="/shop-page">Schedule call 📞</a>
            </Button>
            <Button
              placeholder={"Visit Shop"}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              className="py-2 text-sm font-semibold text-gray-200  hover:text-gray-700 bg-[#861349] hover:bg-gray-200/25 border-4 rounded-tl-full border-[#861349] capitalize"
            >
              <a href="/shop-page">Visit Shop 🛍️</a>
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2 mt-6">
            <h2 className="font-semibold">Reach out on our Socials @:</h2>
            <div className="flex items-center gap-x-6 py-2">
              <a href="https://www.instagram.com/boch.beauty_skincare?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <FaInstagram className="size-8" />
              </a>
              <a href="https://wa.me/+905384085304?text=Hello%2C%20I%27m%20interested%20in%20your%20services%21">
                <FaWhatsapp className="size-8" />{" "}
              </a>
              <a href="https://www.tiktok.com/@boch.beauty_skincare">
                <FaTiktok className="size-8" />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 md:-mt-5 md:px-4">
          <div className="">
            <Carousel
              baseWidth={350}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
