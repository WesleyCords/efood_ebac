import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

import reactRecommended, {
  languageOptions,
} from "eslint-plugin-react/configs/recommended.js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  // Configs globais
  {
    ignores: ["node_modules", "dist", "build"],
  },
  // Configs base TS e JS
  js.configs.recommended,
  ...tseslint.configs.recommended,
  // configs para React
  {
    // quais arquivos
    files: ["**/*.{ts.tsx}"],
    ...reactRecommended, // regras recomendadas para React
    settings: {
      react: {
        version: "detect", // detecta a versão do React
      },
    },
    languageOptions: {
      ...reactRecommended.languageOptions,
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules, // regras recomendadas para hooks
      "react-refresh/only-export-components": "warn", // alerta para componentes que não são exportados
    },
  },
  eslintConfigPrettier, // Configs para Prettier
];
