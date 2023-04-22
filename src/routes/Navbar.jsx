import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assests/logo.png";
import btc from "../assests/btc.png";
import lt from "../assests/lightning.png";
import server from "../assests/server.webp";

function Navbar() {
  const activeClass =
    "flex  border-b-2 text-emerald-500 font-semibold ";
  const inActiveClass =
    "flex hover:text-[#00897b] text-lg font-normal";

  return (
    <section className="fixed w-full">
      <div className="flex flex-row pt-2 px-5 bg-[#00564d] text-white">
        <NavLink className="flex flex-row pb-2 mr-auto" to="/bitcoin">
          <img src={logo} alt="btc logo" className="w-12 h-12 p-1 " />
          <div className="font-semibold text-3xl my-auto pl-2">ForkScanner</div>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
          to="/bitcoin"
        >
          <div className="flex flex-row  m-auto justify-center">
            <img src={btc} alt="btc logo" className="w-6 h-6 mx-2" />
            <div className="">Bitcoin</div>
          </div>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
          to="/blocks"
        >
          <div className="flex flex-row  m-auto justify-center">
            <img src={lt} alt="lightning logo" className="w-6 h-6 mx-2 " />
            <div className="">Blocks</div>
          </div>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
          to="/nodes" class =""
        >
          <div className="flex flex-row  m-auto justify-center">
            <img src={server} alt="nodes logo" className="w-6 h-6 mx-2 " />
            <div className="">Manage Nodes</div>
          </div>
        </NavLink>
      </div>
    </section>
  );
}

export default Navbar;
