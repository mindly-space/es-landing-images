import React, { useState, useContext } from "react";
import {
  Facebook,
  Instagram,
  Check,
  X,
  Globe,
  ChevronDown,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { Logo } from "./header/Logo";
import { LanguageContext } from "@/contexts/LanguageContext";
import { EventName } from "@/lib/mixpanel";
import { useAnalytics } from "@/hooks/useAnalytics";

export const Footer = () => {
  const { isEnglish, setIsEnglish } = useContext(LanguageContext);
  const isMobile = useIsMobile();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { track } = useAnalytics();

  const translations = {
    supportEmail: "support@mindlyspace.com",
    language: isEnglish ? "English" : "Español",
    companyHeader: isEnglish ? "COMPANY" : "COMPAÑÍA",
    disclaimer: isEnglish ? "Disclaimer" : "Descargo de responsabilidad",
    terms: isEnglish
      ? "General terms and conditions"
      : "Términos y condiciones generales",
    privacy: isEnglish ? "Privacy Policy" : "Política de privacidad",
    usage: isEnglish ? "Acceptable Use Policy" : "Política de Uso Aceptable",
    supportedBy: isEnglish ? "Supported by" : "Con el apoyo de",
    version: "v 1.0.0",
    copyright: isEnglish
      ? "© 2025 Mindly. All rights reserved"
      : "© 2025 Mindly. Todos los derechos reservados",
    mentalWellbeing: isEnglish
      ? "The opportunity to take care of mental wellbeing should be available to everyone"
      : "La oportunidad de cuidar el bienestar mental debería estar al alcance de todos",
    followUs: isEnglish ? "Follow us" : "Síguenos",
    selectLanguage: isEnglish ? "Select Language" : "Seleccionar idioma",
    compliant: isEnglish ? "Compliant with" : "Cumpliendo con",
  };

  const links = {
    disclaimer: {
      en: "https://firebasestorage.googleapis.com/v0/b/ihub-projects-production.appspot.com/o/staticFiles%2Flanding-terms%2FTermify%20Disclaimer.pdf?alt=media&token=dc29b128-2fa4-4da5-91df-de60288e7211",
      es: "https://mindlyspace.com/es/disclaimer",
    },
    terms: {
      en: "https://firebasestorage.googleapis.com/v0/b/ihub-projects-production.appspot.com/o/staticFiles%2Flanding-terms%2FGeneral%20Terms%20and%20Conditions.pdf?alt=media&token=88015ee1-b21f-46c7-ab11-77253eb116f7",
      es: "https://firebasestorage.googleapis.com/v0/b/ihub-projects-production.appspot.com/o/staticFiles%2Flanding-terms%2FGeneral%20Terms%20and%20Conditions%20ES.pdf?alt=media&token=364cfee5-9530-4864-bc24-80c9c2e373cc",
    },
    privacy: {
      en: "https://firebasestorage.googleapis.com/v0/b/ihub-projects-production.appspot.com/o/staticFiles%2Flanding-terms%2FPrivacy%20Policy%20Termify.pdf?alt=media&token=5c1f291a-a410-4fd5-9860-ec572a11147b",
      es: "https://firebasestorage.googleapis.com/v0/b/ihub-projects-production.appspot.com/o/staticFiles%2Flanding-terms%2FPrivacy%20Policy%20Termify.pdf?alt=media&token=5c1f291a-a410-4fd5-9860-ec572a11147b",
    },
    usage: {
      en: "https://firebasestorage.googleapis.com/v0/b/ihub-projects-production.appspot.com/o/staticFiles%2Flanding-terms%2FAcceptable%20Use%20Policy.pdf?alt=media&token=b9f78e97-458d-4245-8e77-4380da678994",
      es: "https://firebasestorage.googleapis.com/v0/b/ihub-projects-production.appspot.com/o/staticFiles%2Flanding-terms%2FAcceptable%20Use%20Policy%20ES.pdf?alt=media&token=06148c48-ab80-495b-ada2-0e0c12add996",
    },
  };

  const toggleLanguage = (value: boolean) => {
    setIsEnglish(value);
    setIsLangOpen(false);
  };

  return (
    <footer className="w-full max-w-[1328px] mt-9 xl:max-w-none">
      <div className="border min-h-px w-full border-[rgba(33,33,33,0.1)] border-solid max-md:max-w-full" />
      <div className="w-full mt-14 px-4 md:px-8 lg:px-14 max-md:max-w-full max-w-[1328px] mx-auto">
        <div className="flex w-full gap-[40px_134px] text-sm font-normal flex-wrap max-md:max-w-full">
          <div className="flex min-w-60 flex-col text-hsl(var(--foreground)) grow shrink w-[237px]">
            <Logo />
            <div className="self-stretch w-full mt-8">
              <p className="leading-5">{translations.mentalWellbeing}</p>
              <a
                href="mailto:support@mindlyspace.com"
                className="leading-[1.4] underline mt-3 block hover:text-[#3998E6] transition-colors"
              >
                {translations.supportEmail}
              </a>
            </div>

            {isMobile ? (
              <Drawer open={isLangOpen} onOpenChange={setIsLangOpen}>
                <DrawerTrigger asChild>
                  <button className="flex items-center gap-1 whitespace-nowrap leading-[1.4] mt-8 cursor-pointer hover:text-[#3998E6] transition-colors">
                    <Globe className="h-4 w-4" />
                    <span className="self-stretch my-auto">
                      {translations.language}
                    </span>
                  </button>
                </DrawerTrigger>
                <DrawerContent className="h-[30vh]">
                  <div className="px-6 py-4 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-semibold">
                        {translations.selectLanguage}
                      </h3>
                      <DrawerClose>
                        <X className="h-5 w-5" />
                      </DrawerClose>
                    </div>

                    <div className="flex flex-col space-y-4">
                      <button
                        onClick={() => toggleLanguage(true)}
                        className={`py-3 px-4 rounded-lg flex items-center ${
                          isEnglish ? "bg-gray-100 text-[#3998E6]" : ""
                        }`}
                      >
                        English
                        {isEnglish && (
                          <Check className="ml-auto h-5 w-5 text-[#3998E6]" />
                        )}
                      </button>
                      <button
                        onClick={() => toggleLanguage(false)}
                        className={`py-3 px-4 rounded-lg flex items-center ${
                          !isEnglish ? "bg-gray-100 text-[#3998E6]" : ""
                        }`}
                      >
                        Español
                        {!isEnglish && (
                          <Check className="ml-auto h-5 w-5 text-[#3998E6]" />
                        )}
                      </button>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none hover:text-[#3998E6] transition-colors mt-8">
                  <Globe className="w-4 h-4" />
                  <span className="self-stretch my-auto">
                    {translations.language}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onClick={() => setIsEnglish(true)}
                    className={isEnglish ? "bg-gray-100" : ""}
                  >
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setIsEnglish(false)}
                    className={!isEnglish ? "bg-gray-100" : ""}
                  >
                    Español
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          <div className="min-w-60 leading-[1.4] grow shrink w-[237px]">
            <h3 className="text-hsl(var(--foreground)) text-[14px] font-dela">
              {translations.companyHeader}
            </h3>
            <nav className="w-full text-hsl(var(--foreground)) mt-5">
              <a
                href={isEnglish ? links.disclaimer.en : links.disclaimer.es}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-hsl(var(--foreground)) hover:text-[#3998E6] transition-colors"
              >
                {translations.disclaimer}
              </a>
              <a
                href={isEnglish ? links.terms.en : links.terms.es}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 text-hsl(var(--foreground)) hover:text-[#3998E6] transition-colors"
              >
                {translations.terms}
              </a>
              <a
                href={isEnglish ? links.privacy.en : links.privacy.es}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 text-hsl(var(--foreground)) hover:text-[#3998E6] transition-colors"
              >
                {translations.privacy}
              </a>
              <a
                href={isEnglish ? links.usage.en : links.usage.es}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 text-hsl(var(--foreground)) hover:text-[#3998E6] transition-colors"
              >
                {translations.usage}
              </a>
            </nav>
          </div>

          <div className="min-w-60 text-hsl(var(--foreground)) grow shrink w-[237px] max-md:max-w-full">
            <h3 className="text-hsl(var(--foreground)) text-[14px] font-dela leading-[1.4]">
              {translations.followUs}
            </h3>
            <div className="w-full mt-5 flex flex-row gap-4">
              <a
                href="https://www.instagram.com/mindlyespanol/"
                onClick={(e) => {
                  e.preventDefault();
                  track(EventName.INSTAGRAM_BUTTON_CLICKED);

                  setTimeout(() => {
                    window.location.href =
                      "https://www.instagram.com/mindlyespanol/";
                  }, 300);
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-hsl(var(--foreground)) hover:bg-gray-100 transition-colors"
              >
                <Instagram className="w-5 h-5 text-hsl(var(--foreground))" />
              </a>
              <a
                href="https://www.facebook.com/people/Mindlyes/61556269154446/"
                onClick={(e) => {
                  e.preventDefault();
                  track(EventName.FACEBOOK_BUTTON_CLICKED);

                  setTimeout(() => {
                    window.location.href =
                      "https://www.facebook.com/people/Mindlyes/61556269154446/";
                  }, 300);
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5 text-hsl(var(--foreground))" />
              </a>
            </div>

            <div className="mt-6">
              <h3 className="text-hsl(var(--foreground)) text-[14px] font-dela leading-[1.4] mb-3">
                {translations.compliant}
              </h3>
              <div className="flex flex-wrap gap-1">
                <img
                  src="https://raw.githubusercontent.com/mindly-space/es-landing-images/245ec17d47d89f2a46163e459165270c257b3e2d/images/HIPAA%20Compliant%20Logo.svg"
                  alt="HIPAA Compliant"
                  className="h-[72px] w-auto"
                />
                <img
                  src="https://raw.githubusercontent.com/mindly-space/es-landing-images/245ec17d47d89f2a46163e459165270c257b3e2d/images/CCPA%20Compliance%20Logo.svg"
                  alt="CCPA Compliance"
                  className="h-[72px] w-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center gap-[40px_100px] leading-[1.2] justify-between flex-wrap mt-8 max-md:max-w-full">
          <div className="flex flex-col items-start">
            <div className="self-stretch text-xs text-hsl(var(--foreground)) font-semibold mb-1">
              {translations.supportedBy}
            </div>
            <img
              src="/lovable-uploads/63d95fe2-5257-468a-b03d-d2c5c9bb2d34.png"
              alt="Google for Startups"
              className="h-[20px] object-contain"
            />
          </div>
          <div className="self-stretch flex min-w-60 items-end gap-4 text-[13px] text-hsl(var(--foreground)) font-normal text-right justify-end">
            <div className="opacity-70 self-end">{translations.version}</div>
            <div className="opacity-70 self-end">{translations.copyright}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
