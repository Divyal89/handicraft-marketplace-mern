// ---------------------use to give knowledge to mongo about user---------------

// import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true },
// );

// const CartItemSchema = new mongoose.Schema({
//   productId: { type: Number, required: true }, // match your frontend product id
//   name: String,
//   price: String,
//   image: String,
//   qty: { type: Number, default: 1 },
// });

// const UserSchema1 = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   cart: [CartItemSchema], // store cart items here
// });

// export default mongoose.model("User", UserSchema, UserSchema1);

import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
  productId: { type: Number, required: true }, // match your frontend product id
  name: String,
  price: String,
  image: String,
  qty: { type: Number, default: 1 },
});

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    cart: { type: [CartItemSchema], default: [] }, // ensure default empty array
  },
  { timestamps: true },
);

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  quantity: Number,
  description: String,
  notes: String,
});

export default mongoose.model("User", UserSchema);
