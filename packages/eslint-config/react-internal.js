const baseConfig = require('./base.js');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...baseConfig,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:turbo/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'prettier',
  ],
  env: {
    browser: true,
  },
};
