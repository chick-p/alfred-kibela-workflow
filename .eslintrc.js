module.exports = {
  extends: ["eslint:recommended", "plugin:node/recommended", "prettier"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    env: {
      node: true,
      commonjs: true,
    },
  },
};
