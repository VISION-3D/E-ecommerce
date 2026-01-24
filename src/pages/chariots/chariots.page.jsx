import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';

const ChariotsPage = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Votre panier est vide</h2>
            <p className="text-gray-600 mb-8">Ajoutez des produits pour commencer vos achats</p>
            <Link
              to="/catalogue"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Découvrir nos produits
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-green-800 mb-8">Mon Panier</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4 border-b">
                <h2 className="font-semibold text-lg">
                  Produits ({cart.reduce((total, item) => total + item.quantity, 0)})
                </h2>
              </div>
              
              {cart.map(item => (
                <div key={item.id} className="p-4 border-b flex flex-col md:flex-row items-center">
                  <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg overflow-hidden mr-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="flex-1 mt-4 md:mt-0">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">Code: {item.code}</p>
                    <p className="text-lg font-bold text-green-700 mt-1">
                      {item.price.toLocaleString()} {item.currency}
                    </p>
                  </div>
                  
                  <div className="flex items-center mt-4 md:mt-0">
                    <div className="flex items-center border rounded-lg mr-4">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 py-1">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-bold">
                        {(item.price * item.quantity).toLocaleString()} {item.currency}
                      </p>
                    </div>
                    
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
              
              <div className="p-4 flex justify-between">
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-800 font-medium"
                >
                  Vider le panier
                </button>
                <Link
                  to="/catalogue"
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  Continuer mes achats
                </Link>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow p-6 sticky top-4">
              <h2 className="font-bold text-xl mb-6">Récapitulatif de la commande</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sous-total</span>
                  <span className="font-semibold">{getCartTotal().toLocaleString()} FCFA</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Frais de livraison</span>
                  <span className="font-semibold">À calculer</span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-green-700">{getCartTotal().toLocaleString()} FCFA</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">TVA incluse le cas échéant</p>
                </div>
              </div>
              
              <Link
                to="/caisse"
                className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                Procéder au paiement
                <ArrowRight size={20} className="ml-2" />
              </Link>
              
              <div className="mt-6 text-sm text-gray-600 space-y-2">
                <div className="flex items-start">
                  <div className="text-green-600 mr-2">✓</div>
                  <span>Paiement 100% sécurisé</span>
                </div>
                <div className="flex items-start">
                  <div className="text-green-600 mr-2">✓</div>
                  <span>Livraison sous 2-3 jours ouvrés</span>
                </div>
                <div className="flex items-start">
                  <div className="text-green-600 mr-2">✓</div>
                  <span>Retour gratuit sous 14 jours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChariotsPage;