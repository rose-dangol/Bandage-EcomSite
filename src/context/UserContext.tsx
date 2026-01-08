/* eslint-disable react-refresh/only-export-components */

import { createContext, PropsWithChildren, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const UserContext = createContext(null);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const { getLocalStorage } = useLocalStorage();

  const userData = getLocalStorage("userData");
  const authToken = getLocalStorage("authToken");

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const value = {
    userData,
    authToken,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within UserProvider");
  }
  return context;
};
