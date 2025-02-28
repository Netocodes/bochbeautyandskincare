import { useCart } from "../context/usecart";
import { Link, useLocation } from "react-router-dom";
import { Toaster, toast } from "sonner";
import ErrorPage from "../components/error-page";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { Product } from "../components/ppProducts";
import { Carousel } from "flowbite-react";
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
      toast.error("The cart Cannnot be below 1")
    }
  };
  <Toaster
  richColors
  className="mt-24 md:mt-12 lg:mt-20 z-50"
  position="top-right"
/>
  if (!product) {
    return (
      <div className="w-full ">
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
            <div className=" flex flex-col md:flex-row   justify-around gap-x-20 gap-y-8">
              {" "}
              {/* image part*/}
              <div className="w-full md:w-1/2 flex flex-col  gap-6   backdrop-blur-lg">
               
           
 
           <div className="h-[400px] md:h-[500px] w-full bg-black">
      <Carousel pauseOnHover>
  {product.detailsImage.map((image) => {
    return(
      <img src={image} alt="Details Image" />
    )
})}
      </Carousel>
    </div>
 
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
                <div className="py-6 ">
                  <h3 className="text-gray-900 text-2xl title-font font-medium mb-1">
                    How To Use:
                    </h3>
                    {product.how_to_use.map((use) => (
                      <div key={use}>
                        <ol className="list-disc list-inside flex flex-col gap-y-3">
                          <li>{use}</li>
                        </ol>
                        </div>
                    ))}
                  
                </div>
                <div className=" py-6">
                  <h3 className="text-gray-900 text-2xl text-center my-4 font-medium ">This Product is Good For:</h3>
                  <ul className="max-w-md flex flex-col gap-y-2  ">
                    {product.key_features.map((feature) => (
                      <li className="text-left" key={feature}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
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
                <div className="flex flex-col   gap-y-8 justify-between mt-6">
                  <span className="title-font font-medium text-xl md:text-2xl text-gray-900">
                    Total Price: ${price}
                  </span>

                  <div className="flex gap-x-4">
                    <Button
                      onClick={() => handleAddUpdate()}
                      className="bg-[#8c2643] hover:bg-[#f6f6f6] hover:text-gray-800 hover:border-2  text-sm rounded-lg  hover:border-[#8c2643]"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                    >
                      {isInCart ? "Update Quantity" : "Add To Cart"}
                    </Button>
                    <Link to="/cart-Items">
                    <Button
                      className="border-[#8c2643] hover:bg-[#8c2643] hover:text-white   bg-[#f6f6f6] text-gray-800 tracking-wide font-semibold  text-sm rounded-3xl border-2"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                    >
                      Proceed to Checkout
                    </Button>
                    </Link>
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
