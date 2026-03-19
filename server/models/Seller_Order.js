import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  sellerId: String,
  totalAmount: Number,
  status: String, // "pending" or "completed"
});

export default mongoose.model("Order", orderSchema);
