import React from "react";
import { CgSearch } from "react-icons/cg"

function Blocks() {
  const blockinfo = [
    {
      height: "787878",
      time: "2023-04-22 12:02:18 GMT +5.5",
      transactions: 958,
      size: 1234.12121,
      weight: 1412.1241,
    },
    {
      height: "787878",
      time: "2023-04-22 12:02:18 GMT +5.5",
      transactions: 958,
      size: 1234.12121,
      weight: 1412.1241,
    },
    {
      height: "787878",
      time: "2023-04-22 12:02:18 GMT +5.5",
      transactions: 958,
      size: 1234.12121,
      weight: 1412.1241,
    },
    {
      height: "787878",
      time: "2023-04-22 12:02:18 GMT +5.5",
      transactions: 958,
      size: 1234.12121,
      weight: 1412.1241,
    },
    {
      height: "787878",
      time: "2023-04-22 12:02:18 GMT +5.5",
      transactions: 958,
      size: 1234.12121,
      weight: 1412.1241,
    },
    {
      height: "787878",
      time: "2023-04-22 12:02:18 GMT +5.5",
      transactions: 958,
      size: 1234.12121,
      weight: 1412.1241,
    },
    {
      height: "787878",
      time: "2023-04-22 12:02:18 GMT +5.5",
      transactions: 958,
      size: 1234.12121,
      weight: 1412.1241,
    },
    {
      height: "787878",
      time: "2023-04-22 12:02:18 GMT +5.5",
      transactions: 958,
      size: 1234.12121,
      weight: 1412.1241,
    },
    {
      height: "787878",
      time: "2023-04-22 12:02:18 GMT +5.5",
      transactions: 958,
      size: 1234.12121,
      weight: 1412.1241,
    },
    {
      height: "787878",
      time: "2023-04-22 12:02:18 GMT +5.5",
      transactions: 958,
      size: 1234.12121,
      weight: 1412.1241,
    },
  ];

  return (
    <section className="mx-5 lg:mx-60">
      
      <div className="mx-auto flex flex-row justify-center mb-5">
        <input
          className="bg-slate-50 h-12 w-60 lg:w-96 rounded mt-10  pl-5"
          placeholder="Search"
        />
        <button className="bg-secondary text-white text-xl w-12 ml-2 rounded mt-10 ">
          <CgSearch className="m-auto" />
        </button>
      </div>
      <div className="flex flex-col gap-4 items-center overflow-y-auto ">
        <div className="flex shadow-xl bg-secondary rounded-xl h-16  text-white  ">
          <span className="my-auto px-5 text-xl text-left lg:w-40">Height</span>
          <span className="my-auto px-5 text-xl text-left lg:w-[32rem]">Timestamp</span>
          <span className="my-auto px-5 text-xl text-left lg:w-44">Transaction</span>
          <span className="my-auto px-5 text-xl text-left lg:w-40">Size</span>
          <span className="my-auto px-5 text-xl text-left lg:w-40">Weight</span>


        </div>
        {blockinfo.map((info) => (
          <div className="flex shadow-xl bg-secondary hover:bg-tertiary rounded-xl h-16  text-white ">
            <div className="my-auto px-5 text-base  text-left lg:w-40">{info.height}</div>
            <div className="my-auto px-5 text-base  text-left lg:w-[32rem]">{info.time}</div>
            <div className="my-auto px-5 text-base  text-left lg:w-44">{info.transactions}</div>
            <div className="my-auto px-5 text-base  text-left lg:w-40">{info.size}</div>
            <div className="my-auto px-5 text-base  text-left lg:w-40">{info.weight}</div>


          </div>
        ))}
      </div>
    </section>
  );
}

export default Blocks;
