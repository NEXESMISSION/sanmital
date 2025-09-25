/**
 * This utility file provides a centralized place to manage image paths
 * for product categories and individual products.
 * 
 * When actual images are added to the project, update the paths here
 * and they will be reflected throughout the application.
 */

// Base path for product images
const BASE_IMAGE_PATH = '/assets/images/products';

// Generate path for category images
export const getCategoryImagePath = (categoryId) => {
  return `${BASE_IMAGE_PATH}/${categoryId}/category.jpg`;
};

// Generate path for product images
export const getProductImagePath = (categoryId, productId) => {
  return `${BASE_IMAGE_PATH}/${categoryId}/${productId}.jpg`;
};

// Generate path for product specification images
export const getProductSpecImagePath = (categoryId, productId) => {
  return `${BASE_IMAGE_PATH}/${categoryId}/${productId}-spec.jpg`;
};

export default {
  getCategoryImagePath,
  getProductImagePath,
  getProductSpecImagePath
};
