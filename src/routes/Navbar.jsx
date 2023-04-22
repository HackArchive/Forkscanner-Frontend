import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assests/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { FaServer } from "react-icons/fa";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { BiCube } from "react-icons/bi";

function Navbar() {
  const activeClass = "flex border-b-2 pb-2 text-emerald-500 font-semibold ";
  const inActiveClass = "flex hover:text-[#00897b] text-lg font-normal";
  
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <section className="fixed w-full">

      {/* {window.innerWidth >= 1024 && ( */}
        <div className="flex flex-wrap pt-2 px-5 bg-[#00564d] text-white">
          <NavLink className="flex flex-row pb-2 mr-auto" to="/bitcoin">
            <img src={logo} alt="btc logo" className="w-12 h-12 p-1 " />
            <div className="font-semibold text-3xl my-auto pl-2">
              ForkScanner
            </div>
          </NavLink>
          <div className="gap-x-5 flex flex-col lg:flex-row items-start lg:items-center">
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : inActiveClass
              }
              to="/bitcoin"
            >
              <div className="flex flex-row items-center  m-auto justify-center">
                <BsCurrencyBitcoin className="text-2xl mr-2"/>
                <div className="">Bitcoin</div>
              </div>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : inActiveClass
              }
              to="/blocks"
            >
              <div className="flex flex-row items-center  m-auto justify-center">
                <BiCube className="text-2xl mr-2"/>
                <div className="">Blocks</div>
              </div>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : inActiveClass
              }
              to="/nodes"
              class=""
            >
              <div className="flex flex-row items-center  m-auto justify-center">
                <FaServer className="text-2xl mr-2"/>
                <div className="">Manage Nodes</div>
              </div>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : inActiveClass
              }
              to="/monitor"
              class=""
            >
              <div className="flex flex-row items-center  m-auto justify-center">
                <FaServer className="text-2xl mr-2"/>
                <div className="">Monitor</div>
              </div>
            </NavLink>
          </div>
        </div>
      {/* )} */}
      {/* {window.innerWidth < 1024 && (
        <div className="flex flex-row fixed bottom-0 bg-white w-full justify-around text-2xl p-4 shadow-md">
          <NavLink to="/bitcoin" className="">
            <BsCurrencyBitcoin />
          </NavLink>
          <NavLink to="/blocks" className="">
            <BiCube />
          </NavLink>
          <NavLink to="/nodes" className="">
            <FaServer />
          </NavLink>
          <NavLink to="/nodes" className="">
            <FaServer />
          </NavLink>
        </div>
      )} */}
    </section>
  );
}

export default Navbar;
