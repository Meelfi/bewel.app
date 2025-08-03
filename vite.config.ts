import react from '@vitejs/plugin-react';

import linaria from '@wyw-in-js/vite';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: 'PUBLIC_',
  plugins: [
    checker({
      eslint: {
        useFlatConfig: true,
        lintCommand: 'eslint .',
      },
      typescript: true,
    }),
    linaria({
      include: ['**/*.{ts,tsx}'],
      babelOptions: {
        presets: ['@babel/preset-typescript', '@babel/preset-react'],
      },
    }),
    react(),
    tsconfigPaths(),
  ],
  server: {
    open: true,
  },
});
