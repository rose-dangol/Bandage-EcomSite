import axios from "axios";

// const API_BASE = "https://jsonplaceholder.typicode.com";
const API_BASE = import.meta.env.VITE_API_URL;

export const getImageUrl = (path) => {
  const img = `http://192.168.4.28:5000/${path}`;
  console.log(img);
  return img;
};

export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE}products/`, {
    params: {
      status: "active",
    },
  });
  return response.data.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}products/${id}`
  );
  return response.data.data;
};

export const addProduct = async (productData) => {
  console.log(productData);
  const formData = new FormData();
  formData.append("name", productData.name);
  formData.append("decription", productData.description);
  productData.image.forEach((image) => {
    formData.append("image", image.file);
  });
  console.log(productData.image);
  formData.append("price", productData.price);
  formData.append("discount", productData.discount);
  productData.colors.forEach((color) => {
    formData.append("colors", color);
  });
  formData.append("categoryId", 2);
  console.log(formData);
  const response = await axios.post(`${API_BASE}products/`, formData);
  return response.data;
};

export const updateProduct = async (id, productData) => {
  const response = await axios.patch(`${API_BASE}products/${id}`, productData);
  return response.data;
};
