import { useLocalStorage } from "../hooks/useLocalStorage";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const { getLocalStorage } = useLocalStorage();
  const userData = getLocalStorage('user');
  return userData?.isLoggedIn ? <Navigate to={"/"} /> : <Outlet />;
};

export default PublicRoutes;
