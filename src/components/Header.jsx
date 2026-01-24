import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Phone, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const WHATSAPP_NUMBER = '+221769490685';
const WHATSAPP_MESSAGE =
  'Bonjour, je suis intéressé(e) par vos produits Vitalité & Bien-être.';

const Header = () => {
  const { getItemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Catalogue', path: '/catalogue' },
    { name: 'À Propos', path: '/apropos' },
    { name: 'Contact', path: '/contact' },
  ];

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <header className="sticky top-0 z-50 relative">
      
      {/* CADRE LUMINEUX ANIMÉ */}
      <div className="absolute inset-0 rounded-lg pointer-events-none
                      bg-gradient-to-r from-green-400 via-green-500 to-green-400
                      opacity-30 animate-pulse"></div>

      {/* HEADER CONTENU */}
      <div className="relative bg-white/90 backdrop-blur-lg shadow-xl rounded-lg mx-2 md:mx-4 px-4 py-3 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src="/logo1.png"
            alt="Vitalité & Bien-être"
            className="h-14 sm:h-16 md:h-20 w-auto animate-float transition-transform duration-500 hover:scale-110"
          />
         
        </Link>

 {/* NAVIGATION DESKTOP PREMIUM MULTICOLOR */}
<nav className="hidden md:flex items-center space-x-6">
  {menuItems.map((item) => (
    <Link
      key={item.name}
      to={item.path}
      className="
        relative px-4 py-2 font-semibold text-gray-700
        rounded-lg border-2 border-transparent
        transition-all duration-500 ease-out
        hover:text-white hover:scale-105 hover:-translate-y-0.5
        hover:border-transparent
        bg-gradient-to-r from-green-400 via-green-500 to-green-400
        bg-[length:200%_200%] bg-[position:0%_0%]
        animate-gradient-x
        shadow-md hover:shadow-xl
      "
    >
      {item.name}
    </Link>
  ))}
</nav>



       

        {/* ACTIONS */}
        <div className="flex items-center space-x-4">

          {/* WHATSAPP */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-2 px-5 py-2 rounded-full
                       bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold
                       shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Phone size={18} />
            <span>WhatsApp</span>
          </a>

          {/* PANIER */}
          <Link
            to="/chariots"
            className="relative p-2 rounded-full hover:bg-gray-100 transition"
          >
            <ShoppingCart size={24} />
            {getItemCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs
                               rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
                {getItemCount()}
              </span>
            )}
          </Link>

          {/* MENU MOBILE */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200 px-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="py-2 text-lg font-medium text-gray-700 hover:text-green-700 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 py-3 mt-3 rounded-full
                       bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold shadow-md
                       hover:shadow-xl hover:scale-105 transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <Phone size={18} />
            <span>Commander sur WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
