
import React from 'react';

interface WhatsAppButtonProps {
  text: string;
  className?: string;
  fullWidth?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ text, className = "", fullWidth = false }) => {
  const handleClick = () => {
    // Standard WhatsApp link placeholder
    window.open('https://wa.me/5500000000000', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`
        bg-[#FFD95A] hover:bg-[#F2C94C] text-[#5D4E1A] 
        font-bold py-4 px-8 rounded-full shadow-lg 
        transition-all duration-300 transform hover:scale-105 active:scale-95
        flex items-center justify-center gap-3 border-2 border-white/50
        ${fullWidth ? 'w-full' : 'inline-flex'}
        ${className}
      `}
    >
      <svg className="w-6 h-6 fill-[#5D4E1A]" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.996-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.385 1.44 5.217 1.441 5.426 0 9.842-4.416 9.845-9.843.001-2.63-1.023-5.102-2.883-6.964-1.861-1.861-4.335-2.885-6.963-2.885-5.429 0-9.844 4.417-9.847 9.845 0 1.83.513 3.618 1.482 5.188l-1.018 3.71 3.805-.998zm11.452-7.618c-.301-.15-1.779-.878-2.053-.978-.275-.1-.475-.15-.675.15-.199.3-.775 1.001-.95 1.2-.175.199-.35.225-.65.075-.301-.15-1.267-.467-2.414-1.49-.893-.795-1.495-1.777-1.671-2.076-.175-.3-.018-.463.132-.612.135-.133.301-.35.451-.526.149-.175.199-.3.3-.5.1-.199.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.491-.51-.675-.519-.174-.01-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.026-1.05 2.501s1.075 2.901 1.225 3.101c.15.2 2.115 3.227 5.123 4.529.714.311 1.272.496 1.708.635.716.227 1.369.195 1.883.117.574-.088 1.779-.726 2.028-1.426.25-.7.25-1.301.175-1.426-.075-.125-.275-.199-.575-.35z"/>
      </svg>
      <span>{text}</span>
    </button>
  );
};

export default WhatsAppButton;
