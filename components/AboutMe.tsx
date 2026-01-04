
import React from 'react';
import SectionDivider from './SectionDivider';

const AboutMe: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#FFFEF7]">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          {/* Circular Image - Small and Elegant */}
          <div className="flex-shrink-0">
            <div className="relative p-3 bg-[#FFD95A]/20 rounded-full">
              <div className="w-52 h-52 md:w-64 md:h-64 overflow-hidden rounded-full border-[6px] border-white shadow-xl">
                <img 
                  src="https://i.postimg.cc/Tw6xXmTX/Chat-GPT-Image-4-de-jan-de-2026-04-06-21.png" 
                  alt="Andréa Gadelha" 
                  className="w-full h-full object-cover scale-110" 
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
              {/* Organic blob accent */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-24 h-24 bg-[#FFD95A]/30 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Warm, Simple Text */}
          <div className="text-center md:text-left max-w-xl space-y-8">
            <h2 className="text-2xl md:text-3xl text-[#5D4E1A] leading-relaxed font-extrabold font-nunito">
              Sou Andréa Gadelha, fonoaudióloga, e atuo com foco no desenvolvimento da comunicação infantil.
            </h2>
            <div className="w-16 h-1.5 bg-[#FFD95A] rounded-full mx-auto md:mx-0"></div>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              Sempre respeitando o tempo e as necessidades de cada criança, meu trabalho busca oferecer um atendimento acolhedor, individualizado e com orientação clara aos pais.
            </p>
          </div>
        </div>
      </div>
      
      <SectionDivider color="#ffffff" position="bottom" type="wave" />
    </section>
  );
};

export default AboutMe;
