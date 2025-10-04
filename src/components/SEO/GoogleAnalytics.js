import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Google Analytics Component
 * 
 * To use this component:
 * 1. Get your Google Analytics Measurement ID (G-XXXXXXXXXX) from analytics.google.com
 * 2. Replace 'YOUR_GA_MEASUREMENT_ID' with your actual ID
 * 3. Import this component in your App.js or index.js
 * 
 * Example in App.js:
 * import GoogleAnalytics from './components/SEO/GoogleAnalytics';
 * 
 * function App() {
 *   return (
 *     <>
 *       <GoogleAnalytics />
 *       <Routes>...</Routes>
 *     </>
 *   );
 * }
 */

const GoogleAnalytics = () => {
  const location = useLocation();
  
  // Replace with your actual Google Analytics Measurement ID
  const GA_MEASUREMENT_ID = 'YOUR_GA_MEASUREMENT_ID'; // e.g., 'G-XXXXXXXXXX'

  useEffect(() => {
    // Only initialize if GA_MEASUREMENT_ID is set
    if (GA_MEASUREMENT_ID !== 'YOUR_GA_MEASUREMENT_ID') {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (window.gtag && GA_MEASUREMENT_ID !== 'YOUR_GA_MEASUREMENT_ID') {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;
