import React from 'react';
import ProductsCarousel from './ProductsCarousel';

const LatestProducts = () => {
  return (
    <div className="wrap-show-advance-info-box style-1">
      <div className="wrap-top-banner mb-8">
        <div className="link-banner banner-effect-2 overflow-hidden rounded-xl">
          <div className="relative h-48 md:h-64 bg-gradient-to-r from-aloe-green to-aloe-green-dark">
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="text-center text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  Nouveaux Produits Forever
                </h3>
                <p className="text-lg opacity-90">
                  Découvrez notre dernière collection de produits à l'Aloe Vera
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ProductsCarousel 
        title="Nouveaux Produits"
        filter="latest"
        limit={8}
      />
    </div>
  );
};

export default LatestProducts;