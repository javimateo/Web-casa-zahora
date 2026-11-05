// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Dominio provisional: cambiarlo por el definitivo antes de publicar
  site: 'https://www.casaoliari.com',
  integrations: [sitemap()],
  i18n: {
    locales: ['es', 'en', 'de'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
});
