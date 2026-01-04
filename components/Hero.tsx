
import React from 'react';
import WhatsAppButton from './WhatsAppButton';
import SectionDivider from './SectionDivider';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FFFEF7]">
      {/* --- DESKTOP VERSION --- */}
      <div className="hidden md:block relative w-full h-[750px]">
        {/* Background Image - Integrated & Vivid */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/nhBhmnR6/Chat_GPT_Image_4_de_jan_de_2026_03_42_05.png" 
            alt="Andréa Gadelha - Fonoaudiologia Infantil"
            className="w-full h-full object-cover object-right brightness-[1.02]"
          />
          {/* Very subtle side overlay for contrast on text area */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFFEF7]/40 via-transparent to-transparent w-1/2"></div>
        </div>

        {/* Content Area */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-16 flex items-center">
          <div className="max-w-2xl">
            {/* "Designed" Headline with soft background */}
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-4 bg-[#FFD95A]/20 blur-xl rounded-[40px] -z-10"></div>
              <div className="relative px-8 py-6 bg-white/40 backdrop-blur-md rounded-[32px] border border-white/60 shadow-sm">
                <h1 className="text-5xl lg:text-6xl font-[800] text-[#5D4E1A] leading-tight font-nunito">
                  Cuidando da fala <br/>
                  <span className="text-[#8B732A]">do seu filho com amor</span>
                </h1>
              </div>
            </div>
            
            <p className="text-xl text-[#5D4E1A] font-semibold mb-10 leading-relaxed max-w-lg pl-2">
              Acompanhamento humanizado e especializado para transformar a comunicação do seu pequeno.
            </p>
            <div className="pl-2">
              <WhatsAppButton text="Falar no WhatsApp" className="px-12 py-5 text-lg shadow-xl" />
            </div>
          </div>
        </div>
        
        {/* Organic bottom divider */}
        <SectionDivider color="#ffffff" position="bottom" type="organic" />
      </div>

      {/* --- MOBILE VERSION --- */}
      <div className="md:hidden relative w-full min-h-[100vh] flex flex-col">
        {/* Vivid integrated image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/Cxkx8wP3/Chat_GPT_Image_4_de_jan_de_2026_03_47_37.png" 
            alt="Atendimento Fonoaudiológico"
            className="w-full h-full object-cover object-center brightness-[1.03]"
          />
        </div>

        {/* Text over image at bottom */}
        <div className="relative z-10 mt-auto flex flex-col items-center justify-end p-6 pb-20 text-center">
           {/* Mobile "Designed" Headline */}
           <div className="bg-white/60 backdrop-blur-md px-6 py-6 rounded-[30px] border border-white/60 shadow-lg mb-6">
            <h1 className="text-3xl font-[800] text-[#5D4E1A] leading-tight font-nunito mb-3">
              Cuidando da fala do seu filho com amor
            </h1>
            <p className="text-base text-[#5D4E1A] font-bold leading-snug">
              Acompanhamento humanizado para o desenvolvimento da comunicação.
            </p>
          </div>
          <WhatsAppButton text="Falar no WhatsApp" fullWidth className="shadow-2xl" />
        </div>
        
        <SectionDivider color="#ffffff" position="bottom" type="organic" />
      </div>
    </section>
  );
};

export default Hero;
