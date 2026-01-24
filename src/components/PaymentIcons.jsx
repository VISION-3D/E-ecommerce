// src/components/PaymentIcons.jsx
import React from 'react';

const PaymentIcons = ({ method, className = "w-12 h-12" }) => {
  switch(method) {
    case 'orange_money':
      return (
        <div className={className}>
          {/* Logo Orange Money Sénégal */}
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FF6600"/>
            <path d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM12 7.2C14.4301 7.2 16.4 9.16995 16.4 11.6C16.4 14.0301 14.4301 16 12 16C9.56995 16 7.6 14.0301 7.6 11.6C7.6 9.16995 9.56995 7.2 12 7.2Z" fill="white"/>
            <path d="M12 8.8C10.2327 8.8 8.8 10.2327 8.8 12C8.8 13.7673 10.2327 15.2 12 15.2C13.7673 15.2 15.2 13.7673 15.2 12C15.2 10.2327 13.7673 8.8 12 8.8Z" fill="white"/>
          </svg>
        </div>
      );
    case 'free_money':
      return (
        <div className={className}>
          {/* Logo Free Money Sénégal */}
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#0078D7"/>
            <path d="M12 6L6 12V18H12L18 12V6H12ZM12 8L16 12L12 16H8V12L12 8Z" fill="white"/>
            <path d="M10 10H14V14H10V10Z" fill="white"/>
          </svg>
        </div>
      );
    case 'wave':
      return (
        <div className={className}>
          {/* Logo Wave Sénégal */}
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#6A0DAD"/>
            <path d="M7 9C7 9 8.5 7 12 7C15.5 7 17 9 17 9V15C17 15 15.5 17 12 17C8.5 17 7 15 7 15V9Z" fill="white"/>
            <path d="M9 10C9 10 9.5 9 12 9C14.5 9 15 10 15 10V14C15 14 14.5 15 12 15C9.5 15 9 14 9 14V10Z" fill="#6A0DAD"/>
          </svg>
        </div>
      );
    case 'visa':
      return (
        <div className={className}>
          {/* Logo Visa */}
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#1A1F71"/>
            <path d="M10.5 8L7 16H9.5L10.5 13H13L14 16H17L13.5 8H10.5ZM11.5 11L12.5 9L13.5 11H11.5Z" fill="white"/>
          </svg>
        </div>
      );
    case 'mastercard':
      return (
        <div className={className}>
          {/* Logo Mastercard */}
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#EB001B"/>
            <path d="M14 8H10V16H14V8Z" fill="#FF5F00"/>
            <path d="M10 12C10 10.3431 11.3431 9 13 9C14.6569 9 16 10.3431 16 12C16 13.6569 14.6569 15 13 15C11.3431 15 10 13.6569 10 12Z" fill="#F79E1B"/>
          </svg>
        </div>
      );
    default:
      return null;
  }
};

export default PaymentIcons;