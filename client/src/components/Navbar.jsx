import React, { useContext, useState, useEffect } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { FaUserTie, FaUsers, FaPhoneAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaCartShopping, FaUserPen } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { GiPorcelainVase } from "react-icons/gi";
import { IoBagHandleSharp } from "react-icons/io5";

import logo from "../assets/logo.png";
import name from "../assets/name.png";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const { selectedProduct, setSelectedProduct } = useContext(AppContext);
  const user = JSON.parse(localStorage.getItem("user"));

  const location = useLocation();

  // 🔥 Function to map route → tab
  const getTabFromPath = (path) => {
    if (path === "/") return "home";
    if (path === "/buy") return "product";
    if (path === "/about_us") return "about";
    if (path === "/contact_us") return "contact";
    if (path === "/cart") return "cart";
    if (path === "/Myorder") return "order";
    return "home";
  };

  const [activeTab, setActiveTab] = useState(getTabFromPath(location.pathname));

  // 🔥 Update tab on route change
  useEffect(() => {
    setActiveTab(getTabFromPath(location.pathname));
  }, [location.pathname]);

  const [OpenSlider, setOpenSlider] = useState(false);

  const toggleSlider = () => {
    setOpenSlider(!OpenSlider);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login_page";
  };

  return (
    <div className="fixed bg-[#262626] w-full flex items-center z-50">
      {/* Logo */}
      <div>
        <img
          src={name}
          alt="logo"
          onClick={toggleSlider}
          className="w-[11vh] ml-6 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:border-[#cfa258] hover:shadow-[0_4px_15px_rgba(207,162,88,0.6)] active:scale-95"
        />

        {OpenSlider && (
          <div className="fixed h-full w-60 bg-[#3E2F26]">
            <div className="mt-2">
              <div className="text-[#3E2F26] font-extrabold text-2xl pl-4 mt-4 bg-[#E6D5B8] rounded-xl mr-19 py-1">
                Modes
              </div>

              <div className="mt-5 text-xl">
                <Link
                  to="/"
                  className="flex items-center w-full justify-evenly gap-2 hover:bg-[#E6D5B8] text-[#E6D5B8] hover:text-[#3E2F26] rounded-2xl font-extrabold"
                >
                  <FaUsers />
                  Buyer Mode
                </Link>

                <br />

                <Link
                  to="/Seller_home"
                  className="flex items-center w-full justify-evenly gap-2 hover:bg-[#E6D5B8] text-[#E6D5B8] hover:text-[#3E2F26] rounded-2xl font-extrabold -mt-4"
                >
                  <FaUserTie />
                  Seller Mode
                </Link>
              </div>
            </div>

            <div className="mt-2">
              <div className="text-[#3E2F26] font-extrabold text-2xl pl-4 mt-4 bg-[#E6D5B8] rounded-xl mr-19 py-1">
                Menu
              </div>

              <div className="mt-5 text-xl">
                <Link
                  to="/"
                  className="flex items-center w-full justify-evenly gap-2 hover:bg-[#E6D5B8] text-[#E6D5B8] hover:text-[#3E2F26] rounded-2xl font-extrabold -ml-5"
                >
                  <FaHome />
                  Home
                </Link>

                <br />

                <Link
                  to="/buy"
                  className="flex items-center w-full justify-evenly gap-2 hover:bg-[#E6D5B8] text-[#E6D5B8] hover:text-[#3E2F26] rounded-2xl font-extrabold -mt-4 -ml-2"
                >
                  <GiPorcelainVase />
                  Products
                </Link>

                <Link
                  to="/about_us"
                  className="flex items-center w-full justify-evenly gap-2 hover:bg-[#E6D5B8] text-[#E6D5B8] hover:text-[#3E2F26] rounded-2xl font-extrabold  -ml-2 mt-2"
                >
                  <IoMdContact />
                  About Us
                </Link>

                <Link
                  to="/contact_us"
                  className="flex items-center w-full justify-evenly gap-2 hover:bg-[#E6D5B8] text-[#E6D5B8] hover:text-[#3E2F26] rounded-2xl font-extrabold -ml-3 mt-2"
                >
                  <FaPhoneAlt />
                  Contact
                </Link>

                <Link
                  to="/cart"
                  className="flex items-center w-full justify-evenly gap-2 hover:bg-[#E6D5B8] text-[#E6D5B8] hover:text-[#3E2F26] rounded-2xl font-extrabold -ml-6 mt-2"
                >
                  <FaCartShopping />
                  Cart
                </Link>

                <Link
                  to="/Myorder"
                  className="flex items-center w-full justify-evenly gap-2 hover:bg-[#E6D5B8] text-[#E6D5B8] hover:text-[#3E2F26] rounded-2xl font-extrabold -ml-2 mt-2"
                >
                  <IoBagHandleSharp />
                  My Order
                </Link>
              </div>

              {/* <div className="flex text-[#C6A969] mt-5 pl-8 ">
                <CgProfile className="mt-2 font-extrabold text-4xl" />
                <div className="pl-4">
                  <p className="font-extrabold text-2xl">
                    {" "}
                    {user ? user.name : "Guest"}
                  </p>{" "}
                  <span>seller</span>
                </div>
              </div> */}
            </div>
          </div>
        )}
      </div>

      {/* Tabs */}
      <Tabs.Root value={activeTab} className="ml-[15%]">
        <Tabs.List className="relative flex gap-10 text-[#ffeb99] font-semibold">
          {/* Home */}
          <Tabs.Trigger value="home" className="relative outline-none">
            <Link to="/" className="flex gap-2 items-center">
              <FaHome />
              Home
            </Link>
            {activeTab === "home" && (
              <motion.div
                layoutId="nav-underline"
                className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#ffeb99]"
              />
            )}
          </Tabs.Trigger>

          {/* Product */}
          <Tabs.Trigger value="product" className="relative outline-none">
            <Link to="/buy" className="flex gap-2 items-center">
              <GiPorcelainVase />
              Product
            </Link>
            {activeTab === "product" && (
              <motion.div
                layoutId="nav-underline"
                className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#ffeb99]"
              />
            )}
          </Tabs.Trigger>

          {/* About */}
          <Tabs.Trigger value="about" className="relative outline-none">
            <Link to="/about_us" className="flex gap-2 items-center">
              <IoMdContact />
              About Us
            </Link>
            {activeTab === "about" && (
              <motion.div
                layoutId="nav-underline"
                className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#ffeb99]"
              />
            )}
          </Tabs.Trigger>

          {/* Contact */}
          <Tabs.Trigger value="contact" className="relative outline-none">
            <Link to="/contact_us" className="flex gap-2 items-center">
              <FaPhoneAlt />
              Contact
            </Link>
            {activeTab === "contact" && (
              <motion.div
                layoutId="nav-underline"
                className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#ffeb99]"
              />
            )}
          </Tabs.Trigger>

          {/* Cart */}
          <Tabs.Trigger value="cart" className="relative outline-none">
            <Link to="/cart" className="flex gap-2 items-center">
              <FaCartShopping />
              Cart
            </Link>
            {activeTab === "cart" && (
              <motion.div
                layoutId="nav-underline"
                className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#ffeb99]"
              />
            )}
          </Tabs.Trigger>

          {/* My Order */}
          <Tabs.Trigger value="order" className="relative outline-none">
            <Link to="/Myorder" className="flex gap-2 items-center">
              <IoBagHandleSharp />
              My Order
            </Link>
            {activeTab === "order" && (
              <motion.div
                layoutId="nav-underline"
                className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#ffeb99]"
              />
            )}
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>

      {/* User Section */}
      <div className="ml-auto mr-10 text-[#ffeb99] relative">
        {user ? (
          <div className="group cursor-pointer">
            <div className="flex items-center gap-2">
              <p className="text-xl">Hi,</p>
              <span className="text-lg font-medium">{user.name}</span>
            </div>

            {/* Dropdown */}
            <div className="absolute left-0 top-full w-32 bg-[#2a1f1a] rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-left hover:bg-[#3a2a24]"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Link to="/login_page">
            <div className="flex flex-col items-center">
              <FaUserPen className="text-2xl" />
              <p className="text-sm">Sign Up</p>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
