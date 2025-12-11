import React from "react";
import {
  TopDetail,
  Navbar,
  BrandLogos,
  ProductCard,
  Footer,
  DetailedProduct,
} from "../../component/index";
import {
  Heart,
  ShoppingCart,
  Eye,
  Download,
  BookOpen,
  CheckCircle,
} from "lucide-react";
import { getLayoutClass } from "../../utils/helper";
const Landing = () => {
  const products = [
    {
      id: 1,
      image: "/images/product1.jpg",
      title: "Graphic Design",
      description: "English Department",
      price: 29.99,
    },
    {
      id: 2,
      image: "/images/product2.jpg",
      title: "Graphic Design",
      description: "English Department",
      price: 49.99,
    },
    {
      id: 3,
      image: "/images/product3.jpg",
      title: "Graphic Design",
      description: "English Department",
      price: 49.99,
    },
    {
      id: 4,
      image: "/images/product4.jpg",
      title: "Graphic Design",
      description: "English Department",
      price: 49.99,
    },
    {
      id: 5,
      image: "/images/product5.jpg",
      title: "Graphic Design",
      description: "English Department",
      price: 49.99,
    },
    {
      id: 6,
      image: "/images/product1.jpg",
      title: "Graphic Design",
      description: "English Department",
      price: 49.99,
    },
    {
      id: 7,
      image: "/images/product6.jpg",
      title: "Graphic Design",
      description: "English Department",
      price: 129.0,
    },
    {
      id: 8,
      image: "/images/product7.jpg",
      title: "Graphic Design",
      description: "English Department",
      price: 129.0,
    },
    {
      id: 9,
      image: "/images/product8.jpg",
      title: "Graphic Design",
      description: "English Department",
      price: 129.0,
    },
    {
      id: 10,
      image: "/images/product9.jpg",
      title: "Graphic Design",
      description: "English Department",
      price: 129.0,
    },
  ];

  return (
    <div className="container flex flex-col flex-1 w-full">
      <TopDetail />
      <Navbar />

      {/* <Banner/> gradient left to right 97e9fa 99e9f6 a2ebe6 abecd7 */}
      <div className="py-10 w-full mx-auto md:pl-10 md:pr-15 p-4">
        <div className="rounded-3xl bg-linear-to-r from-[#97e9fa] to-[#abecd7] w-19/20 items-center flex flex-col gap-5 md:flex-row justify-end h-145 mx-auto">
          {/* banner texts*/}
          <div className="flex flex-col justify-center items-center md:justify-around md:items-start pt-10 gap-4 md:gap-6 md:w-1/2 md:pl-25">
            <span className="text-sm font-bold text-primary hover:text-secondary">
              Summer 2025
            </span>
            <span className="text-4xl md:text-6xl md:text-left text-center font-bold tracking-wider">
              NEW COLLECTION
            </span>
            <span className="md:text-left md:text-xl md:font-semibold text-center text-second-text-color">
              We know how large object will act, but things on a small scale.
            </span>
            <button className="rounded-md bg-[#23a6f0] hover:bg-secondary text-white font-semibold py-3 px-5 w-auto">
              SHOP NOW
            </button>
          </div>

          {/* banner image */}
          <div className="md:inline md:w-1/2 w-full h-full justify-items-end relative">
            <img src="/images/Ellipse-bg.png" alt="bg-ellipse" className="" />
            <img
              src="/images/Ellipse-midSize-top.png"
              alt=""
              className="absolute top-0 left-15"
            />
            <img
              src="/images/bannerImage-girl.png"
              alt="bg-ellipse"
              className="absolute bottom-0 -right-20"
            />
            <img
              src="/images/Ellipse-purple-right.png"
              alt="bg-ellipse"
              className="absolute -right-18 top-1/5"
            />
            <img
              src="/images/Ellipse-purple-left.png"
              alt="bg-ellipse"
              className="absolute left-[25%] bottom-[30%]"
            />
            {/* <img src="/images/banner-image.png" alt="" className="w-full h-full object-cover"/> */}
          </div>
        </div>
      </div>

      {/* Brands logos*/}
      <BrandLogos />

      {/*top products of the week section */}
      <div className={getLayoutClass()}>
        <div className="mx-auto flex flex-col md:flex-row gap-4 max-w-7xl h-[570px]">
          {/* left */}
          <div className="w-3/5 h-full relative">
            <img
              src="/images/top-week1.png"
              alt="Top product"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-primary/60 p-5 w-7/10 h-2/5">
              <div className="text-white flex flex-col p-5 gap-3 items-start justify-center h-full">
                <span className="text-3xl font-bold tracking-wider">
                  Top Product of the Week
                </span>
                <button className="border-2 border-amber-50 rounded px-5 py-4 w-3/5">
                  EXPLORE ITEMS
                </button>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="flex flex-col gap-4 h-[calc(100%-16px)] w-2/5">
            <div className="relative h-1/2">
              <img
                src="/images/top-week2.png"
                alt="Product 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-primary/60 p-5 w-3/4 h-3/5">
                <div className="text-white flex flex-col p-5 gap-3 items-start justify-center h-full">
                  <span className="text-xl font-normal tracking-wider">
                    Top Product of the Week
                  </span>
                  <button className="border-2 border-amber-50 rounded px-5 py-4 w-auto">
                    EXPLORE ITEMS
                  </button>
                </div>
              </div>
            </div>
            <div className="relative h-1/2">
              <img
                src="/images/top-week3.png"
                alt="Product 3"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-primary/60 p-5 w-3/4 h-3/5">
                <div className="text-white flex flex-col p-5 gap-3 items-start justify-center h-full">
                  <span className="text-xl font-normal tracking-wider">
                    Top Product of the Week
                  </span>
                  <button className="border-2 rounded border-amber-50 px-5 py-4 w-auto">
                    EXPLORE ITEMS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* featured products */}
      <ProductCard products={products} />

      {/* about us sort of? ig */}
      <div className={getLayoutClass()}>
        <div className="w-3/4 mx-auto flex md:flex-row flex-col-reverse items-center justify-items-start gap-8">
          <div className="flex gap-4 flex-1">
            <div className="h-125 w-2/5">
              <img
                src="images/about-left.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-125 w-1/2">
              <img
                src="images/about-right.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 w-1/2">
            <span className="text-primary font-bold text-base leading-6">
              Featured Products
            </span>
            <span className="font-bold text-4xl tracking-wide text-[#252B42]">
              We love what we do
            </span>
            <div className="w-3/5">
              <p className="text-second-text-color font-normal text-[14px] leading-5 tracking-[0.2px]">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics. <br />
                <br />
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* best services */}
      <div className={getLayoutClass()}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-second-text-color text-xl font-medium leading-7 mb-2">
              Featured Products
            </p>
            <h2 className="text-2xl font-bold text-[rgba(37, 43, 66, 1)] leading-8 tracking-wide">
              THE BEST SERVICES
            </h2>
            <p className="text-second-text-color text-sm leading-5">
              Problems trying to resolve the conflict between
            </p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 p-4">
                <img src="/images/easy-wins.png"></img>
              </div>
              <h3 className="text-2xl font-bold leading-8 text-[#252B42] mb-3">
                Easy Wins
              </h3>
              <p className="text-second-text-color text-sm leading-7">
                Get your best looking smile now!
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-6 p-4">
                <img src="/images/concrete.svg" alt="" />
              </div>
              <h3 className="text-2xl font-bold leading-8 text-[#252B42] mb-3">
                Concrete
              </h3>
              <p className="text-second-text-color text-sm leading-7">
                Defalcate is most focused in helping you discover your most
                beautiful smile
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-6 p-4">
                <img src="/images/growth.svg" alt="" />
              </div>
              <h3 className="text-2xl font-bold leading-8 text-[#252B42] mb-3">
                Hack Growth
              </h3>
              <p className="text-second-text-color text-sm leading-7 font-medium">
                Overcame any hurdle or any other problem.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*next featured posts */}
      <DetailedProduct />

      <Footer />
    </div>
  );
};

export default Landing;
