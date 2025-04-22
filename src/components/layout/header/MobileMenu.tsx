
import React from "react";
import { Menu, X } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { Logo } from "./Logo";
import { LanguageSelector } from "./LanguageSelector";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isLangOpen: boolean;
  setIsLangOpen: (value: boolean) => void;
  isEnglish: boolean;
  setIsEnglish: (value: boolean) => void;
  translations: {
    about: string;
    community: string;
    specialists: string;
    howItWorks: string;
    findTherapist: string;
    language: string;
  };
  ctaLink: string;
}

export const MobileMenu = ({
  isOpen,
  setIsOpen,
  isLangOpen,
  setIsLangOpen,
  isEnglish,
  setIsEnglish,
  translations,
  ctaLink,
}: MobileMenuProps) => {
  return (
    <div className="lg:hidden flex items-center ml-auto">
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <button className="p-2 focus:outline-none">
            <Menu className="h-7 w-7" />
          </button>
        </DrawerTrigger>
        <DrawerContent className="h-[90vh]">
          <div className="px-6 py-4 flex flex-col h-full">
            <div className="flex justify-between items-center mb-8">
              <Logo />
              <DrawerClose>
                <X className="h-7 w-7" />
              </DrawerClose>
            </div>
            
            <nav className="flex flex-col space-y-6 text-base px-4">
              <a href="#about" className="hover:text-[#3998E6] transition-colors py-2">
                {translations.about}
              </a>
              <a href="#reviews" className="hover:text-[#3998E6] transition-colors py-2">
                {translations.community}
              </a>
              <a href="#how-it-works" className="hover:text-[#3998E6] transition-colors py-2">
                {translations.specialists}
              </a>
              <a href="#therapist-showcase" className="hover:text-[#3998E6] transition-colors py-2">
                {translations.howItWorks}
              </a>
            </nav>
            
            <div className="mt-auto mb-4 px-4">
              <a href={ctaLink} className="block w-full">
                <button className="w-full bg-[rgba(2,156,238,1)] min-h-12 gap-2 text-white font-semibold text-center my-auto px-5 py-3 rounded-[40px] hover:bg-[#0288D1] transition-colors">
                  {translations.findTherapist}
                </button>
              </a>
              
              <div className="flex items-center justify-center gap-4 mt-6">
                <LanguageSelector 
                  isEnglish={isEnglish}
                  setIsEnglish={setIsEnglish}
                  languageText={translations.language}
                  isMobile={true}
                  isLangOpen={isLangOpen}
                  setIsLangOpen={setIsLangOpen}
                />
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
