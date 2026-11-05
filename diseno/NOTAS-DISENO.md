# Casa Oliari · Notas de diseño

Registro de decisiones y de lo ya probado, para no repetirlo en pasadas futuras.

## Encargo

- **Qué es:** una web escaparate de una casa vacacional en Zahora (Cádiz). No reserva: deriva a WhatsApp o a las plataformas.
- **Para quién:** familias, sobre todo europeas, y parejas que buscan calma y naturaleza.
- **Su trabajo principal:** que en 30 segundos se entienda «jardín con olivos, casa encalada, playa a un paseo» y se pulse «Consultar disponibilidad».
- **Fijado por el cliente:** las tipografías Fraunces (títulos) y DM Sans (texto), el tono natural y relajado, y nada de emojis.

## Versión 1 (descartada el 5 de noviembre de 2026)

Revisada con la skill *frontend-design* de Anthropic, que la identifica como diseño por defecto:

- Fondo crema (`#FAF7F0`) con serif de alto contraste y botón terracota (`#A85A3E`). Es el primer rasgo «genérico» de la lista.
- Una etiqueta en mayúsculas y espaciada encima de **todos** los títulos.
- Textos separados por puntos medios («Zahora · Cabo de Trafalgar · Cádiz», «ES · EN · DE»…).
- Una flecha añadida a los enlaces («Cómo llegar →», «Leer la guía →»).
- Aparición con fundido y desplazamiento en cada sección, y zoom al pasar el ratón en todas las tarjetas.
- Tarjetas idénticas (mismo radio y misma sombra) para plantas, opiniones y canales de reserva.
- Arcos en tres sitios distintos (portada, temporadas y móvil), así que el arco dejaba de ser especial.

## Versión 2: plan

### Concepto (una frase)

**La casa vista a través de un arco encalado**: el arco andaluz es el único gesto memorable de la página; todo lo demás es blanco de cal, verde de olivo y fotografía, en silencio.

### Color (6 valores)

| Nombre | Hex | Papel |
|---|---|---|
| Cal | `#F7F7F4` | Fondo: blanco de pared encalada, no crema |
| Olivo noche | `#2C3120` | Texto y bloques oscuros (pie, reservas). Sustituye al «casi negro» genérico |
| Olivo | `#5E6B3A` | Botón principal, enlaces y foco |
| Arena | `#E6DDCB` | **Una sola** banda: las opiniones |
| Cielo | `#D5E0E7` | **Una sola** banda: la ubicación (el mapa sobre cielo atlántico) |
| Barro | `#A2583C` | Solo el marcador de la casa en el mapa. Ya no es el botón |

Texto secundario: `#646A58` sobre cal (5,2:1) y `#555B48` sobre arena o cielo (5,2:1). Todos los pares de texto cumplen AA.

### Tipografía

- **Fraunces** (SOFT 100): titulares en peso 340. Los títulos pequeños, en 420.
- **DM Sans**: el texto en peso 380 (el 300 se queda pálido sobre blanco). Etiquetas con información (meses, plantas): 500, en minúscula normal y color olivo, **nunca en mayúsculas**.
- **Escala** (cuarta justa, ×1,333): 14 · 17 · 22 · 30 · 40 · 54 · 68 px. El texto corrido va a 17/1,65 y las líneas tienen como máximo unos 70 caracteres.

### Composición

```
ESCRITORIO                                   MÓVIL
┌──────────────────────────────────────┐     ┌───────────────┐
│ Casa Oliari       nav       [Consultar]│     │ Casa Oliari   │
│                                      │     │   ╭───────╮   │
│  Titular grande        ╭──────────╮  │     │   │ vídeo │   │
│  (izquierda,           │          │  │     │   │ arco  │   │
│   alineado a la        │  VÍDEO   │  │     │   │       │   │
│   izquierda)           │  EN ARCO │  │     │   └───────┘   │
│  datos en línea        │          │  │     │ Titular       │
│  [Consultar] Ver fotos │          │  │     │ [Consultar]   │
│                        └──────────┘  │     └───────────────┘
├──────────────────────────────────────┤
│ foto rectangular │ texto «La casa»   │
│ 4 fotos con pie (sin tarjetas)       │
│ galería: retícula de fotos, radio 4px│
│ [banda cielo] mapa + distancias      │
│ [banda arena] 3 citas tipográficas   │
│ [olivo noche] WhatsApp grande +      │
│               lista de plataformas   │
└──────────────────────────────────────┘
```

