import { useMutation, useQuery } from "@tanstack/react-query";
import {
  deleteProduct,
  fetchProductById,
  getImageUrl,
} from "../../services/products.service";
import {
  Heart,
  ShoppingCart,
  Eye,
  ChevronRight,
  ChevronLeft,
  SquarePen,
  Star,
  Trash,
} from "lucide-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Breadcrumb, Container, DialogBox } from "../../component";
import { useState } from "react";
import { formatCurrency } from "../../utils/helper";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  // const [isFilled, setIsFilled] = useState(false);

  // Fetching product data
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    refetchOnWindowFocus: false,
  });

  const DeleteMutation = useMutation({
    mutationFn: (id: number) => deleteProduct(id),
    onSuccess: () => navigate("/shop"),
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-center py-20">Loading...</div>
    );

  if (!product)
    return (
      <div className="flex items-center justify-center py-20">
        No Product found
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center py-20">
        Error: {error.message}
      </div>
    );

  const imageUrls = product.image;
  const currentImage = imageUrls?.[currentImageIndex];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? imageUrls.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === imageUrls.length - 1 ? 0 : prev + 1
    );
  };

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
            <div className="relative overflow-hidden w-full h-125">
              {currentImage ? (
                <img
                  src={(currentImage)}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No image available
                </div>
              )}
              {product.image?.length > 1 && (
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
            {product.image.length > 1 && (
              <div className="flex gap-2">
                {product.image.map((url: string, idx: number) => (
                  <div
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border ${
                      currentImageIndex === idx
                        ? "border-gray-900"
                        : "border-gray-300 hover:border-gray-600"
                    }`}
                  >
                    <img
                      src={(url)}
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
              <span className="heading-4 text-blueBlack capitalize">{product.name}</span>

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
                {formatCurrency(
                  Number(
                    (product.priceAfterDiscount ?? product.price).toFixed(2)
                  )
                )}
              </div>

              {product.discount > 0 && (
                <div className="paragraph text-mutedText line-through">
                  {formatCurrency(product.price)}
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
                  {product.description || "Description not available."}
                </p>
              </div>

              {product.category && (
                <div className="heading-6">
                  <span className="text-grayText">Category: </span>
                  <span className="text-blueBlack capitalize">
                    {product.category.name}
                  </span>
                </div>
              )}
              {product.colors?.length > 0 && (
                <div className="flex gap-3">
                  {product.colors.map((color: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(color)}
                      className={`w-7 h-7 rounded-full border-2 transition ${
                        selectedColor === color
                          ? "border-gray-900"
                          : "border-gray-300 hover:border-gray-600"
                      }`}
                      style={{
                        backgroundColor: color,
                      }}
                      title={color}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="flex gap-3 pt-6 border-t border-gray-200">
              <button className="max-w-max bg-primary hover:bg-secondary text-white heading-6 py-3 px-4 rounded-lg transition">
                Select Options
              </button>
              <div className="min-h-12 min-w-12 border border-gray-300 hover:border-gray-400 rounded-full transition flex items-center justify-center">
                <Heart size={20} className="text-gray-600" />
              </div>
              <div className="min-h-12 min-w-12 border border-gray-300 hover:border-gray-400 rounded-full transition flex items-center justify-center">
                <ShoppingCart size={20} className="text-gray-600" />
              </div>
              <div className="min-h-12 min-w-12 border border-gray-300 hover:border-gray-400 rounded-full transition flex items-center justify-center">
                <Eye size={20} className="text-gray-600" />
              </div>
            </div>
          </div>

          {/* action */}
          <div className="flex flex-col items-center gap-8 text-grayText pt-10">
            <SquarePen
              className="hover:text-blueBlack cursor-pointer"
              onClick={() => navigate(`/updateProduct/${id}`)}
            />
            <Trash
              className="hover:text-red-500 cursor-pointer"
              onClick={() => setShowDialog(true)}
            />
          </div>
          {showDialog && (
            <DialogBox
              title={"Delete Confirmation"}
              subText={"Are you sure you want to delete?"}
            >
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setShowDialog(false)}
                  className="px-4 py-2 border border-gray-300 rounded text-blueBlack heading-6 cursor-pointer hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    DeleteMutation.mutate(Number(id));
                    setShowDialog(false);
                  }}
                  className="px-4 py-2 bg-red-500 text-white rounded heading-6 cursor-pointer hover:bg-red-600 transition"
                >
                  Confirm
                </button>
              </div>
            </DialogBox>
          )}
        </div>

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
