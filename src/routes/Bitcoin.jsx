import React from "react";

function Bitcoin() {
  const nodeinfo = {
    Height: "786,363",
    "Miner timestamp": "2023-04-21 09:02:56 UTC",
    "First seen": "09:03:07 UTC",
    "Mined by": "AntPool",
    "Accumulated log2(PoW)": "94.133674",
    Size: "2.83 MB",
    "Transaction count": "2,894",
    Fees: "0.04756780 BTC",
  };
  return (
    <section className="pt-20 mx-5 lg:mx-72 overflow-y-auto">
      <div className="flex shadow-xl bg-secondary rounded-3xl w-full h-16 mt-10 text-white">
        <span className="my-auto px-1">
          ChainTip
        </span>
      </div>
      <div className=" shadow-xl bg-secondary rounded-3xl w-full h-fit mt-10 ">
        <div className="flex flex-col text-white p-5 gap-2 divide-y divide-primary">
          <span className="py-1">Height : {nodeinfo["Height"]}</span>
          <span className="py-1">Miner timestamp : {nodeinfo["Miner timestamp"]}</span>
          <span className="py-1">First seen : {nodeinfo["First seen"]}</span>
          <span className="py-1">Mined by : {nodeinfo["Mined by"]}</span>
          <span className="py-1">Accumulated log2(PoW) : {nodeinfo["Accumulated log2(PoW)"]}</span>
          <span className="py-1">Size : {nodeinfo["Size"]}</span>
          <span className="py-1">Transaction count : {nodeinfo["Transaction count"]}</span>
          <span className="py-1">Fees : {nodeinfo["Fees"]}</span>

        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-5">
        <div className="shadow-xl bg-secondary rounded-3xl w-full h-60 mt-10"></div>
        <div className="shadow-xl bg-secondary rounded-3xl w-full h-60 mt-10"></div>
        <div className="shadow-xl bg-secondary rounded-3xl w-full h-60 mt-10"></div>
      </div>
      <div className="p-10" />
    </section>
  );
}

export default Bitcoin;
