# Casa Oliari · web (Astro)

Web escaparate de Casa Oliari (Zahora, Cádiz). No gestiona reservas: deriva a WhatsApp y a las plataformas.

## Arrancar

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera la web estática en dist/
npm run preview    # sirve dist/ para revisarla
```

## Dónde se cambia cada cosa

| Qué | Archivo |
|---|---|
| Datos de la casa: WhatsApp, enlaces a plataformas, número de registro, capacidad, nota de opiniones | `src/data/casa.ts` |
| Todos los textos de la página | `src/i18n/es.ts` (un texto que termina en `*` sale marcado como «por confirmar») |
| Fotos | `src/assets/fotos/*.jpg`, generadas con `npm run fotos` a partir de `../img/fotos` (recortes y ajustes en `../scripts/optimizar_fotos.py`) |
| Vídeo de la portada | `public/video/jardin.mp4` |
| Estilos (paleta, tipografía, maquetación) | `src/styles/global.css` |
| Secciones | `src/components/*.astro` |

Al compilar, Astro genera AVIF y WebP de cada foto en varios tamaños. Las fuentes (Fraunces y DM Sans) van incluidas en el proyecto, sin Google Fonts.

## Pendiente antes de publicar

- Rellenar `src/data/casa.ts`: WhatsApp, enlaces, registro VUT y registro único, valoración.
- Sustituir las reseñas de ejemplo por reseñas reales, en `src/i18n/es.ts`.
- Dominio definitivo en `astro.config.mjs` (`site`).
- Comprimir el vídeo a 6–8 s y menos de 2 MB (MP4 H.264 + WebM).
- Traducciones `src/i18n/en.ts` y `de.ts`, y sus páginas `/en/` y `/de/`.
- Páginas legales (aviso legal, privacidad, cookies), «Cómo llegar» y «Guía de la zona».
- Revisar las condiciones de uso de los mapas de OpenStreetMap o elegir otro proveedor.

## Publicar en Coolify (VPS)

El repositorio incluye `Dockerfile` (compila con Node 24 y sirve con nginx) y `nginx.conf` (caché, compresión, cabeceras de seguridad y página 404).

1. En Coolify: **New Resource → Public/Private Repository**, y elegir `javimateo/Web-casa-zahora`, rama `main`.
2. **Build Pack:** `Dockerfile`.
3. **Base Directory:** `/web` (el Dockerfile está dentro de esa carpeta).
4. **Ports Exposes:** `80`.
5. **Domains:** el dominio definitivo (p. ej. `https://www.casaoliari.com`). Coolify gestiona el certificado HTTPS.
6. Opcional: activar **Auto Deploy** para que cada `git push` a `main` vuelva a publicar.

Antes del primer despliegue, poner ese mismo dominio en `site` de `astro.config.mjs`: lo usan la URL canónica, la imagen al compartir en redes y el sitemap.

Para probar la imagen en local (si tienes Docker):

```bash
docker build -t casa-oliari web
docker run --rm -p 8080:80 casa-oliari   # http://localhost:8080
```
