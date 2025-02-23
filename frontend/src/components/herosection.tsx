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
      text: "Explore Our Natural Skincare Collections",
      image:
        "https://i.pinimg.com/736x/4a/82/29/4a822900869f41fe481d02f421fc7123.jpg",
      description:
        "Discover our range of natural skincare products, designed to nourish and rejuvenate your skin for a healthier, glowing look.",
      link: "/productPage",
      button: "Shop Now",
    },
    {
      id: 2,
      text: "Certified Skincare Formulator Delivering Beauty Worldwide.",
      image:
        "https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80",
      description:
        "Our certified skincare experts create custom formulas that cater to your unique skin needs, available for delivery worldwide.",
      link: "/contact",
      button: "Book Appointement",
    },
    {
      id: 3,
      text: "We Do International Deliveries",
      image:
        // "https://i.pinimg.com/736x/d0/3d/d7/d03dd7488c5db21e5627a3eb02a9b86c.jpg",
        "https://i.imghippo.com/files/PbO7m1719014190.png",
      description:
        "No matter where you are, our skincare products can reach you with international delivery options for a seamless shopping experience.",
      link: "/productPage",
      button: "Shop Now",
    },
    {
      id: 4,
      text: "Explore Our Products",
      image:
        "https://i.pinimg.com/736x/0d/74/f5/0d74f573417beabf6cf21c24caba5920.jpg",
      description:
        "Browse through our carefully curated selection of skincare and beauty products to find what’s perfect for you.",
      link: "/productPage",
      button: "Shop Now",
    },
    {
      id: 5,
      text: "See Our Testimonials",
      image:
        "https://i.pinimg.com/736x/0b/a3/f8/0ba3f818f5c2311e1e8fa13f726fb564.jpg",
      description:
        "Read reviews and testimonials from happy customers who have transformed their skincare routine with our products.",
      link: "/",
      button: "Shop Now",
    },
  ];

  return (
    <div>
      <div className="w-full  bg-gradient-to-r from-[#fda4af]  to-[#f43f5e] h-[75dvh] md:h-[60dvh] lg:h-[80dvh]">
        <Carousel
          indicators={false}
          slideInterval={5000}
          leftControl
          rightControl
        >
          {images.map((data, index) => (
            <div key={index} className="w-full ">
              <div className=" flex flex-col items-center justify-center h-full">
                {/* Div with background image */}
                <div
                  className={` relative   bg-center w-full h-full flex items-center justify-center`}
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
                    <h1 className="text-white text-3xl font-bold text-left bg-[#8c2643]/75 shadow-lg py-8 md:py-8 px-6 sm:text-6xl md:text-5xl">
                      {data.text}
                    </h1>
                    <p className="max-w-xl mx-auto font-semibold  bg-gray-300/75 backdrop-blur-md py-6  text-lg text-left sm:text-lg md:text-xl px-6">
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
                    className="absolute hero w-full md:w-[95%] h-[75dvh] md:h-[75dvh]  object-cover object-center"
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
