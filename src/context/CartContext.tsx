import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addToCart,
  deleteCart,
  fetchCart,
  updateCartQuantity,
} from "../services/cart.service";
import toast from "react-hot-toast";

export const CartContext = createContext(null);

type CartDataType = {
  id: number;
  cartId?: number;
  productId?: number;
  productName: string;
  price: number;
  image: string;
  quantity: number;
};
export type AddCartDataType = {
  id?: number;
  quantity?: number;
};
export type UpdateCartDataType = {
  id: number;
  newQuantity: number;
};

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<CartDataType[]>([]);

  const {
    data: cartItems = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cartItem"],
    queryFn: () => fetchCart(),
    refetchOnWindowFocus: false,
    retry: 1,
  });
  useEffect(() => {
    if (cartItems?.length > 0) {
      setCart(cartItems);
    }
  }, [cartItems]);

  const CartAddMutation = useMutation({
    mutationFn: ({ id, quantity }: AddCartDataType) => addToCart(id, quantity),
    onSuccess: (data) => {
      toast.success(data?.message || "Item added to cart sucessfully!");
    },
    onError: (error) => {
      toast.error(error.message || "Error Adding Item to Cart :(");
    },
  });
  const CartUpdateMutation = useMutation({
    mutationFn: ({ id, newQuantity }: UpdateCartDataType) =>
      updateCartQuantity(id, newQuantity),
    onSuccess: (data) => {
      toast.success(data.message || "Cart Updated sucessfully!");
    },
    onError: (error) => {
      toast.error(error.message || "Error adding item to cart");
    },
  });

  const RemoveCartMutation = useMutation({
    mutationFn: (id: number) => deleteCart(id),
    onSuccess: (data) => {
      toast.success(data.message || "Item removed from cart.");
    },
    onError: (error) => {
      toast.error(error.message || "Error removing item.");
    },
  });

  const value = {
    cart,
    setCart,
    isLoading,
    error,
    CartAddMutation,
    CartUpdateMutation,
    RemoveCartMutation,
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
