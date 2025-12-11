import React from "react";
import { useNavigate } from "react-router-dom";
import { getLayoutClass } from "../../utils/helper";

const ProductCard = ({ products }) => {
  const navigate = useNavigate();
  return (
    <div className={`mx-auto ${getLayoutClass}`}>
      <div className="container mx-auto font-sans">
        <div className="flex flex-col gap-3 mb-5 justify-center items-center text-center text-second-text-color">
          <h4 className="font-normal text-xl leading-[30px] tracking-[0.2px] hidden md:inline-block">
            Featured Products
          </h4>
          <span className="text-2xl font-bold leading-8 tracking-[0.1px] text-black">
            BESTSELLER PRODUCTS
          </span>
          <span className="font-normal text-[14px] leading-5 tracking-[0.2px]">
            Problems trying to resolve the conflict between{" "}
          </span>
        </div>
        <div className="w-[80%] mx-auto grid md:grid-cols-5 grid-cols-1 gap-x-6 gap-y-3 p-5">
          {products.map((product) => (
            <div
              className="h-[400px] w-[183px] flex flex-col gap-2 items-center pb-3"
              key={product.id}
            >
              <div className="h-[238px] ">
                <img
                  src={product.image}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col p-[25px] pb-[35px] items-center justify-center gap-2.5 text-[#252B42]">
                <span className="text-base font-bold text-center">
                  {product.title}
                </span>
                <span className="text-xs font-bold text-center text-second-text-color mb-1">
                  {product.description}
                </span>
                <span className="text-base font-semibold text-[#23856D]">
                  ${product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
        <button
          className="mx-auto block border-2 border-primary rounded-md p-4 md:px-8 md:py-3 text-primary text-sm md:text-lg md:font-semibold mt-5 hover:bg-primary hover:text-white cursor-pointer"
          onClick={() => {
            navigate("/shop");
          }}
        >
          LOAD MORE PRODUCTS
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
