import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import turboPlugin from 'eslint-plugin-turbo';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import storybookPlugin from 'eslint-plugin-storybook';
import tanstackQueryPlugin from '@tanstack/eslint-plugin-query';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export default tseslint.configs(
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  tseslint.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  {
    plugins: {
      turbo: turboPlugin,
      storybook: storybookPlugin,
      tanstackQuery: tanstackQueryPlugin,
      import: importPlugin,
    },

    rules: {
      'turbo/no-undeclared-env-vars': 'warn',

      'import/no-unresolved': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'unused-imports/no-unused-imports': 'error',

      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/destructuring-assignment': ['warn', 'always', { destructureInSignature: 'always' }],
      'react/jsx-curly-brace-presence': [
        'warn',
        { props: 'never', children: 'never', propElementValues: 'always' },
      ],
      'react/jsx-tag-spacing': 1,

      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'sibling'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
            },
            {
              pattern: './*',
              group: 'sibling',
            },
          ],
          distinctGroup: false,
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
        },
      ],
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript],
  },
  {
    ignores: ['dist/**'],
  }
);
