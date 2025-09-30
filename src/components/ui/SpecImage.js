import React, { useEffect, useState } from 'react';
import { getProductSpecImagePath } from '../../utils/image-paths';

/**
 * Component to dynamically import and display specification images
 */
const SpecImage = ({ 
  imageName,
  alt,
  className,
  width = "100%",
  height = "auto"
}) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // If no image name provided, don't try to load anything
    if (!imageName) {
      setLoading(false);
      setError(true);
      return;
    }

    // Get just the filename without path
    const filename = imageName.split('/').pop();
    
    // Set the image source using the utility function
    const imagePath = getProductSpecImagePath(filename);
    setImageSrc(imagePath);
    setLoading(false);
    
    // Add an error handler for the image
    const handleImageError = () => {
      console.error(`Failed to load image: ${filename}`);
      setError(true);
    };
    
    // Create a test image to see if it loads
    const img = new Image();
    img.onload = () => setError(false);
    img.onerror = handleImageError;
    img.src = imagePath;
  }, [imageName]);

  if (loading) {
    return (
      <div className={className} style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#f3f4f6',
        borderRadius: '0.5rem',
        padding: '2rem'
      }}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (error || !imageSrc) {
    return (
      <div className={className} style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#f3f4f6',
        borderRadius: '0.5rem',
        padding: '2rem',
        color: '#4b5563'
      }}>
        <div className="text-center">
          <div className="mb-2">⚠️</div>
          <div>Image non disponible</div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      style={{
        width: width,
        height: height,
        objectFit: "contain"
      }}
    />
  );
};

export default SpecImage;
