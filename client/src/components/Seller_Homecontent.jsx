import React from "react";
import seller1 from "../assets/seller1.jpg";

const Seller_Homecontent = () => {
  return (
    <div>
      <img
        src={seller1}
        className="absolute w-full h-150 object-cover blur-[2px]  brightness-90 contrast-110 saturate-110"
      />
      <div className="relative pt-38.5 pl-6 ">
        <div className="text-[#E6D5B8] text-9xl  font-bold">Welcome,</div>
        <div className="text-[#C6A969] text-6xl  font-semibold mt-5">
          Divyal Sachan
        </div>
        {/* <div className="text-white  text-lg mt-5 font-bold">
          We are happy to have you as part of our handicraft marketplace.
          Showcase your unique handmade creations and share your talent with the
          world. Upload your products, connect with customers, and grow your
          business with us. Let your craftsmanship inspire people everywhere.
        </div> */}
      </div>
    </div>
  );
};

export default Seller_Homecontent;
