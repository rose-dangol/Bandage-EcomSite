import React from "react";
import { UserProvider } from "./context/UserContext";

const Provider = ({ children }) => {
  return (
    <>
      <UserProvider>{children}</UserProvider>
    </>
  );
};

export default Provider;
