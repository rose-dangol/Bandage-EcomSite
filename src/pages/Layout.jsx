import { Outlet } from "react-router-dom";
import { TopDetail, Footer, Navbar } from "../component";

const Layout = () => {
  return (
    <>
      <TopDetail />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
