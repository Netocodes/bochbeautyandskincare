import React from "react";
import { Suspense, useEffect } from "react";
import { Helmet } from "react-helmet";
import LoadingScreen from "../components/loadingScreen";
import NewsLetter from "../components/newsletter";
const HeroSection = React.lazy(() => import("../components/herosection"));
const BestSellers = React.lazy(() => import("../components/bestsellers"));
const AdProduct = React.lazy(() => import("../components/adproducts"));
const ChooseUs = React.lazy(() => import("../components/chooseus"));
const TestimonalPage = React.lazy(() => import("../components/testimonial"));
const FAQsection = React.lazy(() => import("../components/faq"));
const Footer = React.lazy(() => import("../components/footer"));

const Homepage: React.FC = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <Helmet>
        <title className="text-[#82878a]">Beauty of Chiri - Homepage</title>
        <meta name="theme-color" content="#8c2643" />
      </Helmet>
      <Suspense fallback={<LoadingScreen />}>
        <div className="w-full flex flex-col  gap-y-0 overflow-hidden">
          <HeroSection />
          <div className="bg-[#f3f9fc]">
            <AdProduct />
          </div>
          <div className="bg-[#eeeded]">
            <BestSellers />
          </div>
          <div className="bg-[#f6f6f6]">
            <ChooseUs />
          </div>
          <div className="bg-[#f3f9fc] shadow-lg">
            <TestimonalPage />
          </div>
          <div className="bg-[#f6f6f6]">
            <FAQsection />
          </div>
          <div className="bg-[#f0e4e4]">
            <NewsLetter />
          </div>
          <div className="bg-[#8c2643]">
            <Footer />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default Homepage;
