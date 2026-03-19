import React, { useEffect, useState } from "react";
import { GiPaintedPottery } from "react-icons/gi";
import { FaRegChartBar } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { BsCurrencyExchange } from "react-icons/bs";
import { RiPassPendingFill } from "react-icons/ri";

const Seller_Homecontext_detail = () => {
  const [data, setData] = useState({
    totalProducts: 0,
    totalOrders: 0,
    revenue: 0,
    pendingOrders: 0,
  });

  useEffect(() => {
    const fetchDashboard = async () => {
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await fetch(`http://localhost:5000/api/dashboard/${user.id}`);

      const result = await res.json();

      setData(result);
    };

    fetchDashboard();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#2b1b14] to-[#5a3b2a] p-10">
      <div className="text-[#c8a96a] font-extrabold text-4xl">
        <FaRegChartBar />
        Seller Analytics
      </div>
      {/* Row 1 */}
      <div className="flex justify-center gap-10 mb-10 mt-3">
        {/* Card */}
        <div className="flex justify-between items-center w-96 p-6 bg-[#3a2418] rounded-2xl shadow-lg">
          <div className="text-[#f5e6c8]">
            <p className="text-lg">Total Products</p>
            <p className="text-4xl font-bold mt-2">{data.totalProducts}</p>
          </div>

          <div className="bg-[#c8a96a] p-4 rounded-xl text-3xl text-[#3a2418]">
            <GiPaintedPottery />
          </div>
        </div>

        {/* Card */}
        <div className="flex justify-between items-center w-96 p-6 bg-[#3a2418] rounded-2xl shadow-lg">
          <div className="text-[#f5e6c8]">
            <p className="text-lg">Orders</p>
            <p className="text-4xl font-bold mt-2">{data.totalOrders}</p>
          </div>

          <div className="bg-[#c8a96a] p-4 rounded-xl text-3xl text-[#3a2418]">
            <IoCartSharp />
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex justify-center gap-10">
        {/* Card */}
        <div className="flex justify-between items-center w-96 p-6 bg-[#3a2418] rounded-2xl shadow-lg">
          <div className="text-[#f5e6c8]">
            <p className="text-lg">Revenue</p>
            <p className="text-4xl font-bold mt-2">{data.revenue}</p>
          </div>

          <div className="bg-[#c8a96a] p-4 rounded-xl text-3xl text-[#3a2418]">
            <BsCurrencyExchange />
          </div>
        </div>

        {/* Card */}
        <div className="flex justify-between items-center w-96 p-6 bg-[#3a2418] rounded-2xl shadow-lg">
          <div className="text-[#f5e6c8]">
            <p className="text-lg">Pending Orders</p>
            <p className="text-4xl font-bold mt-2">{data.pendingOrders}</p>
          </div>

          <div className="bg-[#c8a96a] p-4 rounded-xl text-3xl text-[#3a2418]">
            <RiPassPendingFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller_Homecontext_detail;
