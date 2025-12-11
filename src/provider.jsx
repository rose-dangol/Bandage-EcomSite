import React from "react";
import { UserProvider } from "./context/UserContext";

const Provider = ({ children }) => {
  return (
    <div>
      <UserProvider>{children}</UserProvider>
    </div>
  );
};

export default Provider;
