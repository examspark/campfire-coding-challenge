import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import pluginImport from "eslint-plugin-import";
import globals from "globals";
import tseslint from "typescript-eslint";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  { files: ["*.{js,mjs,cjs,ts}"] },
  { ignores: ["**/dist"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...compat.extends("plugin:react-hooks/recommended"),
  ...tseslint.configs.recommended,
  {
    plugins: {
      import: pluginImport,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      "import/order": [
        "error",
        {
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
        },
      ],
    },
  },
];
