import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Game1 } from './pages/Game1'
import { Test1 } from './pages/Test1'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/game1' element={<Game1 />} />
          <Route path='/test1' element={<Test1 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
