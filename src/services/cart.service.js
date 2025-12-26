import axios from "axios";

const API_BASE = `${import.meta.env.VITE_API_URL}cart/`;

export const fetchCart = async () => {
  const response = await axios.get(API_BASE);
  return response.data;
};
