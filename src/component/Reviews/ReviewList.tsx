import { SquarePen, Star, Trash2 } from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteReviews, fetchReviews } from "../../services/review.service";
import { queryClient } from "../../provider";
import { dateFormatter } from "../../utils/helper";
import { useUserContext } from "../../context/UserContext";
import { QUERY_KEYS } from "../../constant/queryKeys";

type ReviewDataType = {
  id: number;
  user: {
    id: number;
    firstName: string;
  };
  rating: number;
  description: string;
  created_at: string;
};

const ReviewList = ({ id }: { id: string }) => {
  const { userData } = useUserContext();

  const { data } = useQuery({
    queryKey: [QUERY_KEYS.reviews, id],
    queryFn: () => fetchReviews(Number(id)),
    enabled: !!id,
  });

  const { mutate: deleteReview } = useMutation({
    mutationFn: ({
      productId,
      reviewId,
    }: {
      productId: number;
      reviewId: number;
    }) => deleteReviews(productId, reviewId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.reviews, id],
      });
      toast.success("Review Added!");
    },
  });

  if (data?.reviews?.length <= 0) {
    return (
      <p className="text-primary text-center">There are no reviews yet!</p>
    );
  }

  return (
    <div className="flex flex-col items-start pt-5 lg:w-1/2 overflow-y-scroll scroll-smooth">
      {data?.reviews?.map((review: ReviewDataType) => (
        <div
          key={review.id}
          className="border rounded-md border-mutedText p-3 mb-5 w-full hover:shadow-md space-y-3"
        >
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="heading-6">{review.user.firstName}</p>
              <span className="border-b pb-3 border-mutedText/25 paragraph text-gray-400">
                {dateFormatter(review?.created_at)}
              </span>
            </div>
            {review.user.id == userData.id && (
              <div className="flex gap-2 text-gray-500">
                <button
                  className="cursor-pointer hover:text-red-600"
                  onClick={() =>
                    deleteReview({
                      productId: Number(id),
                      reviewId: review.id,
                    })
                  }
                >
                  <Trash2 />
                </button>
                <button className="cursor-pointer hover:text-secondary">
                  <SquarePen />
                </button>
              </div>
            )}
          </div>
          <p className="paragraph bg-[#4C74E4] px-3 py-2 max-w-max flex gap-1 items-center text-white rounded-md">
            {review.rating} <Star size="20px" fill={"#FFBC0B"} stroke="none" />
          </p>
          <p className="paragraph text-gray-500">{review.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
