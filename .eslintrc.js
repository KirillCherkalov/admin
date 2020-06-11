module.exports = {
  root: true,
  env: {
    jest: true,
    es6: true,
    browser: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-filename-extension': 'off',
    'react/static-property-placement': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'implicit-arrow-linebreak': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelAttributes: ['label'],
        controlComponents: ['Field'],
        depth: 3,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
