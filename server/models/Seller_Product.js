// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     category: String,
//     price: { type: Number, required: true },
//     quantity: Number,

//     // ✅ ADD THESE
//     description: String,
//     notes: String,

//     image: String,

//     sellerId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//   },
//   { timestamps: true },
// );

// export default mongoose.model("Product", productSchema);

// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     category: String,
//     price: { type: Number, required: true },
//     quantity: Number,
//     description: String,
//     notes: String,
//     image: String,
//     tags: [String],
//     sellerId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//   },
//   { timestamps: true },
// );

// export default mongoose.model("Product", productSchema);

// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     category: String,
//     price: { type: Number, required: true },
//     quantity: Number,
//     description: String,
//     notes: String,
//     image: String,
//     tags: [String],
//     contactNumber: [String],
//     sellerId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     status: {
//       type: String,
//       enum: ["Pending", "Accepted", "Rejected"],
//       default: "Pending",
//     },
//   },
//   { timestamps: true },
// );

// export default mongoose.model("Product", productSchema);

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: String,
    price: { type: Number, required: true },
    quantity: Number,
    description: String,
    notes: String,
    image: String,
    contactNumber: String,
    tags: [String],
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Accepted", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Product", productSchema);
