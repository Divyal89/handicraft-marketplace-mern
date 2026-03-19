import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  sellerId: String,
});

export default mongoose.model("Product", productSchema);
