import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Artist from './pages/Artist'
import ArtistRoby from './pages/ArtistRoby'
import Artists from './pages/Artists'
import Book from './pages/Book'
import Home from './pages/Home'
import SignIn from './pages/SignIn'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/horibudo-i" element={<ArtistRoby />} />
        <Route path="/artists/:artist" element={<Artist />} />
        <Route path="/the-book" element={<Book />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
