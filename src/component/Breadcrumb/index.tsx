import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ location: {} }) => {
  const pathnames: string[] = location.pathname
    .split("/")
    .filter((x: string) => x);
  let breadcrumbPath = "";

  return (
    <div className="flex items-center">
      <Link to={"/"} className="links hover:underline">
        Home{" "}
      </Link>
      {pathnames.map((name, index) => {
        breadcrumbPath += `/${name}`;
        const isLast = index === pathnames.length - 1;
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
            <Link to={breadcrumbPath}>{name}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
