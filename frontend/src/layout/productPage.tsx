import React from "react";
import { Helmet } from "react-helmet";
import { Suspense, useEffect } from "react";
import LoadingScreen from "../components/loadingScreen";
const HeroSection = React.lazy(() => import("../components/ppHerosection"));
const Products = React.lazy(() => import("../components/ppProducts"));
const TestimonalPage = React.lazy(() => import("../components/testimonial"));
const Footer = React.lazy(() => import("../components/footer"));
const SlidingText = React.lazy(() => import("../components/slidertext"));

const ProductPage = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title className="text-[#82878a]">
          Shop Page - Discover Amazing Products
        </title>
        <meta name="theme-color" content="#89dfc2" />
      </Helmet>
      <Suspense fallback={<LoadingScreen />}>
        <div className="">
          <HeroSection />
          <SlidingText />
          <Products />
          <TestimonalPage />
          <div className="bg-[#8c2643]">
            <Footer />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default ProductPage;
