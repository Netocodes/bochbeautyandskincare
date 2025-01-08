import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
const AdProduct = () => {
  return (
    <div>
      <motion.section
        className="sm:h-screen md:h-[50dvh] lg:h-screen flex items-center justify-center overflow-hidden"
        key={"bdk"}
        initial={{ opacity: 0, x: "100%" }} // Start off-screen to the right
        whileInView={{ opacity: 1, x: 0 }} // Move to normal position and become visible
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="max-w-[85rem] px-8 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
            <div>
              <img
                className="rounded-xl w-[500px]"
                src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                alt="Features Image"
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
                </div>
                <Button
                  children="See more Products"
                  className="bg-red-500"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AdProduct;
