import os
from PIL import Image

src_path = r"C:\Users\Admin\.gemini\antigravity\brain\c4941793-2885-42d4-bb63-1c2773802942\media__1782812062914.png"
dest_path = r"c:\Users\Admin\Desktop\virtual reality\person_jane.webp"

with Image.open(src_path) as img:
    q = 90
    img.save(dest_path, "webp", quality=q)
    while os.path.getsize(dest_path) > 100 * 1024 and q > 10:
        q -= 10
        img.save(dest_path, "webp", quality=q)

print(f"Saved to {dest_path} with size {os.path.getsize(dest_path) / 1024:.2f} KB")
