import { useMutation, useQuery,} from "@tanstack/react-query";
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
  const [wishlist, setWishlist] = useState([]);
  const [wishlistCount, setWishlistCount] = useState<number>(0);

  const { data: wishlistItem = [] } = useQuery({
    queryKey: ["wishlistItem"],
    queryFn: () => fetchWishlist(),
    refetchOnWindowFocus:false,
    retry: 1,
  });
  
  useEffect(() => {
    if (wishlistItem?.length > 0) {
      setWishlist(wishlistItem);
      setWishlistCount(wishlistItem?.length);
    }
  }, [wishlistItem]);

  const AddMutation = useMutation({
    mutationKey: ["wishlistItem"],
    mutationFn: (productId: number) => addToWishlist(productId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({queryKey:["wishlistItem"]})
      toast.success(data.message + "❤️");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const RemoveMutation = useMutation({
    mutationFn: (productId: number) => removeWishlist(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlistItem"] });
      toast.success("Item removed from swishlist");
    },
  });

  const value = {
    wishlistItem,
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
