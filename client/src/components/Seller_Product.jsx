import { Upload } from "lucide-react";
import React, { useState } from "react";

const Seller_Product = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    description: "",
    notes: "",
    tags: [],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      console.log(data);
      alert("Product saved successfully!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="pt-18 pl-4" onSubmit={handleSubmit}>
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
              onChange={handleChange}
              placeholder="Enter product name"
              className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Category + Price */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="font-medium text-gray-700"
                name="category"
                onChange={handleChange}
              >
                Product Category
              </label>

              <select className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none">
                <option>Select a category</option>
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
                onChange={handleChange}
                placeholder="$ 0.00"
                className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-4">
            <label
              className="font-medium text-gray-700"
              name="quantity"
              onChange={handleChange}
            >
              Product Quantity / Stock
            </label>

            <input
              type="number"
              placeholder="e.g., 50"
              className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              className="font-medium text-gray-700"
              name="description"
              onChange={handleChange}
            >
              Product Description
            </label>

            <textarea
              rows="4"
              placeholder="Describe your handcrafted product..."
              className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
            ></textarea>
          </div>

          {/* Image Upload */}
          <div className="mb-6">
            <div>
              <label className="text-sm">Upload Identity Document</label>

              <label className="flex items-center justify-center gap-2 mt-2 border border-dashed p-4 rounded-lg cursor-pointer ">
                <Upload size={18} />
                Choose file to upload
                <input type="file" className="hidden" />
              </label>

              <p className="text-xs text-gray-400 mt-1">
                Accepted formats: PDF, JPG, PNG (Max 5MB)
              </p>
            </div>
          </div>

          {/* Notes */}
          <div className="mb-6">
            <label
              className="font-medium text-gray-700"
              name="notes"
              onChange={handleChange}
            >
              Artisan / Maker Notes
            </label>

            <textarea
              rows="3"
              placeholder="Share the story behind this craft..."
              className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <button className="px-5 py-2 border rounded-lg text-gray-600 hover:bg-gray-100">
              Preview
            </button>

            <button
              className="px-5 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
              type="submit"
            >
              Save Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller_Product;
