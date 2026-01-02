import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import {
  AddToCart,
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

  const queryClient = new QueryClient();

  const { data: cartItems = [], isLoading, error} = useQuery({
    queryKey: ["cartItem"],
    queryFn: () => fetchCart(),
    refetchOnWindowFocus: false,
  });
  useEffect(() => {
    if (cartItems?.length > 0) {
      setCart(cartItems);
    }
  }, [cartItems]);

  const CartAddMutation = useMutation({
    mutationFn: ({ id, quantity }: AddCartDataType) => AddToCart(id, quantity),
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

  const value = {
    cart,
    setCart,
    isLoading,
    error,
    CartAddMutation,
    CartUpdateMutation,
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
