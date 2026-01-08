import axios from "axios";

// const API_BASE = "https://jsonplaceholder.typicode.com";
const API_BASE = `${import.meta.env.VITE_API_URL}products/`;

export const getImageUrl = (path: string) => {
  const img = `${import.meta.env.VITE_API_BASE}/${path}`;
  return img;
};

export const fetchProducts = async (page = 1, limit = 10) => {
  const response = await axios.get(API_BASE, {
    params: {
      status: "active",
      page,
      limit,
    },
  });
  return response.data;
};

export const fetchProductById = async (id: any) => {
  const response = await axios.get(`${API_BASE}${id}`);
  return response.data.data;
};

export const addProduct = async (productData: {
  name: string;
  description: string;
  image: File[];
  price: string;
  discount: string;
  colors: string[];
  categoryId: string;
}) => {
  try {
    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("description", productData.description);
    productData.image.forEach((image) => {
      formData.append("image", image);
    });
    formData.append("price", productData.price);
    formData.append("discount", productData.discount);
    productData.colors.forEach((color, index) => {
      formData.append(`colors[${index}]`, color);
    });
    formData.append("categoryId", productData.categoryId);
    const response = await axios.post(`${API_BASE}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const updateProduct = async (
  id: string,
  productData: {
    name: string;
    description: string;
    image: File[];
    price: string;
    discount: string;
    colors: string[];
    categoryId: string;
  }
) => {
  const formData = new FormData();

  formData.append("name", productData.name);
  formData.append("description", productData.description);
  productData.image.forEach((image) => {
    formData.append(`image`, image);
  });
  formData.append("price", productData.price);
  formData.append("discount", productData.discount);
  productData.colors.forEach((color, index) => {
    formData.append(`colors[${index}]`, color);
  });
  formData.append("categoryId", productData.categoryId);
  const response = await axios.patch(`${API_BASE}${id}`, formData);
  return response.data;
};

export const deleteProduct = async (id: number) => {
  const response = await axios.delete(`${API_BASE}${id}`);
  return response.data;
};
