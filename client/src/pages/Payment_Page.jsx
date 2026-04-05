import React, { useContext, useState } from "react";
import { ArrowLeft, Wallet, Smartphone } from "lucide-react";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  const { cart, setCart } = useContext(AppContext);

  // ✅ Get logged-in user
  const userId = localStorage.getItem("userId");

  // ✅ Calculate total
  const totalPrice =
    cart.reduce((total, item) => {
      const price = Number(item.price.toString().replace(/[^0-9]/g, "")) || 0;
      const qty = Number(item.qty) || 1;
      return total + price * qty;
    }, 0) + 50;

  const handlePlaceOrder = async () => {
    try {
      if (!userId) {
        toast.error("Please login first ❌", {
          position: "bottom-right",
          autoClose: 3000,
        });

        return;
      }

      // ✅ ONLY CHANGE: manufacturer added
      const formattedCart = cart.map((item) => ({
        id: item.id,
        name: item.name, // 🔥 ADD THIS (VERY IMPORTANT)
        price: Number(item.price.toString().replace(/[^0-9]/g, "")),
        qty: Number(item.qty) || 1,
        manufacturer: item.manufacturer || "CraftHand Studio", // 🔥 fallback
        sellerId: item.sellerId,
      }));

      const totalAmount = totalPrice;

      // ================= COD =================
      if (paymentMethod === "cod") {
        const res = await fetch("http://localhost:5000/api/payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: formattedCart,
            totalAmount,
            paymentMethod,
            userId,
          }),
        });

        const data = await res.json();

        if (data.success) {
          navigate("/");
          toast.success("Order placed (COD) , we will shortly contact you", {
            position: "bottom-right",
            autoClose: 3000,
          });

          setCart([]);
        }
        return;
      }

      // ================= ONLINE PAYMENT =================

      const res = await fetch(
        "http://localhost:5000/api/payment/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ totalAmount }),
        },
      );

      const order = await res.json();

      const options = {
        key: "rzp_test_xxxxxxxx",
        amount: order.amount,
        currency: "INR",
        name: "CraftHand",
        description: "Order Payment",
        order_id: order.id,

        handler: async function (response) {
          await fetch("http://localhost:5000/api/payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              items: formattedCart,
              totalAmount,
              paymentMethod,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              userId,
            }),
          });

          alert("Payment Successful ✅");
          setCart([]);
        },

        theme: {
          color: "#b57a4b",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.log(err);
      alert("Payment failed ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-4">
        <div className="flex items-center gap-3 mb-4">
          <ArrowLeft className="cursor-pointer" />
          <h1 className="text-lg font-semibold">Payment Method</h1>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 shadow-sm mb-5">
          <h2 className="text-lg font-semibold mb-3">Order Summary</h2>

          <div className="mt-5 space-y-2 text-sm">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>
                  {item.price} × {item.qty}
                </span>
                <span>
                  {(
                    Number(item.price.toString().replace(/[^0-9]/g, "")) *
                    item.qty
                  ).toLocaleString("en-IN")}
                </span>
              </div>
            ))}

            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span>₹50</span>
            </div>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between font-semibold text-lg">
            <span>Total Amount</span>
            <span className="text-[#b57a4b]">
              ₹{totalPrice.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        <h2 className="text-md font-semibold mb-3">Select Payment Method</h2>

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
