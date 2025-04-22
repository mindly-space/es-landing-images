
import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";

interface TitleProps {
  isInView: boolean;
}

export const Title = ({
  isInView
}: TitleProps) => {
  const { isEnglish } = useContext(LanguageContext);
  
  const titleEnglish = "How Mindly works?";
  const subtitleEnglish = "Begin your path to mental wellness today!";
  const titleSpanish = "¿Cómo funciona Mindly?";
  const subtitleSpanish = "Empieza hoy mismo tu viaje hacia la salud mental";
  
  return (
    <motion.div 
      initial={{
        opacity: 0,
        y: 20
      }} 
      animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} 
      transition={{
        duration: 0.6
      }} 
      className="w-full max-w-[800px] mx-auto text-center mb-6 md:mb-10"
    >
      <h2 className="text-5xl leading-[58px] max-md:text-[36px] max-md:leading-[44px] max-sm:text-[28px] max-sm:leading-[34px] font-dela text-white mt-[20px]">
        {isEnglish ? titleEnglish : titleSpanish}
      </h2>
      <p className="mt-3 text-base max-w-[600px] mx-auto opacity-90 text-white max-md:text-[14px]">
        {isEnglish ? subtitleEnglish : subtitleSpanish}
      </p>
    </motion.div>
  );
};
