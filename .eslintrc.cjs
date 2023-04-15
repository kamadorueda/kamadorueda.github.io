module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:fp/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
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
  rules: {
    "better-styled-components/sort-declarations-alphabetically": "error",
    "import/no-cycle": "error",
    "import/first": "error",
    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: "~/**",
            group: "internal",
          },
        ],
        alphabetize: { order: "asc", orderImportKind: "asc" },
        groups: [],
        "newlines-between": "never",
      },
    ],
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
    "better-styled-components",
    "fp",
    "import",
    "jsx-a11y",
    "sort-keys-fix",
  ],
};
