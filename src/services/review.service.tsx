import api from "../axios/apiClient";

export const fetchReviews = async (id: number) => {
  try {
    const response = await api.get(`products/${id}/reviews/`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const addReviews = async (
  id: number,
  reviewData: {
    description: string;
    rating: number;
  }
) => {
  try {
    const response = await api.post(`products/${id}/reviews/`, reviewData);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteReviews = async (productId: number, reviewId: number) => {
  try {
    console.log(reviewId);
    const response = await api.delete(
      `products/${productId}/reviews/${reviewId}`
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
