// import React, { useContext, useState } from "react";
// import ProductArray from "./ProductArray";
// import Products from "./Products";
// import { AppContext } from "../../context/AppContext";

// const ProductCart = () => {
//   // ---------------------INitially show all products-------------------
//   const AllProducts = ProductArray.filter((item) => item.category === "Wooden");
//   // -----------------------Hand-carved-showpieces-----------------
//   const HandProducts = ProductArray.filter(
//     (item) => item.sub_category === "Hand-carved-showpieces",
//   );
//   const {
//     selectedWoodentoy,
//     selectedProduct,
//     setSelectedProduct,
//     selectedHandcraft,
//   } = useContext(AppContext);

//   // ---------------------------wooden toys---------------------------
//   const woodenProducts = ProductArray.filter(
//     (item) => item.sub_category === "Wooden-toys",
//   );
//   return (
//     <div className="bg-[#ffeb99]">
//       <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
//         {selectedProduct &&
//           AllProducts.map((item) => <Products key={item.id} product={item} />)}
//       </div>
//       {/* // -----------------------Hand-carved-showpieces----------------- */}
//       <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
//         {selectedHandcraft &&
//           HandProducts.map((item) => <Products key={item.id} product={item} />)}
//       </div>
//       {/* // ---------------------------wooden toys--------------------------- */}
//       <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
//         {selectedWoodentoy &&
//           woodenProducts.map((item) => (
//             <Products key={item.id} product={item} />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default ProductCart;

import React, { useContext } from "react";
import ProductArray from "./ProductArray";
import Products from "./Products";
import { AppContext } from "../../context/AppContext";
import { motion } from "framer-motion";

const ProductCart = () => {
  const { selectedWoodentoy, selectedProduct, selectedHandcraft } =
    useContext(AppContext);

  // Filters
  const AllProducts = ProductArray.filter((item) => item.category === "Wooden");
  const HandProducts = ProductArray.filter(
    (item) => item.sub_category === "Hand-carved-showpieces",
  );
  const woodenProducts = ProductArray.filter(
    (item) => item.sub_category === "Wooden-toys",
  );

  // Framer Motion Variants for Staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#F9F6F2] py-12">
      {/* ---------------- Wood Handicrafts ---------------- */}
      {selectedProduct && (
        <div className="px-6 mb-12">
          <h2 className="text-3xl font-extrabold text-[#3E2F26] mb-6">
            Wooden Handicrafts
          </h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {AllProducts.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <Products product={item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {/* ---------------- Hand-carved Showpieces ---------------- */}
      {selectedHandcraft && (
        <div className="px-6 mb-12">
          <h2 className="text-3xl font-extrabold text-[#3E2F26] mb-6">
            Hand-carved Showpieces
          </h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {HandProducts.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <Products product={item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {/* ---------------- Wooden Toys ---------------- */}
      {selectedWoodentoy && (
        <div className="px-6 mb-12">
          <h2 className="text-3xl font-extrabold text-[#3E2F26] mb-6">
            Wooden Toys
          </h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {woodenProducts.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <Products product={item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ProductCart;
