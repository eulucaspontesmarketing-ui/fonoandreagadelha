
import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const TrustSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#FFFEF7] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD95A]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFD95A]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-block p-3 bg-[#FFD95A]/20 rounded-2xl mb-8">
          <span className="text-[#5D4E1A] font-bold text-xs uppercase tracking-[0.2em]">Acolhimento & Cuidado</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#5D4E1A] mb-10 leading-tight font-nunito">
          Sua família merece uma escuta atenta e profissional
        </h2>
        <p className="text-xl text-gray-600 mb-14 leading-relaxed font-medium">
          Meu compromisso é oferecer um acompanhamento que respeite o ritmo da criança e traga segurança para os pais. Se você tem dúvidas sobre o desenvolvimento da fala do seu filho, vamos conversar de forma leve.
        </p>
        
        <div className="relative mb-16 group">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#FFD95A]/20 to-transparent rounded-[45px] blur-lg group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative bg-white p-10 md:p-14 rounded-[40px] border border-[#FFD95A]/30 shadow-sm">
            <p className="italic text-xl text-[#5D4E1A] font-medium leading-relaxed">
              "A fala é o caminho para a conexão. Quando estimulamos a comunicação, abrimos portas para o mundo e fortalecemos os laços afetivos que unem a família."
            </p>
          </div>
        </div>

        <WhatsAppButton text="Agendar uma conversa agora" className="px-12 py-6 text-xl shadow-xl" />
      </div>
    </section>
  );
};

export default TrustSection;
