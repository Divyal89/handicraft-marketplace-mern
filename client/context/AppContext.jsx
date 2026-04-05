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
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedHandcraft, setSelectedHandcraft] = useState(true);
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
      toast.success("Product added to Cart ");

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
  const removeFromCart = async (id) => {
    const res = await fetch("http://localhost:5000/api/remove-from-cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, id }),
    });

    let updatedCart = await res.json();
    updatedCart = updatedCart.map((item) => ({ ...item, id: item.id }));

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

// import { createContext, useState } from "react";
// import { toast } from "react-toastify";

// export const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const [selectedHandcraft, setSelectedHandcraft] = useState(true);
//   const [selectedWoodentoy, setSelectedwoodentoy] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(false);
//   const [cart, setCart] = useState([]);

//   const userId = localStorage.getItem("userId");

//   // ADD TO CART
//   const addToCart = async (product) => {
//     try {
//       const newProduct = {
//         id: product._id || product.id,
//         name: product.name,
//         price: product.price,
//         image: product.image,
//         manufacturer: product.manufacturer,
//         sellerId: product.sellerId,
//       };

//       const res = await fetch("http://localhost:5000/api/add-to-cart", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           userId,
//           product: newProduct,
//         }),
//       });

//       const updatedCart = await res.json();

//       if (res.ok) {
//         setCart(updatedCart);
//         toast.success("Product added to cart");
//       } else {
//         toast.error(updatedCart.message || "Failed to add product");
//       }
//     } catch (error) {
//       console.log("ADD TO CART ERROR:", error);
//       toast.error("Something went wrong");
//     }
//   };

//   // REMOVE FROM CART
//   const removeFromCart = async (id) => {
//     try {
//       const res = await fetch("http://localhost:5000/api/remove-from-cart", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ userId, id }),
//       });

//       const updatedCart = await res.json();

//       if (res.ok) {
//         setCart(updatedCart);
//         toast.success("Product removed from cart");
//       } else {
//         toast.error(updatedCart.message || "Failed to remove product");
//       }
//     } catch (error) {
//       console.log("REMOVE FROM CART ERROR:", error);
//       toast.error("Something went wrong");
//     }
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
