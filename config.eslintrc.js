module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "prettier", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "tree-shaking"],
  rules: {
    "linebreak-style": 0,
    "react/jsx-filename-extension": 0,
    "react/prop-types": 0,
    "comma-dangle": 0,
    "react/jsx-props-no-spreading": 0,
  },
};
