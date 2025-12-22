import axios from "axios";
const API_BASE = import.meta.env.VITE_API_URL;

export const getCategories = async () => {
  const response = await axios.get(`${API_BASE}categories/`);
  // console.log(response.data);
  return response.data.data;
};

export const addCategory = async (categoryData) => {
  const formData = new FormData();
  formData.append("name", categoryData);
  const response = await axios.post(`${API_BASE}categories/`, formData);
  console.log(response.data);
  return response.data;
};

export const getCategoryById = async (id) => {
  const response = await axios.get(`${API_BASE}categories/${id}`);
  return response.data.data;
};
