
import React, { useEffect } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel";
import { ReviewCard } from "./ReviewCard";

interface MobileReviewsCarouselProps {
  reviews: any[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  carouselApi: CarouselApi | undefined;
  setCarouselApi: (api: CarouselApi) => void;
}

export const MobileReviewsCarousel: React.FC<MobileReviewsCarouselProps> = ({
  reviews,
  activeIndex,
  setActiveIndex,
  carouselApi,
  setCarouselApi
}) => {
  // Set up auto-scrolling every 4 seconds
  useEffect(() => {
    if (!carouselApi) return;
    
    const autoplayInterval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % reviews.length;
      setActiveIndex(nextIndex);
    }, 4000);
    
    return () => clearInterval(autoplayInterval);
  }, [carouselApi, activeIndex, reviews.length, setActiveIndex]);

  // Handle when carousel changes - this needs to be separate from the auto-scroll effect
  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      const currentIndex = carouselApi.selectedScrollSnap();
      if (currentIndex !== activeIndex) {
        setActiveIndex(currentIndex);
      }
    };

    carouselApi.on("select", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi, activeIndex, setActiveIndex]);

  // Sync carousel with activeIndex changes
  useEffect(() => {
    if (!carouselApi) return;
    
    if (carouselApi.selectedScrollSnap() !== activeIndex) {
      carouselApi.scrollTo(activeIndex);
    }
  }, [activeIndex, carouselApi]);

  return (
    <div className="mt-10">
      <Carousel 
        className="w-full" 
        opts={{ loop: true }}
        setApi={setCarouselApi}
      >
        <CarouselContent>
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
              <ReviewCard review={review} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      <div className="mt-6 flex justify-center space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-[#013A59]" : "bg-gray-200"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
