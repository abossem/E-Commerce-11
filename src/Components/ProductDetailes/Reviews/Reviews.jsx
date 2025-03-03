import React from "react";
import ReviewItem from "./ReviewItem";
import { Star } from "lucide-react";

const Reviews = ({ reviews, reviews_avg, reviews_count }) => {
  return (
    <div className="mt-12" id="reviews">
      <h2 className="text-xl font-medium mb-4">Customer Reviews</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-64">
          <div className="flex items-center mb-2">
            <span className="font-medium mr-2">{reviews_avg} out of 5</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${
                    star <= reviews_avg
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-[#007185]">{reviews_count} global ratings</p>
          <div className="mt-4 space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center gap-2">
                <span className="text-sm text-[#007185] w-12">
                  {rating} star
                </span>
                <div className="flex-1 h-4 bg-gray-200 rounded">
                  <div
                    className="h-full bg-[#FFA41C] rounded"
                    style={{
                      width: `${
                        (reviews.filter((r) => r.rating === rating).length /
                        reviews.length
                      ) * 100}%`,
                    }}
                  />
                </div>
                <span className="text-sm w-8">
                  {Math.round(
                    (reviews.filter((r) => r.rating === rating).length /
                      reviews.length) *
                      100
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          {reviews.map((review, index) => (
            <ReviewItem key={index} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;