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
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        'leadingUnderscore': 'allow',
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
  },
};
