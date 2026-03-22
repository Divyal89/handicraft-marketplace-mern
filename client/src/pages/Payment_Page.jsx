import React, { useContext, useState } from "react";
import { ArrowLeft, Wallet, Smartphone } from "lucide-react";
import { AppContext } from "../../context/AppContext";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const { cart } = useContext(AppContext);

  const handlePlaceOrder = async () => {
    try {
      const formattedCart = cart.map((item) => ({
        id: item.id,
        price: Number(item.price.replace(/[^0-9]/g, "")),
        qty: Number(item.qty) || 1,
      }));

      const res = await fetch("http://localhost:5000/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: formattedCart,
          totalAmount: totalPrice,
          paymentMethod,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Order placed successfully ✅");
        setCart([]); // 🔥 THIS CLEARS CART

        // ✅ clear cart (important)
        // you must have setCart in context
        // setCart([]);

        // ✅ redirect (optional)
        // navigate("/success");
      } else {
        alert(data.message || "Something went wrong ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Server error ❌");
    }
  };

  const totalPrice =
    cart.reduce((total, item) => {
      const price = Number(item.price.replace(/[^0-9]/g, "")) || 0;
      const qty = Number(item.qty) || 1;

      return total + price * qty;
    }, 0) + 50;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <ArrowLeft className="cursor-pointer" />
          <h1 className="text-lg font-semibold">Payment Method</h1>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 rounded-xl p-4 shadow-sm mb-5">
          <h2 className="text-lg font-semibold mb-3">Order Summary</h2>

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
          </div>

          <div className="flex justify-between text-gray-600 mb-1">
            <span>Delivery Charges</span>
            <span>₹50.00</span>
          </div>

          <hr className="mb-3" />

          <div className="mt-8 flex justify-between font-semibold text-lg">
            <span>Total Amount</span>
            <span className="text-[#b57a4b] text-xl  font-bold">
              ₹{totalPrice.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        {/* Payment Methods */}
        <h2 className="text-md font-semibold mb-3">Select Payment Method</h2>

        {/* COD */}
        <div
          onClick={() => setPaymentMethod("cod")}
          className={`flex items-center justify-between p-4 rounded-xl border mb-3 cursor-pointer ${
            paymentMethod === "cod"
              ? "border-orange-500 bg-orange-50"
              : "border-gray-200"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="bg-gray-200 p-2 rounded-lg">
              <Wallet size={20} />
            </div>
            <div>
              <p className="font-medium">Cash on Delivery</p>
              <p className="text-sm text-gray-500">Pay when delivered</p>
            </div>
          </div>

          <input type="radio" checked={paymentMethod === "cod"} readOnly />
        </div>

        {/* UPI */}
        <div
          onClick={() => setPaymentMethod("upi")}
          className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer ${
            paymentMethod === "upi"
              ? "border-orange-500 bg-orange-50"
              : "border-gray-200"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="bg-gray-200 p-2 rounded-lg">
              <Smartphone size={20} />
            </div>
            <div>
              <p className="font-medium">UPI Payment</p>
              <p className="text-sm text-gray-500">Pay using UPI apps</p>
            </div>
          </div>

          <input type="radio" checked={paymentMethod === "upi"} readOnly />
        </div>

        {/* Security */}
        <div className="flex items-center justify-center gap-2 text-green-600 text-sm mt-4">
          <span>🛡️</span>
          <p>100% Secure Payment</p>
        </div>

        {/* Button */}
        <button
          onClick={handlePlaceOrder}
          disabled={!paymentMethod}
          className={`w-full mt-6 py-3 rounded-xl font-semibold ${
            paymentMethod
              ? "bg-gray-800 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
