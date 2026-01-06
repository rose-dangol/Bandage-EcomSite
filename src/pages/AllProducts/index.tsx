import {
  BrandLogos,
  Container,
  Pagination,
  ProductCard,
  ShopCard,
} from "../../component";

import { LayoutGrid, LayoutList, } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../services/products.service";
import { useState } from "react";

const AllProducts = () => {
  const [viewType, setViewType] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: products,
    error,
  } = useQuery({
    queryKey: ["products", currentPage],
    queryFn: () => fetchProducts(currentPage),
    refetchOnWindowFocus: false,
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  // if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div className="w-full">
      <Container>
        <ShopCard />
        <div className="py-6 flex justify-between items-center lg:flex-row flex-col gap-6">
          <span className="heading-6 text-grayText">
            Showing {products?.meta?.limit} of {products?.meta?.total} results
          </span>
          <div className="flex gap-3.75 items-center">
            <span className="heading-6 text-grayText">Views:</span>
            <div className="border-[#ececec] border-2 p-2 rounded cursor-pointer">
              <LayoutGrid fill={`${viewType? 'blueBlack':'none'}`} color={`${viewType? 'black':'grayText'}`} onClick={() => setViewType(true)} />
            </div>
            <div className="border-[#ececec] border-2 p-2 rounded cursor-pointer">
              <LayoutList color={`${!viewType? 'black':'grayText'}`} onClick={() => setViewType(false)} />
            </div>
          </div>
          {/* <div className="flex gap-1.5">
            <select className="border-[#dddddd] border-2 rounded bg-[#f9f9f9] p-2">
              <option>Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <button className="heading-6 btn-transitions bg-primary hover:bg-secondary text-white px-3 py-3.5 rounded">
              Filter
            </button>
          </div> */}
        </div>
        <ProductCard products={products?.data} viewType={viewType} />
        <Pagination
          meta={products?.meta}
          currentPage={currentPage}
          hanldePageChange={handlePageChange}
        />
        <BrandLogos />
      </Container>
    </div>
  );
};

export default AllProducts;
