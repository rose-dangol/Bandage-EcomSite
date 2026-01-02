import { UserProvider } from "./context/UserContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PropsWithChildren } from "react";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";

const queryClient = new QueryClient();

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <WishlistProvider>
            <ReactQueryDevtools initialIsOpen={false} />
            <Toaster position="bottom-center" />
            <UserProvider>{children}</UserProvider>
          </WishlistProvider>
        </CartProvider>
      </QueryClientProvider>
    </>
  );
};

export default Provider;
