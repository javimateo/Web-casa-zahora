/**
 * Datos de la casa: el ÚNICO sitio que hay que tocar cuando el propietario confirme información.
 * Lo que está vacío o con `confirmado: false` aparece en la web con un asterisco (*) de "por confirmar".
 */
export const casa = {
  nombre: 'Casa Oliari',
  localidad: 'Zahora',
  municipio: 'Barbate',
  provincia: 'Cádiz',
  pais: 'ES',

  // Centro de la zona aproximada que se dibuja en el mapa (no se publica la ubicación exacta)
  coordenadas: { lat: 36.2056, lng: -6.0374 },

  capacidad: { huespedes: 4, dormitorios: 2, banos: 2, confirmado: false },
  distanciaPlaya: '1,2 km',

  contacto: {
    whatsapp: '', // formato internacional sin "+" ni espacios, p. ej. 34600000000
    mensajeWhatsapp: 'Hola, he visto Casa Oliari en vuestra web. Me interesa del __ al __ para __ personas.',
    email: '',
    instagram: '',
  },

  // Enlaces directos a los anuncios. Si `url` está vacía, el enlace se muestra como pendiente.
  plataformas: [
    { nombre: 'Vrbo', url: '', confirmado: false },
    { nombre: 'Airbnb', url: '', confirmado: false },
    { nombre: 'Booking', url: '', confirmado: false },
  ],

  valoracion: { nota: '', total: '', plataforma: 'Vrbo', urlOpiniones: '' },

  registro: {
    turisticoAndalucia: '', // VUT/CA/XXXXX
    unicoArrendamiento: '', // número de registro único
  },
} as const;

/** Enlace de WhatsApp con el mensaje predefinido, o '#' si aún no hay número. */
export function whatsappUrl(): string {
  const { whatsapp, mensajeWhatsapp } = casa.contacto;
  return whatsapp ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensajeWhatsapp)}` : '#';
}
