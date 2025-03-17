import { Button } from "@material-tailwind/react";
import { Drawer } from "flowbite-react";
import { HiBarsArrowUp, HiSquaresPlus } from "react-icons/hi2";
import { MdCloseFullscreen } from "react-icons/md";
import { useState, useEffect, Suspense } from "react";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { useCart } from "../context/usecart";
import { SearchInput } from "./ppInputSearch";
import { useNavigate,  } from "react-router-dom";
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
import { getCloudinaryUrl } from "../utils/cloud";
import { toast } from "sonner";
import Loadingscreen from "./loadingScreen";

export type Product = {
  id: number;
  category: string;
  title: string;
  price: number;
  description: string;
  detailsImage:[],
  images: [];
  image: string;
  imageUrl: string;
  quantity: number;
  rating: { rate: number; count: number };
  currency: string;
  seo: [];
  net_weight: string;
  skin_type: string;
  how_to_use: [];
  key_features: [];
  
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  // const { data } = useFetch<Product[]>("/products.json");
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts: () => void = async () => {
   
    try {
      const response = await fetch(`${import.meta.env.BASE_URL}products.json`);

      const data = await response.json();
     
      
      const productsWithUrls = data.map((product: Product) => ({
        ...product,
        imageUrl: getCloudinaryUrl(product.image, 500, 500), // Example options
        detailsImage: product.images.map((image) => getCloudinaryUrl(image)), // Example options
    }));
     
      
        setProducts(productsWithUrls);
        
       
      
 
     console.log(productsWithUrls);
    
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
      product.title.trim().toLowerCase().includes(search.toLowerCase()) ||
      product.description.trim().toLowerCase().includes(search.toLowerCase()) ||
      product.category.trim().toLowerCase().includes(search.toLowerCase()) ||
      product.seo.join(" ").toLowerCase().includes(search.toLowerCase()) ||
      product.key_features.join(' ').toLowerCase().includes(search.toLowerCase());
      product.how_to_use.join(" ").toLowerCase().includes(search.toLowerCase());
      product.skin_type.trim().toLowerCase().includes(search.toLowerCase());
      product.net_weight.trim().toLowerCase().includes(search.toLowerCase());
      

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
    { id: 2, title: "Body Scrubs", icon: "" },
    { id: 3, title: "Body Oils", icon: "" },
    { id: 4, title: "Cleansers", icon: "" },
    { id: 5, title: "Hair Care", icon: "" },
    { id: 6, title: "Body Creams", icon: "" },
    { id: 7, title: "supplements", icon: "" },
    // { id: 8, title: "jewelerycopy", icon: "" },
    // { id: 9, title: "jewelerycopy", icon: "" },
  ];
  const handleDownload = () => {
    toast.success("hold on ")
  }

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
        <p className="mt-1 px-6 text-gray-700 flex flex-col gap-y-4 items-stretch">
          We offer alot more than the products shown here but this is for Chiri original products. <small>Click on the link below to chat with us on whatsapp for other supplements and skincare products</small>
        </p>
        <a href="https://wa.me/+905384085304?text=Hello%2C%20I%20have%20a%20question" target="_blank" rel="noopener noreferrer" className="mt-1 underline text-purple-400"> click here</a>
      </div>

      
        
     
        <div className=" ">
          <div className="w-full  bg-gray-500/45 flex flex-col-reverse md:flex-row items-center justify-between gap-4 px-4 md:px-12 py-4">
            <div className="flex  items-center justify-self-start gap-4 px-4">
              <div className="flex flex-row" onClick={handleClose}>
                <Button
                  className="flex items-center gap-x-2 px-2 py-3 text-gray-300 bg-[#8c2643]"
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
                      className="text-gray-300 bg-[#8c2643]"
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
                <Suspense fallback={<Loadingscreen />}>
                  <div key={product.id} className="bg-[#fefefe] font-sans">
                  <div className="rounded-lg border border-gray-200 bg-white/50 p-6 shadow-lg ">
                    <div
                      className="h-56 w-full mx-auto px-2 py-2 bg-[#81133d] pointer hover:cursor-pointer rounded-xl "
                      onClick={(e) => {
                        e.preventDefault();
                        toast.success("hold on while we change the page")
                          veiwProducts(products, product.id);
                      }}
                    >
                      <img
                        className=" w-full h-full bg-center object-cover rounded-xl"
                        loading="lazy"
                        src={product.imageUrl}
                        alt="Skincare images"

                      />
                      <p className="sr-only">Netochukwu Codes</p>
                    </div>

                    <div className="pt-6">
                      <div className="mb-4 flex items-center justify-between  gap-4">
                        <span className="me-2  bg-red-100 rounded-md shadow-lg px-2.5 py-0.5 text-md font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
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
                        toast.success("hold on while we change the page")
                           
                                veiwProducts(products, product.id);

                            
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
                            content="Downoad image"
                            style="light"
                          >
                            
                            <MdOutlineFileDownload
                              onClick={() => {
                                handleDownload()
                              }}
                              size={28}
                              className="text-gray-800"
                            />
                          </Tooltip>
                        </div>
                      </div>

                      <h2 className="text-xl font-semibold leading-tight text-gray-700 hover:underline ">
                        {product.title.split(" ").slice(0, 4).join(" ")}
                      </h2>

                      <div className="mt-2 ">
                        <span className="w-full flex  flex-row items-center text-xl md:text-2xl ">
                          {/*rater */}
                          <div className="flex ">
                            <Rater
                              total={5}
                              rating={product.rating.rate}
                              interactive={false}
                            />
                          </div>
                          <span className="text-lg md:text-xl text-gray-600 ml-3">
                            +{product.rating.count} reviews
                          </span>
                        </span>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-4">
                        <p className="text-2xl md:text-3xl font-extrabold leading-tight text-gray-700 dark:text-white">
                          <span className="font-normal  text-2xl text-gray-700">
                            ₺
                          </span>{" "}
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
                </div>
                </Suspense>
              ])}
            </div>
          )}
        </div>
      
    </div>
  );
};

export default Products;
