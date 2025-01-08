import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";
interface navitem {
  id: number;
  text: string;
  link: string;
}
export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { cartItems } = useCart();
  const handleNav = () => {
    setOpen(!isOpen);
  };
  const navArray: navitem[] = [
    { id: 1, text: "Homepage", link: "./" },
    { id: 2, text: "Products", link: "./productPage" },
    { id: 3, text: "Services", link: "./services" },
    { id: 4, text: "FAQ's", link: "./faqs" },
    { id: 5, text: "Contact", link: "./Contact" },
  ];
  return (
    <div className="bg-black/10">
      <div className="px-2 fixed top-0 mx-auto w-full backdrop-blur-xl">
        <nav className="bg-black/75 z-[50]  py-4 w-full md:max-w-[76rem] rounded-lg my-3 md:rounded-full mx-auto flex items-center justify-between  px-8 md:px-20">
          {/* logo */}
          <div>
            <h1 className="w-[50px] h-[50px] bg-white">Boch</h1>
          </div>
          {/* Laptop Screen */}
          <div className="hidden md:flex items-center md:gap-x-3 lg:gap-x-8  justify-center">
            {navArray.map((items) => (
              <div key={items.id}>
                <ul className="flex  md:text-md lg:text-lg font-semibold  text-white/75">
                  <li>
                    <Link className="hover:text-red" to={items.link}>
                      {items.text}
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          {/* Mobile Screen */}
          <div className="flex text-white items-center gap-3">
            <div className={isOpen ? "hidden" : "md:flex"}>
              <div className="flex">
                <GiShoppingCart size={32} />
                <div className="-mt-2 font-bold ">{cartItems.length}</div>
              </div>
            </div>
            <div onClick={handleNav} className="flex  md:hidden ">
              {isOpen ? (
                <AiOutlineClose size={32} />
              ) : (
                <CgMenuRight size={32} />
              )}
            </div>
          </div>
          <div
            className={
              isOpen
                ? " bg-black/90  fixed flex flex-col py-12 gap-y-12 md:hidden left-0 top-0 w-[80%] h-full border-r border-r-gray-900  ease-in-out duration-500"
                : "  ease-in-out w-[80%] duration-500 fixed top-0 bottom-0 left-[-100%]"
            }
          >
            <div className="bg-black  flex flex-col py-12 gap-y-12">
              {/* Mobile Logo */}
              <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
                Navigation Menu
              </h1>

              {/* Mobile Navigation Items */}
              <div className="bg-black">
                {navArray.map((item) => (
                  <ul key={item.id} className="text-white text-xl gap-y-4 ">
                    <li className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600">
                      <Link className="hover:text-red" to={item.link}>
                        {item.text}
                      </Link>
                    </li>
                  </ul>
                ))}
              </div>

              <div className="flex items-center justify-end px-5 text-white">
                <GiShoppingCart size={42} />
                <div className="-mt-3 ">{cartItems.length}</div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
