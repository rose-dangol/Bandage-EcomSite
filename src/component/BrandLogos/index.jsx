import React from "react";
import LyftLogo from "/BrandLogo/Lyft_logo.svg";
import HooliLogo from "/BrandLogo/hooli-logo.svg";
import AwsLogo from "/BrandLogo/aws-logo.svg";
import RedditLogo from "/BrandLogo/reddit-logo.svg";
import ZaraLogo from "/BrandLogo/zara-logo.svg";
import AppleLogo from "/BrandLogo/apple.svg";
import { getLayoutClass } from "../../utils/helper";

const BrandLogos = () => {
  return (
    <div className={`${getLayoutClass()}`}>
      <div className="flex flex-col md:flex-row justify-center lg:gap-30 gap-5 items-center">
        <a href="#">
          <img
            src={LyftLogo}
            alt="Lyft Logo"
            className="w-20 h-20"
            loading="lazy"
          />
        </a>
        <a href="#">
          <img
            src={HooliLogo}
            alt="Hooli Logo"
            className="w-20 h-20"
            loading="lazy"
          />
        </a>
        <a href="#">
          <img
            src={AwsLogo}
            alt="aws Logo"
            className="w-20 h-20"
            loading="lazy"
          />
        </a>
        <a href="#">
          <img
            src={RedditLogo}
            alt="reddit Logo"
            className="w-20 h-20"
            loading="lazy"
          />
        </a>
        <a href="#">
          <img
            src={ZaraLogo}
            alt="zara Logo"
            className="w-20 h-20"
            loading="lazy"
          />
        </a>
        <a href="#">
          <img
            src={AppleLogo}
            alt="apple Logo"
            className="w-20 h-20"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  );
};

export default BrandLogos;
