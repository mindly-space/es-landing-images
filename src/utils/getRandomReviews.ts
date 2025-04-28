import { Review } from "@/types/reviews";

/**
 * Returns a random subset of reviews from the given array
 */
export const getRandomReviews = (reviews: Review[], count: number) => {
  const shuffled = [...reviews].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
