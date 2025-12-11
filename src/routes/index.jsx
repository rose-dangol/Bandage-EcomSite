import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./protectedRoutes";
import { Auth, Landing, AllProducts } from "../pages";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/" element={<Landing />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/shop" element={<AllProducts />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
