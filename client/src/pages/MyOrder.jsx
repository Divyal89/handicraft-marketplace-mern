import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const userId = localStorage.getItem("userId");

      const res = await axios.get(
        `http://localhost:5000/api/payment/my-orders/${userId}`,
      );

      setOrders(res.data.orders);
    } catch (err) {
      console.log(err);

      toast.error(err.message || "Something went wrong", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  // 🔥 Cancel Order Function
  const handleCancelOrder = async (orderId) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this order?",
    );

    if (!confirmCancel) return;

    try {
      await axios.put(
        `http://localhost:5000/api/payment/cancel-order/${orderId}`,
      );

      // ✅ Update UI instantly
      setOrders((prev) =>
        prev.map((order) =>
          order._id === orderId ? { ...order, status: "Cancelled" } : order,
        ),
      );
    } catch (err) {
      console.log(err);

      toast.error(err.message || "Something went wrong", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  // Empty state
  if (orders.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">No Orders Found 😕</h2>
      </div>
    );
  }

  return (
    <div className="p-6 bg-[#F9F6F2] min-h-screen">
      <h2 className="text-3xl font-bold mb-6">My Orders</h2>

      {orders.map((order) => (
        <div
          key={order._id}
          className="bg-white border rounded-xl shadow-md p-5 mb-6"
        >
          <p>
            <strong>Order ID:</strong> {order._id}
          </p>
          <p>
            <strong>Total:</strong> ₹{order.totalAmount}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span
              className={
                order.status === "Cancelled"
                  ? "text-red-500 font-semibold"
                  : "text-green-600 font-semibold"
              }
            >
              {order.status}
            </span>
          </p>
          <p>
            <strong>Payment:</strong> {order.paymentMethod}
          </p>

          {/* Items */}
          <div className="mt-3">
            <strong>Items:</strong>

            {order.items.map((item, i) => (
              <div key={i} className="bg-gray-50 p-3 rounded mt-2 border">
                <p>
                  {item.id} - ₹{item.price} × {item.qty}
                </p>

                <p className="text-sm text-gray-600">
                  Manufacturer: {item.manufacturer || "Not Available"}
                </p>
                <p className="text-sm text-gray-600">
                  ProductName: {item.name || "Not Available"}
                </p>
              </div>
            ))}
          </div>

          {/* 🔥 Cancel / Status UI */}
          {order.status === "Cancelled" ? (
            <p className="mt-4 text-red-600 font-semibold">
              ❌ This order is cancelled
            </p>
          ) : (
            <button
              onClick={() => handleCancelOrder(order._id)}
              className="mt-4 px-5 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition duration-200"
            >
              Cancel Order
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Orders;
