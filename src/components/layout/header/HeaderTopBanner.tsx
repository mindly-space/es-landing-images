
import React, { useContext } from "react";
import { ShieldCheck } from "lucide-react";
import { LanguageContext } from "@/contexts/LanguageContext";

export const HeaderTopBanner = () => {
  const { isEnglish } = useContext(LanguageContext);

  const bannerText = isEnglish 
    ? "100% refund in case of any problems with the trial session" 
    : "100% de reembolso en caso de problemas durante la sesión de prueba";

  return (
    <div className="w-full bg-[#013A59] text-white text-center py-2 flex items-start justify-center px-4 sm:px-16" style={{ fontSize: '14px' }}>
      <ShieldCheck className="w-6 h-6 mr-4 max-sm:w-[24px] max-sm:h-[24px] mt-0 max-sm:mr-2" />
      <span>{bannerText}</span>
    </div>
  );
};
