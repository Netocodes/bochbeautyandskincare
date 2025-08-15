import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SlidingText from "../components/slidertext";
import { Toaster, toast } from "sonner";
import { FaCircleCheck } from "react-icons/fa6";

<Toaster
  richColors
  className="mt-24 md:mt-12 lg:mt-20 z-50"
  position="top-right"
/>;
const AdProduct = () => {
  const textToCopy = "Restoration Body Oil";
  const handlecopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      toast.success("Text copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
      toast.error("Failed to copy: ");
    }
  };
  return (
    <motion.div
      className="mt-8"
      initial={{ opacity: 0, y: "20%" }}
      whileInView={{ opacity: 1, y: 0 }} // Move to normal position and become visible
      // viewport={{ once: false }}
      transition={{
        duration: 1,
        ease: "easeIn",
      }}
    >
      <section className="h-auto lg:h-[85dvh] flex items-center justify-center overflow-hidden">
        <div className="w-full md:max-w-[75rem]  px-8 sm:px-6 lg:px-8  mx-auto">
          <div className="flex items-center justify-center flex-col gap-2 py-8 lg:py-16">
            <h1 className="text-2xl text-center underline underline-offset-4 decoration-[#9e436f] text-gray-700">
              Chiri's favourite Recommendation
            </h1>
          </div>
          <div className="md:grid md:grid-cols-[2fr_4fr] md:items-center  md:gap-2 xl:gap-12">
            {/* image div */}
            <div className="w-full md:max-w-lg h-auto md:h-72 bg-[#861349]  p-1 rounded-2xl">
              <img
                className="w-full h-full object-center rounded-2xl"
                src={
                  "https://res.cloudinary.com/de7tyskql/image/upload/f_auto/q_auto/restoration-body-oil?_a=DATAg1AAZAA0"
                }
                alt="Features Image"
                loading="lazy"
              />
            </div>
            {/* image div */}

            <div className="py-2 mt-8 md:mt-2 md:px-8">
              <div className="">
                <div className="space-y-1 text-left">
                  <h2 className="font-bold w-full font-sans px-4  tracking-wider text-left pb-3 text-2xl lg:text-2xl text-gray-900">
                    Why your skin needs this oil?
                  </h2>
                  <p className="text-gray-800 text-md leading-snug px-2 text-justify">
                    Restore your skin’s natural glow with our Restoration Body
                    Oil! Enriched with rosehip oil and natural extracts, it
                    moisturizes, balances tone, heals bleached skin, and reduces
                    stretch marks. A must-have for healthy, radiant skin!
                  </p>
                  <ul className="text-gray-700 text-sm list-disc list-inside ml-3 py-3">
                    <li className="flex gap-x-3">
                      {" "}
                      <FaCircleCheck className="text-[#8c2643]" /> Deep
                      Restoration.
                    </li>
                    <li className="flex gap-x-3">
                      {" "}
                      <FaCircleCheck className="text-[#8c2643]" /> Intense
                      Moisturization.
                    </li>
                    <li className="flex gap-x-3">
                      {" "}
                      <FaCircleCheck className="text-[#8c2643]" /> Stretch Mark
                      Reduction.
                    </li>
                    <li className="flex gap-x-3">
                      {" "}
                      <FaCircleCheck className="text-[#8c2643]" /> Skin Comfort
                      Relief.
                    </li>
                    <div className="flex flex-col items-center text-justify gap-y-3 md:gap-1 font-sans italic text-xs mt-3">
                      <p className="">
                        search for <b> {textToCopy} </b> in the shop section{" "}
                      </p>
                      <Button
                        onClick={handlecopy}
                        className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] max-w-[100px] from-purple-500 via-slate-700 to-teal-800 text-white font-semibold md:ml-14 px-3 rounded-full py-2"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        Copy
                      </Button>
                    </div>
                  </ul>
                </div>
                <motion.div
                  className="mt-8 flex items-center justify-end"
                  animate={{
                    scale: [1, 0.8, 1], // Scale up to 1.5x and back to original size
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 1.5, // 1.5 seconds to complete one cycle
                    ease: "easeInOut", // Smooth ease-in and ease-out transitions
                  }}
                >
                  <Link to={"./productPage"}>
                    <Button
                      children="See more Products"
                      className="bg-[rgb(132,35,62)]"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    ></Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SlidingText Information="  We deliver worldwide, including Nigeria, Turkey, and more. We use reliable shipping and dispatch services to get your products to you" />
    </motion.div>
  );
};

export default AdProduct;
