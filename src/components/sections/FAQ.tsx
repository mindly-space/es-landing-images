
import React, { useContext } from "react";
import { Accordion } from "@/components/ui/accordion";
import { FAQItem } from "@/components/sections/FAQItem";
import { faqs } from "@/data/faqs";
import { LanguageContext } from "@/contexts/LanguageContext";

export const FAQ = () => {
  const { isEnglish } = useContext(LanguageContext);
  
  return (
    <section id="faq" className="flex w-full max-w-[1488px] flex-col items-stretch font-normal mt-24 px-4 md:px-12 lg:px-[124px] xl:px-[124px] py-20 max-md:max-w-full max-md:mt-10 max-md:px-5 bg-[rgba(245,247,250,1)] rounded-[32px]">
      <h2 className="text-center text-[48px] leading-[120%] font-dela text-[#212121] max-md:text-[28px] max-md:leading-[120%]">
        {isEnglish 
          ? "Any questions left? We'll be happy to answer them!" 
          : "¿Tienes alguna pregunta? ¡Con gusto te responderemos!"}
      </h2>
      <Accordion type="single" collapsible defaultValue="item-0" className="w-full mt-[62px] max-md:max-w-full max-md:mt-10 px-0 md:px-[80px] lg:px-[160px] my-[32px]">
        {faqs && faqs.map((faq, index) => (
          <FAQItem 
            key={index} 
            faq={faq} 
            index={index} 
            isLast={index === faqs.length - 1}
          />
        ))}
      </Accordion>
    </section>
  );
};
