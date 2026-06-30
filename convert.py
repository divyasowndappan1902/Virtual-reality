import os
from PIL import Image

src_dir = r"C:\Users\Admin\.gemini\antigravity\brain\28197d70-f1f9-4d2c-98c1-e605a7fe7813"
dest_dir = r"c:\Users\Admin\Desktop\virtual reality"

images = [
    ("vr_img_1_1782714985869.png", "vr_content_1.webp"),
    ("vr_img_2_1782714997164.png", "vr_content_2.webp"),
    ("vr_img_3_1782715009359.png", "vr_content_3.webp"),
    ("vr_img_4_1782715022602.png", "vr_content_4.webp"),
    ("vr_img_5_1782715034883.png", "vr_content_5.webp"),
    ("vr_img_6_1782715046290.png", "vr_content_6.webp")
]

for src_name, dest_name in images:
    src_path = os.path.join(src_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    
    if os.path.exists(src_path):
        try:
            with Image.open(src_path) as img:
                img.thumbnail((800, 800))
                img.save(dest_path, "webp", quality=60)
                
                q = 50
                while os.path.getsize(dest_path) > 100 * 1024 and q > 10:
                    img.save(dest_path, "webp", quality=q)
                    q -= 10
                print(f"Final {dest_name}: {os.path.getsize(dest_path) / 1024:.2f} KB")
        except Exception as e:
            print(f"Failed to process {src_name}: {e}")
    else:
        print(f"File not found: {src_path}")
