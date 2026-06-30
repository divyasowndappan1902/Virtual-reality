const sharp = require('sharp');

const srcPath = 'c:\\Users\\Admin\\Desktop\\virtual reality\\person_alice.webp';
const destPath = 'c:\\Users\\Admin\\Desktop\\virtual reality\\person_jane.webp';

sharp(srcPath)
  .flop() // flip horizontally
  .webp({ quality: 80 })
  .toFile(destPath)
  .then(info => {
    console.log("Successfully flipped Alice's image to create a unique image for Jane!");
    console.log(info);
  })
  .catch(err => {
    console.error("Error:", err);
  });
