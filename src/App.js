import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Artists from './pages/Artists'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
