import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/auth.js";
import Seller_Dashboard from "./routes/Seller_Dashboard.js";
import dotenv from "dotenv";
import productRoutes from "./routes/products.js";
import contactRoutes from "./routes/contact.js";
import paymentinfo from "./routes/Payment_info.js";
import paymentRoutes from "./routes/Paymentcharge.js";

dotenv.config();

const app = express();

/* ================= MIDDLEWARE ================= */
app.use(cors());
app.use(express.json());

/* ================= ROUTES ================= */
app.use("/api", router);
app.use("/api", Seller_Dashboard);
app.use("/api", productRoutes);
app.use("/api", contactRoutes);
app.use("/api/order", paymentinfo);
app.use("/api/payment", paymentRoutes);

/* ================= DATABASE ================= */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

/* ================= TEST ROUTE ================= */
app.get("/", (req, res) => {
  res.send("Express server running");
});

/* ================= SERVER ================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
