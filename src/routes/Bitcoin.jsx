import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../App";
import { get_block, tx_active } from "../utils";
import { CgSearch } from "react-icons/cg";

function Bitcoin() {

  const { nodes, blockInfo, chainTips, setBlockInfo } = useContext(GlobalContext);
  const [filterNode, setFilterNode] = useState(null);
  const [txActiveSearch, setTxActiveSearch] = useState(null);

  const searchTxActive = () => {
    tx_active(txActiveSearch).then((res) => {
      if (res === false) {
        alert("Transaction is not active");
      }
      else {
        alert("Transaction is active");
      }
    }).catch((err) => {
      console.log(err, "----");
    })
  }

  const getChainTip = (node) => {
    for (let i = 0; i <= chainTips.length; i++) {
      if (chainTips[i] !== undefined && chainTips[i].node == node) {
        setBlockInfo(chainTips[i]);
        get_block(chainTips[i].block)
          .then(result => {
            if (result.length !== 0) {
              setBlockInfo(result[0]);
            }
          })
          .catch((err) => console.log(err));
      }
    }
  };

  useEffect(() => {
    if (nodes.length == 0) {
      console.log("no nodes in the database");
    } else {
      setFilterNode(nodes[0]);
    }
  }, [nodes]);

  useEffect(() => {
    if (filterNode !== undefined) {
      getChainTip(filterNode);
    }
  }, [filterNode]);

  return (
    <section className="mx-5 lg:mx-60">
        <div className="relative flex w-full h-min justify-between items-center lg:mt-10">
          <input
            className="bg-slate-50 h-12 w-60 lg:w-96 rounded mt-10  pl-5 text-lg"
            placeholder="Block hash or height"
            value={txActiveSearch}
            onChange={(e) => setTxActiveSearch(e.target.value)}
          />

          <button
            onClick={searchTxActive}
            className="bg-buttons text-white flex items-center justify-center text-xl ml-2 rounded mt-10 p-2"
          >
            <CgSearch className="m-auto" />
            <p className="ml-2">Active TX</p>
          </button>
        </div>

      <div className="flex w-full h-min justify-between items-center lg:mt-10">
        <div className="flex shadow-xl bg-secondary rounded-3xl w-[85%] h-fit p-1 lg:py-3 py-2  text-white  items-center break-all">
          <span className="my-auto px-5 text-xl">
            <strong>ChainTip:</strong> {blockInfo && blockInfo.hash}
          </span>
        </div>
        <div className="w-[100px] h-[50px]">
          <select name="node_id" onChange={(event) => { setFilterNode(event.target.value) }} className="w-full h-full p-2 rounded-md">
            {
              nodes.map(node_id => <option value={`${node_id}`}>Node {node_id}</option>)
            }
          </select>
        </div>
      </div>
      <div className=" shadow-xl bg-secondary rounded-3xl w-full h-fit mt-10 ">
        <div className="flex flex-col text-white p-5 gap-2 divide-y divide-primary break-all">
          <span className="py-1">Height : {blockInfo && blockInfo.height}</span>
          <span className="py-1">
            Fees : {blockInfo && blockInfo.total_fee} BTC
          </span>
          <span className="py-1">
            Pool Name : {blockInfo && blockInfo.pool_name}
          </span>
          <span className="py-1">
            First seen by : {blockInfo && blockInfo.first_seen_by}
          </span>
          <span className="py-1">
            Miner Work : {blockInfo && blockInfo.work}
          </span>
        </div>
      </div>

          <div className="relative z-10 flex lg:flex-row flex-col lg:gap-5">
            <div className="shadow-xl bg-secondary rounded-3xl w-full h-60 mt-10"></div>
            <div className="shadow-xl bg-secondary rounded-3xl w-full h-60 mt-10"></div>
            <div className="shadow-xl bg-secondary rounded-3xl w-full h-60 mt-10"></div>
          </div>

    </section>
  );
}

export default Bitcoin;
