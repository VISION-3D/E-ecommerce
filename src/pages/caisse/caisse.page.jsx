import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { CreditCard, Truck, Shield, CheckCircle, Package, Home, ShoppingBag } from 'lucide-react';
import emailjs from '@emailjs/browser';

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
    cardNumber: '',
    cardExpiry: '',
    cardCVC: '',
    cardName: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  // --- EmailJS pour Caisse ---
  const sendOrderEmail = () => {
    const serviceID = 'service_bxeyru8';
    const templateID = 'template_6r8x699';
    const publicKey = 'h2al5rMyaUdigr9IM';

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      postalCode: formData.postalCode,
      paymentMethod: formData.paymentMethod,
      orderNumber: orderNumber,
      total: getCartTotal(),
      items: cart.map(item => `${item.name} (${item.quantity})`).join(', ')
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('Email envoyé avec succès !', response.status, response.text);
      })
      .catch((err) => {
        console.error('Erreur lors de l’envoi de l’email :', err);
        alert('Impossible d’envoyer la commande. Vérifie ton Service ID, Template ID et Public Key.');
      });
  };

  // --- Gestion du formulaire ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0; i < match.length; i += 4) parts.push(match.substring(i, i + 4));
    return parts.length ? parts.join(' ') : value;
  };

  const handleCardNumberChange = (e) => {
    setFormData(prev => ({ ...prev, cardNumber: formatCardNumber(e.target.value) }));
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) value = value.slice(0, 2) + '/' + value.slice(2, 4);
    setFormData(prev => ({ ...prev, cardExpiry: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step === 3 && formData.paymentMethod === 'card') {
      if (!formData.cardNumber || !formData.cardExpiry || !formData.cardCVC || !formData.cardName) {
        alert('Veuillez remplir tous les champs de la carte bancaire');
        return;
      }
      if (formData.cardNumber.replace(/\s/g, '').length < 16) {
        alert('Le numéro de carte doit contenir 16 chiffres');
        return;
      }
    }

    if (step === 3) {
      setIsProcessing(true);

      setTimeout(() => {
        setIsProcessing(false);
        const newOrderNumber = `CMD-${Date.now().toString().slice(-8)}`;
        setOrderNumber(newOrderNumber);
        setOrderComplete(true);
        clearCart();

        // ENVOI MAIL
        sendOrderEmail();

        console.log('Données de commande:', { ...formData, total: getCartTotal(), cart });
      }, 2000);
    } else {
      setStep(step + 1);
    }
  };

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
          <p className="text-gray-600 mb-8">Ajoutez des produits à votre panier avant de passer commande.</p>
          <Link to="/catalogue" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors transform hover:scale-105">
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
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative w-32 h-32 mx-auto mb-8">
              <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-20"></div>
              <div className="relative w-full h-full bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle size={60} className="text-white" />
              </div>
            </div>

            <h1 className="text-4xl font-bold text-green-800 mb-4">Commande Confirmée !</h1>
            <p className="text-xl text-gray-600 mb-8">Votre commande a été traitée avec succès. Vous recevrez un email de confirmation.</p>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Numéro de commande</h2>
              <div className="text-3xl font-bold text-green-600 font-mono tracking-wider bg-green-50 p-4 rounded-lg">{orderNumber}</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleNewOrder} className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
                <ShoppingBag className="mr-2" size={20} />
                Nouvelle commande
              </button>
              <Link to="/" className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center">
                <Home className="mr-2" size={20} />
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }




  // Formulaire commande
  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-green-800 mb-2">Finaliser votre commande</h1>
          <p className="text-gray-600">Complétez vos informations pour recevoir vos produits Forever Living</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Formulaire */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transition-all duration-500">

              {/* STEP 1 */}
              {step === 1 && (
                <div className="animate-[fadeInUp_0.5s_ease-out]">
                  <h2 className="text-xl font-bold mb-6 text-gray-800">Informations personnelles</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                      <input type="text" name="fullName" required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aloe-green focus:border-transparent transition-all duration-300"
                        placeholder="Votre nom et prénom"
                        value={formData.fullName}
                        onChange={handleInputChange} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" name="email" required
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aloe-green focus:border-transparent transition-all duration-300"
                          placeholder="votre@email.com"
                          value={formData.email}
                          onChange={handleInputChange} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                        <input type="tel" name="phone" required
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aloe-green focus:border-transparent transition-all duration-300"
                          placeholder="+221 XX XXX XX XX"
                          value={formData.phone}
                          onChange={handleInputChange} />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="animate-[fadeInUp_0.5s_ease-out]">
                  <h2 className="text-xl font-bold mb-6 flex items-center text-gray-800"><Truck className="mr-2 text-aloe-green" size={20}/> Adresse de livraison</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Adresse complète</label>
                      <textarea name="address" required rows="2"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aloe-green focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Numéro, rue, quartier..."
                        value={formData.address}
                        onChange={handleInputChange} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
                      <input type="text" name="city" required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aloe-green focus:border-transparent transition-all duration-300"
                        placeholder="Ex : Dakar, Thiès"
                        value={formData.city}
                        onChange={handleInputChange} />
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