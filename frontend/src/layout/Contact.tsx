import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
const ContactUs = () => {
  return <div className="bg-[#eee7e7]">
  
<div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
  <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
    <h2 className="font-medium text-gray-700 text-2xl sm:text-4xl dark:text-white">
      Contacts Us On:
    </h2>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-6 md:gap-8 lg:gap-12 px-4">
    <div className=" w-full md:w-[500px] overflow-hidden bg-[#8c2643] rounded-2xl ">
      <img className="w-full h-[250px] object-cover rounded-2xl" src="https://res.cloudinary.com/de7tyskql/image/upload/f_auto,q_auto/wywofgphiwjoahygpiek" alt="Contacts Image" loading="lazy" />
    </div>
   

    <div className="space-y-8 lg:space-y-16">
      <div>
        <h3 className="mb-5 text-2xl text-center font-semibold text-gray-800 ">
          Our address
        </h3>

       
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          <div className="flex gap-4">
          <CiLocationOn className="shrink-0 size-7 font-bold text-[#8c2643]" />

            <div className="grow">
              <p className="text-xl text-gray-900 underline underline-offset-4 decoration-clone decoration-[#8c2643] ">
                Istanbul Türkiye
              </p>
              <address className="mt-2 text-lg text-gray-800 not-italic ">
                Baris Sk. 3A, 34522 Istanbul, 
                <br/>
                Esenyurt Türkiye
              </address>
            </div>
          </div>
        </div>
       
      </div>

      <div>
        <h3 className= "mb-5 text-center text-2xl font-semibold text-gray-800 dark:text-white">
          Our contacts
        </h3>

      
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-14">
          <div className="flex gap-4">
            <MdOutlineMarkEmailRead className="shrink-0 size-5 font-bold text-[#8c2643]" />

            <div className="grow">
              <p className="text-lg text-gray-900 underline underline-offset-4 decoration-clone decoration-[#8c2643]">
                Email us
              </p>
              <p>
                <a className="relative inline-block hover:underline font-medium text-gray-700 " href="mailto:contact@bochbeautyandskincare.shop">
                  contact@bochbeautyandskincare.shop
                </a>
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <FaPhoneVolume className="shrink-0 size-5 font-thin text-[#8c2643]" />

            <div className="grow">
              <p className="text-lg text-gray-900 underline underline-offset-4 decoration-clone decoration-[#8c2643]">
                Call us on
              </p>
              <p>
                <a className="relative inline-block hover:underline font-medium text-gray-700 before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white" href="tel:+90 538 408 53 04">
                +90 538 408 53 04
                </a>
              </p>
            </div>
          </div>
        </div>
      
      </div>
    </div>
   
  </div>
</div>

  </div>;
};

export default ContactUs;
