import axios from "axios";

// const API_BASE = "https://jsonplaceholder.typicode.com";
const API_BASE = import.meta.env.VITE_API_URL;

export const getImageUrl = (path) => {
  const img = `http://192.168.4.28:5000/${path}`;
  console.log(img);
  return img;
};

export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE}products/`);
  return response.data.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}products/${id}`
  );
  return response.data.data;
};

export const addProduct = async (productData) => {
  const response = await axios.post(`${API_BASE}products/`, productData);
  return response.data;
};
