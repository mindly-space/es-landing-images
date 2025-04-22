
import React from "react";

export const SectionTitle: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-[1400px] mx-auto px-4 mb-12">
      <h2 className="text-center text-[48px] leading-[120%] max-md:max-w-full max-md:text-[28px] font-dela mb-8">
        ¿Qué es Mindly?
      </h2>
      
      <div className="w-full flex flex-col md:flex-row items-center gap-8 mb-8">
        <div className="md:w-1/2">
          <img 
            src="/lovable-uploads/fb714af9-d323-45af-b821-aa78f54c0db0.png" 
            alt="Sesión de terapia en línea" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        
        <div className="md:w-1/2 text-[18px] max-md:text-[16px] space-y-4">
          <p>
            Mindly es una plataforma de terapia online pensada para tu comodidad.
          </p>
          <p>
            Nuestra plataforma fue fundada en 2022 con el apoyo de Google.
          </p>
          <p>
            Nuestra misión es hacer que el apoyo psicológico de calidad sea accesible para todos, para que cualquier persona pueda recibir ayuda a tiempo y llevar una vida sana y feliz.
          </p>
          <p>
            En Mindly encontrarás psicólog@s hispanohablantes que no solo te escuchan, sino que también te entienden, con respeto por tu historia y tu cultura.
          </p>
        </div>
      </div>
    </div>
  );
};
