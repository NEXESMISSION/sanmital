/**
 * This utility file provides a centralized place to manage image paths
 * for product categories and individual products.
 * 
 * When actual images are added to the project, update the paths here
 * and they will be reflected throughout the application.
 */

// Base paths for images
const BASE_PRODUCT_IMAGE_PATH = '/assets/images/products';
const BASE_THUMBNAIL_IMAGE_PATH = '/assets/images/thumbnails';
const BASE_SPEC_IMAGE_PATH = '/assets/images/Spécificités Techniques';

// Generate path for category images
export const getCategoryImagePath = (categoryId) => {
  return `${BASE_THUMBNAIL_IMAGE_PATH}/${categoryId}.jpg`;
};

// Generate path for product images
export const getProductImagePath = (categoryId, productId) => {
  return `${BASE_PRODUCT_IMAGE_PATH}/${productId}.jpg`;
};

// Generate path for product specification images
export const getProductSpecImagePath = (filename) => {
  if (!filename) return null;
  return `${BASE_SPEC_IMAGE_PATH}/${filename}`;
};

export default {
  getCategoryImagePath,
  getProductImagePath,
  getProductSpecImagePath
};
