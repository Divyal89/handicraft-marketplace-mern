import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    items: [
      {
        id: String,
        price: Number,
        qty: Number,
      },
    ],
    totalAmount: Number,
    paymentMethod: String,
    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Payment", paymentSchema);
