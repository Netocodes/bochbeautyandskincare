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
/>
const AdProduct = () => {

  const textToCopy = "Restoration Body Oil";
  const handlecopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      toast.success("Text copied to clipboard");
    }
    catch (err) {
      console.error('Failed to copy: ', err);
      toast.error('Failed to copy: ');
    }
  }
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
            <div className="w-full md:w-[500px] h-[300px] md:h-[350px] bg-[#861349] p-3 rounded-2xl">
              <img
                className="w-full h-full object-cover object-center rounded-2xl"
                src={"https://res.cloudinary.com/de7tyskql/image/upload/f_auto/q_auto/restoration-body-oil?_a=DATAg1AAZAA0"}
                alt="Features Image"
                loading="lazy"
              />
            </div>

            <div className="mt-5 sm:mt-10 lg:mt-0">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-2 md:space-y-4">
                  <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                    Let me tell You guys why you need this product
                  </h2>
                  <p className="text-gray-500 dark:text-neutral-500">
                  Restore your skin’s natural glow with our Restoration Body Oil! Enriched with rosehip oil and natural extracts, it moisturizes, balances tone, heals bleached skin, and reduces stretch marks. A must-have for healthy, radiant skin!
                  </p>
                  <ul className="text-gray-700 list-disc list-inside ml-3 py-3">
                  <li className="flex gap-x-3"> <FaCircleCheck className="text-[#8c2643]"/> Deep Restoration.</li>
                  <li className="flex gap-x-3"> <FaCircleCheck className="text-[#8c2643]"/> Intense Moisturization.</li>
                  <li className="flex gap-x-3"> <FaCircleCheck className="text-[#8c2643]"/> Stretch Mark Reduction.</li>
                  <li className="flex gap-x-3"> <FaCircleCheck className="text-[#8c2643]"/> Skin Comfort Relief.</li></ul>
                  <p className="flex flex-row gap-1 italic text-sm">search for <b> {textToCopy} </b> in the shop section <Button onClick={handlecopy} className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-500 via-slate-700 to-teal-800 text-white font-semibold  px-3 rounded-full py-2"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Copy</Button></p>
                </div>
                <div className="my-4">
                  <Link to={"./productPage"}>
                    <Button
                      children="See more Products"
                      className="bg-[#8c2643]"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      </Button>
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
