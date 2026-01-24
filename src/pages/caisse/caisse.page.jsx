import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { CreditCard, Truck, Shield, CheckCircle, Package, Home, ShoppingBag } from 'lucide-react';
import { MessageCircle } from "lucide-react";

const CaissePage = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'mobile_money',
    // Champs pour carte bancaire
    cardNumber: '',
    cardExpiry: '',
    cardCVC: '',
    cardName: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Formatage du numéro de carte
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setFormData(prev => ({ ...prev, cardNumber: formatted }));
  };

  // Formatage de la date d'expiration
  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    setFormData(prev => ({ ...prev, cardExpiry: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation des champs de carte si nécessaire
    if (step === 3 && formData.paymentMethod === 'card') {
      if (!formData.cardNumber || !formData.cardExpiry || !formData.cardCVC || !formData.cardName) {
        alert('Veuillez remplir tous les champs de la carte bancaire');
        return;
      }
      
      // Validation simple du numéro de carte (juste pour l'exemple)
      if (formData.cardNumber.replace(/\s/g, '').length < 16) {
        alert('Le numéro de carte doit contenir 16 chiffres');
        return;
      }
    }
    
    if (step === 3) {
      setIsProcessing(true);
      
      // Simuler un traitement de paiement
      setTimeout(() => {
        setIsProcessing(false);
        // Générer un numéro de commande
        const newOrderNumber = `CMD-${Date.now().toString().slice(-8)}`;
        setOrderNumber(newOrderNumber);
        setOrderComplete(true);
        clearCart();
        
        // Envoyer les données à un serveur (simulé)
        console.log('Données de commande:', {
          ...formData,
          total: getCartTotal(),
          cart: cart,
          // Ne pas logger les données sensibles en production!
        });
        
      }, 2000);
    } else {
      setStep(step + 1);
    }
  };

  // Fonction pour réinitialiser et recommander
  const handleNewOrder = () => {
    setOrderComplete(false);
    setStep(1);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      paymentMethod: 'mobile_money',
      cardNumber: '',
      cardExpiry: '',
      cardCVC: '',
      cardName: ''
    });
  };

  if (cart.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <Package size={80} className="mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Votre panier est vide</h2>
          <p className="text-gray-600 mb-8">
            Ajoutez des produits à votre panier avant de passer commande.
          </p>
          <Link
            to="/catalogue"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors transform hover:scale-105"
          >
            <ShoppingBag className="inline-block mr-2" size={20} />
            Retourner au catalogue
          </Link>
        </div>
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen py-12 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          {/* Animation de succès */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative w-32 h-32 mx-auto mb-8">
              <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-20"></div>
              <div className="relative w-full h-full bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle size={60} className="text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-green-800 mb-4">
              Commande Confirmée !
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Votre commande a été traitée avec succès. Vous recevrez un email de confirmation.
            </p>
            
            {/* Numéro de commande */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Numéro de commande</h2>
                <div className="text-3xl font-bold text-green-600 font-mono tracking-wider bg-green-50 p-4 rounded-lg">
                  {orderNumber}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Conservez ce numéro pour le suivi de votre commande
                </p>
              </div>
              
              {/* Résumé de la commande */}
              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Récapitulatif</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="text-sm text-gray-500">Nom</p>
                    <p className="font-medium">{formData.fullName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{formData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Téléphone</p>
                    <p className="font-medium">{formData.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Mode de paiement</p>
                    <p className="font-medium">
                      {formData.paymentMethod === 'mobile_money' ? 'Mobile Money' : 
                       formData.paymentMethod === 'card' ? 'Carte bancaire' : 
                       'Paiement à la livraison'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Prochaines étapes */}
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Prochaines étapes</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</div>
                  <div>
                    <p className="font-medium text-blue-900">Email de confirmation</p>
                    <p className="text-blue-700 text-sm">Reçu sous 5 minutes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</div>
                  <div>
                    <p className="font-medium text-blue-900">Préparation de la commande</p>
                    <p className="text-blue-700 text-sm">Sous 24 heures</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</div>
                  <div>
                    <p className="font-medium text-blue-900">Livraison</p>
                    <p className="text-blue-700 text-sm">Thiés: 48h | Régions: 72h</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleNewOrder}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                <ShoppingBag className="mr-2" size={20} />
                Nouvelle commande
              </button>
              <Link
                to="/"
                className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center"
              >
                <Home className="mr-2" size={20} />
                Retour à l'accueil
              </Link>
            </div>
            
            {/* Support */}
            <div className="mt-8 pt-6 border-t">
              <p className="text-gray-600 mb-4">
                Une question sur votre commande ?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+221769490685"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  📞+221 76 949 06 85
                </a>
                <a 
                  href="https://wa.me/+221769490685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                 <div className="flex items-center gap-2 font-semibold">
                    <MessageCircle className="w-5 h-5 text-green-500" />
                    <span>Support Client WhatsApp</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-green-800 mb-2">Finaliser votre commande</h1>
          <p className="text-gray-600">
            Complétez vos informations pour recevoir vos produits Forever Living
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8 max-w-3xl mx-auto">
          <div className="flex justify-between items-center relative">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex flex-col items-center relative z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                  step >= stepNumber 
                    ? 'bg-green-600 text-white shadow-lg transform scale-110' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {stepNumber}
                </div>
                <span className={`text-sm font-medium transition-colors ${
                  step >= stepNumber ? 'text-green-600' : 'text-gray-500'
                }`}>
                  {stepNumber === 1 ? 'Informations' : stepNumber === 2 ? 'Livraison' : 'Paiement'}
                </span>
              </div>
            ))}
            <div className="absolute top-5 left-0 w-full h-1 bg-gray-200 -z-10">
              <div 
                className="h-full bg-green-600 transition-all duration-500 ease-out"
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
        {/* Formulaire */}
<div className="lg:w-2/3">
  <form
    onSubmit={handleSubmit}
    className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transition-all duration-500"
  >

    {/* STEP 1 */}
    {step === 1 && (
      <div className="animate-[fadeInUp_0.5s_ease-out]">
        <h2 className="text-xl font-bold mb-6 text-gray-800">
          Informations personnelles
        </h2>

        <div className="space-y-4">
          {/* Nom complet */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom complet
            </label>
            <input
              type="text"
              name="fullName"
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-aloe-green 
                         focus:border-transparent transition-all duration-300"
              placeholder="Votre nom et prénom"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-aloe-green 
                           focus:border-transparent transition-all duration-300"
                placeholder="votre@email.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            {/* Téléphone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Téléphone
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-aloe-green 
                           focus:border-transparent transition-all duration-300"
                placeholder="+221 XX XXX XX XX"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>
    )}

    {/* STEP 2 */}
    {step === 2 && (
      <div className="animate-[fadeInUp_0.5s_ease-out]">
        <h2 className="text-xl font-bold mb-6 flex items-center text-gray-800">
          <Truck className="mr-2 text-aloe-green" size={20} />
          Adresse de livraison
        </h2>

        <div className="space-y-4">
          {/* Adresse */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Adresse complète
            </label>
            <textarea
              name="address"
              required
              rows="2"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-aloe-green 
                         focus:border-transparent transition-all duration-300 resize-none"
              placeholder="Numéro, rue, quartier..."
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>

          {/* Ville */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ville
            </label>
            <input
              type="text"
              name="city"
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-aloe-green 
                         focus:border-transparent transition-all duration-300"
              placeholder="Ex : Dakar, Thiès"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    )}



              {step === 3 && (
                <div className="animate-fade-in">
                  <h2 className="text-xl font-bold mb-6 flex items-center">
                    <CreditCard className="mr-2" size={20} />
                    Paiement
                  </h2>
                  <div className="space-y-4">
                    <div className="space-y-3">
                     
                      
                     {/* Option 1: Orange Money */}
<label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
  <input
    type="radio"
    name="paymentMethod"
    value="orange_money"
    checked={formData.paymentMethod === 'orange_money'}
    onChange={handleInputChange}
    className="mr-3 h-5 w-5 text-green-600"
  />

  <div className="flex-1">
    <div className="font-medium">Orange Money</div>
    <div className="text-sm text-gray-600">
      Paiement par Orange Money Sénégal
    </div>
  </div>

  {/* Logo Orange Money */}
 <div className="w-16 h-16 flex items-center justify-center">
  <img
    src="assets/images/orange-money.png"
    alt="Orange Money"
    className="w-12 h-12 object-contain"
  />
</div>

</label>

{/* Option 2:  (Yas) */}
<label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
  <input
    type="radio"
    name="paymentMethod"
    value="yas"
    checked={formData.paymentMethod === 'yas'}
    onChange={handleInputChange}
    className="mr-3 h-5 w-5 text-green-600"
  />

  <div className="flex-1">
    <div className="font-medium">Free Money</div>
    <div className="text-sm text-gray-600">
      Paiement par Free Money (Yas) Sénégal
    </div>
  </div>

  {/* Logo Free Money / Yas */}
  <div className="w-16 h-16 flex items-center justify-center">
  <img
    src="assets/images/yas.png"
    alt="Yas"
    className="w-12 h-12 object-contain"
  />
</div>

</label>


{/* Option 3: Wave */}
<label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
  <input
    type="radio"
    name="paymentMethod"
    value="wave"
    checked={formData.paymentMethod === 'wave'}
    onChange={handleInputChange}
    className="mr-3 h-5 w-5 text-green-600"
  />

  <div className="flex-1">
    <div className="font-medium">Wave</div>
    <div className="text-sm text-gray-600">
      Paiement instantané par Wave
    </div>
  </div>

  {/* Logo Wave */}
  <div className="w-16 h-16 flex items-center justify-center">
  <img
    src="assets/images/wave.png"
    alt="Wave"
    className="w-12 h-12 object-contain"
  />
</div>

</label>

                     <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
  <input
    type="radio"
    name="paymentMethod"
    value="cash"
    checked={formData.paymentMethod === 'cash'}
    onChange={handleInputChange}
    className="mr-3 h-5 w-5 text-green-600"
  />

  <div className="flex-1">
    <div className="font-medium">Paiement à la livraison</div>
    <div className="text-sm text-gray-600">
      Espèces à la réception
    </div>
  </div>

  {/* Icône Cash */}
 <div className="w-16 h-16 flex items-center justify-center">
  <img
    src="assets/images/cash.png"
    alt="Paiement en espèces"
    className="w-10 h-10 object-contain"
  />
</div>

</label>
                    </div>

                    {formData.paymentMethod === 'mobile_money' && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 animate-fade-in">
                        <p className="text-yellow-800 text-sm">
                          <span className="font-semibold">Instructions :</span> Après confirmation, 
                          vous recevrez un numéro de téléphone pour effectuer 
                          le paiement par Mobile Money. Le colis sera expédié après réception du paiement.
                        </p>
                      </div>
                    )}

               
                    {formData.paymentMethod === 'cash' && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 animate-fade-in">
                        <p className="text-green-800 text-sm">
                          <span className="font-semibold">Instructions :</span> Préparez l'argent exact pour le livreur. 
                          Le paiement s'effectue uniquement en espèces à la réception du colis.
                        </p>
                      </div>
                    )}

                    <div className="flex items-center text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                      <Shield className="mr-2 text-green-600" size={16} />
                      <span>Paiement 100% sécurisé - Vos données sont cryptées</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-8 pt-6 border-t">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    ← Retour
                  </button>
                )}
                
                <button
                  type="submit"
                  disabled={isProcessing}
                  className={`ml-auto px-8 py-3 rounded-lg font-semibold flex items-center transition-all duration-300 ${
                    isProcessing
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-green-600 text-white hover:bg-green-700 transform hover:scale-105'
                  }`}
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Traitement en cours...
                    </>
                  ) : step === 3 ? (
                    <>
                      <CreditCard className="mr-2" size={20} />
                      Confirmer et payer
                    </>
                  ) : (
                    'Continuer →'
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Résumé de la commande */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
              <h3 className="font-bold text-xl mb-6 text-green-800">Résumé de la commande</h3>
              
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-2">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center pb-4 border-b border-gray-100">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <p className="font-medium text-sm line-clamp-2">{item.name}</p>
                      <div className="flex justify-between items-center mt-1">
                        <p className="text-sm text-gray-600">
                          {item.quantity} × {item.price.toLocaleString()} FCFA
                        </p>
                        <p className="font-semibold">
                          {(item.price * item.quantity).toLocaleString()} FCFA
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3 border-t pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sous-total</span>
                  <span className="font-medium">{getCartTotal().toLocaleString()} FCFA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Livraison</span>
                  <span className="font-medium text-green-600">Offerte*</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t pt-3">
                  <span>Total</span>
                  <span className="text-green-700">{getCartTotal().toLocaleString()} FCFA</span>
                </div>
                <p className="text-xs text-gray-500">
                  *Livraison offerte pour les commandes de plus de 30 000 FCFA
                </p>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Truck className="mr-2 text-green-600" size={16} />
                  <span>Livraison sous 48h à Thiés</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="mr-2 text-green-600" size={16} />
                  <span>Paiement 100% sécurisé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaissePage;