import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import astroPlugin from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';

export default [
  { ignores: ['.astro/**', 'dist/**', 'node_modules/**'] },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js']
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: 'module'
    },
    plugins: {
      '@typescript-eslint': tseslint
    },
    rules: {
      ...tseslint.configs.recommended.rules
    }
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser
      }
    },
    plugins: {
      astro: astroPlugin
    },
    rules: {
      ...astroPlugin.configs.recommended.rules
    }
  }
];
