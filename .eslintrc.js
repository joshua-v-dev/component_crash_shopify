module.exports = {
  extends: [
    "plugin:shopify/react",
    "plugin:shopify/polaris",
    "plugin:shopify/jest",
    "plugin:shopify/webpack",
    "plugin:react-hooks/recommended",
  ],
  parser: "babel-eslint",
  overrides: [
    {
      files: ["*.test.*"],
      rules: {
        "shopify/jsx-no-hardcoded-content": "off",
      },
    },
  ],

  env: {
    es6: true,
  },
  rules: {
    "no-var": "error",
    semi: "error",

    "no-multi-spaces": "error",
    "space-in-parens": "error",
    "no-multiple-empty-lines": "error",
    "prefer-const": "error",
    "no-use-before-define": "error",
    "import/no-unresolved": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn", // <--- THIS IS THE NEW RULE
  },
};
