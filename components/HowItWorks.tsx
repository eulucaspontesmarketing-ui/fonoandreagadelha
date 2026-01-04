
import React from 'react';
import SectionDivider from './SectionDivider';

const steps = [
  {
    title: "Atendimento Individualizado",
    description: "Um olhar exclusivo para o seu filho, respeitando seu tempo e sua individualidade.",
    number: "01"
  },
  {
    title: "Avaliação Cuidadosa",
    description: "Análise profunda do desenvolvimento para traçar o melhor caminho de estímulo.",
    number: "02"
  },
  {
    title: "Orientação aos Pais",
    description: "Você não está sozinho. Oriento como continuar o estímulo em casa de forma leve.",
    number: "03"
  },
  {
    title: "Acompanhamento Focado",
    description: "Monitoramento constante da evolução, celebrando cada pequena grande conquista.",
    number: "04"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#FFFEF7] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#5D4E1A] mb-8 font-nunito leading-tight">
              Como funciona o <br/><span className="text-[#A68926]">atendimento</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
              O processo é construído com base na confiança e na ludicidade. A criança aprende e se desenvolve enquanto brinca, em um ambiente seguro e acolhedor.
            </p>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-white border-2 border-[#FFD95A] rounded-2xl flex items-center justify-center font-black text-[#5D4E1A] text-xl shadow-sm group-hover:bg-[#FFD95A] transition-all duration-300">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#5D4E1A] mb-2 font-nunito">{step.title}</h4>
                    <p className="text-gray-600 text-lg leading-snug font-medium">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="aspect-[4/5] relative">
              <div className="absolute -top-10 -right-10 w-full h-full bg-[#FFD95A]/10 rounded-[60px] -z-10 blur-2xl"></div>
              <div className="bg-white p-5 rounded-[50px] shadow-2xl border border-[#FFD95A]/20 overflow-hidden h-full">
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800" 
                  alt="Brincadeira terapêutica e desenvolvimento" 
                  className="rounded-[40px] w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <SectionDivider color="#FFFEF7" position="bottom" type="organic" />
    </section>
  );
};

export default HowItWorks;
