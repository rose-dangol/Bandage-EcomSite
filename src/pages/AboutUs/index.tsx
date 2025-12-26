import React from "react";
import { Container, Navbar } from "../../component";
import { getLayoutClass } from "../../utils/helper";

const AboutUs = () => {
  return (
    <Container>
      <div className={getLayoutClass()}>
        <div className="flex md:flex-row flex-col-reverse items-center gap-8">
          {/* left images */}
          <div className="flex gap-4 flex-1 justify-evenly">
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
          <div className="flex flex-col gap-6 md:w-1/2">
            <span className="text-primary heading-5">Featured Products</span>
            <span className="heading-2 text-blueBlack">We love what we do</span>
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
      <div className="flex">
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
    </Container>
  );
};

export default AboutUs;
