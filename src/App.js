import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { get_nodes } from "./utils";
import Bitcoin from "./routes/Bitcoin";
import Navbar from "./routes/Navbar";
import ManageNodes from "./routes/ManageNodes";
import Blocks from "./routes/Blocks";
import Monitor from "./routes/Monitor";
import Notification from "./components/Notification";
import Subscriptions from "./socket";

export const GlobalContext = createContext({});

function App() {
  const [nodes, setNodes] = useState([]);
  const [chainTips, setChainTips] = useState([]);
  const [blockInfo, setBlockInfo] = useState({ hash: null });
  const [notification, setNotification] = useState([]); // {title:"hello",message:"hello"}
  const [notificationPermission, setNotificationPermission] = useState(false);

  const contextData = {
    nodes,
    chainTips,
    blockInfo,
    notificationPermission,
    setNodes,
    setChainTips,
    setBlockInfo,
    setNotificationPermission,
    setNotification,
  };

  const populateNodeData = async () => {
    let data = await get_nodes();
    let nodes = [
      ...new Set(data.map((chainTipData) => chainTipData.node)),
    ].sort();
    setNodes(nodes);
    setChainTips(data);
  };

  useEffect(() => {
    populateNodeData();
  }, []);

  useEffect(() => {
    if (notificationPermission === true) {
      Subscriptions(notification, setNotification);
    }
  }, [notificationPermission]);

  return (
    <section className="bg-primary">
      <div className="fixed inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-400 to-transparent opacity-75 transform origin-bottom-left skew-y-12 translate-y-1/2">
        </div>
      </div>

      <BrowserRouter>
        <GlobalContext.Provider value={contextData}>
          <Navbar />
          <div className="pt-20 overflow-y-auto h-[100vh]">
            {
              (notification.length !== 0) &&
              <div className='w-[20vw] h-full fixed bg-transparent bg-red-600 right-0 top-20'>
                {
                notification.map(nt => (<Notification notification={nt} notifications={notification} setNotification={setNotification}/>))
                } 
              </div>
            }

            <Routes>
              <Route path="/" element={<Bitcoin />} />
              <Route path="/bitcoin" element={<Bitcoin />} />
              <Route path="/blocks" element={<Blocks />} />'
              <Route path="/nodes" element={<ManageNodes />} />
              <Route path="/monitor" element={<Monitor />} />
            </Routes>
          </div>
        </GlobalContext.Provider>
      </BrowserRouter>
    </section>
  );
}

export default App;
