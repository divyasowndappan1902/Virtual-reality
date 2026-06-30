const sharp = require('sharp');
const fs = require('fs');

const srcPath = "C:\\Users\\Admin\\.gemini\\antigravity\\brain\\c4941793-2885-42d4-bb63-1c2773802942\\jane_doe_portrait_1782814477693.png";
const destPath = "c:\\Users\\Admin\\Desktop\\virtual reality\\person_jane.webp";

async function convertImage() {
  let quality = 90;
  let buffer;
  let done = false;

  while (!done && quality > 10) {
    buffer = await sharp(srcPath).webp({ quality: quality }).toBuffer();
    if (buffer.length <= 100 * 1024) {
      done = true;
    } else {
      quality -= 10;
    }
  }
  
  if (buffer) {
    fs.writeFileSync(destPath, buffer);
    console.log(`Saved to ${destPath} with quality ${quality}, size: ${(buffer.length / 1024).toFixed(2)} KB`);
  }
}

convertImage().catch(console.error);
