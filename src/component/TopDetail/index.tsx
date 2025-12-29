import { Link } from "react-router-dom";
import {
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  Phone,
  Mail,
} from "lucide-react";

const TopDetail = () => {
  return (
    <div className="bg-[#252B42] text-white top-0 hidden sm:block max-w-full">
      <div className="heading-6 p-5 flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6">
          <div className="flex items-center gap-2">
            <span>
              <Phone size={"16px"} />
            </span>
            <Link to="tel:+2255550118">(225) 555-0118</Link>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <Mail size={"16px"} />
            </span>
            <Link to="mailto:michelle.rivera@example.com">
              michelle.rivera@example.com
            </Link>
          </div>
        </div>

        <div className="">Follow us and get a chance to win 80% off!</div>
        <div className="flex items-center gap-4">
          <span className="">Follow us:</span>
          <Link to={""} className="">
            <Instagram size={"16px"} />
          </Link>
          <Link to={""} className="">
            <Youtube size={"16px"} />
          </Link>
          <Link to={""} className="">
            <Facebook size={"16px"} />
          </Link>
          <Link to={""} className="">
            <Twitter size={"16px"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopDetail;
