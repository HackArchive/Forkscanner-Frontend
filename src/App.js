import React, {createContext, useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { get_nodes } from './utils'
import Bitcoin from './routes/Bitcoin'
import Lightning from './routes/Lightning'
import Navbar from './routes/Navbar'
import ManageNodes from './routes/ManageNodes'
import Blocks from './routes/Blocks'

export const GlobalContext = createContext({});


function App() {

  const [nodes,setNodes] = useState([]);
  const [chainTips,setChainTips] = useState([]);

  const contextData = {
    nodes,
    chainTips,
    setNodes,
    setChainTips
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
    <section className='bg-[rgb(40,40,40)]'>
      <BrowserRouter>
        <GlobalContext.Provider value={contextData}>
          <Navbar />
          <div className="pt-20 overflow-y-auto h-[100vh]">
            <Routes>
              <Route path='/' element={<Bitcoin/>} />
              <Route path='/bitcoin' element={<Bitcoin/>} />
              <Route path='/lightning' element={<Lightning/>} />
              <Route path='/blocks' element={<Blocks/>}/>'
              <Route path='/nodes' element={<ManageNodes/>} />
            </Routes>
          </div>
        </GlobalContext.Provider>
      </BrowserRouter>
    </section>
  )
}

export default App