const categories = [
  {
    id: "poutrelles",
    title: "Poutrelles",
    description: "SAN METAL BY BEN AMOR, spécialiste reconnu dans le domaine métallurgique, met à votre disposition une large variété de poutrelles en acier carbone aux performances mécaniques éprouvées. Robustes, pratiques et conçues pour durer, elles se distinguent par leur résistance élevée, leur encombrement réduit et leur facilité d'installation. Ces poutrelles sont utilisées aussi bien dans les charpentes métalliques du secteur du bâtiment que dans l'industrie lourde, ferroviaire et éolienne, offrant ainsi fiabilité et sécurité aux structures mécano-soudées.",
    image: "/assets/images/thumbnails/poutrelles/category.jpg"
  },
  {
    id: "toles",
    title: "Tôles",
    description: "Chez SAN METAL BY BEN AMOR, nous vous proposons une sélection complète de tôles métalliques conformes aux normes de qualité les plus strictes. Chaque tôle est soumise à des contrôles rigoureux portant sur l'épaisseur, la composition, les propriétés mécaniques et l'état de surface, garantissant une constance optimale. Grâce à notre service de découpe sur mesure, nous vous accompagnons dans la réalisation de vos projets spécifiques en vous assurant précision, durabilité et accompagnement technique dédié.",
    image: "/assets/images/thumbnails/toles/category.jpg"
  },
  {
    id: "tubes",
    title: "Tubes soudés en acier",
    description: "Nos tubes soudés sont obtenus par un procédé de formage et de soudage continu, sans ajout de matière extérieure, assurant une excellente homogénéité. Disponibles en acier laminé à chaud, à froid ou galvanisé, ils respectent les normes NF EN 10219-1 et 2. Plusieurs nuances d'acier sont proposées (S235, S275, S355), adaptées aux traitements de galvanisation et aux différentes applications. Offerts en longueurs standards de 6 m ou sur demande, nos tubes couvrent une large plage d'épaisseurs selon le procédé de fabrication, garantissant polyvalence et fiabilité.",
    image: "/3.jpg"
  },
  {
    id: "tube_galvanise",
    title: "Tube galvanisé",
    description: "TUBES CARRÉS ET RECTANGULAIRES EN ACIER GALVANISÉ. Particuliers ou professionnels, vous êtes à la recherche de matériaux solides en acier galvanisé pour vos projets de serres, hangars, et petites constructions? SAN METAL By Ben Amor, vous propose un vaste choix de tubes carrés et rectangulaires et de en acier galvanisé.",
    image: "/assets/images/thumbnails/Gvz4K6BZ/tube-carre-acier-20x20-1-348x225-1.jpg"
  },
  {
    id: "panneaux_sandwich",
    title: "Panneaux Sandwich",
    description: "SAN METAL BY BEN AMOR met à votre disposition les panneaux sandwich, une solution moderne, économique et performante pour l'isolation et la construction. Légers, robustes et faciles à poser, ils servent pour les toitures, façades, cloisons intérieures ou chambres froides. Leur structure, composée de deux parements métalliques enserrant un isolant, offre une excellente protection contre les variations climatiques et assure une longévité accrue aux bâtiments industriels, commerciaux ou agricoles.",
    image: "/assets/images/thumbnails/panneaux_sandwich/category.jpg"
  },
  {
    id: "lames_rideaux",
    title: "Lames rideaux et accessoires portes",
    description: "SAN METAL BY BEN AMOR propose un large choix de lames rideaux et d'accessoires pour portes en Tunisie. Nous fournissons différents modèles : lames planes, perforées, bombées type C, ainsi que les lames finales et tous les accessoires nécessaires à l'installation. Solides et esthétiques, nos solutions répondent aux besoins des professionnels recherchant sécurité et durabilité.",
    image: "/assets/images/thumbnails/lames_rideaux/category.jpg"
  },
  {
    id: "pannes",
    title: "Pannes C et Z",
    description: "Découvrez chez SAN METAL BY BEN AMOR des pannes C et Z fiables et robustes, utilisées comme éléments structurels dans la construction métallique. Fabriquées à partir de bandes d'acier formées à froid, elles garantissent une grande précision dimensionnelle et une solidité remarquable. Ces profils sont conçus pour répondre aux exigences des charpentes modernes tout en assurant stabilité et résistance.",
    image: "/assets/images/thumbnails/pannes_c_z/category.jpg"
  },
  {
    id: "fer_marchands",
    title: "Fer marchands",
    description: "SAN METAL BY BEN AMOR met à disposition une gamme complète de fers marchands : cornières, plats, carrés, ronds, T et U. Tous nos produits subissent des contrôles rigoureux pour garantir une qualité constante et homogène. Nous offrons également un service de découpe personnalisée, permettant de répondre efficacement aux besoins spécifiques de chaque projet.",
    image: "/assets/images/thumbnails/23fS3VXp/3f90d4db-31f2-45c1-ae2b-6c2efb961057.jpg"
  },
  {
    id: "accessoires_charpente",
    title: "Accessoires Charpente",
    description: "SAN METAL BY BEN AMOR propose un vaste choix d'accessoires pour charpentes métalliques, adaptés à tout type de projet. Notre équipe technique et commerciale est disponible pour vous accompagner et vous orienter vers les solutions les plus pertinentes afin d'assurer la solidité et la durabilité de vos structures.",
    image: "/assets/images/thumbnails/accessoires_charpente/category.jpg"
  },
  {
    id: "aciers_speciaux",
    title: "Aciers Spéciaux",
    description: "Avec SAN METAL BY BEN AMOR, vous avez accès à une gamme variée d'aciers spéciaux aux caractéristiques mécaniques et chimiques conçues pour répondre aux applications les plus exigeantes. Respectant des standards de qualité stricts, nos aciers garantissent performance et fiabilité. Notre équipe d'experts est prête à vous conseiller et à vous proposer des solutions adaptées à vos projets.",
    image: "/assets/images/thumbnails/20230407110828.jpeg"
  },
  {
    id: "ossature_metallique",
    title: "Profilés galvanisé pour placo platre",
    description: "L'ossature métallique proposée par SAN METAL BY BEN AMOR combine robustesse, flexibilité et rapidité de mise en œuvre. Préfabriquée en atelier selon les plans, elle se monte facilement sur site, réduisant considérablement les délais de construction. Résistante aux agressions extérieures, elle ne nécessite aucun traitement particulier et constitue un choix idéal pour des structures modernes et durables.",
    image: "/assets/images/thumbnails/ossature_metallique/category.jpg"
  },
  {
    id: "inox",
    title: "Inox",
    description: "SAN METAL BY BEN AMOR vous propose une vaste gamme de produits en acier inoxydable, alliant résistance à la corrosion, durabilité et respect des normes sanitaires. Nous offrons plusieurs nuances recherchées (304L, 316L) avec des finitions variées, parfaitement adaptées aux industries agroalimentaires, médicales, architecturales et décoratives. Nos contrôles qualité assurent traçabilité et fiabilité à chaque étape.",
    image: "/assets/images/thumbnails/inox/category.jpg"
  },
  {
    id: "aluminium",
    title: "Aluminium",
    description: "Découvrez la gamme aluminium de SAN METAL BY BEN AMOR : légère, résistante et moderne. Nous proposons des tôles, profilés, barres et systèmes architecturaux pour une multitude d'applications industrielles, décoratives ou constructives. Nos alliages et finitions diversifiés garantissent des solutions adaptées à vos besoins techniques tout en apportant une touche esthétique contemporaine.",
    image: "/assets/images/thumbnails/aluminium/category.jpg"
  },
  {
    id: "decoupe_laser",
    title: "Découpe Laser",
    description: "SAN METAL BY BEN AMOR met à votre disposition un service de découpe laser haute précision, capable de réaliser des formes complexes sur acier, inox et aluminium. Cette technologie assure des coupes nettes, des tolérances minimales et une finition impeccable. Nous proposons également des services complémentaires comme le pliage et l'usinage pour vous livrer des pièces prêtes à l'emploi.",
    image: "/assets/images/thumbnails/decoupe_laser/category.jpg"
  }
];

export const getCategory = (id) => {
  return categories.find(category => category.id === id);
};

export const getAllCategories = () => {
  return categories;
};

export default categories;
