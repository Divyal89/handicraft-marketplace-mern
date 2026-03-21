import express from "express";
import Paymentorder from "../models/payment_info.js";

const router = express.Router();

// CREATE ORDER
router.post("/create-order", async (req, res) => {
  try {
    const order = new Paymentorder(req.body);
    const savedOrder = await order.save();

    res.status(201).json({
      success: true,
      data: savedOrder,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
