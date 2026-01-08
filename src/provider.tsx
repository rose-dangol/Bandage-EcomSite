import { UserProvider } from "./context/UserContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PropsWithChildren } from "react";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";
import Loader from "./hooks/useIsFetching";
import { useScrollToTop } from "./hooks/useScrollToTop";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const Provider = ({ children }: PropsWithChildren) => {
  useScrollToTop();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <WishlistProvider>
            <ReactQueryDevtools initialIsOpen={false} />
            <Toaster position="bottom-center" />
            <Loader />
            <UserProvider>{children}</UserProvider>
          </WishlistProvider>
        </CartProvider>
      </QueryClientProvider>
    </>
  );
};

export default Provider;
