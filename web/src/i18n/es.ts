/**
 * Textos de la web en español. Para traducir, copiar este archivo a en.ts / de.ts y cambiar los textos.
 * Convención: un texto que termina en "*" se muestra con el asterisco de "dato por confirmar".
 */
export const es = {
  lang: 'es',
  meta: {
    title: 'Casa Oliari, casa con jardín en Zahora junto al Cabo de Trafalgar',
    description:
      'Casa vacacional con jardín vallado, terraza y chimenea en Zahora (Barbate, Cádiz), a un paseo de la playa y a cinco minutos del Cabo de Trafalgar.',
  },
  ui: {
    skip: 'Saltar al contenido',
    navPrincipal: 'Principal',
    navIdioma: 'Idioma',
    consultar: 'Consultar disponibilidad',
    consultarCorto: 'Disponibilidad',
    verFotos: 'Ver las fotos',
    pausar: 'Pausar el vídeo',
    reproducir: 'Reproducir el vídeo',
    escribirWhatsapp: 'Escribir por WhatsApp',
    nuevaPestana: '(se abre en una pestaña nueva)',
    porConfirmar: 'dato por confirmar',
    notaPorConfirmar: 'Dato pendiente de confirmar.',
    visor: 'Visor de fotos',
    cerrar: 'Cerrar el visor',
    anterior: 'Foto anterior',
    siguiente: 'Foto siguiente',
    de: 'de',
  },
  nav: [
    { href: '#casa', label: 'La casa' },
    { href: '#galeria', label: 'Fotos' },
    { href: '#ubicacion', label: 'Ubicación' },
    { href: '#zona', label: 'La zona' },
    { href: '#opiniones', label: 'Opiniones' },
    { href: '#faq', label: 'Preguntas' },
  ],

  hero: {
    titulo: 'Una casa con jardín entre olivos, a un paseo de las playas de Zahora',
    lead: 'Casa andaluza encalada junto al Cabo de Trafalgar, en Cádiz. Para bajar el ritmo en cualquier época del año.',
    datosLabel: 'La casa en cifras',
    huespedes: 'huéspedes',
    dormitorios: 'dormitorios',
    banos: 'baños',
    jardin: 'Jardín vallado',
    playa: 'Playa a',
    videoAlt: 'Vídeo: el jardín con olivos y la fachada de la casa',
  },

  intro: {
    titulo: 'Una casa para bajar el ritmo',
    lead: 'Una casa encalada de dos plantas, rodeada de un jardín vallado con olivos, césped y buganvillas.',
    parrafos: [
      'Por la mañana, café bajo la pérgola. Por la tarde, un paseo hasta la playa. Por la noche, cena en el jardín o junto a la chimenea.',
      'Está en el borde de Zahora, entre Los Caños de Meca y El Palmar: una zona tranquila de casas bajas, caminos de arena y pinares.',
    ],
    foto: { src: 'jardin-hamaca', alt: 'Hamaca colgada de un olivo en el jardín', pie: 'La hamaca, entre los olivos del jardín.' },
  },

  highlights: {
    label: 'Lo mejor de la casa',
    items: [
      { foto: 'jardin-olivos', alt: 'Jardín con césped y olivos', titulo: 'Un jardín solo para ti', texto: 'Vallado, con césped y olivos. Los niños juegan y tú descansas.' },
      { foto: 'terraza-pergola', alt: 'Terraza bajo la pérgola con mesa de madera', titulo: 'Vida al aire libre', texto: 'Pérgola con buganvillas, comedor exterior, tumbonas y barbacoa.' },
      { foto: 'salon-chimenea', alt: 'Chimenea de ladrillo en el salón', titulo: 'Chimenea para el invierno', texto: 'Las noches de otoño e invierno, cuando Zahora está tranquila.' },
      { foto: 'playa-arena', alt: 'Playa de arena dorada al amanecer', titulo: 'La playa, andando', texto: 'La Mangueta está a 1,2 km. El faro de Trafalgar, a 5 minutos en coche.' },
    ],
  },

  galeria: {
    titulo: 'Rincón a rincón',
    filtrosLabel: 'Filtrar fotos por espacio',
    filtros: [
      { id: 'todo', label: 'Todas' },
      { id: 'exterior', label: 'Exterior' },
      { id: 'salon', label: 'Salón' },
      { id: 'cocina', label: 'Cocina' },
      { id: 'banos', label: 'Baños' },
      { id: 'entorno', label: 'Entorno' },
    ],
    verTodas: 'Ver las {n} fotos',
    nota: 'Pronto añadiremos fotos de los dormitorios.',
    // forma: '' | 'wide' | 'tall' | 'big'.  extra: se oculta hasta pulsar "ver todas"
    fotos: [
      { foto: 'fachada-jardin', alt: 'Fachada encalada y jardín', cat: 'exterior', forma: 'big' },
      { foto: 'desayuno-terraza', alt: 'Desayuno en la terraza', cat: 'exterior', forma: 'tall' },
      { foto: 'entrada-cartel', alt: 'Entrada con el cartel de Casa Oliari', cat: 'exterior' },
      { foto: 'salon-sofa', alt: 'Salón con sofá y escalera', cat: 'salon', forma: 'wide' },
      { foto: 'pergola-buganvilla', alt: 'Pérgola con buganvilla en flor', cat: 'exterior' },
      { foto: 'cocina', alt: 'Cocina equipada', cat: 'cocina' },
      { foto: 'vista-dron', alt: 'Vista aérea de la casa y su jardín', cat: 'exterior', forma: 'wide' },
      { foto: 'terraza-tumbonas', alt: 'Terraza con tumbonas', cat: 'exterior' },
      { foto: 'dunas-pasarela', alt: 'Pasarela de madera entre dunas', cat: 'entorno', forma: 'wide' },
      { foto: 'jardin-cesped', alt: 'Césped y olivos del jardín', cat: 'exterior', extra: true },
      { foto: 'mesa-terraza', alt: 'Mesa de la terraza con fruta y vino', cat: 'exterior', extra: true },
      { foto: 'terraza-sombra', alt: 'Terraza cubierta con tumbonas', cat: 'exterior', forma: 'wide', extra: true },
      { foto: 'jardin-camino', alt: 'Camino de entrada por el jardín', cat: 'exterior', extra: true },
      { foto: 'jardin-hamaca', alt: 'Hamaca en el olivo', cat: 'exterior', extra: true },
      { foto: 'fachada-jardin-vertical', alt: 'Fachada y césped', cat: 'exterior', forma: 'tall', extra: true },
      { foto: 'salon-ventana', alt: 'Salón con ventana', cat: 'salon', extra: true },
      { foto: 'salon-chimenea', alt: 'Chimenea del salón', cat: 'salon', extra: true },
      { foto: 'cocina-comedor', alt: 'Cocina abierta al comedor', cat: 'cocina', extra: true },
      { foto: 'bano-ducha', alt: 'Baño con ducha', cat: 'banos', forma: 'tall', extra: true },
      { foto: 'bano-banera', alt: 'Baño con bañera', cat: 'banos', forma: 'tall', extra: true },
      { foto: 'playa-arena', alt: 'Playa de arena dorada', cat: 'entorno', forma: 'wide', extra: true },
      { foto: 'playa-atardecer', alt: 'Playa al atardecer con un pueblo blanco al fondo', cat: 'entorno', extra: true },
      { foto: 'atardecer', alt: 'Atardecer sobre las dunas', cat: 'entorno', extra: true },
    ],
  },

  equipamiento: {
    titulo: 'Todo lo necesario, nada de más',
    grupos: [
      { titulo: 'Exterior', items: ['Jardín vallado con césped', 'Terraza cubierta y pérgola', 'Comedor exterior', 'Tumbonas', 'Barbacoa'] },
      { titulo: 'Confort', items: ['Aire acondicionado', 'Chimenea', 'Wi-Fi', 'Ropa de cama y toallas*'] },
      { titulo: 'Cocina', items: ['Cocina equipada', 'Lavadora', 'Frigorífico', 'Cafetera*'] },
      { titulo: 'Familias', items: ['Jardín seguro para niños', 'Cuna y trona*', 'Mascotas*', 'Aparcamiento*'] },
    ],
    plantas: [
      { titulo: 'Planta baja', estancias: [['Salón', 'Chimenea y sofá cama*'], ['Cocina', 'Abierta al comedor'], ['Aseo', 'Con ducha']] },
      { titulo: 'Planta alta', estancias: [['Dormitorio 1', 'Cama doble*'], ['Dormitorio 2', 'Dos camas individuales*'], ['Baño', 'Completo, con bañera*']] },
    ],
  },

  ubicacion: {
    titulo: 'Entre pinares y el Atlántico',
    lead: 'Zahora es uno de los rincones menos urbanizados de la Costa de la Luz: casas bajas, caminos de arena y el mar a un paseo.',
    mapaLabel: 'Mapa interactivo de Zahora con la zona de la casa y los lugares cercanos',
    grupos: [
      { titulo: 'A pie', items: [['Playa de La Mangueta', '15 min'], ['Playa de Zahora', 'XX min*']] },
      { titulo: 'En coche', items: [['Faro de Trafalgar', '5 min'], ['Los Caños de Meca', '5 min'], ['El Palmar', '10–15 min'], ['Barbate', '15 min'], ['Vejer de la Frontera', '20 min']] },
      { titulo: 'Desde el aeropuerto', items: [['Jerez', '1 h 10 min'], ['Sevilla', '2 h']] },
    ],
    nota: 'Te recomendamos venir en coche: las playas y los pueblos están repartidos por la costa.',
    comoLlegar: 'Cómo llegar a la casa',
    lugares: [
      { nombre: 'Faro de Trafalgar', lat: 36.183, lng: -6.0353, dir: 'bottom' },
      { nombre: 'Los Caños de Meca', lat: 36.1866, lng: -6.016, dir: 'right' },
      { nombre: 'El Palmar', lat: 36.235, lng: -6.07, dir: 'left' },
      { nombre: 'Vejer de la Frontera', lat: 36.2526, lng: -5.9668, dir: 'top' },
      { nombre: 'Barbate', lat: 36.1917, lng: -5.922, dir: 'top' },
    ],
  },

  zona: {
    titulo: 'Qué hacer cerca',
    lead: 'Playas salvajes, dunas, pinares y pueblos blancos. Y en primavera, el atún rojo de almadraba de Barbate.',
    items: [
      { foto: 'playa-arena', alt: 'Playa de arena junto al mar', titulo: 'Playas', texto: 'La Mangueta, Zahora, la playa del Faro y las calas de Los Caños.' },
      { foto: 'dunas-pasarela', alt: 'Pasarela entre dunas con flores amarillas', titulo: 'Naturaleza', texto: 'Dunas, el pinar y los acantilados del Parque Natural de La Breña.' },
      { foto: 'atardecer', alt: 'Cielo naranja al atardecer', titulo: 'Atardeceres', texto: 'El sol se pone sobre el Atlántico, con el faro de Trafalgar a contraluz.' },
    ],
    guia: 'Leer la guía de la zona: Vejer, Barbate, Bolonia y dónde comer',
  },

  temporadas: {
    titulo: 'Zahora, todo el año',
    items: [
      { foto: 'terraza-tumbonas', alt: 'Terraza al sol con tumbonas', cuando: 'Julio y agosto', titulo: 'Verano de playa', texto: 'Días largos, chiringuitos al atardecer y noches en el jardín. Es temporada alta: reserva con antelación.' },
      { foto: 'pergola-buganvilla', alt: 'Buganvilla en flor sobre la pérgola', cuando: 'Mayo, junio, septiembre y octubre', titulo: 'La mejor época', texto: 'Buen tiempo, playas tranquilas, el mar todavía templado y la temporada del atún de almadraba.' },
      { foto: 'salon-chimenea', alt: 'Chimenea del salón', cuando: 'De noviembre a abril', titulo: 'Invierno suave', texto: 'Surf en El Palmar, rutas por La Breña y tardes junto a la chimenea. Ideal para estancias largas.' },
    ],
    levanteTitulo: 'Sobre el levante.',
    levante: 'Algunos días sopla fuerte el viento de levante, que forma parte del carácter de la zona. Esos días son buenos para el kite, para las playas más resguardadas o para una tarde tranquila en el jardín.',
  },

  opiniones: {
    titulo: 'Huéspedes que repiten',
    // Sustituir por reseñas reales, citadas con permiso
    items: [
      { texto: '«Aquí irá una reseña real de un huésped, citada con su permiso.»', autor: 'Nombre, país, mes y año*' },
      { texto: '«Aquí irá una segunda reseña real, mejor si habla del jardín o de la ubicación.»', autor: 'Nombre, país, mes y año*' },
      { texto: '«Y una tercera, por ejemplo de la familia que repite cada verano.»', autor: 'Nombre, país, mes y año*' },
    ],
    resumen: 'de 5 en {total} opiniones de {plataforma}',
    leerTodas: 'Leer todas las opiniones',
  },

  faq: {
    titulo: 'Antes de reservar',
    items: [
      { p: '¿A qué hora es la entrada y la salida?', r: 'Pendiente de confirmar con el propietario*' },
      { p: '¿Se admiten mascotas?', r: 'Pendiente de confirmar*' },
      { p: '¿Hay aparcamiento?', r: 'Pendiente de confirmar*' },
      { p: '¿Necesito coche?', r: 'Es muy recomendable. Zahora es una zona dispersa, y las playas, los pueblos y los restaurantes están repartidos por la costa.' },
      { p: '¿Hay cuna y trona para bebés?', r: 'Pendiente de confirmar*' },
      { p: '¿Cuál es la estancia mínima?', r: 'Depende de la temporada. Consulta la disponibilidad o escríbenos*' },
      { p: '¿Cómo es el viento en Zahora?', r: 'Se alternan el poniente, suave y fresco, y el levante, más fuerte. Los días de levante, las playas más resguardadas y el jardín son el mejor plan.' },
    ],
  },

  reservar: {
    titulo: 'Consulta la disponibilidad',
    lead: 'Escríbenos con tus fechas y el número de personas, o reserva en la plataforma que prefieras.',
    directo: 'Te contesta directamente el propietario.',
    plataformasLabel: 'Plataformas de reserva',
    sinPublicar: 'Si la casa está publicada*',
    opiniones: '{total} opiniones*',
    nota: 'La reserva y el pago se hacen en la plataforma o directamente con el propietario, no en esta web.',
    foto: { src: 'fachada-sombra', alt: 'La casa a la sombra de los olivos' },
  },

  pie: {
    descripcion: 'Casa vacacional en Zahora, Barbate (Cádiz).',
    columnas: [
      { titulo: 'La casa', enlaces: [['#casa', 'La casa'], ['#galeria', 'Fotos'], ['#equipamiento', 'Equipamiento'], ['#reservar', 'Reservar']] },
      { titulo: 'Zahora', enlaces: [['#ubicacion', 'Ubicación'], ['#', 'Cómo llegar'], ['#', 'Guía de la zona']] },
    ],
    contacto: 'Contacto',
    registroTuristico: 'Registro turístico de Andalucía',
    registroUnico: 'Número de registro único de arrendamiento',
    legal: [['#', 'Aviso legal'], ['#', 'privacidad'], ['#', 'cookies']],
  },
};

export type Textos = typeof es;
