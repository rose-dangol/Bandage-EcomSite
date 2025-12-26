import React from "react";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "../../services/products.service";
import { formatPrice } from "../../utils/helper";
// import { getLayoutClass } from "../../utils/helper";

const ProductCard = ({ products, viewType }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/shop/products/${id}/`);
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
      <div
        className={`mx-auto p-5 md:px-20 ${
          viewType
            ? "grid grid-cols-1 xl:grid-cols-4 gap-4 lg:gap-x-5"
            : "flex flex-col"
        }`}
      >
        {products.data?.map((product) => (
          <div
            className={`flex ${
              viewType ? "flex-col" : "flex-row"
            } gap-2 pb-3 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-2.5 hover:scale-105`}
            key={product?.id}
            onClick={() => handleClick(product?.id)}
          >
            {product.image?.[0] && (
              <div className="h-[300px] w-full">
                <img
                  src={getImageUrl(product.image[0])}
                  className="h-full w-full object-cover"
                  alt="product-image"
                />
              </div>
            )}
            <div className="flex flex-col p-[25px] pb-[35px] items-center justify-center gap-2.5 text-[#252B42] ">
              <span className="heading-5 text-blueBlack text-center">
                {product?.name}
              </span>
              <div className="w-full text-center truncate">
                <span className="max-w-max links text-grayText mb-1 whitespace-nowrap ">
                  {product?.description}
                </span>
              </div>
              <div className="heading-5">
                <span className="text-mutedText line-through mr-2">
                  {formatPrice(product.price)}
                </span>
                <span className="text-[#23856D]">
                  {formatPrice(Number(product?.priceAfterDiscount)?.toFixed(2))}
                </span>
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
    </div>
  );
};

export default ProductCard;
