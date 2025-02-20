import { Breadcrumbs } from "@material-tailwind/react";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
export const Productdetailcrumb = () => {
  return (
    <div className="">
      <Breadcrumbs
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Link to={"/"} className="opacity-60">
          <FiHome className="size-6 font-bold text-[#8c2643]" />
        </Link>
        <Link
          to="/productPage"
          className=" text-[#8c2643] font-semibold opacity-60"
        >
          <span>Shop</span>
        </Link>
        <h1 className="text-[#8c2643] font-bold">Product Details</h1>
      </Breadcrumbs>
    </div>
  );
};
export const PaymentCrumb = () => {
  return (
    <div className="">
      <Breadcrumbs
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Link to={"/"} className="opacity-60">
          <FiHome className="size-6 font-bold text-[#8c2643]" />
        </Link>
        <Link
          to="/productPage"
          className=" text-[#8c2643] font-semibold opacity-60"
        >
          <span>Shop</span>
        </Link>
        <Link
          to="/cart-items"
          className=" text-[#8c2643] font-semibold opacity-60"
        >
          <span>Cart Page</span>
        </Link>
        <h1 className="text-[#8c2643] font-bold">Product Details</h1>
      </Breadcrumbs>
    </div>
  );
}
