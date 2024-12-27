import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleNav = () => {
    setOpen(!isOpen);
  };
  const navArray = [
    { id: 1, text: "Homepage", link: "./" },
    { id: 2, text: "Products", link: "./productPage" },
    { id: 3, text: "Services", link: "./services" },
    { id: 4, text: "FAQ's", link: "./faqs" },
    { id: 5, text: "Contact", link: "./Contact" },
  ];
  return (
    <div className="px-2 fixed top-0 mx-auto w-full !z-[50">
      <nav className="bg-black/75 z-[50]  py-4 w-full md:max-w-[76rem] rounded-lg my-3 md:rounded-full mx-auto flex items-center justify-between px-8">
        {/* logo */}
        <div>
          <h1 className="w-[50px] h-[50px] bg-white">Boch</h1>
        </div>
        {/* Laptop Screen */}
        <div className="hidden md:flex items-center gap-x-8 justify-center">
          {navArray.map((items) => (
            <div>
              <ul className="flex text-lg font-semibold text-white/75">
                <li key={items.id}>
                  <Link to={items.link}>{items.text}</Link>
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
              <div className="-mt-2 font-bold ">10</div>
            </div>
          </div>
          <div onClick={handleNav} className="flex md:hidden ">
            {isOpen ? <AiOutlineClose size={32} /> : <CgMenuRight size={32} />}
          </div>
        </div>
        <div
          className={
            isOpen
              ? "fixed flex flex-col gap-y-12 md:hidden left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#2c2a2a] ease-in-out duration-500"
              : "ease-in-out w-[80%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            Navigation Menu
          </h1>

          {/* Mobile Navigation Items */}
          <div>
            {navArray.map((item) => (
              <ul className="text-white text-xl ">
                <li
                  key={item.id}
                  className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
                >
                  {item.text}
                </li>
              </ul>
            ))}
          </div>

          <div className="flex items-center justify-end px-5 text-white">
            <GiShoppingCart size={42} />
            <div className="-mt-3 ">10</div>
          </div>
        </div>
      </nav>
    </div>
  );
};
