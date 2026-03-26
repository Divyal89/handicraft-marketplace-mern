import React, { useEffect, useState } from "react";
import order from "../assets/order1.jpg";
import { IoCartOutline } from "react-icons/io5";
import axios from "axios";

const Seller_OrderContext = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchSellerOrders();
  }, []);

  const fetchSellerOrders = async () => {
    try {
      const sellerId = localStorage.getItem("userId");

      if (!sellerId) {
        console.log("No seller logged in");
        return;
      }

      const res = await axios.get(
        `http://localhost:5000/api/payment/my-orders/${sellerId}`,
      );

      setOrders(res.data.orders);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {orders.length === 0 ? (
        <>
          <img
            alt=""
            src={order}
            className="relative w-full h-screen object-contain"
          />
          <div className="flex gap-4 absolute -mt-15 ml-20 text-3xl font-bold">
            <IoCartOutline className="mt-2" />
            No orders yet. Once customers place orders, they will appear here.
          </div>
        </>
      ) : (
        <div className="p-18">
          <h2 className="text-2xl font-bold mb-6">Orders Received</h2>

          {orders.map((order) => (
            <div key={order._id} className="border p-4 mb-4 rounded-lg shadow">
              <p>
                <strong>Order ID:</strong> {order._id}
              </p>
              <p>
                <strong>Status:</strong> {order.status}
              </p>
              <p>
                <strong>Payment:</strong> {order.paymentMethod}
              </p>

              <div className="mt-2">
                <strong>Items:</strong>

                {order.items.map((item, i) => (
                  <div key={i} className="bg-gray-100 p-2 mt-2 rounded">
                    <p>
                      Product: {item.id} | ₹{item.price} × {item.qty}
                    </p>

                    <p className="text-sm text-gray-600">
                      Manufacturer: {item.manufacturer || "Not Available"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Seller_OrderContext;
