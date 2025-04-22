
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { featureAnimationVariants } from "./constants/animationVariants";
import { cn } from "@/lib/utils";

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface FeatureContentProps {
  currentFeature: number;
  featureData: FeatureItem[];
  featureProgressPercent: number;
  className?: string;
}

export const FeatureContent: React.FC<FeatureContentProps> = ({
  currentFeature,
  featureData,
  featureProgressPercent,
  className
}) => {
  return (
    <div className={cn("w-1/2", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={`content-${featureData[currentFeature].id}`}
          className="self-stretch w-full"
        >
          <motion.h3 
            className="text-[36px] leading-[120%] font-dela max-md:text-[28px]"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={featureAnimationVariants.title}
          >
            {featureData[currentFeature].title}
          </motion.h3>
          <motion.p 
            className="text-lg leading-[27px] mt-5 max-md:text-[14px]"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={featureAnimationVariants.description}
          >
            {featureData[currentFeature].description}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

