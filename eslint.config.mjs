import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    ignores: ['dist/**', 'node_modules/**'],
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'no-unused-vars': ['warn'],
      'no-console': 'off',
    },
  },
]);
