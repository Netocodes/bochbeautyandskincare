import { Carousel } from "flowbite-react";
import SlidingText from "../components/slidertext";
const HeroSection = () => {
  return (
    <div>
      <div className="w-full  h-[80dvh] sm:h-64 xl:h-80 2xl:h-[80dvh]">
        <Carousel indicators leftControl="left" rightControl="right">
          <img
            className="w-full h-full object-cover"
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            className="w-full h-full object-cover"
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            className="w-full h-full object-cover"
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            className="w-full h-full object-cover"
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            className="w-full h-full object-cover"
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>
      <SlidingText />
    </div>
  );
};

export default HeroSection;
