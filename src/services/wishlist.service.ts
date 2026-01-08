import api from "../axios/apiClient";


export const fetchWishlist = async () => {
  try {
    const response = await api.get("wishlist/");
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const addToWishlist = async (productId:number) => {
  try {
    const response = await api.post(`wishlist/${productId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const removeWishlist = async (productId:number) => {
  try {
    const response = await api.delete(`wishlist/${productId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
