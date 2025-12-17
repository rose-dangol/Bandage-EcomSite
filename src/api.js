import axios from "axios";

// const API_BASE = "https://jsonplaceholder.typicode.com";
const API_BASE = "http://192.168.4.28:5000/api/";

export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE}products/`);
  return response.data.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_BASE}products/${id}`);
  return response.data.data;
};
