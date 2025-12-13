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
      <div className="flex flex-col md:flex-row justify-center md:gap-30 gap-3 items-center">
        <a href="#">
          <img src={LyftLogo} alt="Lyft Logo" className="w-20 h-20" />
        </a>
        <a href="#">
          <img src={HooliLogo} alt="Lyft Logo" className="w-20 h-20" />
        </a>
        <a href="#">
          <img src={AwsLogo} alt="Lyft Logo" className="w-20 h-20" />
        </a>
        <a href="#">
          <img src={RedditLogo} alt="Lyft Logo" className="w-20 h-20" />
        </a>
        <a href="#">
          <img src={ZaraLogo} alt="Lyft Logo" className="w-20 h-20" />
        </a>
        <a href="#">
          <img src={AppleLogo} alt="Lyft Logo" className="w-20 h-20" />
        </a>
      </div>
    </div>
  );
};

export default BrandLogos;
