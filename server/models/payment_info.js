import mongoose from "mongoose";

const paymentinfoSchema = new mongoose.Schema(
  {
    // 👤 User Info
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },

    // 📍 Address Info
    pincode: { type: String, required: true },
    house: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    landmark: String,

    // 🛒 Order Info (IMPORTANT ADD)
    products: [
      {
        productId: String,
        quantity: Number,
      },
    ],
  },
  { timestamps: true },
);

//  Rename model to Order (important)
export default mongoose.model("Paymentorder", paymentinfoSchema);
