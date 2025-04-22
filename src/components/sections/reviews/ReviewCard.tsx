
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface ReviewCardProps {
  review: {
    client_avatar: string;
    client_first_name: string;
    client_last_name: string;
    review_rating: number;
    text_of_review: string;
  };
  index: number;
}

const bgColors = ["bg-[#F0F9F6]", "bg-[#F5F7FA]", "bg-[#F4F0FB]"];

export const ReviewCard: React.FC<ReviewCardProps> = ({ review, index }) => {
  return (
    <div className={`flex-1 p-6 rounded-3xl ${bgColors[index % bgColors.length]}`}>
      <div className="flex items-center gap-3 mb-3">
        <Avatar className="w-12 h-12">
          <AvatarImage 
            src={review.client_avatar} 
            alt={`${review.client_first_name} ${review.client_last_name}`}
            className="object-cover"
          />
          <AvatarFallback>
            {review.client_first_name[0]}
          </AvatarFallback>
        </Avatar>
        <span className="font-semibold">
          {review.client_first_name} {review.client_last_name[0]}.
        </span>
      </div>
      <div className="flex mb-3">
        {[...Array(review.review_rating)].map((_, i) => (
          <span key={i} className="text-[#FFA800] text-xl">★</span>
        ))}
      </div>
      <p className="text-sm leading-relaxed">{review.text_of_review}</p>
    </div>
  );
};
