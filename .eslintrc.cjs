module.exports = {
  extends: ["eslint:recommended", "plugin:node/recommended", "prettier"],
  parserOptions: {
    sourceType: "module",
    module: "esnext",
    ecmaVersion: 2020,
    env: {
      node: true,
    },
  },
};
