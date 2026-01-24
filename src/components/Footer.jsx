import React from 'react';
import { 
  Phone, Mail, MapPin, Leaf, Heart, Sparkles, Crown, 
  Home, ShoppingBag, BookOpen, MessageSquare, ShoppingCart,
  Star, Shield, Truck, Award, Globe, Users, Package, Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const menuItems = [
    { 
      path: '/', 
      label: 'Accueil', 
      icon: <Home className="w-5 h-5" />,
      description: 'Page principale'
    },
    { 
      path: '/catalogue', 
      label: 'Catalogue', 
      icon: <ShoppingBag className="w-5 h-5" />,
      description: 'Tous nos produits'
    },
    { 
      path: '/apropos', 
      label: 'À Propos', 
      icon: <BookOpen className="w-5 h-5" />,
      description: 'Notre histoire'
    },
    { 
      path: '/contact', 
      label: 'Contact', 
      icon: <MessageSquare className="w-5 h-5" />,
      description: 'Contactez-nous'
    },
    { 
      path: '/chariots', 
      label: 'Mon Panier', 
      icon: <ShoppingCart className="w-5 h-5" />,
      description: 'Vos produits'
    },
  ];

  const certifications = [
    { icon: <Leaf className="w-8 h-8" />, label: '100% Naturel', color: 'from-green-500 to-emerald-400' },
    { icon: <Shield className="w-8 h-8" />, label: 'Certifié', color: 'from-blue-500 to-cyan-400' },
    { icon: <Award className="w-8 h-8" />, label: 'Premium', color: 'from-yellow-500 to-amber-400' },
    { icon: <Truck className="w-8 h-8" />, label: 'Livraison', color: 'from-orange-500 to-red-400' },
    { icon: <Globe className="w-8 h-8" />, label: 'Sénégal', color: 'from-green-600 to-green-400' },
    { icon: <Users className="w-8 h-8" />, label: 'Support', color: 'from-purple-500 to-pink-400' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-aloe-green-dark to-gray-900 text-white py-12 overflow-hidden">
      {/* Effets lumineux 3D */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-aloe-green/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-l from-aloe-gold/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-3/4 left-1/2 w-24 h-24 bg-gradient-to-t from-whatsapp-green/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        {/* Étoiles scintillantes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.1
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête du footer */}
        <div className="text-center mb-12">
          <div className="inline-block relative group">
            {/* Cadre lumineux animé */}
            <div className="absolute -inset-4 bg-gradient-to-r from-aloe-green via-aloe-gold to-aloe-green rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>

            {/* Contenu principal */}
            <div className="relative bg-gradient-to-br from-aloe-green-dark to-aloe-green p-8 rounded-2xl shadow-2xl border border-aloe-green/30">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
                {/* Logo avec glow pulse */}
                <div className="relative">
                  {/* Glow autour du logo */}
                  <div className="absolute -inset-2 bg-aloe-gold rounded-full blur opacity-60 animate-pulse"></div>
                  <div className="relative bg-white p-3 rounded-full flex items-center justify-center">
                    <img
                      src="/logo1.png"
                      alt="Vitalité & Bien-être au Naturel"
                      className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain transition-transform duration-500 hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiMyRTdEMzIiLz4KPHRleHQgeD0iNDAiIHk9IjQ1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMzIiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+VjwvdGV4dD4KPC9zdmc+";
                      }}
                    />
                  </div>
                </div>

                {/* Texte */}
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                    Vitalité & Bien-être
                  </h2>
                  <p className="mt-2 text-green-200/80 max-w-2xl">
                    Votre destination premium pour les produits Forever Living Aloe Vera.
                    Excellence, authenticité et bien-être naturel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Premium */}
          <div className="space-y-6">
            <h4 className="font-bold text-xl flex items-center space-x-2">
              <Phone className="text-aloe-gold animate-pulse" />
              <span className="bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                Contact 
              </span>
            </h4>
            
            <div className="space-y-4">
              <div className="group relative p-4 bg-gradient-to-br from-green-900/30 to-green-800/10 rounded-xl border border-green-700/20 hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-whatsapp-green to-green-400 rounded-full blur opacity-30 group-hover:opacity-50"></div>
                    <div className="relative bg-gradient-to-br from-white to-gray-100 p-2 rounded-full shadow-lg">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-green-300">Appelez-nous</p>
                    <a 
                      href="tel:+221775078760" 
                      className="font-bold text-lg hover:text-green-200 transition-colors block group-hover:scale-105 transform"
                    >
                      +221 76 949 06 85
                    </a>
                  </div>
                </div>
                <div className="mt-2 text-xs text-green-400/60 group-hover:text-green-400 transition-colors">
                  <Clock className="inline w-3 h-3 mr-1" />
                  Disponible 7j/7, 9h-20h
                </div>
              </div>
              
              <div className="group relative p-4 bg-gradient-to-br from-blue-900/30 to-blue-800/10 rounded-xl border border-blue-700/20 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur opacity-30 group-hover:opacity-50"></div>
                    <div className="relative bg-gradient-to-br from-white to-gray-100 p-2 rounded-full shadow-lg">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-blue-300">Email</p>
                    <a 
                      href="mailto:contact@vitalite-bienetre.sn" 
                      className="font-bold hover:text-blue-200 transition-colors block group-hover:scale-105 transform"
                    >
                      ssene07@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="group relative p-4 bg-gradient-to-br from-orange-900/30 to-orange-800/10 rounded-xl border border-orange-700/20 hover:border-orange-500/50 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full blur opacity-30 group-hover:opacity-50"></div>
                    <div className="relative bg-gradient-to-br from-white to-gray-100 p-2 rounded-full shadow-lg">
                      <MapPin className="w-5 h-5 text-orange-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-orange-300">Notre Boutique</p>
                    <span className="font-bold group-hover:text-orange-200 transition-colors block">
                      Thiés, Sénégal
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Premium */}
          <div className="space-y-6">
            <h4 className="font-bold text-xl flex items-center space-x-2">
              <Sparkles className="text-aloe-gold" />
              <span className="bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                Navigation Premium
              </span>
            </h4>
            
            <div className="space-y-2">
              {menuItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="group relative flex items-center justify-between p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-aloe-green/10 hover:to-transparent hover:pl-6"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-aloe-green to-aloe-gold rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-white to-gray-100 p-2 rounded-lg shadow group-hover:shadow-lg transition-shadow">
                        <div className="text-aloe-green-dark">
                          {item.icon}
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className="font-semibold text-green-200 group-hover:text-white transition-colors">
                        {item.label}
                      </span>
                      <p className="text-xs text-green-400/60 group-hover:text-green-400 transition-colors">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-2 h-2 bg-gradient-to-r from-aloe-green to-aloe-gold rounded-full animate-pulse"></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Badges Premium */}
          <div className="space-y-6">
            <h4 className="font-bold text-xl flex items-center space-x-2">
              <Award className="text-aloe-gold" />
              <span className="bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                Nos Garanties
              </span>
            </h4>
            
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="group relative p-4 rounded-xl border border-gray-700/30 hover:border-transparent transition-all duration-300 hover:scale-105"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                  <div className="relative z-10">
                    <div className="text-center mb-2">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full mb-2 group-hover:scale-110 transition-transform">
                        <div className="text-gradient">
                          {cert.icon}
                        </div>
                      </div>
                      <p className="text-xs font-semibold text-green-300 group-hover:text-white transition-colors">
                        {cert.label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter et Réseaux sociaux */}
          <div className="space-y-6">
            <h4 className="font-bold text-xl flex items-center space-x-2">
              <Star className="text-aloe-gold" />
              <span className="bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                Newsletter Premium
              </span>
            </h4>
            
            <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 p-6 rounded-xl border border-green-700/30">
              <p className="text-green-200 mb-4">
                Recevez nos offres exclusives et conseils bien-être
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Votre email premium"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-green-700/30 rounded-lg text-white placeholder-green-300/50 focus:outline-none focus:border-aloe-green focus:ring-2 focus:ring-aloe-green/20"
                />
                <button className="w-full bg-gradient-to-r from-aloe-green to-aloe-green-dark hover:from-aloe-green-dark hover:to-aloe-green text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-aloe-green/20">
                  S'abonner
                </button>
              </div>
              <p className="text-xs text-green-400/60 mt-4">
                <Shield className="inline w-3 h-3 mr-1" />
                Vos données sont 100% sécurisées
              </p>
            </div>
            
            {/* Réseaux sociaux - Section séparée */}
            <div className="pt-4">
              <p className="text-sm text-green-300 mb-4 text-center">Suivez-nous</p>
              
              <div className="flex flex-wrap justify-center gap-3">
                {/* Facebook */}
                <a
                  href="https://facebook.com/vitalitebienetre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  title="Facebook"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/vitalitebienetre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  title="Instagram"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/+221769490685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  title="WhatsApp"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.99 15.152c-.208.58-1.227 1.064-1.697 1.125-.472.062-.948.077-1.417-.077-.472-.154-1.1-.48-1.89-.927-2.236-1.245-3.678-4.058-3.785-4.243-.106-.185-.887-1.225-.887-2.337 0-1.112.576-1.645.77-1.846.193-.2.42-.25.576-.25.146 0 .289.009.42.024.13.015.308.04.494.24.185.2.633.73.693.8.06.07.1.156.01.306-.09.15-.135.24-.27.37-.135.13-.27.288-.39.39-.12.105-.247.22-.106.44.14.22.626 1.067 1.35 1.727.938.857 1.737 1.113 1.96 1.239.22.126.35.104.48-.062.13-.165.55-.645.7-.86.15-.215.3-.18.494-.105.194.075 1.22.575 1.43.68.21.105.35.157.4.245.05.088.05.49-.158 1.067z"/>
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com/@vitalitebienetre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  title="TikTok"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 014.34-3.86V8.45a6.5 6.5 0 00-5.9 5.9 6.5 6.5 0 0010.35 5.24 6.5 6.5 0 002.2-5.24V9.7a8.18 8.18 0 004.1 1.08V7.27a4.85 4.85 0 01-3.07-1.58z"/>
                  </svg>
                </a>
              </div>
              
              <div className="mt-6 pt-4 border-t border-green-800/20">
                <p className="text-xs text-green-300/70 text-center">
                  Rejoignez notre communauté pour des conseils bien-être exclusifs
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-green-700/30"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="px-4 bg-gradient-to-b from-gray-900 via-aloe-green-dark to-gray-900">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-aloe-green via-aloe-gold to-aloe-green rounded-full blur-xl opacity-30"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-aloe-green-dark to-aloe-green rounded-full flex items-center justify-center border-4 border-gray-900 shadow-2xl">
                  <div className="text-white">
                    <Heart className="w-8 h-8 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="text-center space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-green-300/70">
              <p className="font-medium">
                © {currentYear} <span className="text-aloe-gold font-bold">Vitalité & Bien-être</span>
              </p>
              <p className="text-sm mt-1">Distributeur Officiel Forever Living Products</p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              <span className="text-green-300/70 text-sm flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Connecté 24h/24</span>
              </span>
              
              <span className="text-green-300/70 text-sm flex items-center space-x-2">
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>Fait avec passion au Sénégal</span>
              </span>
              
              <span className="text-green-300/70 text-sm flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>Paiement sécurisé</span>
              </span>
            </div>
          </div>
          
          {/* Message d'inspiration */}
          <div className="pt-6 border-t border-green-800/30">
            <p className="text-green-400/80 text-sm italic font-light max-w-3xl mx-auto">
              "Le bien-être commence par des choix naturels. Forever Living vous accompagne vers une vie plus saine et équilibrée."
            </p>
          </div>
          
          {/* Animation finale */}
          <div className="pt-6">
            <div className="flex justify-center space-x-3">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 bg-gradient-to-b from-aloe-gold to-yellow-300 rounded-full animate-bounce"
                  style={{ 
                    animationDelay: `${i * 150}ms`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lueur finale */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-aloe-green/10 via-transparent to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;