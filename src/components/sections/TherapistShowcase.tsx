import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { TherapistCard, Specialist } from "@/components/cards/TherapistCard";
import { LanguageContext } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { EventName } from "@/lib/mixpanel";
import { useAnalytics } from "@/hooks/useAnalytics";

const specialists: {
  spanish: Specialist[];
  english: Specialist[];
} = {
  spanish: [
    {
      name: "Sabrina F.",
      country: "🇦🇷",
      experience: "10 años",
      image:
        "https://cdn.builder.io/api/v1/image/assets/be084a5d389246af8d6693ab4173d610/29bc5d1a672c597c6156b0b40f69343f51b4aacb?placeholderIfAbsent=true",
      specialties: ["Psicólogo", "Psicoterapeuta"],
      profileUrl: "https://app.mindlyspace.com/s/Pev0NQ",
      id: "0p17TU5RZjgup5ytUBAUDLePlls2",
    },
    {
      name: "Soledad V.",
      country: "🇦🇷",
      experience: "12 años",
      image:
        "https://cdn.builder.io/api/v1/image/assets/be084a5d389246af8d6693ab4173d610/cc7bbbe7e8626d305f06ad635301328e2faf9a69?placeholderIfAbsent=true",
      specialties: ["Psicólogo", "Psicoterapeuta"],
      profileUrl: "https://app.mindlyspace.com/s/7R8CDt",
      id: "1oY0wrKEruaMjvPQttdAGnjHpDT2",
    },
    {
      name: "Andrea F.",
      country: "🇲🇽",
      experience: "7 años",
      image:
        "https://cdn.builder.io/api/v1/image/assets/be084a5d389246af8d6693ab4173d610/2c9c4d04badb9fed4f6703701340f38156606bf6?placeholderIfAbsent=true",
      specialties: [
        "Psicólogo",
        "Psicoterapeuta",
        "Psicoanalista",
        "Psicólogo infantil",
      ],
      profileUrl: "https://app.mindlyspace.com/s/cKFMrL",
      id: "WcepifchjnapmRQQwglZbNC5OWf1",
    },
    {
      name: "Claudia Fabiola G.",
      country: "🇲🇽",
      experience: "10 años",
      image:
        "https://cdn.builder.io/api/v1/image/assets/be084a5d389246af8d6693ab4173d610/8c018495f3c8001c1f14cdbf9b33894cbf00d9fe?placeholderIfAbsent=true",
      specialties: ["Psicólogo", "Psicoterapeuta"],
      profileUrl: "https://app.mindlyspace.com/s/EwdGF7",
      id: "Cljn2EqHhYh1FInBl2R5yAP5cEO2",
    },
    {
      name: "Johan Ivan A.",
      country: "🇨🇴",
      experience: "2 años",
      image:
        "https://cdn.builder.io/api/v1/image/assets/be084a5d389246af8d6693ab4173d610/c2d7ddfae3f8e2bbdf592e562a39f5307b5f351a?placeholderIfAbsent=true",
      specialties: ["Psicólogo", "Psicoterapeuta"],
      profileUrl: "https://app.mindlyspace.com/s/vQWY2R",
      id: "HUl2woyEoXMztdLu8DwIN8OyHQj1",
    },
    {
      name: "Maria B.",
      country: "🇦🇷",
      experience: "5 años",
      image:
        "https://cdn.builder.io/api/v1/image/assets/be084a5d389246af8d6693ab4173d610/0feaea65e6738ed39659d92cad7f5fe2be72b579?placeholderIfAbsent=true",
      specialties: ["Psicólogo", "Psicoterapeuta", "Psicoanalista"],
      profileUrl: "https://app.mindlyspace.com/s/VfuD9k",
      id: "DaPgaTfzSfScITFvKKhgYUsvKN52",
    },
    {
      name: "Nuvis S.",
      country: "🇻🇪",
      experience: "1 año",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fbe084a5d389246af8d6693ab4173d610%2Ff2fc4ffef08043a29e7d553aa7dcffca?placeholderIfAbsent=true",
      specialties: ["Psicólogo", "Terapeuta Gestalt"],
      profileUrl: "https://app.mindlyspace.com/s/jSspkf",
      id: "lBIhVHDg2qVMQwvuBnv4BuMBTrC3",
    },
    {
      name: "Fernando D.",
      country: "🇨🇴",
      experience: "4 años",
      image:
        "https://cdn.builder.io/api/v1/image/assets/be084a5d389246af8d6693ab4173d610/22f6436621f61d35494f05c8ef4e7b42788c5107?placeholderIfAbsent=true",
      specialties: ["Psicólogo", "Psicoterapeuta"],
      profileUrl:
        "https://app.mindlyspace.com/s/56CGhl",
      id: "bx8TtzbrjdNpGntYKEUEzRL0O3L2",
    },
  ],
  english: [
    {
      name: "Sabrina F.",
      country: "🇦🇷",
      experience: "10 years",
      image:
        "https://cdn.builder.io/api/v1/image/assets/be084a5d389246af8d6693ab4173d610/29bc5d1a672c597c6156b0b40f69343f51b4aacb?placeholderIfAbsent=true",
      specialties: ["Psychologist", "Psychotherapist"],
      profileUrl: "https://app.mindlyspace.com/s/Pev0NQ",
      id: "0p17TU5RZjgup5ytUBAUDLePlls2",
    },
    {
      name: "Soledad V.",
      country: "🇦🇷",
      experience: "12 years",
      image:
        "https://cdn.builder.io/api/v1/image/assets/be084a5d389246af8d6693ab4173d610/cc7bbbe7e8626d305f06ad635301328e2faf9a69?placeholderIfAbsent=true",
      specialties: ["Psychologist", "Psychotherapist"],
      profileUrl: "https://app.mindlyspace.com/s/7R8CDt",
      id: "1oY0wrKEruaMjvPQttdAGnjHpDT2",
    },
    {
      name: "Andrea F.",
      country: "🇲🇽",
      experience: "7 years",
      image:
        "https://cdn.builder.io/api/v1/image/assets/be084a5d389246af8d6693ab4173d610/2c9c4d04badb9fed4f6703701340f38156606bf6?placeholderIfAbsent=true",
      specialties: [
        "Psychologist",
        "Psychotherapist",
        "Psychoanalyst",
        "Child Psychologist",
      ],
      profileUrl: "https://app.mindlyspace.com/s/cKFMrL",
      id: "WcepifchjnapmRQQwglZbNC5OWf1",
    },
    {
      name: "Claudia Fabiola G.",
      country: "🇲🇽",
      experience: "10 years",
      image:
        "https://cdn.builder.io/api/v1/image/assets/be084a5d389246af8d6693ab4173d610/8c018495f3c8001c1f14cdbf9b33894cbf00d9fe?placeholderIfAbsent=true",
      specialties: ["Psychologist", "Psychotherapist"],
      profileUrl: "https://app.mindlyspace.com/s/EwdGF7",
      id: "Cljn2EqHhYh1FInBl2R5yAP5cEO2",
    },
    {
      name: "Johan Ivan A.",
      country: "🇨🇴",
      experience: "2 years",
      image:
        "https://cdn.builder.io/api/v1/image/assets/be084a5d389246af8d6693ab4173d610/c2d7ddfae3f8e2bbdf592e562a39f5307b5f351a?placeholderIfAbsent=true",
      specialties: ["Psychologist", "Psychotherapist"],
      profileUrl: "https://app.mindlyspace.com/s/vQWY2R",
      id: "HUl2woyEoXMztdLu8DwIN8OyHQj1",
    },
    {
      name: "Maria B.",
      country: "🇦🇷",
      experience: "5 years",
      image:
        "https://cdn.builder.io/api/v1/image/assets/be084a5d389246af8d6693ab4173d610/0feaea65e6738ed39659d92cad7f5fe2be72b579?placeholderIfAbsent=true",
      specialties: ["Psychologist", "Psychotherapist", "Psychoanalyst"],
      profileUrl: "https://app.mindlyspace.com/s/VfuD9k",
    },
    {
      name: "Nuvis S.",
      country: "🇻🇪",
      experience: "1 year",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Fbe084a5d389246af8d6693ab4173d610%2Ff2fc4ffef08043a29e7d553aa7dcffca?placeholderIfAbsent=true",
      specialties: ["Psychologist", "Gestalt Therapist"],
      profileUrl: "https://app.mindlyspace.com/s/jSspkf",
      id: "lBIhVHDg2qVMQwvuBnv4BuMBTrC3",
    },
    {
      name: "Fernando D.",
      country: "🇨🇴",
      experience: "4 years",
      image:
        "https://cdn.builder.io/api/v1/image/assets/be084a5d389246af8d6693ab4173d610/22f6436621f61d35494f05c8ef4e7b42788c5107?placeholderIfAbsent=true",
      specialties: ["Psychologist", "Psychotherapist"],
      profileUrl:
        "https://app.mindlyspace.com/s/56CGhl",
      id: "bx8TtzbrjdNpGntYKEUEzRL0O3L2",
    },
  ],
};

