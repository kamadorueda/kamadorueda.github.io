module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:astro/recommended",
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
    },
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        "import/no-unresolved": "off",
      },
    },
  ],
  rules: {
    "import/no-cycle": "error",
    "import/first": "error",
    "import/order": "off",
    "no-console": "error",
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["..*"],
            message: "Please use absolute imports.",
          },
          {
            group: ["*styles", "!./styles"],
            message: "Please do not import styles other than `./styles`.",
          },
        ],
      },
    ],
    "react/no-unescaped-entities": "off",
    "react/jsx-sort-props": "error",
    "react/react-in-jsx-scope": "off",
    "sort-imports": "off",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: "true",
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "jsx-a11y",
  ],
};
