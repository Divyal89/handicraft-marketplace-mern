import express from "express";
import mongoose from "mongoose";
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
      contactNumber,
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

/* ================= GET SELLER PRODUCTS ================= */
router.get("/products/:sellerId", async (req, res) => {
  try {
    const { sellerId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(sellerId)) {
      return res.status(400).json({
        message: "Invalid sellerId",
      });
    }

    const products = await Seller_Product.find({ sellerId }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      message: "Seller products fetched successfully",
      products,
    });
  } catch (error) {
    console.log("❌ FETCH PRODUCT ERROR:", error);
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.put("/products/status/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["Accepted", "Rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const updatedProduct = await Seller_Product.findByIdAndUpdate(
      id,
      { status },
      { new: true },
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: `Product ${status} successfully`,
      product: updatedProduct,
    });
  } catch (error) {
    console.log("STATUS UPDATE ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
