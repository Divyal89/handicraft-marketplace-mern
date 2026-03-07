import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#262626]  flex items-center pl-14 pt-2">
      <div>
        <div className="text-5xl font-extrabold text-[#ffeb99]">
          GET IN TOUCH
        </div>
        <div>
          <p className="mt-4 text-2xl font-bold text-[#ffeb99]">
            Customer&Nooke
          </p>
          <div className="flex text-2xl font-bold gap-4 mt-4 text-[#ffeb99]">
            <FaFacebook />
            <FaSquareInstagram />
          </div>
        </div>
      </div>

      <div className="ml-[30vh] mt-[10vh] flex gap-38">
        <div>
          <span className="text-2xl font-bold text-[#ffeb99]">Email</span>
          <p className="text-[#ffeb99]">Customer&Nooke@gmail.com</p>
        </div>

        <div>
          <span className="text-2xl font-bold text-[#ffeb99]">Phone</span>
          <p className="text-[#ffeb99]">123-456-789</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
