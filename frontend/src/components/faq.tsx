import { Accordion } from "flowbite-react";
import { Link } from "react-router-dom";

const FAQsection = () => {
  return (
    <div className="bg-gray-50 font-serif py-12">
      <div className="w-full md:max-w-[65rem] mx-auto text-center">
        <h1 className="text-3xl md:text-5xl px-6 md:px-0 text-gray-700 font-semibold tracking-tight dark:text-white">
          These are our frequently asked questions
        </h1>
        <p className="mt-3 max-w-md md:max-w-xl mx-auto text-2xl text-gray-700 leading-tight dark:text-gray-300">
          We have Answers
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
To explore our range of products designed to help reduce the appearance of stretch marks, head over to our Shop Page and use the Search Bar to find the perfect match for your skin. If you have specific concerns or need personalized recommendations, don’t hesitate to reach out to us directly by clicking the "<Link to="Contact" className="underline"> Contact Us</Link>" button or emailing us at <a href="mailto:contact@bochbeautyandskincare.shop" className="underline">contact@bochbeautyandskincare.shop</a>. We’re always happy to assist you!
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
To explore our range of products designed for skin whitening, head over to our Shop Page and use the Search Bar to find the perfect match for your skin. If you have specific concerns or need personalized recommendations, don’t hesitate to reach out to us directly by clicking the "<Link to="Contact" className="underline"> Contact Us</Link>" button or emailing us at <a href="mailto:contact@bochbeautyandskincare.shop" className="underline">contact@bochbeautyandskincare.shop</a>. We’re always happy to assist you!
</p>
              </p>
              
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel className="transition-all duration-400 ease-in-out rounded-lg">
            <Accordion.Title className="text-lg text-gray-700 hover:bg-[#8c2643] hover:text-white font-medium  data-[state=open]:bg-[#8c2643]  transition-colors duration-200">
             How do i make Payments and get my  Order?
            </Accordion.Title>
            <Accordion.Content className="bg-[#f8e6e6]">
            <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Order & Payment Process</h2>
  
  <ol className="list-decimal pl-5 space-y-3 mb-6 text-gray-700">
    <li><span className="font-semibold">Add items</span> to your cart and click the icon on top ( 🛒 )</li>
    <li>Click <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-md font-medium">Continue to payment</span></li>
    <li>Enter your <span className="font-semibold">shipping details</span></li>
    <li>
      <span className="font-semibold">Transfer funds</span> to the provided account
      <ul className="list-disc pl-5 mt-1 text-gray-600">
        <li>Include your emailed <span className="font-mono bg-gray-100 px-1.5 py-0.5 rounded">Order ID</span> as reference</li>
      </ul>
    </li>
    <li>Submit proof via <Link to="/verify-payment" className="bg-green-50 text-green-600 px-2 cursor-pointer py-1 rounded-md font-medium">Verify Payment</Link></li>
    <li>Order ships <span className="font-semibold">after confirmation</span></li>
  </ol>

  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
    <h3 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd" />
      </svg>
      Need Help?
    </h3>
    <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
      <li>Payment/order issues? 
        <a href="#" className="text-blue-600 hover:underline">Contact Us </a> 
        or email
        <a href="mailto:contact@bochbeautyandskincare.shop" className="font-mono text-blue-600 hover:underline"> contact@bochbeautyandskincare.shop</a>
      </li>
      <li className="text-gray-600">We respond within 24 hours</li>
    </ul>
  </div>
</div>
              
              
            </Accordion.Content>
          </Accordion.Panel>
          <div className="w-full max-w-7xl mx-auto bg-[#f8e6e6] py-3 md:py-12 px-4 md:px-8 shadow-lg rounded-b-lg">
            <h2 className="text-sm text-[#450707] lg:text-xl text-justify md:text-center ">Do you have a question, Ask us by <a className="underline text-blue-500" href="https://wa.me/+905384085304?text=Hello%2C%20I%27m%20interested%20in%20your%20services%21">clicking here</a> to be redirected to out whatsapp account</h2>
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQsection;
