import api from "../axios/apiClient";

export const fetchCart = async () => {
  const response = await api.get('cart/');
  console.log("inside the api", response)
  return response.data.data
};

