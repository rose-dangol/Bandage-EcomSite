import React from "react";
import { UserProvider } from "./context/UserContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();
const Provider = ({ children }) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster position="bottom-center" />
        <UserProvider>{children}</UserProvider>
      </QueryClientProvider>
    </>
  );
};

export default Provider;
