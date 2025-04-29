import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { showIntercomChat } from "@/components/intercom/IntercomLauncher";
import { MessageSquare } from "lucide-react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { EventName } from "@/lib/mixpanel";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useIsMobile } from "@/hooks/use-mobile";

export const ContentSection: React.FC = () => {
  const isMobile = useIsMobile();
  const { isEnglish } = useContext(LanguageContext);
  const { track } = useAnalytics();

  // Function to open WhatsApp chat
  const openWhatsApp = () => {
    window.open("https://wa.me/your-number-here", "_blank");
  };

  // The CTA link to be added to buttons
  const ctaLink =
    "https://mindlyspace.com/c91f92cj77?utm_source=website&utm_medium=website&utm_funnel=ESP-241024-US-main-v1";

  const headingSpanish =
    "¿Necesitas ayuda para elegir psicólog@? Escríbenos y te ayudaremos a encontrar al ";
  const highlightedEs = "terapeuta ideal para ti";
  const headingEnglish =
    "Still need help choosing the right therapist? Feel free to chat — we'll help you";
  const highlightedEng = "find the perfect match!";

  const subtitleSpanish =
    "Nuestro equipo te ayudará a encontrar al especialista que mejor se adapte a tus necesidades";
  const subtitleEnglish =
    "Our team is here to connect you with a professional who meets your personal needs and preferences";

  const helpButtonSpanish = "Solicitar ayuda para elegir";
  const helpButtonEnglish = "Help me choose";

  const whatsAppButtonSpanish = "Escribir por WhatsApp";
  const whatsAppButtonEnglish = "Chat on WhatsApp";

  return (
    <div className={`w-full max-w-full mx-auto px-4 flex flex-col items-center relative z-10 ${isMobile ? 'md:px-16 pt-2 mt-20px md:mt-5' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8 z-10 w-full"
      >
        <div className="w-full">
          <h2 className="text-[18px] md:text-[36px] leading-[120%] font-dela text-[#212121] leading-tight w-full max-w-[90%] mx-auto">
            {isEnglish ? (
              <>
                {headingEnglish}{" "}
                <span className="text-[rgba(2,178,134,1)]">
                  {highlightedEng}
                </span>
              </>
            ) : (
              <>
                {headingSpanish}
                <span className="text-[rgba(2,178,134,1)]">
                  {highlightedEs}
                </span>
              </>
            )}
          </h2>
          <p className="text-center text-[#212121] mt-5 z-10 text-base w-full max-w-[80%] md:max-w-[calc(100%-120px)] mx-auto">
            {isEnglish ? subtitleEnglish : subtitleSpanish}
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className={`z-10 mb-10 flex flex-col md:flex-row gap-4 w-full justify-center items-center px-0 ${isMobile ? 'md:px-20' : ''}`}
      >
        <Button
          className="w-full md:w-auto bg-[#029CEE] hover:bg-[#0288D1] text-white rounded-[40px] h-[52px] px-6 md:px-12 py-3.5 text-base font-semibold transition-colors duration-300 font-inter"
          onClick={() => {
            track(EventName.HELP_BUTTON_CLICKED);
            showIntercomChat();
          }}
        >
          {isEnglish ? helpButtonEnglish : helpButtonSpanish}
        </Button>

        <Button
          className="w-full md:w-auto bg-[#25D366] hover:bg-[#1da851] text-white rounded-[40px] h-[52px] px-6 md:px-12 py-3.5 text-base font-semibold transition-colors duration-300 flex items-center justify-center font-inter"
          onClick={() => {
            track(EventName.WHATSAPP_BUTTON_CLICKED);
            openWhatsApp();
          }}
        >
          <img
            src="/lovable-uploads/97cf60bd-9979-4a33-829f-5591e6c31641.png"
            alt="WhatsApp"
            className="w-[20px] h-[20px] mr-2 object-cover"
          />
          {isEnglish ? whatsAppButtonEnglish : whatsAppButtonSpanish}
        </Button>
      </motion.div>
    </div>
  );
};
