import axios from "axios";
const API_BASE = import.meta.env.VITE_API_URL;

export const fetchCategories = async () => {
  const response = await axios.get(`${API_BASE}categories/`);
  return response.data.data;
};

export const addCategory = async (categoryData:string) => {
  const formData = new FormData();
  formData.append("name", categoryData);
  const response = await axios.post(`${API_BASE}categories/`, formData);
  return response.data;
};

export const fetchCategoryById = async (id:number) => {
  const response = await axios.get(`${API_BASE}categories/${id}`);
  return response.data.data;
};

export const deleteCategory = async (id:number) => {
  const response = await axios.delete(`${API_BASE}categories/${id}`);
  return response.data.data;
};
