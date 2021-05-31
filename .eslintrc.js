module.exports = {
  extends: 'eslint-config-egg/typescript',
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    project: "./tsconfig.json",
    ecmaVersion: 2020
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-uses-vars': 'error',
    'generator-star-spacing': 'off',
    'babel/generator-star-spacing': 'off',
    "jsdoc/check-tag-names": 'off',
    "jsdoc/check-param-names": 'off',
    "no-undef": 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state', 'ctx'],
      },
    ],
  },
};