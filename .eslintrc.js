const path = require("path");

module.exports = {
  plugins: ["prettier"],
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    env: {
      node: true,
      commonjs: true,
    },
  },
};
