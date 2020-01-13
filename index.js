module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  env: {
    es6: true,
    node: true,
    jest: true
  },
  globals: {
    expect: true
  },
  rules: {
    camelcase: 0,
    "no-console": 0,
    "no-var": 1,
    "prefer-const": 1,
    "prettier/prettier": "error",
    "no-empty": ["error", { allowEmptyCatch: true }],
    "no-unused-vars": [
      "error",
      { vars: "all", args: "none", ignoreRestSiblings: true }
    ],
    "node/no-deprecated-api": 0
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"]
};
