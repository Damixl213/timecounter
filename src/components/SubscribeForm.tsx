import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const SubscribeForm: React.FC = () => {
  const whatsappNumber = '+2347061684813'; // Replace with your actual WhatsApp number
  const email = 'Jbeetravelsandtours@gmail.com'; // Replace with your actual email

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const handleEmailClick = () => {
    window.open(`mailto:${email}`, '_blank');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex flex-col md:flex-row gap-3">
        <button 
          onClick={handleWhatsAppClick}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-300 transform hover:scale-105 flex-1"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </button>
        <button 
          onClick={handleEmailClick}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-300 transform hover:scale-105 flex-1"
        >
          <Mail className="w-5 h-5" />
          Email
        </button>
      </div>
    </div>
  );
};

export default SubscribeForm;