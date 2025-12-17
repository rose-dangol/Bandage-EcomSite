import React from "react";
import { useNavigate } from "react-router-dom";
// import { getLayoutClass } from "../../utils/helper";

const ProductCard = ({ products }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/products/${id}/`);
  };
  return (
    <div>
      <div className="flex flex-col gap-3 mb-5 justify-center items-center text-center">
        <h4 className="heading-4 text-grayText hidden md:inline-block">
          Featured Products
        </h4>
        <span className="heading-3 text-blueBlack uppercase">
          bestseller products
        </span>
        <span className="paragraph text-grayText">
          Problems trying to resolve the conflict between
        </span>
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols grid-cols-1 mx-auto lg:gap-x-5 md:gap-10 gap-15 p-5 md:px-20">
        {products.map((product) => (
          <div
            className=" h-full w-full flex flex-col gap-2 pb-3 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-2.5 hover:scale-105"
            key={product?.id}
            onClick={() => handleClick(product?.id)}
          >
            <div className="h-auto w-full">
              <img
                src={product?.image}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col p-[25px] pb-[35px] items-center justify-center gap-2.5 text-[#252B42] ">
              <span className="heading-5 text-blueBlack text-center">
                {product?.title}
              </span>
              <span className="links text-center text-grayText mb-1 whitespace-nowrap">
                {product?.description}
              </span>
              <div className="heading-5">
                <span className="text-mutedText line-through mr-2">
                  ${product?.price}
                </span>
                <span className="text-[#23856D]">${product?.salePrice}</span>
              </div>
              <div className="flex gap-3 pt-2">
                {product?.availableColors?.map((color) => (
                  <div
                    className={`w-5 h-5 rounded-full bg-${color}-500 cursor-pointer`}
                    key={color}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <button
        className="mx-auto transition-colors duration-300 uppercase block border-2 border-primary rounded-md p-4 md:px-10 md:py-3 text-primary text-sm md:btn-text md:mt-5 mt-15 hover:bg-primary hover:text-white cursor-pointer"
        onClick={() => {
          navigate("/shop");
        }}
      >
        load more products
      </button> */}
    </div>
  );
};

export default ProductCard;
