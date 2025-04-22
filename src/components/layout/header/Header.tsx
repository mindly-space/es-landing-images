
import React, { useState, useEffect, useContext } from "react";
import { HeaderTopBanner } from "./HeaderTopBanner";
import { Logo } from "./Logo";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { LanguageSelector } from "./LanguageSelector";
import { LanguageContext } from "@/contexts/LanguageContext";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { isEnglish, setIsEnglish } = useContext(LanguageContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const translations = {
    about: isEnglish ? "About Mindly" : "Acerca de Mindly",
    community: isEnglish ? "Our Community" : "Nuestra comunidad",
    // Swapped the order of specialists and how-it-works
    specialists: isEnglish ? "How It Works" : "¿Cómo funciona todo?",
    howItWorks: isEnglish ? "Our Specialists" : "Nuestr@s especialistas",
    findTherapist: isEnglish ? "Find a Therapist" : "Encontrar a psicólog@",
    language: isEnglish ? "English" : "Español",
  };

  const ctaLink = "https://mindlyspace.com/c91f92cj77?utm_source=website&utm_medium=website&utm_funnel=ESP-241024-US-main-v1";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      <HeaderTopBanner />
      
      <div className={`bg-white ${isScrolled ? 'shadow-sm' : ''} flex min-h-[70px] md:min-h-24 w-full items-center gap-5 md:gap-5 text-sm text-[#212121] font-normal leading-[1.4] justify-between px-4 md:px-8 lg:px-14 py-3 md:py-4 lg:py-6 whitespace-nowrap overflow-hidden`}>
        {/* Logo - positioned on the left for all screen sizes */}
        <Logo />
        
        {/* Mobile menu trigger - positioned on the right */}
        <MobileMenu 
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isLangOpen={isLangOpen}
          setIsLangOpen={setIsLangOpen}
          isEnglish={isEnglish}
          setIsEnglish={setIsEnglish}
          translations={translations}
          ctaLink={ctaLink}
        />
        
        {/* Desktop navigation menu */}
        <DesktopMenu translations={translations} ctaLink={ctaLink} />
        
        {/* Desktop language selector */}
        <LanguageSelector 
          isEnglish={isEnglish}
          setIsEnglish={setIsEnglish}
          languageText={translations.language}
          isMobile={false}
        />
      </div>
    </header>
  );
};
