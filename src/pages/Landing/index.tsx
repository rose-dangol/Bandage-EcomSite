import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  BrandLogos,
  ProductCard,
  DetailedProduct,
  Container,
} from "../../component/index";
import { getLayoutClass } from "../../utils/helper";
import { fetchProducts } from "../../services/products.service";
import { QUERY_KEYS } from "../../constant/queryKeys";

const Landing = () => {
  const [visibleCount, setVisibleCount] = useState<number>(4);

  const { data: products, error } = useQuery({
    queryKey: [QUERY_KEYS.products],
    queryFn: () => fetchProducts(),
  });

  if (error)
    return (
      <div className="text-center cursor-progress heading-6 text-red-700">
        Error: {error.message}
      </div>
    );

  return (
    <div className="w-full cursor-default">
      {/* Banner*/}
      <div className="py-6 md:py-10 w-full mx-auto md:pl-10 md:pr-15">
        <div className="rounded-3xl bg-linear-to-r from-[#97e9fa] to-[#abecd7] md:w-19/20 w-full items-center flex flex-col gap-5 lg:flex-row md:justify-end min-h-96 lg:h-145 mx-auto">
          {/* banner texts*/}
          <div className="flex flex-col justify-center items-center lg:justify-around lg:items-start pt-10 gap-4 lg:gap-6 lg:w-1/2 lg:pl-25 px-4 lg:px-0">
            <Link
              to={""}
              className="heading-5 uppercase text-secondary hover:text-primary"
            >
              Summer 2025
            </Link>
            <span className="lg:heading-1 heading-2 text-blueBlack lg:text-left text-center uppercase">
              new collection
            </span>
            <div className="max-w-[65%] lg:text-left text-center">
              <span className="lg:heading-4 text-grayText">
                We know how large object will act, but things on a small scale.
              </span>
            </div>
            <Link
              to={"/shop"}
              className="rounded-md bg-primary btn-transitions hover:bg-secondary text-white  heading-3 py-4 px-10 w-auto uppercase"
            >
              Shop now
            </Link>
          </div>

          {/* banner image */}
          <div className="md:inline md:w-1/2 w-full h-full lg:justify-items-end justify-items-center relative">
            <img
              src="/images/Ellipse-bg.png"
              alt="bg-ellipse"
              loading="lazy"
              className="lg:w-auto w-[90%]"
            />
            <img
              src="/images/Ellipse-midSize-top.png"
              alt="ellipse"
              className="absolute top-0 lg:left-15 left-0"
            />
            <img
              src="/images/bannerImage-girl.png"
              alt="bg-ellipse"
              className="absolute bottom-0 lg:-right-20"
            />
            <img
              src="/images/Ellipse-purple-right.png"
              alt="bg-ellipse"
              className="absolute lg:-right-18 top-1/5"
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
      <Container>
        {/* Brands logos*/}
        <BrandLogos />
        {/*top products of the week section */}
        <div className={getLayoutClass()}>
          <div className="flex flex-col md:flex-row gap-4 md:h-142.5">
            {/* left */}
            <div className="md:w-3/5 h-139 md:h-full relative">
              <img
                src="/images/top-week1.png"
                alt="Top product"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-primary/60 p-5 md:w-7/10 md:h-2/5 h-1/2">
                <div className="text-white flex flex-col md:p-5 gap-3 items-start justify-center h-full md:w-3/5 w-full">
                  <span className="heading-3">Top Product of the Week</span>
                  <Link
                    to={"/shop"}
                    className="btn-text border-2 border-amber-50 rounded px-5 py-4 w-full uppercase btn-transitions hover:bg-white hover:text-primary"
                  >
                    Explore items
                  </Link>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="flex flex-col gap-4 h-[calc(100%-16px)] md:w-2/5">
              <div className="relative h-1/2">
                <img
                  src="/images/top-week2.png"
                  alt="Product 2"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-primary/60 p-5 md:w-3/4 md:h-3/5 h-7/10">
                  <div className="text-white flex flex-col p-5 gap-3 items-start justify-center h-full">
                    <span className="heading-4">Top Product of the Week</span>
                    <Link
                      to={"/shop"}
                      className="btn-text border-2 border-amber-50 rounded md:px-5 px-2 py-4 md:w-3/4 w-full uppercase btn-transitions hover:bg-white hover:text-primary"
                    >
                      Explore items
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative h-1/2">
                <img
                  src="/images/top-week3.png"
                  alt="Product 3"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-primary/60 p-5 md:w-3/4 md:h-3/5 h-7/10">
                  <div className="text-white flex flex-col p-5 gap-3 items-start justify-center h-full">
                    <span className="heading-4">Top Product of the Week</span>
                    <Link
                      to={"/shop"}
                      className="btn-text border-2 rounded border-amber-50 md:px-5 px-2 py-4 md:w-3/4 w-full uppercase btn-transitions hover:bg-white hover:text-primary"
                    >
                      Explore items
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* featured products */}
        <div className={`mx-auto ${getLayoutClass()}`}>
          <ProductCard products={products?.data} visibleCount={visibleCount} />
          <button
            className="mx-auto btn-transitions uppercase block border-2 border-primary rounded-md p-4 md:px-10 md:py-3 text-primary text-sm md:btn-text md:mt-5 mt-15 hover:bg-primary hover:text-white cursor-pointer"
            onClick={() => {
              if (visibleCount > 10) {
                setVisibleCount((prev) => prev - 8);
              } else {
                setVisibleCount((prev) => prev + 4);
              }
              // navigate("/shop");
            }}
          >
            {visibleCount > 10 ? "Load Less Products" : "Load more products"}
          </button>
        </div>

        {/* about us sort of? ig */}
        <div className={getLayoutClass()}>
          <div className="flex md:flex-row flex-col-reverse items-center gap-8">
            {/* left images */}
            <div className="flex gap-4 flex-1 justify-evenly">
              <div className="h-125 w-2/5">
                <img
                  src="images/about-left.jpg"
                  alt="AboutUs"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-125 w-1/2">
                <img
                  src="images/about-right.jpg"
                  alt="AboutUs"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            {/* right text section */}
            <div className="flex flex-col gap-6 md:w-1/2">
              <span className="text-primary heading-5">Featured Products</span>
              <span className="heading-2 text-blueBlack">
                We love what we do
              </span>
              <div className="md:w-3/5 paragraph text-grayText text-left flex flex-col gap-4">
                <p>
                  Problems trying to resolve the conflict between the two major
                  realms of Classical physics: Newtonian mechanics.
                </p>
                <p>
                  Problems trying to resolve the conflict between the two major
                  realms of Classical physics: Newtonian mechanics
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* best services */}
        <div className={getLayoutClass()}>
          <div className="text-center mb-16">
            <p className="heading-4 text-grayText mb-3">Featured Products</p>
            <h2 className="heading-3 text-blueBlack mb-3 uppercase">
              the Best Services
            </h2>
            <p className="paragraph text-grayText">
              Problems trying to resolve the conflict between
            </p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            <Link
              to={"/about#easy-wins"}
              className="flex flex-col items-center text-center px-10 py-8.75"
            >
              <div className="mb-6 p-4">
                <img
                  src="/images/easy-wins.png"
                  alt="easy-wins"
                  loading="lazy"
                ></img>
              </div>
              <h3 className="heading-3 text-blueBlack mb-3">Easy Wins</h3>
              <p className="text-grayText paragraph">
                Get your best looking smile now!
              </p>
            </Link>

            <Link
              to={"/about#concrete"}
              className="flex flex-col items-center text-center px-10 py-8.75"
            >
              <div className="mb-6 p-4">
                <img src="/images/concrete.svg" alt="concrete" loading="lazy" />
              </div>
              <h3 className="heading-3 text-blueBlack mb-3">Concrete</h3>
              <p className="text-grayText paragraph">
                Defalcate is most focused in helping you discover your most
                beautiful smile
              </p>
            </Link>

            <Link
              to={"/about#hack-growth"}
              className="flex flex-col items-center text-center px-10 py-8.75"
            >
              <div className="mb-6 p-4">
                <img src="/images/growth.svg" alt="hac-growth" loading="lazy" />
              </div>
              <h3 className="heading-3 text-blueBlack mb-3">Hack Growth</h3>
              <p className="text-grayText paragraph">
                Overcame any hurdle or any other problem.
              </p>
            </Link>
          </div>
        </div>
        {/*next featured posts */}
        <DetailedProduct />
      </Container>
    </div>
  );
};

export default Landing;
