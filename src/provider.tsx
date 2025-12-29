import { UserProvider } from "./context/UserContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ContainerProps } from "./component/Container";

const queryClient = new QueryClient();

const Provider = ({ children }:ContainerProps) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster position="bottom-center" />
        <UserProvider>{children}</UserProvider>
      </QueryClientProvider>
    </>
  );
};

export default Provider;
