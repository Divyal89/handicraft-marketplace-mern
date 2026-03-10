import React from "react";
import Home from "./pages/Home";
import Buy from "./pages/Buy";

import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AboutUs from "./components/AboutUs";
import Cart from "./pages/Cart";
import About from "./pages/About";
import ContactUs from "./pages/contact_us";
import Seller_page from "./pages/Seller_page";
import Seller_Home from "./pages/Seller_Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/login_page" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about_us" element={<About />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/seller_page" element={<Seller_page />} />
        <Route path="/Seller_home" element={<Seller_Home />} />
      </Routes>
    </div>
  );
};

export default App;
