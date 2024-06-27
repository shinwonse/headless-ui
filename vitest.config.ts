import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

import packageJson from './package.json';

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': resolve(__dirname, './src') } },
  test: {
    environment: 'happy-dom',
    globals: true,
    name: packageJson.name,
    setupFiles: './vitest.setup.ts',
  },
});
