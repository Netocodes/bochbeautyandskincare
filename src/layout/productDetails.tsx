import Details from "../components/details";
import { Productdetailcrumb } from "../layout/breadcrumbs/crumbs";
const ProductDetail = () => {
  return (
    <section className=" w-full h-dvh ">
      <div>
        <div className="mt-4">
          <Productdetailcrumb />
        </div>

        <Details />
      </div>
    </section>
  );
};

export default ProductDetail;
