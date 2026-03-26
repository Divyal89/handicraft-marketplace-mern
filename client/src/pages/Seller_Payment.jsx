import React, { useContext, useState } from "react";
import { FaCheck, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { AiOutlineReload, AiOutlineBank } from "react-icons/ai";
import { RiMedalLine } from "react-icons/ri";
import { BsCash } from "react-icons/bs";
import { color } from "framer-motion";
import axios from "axios";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { cart } = useContext(AppContext);

  const totalPrice =
    cart.reduce((total, item) => {
      const price = Number(item.price.replace(/[^0-9]/g, "")) || 0;
      const qty = Number(item.qty) || 1;

      return total + price * qty;
    }, 0) + 50;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pincode: "",
    house: "",
    city: "",
    state: "",
    landmark: "",
  });

  // ✅ HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ SUBMIT
  const handleSubmit = async () => {
    const orderData = {
      ...formData,
    };

    try {
      await axios.post(
        "http://localhost:5000/api/order/create-order",
        orderData,
      );

      alert("✅ Order placed successfully");
    } catch (err) {
      console.log(err);
      alert("❌ Error placing order");
    }
  };

  return (
    <div className="bg-[#f5f1ec] min-h-screen py-6">
      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-serif text-[#b57a4b]">Customer & Nooke</h1>
        <p className="text-sm tracking-widest text-gray-500">
          HANDCRAFTED WITH LOVE
        </p>
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-5xl mx-auto space-y-8">
        {/* CONTACT INFO */}
        <div className="bg-[#eee6df] p-6 rounded-xl border">
          <h2 className="text-xl font-serif text-[#7a4b2f]">
            Contact Information
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            We'll use these details to keep you updated
          </p>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full p-3 border rounded-lg"
              onChange={handleChange}
            />

            <div className="flex gap-3">
              <span className="px-4 py-3 border rounded-lg bg-gray-100">
                +91
              </span>
              <input
                type="text"
                name="phone"
                placeholder="10-digit mobile number"
                className="w-full p-3 border rounded-lg"
                onChange={handleChange}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              className="w-full p-3 border rounded-lg"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* DELIVERY ADDRESS */}
        <div className="bg-[#eee6df] p-6 rounded-xl border">
          <h2 className="text-xl font-serif text-[#7a4b2f]">
            Delivery Address
          </h2>

          <div className="space-y-4 mt-4">
            <input
              type="text"
              name="pincode"
              placeholder="6-digit pincode"
              className="w-full p-3 border rounded-lg"
              onChange={handleChange}
            />

            <input
              type="text"
              name="house"
              placeholder="House No., Building Name"
              className="w-full p-3 border rounded-lg"
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Road name, Area, Colony"
              className="w-full p-3 border rounded-lg"
              onChange={handleChange}
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                className="p-3 border rounded-lg"
                onChange={handleChange}
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                className="p-3 border rounded-lg"
                onChange={handleChange}
              />
            </div>

            <input
              type="text"
              name="landmark"
              placeholder="Nearby landmark"
              className="w-full p-3 border rounded-lg"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* FEATURES */}
        <div className="bg-[#eee6df] p-8 rounded-xl grid md:grid-cols-3 gap-6 text-center">
          <div>
            <RiMedalLine className="mx-auto text-3xl text-[#b57a4b]" />
            <h3 className="mt-2 font-semibold">100% Handmade Products</h3>
            <p className="text-sm text-gray-500">Crafted by skilled artisans</p>
          </div>

          <div>
            <MdOutlineSecurity className="mx-auto text-3xl text-[#b57a4b]" />
            <h3 className="mt-2 font-semibold">Secure Payments</h3>
            <p className="text-sm text-gray-500">Your data is safe with us</p>
          </div>

          <div>
            <AiOutlineReload className="mx-auto text-3xl text-[#b57a4b]" />
            <h3 className="mt-2 font-semibold">Easy Returns</h3>
            <p className="text-sm text-gray-500">7-day hassle-free returns</p>
          </div>
        </div>
        <div className="bg-[#eee6df] p-5 rounded-xl border w-full">
          <h2 className="text-lg font-serif text-[#7a4b2f] mb-4">
            Order Summary
          </h2>

          {/* Products */}
          <div className="space-y-4">
            {/* Item */}
            {cart.map((item) => (
              <div key={item.id}>
                <div className="flex gap-5">
                  <img src={item.image} className="w-30 h-50 rounded-2xl" />
                  <div>
                    <h3 className="text-2xl font-semibold">{item.name}</h3>
                    <p className="text-gray-500">Qty: {item.qty}</p>
                    <span className="text-xs text-gray-400 italic">
                      by {item.manufacturer}
                    </span>
                    <p className="text-xl text-[#b57a4b] font-bold">
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="mt-5 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="font-bold text-xl ">Subtotal</span>
              <div className="space-y-4">
                {/* Item */}
                {cart.map((item) => (
                  <div key={item.id}>
                    <div className="flex gap-5">
                      <div className="">
                        <p className="text-xl text-[#b57a4b] font-bold">
                          {item.price}
                        </p>
                        <p className="text-gray-500">Qty: {item.qty}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <span className="font-bold text-xl ">Shipping Fee</span>
              <span className="text-green-600">Free</span>
            </div>

            <div className="flex justify-between">
              <span className="font-bold text-xl ">Delivery charges</span>
              <span className="text-[#b57a4b]">₹50</span>
            </div>
          </div>

          {/* Total */}
          <div className="mt-8 flex justify-between font-semibold text-lg">
            <span>Total Amount</span>
            <span className="text-[#b57a4b] text-xl  font-bold">
              ₹{totalPrice.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
        <div className="flex">
          <button className="p-4 border-black rounded-lg text-2xl font-bold bg-[#b57a4b] text-white w-45  hover:bg-[#b57a4b] hover:text-white hover:shadow-md hover:scale-[1.02]  hover:cursor-pointer active:scale-95 transition-all duration-200">
            Go To Cart
          </button>
          ,
          <Link to="/Payment">
            <button
              className="p-4 border-black rounded-lg text-2xl font-bold bg-[#b57a4b] text-white w-45 ml-[62%] hover:bg-[#b57a4b] hover:text-white hover:shadow-md hover:scale-[1.02]  hover:cursor-pointer active:scale-95 transition-all duration-200"
              onClick={handleSubmit}
            >
              {" "}
              Payment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
