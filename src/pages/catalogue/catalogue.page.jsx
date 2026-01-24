import React, { useState } from "react";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";
import { Search, ShoppingCart } from "lucide-react";

const CataloguePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous les produits");
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useCart();

  const categories = [
    "Tous les produits",
    "Soins & Beauté",
    "Boissons & Bien-être",
    "Compléments Alimentaires",
  ];

  const categoryIcons = {
    "Soins & Beauté": "🧴",
    "Boissons & Bien-être": "🍹",
    "Compléments Alimentaires": "💊",
  };

  const categoryDescriptions = {
    "Soins & Beauté":
      "Des produits de soin à l'Aloe Vera pour une peau saine et radieuse",
    "Boissons & Bien-être":
      "Boissons naturelles à l'Aloe Vera pour votre vitalité quotidienne",
    "Compléments Alimentaires":
      "Suppléments nutritionnels pour soutenir votre santé globale",
  };

  const formatPrice = (price) => `${price.toLocaleString()} FCFA`;

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "Tous les produits" ||
      product.category === selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">

   {/* Image Hero optimisée */}
<div className="w-full h-64 md:h-[420px] relative rounded-2xl overflow-hidden shadow-xl">
  
  <img
    src="/assets/images/heros7.jpg"
    alt="Catalogue Forever Living"
    loading="eager"
    className="
      w-full h-full
      object-center
      object-cover
      scale-100
      transition-transform duration-700
      will-change-transform
    "
    style={{
      imageRendering: "auto",
      backfaceVisibility: "hidden",
    }}
    onError={(e) => {
      e.target.onerror = null;
      e.target.src = "/assets/images/video-placeholder.jpg";
    }}
  />

  {/* Overlay gradient (meilleure lisibilité sans flou) */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

  
</div>



        {/* FILTRES */}
        <div className="mb-8 bg-white p-4 rounded-xl shadow-md flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Rechercher un produit..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* DESCRIPTION CATÉGORIE */}
        {selectedCategory !== "Tous les produits" && (
          <div className="mb-8 p-6 bg-white rounded-xl shadow">
            <h2 className="text-2xl font-bold text-green-800 mb-2">
              {categoryIcons[selectedCategory]} {selectedCategory}
            </h2>
            <p className="text-gray-700">
              {categoryDescriptions[selectedCategory]}
            </p>
          </div>
        )}

        {/* PRODUITS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              {/* BORDURE LUMINEUSE */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 via-yellow-300 to-green-500 rounded-2xl blur opacity-20 group-hover:opacity-60 transition"></div>

              <div className="relative flex flex-col h-full">
                {/* IMAGE */}
                <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                  <img
                    src={process.env.PUBLIC_URL + product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src =
                        process.env.PUBLIC_URL +
                        "/assets/images/placeholder.png";
                    }}
                  />
                </div>

                {/* INFOS */}
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-1">
                      {product.name}
                    </h3>

                    <span className="inline-block text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 mb-2">
                      {categoryIcons[product.category]} {product.category}
                    </span>

                    <p className="text-sm text-gray-600 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <p className="text-xl font-bold text-green-700">
                        {formatPrice(product.price)}
                      </p>
                      <p className="text-xs text-gray-500">
                        Code : {product.code}
                      </p>
                    </div>

                    <span
                      className={`text-sm font-semibold ${
                        product.stock === 0
                          ? "text-red-600"
                          : product.stock < 5
                          ? "text-orange-600"
                          : "text-green-600"
                      }`}
                    >
                      {product.stock === 0
                        ? "Rupture"
                        : `${product.stock} en stock`}
                    </span>
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    disabled={product.stock === 0}
                    className={`mt-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition ${
                      product.stock === 0
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-green-600 text-white hover:bg-green-700"
                    }`}
                  >
                    <ShoppingCart size={18} />
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AUCUN PRODUIT */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <Search size={64} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Aucun produit trouvé
            </h3>
            <p className="text-gray-600 mb-6">
              Modifiez vos critères de recherche
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Tous les produits");
              }}
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700"
            >
              Voir tous les produits
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CataloguePage;
