module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  plugins: ['type-graphql'],
  extends: ['standard-with-typescript', 'plugin:type-graphql/recommended'],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
  }
}
