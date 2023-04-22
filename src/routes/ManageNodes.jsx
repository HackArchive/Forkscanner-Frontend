import { useEffect, useState } from "react";
import { remove_node, get_node, add_watch_until } from "../utils";
import { CgSearch } from "react-icons/cg";
import AddNodeForm from "../components/AddNodeForm";

export default function ManageNodes() {
  const [nodesData, setNodesData] = useState([]);
  const [nodeRemovedFlag, setNodeRemovedFlag] = useState(false);
  const [hideForm, setHideForm] = useState(true);
  const [watchUntil, setWatchUntil] = useState(new Date().toUTCString());
  const [watchAddr, setWatchAddr] = useState(null);

  const populate_nodes = () => {
    get_node()
      .then((nodes_data) => {
        setNodesData(nodes_data);
        console.log(nodes_data);
      })
      .catch((err) => console.log(err));
  };

  const remove_node_call = (node_id) => {
    remove_node(6).then((result) => {
      console.log(result);
      if (result === "OK") {
        alert("Node removed successfully");
        setNodeRemovedFlag(!nodeRemovedFlag);
      } else {
        alert("Cannot remove Node");
      }
    });
  };


  const watch_addr = ()=>{
    add_watch_until(watchAddr,watchUntil)
    .then(res => {
      alert("you will now recieve notification for the address activity");
      console.log(res,"===");
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    console.log("fetched");
    populate_nodes();
  }, [nodeRemovedFlag]);

  return (
    <section>
      <div className="fixed w-full h-full top-0 left-0 z-10" hidden={hideForm}>
        <AddNodeForm setHideForm={setHideForm} />
      </div>
      <div className="flex w-full h-full items-center justify-center mt-10">
        <p className="text-4xl text-white font-bold">NODES</p>
        <button
          className="ml-5 h-full p-2 rounded bg-buttons"
          onClick={() => setHideForm(false)}
        >
          <span className="text-white text-xl font-medium">Add Node</span>
          {/* <BsPlusSquare className="w-[40px] h-[40px] text-blue-600 hover:text-blue-900"/> */}
        </button>
      </div>
      
      <div className="mx-auto flex justify-center flex-row mb-5">
        <input
          className="bg-slate-50 h-12 w-60 lg:w-96 rounded mt-10  pl-5 text-lg"
          value={watchAddr}
          placeholder="bc1qm34lsc65zpw79lxes69zkqmk6ee3ewf0j77s3h"
          onChange={(e) => setWatchAddr(e.target.value)}
        />

        <input
          className="bg-slate-50 h-12 w-60 lg:w-40 rounded mt-10 ml-5  pl-5 text-lg"
          placeholder="Watch Until"
          value={watchUntil}
          onChange={(e) => setWatchUntil(e.target.value)}
        />

        <button
          onClick={watch_addr}
          className="bg-buttons hover:bg-green-700 text-white flex items-center justify-center text-xl ml-5 rounded mt-10 p-2"
        >
          <CgSearch className="m-auto" />
          <p className="ml-2">Watch Addr</p>
        </button>
      </div>
      <div className="flex items-center  justify-center overflow-x-auto sm:rounded-lg mt-10">
        <table className="w-[70%] text-sm text-left shadow-md text-white dark:text-gray-400 ">
          <thead className=" text-xl uppercase bg-secondary text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Node ID
              </th>
              <th scope="col" className="px-6 py-3">
                RPC Host
              </th>
              <th scope="col" className="px-6 py-3">
                RPC Port
              </th>
              <th scope="col" className="px-6 py-3">
                Node
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {nodesData.map((data) => {
              return (
                <tr
                  key={data.id}
                  className=" border-b bg-tertiary border-gray-700 text-[1rem] "
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                  >
                    {data.id}
                  </th>
                  <td className="px-6 py-4">{data.rpc_host}</td>
                  <td className="px-6 py-4">{data.rpc_port}</td>
                  <td className="px-6 py-4">{`${data.archive}`}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => remove_node_call(data.id)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Remove Node
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
