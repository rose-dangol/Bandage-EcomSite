import React from "react";

const ProductCard = ({products}) => {
  return (
    <div className="h-auto w-full mx-auto p-5">
      <div className="container mx-auto p-5 mb-3.5 font-sans">
        <div className="flex flex-col gap-3 mb-5 justify-center items-center text-center">
          <span className="text-[#737373] text-lg hidden md:inline font-sans">Featured Products</span>
          <span className="text-2xl font-semibold leading-none">
            BESTSELLER PRODUCTS
          </span>
          <span className="text-[#737373] text-md">sth sth</span>
        </div>
        <div className="mx-auto grid grid-cols-5 gap-x-6 gap-y-3 p-5 w-[80%]">
          {products.map((product) => (
            <div
              className="h-[400px] w-[183px] flex flex-col gap-2 items-center border-[#EDEDED] pb-3"
              key={product.id}
            >
              <div className="h-[238px] ">
                <img
                  src={product.image}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col p-[25px] pb-[35px] items-center justify-center gap-2.5 text-primary">
                <span className="text-base font-bold text-center">{product.title}</span>
                <span className="text-xs font-bold text-center text-[#737373] mb-1">
                  {product.description}
                </span>
                <span className="text-base font-semibold text-[#23856D]">
                  ${product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
        <button className="mx-auto block border-2 border-primary rounded-md px-8 py-3 text-primary font-semibold mt-5 hover:bg-primary hover:text-white hover:cursor-pointer">
          LOAD MORE PRODUCTS
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
