"""Prepara las fotos originales para la web en Astro.

Aplica los mismos recortes y ajustes de color que scripts/optimizar_fotos.py y guarda
JPEG de alta calidad en web/src/assets/fotos/. Astro genera a partir de ellas los AVIF/WebP
en varios tamaños al compilar. También copia el vídeo de la portada a web/public/video/.

Uso (desde la carpeta web):  npm run fotos
"""
import pathlib
import shutil
import sys

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
from optimizar_fotos import FOTOS, SRC, RAIZ  # noqa: E402
from PIL import Image, ImageEnhance, ImageOps  # noqa: E402

OUT = RAIZ / "web" / "src" / "assets" / "fotos"
VIDEO_OUT = RAIZ / "web" / "public" / "video"
LADO_MAX = 2400
AMPLIADAS = {"foto_02.jpg", "foto_06.jpg", "foto_12.jpg", "foto_13.jpg"}  # detalle real ~1000 px


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for nombre, (archivo, aj) in FOTOS.items():
        im = ImageOps.exif_transpose(Image.open(SRC / archivo)).convert("RGB")
        if "crop" in aj:
            l, t, r, b = aj["crop"]
            w, h = im.size
            im = im.crop((int(l * w), int(t * h), int(r * w), int(b * h)))
        if "sat" in aj:
            im = ImageEnhance.Color(im).enhance(aj["sat"])
        limite = 1024 if archivo in AMPLIADAS else LADO_MAX
        if max(im.size) > limite:
            im.thumbnail((limite, limite), Image.LANCZOS)
        dst = OUT / f"{nombre}.jpg"
        im.save(dst, "JPEG", quality=90, optimize=True, progressive=True)
        print(f"{nombre}: {im.width}x{im.height}, {dst.stat().st_size // 1024} KB")

    VIDEO_OUT.mkdir(parents=True, exist_ok=True)
    shutil.copy2(RAIZ / "img" / "videos" / "video_01.mp4", VIDEO_OUT / "jardin.mp4")
    print("vídeo copiado: public/video/jardin.mp4")


if __name__ == "__main__":
    main()
