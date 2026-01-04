
import React from 'react';
import WhatsAppButton from './WhatsAppButton';
import SectionDivider from './SectionDivider';

const feedbackItems = [
  {
    image: "https://i.postimg.cc/xjkKJz2B/highlights-18271470958202321-(2).jpg",
    text: "Cada conquista é construída com cuidado e parceria entre família e terapeuta."
  },
  {
    image: "https://i.postimg.cc/5NdFXKp7/Captura_de_tela_2026_01_04_042917.png",
    text: "Pequenos passos que transformam o dia a dia e trazem alegria para o lar."
  },
  {
    image: "https://i.postimg.cc/3J5Dkf9n/Captura_de_tela_2026_01_04_042853.png",
    text: "Resultados que mostram o valor de um acompanhamento atento e especializado."
  },
  {
    image: "https://i.postimg.cc/gkF6xt4g/Captura_de_tela_2026_01_04_042905.png",
    text: "Família e profissional caminhando juntas pelo pleno desenvolvimento da criança."
  }
];

const Feedbacks: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#FFFEF7] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD95A]/20 rounded-full mb-4">
            <span className="text-pink-400 text-lg">♥</span>
            <span className="text-[#5D4E1A] font-bold text-xs uppercase tracking-widest">Depoimentos reais</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#5D4E1A] font-nunito leading-tight">
            Feedbacks que aquecem <br/><span className="text-[#A68926]">o coração</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {feedbackItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="relative p-3 bg-white rounded-[40px] shadow-xl border border-[#FFD95A]/20 transition-transform duration-500 hover:scale-[1.02]">
                <img 
                  src={item.image} 
                  alt="Feedback de atendimento" 
                  className="rounded-[30px] w-full h-auto object-cover max-h-[400px]"
                />
                {/* Decorative organic shapes around images */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#FFD95A]/30 rounded-full blur-xl group-hover:bg-[#FFD95A]/50"></div>
              </div>
              <p className="mt-6 text-center text-gray-600 font-medium italic text-lg max-w-xs">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur-sm p-10 rounded-[45px] border border-white shadow-sm mb-10">
            <p className="text-xl text-[#5D4E1A] font-bold leading-relaxed mb-8 font-nunito">
              Se você deseja entender melhor como posso ajudar seu filho, estou à disposição para conversar de forma acolhedora.
            </p>
            <WhatsAppButton text="Conversar pelo WhatsApp" className="shadow-xl px-12" />
          </div>
        </div>
      </div>
      
      <SectionDivider color="#ffffff" position="bottom" type="torn" />
    </section>
  );
};

export default Feedbacks;
