import React from "react";
import { useState } from "react";
import login_bg from "../assets/login_bg.jpg";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // -----------------Login-----------------
  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("userId", data.user.id);
      navigate("/");
    } else {
      alert(data.message);
    }
  };

  /* ================= REGISTER ================= */
  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Registration successful! Please login.");
      setIsLogin(true);
      setName("");
      setEmail("");
      setPassword("");
    } else {
      alert(data.message);
    }
  };
  return (
    <div
      className="relative min-h-screen bg-cover bg-center  "
      style={{ backgroundImage: `url(${login_bg})` }}
    >
      <div className="absolute inset-0 backdrop-blur-sm bg-black/30"></div>
      <div className="absolute bg-[#2a1f1a]/90 mt-[20vh] ml-[70vh] text-white w-[360px] rounded-2xl shadow-xl p-6">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-center mb-4">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>

        {/* Form */}
        <form
          className="space-y-4"
          onSubmit={isLogin ? handleLogin : handleRegister}
        >
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 rounded bg-[#3a2a24] outline-none"
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-[#3a2a24] outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-[#3a2a24] outline-none"
          />

          <button className="w-full bg-[#b87333] hover:bg-[#a0622a] transition py-2 rounded font-semibold">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        {/* Switch */}
        <p className="text-sm text-center mt-4 text-gray-300">
          {isLogin ? "New to our craft?" : "Already have an account?"}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#d4a373] cursor-pointer ml-1 font-medium"
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
