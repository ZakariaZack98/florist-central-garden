import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Index'
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
