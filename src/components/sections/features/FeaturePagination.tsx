
import React from "react";

interface FeaturePaginationProps {
  totalFeatures: number;
  activeFeature: number;
  onPageChange: (index: number) => void;
}

export const FeaturePagination: React.FC<FeaturePaginationProps> = ({
  totalFeatures,
  activeFeature,
  onPageChange,
}) => {
  return (
    <div className="flex justify-center mt-6">
      <div className="relative w-32 h-1 bg-gray-200 rounded-full">
        <div 
          className="absolute top-0 left-0 h-1 bg-[#013A59] rounded-full transition-all duration-300 ease-in-out"
          style={{ 
            width: `${(activeFeature + 1) / totalFeatures * 100}%` 
          }}
        />
        {Array.from({ length: totalFeatures }).map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index)}
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-transparent cursor-pointer"
            style={{ 
              left: `calc(${index * (100 / (totalFeatures - 1))}% - ${index === 0 ? 0 : index === totalFeatures - 1 ? 6 : 3}px)` 
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
