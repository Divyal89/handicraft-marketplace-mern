import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminOrder() {
  const [products, setProducts] = useState([]);

  const fetchSellerProducts = async () => {
    try {
      const sellerId = localStorage.getItem("sellerId");
      console.log("sellerId:", sellerId);

      if (!sellerId || sellerId === "null" || sellerId === "undefined") {
        console.log("Invalid sellerId");
        return;
      }

      const url = `http://localhost:5000/api/products/${sellerId}`;
      console.log("API URL:", url);

      const res = await axios.get(url);
      console.log("API RESPONSE:", res.data);

      setProducts(res.data.products || []);
    } catch (error) {
      console.log(
        "Fetch product error:",
        error.response?.data || error.message,
      );
    }
  };

  useEffect(() => {
    fetchSellerProducts();
  }, []);

  const updateStatus = async (productId, newStatus) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/products/status/${productId}`,
        { status: newStatus },
      );

      setProducts((prev) =>
        prev.map((item) =>
          item._id === productId ? { ...item, status: newStatus } : item,
        ),
      );

      console.log(res.data.message);
    } catch (error) {
      console.log(
        "Status update error:",
        error.response?.data || error.message,
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white shadow-lg">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Seller Products Page
          </h1>
          <p className="mt-2 text-sm text-slate-300 sm:text-base">
            Here you can see all products uploaded by seller.
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
                  {item.category}
                </p>

                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Price:</span> ₹{item.price}
                </p>

                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Quantity:</span>{" "}
                  {item.quantity}
                </p>

                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Description:</span>{" "}
                  {item.description}
                </p>

                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Notes:</span> {item.notes}
                </p>

                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Contact:</span>{" "}
                  {item.contactNumber}
                </p>

                <p className="mt-3 text-xs text-gray-400">
                  Uploaded on:{" "}
                  {item.createdAt
                    ? new Date(item.createdAt).toLocaleDateString()
                    : "No date"}
                </p>
                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/91${item.contactNumber}?text=Please%20share%20product%20image%20for%20verification`,
                    )
                  }
                  className="bg-green-500 text-white px-4 py-2 rounded-lg"
                >
                  Chat Seller
                </button>
                <p className="mt-2 text-sm">
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

                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => updateStatus(item._id, "Accepted")}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
                  >
                    Accept
                  </button>

                  <button
                    onClick={() => updateStatus(item._id, "Rejected")}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No products found</p>
          )}
        </div>
      </div>
    </div>
  );
}
