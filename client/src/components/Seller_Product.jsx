import React from "react";

const Seller_Product = () => {
  return (
    <div className="pt-18 pl-4">
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
                placeholder="$ 0.00"
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
              rows="4"
              placeholder="Describe your handcrafted product..."
              className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
            ></textarea>
          </div>

          {/* Image Upload */}
          <div className="mb-6">
            <label className="font-medium text-gray-700">
              Upload Product Images
            </label>

            <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-10 text-center cursor-pointer hover:border-yellow-500">
              <div className="text-yellow-600 text-3xl mb-2">⬆</div>

              <p className="text-gray-600">
                Drop your images here, or{" "}
                <span className="text-yellow-600">browse</span>
              </p>

              <p className="text-sm text-gray-400 mt-1">
                Supports: JPG, PNG, GIF (Max 5MB)
              </p>

              <input type="file" multiple className="hidden" />
            </div>
          </div>

          {/* Tags */}
          <div className="mb-6">
            <label className="font-medium text-gray-700">Product Tags</label>

            <div className="flex flex-wrap gap-2 mt-3">
              {[
                "Handmade",
                "Eco-friendly",
                "Vintage",
                "Modern",
                "Traditional",
                "Custom",
                "Gift",
                "Limited Edition",
              ].map((tag) => (
                <button
                  key={tag}
                  className="px-4 py-1 border rounded-full text-sm hover:bg-yellow-100"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="mb-6">
            <label className="font-medium text-gray-700">
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

            <button className="px-5 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">
              Save Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller_Product;
