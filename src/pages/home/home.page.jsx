
       
import React from 'react';
import HeroSlider from '../../components/HeroSlider';
import Banners from '../../components/Banners';
import ProductsCarousel from '../../components/ProductsCarousel';
import LatestProducts from '../../components/LatestProducts';
import { Leaf, Truck, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen">

      {/* Slider Principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <HeroSlider />
      </div>

      {/* Bannières */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Banners />
      </div>

      {/* Produits en Promotion */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <ProductsCarousel
          title="Produits en Promotion"
          showCountdown={true}
          filter="sale"
          limit={8}
          itemClass="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" // responsive width
        />
      </div>

      {/* Pourquoi Nous Choisir */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-aloe-green-dark mb-4">
              Pourquoi Choisir Forever Living ?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-full sm:max-w-2xl mx-auto">
              La qualité et l'authenticité font la différence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: Leaf, title: "100% Naturel", description: "Produits à base d'Aloe Vera pur, sans produits chimiques agressifs" },
              { icon: Shield, title: "Qualité Certifiée", description: "Contrôle qualité strict Forever Living, normes internationales" },
              { icon: Truck, title: "Livraison Rapide", description: "Expédition sous 24-48h partout au Sénégal" },
              { icon: Star, title: "Satisfaction Garantie", description: "Retour gratuit sous 14 jours si vous n'êtes pas satisfait" }
            ].map((item, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-aloe-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-xl sm:text-lg mb-3 text-aloe-green-dark break-words">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base break-words">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nouveaux Produits */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <LatestProducts itemClass="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" /> {/* responsive items */}
      </div>

      {/* Call to Action */}
      <section className="relative py-20 mb-24 bg-gradient-to-r from-aloe-green via-aloe-green-dark to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_white,_transparent_60%)]"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 animate-fade-in">
            Prêt à Découvrir les Bienfaits de l’Aloe Vera ?
          </h2>
          <p className="max-w-full sm:max-w-2xl mx-auto mb-16 text-base sm:text-lg text-green-100 animate-fade-in-delay">
            Des produits naturels pour votre santé, votre bien-être et celui de votre famille.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 transform -translate-y-6 sm:-translate-y-10">
            <Link
              to="/catalogue"
              className="w-full sm:w-auto px-10 py-4 rounded-full font-semibold text-aloe-green bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
            >
              🌿 Voir le catalogue
            </Link>
            <a
              href="https://wa.me/221769490685"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 rounded-full font-semibold bg-gradient-to-r from-aloe-gold to-yellow-500 text-gray-900 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-pulse"
            >
              💬 Nous contacter sur WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Témoignages & Vidéos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-aloe-green-dark mb-4">Témoignages & Vidéos Forever Living</h2>
            <p className="text-base sm:text-lg text-forever-gray-text max-w-full sm:max-w-2xl mx-auto">
              Découvrez les bienfaits des produits Forever à travers des vidéos réelles
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Chaque vidéo reste identique, juste responsive */}
            {/* Exemple d’un item */}
          

            {/* Les autres vidéos / Instagram Reel → même pattern */}
          </div>
      



       
         {/* Testimonials / Vidéos clients & formations */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Vidéo 1 */}
      <a
        href="https://youtu.be/5oJ35rgd2f8"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
      >
        <div className="relative overflow-hidden rounded-t-2xl">
          <img
            src="https://img.youtube.com/vi/5oJ35rgd2f8/maxresdefault.jpg"
            alt="Formation Forever Bright"
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-2xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 rounded-full p-4 group-hover:scale-110 transition-transform">
              ▶
            </div>
          </div>
        </div>

        <div className="p-6">
          <p className="font-semibold text-lg text-aloe-green-dark mb-2">
            Vidéo de formation Forever Bright®
          </p>
          <p className="text-forever-gray-text text-sm">
            Présentation complète du dentifrice naturel à base d'Aloe Vera.
          </p>
        </div>
      </a>

      {/* Vidéo 2 */}
      <a
        href="https://youtu.be/8xpWh0rZxIo"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
      >
        <div className="relative overflow-hidden rounded-t-2xl">
          <img
            src="https://img.youtube.com/vi/8xpWh0rZxIo/maxresdefault.jpg"
            alt="Forever Bright dentifrice"
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-2xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 rounded-full p-4 group-hover:scale-110 transition-transform">
              ▶
            </div>
          </div>
        </div>

        <div className="p-6">
          <p className="font-semibold text-lg text-aloe-green-dark mb-2">
            (Re-)découvrez Forever Bright™
          </p>
          <p className="text-forever-gray-text text-sm">
            Pourquoi ce dentifrice est l'un des plus appréciés au monde.
          </p>
        </div>
      </a>

      {/* Vidéo 3 */}
      <a
        href="https://www.youtube.com/watch?v=X4_nHHfpIYM"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
      >
        <div className="relative overflow-hidden rounded-t-2xl">
          <img
            src="https://img.youtube.com/vi/X4_nHHfpIYM/maxresdefault.jpg"
            alt="Forever Bright témoignage"
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-2xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 rounded-full p-4 group-hover:scale-110 transition-transform">
              ▶
            </div>
          </div>
        </div>

        <div className="p-6">
          <p className="font-semibold text-lg text-aloe-green-dark mb-2">
            Témoignage – Forever Bright
          </p>
          <p className="text-forever-gray-text text-sm">
            Le dentifrice à l'Aloe Vera qui change tout.
          </p>
        </div>
      </a>

      {/* Instagram Reel */}
      <a
        href="https://www.instagram.com/reel/DG0vDJPoZ-n/?hl=fr"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-pink-200"
      >
        {/* Miniature */}
        <div className="relative overflow-hidden rounded-t-2xl">
          <img
            src="/assets/images/heros3.jpg"
            alt="Témoignage Instagram Forever Living"
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 rounded-t-2xl"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/assets/images/heros3.jpg";
            }}
          />

          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>

          {/* Badge Instagram */}
          <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
            Instagram Reel
          </div>

          {/* Bouton Play */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="bg-pink-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl shadow-lg
                         group-hover:scale-125 transition-transform duration-300 animate-pulse"
            >
              ▶
            </div>
          </div>
        </div>

        {/* Texte */}
        <div className="p-6">
          <p className="font-semibold text-lg text-pink-600 mb-2">
            🎥 Témoignage vidéo – Instagram
          </p>
          <p className="text-forever-gray-text text-sm">
            Retour authentique sur les bienfaits des produits Forever Living.
          </p>
        </div>
      </a>

    </div>
  </div>
</section>

       
       
        </div>
      </section>
    </div>
  );
};

export default HomePage;