// import React, { useState } from "react";
// import { Eye, EyeOff, Upload } from "lucide-react";
// import bg from "../assets/seller1.jpg"; // your background image

// const SellerAuth = () => {
//   const [isLogin, setIsLogin] = useState(false);
//   const [showPass, setShowPass] = useState(false);

//   //for backend to store seller detail
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     storeName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5000/api/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       localStorage.setItem("user", JSON.stringify(data));

//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
//         style={{
//           backgroundImage: `url(${bg})`,
//         }}
//       ></div>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Form Container */}
//       <div
//         className="relative z-10 w-105
//      backdrop-blur-md p-8 rounded-xl shadow-lg text-white"
//       >
//         {/* Title */}
//         <h2 className="text-2xl font-bold text-center text-yellow-400">
//           {isLogin ? "Seller Login" : "Seller Registration"}
//         </h2>

//         <p className="text-center text-sm text-gray-300 mb-6">
//           {isLogin
//             ? "Login to access your seller dashboard"
//             : "Create your seller account to start selling"}
//         </p>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           {/* Register Only Fields */}
//           {!isLogin && (
//             <>
//               <div>
//                 <label className="text-sm">Full Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter your full name"
//                   onChange={handleChange}
//                   className="w-full mt-1 p-3 rounded-lg bg-[#4a3426] border border-[#5c4332]"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm">Phone Number</label>
//                 <input
//                   type="text"
//                   placeholder="Enter phone number"
//                   onChange={handleChange}
//                   className="w-full mt-1 p-3 rounded-lg bg-[#4a3426] border border-[#5c4332]"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm">Store Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter store name"
//                   onChange={handleChange}
//                   className="w-full mt-1 p-3 rounded-lg bg-[#4a3426] border border-[#5c4332]"
//                 />
//               </div>
//             </>
//           )}

//           {/* Email */}
//           <div>
//             <label className="text-sm">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               onChange={handleChange}
//               className="w-full mt-1 p-3 rounded-lg bg-[#4a3426] border border-[#5c4332]"
//             />
//           </div>

//           {/* Password */}
//           <div className="relative">
//             <label className="text-sm">Password</label>
//             <input
//               type={showPass ? "text" : "password"}
//               placeholder="Enter your password"
//               onChange={handleChange}
//               className="w-full mt-1 p-3 rounded-lg bg-[#4a3426] border border-[#5c4332]"
//             />

//             <div
//               onClick={() => setShowPass(!showPass)}
//               className="absolute right-3 top-9 cursor-pointer"
//             >
//               {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
//             </div>
//           </div>

//           {/* Confirm Password Register Only */}
//           {!isLogin && (
//             <div>
//               <label className="text-sm">Confirm Password</label>
//               <input
//                 type="password"
//                 placeholder="Confirm password"
//                 onChange={handleChange}
//                 className="w-full mt-1 p-3 rounded-lg bg-[#4a3426] border border-[#5c4332]"
//               />
//             </div>
//           )}

//           {/* Upload Only for Register */}
//           {!isLogin && (
//             <div>
//               <label className="text-sm">Upload Identity Document</label>

//               <label className="flex items-center justify-center gap-2 mt-2 border border-dashed border-[#7a5a44] p-4 rounded-lg cursor-pointer bg-[#4a3426]">
//                 <Upload size={18} />
//                 Choose file to upload
//                 <input type="file" className="hidden" />
//               </label>

//               <p className="text-xs text-gray-400 mt-1">
//                 Accepted formats: PDF, JPG, PNG (Max 5MB)
//               </p>
//             </div>
//           )}

//           {/* Button */}
//           <button
//             type="submit"
//             className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg mt-2 hover:bg-yellow-500"
//           >
//             {isLogin ? "Login as Seller" : "Register as Seller"}
//           </button>

//           {/* Switch */}
//           <p className="text-center text-sm text-gray-300 mt-4">
//             {isLogin ? "Don't have an account?" : "Already have an account?"}

//             <span
//               onClick={() => setIsLogin(!isLogin)}
//               className="text-yellow-400 cursor-pointer ml-1"
//             >
//               {isLogin ? "Register here" : "Login here"}
//             </span>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SellerAuth;

import React, { useState } from "react";
import { Eye, EyeOff, Upload } from "lucide-react";
import bg from "../assets/seller1.jpg";

const SellerAuth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    storeName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // 🔹 handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 handle submit (LOGIN + REGISTER)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = isLogin
        ? "http://localhost:5000/api/login"
        : "http://localhost:5000/api/register";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // ✅ store user in localStorage
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      console.log(data);

      alert(isLogin ? "Login successful" : "Registration successful");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Form */}
      <div className="relative z-10 w-105 backdrop-blur-md p-8 rounded-xl shadow-lg text-white">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-yellow-400">
          {isLogin ? "Seller Login" : "Seller Registration"}
        </h2>

        <p className="text-center text-sm text-gray-300 mb-6">
          {isLogin
            ? "Login to access your seller dashboard"
            : "Create your seller account to start selling"}
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* REGISTER FIELDS */}
          {!isLogin && (
            <>
              {/* Name */}
              <div>
                <label className="text-sm">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full mt-1 p-3 rounded-lg bg-[#4a3426] border border-[#5c4332]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full mt-1 p-3 rounded-lg bg-[#4a3426] border border-[#5c4332]"
                />
              </div>

              {/* Store Name */}
              <div>
                <label className="text-sm">Store Name</label>
                <input
                  type="text"
                  name="storeName"
                  value={formData.storeName}
                  onChange={handleChange}
                  placeholder="Enter store name"
                  className="w-full mt-1 p-3 rounded-lg bg-[#4a3426] border border-[#5c4332]"
                />
              </div>
            </>
          )}

          {/* Email */}
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-1 p-3 rounded-lg bg-[#4a3426] border border-[#5c4332]"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="text-sm">Password</label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full mt-1 p-3 rounded-lg bg-[#4a3426] border border-[#5c4332]"
            />

            <div
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-9 cursor-pointer"
            >
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          </div>

          {/* Confirm Password */}
          {!isLogin && (
            <div>
              <label className="text-sm">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full mt-1 p-3 rounded-lg bg-[#4a3426] border border-[#5c4332]"
              />
            </div>
          )}

          {/* Upload */}
          {!isLogin && (
            <div>
              <label className="text-sm">Upload Identity Document</label>

              <label className="flex items-center justify-center gap-2 mt-2 border border-dashed border-[#7a5a44] p-4 rounded-lg cursor-pointer bg-[#4a3426]">
                <Upload size={18} />
                Choose file to upload
                <input type="file" className="hidden" />
              </label>

              <p className="text-xs text-gray-400 mt-1">
                Accepted formats: PDF, JPG, PNG (Max 5MB)
              </p>
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg mt-2 hover:bg-yellow-500"
          >
            {isLogin ? "Login as Seller" : "Register as Seller"}
          </button>

          {/* Switch */}
          <p className="text-center text-sm text-gray-300 mt-4">
            {isLogin ? "Don't have an account?" : "Already have an account?"}

            <span
              onClick={() => setIsLogin(!isLogin)}
              className="text-yellow-400 cursor-pointer ml-1"
            >
              {isLogin ? "Register here" : "Login here"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SellerAuth;
