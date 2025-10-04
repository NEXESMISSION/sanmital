# San Metal Website

A modern, SEO-optimized website for San Metal by Ben Amor, a leading provider of steel and metal products in Tunisia.

## Features

- ✅ **Responsive design** that works on all devices
- ✅ **Product catalog** with detailed product pages
- ✅ **About us page** describing the company's mission and values
- ✅ **Contact form** for customer inquiries
- ✅ **Services page** showcasing repair and training services
- 🎉 **Full SEO optimization** with structured data and meta tags
- 🗺️ **Auto-generated sitemap** for search engines
- 🐞 **SEO health monitoring** with automated checks

## Technologies Used

- **React.js** - Frontend framework
- **React Router** - Navigation and routing
- **React Helmet Async** - Dynamic SEO meta tags
- **Tailwind CSS** - Modern styling
- **Lucide React** - Beautiful icons
- **Schema.org JSON-LD** - Structured data for search engines

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the source code
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
# or
yarn install
```

### Running the Development Server

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Building for Production

```bash
npm run build
# This automatically generates a fresh sitemap before building
# or
yarn build
```

The build files will be created in the `build` directory.

## SEO Features 🚀

This website includes **comprehensive SEO optimization** out of the box!

### Available SEO Commands

```bash
# Generate sitemap.xml automatically
npm run generate-sitemap

# Run SEO health check (get instant feedback)
npm run seo-check
```

### What's Included?

✅ **Dynamic Meta Tags** - Every page has unique, optimized meta tags  
✅ **Structured Data (JSON-LD)** - Rich snippets for Google search results  
✅ **Open Graph Tags** - Beautiful previews on social media  
✅ **Twitter Cards** - Optimized sharing on Twitter  
✅ **XML Sitemap** - Auto-generated with all pages  
✅ **Robots.txt** - Proper crawling instructions  
✅ **Local SEO** - Optimized for Sfax, Tunisia  
✅ **Performance Optimization** - DNS prefetch & preconnect  
✅ **Mobile-Friendly** - Responsive design  

### SEO Health Score: **100%** 🎉

Run `npm run seo-check` to verify!

### Next Steps for Production

1. **Update URLs** - Replace `www.sanmetal.com.tn` with your actual domain in:
   - `src/components/SEO/SEO.js`
   - `src/components/SEO/structuredData.js`
   - `scripts/generate-sitemap.js`

2. **Submit to Search Engines**:
   - [Google Search Console](https://search.google.com/search-console)
   - [Bing Webmaster Tools](https://www.bing.com/webmasters)
   - Submit your sitemap: `https://yoursite.com/sitemap.xml`

3. **Setup Google Analytics** (Optional):
   - Get your GA4 Measurement ID
   - Update `src/components/SEO/GoogleAnalytics.js`
   - Import in `App.js`

4. **Create Google My Business**:
   - Essential for local SEO in Sfax
   - Add business info, photos, and collect reviews

📖 **See [SEO-GUIDE.md](./SEO-GUIDE.md) for complete documentation**

## Project Structure

- `src/components/` - Reusable UI components
- `src/pages/` - Page components
- `src/data/` - Mock data for products
- `src/assets/` - Static assets like images

## License

This project is private and intended for use by San Metal by Ben Amor only.
