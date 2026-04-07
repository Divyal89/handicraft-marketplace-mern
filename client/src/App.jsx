import React from "react";
import Home from "./pages/Home";
import Buy from "./pages/Buy";

import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AboutUs from "./components/AboutUs";
import Cart from "./pages/Cart";
import About from "./pages/About";
import ContactUs from "./pages/contact_us";

import Seller_Home from "./pages/Seller_Home";
import SellerAuth from "./components/Seller_login";
import Seller_AboutUs from "./pages/Seller_AboutUs";
import Seller_contact from "./pages/Seller_contact";
import Seller_Addproduct from "./pages/Seller_Addproduct";
import Seller_Order from "./pages/Seller_Order";

// ✅ STEP 2: Import Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutForm from "./pages/Seller_Payment";
import PaymentPage from "./pages/Payment_Page";
import Orders from "./pages/MyOrder";
import AdminDashboard from "./pages/Admin_home";
import AdminOrder from "./components/Admin_order";
import AboutMyProduct from "./pages/Seller_aboutMypro";

import AdminLogin from "./pages/AdminLogin";
import AdminProtectedRoute from "./pages/AdminProtectedRoute";

const App = () => {
  return (
    <div>
      {/* ✅ STEP 3: Add ToastContainer ONCE here */}
      <ToastContainer position="bottom-right" autoClose={3000} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/login_page" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about_us" element={<About />} />
        <Route path="/contact_us" element={<ContactUs />} />

        <Route path="/Seller_home" element={<Seller_Home />} />
        <Route path="/Seller_login" element={<SellerAuth />} />
        <Route path="/Seller_Aboutus" element={<Seller_AboutUs />} />
        <Route path="/Seller_Contact" element={<Seller_contact />} />
        <Route path="/Seller_Addproduct" element={<Seller_Addproduct />} />
        <Route path="/Seller_order" element={<Seller_Order />} />
        <Route path="/Seller_payment" element={<CheckoutForm />} />
        <Route path="/Payment" element={<PaymentPage />} />
        <Route path="/Myorder" element={<Orders />} />
        <Route path="/adminhome" element={<AdminDashboard />} />

        <Route path="/selleraboutmypro" element={<AboutMyProduct />} />

        <Route path="/admin-login" element={<AdminLogin />} />

        <Route
          path="/admin-order"
          element={
            <AdminProtectedRoute>
              <AdminOrder />
            </AdminProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
