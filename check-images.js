const fs = require('fs');
const path = require('path');
const products = require('./src/data/products.js').products;

console.log('🔍 VÉRIFICATION DES IMAGES DU CATALOGUE 🔍\n');

// Vérifier la structure des dossiers
const imagesDir = path.join(__dirname, 'public', 'assets', 'images');
console.log(`📁 Dossier images: ${imagesDir}`);

if (!fs.existsSync(imagesDir)) {
  console.log('❌ Le dossier images n\'existe pas !');
  console.log('Création du dossier...');
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log('✅ Dossier créé');
} else {
  console.log('✅ Dossier images trouvé');
}

// Liste des images dans le dossier
const existingFiles = fs.existsSync(imagesDir) ? fs.readdirSync(imagesDir) : [];
console.log(`\n📸 Images trouvées dans le dossier: ${existingFiles.length}`);

// Vérifier chaque produit
console.log('\n📋 VÉRIFICATION DES PRODUITS:');
let missingImages = 0;

products.forEach(product => {
  const fileName = product.image.split('/').pop();
  const filePath = path.join(imagesDir, fileName);
  const exists = fs.existsSync(filePath);
  
  if (exists) {
    const stats = fs.statSync(filePath);
    const sizeKB = Math.round(stats.size / 1024);
    console.log(`✅ ${fileName} - ${sizeKB} KB (${product.name})`);
  } else {
    console.log(`❌ ${fileName} - MANQUANTE (${product.name})`);
    missingImages++;
  }
});

// Vérifier les URLs
console.log('\n🌐 URLs à tester dans le navigateur:');
products.slice(0, 3).forEach(product => {
  console.log(`   http://localhost:3000${product.image}`);
});



// Statistiques
console.log('\n📊 STATISTIQUES:');
console.log(`   Total des produits: ${products.length}`);
console.log(`   Images présentes: ${products.length - missingImages}`);
console.log(`   Images manquantes: ${missingImages}`);

if (missingImages > 0) {
  console.log('\n⚠️  RECOMMANDATIONS:');
  console.log('   1. Placez toutes les images dans public/assets/images/');
  console.log('   2. Assurez-vous que les noms correspondent exactement');
  console.log('   3. Les extensions doivent être .jpg, .png, etc.');
  
  console.log('\n📝 Liste des images nécessaires:');
  products.forEach(p => {
    const fileName = p.image.split('/').pop();
    console.log(`   - ${fileName}`);
  });
}

console.log('\n✨ Vérification terminée !');

