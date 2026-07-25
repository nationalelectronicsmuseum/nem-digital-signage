import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  { ignores: ["dist", ".venv"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: { react: { version: "19.0" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.flatConfigs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react/prop-types": "off",
      // Captions are burned into the video files by the content creator, and
      // the looping section audio is a silent speaker-warming workaround, so
      // the <track>/captions requirement doesn't apply here.
      "jsx-a11y/media-has-caption": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  {
    // Context files intentionally export their provider component alongside
    // the matching consumer hooks (the standard React context pattern), which
    // the Fast Refresh rule cannot represent.
    files: ["src/context/**/*.{js,jsx}"],
    rules: { "react-refresh/only-export-components": "off" },
  },
];
