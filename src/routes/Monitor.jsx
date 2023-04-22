import { useEffect, useContext } from "react";
import { GlobalContext } from "../App";

export default function Monitor() {

    const {setNotificationPermission,setNotification,notificationPermission} = useContext(GlobalContext);

    useEffect(()=>{
        Notification.requestPermission((status)=>{
            if (status==="granted" && notificationPermission===false){
                setNotificationPermission(true);
                setNotification([{id:1,title:"RSS Notifications Enables", message:"you will now recieve subscribed notifications from forkscanner."}])
            }
        });
    },[])

    return (

        <div className="w-full h-full flex flex-col text-white items-center">
            <div className="flex flex-col mt-10 ml-10 w-1/2">
                <p className="text-5xl font-bold">Browser push notifications</p>
                <p className="text-xl mt-2">We currently send browser push notifications for invalid blocks, stale candidates and unexpected extra inflation.</p>
                <p className="text-xl mt-4">Browser push notifications enabled. You can close this page.</p>
            </div>

            <div className="flex flex-col mt-20 ml-10 w-1/2 mb-20">
                <p className="text-5xl">RSS Feeds</p>
                <p className="text-xl mt-3">You can setup notifications for the RSS feeds below using a service like IFTTT.</p>


                <ul class="space-y-4 text-3xl text-gray-500 list-decimal list-inside dark:text-gray-400">
                    <li >
                        Invalid Blocks
                        <p className="mt-2 text-xl">Fork Monitor stores all invalid chaintip blocks in its own database. Invalid blocks are occasionally found and don't have to be a problem (except for the miner), as long as all nodes agree they're invalid.</p>
                    </li>
                    <li >
                        Inconsistent validity (blocks)
                        <p className="mt-2 text-xl">Invalid blocks are occasionally found and don't have to be a problem (except for the miner), as long as all nodes agree they're invalid. But when some nodes consider a block valid, while others consider it invalid, this inconsistent validity could indicate a consensus bug.</p>
                        <br/>
                        <p className="text-xl">Fork Monitor stores both valid and invalid blocks in its own database, including intermediate blocks between poll moments, and including `valid-fork` entries from `getchaintips`. It then takes the `invalid` chaintip entries from each node and checks if any other node considered it valid. If so then it sends out an alert.</p>
                    </li>

                    <li >
                        Inflated Blocks
                        <p className="mt-2 text-xl">Creates an alert if there is more than one block at the tip height of the chain. E.g. if there are two blocks at height N then one is expected to become stale. This will not create an alert for all stale blocks, only those that have been processed by our nodes.</p>
                    </li>

                    <li >
                        Version bits signalling
                        <p className="mt-2 text-xl">Version bits flagged in the past 100 blocks (currently uses 10 as lower threshold).</p>
                    </li>
                    <li >
                        Lagging nodes
                        <p className="mt-2 text-xl">Checks if any of the nodes fell behind. This doesn't have to be a consensus problem, but we filter common reasons like being offline, in initial block download or not having peers.</p>
                    </li>
                    <li >
                        Unreachable nodes
                        <p className="mt-2 text-xl">This includes mirror nodes, which are used for inflation checks.</p>
                        <br/>
                        <br/>
                    </li>
                </ul>


            </div>

        </div>
    );

}