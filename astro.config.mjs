import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://jeekapascual.com',
  integrations: [react()],
  vite: {
    server: { fs: { allow: ['..'] } },
  },
});
