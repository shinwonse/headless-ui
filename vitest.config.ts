import { defineConfig } from 'vitest/config';

import packageJson from './package.json';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    globals: true,
    name: packageJson.name,
    setupFiles: './vitest.setup.ts',
  },
});
