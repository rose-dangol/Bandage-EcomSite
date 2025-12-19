import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "../../services/products";
import { useState } from "react";
import { Breadcrumb, Container } from "../../component";
import { useLocation } from "react-router-dom";
import { Trash2, CirclePlus } from "lucide-react";

const CreateProduct = () => {
  const location = useLocation();
  const [colorInput, setColorInput] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: [],
    price: "",
    discount: "",
    colors: [],
  });
  const queryClient = useQueryClient();

  const handleColorAdd = () => {
    setFormData((prev) => ({
      ...prev,
      colors: [...prev.colors, colorInput],
    }));
    setColorInput("");
  };
  const handleRemoveColor = (index) => {
    setFormData((prev) => ({
      ...prev,
      colors: prev.colors.filter((_, i) => i !== index),
    }));
  };

  const mutation = useMutation({
    mutationFn: () => addProduct(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      setFormData({
        name: "",
        description: "",
        image: [],
        price: "",
        discount: "",
        colors: [],
      });
      alert("Product created successfully!");
    },
    onError: (error) => {
      alert(`Error: ${error.message}`);
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
  const handleRemoveFile = (id) => {
    setFormData((prev) => ({
      ...prev,
      image: prev.image.filter((img) => img.id !== id),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    mutation.mutate(formData);
  };

  return (
    <Container>
      <div className="flex justify-between py-6">
        <span className="heading-3">Add Products</span>
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
          {/* {error && <p className="text-xs text-red-500 mt-1">Error Message</p>} */}
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
          <p className="text-xs text-gray-400 mt-1">
            We'll never share your email with anyone else.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-normal leading-6 tracking-[0.1px] text-[#252B42]">
            Upload <span className="text-red-500">*</span>
          </label>

          <div className="flex flex-col gap-3">
            {formData.image.length > 0 && (
              <div className="flex flex-col gap-2">
                {formData.image.map((img) => (
                  <div
                    key={img.id}
                    className="flex items-center justify-between border border-[#ECECEC] p-3"
                  >
                    <span>{img.file.name}</span>
                    <Trash2
                      color="red"
                      strokeWidth={"1px"}
                      size={"24px"}
                      onClick={() => handleRemoveFile(img.id)}
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

          {/* <p className="text-xs text-red-500 mt-1">Lorem ipsum dolor amit</p> */}
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
            {/* {error&&<p className="text-xs text-red-500 mt-1">Error Message</p>} */}
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
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-normal leading-6 tracking-[0.1px] text-[#252B42]">
            Colors
          </label>
          <div className="flex items-center gap-3">
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
          {formData.colors.map((color, index) => (
            <div key={index} className="flex items-center gap-3">
              <input
                type="text"
                value={color}
                className="w-full px-4 py-2 border border-[#E6E6E6] rounded outline-none focus:border-primary bg-[#F9F9F9] transition text-grayText focus:outline-none focus:ring-2 focus:ring-primary"
                disabled
              />
              <Trash2
                color="red"
                strokeWidth={"1px"}
                size={"24px"}
                onClick={() => handleRemoveColor(index)}
              />
            </div>
          ))}
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
