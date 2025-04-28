
import React, { useState, useContext, useMemo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { type CarouselApi } from "@/components/ui/carousel";
import { MobileReviewsCarousel } from "./reviews/MobileReviewsCarousel";
import { DesktopReviewsCarousel } from "./reviews/DesktopReviewsCarousel";
import { reviewsData } from "./reviews/reviewsData";
import { LanguageContext } from "@/contexts/LanguageContext";
import { getRandomReviews } from "@/utils/getRandomReviews";

export const UserReviews = () => {
  const isMobile = useIsMobile();
  const { isEnglish } = useContext(LanguageContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  // Convert reviews from object to array and get random reviews based on view
  const allReviews = Object.values(reviewsData);
  const displayedReviews = useMemo(() => {
    const count = isMobile ? 4 : 12;
    return getRandomReviews(allReviews, count);
  }, [isMobile]);

  console.log(`${isMobile ? 'Mobile' : 'Desktop'} reviews:`, displayedReviews);

  return (
    <section id="reviews" className="w-full max-w-[1328px] mt-24 max-md:max-w-full max-md:mt-10 max-md:px-0">
      <h2 className="text-center text-[48px] leading-[120%] font-dela text-[#212121] max-md:text-[36px] max-md:px-4">
        {isEnglish 
          ? "What people in therapy with Mindly are saying" 
          : "Reseñas de usuarios de Mindly"}
      </h2>

      {isMobile ? (
        <MobileReviewsCarousel 
          reviews={displayedReviews}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          carouselApi={carouselApi}
          setCarouselApi={setCarouselApi}
        />
      ) : (
        <DesktopReviewsCarousel 
          reviews={displayedReviews}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          carouselApi={carouselApi}
          setCarouselApi={setCarouselApi}
        />
      )}
    </section>
  );
};
