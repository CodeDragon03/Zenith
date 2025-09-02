import js from '@eslint/js';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import eslintTypescriptParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import turboConfig from 'eslint-config-turbo/flat';
import turboEslintPlugin from 'eslint-plugin-turbo';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */

export default [
  ...turboConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  {
    parser: eslintTypescriptParser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },

  {
    plugins: {
      turbo: turboEslintPlugin,
      '@typescript-eslint': typescriptEslintPlugin,
    },
    extends: ['plugin:@typescript-eslint/recommended'],
    rules: {
      'import/order': 'on',
      'turbo/no-undeclared-env-vars': 'warn',
      '@typescript-eslint/consistent-type-imports': 'error',
      'no-console': 'error',
    },
  },

  {
    ignores: ['dist/**'],
  },
];
