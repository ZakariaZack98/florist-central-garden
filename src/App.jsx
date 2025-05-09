import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Index";
import AOS from "aos";
import "aos/dist/aos.css";
import CommonLayout from "./Components/CommonLayout";
import AboutPage from "./Pages/About/AboutPage";
import Demo from "./Pages/Demo/Demo";
import Shop from "./Pages/Shop/Shop";
import Contact from "./Pages/Contact/Contact";
import { CartProvider } from "./contexts/CartContext";
import Cart from "./Pages/Cart/Cart";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true,
    });
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommonLayout />}>
            <Route index element={<Home />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/cart" element={<Cart/>} />
          </Route>
          <Route path="/Gallery" element={<CommonLayout />}>
            <Route index element={<Shop />} />
          </Route>
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
