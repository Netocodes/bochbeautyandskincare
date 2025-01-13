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
    <div className="w-full bg-white/50 overflow-y-auto">
      <h1 className=" text-3xl">Products</h1>

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
                          onClick={(e) => {
                            e.preventDefault();
                            setloading(true);
                            setTimeout(() => {
                              veiwProducts(products, product.id);
                            }, 3000);
                          }}
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
                      

                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        4.9
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
