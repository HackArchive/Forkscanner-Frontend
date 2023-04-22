import React, { useState } from "react";
import { add_node } from "../utils";

export default function AddNodeForm(props) {
  const [nodeName, setNodeName] = useState(null);
  const [rpcHost, setRpcHost] = useState(null);
  const [rpcPort, setRpcPort] = useState(null);
  const [rpcUser, setRpcUser] = useState(null);
  const [rpcPass, setRpcPass] = useState(null);
  const [mirrorRpcHost, setMirrorRpcHost] = useState(null);
  const [mirrorRpcPort, setMirrorRpcPort] = useState(null);
  const [archive, setArchive] = useState(true);

  const submit_node = () => {
    add_node(
      nodeName,
      rpcHost,
      rpcPort,
      mirrorRpcPort,
      rpcUser,
      rpcPass,
      archive
    )
      .then((result) => {
        console.log(result);
        props.setHideForm(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex w-full h-full backdrop-blur-sm bg-black bg-opacity-30 justify-center items-center">
      <div className="flex w-fit h-fit bg-secondary items-center justify-center rounded-xl shadow-xl">
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px]">
            <div>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      for="fName"
                      className="mb-3 block text-base font-medium text-white"
                    >
                      Node Name
                    </label>
                    <input
                      type="text"
                      name="node_name"
                      id="node_name"
                      placeholder="node1"
                      value={nodeName}
                      onChange={(e) => {
                        setNodeName(e.target.value);
                      }}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      for="lName"
                      className="mb-3 block text-base font-medium text-white"
                    >
                      RPC Host
                    </label>
                    <input
                      type="text"
                      name="rpc_host"
                      id="rpc_host"
                      placeholder="143.244.138.173"
                      value={rpcHost}
                      onChange={(e) => {
                        setRpcHost(e.target.value);
                      }}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <label
                  for="guest"
                  className="mb-3 block text-base font-medium text-white"
                >
                  RPC Port
                </label>
                <input
                  type="number"
                  name="rpc_port"
                  id="rpc_port"
                  placeholder="8332"
                  min="0"
                  value={rpcPort}
                  onChange={(e) => {
                    setRpcPort(e.target.value);
                  }}
                  className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      for="fName"
                      className="mb-3 block text-base font-medium text-white"
                    >
                      RPC User
                    </label>
                    <input
                      type="text"
                      name="rpc_user"
                      id="rpc_user"
                      placeholder="bitcoin"
                      value={rpcUser}
                      onChange={(e) => {
                        setRpcUser(e.target.value);
                      }}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      for="lName"
                      className="mb-3 block text-base font-medium text-white"
                    >
                      RPC Password
                    </label>
                    <input
                      type="text"
                      name="rpc_pass"
                      id="rpc_pass"
                      placeholder="Persario_123"
                      security="true"
                      value={rpcPass}
                      onChange={(e) => {
                        setRpcPass(e.target.value);
                      }}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>

              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      for="fName"
                      className="mb-3 block text-base font-medium text-white"
                    >
                      Mirror RPC Host (Optional)
                    </label>
                    <input
                      type="text"
                      name="mirror_rpc_host"
                      id="mirror_rpc_host"
                      placeholder="167.71.141.175"
                      value={mirrorRpcHost}
                      onChange={(e) => {
                        setMirrorRpcHost(e.target.value);
                      }}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label
                    for="guest"
                    className="mb-3 block text-base font-medium text-white"
                  >
                    Mirror RPC Port (Optional)
                  </label>
                  <input
                    type="number"
                    name="mirror_rpc_port"
                    id="mirror_rpc_port"
                    placeholder="5"
                    min="0"
                    defaultValue={null}
                    value={mirrorRpcPort}
                    onChange={(e) => {
                      setMirrorRpcPort(e.target.value);
                    }}
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-white">
                  Archive
                </label>
                <div className="flex items-center space-x-6">
                  <input
                    type="checkbox"
                    value={archive}
                    onChange={() => setArchive(!archive)}
                  />
                </div>
              </div>

              <div>
                <button
                  className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                  onClick={submit_node}
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
