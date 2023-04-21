import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assests/logo.png";
import btc from "../assests/btc.png";
import lt from "../assests/lightning.png";

function Navbar(props) {
  const classData = props;

  return (
    <section className="">
      <div className="flex flex-row pt-2 px-5 bg-[#00564d] text-white">
        <NavLink className="flex flex-row mr-auto pb-2" to="/bitcoin">
          <img src={logo} alt="btc logo" className="w-12 h-12 p-1 px-1" />
          <div className="font-semibold text-3xl my-auto pl-2">ForkScanner</div>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? classData.activeClass : classData.inActiveClass
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
            isActive ? classData.activeClass : classData.inActiveClass
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
      </div>
    </section>
  );
}

export default Navbar;
