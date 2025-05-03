import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

import packageJson from './package.json';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    name: packageJson.name,
    globals: true,
    coverage: {
      provider: 'istanbul',
    },
    environment: 'happy-dom',
    setupFiles: 'vitest.setup.ts',
  },
});
