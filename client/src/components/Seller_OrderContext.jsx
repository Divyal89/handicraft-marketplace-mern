import React from "react";
import order from "../assets/order1.jpg";
import { IoCartOutline } from "react-icons/io5";

const Seller_OrderContext = () => {
  return (
    <div>
      <img
        alt=""
        src={order}
        className="relative  w-full h-screen object-contain"
      />
      <div className=" flex gap-4 absolute -mt-15 ml-20 text-3xl font-bold">
        <IoCartOutline className="mt-2" /> No orders yet. Once customers place
        orders, they will appear here.
      </div>
    </div>
  );
};

export default Seller_OrderContext;
