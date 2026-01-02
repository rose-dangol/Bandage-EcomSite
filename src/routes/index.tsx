import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./protectedRoutes";
import {
  Auth,
  AboutUs,
  Landing,
  AllProducts,
  Layout,
  ProductDetail,
  Cart,
  Wishlist,
  CreateProduct,
  Checkout,
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
          <Route path="/shop/products/:id/" element={<ProductDetail />} />
          <Route path="/updateProduct/:id?" element={<CreateProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
