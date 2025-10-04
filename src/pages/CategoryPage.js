import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { getCategory } from '../data/categories';
import { getProductsByCategory } from '../data/products';
import { Button } from '../components/ui/button';
import OptimizedImage from '../components/ui/OptimizedImage';
import SEO from '../components/SEO/SEO';
import { breadcrumbSchema } from '../components/SEO/structuredData';

function CategoryPage() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    const fetchCategoryAndProducts = () => {
      // Get category information
      const categoryData = getCategory(categoryId);
      
      if (categoryData) {
        setCategory(categoryData);
        
        // Get products for this category
        const categoryProducts = getProductsByCategory(categoryId);
        setProducts(categoryProducts);
      }
      
      setLoading(false);
    };
    
    fetchCategoryAndProducts();
  }, [categoryId]);

  // SEO data
  const breadcrumbs = category ? breadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Catégories', url: '/#categories' },
    { name: category.title, url: `/category/${categoryId}` }
  ]) : null;

  if (loading) {
    return (
      <div className="pt-24 pb-20 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Chargement de la catégorie...</p>
      </div>
    );
  }

  if (!category) {
    return (
      <>
        <SEO 
          title="Catégorie non trouvée | San Metal by Ben Amor"
          description="La catégorie demandée n'existe pas. Découvrez notre gamme complète de produits métallurgiques."
          canonical={`/category/${categoryId}`}
        />
        <div className="pt-24 pb-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Catégorie non trouvée</h2>
        <p className="mt-4 text-gray-600">
          Nous n'avons pas trouvé la catégorie que vous recherchez.
        </p>
        <Link to="/" className="mt-6 inline-block">
          <Button variant="primary">
            Retour à l'accueil
          </Button>
        </Link>
      </div>
    </>);
  }

  return (
    <>
      <SEO 
        title={`${category.title} | San Metal by Ben Amor`}
        description={category.description || `Découvrez notre gamme complète de ${category.title.toLowerCase()} chez San Metal by Ben Amor. Produits métallurgiques de qualité supérieure pour tous vos projets de construction et industrie en Tunisie.`}
        keywords={`${category.title}, ${category.title} Tunisie, achat ${category.title.toLowerCase()}, fournisseur ${category.title.toLowerCase()}, ${category.title} Sfax`}
        canonical={`/category/${categoryId}`}
        structuredData={breadcrumbs}
      />
      <div className="mt-[120px] sm:mt-[130px] md:mt-[140px] lg:mt-[140px] bg-gray-100 min-h-screen">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Première boîte pour la description et le titre */}
          <div className="bg-white shadow-lg p-8 md:p-12 mb-8 mt-8">
            {/* Navigation */}
            <nav className="text-sm text-gray-500 mb-2">
              <Link to="/" className="hover:scale-105 rounded-none">Accueil</Link>
              <span className="mx-1">&gt;</span>
              <Link to="/#products" className="hover:scale-105 rounded-none">Produits</Link>
              <span className="mx-1">&gt;</span>
              <span>{category.title}</span>
            </nav>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{category.title}</h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* Deuxième boîte pour la liste des produits */}
        <div className="bg-white shadow-lg p-8 md:p-12">
          {/* Titre de la section des produits */}
          <h2 className="text-3xl font-bold text-gray-800 text-left mb-8">{category.title === 'Ossature métallique' || category.title === 'Aciers Spéciaux' ? category.title : `${category.title} disponibles`}</h2>

          {/* Grille des produits */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <Link to={`/products/${product.id}`} key={product.id}>
                  <div className="bg-white shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 rounded-none">
                    <OptimizedImage 
                      src={product.image || `https://placehold.co/600x400/F2F2F2/000000?text=${product.title}`} 
                      alt={`Image d'une ${product.title}`} 
                      className="w-full h-48 object-cover"
                      height="192px"
                    />
                    <div className="p-6 text-left">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">Aucun produit disponible dans cette catégorie pour le moment.</p>
            </div>
          )}
        </div>
      </div>
      </div>
    </>
  );
}

export default CategoryPage;
