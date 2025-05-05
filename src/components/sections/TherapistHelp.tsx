
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
      className={`w-full max-w-[1328px] bg-[#f5fbff] rounded-[40px] flex ${isMobile ? "flex-col" : "flex-row"} ${isMobile ? 'items-center' : 'justify-center items-start'} ${isMobile ? 'md:px-12' : 'md:px-6' } py-16 px-6 mt-10 mb-20 relative overflow-hidden therapist-help-section`}
    >
      {/* Mobile images at the top */}
      {isMobile && <MobileImages position="top" />}
      
      {/* Left side images - positioned outside text area (desktop only) */}
      {!isMobile && (
        <div className={`w-[120px] pointer-events-none px-2 ${!isMobile ? 'h-[340px]' : 'h-full'}`}>
          <DesktopImages position="left" />
        </div>
      )}
      
      {/* Main content area with proper spacing */}
      <div className="w-full max-w-[800px] relative z-10">
        <ContentSection />
      </div>
      
      {/* Right side images - positioned outside text area (desktop only) */}
      {!isMobile && (
        <div className={`w-[120px] pointer-events-none px-2 ${!isMobile ? 'h-[340px]' : 'h-full'}`}>
          <DesktopImages position="right" />
        </div>
      )}
    </motion.section>
  );
};
