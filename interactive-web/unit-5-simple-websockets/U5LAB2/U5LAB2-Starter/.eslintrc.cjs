module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  globals: {
    io: true,
    createMessage: true,
    registerUser: true,
    getUser: true,
    resetNewMessageForm: true,
  },
  rules: {
    'import/extensions': ['off'],
    'no-param-reassign': ['off'],
    'no-use-before-define': ['off'],
    'no-shadow': ['off'],
  },
};
