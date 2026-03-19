import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/auth.js";
import Seller_Dashboard from "./routes/Seller_Dashboard.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

/* ================= MIDDLEWARE ================= */
app.use(cors());
app.use(express.json());

/* ================= ROUTES ================= */
app.use("/api", router);
app.use("/api", Seller_Dashboard);

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
