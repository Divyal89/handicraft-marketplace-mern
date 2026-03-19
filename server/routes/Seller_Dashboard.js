import express from "express";
import Seller_Product from "../models/Seller_Product.js";
import Seller_Order from "../models/Seller_Order.js";

const router = express.Router();

router.get("/dashboard/:sellerId", async (req, res) => {
  try {
    const { sellerId } = req.params;

    // 1. Total Products
    const totalProducts = await Seller_Product.countDocuments({ sellerId });

    // 2. Total Orders
    const totalOrders = await Seller_Order.countDocuments({ sellerId });

    // 3. Revenue (sum of all orders)
    const orders = await Seller_Order.find({ sellerId });

    const revenue = orders.reduce((acc, item) => acc + item.totalAmount, 0);

    // 4. Pending Orders
    const pendingOrders = await Seller_Order.countDocuments({
      sellerId,
      status: "pending",
    });

    res.json({
      totalProducts,
      totalOrders,
      revenue,
      pendingOrders,
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching dashboard" });
  }
});

export default router;
