import express from "express";
import Seller_Product from "../models/Seller_Product.js";

const router = express.Router();

/* ================= ADD PRODUCT ================= */
router.post("/products", async (req, res) => {
  try {
    console.log("🔥 PRODUCT ROUTE HIT");
    console.log("BODY:", req.body);

    const {
      name,
      category,
      price,
      quantity,
      description,
      notes,
      tags,
      sellerId,
    } = req.body;

    // ✅ Validation (optional but recommended)
    if (!name || !price || !sellerId) {
      return res.status(400).json({
        message: "Name, Price and SellerId are required",
      });
    }

    // ✅ Create new product
    const newProduct = new Seller_Product({
      name,
      category,
      price,
      quantity,
      description,
      notes,
      tags,
      sellerId,
    });

    // ✅ Save to MongoDB
    await newProduct.save();

    console.log("✅ Saved to MongoDB");

    res.status(201).json({
      message: "Product added successfully",
      product: newProduct,
    });
  } catch (error) {
    console.log("❌ PRODUCT SAVE ERROR:", error);
    res.status(500).json({
      message: "Server error",
    });
  }
});

export default router;
