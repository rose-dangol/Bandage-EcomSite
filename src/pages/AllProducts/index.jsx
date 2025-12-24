import {
  BrandLogos,
  Container,
  Footer,
  Navbar,
  Pagination,
  ProductCard,
  ShopCard,
  TopDetail,
} from "../../component";
import { LayoutGrid, ListChecks } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../services/products";

const AllProducts = () => {
  // const [viewType, setViewType] = useState("grid");
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!products) return <div>No products found</div>;

  console.log(products[1].image[0]);
  return (
    <div className="w=full">
      <Container>
        <ShopCard />
        <div className="py-6 flex justify-between items-center lg:flex-row flex-col gap-6">
          <span className="heading-6 text-grayText">
            Showing all 12 results
          </span>
          <div className="flex gap-[15px] items-center">
            <span className="heading-6 text-grayText">Views:</span>
            <div className="border-[#ececec] border-2 p-2 rounded">
              <LayoutGrid fill="blueBlack" />
            </div>
            <div className="border-[#ececec] border-2 p-2 rounded">
              <ListChecks color="grayText" />
            </div>
          </div>
          <div className="flex gap-1.5">
            <select className="border-[#dddddd] border-2 rounded bg-[#f9f9f9] p-2">
              <option>Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <button className="heading-6 btn-transitions bg-primary hover:bg-secondary text-white px-3 py-3.5 rounded">
              Filter
            </button>
          </div>
        </div>
        <ProductCard products={products} />
        <Pagination />
        <BrandLogos />
      </Container>
    </div>
  );
};

export default AllProducts;
