"""Genera las imágenes optimizadas (WebP) para la web a partir de img/fotos.

Uso:  python scripts/optimizar_fotos.py
Salida: diseno/img/<nombre>-<ancho>.webp  (+ diseno/img/manifest.json)
Los originales de img/ no se tocan.
"""
import json
import pathlib
from PIL import Image, ImageOps, ImageEnhance

RAIZ = pathlib.Path(__file__).resolve().parent.parent
SRC = RAIZ / "img" / "fotos"
OUT = RAIZ / "diseno" / "img"
ANCHOS = (800, 1600)

# nombre web: (foto origen, ajustes)
#   sat: factor de saturación (<1 suaviza el HDR del móvil)
#   crop: (izq, arriba, der, abajo) en fracciones del original
#   anchos / q: tamaños y calidad WebP propios (por defecto 800 y 1600, calidad 78)
FOTOS = {
    "fachada-jardin-vertical": ("foto_25.jpg", {}),
    # Portada: la casa centrada y más grande, recortada a 4:5 para el arco
    "hero-casa":               ("foto_25.jpg", {"crop": (0.18, 0.05, 1.0, 0.819), "anchos": (800, 1200, 1600), "q": 72}),
    "jardin-hamaca":           ("foto_29.jpg", {"sat": 0.92}),
    "jardin-olivos":           ("foto_04.jpg", {"sat": 0.85}),
    "salon-chimenea":          ("foto_15.jpg", {}),
    "terraza-pergola":         ("foto_05.jpg", {"sat": 0.85}),
    "playa-arena":             ("foto_27.jpg", {}),
    "entrada-cartel":          ("foto_08.jpg", {}),
    "fachada-jardin":          ("foto_09.jpg", {"sat": 0.9}),
    "terraza-tumbonas":        ("foto_01.jpg", {"sat": 0.85}),
    "jardin-cesped":           ("foto_11.jpg", {"sat": 0.9}),
    "jardin-camino":           ("foto_20.jpg", {"sat": 0.9}),
    "pergola-buganvilla":      ("foto_14.jpg", {"sat": 0.85}),
    "terraza-sombra":          ("foto_23.jpg", {}),
    "mesa-terraza":            ("foto_07.jpg", {"sat": 0.9}),
    "vista-dron":              ("foto_22.jpg", {}),
    "desayuno-terraza":        ("foto_28.jpg", {"crop": (0, 0, 1, 0.80)}),
    "salon-sofa":              ("foto_21.jpg", {}),
    "salon-ventana":           ("foto_26.jpg", {}),
    "cocina":                  ("foto_13.jpg", {}),
    "cocina-comedor":          ("foto_12.jpg", {}),
    "bano-ducha":              ("foto_06.jpg", {}),
    "bano-banera":             ("foto_02.jpg", {}),
    "playa-atardecer":         ("foto_24.jpg", {}),
    "dunas-pasarela":          ("foto_30.jpg", {}),
    "atardecer":               ("foto_31.jpg", {}),
    "fachada-sombra":          ("foto_33.jpg", {}),
}


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    manifest = {}
    for nombre, (archivo, aj) in FOTOS.items():
        im = ImageOps.exif_transpose(Image.open(SRC / archivo)).convert("RGB")
        if "crop" in aj:
            l, t, r, b = aj["crop"]
            w, h = im.size
            im = im.crop((int(l * w), int(t * h), int(r * w), int(b * h)))
        if "sat" in aj:
            im = ImageEnhance.Color(im).enhance(aj["sat"])
        # Las fotos 02/06/12/13 están ampliadas: su detalle real es de ~1000 px
        max_real = 1024 if archivo in {"foto_02.jpg", "foto_06.jpg", "foto_12.jpg", "foto_13.jpg"} else im.width
        base = aj.get("anchos", ANCHOS)
        anchos = [a for a in base if a <= min(im.width, max_real)] or [min(im.width, max_real)]
        if min(im.width, max_real) not in anchos and min(im.width, max_real) < base[-1]:
            anchos.append(min(im.width, max_real))
        salida = []
        for a in sorted(set(anchos)):
            r = im.resize((a, round(im.height * a / im.width)), Image.LANCZOS)
            dst = OUT / f"{nombre}-{a}.webp"
            r.save(dst, "WEBP", quality=aj.get("q", 78), method=6)
            salida.append({"w": a, "h": r.height, "kb": dst.stat().st_size // 1024})
        manifest[nombre] = {"origen": archivo, "versiones": salida}
        print(nombre, [(s["w"], s["kb"]) for s in salida])
    (OUT / "manifest.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=False), encoding="utf-8")


if __name__ == "__main__":
    main()
