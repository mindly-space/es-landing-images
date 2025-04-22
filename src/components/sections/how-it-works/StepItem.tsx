
import React from "react";
import { motion } from "framer-motion";
import { Step } from "./types";
import { useIsMobile } from "@/hooks/use-mobile";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";

interface StepItemProps {
  step: Step;
  isActive: boolean;
  onClick: () => void;
  hiddenNumber?: boolean;
  onSwipe?: (direction: "left" | "right") => void;
}

export const StepItem: React.FC<StepItemProps> = ({ 
  step, 
  isActive, 
  onClick,
  hiddenNumber = false,
  onSwipe
}) => {
  const isMobile = useIsMobile();
  const { isEnglish } = useContext(LanguageContext);
  
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!onSwipe) return;
    
    if (touchStart - touchEnd > 100) {
      onSwipe("left");
    } else if (touchEnd - touchStart > 100) {
      onSwipe("right");
    }
  };
  
  return (
    <motion.div
      onClick={onClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      whileHover={{ scale: 1.01 }}
      className={`step-item p-6 rounded-xl transition-all cursor-pointer relative ${
        isActive ? "bg-white" : "bg-blue-800/20 hover:bg-blue-800/30"
      }`}
    >
      <div className="flex items-start">
        {!hiddenNumber && (
          <span className={`step-number font-dela text-3xl mr-3 transition-colors min-w-[40px] ${
            isActive ? "text-[#212121]" : "text-white"
          }`}>
            {step.id}
          </span>
        )}
        <div>
          <h3 className={`step-title font-dela text-[20px] font-semibold leading-[120%] mb-2 flex items-center ${
            isActive ? "text-[#212121]" : "text-white"
          }`}>
            {hiddenNumber && <span className="mr-2 font-dela text-lg">{step.id}.</span>}
            {isEnglish ? step.titleEnglish : step.titleSpanish}
          </h3>
          {isActive && isMobile ? (
            <p className="text-[#212121] text-[14px] leading-[150%]">
              {/* Only show description if it exists */}
              {step.description || ""}
            </p>
          ) : (
            <p className={`${
              isActive ? "text-[#212121]" : "text-white/90"
            } ${!hiddenNumber ? "pl-11" : ""}`}>
              {/* Only show description if it exists */}
              {step.description || ""}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};
