
import React from "react";
import { motion } from "framer-motion";
import { ProofItem as ProofItemType } from "./types";
import { useIsMobile } from "@/hooks/use-mobile";

interface ProofItemProps {
  item: ProofItemType;
  index: number;
}

export const ProofItem = ({ item, index }: ProofItemProps) => {
  const isMobile = useIsMobile();

  return (
    <motion.div 
      initial={{ scale: 0.9 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
      viewport={{ once: true }}
      className="flex-1 px-5 py-6 rounded-[20px] max-sm:min-w-full max-md:w-full"
    >
      <div className="text-[28px] leading-[1.2] font-dela max-md:text-[20px]">{item.value}</div>
      <div className="text-[16px] max-md:text-base">{item.label}</div>
    </motion.div>
  );
};
