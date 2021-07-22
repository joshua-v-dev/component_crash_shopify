module.exports = {
  extends: [
    "plugin:shopify/react",
    "plugin:shopify/polaris",
    "plugin:shopify/jest",
    "plugin:shopify/webpack",
  ],
  rules: {
    "import/no-unresolved": "off",
  },
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
    indent: "error",
    "no-multi-spaces": "error",
    "space-in-parens": "error",
    "no-multiple-empty-lines": "error",
    "prefer-const": "error",
    "no-use-before-define": "error",
  },
};
