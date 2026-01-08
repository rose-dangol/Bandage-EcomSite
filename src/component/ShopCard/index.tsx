import { useLocation, useNavigate } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../services/category.service";
import { QUERY_KEYS } from "../../constant/queryKeys";
import { ProductDataType } from "../../types/productTypes";

type categoryType = {
  id: number;
  name: string;
  img?: string;
};

const ShopCard = ({ products }: { products: ProductDataType[] }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { data: categories } = useQuery({
    queryKey: [QUERY_KEYS.category],
    queryFn: () => fetchCategories(),
  });
  return (
    <div className="w-full">
      <div className="flex md:flex-row flex-col justify-between items-center gap-4 py-6">
        <span className="heading-3 text-blueBlack">Shop</span>
        <Breadcrumb location={location} />
      </div>

      <div className="flex lg:flex-row flex-col gap-4 justify-between items-center pb-12">
        {categories?.slice(0, 4).map((category: categoryType) => (
          <div
            className="h-56 w-auto relative cursor-pointer hover:shadow-lg"
            onClick={() => navigate(`products?categoryId=${category.id}`)}
            key={category.id}
          >
            <img
              src="/images/shop-cards-4.jpg"
              alt={category.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(33,33,33,0.25)]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="heading-5 uppercase text-white">
                {category.name}
              </span>
              <span className="paragraph text-white">
                {
                  products?.filter((p) => p.category.id === Number(category.id))
                    .length
                }{" "}
                Items
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCard;
