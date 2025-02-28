import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SlidingText from "../components/slidertext";
import BeautyProduct from "../assets/BeautyProduct.jpeg"
const AdProduct = () => {
  return (
    <div>
      <motion.section
        className="h-auto md:h-[auto] lg:h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, y: "20%" }}
        whileInView={{ opacity: 1, y: 0 }} // Move to normal position and become visible
        // viewport={{ once: false }}
        transition={{
          duration: 1,
          ease: "easeIn",
        }}
      >
        <div className="w-full md:max-w-[85rem]  px-8 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="md:grid md:grid-cols-2 md:items-center md:gap-6 xl:gap-32">
            <div className="w-full md:w-[500px] h-[300px] md:h-[500px] bg-[#861349]">
              <img
                className="w-full h-full object-cover object-center rounded-2xl"
                src={BeautyProduct}
                alt="Features Image"
                loading="lazy"
              />
            </div>

            <div className="mt-5 sm:mt-10 lg:mt-0">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-2 md:space-y-4">
                  <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                    We tackle the challenges start-ups face
                  </h2>
                  <p className="text-gray-500 dark:text-neutral-500">
                    Besides working with start-up enterprises as a partner for
                    digitalization, we have built enterprise products for common
                    pain points that we have encountered in various products and
                    projects.
                  </p>
                  <ul className="text-gray-700 list-disc list-inside ml-3 py-3">
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li></ul>
                </div>
                <div className="my-4">
                  <Link to={"./productPage"}>
                    <Button
                      children="See more Products"
                      className="bg-[#8c2643]"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <SlidingText />
    </div>
  );
};

export default AdProduct;
