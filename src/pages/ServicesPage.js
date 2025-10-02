import React from 'react';
import { Wrench, GraduationCap, CheckCircle, Settings, Users, Award, Scissors, Tool } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import Contact from '../components/Contact';

function ServicesPage() {
  return (
    <div className="mt-[120px] sm:mt-[130px] md:mt-[140px] lg:mt-[140px]">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nos Services
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Des solutions complètes pour vos besoins en soudage et formation professionnelle
            </p>
          </div>
        </div>
      </section>

      {/* Service 1: Réparation et Maintenance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-red-100 p-4 rounded-lg">
                  <Wrench className="h-10 w-10 text-red-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ml-4">
                  Réparation Machine et Poste Soudure
                </h2>
              </div>
              
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Nous proposons des services de <strong className="text-gray-900">réparation de postes à souder</strong>, 
                ainsi que des services de <strong className="text-gray-900">maintenance et d'entretien électronique</strong> pour 
                les équipements de soudage industriels et professionnels.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    Diagnostic des pannes et identification des problèmes techniques
                  </p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    Réparation des cartes électroniques et autres composants critiques
                  </p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    Étalonnage et calibration des équipements pour une performance optimale
                  </p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    Remplacement des pièces défectueuses ou endommagées
                  </p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    Remise à neuf de divers types de postes à souder (TIG, MIG/MAG et plasma)
                  </p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    Solutions de maintenance préventive pour prolonger la durée de vie de vos équipements
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div>
              <div className="mb-8">
                <img
                  src="/1.jpg"
                  alt="Réparation Machine et Poste Soudure"
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-none shadow-lg bg-gradient-to-br from-red-50 to-white">
                  <CardContent className="p-6 text-center">
                    <Settings className="h-12 w-12 text-red-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">TIG</h4>
                    <p className="text-sm text-gray-600">Soudage TIG professionnel</p>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-lg bg-gradient-to-br from-blue-50 to-white">
                  <CardContent className="p-6 text-center">
                    <Settings className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">MIG/MAG</h4>
                    <p className="text-sm text-gray-600">Soudage MIG/MAG avancé</p>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-lg bg-gradient-to-br from-green-50 to-white">
                  <CardContent className="p-6 text-center">
                    <Settings className="h-12 w-12 text-green-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Plasma</h4>
                    <p className="text-sm text-gray-600">Découpe plasma de précision</p>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-lg bg-gradient-to-br from-orange-50 to-white">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Maintenance</h4>
                    <p className="text-sm text-gray-600">Entretien préventif</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Formation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            {/* Image - Left Side for variation */}
            <div className="mb-12 lg:mb-0 order-2 lg:order-1">
              <div className="mb-8">
                <img
                  src="/2.jpg"
                  alt="Formation professionnelle"
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-none shadow-lg bg-gradient-to-br from-purple-50 to-white">
                  <CardContent className="p-6 text-center">
                    <GraduationCap className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Usinage CNC</h4>
                    <p className="text-sm text-gray-600">Formation technique</p>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-lg bg-gradient-to-br from-red-50 to-white">
                  <CardContent className="p-6 text-center">
                    <Wrench className="h-12 w-12 text-red-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Soudage</h4>
                    <p className="text-sm text-gray-600">Techniques avancées</p>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-lg bg-gradient-to-br from-blue-50 to-white">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Inspection</h4>
                    <p className="text-sm text-gray-600">Contrôle qualité</p>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-lg bg-gradient-to-br from-green-50 to-white">
                  <CardContent className="p-6 text-center">
                    <Award className="h-12 w-12 text-green-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">CAO/DAO</h4>
                    <p className="text-sm text-gray-600">Conception et modélisation</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <GraduationCap className="h-10 w-10 text-blue-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ml-4">
                  Formation
                </h2>
              </div>
              
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Nous offrons un <strong className="text-gray-900">accompagnement en partenariat avec IOTA CENTER</strong> dans 
                les phases de diagnostic et de la mise en place d'un plan d'action en formation selon une démarche coopérative 
                d'ingénierie de la formation.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="h-6 w-6 text-blue-600 mr-2" />
                  Modules de Formation
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full px-2 py-1 text-xs font-semibold mr-3 mt-0.5">1</span>
                    <span className="text-gray-600"><strong className="text-gray-900">Usinage CNC</strong> - Formation complète sur les machines à commande numérique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full px-2 py-1 text-xs font-semibold mr-3 mt-0.5">2</span>
                    <span className="text-gray-600"><strong className="text-gray-900">Soudage</strong> - Techniques professionnelles et certification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full px-2 py-1 text-xs font-semibold mr-3 mt-0.5">3</span>
                    <span className="text-gray-600"><strong className="text-gray-900">Inspection</strong> - Contrôle qualité et normes de sécurité</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full px-2 py-1 text-xs font-semibold mr-3 mt-0.5">4</span>
                    <span className="text-gray-600"><strong className="text-gray-900">Conception et modélisation CAO/DAO</strong> - Outils de conception assistée par ordinateur</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <p className="text-blue-900 text-sm">
                  <strong>Partenaire:</strong> IOTA CENTER - Centre de formation reconnu pour l'excellence de ses programmes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Découpe et perçage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-4 rounded-lg">
                  <Scissors className="h-10 w-10 text-orange-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ml-4">
                  Découpe et perçage
                </h2>
              </div>
              
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                En plus de <strong className="text-gray-900">la fourniture de nos poutrelles</strong>, nous proposons également des 
                <strong className="text-gray-900"> services de préfabrication à la demande de nos clients</strong>, en lui fournissant 
                des multiples prestations et services conformément à ses exigences techniques et plans, entre autres, 
                la <strong className="text-gray-900">découpe, le perçage, le poinçonnage, l'oxycoupage</strong> et 
                l'<strong className="text-gray-900">assistance technique</strong> pour répondre aux besoins spécifiques de ses projets.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    Découpe sur mesure selon vos spécifications techniques
                  </p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    Perçage de précision adapté à vos besoins
                  </p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    Poinçonnage professionnel pour tous types de profilés
                  </p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    Oxycoupage pour les pièces de grande dimension
                  </p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    Assistance technique pour la réalisation de vos plans
                  </p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">
                    Respect strict de vos exigences et délais de livraison
                  </p>
                </div>
              </div>
            </div>

            {/* Images */}
            <div>
              <div className="mb-8">
                <img
                  src="/6.jpg"
                  alt="Découpe et perçage"
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <img
                    src="/7.jpg"
                    alt="Service de découpe"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                </div>
                <div className="relative">
                  <img
                    src="/8.jpg"
                    alt="Service de perçage"
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-lg shadow-xl p-8 lg:p-12 text-white">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Besoin de nos services ?
              </h2>
              <p className="text-lg mb-8 text-gray-100">
                Contactez-nous pour discuter de vos besoins en réparation ou en formation professionnelle
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium text-white hover:bg-white hover:text-red-600 transition-all duration-200"
              >
                Demander un devis
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default ServicesPage;
