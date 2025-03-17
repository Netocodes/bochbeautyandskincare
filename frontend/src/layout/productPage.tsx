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
        <title className="">
          Shop Page - Discover Amazing Products
        </title>
        <meta name="theme-color" content="#89dfc2" />
        <meta name="description" content="Explore the Beauty of Chiri Shop Page – your destination for natural, skin-enriching skincare products. Discover amazing, affordable skincare solutions crafted to nourish and revitalize your skin. Shop now for fast worldwide shipping, easy returns, and exceptional customer care. Your journey to radiant skin starts here!"></meta>
      </Helmet>
      <Suspense fallback={<LoadingScreen />}>
        <div className="">
          <HeroSection />
          <SlidingText Information="If your currency is not turkish lira, just add the products on checkout page you will see a link to convert to your currency before making payment..." />
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
