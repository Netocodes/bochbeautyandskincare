import React from "react";
import { Helmet } from "react-helmet";
import { Suspense } from "react";
import LoadingScreen from "../components/loadingScreen";
const HeroSection = React.lazy(() => import("../components/ppHerosection"));
const Products = React.lazy(() => import("../components/ppProducts"));
const TestimonalPage = React.lazy(() => import("../components/testimonial"));

const ProductPage = () => {
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
          <Products />
          <TestimonalPage />
        </div>
      </Suspense>
    </div>
  );
};

export default ProductPage;
