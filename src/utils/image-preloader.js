/**
 * Image Preloader Utility
 * 
 * Preloads images to improve performance when they're needed in the UI
 * This dramatically speeds up the perceived load time for users
 */

// In-memory image cache
const imageCache = new Map();

/**
 * Preload a single image URL
 * @param {string} src - Image URL to preload
 * @returns {Promise} - Resolves when the image is loaded
 */
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    // Skip if already in cache
    if (imageCache.has(src)) {
      resolve(src);
      return;
    }

    const img = new Image();
    
    img.onload = () => {
      imageCache.set(src, true);
      resolve(src);
    };
    
    img.onerror = () => {
      reject(new Error(`Failed to preload image: ${src}`));
    };
    
    img.src = src;
  });
};

/**
 * Preload multiple images concurrently
 * @param {Array<string>} sources - Array of image URLs to preload
 * @returns {Promise} - Resolves when all images are loaded
 */
export const preloadImages = (sources) => {
  if (!sources || !Array.isArray(sources) || sources.length === 0) {
    return Promise.resolve([]);
  }
  
  return Promise.allSettled(sources.map(src => preloadImage(src)));
};

/**
 * Preload all images for a specific category
 * @param {Array<Object>} products - Array of product objects
 * @returns {Promise} - Resolves when all category images are loaded
 */
export const preloadProductImages = (products) => {
  if (!products || !Array.isArray(products) || products.length === 0) {
    return Promise.resolve([]);
  }
  
  const imageSources = products
    .map(product => product.image)
    .filter(Boolean); // Filter out undefined/null images
  
  return preloadImages(imageSources);
};

/**
 * Check if an image is in cache
 * @param {string} src - Image URL to check
 * @returns {boolean} - True if image is in cache
 */
export const isImageCached = (src) => {
  return imageCache.has(src);
};

export default {
  preloadImage,
  preloadImages,
  preloadProductImages,
  isImageCached
};
