import StepperForm from "./stepper";
import { PaymentCrumb } from "../layout/breadcrumbs/crumbs";
import { useCart } from "../context/usecart";
import { Button } from "flowbite-react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
const PaymentPage = () => {
  const { cartItems } = useCart();

  return (
    <div className="">
      {cartItems.length == 0 ? (
        <div className="w-full h-dvh md:h-[70dvh] bg-gray-300 flex flex-col gap-y-8 items-center justify-center">
          <MdOutlineShoppingCart size={32} />
          <h1 className="text-3xl  text-center px-8 font-thin font-sans">
            You haven't checked out yet{" "}
          </h1>
          <p className="w-[80%] mx-auto text-gray-800 text-center text-xl font-meduim leading-tight">
            You have to confirm your cart before you see this page.
          </p>
          <Link to={"/productPage"}>
            <Button
              // placeholder={undefined}
              // onPointerEnterCapture={undefined}
              // onPointerLeaveCapture={undefined}
              className="bg-[#8c2643] text-white capitalize"
            >
              Start Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <div>
          <div className="absolute top-0 bg-[#ffffff]">
            <PaymentCrumb />
          </div>
          <div
            className="relative  w-full  flex items-center justify-center bg-gray-500   text-white"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1621243804936-775306a8f2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <StepperForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
