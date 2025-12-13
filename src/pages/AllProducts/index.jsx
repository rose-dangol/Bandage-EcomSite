import React from "react";
import {
  BrandLogos,
  Footer,
  Navbar,
  ProductCard,
  ShopCard,
  TopDetail,
} from "../../component";
import { LayoutGrid, ListChecks } from "lucide-react";

const AllProducts = () => {
  const products = [
    {
      id: 1,
      image: "/images/product1.jpg",
      title: "Graphic Design",
      description: "English Department",
      price: 29.99,
    },
    {
      id: 2,
      image: "/images/product2.jpg",
      title: "Graphic Design",
      description: "English Department",
      price: 49.99,
    },
    {
      id: 3,
      image: "/images/product3.jpg",
      title: "Graphic Design",
      description: "English Department",
      price: 49.99,
    },
    {
      id: 4,
      image: "/images/product4.jpg",
      title: "Graphic Design",
      description: "English Department",
      price: 49.99,
    },
    {
      id: 5,
      image: "/images/product5.jpg",
      title: "Graphic Design",
      description: "English Department",
      price: 49.99,
    },
    {
      id: 6,
      image: "/images/product1.jpg",
      title: "Graphic Design",
      description: "English Department",
      price: 49.99,
    },
    {
      id: 7,
      image: "/images/product6.jpg",
      title: "Graphic Design",
      description: "English Department",
      price: 129.0,
    },
    {
      id: 8,
      image: "/images/product7.jpg",
      title: "Graphic Design",
      description: "English Department",
      price: 129.0,
    },
    {
      id: 9,
      image: "/images/product8.jpg",
      title: "Graphic Design",
      description: "English Department",
      price: 129.0,
    },
    {
      id: 10,
      image: "/images/product9.jpg",
      title: "Graphic Design",
      description: "English Department",
      price: 129.0,
    },
  ];
  return (
    <div className="container">
      <div className="max-w-7xl mx-auto">
        <TopDetail />
        <Navbar />
        <ShopCard />
        <div className="py-5 flex justify-around">
          <span className="heading-6 text-grayText">
            Showing all 12 results
          </span>
          <div className="flex gap-[15px] items-center">
            <span className="heading-6 text-grayText">Views:</span>
            <div className="border-[#ececec] border-2 p-2 rounded">
              <LayoutGrid fill="blueBlack" />
            </div>
            <div className="border-[#ececec] border-2 p-2 rounded">
              <ListChecks color="grayText" />
            </div>
          </div>
          <div className="flex gap-1.5">
            <select className="border-[#dddddd] border-2 rounded bg-[#f9f9f9] p-2">
              <option>Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <button className="heading-6 bg-primary text-white px-3 py-3.5 rounded">
              Filter
            </button>
          </div>
        </div>
        <ProductCard products={products} />
        <BrandLogos />
        <Footer />
      </div>
    </div>
  );
};

export default AllProducts;
