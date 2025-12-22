import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchProductById,
  getImageUrl,
  updateProduct,
} from "../../services/products";
import {
  Heart,
  ShoppingCart,
  Eye,
  ChevronRight,
  ChevronLeft,
  Star,
} from "lucide-react";
import { useLocation, useParams } from "react-router-dom";
import { Breadcrumb, Container, Creatable } from "../../component";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryClient = useQueryClient();

  const isAdmin = true;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [category, setCategory] = useState("");
  const [updatedProduct, setUpdatedProduct] = useState({
    name: "",
    price: "",
    status: "",
    categoryId: "",
  });

  // Fetching product data
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
  });
  // Setting product data
  useEffect(() => {
    if (product) {
      setUpdatedProduct({
        name: product.name || "",
        price: product.price || "",
        status: product.status || "",
        description: product.description || "",
        categoryId: product.categoryId || "",
      });
      if (product.color) {
        setSelectedColor(product.color.color);
      }
    }
  }, [product]);

  const mutation = useMutation({
    mutationFn: () => updateProduct(id, updatedProduct),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product", id] });
      toast.success("Product updated!");
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
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
    setUpdatedProduct((prev) => ({
      ...prev,
      category: category,
    }));
    mutation.mutate(updatedProduct);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.img.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.img.length - 1 ? 0 : prev + 1
    );
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center py-20">Loading...</div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center py-20">
        Error: {error.message}
      </div>
    );
  if (!product)
    return (
      <div className="flex items-center justify-center py-20">
        No Product found
      </div>
    );
  const currentImage = product.img?.[currentImageIndex];
  return (
    <div className="bg-[#FAFAFA]">
      <Container>
        <div className="py-7">
          <Breadcrumb location={location} />
        </div>
        <div className="flex md:flex-row flex-col gap-15 pb-12">
          {/* images */}
          <div className="flex flex-col gap-4 w-1/2">
            {/* main image */}
            <div className="relative overflow-hidden w-full h-[500px]">
              {currentImage ? (
                <img
                  src={getImageUrl(currentImage.url)}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No image available
                </div>
              )}

              {product.img?.length > 1 && (
                <>
                  <ChevronLeft
                    onClick={handlePrevImage}
                    color="white"
                    size={60}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-blueBlack cursor-pointer transition"
                  />
                  <ChevronRight
                    color="white"
                    size={60}
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-blueBlack cursor-pointer transition"
                  />
                </>
              )}
            </div>

            {product.img?.length > 1 && (
              <div className="flex gap-2">
                {product.img.map((img, idx) => (
                  <div
                    key={img.id}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border ${
                      currentImageIndex === idx
                        ? "border-gray-900"
                        : "border-gray-300 hover:border-gray-600"
                    }`}
                  >
                    <img
                      src={getImageUrl(img.url)}
                      alt={`Thumbnail ${idx}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* product data */}
          <div className="flex flex-col pt-3 w-1/2 gap-7">
            <div className="flex flex-col gap-2">
              <span className="heading-4 text-blueBlack">{product.name}</span>

              {/* review */}
              <div className="flex items-center gap-3 mb-4 heading-6">
                <div className="text-lg flex gap-1 items-center">
                  <Star color="#F3CD03" fill="#F3CD03" />
                  <Star color="#F3CD03" fill="#F3CD03" />
                  <Star color="#F3CD03" fill="#F3CD03" />
                  <Star color="#F3CD03" fill="#F3CD03" />
                </div>
                <span className="text-grayText">
                  {product.reviews?.length || 0} Reviews
                </span>
              </div>

              {/* price */}
              <div className="heading-3 text-blueBlack">
                ${product.priceAfterDiscount?.toFixed(2) || product.price}
              </div>

              {product.discount > 0 && (
                <div className="paragraph text-mutedText line-through">
                  ${product.price}
                </div>
              )}

              {/*availablity  */}
              <div className="mb-6 inline-block heading-6 space-x-3">
                <span className="text-grayText">Availability :</span>
                <span
                  className={`${
                    product.status === "active"
                      ? "text-primary"
                      : "text-red-800"
                  }`}
                >
                  {product.status === "active" ? "In Stock" : "Out of Stock"}
                </span>
              </div>
              <div className="w-[75%] mb-2">
                <p className="paragraph text-[#858585] text-left">
                  {product.description ||
                    "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.Excitation venial consequent sent nostrum met."}
                </p>
              </div>

              {product.category && (
                <div className="heading-6">
                  <span className="text-grayText">Category: </span>
                  <span className="text-blueBlack">
                    {product.category.name}
                  </span>
                </div>
              )}

              {product.color && (
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedColor(product.color.color)}
                    className={`w-7 h-7 rounded-full border-2 transition ${
                      selectedColor === product.color.color
                        ? "border-gray-900"
                        : "border-gray-300 hover:border-gray-600"
                    }`}
                    style={{
                      backgroundColor: product.color.color,
                    }}
                    title={product.color.color}
                  />
                </div>
              )}
            </div>

            <div className="flex gap-3 pt-6 border-t border-gray-200">
              <button className="max-w-max bg-primary hover:bg-secondary text-white heading-6 py-3 px-4 rounded-lg transition">
                Select Options
              </button>
              <button className="p-3 border border-gray-300 hover:border-gray-400 rounded-full transition">
                <Heart size={20} className="text-gray-600" />
              </button>
              <button className="p-3 border border-gray-300 hover:border-gray-400 rounded-full transition">
                <ShoppingCart size={20} className="text-gray-600" />
              </button>
              <button className="p-3 border border-gray-300 hover:border-gray-400 rounded-full transition">
                <Eye size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
        {/* Admin Edit Section */}
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
                Category
              </label>
              <Creatable setCategory={setCategory} />
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

        {/* Description Section */}
        <div className="flex justify-center gap-15 links text-grayText mt-3 border-b py-5 border-b-[#ECECEC] w-[80%] mx-auto">
          <span>Description</span>
          <span>Additional Information</span>
          <span>Reviews ()</span>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;
