import React from "react";
import {TopDetail, Navbar, BrandLogos, ProductCard, Footer } from "../../component/index";
const Landing = () => {
  const products = [
    {
      id: 1,
      image: "/images/product1.jpg",
      title: "Adidas Originals",
      description: "6 pack socks in brown",
      price: 29.99,
    },
    {
      id: 2,
      image: "/featured-products/Spezial.jpg",
      title: "Adidas Originals Spezial",
      description: "Handball gum sole trainers in brown and white",
      price: 49.99,
    },
    {
      id: 3,
      image: "/featured-products/Adicolor.jpg",
      title: "Adicolor knitted jersey",
      description: "adidas Originals in white",
      price: 49.99,
    },
    {
      id: 4,
      image: "/featured-products/addidas-socks.jpg",
      title: "Product 4",
      description: "Description 2",
      price: 49.99,
    },
    {
      id: 5,
      image: "/featured-products/TrackPant.jpg",
      title: "Firebird",
      description: "adidas Originals track pants in brown",
      price: 49.99,
    },
    {
      id: 6,
      image: "/featured-products/TrackTop.jpg",
      title: "Firebird Fluffy",
      description: "adidas Originals track top in burgundy",
      price: 49.99,
    },
    {
      id: 7,
      image: "/featured-products/jacket.jpg",
      title: "The Item",
      description: "WOOL BLEND JACKET",
      price: 129.0,
    },
  ];

  return (
    <div className="flex flex-col flex-1 w-full">
      <TopDetail/>
      <Navbar/>
      {/* <Banner/> gradient left to right 97e9fa 99e9f6 a2ebe6 abecd7 */}
      <div className="py-10 w-full md:pl-10 md:pr-15 p-4">
        <div className="rounded-3xl bg-linear-to-r from-[#97e9fa] to-[#abecd7] w-full items-center flex flex-col gap-5 md:flex-row justify-end">
          {/* banner texts*/}
          <div className="flex flex-col justify-center items-center md:justify-around md:items-start pt-10 gap-4 md:gap-6 md:w-1/2 md:pl-25">
            <span className="text-sm font-bold text-[#2A7CC7]">
              Summer 2025
            </span>
            <span className="text-4xl md:text-6xl md:text-left text-center font-bold tracking-wider">
              NEW COLLECTION
            </span>
            <span className="md:text-left md:text-xl md:font-semibold text-center text-[#737373]">
              We know how large object will act, but things on a small scale.
            </span>
            <button className="rounded-md bg-[#23a6f0] text-white font-semibold py-3 px-5 w-auto">
              SHOP NOW
            </button>
          </div>
          {/* banner image */}
          <div className="md:w-1/2 w-full h-full">
            <img
              src="/images/banner-image.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>

      {/* Brands logos? */}
      <BrandLogos />

      {/*top products of the week section */}
<div className="hidden">
      <div className="p-3 flex justify-center h-auto">
        <div className="flex gap-3 w-4/5 h-140">
          {/* left */}
          <div className="w-1/2 h-full relative">
            <img
              src="/images/top-week1.png"
              alt=""
              className="w-full h-full object-cover"
            />
            {/* eslai ma component banauchu and left ho ki right props thru send garchu? and tei anusar width and height change huncha? idk */}
            <div className="absolute bottom-0 left-0 bg-[#23A6F0]/60 p-5 w-7/10 h-2/5">
              <div className="text-white flex flex-col p-5 gap-3 items-start justify-center h-full">
                <span className="text-3xl font-bold tracking-wider">
                  Top Product of the Week
                </span>
                <button className="border-2 border-amber-50 px-5 py-4 w-3/5">
                  EXPLORE ITEMS
                </button>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="flex flex-col w-1/2 h-full gap-2">
            <div className="h-1/2 relative">
              <img
                src="/images/top-week2.png"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0">View Now</div>
            </div>
            <div className="h-1/2 relative">
              <img
                src="/images/top-week3.png"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0">View Now</div>
            </div>
          </div>
        </div>
      </div>
</div>

      {/* featured products */}
        <ProductCard products={products}/>
<div className="hidden">
      {/* about us sort of? ig */}
      <div className=" h-auto w-full mb-5">
        <div className="w-3/4  mx-auto flex items-center justify-items-start gap-5">
          <div className="flex gap-4">
            <div className="h-125 w-2/5">
              <img
                src="images/top-product-bg-1.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-125 w-1/2">
              <img
                src="images/top-product-bg-3.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 w-1/2">
            <span className="text-[#23a6f0] font-semibold text-sm tracking-tight">
              About US
            </span>
            <span className="font-bold text-5xl tracking-wide text-[#252B42]">
              We love what we do
            </span>
            <span className="text-[#727272]">
              White Feather's Jewellery prioritizes security, ensuring that
              every transaction conducted on the site is secure and seamless for
              clients. To do this, the organization follows to strict
              transparency regulations throughout the entire consumer purchasing
              process. To add to the convenience, all White Feather's Jewellery
              goods has life time exchanging facilities and 15 days return
              policy
            </span>
          </div>
        </div>
      </div>
      {/* best services */}

      {/* arko featured posts */}

      <Footer/>
</div>
    </div>
  );
};

export default Landing;