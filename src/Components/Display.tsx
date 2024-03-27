import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navigation/Navbar';
import Footer from './Footer/Footer';
import Home from '../Pages/Home';
import About from '../Pages/About'
import Contact from '../Pages/Contact';
import Qr from '../Pages/Qr'

const Display = () => {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='#section' element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="qr" element={<Qr />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Display
