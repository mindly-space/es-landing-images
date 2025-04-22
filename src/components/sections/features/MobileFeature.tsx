
import React from "react";
import { CarouselItem } from "@/components/ui/carousel";

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface MobileFeatureProps {
  feature: FeatureItem;
}

export const MobileFeature: React.FC<MobileFeatureProps> = ({
  feature
}) => {
  return (
    <CarouselItem className="w-full">
      <div className="flex flex-col space-y-6">
        <div className="rounded-2xl overflow-hidden aspect-square">
          <img 
            src={feature.image} 
            alt={feature.title} 
            className="w-full h-full object-cover rounded-2xl"
            style={{ objectPosition: 'center' }}
          />
        </div>
        <div className="space-y-4 px-4">
          <h3 className="text-[24px] leading-[120%] font-dela text-[#212121]">
            {feature.title}
          </h3>
          <p className="text-base text-[#212121]">
            {feature.description}
          </p>
        </div>
      </div>
    </CarouselItem>
  );
};
