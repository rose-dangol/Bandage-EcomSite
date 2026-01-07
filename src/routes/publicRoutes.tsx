import { useUserContext } from "../context/UserContext";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const { userData } = useUserContext();

  return userData ? <Navigate to={"/"} /> : <Outlet />;
};

export default PublicRoutes;
