import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Mail, Lock, Sparkles } from "lucide-react";

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/admin-login",
        formData,
      );

      localStorage.setItem("adminToken", res.data.token);
      localStorage.setItem("adminRole", "admin");

      alert("Admin login successful");
      navigate("/admin-order");
    } catch (error) {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-100 to-yellow-50 flex items-center justify-center px-4">
      {/* Background blur circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-orange-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-300/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="backdrop-blur-xl bg-white/70 border border-white/40 shadow-2xl rounded-3xl p-8">
          {/* Top icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 180 }}
            className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center shadow-lg"
          >
            <ShieldCheck className="text-white" size={30} />
          </motion.div>

          {/* Heading */}
          <div className="text-center mt-5">
            <h2 className="text-3xl font-bold text-gray-800">Admin Login</h2>
            <p className="text-sm text-gray-600 mt-2">
              Handicraft Store Management Panel
            </p>
            <div className="flex items-center justify-center gap-1 mt-2 text-amber-600 text-sm">
              <Sparkles size={16} />
              <span>Secure access for authorized admin only</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Admin Email
              </label>
              <div className="flex items-center gap-3 bg-white/80 border border-gray-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-amber-400 shadow-sm">
                <Mail className="text-amber-600" size={18} />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter admin email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="flex items-center gap-3 bg-white/80 border border-gray-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-amber-400 shadow-sm">
                <Lock className="text-amber-600" size={18} />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-gradient-to-r from-amber-600 to-orange-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Login to Dashboard
            </motion.button>
          </form>

          {/* Footer text */}
          <p className="text-center text-xs text-gray-500 mt-6">
            Only verified admin can manage products, orders, and seller
            requests.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
