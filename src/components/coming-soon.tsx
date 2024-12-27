import Helmet from "react-helmet";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { motion } from "framer-motion";
const ComingSoonPage = () => {
  return (
    <div>
      <Helmet>
        <title className="text-[#82878a]">Coming Soon</title>
        <meta name="theme-color" content="#82878a" />
      </Helmet>
      <div
        className={`relative h-dvh w-full flex items-center justify-center bg-gradient-to-tl from-zinc-300 via-rose-100 to-stone-200text-center px-5`}
      >
        <div className="absolute top-6 right-12">
          <button>Dark Mode</button>
        </div>
        <div className="z-50 -mt-7 flex flex-col justify-center text-white w-full h-screen gap-y-24 md:gap-y-6">
          <div className="z-[50] py-20 flex flex-col justify-center items-center">
            <motion.div
              className="w-64 h-64 flex justify-center items-center text-white text-xl"
              animate={{ scale: [1, 1.2, 1] }} // Zoom in and zoom out
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }} // Repeat animation
            >
              <img
                src="https://www.svgrepo.com/show/426192/cogs-settings.svg"
                alt="Logo"
                className="mb-8 h-40"
              />
            </motion.div>

            <h1 className="  text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-4">
              This Website is under maintenance.
            </h1>
            <p className="text-center text-gray-600 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">
              We're working hard to improve the user experience. Stay tuned!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/+905384085304?text=Hello%2C%20I%20have%20a%20question"
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                Contact Us
              </a>
              <a
                href=""
                className="border-2 border-gray-800 text-black font-bold py-3 px-6 rounded dark:text-white dark:border-white"
              >
                Reload
              </a>
            </div>
            <div className="mt-20 flex flex-col gap-y-5 text-gray-800 mx-auto">
              <span className="flex text-lg font-semibold">
                Follow us on our Socials
              </span>
              <div className="flex gap-6">
                <a href="https://wa.me/+905384085304?text=Hello%2C%20I%27m%20interested%20in%20your%20services%21">
                  <BsWhatsapp className="size-8  transition duration-300 ease-in-out  hover:text-black" />
                  <p className="sr-only">Socials</p>
                </a>
                <a href="https://www.instagram.com/boch.beauty_skincare?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                  <BsInstagram className="size-8 transition duration-300 ease-in-out  hover:text-black" />
                  <p className="sr-only">Socials</p>
                </a>
                <a href="#">
                  <FaFacebook className="size-8 transition duration-300 ease-in-out  hover:text-black" />
                  <p className="sr-only">Socials</p>
                </a>
                <a href="#">
                  <FiYoutube className="size-8 transition duration-300 ease-in-out  hover:text-black" />
                  <p className="sr-only">Socials</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
