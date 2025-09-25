/**
 * Image Compression Utility
 * 
 * Browser-based image compression to optimize images before displaying them
 */

/**
 * Compress an image using canvas
 * @param {string} src - Image URL
 * @param {Object} options - Compression options
 * @returns {Promise<string>} - Promise resolving to compressed image data URL
 */
export const compressImage = (src, options = {}) => {
  const {
    maxWidth = 1200,
    maxHeight = 1200,
    quality = 0.8,
    format = 'webp', // 'jpeg', 'png', 'webp'
  } = options;

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous'; // This enables CORS

    img.onload = () => {
      // Calculate new dimensions while maintaining aspect ratio
      let width = img.width;
      let height = img.height;
      
      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }
      
      if (height > maxHeight) {
        width = (width * maxHeight) / height;
        height = maxHeight;
      }

      // Create canvas
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      
      // Draw image to canvas
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      
      // Convert to data URL
      const mimeType = format === 'jpeg' ? 'image/jpeg' :
                      format === 'png' ? 'image/png' : 'image/webp';
      
      // Get compressed data URL
      const dataUrl = canvas.toDataURL(mimeType, quality);
      
      resolve(dataUrl);
    };

    img.onerror = () => {
      reject(new Error(`Failed to load image: ${src}`));
    };

    img.src = src;
  });
};

/**
 * Creates a low-quality image placeholder
 * @param {string} src - Original image URL
 * @returns {Promise<string>} - Promise resolving to low quality image placeholder
 */
export const createLQIP = (src) => {
  return compressImage(src, {
    maxWidth: 50, 
    maxHeight: 50,
    quality: 0.3,
  });
};

/**
 * Checks if WebP format is supported by the browser
 * @returns {Promise<boolean>} - Promise resolving to true if WebP is supported
 */
export const isWebPSupported = () => {
  return new Promise((resolve) => {
    const img = new Image();
    
    img.onload = function() {
      const result = (img.width > 0) && (img.height > 0);
      resolve(result);
    };
    
    img.onerror = function() {
      resolve(false);
    };
    
    img.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
  });
};

export default {
  compressImage,
  createLQIP,
  isWebPSupported,
};
