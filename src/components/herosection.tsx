import { FaRegCircleLeft, FaRegCircleRight } from "react-icons/fa6";
import { Carousel } from "flowbite-react";
import SlidingText from "../components/slidertext";

const HeroSection = () => {
  return (
    <div>
      <div className="w-full  h-[80dvh] md:h-[60dvh] lg:h-[80dvh]">
        <Carousel
          indicators
          leftControl={<FaRegCircleLeft className="text-white" size={32} />}
          rightControl={<FaRegCircleRight className="text-white" size={32} />}
        >
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
