import React from "react";
import { Helmet } from "react-helmet";
const HeroSection = React.lazy(() => import("../components/herosection"));
const BestSellers = React.lazy(() => import("../components/bestsellers"));
const AdProduct = React.lazy(() => import("../components/adproducts"));
const ChooseUs = React.lazy(() => import("../components/chooseus"));
const TestimonalPage = React.lazy(() => import("../components/testimonial"));
const FAQsection = React.lazy(() => import("../components/faq"));

const Homepage = () => {
  return (
    <div className="-mt-6">
      <Helmet>
        <title className="text-[#82878a]">Beauty of Chiri - Homepage</title>
        <meta name="theme-color" content="#8c2643" />
      </Helmet>
      <div className=" w-full flex flex-col  gap-y-0 overflow-hidden">
        <HeroSection />
        <div style={{ backgroundImage: 'url("/bgImage.svg") ' }}>
          <AdProduct />
        </div>
        <div className="bg-[#D3D3D3]">
          <BestSellers />
        </div>
        <div style={{ backgroundImage: 'url("/bgImage.svg") ' }}>
          <ChooseUs />
        </div>
        <div className="bg-[#D3D3D3]">
          <TestimonalPage />
        </div>

        <div style={{ backgroundImage: 'url("/bgImage.svg") ' }}>
          <FAQsection />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
