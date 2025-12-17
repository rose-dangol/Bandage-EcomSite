import { Route, Routes } from "react-router-dom";
import { Landing } from "./pages";
import AppRoutes from "./routes";
import Provider from "./provider";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <AppRoutes />
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
