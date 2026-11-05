"""Añade width y height a cada <img> de diseno/index.html según el archivo de su src.

Evita saltos de maquetación al cargar (CLS). Uso: python scripts/dimensiones_img.py
"""
import pathlib
import re
from PIL import Image

RAIZ = pathlib.Path(__file__).resolve().parent.parent
HTML = RAIZ / "diseno" / "index.html"


def main():
    s = HTML.read_text(encoding="utf-8")

    def poner(m):
        tag = m.group(0)
        tag = re.sub(r'\s(width|height)="\d+"', "", tag)
        src = re.search(r'\ssrc="([^"]+)"', tag)
        if not src:
            return tag
        ruta = (HTML.parent / src.group(1)).resolve()
        if not ruta.exists():
            print("No existe:", src.group(1))
            return tag
        w, h = Image.open(ruta).size
        return tag.replace("<img", f'<img width="{w}" height="{h}"', 1)

    s, n = re.subn(r"<img\b[^>]*>", poner, s)
    HTML.write_text(s, encoding="utf-8")
    print(f"{n} imágenes revisadas")


if __name__ == "__main__":
    main()
