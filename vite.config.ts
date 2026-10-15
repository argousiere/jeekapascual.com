import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { markdownEntries } from '@argousiere/vespertina-design-system/vite';

export default defineConfig({
  plugins: [react(), markdownEntries()],
  resolve: { dedupe: ['react', 'react-dom'] },
  server: { fs: { allow: ['..'] } },
  optimizeDeps: { exclude: ['@argousiere/vespertina-design-system'] },
});
