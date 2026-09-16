import js from '@eslint/js';
import json from 'eslint-plugin-json';

export default [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'coverage/**',
      'tests/**',
      'tsup.config.js',
      'vitest.config.ts',
      'package-lock.json',
    ],
  },
  js.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        window: 'readonly',
        document: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'off',
      'no-useless-escape': 'off',
      camelcase: 'warn',
      'max-len': ['error', { code: 850 }],
    },
  },
  {
    files: ['*.json', '.github/**/*.json'],
    ...json.configs.recommended,
  },
];
