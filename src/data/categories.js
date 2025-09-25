const categories = [
  {
    id: "poutrelles",
    title: "Poutrelles",
    description: "SOQUIBAT Group, spécialiste en commercialisation des produits métallurgiques, propose une large gamme de poutrelles aciers conçues au fer carbone présentant un niveau minimal garanti de résistance à la traction.\n\nLa poutrelle acier, outre son excellente résistance, offre une mise en œuvre rapide, un encombrement réduit et une longévité exceptionnelle. Les poutrelles en acier sont utilisées dans des différents domaines pour la fabrication de sous-ensembles ou ensembles mécano-soudés.\nDans le bâtiment, elles sont couramment utilisées pour la fabrication de charpentes métalliques. Nous les retrouvons aussi comme outil de maintenance dans l'industrie lourde, éolienne et ferroviaire.",
    image: "/assets/images/products/poutrelles/category.jpg"
  },
  {
    id: "toles",
    title: "Tôles",
    description: "SOQUIBAT Group, spécialiste en commercialisation des produits métallurgiques, propose une large gamme de poutrelles aciers conçues. Dans un souci de vous garantir ce qu'il y a de mieux en matières de tôles, ces dernières sont soumises à plusieurs contrôles de qualité et ce d'une manière continue. Ainsi, vous avez l'assurance d'une bonne qualité de produit, uniforme et constante. Le contrôle se fait essentiellement au niveau de l'épaisseur, des caractéristiques mécaniques et de la composition de l'acier. Contrôle visuel de l'état de surface et contrôle de l'épaisseur du zinc. Nos Spécialistes de la découpe vous proposent un service innovant, sur-mesure, façonnant l'ensemble de vos besoins et répondant à chacune de vos spécificités.",
    image: "/assets/images/products/toles/category.jpg"
  },
  {
    id: "tubes",
    title: "Tubes soudés en acier",
    description: "Les tubes soudés sont élaborés par formage et soudage en continu, sans apport de matière, d'un feuillard laminé à chaud, laminé à froid ou galvanisé. Norme> NF EN 10219 1 et 2. Nuances de l'Acier> S 235, S 275, S 355. Acier selon NF EN 10025, apte à la galvanisation : courants : S235 JRH, S275 JOH, S355 J2H selon épaisseur ; Certificat sur demande : 2.2 pour S235 et S275 / 3.1B pour S355.\nLe « S » désignant Acier de construction : le nombre qui suit désignant la limite d'élasticité minimale en N/mm²:La limite d'élasticité peut être suivie d'une terminologie « JR » signifiant l'essai de résistance; JR=27 Joules à +20°C JO= 27 Joules à +0°C J2=27 Joules à -20°C K2=40 Joules à -20°C\nLongueur standards> 6m longueurs fixes et grandes longueurs sur demande. Epaisseurs> de 0.9 à 6mm pour le laminé à chaud ; de 0.7 à 3mm pour le laminé à froid ; de 0.8 à 3mm pour le galvanisé",
    image: "/assets/images/products/tubes/category.jpg"
  },
  {
    id: "panneaux_sandwich",
    title: "Panneaux Sandwich & Portes Frigorifiques",
    description: "SOQUIBAT Group propose une large gamme de panneaux sandwich TUNISCO qui offre la solution la plus pratique et la plus économique pour une longue durée. Les panneaux sandwich sont utilisés comme éléments de construction modernes, légers et robustes, pour recouvrir les toits et les façades des bâtiments, pour créer des cloisons intérieures isolées ou des chambres froides. Les panneaux sandwich sont généralement utilisés dans les installations industrielles, les bâtiments commerciaux, les entrepôts frigorifiques, les bâtiments sociaux, les centrales électriques, l'agriculture et les bâtiments d'élevage. Les panneaux sandwich, vous protègent contre les facteurs externes en prenant place tout autour de votre bâtiment et sur le toit, sont produits en remplissant un matériau isolant épais et à faible densité entre deux surfaces métalliques minces à haute densité.",
    image: "/assets/images/products/panneaux_sandwich/category.jpg"
  },
  {
    id: "lames_rideaux",
    title: "Lames rideaux et accessoires portes",
    description: "Retrouvez les meilleures lames rideaux en Tunisie. SOQUIBAT Group se spécialise dans les larmes rideaux. Lame rideaux type C et les accessoires de portes. Lame finale, perforée, rideau plane, bombée type C.",
    image: "/assets/images/products/lames_rideaux/category.jpg"
  },
  {
    id: "pannes",
    title: "Pannes C et Z",
    description: "SOQUIBAT, propose une large gamme de profilé panne Z et C, disponibles selon des dimensions et des épaisseurs variés. Pour toute demande spécifique merci de nous consulter, notre équipe de technico-commerciaux sera à votre disposition pour vous donner les meilleures solutions possibles.",
    image: "/assets/images/products/pannes_c_z/category.jpg"
  },
  {
    id: "fer_marchands",
    title: "Fer marchands",
    description: "SOQUIBAT propose une large gamme de fer marchands fabriquée par laminage à chaud, qui présente une bonne soudabilité et une aptitude à la déformation qui génère à son tour de bon matériaux pour des usages décoratifs. Idéal pour la forge ce produit est utilisé dans de nombreux domaines pour la réalisation des travaux en matière de bâtiment: Fabriqué par laminage à chaud, son acier est facile à mettre en forme.",
    image: "/assets/images/products/fer_marchands/category.jpg"
  },
  {
    id: "accessoires_charpente",
    title: "Accessoires Charpente",
    description: "SOQUIBAT, propose une large gamme d'accessoires charpente. Pour toute demande spécifique merci de nous consulter, notre équipe de technico-commerciaux sera à votre disposition pour vous donner les meilleures solutions possibles.",
    image: "/assets/images/products/accessoires_charpente/category.jpg"
  },
  {
    id: "aciers_speciaux",
    title: "Aciers Spéciaux",
    description: "SOQUIBAT, spécialiste en commercialisation des produits métallurgiques, propose une large gamme d'aciers spéciaux. Pour toute demande spécifique merci de nous consulter, notre équipe de technico-commerciaux sera à votre disposition pour vous donner les meilleures solutions possibles.",
    image: "/assets/images/products/aciers_speciaux/category.jpg"
  },
  {
    id: "ossature_metallique",
    title: "Ossature métallique",
    description: "Ce matériau s'adapte facilement et offre une souplesse architecturale intéressante. L'acier présente également l'avantage de n'avoir à subir aucun traitement contre les agressions extérieures. Rapidement installée, l'ossature métallique octroie un gain de temps considérable dans les travaux de construction. Prédécoupée et assemblée en atelier selon les plans du maître d'ouvrage, la charpente métallique est montée, souvent à sec, sur le terrain",
    image: "/assets/images/products/ossature_metallique/category.jpg"
  },
  {
    id: "inox",
    title: "Inox",
    description: "SOQUIBAT met à votre disposition une gamme complète de produits en acier inoxydable pour répondre aux exigences les plus strictes en matière de résistance à la corrosion et d'hygiène. Nos produits inox sont disponibles en différentes nuances (304L, 316L) et finitions pour s'adapter à tous types d'applications industrielles, agroalimentaires, pharmaceutiques ou architecturales.",
    image: "/assets/images/products/inox/category.jpg"
  },
  {
    id: "aluminium",
    title: "Aluminium",
    description: "SOQUIBAT propose une large sélection de produits en aluminium combinant légèreté, résistance à la corrosion et esthétique moderne. Notre gamme comprend des tôles, profilés, barres et systèmes complets pour la construction, l'industrie et la décoration. Disponibles dans différents alliages et finitions, nos produits aluminium s'adaptent parfaitement à vos besoins spécifiques.",
    image: "/assets/images/products/aluminium/category.jpg"
  },
  {
    id: "decoupe_laser",
    title: "Découpe Laser",
    description: "SOQUIBAT vous offre un service de découpe laser de haute précision pour l'acier, l'inox et l'aluminium. Cette technologie permet la réalisation de pièces complexes avec une qualité de coupe exceptionnelle et des tolérances minimales. Notre service comprend également le pliage des pièces découpées pour vous fournir des éléments prêts à l'emploi selon vos plans et spécifications.",
    image: "/assets/images/products/decoupe_laser/category.jpg"
  }
];

export const getCategory = (id) => {
  return categories.find(category => category.id === id);
};

export const getAllCategories = () => {
  return categories;
};

export default categories;
