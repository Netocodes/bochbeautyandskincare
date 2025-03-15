import { Accordion } from "flowbite-react";
import { Link } from "react-router-dom";

const FAQsection = () => {
  return (
    <div className="bg-gray-50 font-serif py-12">
      <div className="w-full md:max-w-[65rem] mx-auto text-center">
        <h1 className="text-3xl md:text-5xl px-6 md:px-0 text-gray-700 font-semibold tracking-tight dark:text-white">
          These are our frequently asked questions
        </h1>
        <p className="mt-3 max-w-md md:max-w-xl mx-auto text-2xl text-black leading-tight dark:text-gray-300">
          " We have Answers "
        </p>
      </div>
      <div className="md:w-[56rem] px-4 mx-auto my-6">
        <Accordion
          collapseAll
          className="bg-gray-100 shadow-lg border border-[#8c2643] "
        >
          <Accordion.Panel className="transition-all duration-400 ease-in-out  ">
            <Accordion.Title className="text-lg text-gray-700  hover:bg-[#8c2643] hover:text-white font-medium   data-[state=open]:bg-[#8c2643]  transition-colors duration-200 rounded-t-[12px]" >
            How can I get rid of stretch marks in less than 2 weeks
            </Accordion.Title>
            <Accordion.Content className="bg-[#f8e6e6]">
              <p className="mb-2 font-medium leading-tight text-gray-800">
              Stretch marks are a natural occurrence and are completely harmless. However, some stretch marks can appear due to the use of incorrect skincare products. In cases where stretch marks are caused by chemical products, they may take more than 4 weeks to fade. The key to treating stretch marks is patience and consistency with the remedy you choose.

              <p className="mt-3">
To explore our range of products designed to help reduce the appearance of stretch marks, head over to our Shop Page or use the Search Bar to find the perfect match for your skin. If you have specific concerns or need personalized recommendations, don’t hesitate to reach out to us directly by clicking the "<Link to="Contact" className="underline"> Contact Us</Link>" button or emailing us at <a href="mailto:contact@bochbeautyandskincare.shop" className="underline">contact@bochbeautyandskincare.shop</a>. We’re always happy to assist you!
</p>
              </p>
              
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel className="transition-all duration-400 ease-in-out  ">
            <Accordion.Title className="text-lg text-gray-700  hover:bg-[#8c2643] hover:text-white font-medium  data-[state=open]:bg-[#8c2643]  transition-colors duration-200 " >
            Do you have skin-whitening products, and how long do they take to show results?
            </Accordion.Title>
            <Accordion.Content className="bg-[#f8e6e6]">
              <p className="mb-2 text-md font-medium leading-tight text-gray-800">
              <b>Yes</b>, we offer skin-whitening products that are designed to provide natural and long-lasting results. However, these products are not instant and require consistent use. Some customers may start seeing results in less than 2 weeks, while others may take longer, depending on their skin type.

<p className="mt-3">
To explore our range of products designed for skin whitening, head over to our Shop Page or use the Search Bar to find the perfect match for your skin. If you have specific concerns or need personalized recommendations, don’t hesitate to reach out to us directly by clicking the "<Link to="Contact" className="underline"> Contact Us</Link>" button or emailing us at <a href="mailto:contact@bochbeautyandskincare.shop" className="underline">contact@bochbeautyandskincare.shop</a>. We’re always happy to assist you!
</p>
              </p>
              
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel className="transition-all duration-400 ease-in-out rounded-lg">
            <Accordion.Title className="text-gray-700 hover:bg-[#8c2643] hover:text-white font-medium  data-[state=open]:bg-[#8c2643]  transition-colors duration-200">
              What are the differences between Flowbite and Tailwind UI?
            </Accordion.Title>
            <Accordion.Content className="bg-[#f8e6e6]">
              <p className="mb-2 font-medium leading-tight text-gray-800">
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
              <p className="mb-2 font-medium leading-tight text-gray-800">
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 font-medium leading-tight text-gray-800">
                Learn more about these technologies:
              </p>
              <ul className="list-disc pl-5 font-medium leading-tight text-gray-800">
                <li>
                  <a
                    href="https://flowbite.com/pro/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel className="transition-all duration-400 ease-in-out rounded-lg">
            <Accordion.Title className="text-gray-700 hover:bg-[#8c2643] hover:text-white font-medium  data-[state=open]:bg-[#8c2643]  transition-colors duration-200">
              What are the differences between Flowbite and Tailwind UI?
            </Accordion.Title>
            <Accordion.Content className="bg-[#f8e6e6]">
              <p className="mb-2 font-medium leading-tight text-gray-800">
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
              <p className="mb-2 font-medium leading-tight text-gray-800">
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 font-medium leading-tight text-gray-800">
                Learn more about these technologies:
              </p>
              <ul className="list-disc pl-5 font-medium leading-tight text-gray-800">
                <li>
                  <a
                    href="https://flowbite.com/pro/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel className="transition-all duration-400 ease-in-out rounded-b-lg">
            <Accordion.Title className="text-gray-700 hover:bg-[#8c2643] hover:text-white font-medium  data-[state=open]:bg-[#8c2643]  transition-colors duration-200 rounded-b-[11px]">
              What are the differences between Flowbite and Tailwind UI?
            </Accordion.Title>
            <Accordion.Content className="bg-[#f8e6e6]">
              <p className="mb-2 font-medium leading-tight text-gray-800">
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
              <p className="mb-2 font-medium leading-tight text-gray-800">
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 font-medium leading-tight text-gray-800">
                Learn more about these technologies:
              </p>
              <ul className="list-disc pl-5 font-medium leading-tight text-gray-800">
                <li>
                  <a
                    href="https://flowbite.com/pro/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQsection;
