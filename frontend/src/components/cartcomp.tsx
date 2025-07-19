import { useCart } from "../context/usecart";
import { Link, useNavigate } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Button } from "@material-tailwind/react";
import SlidingText from "./slidertext";
const CartComponent = () => {
  const { cartItems, RemoveCart, TotalPrice } = useCart();
  const navigate = useNavigate();
  const veiwProducts = (item: { id: number }[], idToFind: number) => {
    const selected = item.find(
      (items: { id: number }) => items.id === idToFind
    );
    if (selected) {
      navigate("/product/productDetail/", {
        state: { product: selected },
      });
    }
  };
  return (
    <div>
      <section className=" relative">
     
        <div className="w-full bg-gray-100 border-4 shadow-lg  my-5 py-5 max-w-7xl px-4 md:px-5   mx-auto">
          <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
            Shopping Cart
          </h2>
          <ul className="my-4 flex flex-col gap-y-6">
            {cartItems.map((items, key) => (
              <li
                className="border-y border-4 bg-[#ececec] shadow-2xl flex flex-col space-y-3 py-8 px-4 text-left md:flex-row sm:space-x-5 sm:space-y-0"
                key={key}
              >
                <div className="shrink-0">
                  <img
                    className="h-48 w-48 max-w-full rounded-lg object-contain"
                    src={items.imageUrl}
                    alt=""
                  />
                </div>

                <div className="relative flex flex-1 flex-col  justify-between py-4">
                  <div className=" sm:grid sm:grid-cols-2">
                    <div className="   flex flex-col gap-y-4">
                      <p className="text-xl font-semibold text-gray-900">
                        {items.title.split(" ").slice(0, 6).join(" ")}{" "}
                        <span className="text-lg font-light ml-3">
                          x <span className="text-xl"> {items.quantity}</span>
                        </span>
                      </p>
                      <h1
                        className="text-lg cursor-pointer text-gray-500 underline underline-offset-4 -mt-2"
                        onClick={() => {
                          veiwProducts(cartItems, items.id);
                        }}
                      >
                        update Quantity
                      </h1>
                      <h1 className="flex gap-2  ">
                        Category:{" "}
                        <span>
                          <h1 className="text-[#8c2643] font-semibold">
                            "{items.category}"
                          </h1>
                        </span>{" "}
                      </h1>
                    </div>

                    <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                      <p className="shrink-0 w-20 text-3xl leading-tight font-normal text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                         {items.price} <small className="text-md px-1">tl</small>
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-0 right-0 flex ">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        RemoveCart(items.id);
                      }}
                      className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                    >
                      <MdDeleteOutline className="text-[#8c2643]" size={28} />
                      <p className="sr-only">Button</p>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="bg-gray-50 border border-[#8b0f4d] rounded-xl drop-shadow-2xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
            <div className="flex items-center justify-between w-full mb-6">
              <p className="font-normal text-xl leading-8 text-gray-600">
                Sub Total
              </p>
              <h6 className="font-semibold text-2xl leading-8 text-gray-900">
                {TotalPrice()}<small className="text-md px-1">tl</small>
              </h6>
            </div>
            <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
              <p className="font-normal flex flex-col md:flex-row gap-x-3 text-xl leading-8 text-gray-600">
                Delivery Charge
                <small className="text-xs text-gray-800"> base fee for people in turkey  </small>
              </p>
              <h6 className="font-semibold text-xl leading-8 text-gray-900">
              200 <small className="text-md px-1">tl</small>
              </h6>
            </div>
            <div className="flex items-center justify-between w-full py-6">
              <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">
                Total payment
              </p>
              <h6 className="font-manrope font-medium text-3xl md:text-4xl leading-9 text-[#8c2643]">
                 {TotalPrice() + 200} <small className="text-md px-1">tl</small>
              </h6>
            </div>
          </div>
          <p className="text-sm flex items-center justify-end"> <Link to='/currency' className="underline underline-offset-4">Click here to convert to your currency</Link></p>

          <div className="flex w-full items-center flex-col sm:flex-row justify-center gap-3 mt-8">
            <Link to={"/productPage"}>
              {" "}
              <Button
                className="rounded-full py-4 w-full max-w-[280px]  flex items-center bg-indigo-50 hover:bg-[#f1b6b6] justify-center transition-all duration-500 "
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <FaAngleLeft size={20} className="text-gray-800" />
                <span className="px-2 font-normal text-lg capitalize leading-8 text-[#8c2643]">
                  Continue Shopping
                </span>
              </Button>
            </Link>
            <Link to={"/payment-Page"}>
              <Button
                className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-[#8c2643] font-normal text-lg capitalize text-white flex transition-all duration-500 "
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Continue to Payment
                <FaAngleRight />
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center py-4 text-justify">
           
          </div>
        </div>
      </section>
       <SlidingText Information="If your currency is not Turkish Lira (₺ ), click the link labeled 
      Click here to convert to your currency to switch to your preferred currency. After that, you can proceed to payment " />

    </div>
  );
};

export default CartComponent;
