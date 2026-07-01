import glob
import re

files = glob.glob('*.html')

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Regex to find the How It Works section
    pattern = re.compile(r'\s*<section data-aos="fade-up" class="section section-dark text-center">\s*<span class="section-subtitle">PROCESS</span>\s*<h2 class="section-title">How It Works</h2>.*?<\/section>', re.DOTALL)
    
    new_content = pattern.sub('', content)
    
    if new_content != content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Removed from {file}")
