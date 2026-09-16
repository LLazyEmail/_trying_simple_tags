import { defineConfig } from 'tsup';

const shared = {
  entry: {
    index: 'src/index.ts',
  },
  sourcemap: true,
  minify: false,
  splitting: false,
  target: 'es2018',
  outDir: 'dist',
};

export default defineConfig([
  {
    ...shared,
    format: ['cjs', 'esm'],
    clean: true,
    dts: false,
    platform: 'neutral',
    outExtension({ format }) {
      return {
        js: format === 'cjs' ? '.cjs.js' : '.es.js',
      };
    },
  },
  {
    ...shared,
    format: ['iife'],
    clean: false,
    dts: false,
    platform: 'browser',
    globalName: 'newsletterLayoutsTypographyPlainJS',
    outExtension() {
      return { js: '.iife.js' };
    },
  },
]);
