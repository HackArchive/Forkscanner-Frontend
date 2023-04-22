import React, { useContext, useState } from "react";
import { submit_block } from "../utils";
import { GlobalContext } from "../App";

const json_placeholder = `{
    "coinbase_message": [ 123, 45, 67 ],
    "connected": true,
    "first_seen_by": 13,
    "hash": "00000000000000000006ead1cff09f279f7beb31a7290c2a603b0776d98dc334",
    "headers_only": false,
    "height": 733430,
    "lowest_template_fee_rate": null,
    "parent_hash": "000000000000000000082af6a6db0e71d72f25dcfb513aeda1a1cb4044253030",
    "pool_name": "Foundry USA",
    "template_txs_fee_diff": null,
    "total_fee": "0.09797872",
    "tx_omitted_fee_rates": null,
    "txids": [
      "d6187e533fffece5c502e8a05242dba6e94a7eb9cdde241250f3ed16c31242eb",
      "b76c3a88d50ff3b8a03fc623098f86d6872b3748d6cce956138fef8fa6f6c412",
      "...snip..."
    ],
    "txids_added": null,
    "txids_omitted": null,
    "work": "00000000000000000000000000000000000000002ca1bca6e028e261a6019f07"
  }`;

export default function SubmitBlockForm(props) {
  const { nodes } = useContext(GlobalContext);
  const [nodeId, setNodeId] = useState(null);
  const [blockJson, setBlockJson] = useState("");

  const submit_block_call = () => {
    if (JSON.stringify(blockJson))
      try {
        let bjson = JSON.stringify(blockJson);
        submit_block(nodeId, bjson)
          .then((result) => {
            console.log(result);
            props.setHideForm(true);
            alert("Block submitted successfully");
          })
          .catch((err) => {
            console.log(err);
            alert("Block submission failed, Invalid block json");
          });
      } catch (err) {
        console.log(err);
        alert("Invalid Block JSON");
      }
  };

  return (
    <div className="relative z-30 flex w-full h-full bg-black bg-opacity-30 backdrop-blur-sm justify-center items-center">
      <div className="flex w-fit h-fit bg-secondary items-center justify-center rounded-xl shadow-md">
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px] flex">
            <div>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="w-[100px] h-[50px]">
                    <select
                      name="node_id"
                      onChange={(e) => setNodeId(parseInt(e.target.value))}
                      className="w-full h-full p-2 rounded-md"
                    >
                      {nodes.map((node_id) => (
                        <option value={`${node_id}`}>Node {node_id}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="my-5">
                <textarea
                  placeholder={json_placeholder}
                  rows={10}
                  cols={100}
                  value={blockJson}
                  onChange={(e) => setBlockJson(e.target.value)}
                  className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md overflow-y-scroll"
                />
              </div>

              <div>
                <button
                  className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                  onClick={submit_block_call}
                >
                  Submit
                </button>
                <button
                  className="hover:shadow-form ml-5 rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                  onClick={() => props.setHideForm(true)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
