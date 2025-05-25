import './App.css'
import Header from './pages/Header'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import About from './pages/About'
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      {/* ToastContainer should be outside the content wrapper */}
      <ToastContainer position="top-center" />
      <div className='content w-full max-w-6xl mx-auto absolute left-1/2 -translate-x-1/2 p-4 mic-blend-overlay z-20'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Favorites' element={<Favorites />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
