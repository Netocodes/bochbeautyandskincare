import Details from "../components/details";
import { Productdetailcrumb } from "../layout/breadcrumbs/crumbs";
const ProductDetail = () => {
  return (
    <section className=" w-full h-dvh ">
      <div className="absolute">
        <div className=" z-50 mt-4">
          <Productdetailcrumb />
        </div>

        <Details />
      </div>
    </section>
  );
};

export default ProductDetail;
