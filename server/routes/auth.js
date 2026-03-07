import express from "express";
import User from "../models/User.js";

const router = express.Router();

/* ================= REGISTER ================= */
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 2. create new user
    const newUser = new User({
      name,
      email,
      password, // (we'll hash later)
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

/* ================= LOGIN ================= */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. check user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // 2. simple password check (for now)
    if (password !== user.password) {
      return res.status(400).json({ message: "Wrong password" });
    }
    // 3. success (SEND USER DATA)
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/add-to-cart", async (req, res) => {
  const { userId, product } = req.body;
  console.log("Add-to-cart route hit!");
  console.log(req.body);

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // check if product is already in cart
    const existing = user.cart.find((item) => item.productId === product.id);

    if (existing) {
      existing.qty += 1; // increment quantity
    } else {
      user.cart.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        qty: 1,
      });
    }

    await user.save();

    res.json(user.cart); // return full updated cart
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/remove-from-cart", async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.cart = user.cart.filter((item) => item.productId !== productId);

    await user.save();

    res.json(user.cart);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});
export default router;
