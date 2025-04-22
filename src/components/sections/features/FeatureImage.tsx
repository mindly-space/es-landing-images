
import React from "react";
import { motion, AnimatePresence, MotionValue } from "framer-motion";
import { featureAnimationVariants } from "./constants/animationVariants";
import { cn } from "@/lib/utils";

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface FeatureImageProps {
  currentFeature: number;
  featureData: FeatureItem[];
  scrollYProgress: MotionValue<number>;
  scrollProgressMotionValue: MotionValue<number>;
  className?: string;
}

export const FeatureImage: React.FC<FeatureImageProps> = ({
  currentFeature,
  featureData,
  scrollYProgress,
  scrollProgressMotionValue,
  className
}) => {
  return (
    <div className={cn("w-1/2 flex items-center justify-center relative", className)}>
      <motion.div
        className="relative w-full max-w-[500px] aspect-square rounded-full overflow-hidden bg-gray-100"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`image-${featureData[currentFeature].id}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={featureAnimationVariants.image}
            className="absolute inset-0"
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute'
            }}
          >
            <img
              src={featureData[currentFeature].image}
              alt={featureData[currentFeature].title}
              className="w-full h-full object-cover rounded-full"
              style={{ objectPosition: 'center', objectFit: 'cover' }}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
