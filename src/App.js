import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bitcoin from './routes/Bitcoin'
import Lightning from './routes/Lightning'
import Navbar from './routes/Navbar'

function App() {
  return (
    <section className='bg-[#282828]'>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Bitcoin/>} />
          <Route path='/bitcoin' element={<Bitcoin/>} />
          <Route path='/lightning' element={<Lightning/>} />
        </Routes>
      </BrowserRouter>
    </section>
  )
}

export default App