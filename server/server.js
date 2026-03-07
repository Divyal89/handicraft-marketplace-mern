import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/auth.js";

const app = express();

/* ================= MIDDLEWARE ================= */
//  allow frontend (Vite runs on 5173)
app.use(cors());

//  parse JSON coming from React
app.use(express.json());

/* ================= ROUTES ================= */
app.use("/api", router);

/* ================= DATABASE ================= */
mongoose
  .connect(
    "mongodb+srv://Divyal89:divyal89@divyalcluster.2q60mrg.mongodb.net/ecommerence",
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

/* ================= TEST ROUTE ================= */
app.get("/", (req, res) => {
  res.send("Express server running");
});

/* ================= SERVER ================= */
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
