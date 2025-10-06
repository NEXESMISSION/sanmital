import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scissors, ShoppingCart, HeadphonesIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import products, { getProductsByCategory } from '../data/products';
import Contact from '../components/Contact';
import OptimizedImage from '../components/ui/OptimizedImage';
import SEO from '../components/SEO/SEO';
import { organizationSchema, localBusinessSchema, websiteSchema } from '../components/SEO/structuredData';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Hero section images from consolidated path
  const heroImage1 = '/assets/images/hero/1.webp';
  const heroImage2 = '/assets/images/hero/2.jpg';
  const heroImage3 = '/assets/images/hero/3.jpg';

  const slides = [
    {
      image: heroImage1,
      title: "QUALITÉ ET SERVICES",
      subtitle: "NOS MEILLEURS ATOUTS",
      description: "INÉGALÉS",
      paragraph: "San Metal by Ben Amor offre une qualité supérieure et un service personnalisé pour tous vos besoins en métallurgie."
    },
    {
      image: heroImage2,
      title: "EXPERTISE RECONNUE",
      subtitle: "35 ans d'expérience",
      description: "EN SIDÉRURGIE",
      paragraph: "San Metal by Ben Amor s'appuie sur 35 ans d'expérience dans le domaine de la métallurgie."
    },
    {
      image: heroImage3,
      title: "INNOVATION CONTINUE",
      subtitle: "ÉQUIPEMENTS MODERNES",
      description: "SOLUTIONS SUR MESURE",
      paragraph: "San Metal by Ben Amor investit dans les technologies les plus récentes pour vous offrir des solutions adaptées à vos besoins spécifiques."
    }
  ];

  // Preload all images
  useEffect(() => {
    // Preload all images to ensure smooth transitions
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // Auto-slide functionality with forward-only animation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds for faster animation

    return () => clearInterval(timer);
  }, [slides.length]);
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="relative overflow-hidden mt-[90px]">
      <div className="relative h-[80vh] lg:h-[90vh]">
        {/* Slides */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100' 
                  : 'opacity-0'
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <OptimizedImage
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  width="100%"
                  height="100%"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-gray-900/70 to-gray-900/80"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex items-center h-full justify-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full flex justify-center">
                  <div className="max-w-sm md:max-w-xl lg:max-w-2xl text-center">
                    <p className="text-base md:text-lg mb-3 text-gray-200 tracking-wider text-center">
                      {slide.subtitle}
                    </p>
                    
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-center">
                      {slide.title}
                    </h1>
                    
                    <p className="text-sm md:text-base text-gray-200 mb-6 mx-auto text-center">
                      {slide.paragraph}
                    </p>
                    
                    <Link to="/about" className="inline-block">
                      <Button 
                        className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-6 py-2 shadow-lg"
                      >
                        Qui sommes-nous ?
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-gradient-to-r from-red-600 to-red-800 scale-110' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SearchBar() {
  const [query, setQuery] = useState('');
  
  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', query);
  };
  
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-medium text-gray-700">Trouvez rapidement ce que vous cherchez</h3>
        </div>
        <form onSubmit={handleSearch} className="flex max-w-3xl mx-auto">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un produit..."
            className="flex-grow px-5 py-4 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-sm text-lg"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-r-lg transition-colors text-lg font-medium shadow-sm"
          >
            Rechercher
          </button>
        </form>
      </div>
    </section>
  );
}

