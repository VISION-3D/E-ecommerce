// src/components/PaymentMethodIcon.jsx
import React from 'react';

const PaymentMethodIcon = ({ method, size = "medium" }) => {
  const sizes = {
    small: "w-8 h-8",
    medium: "w-10 h-10",
    large: "w-12 h-12"
  };

  const sizeClass = sizes[size] || sizes.medium;
  
  // Chemins des images locales
  const imagePaths = {
    orange_money: "/assets/images/payment/orange-money.png",
    free_money: "/assets/images/payment/free-money.png",
    wave: "/assets/images/payment/wave.png",
    visa: "/assets/images/payment/visa.png",
    mastercard: "/assets/images/payment/mastercard.png"
  };

  const renderFallbackSVG = () => {
    switch(method) {
      case 'orange_money':
        return (
          <div className={`${sizeClass} rounded-full bg-orange-500 flex items-center justify-center`}>
            <span className="text-white font-bold text-sm">OM</span>
          </div>
        );
      case 'free_money':
        return (
          <div className={`${sizeClass} rounded-full bg-blue-500 flex items-center justify-center`}>
            <span className="text-white font-bold text-sm">FM</span>
          </div>
        );
      case 'wave':
        return (
          <div className={`${sizeClass} rounded-full bg-gradient-to-r from-purple-700 to-purple-500 flex items-center justify-center`}>
            <span className="text-white font-bold text-sm">WAVE</span>
          </div>
        );
      case 'visa':
        return (
          <div className={`${sizeClass} bg-gradient-to-r from-blue-900 to-blue-700 rounded flex items-center justify-center`}>
            <span className="text-white font-bold text-xs">VISA</span>
          </div>
        );
      case 'mastercard':
        return (
          <div className={`${sizeClass} bg-gradient-to-r from-red-600 to-orange-500 rounded flex items-center justify-center`}>
            <span className="text-white font-bold text-xs">MC</span>
          </div>
        );
      default:
        return null;
    }
  };

  if (imagePaths[method]) {
    return (
      <img
        src={imagePaths[method]}
        alt={method}
        className={sizeClass}
        onError={(e) => {
          // Remplace par le fallback SVG si l'image ne charge pas
          const parent = e.target.parentNode;
          parent.removeChild(e.target);
          const fallback = document.createElement('div');
          parent.appendChild(fallback);
          parent.innerHTML = '';
          parent.appendChild(renderFallbackSVG());
        }}
      />
    );
  }

  return renderFallbackSVG();
};

export default PaymentMethodIcon;