
import React from "react";
import { useScroll } from "framer-motion";
import { useFeatureScroll } from "./hooks/useFeatureScroll";
import { FeatureContent } from "./FeatureContent";
import { FeatureImage } from "./FeatureImage";

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface DesktopFeaturesProps {
  featureData: FeatureItem[];
  activeFeature: number;
  setActiveFeature: (index: number) => void;
}

export const DesktopFeatures: React.FC<DesktopFeaturesProps> = ({
  featureData,
  activeFeature,
  setActiveFeature
}) => {
  const {
    containerRef,
    currentFeature,
    scrollProgressMotionValue,
    featureProgressPercent
  } = useFeatureScroll({
    featureLength: featureData.length,
    setActiveFeature
  });

  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  return (
    <div 
      ref={containerRef} 
      className="w-full flex flex-col items-center mt-12"
      style={{ height: `${featureData.length * 100}vh` }}
    >
      <div className="sticky top-20 w-full max-w-[1400px] flex flex-row items-center justify-between">
        <FeatureContent 
          currentFeature={currentFeature}
          featureData={featureData}
          featureProgressPercent={featureProgressPercent}
        />
        <FeatureImage 
          currentFeature={currentFeature}
          featureData={featureData}
          scrollYProgress={scrollYProgress}
          scrollProgressMotionValue={scrollProgressMotionValue}
        />
      </div>
    </div>
  );
};

