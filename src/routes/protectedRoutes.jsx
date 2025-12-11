import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoutes = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  return userData?.isLoggedIn ? <Outlet /> : <Navigate to={"/auth"} />;
};

export default ProtectedRoutes;
