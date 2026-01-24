import React from 'react';
import { X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartSidebar = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, getItemCount } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 right-0 w-full md:w-96 bg-white z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <ShoppingBag className="mr-2" />
            <h2 className="text-lg font-semibold">Panier ({getItemCount()})</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">Votre panier est vide</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex items-center border-b pb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="ml-4 flex-1">
                    <h3 className="font-medium line-clamp-2">{item.name}</h3>
                    <p className="text-green-600 font-bold">
                      {item.price.toLocaleString()} {item.currency}
                    </p>
                    
                    <div className="flex items-center mt-2">
                      <div className="flex items-center border rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="px-3 py-1">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-4 text-red-500 hover:text-red-700 text-sm"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Total</span>
              <span className="text-xl font-bold text-green-700">
                {getCartTotal().toLocaleString()} FCFA
              </span>
            </div>
            
            <div className="space-y-2">
              <Link
                to="/chariots"
                onClick={onClose}
                className="block w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-green-700 transition-colors"
              >
                Voir le panier
              </Link>
              
              <Link
                to="/caisse"
                onClick={onClose}
                className="block w-full border-2 border-green-600 text-green-600 py-3 rounded-lg font-semibold text-center hover:bg-green-50 transition-colors"
              >
                Commander
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;