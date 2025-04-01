import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Index'
import AOS from "aos";
import "aos/dist/aos.css";
import CommonLayout from './Components/CommonLayout';
import AboutPage from './Pages/About/AboutPage';

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
        <Route path='/' element={<CommonLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/About' element={<AboutPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
