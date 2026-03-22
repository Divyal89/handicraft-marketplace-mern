import express from "express";
import Payment from "../models/Payment.js";

const router = express.Router();

// Create Order API
router.post("/", async (req, res) => {
  try {
    const { items, totalAmount, paymentMethod } = req.body;

    if (!items || !totalAmount || !paymentMethod) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newOrder = new Payment({
      items,
      totalAmount,
      paymentMethod,
    });

    await newOrder.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});
export default router;
