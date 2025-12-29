import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

function Footer({ isAboutPage }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Products list removed

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img 
                src="https://i.ibb.co/RkLrLqXk/logod.png" 
                alt="SAN METAL BY BEN AMOR Logo" 
                className="h-16 w-auto bg-white p-2" 
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              San Metal by Ben Amor est votre fournisseur de référence en aciers et métaux en Tunisie.
              Nous proposons une large gamme de produits métallurgiques de qualité supérieure.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-600" />
                <span className="text-gray-300">(+216) 36 11 02 58</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-600" />
                <span className="text-gray-300">Contact@sanmetal.com.tn</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-red-600" />
                <span className="text-gray-300">Sfax, Route Lafrane - Route Mahdia Km 8, Tunisie</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {(isAboutPage 
                ? [
                    { name: "Accueil", href: "/" }
                  ]
                : [
                    { name: "Accueil", href: "/" },
                    { name: "À propos", href: "/about" },
                    { name: "Produits", href: "/#products" },
                    { name: "Contact", href: "/#contact" },
                  ]
              ).map((link, i) => (
                <li key={i}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                    onClick={(e) => {
                      if (link.href.startsWith('/#')) {
                        e.preventDefault();
                        document.getElementById(link.href.substring(2)).scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products section removed */}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 SAN METAL BY BEN AMOR. Tous droits réservés.
            </div>
            <div>
              <button
                onClick={scrollToTop}
                className="flex items-center px-4 py-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <ArrowUp className="h-4 w-4 mr-1" />
                Haut de page
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
