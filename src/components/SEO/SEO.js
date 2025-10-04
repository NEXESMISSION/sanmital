import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage,
  ogType = 'website',
  article = false,
  structuredData = null
}) => {
  const baseUrl = 'https://sanmetal.com.tn';
  const fullUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const defaultImage = 'https://i.ibb.co/RkLrLqXk/logod.png';
  const imageUrl = ogImage || defaultImage;

  const defaultKeywords = "San Metal, Ben Amor, acier, métal, métallurgie, Tunisie, Sfax, poutrelles, tôles, tubes, cornières, charpente, fer marchands, construction, industrie, fournisseur acier";
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="fr_TN" />
      <meta property="og:site_name" content="San Metal by Ben Amor" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Article specific tags */}
      {article && (
        <>
          <meta property="article:publisher" content="San Metal by Ben Amor" />
          <meta property="article:modified_time" content={new Date().toISOString()} />
        </>
      )}

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="TN-61" />
      <meta name="geo.placename" content="Sfax" />
      <meta name="geo.position" content="34.74901;10.74796" />
      <meta name="ICBM" content="34.74901, 10.74796" />
    </Helmet>
  );
};

export default SEO;
