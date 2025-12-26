import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addProduct,
  fetchProductById,
  getImageUrl,
  updateProduct,
} from "../../services/products.service";
import { useEffect, useState } from "react";
import { Breadcrumb, Container, Creatable } from "../../component";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Trash2, CirclePlus } from "lucide-react";
import toast from "react-hot-toast";
import { urlToObject, validateColorName } from "../../utils/helper";

const CreateProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] = useState({});
  const [colorInput, setColorInput] = useState([]);
  const [category, setCategory] = useState();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: [],
    price: "",
    discount: "",
    colors: [],
  });

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    enabled: !!id,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        description: product.description || "",
        image:
          product.image?.map((url, idx) => ({
            url,
            id: idx,
          })) || [],
        price: product.price || "",
        discount: product.discount || "",
        colors: product.colors || [],
      });
      setCategory(product.category.id);
    }
  }, [product]);

  const queryClient = useQueryClient();

  const handleColorAdd = () => {
    if (colorInput) {
      if (validateColorName(colorInput)) {
        setFormData((prev) => ({
          ...prev,
          colors: [...prev.colors, colorInput],
        }));
        setColorInput([]);
      } else {
        setError({ color: "Color must be valid" });
      }
    }
  };
  const handleRemoveColor = (index) => {
    setFormData((prev) => ({
      ...prev,
      colors: prev.colors.filter((_, i) => i !== index),
    }));
  };

  const AddMutation = useMutation({
    mutationFn: () => addProduct({ ...formData, categoryId: category }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      setFormData({
        name: "",
        description: "",
        image: [],
        price: "",
        discount: "",
        colors: [],
        // categoryId: "",
      });
      toast.success("Product added successfully!");
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });

  const UpdateMutation = useMutation({
    mutationFn: (data) => updateProduct(id, data),
    onSuccess: () => {
      toast.success("Product updated successfully!");
      navigate(`/shop/products/${product.id}`);
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files) {
      const newImage = Array.from(files).map((file) => ({
        file,
        id: Date.now() + Math.random(),
      }));
      setFormData((prev) => ({
        ...prev,
        image: [...prev.image, ...newImage],
      }));
    }
  };

  const handleRemoveFile = (index) => {
    setFormData((prev) => ({
      ...prev,
      image: prev.image.filter((_, i) => i !== index),
    }));
  };

  const validateForm = (updatedFormData) => {
    const newError = {};

    if (!updatedFormData.name) {
      newError.name = "Name is required";
    }

    if (!updatedFormData.description) {
      newError.description = "Description is required";
    }

    if (updatedFormData.image.length === 0) {
      newError.image = "There should be atleast one image.";
    }

    if (updatedFormData.price <= 0) {
      newError.price = "Price must be greater than 0";
    }

    if (updatedFormData.discount < 0 || updatedFormData.discount > 100) {
      newError.discount = "Discount must be between 0-100";
    }

    if (updatedFormData.colors.length === 0) {
      newError.colors = "Select atleast one color option";
    }

    setError(newError);
    if (Object.keys(newError).length > 0) {
      Object.values(newError).forEach((e) => {
        toast.error(e);
      });
    }
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const convertedImage = await Promise.all(
      formData.image.map(async (imageData) => {
        if (imageData.file) {
          return imageData.file;
        }
        if (imageData.url) {
          return await urlToObject(imageData.url);
        }
      })
    );

    const updatedFormData = {
      ...formData,
      image: convertedImage,
      categoryId: category,
    };
    if (validateForm(updatedFormData)) {
      if (id) {
        UpdateMutation.mutate(updatedFormData);
      } else {
        AddMutation.mutate(updatedFormData);
      }
    }
  };
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Container>
      <div className="flex justify-between py-6">
        <span className="heading-3">
          {product ? "Update Products" : "Add Product"}
        </span>
        <Breadcrumb location={location} />
      </div>

      <div className="w-full max-w-2xl p-6 space-y-6">
        <div className="flex flex-col gap-2 pt-5">
          <label className="font-normal leading-6 tracking-[0.1px] text-[#252B42]">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter product name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#E6E6E6] rounded outline-none focus:border-primary bg-[#F9F9F9] transition placeholder:text-grayText focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {error.name && (
            <p className="text-xs text-red-500 mt-1">{error.name}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="block font-normal leading-6 tracking-[0.1px] text-[#252B42]">
            Description
          </label>
          <textarea
            rows="4"
            placeholder="Your Message"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#E6E6E6] rounded outline-none focus:border-primary bg-[#F9F9F9] transition placeholder:text-grayText focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {error.description && (
            <p className="text-xs text-red-500 mt-1">{error.description}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-normal leading-6 tracking-[0.1px] text-[#252B42]">
            Upload <span className="text-red-500">*</span>
          </label>

          <div className="flex flex-col gap-3">
            {formData.image.length > 0 && (
              <div className="flex flex-col gap-2">
                {formData.image.map((img, index) => (
                  <div
                    key={img.id || index}
                    className="flex items-center justify-between border border-[#ECECEC] p-3"
                  >
                    {img.url ? (
                      <img
                        src={getImageUrl(img.url)}
                        className="h-12 w-10"
                        alt="preview"
                      />
                    ) : img.file ? (
                      <span>{img.file?.name}</span>
                    ) : null}

                    <Trash2
                      color="red"
                      strokeWidth={"1px"}
                      size={"24px"}
                      onClick={() => handleRemoveFile(index)}
                      className="cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            )}
            <div className="flex">
              <label className="flex items-center w-full border border-gray-200 bg-[#F9F9F9] rounded-l-md px-4 py-3 text-sm text-gray-400 cursor-pointer">
                <span className="mr-2">🔗</span>
                Choose File
                <input
                  type="file"
                  className="hidden"
                  name="image"
                  onChange={handleFileChange}
                  multiple
                />
              </label>
              <button className="bg-primary text-white px-6 rounded-r-md btn-text">
                Go
              </button>
            </div>
          </div>
          {error.image && (
            <p className="text-xs text-red-500 mt-1">{error.image}</p>
          )}
        </div>

        <div className="flex gap-2">
          <div className="flex flex-col flex-1">
            <label className="font-normal leading-6 tracking-[0.1px] text-[#252B42]">
              Price
            </label>
            <input
              type="text"
              placeholder="Price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="px-4 py-2 border border-[#E6E6E6] rounded outline-none focus:border-primary bg-[#F9F9F9] transition placeholder:text-grayText focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {error.price && (
              <p className="text-xs text-red-500 mt-1">{error.price}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="font-normal leading-6 tracking-[0.1px] text-[#252B42]">
              Discount
            </label>
            <input
              type="text"
              placeholder="Discount"
              name="discount"
              value={formData.discount}
              onChange={handleChange}
              className="max-w-max px-4 py-2 border border-[#E6E6E6] rounded outline-none focus:border-primary bg-[#F9F9F9] transition placeholder:text-grayText focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {error.discount && (
              <p className="text-xs text-red-500 mt-1">{error.discount}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-normal leading-6 tracking-[0.1px] text-[#252B42]">
            Category
          </label>
          <Creatable
            setCategory={setCategory}
            name={product?.category?.name || ""}
          />
          {error.category && (
            <p className="text-xs text-red-500 mt-1">{error.category}</p>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <label className="font-normal leading-6 tracking-[0.1px] text-[#252B42]">
            Colors
          </label>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Add Colors"
              value={colorInput}
              onChange={(e) => setColorInput(e.target.value)}
              onKeyPress={(e) =>
                e.key === "Enter" && (e.preventDefault(), handleColorAdd())
              }
              className="w-full px-4 py-2 border border-[#E6E6E6] rounded outline-none focus:border-primary bg-[#F9F9F9] transition placeholder:text-grayText focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <CirclePlus
              color={"#AEAEAE"}
              size={"24px"}
              onClick={handleColorAdd}
            />
          </div>
          {error.colors && (
            <p className="text-xs text-red-500 mt-1">{error.colors}</p>
          )}
          <div className="flex w-full justify-items-start flex-wrap gap-10">
            {formData.colors.map((color, index) => (
              <div key={index} className="flex items-center gap-5">
                <div className="flex items-center space-x-1">
                  <div
                    className={`h-10 w-10 rounded border border-[#E6E6E6] transition`}
                    style={{
                      backgroundColor: color?.color || color,
                    }}
                  />
                  <span className="paragraph uppercase">
                    {color?.color || color}
                  </span>
                </div>
                <Trash2
                  color="red"
                  strokeWidth={"1px"}
                  size={"24px"}
                  onClick={() => handleRemoveColor(index)}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className="flex-1 bg-primary text-white btn-text px-3 py-2 rounded hover:bg-secondary btn-transitions"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </Container>
  );
};

export default CreateProduct;
