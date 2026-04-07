import { Upload } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Seller_Product = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    description: "",
    notes: "",
    tags: [],
    contactNumber: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    toast.success("Form submitted successfully!", {
      position: "bottom-right",
      autoClose: 3000,
    });

    try {
      const user = JSON.parse(localStorage.getItem("user"));

      // ✅ Check user
      if (!user?.id) {
        toast.error("User not logged in", {
          position: "bottom-right",
          autoClose: 3000,
        });

        return;
      }

      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          sellerId: user.id, // ✅ FIXED
        }),
      });

      const data = await res.json();
      console.log("Response:", data);

      if (!res.ok) {
        alert(data.message);
        return;
      }

      alert("Product saved successfully!");

      // ✅ Reset form after success
      setFormData({
        name: "",
        category: "",
        price: "",
        quantity: "",
        description: "",
        notes: "",
        tags: [],
      });
    } catch (err) {
      console.log(err);

      toast.error("Error saving product", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pt-18 pl-4">
      <div className="min-h-screen bg-gray-100 flex justify-center p-6">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800">Add New Product</h1>

          <p className="text-gray-500 mb-6">
            Upload and manage your handcrafted products
          </p>

          {/* Product Name */}
          <div className="mb-4">
            <label className="font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
              className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Category + Price */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="font-medium text-gray-700">
                Product Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
              >
                <option value="">Select a category</option>
                <option>Pottery</option>
                <option>Wood Craft</option>
                <option>Jewelry</option>
                <option>Textiles</option>
              </select>
            </div>

            <div>
              <label className="font-medium text-gray-700">Product Price</label>

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="₹ 0.00"
                className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-4">
            <label className="font-medium text-gray-700">
              Product Quantity / Stock
            </label>

            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g., 50"
              className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="font-medium text-gray-700">
              Product Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Describe your handcrafted product..."
              className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
            ></textarea>
          </div>

          {/* Image Upload (UI only) */}
          <div className="mb-6">
            <label className="text-sm">Upload Product Image</label>

            <label className="flex items-center justify-center gap-2 mt-2 border border-dashed p-4 rounded-lg cursor-pointer">
              <Upload size={18} />
              Choose file to upload
              <input type="file" className="hidden" />
            </label>

            <p className="text-xs text-gray-400 mt-1">
              Accepted formats: JPG, PNG (Max 5MB)
            </p>
          </div>

          {/* Notes */}
          <div className="mb-6">
            <label className="font-medium text-gray-700">
              Manufacturer Name
            </label>

            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="1"
              placeholder="Share the story behind this craft..."
              className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="font-medium text-gray-700">Contact Number</label>

            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Enter seller contact number"
              className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Button */}
          <div className="flex justify-end gap-3">
            <button
              type="submit"
              className="px-5 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
            >
              Save Product
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Seller_Product;
