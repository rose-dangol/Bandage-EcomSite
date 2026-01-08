import { Container } from "../../component";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const PageList = () => {
  const PAGE_LIST = [
    { name: "Home", path: "/" },
    { name: "Auth", path: "/auth" },
    { name: "About Us", path: "/about" },
    { name: "All Products", path: "/shop" },
    { name: "Category Page", path: "/shop/products?categoryId=9" },
    { name: "Product Details", path: "/shop/products/1" },
    { name: "Create Product", path: "/updateProduct" },
    { name: "Update Product", path: "/updateProduct/1" },
    { name: "Cart", path: "/cart" },
    { name: "Wishlist", path: "/wishlist" },
    { name: "Checkout", path: "/checkout" },
  ];

  return (
    <Container>
      <div className="p-12">
        <h1 className="heading-2 text-blueBlack mb-12">Site Pages</h1>

        <div className="flex flex-col gap-6">
          <h2 className="heading-3 text-blueBlack font-bold">All Pages</h2>
          <div className="space-y-3">
            {PAGE_LIST.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="flex items-center gap-2 text-gray-700 hover:text-primary transition duration-300 group"
              >
                <ChevronRight
                  size={18}
                  className="text-gray-400 group-hover:text-primary transition"
                />
                <span className="font-medium">{page.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PageList;
