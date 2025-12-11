import { createContext, useContext, useState } from "react";
import { Navigate } from "react-router-dom";

const initialValue = () => {
  const loggedUser = localStorage.getItem("user");
  return loggedUser?.isLoggedIn
    ? loggedUser
    : {
        email: "",
        password: "",
        isLoggedIn: false,
      };
};

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialValue);
  const login = (email, password) => {
    const userData = {
      ...user,
      email: email,
      password: password,
      isLoggedIn: true,
    };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };
  const logout = () => {
    const clearUser = {
      ...user,
      email: "",
      password: "",
      isLoggedIn: false,
    };
    setUser(clearUser);
    localStorage.setItem("user", JSON.stringify(clearUser));
  };
  const value = {
    user,
    login,
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
