import { mergeConfig } from 'vite';
import { defineConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/tests/setupTests.ts',

      coverage: {
        enabled: true,
        provider: 'c8',
        reporter: ['text'],
        all: true,
        exclude: [...configDefaults.exclude, 'server.ts', '**/src/types'],
      },
    },
  })
);
