import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { LanguageContext } from "@/contexts/LanguageContext";

export const AboutUs = () => {
  const isMobile = useIsMobile();
  const { isEnglish } = useContext(LanguageContext);

  return <section className="w-full max-w-[1328px] my-12 max-md:my-8 py-0">
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
    }} className="flex flex-col items-center w-full max-w-[1400px] mx-auto px-4">
        <h2 className="text-center text-[48px] leading-[120%] max-md:max-w-full max-md:text-[28px] font-dela mb-[52px]">
          {isEnglish ? "What is Mindly?" : "¿Qué es Mindly?"}
        </h2>
        
        <div className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-[80px] mb-8">
          <div className="md:w-1/2">
            <img src="/lovable-uploads/0d2069aa-b849-409f-ab99-711741fd6f68.png?format=webp&quality=80" alt="Terapeuta en línea" className="w-full rounded-lg" />
          </div>
          
          <div className="md:w-1/2 text-[18px] max-md:text-[16px] space-y-4">
            {isEnglish ? <>
                <p className="text-[#212121]">
                  Mindly is a platform for convenient online therapy with licensed therapists.
                </p>
                <p className="text-[#212121]">
                  Our platform was launched with Google's support in 2022.
                </p>
                <p className="text-[#212121]">
                  Our mission is to make high-quality psychological support accessible to everyone, so each person can get timely help and live a healthier, happier life.
                </p>
                <p className="text-[#212121]">
                  At Mindly, you'll find Spanish-speaking therapists who won't just listen to you — they'll understand you with respect for your story and culture.
                </p>
              </> : <>
                <p className="text-[#212121]">
                  Mindly es una plataforma de terapia en línea diseñada para tu conveniencia.
                </p>
                <p className="text-[#212121]">
                  Nuestra plataforma fue fundada en 2022 con el apoyo de Google.
                </p>
                <p className="text-[#212121]">
                  Nuestra misión es hacer accesible a todos ayuda psicológica de calidad para que cada persona pueda recibir apoyo oportuno y vivir una vida más sana y feliz.
                </p>
                <p className="text-[#212121]">
                  En Mindly encontrarás psicólogos hispanohablantes que no sólo te escucharán, sino que te comprenderán con respeto a tu historia y cultura.
                </p>
              </>}
          </div>
        </div>
      </motion.div>
    </section>;
};
