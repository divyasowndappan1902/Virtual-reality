const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    let count = 0;
    const parts = content.split('<a ');
    for (let i = 1; i < parts.length; i++) {
        // Skip links that have data-target (tabs) or are already functional
        if (parts[i].includes('href="#"') && !parts[i].includes('data-target')) {
            parts[i] = parts[i].replace('href="#"', 'href="404.html"');
            count++;
        }
    }
    
    // Also check for dummy buttons <button class="btn-social">Google</button> in login.html
    // Replace with <button class="btn-social" onclick="window.location.href='404.html'">
    let btnContent = parts.join('<a ');
    let btnCount = 0;
    const btnParts = btnContent.split('<button ');
    for (let i = 1; i < btnParts.length; i++) {
        if (!btnParts[i].includes('type="submit"') && !btnParts[i].includes('onclick')) {
            // Replace first > with onclick
            btnParts[i] = btnParts[i].replace('>', ' onclick="window.location.href=\'404.html\'">');
            btnCount++;
        }
    }
    
    const newContent = btnParts.join('<button ');

    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log(`Updated ${file}: replaced ${count} links and ${btnCount} buttons.`);
    }
});
