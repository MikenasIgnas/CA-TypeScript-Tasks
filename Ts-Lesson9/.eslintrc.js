module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-lone-blocks': 0,
    'array-callback-return': 0,
    'max-len': ['error', { code: 250 }]
  }
}
