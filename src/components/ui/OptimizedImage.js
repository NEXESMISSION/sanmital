import React from 'react';

/**
 * Very simple image component with fallback
 * This basic version ensures images always load correctly
 */
const OptimizedImage = ({ 
  src,
  alt,
  className,
  width = "100%",
  height = "auto",
  priority = false // Set to true for above-the-fold images
}) => {
  return (
    <div 
      className={className} 
      style={{ 
        position: "relative",
        overflow: "hidden",
        width: width,
        height: height,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block"
        }}
        loading={priority ? "eager" : "lazy"}
        onError={(e) => {
          // On error, replace with a placeholder
          e.target.onerror = null; // Prevent infinite loop
          e.target.src = `https://placehold.co/600x400/f8d7da/721c24?text=${encodeURIComponent('Image not available')}`;  
        }}
      />
    </div>
  );
};

export default OptimizedImage;
