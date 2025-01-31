import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { FaRegEye } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { useCart } from "../context/usecart";
import { SearchInput } from "./ppInputSearch";
import { useNavigate } from "react-router-dom";

import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import { Tooltip } from "flowbite-react";
import { motion } from "framer-motion";

export type Product = {
  id: number;
  category: string;
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
  const [search, setSearch] = useState("");
  // const { data } = useFetch<Product[]>("/products.json");
  const navigate = useNavigate();
  const { addToCart, likePost } = useCart();
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts: () => void = async () => {
    setloading(true);
    try {
      const response = await fetch(`${import.meta.env.BASE_URL}products.json`);

      const data = await response.json();

      setTimeout(() => {
        setProducts(data);
        setloading(false);
      }, 400);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
  );
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
    <div className="w-full bg-white/50 py-12 overflow-y-auto">
      <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
        <h2 className="text-2xl text-gray-800 my-4 font-bold md:text-4xl md:leading-tight ">
          Welcome To Our Shop
        </h2>
        <p className="mt-1 px-6 text-gray-700 dark:text-neutral-400">
          We've helped some great companies brand, design and get to market.
        </p>
      </div>

      {loading ? (
        <div className="h-dvh text-5xl text-center">Loading</div>
      ) : (
        <div>
          <div className="w-full flex items-center justify-around gap-4 px-6 py-4">
            <div className="hidden md:flex items-center gap-4">
              <div>filter</div>
              <div>sort</div>
            </div>
            <div className=" flex items-center gap-4">
              <div>{<SearchInput search={search} onChange={setSearch} />}</div>
            </div>
          </div>
          {filteredProducts.length === 0 ? (
            <div className="w-full h-56 bg-gray-100 flex items-center justify-center">
              <h1 className="text-2xl">No Product Found</h1>
            </div>
          ) : (
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
              {filteredProducts.map((product: Product) => [
                <div key={product.id} className="  ">
                  <div className="rounded-lg border border-gray-200 bg-white/50 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                    <div
                      className="h-56 w-full pointer hover:cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        setloading(true);
                        setTimeout(() => {
                          veiwProducts(products, product.id);
                        }, 3000);
                      }}
                    >
                      <img
                        className="mx-auto h-full "
                        loading="lazy"
                        src={product.image}
                        alt=""
                      />
                      <p className="sr-only">Netochukwu Codes</p>
                    </div>

                    <div className="pt-6">
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-md font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                          {" "}
                          Shipped Worldwide
                        </span>

                        <div className="flex items-center justify-end gap-3 ">
                          <motion.div
                            animate={{
                              scale: [1, 1.5, 1], // Scale up to 1.5x and back to original size
                            }}
                            transition={{
                              repeat: Infinity,
                              repeatType: "loop",
                              duration: 1.5, // 1.5 seconds to complete one cycle
                              ease: "easeInOut", // Smooth ease-in and ease-out transitions
                            }}
                            onClick={(e) => {
                              e.preventDefault();
                              setloading(true);
                              setTimeout(() => {
                                veiwProducts(products, product.id);
                              }, 3000);
                            }}
                          >
                            <Tooltip content="Veiw This Product" style="light">
                              <FaRegEye
                                className="text-[#8c2643]/75"
                                size={28}
                              />
                            </Tooltip>
                          </motion.div>
                          <Tooltip
                            content="Add this to Favourite"
                            style="light"
                          >
                            <IoMdHeart
                              onClick={() => {
                                likePost(product);
                              }}
                              size={28}
                              className="text-red-500"
                            />
                          </Tooltip>
                        </div>
                      </div>

                      <h2 className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
                        {product.title.split(" ").slice(0, 4).join(" ")}
                      </h2>

                      <div className="mt-2 ">
                        <span className="flex  flex-row items-center text-xl md:text-2xl ">
                          {/*rater */}
                          <div className="flex">
                            <Rater
                              total={5}
                              rating={product.rating.rate}
                              interactive={false}
                            />
                          </div>
                          <span className="text-xl text-gray-600 ml-3">
                            +{product.rating.count} reviews
                          </span>
                        </span>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-4">
                        <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                          {product.price}
                        </p>

                        <Button
                          children="Add  cart"
                          onClick={() => {
                            addToCart(product, 1);
                          }}
                          className="bg-[#8c2643]"
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
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
