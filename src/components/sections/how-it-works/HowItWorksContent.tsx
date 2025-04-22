
import React from "react";
import { motion } from "framer-motion";
import { StepsList } from "./StepsList";
import { StepImage } from "./StepImage";
import { Title } from "./Title";
import { stepsData } from "./stepsData";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface HowItWorksContentProps {
  activeStep: number;
  setActiveStep: (step: number) => void;
  isInView: boolean;
}

export const HowItWorksContent = ({ 
  activeStep, 
  setActiveStep,
  isInView 
}: HowItWorksContentProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full">
      <Title isInView={isInView} />
      
      <div className={cn(
        "w-full grid gap-8",
        isMobile 
          ? "grid-cols-1" 
          : "grid-cols-2 lg:px-16"
      )}>
        {/* Mobile layout - Image first, then steps */}
        {isMobile && (
          <>
            {/* Step Image */}
            <div className="w-full flex justify-center">
              <div className="w-full max-w-[496px]">
                <StepImage 
                  activeStep={activeStep} 
                  steps={stepsData} 
                  onSwipe={setActiveStep} 
                />
              </div>
            </div>
            
            {/* Steps Navigation */}
            <div className="w-full flex justify-center">
              <div className="w-full max-w-[496px]">
                <StepsList 
                  steps={stepsData} 
                  activeStep={activeStep} 
                  onStepClick={setActiveStep}
                  isInView={isInView}
                />
              </div>
            </div>
          </>
        )}
        
        {/* Desktop layout - Steps left, image right */}
        {!isMobile && (
          <>
            {/* Steps Navigation */}
            <div className="w-full flex justify-center">
              <div className="w-full max-w-[496px]">
                <StepsList 
                  steps={stepsData} 
                  activeStep={activeStep} 
                  onStepClick={setActiveStep}
                  isInView={isInView}
                />
              </div>
            </div>
            
            {/* Step Image */}
            <div className="w-full flex justify-center">
              <div className="w-full max-w-[496px]">
                <StepImage 
                  activeStep={activeStep} 
                  steps={stepsData} 
                  onSwipe={setActiveStep} 
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
