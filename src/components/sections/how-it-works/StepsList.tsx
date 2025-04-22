
import React from "react";
import { motion } from "framer-motion";
import { StepItem } from "./StepItem";
import { Step } from "./types";
import { useIsMobile } from "@/hooks/use-mobile";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";

interface StepsListProps {
  steps: Step[];
  activeStep: number;
  onStepClick: (stepId: number) => void;
  isInView: boolean;
}

export const StepsList = ({ steps, activeStep, onStepClick, isInView }: StepsListProps) => {
  const isMobile = useIsMobile();
  const { isEnglish } = useContext(LanguageContext);
  
  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "left") {
      // Go to next step
      const nextStep = activeStep === steps.length ? 1 : activeStep + 1;
      onStepClick(nextStep);
    } else if (direction === "right") {
      // Go to previous step
      const prevStep = activeStep === 1 ? steps.length : activeStep - 1;
      onStepClick(prevStep);
    }
  };
  
  if (isMobile) {
    const activeStepData = steps.find(step => step.id === activeStep);
    
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full space-y-3"
      >
        <div className="flex">
          <motion.div 
            key={activeStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            {activeStepData && (
              <StepItem
                step={activeStepData}
                isActive={true}
                onClick={() => {}}
                hiddenNumber={true}
                onSwipe={handleSwipe}
              />
            )}
          </motion.div>
        </div>
        
        <div className="flex flex-col items-center mt-4">
          <div className="flex justify-center space-x-2">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => onStepClick(step.id)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeStep === step.id 
                    ? 'bg-white w-4' 
                    : 'bg-white/40'
                }`}
                aria-label={`Go to step ${step.id}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-4 steps-desktop"
    >
      <div className="flex flex-col space-y-4">
        {steps.map((step) => (
          <StepItem
            key={step.id}
            step={step}
            isActive={activeStep === step.id}
            onClick={() => onStepClick(step.id)}
            hiddenNumber={false}
          />
        ))}
      </div>
    </motion.div>
  );
};
