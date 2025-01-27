import { useCart } from "../context/usecart";
import { useLocation } from "react-router-dom";

import ErrorPage from "../components/error-page";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  quantity: number;
  rating: { rate: number; count: number };
};

const Details = () => {
  const { addToCart, cartItems, UpdateQuantity } = useCart();
  const location = useLocation();
  const [quantity, setQuantity] = useState<number>(1);
  const { product }: { product: Product } = location.state || {};
  const addQuantity = () => {
    setQuantity(quantity + 1);
  };
  const reduceQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      alert("Who the fuck is this");
    }
  };

  if (!product) {
    return (
      <div>
        <ErrorPage />
      </div>
    );
  }
  const isInCart = cartItems.some((cartItem) => cartItem.id === product.id);
  const handleAddUpdate = () => {
    if (isInCart) {
      UpdateQuantity(product.id, quantity);
    } else {
      addToCart(product, quantity);
    }
  };
  const price = product.price * quantity;
  return (
    <div>
      <div className=" container   mx-auto">
        <section className="text-gray-700 body-font overflow-hidden bg-white/50">
          <div className="container px-6 md:px-20 py-24 mx-auto">
            <div className=" flex flex-col md:flex-row  items-center justify-around gap-x-8 gap-y-8">
              {" "}
              {/* image part*/}
              <div className="w-full md:w-1/2 h-[500px] backdrop-blur-lg">
                <img
                  alt="ecommerce"
                  className="w-full h-full object-contain object-center rounded border border-gray-200"
                  src={product.image}
                />
              </div>
              <div className="w-full md:w-1/2">
                {" "}
                {/*text part */}
                <h2 className="text-sm title-font text-gray-900 my-4 tracking-widest">
                  {product.category}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.title}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center text-xl md:text-2xl text-red-500">
                    {" "}
                    {/*rater */}
                    <Rater
                      total={5}
                      rating={product.rating.rate}
                      interactive={false}
                    />
                    <span className="text-xl text-gray-600 ml-3">
                      +{product.rating.count} reviews
                    </span>
                  </span>
                </div>
                <p className="leading-relaxed">{product.description}</p>
                <div className="w-2/3 my-3  flex h-8 items-stretch text-gray-600">
                  <button
                    onClick={() => reduceQuantity()}
                    className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                  >
                    -
                  </button>
                  <div className="flex w-full items-center justify-center text-black bg-gray-100 px-4 text-lg uppercase transition">
                    {quantity}
                  </div>
                  <button
                    onClick={() => addQuantity()}
                    className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                  >
                    +
                  </button>
                </div>
                <div className="flex flex-col md:flex-row  gap-y-4 justify-around mt-6">
                  <span className="title-font font-medium text-xl md:text-2xl text-gray-900">
                    Total Price: ${price}
                  </span>

                  <div className="flex">
                    <Button
                      onClick={() => handleAddUpdate()}
                      className="bg-[#8c2643]"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                    >
                      {isInCart ? "Update Quantity" : "Add To Cart"}
                    </Button>
                    <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                      </svg>
                      <p className="sr-only">button</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Details;
