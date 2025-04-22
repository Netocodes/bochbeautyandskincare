import { motion } from "framer-motion";


const IconSection = () => {
return(
                <div>
<div className="max-w-[85rem] bg-[#e6e4e4] px-6 py-10 sm:px-6 lg:px-12 lg:py-8 mx-auto overflow-y-hidden">
            <div className="max-w-2xl text-center mx-auto py-10 mb-4 ">
    <h2 className="text-2xl text-gray-700 font-semibold underline underline-offset-4 decoration-[#8c2643] decoration-slice">Our Services Include</h2>
  
  </div>                 
 
  <div className="grid md:grid-cols-2 gap-12">
    <div className="lg:w-3/4">
      <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
        We are here to attend all your skin needs with the right skin foods
      </h2>
      <p className="mt-3 text-gray-800 dark:text-neutral-400">
      At Beauty of Chiri, we specialize in providing authentic handmade skincare products and a range of luxurious beauty treatments designed to help you achieve radiant, glowing skin.
      </p>
      <p className="mt-5">
        <a className="inline-flex items-center gap-x-1 text-md underline underline-offset-4 text-[#831037] decoration-2 hover:underline focus:outline-none focus:underline font-medium " href="tel:+905384085304">
          contact us to get your skin food
          <svg className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>
      </p>
    </div>
    

    <div className="space-y-6 lg:space-y-10">
     
      <motion.div className="flex gap-x-5 sm:gap-x-8"
         initial={{ opacity: 0, x: "50%" }}
         whileInView={{ opacity: 1, x: 0 }} // Move to normal position and become visible
         viewport={{ once: false }}
         transition={{ duration: 1, ease: "easeIn" }}>
      
        <span className="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-[#830b43] text-gray-800 shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
          <svg className="shrink-0 size-5 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        </span>
        <div className="grow">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
          Skin Brightening Treatments
          </h3>
          <p className="mt-1 text-gray-700 text-sm text-justify">
          Whitening, Lightening, and Brightening Skin Bath: Achieve a radiant glow with our exfoliation treatments that remove dead skin cells and reveal brighter, smoother skin.</p>        </div>
      </motion.div>
     

      <motion.div className="flex gap-x-5 sm:gap-x-8" 
         initial={{ opacity: 0, x: "50%" }}
         whileInView={{ opacity: 1, x: 0 }} // Move to normal position and become visible
         viewport={{ once: false }}
         transition={{ duration: 1, ease: "easeIn" }}>
     
        <span className="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-[#830b43] text-gray-800 shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
          <svg className="shrink-0 size-5 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
        </span>
        <div className="grow">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
          Facial and Hair Care Services
          </h3>
         <ol className=" flex flex-col text-sm gap-y-4 list-decimal list-inside text-justify mt-3 text-sans">
          <li className="test-justify">
           <b className="text-gray-800 text-[16px] pr-1"> Facial Treatments:</b> Rejuvenate your skin with our customized facials, tailored to your skin type and concerns.
          </li>
          <li> <b className="text-gray-800 text-[16px] pr-1">Waxing:</b>  Smooth, hair-free skin with our professional waxing servicesc</li>
          <li> <b className="text-gray-800 text-[16px] pr-1">Eyelash Installation:</b>  Enhance your eyes with beautifully applied eyelash extensions.</li>
          </ol>
        </div>
      </motion.div>
     

   
      <motion.div className="flex gap-x-5 sm:gap-x-8" 
         initial={{ opacity: 0, x: "50%" }}
         whileInView={{ opacity: 1, x: 0 }} // Move to normal position and become visible
         viewport={{ once: false }}
         transition={{ duration: 1, ease: "easeIn" }}>
       
        <span className="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-[#830b43] text-gray-800 shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
          <svg className="shrink-0 size-5 text-gray-100" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
        </span>
        <div className="grow">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
          Pampering and Wellness Services
          </h3>
          <ol className=" flex flex-col text-sm gap-y-4 list-decimal list-inside text-justify mt-3 text-sans">
            <li><b className="text-gray-800 text-[16px] pr-1">Pedicure and Manicure:</b> Treat your hands and feet to our expert nail care services.</li>
            <li> <b className="text-gray-800 text-[16px] pr-1">Vaginal Steaming:</b> Experience the ancient wellness practice of vaginal steaming for detoxification and relaxation.</li>
          </ol>
        </div>
      </motion.div>
      
    </div>
   
  </div>
  
</div>

                </div>
)
}
export default IconSection;