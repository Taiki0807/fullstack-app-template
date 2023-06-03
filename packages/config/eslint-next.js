module.exports = {
  $schema: "https://json.schemastore.org/eslintrc",
  extends: [
    "next/core-web-vitals",
    "prettier",
    "plugin:tailwindcss/recommended",
  ],
  plugins: ["tailwindcss"],
  rules: { "@next/next/no-img-element": "off" },
  settings: {
    tailwindcss: { callees: ["cn"], config: "tailwind.config.js" },
    next: { rootDir: true },
  },
  overrides: [
    { files: ["*.ts", "*.tsx"], parser: "@typescript-eslint/parser" },
  ],
};
