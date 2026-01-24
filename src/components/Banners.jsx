import React from 'react';
import { Link } from 'react-router-dom';

const Banners = () => {
  const banners = [
    {
      id: 1,
      title: "Soins & Beauté",
      subtitle: "Découvrez notre gamme de soins à l'Aloe Vera",
      link: "/catalogue?category=Soins%20%26%20Beauté",
      color: "from-purple-700/80 to-purple-900/80",
      image: "/assets/images/heros.jpg"
    },
    {
      id: 2,
      title: "Boissons & Bien-être",
      subtitle: "Pour une santé naturelle au quotidien",
      link: "/catalogue?category=Boissons%20%26%20Bien-être",
      color: "from-blue-700/80 to-blue-900/80",
      image: "/assets/images/heros8.jpg" // Vous pouvez créer cette image
    }
  ];

  return (
    <div className="wrap-banner style-twin-default mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {banners.map((banner) => (
          <div key={banner.id} className="banner-item group">
            <Link 
              to={banner.link} 
              className="link-banner banner-effect-1 block overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 md:h-64 relative overflow-hidden rounded-xl">
                {/* Image de fond avec fallback */}
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    // Fallback basé sur l'ID de la bannière
                    const fallbackImages = {
                      1: "https://images.unsplash.com/photo-1546069901-d5a64f8f2c4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                      2: "https://images.unsplash.com/photo-1578500494198-246b612c5b9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    };
                    e.target.src = fallbackImages[banner.id];
                  }}
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${banner.color}`}></div>
                
                {/* Contenu */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 drop-shadow-lg">
                    {banner.title}
                  </h3>
                  <p className="text-lg mb-6 opacity-90 max-w-md">
                    {banner.subtitle}
                  </p>
                  <span className="inline-block px-6 py-3 bg-aloe-green text-white rounded-lg font-bold hover:bg-aloe-green-dark transition-colors transform hover:scale-105">
                    Découvrir →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banners;