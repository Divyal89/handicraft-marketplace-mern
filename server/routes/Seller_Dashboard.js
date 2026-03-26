import express from "express";
import Seller_Product from "../models/Seller_Product.js";
import Payment from "../models/Payment.js"; // ✅ CHANGE HERE

const router = express.Router();

router.get("/dashboard/:sellerId", async (req, res) => {
  try {
    const { sellerId } = req.params;

    // ✅ 1. Total Products
    const totalProducts = await Seller_Product.countDocuments({ sellerId });

    // ✅ 2. Get orders from Payment (IMPORTANT)
    const orders = await Payment.find({
      "items.sellerId": sellerId, // 🔥 KEY FIX
    });

    // ✅ 3. Total Orders
    const totalOrders = orders.length;

    // ✅ 4. Revenue (only seller items)
    const revenue = orders.reduce((total, order) => {
      const sellerItems = order.items.filter(
        (item) => item.sellerId === sellerId,
      );

      const sum = sellerItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0,
      );

      return total + sum;
    }, 0);

    // ✅ 5. Pending Orders
    const pendingOrders = orders.filter(
      (order) => order.status === "Pending",
    ).length;

    res.json({
      totalProducts,
      totalOrders,
      revenue,
      pendingOrders,
    });
  } catch (err) {
    console.log("DASHBOARD ERROR:", err);
    res.status(500).json({ message: "Error fetching dashboard" });
  }
});

export default router;
