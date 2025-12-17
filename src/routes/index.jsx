import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./protectedRoutes";
import {
  Auth,
  AboutUs,
  Landing,
  AllProducts,
  Layout,
  ProductDetail,
} from "../pages";
import PublicRoutes from "./publicRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/auth" element={<Auth />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/shop" element={<AllProducts />} />
          <Route path="/products/:id/" element={<ProductDetail />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
