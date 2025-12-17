import axiosInstance from "./axios";
const api = axiosInstance(import.meta.env.VITE_API_URL);
const jsonPlaceholderClient = axiosInstance(
  "https://jsonplaceholder.typicode.com",
  null
);

export default api;
export { jsonPlaceholderClient };
