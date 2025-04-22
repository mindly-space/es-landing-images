import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const PressAboutUs = () => {
  const { isEnglish } = useContext(LanguageContext);

  const pressLogos = [
    {
      name: "TechCrunch",
      logo: "/lovable-uploads/2288e6cf-56c2-48cc-ad12-1fcde03b12cd.png?format=webp&quality=80",
      url: "https://techcrunch.com",
      quote: isEnglish 
        ? "Mindly is revolutionizing access to mental health services with its innovative approach."
        : "Mindly está revolucionando el acceso a servicios de salud mental con su enfoque innovador."
    },
    {
      name: "Forbes",
      logo: "/lovable-uploads/7600b15a-68d9-4b10-bf02-2409bd8854ba.png?format=webp&quality=80",
      url: "https://forbes.com",
      quote: isEnglish 
        ? "One of the most promising mental health startups focused on accessibility and quality care."
        : "Una de las startups de salud mental más prometedoras enfocada en accesibilidad y atención de calidad."
    },
    {
      name: "Time",
      logo: "/lovable-uploads/b92cb978-d97d-44fc-a64a-fd39244d0732.png?format=webp&quality=80",
      url: "https://time.com",
      quote: isEnglish 
        ? "Mindly is making therapy accessible to everyone regardless of location or budget."
        : "Mindly está haciendo que la terapia sea accesible para todos, sin importar la ubicación o el presupuesto."
    },
    {
      name: "The New York Times",
      logo: "/lovable-uploads/29801943-5dc8-438d-99e8-22e76c2fa9fc.png?format=webp&quality=80",
      url: "https://nytimes.com",
      quote: isEnglish 
        ? "A breakthrough platform that's changing how people access mental health support."
        : "Una plataforma innovadora que está cambiando la forma en que las personas acceden al apoyo de salud mental."
    }
  ];

  const title = isEnglish 
    ? `A Platform You Can Trust — As Featured in <span className="text-[#029CEE]">Global Media</span>` 
    : `Una plataforma en la que puedes confiar — recomendada por <span className="text-[#029CEE]">medios internacionales</span>`;
  
  const subtitle = isEnglish 
    ? "Mindly is recognized as an innovative platform that's redefining how we care for our mental health — with heart and humanity."
    : "Mindly es reconocida como una plataforma innovadora que está transformando la forma en que cuidamos nuestra salud mental — con empatía y humanidad.";

  return (
    <section className="w-full py-16 bg-white mt-4">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
          dangerouslySetInnerHTML={{ 
            __html: `<h2 class="text-[38px] max-md:text-[32px] max-sm:text-[28px] font-dela text-[#212121]">${title}</h2>` 
          }}
        />
        <p className="text-[#212121] text-lg mt-5 max-w-[700px] mx-auto text-center mb-[16px]">
          {subtitle}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
          {pressLogos.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-4 transition-all duration-300 flex items-center justify-center h-24 w-full"
            >
              <img 
                src={item.logo} 
                alt={item.name} 
                className="max-h-12 max-w-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
