import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';

export default defineConfig({
  site: 'https://jipsy-danger.github.io',
  base: '/geo-tag',
  integrations: [solid()],
});
