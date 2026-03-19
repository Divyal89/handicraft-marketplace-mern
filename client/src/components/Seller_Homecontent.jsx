import React, { useState } from "react";
import seller1 from "../assets/seller1.jpg";
import { CiViewList } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Seller_Homecontent = () => {
  const [Dashboard, setDashboard] = useState(false);
  const toggleDashboard = () => {
    setDashboard(!Dashboard);
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div className="relative w-full h-149 overflow-hidden">
      {/* Background Image */}
      <img src={seller1} className="absolute w-full h-full object-cover" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#3E2F26]/90 via-[#3E2F26]/60 to-transparent"></div>

      {/* Text */}
      <div className="relative z-10 p-11">
        <h1 className=" text-[#E6D5B8] ">
          <CiViewList
            className="mt-10 font-extrabold text-5xl hover:text-[#C6A969]"
            onClick={() => setDashboard(!Dashboard)}
          />
          {Dashboard && (
            <div className="fixed h-full w-70 bg-[#3E2F26] -mt-16 -ml-12">
              <h1
                className="text-[#C6A969] ml-62 mt-5 hover:cursor-pointer font-extrabold"
                onClick={() => setDashboard(false)}
              >
                X
              </h1>
              <div className="pl-8 ">
                <h1 className="text-[#C6A969] font-extrabold text-2xl">
                  Artisan Store
                </h1>
                <p className="text-white">Seller Dashboard</p>
              </div>
              <div>-------------------------------------------</div>
              <div className="pl-8 text-[#E6D5B8] text-xl mt-8 hover:cursor-pointer font-extrabold">
                <div className="flex gap-2 hover:bg-[#E6D5B8] hover:text-[#3E2F26] rounded-2xl py-2">
                  <IoMdAdd className="font-extrabold mt-1 " />{" "}
                  <Link to="/Seller_Addproduct">
                    <span>Add Product</span>
                  </Link>
                </div>
                <br />

                <div className="flex gap-2 hover:bg-[#E6D5B8] hover:text-[#3E2F26] rounded-2xl py-2">
                  <IoCartOutline className="font-extrabold mt-1 " />{" "}
                  <Link to="/Seller_order">Order</Link>
                </div>
                <br />

                <div className="flex gap-2 hover:bg-[#E6D5B8] hover:text-[#3E2F26] rounded-2xl py-2">
                  <CiSettings className="font-extrabold mt-1" />{" "}
                  <span>Setting</span>
                </div>
              </div>
              <div className="mt-20">
                -------------------------------------------
              </div>

              <div className="flex text-[#C6A969] mt-5 pl-8 ">
                <CgProfile className="mt-2 font-extrabold text-4xl" />
                <div className="pl-4">
                  <p className="font-extrabold text-2xl">
                    {" "}
                    {user ? user.name : "Guest"}
                  </p>{" "}
                  <span>seller</span>
                </div>
              </div>
            </div>
          )}
          <div className="font-bold text-7xl mt-30">Welcome, Seller</div>
        </h1>
        <br />

        <p className="text-2xl text-[#D8C7A8] mt-2">
          Manage your handicraft store
        </p>
      </div>
    </div>
  );
};

export default Seller_Homecontent;
