// copy-map-images.js
const fs = require('fs');
const path = require('path');

const timelineFiles = [
  './src/data/timeline-cow.json',
  './src/data/timeline-farmer.json'
];

const imageSourceDir = path.resolve(__dirname, 'src/assets/img');
const distDir = path.resolve(__dirname, 'dist');

// fallback images that are always needed
const fallbackImages = [
'visual-digitaler-kuhstall.png',
  'map-digitaler-kuhstall.png',
  'map-digitaler-kuhstall-text-de.png',
  'map-digitaler-kuhstall-text-fr.png',
  'map-digitaler-kuhstall-text-en.png',
];

const usedImages = new Set(fallbackImages);

for (const file of timelineFiles) {
  const json = JSON.parse(fs.readFileSync(file, 'utf-8'));
  json.forEach(step => {
    if (step.mapImage) usedImages.add(step.mapImage);
  });
}

if (!fs.existsSync(distDir)) {
  console.error(`❌ dist/ folder does not exist. Please run the build first.`);
  process.exit(1);
}

usedImages.forEach(filename => {
  const srcPath = path.join(imageSourceDir, filename);
  const destPath = path.join(distDir, filename);

  if (!fs.existsSync(srcPath)) {
    console.warn(`⚠️ Image not found: ${filename}`);
    return;
  }

  fs.copyFileSync(srcPath, destPath);
  console.log(`✅ Copied: ${filename}`);
});
