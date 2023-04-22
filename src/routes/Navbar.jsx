import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assests/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { FaServer } from "react-icons/fa";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { BiCube } from "react-icons/bi";
import {MdOutlineNotificationsActive} from "react-icons/md"

function Navbar() {
  const activeClass = "flex border-b-2 pb-2 text-emerald-500 font-semibold ";
  const inActiveClass = "flex hover:text-[#00897b] text-lg font-normal";

  return (
    <section className="fixed w-full h-full lg:h-auto">
      <div className="lg:flex flex-col lg:flex-row pt-2 lg:px-5 px-3 bg-[#212121] text-white hidden shadow-xl ">
        <div className="flex flex-row">
          <NavLink className="flex flex-row pb-2 mr-auto" to="/bitcoin">
            <img src={logo} alt="btc logo" className="w-10 h-10 p-1 " />
            <div className="font-semibold text-lg2 lg:text-xl my-auto pl-2">
              ForkScanner
            </div>
          </NavLink>

        </div>

          <div className="gap-x-5 gap-y-2 flex flex-col lg:flex-row ml-auto pb-2">
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClass : inActiveClass
              }
              to="/bitcoin"
            >
              <div className="flex flex-row items-center  m-auto justify-center">
                <BsCurrencyBitcoin className="text-xl mr-2" />
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
                <BiCube className="text-xl mr-2" />
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
                <FaServer className="text-xl mr-2" />
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
                <MdOutlineNotificationsActive className="text-xl mr-2" />
                <div className="">Notification</div>
              </div>
            </NavLink>
          </div>
      </div>
        <div className="flex flex-row fixed bottom-0 bg-white w-full justify-around text-2xl p-4 shadow-md lg:hidden">
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
            <MdOutlineNotificationsActive />
          </NavLink>
        </div>
    </section>
  );
}

export default Navbar;
