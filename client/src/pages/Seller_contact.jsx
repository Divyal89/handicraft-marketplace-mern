import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Seller_Navbar from "../components/Seller_Navbar";

const Seller_contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can connect to backend API to send form data
    alert(`Thank you ${formData.name}, your message has been sent!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <Seller_Navbar />
      <div className="bg-[#F9F6F2] min-h-screen flex flex-col items-center px-6 md:px-24 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl mb-12 text-center max-w-2xl">
          Have questions or suggestions? We’d love to hear from you! Fill out
          the form below and our team will get back to you as soon as possible.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-white p-8 rounded-xl shadow-lg"
        >
          <div className="mb-6">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A8977A]"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A8977A]"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A8977A]"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#A8977A] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#8C7B5D] transition"
          >
            Send Message
          </button>
        </form>

        {/* Optional Info Section */}
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
