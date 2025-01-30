import { Accordion } from "flowbite-react";

const FAQsection = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="w-full md:max-w-[65rem] mx-auto text-center">
        <h1 className="text-3xl md:text-5xl px-6 md:px-0 text-[#242121] font-semibold tracking-tight dark:text-white">
          These are our frequently asked questions
        </h1>
        <p className="mt-3 text-md text-black leading-tight dark:text-gray-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, aut
          ducimus beatae iure similique quas!
        </p>
      </div>
      <div className="md:w-[56rem] px-4 mx-auto my-6">
        <Accordion
          collapseAll
          className="bg-gray-100 shadow-lg border border-[#8c2643] "
        >
          <Accordion.Panel className="tansition-all duration-400 ease-in-out">
            <Accordion.Title className="text-[#3b3030] hover:bg-[#8c2643] hover:text-white font-semibold  dark:text-white dark:hover:bg-gray-800 data-[state=open]:bg-[#8c2643] dark:data-[state=open]:bg-gray-800 transition-colors duration-200">
              What is Flowbite?
            </Accordion.Title>
            <Accordion.Content className="bg-[#f8e6e6]">
              <p className="mb-2 font-medium leading-tight text-gray-800">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
              <p className="font-medium leading-tight text-gray-800">
                Check out this guide to learn how to&nbsp;
                <a
                  href="https://flowbite.com/docs/getting-started/introduction/"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  get started&nbsp;
                </a>
                and start developing websites even faster with components on top
                of Tailwind CSS.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel className="tansition-all duration-400 ease-in-out">
            <Accordion.Title className="text-[#000000] hover:bg-[#8c2643] hover:text-white font-semibold dark:text-white dark:hover:bg-gray-800 data-[state=open]:bg-[#8c2643] dark:data-[state=open]:bg-gray-800 transition-colors duration-200">
              Is there a Figma file available?
            </Accordion.Title>
            <Accordion.Content className="bg-[#f8e6e6]">
              <p className="mb-2 font-medium leading-tight text-gray-800">
                Flowbite is first conceptualized and designed using the Figma
                software so everything you see in the library has a design
                equivalent in our Figma file.
              </p>
              <p className="font-medium leading-tight text-gray-800">
                Check out the
                <a
                  href="https://flowbite.com/figma/"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Figma design system
                </a>
                based on the utility classes from Tailwind CSS and components
                from Flowbite.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel className="tansition-all duration-400 ease-in-out">
            <Accordion.Title className="text-[#000000] hover:bg-[#8c2643] hover:text-white font-semibold dark:text-white dark:hover:bg-gray-800 data-[state=open]:bg-[#8c2643] dark:data-[state=open]:bg-gray-800 transition-colors duration-200">
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
          <Accordion.Panel className="tansition-all duration-400 ease-in-out">
            <Accordion.Title className="text-[#000000] hover:bg-[#8c2643] hover:text-white font-semibold dark:text-white dark:hover:bg-gray-800 data-[state=open]:bg-[#8c2643] dark:data-[state=open]:bg-gray-800 transition-colors duration-200">
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
          <Accordion.Panel className="tansition-all duration-400 ease-in-out">
            <Accordion.Title className="text-[#000000] hover:bg-[#8c2643] hover:text-white font-semibold dark:text-white dark:hover:bg-gray-800 data-[state=open]:bg-[#8c2643] dark:data-[state=open]:bg-gray-800 transition-colors duration-200">
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
