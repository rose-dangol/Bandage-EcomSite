import React, { useEffect, useState } from "react";
import {
  BrandLogos,
  Container,
  Footer,
  Navbar,
  Pagination,
  ProductCard,
  ShopCard,
  TopDetail,
} from "../../component";
import { LayoutGrid, ListChecks, Signal } from "lucide-react";
// import apiClient, { jsonPlaceholderClient } from "../../apiClient";
import api from "../../apiClient";

const AllProducts = () => {
  // const [viewType, setViewType] = useState("grid");

  const [products, setProducts] = useState([]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  useEffect(() => {
    const fetchProducts = async () => {
      const controller = new AbortController();
      const timeOut = setTimeout(() => {
        controller.abort();
      }, 10);
      try {
        const response = await api.get("products/", {
          signal: controller.signal,
        });
        clearTimeout(timeOut);
        const actualData = response.data.data;
        setProducts(actualData);
      } catch (error) {
        if (error.name == "AbortError") {
          console.error("Request Timed Out.");
          return;
        }
        console.error(error.message);
      }
      //response-> {data: {…}, status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}..}
      //ani response.data-> {data:actual data array, meta, etc}  soo actual data= response.data.data
    };
    fetchProducts();
  }, []);
  console.log(products);
  {
    /*
    const getProducts = async () => {
      const response = await jsonPlaceholderClient.get("/posts");
      console.log(response.data);
    };
    getProducts();
  
    */
  }

  const Allproducts = [
    {
      id: 1,
      image: "/images/AllProduct/image-1.jpg",
      title: "Graphic Design",
      description: "English Department",
      price: 29.99,
      salePrice: 19.99,
      availableColors: ["blue", "red", "yellow", "green"],
    },
    {
      id: 2,
      image: "/images/AllProduct/image-2.jpg",
      title: "Web Development",
      description: "Computer Science",
      price: 39.99,
      salePrice: 24.99,
      availableColors: ["blue", "green", "yellow", "red"],
    },
    {
      id: 3,
      image: "/images/AllProduct/image-3.jpg",
      title: "UI/UX Design",
      description: "Design Basics",
      price: 34.99,
      salePrice: 22.99,
      availableColors: ["red", "blue", "green"],
    },
    {
      id: 4,
      image: "/images/AllProduct/image-4.jpg",
      title: "Mobile App Dev",
      description: "React Native Course",
      price: 44.99,
      salePrice: 29.99,
      availableColors: ["yellow", "blue", "red"],
    },
    {
      id: 5,
      image: "/images/AllProduct/image-5.jpg",
      title: "Data Science",
      description: "Python & Analytics",
      price: 49.99,
      salePrice: 34.99,
      availableColors: ["green", "red", "yellow"],
    },
    {
      id: 6,
      image: "/images/AllProduct/image-6.jpg",
      title: "Cloud Computing",
      description: "AWS Fundamentals",
      price: 54.99,
      salePrice: 39.99,
      availableColors: ["blue", "yellow", "green"],
    },
    {
      id: 7,
      image: "/images/AllProduct/image-7.jpg",
      title: "Cybersecurity",
      description: "Network Security",
      price: 59.99,
      salePrice: 44.99,
      availableColors: ["red", "blue", "yellow"],
    },
    {
      id: 8,
      image: "/images/AllProduct/image-8.jpg",
      title: "Machine Learning",
      description: "AI & Deep Learning",
      price: 64.99,
      salePrice: 49.99,
      availableColors: ["green", "blue", "red"],
    },
    {
      id: 9,
      image: "/images/AllProduct/image-9.jpg",
      title: "Frontend Mastery",
      description: "HTML, CSS, JavaScript",
      price: 39.99,
      salePrice: 26.99,
      availableColors: ["yellow", "green", "blue"],
    },
    {
      id: 10,
      image: "/images/AllProduct/image-10.jpg",
      title: "Backend Engineering",
      description: "Node.js & Express",
      price: 44.99,
      salePrice: 31.99,
      availableColors: ["red", "yellow", "green"],
    },
    {
      id: 11,
      image: "/images/AllProduct/image-11.jpg",
      title: "Database Design",
      description: "SQL & MongoDB",
      price: 34.99,
      salePrice: 23.99,
      availableColors: ["blue", "red", "green"],
    },
    {
      id: 12,
      image: "/images/AllProduct/image-12.jpg",
      title: "DevOps Essentials",
      description: "Docker & Kubernetes",
      price: 54.99,
      salePrice: 41.99,
      availableColors: ["green", "yellow", "blue"],
    },
  ];

  return (
    <div className="w=full">
      <Container>
        <ShopCard />
        <div className="py-6 flex justify-between items-center lg:flex-row flex-col gap-6">
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
            <button className="heading-6 btn-transitions bg-primary hover:bg-secondary text-white px-3 py-3.5 rounded">
              Filter
            </button>
          </div>
        </div>
        <div className="">
          <ProductCard products={Allproducts} />
          <Pagination />
        </div>
        <BrandLogos />
      </Container>
    </div>
  );
};

export default AllProducts;
