import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./protectedRoutes";
import { Auth, Landing, AllProducts } from "../pages";
import PublicRoutes from "./publicRoutes";
import AboutUs from "../pages/AboutUs";
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
