
import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface LanguageContextType {
  isEnglish: boolean;
  setIsEnglish: (value: boolean) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  isEnglish: false,
  setIsEnglish: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [isEnglish, setIsEnglish] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage ? savedLanguage === 'en' : false;
  });

  useEffect(() => {
    localStorage.setItem('language', isEnglish ? 'en' : 'es');
  }, [isEnglish]);

  return (
    <LanguageContext.Provider value={{ isEnglish, setIsEnglish }}>
      {children}
    </LanguageContext.Provider>
  );
};
