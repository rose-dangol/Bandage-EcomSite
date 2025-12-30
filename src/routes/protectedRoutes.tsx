import { Outlet, Navigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
const ProtectedRoutes = () => {
  const { getLocalStorage } = useLocalStorage();
  const authToken = getLocalStorage("authToken");

  return authToken? <Outlet /> : <Navigate to={"/auth"} />;
};

export default ProtectedRoutes;
