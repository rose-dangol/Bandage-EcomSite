import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  TextAlignJustify,
  Heart,
  ShoppingCart,
  ChevronDown,
  LogOut,
  UserRound,
} from "lucide-react";
import { useUserContext } from "../../context/UserContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import { useWishlistContext } from "../../context/WishlistContext";
import { useCartContext } from "../../context/CartContext";

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [isFilled, setIsFilled] = useState(false);
  const [userShow, setUserShow] = useState(false);

  const { getLocalStorage } = useLocalStorage();
  const { cart } = useCartContext();
  const { wishlistCount } = useWishlistContext();

  const authToken = JSON.parse(localStorage.getItem("authToken"));
  const userData = getLocalStorage("userData");

  const { logout } = useUserContext();

  return (
    <div className="text-md w-full sticky top-0 z-500 bg-white/90">
      <div className="p-6 flex justify-between items-center">
        {/* left side: LOGO + LINKS */}
        <div className="flex items-center md:justify-start justify-between gap-30">
          <Link to={"/"} className="heading-3 text-blueBlack">
            Bandage
          </Link>
          <div className="hidden lg:flex gap-3 links text-grayText">
            <Link className="" to={"/"}>
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <Link className="flex items-center" to={"/shop"}>
                Shop
                <ChevronDown size={"16px"} />
              </Link>
              {isOpen && (
                <div className="absolute top-full left-0 bg-white border border-gray-200 rounded shadow-lg w-40 z-50">
                  <Link
                    className="block px-4 py-2 hover:bg-gray-50"
                    to={"/shop"}
                  >
                    All
                  </Link>
                  <Link to={""} className="block px-4 py-2 hover:bg-gray-50">
                    Women
                  </Link>
                  <Link to={""} className="block px-4 py-2 hover:bg-gray-50">
                    Men
                  </Link>
                </div>
              )}
            </div>
            <Link to={"/about"}>About</Link>
            <Link to={"/updateProduct"}>Add</Link>
            <Link to={"/about"}>Contact</Link>
            <Link to={"/allpage"}>Pages</Link>
          </div>
        </div>

        {/* right side */}
        <div className="flex gap-5 links text-primary">
          <div className="hidden md:flex items-center gap-1.5">
            {authToken ? (
              <>
                <div
                  className="relative inline-block"
                  onMouseEnter={() => setUserShow(true)}
                  onMouseLeave={() => setUserShow(false)}
                >
                  <UserRound
                    size="20px"
                    className="hover:text-secondary cursor-pointer"
                  />

                  {userShow && (
                    <span className="absolute top-full -left-10 mt-2 text-blueBlack bg-gray-100 p-2 paragraph">
                      {userData.name}
                    </span>
                  )}
                </div>
              </>
            ) : (
              <Link to="/auth">Login / Register</Link>
            )}
          </div>
          {authToken && (
            <div className="flex gap-4 items-center relative">
              {/* <span className="cursor-pointer">
              <Search size={"20px"} />
            </span> */}
              <span
                className="cursor-pointer relative"
                onClick={() => navigate("/cart")}
              >
                <ShoppingCart size="20px" className="hover:text-secondary" />
                <div className="absolute -top-2 -right-1 bg-white text-primary rounded-full flex items-center justify-center text-xs font-bold">
                  {cart.length}
                </div>
              </span>
              <span
                className="cursor-pointer relative"
                onClick={() => navigate("/wishlist")}
              >
                <Heart
                  size="20px"
                  fill={isFilled ? "currentColor" : "none"}
                  className="cursor-pointer transition"
                  onMouseEnter={() => setIsFilled(true)}
                  onMouseLeave={() => setIsFilled(false)}
                />
                <div className="absolute -top-2 -right-1 bg-white text-primary rounded-full flex items-center justify-center text-xs font-bold">
                  {wishlistCount}
                </div>
              </span>
              <span>
                <LogOut
                  size={"20px"}
                  className="cursor-pointer hover:text-red-500"
                  onClick={logout}
                />
              </span>
              <span
                className="inline lg:hidden hover:bg-gray-100 cursor-pointer"
                onClick={() => setMobileView(!mobileView)}
              >
                <TextAlignJustify size={"16px"} />
              </span>
            </div>
          )}
        </div>
      </div>
      {mobileView && (
        <div className="mobile-menu flex flex-col gap-3 justify-center items-center text-grayText p-7">
          <Link to={"/"}>Home</Link>
          <Link to={"/shop"}>Product</Link>
          <Link to={"/updateProduct"}>Add</Link>
          <Link to={"/about"}>AboutUs</Link>
          <Link to={"/allpage"}>Pages</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
