import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsEsLint from 'typescript-eslint';
import tsEsLintParser from '@typescript-eslint/parser';
import pluginPromise from 'eslint-plugin-promise';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import perfectionist from 'eslint-plugin-perfectionist';

export default tsEsLint.config(
  {
    extends: [
      js.configs.recommended,
      ...tsEsLint.configs.recommended,
      ...tsEsLint.configs.strictTypeChecked,
      ...tsEsLint.configs.stylisticTypeChecked,
      pluginPromise.configs['flat/recommended'],
      importPlugin.flatConfigs.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      parser: tsEsLintParser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: globals.browser,
    },
    plugins: {
      perfectionist,
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          customGroups: {
            type: {
              react: 'react',
            },
            value: {
              react: ['react', 'react-*'],
            },
          },
          groups: [
            'type',
            'react',
            ['builtin', 'external'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'side-effect',
            'style',
            'object',
            'unknown',
          ],
          newlinesBetween: 'always',
          order: 'asc',
          type: 'natural',
        },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: ['./tsconfig.json'],
        },
      },
      react: {
        version: 'detect',
      },
    },
  },
  // This config must be the last one
  eslintPluginPrettierRecommended,
);
