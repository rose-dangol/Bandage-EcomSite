import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  TextAlignJustify,
  Search,
  Heart,
  User,
  ShoppingCart,
  ChevronDown,
  LogOut,
} from "lucide-react";
import { useUserContext } from "../../context/UserContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  const [search, setSearch] = useState(false);

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
                  <Link className="block px-4 py-2 hover:bg-gray-50">
                    Women
                  </Link>
                  <Link className="block px-4 py-2 hover:bg-gray-50">Men</Link>
                </div>
              )}
            </div>
            <Link to={"/about"}>About</Link>
            <Link>Blog</Link>
            <Link>Contact</Link>
            <Link>Pages</Link>
          </div>
        </div>

        {/* right side */}
        <div className="flex gap-5 links text-primary">
          <div className="hidden md:flex items-center gap-1.5">
            {loggedUser?.isLoggedIn ? (
              <span className="text-[#252B42] text-lg">
                {loggedUser?.email}
              </span>
            ) : (
              <>
                <span>
                  <User size={"20px"} />
                </span>
                <Link to={"/auth"}>Login / Register</Link>
              </>
            )}
          </div>
          <div className="flex gap-4 items-center">
            <span className="cursor-pointer">
              <Search size={"20px"} />
            </span>
            <span className="cursor-pointer">
              <ShoppingCart size={"20px"} />
            </span>
            <span className="cursor-pointer">
              <Heart size={"20px"} />
            </span>
            {loggedUser?.isLoggedIn ? (
              <span>
                <LogOut
                  size={"20px"}
                  className="cursor-pointer hover:text-red-500"
                  onClick={logout}
                />
              </span>
            ) : (
              <></>
            )}
            <span
              className="inline md:hidden hover:bg-gray-100"
              onClick={() => setMobileView(!mobileView)}
            >
              <TextAlignJustify size={"16px"} />
            </span>
          </div>
        </div>
      </div>
      {mobileView && (
        <div className="mobile-menu flex flex-col gap-3 justify-center items-center text-grayText p-7">
          <Link>Home</Link>
          <Link>Product</Link>
          <Link>Pricing</Link>
          <Link>Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
