/**
 * Script to copy images from products/images to public directory
 */
const fs = require('fs');
const path = require('path');

// Define source and destination directories
const sourceDir = 'products/images';
const destBaseDir = 'public';

// Check if source directory exists
if (!fs.existsSync(sourceDir)) {
  console.error(`Source directory ${sourceDir} doesn't exist!`);
  process.exit(1);
}

// List of image files from the CSV
const imageFiles = [
  'images/20230407094907.jpg',
  'images/20230323105421.jpg',
  'images/20230329084039.jpg',
  'images/20230323111853.JPG',
  'images/20230323113632.JPG',
  'images/20230330122123.png',
  'images/20220904184154.jpeg',
  'images/20230407111431.png',
  'images/20230407110828.jpeg',
  'images/20240919142327.png',
];

// Copy each image file
imageFiles.forEach(imagePath => {
  const sourceFile = path.join(sourceDir, path.basename(imagePath));
  const destFile = path.join(destBaseDir, imagePath);
  
  // Create directory if it doesn't exist
  const destDir = path.dirname(destFile);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
    console.log(`Created directory: ${destDir}`);
  }
  
  try {
    if (fs.existsSync(sourceFile)) {
      fs.copyFileSync(sourceFile, destFile);
      console.log(`Copied ${sourceFile} to ${destFile}`);
    } else {
      console.warn(`Source file ${sourceFile} not found!`);
    }
  } catch (error) {
    console.error(`Error copying ${sourceFile}: ${error.message}`);
  }
});

console.log('Image copying completed!');
