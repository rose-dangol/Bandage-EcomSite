import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "../../services/products";
import { useState } from "react";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    status: "",
    categoryId: "",
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => addProduct(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      setFormData({ name: "", price: "", status: "", categoryId: "" });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-5 flex flex-col gap-3 bg-amber-50 w-1/2"
    >
      <div className="flex">
        <label>Product Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="border"
          required
        />
      </div>
      <div className="flex">
        <label>Price:</label>
        <input
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          type="number"
          className="border"
        />
      </div>
      <div className="flex">
        <label>Category:</label>
        <input
          name="categoryId"
          value={formData.categoryId}
          type="number"
          onChange={handleChange}
          placeholder="Category"
          className="border w-1/2"
        />
      </div>
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="border"
      >
        <option value="">Select Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <button type="submit" className="border p-4 bg-red-300 w-1/2">
        {mutation.isPending ? "Creating..." : "Create Product"}
      </button>
      {mutation.isError && <p>Error: {mutation.error.message}</p>}
      {mutation.isSuccess && <p>Product created!</p>}
    </form>
  );
};

export default CreateProduct;
