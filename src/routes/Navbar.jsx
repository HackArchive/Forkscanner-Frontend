import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assests/logo.png";
import btc from "../assests/btc.png";
import lt from "../assests/lightning.png";
import server from "../assests/server.webp";

function Navbar(props) {
  // const classData = props;
  const activeClass='flex bg-[#282828] text-emerald-500 rounded-t-xl font-semibold ' 
  const inActiveClass='flex hover:bg-[#00897b] rounded-t-xl'

  return (
    <section className="fixed w-full">
      <div className="flex flex-row pt-2 px-5 bg-[#00564d] text-white">
        <NavLink className="flex flex-row pb-2 mr-auto" to="/bitcoin">
          <img src={logo} alt="btc logo" className="w-12 h-12 p-1 px-1" />
          <div className="font-semibold text-3xl my-auto pl-2">ForkScanner</div>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? activeClass : inActiveClass
          }
          to="/bitcoin"
        >
          <div className="flex flex-row w-36 m-auto justify-center">
            <img src={btc} alt="btc logo" className="w-8 h-8 mx-2" />
            <div className="">Bitcoin</div>
          </div>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? activeClass : inActiveClass
          }
          to="/lightning"
        >
          <div className="flex flex-row w-36 m-auto justify-center">
            <img
              src={lt}
              alt="lightning logo"
              className="w-8 h-8 mx-2 "
            />
            <div className="">Lightning</div>
          </div>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? activeClass : inActiveClass
          }
          to="/nodes"
        >
          <div className="flex flex-row w-36 m-auto justify-center">
            <img
              src={server}
              alt="nodes logo"
              className="w-8 h-8 mx-2 "
            />
            <div className="">Manage Nodes</div>
          </div>
        </NavLink>

      </div>
    </section>
  );
}

export default Navbar;
