import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { getProduct, getProductsByCategory, getAllProducts } from '../data/products';
import OptimizedImage from '../components/ui/OptimizedImage';
import SpecImage from '../components/ui/SpecImage';
import SEO from '../components/SEO/SEO';
import { productSchema, breadcrumbSchema } from '../components/SEO/structuredData';

function ProductPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    const fetchProduct = () => {
      const foundProduct = getProduct(productId);
      
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Get related products from the same category
        let related = [];
        if (foundProduct.category) {
          related = getProductsByCategory(foundProduct.category)
            .filter(p => p.id !== foundProduct.id)
            .slice(0, 3);
        }
        
        // If not enough related products, add some random products
        if (related.length < 3) {
          const allProducts = getAllProducts()
            .filter(p => p.id !== foundProduct.id && !related.some(rp => rp.id === p.id))
            .slice(0, 3 - related.length);
          
          related = [...related, ...allProducts];
        }
        
        setRelatedProducts(related);
      } else {
        // Product not found, navigate back to homepage
        navigate('/');
      }
      
      setLoading(false);
    };
    
    fetchProduct();
  }, [productId, navigate]);

  // SEO Data
  const productStructuredData = product ? productSchema({
    name: product.title,
    image: product.image,
    description: product.description || `${product.title} - Produit métallurgique de qualité supérieure disponible chez San Metal by Ben Amor`,
    price: product.price
  }) : null;

  const breadcrumbs = product ? breadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Produits', url: '/#products' },
    { name: product.title, url: `/products/${productId}` }
  ]) : null;

  const structuredData = product ? {
    "@context": "https://schema.org",
    "@graph": [productStructuredData, breadcrumbs]
  } : null;

  if (loading) {
    return (
      <div className="pt-[120px] sm:pt-[130px] md:pt-[140px] lg:pt-[140px] pb-20 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Chargement du produit...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <>
        <SEO 
          title="Produit non trouvé | San Metal by Ben Amor"
          description="Le produit demandé n'existe pas. Découvrez notre gamme complète de produits métallurgiques."
          canonical={`/products/${productId}`}
        />
        <div className="pt-[120px] sm:pt-[130px] md:pt-[140px] lg:pt-[140px] pb-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Produit non trouvé</h2>
        <p className="mt-4 text-gray-600">
          Nous n'avons pas trouvé le produit que vous recherchez.
        </p>
        <Link to="/" className="mt-6 inline-block">
          <Button variant="primary">
            Retour à l'accueil
          </Button>
        </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title={`${product.title} | San Metal by Ben Amor`}
        description={product.description || `Découvrez ${product.title} chez San Metal by Ben Amor. Produit métallurgique de qualité supérieure pour vos projets de construction et industrie en Tunisie. Livraison disponible à Sfax et dans toute la Tunisie.`}
        keywords={`${product.title}, ${product.title} Tunisie, achat ${product.title}, prix ${product.title}, ${product.title} Sfax`}
        canonical={`/products/${productId}`}
        ogImage={product.image}
        structuredData={structuredData}
      />
      <div className="pt-[120px] sm:pt-[130px] md:pt-[140px] lg:pt-[140px]">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-red-600">Accueil</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to="/#products" className="hover:text-red-600">Produits</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900 font-medium">{product.title}</span>
          </div>
        </div>
      </div>
      
      {/* Product Hero Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <OptimizedImage
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto object-cover"
                  width="100%"
                  height="500px"
                />
              </div>
            </div>
            
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
              <p className="text-xl text-gray-600 mb-8">{product.description}</p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Catégorie</h3>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </span>
              </div>
              
              <div className="space-y-4">
                <Button variant="primary" size="lg" className="w-full md:w-auto mr-4">
                  Demander un devis
                </Button>
                
                <Button variant="outline" size="lg" className="w-full md:w-auto">
                  Télécharger la fiche technique
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Details */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Specification Image */}
              {product.specImage && (
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Spécificités Techniques</h3>
                  <SpecImage
                    imageName={product.specImage}
                    alt={`Spécificités de ${product.title}`}
                    className="w-full h-auto rounded-lg"
                    width="100%"
                    height="auto"
                  />
                </div>
              )}
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Description détaillée</h2>
              <p className="text-gray-700 mb-6 text-lg">{product.longDescription}</p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">Spécifications</h3>
              <ul className="list-disc list-inside space-y-2 pl-4 mb-8">
                {product.specifications.map((spec, index) => (
                  <li key={index} className="text-gray-700">{spec}</li>
                ))}
              </ul>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">Applications</h3>
              <p className="text-gray-700 mb-8">
                Nos {product.title.toLowerCase()} sont utilisés dans divers secteurs, notamment:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Construction</h4>
                  <p className="text-gray-600 text-sm">
                    Bâtiments industriels, commerciaux et résidentiels
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Industrie</h4>
                  <p className="text-gray-600 text-sm">
                    Équipements industriels et machines
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Infrastructure</h4>
                  <p className="text-gray-600 text-sm">
                    Ponts, passerelles et installations portuaires
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Projets spéciaux</h4>
                  <p className="text-gray-600 text-sm">
                    Solutions sur mesure pour besoins spécifiques
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Besoin d'aide ?</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Contact commercial</h4>
                    <p className="text-gray-600 mb-2">(+216) 74 830 899</p>
                    <p className="text-gray-600">Contact@sanmetal.com.tn</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Service technique</h4>
                    <p className="text-gray-600 mb-2">Notre équipe technique est à votre disposition pour toute question concernant ce produit.</p>
                  </div>
                  
                  <Button 
                    variant="primary" 
                    className="w-full"
                    onClick={() => window.location.href = 'tel:+21697712721'}
                  >
                    Contacter un expert
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Produits similaires</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <OptimizedImage 
                    src={relatedProduct.image} 
                    alt={relatedProduct.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    width="100%"
                    height="100%"
                  />
                </div>
                <CardContent className="text-center">
                  <h3 className="text-xl font-bold mb-2">{relatedProduct.title}</h3>
                  <p className="text-gray-600 mb-4">{relatedProduct.description}</p>
                  <Link to={`/products/${relatedProduct.id}`}>
                    <Button variant="link">
                      En savoir plus <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/#products" onClick={() => setTimeout(() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' }), 100)}>
              <Button variant="outline" className="inline-flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voir tous les produits
              </Button>
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

export default ProductPage;
