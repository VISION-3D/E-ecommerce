/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette principale Forever Aloe Vera
        'aloe': {
          green: '#2E7D32',
          'green-light': '#4CAF50',
          'green-dark': '#1B5E20',
          gold: '#FBC02D',
        },
        'whatsapp': '#25D366',
        'forever': {
          'gray-light': '#F5F5F5',
          'gray-medium': '#E0E0E0',
          'gray-dark': '#333333',
          'gray-text': '#666666',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'aloe': '0 10px 25px -5px rgba(46, 125, 50, 0.1)',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ou ton chemin vers les fichiers React
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aloe-green': '#2E7D32',
        'aloe-green-dark': '#1B5E20',
        'aloe-gold': '#FBC02D',
        'whatsapp-green': '#25D366',
      },
      animation: {
        // Animation existantes
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'zoom-in': 'zoom-in 0.3s ease-out forwards',
        'bounce-slow': 'bounce 3s infinite',
        'shimmer': 'shimmer 2s infinite',
        'tilt': 'tilt 10s infinite linear',
        
        // Nouvelles animations
        'spin-slow': 'spin 10s linear infinite',
        'spin-slow-reverse': 'spin-reverse 12s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'wave': 'wave 2s ease-in-out infinite',
        'ripple': 'ripple 1.5s ease-out infinite',
        'shimmer-text': 'shimmer-text 3s ease-in-out infinite',
        'bounce-in': 'bounce-in 0.6s ease-out',
        'glitch': 'glitch 0.3s ease-in-out',
        'particle-float': 'particle-float 4s ease-in-out infinite',
        'shine': 'shine 2s ease-in-out infinite',
      },
      keyframes: {
        // Keyframes existants
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(46, 125, 50, 0.5), 0 0 20px rgba(46, 125, 50, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(46, 125, 50, 0.8), 0 0 40px rgba(46, 125, 50, 0.5)' 
          },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'zoom-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: '200px 0' },
        },
        'tilt': {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
        
        // Nouvelles keyframes
        'spin-reverse': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' },
        },
        'wave': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'ripple': {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
        'shimmer-text': {
          '0%, 100%': { 
            'background-size': '200% 200%',
            'background-position': 'left center' 
          },
          '50%': { 
            'background-size': '200% 200%',
            'background-position': 'right center' 
          },
        },
        'bounce-in': {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'particle-float': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '33%': { transform: 'translateY(-10px) translateX(5px)' },
          '66%': { transform: 'translateY(5px) translateX(-5px)' },
        },
        'shine': {
          '0%': { backgroundPosition: '-100%' },
          '100%': { backgroundPosition: '200%' },
        },
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      scale: {
        '102': '1.02',
        '105': '1.05',
        '110': '1.10',
        '125': '1.25',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aloe-green': '#2E7D32',
        'aloe-green-dark': '#1B5E20',
        'aloe-gold': '#FBC02D',
        'whatsapp-green': '#25D366',
      },
    },
  },
  plugins: [],
}

