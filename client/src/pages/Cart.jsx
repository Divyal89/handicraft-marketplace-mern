import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useContext(AppContext);

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <div className="flex flex-col items-center justify-center pt-[10vh]">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty 🛒</h2>
        </div>
      </>
    );
  }

  return (
    <div className="bg-[#F9F6F2] min-h-screen">
      <Navbar />

      <div className="pt-[12vh] px-4 md:px-24">
        <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

        {cart.map((item) => (
          <div
            key={item.productId}
            className="flex flex-col md:flex-row items-center gap-4 bg-white rounded-lg shadow-md p-4 mb-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-28 h-28 object-cover rounded-md"
            />

            <div className="flex-1">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p>₹{item.price}</p>
              <p>Qty: {item.qty}</p>
              <span className="text-xs text-gray-400 italic">
                by {item.manufacturer}
              </span>
            </div>

            <button
              onClick={() => removeFromCart(item.productId)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Remove
            </button>

            <Link
              to="/Seller_payment"
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
            >
              Buy
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
