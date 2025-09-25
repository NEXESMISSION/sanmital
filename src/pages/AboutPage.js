import React from 'react';
import { Building2, Users, Target, Truck, Phone } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import Contact from '../components/Contact';

function AboutPage() {
  return (
    <div className="mt-[90px]">

      {/* Main About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            {/* Image */}
            <div className="mb-12 lg:mb-0">
              <div className="relative">
                <img
                  src="/assets/images/factory.png"
                  alt="Usine SAN METAL"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
                <div className="absolute -bottom-10 -left-10 hidden lg:block">
                  <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-lg p-6 shadow-xl">
                    <p className="text-2xl font-bold text-white">35+</p>
                    <p className="text-sm text-gray-100">
                      Années d'expérience dans le domaine de la métallurgie
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Qui sommes-nous ?
                </h2>
                
                <p className="text-gray-600 mb-4 text-lg">
                  <strong className="text-gray-900">San Metal by Ben Amor</strong>, fondée en 1990, est devenue une référence incontournable dans le secteur de la métallurgie en Tunisie avec 35 ans d'expertise.
                </p>
                
                <p className="text-gray-600 mb-4">
                  Notre entreprise se spécialise dans la fourniture et la distribution d'une large gamme de produits 
                  métallurgiques de qualité supérieure, incluant poutrelles, tôles, tubes, cornières, 
                  et bien d'autres produits essentiels pour vos projets de construction et d'industrie.
                </p>
                
                <p className="text-gray-600 mb-4">
                  Nous proposons également des services de découpe, perçage et assistance technique 
                  pour répondre aux besoins spécifiques de vos projets.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-none shadow-sm bg-white">
                  <CardContent className="p-4 text-center">
                    <Building2 className="h-8 w-8 text-gray-700 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Expertise</h4>
                    <p className="text-sm text-gray-600">35+ ans d'expérience</p>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-sm bg-white">
                  <CardContent className="p-4 text-center">
                    <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Équipe</h4>
                    <p className="text-sm text-gray-600">Professionnels qualifiés</p>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-sm bg-white">
                  <CardContent className="p-4 text-center">
                    <Target className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Précision</h4>
                    <p className="text-sm text-gray-600">Travail sur mesure</p>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-sm bg-white">
                  <CardContent className="p-4 text-center">
                    <Truck className="h-8 w-8 text-red-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Livraison</h4>
                    <p className="text-sm text-gray-600">Service rapide</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-600 rounded-lg shadow-xl p-8 lg:p-12 text-white">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Besoin de produits métalliques de qualité ?</h2>
              <p className="text-lg mb-6">
                Notre équipe de spécialistes est à votre disposition pour vous aider dans votre projet.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  variant="secondary" 
                  className="bg-white text-red-600 hover:bg-gray-100 text-lg py-3 px-8"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Demander un devis
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/20 text-lg py-3 px-8"
                  onClick={() => window.location.href = 'tel:+21697712721'}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Contacter un conseiller
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default AboutPage;
