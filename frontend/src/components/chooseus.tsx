import { FaLeaf } from "react-icons/fa6";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";
import { RxTimer } from "react-icons/rx";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GrMoney } from "react-icons/gr";
import { motion } from "framer-motion";

const ChooseUs = () => {
  return (
    <motion.div
      className="py-12"
      initial={{ opacity: 0, y: "20%" }}
      whileInView={{ opacity: 1, y: 0 }} // Move to normal position and become visible
      viewport={{ once: false }}
      transition={{
        type: "spring", // Smooth spring animation
        stiffness: 300, // Higher stiffness for a snappy feel
        damping: 35, // Less damping for a sharper snap
      }}
    >
      <div className="py-6 px-5 bg-clip-padding backdrop-blur-md rounded-lg   max-w-6xl mx-auto font-[sans-serif]">
        <h2 className="text-gray-700 text-3xl md:text-5xl font-bold text-center mb-16">
          Why choose Us?
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-14">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: "50%" }}
            whileInView={{ opacity: 1, y: 0 }} // Move to normal position and become visible
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <div className="relative flex justify-center items-center size-20   rounded-lg mx-auto dark:bg-neutral-800 dark:border-neutral-700">
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-br from-amber-600 via-pink-600 to-fuchsia-600 opacity-50 blur-2xl"></div>
              <FaLeaf className="size-16 text-gray-700 relative z-10" />
            </div>
            <h3 className="text-gray-800 text-xl font-semibold mb-3">
              100% Natural
            </h3>
            <p className="text-gray-600 text-md font-medium my-3">
            Our skincare products are crafted with 100% natural ingredients, providing your skin with pure, safe, and effective care.
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: "50%" }}
            whileInView={{ opacity: 1, y: 0 }} // Move to normal position and become visible
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <div className="relative flex justify-center items-center size-20   rounded-lg mx-auto dark:bg-neutral-800 dark:border-neutral-700">
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-br from-amber-600 via-pink-600 to-fuchsia-600 opacity-50 blur-2xl"></div>
              <VscWorkspaceTrusted className="size-16 text-gray-700 relative z-10" />
            </div>
            <h3 className="text-gray-800 text-xl font-semibold mb-3">
              Tested And Trusted
            </h3>
            <p className="text-gray-600 text-md font-medium my-3">
            Our products are thoroughly tested for quality and safety, ensuring they meet the highest standards for your skin.
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: "50%" }}
            whileInView={{ opacity: 1, y: 0 }} // Move to normal position and become visible
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            {" "}
            {/* <div className="flex justify-center items-center size-20 bg-black/50 border border-gray-200 rounded-lg mx-auto dark:bg-neutral-800 dark:border-neutral-700">
              <BiSupport classtext-gray-700 Name="size-16" />
            </div> */}
            <div className="relative flex justify-center items-center size-20   rounded-lg mx-auto dark:bg-neutral-800 dark:border-neutral-700">
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-br from-amber-600 via-pink-600 to-fuchsia-600 opacity-50 blur-2xl"></div>
              <BiSupport className="size-16 text-gray-700 relative z-10" />
            </div>
            <h3 className="text-gray-800 text-xl font-semibold mb-3">
              Tailored for you
            </h3>
            <p className="text-gray-600 text-md font-medium my-3">
            We customize our products to suit your skin's unique needs, ensuring the perfect match for your skincare routine.
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: "50%" }}
            whileInView={{ opacity: 1, y: 0 }} // Move to normal position and become visible
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <div className="relative flex justify-center items-center size-20   rounded-lg mx-auto dark:bg-neutral-800 dark:border-neutral-700">
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-br from-amber-600 via-pink-600 to-fuchsia-600 opacity-50 blur-2xl"></div>
              <LiaShippingFastSolid className="size-16 text-gray-700 relative z-10" />
            </div>
            <h3 className="text-gray-800 text-xl font-semibold mb-3">
              International Delivery
            </h3>
            <p className="text-gray-600 text-md font-medium my-3">
            Enjoy fast international shipping, bringing our premium skincare products directly to your doorstep, wherever you are globally.
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: "50%" }}
            whileInView={{ opacity: 1, y: 0 }} // Move to normal position and become visible
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <div className="relative flex justify-center items-center size-20   rounded-lg mx-auto dark:bg-neutral-800 dark:border-neutral-700">
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-br from-amber-600 via-pink-600 to-fuchsia-600 opacity-50 blur-2xl"></div>
              <RxTimer className="size-16 text-gray-700 relative z-10" />
            </div>
            <h3 className="text-gray-800 text-xl font-semibold mb-3">
            Secure and Safe Shopping
            </h3>
            <p className="text-gray-600 text-sm mymd font-medium my-3">
            We protect your personal data with the latest security measures, offering a secure and safe shopping experience.
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: "50%" }}
            whileInView={{ opacity: 1, y: 0 }} // Move to normal position and become visible
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <div className="relative flex justify-center items-center size-20   rounded-lg mx-auto dark:bg-neutral-800 dark:border-neutral-700">
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-br from-amber-600 via-pink-600 to-fuchsia-600 opacity-50 blur-2xl"></div>
              <GrMoney className="size-16 text-gray-700 relative z-10" />
            </div>
            <h3 className="text-gray-800 text-xl font-semibold mb-3">
            Customer Support 24/7
            </h3>
            <p className="text-gray-600 text-md font-medium my-3">
            
            Our dedicated customer support team is available 24/7, ready to assist with any inquiries or concerns you have.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChooseUs;
