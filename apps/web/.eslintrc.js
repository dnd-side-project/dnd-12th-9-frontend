/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@sbooky/eslint-config/next-js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
};
