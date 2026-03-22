import React from "react";
import Seller_Homecontent from "../components/Seller_Homecontent";
import Seller_Navbar from "../components/Seller_Navbar";
import Seller_Homecontext_detail from "../components/Seller_Homecontext_detail";

const Seller_Home = () => {
  return (
    <div>
      <Seller_Navbar />
      <Seller_Homecontent />
      <Seller_Homecontext_detail />
    </div>
  );
};

export default Seller_Home;
