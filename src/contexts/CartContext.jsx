import React, { createContext,useState } from 'react'

const CartContext = createContext();

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
      const existingIndex = cart.findIndex((item) => item.id === product.id);
  
      if (existingIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[existingIndex].amount += product.amount;
        setCart(updatedCart);
      } else {
        setCart([...cart, product]);
      }
    };
      const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
      };
    

      
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
    {children}
  </CartContext.Provider>
  )
}

export { CartContext, CartProvider };