import { useQuery } from "@tanstack/react-query";
import { fetchProductById, getImageUrl } from "../../services/products";
import { Link, useLocation, useParams } from "react-router-dom";
import { Breadcrumb, Container } from "../../component";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product"],
    queryFn: () => fetchProductById(id),
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:{error.message}</div>;
  if (!product) return <div>No Product found</div>;
  console.log(product);

  return (
    <div className="bg-red-100">
      <Container>
        <div className="p-5 flex flex-col">
          <Breadcrumb location={location} />
          <div className="w-full pb-12 flex gap-[30px]">
            <div className="grid grid-cols-4 grid-rows-4 gap-4 md:w-1/2">
              {product.img.map((image) => {
                return image.id == 1 ? (
                  <div className="col-span-4 row-span-3 w-96 h-96">
                    <img
                      src={getImageUrl(image.url)}
                      alt="product-image"
                      className="object-cover w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="row-start-4">
                    <img src={getImageUrl(image.url)} alt="product-image" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <div className="heading-4">{product.name}</div>
      <div className="heading-6">{product.price}</div>
      {/* <img src={product?.category?.img} alt="product image" /> */}
    </div>
  );
};

export default ProductDetail;
