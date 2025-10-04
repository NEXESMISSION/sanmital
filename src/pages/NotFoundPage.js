import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import SEO from '../components/SEO/SEO';

function NotFoundPage() {
  return (
    <>
      <SEO 
        title="Page non trouvée - 404 | San Metal by Ben Amor"
        description="La page que vous recherchez n'existe pas ou a été déplacée. Retournez à l'accueil pour découvrir nos produits métallurgiques."
        canonical="/404"
      />
      <div className="pt-[120px] sm:pt-[130px] md:pt-[140px] lg:pt-[140px] min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* 404 Number */}
            <h1 className="text-9xl font-bold text-red-600 mb-4">404</h1>
            
            {/* Error Message */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Page non trouvée
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée. 
              Utilisez les liens ci-dessous pour naviguer vers d'autres sections de notre site.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 inline-flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Retour à l'accueil
                </Button>
              </Link>
              
              <Link to="/#products">
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 inline-flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Voir nos produits
                </Button>
              </Link>
            </div>

            {/* Popular Links */}
            <div className="max-w-4xl mx-auto mt-16">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Pages populaires
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link to="/about" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">À Propos</h4>
                  <p className="text-sm text-gray-600">Découvrez notre histoire et notre expertise</p>
                </Link>
                
                <Link to="/services" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Services</h4>
                  <p className="text-sm text-gray-600">Nos services de réparation et formation</p>
                </Link>
                
                <Link to="/#contact" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
                  <p className="text-sm text-gray-600">Contactez-nous pour un devis</p>
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-12 p-6 bg-white rounded-lg shadow-md inline-block">
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="h-5 w-5 text-red-600" />
                <span className="font-medium">Besoin d'aide ?</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Appelez-nous pour toute question
              </p>
              <a href="tel:+21674456789" className="text-red-600 font-semibold mt-1 block hover:underline">
                +216 74 456 789
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