- **Alineación:** todo a la izquierda. Solo se centra el bloque de reservas.
- **Radios con jerarquía:** el arco solo en la portada; 4 px en las fotos; píldora solo en los botones. Sin sombras, salvo el visor de fotos.

### Principios

1. **Un solo gesto, el arco**, en la portada. Al cargar, el arco se «abre» de abajo arriba: es la única animación automática de la página.
2. **Sin decoración**: sin etiquetas sobre los títulos, sin puntos medios y sin flechas en los enlaces. Los únicos iconos son los que aportan información (datos de la casa, enlace externo, WhatsApp).
3. **Estructura con significado**: las etiquetas solo aparecen cuando dicen algo («Planta baja», «Julio y agosto»).
4. **Animación solo como respuesta**: el visor, las preguntas frecuentes y los filtros se animan cuando el usuario actúa. Nada de aparecer al hacer scroll ni de hacer zoom al pasar el ratón.
5. **Texto llano** en segunda persona y en minúscula normal. El botón dice lo que hace: «Consultar disponibilidad».

### Qué cambia respecto a la versión 1, y por qué

| Antes | Ahora | Motivo |
|---|---|---|
| Fondo crema y botón terracota | Fondo de cal casi blanco y botón olivo | Era el rasgo genérico número 1; el olivo viene del jardín y del nombre |
| Etiqueta en mayúsculas sobre cada título | Sin etiqueta; solo título | Etiquetas sin información |
| Arcos en tres sitios | Arco solo en la portada | Concentrar el gesto llamativo en un solo sitio |
| Fundido en todas las secciones | Una sola animación de entrada en la portada | Animación genérica |
| Tarjetas iguales con sombra | Listas y citas tipográficas; solo el WhatsApp como bloque destacado | Plantilla de tarjetas genérica |
| Ubicación en verde oscuro | Ubicación sobre azul cielo pálido | Más ligera, relajada y propia de la costa |

## Auditoría con las Web Interface Guidelines de Vercel (versión 1)

Corregido en la versión 2:

- No había enlace para saltar al contenido.
- Los iconos decorativos no llevaban `aria-hidden`.
- Las imágenes no tenían `width` ni `height`, lo que provoca saltos al cargar.
- No había `preload` ni `fetchpriority` para la imagen de portada.
- `.chip` usaba `transition: all`.
- El visor no tenía `overscroll-behavior: contain`.
- Faltaban `touch-action: manipulation` y un color de resaltado táctil intencionado.
- Las distancias no usaban números tabulares.
- Faltaban espacios de no separación («1,2 km», «5 min»).
- El pie tenía `h4` sin `h3` previo, lo que rompe la jerarquía de títulos.
- El mapa tenía `role="img"` aunque es interactivo.
- No había `meta theme-color`.
- La marca no llevaba `translate="no"`.
- El filtro de la galería no se reflejaba en la URL.
- El selector de idioma no estaba hecho con enlaces.
- La cabecera fija podía tapar el elemento con foco.

Queda pendiente para la versión en Astro (no aplica a un prototipo estático):

- Alojar las fuentes en nuestro propio servidor y precargarlas.
- Convertir el vídeo a H.264 ligero y añadir WebM.
- Sustituir los `href="#"` por los enlaces reales.

La norma de Vercel pide mayúsculas tipo título (*Title Case*) en títulos y botones. No se aplica: en español se escribe en minúscula normal, que es además lo que pide la skill de Anthropic.

## Versión 2.1: portada (5 de noviembre de 2026)

- **Petición del cliente:** que la casa sea la protagonista de la portada, manteniendo el arco.
- **Cambio:** el vídeo del jardín (que empezaba en un olivo) se sustituye por la fachada (foto 25), recortada a 4:5 con la casa centrada y más grande (`hero-casa`, generada en `scripts/optimizar_fotos.py`).
- **Composición:** se probó un arco a 7/12 del ancho, pero el titular quedaba apretado en cinco líneas. Queda en 5/11 del ancho (texto 6/11), con el titular a 40–64 px en cuatro líneas.
- **Rendimiento:** la imagen de la portada se precarga con `imagesrcset` y `fetchpriority="high"` y tiene una versión de 1200 px (316 KB).
- **Vídeo:** de momento fuera de la página. Se puede reutilizar en «La casa» o en redes.

## Versión 2.2: vídeo en la portada

- El cliente elige el **vídeo del jardín** en el arco, frente a la foto de la fachada. La foto `hero-casa` se queda como imagen de espera (`poster`) mientras carga el vídeo.
- Pendiente para Astro: recortar el vídeo a 6–8 s y comprimirlo (H.264 + WebM, por debajo de 2 MB).
