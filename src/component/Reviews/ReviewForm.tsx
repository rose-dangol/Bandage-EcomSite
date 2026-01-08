import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { addReviews } from "../../services/review.service";
import toast from "react-hot-toast";
import { queryClient } from "../../provider";
import { Rating } from "react-simple-star-rating";
import { QUERY_KEYS } from "../../constant/queryKeys";

const ReviewForm = ({ id }: { id: string }) => {
  const productId = Number(id);

  const [reviewData, setReviewData] = useState({
    description: "",
    rating: 0,
  });

  const [reviewError, setReviewError] = useState("");
  const [ratingError, setRatingError] = useState("");

  const { mutate, isPending } = useMutation({
    mutationFn: () => addReviews(productId, reviewData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.reviews, id],
      });
      toast.success("Review Added!");
      setReviewData({
        description: "",
        rating: 0,
      });
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setReviewData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setRatingError("");
    setReviewError("");
  };

  const handleRating = (rate: number) => {
    setReviewData((prev) => ({
      ...prev,
      rating: rate,
    }));
  };

  const handleSubmit = () => {
    if (isPending) return;
    if (reviewData.description === "") {
      setReviewError("Description cannot be empty.");
      return;
    }
    if (reviewData.rating <= 0) {
      setRatingError("Rating must be at least 1.");
      return;
    }
    if (reviewData.rating > 5) {
      setRatingError("Rating cannot be more than 5.");
      return;
    }
    mutate();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-6">
      <p className="heading-5 text-center">Rate the product</p>

      <div className="flex flex-col gap-3 justify-center items-center">
        <Rating
          SVGstyle={{
            display: "inline",
          }}
          onClick={handleRating}
          initialValue={reviewData.rating}
          allowFraction
        />
        {ratingError && <p className="text-red-400 paragraph">{ratingError}</p>}
      </div>
      <div className="flex flex-col gap-2 mt-3">
        {/* <label className="font-normal leading-6 tracking-[0.1px] text-[#252B42]">
          Review
        </label> */}
        <textarea
          placeholder="Share your thoughts with other customers"
          name="description"
          rows={4}
          value={reviewData.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-[#E6E6E6] rounded outline-none focus:border-primary bg-[#F9F9F9] transition placeholder:text-grayText focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {reviewError && <p className="text-red-500 paragraph">{reviewError}</p>}
      </div>

      {/* <div className="flex flex-col gap-2 pt-5">
        <label className="font-normal leading-6 tracking-[0.1px] text-[#252B42]">
          Rating
        </label>
        <input
          type="number"
          max={5}
          min={1}
          name="rating"
          value={reviewData.rating}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-[#E6E6E6] rounded outline-none focus:border-primary bg-[#F9F9F9] transition placeholder:text-grayText focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {ratingError && <p className="text-red-400">{ratingError}</p>}
      </div> */}
      <button
        onClick={handleSubmit}
        className={`mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-secondary btn-transitions cursor-pointer`}
        disabled={isPending}
        onKeyDown={handleKeyPress}
      >
        {isPending ? "Submitting" : "Submit Review"}
      </button>
    </div>
  );
};

export default ReviewForm;
