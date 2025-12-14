import React from "react";
import { Navbar } from "../../component";
import { getLayoutClass } from "../../utils/helper";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className={getLayoutClass()}>
          <div className="w-3/4 mx-auto flex md:flex-row flex-col-reverse items-center justify-items-start gap-8">
            {/* left images */}
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
            {/* right text section */}
            <div className="flex flex-col gap-6 w-1/2">
              <span className="text-primary heading-5">Featured Products</span>
              <span className="heading-2 text-blueBlack">
                We love what we do
              </span>
              <div className="w-7/10">
                <p className="paragraph text-grayText">
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

        <div
          id="easy-wins"
          className="flex flex-col items-center text-center px-10 py-[35px]"
        >
          <div className="mb-6 p-4">
            <img src="/images/easy-wins.png" alt="easy-wins" loading="lazy" />
          </div>
          <h3 className="heading-3 text-blueBlack mb-3">Easy Wins</h3>
          <p className="text-grayText paragraph">
            Get your best looking smile now!
          </p>
        </div>

        <div
          id="concrete"
          className="flex flex-col items-center text-center px-10 py-[35px]"
        >
          <div className="mb-6 p-4">
            <img src="/images/concrete.svg" alt="concrete" loading="lazy" />
          </div>
          <h3 className="heading-3 text-blueBlack mb-3">Concrete</h3>
          <p className="text-grayText paragraph">
            Defalcate is most focused in helping you discover your most
            beautiful smile
          </p>
        </div>

        <div
          id="hack-growth"
          className="flex flex-col items-center text-center px-10 py-[35px]"
        >
          <div className="mb-6 p-4">
            <img src="/images/growth.svg" alt="hack-growth" loading="lazy" />
          </div>
          <h3 className="heading-3 text-blueBlack mb-3">Hack Growth</h3>
          <p className="text-grayText paragraph">
            Overcame any hurdle or any other problem.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
