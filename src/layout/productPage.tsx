import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const HeroSection = React.lazy(() => import("../components/ppHerosection"));
const Products = React.lazy(() => import("../components/ppProducts"));
const ProductPage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    // Simulate loading process with a delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading for 2 seconds

    // Clean up function for when the component unmounts (page exit)
    return () => {
      clearTimeout(timer); // Stop the loading timer on exit
      setLoading(false); // Make sure we stop loading when exiting
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title className="text-[#82878a]">
          Shop Page - Discover Amazing Products
        </title>
        <meta name="theme-color" content="#89dfc2" />
      </Helmet>

      {loading ? (
        <div>
          <h1 className="text-4xl flex items-center justify-center h-screen">
            Loading...
          </h1>
        </div>
      ) : (
        <div className="">
          <HeroSection />
          <Products />
        </div>
      )}
    </div>
  );
};

export default ProductPage;
