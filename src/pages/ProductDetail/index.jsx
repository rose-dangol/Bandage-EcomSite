import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchProductById,
  getImageUrl,
  updateProduct,
} from "../../services/products";
import { useLocation, useParams } from "react-router-dom";
import { Breadcrumb, Container } from "../../component";
import { useState, useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryClient = useQueryClient();

  const [isAdmin, setIsAdmin] = useState(true);
  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    price: "",
    status: "",
    categoryId: "",
  });

  // fetching product data
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
  });

  // setting product data to naya ma
  useEffect(() => {
    if (product) {
      setUpdatedProduct({
        name: product.name || "",
        price: product.price || "",
        status: product.status || "",
        categoryId: product.categoryId || "",
      });
    }
  }, [product]);

  const mutation = useMutation({
    mutationFn: () => updateProduct(id, updatedProduct),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product", id] });
      alert("Product updated!");
    },
    onError: (error) => {
      alert(`Error: ${error.message}`);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    mutation.mutate(updatedProduct);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!product) return <div>No Product found</div>;

  return (
    <div className="bg-red-100">
      <Container>
        <div className="p-5 flex flex-col">
          <Breadcrumb location={location} />
          <div className="w-full pb-12 flex gap-[30px]">
            {/* product Image*/}
            <div className="grid grid-cols-4 grid-rows-4 gap-2 md:w-1/2">
              {product.img?.map((image) => (
                <div
                  key={image.id}
                  className={
                    image.id === 1
                      ? "col-span-4 row-span-3 w-full h-full"
                      : "row-start-4"
                  }
                >
                  <img
                    src={getImageUrl(image.url)}
                    alt="product-image"
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <div className="heading-4">{product.name}</div>
              <div className="heading-6">${product.price}</div>
              <div className="paragraph">{product.category?.name}</div>
              <div className="text-sm">{product.status}</div>
            </div>

            {isAdmin && (
              <div className="space-y-5 w-80">
                <div className="flex flex-col gap-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter product name"
                    value={updatedProduct.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded transition"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    value={updatedProduct.price}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded transition"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Category ID
                  </label>
                  <select
                    name="categoryId"
                    value={updatedProduct.categoryId}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded bg-white transition cursor-pointer appearance-none"
                  >
                    <option value="">Select a category</option>
                    <option value="1">1. Electronics</option>
                    <option value="2">2. Clothing</option>
                    <option value="3">3. Books</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Active Status
                  </label>
                  <select
                    name="status"
                    value={updatedProduct.status}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded bg-white cursor-pointer"
                  >
                    <option value="">Select status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleEdit}
                    disabled={mutation.isPending}
                    className="flex-1 bg-primary text-white btn-text py-2 rounded hover:bg-secondary btn-transitions disabled:opacity-50"
                  >
                    {mutation.isPending ? "Updating..." : "Submit"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;
