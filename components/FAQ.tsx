
import React from 'react';
import SectionDivider from './SectionDivider';

const faqItems = [
  {
    question: "Você atende planos de saúde?",
    answer: "Não atendo planos de saúde, porém emito nota fiscal, o que possibilita que você solicite reembolso junto ao seu plano de saúde. Cada operadora possui sua própria política de reembolso, por isso é importante consultar o seu plano para verificar essa possibilidade."
  },
  {
    question: "Meu filho tem 3 anos, não fala frases, apenas palavras curtas. Isso já é atraso?",
    answer: "Por volta dos 3 anos, esperamos que a criança utilize um vocabulário mais amplo e consiga formar frases simples, geralmente com 4 a 5 palavras. Além da fala, também é importante observar a compreensão da criança, que é tão relevante quanto a produção das palavras. Em muitos casos, é indicado realizar uma avaliação fonoaudiológica para entender melhor o desenvolvimento da comunicação."
  },
  {
    question: "Como posso estimular mais a fala do meu filho?",
    answer: "Existem várias formas de estimular a comunicação no dia a dia. Algumas delas incluem: ler livros ilustrados e conversar sobre as imagens, fazer perguntas simples durante as atividades, utilizar músicas infantis com letras fáceis, incluir a criança em conversas cotidianas e falar de forma clara e correta. Cada criança tem seu tempo, e a melhor forma de estímulo varia conforme o desenvolvimento."
  },
  {
    question: "Qual o valor da consulta?",
    answer: "De acordo com o código de ética do Conselho Federal de Fonoaudiologia, não é permitido divulgar valores publicamente. Para receber todas as informações, basta entrar em contato diretamente pelo WhatsApp."
  },
  {
    question: "Você também atende adultos?",
    answer: "O atendimento é voltado exclusivamente para o público infantil."
  }
];

const FAQ: React.FC = () => {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#FFD95A]/20 rounded-full mb-4">
            <span className="text-[#5D4E1A] font-bold text-xs uppercase tracking-widest">Dúvidas Comuns</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#5D4E1A] font-nunito">Perguntas Frequentes</h2>
        </div>

        <div className="space-y-8">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="p-8 md:p-10 bg-[#FFFEF7] rounded-[32px] border border-[#FFD95A]/30 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#5D4E1A] mb-4 font-nunito leading-tight">
                {item.question}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <SectionDivider color="#FFFEF7" position="bottom" type="curve" />
    </section>
  );
};

export default FAQ;
