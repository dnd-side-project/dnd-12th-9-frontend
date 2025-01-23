const baseConfig = require('./base.js');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...baseConfig,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
    'prettier',
    'next',
    'next/core-web-vitals',
    'turbo',
  ],
  env: {
    node: true,
    browser: true,
  },
};
