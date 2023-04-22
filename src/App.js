import React, {createContext, useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { get_nodes } from './utils'
import Bitcoin from './routes/Bitcoin'
import Navbar from './routes/Navbar'
import ManageNodes from './routes/ManageNodes'
import Blocks from './routes/Blocks'
import Monitor from './routes/Monitor'

export const GlobalContext = createContext({});


function App() {

  const [nodes,setNodes] = useState([]);
  const [chainTips,setChainTips] = useState([]);
  const [blockInfo, setBlockInfo] = useState({ hash: null });

  const contextData = {
    nodes,
    chainTips,
    blockInfo,
    setNodes,
    setChainTips,
    setBlockInfo
  }

  const populateNodeData = async ()=>{
    let data = await get_nodes();
    let nodes = [...new Set(data.map(chainTipData=>chainTipData.node))].sort();
    setNodes(nodes);
    setChainTips(data);
  }

  useEffect(()=>{
    populateNodeData();
  },[])


  return (
    <section className='bg-primary'>
      <BrowserRouter>
        <GlobalContext.Provider value={contextData}>
          <Navbar />
          <div className="pt-20 overflow-y-auto h-[100vh]">
            <Routes>
              <Route path='/' element={<Bitcoin/>} />
              <Route path='/bitcoin' element={<Bitcoin/>} />
              <Route path='/blocks' element={<Blocks/>}/>'
              <Route path='/nodes' element={<ManageNodes/>} />
              <Route path='/monitor' element={<Monitor/>} />
            </Routes>
          </div>
        </GlobalContext.Provider>
      </BrowserRouter>
    </section>
  )
}

export default App