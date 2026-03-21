import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: String,
    price: { type: Number, required: true },
    quantity: Number,

    // ✅ ADD THESE
    description: String,
    notes: String,

    image: String,

    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Product", productSchema);
