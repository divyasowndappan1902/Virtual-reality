import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]
pattern = re.compile(r'<img[^>]*src="logo_transparent\.png"[^>]*>')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = pattern.sub('<div class="theme-logo"></div>', content)
    
    if content != new_content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file}")
