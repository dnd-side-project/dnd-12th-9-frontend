import path from 'path';
import { fileURLToPath } from 'url';
import nextJsConfig from '@repo/eslint-configs';

/** @type {import("eslint").Linter.Config} */
export default [
  ...nextJsConfig,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: path.dirname(fileURLToPath(import.meta.url)),
        project: './tsconfig.json',
      },
    },
  },
];
