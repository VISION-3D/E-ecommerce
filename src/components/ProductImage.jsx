import React, { useState } from 'react';

const ProductImage = ({ src, alt, className, fallbackSrc = "/assets/images/default_product.jpg" }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    console.warn(`Image ${src} non trouvée, utilisation du fallback`);
    setImgSrc(fallbackSrc);
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
};

export default ProductImage;