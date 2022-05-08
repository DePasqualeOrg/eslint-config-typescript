module.exports = {
  extends: [
    '@depasquale/eslint-config',
    'eslint-config-airbnb-typescript/base',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/lines-between-class-members': ['off'],
    'import/extensions': ['off'],
  },
};
