
import React, { useEffect } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel";
import { ReviewCard } from "./ReviewCard";

interface DesktopReviewsCarouselProps {
  reviews: any[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  carouselApi: CarouselApi | undefined;
  setCarouselApi: (api: CarouselApi) => void;
}

export const DesktopReviewsCarousel: React.FC<DesktopReviewsCarouselProps> = ({
  reviews,
  activeIndex,
  setActiveIndex,
  carouselApi,
  setCarouselApi
}) => {
  // Group reviews for desktop view (3 per page)
  const groupedReviews = [];
  for (let i = 0; i < reviews.length; i += 3) {
    groupedReviews.push(reviews.slice(i, i + 3));
  }

  // Calculate the active group index
  const activeGroupIndex = Math.floor(activeIndex / 3);

  // Set up auto-scrolling every 4 seconds
  useEffect(() => {
    if (!carouselApi) return;
    
    const autoplayInterval = setInterval(() => {
      const nextGroupIndex = (activeGroupIndex + 1) % groupedReviews.length;
      const nextIndex = nextGroupIndex * 3;
      setActiveIndex(nextIndex);
    }, 4000);
    
    return () => clearInterval(autoplayInterval);
  }, [carouselApi, activeGroupIndex, groupedReviews.length, setActiveIndex]);

  // Handle when carousel changes - this needs to be separate from the auto-scroll effect
  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      const currentGroupIndex = carouselApi.selectedScrollSnap();
      const newActiveIndex = currentGroupIndex * 3;
      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
      }
    };

    carouselApi.on("select", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi, activeIndex, setActiveIndex]);

  // Sync carousel with activeGroupIndex changes
  useEffect(() => {
    if (!carouselApi) return;
    
    if (carouselApi.selectedScrollSnap() !== activeGroupIndex) {
      carouselApi.scrollTo(activeGroupIndex);
    }
  }, [activeGroupIndex, carouselApi]);

  return (
    <div className="mt-10">
      <Carousel 
        className="w-full" 
        opts={{ loop: true }}
        setApi={setCarouselApi}
      >
        <CarouselContent>
          {groupedReviews.map((group, groupIndex) => (
            <CarouselItem key={groupIndex} className="basis-full">
              <div className="flex w-full gap-6 flex-wrap lg:flex-nowrap">
                {group.map((review, index) => (
                  <ReviewCard 
                    key={index} 
                    review={review} 
                    index={index + groupIndex * 3} 
                  />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      <div className="mt-6 flex justify-center space-x-2">
        {groupedReviews.map((_, groupIndex) => (
          <button
            key={groupIndex}
            onClick={() => {
              const newIndex = groupIndex * 3;
              setActiveIndex(newIndex);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              groupIndex === activeGroupIndex ? "bg-[#013A59]" : "bg-gray-200"
            }`}
            aria-label={`Go to slide group ${groupIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
