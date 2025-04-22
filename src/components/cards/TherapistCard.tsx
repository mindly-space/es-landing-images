import React from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";

export interface Specialist {
  name: string;
  country: string;
  experience: string;
  image: string;
  specialties: string[];
  profileUrl?: string;
}

interface TherapistCardProps {
  specialist: Specialist;
  index: number;
}

export const TherapistCard: React.FC<TherapistCardProps> = ({
  specialist,
  index
}) => {
  const isMobile = useIsMobile();
  const { isEnglish } = useContext(LanguageContext);
  
  const experienceText = isEnglish ? "of experience" : "de experiencia";
  
  return (
    <motion.div 
      key={`specialist-${index}`} 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.7, delay: index * 0.1 }} 
      viewport={{ once: true }} 
      className="border flex flex-col items-stretch justify-between p-4 rounded-[28px] border-[rgba(33,33,33,0.1)] border-solid therapist-card h-full max-sm:p-3"
    >
      <div className="flex w-full items-center gap-6 max-sm:gap-4">
        <div className="overflow-hidden w-28 h-28 rounded-2xl max-md:w-[80px] max-md:h-[80px] max-sm:w-[56px] max-sm:h-[56px] flex-shrink-0 max-sm:p-[2px]">
          <img 
            src={specialist.image} 
            alt={specialist.name} 
            className="w-full h-full object-cover rounded-xl" 
          />
        </div>
        <div className="flex flex-col items-start justify-center flex-1 min-w-0">
          <div className="flex items-center gap-2 font-semibold text-left flex-wrap">
            <a 
              href={specialist.profileUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#212121] text-xl leading-[1.3] max-md:text-lg max-sm:text-base truncate max-w-full transition-colors hover:text-[#029CEE]"
            >
              {specialist.name}
            </a>
            <div className="text-[rgba(33,33,33,1)] text-xl leading-[1.2] max-md:text-lg max-sm:text-base">
              {specialist.country}
            </div>
            <img src="https://cdn.builder.io/api/v1/image/assets/be084a5d389246af8d6693ab4173d610/c1e8cf4074269db21925479708cd1555a1fdb534?placeholderIfAbsent=true" alt="Verified" className="aspect-[1] object-contain w-4 shrink-0 max-sm:w-3" />
          </div>
          <div className="text-[#212121] text-base font-normal text-left max-md:text-sm max-sm:text-xs mt-[4px]">
            {specialist.experience} {experienceText}
          </div>
          <div className="flex w-full gap-1 text-[12px] text-[#212121] font-normal flex-wrap mt-[8px] justify-start max-md:text-[12px] max-sm:text-[12px]">
            {specialist.specialties.map((specialty, idx) => (
              <div key={idx} className="bg-[rgba(33,33,33,0.06)] flex items-center gap-1 justify-center px-2 py-0.5 rounded-full max-md:py-0.5 max-sm:px-1.5 therapist-specialty-tag">
                <img src="https://cdn.builder.io/api/v1/image/assets/be084a5d389246af8d6693ab4173d610/0aaf0b27ba712007b964c4ad960addad3e001d9f?placeholderIfAbsent=true" alt="Badge" className="aspect-[1] object-contain w-3 shrink-0 max-md:w-2.5 max-sm:w-2" />
                <div className="text-[12px] whitespace-normal">
                  {specialty}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
