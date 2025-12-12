import React from "react";

const ShopCard = () => {
  return (
    <div className="w-full px-6">
      <div className="max-w-[80%] mx-auto">
        <div className="flex justify-between items-center">
          <span className="heading-3 text-blueBlack">Shop</span>
          <div className="">
            <span>Home {">"}</span>
            <span>Shop</span>
          </div>
        </div>
        <div className="flex gap-[15px]">
          <div className="h-56 w-56 relative">
            <img
              src="/images/shop-cards-1.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(33,33,33,0.25)]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="heading-5 uppercase text-white">cloth</span>
              <span className="paragraph text-white">5 Items</span>
            </div>
          </div>
          <div className="h-56 w-56 relative">
            <img
              src="/images/shop-cards-2.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(33,33,33,0.25)]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="heading-5 uppercase text-white">cloth</span>
              <span className="paragraph text-white">5 Items</span>
            </div>
          </div>
          <div className="h-56 w-56 relative">
            <img
              src="/images/shop-cards-3.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(33,33,33,0.25)]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="heading-5 uppercase text-white">cloth</span>
              <span className="paragraph text-white">5 Items</span>
            </div>
          </div>
          <div className="h-56 w-56 relative">
            <img
              src="/images/shop-cards-4.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(33,33,33,0.25)]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="heading-5 uppercase text-white">cloth</span>
              <span className="paragraph text-white">5 Items</span>
            </div>
          </div>
          <div className="h-56 w-56 relative">
            <img
              src="/images/shop-cards-5.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(33,33,33,0.25)]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="heading-5 uppercase text-white">cloth</span>
              <span className="paragraph text-white">5 Items</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
