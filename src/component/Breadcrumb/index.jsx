import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ location }) => {
  console.log(location);
  const pathnames = location.pathname.split("/").filter((x) => x);
  let breadcrumbPath = "";
  return (
    <div className="flex items-center">
      <Link to={"/"} className="links hover:underline">
        Home{" "}
      </Link>
      {pathnames.map((name, index) => {
        breadcrumbPath += `/${name}`;
        const isLast = index === pathnames.length - 1;
        // console.log(pathnames, breadcrumbPath);
        return isLast ? (
          <span
            key={breadcrumbPath}
            className="flex items-center heading-6 text-mutedText capitalize"
          >
            <ChevronRight size={"28px"} />
            {name}
          </span>
        ) : (
          <span key={breadcrumbPath} className="flex items-center capitalize">
            {""}
            <ChevronRight />
            <Link to={breadcrumbPath}>
              {/* <ChevronRight /> */}
              {name}
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
