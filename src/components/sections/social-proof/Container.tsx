
import React from "react";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  const isMobile = useIsMobile();
  
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[rgba(245,247,250,1)] flex w-full max-w-[1328px] gap-8 text-[#212121] font-normal text-center justify-center flex-wrap mt-24 px-9 py-7 rounded-[64px] max-md:gap-3 max-md:max-w-full max-md:mt-10 max-md:px-2 max-md:py-3 max-md:flex-col"
    >
      {children}
    </motion.section>
  );
};
