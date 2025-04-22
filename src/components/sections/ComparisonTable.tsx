
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";

export const ComparisonTable = () => {
  const isMobile = useIsMobile();
  const { isEnglish } = useContext(LanguageContext);
  
  const features = [{
    name: isEnglish ? "No medical insurance needed" : "La terapia está disponible sin seguro médico",
    mindly: true,
    others: false
  }, {
    name: isEnglish ? "Affordable pricing starting at $13" : "Precios asequibles desde 13 $ por sesión",
    mindly: true,
    others: false
  }, {
    name: isEnglish ? "Verified, licensed therapists only" : "Sólo psicólog@s licenciad@s con experiencia y cuidadosamente examinados",
    mindly: true,
    others: "maybe"
  }, {
    name: isEnglish ? "100% refund in case of any problems with the trial session" : "100% de reembolso en caso de problemas durante la sesión de prueba",
    mindly: true,
    others: false
  }, {
    name: isEnglish ? "No assigned match – select a therapist on your own" : "La posibilidad de elegir a psicólog@ por sí mism@",
    mindly: true,
    others: false
  }, {
    name: isEnglish ? "PhD-level professionals available" : "Psicólog@s con título de Doctor en Filosofía (PhD)",
    mindly: true,
    others: true
  }, {
    name: isEnglish ? "Therapist switch in just a few clicks" : "Fácil sustitución de psicólog@ en un par de clics",
    mindly: true,
    others: false
  }, {
    name: isEnglish ? "Full confidentiality guaranteed" : "Confidencialidad garantizada de los datos y la información personal",
    mindly: true,
    others: false
  }, {
    name: isEnglish ? "Up to 30% off with session bundles" : "Descuentos de hasta el 30% en paquetes de sesiones",
    mindly: true,
    others: false
  }, {
    name: isEnglish ? "Therapists who truly get your values and culture" : "Psicólog@s que entienden tus valores y tu cultura",
    mindly: true,
    others: "maybe"
  }, {
    name: isEnglish ? "Flexible scheduling that works for your time" : "Horario flexible de las sesiones: elige tu propio tiempo conveniente",
    mindly: true,
    others: false,
    separator: true
  }, {
    name: isEnglish ? "24/7 access to platform support" : "Acceso al equipo de soporte de la plataforma 24/7",
    mindly: true,
    others: false,
    isLast: true
  }];

  const checkIcon = "/lovable-uploads/f7d3ac08-f688-45c0-991c-1c3fea63bbf8.png";
  const cancelIcon = "/lovable-uploads/fd254329-105f-41cd-80e1-c8d1162c72ed.png";
  const helpIcon = "/lovable-uploads/afa571b1-94c4-4abc-80e7-cee25923f9cc.png";
  const mindlyLogo = "/lovable-uploads/e037b47e-3d80-42f5-b64c-e6da0eaafa0e.png";
  const newMobileHeaderLogo = "/lovable-uploads/803272b9-480d-47ca-9270-b9e818a92413.png";
  const userProvidedLogo = "/lovable-uploads/15bcbe57-9a51-4626-8e19-4d4466370f02.png";
  
  const ctaLink = "https://mindlyspace.com/c91f92cj77?utm_source=website&utm_medium=website&utm_funnel=ESP-241024-US-main-v1";
  
  return <section className={`bg-[#013A59] w-full max-w-[1328px] mt-24 py-16 rounded-[32px] text-white max-md:mt-10 max-md:px-0 max-md:mx-[-16px] max-md:w-[calc(100%+32px)] ${isMobile ? '' : 'px-12'}`}>
      <h2 className="text-center text-[48px] leading-[120%] font-dela text-white mb-8 max-md:text-[28px] max-md:leading-[120%] max-md:px-5">
        {isEnglish 
          ? "Why Mindly might be the right choice for you?" 
          : "¿Por qué elegir la terapia con Mindly?"}
      </h2>

      <div className="w-full overflow-x-auto max-md:px-5">
        <table className={`w-full border-collapse ${isMobile ? 'text-[14px]' : 'text-[16px]'}`}>
          <thead>
            <tr className="text-center">
              <th className="text-left pb-0 w-1/2"></th>
              <th className="pb-0 w-1/4">
                <div className="bg-[#3998E6] text-center px-4 rounded-t-[24px] w-full py-[28px]">
                  {isMobile ? (
                    <img 
                      src={userProvidedLogo} 
                      alt="Logo" 
                      className="inline-block h-8 mx-auto" 
                    />
                  ) : (
                    <span className="text-[22px] font-dela max-md:text-[14px] max-md:leading-[120%]">Mindly</span>
                  )}
                </div>
              </th>
              <th className="pb-0 w-1/4">
                <div className="text-center py-3 px-4 bg-transparent w-full">
                  <span className="text-[22px] font-dela max-md:text-[14px] max-md:leading-[120%]">
                    {isEnglish ? "Other platforms" : "Otras"}
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="border-t border-[rgba(255,255,255,0.2)]">
                <td className="py-4 text-left pr-8">
                  <div className="flex items-center">
                    <span>{feature.name}</span>
                  </div>
                </td>
                <td className={`py-4 text-center bg-[#3998E6] ${index === features.length - 1 ? 'rounded-b-[24px]' : ''}`}>
                  <img 
                    src={checkIcon} 
                    alt="Check" 
                    className="inline-block" 
                    width="32" 
                    height="32" 
                  />
                </td>
                <td className="py-4 text-center">
                  {feature.others === true ? 
                    <img 
                      src={checkIcon} 
                      alt="Check" 
                      className="inline-block" 
                      width="32" 
                      height="32" 
                    /> : 
                    feature.others === "maybe" ? 
                      <img 
                        src={helpIcon} 
                        alt="Help" 
                        className="inline-block" 
                        width="32" 
                        height="32" 
                      /> : 
                      <img 
                        src={cancelIcon} 
                        alt="Cancel" 
                        className="inline-block" 
                        width="32" 
                        height="32" 
                      />
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-16 max-md:px-5">
        <h3 className="text-[28px] font-dela text-white mb-6 max-md:text-[20px]">
          {isEnglish 
            ? "Start therapy on your own terms and get the support you deserve!" 
            : "¡Comienza la terapia en tus propios términos y obtén el apoyo que mereces!"}
        </h3>
        
        <a href={ctaLink}>
          <Button variant="mindly" size="mindly" className="bg-white text-[#013A59] hover:bg-gray-100 font-semibold text-base">
            {isEnglish ? "Find a therapist" : "Encontrar a psicólog@"}
          </Button>
        </a>
      </div>
    </section>;
};
