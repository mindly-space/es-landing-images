
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { stepsData } from "./how-it-works/stepsData";
import { HowItWorksContent } from "./how-it-works/HowItWorksContent";
import "./how-it-works/styles.css";

export const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance steps
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayTimerRef.current = setInterval(() => {
        setActiveStep(prev => (prev === stepsData.length ? 1 : prev + 1));
      }, 5000);
    };

    if (isInView) {
      startAutoPlay();
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isInView]);

  // Reset timer when step changes manually
  const handleStepClick = (step: number) => {
    setActiveStep(step);
    
    // Reset autoplay timer
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
      autoPlayTimerRef.current = setInterval(() => {
        setActiveStep(prev => (prev === stepsData.length ? 1 : prev + 1));
      }, 5000);
    }
  };

  return (
    <section 
      ref={containerRef}
      className="w-full max-w-[1328px] mx-auto bg-[rgba(2,156,238,1)] rounded-[32px] px-6 py-12 md:py-16 how-it-works-container"
    >
      <HowItWorksContent 
        activeStep={activeStep} 
        setActiveStep={handleStepClick}
        isInView={isInView}
      />
    </section>
  );
};
