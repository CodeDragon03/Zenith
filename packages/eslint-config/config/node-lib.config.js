import globals from 'globals';
import baseConfig from './base.config.js';
import eslintPluginNode from './eslint-plugin-node';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 */

export default [
  ...baseConfig,
  {
    globals: {
      ...globals.serviceworker,
      ...globals.browser,
      ...globals.node,
    },
    files: ['**/*.js', '**/*.ts', '**/*.mjs'],
    plugins: {
      node: eslintPluginNode,
    },
    extends: ['plugin:node/recommended'],
    rules: {
      'node/no-unpublished-import': 'off',
      'node/no-unpublished-require': 'off',
    },
  },
];
