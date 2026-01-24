import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductsCarousel = ({ title, showCountdown = false, filter = 'featured', limit = 8 }) => {
  const { addToCart } = useCart();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const itemsPerView = 4; // Nombre de produits à afficher en même temps

  // Filtrer les produits
  const filteredProducts = React.useMemo(() => {
    switch(filter) {
      case 'sale':
        return products.slice(0, limit);
      case 'latest':
        return products.slice(-limit).reverse();
      default:
        return products.slice(0, limit);
    }
  }, [filter, limit]);

  const maxIndex = Math.max(0, filteredProducts.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const visibleProducts = filteredProducts.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <div className="wrap-show-advance-info-box style-1 mb-12">
      <div className="flex justify-between items-center mb-6">
        <h3 className="title-box text-2xl font-bold text-aloe-green-dark">{title}</h3>
        
        {showCountdown && (
          <div className="wrap-countdown text-center">
            <div className="text-lg font-bold text-aloe-green mb-2">Promotion se termine dans:</div>
            <div className="flex space-x-4">
              {[
                { value: '07', label: 'Jours' },
                { value: '23', label: 'Heures' },
                { value: '45', label: 'Minutes' },
                { value: '30', label: 'Secondes' }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="bg-aloe-green text-white text-xl font-bold rounded-lg px-3 py-2">
                    {item.value}
                  </div>
                  <span className="text-sm text-gray-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {filteredProducts.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-1/4 px-3">
                <div className="product product-style-2 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="product-thumnail relative overflow-hidden rounded-t-xl">
                    <Link to="/catalogue" title={product.name}>
                      <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-110"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `data:image/svg+xml;base64,${btoa(`
                              <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
                                <rect width="400" height="400" fill="#f3f4f6"/>
                                <text x="200" y="200" font-family="Arial" font-size="16" text-anchor="middle" fill="#9ca3af">
                                  ${product.name}
                                </text>
                              </svg>
                            `)}`;
                          }}
                        />
                      </div>
                    </Link>
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3">
                      {filter === 'sale' && (
                        <span className="flash-item bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                          PROMO
                        </span>
                      )}
                      {filter === 'latest' && (
                        <span className="flash-item bg-aloe-green text-white px-2 py-1 rounded text-xs font-bold">
                          NOUVEAU
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="product-info p-4">
                    <Link to="/catalogue" className="product-name block">
                      <span className="font-semibold text-gray-800 hover:text-aloe-green transition-colors line-clamp-2 h-12">
                        {product.name}
                      </span>
                    </Link>
                    
                    <div className="wrap-price mt-2">
                      <span className="product-price text-xl font-bold text-aloe-green">
                        {product.price.toLocaleString()} {product.currency}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4">
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-aloe-green text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-aloe-green-dark transition-colors flex items-center"
                      >
                        <ShoppingCart size={16} className="mr-1" />
                        Ajouter
                      </button>
                      
                      <span className={`text-xs px-2 py-1 rounded ${
                        product.category === 'Soins & Beauté' ? 'bg-purple-100 text-purple-800' :
                        product.category === 'Boissons & Bien-être' ? 'bg-blue-100 text-blue-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {product.category.split(' & ')[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation buttons */}
        {filteredProducts.length > itemsPerView && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-6 h-6 text-aloe-green" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Suivant"
            >
              <ChevronRight className="w-6 h-6 text-aloe-green" />
            </button>
          </>
        )}
      </div>
      
      {/* Dots indicator */}
      {filteredProducts.length > itemsPerView && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(filteredProducts.length / itemsPerView) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx * itemsPerView)}
              className={`w-2 h-2 rounded-full ${
                Math.floor(currentIndex / itemsPerView) === idx 
                  ? 'bg-aloe-green' 
                  : 'bg-gray-300'
              }`}
              aria-label={`Page ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsCarousel;