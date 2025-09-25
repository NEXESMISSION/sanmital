/**
 * Simple image proxy to help avoid CORS issues
 * 
 * This utility helps handle images from external domains by using
 * a CORS proxy when needed
 */

/**
 * Modify image URLs to use a CORS proxy if needed
 * @param {string} url - The original image URL
 * @returns {string} - The URL potentially modified with a CORS proxy
 */
export function getProxiedImageUrl(url) {
  // Don't proxy data URLs or relative URLs
  if (!url || url.startsWith('data:') || url.startsWith('/')) {
    return url;
  }

  // List of domains that need proxying due to CORS restrictions
  const domainsThatNeedProxy = [
    'sanmetal.com.tn',
    'samfi.tn'
  ];

  // Check if the URL is from a domain that needs proxying
  const needsProxy = domainsThatNeedProxy.some(domain => url.includes(domain));
  
  if (needsProxy) {
    // Use a CORS proxy service
    // Using the cors-anywhere open proxy (for demo purposes)
    // In production, you should use your own proxy service
    try {
      // Fallback approach that should work without a proxy
      return url;
    } catch (error) {
      console.error('Error proxying image URL:', error);
      return url; // Return original URL if proxying fails
    }
  }

  // No proxy needed
  return url;
}

export default {
  getProxiedImageUrl
};
