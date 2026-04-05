// src/components/Products.jsx
// import React, { useContext } from "react";
// import { AppContext } from "../../context/AppContext";

// const Products = ({ product }) => {
//   const { addToCart } = useContext(AppContext);
//   return (
//     <div className="border rounded-lg overflow-hidden  shadow-md">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-52 object-cover"
//       />

//       <div className="p-3">
//         <h2 className="text-lg font-semibold">{product.name}</h2>
//         <p className="text-sm text-gray-500">{product.sub_category}</p>
//         <p className="text-green-600 font-bold mt-1">{product.price}</p>
//         <button
//           className="border-2 border-[#e6b800] bg-[#e6b800] px-[20vh] py-[2vh] mt-[2vh] rounded-[50%] font-bold text-[#262626]"
//           onClick={() => addToCart(product)}
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Products;
import React, { useContext, useRef } from "react";
import { AppContext } from "../../context/AppContext";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Products = ({ product }) => {
  const { addToCart } = useContext(AppContext);
  const btnRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-20, 20], [10, -10]);
  const rotateY = useTransform(x, [-20, 20], [-10, 10]);

  const handleMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-3">
        <span className="text-xs text-gray-400 italic">
          by {product.manufacturer}
        </span>

        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-sm text-gray-500">{product.sub_category}</p>
        <p className="text-green-600 font-bold mt-1">{product.price}</p>

        {/* TILT BUTTON */}
        <motion.button
          ref={btnRef}
          onMouseMove={handleMove}
          onMouseLeave={reset}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="w-full mt-4 py-3 rounded-full font-bold
                     bg-[#e6b800] text-[#262626]
                     hover:bg-[#d4a900]"
          onClick={() => addToCart(product)}
        >
          <span
            style={{ transform: "translateZ(15px)", display: "inline-block" }}
          >
            Add to Cart
          </span>
        </motion.button>
      </div>
    </div>
  );
};

export default Products;

// import React, { useContext, useRef } from "react";
// import { AppContext } from "../../context/AppContext";
// import { motion, useMotionValue, useTransform } from "framer-motion";

// const Products = ({ product }) => {
//   const { addToCart } = useContext(AppContext);
//   const btnRef = useRef(null);

//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const rotateX = useTransform(y, [-20, 20], [10, -10]);
//   const rotateY = useTransform(x, [-20, 20], [-10, 10]);

//   const handleMove = (e) => {
//     const rect = btnRef.current.getBoundingClientRect();
//     x.set(e.clientX - rect.left - rect.width / 2);
//     y.set(e.clientY - rect.top - rect.height / 2);
//   };

//   const reset = () => {
//     x.set(0);
//     y.set(0);
//   };

//   const handleAddToCart = () => {
//     const cartProduct = {
//       id: product._id || product.id,
//       name: product.name,
//       price: product.price,
//       image: product.image,
//       manufacturer: product.manufacturer,
//       sub_category: product.sub_category,
//     };

//     addToCart(cartProduct);
//   };

//   return (
//     <div className="border rounded-lg overflow-hidden shadow-md">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-52 object-cover"
//       />

//       <div className="p-3">
//         <span className="text-xs text-gray-400 italic">
//           by {product.manufacturer}
//         </span>

//         <h2 className="text-lg font-semibold">{product.name}</h2>
//         <p className="text-sm text-gray-500">{product.sub_category}</p>
//         <p className="text-green-600 font-bold mt-1">{product.price}</p>

//         <motion.button
//           ref={btnRef}
//           onMouseMove={handleMove}
//           onMouseLeave={reset}
//           style={{
//             rotateX,
//             rotateY,
//             transformStyle: "preserve-3d",
//           }}
//           whileHover={{ scale: 1.05 }}
//           transition={{ type: "spring", stiffness: 300, damping: 15 }}
//           className="w-full mt-4 py-3 rounded-full font-bold
//                      bg-[#e6b800] text-[#262626]
//                      hover:bg-[#d4a900]"
//           onClick={handleAddToCart}
//         >
//           <span
//             style={{ transform: "translateZ(15px)", display: "inline-block" }}
//           >
//             Add to Cart
//           </span>
//         </motion.button>
//       </div>
//     </div>
//   );
// };

// export default Products;
