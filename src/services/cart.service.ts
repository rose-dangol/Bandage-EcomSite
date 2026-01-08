import api from "../axios/apiClient";

export const fetchCart = async () => {
  const response = await api.get("cart/");
  return response.data.data;
};

export const addToCart = async (id: number, quantity: number) => {
  try {
    const response = await api.post("cart/", {
      productId: id,
      quantity: quantity,
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateCartQuantity = async (id: number, newQuantity: number) => {
  try {
    const response = await api.patch(`cart/${id}`, {
      quantity: newQuantity,
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteCart = async (id: number) => {
  try {
    const response = await api.delete(`cart/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
