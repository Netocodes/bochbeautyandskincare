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
      image: "https://res.cloudinary.com/de7tyskql/image/upload/f_auto,q_auto/s3vzy94xmrtpvb7zkxvr",
      description:
        "Discover our range of natural skincare products, designed to nourish and rejuvenate your skin for a healthier, glowing look.",
      link: "/productPage",
      button: "Shop Now",
    },
    {
      id: 2,
      text: "Certified Skincare Formulator Delivering Beauty Worldwide.",
      image:"https://res.cloudinary.com/de7tyskql/image/upload/f_auto,q_auto/s3vzy94xmrtpvb7zkxvr",
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
        "https://res.cloudinary.com/de7tyskql/image/upload/f_auto,q_auto/my5urrlzlgkofiuicv8s",
      description:
        "No matter where you are, our skincare products can reach you with international delivery options for a seamless shopping experience.",
      link: "/productPage",
      button: "Shop Now",
    },
    {
      id: 4,
      text: "Explore Our Products",
      image:
        "https://res.cloudinary.com/de7tyskql/image/upload/f_auto,q_auto/dkk8lchyqrgsjanqyi7h",
      description:
        "Browse through our carefully curated selection of skincare and beauty products to find what’s perfect for you.",
      link: "/productPage",
      button: "Shop Now",
    },
    {
      id: 5,
      text: "See Our Testimonials",
      image:
        "https://res.cloudinary.com/de7tyskql/image/upload/f_auto,q_auto/xua0qrbkj6i0yf6eisgw",
      description:
        "Read reviews and testimonials from happy customers who have transformed their skincare routine with our products.",
      link: "/",
      button: "Shop Now",
    },
  ];

  return (
    <div>
      <div className="w-full  bg-gradient-to-r from-[#fda4af]  to-[#f43f5e] h-[75dvh] md:h-[60dvh] lg:h-[75dvh]">
        <Carousel
          indicators={false}
          slideInterval={6000}
          leftControl
          rightControl
          
        >
          {images.map((data, index) => (
            <div key={index} className="w-full ">
              <div className=" flex flex-col items-center justify-center h-full">
                {/* Div with background image */}
                <div
                  className={`   md:w-full h-[75dvh]   bg-no-repeat bg-cover  bg-center  w-full  flex items-center justify-center`}
                  style={{
                    backgroundImage: `url(${data.image})`,
                  }}
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
                    <h2 className="text-white text-3xl font-bold text-center bg-[#8c2643]/75 shadow-lg py-8 md:py-8 px-6 sm:text-6xl  md:text-4xl">
                      {data.text}
                    </h2>
                    <p className="max-w-xl mx-auto font-semibold text-gray-100 bg-gray-700/55 backdrop-blur-md py-6  text-lg text-justify sm:text-lg md:text-xl px-6">
                      {data.description}
                    </p>
                    <motion.div
                    className="mx-auto"
                    animate={{
                      scale: [1, 1.2, 1], // Scale up to 1.5x and back to original size
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 1.5, // 1.5 seconds to complete one cycle
                      ease: "easeInOut", // Smooth ease-in and ease-out transitions
                    }}
                                                
                                              >
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
                   
                  </motion.div>
                  {/* <img
                    className="absolute hero w-full md:w-[95%] h-[75dvh] md:h-[75dvh]  object-cover object-center"
                    src={data.image}
                    alt=""
                  /> */}
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
