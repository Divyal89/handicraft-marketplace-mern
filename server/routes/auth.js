// import express from "express";
// import User from "../models/User.js";

// const router = express.Router();

// /* ================= REGISTER ================= */
// // router.post("/register", async (req, res) => {
// //   try {
// //     const { name, email, password } = req.body;

// //     // 1. check if user already exists
// //     const existingUser = await User.findOne({ email });
// //     if (existingUser) {
// //       return res.status(400).json({ message: "User already exists" });
// //     }

// //     // 2. create new user
// //     const newUser = new User({
// //       name,
// //       email,
// //       password, // (we'll hash later)
// //     });

// //     await newUser.save();

// //     res.status(201).json({ message: "User registered successfully" });
// //   } catch (error) {
// //     res.status(500).json({ message: "Server error" });
// //   }
// // });
// router.post("/register", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const newUser = new User({
//       name,
//       email,
//       password,
//     });

//     await newUser.save();

//     // ✅ SEND USER DATA BACK
//     res.status(201).json({
//       message: "User registered successfully",
//       user: {
//         id: newUser._id,
//         name: newUser.name,
//         email: newUser.email,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// /* ================= LOGIN ================= */
// router.post("/login", async (req, res) => {
//   try {

//     const { email, password } = req.body;

//     // 1. check user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     // 2. simple password check (for now)
//     if (password !== user.password) {
//       return res.status(400).json({ message: "Wrong password" });
//     }
//     // 3. success (SEND USER DATA)
//     res.status(200).json({
//       message: "Login successful",
//       user: {
//         id: user.id,
//         name: user.name,
//         email: user.email,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// router.post("/add-to-cart", async (req, res) => {
//   const { userId, product } = req.body;
//   console.log("Add-to-cart route hit!");
//   console.log(req.body);

//   try {
//     const user = await User.findById(userId);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     // check if product is already in cart
//     const existing = user.cart.find((item) => item.productId === product.id);

//     if (existing) {
//       existing.qty += 1; // increment quantity
//     } else {
//       user.cart.push({
//         productId: product.id,
//         name: product.name,
//         price: product.price,
//         image: product.image,
//         qty: 1,
//       });
//     }

//     await user.save();

//     res.json(user.cart); // return full updated cart
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// router.post("/remove-from-cart", async (req, res) => {
//   const { userId, productId } = req.body;

//   try {
//     const user = await User.findById(userId);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     user.cart = user.cart.filter((item) => item.productId !== productId);

//     await user.save();

//     res.json(user.cart);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// export default router;

import express from "express";
import User from "../models/User.js";

const router = express.Router();

/* ================= REGISTER ================= */
router.post("/register", async (req, res) => {
  try {
    const name = String(req.body.name);
    const email = String(req.body.email).toLowerCase();
    const password = String(req.body.password);

    // ✅ ADD THESE
    const phone = String(req.body.phone);
    const storeName = String(req.body.storeName);

    if (!name || !email || !password || !phone || !storeName) {
      return res.status(400).json({
        message: "All fields required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // ✅ SAVE ALL FIELDS
    const newUser = new User({
      name,
      email,
      password,
      phone,
      storeName,
    });

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        storeName: newUser.storeName,
      },
    });
  } catch (error) {
    console.log("REGISTER ERROR:", error);

    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already exists" });
    }

    res.status(500).json({ message: "Server error" });
  }
});

/* ================= LOGIN ================= */
router.post("/login", async (req, res) => {
  try {
    console.log("RAW BODY:", req.body);

    const email = String(req.body.email);
    const password = String(req.body.password);

    console.log("CLEAN:", email, password);

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (password !== user.password) {
      return res.status(400).json({ message: "Wrong password" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("🔥 LOGIN ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/* ================= ADD TO CART ================= */
router.post("/add-to-cart", async (req, res) => {
  try {
    console.log("ADD TO CART BODY:", req.body);

    const { userId, product } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const existing = user.cart.find((item) => item.productId === product.id);

    if (existing) {
      existing.qty += 1;
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

    res.json(user.cart);
  } catch (error) {
    console.log("ADD TO CART ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// router.post("/add-to-cart", async (req, res) => {
//   try {
//     const { userId, product } = req.body;

//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const existing = user.cart.find(
//       (item) => String(item.id) === String(product.id),
//     );

//     if (existing) {
//       existing.qty += 1;
//     } else {
//       user.cart.push({
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         image: product.image,
//         qty: 1,
//         manufacturer: product.manufacturer,
//         sellerId: product.sellerId,
//       });
//     }

//     await user.save();
//     res.json(user.cart);
//   } catch (error) {
//     console.log("ADD TO CART ERROR:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

/* ================= REMOVE FROM CART ================= */
router.post("/remove-from-cart", async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.cart = user.cart.filter((item) => item.productId !== productId);

    await user.save();

    res.json(user.cart);
  } catch (error) {
    console.log("REMOVE ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// router.post("/remove-from-cart", async (req, res) => {
//   try {
//     const { userId, id } = req.body;

//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     user.cart = user.cart.filter((item) => String(item.id) !== String(id));

//     await user.save();
//     res.json(user.cart);
//   } catch (error) {
//     console.log("REMOVE ERROR:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

/* ================= Admin Login ================= */
router.post("/admin-login", async (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@gmail.com" && password === "admin123") {
    return res.json({
      token: "admin-secret-token",
    });
  }

  return res.status(401).json({
    message: "Invalid credentials",
  });
});
export default router;
