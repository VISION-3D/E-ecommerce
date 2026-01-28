// build-fix.js - Script pour corriger les problèmes de build
const fs = require('fs');
const path = require('path');

console.log('🔧 Préparation du build pour Vercel...');

// Vérifier la structure
const checkStructure = () => {
  console.log('📁 Vérification de la structure...');
  
  const required = [
    'public/index.html',
    'src/App.js',
    'src/index.js',
    'package.json'
  ];
  
  required.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`✅ ${file}`);
    } else {
      console.log(`❌ ${file} MANQUANT`);
    }
  });
};

// Corriger les imports problématiques
const fixImports = () => {
  console.log('\n🔧 Correction des imports...');
  
  const files = [
    'src/App.js',
    'src/pages/home/home.page.jsx',
    'src/pages/catalogue/catalogue.page.jsx'
  ];
  
  files.forEach(file => {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      
      // Retirer les imports de swiper s'ils existent
      content = content.replace(/import.*from ['"]swiper\/.*['"];?\n?/g, '');
      content = content.replace(/import.*from ['"]swiper.*['"];?\n?/g, '');
      
      fs.writeFileSync(file, content);
      console.log(`✅ ${file} nettoyé`);
    }
  });
};

// Vérifier les chemins d'images
const checkImagePaths = () => {
  console.log('\n🖼️  Vérification des chemins d\'images...');
  
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  const imageFiles = [];
  
  function walkDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (imageExtensions.some(ext => filePath.toLowerCase().endsWith(ext))) {
        imageFiles.push(filePath);
      }
    });
  }
  
  if (fs.existsSync('public')) walkDir('public');
  
  console.log(`📸 ${imageFiles.length} images trouvées`);
  
  // Vérifier les références dans le code
  const codeFiles = ['src/App.js', 'src/pages/home/home.page.jsx'];
  codeFiles.forEach(file => {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8');
      const imageRefs = content.match(/src=["']([^"']*\.(jpg|jpeg|png|gif|webp))["']/gi) || [];
      console.log(`📄 ${file}: ${imageRefs.length} références d'images`);
    }
  });
};

// Exécuter les corrections
checkStructure();
fixImports();
checkImagePaths();

console.log('\n✅ Préparation terminée !');
console.log('\nCommandes à exécuter :');
console.log('1. git add .');
console.log('2. git commit -m "Fix build for Vercel"');
console.log('3. git push origin main');