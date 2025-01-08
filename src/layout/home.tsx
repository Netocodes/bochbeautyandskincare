import React from "react";
const HeroSection = React.lazy(() => import("../components/herosection"));
const BestSellers = React.lazy(() => import("../components/bestsellers"));
const AdProduct = React.lazy(() => import("../components/adproducts"));
const ChooseUs = React.lazy(() => import("../components/chooseus"));
const TestimonalPage = React.lazy(() => import("../components/testimonial"));
const FAQsection = React.lazy(() => import("../components/faq"));

const Homepage = () => {
  return (
    <div className=" w-full flex flex-col gap-y-0 overflow-hidden">
      <HeroSection />
      <AdProduct />
      <BestSellers />
      <ChooseUs />
      <TestimonalPage />
      <FAQsection />
    </div>
  );
};

export default Homepage;
