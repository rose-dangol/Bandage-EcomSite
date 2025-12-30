import axios from "axios";

const axiosInstance = (baseURL: string, contentType = "application/json") => {
  const instance = axios.create({
    baseURL,
    timeout: 60000,
    headers: {
      "Content-Type": contentType,
      "Access-Control-Allow-Origin": "*",
    },
  });
  instance.interceptors.request.use(
    (config) => {
      const token = JSON.parse(localStorage.getItem("authToken"));
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      console.error("request error", error);
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        const statusCode = error.response.status;
        const errorMessage = error.response.data.message || "An error occurred";

        if (statusCode === 401) {
          // Handle unauthorized error, for example by redirecting to login
          console.error("Unauthorized access - redirecting to login");
        } else if (statusCode === 500) {
          // Handle server errors
          console.error("Server error - try again later");
        } else {
          // Handle other types of errors
          console.error(`Error ${statusCode}: ${errorMessage}`);
        }
      } else if (error.request) {
        // No response received (network error, timeout, etc.)
        console.error("Network error - check your internet connection");
      } else {
        // Something else happened during the request
        console.error("Request error:", error.message);
      }
      return Promise.reject(error);
    }
  );
  return instance;
};
export default axiosInstance;
