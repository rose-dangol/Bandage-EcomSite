/* eslint-disable react-refresh/only-export-components */

import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

// const initialValue = () => {
//   const loggedUser = getLocalStorage("user");
//   return loggedUser?.isLoggedIn
//     ? loggedUser
//     : {
//         email: "",
//         password: "",
//         isLoggedIn: false,
//       };
// };

export const UserContext = createContext(null);

export const UserProvider = ({ children }:PropsWithChildren) => {
  const { setLocalStorage, getLocalStorage } = useLocalStorage();
  const [user, setUser] = useState(() => {
    const loggedUser = getLocalStorage("user");
    return loggedUser?.isLoggedIn
      ? loggedUser
      : {
          email: "",
          password: "",
          isLoggedIn: false,
        };
  });
  const login = (email:string, password: string) => {
    const userData = {
      ...user,
      email: email,
      password: password,
      isLoggedIn: true,
    };
    setUser(userData);
    setLocalStorage("user", userData);
  };
  const logout = () => {
    const clearUser = {
      ...user,
      email: "",
      password: "",
      isLoggedIn: false,
    };
    setUser(clearUser);
    setLocalStorage("user", JSON.stringify(clearUser));
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
