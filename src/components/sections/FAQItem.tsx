
import React, { useContext } from "react";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { type FAQ } from "@/data/faqs";
import { LanguageContext } from "@/contexts/LanguageContext";

interface FAQItemProps {
  faq: FAQ;
  index: number;
  isLast?: boolean;
}

export const FAQItem: React.FC<FAQItemProps> = ({ faq, index, isLast = false }) => {
  const { isEnglish } = useContext(LanguageContext);
  
  if (!faq) return null;
  
  const question = isEnglish && faq.questionEn ? faq.questionEn : faq.question;
  const answer = isEnglish && faq.answerEn ? faq.answerEn : faq.answer;
  
  return (
    <AccordionItem 
      value={`item-${index}`} 
      className={`group ${isLast ? 'border-b-0' : ''}`}
    >
      <AccordionTrigger className="text-[#212121] text-[22px] leading-[1.2] font-dela max-md:max-w-full text-left hover:no-underline w-full pr-[30px]">
        <span className="w-full">{question}</span>
      </AccordionTrigger>
      <AccordionContent className="text-[#212121] text-lg leading-[27px] mt-5 max-md:max-w-full w-full">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};
