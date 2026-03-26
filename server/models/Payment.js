import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    items: [
      {
        id: { type: String, required: true },
        price: { type: Number, required: true },
        qty: { type: Number, required: true },
        manufacturer: { type: String }, // ✅ ONLY ADDED
        sellerId: { type: String },
      },
    ],

    totalAmount: { type: Number, required: true },

    paymentMethod: { type: String, required: true },

    status: {
      type: String,
      enum: ["Pending", "Paid", "Failed"],
      default: "Pending",
    },

    razorpay_order_id: String,
    razorpay_payment_id: String,
    razorpay_signature: String,

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Payment", paymentSchema);
