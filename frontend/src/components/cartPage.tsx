import{useEffect} from 'react'
import { useCart } from "../context/usecart";
import { Button } from "@material-tailwind/react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import CartComponent from "./cartcomp";

const CartPage = () => {
    useEffect(() => {
      // Scroll to the top of the pajge when the component mounts
      window.scrollTo(0, 0);
    }, []);
  const { cartItems } = useCart();
  if (cartItems.length === 0) {
    return (
      <div className="w-full h-[70dvh] bg-gray-300 flex flex-col gap-y-8 items-center justify-center">
        <MdOutlineShoppingCart size={32} />
        <h1 className="text-3xl font-thin font-sans">Cart is empty</h1>
        <p className="w-[80%] mx-auto text-gray-800 text-center text-xl font-meduim leading-tight">
          Add products while you shop, so they'll be ready for checkout later.
        </p>
        <Link to={"/productPage"}>
          <Button
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="bg-[#8c2643] text-white capitalize"
          >
            Start Shopping
          </Button>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <CartComponent />
    </div>
  );
};

export default CartPage;
