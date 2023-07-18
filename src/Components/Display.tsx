import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navigation/Navbar';
import Footer from './Footer/Footer';
import Home from '../Pages/Home';
import About from '../Pages/About'
import Contact from '../Pages/Contact';

const Display = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route index element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Display
