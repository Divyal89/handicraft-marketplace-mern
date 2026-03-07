import React from "react";
import Navbar from "../components/Navbar";

import DropDown from "../components/DropDown";
import Product from "../components/Products";
import ProductCart from "../components/ProductCart";

const Buy = () => {
  return (
    <div>
      <Navbar />
      <DropDown />
      <ProductCart />
    </div>
  );
};

export default Buy;
