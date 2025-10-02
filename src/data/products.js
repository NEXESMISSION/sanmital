import poutrelles from './products/poutrelles';
import toles from './products/toles';
import tubes from './products/tubes';
import tubeGalvanise from './products/tube_galvanise';
import panneauxSandwich from './products/panneaux_sandwich';
import lamesRideaux from './products/lames_rideaux';
import pannes from './products/pannes';
import ferMarchands from './products/fer_marchands';
import accessoiresCharpente from './products/accessoires_charpente';
import aciersSpeciaux from './products/aciers_speciaux';
import ossatureMetallique from './products/ossature_metallique';
import inox from './products/inox';
import aluminium from './products/aluminium';
import decoupeLaser from './products/decoupe_laser';

// Combine all product categories
const products = [
  ...poutrelles,
  ...toles,
  ...tubes,
  ...tubeGalvanise,
  ...panneauxSandwich,
  ...lamesRideaux,
  ...pannes,
  ...ferMarchands,
  ...accessoiresCharpente,
  ...aciersSpeciaux,
  ...ossatureMetallique,
  ...inox,
  ...aluminium,
  ...decoupeLaser
];

// Get products by category
export const getProductsByCategory = (categoryId) => {
  // Map category IDs to the actual category values used in the products
  const categoryMap = {
    'poutrelles': 'poutrelles',
    'toles': 'toles',
    'tubes': 'tubes',
    'tube_galvanise': 'tube_galvanise',
    'panneaux_sandwich': 'panneaux_sandwich',
    'lames_rideaux': 'lames_rideaux',
    'pannes': 'pannes',
    'fer_marchands': 'fer_marchands',
    'accessoires_charpente': 'accessoires_charpente',
    'aciers_speciaux': 'aciers_speciaux',
    'ossature_metallique': 'ossature_metallique',
    'inox': 'inox',
    'aluminium': 'aluminium',
    'decoupe_laser': 'decoupe_laser'
  };
  
  const category = categoryMap[categoryId] || categoryId;
  return products.filter(product => product.category === category);
};

// Get a specific product by ID
export const getProduct = (id) => {
  return products.find(product => product.id === id);
};

// Get all products
export const getAllProducts = () => {
  return products;
};

// Get list of unique categories
export const getCategories = () => {
  const categories = new Set(products.map(product => product.category));
  return Array.from(categories);
};

export default products;
