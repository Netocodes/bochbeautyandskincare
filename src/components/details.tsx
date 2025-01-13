import { useCart } from "../context/cartContext";
import { useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
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
  const { addToCart } = useCart();
  const location = useLocation();
  const { product }: { product: Product } = location.state || {};
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className=" container   mx-auto">
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-6 md:px-20 py-24 mx-auto">
            <div className=" flex flex-col md:flex-row  items-center justify-around gap-x-8 gap-y-8">
              {" "}
              {/* image part*/}
              <div className="w-full md:w-1/2 h-[500px] bg-red-500">
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
                  <span className="flex items-center text-xl md:text-2xl ">
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
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                    {" "}
                    {/* social icons*/}
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
                <p className="leading-relaxed">{product.description}</p>
                <div className="flex mt-6">
                  <span className="title-font font-medium text-xl md:text-2xl text-gray-900">
                    Total Price: ${product.price}
                  </span>
                  <Toaster
                    richColors={true}
                    className=""
                    position="bottom-right"
                  />
                  <button
                    onClick={() => {
                      addToCart(product);
                    }}
                    className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                  >
                    Button
                  </button>
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
        </section>
      </div>
    </div>
  );
};

export default Details;
