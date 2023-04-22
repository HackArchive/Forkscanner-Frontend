import { useEffect, useState, useContext } from "react";
import { get_peers, remove_node, get_node } from "../utils";
import { GlobalContext } from "../App";
import {BsPlusSquare} from "react-icons/bs"
import AddNodeForm from "../components/AddNodeForm";

export default function ManageNodes() {

    const { nodes } = useContext(GlobalContext);
    const [nodesData, setNodesData] = useState([]);
    const [nodeRemovedFlag, setNodeRemovedFlag] = useState(false); 
    const [hideForm, setHideForm] = useState(true);

    const populate_nodes = () => {
        get_node()
            .then(nodes_data => { setNodesData(nodes_data); console.log(nodes_data) })
            .catch(err => console.log(err))
    }

    const remove_node_call = (node_id) =>{
        remove_node(6).then(result=>{
            console.log(result)
            if (result==='OK'){
                alert("Node removed successfully");
                setNodeRemovedFlag(!nodeRemovedFlag);
            }
            else{
                alert("Cannot remove Node");
            }
        })
    }

    useEffect(() => {
        console.log("fetched");
        populate_nodes();
    }, [nodeRemovedFlag])

    return (
        <>
            <div className="fixed w-full h-full top-0 left-0 z-10" hidden={hideForm}>
                <div className="flex w-full h-full bg-transparent justify-center items-center">
                    <div className="flex w-[50%] h-[80%] bg-gray-800 items-center justify-center rounded-md shadow-md">
                        <AddNodeForm setHideForm={setHideForm}/> 
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-center mt-10">
                <p className="text-4xl text-white font-bold">MY NODES</p>
                <button className="w-max h-max ml-10" onClick={()=>setHideForm(false)}>
                    <BsPlusSquare className="w-[40px] h-[40px] text-blue-600 hover:text-blue-900"/>
                </button>
            </div>
            <div className="flex items-center justify-center overflow-x-auto shadow-md sm:rounded-lg mt-10">
                <table className="w-[70%] text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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

                        {

                            nodesData.map(data => {
                                return (
                                    <tr key={data.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-[1rem] ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {data.id}
                                        </th>
                                        <td className="px-6 py-4">
                                            {data.rpc_host}
                                        </td>
                                        <td className="px-6 py-4">
                                            {data.rpc_port}
                                        </td>
                                        <td className="px-6 py-4">
                                            {`${data.archive}`}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button onClick={()=>remove_node_call(data.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Remove Node</button>
                                        </td>
                                    </tr>
                                )
                            })

                        }

                    </tbody>
                </table>
            </div>
        </>
    );
}