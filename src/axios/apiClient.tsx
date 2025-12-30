import axiosInstance from "./axios";

const api = axiosInstance(import.meta.env.VITE_API_URL);

export default api;
