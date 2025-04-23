import React from "react";
import { EventName } from "@/lib/mixpanel";
interface DesktopMenuProps {
  translations: {
    about: string;
    community: string;
    specialists: string;
    howItWorks: string;
    findTherapist: string;
  };
  ctaLink: string;
  onNavClick?: (eventName: EventName) => void;
}

export const DesktopMenu = ({
  translations,
  ctaLink,
  onNavClick,
}: DesktopMenuProps) => {
  return (
    <nav className="self-stretch hidden lg:flex min-w-60 items-center gap-[16px] xl:gap-[28px] my-auto mx-auto">
      <a
        href="#about"
        className="self-stretch my-auto hover:text-[#3998E6] transition-colors whitespace-nowrap text-xs xl:text-sm"
        onClick={() => onNavClick(EventName.ABOUT_SECTION_CLICKED)}
      >
        {translations.about}
      </a>
      <a
        href="#reviews"
        className="self-stretch my-auto hover:text-[#3998E6] transition-colors whitespace-nowrap text-xs xl:text-sm"
        onClick={() => onNavClick(EventName.COMMUNITY_SECTION_CLICKED)}
      >
        {translations.community}
      </a>
      <a
        href="#how-it-works"
        className="self-stretch my-auto hover:text-[#3998E6] transition-colors whitespace-nowrap text-xs xl:text-sm"
        onClick={() => onNavClick(EventName.HOWITWORKS_SECTION_CLICKED)}
      >
        {translations.specialists}
      </a>
      <a
        href="#therapist-showcase"
        className="self-stretch my-auto hover:text-[#3998E6] transition-colors whitespace-nowrap text-xs xl:text-sm"
        onClick={() => onNavClick(EventName.SPECIALISTS_SECTION_CLICKED)}
      >
        {translations.howItWorks}
      </a>
      <a
        href={ctaLink}
        className="self-stretch"
        onClick={(e) => {
          e.preventDefault();
          onNavClick(EventName.HEADER_BUTTON_CLICKED);

          setTimeout(() => {
            window.location.href = ctaLink;
          }, 300);
        }}
      >
        <button className="self-stretch bg-[rgba(2,156,238,1)] min-h-8 gap-2 text-white font-semibold text-center my-auto px-3 xl:px-5 py-1.5 rounded-[40px] hover:bg-[#0288D1] transition-colors whitespace-nowrap text-xs xl:text-sm">
          {translations.findTherapist}
        </button>
      </a>
    </nav>
  );
};
