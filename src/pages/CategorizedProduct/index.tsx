import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatCurrency, getLayoutClass } from "../../utils/helper";
import { Breadcrumb, Container } from "../../component";
import { ProductDataType } from "../../types/productTypes";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constant/queryKeys";
import { fetchProducts } from "../../services/products.service";

const CategorizedProduct = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const categoryId = searchParams.get("categoryId");
  const [categorizedProducts, setCategorizedProducts] = useState<
    ProductDataType[]
  >([]);

  const { data: products, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.products],
    queryFn: () => fetchProducts(1, 50),
  });

  useEffect(() => {
    if (products && categoryId) {
      let categorizedData = products.data.filter(
        (item: ProductDataType) => item.category?.id === Number(categoryId)
      );
      setCategorizedProducts(categorizedData);
    }
  }, [products, categoryId]);

  const handleClick = (id: number) => {
    navigate(`/shop/products/${id}/`);
  };

  return (
    <div className={`${getLayoutClass()} mx-auto`}>
      <Container>
        <div className="mx-auto space-y-10 md:px-20">
          <Breadcrumb location={location} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categorizedProducts?.map((product) => (
              <div
                className="flex flex-col gap-3 bg-white shadow-sm hover:shadow-md overflow-hidden cursor-pointer group"
                key={product?.id}
                onClick={() => handleClick(product?.id)}
              >
                {/* Image */}
                {product.image?.[0] && (
                  <div className="h-64 w-full overflow-hidden bg-gray-100">
                    <img
                      src={product.image[0]}
                      className="h-full w-full object-cover"
                      alt={product?.name}
                    />
                  </div>
                )}

                <div className="flex flex-col gap-3 p-4">
                  <span className="heading-5 text-blueBlack text-center capitalize">
                    {product?.name}
                  </span>

                  <span className="text-sm text-grayText text-center">
                    {product?.description}
                  </span>

                  <div className="flex justify-center gap-2">
                    <span className="text-mutedText line-through text-sm">
                      {formatCurrency(product.price)}
                    </span>
                    <span className="text-green-600 font-semibold">
                      {formatCurrency(Number(product?.priceAfterDiscount))}
                    </span>
                  </div>

                  {product?.colors && product.colors.length > 0 && (
                    <div className="flex gap-2 justify-center pt-2">
                      {product.colors.map((color) => (
                        <div
                          className="w-5 h-5 rounded-full border-2 border-gray-300 hover:border-gray-500 transition cursor-pointer"
                          key={color}
                          style={{ background: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {!isLoading && categorizedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No products found in this category
              </p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default CategorizedProduct;
