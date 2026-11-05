import type { ImageMetadata } from 'astro';

const fotos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.jpg', { eager: true });

/** Devuelve la foto de src/assets/fotos/<nombre>.jpg (falla al compilar si no existe). */
export function foto(nombre: string): ImageMetadata {
  const m = fotos[`../assets/fotos/${nombre}.jpg`];
  if (!m) throw new Error(`No existe la foto "${nombre}" en src/assets/fotos`);
  return m.default;
}

/** Separa el asterisco final de "por confirmar": 'Cuna*' -> { texto: 'Cuna', tbc: true } */
export function tbc(valor: string): { texto: string; tbc: boolean } {
  return valor.endsWith('*') ? { texto: valor.slice(0, -1), tbc: true } : { texto: valor, tbc: false };
}