export const TherapistShowcase = () => {
  const isMobile = useIsMobile();
  const { isEnglish } = useContext(LanguageContext);
  const { track } = useAnalytics();

  const headingSpanish = (
    <>
      Agenda tu <span className="text-[#029CEE]">primera sesión</span> con
      psicólog@ de Mindly
    </>
  );
  const headingEnglish = (
    <>
      Book your <span className="text-[#029CEE]">first session</span> with a
      Mindly therapist
    </>
  );
  const subtitleSpanish =
    "Tod@s nuestr@s especialistas están cualificad@s, pasan por un riguroso proceso de selección para garantizarte apoyo y acompañamiento de calidad";
  const subtitleEnglish =
    "All our therapists are qualified, undergo a strict selection process and diploma verification, and hold active licenses to provide high-quality support and care.";
  const currentSpecialists = isEnglish
    ? specialists.english
    : specialists.spanish;
  const buttonText = isEnglish
    ? "Book a therapy session"
    : "Agendar una sesión con psicólog@";

  // Add specific link for therapist booking button
  const therapistBookingLink =
    "https://app.mindlyspace.com/flow/c91f92cj77?utm_funnel=ESP-241024-US-main-v1&utm_medium=website&utm_source=website";

  return (
    <section className="w-full max-w-[1328px] mt-24 max-md:mt-16 max-sm:mt-12 px-0">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <div className="text-center w-full max-w-[800px] mb-12">
          <h2 className="text-5xl leading-[58px] max-md:text-[36px] max-md:leading-[44px] max-sm:text-[28px] max-sm:leading-[34px] font-dela text-[#212121]">
            {isEnglish ? headingEnglish : headingSpanish}
          </h2>
          <p className="text-lg leading-[27px] mt-5 max-w-[700px] mx-auto max-md:text-base max-sm:text-[14px] max-sm:leading-[21px]">
            {isEnglish ? subtitleEnglish : subtitleSpanish}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-md:gap-5 max-sm:gap-4">
          {currentSpecialists.map((specialist, index) => (
            <TherapistCard
              key={`specialist-${index}`}
              specialist={specialist}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <a
            href={therapistBookingLink}
            onClick={(e) => {
              e.preventDefault();
              track(EventName.THERAPY_BLOCK_CLICKED);

              setTimeout(() => {
                window.location.href = therapistBookingLink;
              }, 300);
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[rgba(2,156,238,1)] min-h-[52px] w-full max-w-[335px] text-white font-semibold rounded-[40px] hover:bg-[#0288D1] transition-colors px-8 py-3">
              {buttonText}
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
