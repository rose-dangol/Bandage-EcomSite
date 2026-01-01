import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  getWishlist,
  addToWishlist,
  removeWishlist,
} from "../services/wishlist.service";
import toast from "react-hot-toast";

export const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }: PropsWithChildren) => {
  const [wishlist, setWishlist] = useState([]);
  const [wishlistCount, setWishlistCount] = useState<number>(0);

  const queryClient = useQueryClient();

  const { data: wishlistItem = [] } = useQuery({
    queryKey: ["wishlistItem"],
    queryFn: () => getWishlist(),
  });

  const AddMutation = useMutation({
    mutationKey: ["wishlistItem"],
    mutationFn: (productId: number) => addToWishlist(productId),
    onSuccess: (data) => {
      toast.success(data.message + "❤️");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  useEffect(() => {
    if (wishlistItem?.length>0) {
      setWishlist(wishlistItem);
      setWishlistCount(wishlistItem?.length);
    }
  }, [wishlistItem]);

  const RemoveMutation = useMutation({
    mutationFn: (productId: number) => removeWishlist(productId),
    onSuccess: () => {
      toast.success("Item removed from swishlist");
      queryClient.invalidateQueries({ queryKey: ["wishlistItem"] });
    },
  });

  const value = {
    wishlist,
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
