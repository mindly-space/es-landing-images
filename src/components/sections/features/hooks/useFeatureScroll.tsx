
import { useRef, useEffect, useState } from "react";
import { useMotionValue } from "framer-motion";

interface UseFeatureScrollProps {
  featureLength: number;
  setActiveFeature: (index: number) => void;
}

export const useFeatureScroll = ({ featureLength, setActiveFeature }: UseFeatureScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [reachedEnd, setReachedEnd] = useState(false);
  const [reachedStart, setReachedStart] = useState(true);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  
  // Create motion value for scroll progress
  const scrollProgressMotionValue = useMotionValue(0);
  
  // Update the motion value when scrollProgress changes
  useEffect(() => {
    scrollProgressMotionValue.set(scrollProgress);
  }, [scrollProgress]);
  
  // Set up internal scroll behavior
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleScroll = (e: WheelEvent) => {
      const maxProgress = featureLength - 1;
      
      // Check if we're at boundaries and scrolling in the direction that would take us beyond them
      if ((scrollProgress >= maxProgress - 0.1 && e.deltaY > 0) || 
          (scrollProgress <= 0.1 && e.deltaY < 0)) {
        setIsScrollLocked(false);
        return;
      }
      
      // We're scrolling within our content - lock the scroll
      setIsScrollLocked(true);
      e.preventDefault();
      
      // Calculate new scroll position with adjusted increment for much slower transitions
      // Reduced the delta value to 1/5 of previous value (0.08 to 0.016) to make scrolling between features require 5x more wheel movement
      const delta = e.deltaY > 0 ? 0.016 : -0.016; // Reduced from 0.08 to 0.016
      const newProgress = Math.max(0, Math.min(maxProgress, scrollProgress + delta));
      
      setScrollProgress(newProgress);
      
      // Calculate which feature to show based on scroll progress
      const featureIndex = Math.min(
        Math.floor(newProgress),
        featureLength - 1
      );
      
      if (featureIndex !== currentFeature) {
        setCurrentFeature(featureIndex);
        setActiveFeature(featureIndex);
      }
      
      // Check if we've reached boundaries
      setReachedEnd(newProgress >= maxProgress - 0.1);
      setReachedStart(newProgress <= 0.1);
    };

    // Prevent default scrolling when needed
    const preventDefaultScroll = (e: WheelEvent) => {
      if (isScrollLocked) {
        e.preventDefault();
      }
    };
    
    container.addEventListener('wheel', handleScroll, { passive: false });
    document.body.addEventListener('wheel', preventDefaultScroll, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleScroll);
      document.body.removeEventListener('wheel', preventDefaultScroll);
    };
  }, [
    featureLength, 
    currentFeature, 
    setActiveFeature, 
    scrollProgress, 
    reachedEnd, 
    reachedStart, 
    isScrollLocked
  ]);

  return {
    containerRef,
    currentFeature,
    scrollProgress,
    scrollProgressMotionValue,
    featureProgressPercent: (scrollProgress - Math.floor(scrollProgress)) * 100
  };
};