function ProductsSection() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      const lowerCaseQuery = query.toLowerCase();
      
      // Search in all products
      const results = products.filter(product => 
        product.title.toLowerCase().includes(lowerCaseQuery) ||
        product.description.toLowerCase().includes(lowerCaseQuery) ||
        product.category.toLowerCase().includes(lowerCaseQuery)
      );
      
      setSearchResults(results);
      setShowResults(true);
    }
  };
  
  const closeSearchResults = () => {
    setShowResults(false);
  };
  
  // Import product images
  const productImages = {
    poutrelles: "/assets/images/thumnailes/Poutrelles.webp",
    toles: "/assets/images/thumnailes/Tôles.jpg",
    tubes: "/3.jpg",
    tube_galvanise: "/assets/images/thumnailes/tube galvanisé.jpg",
    panneaux_sandwich: "/assets/images/thumnailes/Panneaux Sandwich.jpg",
    lames_rideaux: "/assets/images/thumnailes/Lames rideaux et accessoires portes.webp",
    pannes: "/assets/images/thumnailes/Pannes C et Z.webp",
    fer_marchands: "/assets/images/thumnailes/Fer marchands.jpg",
    accessoires_charpente: "/assets/images/thumnailes/Accessoires Charpente.jpg",
    aciers_speciaux: "/assets/images/thumnailes/Aciers Spéciaux.jpg",
    ossature_metallique: "/assets/images/thumnailes/Ossature métallique.webp"
  };
  
  const allCategories = [
    { id: 'poutrelles', title: 'Poutrelles' },
    { id: 'toles', title: 'Tôles' },
    { id: 'tubes', title: 'Tubes soudés en acier' },
    { id: 'tube_galvanise', title: 'Tube galvanisé' },
    { id: 'panneaux_sandwich', title: 'Panneaux Sandwich' },
    { id: 'lames_rideaux', title: 'Lames rideaux et accessoires portes' },
    { id: 'pannes', title: 'Pannes C et Z' },
    { id: 'fer_marchands', title: 'Fer marchands' },
    { id: 'accessoires_charpente', title: 'Accessoires Charpente' },
    { id: 'aciers_speciaux', title: 'Aciers Spéciaux' },
    { id: 'ossature_metallique', title: 'Ossature métallique' }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nos Produits
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-16 relative">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un produit..."
              className="flex-grow px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-3 rounded-r-md"
            >
              Rechercher
            </button>
          </form>
          
          {/* Search Results Popup */}
          {showResults && (
            <div className="absolute top-full left-0 right-0 bg-white mt-2 rounded-md shadow-xl z-50 max-h-96 overflow-y-auto">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-medium text-gray-700">
                  {searchResults.length} résultat(s) trouvé(s)
                </h3>
                <button 
                  onClick={closeSearchResults}
                  className="p-1 hover:bg-gray-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {searchResults.length > 0 ? (
                <div className="p-2">
                  {searchResults.map((product) => (
                    <Link 
                      key={product.id} 
                      to={`/products/${product.id}`}
                      className="block p-3 hover:bg-gray-50 rounded-md"
                      onClick={closeSearchResults}
                    >
                      <div className="font-medium text-gray-800">{product.title}</div>
                      <div className="text-sm text-gray-500">{product.description}</div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-gray-500">
                  Aucun résultat trouvé pour "{query}"
                </div>
              )}
            </div>
          )}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {allCategories.map((category) => (
            <Link 
              key={category.id} 
              to={`/category/${category.id}`}
              className="group cursor-pointer block" 
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full transform group-hover:scale-[1.02] rounded-none">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <OptimizedImage 
                    src={productImages[category.id]}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    width="100%"
                    height="100%"
                  />
                </div>
                <CardContent className="py-6 px-4 text-center">
                  <h3 className="text-xl font-semibold pt-2">{category.title}</h3>
                  <div className="w-12 h-0.5 bg-red-600 mx-auto mt-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <p className="text-sm text-gray-500 mt-1">{getProductsByCategory(category.id).length} produits</p>
                </CardContent>
                <div 
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="bg-red-600 rounded-full p-2 shadow-lg">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mb-16">
          <Button variant="primary" size="lg" className="shadow-lg">
            Télécharger notre catalogue complet
          </Button>
        </div>
        
        {/* Redesigned CTA Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-2xl py-16 px-8 relative overflow-hidden">
          {/* Modern metallic overlay with subtle animation */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-gray-300/10 to-white/10 pointer-events-none animate-pulse"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full -mr-32 -mt-32 filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/5 rounded-full -ml-32 -mb-32 filter blur-3xl"></div>
          
          <div className="text-center max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">Besoin d'un devis ou d'informations ?</h2>
            <p className="text-lg md:text-xl text-white/90 mb-10">Découvrez notre gamme de produits métalliques de qualité ou contactez-nous pour obtenir un catalogue complet</p>
            
            <div className="flex justify-center">
              <Button 
                className="bg-red-600 text-white px-6 py-4 text-base md:text-lg shadow-lg border-2 border-red-500 transition-colors duration-300 hover:bg-red-700 hover:border-white"
                onClick={() => window.location.href = 'tel:+21697712721'}
              >
                <span className="font-bold">Demander un devis</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: Scissors,
      title: "Découpe & perçage sur plan",
      description: "Service de découpe et perçage précis selon vos spécifications techniques et plans détaillés.",
      features: [
        "Découpe plasma",
        "Perçage de précision",
        "Cisaillage",
        "Pliage sur mesure"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Fourniture & négoce",
      description: "Large stock de produits métallurgiques disponibles immédiatement pour vos projets.",
      features: [
        "Stock permanent",
        "Délais courts",
        "Prix compétitifs",
        "Livraison possible"
      ]
    },
    {
      icon: HeadphonesIcon,
      title: "Conseil technique",
      description: "Accompagnement expert pour vous aider à choisir les solutions adaptées à vos projets.",
      features: [
        "Étude de faisabilité",
        "Choix des matériaux",
        "Optimisation coûts",
        "Support technique"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des services complets pour accompagner vos projets 
            de la conception à la réalisation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-red-600 to-red-800 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 text-center">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="ghost" 
                  className="w-full text-white hover:bg-white/20 border border-white/30"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Process Section */}
        <div className="relative overflow-hidden">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Notre processus</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          </div>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 via-red-700 to-red-800"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", desc: "Analyse de vos besoins", icon: "💬" },
                { step: "02", title: "Devis", desc: "Proposition détaillée", icon: "📋" },
                { step: "03", title: "Disponibilité", desc: "Stock permanent", icon: "📦" },
                { step: "04", title: "Livraison", desc: "Service rapide", icon: "🚚" }
              ].map((item, index) => (
                <div key={index} className="relative">
                  {/* Step Circle */}
                  <div className="relative mx-auto w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mb-6 shadow-xl transform hover:scale-105 transition-all duration-300">
                    <span className="text-3xl">{item.icon}</span>
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-white text-gray-800 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-md font-bold">{item.step}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h4 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600">
            Besoin d'un devis ou d'informations ? Nous sommes là pour vous accompagner dans vos projets.
          </p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-800">Demande de devis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Prénom *</label>
                <input 
                  id="firstName"
                  type="text"
                  placeholder="Votre prénom"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Nom *</label>
                <input 
                  id="lastName"
                  type="text"
                  placeholder="Votre nom"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">Entreprise</label>
              <input 
                id="company"
                type="text"
                placeholder="Nom de votre entreprise"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                <input 
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Téléphone *</label>
                <input 
                  id="phone"
                  type="tel"
                  placeholder="+216 XX XXX XXX"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message *</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Détails de votre demande..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              ></textarea>
            </div>

            <Button 
              variant="primary"
              className="w-full"
            >
              Envoyer la demande
            </Button>

            <p className="text-sm text-gray-500 text-center">
              Les champs marqués d'un * sont obligatoires
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

// CtaSection has been moved into ProductsSection

function HomePage() {
  // Combined structured data for homepage
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, localBusinessSchema, websiteSchema]
  };

  return (
    <>
      <SEO 
        title="San Metal by Ben Amor | Fournisseur de référence en aciers et métaux en Tunisie"
        description="Depuis 35 ans, San Metal by Ben Amor est votre fournisseur de référence en aciers et métaux en Tunisie. Découvrez notre large gamme de produits métallurgiques de qualité supérieure : poutrelles, tôles, tubes, cornières, charpente et bien plus."
        keywords="fournisseur acier Tunisie, métaux Sfax, poutrelles, tôles métalliques, tubes acier, cornières, charpente métallique, construction métallique"
        canonical="/"
        structuredData={structuredData}
      />
      <Hero />
      <ProductsSection />
      <ProcessSection />
      <Contact />
    </>
  );
}

export default HomePage;
