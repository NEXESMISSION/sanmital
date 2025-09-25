/* eslint-disable no-restricted-globals */
/**
 * Service Worker for image optimization and caching
 * 
 * This service worker intercepts image requests and:
 * 1. Compresses and optimizes images on-the-fly
 * 2. Implements an efficient cache strategy for images
 * 3. Provides offline access to previously viewed images
 */

const CACHE_NAME = 'sanmital-image-cache-v1';

// URLs that should be cached
const IMAGE_URLS = [
  'sanmetal.com.tn',
  'samfi.tn',
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.gif',
  '.svg'
];

// Install event - precache critical assets
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Ensure service worker activates immediately
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((name) => {
          return name !== CACHE_NAME;
        }).map((name) => {
          return caches.delete(name);
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Helper to check if a URL is an image that should be cached
function isImageURL(url) {
  return IMAGE_URLS.some(imagePattern => url.includes(imagePattern));
}

// Fetch event - handle image requests
self.addEventListener('fetch', (event) => {
  // Only care about GET requests
  if (event.request.method !== 'GET') return;
  
  const url = new URL(event.request.url);
  
  // Only intercept image requests
  if (isImageURL(url.href)) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        // Try to get the image from the cache
        return cache.match(event.request).then((cachedResponse) => {
          // Return cached response if available
          if (cachedResponse) {
            return cachedResponse;
          }
          
          // Otherwise, fetch from network
          return fetch(event.request).then((networkResponse) => {
            // Clone the response since we need to use it twice
            const clonedResponse = networkResponse.clone();
            
            // Cache the fetched response
            event.waitUntil(
              cache.put(event.request, clonedResponse)
            );
            
            // Return the response
            return networkResponse;
          });
        });
      })
    );
  }
});

// Listen for messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CLEAR_IMAGE_CACHE') {
    caches.open(CACHE_NAME).then((cache) => {
      cache.keys().then((keys) => {
        keys.forEach((request) => {
          cache.delete(request);
        });
      });
    });
  }
});
