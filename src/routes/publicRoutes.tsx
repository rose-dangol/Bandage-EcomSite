import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const { getLocalStorage } = useLocalStorage("user");
  const userData = getLocalStorage();
  return userData?.isLoggedIn ? <Navigate to={"/"} /> : <Outlet />;
};

export default PublicRoutes;
