const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ['@typescript-eslint', 'import', 'react-refresh'],
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: ['external', 'builtin', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: 'next/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@sbooky/**',
            group: 'internal',
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
        pathGroupsExcludedImportTypes: ['react', 'react-dom', 'next'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'import/no-cycle': [
      'error',
      {
        maxDepth: Infinity,
        ignoreExternal: true,
      },
    ],
    'import/no-unresolved': 'off',

    'no-undef': 'off',
    'no-redeclare': 'off',
    'no-duplicate-imports': 'error',
    'no-unused-vars': 'off',

    '@typescript-eslint/no-unused-vars': 'warn',

    'react/jsx-tag-spacing': 1,
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/destructuring-assignment': ['warn', 'always', { destructureInSignature: 'always' }],
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
};
