/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */

const config = {
  '*.{js}': 'prettier --write',
};

export default config;
