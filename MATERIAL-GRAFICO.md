# Casa Oliari · Material gráfico disponible

> Revisión de `img/fotos` (33 fotos) e `img/videos` (8 vídeos). 5 de noviembre de 2026.

## 1. Resumen

- **Lo mejor del material:** el exterior. Hay jardín con olivos, hamaca, pérgola con buganvillas, fachada encalada, el cartel «Casa Oliari» en la entrada, una foto de dron y buenas fotos de playa y atardecer. Transmite justo lo que queremos: natural, luminoso y tranquilo.
- **Lo más flojo:** los dormitorios (no hay ninguna foto, solo vídeos), los baños (fotos pobres) y la cocina (correcta, sin más).
- **Resolución:** 16 fotos miden unos 1024 px de ancho (01, 03–05, 07–09, 11, 14–20 y 31). Sirven para la galería y las tarjetas, pero no para fondos a pantalla completa. Las de 3000–4000 px (21, 22, 24–28, 30, 32) son las candidatas a imágenes grandes.
- **Ojo:** las fotos 02, 06, 12 y 13 miden 6048 × 4032 px pero solo pesan unos 400 KB. Están ampliadas a partir de una imagen pequeña, así que su calidad real es la de una foto de unos 1000 px.
- **Vídeos:** los 8 son **verticales** (1080 × 1920) y cortos (6–30 s), hechos con móvil. Son perfectos para la portada en móvil y para Instagram o Reels.

## 2. Preguntas para el propietario

1. **¿Cuál es la decoración actual del salón?** Las fotos muestran tres épocas distintas: sofás de rayas (03, 19, 21), fundas blancas (10), sofá azul (32) y cojines de flores (26). En la web solo debe salir la actual.
2. **¿De quién son las fotos?** Varias están hechas con cámaras profesionales: Sony A900 en 2012 (02, 06, 12, 13), Sony A7R en 2015 (10) y Sony A99 II en 2019 (23, 33). Si las hizo un fotógrafo, hay que confirmar que se pueden usar en la web.
3. **¿Qué playa o pueblo sale en la foto 24?** Para poder rotularla bien.
4. **El vídeo 02 (30 s) se ve completamente negro** en el navegador. ¿Se ve bien en tu ordenador? Si es negro, se descarta.
5. **¿Hay fotos de los dormitorios y del baño de arriba?** Es el hueco más importante que tenemos.

## 3. Propuesta de uso por sección del wireframe

| Sección | Escritorio | Móvil | Notas |
|---|---|---|---|
| **Hero** | **25** (fachada con césped), recortada en horizontal. Alternativa: **22** (dron) | **Vídeo 01** (del olivo a la casa, vertical) | El vídeo vertical encaja perfecto en móvil |
| **La casa** (imagen vertical) | **28** (desayuno en la terraza) o **29** (hamaca) | igual | A la 28 hay que recortarle la sombra del fotógrafo |
| **Puntos fuertes** | Jardín **04**, chimenea **15**, terraza **05**, playa **27** | igual | 05 y 04 tienen el HDR muy saturado: hay que suavizarlo |
| **Galería · Exterior** | 08, 09, 25, 04, 11, 20, 29, 05, 14, 23, 01, 07, 17, 18, 22, 33 | igual | Hay que quitar repetidas: quedarse con unas 8–10 |
| **Galería · Salón** | La que corresponda a la decoración actual (21, 26 o 32) + 15 | igual | Pendiente de la pregunta 1 |
| **Galería · Cocina** | 13, 12 | igual | 12 enseña la cocina abierta al comedor |
| **Galería · Dormitorios** | — (capturas de los vídeos 05, 06 y 08 como solución provisional) | igual | **Hacen falta fotos** |
| **Galería · Baños** | 06, 02 | igual | Flojas; mejor rehacerlas |
| **Galería · Entorno** | 27, 24, 30, 31 | igual | — |
| **La zona** | Playas **27**, naturaleza **30** (pasarela entre dunas), atardecer **31** | igual | Faltan Vejer y gastronomía: hay que hacer fotos propias o usar fotos con licencia libre |
| **Cuándo venir** | Verano **27**, primavera y otoño **30** (dunas en flor), invierno **15** (chimenea) | igual | — |
| **Cómo llegar / pie** | **08** (cartel «Casa Oliari» en la entrada) y **22** (dron) | igual | La 08 es la foto con más «marca» |
| **Redes / Reels** | Vídeos 01, 03, 04, 07 | — | Se pueden montar en un reel de 15 s |

## 4. Tratamiento de las fotos (antes de publicarlas)

- **Corrección suave y homogénea:** bajar la saturación del HDR del móvil (01, 04, 05, 14), enderezar las verticales de los interiores (02, 21) y unificar el tono cálido.
- **Exportación para la web:** AVIF y WebP en 3 tamaños (640, 1280 y 1920 px), cada foto por debajo de 250 KB, y carga diferida.
- **Vídeo del hero:** recortar 6–8 s en bucle, sin audio, a 720 × 1280 en MP4 (H.264) y WebM, por debajo de 2 MB, con una foto fija de reserva.
- **Originales:** se quedan tal cual en `img/`, y lo optimizado irá en la carpeta de la web.

## 5. Fotos que faltan (para una sesión futura)

1. Los 2 dormitorios, con luz natural y la cama hecha.
2. El baño completo de arriba.
3. El salón con la decoración actual y la chimenea encendida (al atardecer).
4. El jardín a la hora dorada, con la mesa puesta.
5. Un detalle con atmósfera: café en la terraza, sombrero y toalla de playa.
6. El camino a pie hasta la playa de La Mangueta.
7. Vejer, y un plato de atún o pescaíto, para la sección «La zona».
