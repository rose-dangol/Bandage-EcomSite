import { createContext, PropsWithChildren, useContext, useState } from "react";
import api from "../axios/apiClient";

export const CartContext = createContext(null);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    const response = await api.get("cart/");
    return response.data.data;
  };
  const updateCartQuantity = async (productId: number, newQuantity: number)=>{
    setCart(cart.map(item=>
      item.id ===productId?{...item, quantity: newQuantity}: item
    ))
  }
  const addToCart = () => {};
  const removeFromCart = () => {};
  const clearCart = () => {
    setCart([]);
  };

  const value = {
    cart,
    fetchCart,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    clearCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be within CartProvider");
  }
  return context;
};
