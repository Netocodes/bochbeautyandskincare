import React, { useState } from "react";
import Logo from "../assets/logo2.svg";
import { CgMenuRight } from "react-icons/cg";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import { NavLink } from "react-router-dom";
import { useCart } from "../context/usecart";
interface navitem {
  id: number;
  text: string;
  link: string;
}

export const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const { cartItems, TotalPrice } = useCart();
  const handleNav = () => {
    setOpen(!isOpen);
  };
  const navArray: navitem[] = [
    { id: 1, text: "Homepage", link: "/" },
    { id: 2, text: "Shop", link: "./productPage" },
    { id: 3, text: "Services", link: "/Services" },
    { id: 4, text: "Shipping & Payment", link: "/shipping-page" },
    { id: 5, text: "Contact", link: "./Contact" },
  ];

  return (
    <div className="bg-black/10">
      <div className="px-2 fixed top-0 mx-auto w-full bg-[#e2cfcfab]  md:bg-gray-500 md:bg-clip-padding md:backdrop-filter  md:backdrop-blur-sm md:bg-opacity-40 md:backdrop-saturate-100 md:backdrop-contrast-10">
        <nav className="bg-[#8c2643]  z-[50] shadow-lg py-1 w-full md:max-w-[56rem] lg:max-w-[76rem] rounded-lg my-3 md:rounded-full mx-auto flex items-center justify-between  px-8 md:px-20">
          {/* logo */}
          <div className="w-[130px] h-[auto] bg-[#852743]/50 rounded-lg md:w-[150px] md:h-auto">
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
                <ul className="flex  md:text-md lg:text-lg font-semibold font-serif text-[#f6f6f6]">
                  <NavLink
                    className={({ isActive }) =>
                      `transition-all duration-300 ease-in hover:underline decoration-white underline-offset-8
                  ${
                    isActive
                      ? "text-[#f6f6f6] underline decoration-white underline-offset-8"
                      : ""
                  }`
                    }
                    // activeClassName="text-[#f6f6f6] underline decoration-white underline-offset-8"
                    to={items.link}
                  >
                    <li>{items.text}</li>
                  </NavLink>
                </ul>
              </div>
            ))}
          </div>
          {/* Mobile Screen */}
          <div className="flex text-white items-center gap-x-3">
            <div  className={isOpen ? "hidden" : "md:flex flex-row gap-x-3"}>
              <NavLink  to={"/cart-Items"}  className="flex hover:bg-white/25 px-2 py-3 rounded-xl text-[#f6f6f6]">
                 
                  <GiShoppingCart  className="text-[#f6f6f6]" size={32} />
                <div className="-mt-4 -ml-2 px-1 text-lg font-normal text-[#f6f6f6]">
                  {cartItems.length}
                </div>
              
                
              </NavLink>
            </div>
            <div
              onClick={handleNav}
              className="flex  md:hidden text-[#f6f6f6] "
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
                ? " bg-[#D3D3D3]  fixed flex flex-col  gap-y-12 md:hidden left-0 overflow-y-auto top-0 w-[80%] h-full border-r border-r-gray-900  ease-in-out duration-500"
                : "  ease-in-out w-[80%] duration-500 fixed top-0 bottom-0 left-[-100%]"
            }
          >
            <div className="bg-[#D3D3D3]   flex flex-col  px-4 py-12 gap-y-12">
              {/* Mobile Logo */}
              <h1 className="w-full  text-3xl font-bold text-[#8c2643] m-2">
                Navigation Menu
              </h1>

              {/* Mobile Navigation Items */}
              <div className="bg-[#f0ede3] py-6 rounded-md px-2 flex flex-col  gap-y-3">
                {navArray.map((item) => (
                  <ul
                    key={item.id}
                    className="text-[#2e2a2b]  text-md gap-y-4 "
                  >
                    <NavLink to={item.link}>
                      {({ isActive }) => (
                        <li
                          className={`p-4 w-full border-y rounded-md transition ease-in duration-300 font-semibold cursor-pointer border-[#8c2643] ${
                            isActive
                              ? "bg-[#8c2643] text-white"
                              : "hover:bg-[#8c2643] hover:text-white"
                          }`}
                          onClick={() => {
                            setTimeout(() => {
                              setOpen(false);
                            }, 400);
                          }}
                        >
                          {item.text}
                        </li>
                      )}
                    </NavLink>
                  </ul>
                ))}
              </div>

              <div className="flex items-center justify-end px-5 text-lg underline underline-offset-8 text-[#8c2643]">
                
                {/* <GiShoppingCart size={42} /> */}
                <div className="px-4 flex flex-col items-center justify-center  gap-y-4 text-center font-sans">
                  {" "}
                  {" "}
                  <span className="text-xl font-semibold leading-tight">
                  Cart Total:  {TotalPrice()}<small className="text-md px-1">tl</small>
                  </span>
                  <span>"tl" is turkish Lira (Turkey Currency)</span>
                  
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
