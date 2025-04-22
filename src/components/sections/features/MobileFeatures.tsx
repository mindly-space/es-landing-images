
import React, { useEffect } from "react";
import { Carousel, CarouselContent, CarouselApi } from "@/components/ui/carousel";
import { MobileFeature } from "./MobileFeature";
import { FeaturePagination } from "./FeaturePagination";
interface FeatureItem {
  id: number;
  title: string;
  description: string;
  image: string;
}
interface MobileFeaturesProps {
  featureData: FeatureItem[];
  activeFeature: number;
  setActiveFeature: (index: number) => void;
  carouselApi: CarouselApi | null;
  setCarouselApi: (api: CarouselApi) => void;
}
export const MobileFeatures: React.FC<MobileFeaturesProps> = ({
  featureData,
  activeFeature,
  setActiveFeature,
  carouselApi,
  setCarouselApi
}) => {
  // Update carousel index when activeFeature changes
  useEffect(() => {
    if (carouselApi) {
      carouselApi.scrollTo(activeFeature);
    }
  }, [carouselApi, activeFeature]);

  // Update activeFeature when carousel changes
  useEffect(() => {
    if (!carouselApi) return;
    const handleSelect = () => {
      setActiveFeature(carouselApi.selectedScrollSnap());
    };
    carouselApi.on("select", handleSelect);
    return () => {
      carouselApi.off("select", handleSelect);
    };
  }, [carouselApi, setActiveFeature]);

  // Handle pagination click
  const handlePaginationClick = (index: number) => {
    setActiveFeature(index);
    if (carouselApi) {
      carouselApi.scrollTo(index);
    }
  };
  
  return (
    <div className="w-full mt-8">
      <Carousel
        setApi={setCarouselApi}
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent>
          {featureData.map((feature) => (
            <MobileFeature key={feature.id} feature={feature} />
          ))}
        </CarouselContent>
      </Carousel>
      
      <FeaturePagination 
        totalFeatures={featureData.length}
        activeFeature={activeFeature}
        onPageChange={handlePaginationClick}
      />
    </div>
  );
};
