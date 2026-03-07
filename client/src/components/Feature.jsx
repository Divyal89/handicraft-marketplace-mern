import React from "react";
import img4 from "../assets/img4.jpg";
import img1 from "../assets/img1.jpg";
import img5 from "../assets/img5.jpg";

const Feature = () => {
  return (
    <div className="bg-[#A8977A] flex flex-col lg:flex-row justify-between items-center px-10 py-15 gap-16">
      {/* LEFT CONTENT */}
      <div className="max-w-2xl">
        <p className="text-6xl font-extrabold text-[#45362C] mb-8 mt-[-20vh]">
          FEATURE
        </p>

        <p className="text-[#161711] font-medium leading-relaxed space-y-4">
          All our products are 100% handcrafted by skilled artisans using
          premium, ethically sourced materials. Each piece features unique
          traditional designs, ensuring authenticity and timeless beauty.
          <br />
          <br />
          No two pieces are the same, making every item special and meaningful.
          By choosing our crafts, you support sustainable practices and preserve
          traditional art forms.
          <br />
          <br />
          We focus on authenticity, sustainability, and refined design to
          enhance your space with lasting elegance.
        </p>
      </div>

      {/* RIGHT IMAGES */}
      <div className="grid grid-cols-2 gap-6 relative">
        {/* Big Image */}
        <div className="col-span-1 row-span-2 overflow-hidden rounded-2xl shadow-2xl group">
          <img
            src={img4}
            alt=""
            className="w-[320px] h-125 object-cover transition duration-500 group-hover:scale-110"
          />
        </div>

        {/* Top Small Image */}
        <div className="overflow-hidden rounded-2xl shadow-xl group">
          <img
            src={img1}
            alt=""
            className="w-70 h-55 object-cover transition duration-500 group-hover:scale-110"
          />
        </div>

        {/* Bottom Small Image */}
        <div className="overflow-hidden rounded-2xl shadow-xl group">
          <img
            src={img5}
            alt=""
            className="w-180 h-62 object-cover transition duration-500 group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
