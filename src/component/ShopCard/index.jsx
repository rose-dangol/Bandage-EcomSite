import { Link, useLocation } from "react-router-dom";

const ShopCard = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <div className="w-full">
      <div className="flex md:flex-row flex-col justify-between items-center gap-4 py-6">
        <span className="heading-3 text-blueBlack">Shop</span>
        <div className="breadcrimbs">
          <span>Home {">"}</span>
          <span>Shop</span>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col gap-4 justify-between items-center pb-12">
        <div className="h-56 w-auto relative">
          <img
            src="/images/shop-cards-1.jpg"
            alt="cloth"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(33,33,33,0.25)]"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="heading-5 uppercase text-white">cloth</span>
            <span className="paragraph text-white">5 Items</span>
          </div>
        </div>
        <div className="h-56 w-auto relative">
          <img
            src="/images/shop-cards-2.jpg"
            alt="cloth"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(33,33,33,0.25)]"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="heading-5 uppercase text-white">cloth</span>
            <span className="paragraph text-white">5 Items</span>
          </div>
        </div>
        <div className="h-56 w-auto relative">
          <img
            src="/images/shop-cards-3.jpg"
            alt="cloth"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(33,33,33,0.25)]"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="heading-5 uppercase text-white">cloth</span>
            <span className="paragraph text-white">5 Items</span>
          </div>
        </div>
        <div className="h-56 w-auto relative">
          <img
            src="/images/shop-cards-4.jpg"
            alt="cloth"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(33,33,33,0.25)]"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="heading-5 uppercase text-white">cloth</span>
            <span className="paragraph text-white">5 Items</span>
          </div>
        </div>
        <div className="h-56 w-auto relative">
          <img
            src="/images/shop-cards-5.jpg"
            alt="cloth"
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
  );
};

export default ShopCard;
