import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

function Header({ isAboutPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Function to handle scrolling to sections
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 90, // Accounting for header height
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  // Navigation items
  const navigation = [
    { name: "Accueil", href: "/", isLink: true },
    { name: "À Propos", href: "/about", isLink: true },
  ];

  return (
    <header className="fixed w-full z-50 bg-white shadow-lg top-0 left-0">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 sm:py-4 lg:py-5">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <img 
                src="https://i.ibb.co/RkLrLqXk/logod.png" 
                alt="SAN METAL BY BEN AMOR Logo" 
                className="h-16 sm:h-18 md:h-20 w-auto" /* Increased size for all breakpoints, especially mobile */
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <nav className="flex items-center mr-6">
              {navigation.map((item) => (
                <div key={item.name} className="px-1">
                  {item.isLink ? (
                    <Link
                      to={item.href}
                      className="block py-3 px-4 text-base font-medium text-gray-900 hover:text-red-700 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.section)}
                      className="block py-3 px-4 text-base font-medium text-gray-900 hover:text-red-700 transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </nav>
            
            {/* Phone Button */}
            <div className="flex-shrink-0">
              <a
                href="tel:+21697712721"
                className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium  shadow-sm text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
              >
                <Phone className="mr-2 h-5 w-5" />
                (+216) 97 712 721
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3  text-gray-900 hover:text-red-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t border-gray-100 absolute w-full left-0 right-0 z-50">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-1 pb-3">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.isLink ? (
                    <Link
                      to={item.href}
                      className="block px-4 py-3 text-base font-medium text-gray-900 hover:text-red-700 hover:bg-red-50  transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        scrollToSection(item.section);
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-base font-medium text-gray-900 hover:text-red-700 hover:bg-red-50  transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <a
                  href="tel:+21697712721"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-base font-medium bg-red-600 text-white  hover:bg-red-700 transition-colors duration-200"
                >
                  <Phone className="h-5 w-5" />
                  (+216) 97 712 721
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
