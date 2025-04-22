
import React, { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { type CarouselApi } from "@/components/ui/carousel";
import { MobileReviewsCarousel } from "./reviews/MobileReviewsCarousel";
import { DesktopReviewsCarousel } from "./reviews/DesktopReviewsCarousel";
import { reviewsData } from "./reviews/reviewsData";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";

export const UserReviews = () => {
  const isMobile = useIsMobile();
  const { isEnglish } = useContext(LanguageContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  // This effect syncs the carousel with the activeIndex state
  useEffect(() => {
    if (carouselApi) {
      carouselApi.scrollTo(activeIndex);
    }
  }, [carouselApi, activeIndex]);

  // Get the first 5 reviews
  const reviews = Object.values(reviewsData).slice(0, 5);

  return (
    <section id="reviews" className="w-full max-w-[1328px] mt-24 max-md:max-w-full max-md:mt-10 max-md:px-0">
      <h2 className="text-center text-[48px] leading-[120%] font-dela text-[#212121] max-md:text-[36px] max-md:px-4">
        {isEnglish 
          ? "What people in therapy with Mindly are saying" 
          : "Reseñas de usuarios de Mindly"}
      </h2>

      {isMobile ? (
        <MobileReviewsCarousel 
          reviews={reviews}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          carouselApi={carouselApi}
          setCarouselApi={setCarouselApi}
        />
      ) : (
        <DesktopReviewsCarousel 
          reviews={reviews}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          carouselApi={carouselApi}
          setCarouselApi={setCarouselApi}
        />
      )}
    </section>
  );
};
