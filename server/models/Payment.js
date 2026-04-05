// import mongoose from "mongoose";

// const paymentSchema = new mongoose.Schema(
//   {
//     items: [
//       {
//         id: { type: String, required: true },
//         price: { type: Number, required: true },
//         qty: { type: Number, required: true },
//         manufacturer: { type: String }, // ✅ ONLY ADDED
//         sellerId: { type: String },
//       },
//     ],

//     totalAmount: { type: Number, required: true },

//     paymentMethod: { type: String, required: true },

//     status: {
//       type: String,
//       enum: ["Pending", "Paid", "Failed"],
//       default: "Pending",
//     },

//     razorpay_order_id: String,
//     razorpay_payment_id: String,
//     razorpay_signature: String,

//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//     },
//   },
//   { timestamps: true },
// );

// export default mongoose.model("Payment", paymentSchema);

import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    items: [
      {
        id: { type: String, required: true },

        name: { type: String }, // ✅ add this
        image: { type: String }, // ✅ add this

        price: { type: Number, required: true },
        qty: { type: Number, required: true },

        manufacturer: { type: String },
        ProductName: { type: String },
        sellerId: { type: String },
      },
    ],

    totalAmount: { type: Number, required: true },

    paymentMethod: { type: String, required: true },

    status: {
      type: String,
      enum: ["Pending", "Paid", "Failed", "Cancelled"],
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

// import mongoose from "mongoose";

// const paymentSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//     },

//     name: { type: String, required: true },
//     phone: { type: String, required: true },
//     email: { type: String },

//     pincode: { type: String, required: true },
//     house: { type: String, required: true },
//     city: { type: String, required: true },
//     state: { type: String, required: true },
//     landmark: { type: String },

//     items: [
//       {
//         id: { type: String, required: true },
//         name: { type: String },
//         image: { type: String },
//         price: { type: Number, required: true },
//         qty: { type: Number, required: true },
//         manufacturer: { type: String },
//         sellerId: { type: String },
//       },
//     ],

//     totalAmount: { type: Number, required: true },
//     paymentMethod: { type: String, required: true },

//     status: {
//       type: String,
//       enum: ["Pending", "Paid", "Failed", "Cancelled"],
//       default: "Pending",
//     },

//     razorpay_order_id: String,
//     razorpay_payment_id: String,
//     razorpay_signature: String,
//   },
//   { timestamps: true },
// );

// export default mongoose.model("Payment", paymentSchema);
