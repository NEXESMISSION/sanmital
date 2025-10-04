const fs = require('fs');
const path = require('path');

// Import categories and products data
const categoriesPath = path.join(__dirname, '../src/data/categories.js');
const productsPath = path.join(__dirname, '../src/data/products.js');

// Base URL of your website
const BASE_URL = 'https://sanmetal.com.tn';

// Read and parse categories
function getCategories() {
  try {
    const content = fs.readFileSync(categoriesPath, 'utf8');
    // Extract category IDs from the categories object
    const categoryMatches = content.match(/id:\s*['"]([^'"]+)['"]/g);
    if (categoryMatches) {
      return categoryMatches.map(match => match.match(/['"]([^'"]+)['"]/)[1]);
    }
  } catch (error) {
    console.error('Error reading categories:', error);
  }
  return [];
}

// Read and parse products
function getProducts() {
  try {
    const content = fs.readFileSync(productsPath, 'utf8');
    // Extract product IDs from the products object
    const productMatches = content.match(/id:\s*['"]([^'"]+)['"]/g);
    if (productMatches) {
      return productMatches.map(match => match.match(/['"]([^'"]+)['"]/)[1]);
    }
  } catch (error) {
    console.error('Error reading products:', error);
  }
  return [];
}

// Generate sitemap XML
function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Static pages
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/services', priority: '0.8', changefreq: 'monthly' },
  ];

  // Get dynamic categories and products
  const categories = getCategories();
  const products = getProducts();

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

  // Add static pages
  staticPages.forEach(page => {
    sitemap += `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  // Add category pages
  categories.forEach(categoryId => {
    sitemap += `  <url>
    <loc>${BASE_URL}/category/${categoryId}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  });

  // Add product pages
  products.forEach(productId => {
    sitemap += `  <url>
    <loc>${BASE_URL}/products/${productId}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;

  return sitemap;
}

// Write sitemap to public folder
function writeSitemap() {
  const sitemap = generateSitemap();
  const outputPath = path.join(__dirname, '../public/sitemap.xml');
  
  fs.writeFileSync(outputPath, sitemap, 'utf8');
  console.log(`✅ Sitemap generated successfully at ${outputPath}`);
  console.log(`📊 Total URLs: ${(sitemap.match(/<url>/g) || []).length}`);
}

// Run the script
writeSitemap();
