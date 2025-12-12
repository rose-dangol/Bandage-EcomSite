import React from "react";
import {
  BrandLogos,
  Footer,
  Navbar,
  ProductCard,
  TopDetail,
} from "../../component";

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
    <div>
      <TopDetail />
      <Navbar />
      <ProductCard products={products} />
      <BrandLogos />
      <Footer />
    </div>
  );
};

export default AllProducts;
