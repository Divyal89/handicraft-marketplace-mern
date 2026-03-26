// import { createContext, useState } from "react";

// export const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const [selectedHandcraft, setSelectedHandcraft] = useState(false);
//   const [selectedWoodentoy, setSelectedwoodentoy] = useState(false);
//   // --------------------shown all  Product----------------
//   const [selectedProduct, setSelectedProduct] = useState(false);

//   // 🛒 CART STATE (NEW)
//   const [cart, setCart] = useState([]);

//   // ➕ ADD TO CART
//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const exists = prevCart.find((item) => item._id === product._id);

//       if (exists) {
//         return prevCart.map((item) =>
//           item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
//         );
//       }

//       return [...prevCart, { ...product, qty: 1 }];
//     });
//   };

//   // ❌ REMOVE FROM CART
//   const removeFromCart = (id) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };

//   return (
//     <AppContext.Provider
//       value={{
//         selectedHandcraft,
//         setSelectedHandcraft,
//         selectedWoodentoy,
//         setSelectedwoodentoy,
//         selectedProduct,
//         setSelectedProduct,
//         cart,
//         setCart,
//         addToCart,
//         removeFromCart,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedHandcraft, setSelectedHandcraft] = useState(false);
  const [selectedWoodentoy, setSelectedwoodentoy] = useState(false);
  //   // --------------------shown all  Product----------------
  const [selectedProduct, setSelectedProduct] = useState(false);
  const [cart, setCart] = useState([]);

  // userId should come from login
  const userId = localStorage.getItem("userId");

  // ADD TO CART
  const addToCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);

      if (exists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }

      // 🔥 This keeps manufacturer automatically
      return [...prevCart, { ...product, qty: 1 }];
    });
  }; // ✅ THIS WAS MISSING
  // REMOVE FROM CART
  const removeFromCart = async (productId) => {
    const res = await fetch("http://localhost:5000/api/remove-from-cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, productId }),
    });

    let updatedCart = await res.json();
    updatedCart = updatedCart.map((item) => ({ ...item, id: item.productId }));

    setCart(updatedCart);
  };
  return (
    <AppContext.Provider
      value={{
        selectedHandcraft,
        setSelectedHandcraft,
        selectedWoodentoy,
        setSelectedwoodentoy,
        selectedProduct,
        setSelectedProduct,
        cart,
        setCart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
