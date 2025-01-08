import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { useCart } from "../context/cartContext";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
  rating: { rate: number; count: number };
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts: () => void = async () => {
    setloading(true);
    try {
      const response = await fetch("/products.json");

      const data = await response.json();

      setTimeout(() => {
        setProducts(data);
        setloading(false);
      }, 2000);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const veiwProducts = (item: { id: number }[], idToFind: number) => {
    let selected = item.find((items: { id: number }) => items.id === idToFind);
    if (selected) {
      navigate("/product/productDetail/", {
        state: { product: selected },
      });
    }
  };
  return (
    <div className="w-full sticky top-0 h-dvh bg-black/75 overflow-y-auto">
      <h1 className="fixed top-0 z-50 text-3xl">Products</h1>
      {loading ? (
        <div className="text-5xl text-center">Loading</div>
      ) : (
        <div>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
            {products.map((product: Product) => [
              <div key={product.id} className="  ">
                <div className="rounded-lg border border-gray-200 bg-white/50 p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                  <div className="h-56 w-full">
                    <a href="#">
                      <img
                        className="mx-auto h-full "
                        loading="lazy"
                        src={product.image}
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="pt-6">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-md font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                        {" "}
                        Shipped Worldwide
                      </span>

                      <div className="flex items-center justify-end gap-2 ">
                        <div
                          // to={`/product/productDetail/`}
                          onClick={() => veiwProducts(products, product.id)}
                        >
                          <FaRegEye size={20} />
                        </div>
                        <CiHeart
                          onClick={() =>
                            toast.success("You've Liked this post")
                          }
                          size={20}
                          className=" text-red-500"
                        />
                      </div>
                    </div>

                    <h2 className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
                      {product.title.split(" ").slice(0, 4).join(" ")}
                    </h2>

                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex items-center">
                        <svg
                          className="h-4 w-4 text-yellow-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>

                        <svg
                          className="h-4 w-4 text-yellow-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>

                        <svg
                          className="h-4 w-4 text-yellow-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>

                        <svg
                          className="h-4 w-4 text-yellow-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>

                        <svg
                          className="h-4 w-4 text-yellow-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>
                      </div>

                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        4.9
                      </p>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        (879)
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-4">
                      <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                        {product.price}
                      </p>

                      <Toaster
                        richColors={true}
                        className=""
                        position="bottom-right"
                      />
                      <Button
                        children="Add  cart"
                        onClick={() => {
                          addToCart(product);
                        }}
                        className="bg-red-500 "
                        placeholder={undefined}
                        onPointerEnterCapture={""}
                        onPointerLeaveCapture={""}
                      />
                    </div>
                  </div>
                </div>
              </div>,
            ])}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
