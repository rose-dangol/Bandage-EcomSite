import React from "react";

const ProductCard = ({products}) => {
  return (
    <div className="h-auto w-full mx-auto p-5">
      <div className=" h-auto flex flex-col justify-center items-center p-10">
        <div className="flex flex-col gap-3 mb-5 justify-center items-center text-center">
          <span className="text-[#737373] text-lg hidden md:inline">Featured Products</span>
          <span className="text-2xl font-semibold leading-none">
            BESTSELLER PRODUCTS
          </span>
          <span className="text-[#737373] text-md">sth sth</span>
        </div>
        <div className="flex flex-wrap gap-3 justify-center mb-3">
          {products.map((product) => (
            <div
              className="flex flex-col gap-2 justify-center items-center border-[#EDEDED] border-2 pb-3"
              key={product.id}
            >
              <div className="h-100 w-80">
                <img
                  src={product.image}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-base font-bold">{product.title}</span>
              <span className="text-sm font-semibold">
                {product.description}
              </span>
              <span className="text-base font-semibold text-[#23856D]">
                ${product.price}
              </span>
            </div>
          ))}
        </div>
        <button className="border-2 border-[#23A6F0] rounded-md px-8 py-3 text-[#23A6F0] font-semibold mt-5">
          LOAD MORE PRODUCTS
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
