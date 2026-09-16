// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import jsonPlugin from 'eslint-plugin-json';
import prettierConfig from 'eslint-config-prettier';
// import tseslint from 'typescript-eslint'; // uncomment once .ts files land

export default [
  {
    ignores: [      'node_modules/**',
      'dist/**',
      'coverage/**',
      'tests/**',
      'tsup.config.js',
      'vitest.config.ts',
      'package-lock.json',],
  },
  js.configs.recommended,
  {
    files: ['src/**/*.js', 'tests/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { ...globals.node },
    },
    rules: {
      // carry over any custom rules from your old .eslintrc here
    },
  },
  {
    files: ['tests/**/*.test.js'],
    languageOptions: {
      globals: {         console: 'readonly',
        process: 'readonly',
        window: 'readonly',
        document: 'readonly', }, // swap for vitest globals if you migrate the test runner too
    },
  },
  {
    files: ['**/*.json'],
    plugins: { json: jsonPlugin },
    rules: jsonPlugin.configs.recommended.rules,
  },
  // ...tseslint.configs.recommended,  // uncomment for TS
  prettierConfig, // must stay last — turns off stylistic rules that fight Prettier
];
