
import React from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobileImages } from "./therapist-help/MobileImages";
import { DesktopImages } from "./therapist-help/DesktopImages";
import { ContentSection } from "./therapist-help/ContentSection";

export const TherapistHelp = () => {
  const isMobile = useIsMobile();
  
  return (
    <motion.section 
      initial={{
        opacity: 0
      }} 
      whileInView={{
        opacity: 1
      }} 
      transition={{
        duration: 0.8
      }} 
      viewport={{
        once: true
      }} 
      className="w-full max-w-[1328px] bg-[#f5fbff] rounded-[40px] flex flex-col items-center py-16 px-6 md:px-12 mt-10 mb-20 relative overflow-hidden therapist-help-section"
    >
      {/* Mobile images at the top */}
      {isMobile && <MobileImages position="top" />}
      
      {/* Left side images - positioned outside text area (desktop only) */}
      {!isMobile && (
        <div className="absolute top-0 left-0 w-[120px] h-full pointer-events-none px-2">
          <DesktopImages position="left" />
        </div>
      )}
      
      {/* Main content area with proper spacing */}
      <div className="w-full max-w-[800px] mx-auto relative z-10">
        <ContentSection />
      </div>
      
      {/* Right side images - positioned outside text area (desktop only) */}
      {!isMobile && (
        <div className="absolute top-0 right-0 w-[120px] h-full pointer-events-none px-2">
          <DesktopImages position="right" />
        </div>
      )}
    </motion.section>
  );
};
