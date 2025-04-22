import React, { useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Step } from "./types";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";

interface StepImageProps {
  activeStep: number;
  steps: Step[];
  onSwipe?: (stepId: number) => void;
}

export const StepImage = ({ activeStep, steps, onSwipe }: StepImageProps) => {
  const isMobile = useIsMobile();

  useEffect(() => {
    steps.forEach((step) => {
      if (typeof window !== "undefined" && typeof document !== "undefined") {
        if (!document.head.querySelector(`link[rel="preload"][href="${step.image}"]`)) {
          const link = document.createElement("link");
          link.rel = "preload";
          link.as = "image";
          link.href = step.image;
          document.head.appendChild(link);
        }
      }
    });
  }, [steps]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -50) {
      const nextStep = activeStep === steps.length ? 1 : activeStep + 1;
      onSwipe && onSwipe(nextStep);
    }
    else if (info.offset.x > 50) {
      const prevStep = activeStep === 1 ? steps.length : activeStep - 1;
      onSwipe && onSwipe(prevStep);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-full mx-auto step-image-container"
    >
      <div className="w-full max-w-[496px] mx-auto">
        <AspectRatio ratio={496/564} className="w-full max-h-[564px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full"
              drag={isMobile ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              style={{ 
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                cursor: isMobile ? 'grab' : 'default',
                height: '100%',
                width: '100%',
                position: 'relative'
              }}
            >
              <img
                src={steps[activeStep - 1].image}
                alt={`Step ${activeStep}`}
                className="w-full h-full object-cover rounded-[20px]"
                style={{ 
                  objectPosition: 'center',
                  position: 'absolute',
                  top: '0',
                  left: '0'
                }}
                loading="eager"
                draggable="false"
              />
            </motion.div>
          </AnimatePresence>
        </AspectRatio>
      </div>
    </motion.div>
  );
};
