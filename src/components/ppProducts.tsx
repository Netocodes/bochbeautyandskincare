import { Button } from "@material-tailwind/react";
import { Drawer } from "flowbite-react";
import { HiBarsArrowUp, HiSquaresPlus } from "react-icons/hi2";
import { MdCloseFullscreen } from "react-icons/md";
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
import { FaFilter } from "react-icons/fa";

// import { FaSortAlphaUp } from "react-icons/fa";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

export type Product = {
  id: number;
  category: string;
  title: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
  rating: { rate: number; count: number };
  seo: string;
  features: string[];
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setloading] = useState(false);
  const [search, setSearch] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
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
      }, 100);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const filteredProducts = products.filter((product) => {
    // If 'all' is selected, show all products
    const isCategoryMatch =
      selectedCategory === "all" ||
      product.category.toLowerCase() === selectedCategory;

    // Search logic
    const isSearchMatch =
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase()) ||
      product.seo.toLowerCase().includes(search.toLowerCase()) ||
      product.features.join(" ").toLowerCase().includes(search.toLowerCase());

    // Return only products that match both search and category filters
    return isCategoryMatch && isSearchMatch;
  });

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
  const category = [
    { id: 1, title: "all", icon: "CgSmileNone" },
    { id: 2, title: "men's clothing", icon: "" },
    { id: 3, title: "women's clothing", icon: "" },
    { id: 4, title: "electronics", icon: "" },
    { id: 5, title: "jewelery", icon: "" },
    { id: 6, title: "jewelerycopy", icon: "" },
    // { id: 7, title: "jewelerycopy", icon: "" },
    // { id: 8, title: "jewelerycopy", icon: "" },
    // { id: 9, title: "jewelerycopy", icon: "" },
  ];

  const handleClose = (): void => setOpen(!isOpen);
  // Handle category selection from the drawer
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    handleClose(); // Close the drawer after selecting category
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
        <div className="  h-dvh text-5xl flex items-center ">Loading</div>
      ) : (
        <div className=" ">
          <div className="w-full  bg-gray-500/45 flex flex-col-reverse md:flex-row items-center justify-between gap-4 px-4 md:px-12 py-4">
            <div className="flex  items-center justify-self-start gap-4 px-4">
              <div className="flex flex-row" onClick={handleClose}>
                <Button
                  className="flex items-center gap-x-2 px-2 py-3 bg-[#8c2643]"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <FaFilter size={16} className=" text-[#fff0f5]" /> Filter
                </Button>
              </div>
              <Drawer
                edge
                open={isOpen}
                onClose={handleClose}
                position="bottom"
                className="w-full bottom-0 shadow-lg bg-[#f3f3f3]  py-10 z-50  flex-col md:flex-row items-center justify-around "
              >
                <Drawer.Header
                  openIcon={MdCloseFullscreen}
                  closeIcon={HiBarsArrowUp}
                  title="Filters"
                  titleIcon={HiSquaresPlus}
                  onClick={handleClose}
                />
                <Drawer.Items className="drawer bg-black/15 overflow-y-auto h-full w-full md:w-[80%] mx-auto">
                  <div className=" h-[50dvh]  grid grid-cols-2 gap-4 p-4 lg:grid-cols-3">
                    {category.map(({ id, title }) => {
                      return (
                        <div
                          key={id}
                          onClick={() =>
                            handleCategorySelect(title.toLowerCase())
                          }
                        >
                          <div className="cursor-pointer">
                            <figure className="relative bg-[#8c2643] h-48 object-cover w-full md:w-[auto]">
                              <img
                                className="h-full w-full px-0 md:px-3 rounded-xl object-cover object-center"
                                src="https://i.pinimg.com/736x/d1/a8/3d/d1a83d1b34284ad271be2a0a4df1da0c.jpg"
                                alt="nature image"
                              />
                              <div className="absolute bottom-0 w-full px-2 md:px-6 py-4 bg-gray-700 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-30 backdrop-saturate-150 backdrop-contrast-100  leading-tight">
                                <h2 className="text-semibold font-playfair text-md md:text-xl text-white">
                                  {title}
                                </h2>
                              </div>
                            </figure>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Drawer.Items>
              </Drawer>
              <div>
                <Menu
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                  }}
                >
                  <MenuHandler>
                    <Button
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                      className=" bg-[#8c2643]"
                    >
                      {" "}
                      Menu
                    </Button>
                  </MenuHandler>
                  <MenuList
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <MenuItem
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      Menu Item 1
                    </MenuItem>
                    <MenuItem
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      Menu Item 2
                    </MenuItem>
                    <MenuItem
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      Menu Item 3
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
            <div className="mr-0 px-8 flex items-center gap-4">
              <div>{<SearchInput search={search} onChange={setSearch} />}</div>
            </div>
          </div>
          <div>
            <h1 className="py-4 px-4">
              Displaying Products for{" "}
              <span className="text-lg font-semibold italic">
                " {selectedCategory} "
              </span>
            </h1>
          </div>
          {filteredProducts.length === 0 ? (
            <div className="w-full h-56 bg-gray-100 flex items-center justify-center">
              <h1 className="text-2xl">No Product Found</h1>
            </div>
          ) : (
            <div className="bg-[#f8f4f4] grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 py-5">
              {filteredProducts.map((product: Product) => [
                <div key={product.id} className="bg-[#fefefe]">
                  <div className="rounded-lg border border-gray-200 bg-white/50 p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
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

                        <div className="flex items-center justify-end gap-3 z-[10]">
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1], // Scale up to 1.5x and back to original size
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
                            <Tooltip
                              className="text-md"
                              content="Veiw This Product"
                              style="light"
                            >
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
                  <div className=""></div>
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
