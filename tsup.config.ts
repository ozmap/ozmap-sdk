import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    splitting: false,
    sourcemap: true,
    clean: true,
    dts: true,
    target: 'es2022',
    outDir: 'dist',
    outExtension: ({ format }) => ({ js: format === 'cjs' ? '.cjs' : '.mjs' }),
    treeshake: true,
    minify: false,
  },
  {
    // CJS wrapper so `require('@ozmap/ozmap-sdk')` returns the class directly
    entry: { cjs: 'src/cjs.ts' },
    format: ['cjs'],
    splitting: false,
    sourcemap: true,
    clean: false,
    dts: false,
    target: 'es2022',
    outDir: 'dist',
    outExtension: () => ({ js: '.cjs' }),
    treeshake: true,
    minify: false,
  },
]);
