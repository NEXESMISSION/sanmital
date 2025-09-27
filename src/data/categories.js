const categories = [
  {
    id: "poutrelles",
    title: "Poutrelles",
    description: "SAN METAL BY BEN AMOR, expert en produits métallurgiques de haute qualité, propose une gamme complète de poutrelles aciers conçues au fer carbone présentant des résistances mécaniques garanties.\n\nLa poutrelle acier se distingue par son excellente résistance, sa facilité de mise en œuvre, son encombrement optimisé et sa durabilité exceptionnelle. Nos poutrelles sont utilisées dans divers secteurs industriels pour la fabrication de structures mécano-soudées performantes.\nEssentielles dans le secteur du bâtiment pour la réalisation de charpentes métalliques, nos poutrelles sont également prisées dans l'industrie lourde, éolienne et ferroviaire pour leur fiabilité.",
    image: "/assets/images/products/poutrelles/category.jpg"
  },
  {
    id: "toles",
    title: "Tôles",
    description: "SAN METAL BY BEN AMOR, référence dans le domaine des produits métallurgiques, vous propose une vaste sélection de tôles de qualité supérieure. Chaque produit est rigoureusement contrôlé selon un processus qualité exigeant et continu, garantissant des tôles aux caractéristiques constantes et fiables. Nos contrôles portent sur l'épaisseur, les propriétés mécaniques, la composition métallurgique et l'état de surface, avec une attention particulière à la qualité des revêtements zinc. Notre service de découpe personnalisée vous offre des solutions précises et adaptées à vos projets spécifiques, avec un accompagnement expert à chaque étape.",
    image: "/assets/images/products/toles/category.jpg"
  },
  {
    id: "tubes",
    title: "Tubes soudés en acier",
    description: "Nos tubes soudés sont fabriqués selon un processus de précision impliquant le formage et le soudage en continu d'un feuillard métallique, sans aucun apport de matière supplémentaire. Ils sont disponibles en versions laminées à chaud, à froid ou galvanisées, conformes aux normes NF EN 10219 1 et 2. Nous proposons différentes nuances d'acier (S 235, S 275, S 355) selon la norme NF EN 10025, parfaitement adaptées à la galvanisation.\nLes désignations techniques (S235 JRH, S275 JOH, S355 J2H) indiquent la limite d'élasticité et la résistance aux chocs à différentes températures. Nos tubes sont disponibles en longueur standard de 6m ou en grandes longueurs sur demande, avec des épaisseurs variant selon le procédé de fabrication: 0.9-6mm (laminé à chaud), 0.7-3mm (laminé à froid) et 0.8-3mm (galvanisé).",
    image: "/assets/images/products/tubes/category.jpg"
  },
  {
    id: "panneaux_sandwich",
    title: "Panneaux Sandwich",
    description: "SAN METAL BY BEN AMOR propose une large gamme de panneaux sandwich TUNISCO qui offre la solution la plus pratique et la plus économique pour une longue durée. Les panneaux sandwich sont utilisés comme éléments de construction modernes, légers et robustes, pour recouvrir les toits et les façades des bâtiments, pour créer des cloisons intérieures isolées ou des chambres froides. Les panneaux sandwich sont généralement utilisés dans les installations industrielles, les bâtiments commerciaux, les entrepôts frigorifiques, les bâtiments sociaux, les centrales électriques, l'agriculture et les bâtiments d'élevage. Les panneaux sandwich, vous protègent contre les facteurs externes en prenant place tout autour de votre bâtiment et sur le toit, sont produits en remplissant un matériau isolant épais et à faible densité entre deux surfaces métalliques minces à haute densité.",
    image: "/assets/images/products/panneaux_sandwich/category.jpg"
  },
  {
    id: "lames_rideaux",
    title: "Lames rideaux et accessoires portes",
    description: "Retrouvez les meilleures lames rideaux en Tunisie. SAN METAL BY BEN AMOR se spécialise dans les larmes rideaux. Lame rideaux type C et les accessoires de portes. Lame finale, perforée, rideau plane, bombée type C.",
    image: "/assets/images/products/lames_rideaux/category.jpg"
  },
  {
    id: "pannes",
    title: "Pannes C et Z",
    description: "SAN METAL BY BEN AMOR, propose une large gamme de profilé panne Z et C, disponibles selon des dimensions et des épaisseurs variés. Pour toute demande spécifique merci de nous consulter, notre équipe de technico-commerciaux sera à votre disposition pour vous donner les meilleures solutions possibles.",
    image: "/assets/images/products/pannes_c_z/category.jpg"
  },
  {
    id: "fer_marchands",
    title: "Fer marchands",
    description: "SAN METAL BY BEN AMOR propose une large gamme de fer marchands fabriquée par laminage à chaud, qui présente une excellente soudabilité et une aptitude à la déformation qui génère des matériaux de qualité pour des usages décoratifs et structurels. Idéal pour la forge, ce produit est utilisé dans de nombreux domaines pour la réalisation des travaux de construction et de métallerie. Son acier est facile à mettre en forme et offre une résistance optimale.",
    image: "https://i.ibb.co/23fS3VXp/3f90d4db-31f2-45c1-ae2b-6c2efb961057.jpg"
  },
  {
    id: "accessoires_charpente",
    title: "Accessoires Charpente",
    description: "SAN METAL BY BEN AMOR, propose une large gamme d'accessoires charpente. Pour toute demande spécifique merci de nous consulter, notre équipe de technico-commerciaux sera à votre disposition pour vous donner les meilleures solutions possibles.",
    image: "/assets/images/products/accessoires_charpente/category.jpg"
  },
  {
    id: "aciers_speciaux",
    title: "Aciers Spéciaux",
    description: "SAN METAL BY BEN AMOR, spécialiste en commercialisation des produits métallurgiques, propose une large gamme d'aciers spéciaux aux propriétés mécaniques et chimiques adaptées à des applications industrielles exigeantes. Nos aciers spéciaux répondent aux normes les plus strictes en matière de qualité et de performance. Pour toute demande spécifique, notre équipe d'experts sera à votre disposition pour vous proposer les solutions les mieux adaptées à vos besoins.",
    image: "https://soquibat.tn/public/public/images/20230407110828.jpeg"
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
    description: "SAN METAL BY BEN AMOR propose une gamme étendue de produits en acier inoxydable répondant aux standards les plus exigeants en termes de durabilité, résistance à la corrosion et conformité sanitaire. Notre sélection d'inox comprend les nuances les plus recherchées (304L, 316L) avec diverses finitions de surface, parfaitement adaptées aux environnements industriels, agroalimentaires, médicaux et aux applications décoratives contemporaines. La qualité et la traçabilité de nos aciers inoxydables sont garanties par des contrôles rigoureux.",
    image: "/assets/images/products/inox/category.jpg"
  },
  {
    id: "aluminium",
    title: "Aluminium",
    description: "SAN METAL BY BEN AMOR vous offre une gamme diversifiée de solutions en aluminium alliant légèreté exceptionnelle, excellente résistance aux éléments et design contemporain. Notre catalogue comprend une variété de formats: tôles, profilés architecturaux, barres techniques et systèmes intégrés pour tous types de projets constructifs, industriels ou décoratifs. Nos alliages d'aluminium sélectionnés et nos finitions variées permettent de répondre précisément à vos exigences techniques et esthétiques spécifiques.",
    image: "/assets/images/products/aluminium/category.jpg"
  },
  {
    id: "decoupe_laser",
    title: "Découpe Laser",
    description: "SAN METAL BY BEN AMOR met à votre disposition un service de découpe laser de pointe pour tous types de métaux: acier, inox et aluminium. Notre technologie avancée permet d'obtenir des découpes d'une précision exceptionnelle même sur des formes géométriques complexes, avec des tolérances extrêmement serrées et une qualité de finition supérieure. En complément de la découpe, nous proposons des services de pliage et façonnage pour vous livrer des pièces entièrement finies, prêtes à être intégrées dans vos projets, conformément à vos plans techniques et cahiers des charges.",
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
