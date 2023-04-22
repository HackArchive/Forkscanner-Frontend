import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assests/logo.png";
import btc from "../assests/btc.png";
import lt from "../assests/lightning.png";
import server from "../assests/server.webp";

function Navbar() {
  const activeClass = "flex  border-b-2 text-emerald-500 font-semibold ";
  const inActiveClass = "flex hover:text-[#00897b] text-lg font-normal";

  return (
    // <section className="fixed w-full">
    //         {window.innerWidth >= 1024 && (
    //   <div className="flex flex-row pt-2 px-5 bg-[#00564d] text-white">
    //     <NavLink className="flex flex-row pb-2 mr-auto" to="/bitcoin">
    //       <img src={logo} alt="btc logo" className="w-12 h-12 p-1 " />
    //       <div className="font-semibold text-3xl my-auto pl-2">ForkScanner</div>
    //     </NavLink>

    //     <NavLink
    //       className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
    //       to="/bitcoin"
    //     >
    //       <div className="flex flex-row  m-auto justify-center">
    //         <img src={btc} alt="btc logo" className="w-6 h-6 mx-2" />
    //         <div className="">Bitcoin</div>
    //       </div>
    //     </NavLink>

    //     <NavLink
    //       className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
    //       to="/blocks"
    //     >
    //       <div className="flex flex-row  m-auto justify-center">
    //         <img src={lt} alt="lightning logo" className="w-6 h-6 mx-2 " />
    //         <div className="">Blocks</div>
    //       </div>
    //     </NavLink>

    //     <NavLink
    //       className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
    //       to="/nodes" class =""
    //     >
    //       <div className="flex flex-row  m-auto justify-center">
    //         <img src={server} alt="nodes logo" className="w-6 h-6 mx-2 " />
    //         <div className="">Manage Nodes</div>
    //       </div>
    //     </NavLink>
    //   </div>)}
    //   {window.innerWidth < 1024 && (
    //     <div className="flex flex-row fixed bottom-0 bg-white w-full justify-around text-2xl p-4 shadow-md">
    //       <NavLink to="/bitcoin" className="">
    //         <BsCurrencyBitcoin />
    //       </NavLink>
    //       <NavLink to="/blocks" className="">
    //         <BiCube />
    //       </NavLink>
    //       <NavLink to="/nodes" className="">
    //         <FaServer />
    //       </NavLink>
    //       <NavLink to="/nodes" className="">
    //         <FaServer />
    //       </NavLink>
    //     </div>
    //   )}
    // </section>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink href="/" class="flex items-center">
          <img src={logo} class="h-8 mr-3" alt="ForkScanner Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            ForkScanner
          </span>
        </NavLink>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <div class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <a
              href="/bitcoin"
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              aria-current="page"
            >
              Bitcoin
            </a>
            <a
              href="/blocks"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Blocks
            </a>
            <a
              href="/nodes"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Nodes
            </a>
            {/* <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Pricing
            </a>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Contact
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
