import { defineConfig, envField } from 'astro/config';
import react from '@astrojs/react';
import { readdirSync } from 'node:fs';

const artRedirects = Object.fromEntries(
  readdirSync('./content/art').map((file) => {
    const slug = file
      .replace(/\.md$/, '')
      .replace(/^\d{4}-\d{2}-\d{2}-/, '');

    return [`/${slug}`, `/art/${slug}/`];
  })
);

export default defineConfig({
  site: 'https://jeekapascual.com',
  integrations: [react()],
  redirects: artRedirects,
  env: {
    schema: {
      IMAGES_URL: envField.string({ context: 'server', access: 'public' }),
    },
  },
  vite: {
    server: { fs: { allow: ['..'] } },
  },
});
