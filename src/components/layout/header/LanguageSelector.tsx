
import React from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
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
import { X } from "lucide-react";

interface LanguageSelectorProps {
  isEnglish: boolean;
  setIsEnglish: (value: boolean) => void;
  languageText: string;
  isMobile: boolean;
  isLangOpen?: boolean;
  setIsLangOpen?: (value: boolean) => void;
}

export const LanguageSelector = ({
  isEnglish,
  setIsEnglish,
  languageText,
  isMobile,
  isLangOpen,
  setIsLangOpen,
}: LanguageSelectorProps) => {
  if (isMobile) {
    return (
      <Drawer open={isLangOpen} onOpenChange={setIsLangOpen}>
        <DrawerTrigger asChild>
          <button className="flex items-center hover:text-[#3998E6] transition-colors">
            <Globe className="h-4 w-4 mr-2" />
            {languageText}
          </button>
        </DrawerTrigger>
        <DrawerContent className="h-[30vh]">
          <div className="px-6 py-4 flex flex-col h-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Select Language</h3>
              <DrawerClose>
                <X className="h-5 w-5" />
              </DrawerClose>
            </div>
            
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => setIsEnglish(true)} 
                className={`py-3 px-4 rounded-lg flex items-center ${isEnglish ? 'bg-gray-100 text-[#3998E6]' : ''}`}
              >
                English
                {isEnglish && <Check className="ml-auto h-5 w-5 text-[#3998E6]" />}
              </button>
              <button 
                onClick={() => setIsEnglish(false)} 
                className={`py-3 px-4 rounded-lg flex items-center ${!isEnglish ? 'bg-gray-100 text-[#3998E6]' : ''}`}
              >
                Español
                {!isEnglish && <Check className="ml-auto h-5 w-5 text-[#3998E6]" />}
              </button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <div className="self-stretch hidden lg:flex items-center my-auto shrink-0">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none hover:text-[#3998E6] transition-colors text-xs xl:text-sm">
          <Globe className="w-4 h-4" />
          <span className="self-stretch my-auto">{languageText}</span>
          <ChevronDown className="w-4 h-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setIsEnglish(true)} className={isEnglish ? "bg-gray-100" : ""}>
            English
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsEnglish(false)} className={!isEnglish ? "bg-gray-100" : ""}>
            Español
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
