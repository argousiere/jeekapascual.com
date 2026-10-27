import { defineConfig, envField } from 'astro/config';
import react from '@astrojs/react';
import { readdirSync } from 'node:fs';
import { DATE_PREFIX } from './src/utils/entry-utils';

const collectionRedirects = Object.fromEntries(
  ['art', 'writing'].flatMap((collection) =>
    readdirSync(`./content/${collection}`).map((file) => {
      const slug = file
        .replace(/\.md$/, '')
        .replace(DATE_PREFIX, '');

      return [`/${slug}`, `/${collection}/${slug}/`];
    })
  )
);

export default defineConfig({
  site: 'https://jeekapascual.com',
  integrations: [react()],
  redirects: collectionRedirects,
  env: {
    schema: {
      IMAGES_URL: envField.string({ context: 'server', access: 'public' }),
    },
  },
  vite: {
    server: { fs: { allow: ['..'] } },
  },
});
