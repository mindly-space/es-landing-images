import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { useAnalytics } from "@/hooks/useAnalytics";
import { EventName } from "@/lib/mixpanel";
export const Hero = () => {
  const isMobile = useIsMobile();
  const { isEnglish } = useContext(LanguageContext);
  const { track } = useAnalytics();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const ctaLink =
    "https://mindlyspace.com/c91f92cj77?utm_source=website&utm_medium=website&utm_funnel=ESP-241024-US-main-v1";

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`bg-[rgba(1,58,89,1)] w-full p-10 rounded-[32px] max-md:p-6 max-md:max-w-full max-md:h-auto xl:max-w-none flex items-center my-10 ${
        isMobile ? "min-h-fit" : "max-h-[80vh]"
      } overflow-hidden`}
    >
      <div
        className={`gap-5 flex ${
          isMobile ? "flex-col" : ""
        } items-stretch max-md:w-full w-full max-w-[1328px] mx-auto xl:max-w-none xl:px-0 xl:justify-between`}
      >
        {isMobile && (
          <div className="w-full flex justify-center gap-4 scale-[0.9] mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-[150px] h-[150px] flex items-center justify-center rounded-md py-[12px]"
            >
              <AspectRatio ratio={1 / 1} className="w-full h-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fbe084a5d389246af8d6693ab4173d610%2Fb9c649bad98d4e1faf236bc2d90887c6?format=webp&quality=80"
                  alt="Therapy Session"
                  className="object-contain w-full h-full transform hover:scale-105 transition-transform duration-300"
                />
              </AspectRatio>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-[150px] h-[150px] flex items-center justify-center rounded-md py-[12px]"
            >
              <AspectRatio ratio={1 / 1} className="w-full h-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fbe084a5d389246af8d6693ab4173d610%2Fdfdbbb2716b14f928e6c05e9cdf2fe7b?format=webp&quality=80"
                  alt="Therapy Session 2"
                  className="object-contain w-full h-full transform hover:scale-105 transition-transform duration-300"
                />
              </AspectRatio>
            </motion.div>
          </div>
        )}

        {!isMobile && (
          <motion.div
            variants={itemVariants}
            className="w-[24%] max-md:w-full flex flex-col gap-6 items-center p-0 xl:w-[24%] px-4 py-[24px] h-fit"
          >
            <div className="w-full max-w-[320px] flex items-center justify-center">
              <motion.div variants={imageVariants} className="w-full h-full">
                <AspectRatio ratio={1 / 1} className="w-full">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fbe084a5d389246af8d6693ab4173d610%2Fad85a15d3e71fec6d16c3bd833258013914a103d?format=webp&quality=80"
                    alt="Therapy Session 1"
                    className="object-contain w-full h-full"
                  />
                </AspectRatio>
              </motion.div>
            </div>

            <div className="w-full max-w-[320px] flex items-center justify-center">
              <motion.div variants={imageVariants} className="w-full h-full">
                <AspectRatio ratio={1 / 1} className="w-full">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fbe084a5d389246af8d6693ab4173d610%2Fdfdbbb2716b14f928e6c05e9cdf2fe7b?format=webp&quality=80"
                    alt="Happy family together"
                    className="object-contain w-full h-full"
                  />
                </AspectRatio>
              </motion.div>
            </div>
          </motion.div>
        )}

        <motion.div
          variants={itemVariants}
          className={`${
            isMobile ? "w-full" : "w-[53%]"
          } flex items-center justify-center xl:max-w-[650px] xl:w-auto xl:flex-1 xl:mx-auto`}
        >
          <div className="flex w-full flex-col self-stretch items-center justify-center my-auto text-center">
            <div className="flex w-full flex-col text-white font-normal text-center">
              <motion.h1
                variants={itemVariants}
                className="text-[36px] leading-[120%] font-dela text-center max-md:text-[28px] max-md:leading-[120%]"
              >
                {isEnglish
                  ? "Mindly — your best online therapist. Therapy made easier than ever"
                  : "Mindly - tu mejor psicólog@ en línea. Hacemos que la terapia sea más accesible que nunca"}
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-base mt-5 max-md:text-[14px]"
              >
                {isEnglish
                  ? "Choose a therapist who fits your needs and get professional support 24/7"
                  : "Elige a psicólog@ que se ajuste a tu solicitud y recibe apoyo profesional 24/7"}
              </motion.p>
            </div>
            <a
              href={ctaLink}
              onClick={(e) => {
                e.preventDefault();
                track(EventName.HERO_BUTTON_CLICKED);

                setTimeout(() => {
                  window.location.href = ctaLink;
                }, 300);
              }}
            >
              <Button
                variant="mindly"
                size="mindly"
                className={`text-base text-white font-semibold hover:bg-[#1989d2] transition-colors max-md:px-5 ${
                  isMobile ? "my-6" : "mt-8"
                }`}
              >
                {isEnglish ? "Find a therapist" : "Encontrar a psicólog@"}
              </Button>
            </a>
          </div>
        </motion.div>

        {!isMobile && (
          <motion.div
            variants={itemVariants}
            className="w-[24%] max-md:w-full flex flex-col gap-6 items-center p-0 xl:w-[24%] px-4 py-[24px] h-fit"
          >
            <div className="w-full max-w-[320px] flex items-center justify-center">
              <motion.div variants={imageVariants} className="w-full h-full">
                <AspectRatio ratio={1 / 1} className="w-full">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fbe084a5d389246af8d6693ab4173d610%2Fc6cd6633a48f47b98618430d274206d7?format=webp&quality=80"
                    alt="Therapy Session 3"
                    className="object-contain w-full h-full"
                  />
                </AspectRatio>
              </motion.div>
            </div>

            <div className="w-full max-w-[320px] flex items-center justify-center">
              <motion.div variants={imageVariants} className="w-full h-full">
                <AspectRatio ratio={1 / 1} className="w-full">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fbe084a5d389246af8d6693ab4173d610%2F6b5f87eaf212420da25edcc0636d5ff8?format=webp&quality=80"
                    alt="Therapy Session 4"
                    className="object-contain w-full h-full"
                  />
                </AspectRatio>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};
