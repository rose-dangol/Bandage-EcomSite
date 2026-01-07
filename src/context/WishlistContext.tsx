import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  fetchWishlist,
  addToWishlist,
  removeWishlist,
} from "../services/wishlist.service";
import toast from "react-hot-toast";
import { queryClient } from "../provider";

export const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }: PropsWithChildren) => {
  const [wishlistCount, setWishlistCount] = useState<number>(0);

  const { data: wishlistItems = [] } = useQuery({
    queryKey: ["wishlistItems"],
    queryFn: () => fetchWishlist(),
    refetchOnWindowFocus: false,
    retry: 1,
  });

  useEffect(() => {
    if (wishlistItems?.length > 0) {
      setWishlistCount(wishlistItems?.length);
    }
  }, [wishlistItems]);

  const AddMutation = useMutation({
    mutationKey: ["wishlistItems"],
    mutationFn: (productId: number) => addToWishlist(productId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["wishlistItems"] });
      toast.success(data.message + "❤️");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const RemoveMutation = useMutation({
    mutationFn: (productId: number) => removeWishlist(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlistItems"] });
      toast.success("Item removed from wish list");
    },
  });

  const value = {
    wishlistItems,
    wishlistCount,
    AddMutation,
    RemoveMutation,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlistContext = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlistContext must be within WishlistProvider");
  }
  return context;
};
