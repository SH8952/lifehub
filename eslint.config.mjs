import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextCoreWebVitals,
  {
    ignores: ["_backups/**", ".next/**", "node_modules/**", "_to_delete/**"],
  },
];

export default eslintConfig;
