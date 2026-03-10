import React, { useContext, useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { FaUserTie } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

import logo from "../assets/logo.png";
import name from "../assets/name.png";
import { PiPottedPlantBold } from "react-icons/pi";
import { IoMdContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCartShopping, FaUserPen } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const Seller_Navbar = () => {
  const { selectedProduct, setSelectedProduct } = useContext(AppContext);
  const user = JSON.parse(localStorage.getItem("user"));

  const [activeTab, setActiveTab] = useState("product");
  const [OpenSlider, setOpenSlider] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);

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
          className="w-[11vh] ml-6 hover:border-[#cfa258]"
          onClick={toggleSlider}
        />
        {OpenSlider && (
          <div className="fixed h-full w-60 bg-[#cfa258] ">
            <div className="mt-2">
              <div className="pl-[30%] font-extrabold text-2xl bg-[#e6c574]">
                Modes
              </div>
              <div className="mt-3 text-xl ">
                <Link
                  to="/"
                  className="flex items-center w-full justify-evenly cursor-pointer hover:bg-[#e6c574]"
                >
                  <FaUsers className="mr-[-14%]" />
                  Buyer Mode
                </Link>
                <br />
                <Link
                  to="/seller_page"
                  className="flex items-center w-full justify-evenly cursor-pointer hover:bg-[#e6c574]"
                >
                  <FaUserTie className="mr-[-14%]" />
                  Seller Mode{" "}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tabs */}
      <Tabs.Root
        value={activeTab}
        onValueChange={setActiveTab}
        className="ml-[15%]"
      >
        <Tabs.List className="relative flex gap-10 text-[#ffeb99] font-semibold">
          {/* Home */}
          <Tabs.Trigger value="product" className="relative outline-none">
            <Link
              to="/Seller_home"
              onClick={() => setSelectedProduct(!selectedProduct)}
              className="flex gap-2 items-center"
            >
              <PiPottedPlantBold />
              Home
            </Link>

            {activeTab === "product" && (
              <motion.div
                layoutId="nav-underline"
                className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#ffeb99]"
              />
            )}
          </Tabs.Trigger>
          {/* Product */}
          <Tabs.Trigger value="product" className="relative outline-none">
            <Link
              to="/buy"
              onClick={() => setSelectedProduct(!selectedProduct)}
              className="flex gap-2 items-center"
            >
              <PiPottedPlantBold />
              Add Product
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
            <Link
              to="/about_us"
              className="flex gap-2 items-center cursor-pointer"
            >
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
            <Link
              to="/contact_us"
              className="flex gap-2 items-center cursor-pointer"
            >
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
        </Tabs.List>
      </Tabs.Root>

      {/* User Section */}
      <div className="ml-auto mr-10 text-[#ffeb99] relative">
        {" "}
        {user ? (
          <div className="cursor-pointer">
            {" "}
            <div
              className="flex items-center gap-2"
              onClick={() => setOpenMenu(!openMenu)}
            >
              {" "}
              <p className="text-xl">Hi,</p>{" "}
              <span className="text-lg font-medium">{user.name}</span>{" "}
            </div>{" "}
            {openMenu && (
              <div className="absolute bg-[#2a1f1a] mt-2 rounded shadow-lg w-32">
                {" "}
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-left hover:bg-[#3a2a24]"
                >
                  {" "}
                  Logout{" "}
                </button>{" "}
              </div>
            )}{" "}
          </div>
        ) : (
          <Link to="/Seller_login_page">
            {" "}
            <FaUserPen className="text-3xl" />{" "}
          </Link>
        )}{" "}
      </div>
    </div>
  );
};

export default Seller_Navbar;
