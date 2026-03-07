import React from "react";
import img2 from "../assets/imgw12.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutUs = () => {
  // Scroll-based zoom effect for AboutUs image
  const { scrollY } = useScroll();
  const imgScale = useTransform(scrollY, [0, 500], [1, 1.05]); // scale 1 -> 1.05 as you scroll down

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-[#A8977A] px-8 md:px-14 py-16 gap-12">
      {/* LEFT SIDE - Image */}
      <motion.div
        className="flex-1 overflow-hidden rounded-3xl shadow-2xl border-4 border-[#161711]"
        style={{ scale: imgScale }}
      >
        <motion.img
          src={img2}
          alt="About"
          className="w-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      {/* RIGHT SIDE - Text */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-[#161711] font-semibold leading-relaxed text-lg">
          HandCrafted Treasure is a celebration of tradition, creativity, and
          craftsmanship. We bring together skilled artisans who pour their heart
          and soul into creating unique, handmade pieces that tell a story of
          culture, heritage, and authenticity.
          <br />
          <br />
          Every product in our collection is carefully crafted using traditional
          techniques passed down through generations. From intricate designs to
          natural materials, each item reflects the passion and dedication of
          the artisan behind it.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
