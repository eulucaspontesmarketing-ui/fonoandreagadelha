
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#FFFEF7] border-t border-[#FFD95A]/20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold text-[#5D4E1A] mb-4">Fonoaudiologia Infantil</h3>
        <p className="text-gray-500 mb-8">
          Atendimento Humanizado e Especializado
        </p>
        <div className="flex justify-center gap-6 mb-8 text-gray-400">
          <span className="text-sm">Ética e Profissionalismo</span>
          <span className="text-sm">•</span>
          <span className="text-sm">Desenvolvimento Infantil</span>
        </div>
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
