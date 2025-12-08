import React from "react";
import { Heart, Eye, ShoppingCart, Star } from "lucide-react";

const DetailedProduct = () => {
  const productData = [
    {id: 1,
    image:"/images/featured1.jpg",
    department: "English Department",
    title: "Graphic Design",
    description:"We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    rating: 4.9,
    sales: 15,
    price: 6.4,
    colors: [
      { name: "Blue", value: "#3B82F6"},
      { name: "Red", value: "#EF4444"},
      { name: "Green", value: "#22C55E"},
      { name: "Yellow", value: "#EAB308"},
    ]},
    {id: 2,
    department: "Chinese Department",
    image:"/images/featured2.jpg",
    title: "Web Development",
    description:"We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    rating: 4.9,
    sales: 17,
    price: 16.4,
    colors: [
      { name: "Blue", value: "#3B82F6"},
      { name: "Green", value: "#22C55E"},
      { name: "Red", value: "#EF4444"},
      { name: "Black", value: "#EAB308"},
    ]},

];
  return (
    <div className="h-auto w-full mx-auto p-5 mb-5">
      <div className="container mx-auto p-5 mb-3.5 font-sans">
        <div className="flex flex-col items-center justify-center gap-9">
          <div className="flex flex-col gap-3.5">
            <span className="">Practice Advice</span>
            <span className="">Featured Posts</span>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 justify-between">

            {productData.map((product)=>(
             <div className="flex md:flex-row flex-col gap-3 relative" key={product.id}>
              <div className="h-[428px] w-[209px] relative">
                <img
                  src={product.image}
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="absolute top-5 left-5 bg-[#e74040] text-white py-1 px-3 rounded">
                Sale!
              </div>
              <div className="flex gap-5 justify-center items-center absolute bottom-8 left-7">
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
              <div className="flex flex-col gap-4 text-left w-96 rounded p-6 justify-center">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <span className="font-bold text-lg text-gray-900">
                      {product.department}
                    </span>
                  </div>
                  <div className="hidden md:flex items-center gap-1 bg-gray-900 text-white px-3 py-1 rounded">
                    <Star size={16} fill="currentColor"/>
                    <span className="hidden md:inline font-semibold text-sm">{product.rating}</span>
                  </div>
                </div>

                <span className="font-semibold text-base text-gray-800">
                  {product.title}
                </span>
                <span className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </span>

                <div className="flex gap-6 text-sm text-gray-700">
                  <div className="flex items-center gap-1">
                    <ShoppingCart size={16} className="text-gray-500" />
                    <span>{product.sales} Sales</span>
                  </div>
                  <div className="font-semibold text-green-600">${product.price}</div>
                </div>

                <div className="flex gap-3 pt-2">
                  <div className="w-5 h-5 rounded-full bg-blue-500 border-2 border-blue-600 cursor-pointer"></div>
                  <div className="w-5 h-5 rounded-full bg-red-500 border-2 border-gray-300 cursor-pointer hover:border-red-600"></div>
                  <div className="w-5 h-5 rounded-full bg-green-500 border-2 border-gray-300 cursor-pointer hover:border-green-600"></div>
                  <div className="w-5 h-5 rounded-full bg-yellow-500 border-2 border-gray-300 cursor-pointer hover:border-yellow-600"></div>
                </div>

                <button className="mt-2 w-3/5 border-2 border-primary text-primary font-semibold py-2.5 rounded-xl hover:bg-secondary hover:text-white">
                  Learn More
                </button>
              </div>
            </div>
))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedProduct;
