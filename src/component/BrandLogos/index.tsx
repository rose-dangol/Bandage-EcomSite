import { getLayoutClass } from "../../utils/helper";
import { Link } from "react-router-dom";

const BrandLogos = () => {
  return (
    <div className={`${getLayoutClass()} py-12`}>
      <div className="flex flex-col md:flex-row flex-wrap justify-center lg:gap-30 gap-5 items-center">
        <Link to={""}>
          <img
            src='/BrandLogo/Lyft_logo.svg'
            alt="Lyft Logo"
            className="w-20 h-20"
            loading="lazy"
          />
        </Link>
        <Link to={""}>
          <img
            src="/BrandLogo/hooli-logo.svg"
            alt="Hooli Logo"
            className="w-20 h-20"
            loading="lazy"
          />
        </Link>
        <Link to={""}>
          <img
            src="/BrandLogo/aws-logo.svg"
            alt="aws Logo"
            className="w-20 h-20"
            loading="lazy"
          />
        </Link>
        <Link to={""}>
          <img
            src="/BrandLogo/reddit-logo.svg"
            alt="reddit Logo"
            className="w-20 h-20"
            loading="lazy"
          />
        </Link>
        <Link to={""}>
          <img
            src="/BrandLogo/zara-logo.svg"
            alt="zara Logo"
            className="w-20 h-20"
            loading="lazy"
          />
        </Link>
        <Link to={""}>
          <img
            src="/BrandLogo/apple.svg"
            alt="apple Logo"
            className="w-20 h-20"
            loading="lazy"
          />
        </Link>
      </div>
    </div>
  );
};

export default BrandLogos;
