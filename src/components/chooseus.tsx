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
      initial={{ opacity: 0, y: "50%" }}
      whileInView={{ opacity: 1, y: 0 }} // Move to normal position and become visible
      viewport={{ once: false }}
      transition={{
        type: "spring", // Smooth spring animation
        stiffness: 300, // Higher stiffness for a snappy feel
        damping: 35, // Less damping for a sharper snap
      }}
    >
      <div className="py-6 px-5 bg-clip-padding backdrop-blur-md rounded-lg   max-w-6xl mx-auto font-[sans-serif]">
        <h2 className="text-gray-800 sm:text-4xl text-2xl font-extrabold text-center mb-16">
          Why choose Us?
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: "50%" }}
            whileInView={{ opacity: 1, y: 0 }} // Move to normal position and become visible
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <div className="flex justify-center items-center size-12 bg-gray-50/50 border border-gray-200 rounded-full mx-auto dark:bg-neutral-800 dark:border-neutral-700">
              <FaLeaf className="size-80" />
            </div>
            <h3 className="text-gray-800 text-xl font-semibold mb-3">
              100% Natural
            </h3>
            <p className="text-gray-600 text-sm">
              Tailor our product to suit your needs Tailor our product to suit
              your needs.
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: "50%" }}
            whileInView={{ opacity: 1, y: 0 }} // Move to normal position and become visible
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <div className="flex justify-center items-center size-12 bg-gray-50/50 border border-gray-200 rounded-full mx-auto dark:bg-neutral-800 dark:border-neutral-700">
              <VscWorkspaceTrusted className="size-80" />
            </div>
            <h3 className="text-gray-800 text-xl font-semibold mb-3">
              Tested And Trusted
            </h3>
            <p className="text-gray-600 text-sm">
              Your data is protected by the latest security measures.
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: "50%" }}
            whileInView={{ opacity: 1, y: 0 }} // Move to normal position and become visible
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <div className="flex justify-center items-center size-12 bg-gray-50/50 border border-gray-200 rounded-full mx-auto dark:bg-neutral-800 dark:border-neutral-700">
              <BiSupport className="size-80" />
            </div>
            <h3 className="text-gray-800 text-xl font-semibold mb-3">
              Costumers Support
            </h3>
            <p className="text-gray-600 text-sm">
              Tailor our product to suit your needs 24/7 customer support for
              all your inquiries.
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: "50%" }}
            whileInView={{ opacity: 1, y: 0 }} // Move to normal position and become visible
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <div className="flex justify-center items-center size-12 bg-gray-50/50 border border-gray-200 rounded-full mx-auto dark:bg-neutral-800 dark:border-neutral-700">
              <LiaShippingFastSolid className="size-80" />
            </div>
            <h3 className="text-gray-800 text-xl font-semibold mb-3">
              International Delivery
            </h3>
            <p className="text-gray-600 text-sm">
              Experience blazing-fast performance with our product.
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: "50%" }}
            whileInView={{ opacity: 1, y: 0 }} // Move to normal position and become visible
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <div className="flex justify-center items-center size-12 bg-gray-50/50 border border-gray-200 rounded-full mx-auto dark:bg-neutral-800 dark:border-neutral-700">
              <RxTimer className="size-80" />
            </div>
            <h3 className="text-gray-800 text-xl font-semibold mb-3">
              Fast and Reliable
            </h3>
            <p className="text-gray-600 text-sm">
              Tailor our product to suit your needs Expand your reach with our
              global network.
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: "50%" }}
            whileInView={{ opacity: 1, y: 0 }} // Move to normal position and become visible
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <div className="flex justify-center items-center size-12 bg-gray-50/50 border border-gray-200 rounded-full mx-auto dark:bg-neutral-800 dark:border-neutral-700">
              <GrMoney className="size-80" />
            </div>
            <h3 className="text-gray-800 text-xl font-semibold mb-3">
              Communication
            </h3>
            <p className="text-gray-600 text-sm">
              Tailor our product to suit your needs Seamless communication for
              your team.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChooseUs;
