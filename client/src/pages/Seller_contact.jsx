import React, { useState } from "react";
import Seller_Navbar from "../components/Seller_Navbar";

const Seller_contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // 🔹 handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 handle submit (CONNECTED TO BACKEND)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ frontend validation
    if (!formData.name || !formData.email || !formData.message) {
      return alert("Please fill all fields");
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("RESPONSE:", data);

      if (res.ok) {
        alert("Message sent successfully ✅");

        // ✅ reset form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Seller_Navbar />

      <div className="bg-[#F9F6F2] min-h-screen flex flex-col items-center px-6 md:px-24 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
          Contact Us
        </h1>

        <p className="text-lg md:text-xl mb-12 text-center max-w-2xl">
          Have questions or suggestions? We’d love to hear from you!
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-white p-8 rounded-xl shadow-lg"
        >
          {/* Name */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#A8977A]"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#A8977A]"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#A8977A]"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#A8977A] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#8C7B5D] transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Info Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-2">📍 123 Handicraft Street, India</p>
          <p className="text-gray-700 mb-2">📧 info@handicraftworld.com</p>
          <p className="text-gray-700">📞 +91 9876543210</p>
        </div>
      </div>
    </div>
  );
};

export default Seller_contact;
