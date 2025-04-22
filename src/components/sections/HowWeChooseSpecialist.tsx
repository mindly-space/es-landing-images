
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "@/contexts/LanguageContext";

export const HowWeChooseSpecialist = () => {
  const { isEnglish } = useContext(LanguageContext);

  const criteriaSpanish = [
    {
      title: "Verificación de títulos y certificaciones",
      description: "Revisamos cuidadosamente títulos, certificados y licencias para asegurarnos de la competencia de especialista."
    },
    {
      title: "Entrevista personal con el equipo",
      description: "Invitamos al/la psicólog@ a una entrevista para conocer mejor su enfoque y sus valores."
    },
    {
      title: "Capacitación y entrevista final",
      description: "El/la especialista realiza una capacitación sobre el uso de la plataforma y pasa una evaluación final antes de comenzar a trabajar."
    },
    {
      title: "Acompañamiento continuo",
      description: "Una managera personal acompaña al/la psicólog@ durante toda la colaboración, con el apoyo para desarrollar su práctica y asegurar la calidad del servicio."
    }
  ];

  const criteriaEnglish = [
    {
      title: "Qualification and document check",
      description: "We carefully verify each psychologist's diplomas, certificates, and licenses to ensure their professional competence."
    },
    {
      title: "Personal interview with our team",
      description: "We conduct a one-on-one interview to better understand the psychologist's approach, values, and communication style."
    },
    {
      title: "Platform training & final screening",
      description: "Every psychologist goes through platform training and a final review before they start working with clients."
    },
    {
      title: "Ongoing support and quality control",
      description: "Each psychologist works closely with a dedicated manager who supports their practice and helps maintain high service quality."
    }
  ];

  const criteria = isEnglish ? criteriaEnglish : criteriaSpanish;

  return (
    <section className="w-full max-w-[1328px] mt-24 max-md:mt-16 max-sm:mt-12 px-4 md:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <div className="text-center mb-12">
          <h2 className="text-5xl leading-[58px] max-md:text-[36px] max-md:leading-[44px] max-sm:text-[28px] max-sm:leading-[34px] font-dela text-[#212121]">
            {isEnglish 
              ? (
                <>
                  How do we <span className="text-[#02B286]">select</span> psychologists at Mindly?
                </>
              ) 
              : (
                <>
                  ¿Cómo <span className="text-[#02B286]">seleccionamos</span> l@s especialistas para trabajar en Mindly?
                </>
              )}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {criteria.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#F5F7FA] rounded-[26px] p-6 shadow-sm"
            >
              <div className="flex flex-col items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#02B286] flex items-center justify-center text-white mb-3">
                  <span className="font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="font-dela text-lg text-[#212121] mb-3 text-left leading-[120%]">{item.title}</h3>
                <p className="text-[#212121] text-[14px] leading-[150%]">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
