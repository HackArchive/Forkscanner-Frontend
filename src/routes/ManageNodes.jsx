import { useEffect, useState, useContext } from "react";
import { get_peers, remove_node, get_node } from "../utils";
import { GlobalContext } from "../App";
import { BsPlusSquare } from "react-icons/bs";
import AddNodeForm from "../components/AddNodeForm";

export default function ManageNodes() {
  const { nodes } = useContext(GlobalContext);
  const [nodesData, setNodesData] = useState([]);
  const [nodeRemovedFlag, setNodeRemovedFlag] = useState(false);
  const [hideForm, setHideForm] = useState(true);

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
