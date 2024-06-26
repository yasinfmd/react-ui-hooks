module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    "eslint:recommended",
    "plugin:jest/recommended",
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:eslint-comments/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'jest'
  ],
  rules: {
    'jsx-a11y/mouse-events-have-key-events':'off',
    '@typescript-eslint/ban-ts-comment':"off",
    "jsx-a11y/no-autofocus":"off",
    "@typescript-eslint/no-empty-function":"off",
    "jsx-a11y/label-has-associated-control":"off",
    "jsx-a11y/tabindex-no-positive":"off",
    "jsx-a11y/no-noninteractive-element-interactions":"off",
    "react-hooks/exhaustive-deps":"off",
    "@typescript-eslint/no-explicit-any":"off",
    "jest/no-commented-out-tests":"off",
    "jest/no-conditional-expect":"off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/react-in-jsx-scope":"off",
    "@typescript-eslint/no-namespace": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    quotes: [
      "error",
      "single",
    ],
    semi: [
      "error",
      "never",
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
      webpack: {
      },
      typescript: {}
    },
    react: {
      version: 'detect',
    },
    jest: {
      version: '27',
    },
  },
};
