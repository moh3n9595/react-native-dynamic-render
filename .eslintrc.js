module.exports = {
  env: {
    browser: true,
    commonjs: false,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    "arrow-body-style": 2,
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "prefer-const": 1,
    "@typescript-eslint/ban-ts-ignore": 0
  }
};