import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";
import { Rating } from "react-simple-star-rating";
import { numberFormatter } from "../../utils/helper";

type ReviewObjectType = {
  reviews: [
    {
      id: number;
      user: {
        id: number;
        firstName: string;
      };
      rating: number;
      description: string;
      created_at: string;
    }
  ];
  stats: {
    "1": number;
    "2": number;
    "3": number;
    "4": number;
    "5": number;
    average: number;
  };
};

const Reviews = ({
  id,
  reviews,
}: {
  id: string;
  reviews: ReviewObjectType;
}) => {
  let totalReviews = 0;
  let totalRating = 0;

  if (reviews) {
    let a = Object.entries(reviews?.stats).filter(
      (val) => val[0] !== "average"
    );
    a.forEach(([rating, people]) => {
      totalReviews += Number(people);
      totalRating += Number(rating) * Number(people);
    });
  }

  return (
    <div className="flex lg:flex-row flex-col p-8 gap-10 justify-items-start w-full max-h-[650px]">
      <div className="flex flex-col lg:w-1/2 gap-6" id="formDiv">
        <div className="text-center flex flex-col gap-3">
          <div className="heading-3 text-gray-500 flex gap-2 justify-center items-center">
            <span className="mt-1">{reviews?.stats?.average} </span>
            <Rating
              SVGstyle={{ display: "inline" }}
              initialValue={reviews?.stats?.average}
              readonly
              size={30}
            />
          </div>
          <p className="heading-6 text-gray-500">
            {totalReviews} Reviews & {totalRating} Ratings
          </p>
        </div>
        {reviews?.stats && (
          <div className="space-y-2 text-xs max-w-max mx-auto">
            {Object.entries(reviews.stats)
              .filter((val) => val[0] !== "average")
              .map(([key, value]) => (
                <div className="flex gap-5 items-center justify-center">
                  <span className="border border-mutedText px-2.5 rounded-lg py-1">
                    {key}
                  </span>
                  <Rating
                    SVGstyle={{ display: "inline", marginRight: "5px" }}
                    size={24}
                    initialValue={Number(key)}
                    readonly
                    fillColor={"#FFBC0B"}
                  />
                  <span key={key}>{numberFormatter(value)}</span>
                </div>
              ))}
          </div>
        )}

        <ReviewForm id={id} />
      </div>

      <ReviewList id={id} />
    </div>
  );
};

export default Reviews;
