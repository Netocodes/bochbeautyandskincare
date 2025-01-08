import React from "react";
const HeroSection = React.lazy(() => import("../components/ppHerosection"));
const Products = React.lazy(() => import("../components/ppProducts"));
const ProductPage = () => {
  return (
    <div className="">
      <HeroSection />
      <Products />
    </div>
  );
};

export default ProductPage;
