
import React, { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { type CarouselApi } from "@/components/ui/carousel";
import { featureData } from "./features/FeatureData";
import { SectionTitle } from "./features/SectionTitle";
import { DesktopFeatures } from "./features/DesktopFeatures";
import { MobileFeatures } from "./features/MobileFeatures";

export const Features = () => {
  const isMobile = useIsMobile();
  const [activeFeature, setActiveFeature] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  
  return (
    <section className="w-full max-w-[1200px] text-[#212121] font-normal mt-14 mb-24 max-md:max-w-full max-md:mt-10">
      <SectionTitle />

      {/* Desktop version with sticky scroll */}
      {!isMobile && (
        <DesktopFeatures 
          featureData={featureData}
          activeFeature={activeFeature}
          setActiveFeature={setActiveFeature}
        />
      )}

      {/* Mobile version with horizontal swipe */}
      {isMobile && (
        <MobileFeatures 
          featureData={featureData}
          activeFeature={activeFeature}
          setActiveFeature={setActiveFeature}
          carouselApi={carouselApi}
          setCarouselApi={setCarouselApi}
        />
      )}
    </section>
  );
};
