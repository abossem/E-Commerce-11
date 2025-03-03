import React from "react";
import { Star } from "lucide-react";

const ReviewItem = ({ review }) => {
  return (
    <div className="border-b pb-4 mb-4 last:border-b-0">
      <div className="flex items-center gap-2">
        <img
          src={review.writer.avatar || "/placeholder.svg"}
          alt={review.writer.name}
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="font-medium">{review.writer.name}</span>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-4 w-4 ${
                star <= review.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="font-medium">{review.title}</span>
      </div>
      <div className="text-sm text-gray-500 mt-1">
        Reviewed on {new Date(review.created_at).toLocaleDateString()}
      </div>
      <p className="text-sm mt-2 whitespace-pre-line">{review.comment}</p>
      <button className="text-sm text-[#007185] mt-2">Report</button>
    </div>
  );
};

export default ReviewItem;