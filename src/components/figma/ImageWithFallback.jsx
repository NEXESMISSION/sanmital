import React, { useState } from 'react';

export const ImageWithFallback = ({ 
  src, 
  alt, 
  className, 
  fallbackSrc = "https://placehold.co/600x400?text=Image+Unavailable",
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const onError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={onError}
      {...props}
    />
  );
};
