import { useEffect } from "react";
import Details from "../components/details";
import { Productdetailcrumb } from "../layout/breadcrumbs/crumbs";
const ProductDetail = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className=" w-full h-dvh ">
      <div className="absolute">
        <div className=" z-50 mt-36">
          <Productdetailcrumb />
        </div>

        <Details />
      </div>
    </section>
  );
};

export default ProductDetail;
