import config from '@repo/eslint-config/react-internal';
import path from 'path';
import { fileURLToPath } from 'url';

/** @type {import("eslint").Linter.Config} */
export default [
  ...config,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: path.dirname(fileURLToPath(import.meta.url)),
        project: './tsconfig.json',
      },
    },
  },
];
