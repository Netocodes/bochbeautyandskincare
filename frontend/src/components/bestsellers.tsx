import { Button } from "@material-tailwind/react";
import ProductShowcase from "../components/productshowcase";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const BestSellers = () => {
  return (
    <div className=" py-8 md:py-20">
      <div className="sm:w-full md:max-w-[70%] lg:max-w-[60%] bg-black/10  mx-auto flex items-center justify-center py-3 px-2 my-3">
        <motion.h1
          className="text-2xl text-gray-600 md:text-3xl leading-tight tracking-tight"
          initial={{ opacity: 0, x: "50%" }}
          whileInView={{ opacity: 1, x: 0 }} // Move to normal position and become visible
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          Customer Favorites{" "}
        </motion.h1>
      </div>
      <section className=" md:max-w-[85rem] my-4 flex flex-col gap-y-20 md:flex-col lg:flex-row items-center justify-around py-8 md:w-full md:px-5  lg:px-9 lg:py-8 mx-auto">
        <motion.div
          className="w-[250px] -ml-24 md:-ml-[350px] lg:-ml-[20px] md:w-[350px] lg:w-[350px] lg:-mt-28 py-6 md:py-12 lg:py-8 px-4 outline-red-500 outline-dashed outline-4 rounded-tr-[62px]"
          initial={{ opacity: 0, x: "-50%" }}
          whileInView={{ opacity: 1, x: 0 }} // Move to normal position and become visible
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          <h2 className="text-xl md:text-3xl lg:text-2xl font-sans leading-10 tracking-tighter font-normal text-gray-900">
            These are some of our{" "}
            <i className="text-2xl font-bold md:text-4xl lg:text-5xl">
              "Best Sellers"
            </i>
          </h2>
        </motion.div>
        <div className="w-full md:max-w-[90%] lg:max-w-[65%] px-1 md:px-4">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: "50%" }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} // Move to normal position and become visible
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <ProductShowcase />
            <motion.div className="absolute my-6 right-2 md:mt-8 md:right-2 lg:mt-8 lg:right-2"
             animate={{
                                                              scale: [1, 0.9, 1], // Scale up to 1.5x and back to original size
                                                            }}
                                                            transition={{
                                                              repeat: Infinity,
                                                              repeatType: "loop",
                                                              duration: 1.5, // 1.5 seconds to complete one cycle
                                                              ease: "easeInOut", // Smooth ease-in and ease-out transitions
                                                            }}>
              <Link to={"/productPage"}>
                <Button
                  children="Veiw More"
                  className="bg-[#8c2643]"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BestSellers;
