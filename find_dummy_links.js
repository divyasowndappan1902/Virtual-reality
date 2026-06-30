const fs = require('fs');
const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    const lines = fs.readFileSync(file, 'utf8').split('\n');
    lines.forEach((line, index) => {
        if (line.includes('href="#"')) {
            console.log(`${file}:${index + 1}: ${line.trim()}`);
        }
    });
});
