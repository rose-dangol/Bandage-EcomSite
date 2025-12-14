import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./protectedRoutes";
import { Auth, AboutUs, Landing, AllProducts } from "../pages";
import PublicRoutes from "./publicRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/auth" element={<Auth />} />
      </Route>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<AboutUs />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/shop" element={<AllProducts />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
