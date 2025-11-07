module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  globals: {
    io: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-param-reassign': 'off',
    'no-return-assign': 'off',
    'import/extensions': 'off',
    'no-await-in-loop': 'off',
    'no-restricted-syntax': 'off',
    'no-use-before-define': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
