import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://davidzomada.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
