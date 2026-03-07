import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/imgw1.jpg";
import img2 from "../assets/imgw2.jpg";
import img4 from "../assets/imgw3.jpg";
import img5 from "../assets/imgw5.jpg";
import img6 from "../assets/imgw6.jpg";
import img7 from "../assets/imgw7.jpg";
import img8 from "../assets/imgw8.jpg";

const images = [img1, img2, img4, img5, img6, img7, img8];

const Collection = () => {
  const [active, setActive] = useState(3);

  return (
    <div className="relative bg-[#45362C] h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#A8977A]/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#ffeb99]/10 blur-[200px] rounded-full"></div>

      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-[#A8977A] text-5xl md:text-6xl font-extrabold mb-16 z-10"
      >
        COLLECTION
      </motion.p>

      {/* Carousel */}
      <div className="relative w-full h-[500px] flex justify-center items-center perspective-1000">
        {images.map((img, index) => {
          const offset = index - active;

          // Only render nearby images
          if (Math.abs(offset) > 3) return null;

          return (
            <motion.img
              key={index}
              src={img}
              alt="collection"
              onClick={() => setActive(index)}
              className="absolute w-[300px] h-[400px] object-cover rounded-xl cursor-pointer shadow-2xl"
              style={{ willChange: "transform" }}
              animate={{
                x: offset * 220,
                scale: offset === 0 ? 1 : 0.85,
                rotateY: offset * -25,
                opacity: Math.abs(offset) > 2 ? 0 : 1,
                zIndex: 10 - Math.abs(offset),
              }}
              whileHover={{ scale: 1.05, rotateY: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
              }}
            />
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() =>
          setActive((prev) => (prev - 1 + images.length) % images.length)
        }
        className="absolute left-5 md:left-10 top-1/2 -translate-y-1/2 bg-[#A8977A]/30 hover:bg-[#A8977A]/70 text-white text-3xl md:text-4xl rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition"
      >
        ◀
      </button>

      <button
        onClick={() => setActive((prev) => (prev + 1) % images.length)}
        className="absolute right-5 md:right-10 top-1/2 -translate-y-1/2 bg-[#A8977A]/30 hover:bg-[#A8977A]/70 text-white text-3xl md:text-4xl rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition"
      >
        ▶
      </button>
    </div>
  );
};

export default Collection;
