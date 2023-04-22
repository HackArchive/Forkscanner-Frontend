import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../App";
import { get_block } from "../utils";

function Bitcoin() {

  const { nodes,blockInfo, chainTips,setBlockInfo } = useContext(GlobalContext);
  const [filterNode, setFilterNode] = useState(null);

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
          .catch(err => console.log(err))
      }
    }
  }



  useEffect(() => {
    if (nodes.length == 0) {
      console.log("no nodes in the database")
    }
    else {
      setFilterNode(nodes[0]);
    }
  }, [nodes])

  useEffect(() => {
    if (filterNode !== undefined) {
      getChainTip(filterNode);
    }
  }, [filterNode])


  return (
    <section className="mx-5 lg:mx-60">
      <div className="flex w-full h-min justify-between items-center mt-10">
        <div className="flex shadow-xl bg-secondary rounded-3xl w-[85%] h-16  text-white  items-center">
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
        <div className="flex flex-col text-white p-5 gap-2 divide-y divide-primary">
          <span className="py-1">Height : {blockInfo && blockInfo.height}</span>
          <span className="py-1">Fees : {blockInfo && blockInfo.total_fee} BTC</span>
          <span className="py-1">Pool Name : {blockInfo && blockInfo.pool_name}</span>
          <span className="py-1">First seen by : {blockInfo && blockInfo.first_seen_by}</span>
          <span className="py-1">Miner Work : {blockInfo && blockInfo.work}</span>
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
