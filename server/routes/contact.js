import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    console.log("REQ BODY:", req.body); // ✅ debug

    const { name, email, message } = req.body;

    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    res.status(201).json({ message: "Saved" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error" });
  }
});

export default router;
