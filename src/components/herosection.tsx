import { Button } from "@material-tailwind/react";
import { Carousel } from "flowbite-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type imageType = {
  id: number;
  image: string;
  text: string;
  description: string;
  link: string;
  button: string;
};
const HeroSection = () => {
  const images: imageType[] = [
    {
      id: 1,
      text: "Explore Our Natural skincare Collections",
      image:
        "https://i.pinimg.com/236x/4f/08/9b/4f089bc73104781bf12fcd058f572372.jpg",
      description:
        "You're absolutely right! Using negative margins like lg:-ml-12 is often a quick solution but might not always be the most ideal, especially when considering responsive ",
      link: "/shop",
      button: "Shop Now",
    },
    {
      id: 2,
      text: "Visit Our shop Section to browse our beauty & skinare remedies",
      image:
        "https://i.pinimg.com/474x/cf/12/4e/cf124e2e4aeff0a99778a8d7f01c5414.jpg",
      description:
        "You're absolutely right! Using negative margins like lg:-ml-12 is often a quick solution but might not always be the most ideal, especially when considering responsive ",
      link: "/shop",
      button: "Shop Now",
    },
    {
      id: 3,
      text: "We do International Deliveries",
      image:
        "https://i.pinimg.com/736x/d0/3d/d7/d03dd7488c5db21e5627a3eb02a9b86c.jpg",
      description:
        "You're absolutely right! Using negative margins like lg:-ml-12 is often a quick solution but might not always be the most ideal, especially when considering responsive ",
      link: "/shop",
      button: "Shop Now",
    },
    {
      id: 4,
      text: "Talk with a Proffesional",
      image:
        "https://i.pinimg.com/736x/2b/6c/b1/2b6cb17633d27ea7291912d2aa9fe1aa.jpg",
      description:
        "You're absolutely right! Using negative margins like lg:-ml-12 is often a quick solution but might not always be the most ideal, especially when considering responsive ",
      link: "/shop",
      button: "Shop Now",
    },
    {
      id: 5,
      text: "See our Testimonails",
      image:
        "https://i.pinimg.com/736x/0b/a3/f8/0ba3f818f5c2311e1e8fa13f726fb564.jpg",
      description:
        "You're absolutely right! Using negative margins like lg:-ml-12 is often a quick solution but might not always be the most ideal, especially when considering responsive ",
      link: "/shop",
      button: "Shop Now",
    },
  ];

  return (
    <div>
      <div className="w-full bg-[#9b6060] h-[80dvh] md:h-[60dvh] lg:h-[80dvh]">
        <Carousel
          indicators={true}
          slideInterval={5000}
          leftControl
          rightControl
        >
          {images.map((data, index) => (
            <div key={index} className="w-full">
              <div className="flex flex-col items-center justify-center h-full">
                {/* Div with background image */}
                <div
                  className={` relative  bg-center w-full h-full flex items-center justify-center`}
                >
                  {/* Text over the image */}
                  <motion.div
                    className="absolute left-0 w-full lg:w-[800px] py-32  px-6 space-y-4 bg-gray-500/25 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-0 backdrop-saturate-100 backdrop-contrast-150 z-50 flex flex-col items-left justify-center lg:pl-12 my-4"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 2,
                      duration: 1,
                      ease: "easeInOut",
                    }}
                  >
                    <h1 className="text-white text-3xl font-bold text-left bg-[#8c2643]/75 shadow-lg py-2 md:py-8 px-6 sm:text-6xl md:text-5xl">
                      {data.text}
                    </h1>
                    <p className="max-w-xl mx-auto text-white bg-gray-800/50 backdrop-blur-lg py-4  text-base text-left sm:text-lg md:text-xl px-6">
                      {data.description}
                    </p>
                    <Button
                      className="bg-[#8c2643] text-white px-8 mx-auto"
                      ripple={true}
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      <Link to={data.link}>{data.button}</Link>
                    </Button>
                  </motion.div>
                  <img
                    className="absolute w-full object-contain"
                    src={data.image}
                    alt=""
                  />
                </div>
                {/* End of div with text */}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
