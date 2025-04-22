
import React from "react";
import { motion } from "framer-motion";
import { SupportedByItem } from "./types";
import { useIsMobile } from "@/hooks/use-mobile";

interface SupportedByProps {
  item: SupportedByItem;
}

export const SupportedBy = ({ item }: SupportedByProps) => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div 
      initial={{ scale: 0.9 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      viewport={{ once: true }}
      className="flex-1 py-6 rounded-[20px] max-sm:min-w-full max-md:w-full flex flex-col items-center text-lg px-5"
    >
      <img
        src={item.image}
        alt="Supported by"
        className="aspect-[2.97] object-contain w-[95px]"
      />
      <div className="text-lg max-md:text-base">{item.label}</div>
    </motion.div>
  );
};
