
import React from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
type ImagePosition = "left" | "right";

interface DesktopImagesProps {
  position: ImagePosition;
}

export const DesktopImages: React.FC<DesktopImagesProps> = ({ position }) => {
  // Array of new therapist images
  const isMobile = useIsMobile();

  const therapistImages = [
    "/lovable-uploads/c109f271-20d7-4a6c-8f0f-fdc092d9ff78.png", // First image
    "/lovable-uploads/b605950f-f932-4530-80f1-f4c6f17d2750.png", // Second image
    "/lovable-uploads/093098b6-5f39-45a4-9874-f909b128bb29.png", // Third image
    "/lovable-uploads/bbca2e11-0d50-4113-b350-e5d7f220a382.png", // Fourth image
  ];

  if (position === "left") {
    return (
      <div className={`h-full flex flex-col ${isMobile ? 'justify-around' : 'justify-between'} items-center pointer-events-none`}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-[70px] h-[70px] rounded-full overflow-hidden"
        >
          <img
            src={therapistImages[0]}
            alt="Therapist"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="w-[70px] h-[70px] rounded-full overflow-hidden"
        >
          <img
            src={therapistImages[1]}
            alt="Therapist"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`h-full flex flex-col ${isMobile ? 'justify-around' : 'justify-between'} items-center pointer-events-none`}>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-[70px] h-[70px] rounded-full overflow-hidden"
      >
        <img
          src={therapistImages[2]}
          alt="Therapist"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="w-[70px] h-[70px] rounded-full overflow-hidden"
      >
        <img
          src={therapistImages[3]}
          alt="Therapist"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};
