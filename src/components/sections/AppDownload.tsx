import React, { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
export const AppDownload = () => {
  const {
    isEnglish
  } = useContext(LanguageContext);

  // App store links
  const appStoreLink = "https://apps.apple.com/us/app/mindly-therapy/id1599105020";
  const googlePlayLink = "https://play.google.com/store/apps/details?id=app.mindlyspace.com&hl=en";

  // Rating image URLs
  const ratingImageEn = "https://raw.githubusercontent.com/mindly-space/es-landing-images/fcdc184513e922c0d9945c8e5e1f7fd5b2f76d05/images/StoreRatingBlock-eng.svg";
  const ratingImageEs = "https://raw.githubusercontent.com/mindly-space/es-landing-images/fcdc184513e922c0d9945c8e5e1f7fd5b2f76d05/images/StoreRatingBlock-es.svg";

  return <section className="w-full max-w-[1328px] bg-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 mt-16 mb-16 max-md:mt-10 py-0 my-0">
      <div className="relative w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className="w-full max-w-[564.56px] h-auto aspect-[564.56/640] relative">
          <img src="/lovable-uploads/85edd7ba-fca9-4007-9d16-30ce3c9055f9.png?format=webp&quality=80" alt="Mindly app screenshot" className="w-full h-full object-contain z-10 relative" />
          <div className="absolute w-full max-w-[550px] aspect-square bg-[#d8eeff] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"></div>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 flex flex-col items-start md:pl-20 max-md:pl-0 max-md:mt-3">
        <img src={isEnglish ? ratingImageEn : ratingImageEs} alt={isEnglish ? "App Store Rating" : "Valoración en App Store"} className="h-[44px] w-auto mb-4" />
        
        <h2 className="text-4xl font-dela text-[#212121] mb-4 max-md:text-[28px] max-md:leading-[120%] text-left">
          {isEnglish ? <><span className="text-[#029CEE]">Download</span> the Mindly app</> : <><span className="text-[#029CEE]">Descarga</span> la aplicación Mindly</>}
        </h2>
        
        <p className="text-base text-[#212121] mb-6 max-w-[570px] text-left">
          {isEnglish ? "All you need for your therapy — communication with your therapist, online sessions, and payment — in one place, no extra apps or services." : "Comunicación con tu psicólog@, sesiones en línea, pago: todo lo que necesitas para tu terapia en un solo lugar, sin aplicaciones ni servicios innecesarios"}
        </p>
        
        <div className="flex flex-wrap gap-4 self-start">
          {isEnglish ? <>
              <a href={appStoreLink} target="_blank" rel="noopener noreferrer" className="block">
                <img src="/lovable-uploads/e1999695-2fbf-4b66-a779-02f565eff014.png?format=webp&quality=80" alt="Download on the App Store" className="h-[52px] w-auto" />
              </a>
              <a href={googlePlayLink} target="_blank" rel="noopener noreferrer" className="block">
                <img src="/lovable-uploads/ddd20d6e-708d-4de0-a769-1acd74c67c1a.png?format=webp&quality=80" alt="Get it on Google Play" className="h-[52px] w-auto" />
              </a>
            </> : <>
              <a href={appStoreLink} target="_blank" rel="noopener noreferrer" className="block">
                <img src="/lovable-uploads/0bb66131-78c9-4f8a-9930-bf026b36326e.png?format=webp&quality=80" alt="Consíguelo en el App Store" className="h-[52px] w-auto" />
              </a>
              <a href={googlePlayLink} target="_blank" rel="noopener noreferrer" className="block">
                <img src="/lovable-uploads/cf7869a4-d49a-4a5a-9334-239823a20341.png?format=webp&quality=80" alt="Descargar en Google Play" className="h-[52px] w-auto" />
              </a>
            </>}
        </div>
      </div>
    </section>;
};
