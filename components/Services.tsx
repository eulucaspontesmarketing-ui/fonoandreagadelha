
import React from 'react';
import WhatsAppButton from './WhatsAppButton';
import SectionDivider from './SectionDivider';

const services = [
  {
    title: "Atraso na fala",
    description: "Orientação e acompanhamento para crianças que ainda não começaram a falar ou falam pouco para a idade.",
    icon: "🌱"
  },
  {
    title: "Trocas de sons",
    description: "Identificação e correção de dificuldades na pronúncia que podem afetar a compreensão da fala.",
    icon: "🗣️"
  },
  {
    title: "Dificuldade na comunicação",
    description: "Suporte para crianças que apresentam desafios em interagir ou se expressar claramente no dia a dia.",
    icon: "🤝"
  },
  {
    title: "Dúvidas dos pais",
    description: "Espaço para acolher as incertezas da família e oferecer caminhos seguros para o desenvolvimento.",
    icon: "❤️"
  },
  {
    title: "Estímulo da linguagem",
    description: "Estratégias lúdicas para potencializar a compreensão e a expressão verbal da criança.",
    icon: "✨"
  }
];

const Services: React.FC = () => {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#5D4E1A] mb-6">Como posso ajudar seu filho</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Cada criança é única. Meu olhar é voltado para as necessidades específicas do seu pequeno e da sua família.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-10 bg-[#FFFEF7] rounded-[40px] border border-[#FFD95A]/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-[#5D4E1A] mb-4 font-nunito">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <WhatsAppButton text="Tirar dúvidas pelo WhatsApp" />
        </div>
      </div>
      
      <SectionDivider color="#FFFEF7" position="bottom" type="curve" flip />
    </section>
  );
};

export default Services;
