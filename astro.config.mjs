import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://davidzomada.github.io',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
