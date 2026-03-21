import React from "react";
import img6 from "../assets/img2.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home_context = () => {
  // Scroll-based scale for hero image
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]); // zoom out as you scroll 0->300px

  return (
    <motion.div
      style={{ scale }} // Apply scroll zoom to the whole hero section
      className="relative w-full min-h-screen bg-[#3E2F26] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C6A969]/20 blur-[140px] rounded-full"></div>

      <div className="relative flex flex-col lg:flex-row items-center justify-between px-10 lg:px-24 py-20">
        {/* LEFT CONTENT */}
        <div className="max-w-2xl">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl lg:text-7xl font-extrabold text-[#E6D5B8] leading-tight ml-[-10vh]"
          >
            Handcrafted <br />
            <span className="text-[#C6A969]">Treasure</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#D8C7A8] text-lg leading-relaxed tracking-wide font-light mt-8 max-w-xl ml-[-10vh]"
          >
            Our handcrafted products celebrate culture, creativity, and
            artistry. Every item carries the story of dedicated artisans who
            transform raw materials into meaningful works of art.
          </motion.p>

          {/* Button */}
          <motion.button
            whileHover={{
              scale: 1.08,
              backgroundColor: "#C6A969",
              color: "#3E2F26",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="mt-12 px-12 py-4 bg-[#C6A969] text-[#3E2F26] font-bold rounded-full shadow-xl ml-[-10vh]"
            onClick={() =>
              toast("Please Register/login, if register/login ignore")
            }
          >
            <Link to="/buy">SHOP NOW</Link>
          </motion.button>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -15, 0],
          }}
          transition={{
            x: { duration: 0.8 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="mt-16 lg:mt-0 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>

          <img
            src={img6}
            alt="Handcrafted Art"
            className="w-115 lg:w-140 ml-[10vh] rounded-3xl shadow-2xl object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home_context;
