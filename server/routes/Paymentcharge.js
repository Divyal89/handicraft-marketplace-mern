import express from "express";
import Razorpay from "razorpay";
import Payment from "../models/Payment.js";

const router = express.Router();

// ================= CREATE ORDER =================
// router.post("/create-order", async (req, res) => {
//   try {
//     const razorpay = new Razorpay({
//       key_id: process.env.RAZORPAY_KEY_ID,
//       key_secret: process.env.RAZORPAY_KEY_SECRET,
//     });

//     const { totalAmount } = req.body;

//     const options = {
//       amount: totalAmount * 100,
//       currency: "INR",
//       receipt: "order_" + Date.now(),
//     };

//     const order = await razorpay.orders.create(options);

//     res.json(order);
//   } catch (err) {
//     console.log("CREATE ORDER ERROR:", err);
//     res.status(500).json({ message: "Error creating order" });
//   }
// });

router.post("/create-order", async (req, res) => {
  try {
    console.log("KEY ID:", process.env.RAZORPAY_KEY_ID);
    console.log("TOTAL AMOUNT:", req.body.totalAmount);

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const { totalAmount } = req.body;

    const options = {
      amount: Number(totalAmount) * 100,
      currency: "INR",
      receipt: "order_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);

    console.log("ORDER CREATED:", order);

    res.json(order);
  } catch (err) {
    console.log("CREATE ORDER ERROR:", err);
    res.status(500).json({ message: "Error creating order" });
  }
});

// ================= SAVE ORDER =================
router.post("/", async (req, res) => {
  try {
    const {
      items,
      totalAmount,
      paymentMethod,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      userId,
    } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    // ✅ OPTIONAL SAFETY (ensures manufacturer exists)
    // const updatedItems = items.map((item) => ({
    //   id: item.id,
    //   price: item.price,
    //   qty: item.qty,
    //   manufacturer: item.manufacturer || "Unknown", // ✅ ADDED
    //   sellerId: item.sellerId,
    // }));

    const updatedItems = items.map((item) => ({
      id: item.id,
      name: item.name, // ✅ add
      image: item.image, // ✅ add
      price: item.price,
      qty: item.qty,
      manufacturer: item.manufacturer || "Unknown",
      ProductName: item.name,
      sellerId: item.sellerId,
    }));

    const newOrder = new Payment({
      items: updatedItems, // ✅ USE UPDATED ITEMS
      totalAmount,
      paymentMethod,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      userId,
      status: paymentMethod === "cod" ? "Pending" : "Paid",
    });

    await newOrder.save();

    res.status(201).json({
      success: true,
      message: "Order saved successfully",
      order: newOrder,
    });
  } catch (error) {
    console.log("SAVE ORDER ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ================= GET ONLY USER ORDERS =================
router.get("/my-orders/:userId", async (req, res) => {
  try {
    const orders = await Payment.find({
      userId: req.params.userId,
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      orders,
    });
  } catch (error) {
    console.log("GET USER ORDERS ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// router.get("/my-orders/:sellerId", async (req, res) => {
//   try {
//     const sellerId = req.params.sellerId;

//     const orders = await Payment.find({
//       "items.sellerId": sellerId, // 🔥 CHANGE HERE
//     }).sort({ createdAt: -1 });

//     const filteredOrders = orders.map((order) => ({
//       ...order._doc,
//       items: order.items.filter((item) => item.sellerId === sellerId),
//     }));

//     res.json({
//       success: true,
//       orders: filteredOrders,
//     });
//   } catch (error) {
//     console.log("GET SELLER ORDERS ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// ================= CANCEL ORDER =================
router.put("/cancel-order/:orderId", async (req, res) => {
  try {
    const order = await Payment.findByIdAndUpdate(
      req.params.orderId,
      { status: "Cancelled" },
      { new: true },
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.json({
      success: true,
      message: "Order cancelled successfully",
      order,
    });
  } catch (error) {
    console.log("CANCEL ORDER ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
export default router;

// import express from "express";
// import Razorpay from "razorpay";
// import Payment from "../models/Payment.js";

// const router = express.Router();

// // ================= CREATE ORDER =================
// router.post("/create-order", async (req, res) => {
//   try {
//     const razorpay = new Razorpay({
//       key_id: process.env.RAZORPAY_KEY_ID,
//       key_secret: process.env.RAZORPAY_KEY_SECRET,
//     });

//     const { totalAmount } = req.body;

//     const options = {
//       amount: totalAmount * 100,
//       currency: "INR",
//       receipt: "order_" + Date.now(),
//     };

//     const order = await razorpay.orders.create(options);

//     res.json(order);
//   } catch (err) {
//     console.log("CREATE ORDER ERROR:", err);
//     res.status(500).json({ message: "Error creating order" });
//   }
// });

// // ================= SAVE ORDER =================
// router.post("/", async (req, res) => {
//   try {
//     const {
//       items,
//       totalAmount,
//       paymentMethod,
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature,
//       userId,
//     } = req.body;

//     // ❗ must have userId
//     if (!userId) {
//       return res.status(400).json({
//         success: false,
//         message: "User ID is required",
//       });
//     }

//     console.log("Saving order for user:", userId); // 🔥 debug

//     const updatedItems = items.map((item) => ({
//       id: item.id,
//       price: item.price,
//       qty: item.qty,
//       manufacturer: item.manufacturer || "Unknown",
//       sellerId: item.sellerId,
//     }));

//     const newOrder = new Payment({
//       items: updatedItems,
//       totalAmount,
//       paymentMethod,
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature,
//       userId, // ✅ important
//       status: paymentMethod === "cod" ? "Pending" : "Paid",
//     });

//     await newOrder.save();

//     res.status(201).json({
//       success: true,
//       message: "Order saved successfully",
//       order: newOrder,
//     });
//   } catch (error) {
//     console.log("SAVE ORDER ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// // ================= GET ONLY USER ORDERS =================
// router.get("/my-orders/:userId", async (req, res) => {
//   try {
//     const userId = req.params.userId;

//     console.log("Fetching orders for:", userId); // 🔥 debug

//     if (!userId || userId === "undefined" || userId === "null") {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid user ID",
//       });
//     }

//     const orders = await Payment.find({ userId }).sort({ createdAt: -1 });

//     res.json({
//       success: true,
//       count: orders.length,
//       orders,
//     });
//   } catch (error) {
//     console.log("GET USER ORDERS ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// // ================= SELLER ORDERS =================
// router.get("/seller-orders/:sellerId", async (req, res) => {
//   try {
//     const sellerId = req.params.sellerId;

//     const orders = await Payment.find({
//       "items.sellerId": sellerId,
//     }).sort({ createdAt: -1 });

//     const filteredOrders = orders.map((order) => ({
//       ...order._doc,
//       items: order.items.filter((item) => item.sellerId === sellerId),
//     }));

//     res.json({
//       success: true,
//       orders: filteredOrders,
//     });
//   } catch (error) {
//     console.log("GET SELLER ORDERS ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// // ================= CANCEL ORDER =================
// router.put("/cancel-order/:orderId", async (req, res) => {
//   try {
//     const { userId } = req.body; // 👈 must send from frontend

//     const order = await Payment.findOneAndUpdate(
//       {
//         _id: req.params.orderId,
//         userId: userId, // ✅ ensures only owner cancels
//       },
//       { status: "Cancelled" },
//       { new: true },
//     );

//     if (!order) {
//       return res.status(404).json({
//         success: false,
//         message: "Order not found or not authorized",
//       });
//     }

//     res.json({
//       success: true,
//       message: "Order cancelled successfully",
//       order,
//     });
//   } catch (error) {
//     console.log("CANCEL ORDER ERROR:", error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// export default router;
