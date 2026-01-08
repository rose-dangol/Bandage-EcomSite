import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
const ProtectedRoutes = () => {
  const { authToken } = useUserContext();

  return authToken ? <Outlet /> : <Navigate to={"/auth"} />;
};

export default ProtectedRoutes;
