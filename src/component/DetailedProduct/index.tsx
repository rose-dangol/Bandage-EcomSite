import React from "react";
import {
  Heart,
  Eye,
  ShoppingCart,
  Download,
  Star,
  ChevronRight,
} from "lucide-react";
import { getLayoutClass } from "../../utils/helper";
import Container from "../Container";

const PRODUCT_DATA = [
  {
    id: 1,
    image: "/images/featured1.jpg",
    department: "English Department",
    title: "Graphic Design",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    rating: 4.9,
    sales: 15,
    price: 6.4,
    colors: [
      { name: "Blue", value: "#3B82F6" },
      { name: "Red", value: "#EF4444" },
      { name: "Green", value: "#22C55E" },
      { name: "Yellow", value: "#EAB308" },
    ],
  },
  {
    id: 2,
    department: "Chinese Department",
    image: "/images/featured2.jpg",
    title: "Web Development",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    rating: 4.9,
    sales: 17,
    price: 16.4,
    colors: [
      { name: "Blue", value: "#3B82F6" },
      { name: "Green", value: "#22C55E" },
      { name: "Red", value: "#EF4444" },
      { name: "Black", value: "#EAB308" },
    ],
  },
];

const DetailedProduct = () => {
  return (
    <div className={`${getLayoutClass()}`}>
      <div className="flex flex-col items-center justify-center gap-10 ">
        <div className="flex flex-col gap-2.5 text-center max-w-sm">
          <span className="heading-6 text-primary">Practice Advice</span>
          <span className="heading-2 md:tracking-[0.2px] tracking-tight text-blueBlack">
            Featured Posts
          </span>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto gap-8">
          {PRODUCT_DATA.map((product) => (
            <div
              className="flex md:flex-row flex-col gap-3 relative"
              key={product.id}
            >
              <div className="h-auto w-auto relative">
                <img
                  src={product.image}
                  alt="product1"
                  className="object-cover h-full w-full"
                />
              </div>
              {/* sale */}
              <div className=" heading-6 absolute top-5 left-5 bg-[#e74040] text-white py-1 px-3 rounded">
                Sale!
              </div>
              {/* option icons */}
              <div className="hidden md:flex flex-row gap-5 justify-center items-center absolute bottom-8 left-10">
                <div className="bg-white rounded-full h-10 w-10 p-2">
                  <Heart className="object-cover h-full w-full" />
                </div>
                <div className="bg-white rounded-full h-10 w-10 p-2">
                  <ShoppingCart />
                </div>
                <div className="bg-white rounded-full h-10 w-10 p-2">
                  <Eye />
                </div>
              </div>
              {/* product details */}
              <div className="flex flex-col gap-4 text-left md:w-[75%] rounded p-5 justify-center">
                <div className="hidden md:flex justify-between items-start gap-4">
                  <div className="md:flex-1 md:inline">
                    <span className="links text-primary">
                      {product.department}
                    </span>
                  </div>
                  {/* rating */}
                  <div className="md:flex items-center gap-1 bg-gray-900 text-sm rounded-2xl text-white px-3 py-1">
                    <img src="/images/rating-star.png" alt="product-rating" />
                    <span className="md:inline font-semibold text-sm">
                      {product.rating}
                    </span>
                  </div>
                </div>

                <span className="heading-4 md:heading-6 text-blueBlack">
                  {product.title}
                </span>
                <span className="paragraph text-grayText">
                  {product.description}
                </span>

                <div className="hidden md:flex gap-6 text-sm text-gray-700">
                  <div className="flex items-center gap-1">
                    <Download size={16} className="text-gray-500" />
                    <span className="heading-6 text-grayText">
                      {product.sales} Sales
                    </span>
                  </div>
                </div>
                <div className="hidden md:flex gap-3">
                  <div className="heading-5 text-mutedText">
                    ${product.price}
                  </div>
                  <div className="heading-5 text-[#23856d]">
                    ${product.price}
                  </div>
                </div>
                <div className="hidden md:flex gap-3 pt-2">
                  <div className="w-5 h-5 rounded-full bg-blue-500 border-2 border-blue-600 cursor-pointer"></div>
                  <div className="w-5 h-5 rounded-full bg-red-500 border-2 border-gray-300 cursor-pointer hover:border-red-600"></div>
                  <div className="w-5 h-5 rounded-full bg-green-500 border-2 border-gray-300 cursor-pointer hover:border-green-600"></div>
                  <div className="w-5 h-5 rounded-full bg-yellow-500 border-2 border-gray-300 cursor-pointer hover:border-yellow-600"></div>
                </div>

                <div className="flex gap-3 items-center">
                  <img src="/images/icon1.png" alt="clock-icon" />
                  <span
                    className="text-xs text-grayText truncate w-8"
                    title="22h of lecture is heresud"
                  >
                    22h of lecture is heresud
                  </span>
                  <img
                    src="/images/icon2.png"
                    alt="lesson-icon"
                    className="hidden md:inline"
                  />
                  <span className="text-xs text-grayText hidden md:inline">
                    64 Lessons
                  </span>
                  <img src="/images/icon3.png" alt="progress-icon" />
                  <span className="text-xs text-grayText">Progress</span>
                </div>
                <div className="group">
                  <button className="flex justify-center items-center gap-3 mt-2 w-1/2 md:border-2 cursor-pointer border-primary md:text-primary text-grayText py-2.5 rounded-3xl btn-transitions group-hover:bg-secondary group-hover:text-white group-hover:border-secondary">
                    <span className="heading-6">Learn More</span>
                    <ChevronRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedProduct;
