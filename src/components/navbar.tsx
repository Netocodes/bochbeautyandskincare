import { useState } from "react";
import Logo from "../assets/logo2.svg";
import { CgMenuRight } from "react-icons/cg";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import { Link } from "react-router-dom";
import { useCart } from "../context/usecart";
interface navitem {
  id: number;
  text: string;
  link: string;
}
export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { cartItems, TotalPrice } = useCart();
  const handleNav = () => {
    setOpen(!isOpen);
  };
  const navArray: navitem[] = [
    { id: 1, text: "Homepage", link: "./" },
    { id: 2, text: "Shop", link: "./productPage" },
    { id: 3, text: "Services", link: "./services" },
    { id: 4, text: "FAQ's", link: "./faqs" },
    { id: 5, text: "Contact", link: "./Contact" },
  ];
  return (
    <div className="bg-black/10">
      <div className="px-2 fixed top-0 mx-auto w-full bg-white/50 lg:backdrop-blur-xl">
        <nav className="bg-[#fff6ed]/75  z-[50]  py-2 w-full md:max-w-[76rem] rounded-lg my-3 md:rounded-full mx-auto flex items-center justify-between  px-8 md:px-20">
          {/* logo */}
          <div className="w-[130px] h-[auto] bg-[#8c2643] rounded-lg md:w-[150px] md:h-auto">
            {/* <h1 className="w-[80px] h-[60px] bg-white">Boch</h1> */}
            <img
              className="object-contain w-full h-[80px]"
              src={Logo}
              alt="Navbar logo"
            />
            {/* <Logo /> */}
          </div>
          {/* Laptop Screen */}
          <div className="hidden md:flex items-center md:gap-x-3 lg:gap-x-8  justify-center">
            {navArray.map((items) => (
              <div key={items.id}>
                <ul className="flex  md:text-md lg:text-lg font-semibold  text-[#8c2643]">
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
            <div className={isOpen ? "hidden" : "md:flex flex-row gap-x-3"}>
              <div className="flex text-[#8c2643]">
                <GiShoppingCart className="text-[#8c2643]" size={32} />
                <div className="-mt-2 font-bold ">{cartItems.length}</div>
              </div>
            </div>
            <div
              onClick={handleNav}
              className="flex  md:hidden text-[#8c2643] "
            >
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
                ? " bg-[#D3D3D3]  fixed flex flex-col  gap-y-12 md:hidden left-0 top-0 w-[80%] h-full border-r border-r-gray-900  ease-in-out duration-500"
                : "  ease-in-out w-[80%] duration-500 fixed top-0 bottom-0 left-[-100%]"
            }
          >
            <div className="bg-[#D3D3D3]  flex flex-col  py-12 gap-y-12">
              {/* Mobile Logo */}
              <h1 className="w-full text-3xl font-bold text-[#8c2643] m-4">
                Navigation Menu
              </h1>

              {/* Mobile Navigation Items */}
              <div className="bg-[#bebcbc] flex flex-col  gap-y-3">
                {navArray.map((item) => (
                  <ul key={item.id} className="text-[#2e2a2b] text-md gap-y-4 ">
                    <Link
                      className=""
                      onClick={() => {
                        setTimeout(() => {
                          setOpen(false);
                        }, 200);
                      }}
                      to={item.link}
                    >
                      <li className="p-4 border-y rounded-xl transition ease-in  duration-300 hover:bg-[#8c2643] hover:text-white font-semibold cursor-pointer border-[#8c2643]">
                        {item.text}
                      </li>
                    </Link>
                  </ul>
                ))}
              </div>

              <div className="flex items-center justify-end px-5 text-lg underline underline-offset-8 text-[#8c2643]">
                Cart Total:
                {/* <GiShoppingCart size={42} /> */}
                <div className="px-4 "> ₺{TotalPrice()}.00</div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
