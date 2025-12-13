import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
const ProtectedRoutes = () => {
  const { getLocalStorage } = useLocalStorage("user");
  const userData = getLocalStorage();

  return userData?.isLoggedIn ? <Outlet /> : <Navigate to={"/auth"} />;
};

export default ProtectedRoutes;
