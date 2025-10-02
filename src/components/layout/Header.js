import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

function Header({ isAboutPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Function to handle scrolling to sections
  const scrollToSection = (sectionId) => {
    // If we're not on the homepage, navigate to homepage first
    if (location.pathname !== '/') {
      navigate('/');
      // Use a small timeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop - 90, // Accounting for header height
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 90, // Accounting for header height
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  // Navigation items
  const navigation = [
    { name: "Accueil", href: "/", isLink: true },
    { name: "À Propos", href: "/about", isLink: true },
    { name: "Produits", section: "products", isLink: false },
    { name: "Services", href: "/services", isLink: true },
    { name: "Contact", section: "contact", isLink: false },
    { name: "Demande de Partenariat", section: "contact", isLink: false },
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
                className="h-20 sm:h-24 md:h-28 w-auto" /* Further increased size for all breakpoints */
              />
            </Link>
          </div>

          {/* Desktop Navigation - Show only for screens >= 1300px */}
          <div className={`${windowWidth >= 1300 ? 'flex' : 'hidden'} flex-grow items-center justify-end`}>
            <nav className="flex items-center">
              {navigation.map((item) => (
                <div key={item.name} className="px-2">
                  {item.isLink ? (
                    <Link
                      to={item.href}
                      className="block py-3 px-3 text-base font-medium text-gray-900 hover:text-red-700 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.section)}
                      className="block py-3 px-3 text-base font-medium text-gray-900 hover:text-red-700 transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </nav>
            
            {/* Phone Button */}
            <div className="flex-shrink-0 ml-6">
              <a
                href="tel:+21697712721"
                className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium shadow-sm text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
              >
                <Phone className="mr-2 h-5 w-5" />
                (+216) 97 712 721
              </a>
            </div>
          </div>

          {/* Mobile Menu Button - Show only for screens < 1300px */}
          <div className={windowWidth < 1300 ? '' : 'hidden'} >
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

      {/* Mobile Menu - For screens < 1300px */}
      {isMenuOpen && windowWidth < 1300 && (
        <div className="bg-white shadow-lg border-t border-gray-100 absolute w-full left-0 right-0 z-50">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-1 pb-3">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.isLink ? (
                    <Link
                      to={item.href}
                      className="block px-4 py-2 text-base font-medium text-gray-900 hover:text-red-700 hover:bg-red-50 transition-colors duration-200"
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
                      className="w-full text-left px-4 py-2 text-base font-medium text-gray-900 hover:text-red-700 hover:bg-red-50 transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
              <div className="pt-3">
                <a
                  href="tel:+21697712721"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-base font-medium bg-red-600 text-white hover:bg-red-700 transition-colors duration-200"
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
