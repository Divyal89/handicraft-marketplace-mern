import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AboutMyProduct() {
  const [products, setProducts] = useState([]);

  const fetchMyProducts = async () => {
    try {
      const sellerId = localStorage.getItem("sellerId");

      if (!sellerId) {
        console.log("No sellerId found");
        return;
      }

      const res = await axios.get(
        `http://localhost:5000/api/products/${sellerId}`,
      );

      setProducts(res.data.products || []);
    } catch (error) {
      console.log(
        "Fetch my products error:",
        error.response?.data || error.message,
      );
    }
  };

  useEffect(() => {
    fetchMyProducts();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="rounded-3xl bg-white p-6 shadow-md">
          <h1 className="text-2xl font-bold text-slate-800">My Products</h1>
          <p className="mt-2 text-sm text-slate-500">
            Here you can see your uploaded products and their approval status.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.length > 0 ? (
            products.map((item) => (
              <div
                key={item._id}
                className="rounded-2xl bg-white p-5 shadow-md"
              >
                <h2 className="text-xl font-bold text-slate-800">
                  {item.name}
                </h2>

                <p className="mt-2 text-sm text-gray-600">
                  <span className="font-semibold">Category:</span>{" "}
                  {item.category || "No category"}
                </p>

                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Price:</span> ₹{item.price}
                </p>

                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Quantity:</span>{" "}
                  {item.quantity}
                </p>

                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Status:</span>{" "}
                  <span
                    className={`px-2 py-1 rounded text-white text-xs ${
                      item.status === "Accepted"
                        ? "bg-green-500"
                        : item.status === "Rejected"
                          ? "bg-red-500"
                          : "bg-yellow-500"
                    }`}
                  >
                    {item.status || "Pending"}
                  </span>
                </p>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
}
