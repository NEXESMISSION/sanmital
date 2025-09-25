# Product Data Structure

Ce répertoire contient les données des produits organisées par catégorie. Chaque fichier correspond à une catégorie de produits spécifique.

## Structure des fichiers

- `poutrelles.js` - Produits de type poutrelles (HEB, HEA, IPE, UPN)
- `toles.js` - Produits de type tôles (laminées, galvanisées, etc.)
- `tubes.js` - Produits de type tubes (carrés, ronds, rectangulaires, etc.)
- `panneaux_sandwich.js` - Panneaux sandwich et portes frigorifiques
- `lames_rideaux.js` - Lames rideaux et accessoires portes
- `pannes.js` - Pannes de type C et Z
- `fer_marchands.js` - Produits de type fer marchands (cornières, fers carrés, etc.)
- `accessoires_charpente.js` - Accessoires pour charpentes
- `aciers_speciaux.js` - Produits en aciers spéciaux
- `ossature_metallique.js` - Produits pour ossature métallique

## Structure d'un produit

Chaque produit est défini avec la structure suivante:

```javascript
{
  id: "identifiant-unique-du-produit",
  title: "Titre du produit",
  image: "/assets/images/products/categorie/produit.jpg",
  description: "Description courte du produit",
  longDescription: "Description détaillée du produit expliquant ses caractéristiques et utilisations",
  category: "categorie-du-produit",
  specifications: [
    "Spécification 1",
    "Spécification 2",
    "Spécification 3",
    // etc.
  ]
}
```

## Comment mettre à jour les produits

1. **Ajouter un nouveau produit**: 
   - Ouvrez le fichier JS correspondant à la catégorie
   - Ajoutez un nouvel objet produit à la liste des produits
   - Assurez-vous que l'ID est unique

2. **Modifier un produit existant**:
   - Localisez le produit dans le fichier de sa catégorie
   - Modifiez les propriétés souhaitées

3. **Images des produits**:
   - Placez les images dans le dossier `/assets/images/products/[categorie]/`
   - Nommez l'image principale du produit avec le même ID que le produit: `[id-produit].jpg`
   - Pour l'image des spécifications, utilisez: `[id-produit]-spec.jpg`

## Importation dans l'application

Le fichier `products.js` à la racine du dossier `data` importe et combine tous les produits des différentes catégories. Vous n'avez pas besoin de modifier ce fichier lorsque vous ajoutez ou modifiez des produits dans les fichiers de catégorie.
