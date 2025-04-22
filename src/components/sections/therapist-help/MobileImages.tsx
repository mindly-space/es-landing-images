
import React from "react";
import { motion } from "framer-motion";

interface MobileImagesProps {
  position: "top" | "bottom";
}

export const MobileImages: React.FC<MobileImagesProps> = ({ position }) => {
  // Array of new therapist images
  const therapistImages = [
    "/lovable-uploads/c109f271-20d7-4a6c-8f0f-fdc092d9ff78.png", // First image
    "/lovable-uploads/b605950f-f932-4530-80f1-f4c6f17d2750.png", // Second image
    "/lovable-uploads/093098b6-5f39-45a4-9874-f909b128bb29.png", // Third image
    "/lovable-uploads/bbca2e11-0d50-4113-b350-e5d7f220a382.png", // Fourth image
  ];
  
  return (
    <div className="flex justify-center gap-2 mb-6 w-full overflow-hidden">
      {therapistImages.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0"
        >
          <img 
            src={image} 
            alt={`Therapist ${index + 1}`} 
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
};
