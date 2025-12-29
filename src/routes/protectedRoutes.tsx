import { Outlet, Navigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
const ProtectedRoutes = () => {
  const { getLocalStorage } = useLocalStorage();
  const userData = getLocalStorage("user");

  return userData?.isLoggedIn ? <Outlet /> : <Navigate to={"/auth"} />;
};

export default ProtectedRoutes;
