// import Products from "../assets/product.jpeg";
import Carousel from "../blocks/Components/Carousel/Carousel.jsx";
import HeroBg from "../assets/heroBg2.jpg";
import { Button } from "@material-tailwind/react";
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import ShinyText from "../blocks/TextAnimations/ShinyText/ShinyText.js";
import Threads from "../blocks/Backgrounds/Threads/Threads.js";
import { useMediaQuery } from "react-responsive";
const HeroSection = () => {
  const newLocal =
    "https://www.instagram.com/boch.beauty_skincare?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  const isMobilePhone = useMediaQuery({
    query: "(min-width: 324px) and (max-width: 480px)",
  });
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 320px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 500px) and (max-width: 900px)",
  });
  return (
    <div
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className={`relative h-[110dvh] md:h-[90dvh]   ${
        isSmallScreen ? "h-[150dvh] " : ""
      } ${isTablet ? "h-[85dvh]" : ""} bg-fixed overflow-scroll`}
    >
      <div className="absolute w-full h-full inset-0 ">
        <Threads
          amplitude={2.3}
          color={[132, 35, 62]}
          distance={0.8}
          enableMouseInteraction={true}
        />
      </div>

      <div
        className={`absolute w-full h-auto lg:h-[85dvh] gridlay  ${
          isTablet ? "md:flex flex-col gap-y-8" : ""
        } py-8 px-4 items-center justify-center gap-2  text-center z-[99] overflow-y-auto lg:overflow-y-hidden overflow-hidden`}
      >
        <div className=" w-full py-4 order-1 text-white cormorant">
          <ShinyText
            disabled={false}
            speed={3}
            className="text-4xl text-white lg:text-5xl font-bold"
          />

          <p className=" text-md md:text-lg font-light py-6 max-w-xl mx-auto">
            At boch, we offer a set of carefully curated skin care products like
            lotions, scrubs , oils, cleansers, face Creams and more... Made to
            satisfy and re-organize your skin naturally and efficiently.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button
              placeholder={"Schedule Call"}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              className="py-4 px-6 text-sm font-semibold text-gray-200 bg-orange-700 capitalize"
              onResize={undefined}
              onResizeCapture={undefined}
            >
              <a href="https://wa.me/+905384085304?text=Hello%2C%20I%27m%20interested%20in%20your%20services%21">
                Schedule call 📞
              </a>
            </Button>
            <Button
              placeholder={"Visit Shop"}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              className="py-4 px-6 text-sm font-semibold text-gray-200 bg-[#8c2643] hover:text-gray-700 capitalize"
              onResize={undefined}
              onResizeCapture={undefined}
            >
              <a href="/shop-page"> 🛍️ Visit Shop</a>
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2 mt-6">
            <h2 className="font-semibold">Reach out on our Socials @:</h2>
            <div className="flex items-center gap-x-6 py-2">
              <a href={newLocal}>
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
        <div className="order-2 md:-mt-5 md:px-4">
          <div className="w-full flex items-center justify-center">
            <Carousel
              baseWidth={isMobilePhone ? 350 : 500}
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
