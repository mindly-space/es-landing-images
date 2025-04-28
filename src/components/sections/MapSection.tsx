import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { LanguageContext } from "@/contexts/LanguageContext";

export const MapSection = () => {
  const isMobile = useIsMobile();
  const {
    isEnglish
  } = useContext(LanguageContext);

  // The CTA link to be added to buttons
  const ctaLink = "https://mindlyspace.com/c91f92cj77?utm_source=website&utm_medium=website&utm_funnel=ESP-241024-US-main-v1";
  const heroTextEN = {
    title: <>
        Join a community of over <span className="text-[#029CEE]">900,000</span> people who have already chosen Mindly and changed their lives for the better!
      </>,
    titlePlain: "Join a community of over 900,000 people who have already chosen Mindly and changed their lives for the better!",
    description: "Here, you don't need to explain who you are. We speak your language, share your reality, and understand your journey",
    buttonText: "Find a therapist"
  };
  const heroTextES = {
    title: <>
        ¡Únete a la comunidad de más de <span className="text-[#029CEE]">900.000</span> personas que han elegido Mindly y han cambiado sus vidas a mejor!
      </>,
    titlePlain: "¡Únete a la comunidad de más de 900.000 personas que han elegido Mindly y han cambiado sus vidas a mejor!",
    description: "Aquí no hay que explicar quién eres. Hablamos tu idioma, vivimos en la misma realidad y comprendemos tu camino",
    buttonText: "Encontrar a psicólog@"
  };
  const heroText = isEnglish ? heroTextEN : heroTextES;
  return <section className="w-full max-w-[1328px] bg-white max-md:mt-10 py-0 my-[52px] px-4 md:px-12 lg:px-[64px]">
      <div className={`flex flex-col ${isMobile ? 'flex-col-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-20`}>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="w-full lg:w-1/2 pr-0 lg:pr-8">
          <h2 className="text-[36px] font-dela leading-tight text-[#212121] mb-6 max-md:text-[24px] max-md:leading-[120%]">
            {heroText.title}
          </h2>
          
          <p className="text-lg text-[#212121] mb-10 mt-5 max-md:text-[14px] max-md:leading-[150%]">
            {heroText.description}
          </p>
          
          <a href={ctaLink}>
            <Button className="bg-[#3C99E6] hover:bg-[#1E88E5] text-white px-10 h-[52px] rounded-full text-base font-semibold">
              {heroText.buttonText}
            </Button>
          </a>
        </motion.div>
        
        <motion.div initial={{
        opacity: 0,
        x: 30
      }} whileInView={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.7,
        delay: 0.2
      }} viewport={{
        once: true
      }} className="w-full lg:w-1/2">
          <div className="relative map-container">
            <img src="/lovable-uploads/761a3765-4880-4ce7-85ab-817a3aa05cef.png" alt="World map showing Mindly's global presence" className="w-full h-auto" />
          </div>
        </motion.div>
      </div>
    </section>;
};
