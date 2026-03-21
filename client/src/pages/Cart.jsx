// import React, { useContext } from "react";
// import Navbar from "../components/Navbar";
// import { AppContext } from "../../context/AppContext";

// const Cart = () => {
//   const { cart, removeFromCart } = useContext(AppContext);

//   if (cart.length === 0) {
//     return <h2 className="text-center ">Your cart is empty 🛒</h2>;
//   }
//   return (
//     <div>
//       <Navbar />
//       <div className=" pt-[9vh] pl-[2vh]">
//         {cart.map((item) => (
//           <div key={item.id} className="flex gap-4 border-b py-4">
//             <img src={item.image} className="w-20 h-20 object-cover" />
//             <div className="flex-1">
//               <h3>{item.name}</h3>
//               <p>{item.price}</p>
//               <p>Qty: {item.qty}</p>
//             </div>
//             <button
//               onClick={() => removeFromCart(item.id)}
//               className="text-red-600 pr-[3vh]"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cart;

// import React, { useContext } from "react";
// import Navbar from "../components/Navbar";
// import { AppContext } from "../../context/AppContext";

// const Cart = () => {
//   const { cart, removeFromCart } = useContext(AppContext);

//   if (cart.length === 0) {
//     return (
//       <>
//         <Navbar />
//         <h2 className="text-center pt-[10vh]">Your cart is empty 🛒</h2>
//       </>
//     );
//   }

//   return (
//     <div>
//       <Navbar />

//       <div className="pt-[9vh] pl-[2vh]">
//         {cart.map((item) => (
//           <div key={item.id} className="flex gap-4 border-b py-4">
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-20 h-20 object-cover"
//             />

//             <div className="flex-1">
//               <h3>{item.name}</h3>
//               <p>₹{item.price}</p>
//               <p>Qty: {item.qty}</p>
//             </div>

//             <button
//               onClick={() => removeFromCart(item.id)}
//               className="text-red-600 pr-[3vh]"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useContext(AppContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <div className="flex flex-col items-center justify-center pt-[10vh]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Your cart is empty 🛒
          </h2>
          <p className="text-gray-600">Start exploring our handicrafts now!</p>
        </div>
      </>
    );
  }

  return (
    <div className="bg-[#F9F6F2] min-h-screen ">
      <Navbar />

      <div className="pt-[12vh] px-4 md:px-24 ">
        <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center gap-4 bg-white rounded-lg shadow-md p-4 mb-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-28 h-28 object-cover rounded-md"
            />

            <div className="flex-1">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-700 mt-1">Price: {item.price}</p>
              <p className="text-gray-700">Quantity: {item.qty}</p>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="mt-2 md:mt-0 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Remove
            </button>
            <Link
              to="/Seller_payment"
              className="mt-2 md:mt-0 bg-[#e4a220]  text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition"
            >
              Buy
            </Link>
          </div>
        ))}

        {/* Total & Checkout */}
      </div>
    </div>
  );
};

export default Cart;
