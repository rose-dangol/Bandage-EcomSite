import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/helper";
import { ProductDataType } from "../../types/productTypes";

type ProductCardType = {
  products: ProductDataType[];
  layoutType?: string;
  visibleCount?: number;
};

const ProductCard = ({
  products,
  layoutType: layoutType = "Grid",
  visibleCount,
}: ProductCardType) => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/shop/products/${id}/`);
  };

  return (
    <div>
      <div className="flex flex-col gap-3 mb-5 justify-center items-center text-center">
        <h4 className="heading-4 text-grayText hidden md:inline-block">
          Featured Products
        </h4>
        <span className="heading-3 text-blueBlack uppercase">
          bestseller products
        </span>
        <span className="paragraph text-grayText">
          Problems trying to resolve the conflict between
        </span>
      </div>
      <div
        className={`mx-auto p-5 md:px-20 ${
          layoutType === "Grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-x-5"
            : "flex flex-col gap-3"
        }`}
      >
        {!products ? (
          <div>No Products Available</div>
        ) : (
          products.slice(0, visibleCount).map((product) => (
            <div
              className={`flex gap-2 pb-3 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-2.5 hover:shadow-md hover:scale-105 
                ${layoutType === "Grid" ? "flex-col" : "flex-row"}`}
              key={product?.id}
              onClick={() => handleClick(product?.id)}
            >
              {product.image?.[0] && (
                <div
                  className={`${
                    layoutType === "Grid" ? "h-75 w-full" : "h-75 w-75"
                  }
                `}
                >
                  <img
                    src={product.image[0]}
                    className="h-full w-full object-cover"
                    alt={product.name}
                  />
                </div>
              )}
              <div
                className={`flex flex-col p-6.25 pb-8.75 items-center justify-center gap-2.5 text-[#252B42] w-full ${
                  layoutType === "List" && "overflow-x-hidden items-start"
                }`}
              >
                <span className="heading-5 text-blueBlack text-center capitalize">
                  {product?.name}
                </span>
                <div
                  className={`w-full text-center truncate ${
                    layoutType === "List" && "text-left w-xs"
                  }`}
                >
                  <span className="w-full links text-grayText mb-1 whitespace-nowrap">
                    {product?.description}
                  </span>
                </div>
                <div className="heading-5">
                  <span className="text-mutedText line-through mr-2">
                    {formatCurrency(product.price)}
                  </span>
                  <span className="text-[#23856D]">
                    {formatCurrency(Number(product?.priceAfterDiscount))}{" "}
                  </span>
                </div>
                <div className="flex gap-3 pt-2">
                  {product?.colors?.map((color: string) => (
                    <div
                      className={`w-5 h-5 rounded-full border border-mutedText cursor-pointer`}
                      key={color}
                      style={{ background: color }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductCard;
