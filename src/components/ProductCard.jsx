import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="
      group bg-white rounded-2xl overflow-hidden
      shadow-lg hover:shadow-2xl
      transition-all duration-500
    ">

      {/* IMAGE */}
      <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
        
        {/* Glow au hover */}
        <div className="
          absolute inset-0 z-10
          bg-gradient-to-t from-green-700/30 via-transparent to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        " />

        <img
          src={product.image}
          alt={product.name}
          className="
            w-full h-full object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-110
          "
        />

        {/* Badge stock */}
        {product.stock < 10 && (
          <span className="
            absolute top-3 left-3 z-20
            bg-red-600 text-white text-xs font-bold
            px-3 py-1 rounded-full shadow
          ">
            Stock limité
          </span>
        )}
      </div>

      {/* CONTENU */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {product.category}
        </p>

        <p className="text-green-700 font-extrabold text-lg mt-3">
          {product.price.toLocaleString()} {product.currency}
        </p>

        <button className="
          mt-4 w-full py-3 rounded-xl
          bg-green-600 text-white font-semibold
          hover:bg-green-700
          transition-all duration-300
          hover:scale-[1.03]
          active:scale-95
        ">
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
