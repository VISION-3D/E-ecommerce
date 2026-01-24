import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Users } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Demande générale',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi avec délai
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: 'Demande générale', message: '' });
      
      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section avec hero5.png */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100 py-16 md:py-24">
        {/* Image de fond avec animation */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10"></div>
          <img
            src="/assets/images/hero5.png"
            alt="Contact - Vitalité & Bien-être au Naturel"
            className="w-full h-full object-cover opacity-20"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 400'%3E%3Crect width='1200' height='400' fill='%232E7D32'/%3E%3Ctext x='600' y='200' font-family='Arial' font-size='48' fill='white' text-anchor='middle' dy='.3em'%3EContactez-nous%3C/text%3E%3C/svg%3E";
            }}
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-aloe-green rounded-full mb-6 animate-bounce">
              <MessageCircle className="text-white" size={28} />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-aloe-green-dark mb-4 animate-slide-up">
              Contactez-nous
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 animate-slide-up animation-delay-200">
              Nous sommes là pour répondre à vos questions et vous accompagner dans votre bien-être
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 animate-fade-in animation-delay-400">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 transform hover:-translate-y-1 transition-transform duration-300">
                <Phone className="text-aloe-green mx-auto mb-2" size={24} />
                <p className="font-semibold">Appelez-nous</p>
                <p className="text-sm text-gray-600"> +221 949 06 85</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 transform hover:-translate-y-1 transition-transform duration-300">
                <Mail className="text-aloe-green mx-auto mb-2" size={24} />
                <p className="font-semibold">Écrivez-nous</p>
                <p className="text-sm text-gray-600"> sseen07@gmail.com</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 transform hover:-translate-y-1 transition-transform duration-300">
                <Clock className="text-aloe-green mx-auto mb-2" size={24} />
                <p className="font-semibold">Horaires</p>
                <p className="text-sm text-gray-600">Lun-Ven: 8h-20h</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section principale */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulaire de contact avec animations */}
          <div className="animate-slide-up animation-delay-300">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transform hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-aloe-green rounded-full flex items-center justify-center mr-3">
                  <Send className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-aloe-green-dark">
                  Envoyez-nous un message
                </h2>
              </div>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <Send className="text-green-600" size={16} />
                    </div>
                    <div>
                      <p className="font-semibold text-green-800">Message envoyé avec succès !</p>
                      <p className="text-green-600 text-sm">Nous vous répondrons dans les plus brefs délais.</p>
                    </div>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Nom complet 
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aloe-green focus:border-transparent transition-all duration-300"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Email 
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aloe-green focus:border-transparent transition-all duration-300"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aloe-green focus:border-transparent transition-all duration-300"
                      placeholder="+221 XX XXX XX XX"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Sujet
                    </label>
                    <select
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aloe-green focus:border-transparent transition-all duration-300"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="Demande générale">Demande générale</option>
                      <option value="Commande">Commande</option>
                      <option value="Support produit">Support produit</option>
                      <option value="Partenariat">Partenariat</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Message 
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aloe-green focus:border-transparent transition-all duration-300"
                    placeholder="Comment pouvons-nous vous aider ?"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-aloe-green text-white hover:bg-aloe-green-dark'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Informations de contact avec animations */}
          <div className="space-y-6">
            {/* Coordonnées */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 animate-slide-up animation-delay-400">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-aloe-green rounded-full flex items-center justify-center mr-3">
                  <Users className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-aloe-green-dark">
                  Nos coordonnées
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-all duration-300 transform hover:-translate-x-1">
                  <div className="bg-aloe-green p-3 rounded-lg mr-4">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">Téléphone</h3>
                    <a 
                      href="tel:+221 +22175078760" 
                      className="text-gray-700 hover:text-aloe-green transition-colors block text-lg"
                    >
                      +221 76 949 06 85
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Lun-Ven: 8h-20h, Sam: 9h-13h</p>
                    
                    {/* WhatsApp */}
                    <div className="mt-3">
                      <a 
                        href="https://wa.me/221769490685" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-whatsapp-green text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                      >
                        <MessageCircle size={16} />
                        <span>WhatsApp: +221 76 949 06 85</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-all duration-300 transform hover:-translate-x-1">
                  <div className="bg-aloe-green p-3 rounded-lg mr-4">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a 
                      href="mailto:contact@vitalitebienetre.sn" 
                      className="text-gray-700 hover:text-aloe-green transition-colors block"
                    >
                       ssene07@gmail 
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Réponse sous 24 heures</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-all duration-300 transform hover:-translate-x-1">
                  <div className="bg-aloe-green p-3 rounded-lg mr-4">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Adresse</h3>
                    <p className="text-gray-700"></p>
                    <p className="text-gray-700">Cité f9, Thiés</p>
                    <p className="text-gray-700">Sénégal</p>
                    <p className="text-sm text-gray-500 mt-1">Sur rendez-vous uniquement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pourquoi nous choisir ? */}
            <div className="bg-gradient-to-br from-aloe-green to-aloe-green-dark rounded-2xl shadow-xl p-6 md:p-8 text-white animate-slide-up animation-delay-500">
              <h3 className="text-xl font-bold mb-6">Pourquoi nous choisir ?</h3>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <div className="w-2 h-2 bg-aloe-gold rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <p className="font-medium">Produits 100% naturels Forever Living</p>
                    <p className="text-green-100 text-sm">Certifiés et contrôlés qualité</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-2 h-2 bg-aloe-gold rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <p className="font-medium">Livraison rapide dans tout le Sénégal</p>
                    <p className="text-green-100 text-sm">Thiés 24h, Régions 48-72h</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-2 h-2 bg-aloe-gold rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <p className="font-medium">Conseils personnalisés par nos experts</p>
                    <p className="text-green-100 text-sm">Suivi personnalisé Aloe Vera</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-2 h-2 bg-aloe-gold rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <p className="font-medium">Paiement sécurisé & satisfaction garantie</p>
                    <p className="text-green-100 text-sm">Retour sous 14 jours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carte interactive (optionnel) */}
        <div className="mt-12 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-aloe-green rounded-full flex items-center justify-center mr-3">
                <MapPin className="text-white" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-aloe-green-dark">
                Trouvez-nous facilement
              </h2>
              
            </div>
            
            <div className="bg-gray-100 rounded-xl p-8 text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-aloe-green rounded-full flex items-center justify-center animate-pulse">
                <MapPin className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Thiés, Sénégal</h3>
              <p className="text-gray-600 mb-6">
                Nous sommes situés au cœur de Thiés pour mieux vous servir
              </p>
              <a 
                href="https://maps.google.com/?q=Mbour+Senegal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-aloe-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-aloe-green-dark transition-colors"
              >
                <MapPin size={18} />
                <span>Voir sur Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;