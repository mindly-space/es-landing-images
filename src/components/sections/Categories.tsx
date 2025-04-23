import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { EventName } from "@/lib/mixpanel";
import { useAnalytics } from "@/hooks/useAnalytics";

const CategoryCard = ({ image, title, color, eventName }) => {
  const { isEnglish } = useContext(LanguageContext);
  const { track } = useAnalytics();

  const ctaLink =
    "https://mindlyspace.com/c91f92cj77?utm_source=website&utm_medium=website&utm_funnel=ESP-241024-US-main-v1";

  return (
    <a
      href={ctaLink}
      onClick={(e) => {
        e.preventDefault();
        track(EventName.REASON_BLOCK_CLICKED, {
          type: eventName,
        });

        setTimeout(() => {
          window.location.href = ctaLink;
        }, 300);
      }}
      className="block h-full transition-transform hover:scale-[1.02] duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className="overflow-hidden h-full rounded-[32px] flex flex-col"
        style={{
          backgroundColor: color,
        }}
      >
        <img
          src={image}
          alt={title}
          className="aspect-[1.5] object-cover w-full"
        />
        <div className="flex w-full flex-col items-start justify-center mt-6 px-6 pb-6 flex-grow">
          <h3 className="text-white font-dela text-[22px] leading-[120%] max-md:text-[20px] max-md:leading-[120%]">
            {title}
          </h3>
          <div className="flex w-full items-center gap-1 text-lg text-white font-semibold text-left mt-2">
            <span className="self-stretch my-auto">
              {isEnglish ? "Start now" : "Empezar ahora"}
            </span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </a>
  );
};

export const Categories = () => {
  const { isEnglish } = useContext(LanguageContext);
  const categories = [
    {
      image:
        "/lovable-uploads/e57d3911-3f49-4e72-8310-eab6acc790de.png?format=webp&quality=80",
      title: isEnglish ? "Stress and burnout" : "Estrés y agotamiento",
      color: "rgba(1,58,89,1)",
      eventName: "stress&burnout",
    },
    {
      image:
        "/lovable-uploads/a551d4bb-7efb-4590-9e10-9318e93ee9ba.png?format=webp&quality=80",
      title: isEnglish ? "Anxiety" : "Ansiedad",
      color: "rgba(1,76,89,1)",
      eventName: "anxiety",
    },
    {
      image:
        "/lovable-uploads/0d6b42c4-95f2-421d-8f00-affbefce3724.png?format=webp&quality=80",
      title: isEnglish ? "Depression" : "Depresión",
      color: "rgba(1,35,89,1)",
      eventName: "depression",
    },
    {
      image:
        "/lovable-uploads/7a7b2fe9-bd44-4d63-ac46-1a586fdb0c09.png?format=webp&quality=80",
      title: isEnglish ? "Loss and grief" : "Pérdida y duelo",
      color: "rgba(4,1,89,1)",
      eventName: "loss&grief",
    },
    {
      image:
        "/lovable-uploads/5321d2a3-6b5d-4a6e-b63b-672a9a8da2f5.png?format=webp&quality=80",
      title: isEnglish ? "Relationship issues" : "Problemas de relaciones",
      color: "rgba(84,25,57,1)",
      eventName: "relationship",
    },
    {
      image:
        "/lovable-uploads/9b8e981c-003a-4b65-bcf5-6e401bf29ae5.png?format=webp&quality=80",
      title: isEnglish ? "Immigration trauma" : "Trauma por migración",
      color: "rgba(44,108,114,1)",
      eventName: "immigration",
    },
  ];

  return (
    <section className="flex w-full max-w-[1200px] flex-col items-center mx-auto mt-24 max-md:max-w-full max-md:mt-10 px-0 my-[95px]">
      <h2 className="text-[#212121] text-center text-5xl font-normal leading-[58px] w-[800px] max-md:max-w-full max-md:text-[28px] max-md:leading-[34px] font-dela">
        {isEnglish ? "Every " : "No hay preguntas poco"}{" "}
        <span className="text-[rgba(2,156,238,1)]">
          {isEnglish ? "struggle matters" : "importantes cuando"}
        </span>{" "}
        {isEnglish ? "when it comes to your life" : "se trata de tu vida"}
      </h2>

      {isEnglish && (
        <p className="text-center mt-4 text-lg max-w-[800px] text-gray-700">
          Find a therapist who truly gets you and can help you through
        </p>
      )}

      {!isEnglish && (
        <p className="text-center mt-4 text-lg max-w-[800px] text-gray-700">
          Elige a psicólog@ que comprenda tus necesidades y te ayude a afrontar
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[51px] w-full max-md:mt-10">
        {categories.map((category, index) => (
          <div key={index} className="h-full">
            <CategoryCard {...category} />
          </div>
        ))}
      </div>
    </section>
  );
};
